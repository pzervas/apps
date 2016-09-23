/*  $Id$	-*- mode: javascript -*-
 *  
 *  File	move_gesture.src
 *  Part of	Cute
 *  Author	Anjo Anjewierden, a.a.anjewierden@utwente.nl
 *  Purpose	Definition of class MoveGesture
 *  Works with	ECMAScript 5.1
 *  
 *  Notice	Copyright (c) 2012  University of Twente
 *  
 *  History	16/07/12  (Created)
 *  		16/07/12  (Last modified)
 */


/*------------------------------------------------------------
 *  Class cute.MoveGesture
 *------------------------------------------------------------*/
/*  Use with gcc -E -x c -P -C *.h > *.js 
 */

"use strict";

(function() {
    var cute = this.cute;

    var MoveGesture = cute.MoveGesture = function() {
        var g = this;

        cute.Gesture.call(g);
        g._offset = new cute.Point(0,0);
        g._event = null;
        g._receiver = null;

        return g;
    }

    { var F = function() {}; F.prototype = cute.Gesture.prototype; MoveGesture.prototype = new F(); MoveGesture.prototype.constructor = MoveGesture; MoveGesture.superclass = cute.Gesture.prototype; if (cute.Gesture.prototype.constructor == Object.prototype.constructor) cute.Gesture.prototype.constructor = cute.Gesture; };;

    MoveGesture.prototype.toString = function() {
        var g = this;
        return "MoveGesture(" + g._offset._x + ", " + g._offset._y + ")";
    }

    MoveGesture.prototype.event = function(ev, gr) {
        var g = this;

        g._receiver = gr;
        if (g.initiate(ev)) {
            ev._gesture = g;
            return true;
        }
        return false;
    }

    MoveGesture.prototype.initiate = function(ev) {
        var g = this;
        var gr = ev._receiver;

        if (ev._type === 'mouse_down' && g.modifiers_match(ev)) {
            g._offset._x = ev._x;
            g._offset._y = ev._y;
            g._initial_x = gr._area._x;
            g._initial_y = gr._area._y;

            return true;
        }

        return false;
    }

    MoveGesture.prototype.verify = function(ev) {
        return true;
    }

    MoveGesture.prototype.drag = function(ev) {
        var g = this;
        var gr = g._receiver;

        if (gr instanceof cute.Drawable) {
            var dx = ev._x - g._offset._x;
            var dy = -(ev._y - g._offset._y);
        } else {
            var dx = ev._x - g._offset._x;
            var dy = ev._y - g._offset._y;
        }

        gr.relative_move_xy(dx, dy);
        g._offset._x = ev._x;
        g._offset._y = ev._y;
        ev._device.modified();

        return true;
    }

    MoveGesture.prototype.terminate = function(ev) {
        return this;
    }
}).call(this);