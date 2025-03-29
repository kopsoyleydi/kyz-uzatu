Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
    var r, n;
    if (null == this) throw new TypeError(" this is null or not defined");
    var o = Object(this),
        i = o.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    for (arguments.length > 1 && (r = t), n = 0; n < i;) {
        var c;
        n in o && (c = o[n], e.call(r, c, n, o)), n++
    }
}), Array.prototype.map || (Array.prototype.map = function(e, t) {
    var r, n, o;
    if (null == this) throw new TypeError(" this is null or not defined");
    var i = Object(this),
        c = i.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    for (arguments.length > 1 && (r = t), n = new Array(c), o = 0; o < c;) {
        var a, l;
        o in i && (a = i[o], l = e.call(r, a, o, i), n[o] = l), o++
    }
    return n
}), Array.prototype.filter || (Array.prototype.filter = function(e) {
    "use strict";
    if (null == this) throw new TypeError;
    var t = Object(this),
        r = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError;
    for (var n = [], o = arguments[1], i = 0; i < r; i++)
        if (i in t) {
            var c = t[i];
            e.call(o, c, i, t) && n.push(c)
        } return n
}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    var r;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var n = Object(this),
        o = n.length >>> 0;
    if (0 === o) return -1;
    var i = +t || 0;
    if (Math.abs(i) === 1 / 0 && (i = 0), i >= o) return -1;
    for (r = Math.max(i >= 0 ? i : o - Math.abs(i), 0); r < o;) {
        if (r in n && n[r] === e) return r;
        r++
    }
    return -1
}), Array.prototype.some || (Array.prototype.some = function(e) {
    "use strict";
    if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
    if ("function" != typeof e) throw new TypeError;
    for (var t = Object(this), r = t.length >>> 0, n = arguments.length >= 2 ? arguments[1] : void 0, o = 0; o < r; o++)
        if (o in t && e.call(n, t[o], o, t)) return !0;
    return !1
}), Object.keys || (Object.keys = function() {
    "use strict";
    var e = Object.prototype.hasOwnProperty,
        t = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        n = r.length;
    return function(o) {
        if ("object" != typeof o && ("function" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
        var i = [],
            c, a;
        for (c in o) e.call(o, c) && i.push(c);
        if (t)
            for (a = 0; a < n; a++) e.call(o, r[a]) && i.push(r[a]);
        return i
    }
}()), "function" != typeof Object.defineProperty && function(e) {
    var t = Object.prototype.hasOwnProperty.call(Object.prototype, "__defineGetter__"),
        r = "Getters & setters cannot be defined on this javascript engine",
        n = "A property cannot both have accessors and be writable or have a value";
    Object.defineProperty = function o(i, c, a) {
        if (e && (i === window || i === document || i === Element.prototype || i instanceof Element)) return e(i, c, a);
        if (null === i || !(i instanceof Object || "object" == typeof i)) throw new TypeError("Object.defineProperty called on non-object");
        if (!(a instanceof Object)) throw new TypeError("Property description must be an object");
        var l = String(c),
            p = "value" in a || "writable" in a,
            u = "get" in a && typeof a.get,
            f = "set" in a && typeof a.set;
        if (u) {
            if (void 0 === u) return i;
            if ("function" !== u) throw new TypeError("Getter must be a function");
            if (!t) throw new TypeError(r);
            if (p) throw new TypeError(n);
            Object.__defineGetter__.call(i, l, a.get)
        } else i[l] = a.value;
        if (f) {
            if (void 0 === f) return i;
            if ("function" !== f) throw new TypeError("Setter must be a function");
            if (!t) throw new TypeError(r);
            if (p) throw new TypeError(n);
            Object.__defineSetter__.call(i, l, a.set)
        }
        return "value" in a && (i[l] = a.value), i
    }
}(Object.defineProperty), "function" != typeof Object.create && (Object.create = function() {
    function e() {}
    var t = Object.prototype.hasOwnProperty;
    return function(r) {
        if ("object" != typeof r) throw TypeError("Object prototype may only be an Object or null");
        e.prototype = r;
        var n = new e;
        if (e.prototype = null, arguments.length > 1) {
            var o = Object(arguments[1]);
            for (var i in o) t.call(o, i) && (n[i] = o[i])
        }
        return n
    }
}()), !window.addEventListener && function(e, t, r, n, o, i, c) {
    e.addEventListener = t.addEventListener = r.addEventListener = function(e, t) {
        var r = this;
        c.unshift([r, e, t, function(e) {
            e.currentTarget = r, e.preventDefault = function() {
                e.returnValue = !1
            }, e.stopPropagation = function() {
                e.cancelBubble = !0
            }, e.target = e.srcElement || r, t.call(r, e)
        }]), this.attachEvent("on" + e, c[0][3])
    }, e.removeEventListener = t.removeEventListener = r.removeEventListener = function(e, t) {
        for (var r = 0, n; n = c[r]; ++r)
            if (n[0] == this && n[1] == e && n[2] == t) return this.detachEvent("on" + e, c.splice(r, 1)[0][3])
    }, e.dispatchEvent = t.dispatchEvent = r.dispatchEvent = function(e) {
        return this.fireEvent("on" + e.type, e)
    }
}(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []),
function() {
    var e = function(e) {
            return new RegExp("(^| )" + e + "( |$)")
        },
        t = function(e, t, r) {
            for (var n = 0; n < e.length; n++) t.call(r, e[n])
        };

    function r(e) {
        this.element = e
    }
    r.prototype = {
        add: function() {
            t(arguments, (function(e) {
                this.contains(e) || (this.element.className += " " + e)
            }), this)
        },
        remove: function() {
            t(arguments, (function(t) {
                this.element.className = this.element.className.replace(e(t), "")
            }), this)
        },
        toggle: function(e) {
            return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0)
        },
        contains: function(t) {
            return e(t).test(this.element.className)
        },
        replace: function(e, t) {
            this.remove(e), this.add(t)
        }
    }, "classList" in Element.prototype || Object.defineProperty(Element.prototype, "classList", {
        get: function() {
            return new r(this)
        }
    }), window.DOMTokenList && null == DOMTokenList.prototype.replace && (DOMTokenList.prototype.replace = r.prototype.replace)
}(), Date.now || (Date.now = function e() {
    return (new Date).getTime()
}),
function(e) {
    var t = Date.now();
    e.performance || (e.performance = {}), e.performance.now = function() {
        return Date.now() - t
    }
}(self), document.head = document.getElementsByTagName("head")[0], Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
    for (var t = (this.document || this.ownerDocument).querySelectorAll(e), r = t.length; --r >= 0 && t.item(r) !== this;);
    return r > -1
}), Element.prototype.closest || (Element.prototype.closest = function(e) {
    for (var t = this; t && 1 === t.nodeType;) {
        if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode
    }
    return null
}), window.document.querySelectorAll || (document.querySelectorAll = document.body.querySelectorAll = Object.querySelectorAll = function e(t, r, n, o, i) {
    var c = document,
        a = c.createStyleSheet();
    for (i = c.all, r = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
        for (a.addRule(t[n], "k:v"), o = i.length; o--;) i[o].currentStyle.k && r.push(i[o]);
        a.removeRule(0)
    }
    return r
}), !window.getComputedStyle && document.documentMode <= 8 && (window.getComputedStyle = function e(t) {
    return t.currentStyle
}),
function() {
    if (document.documentMode <= 8) {
        var e = Array.prototype.slice;
        Array.prototype.slice = function() {
            if (this instanceof Array) return e.apply(this, arguments);
            for (var t = [], r = arguments.length >= 1 ? arguments[0] : 0, n = arguments.length >= 2 ? arguments[1] : this.length, o = r; o < n; o++) t.push(this[o]);
            return t
        }
    }
}();