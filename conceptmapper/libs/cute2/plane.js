/*  $Id$	-*- mode: javascript -*-
 *  
 *  File	plane.src
 *  Part of	Cute
 *  Author	Anjo Anjewierden, a.a.anjewierden@utwente.nl
 *  Purpose	Definition of class Plane
 *  Works with	ECMAScript 5.1
 *  
 *  Notice	Copyright (c) 2014  University of Twente
 *  
 *  History	04/07/12  (Created)
 *  		17/02/14  (Last modified)
 */

/*------------------------------------------------------------
 *  Class Plane
 *------------------------------------------------------------*/
/*  Use with gcc -E -x c -P -C *.h > *.js 
 */

"use strict";

(function() {
    var cute = this.cute;
    var c = ', ';

    var Plane = cute.Plane = function(opts) {
        var pl = this;

        cute.Figure.call(pl);

        pl._size = (opts.size === undefined ? new cute.Size(0,0) : opts.size);
        pl._origin = (opts.origin === undefined ? new cute.Point(0,0) : opts.origin);
        pl._scale = (opts.scale === undefined ? new cute.Point(1,1) : opts.scale);
        pl._angle = (opts.angle === undefined ? 0 : opts.angle);

        return pl;
    }

    { var F = function() {}; F.prototype = cute.Figure.prototype; Plane.prototype = new F(); Plane.prototype.constructor = Plane; Plane.superclass = cute.Figure.prototype; if (cute.Figure.prototype.constructor == Object.prototype.constructor) cute.Figure.prototype.constructor = cute.Figure; };;

    Plane.prototype.size = function(v0) { if (v0 === undefined) return this._size; this._size = v0; return this; };
    Plane.prototype.origin = function(v0) { if (v0 === undefined) return this._origin; this._origin = v0; return this; };
    Plane.prototype.scale = function(v0) { if (v0 === undefined) return this._scale; this._scale = v0; return this; };
    Plane.prototype.angle = function(v0) { if (v0 === undefined) return this._angle; this._angle = v0; return this; };

    Plane.prototype.debug = function() {
        var pl = this;

        console.log('  - scale ' + pl._scale);
        console.log('  - angle ' + pl._angle);
        console.log('  - offset ' + pl._offset._x + ' ' + pl._offset._y);
        console.log('  - origin ' + pl._origin._x + ' ' + pl._origin._y);
        console.log('  - area   ' + pl._area._x + ' ' + pl._area._y);
    };

    Plane.prototype.toString = function() {
        return 'cute.Plane()';
    };

    Plane.prototype.compute = function() {
        this._request_compute = false;
        return this;
    }

    Plane.prototype.render_canvas = function(ctx, canvas) {
        var pl = this;
//        var ox = pl._offset._x;
//        var oy = pl._offset._y + pl._size._h;
        var ox = pl._offset._x + pl._origin._x;
        var oy = pl._offset._y + pl._size._h - pl._origin._y;

        ctx.save();
        ctx.translate(ox, oy);

        var a = pl._area;
        var x = pl._area._x;
        var y = pl._area._y;
        var fill = false;
        var stroke = false;

        if (pl._pen > 0) {
            ctx.lineWidth(pl._pen);
            ctx.strokeStyle(pl._colour);
            stroke = true;
        }
        if (pl._background) {
            fill = true;
            ctx.fillStyle(pl._background);
        }
        if (fill) {
            var tl = pl.top_left();
            var br = pl.bottom_right();
            var w = pl._size._w;
            var h = pl._size._h;

            ctx.fillRect(tl.x, tl.y, w, h);
        }
        if (stroke)
            ctx.strokeRect(x, y, a._w, a._h);

        ctx.push_plane(pl);

        for (var gr, i=0; gr=pl._graphicals[i], i<pl._graphicals.length; i++) {
            gr.Compute();
            if (gr._displayed)
                gr.render_canvas(ctx, canvas);
        }

        ctx.pop_plane();
        ctx.restore();
    };

    //  In real (up side down) coordinates
    Plane.prototype.top_left = function() {
        return { x: -this._origin._x,
                 y: this._origin._y - this._size._h
               };
    }

    //  In real (up side down) coordinates
    Plane.prototype.bottom_right = function() {
        return { x: this._size._w - this._origin._x,
                 y: -this._origin._y
               };
    }

    Plane.prototype.tx = function(x) {
        var pl = this;
//        var ox = pl._origin._x;
        var ox = 0;
        var sx = pl._scale._x;
        var cx = x * sx + ox;

//        printf('tx(' + x + ') = ' + cx);

        return cx;
    };

    Plane.prototype.ty = function(y) {
        var pl = this;
//        var oy = pl._origin._y;
        var oy = 0;
        var sy = pl._scale._y;
        var cy = oy - y * sy;

//        printf('ty(' + y + ') = ' + cy);

        return cy;
    };

    Plane.prototype.tlx = function(len) {
        var lx = len * this._scale._x;

//        printf('tlx(' + len + ') = ' + lx);

        return lx;
    };

    Plane.prototype.tly = function(len) {
        var ly = len * this._scale._y;

//        printf('tly(' + len + ') = ' + ly);

        return ly;
    };

    Plane.prototype.tarc = function(theta) {
        var rval = theta + this._angle;

        while (rval > 2*Math.PI)
            rval -= 2*Math.PI;

//        printf('tarc(' + theta + ') = ' + rval);

        return rval;
    };

    Plane.prototype.ta = function(theta) {
        var rval = theta + this._angle;

//        printf('ta(' + theta + ') = ' + ta);

        return rval;
    };

    Plane.prototype.txy = function(x, y) {
        var pl = this;

        if (pl._angle !== 0) {
            var c = ', ';
            var rval = geo.rotate(x, y, 0, 0, pl._angle);

            var tmp = {
                x: pl.tx(rval.x),
                y: pl.ty(rval.y)
            };
            return tmp;
        }

        return {
            x: pl.tx(x),
            y: pl.ty(y)
        };
    };;

/*
    Plane.prototype.relative_move_xy = function(x, y) {
        cute.Graphical.prototype.relative_move_xy.call(this, x, y);

        return this;
    };
*/

    /*------------------------------------------------------------
     *  Event handling
     *------------------------------------------------------------*/

    Plane.prototype.event = function(ev, ex, ey) {
        var pl = this;

        if (pl._active) {
            var x = ex - pl._offset._x;
            var y = ey - pl._offset._y;
            var grs = pl._graphicals;

            for (var gr, i=0; gr=pl._graphicals[i], i<pl._graphicals.length; i++) {
                if (gr._displayed && gr.in_event_area(x,y) && gr.event(ev,x,y)) {
                    return true;
                }
            }
//            printf('  calling Graphical.event');
            return cute.Graphical.prototype.event.call(pl, ev, x, y);
        }

        return false;
    };
}).call(this);