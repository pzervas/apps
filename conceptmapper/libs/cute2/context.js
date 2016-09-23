/*  $Id$	-*- mode: javascript -*-
 *  
 *  File	context.src
 *  Part of	Cute
 *  Author	Anjo Anjewierden, a.a.anjewierden@utwente.nl
 *  Purpose	Custom implementation of context to take care of transformations
 *  Works with	ECMAScript 5.1
 *  
 *  Notice	Copyright (c) 2014  University of Twente
 *  
 *  History	19/04/14  (Created)
 *  		19/05/14  (Last modified)
 */


/*------------------------------------------------------------
 *  Directives
 *------------------------------------------------------------*/
/*  Use with gcc -E -x c -P -C *.h > *.js 
 */





"use strict";

/*------------------------------------------------------------
 *  Low-level drawing routines
 *------------------------------------------------------------*/

(function() {
    var cute = this.cute;
    var rnd = Math.round;
    var c = ', ';

    /**
     *  A Context is a wrapper around a CanvasRenderingContext and has the
     *  same methods.  Attributes are also represented as methods.
     *
     *  @constructor
     *  @param {CanvasRenderingContext2D} Original context.
     *  @returns {Context} For canvas drawing.
     */
    var Context = cute.Context = function(context, canvas) {
        var ctx = this;

        ctx._ctx = context;
        ctx._canvas = canvas;
        ctx._dummy = false;

        ctx._debug = false;

        ctx._plane = null;
        ctx._planes = [];

        ctx._translate_stack = [{x: 0, y:0}];

        return ctx;
    };

    Context.prototype.dummy = function(v0) { if (v0 === undefined) return this._dummy; this._dummy = v0; return this; };
    Context.prototype.debug = function(v0) { if (v0 === undefined) return this._debug; this._debug = v0; return this; };

    Context.prototype.debug_pp = function() {
        var ctx = this;
        console.log('Planes ' + ctx._planes.length);
        console.log('Stack  ' + ctx._translate_stack.length);
    };

    Context.prototype.stack_translate = function(x0, y0) {
        var x = x0 + this._translate_stack[0].x;
        var y = y0 + this._translate_stack[0].y;

        this._translate_stack[0] = {x: x, y: y};
        if (this._debug) 'Translate ' + x0 + ' ' + y0 + ' -> ' + x + ' ' + y;

        return this;
    }

    Context.prototype.stack_save = function() {
        var x = this._translate_stack[0].x;
        var y = this._translate_stack[0].y;

        this._translate_stack.unshift({x: x, y: y});
        if (this._debug) 'Save -> ' + x + ' ' + y;

        return this;
    }

    Context.prototype.stack_restore = function() {
        this._translate_stack.shift();

        var x = this._translate_stack[0].x;
        var y = this._translate_stack[0].y;

        if (this._debug) 'Restore -> ' + x + ' ' + y;

        return this;
    }

    Context.prototype.push_plane = function(plane) {
        var ctx = this;

        if (this._debug) console.log('.push_plane ' + plane);

        ctx._planes.push(plane);
        ctx._plane = plane;

        return ctx;
    };

    Context.prototype.pop_plane = function() {
        var ctx = this;

        if (this._debug) console.log('.pop_plahe ');

        ctx._planes.pop();

        var len = ctx._planes.length;

        ctx._plane = (len > 0 ? ctx._planes[len-1] : null);

        return ctx;
    };

    Context.prototype.start_parts = function(dr) {
        var ctx = this;

        ctx._drawable = dr;

        if (this._debug) console.log('.start_parts ' + dr);

        dr.clear_parts();

        return ctx;
    };

    Context.prototype.end_parts = function(dr) {
        var ctx = this;

        ctx._drawable = null;

        if (this._debug) console.log('.end_parts ' + dr);

        return ctx;
    };

    /**
     *  See the MDN or Apple documentation for the basic methods.
     *  The wrappers below are in alphabetical order.
     */
    Context.prototype.arc = function(x, y, radius, start, end, counter) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._debug) console.log('.arc ' + x + c + y + c + radius + c + geo.degrees(start) + c + geo.degrees(end));


        if (ctx._plane) {
            var pl = ctx._plane;
            var xy = pl.txy(x, y);
            var rx = rnd(xy.x);
            var ry = rnd(xy.y);
            var rr = pl.tlx(radius);
            var rsa = pl.tarc(start);
            var rse = pl.tarc(end);

            if (ctx._drawable)
                ctx._drawable.add_arc(rx, ry, rr, rsa, rse);

            var ds = Math.abs(rsa - Math.PI*2);
            var de = Math.abs(rse - Math.PI*2);

            if (this._debug) console.log(' rs ' + rx + c + ry + c + rr + c + geo.degrees(rsa) + c + geo.degrees(rse));

            if (this._debug) console.log(' ds ' + geo.degrees(ds) + ' ' + geo.degrees(de));

            ctx._ctx.arc(rx, ry, rr, ds, de, (counter === undefined ? true : counter));
        } else
            ctx._ctx.arc(rnd(x), rnd(y), radius, start, end, (counter === undefined ? true : counter));

        return ctx;
    };

    Context.prototype.arcTo = function(x1, y1, x2, y2, radius) {
        var ctx = this;

        if (this._dummy) return this;

        if (ctx._plane)
            console.log('Context.arcTo not currently supported for cute.Plane');

        ctx._ctx.arcTo(rnd(x1), rnd(y1), rnd(x2), rnd(y2), radius);

        return ctx;
    };

    Context.prototype.beginPath = function() {
        var ctx = this;

        if (this._dummy) return this;

        ctx._ctx.beginPath();

        return ctx;
    };

    Context.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'Context.bezierCurveTo' + ' not currently supported for cute.Plane');

        ctx._ctx.bezierCurveTo(rnd(cp1x), rnd(cp1y), rnd(cp2x), rnd(cp2y), rnd(x), rnd(y));

        return ctx;
    };

    Context.prototype.clearRect = function(x, y, w, h) {
        if (this._dummy) return this;
//        no_plane('clearRect');
        this._ctx.clearRect(rnd(x), rnd(y), rnd(w), rnd(h));

        return this;
    };

    Context.prototype.clip = function() {
        if (this._dummy) return this;
        this._ctx.clip();

        return this;
    };

    Context.prototype.closePath = function() {
        if (this._dummy) return this;
        this._ctx.closePath();

        return this;
    };

    Context.prototype.createImageData = function(w, h) {
        if (this._dummy) return this;

        return this._ctx.createImageData(rnd(w), rnd(h));
    };

    Context.prototype.createLinearGradient = function(x0, y0, x1, y1) {
        if (this._dummy) return this;

        return this._ctx.createLinearGradient(rnd(x0), rnd(y0), rnd(x1), rnd(y1));
    };

    Context.prototype.createPattern = function(img, rep) {
        if (this._dummy) return this;

        return this._ctx.createPattern(img, rep);
    };

    Context.prototype.createRadialGradient = function(x0, y0, r0, x1, y1, r1) {
        if (this._dummy) return this;

        return this._ctx.createRadialGradient(rnd(x0), rnd(y0), r0, rnd(x1), rnd(y1), r1);
    };

    Context.prototype.drawImage = function(img, x, y) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'drawImage' + ' not currently supported for cute.Plane');

        this._ctx.drawImage(img, rnd(x), rnd(y));

        return this;
    };

    Context.prototype.fill = function() {
        if (this._dummy) return this;
        this._ctx.fill();

        return this;
    };

    Context.prototype.fillRect = function(x, y, w, h) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'fillRect' + ' not currently supported for cute.Plane');
        this._ctx.fillRect(rnd(x), rnd(y), rnd(w), rnd(h));

        return this;
    };

    Context.prototype.fillText = function(str, x, y) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'fillText' + ' not currently supported for cute.Plane');
        this._ctx.fillText(str, rnd(x), rnd(y));

        return this;
    };

    Context.prototype.getImageData = function(x, y, w, h) {
        if (this._dummy) return this;

        return this._ctx.getImageData(rnd(x), rnd(y), rnd(w), rnd(h));
    };

    Context.prototype.getLineDash = function() {
        if (this._dummy) return this;

        return this._ctx.getLineDash();
    };

    Context.prototype.isPointInPath = function(x, y) {
        if (this._dummy) return this;

        return this._ctx.isPointInPath(rnd(x), rnd(y));
    };

    Context.prototype.isPointInStroke = function(x, y) {
        if (this._dummy) return this;

        return this._ctx.isPointInStroek(rnd(x), rnd(y));
    };

    Context.prototype.lineTo = function(x, y) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._debug) console.log('.lineTo ' + x + c + y);

        if (ctx._plane) {
            var pl = ctx._plane;
            var xy = pl.txy(x, y);
            var rx = rnd(xy.x);
            var ry = rnd(xy.y);

            if (this._debug) console.log('        ' + rx + c + ry);

/*
            if (ctx._drawable)
                ctx._drawable.add_lineTo(rx, ry);
*/
            ctx._ctx.lineTo(rx, ry);
        } else
            ctx._ctx.lineTo(rnd(x), rnd(y));

        return ctx;
    };

    Context.prototype.measureText = function(str) {
        if (this._dummy) return this;
        return this._ctx.measureText(str);
    };

    Context.prototype.moveTo = function(x, y) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._debug) console.log('.moveTo ' + x + c + y);

        if (ctx._plane) {
            var pl = ctx._plane;
            var xy = pl.txy(x, y);
            var rx = rnd(xy.x);
            var ry = rnd(xy.y);

            if (this._debug) console.log('        ' + rx + c + ry);

/*
            if (ctx._drawable)
                ctx._drawable.add_lineTo(rx, ry);
*/
            ctx._ctx.moveTo(rx, ry);
        } else
            ctx._ctx.moveTo(rnd(x), rnd(y));

        return ctx;
    };

    Context.prototype.putImageData = function(data, x, y) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'putImageData' + ' not currently supported for cute.Plane');
        this._ctx.putImageData(data, rnd(x), rnd(y));

        return this;
    };

    Context.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'quadraticCurveTo' + ' not currently supported for cute.Plane');
        this._ctx.quadraticCurveTo(rnd(cpx), rnd(cpy), rnd(x), rnd(y));

        return this;
    };

    Context.prototype.rect = function(x, y, w, h) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'rect' + ' not currently supported for cute.Plane');
        this._ctx.rect(rnd(x), rnd(y), rnd(w), rnd(h));

        return this;
    };

    Context.prototype.restore = function() {
        this.stack_restore();
        if (this._dummy) return this;
        this._ctx.restore();
        return this;
    };

    Context.prototype.rotate = function(angle) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'rotate' + ' not currently supported for cute.Plane');
        this._ctx.rotate(angle);
        return this;
    };

    Context.prototype.save = function() {
        this.stack_save();
        if (this._dummy) return this;
        this._ctx.save();
        return this;
    };

    Context.prototype.scale = function(x, y) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'scale' + ' not currently supported for cute.Plane');
        this._ctx.scale(x, y);
        return this;
    };

    Context.prototype.scrollPathIntoView = function() {
        if (this._dummy) return this;
        this._ctx.scrollPathIntoView();
        return this;
    };

    Context.prototype.setLineDash = function(dash) {
        if (this._dummy) return this;
        if (this._ctx.setLineDash)
            this._ctx.setLineDash(dash);
        return this;
    };

    Context.prototype.setTransform = function(m11, m12, m21, m22, dx, dy) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'setTransform' + ' not currently supported for cute.Plane');
        this._ctx.setTransform(m11, m12, m21, m22, dx, dy);
        return this;
    };

    Context.prototype.stroke = function() {
        if (this._dummy) return this;
        this._ctx.stroke();
        return this;
    };

    Context.prototype.strokeRect = function(x, y, w, h) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'strokeRect' + ' not currently supported for cute.Plane');
        this._ctx.strokeRect(rnd(x), rnd(y), rnd(w), rnd(h));
        return this;
    };

    Context.prototype.strokeText = function(str, x, y) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'strokeText' + ' not currently supported for cute.Plane');
        this._ctx.strokeText(str, rnd(x), rnd(y));
        return this;
    };

    Context.prototype.transform = function(m11, m12, m21, m22, dx, dy) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'transform' + ' not currently supported for cute.Plane');
        this._ctx.transform(m11, m12, m21, m22, dx, dy);
        return this;
    };

    Context.prototype.translate = function(x, y) {
        this.stack_translate(x, y);
        if (this._dummy) return this;
//        no_plane('translate');
        this._ctx.translate(x, y);
        return this;
    };


    /**
     *  Attributes of the CanvasRenderingContext2D are also implemented as
     *  methods.  The convention is that if an argument is specified, the
     *  value is changed (setter), and if no argument is given the value is
     *  returned (getter).
     */
    Context.prototype.fillStyle = function(fill) {
        if (this._dummy) return this;
        if (fill === undefined)
            return this._ctx.fillStyle;

        if (fill === null)
            this._ctx.fillStyle = '#000000';
        else if (fill instanceof cute.Colour) {
            this._ctx.fillStyle = fill.css();
        }
        else
            this._ctx.fillStyle = fill;

        return this;
    };

    Context.prototype.font = function(font) {
        if (this._dummy) return this;
        if (font === undefined)
            return this._ctx.font;

        if (font instanceof cute.Font)
            this._ctx.font = font.css();
        else
            this._ctx.font = font;

        return this;
    };

    Context.prototype.globalAlpha = function(alpha) {
        if (this._dummy) return this;
        if (alpha === undefined)
            return this._ctx.globalAlpha;
        this._ctx.globalAlpha = alpha;
        return this;
    };

    Context.prototype.globalCompositeOperation = function(str) {
        if (this._dummy) return this;
        if (str === undefined)
            return this._ctx.globalCompositeOperation;
        this._ctx.globalCompositeOperation = str;
        return this;
    };

    Context.prototype.lineCap = function(cap) {
        if (this._dummy) return this;
        if (cap === undefined)
            return this._ctx.lineCap;
        this._ctx.lineCap = cap;
        return this;
    };

    Context.prototype.lineDashOffset = function(offset) {
        if (this._dummy) return this;
        if (offset === undefined)
            return this._ctx.lineDashOffset;
        this._ctx.lineDashOffset = offset;
        return this;
    };

    Context.prototype.lineJoin = function(join) {
        if (this._dummy) return this;
        if (join === undefined)
            return this._ctx.lineJoin;
        this._ctx.lineJoin = join;
        return this;
    };

    Context.prototype.lineWidth = function(pen) {
        if (this._dummy) return this;
        if (pen === undefined)
            return this._ctx.lineWidth;

        this._ctx.lineWidth = rnd(pen);
        return this;
    };

    Context.prototype.miterLimit = function(val) {
        if (this._dummy) return this;
        if (val === undefined)
            return this._ctx.miterLimit;

        this._ctx.miterLimit = val;
        return this;
    };

    Context.prototype.shadowBlur = function(val) {
        if (this._dummy) return this;
        if (val === undefined)
            return this._ctx.shadowBlur;

        this._ctx.shadowBlur = val;
        return this;
    };

    Context.prototype.shadowColor = function(str) {
        if (this._dummy) return this;
        if (str === undefined)
            return this._ctx.shadowColor;
        this._ctx.shadowColor = str;

        return this;
    };

    Context.prototype.shadowOffsetX = function(val) {
        if (this._dummy) return this;
        if (val === undefined)
            return this._ctx.shadowOffsetX;

        this._ctx.shadowOffsetX = val;

        return this;
    };

    Context.prototype.shadowOffsetY = function(val) {
        if (this._dummy) return this;
        if (val === undefined)
            return this._ctx.shadowOffsetY;

        this._ctx.shadowOffsetY = val;

        return this;
    };

    Context.prototype.strokeStyle = function(colour) {
        if (this._dummy) return this;
        if (colour === undefined)
            return ctx.strokeStyle;

        if (colour === null)
            this._ctx.strokeStyle = '#000000';
        else if (colour instanceof cute.Colour)
            this._ctx.strokeStyle = colour.css();
        else
            this._ctx.strokeStyle = colour;
        return this;
    };

    Context.prototype.textAlign = function(str) {
        if (this._dummy) return this;
        if (str === undefined)
            return this._ctx.textAlign;

        this._ctx.textAlign = str;
        return this;
    };

    Context.prototype.textBaseline = function(base) {
        if (this._dummy) return this;
        if (base === undefined)
            return this._ctx.textBaseline;

        this._ctx.textBaseline = base;
        return this;
    };


    /*------------------------------------------------------------
     *  Extra's
     *------------------------------------------------------------*/

    Context.prototype.text = function(str, x, y, base) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'text' + ' not currently supported for cute.Plane');
        this._ctx.textBaseline = base || 'alphabetic';
        this._ctx.fillText(str, rnd(x), rnd(y));

        return this;
    };


    /**
     *  Rounded corner triangle using arcTo.
     *
     *  @author http://www.dbp-consulting.com/tutorials/canvas/CanvasArcTo.html
     */
    Context.prototype.roundedRect = function(x, y, w, h, r, fill, stroke) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'roundedRect' + ' not currently supported for cute.Plane');
        x = rnd(x);
        y = rnd(y);
        w = rnd(w);
        h = rnd(h);

        ctx._ctx.save(); // save the context so we don't mess up others
        ctx._ctx.beginPath(); // draw top and top right corner
        ctx._ctx.moveTo(x+r,y);
        ctx._ctx.arcTo(x+w,y,x+w,y+r,r);
        // draw right side and bottom right corner
        ctx._ctx.arcTo(x+w,y+h,x+w-r,y+h,r); // draw bottom and bottom left corner
        ctx._ctx.arcTo(x,y+h,x,y+h-r,r); // draw left and top left corner
        ctx._ctx.arcTo(x,y,x+r,y,r);
        if (fill)
            ctx._ctx.fill();
        if (stroke)
            ctx._ctx.stroke();
        ctx._ctx.restore();

        return ctx;
    };

    Context.prototype.circle = function(x, y, radius) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'circle' + ' not currently supported for cute.Plane');

        ctx._ctx.beginPath();
        ctx._ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx._ctx.closePath();
        ctx._ctx.fill();
        ctx._ctx.stroke();

        return ctx;
    };

    Context.prototype.fillCircle = function(x, y, radius) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'fillCircle' + ' not currently supported for cute.Plane');

        ctx._ctx.beginPath();
        ctx._ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx._ctx.closePath();
        ctx._ctx.fill();

        return ctx;
    };

    Context.prototype.strokeCircle = function(x, y, radius) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'strokeCircle' + ' not currently supported for cute.Plane');

        ctx._ctx.beginPath();
        ctx._ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx._ctx.closePath();
        ctx._ctx.stroke();

        return ctx;
    };


    /*------------------------------------------------------------
     *  Ellipse
     *------------------------------------------------------------*/

    Context.prototype.ellipse = function(x, y, w, h) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'ellipse' + ' not currently supported for cute.Plane');
        return this.drawEllipse(x, y, w, h, true, true);
    };

    Context.prototype.strokeEllipse = function(x, y, w, h) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'strokeEllipse' + ' not currently supported for cute.Plane');
        return this.drawEllipse(x, y, w, h, false, true);
    };

    Context.prototype.fillEllipse = function(x, y, w, h) {
        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'fillEllipse' + ' not currently supported for cute.Plane');
        return this.drawEllipse(x, y, w, h, true, false);
    };

    Context.prototype.drawEllipse = function(x, y, w, h, fill, stroke) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'drawEllipse' + ' not currently supported for cute.Plane');

        var kappa = 0.5522848;
        var ox, oy, xe, ye, xm, ym;

        ox = (w / 2) * kappa; // control point offset horizontal
        oy = (h / 2) * kappa; // control point offset vertical
        xe = x + w; // x-end
        ye = y + h; // y-end
        xm = x + w / 2; // x-middle
        ym = y + h / 2; // y-middle

        ctx._ctx.beginPath();
        ctx._ctx.moveTo(x, ym);
        ctx._ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx._ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx._ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx._ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        ctx._ctx.closePath();
        if (fill)
            ctx._ctx.fill();
        if (stroke)
            ctx._ctx.stroke();

        return ctx;
    };

    Context.prototype.strokeArc = function(x, y, radius, start, end, counter) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'strokeArc' + ' not currently supported for cute.Plane');
        ctx._ctx.beginPath();
        ctx._ctx.arc(x, y, radius, start, end, (counter === undefined ? true : counter));
        ctx._ctx.closePath();
        ctx._ctx.stroke();

        return ctx;
    };

    Context.prototype.fillArc = function(x, y, radius, start, end, counter) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'fillArc' + ' not currently supported for cute.Plane');

        ctx._ctx.beginPath();
        ctx._ctx.arc(x, y, radius, start, end, (counter === undefined ? true : counter));
        ctx._ctx.closePath();
        ctx._ctx.fill();

        return ctx;
    };

    Context.prototype.style = function(style) {
        var ctx = this;

        if (this._dummy) return this;

        if (style.stroke)
            ctx.strokeStyle(style.stroke);
        if (style.fill)
            ctx.fillStyle(style.fill);
        if (style.line_dash)
            ctx.setLineDash(style.line_dash);

        return ctx;
    };

    Context.prototype.line = function(x1, y1, x2, y2) {
        var ctx = this;

        if (this._dummy) return this;

        if (ctx._plane) {
            var pl = ctx._plane;
            var xy1 = pl.txy(x1, y1);
            var xy2 = pl.txy(x2, y2);

            x1 = rnd(xy1.x);
            y1 = rnd(xy1.y);
            x2 = rnd(xy2.x);
            y2 = rnd(xy2.y);
            if (ctx._drawable)
                ctx._drawable.add_line(x1, y1, x2, y2);
        } else {
            x1 = rnd(x1);
            y1 = rnd(y1);
            x2 = rnd(x2);
            y2 = rnd(y2);
        }

    //  ctx._ctx.lineCap = 'square';
//        printf('line ' + x1 + ' ' + y1 + ' ' + x2 + ' ' + y2);
        ctx._ctx.beginPath();
        ctx.lineCap('butt');
        ctx._ctx.moveTo(x1, y1);
        ctx._ctx.lineTo(x2, y2);
        ctx._ctx.closePath();
        ctx._ctx.stroke();

        return ctx;
    };

    Context.prototype.fillPolygon = function(a) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'fillPolygon' + ' not currently supported for cute.Plane');

        var x = 0, y = 1;

        ctx._ctx.beginPath();
        ctx._ctx.moveTo(a[x], a[y]);
        for (x=2, y=3; x<a.length; x+=2, y+=2)
            ctx._ctx.lineTo(rnd(a[x]), rnd(a[y]));
        ctx._ctx.closePath();
        ctx._ctx.fill();

        return ctx;
    };

    Context.prototype.path = function(points, ox, oy, closed, fill) {
        var ctx = this;

        if (this._dummy) return this;
        if (this._plane) console.log('Context.' + 'path' + ' not currently supported for cute.Plane');

        if (points.length < 2)
            return ctx;

        var x0 = 0, y0 = 0;

        ctx._ctx.beginPath();
        for (var i=0; i<points.length; i++) {
            var x = rnd(points[i]._x + ox);
            var y = rnd(points[i]._y + oy);

            if (i === 0) {
                ctx._ctx.moveTo(x, y);
                x0 = x;
                y0 = y;
            } else {
                ctx._ctx.lineTo(x, y);
            }
        }
        if (closed) {
            ctx._ctx.lineTo(x0, y0);
        }
        ctx._ctx.closePath();
        if (ctx._ctx.lineWidth > 0) {
            ctx._ctx.stroke();
        }
        if (fill) {
            ctx._ctx.fillStyle(fill);
            ctx._ctx.fill();
        }

        return ctx;
    };
}).call(this);