function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, r = Array(e); i < e; i++)
        r[i] = t[i];
    return r
}
function e(t, e, i) {
    return e = a(e),
    u(t, o() ? Reflect.construct(e, i || [], a(t).constructor) : e.apply(t, i))
}
function i(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function r(t, e) {
    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, f(r.key), r)
    }
}
function n(t, e, i) {
    return e && r(t.prototype, e),
    i && r(t, i),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    t
}
function s() {
    return s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
        var r = function(t, e) {
            for (; !{}.hasOwnProperty.call(t, e) && null !== (t = a(t)); )
                ;
            return t
        }(t, e);
        if (r) {
            var n = Object.getOwnPropertyDescriptor(r, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : i) : n.value
        }
    }
    ,
    s.apply(null, arguments)
}
function a(t) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }
    ,
    a(t)
}
function h(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    e && l(t, e)
}
function o() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
        )))
    } catch (t) {}
    return (o = function() {
        return !!t
    }
    )()
}
function u(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e))
        return e;
    if (void 0 !== e)
        throw new TypeError("Derived constructors may only return object or undefined");
    return function(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }(t)
}
function l(t, e) {
    return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e,
        t
    }
    ,
    l(t, e)
}
function c(t, e) {
    return function(t) {
        if (Array.isArray(t))
            return t
    }(t) || function(t, e) {
        var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != i) {
            var r, n, s, a, h = [], o = !0, u = !1;
            try {
                if (s = (i = i.call(t)).next,
                0 === e)
                    ;
                else
                    for (; !(o = (r = s.call(i)).done) && (h.push(r.value),
                    h.length !== e); o = !0)
                        ;
            } catch (t) {
                u = !0,
                n = t
            } finally {
                try {
                    if (!o && null != i.return && (a = i.return(),
                    Object(a) !== a))
                        return
                } finally {
                    if (u)
                        throw n
                }
            }
            return h
        }
    }(t, e) || g(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function d(e) {
    return function(e) {
        if (Array.isArray(e))
            return t(e)
    }(e) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
            return Array.from(t)
    }(e) || g(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function f(t) {
    var e = function(t, e) {
        if ("object" != typeof t || !t)
            return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
            var r = i.call(t, e);
            if ("object" != typeof r)
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(t)
    }(t, "string");
    return "symbol" == typeof e ? e : e + ""
}
function v(t) {
    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    v(t)
}
function g(e, i) {
    if (e) {
        if ("string" == typeof e)
            return t(e, i);
        var r = {}.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, i) : void 0
    }
}
function p(t) {
    var e = "function" == typeof Map ? new Map : void 0;
    return p = function(t) {
        if (null === t || !function(t) {
            try {
                return -1 !== Function.toString.call(t).indexOf("[native code]")
            } catch (e) {
                return "function" == typeof t
            }
        }(t))
            return t;
        if ("function" != typeof t)
            throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== e) {
            if (e.has(t))
                return e.get(t);
            e.set(t, i)
        }
        function i() {
            return function(t, e, i) {
                if (o())
                    return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var n = new (t.bind.apply(t, r));
                return i && l(n, i.prototype),
                n
            }(t, arguments, a(this).constructor)
        }
        return i.prototype = Object.create(t.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        l(i, t)
    }
    ,
    p(t)
}
function m(t) {
    var e = t[0]
      , i = t[1]
      , r = t[2];
    return Math.sqrt(e * e + i * i + r * r)
}
function y(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t
}
function b(t, e, i) {
    return t[0] = e[0] + i[0],
    t[1] = e[1] + i[1],
    t[2] = e[2] + i[2],
    t
}
function x(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t[2] = e[2] - i[2],
    t
}
function _(t, e, i) {
    return t[0] = e[0] * i,
    t[1] = e[1] * i,
    t[2] = e[2] * i,
    t
}
function w(t) {
    var e = t[0]
      , i = t[1]
      , r = t[2];
    return e * e + i * i + r * r
}
function k(t, e) {
    var i = e[0]
      , r = e[1]
      , n = e[2]
      , s = i * i + r * r + n * n;
    return s > 0 && (s = 1 / Math.sqrt(s)),
    t[0] = e[0] * s,
    t[1] = e[1] * s,
    t[2] = e[2] * s,
    t
}
function M(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
}
function A(t, e, i) {
    var r = e[0]
      , n = e[1]
      , s = e[2]
      , a = i[0]
      , h = i[1]
      , o = i[2];
    return t[0] = n * o - s * h,
    t[1] = s * a - r * o,
    t[2] = r * h - n * a,
    t
}
var E, S, T = (E = [0, 0, 0],
S = [0, 0, 0],
function(t, e) {
    y(E, t),
    y(S, e),
    k(E, E),
    k(S, S);
    var i = M(E, S);
    return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
}
);
var C = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        return i(this, r),
        u(t = e(this, r, [n, s, a]), t)
    }
    return h(r, p(Array)),
    n(r, [{
        key: "x",
        get: function() {
            return this[0]
        },
        set: function(t) {
            this[0] = t
        }
    }, {
        key: "y",
        get: function() {
            return this[1]
        },
        set: function(t) {
            this[1] = t
        }
    }, {
        key: "z",
        get: function() {
            return this[2]
        },
        set: function(t) {
            this[2] = t
        }
    }, {
        key: "set",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
            return t.length ? this.copy(t) : (function(t, e, i, r) {
                t[0] = e,
                t[1] = i,
                t[2] = r
            }(this, t, e, i),
            this)
        }
    }, {
        key: "copy",
        value: function(t) {
            return y(this, t),
            this
        }
    }, {
        key: "add",
        value: function(t, e) {
            return e ? b(this, t, e) : b(this, this, t),
            this
        }
    }, {
        key: "sub",
        value: function(t, e) {
            return e ? x(this, t, e) : x(this, this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t) {
            var e, i, r;
            return t.length ? (i = this,
            r = t,
            (e = this)[0] = i[0] * r[0],
            e[1] = i[1] * r[1],
            e[2] = i[2] * r[2]) : _(this, this, t),
            this
        }
    }, {
        key: "divide",
        value: function(t) {
            var e, i, r;
            return t.length ? (i = this,
            r = t,
            (e = this)[0] = i[0] / r[0],
            e[1] = i[1] / r[1],
            e[2] = i[2] / r[2]) : _(this, this, 1 / t),
            this
        }
    }, {
        key: "inverse",
        value: function() {
            var t, e;
            return e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this,
            (t = this)[0] = 1 / e[0],
            t[1] = 1 / e[1],
            t[2] = 1 / e[2],
            this
        }
    }, {
        key: "len",
        value: function() {
            return m(this)
        }
    }, {
        key: "distance",
        value: function(t) {
            return t ? (e = this,
            r = (i = t)[0] - e[0],
            n = i[1] - e[1],
            s = i[2] - e[2],
            Math.sqrt(r * r + n * n + s * s)) : m(this);
            var e, i, r, n, s
        }
    }, {
        key: "squaredLen",
        value: function() {
            return w(this)
        }
    }, {
        key: "squaredDistance",
        value: function(t) {
            return t ? (e = this,
            r = (i = t)[0] - e[0],
            n = i[1] - e[1],
            s = i[2] - e[2],
            r * r + n * n + s * s) : w(this);
            var e, i, r, n, s
        }
    }, {
        key: "negate",
        value: function() {
            var t, e;
            return e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this,
            (t = this)[0] = -e[0],
            t[1] = -e[1],
            t[2] = -e[2],
            this
        }
    }, {
        key: "cross",
        value: function(t, e) {
            return e ? A(this, t, e) : A(this, this, t),
            this
        }
    }, {
        key: "scale",
        value: function(t) {
            return _(this, this, t),
            this
        }
    }, {
        key: "normalize",
        value: function() {
            return k(this, this),
            this
        }
    }, {
        key: "dot",
        value: function(t) {
            return M(this, t)
        }
    }, {
        key: "equals",
        value: function(t) {
            return i = t,
            (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2];
            var e, i
        }
    }, {
        key: "applyMatrix3",
        value: function(t) {
            var e, i, r, n, s, a;
            return e = this,
            r = t,
            n = (i = this)[0],
            s = i[1],
            a = i[2],
            e[0] = n * r[0] + s * r[3] + a * r[6],
            e[1] = n * r[1] + s * r[4] + a * r[7],
            e[2] = n * r[2] + s * r[5] + a * r[8],
            this
        }
    }, {
        key: "applyMatrix4",
        value: function(t) {
            var e, i, r, n, s, a, h;
            return e = this,
            r = t,
            n = (i = this)[0],
            s = i[1],
            a = i[2],
            h = (h = r[3] * n + r[7] * s + r[11] * a + r[15]) || 1,
            e[0] = (r[0] * n + r[4] * s + r[8] * a + r[12]) / h,
            e[1] = (r[1] * n + r[5] * s + r[9] * a + r[13]) / h,
            e[2] = (r[2] * n + r[6] * s + r[10] * a + r[14]) / h,
            this
        }
    }, {
        key: "scaleRotateMatrix4",
        value: function(t) {
            var e, i, r, n, s, a, h;
            return e = this,
            r = t,
            n = (i = this)[0],
            s = i[1],
            a = i[2],
            h = (h = r[3] * n + r[7] * s + r[11] * a + r[15]) || 1,
            e[0] = (r[0] * n + r[4] * s + r[8] * a) / h,
            e[1] = (r[1] * n + r[5] * s + r[9] * a) / h,
            e[2] = (r[2] * n + r[6] * s + r[10] * a) / h,
            this
        }
    }, {
        key: "applyQuaternion",
        value: function(t) {
            return function(t, e, i) {
                var r = e[0]
                  , n = e[1]
                  , s = e[2]
                  , a = i[0]
                  , h = i[1]
                  , o = i[2]
                  , u = h * s - o * n
                  , l = o * r - a * s
                  , c = a * n - h * r
                  , d = h * c - o * l
                  , f = o * u - a * c
                  , v = a * l - h * u
                  , g = 2 * i[3];
                u *= g,
                l *= g,
                c *= g,
                d *= 2,
                f *= 2,
                v *= 2,
                t[0] = r + u + d,
                t[1] = n + l + f,
                t[2] = s + c + v
            }(this, this, t),
            this
        }
    }, {
        key: "angle",
        value: function(t) {
            return T(this, t)
        }
    }, {
        key: "lerp",
        value: function(t, e) {
            return function(t, e, i, r) {
                var n = e[0]
                  , s = e[1]
                  , a = e[2];
                t[0] = n + r * (i[0] - n),
                t[1] = s + r * (i[1] - s),
                t[2] = a + r * (i[2] - a)
            }(this, this, t, e),
            this
        }
    }, {
        key: "clone",
        value: function() {
            return new r(this[0],this[1],this[2])
        }
    }, {
        key: "fromArray",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this[0] = t[e],
            this[1] = t[e + 1],
            this[2] = t[e + 2],
            this
        }
    }, {
        key: "toArray",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t[e] = this[0],
            t[e + 1] = this[1],
            t[e + 2] = this[2],
            t
        }
    }, {
        key: "transformDirection",
        value: function(t) {
            var e = this[0]
              , i = this[1]
              , r = this[2];
            return this[0] = t[0] * e + t[4] * i + t[8] * r,
            this[1] = t[1] * e + t[5] * i + t[9] * r,
            this[2] = t[2] * e + t[6] * i + t[10] * r,
            this.normalize()
        }
    }])
}()
  , F = new C
  , R = 1
  , P = 1
  , O = !1
  , I = function() {
    return n((function t(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (var n in i(this, t),
        e.canvas,
        this.gl = e,
        this.attributes = r,
        this.id = R++,
        this.VAOs = {},
        this.drawRange = {
            start: 0,
            count: 0
        },
        this.instancedCount = 0,
        this.gl.renderer.bindVertexArray(null),
        this.gl.renderer.currentGeometry = null,
        this.glState = this.gl.renderer.state,
        r)
            this.addAttribute(n, r[n])
    }
    ), [{
        key: "addAttribute",
        value: function(t, e) {
            this.attributes[t] = e;
            var i = this;
            if (e.id = P++,
            e.size = e.size || 1,
            e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
            e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
            e.normalized = e.normalized || !1,
            e.stride = e.stride || 0,
            e.offset = e.offset || 0,
            e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size),
            e.divisor = e.instanced || 0,
            e.needsUpdate = !1,
            e.usage = e.usage || this.gl.STATIC_DRAW,
            e.getX = function(t) {
                return this.data[t * this.size]
            }
            ,
            e.getY = function(t) {
                return this.data[t * this.size + 1]
            }
            ,
            e.getZ = function(t) {
                return this.data[t * this.size + 2]
            }
            ,
            e.setXYZ = function(t, r, n, s) {
                t *= this.size,
                this.data[t + 0] = r,
                this.data[t + 1] = n,
                this.data[t + 2] = s,
                i.updateAttribute(e)
            }
            ,
            e.buffer || this.updateAttribute(e),
            e.divisor) {
                if (this.isInstanced = !0,
                this.instancedCount && this.instancedCount !== e.count * e.divisor)
                    return this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                this.instancedCount = e.count * e.divisor
            } else
                "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
        }
    }, {
        key: "updateAttribute",
        value: function(t) {
            var e = !t.buffer;
            e && (t.buffer = this.gl.createBuffer()),
            this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer),
            this.glState.boundBuffer = t.buffer),
            e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data),
            t.needsUpdate = !1
        }
    }, {
        key: "setIndex",
        value: function(t) {
            this.addAttribute("index", t)
        }
    }, {
        key: "setDrawRange",
        value: function(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        }
    }, {
        key: "setInstancedCount",
        value: function(t) {
            this.instancedCount = t
        }
    }, {
        key: "createVAO",
        value: function(t) {
            this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(),
            this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
            this.bindAttributes(t)
        }
    }, {
        key: "bindAttributes",
        value: function(t) {
            var e = this;
            t.attributeLocations.forEach((function(t, i) {
                var r = i.name
                  , n = i.type;
                if (e.attributes[r]) {
                    var s = e.attributes[r];
                    e.gl.bindBuffer(s.target, s.buffer),
                    e.glState.boundBuffer = s.buffer;
                    var a = 1;
                    35674 === n && (a = 2),
                    35675 === n && (a = 3),
                    35676 === n && (a = 4);
                    for (var h = s.size / a, o = 1 === a ? 0 : a * a * 4, u = 1 === a ? 0 : 4 * a, l = 0; l < a; l++)
                        e.gl.vertexAttribPointer(t + l, h, s.type, s.normalized, s.stride + o, s.offset + l * u),
                        e.gl.enableVertexAttribArray(t + l),
                        e.gl.renderer.vertexAttribDivisor(t + l, s.divisor)
                }
            }
            )),
            this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
        }
    }, {
        key: "draw",
        value: function(t) {
            var e, i = this, r = t.program, n = t.mode, s = void 0 === n ? this.gl.TRIANGLES : n;
            this.gl.renderer.currentGeometry !== "".concat(this.id, "_").concat(r.attributeOrder) && (this.VAOs[r.attributeOrder] || this.createVAO(r),
            this.gl.renderer.bindVertexArray(this.VAOs[r.attributeOrder]),
            this.gl.renderer.currentGeometry = "".concat(this.id, "_").concat(r.attributeOrder)),
            r.attributeLocations.forEach((function(t, e) {
                var r = e.name
                  , n = i.attributes[r];
                n.needsUpdate && i.updateAttribute(n)
            }
            ));
            var a = 2;
            (null === (e = this.attributes.index) || void 0 === e ? void 0 : e.type) === this.gl.UNSIGNED_INT && (a = 4),
            this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(s, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * a, this.instancedCount) : this.gl.renderer.drawArraysInstanced(s, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(s, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * a) : this.gl.drawArrays(s, this.drawRange.start, this.drawRange.count)
        }
    }, {
        key: "getPosition",
        value: function() {
            var t = this.attributes.position;
            return t.data ? t : O ? void 0 : O = !0
        }
    }, {
        key: "computeBoundingBox",
        value: function(t) {
            t || (t = this.getPosition());
            var e = t.data
              , i = t.size;
            this.bounds || (this.bounds = {
                min: new C,
                max: new C,
                center: new C,
                scale: new C,
                radius: 1 / 0
            });
            var r = this.bounds.min
              , n = this.bounds.max
              , s = this.bounds.center
              , a = this.bounds.scale;
            r.set(1 / 0),
            n.set(-1 / 0);
            for (var h = 0, o = e.length; h < o; h += i) {
                var u = e[h]
                  , l = e[h + 1]
                  , c = e[h + 2];
                r.x = Math.min(u, r.x),
                r.y = Math.min(l, r.y),
                r.z = Math.min(c, r.z),
                n.x = Math.max(u, n.x),
                n.y = Math.max(l, n.y),
                n.z = Math.max(c, n.z)
            }
            a.sub(n, r),
            s.add(r, n).divide(2)
        }
    }, {
        key: "computeBoundingSphere",
        value: function(t) {
            t || (t = this.getPosition());
            var e = t.data
              , i = t.size;
            this.bounds || this.computeBoundingBox(t);
            for (var r = 0, n = 0, s = e.length; n < s; n += i)
                F.fromArray(e, n),
                r = Math.max(r, this.bounds.center.squaredDistance(F));
            this.bounds.radius = Math.sqrt(r)
        }
    }, {
        key: "remove",
        value: function() {
            for (var t in this.VAOs)
                this.gl.renderer.deleteVertexArray(this.VAOs[t]),
                delete this.VAOs[t];
            for (var e in this.attributes)
                this.gl.deleteBuffer(this.attributes[e].buffer),
                delete this.attributes[e]
        }
    }])
}()
  , U = 1
  , B = {}
  , L = function() {
    return n((function t(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = r.vertex
          , s = r.fragment
          , a = r.uniforms
          , h = void 0 === a ? {} : a
          , o = r.transparent
          , u = void 0 !== o && o
          , l = r.cullFace
          , c = void 0 === l ? e.BACK : l
          , d = r.frontFace
          , f = void 0 === d ? e.CCW : d
          , v = r.depthTest
          , g = void 0 === v || v
          , p = r.depthWrite
          , m = void 0 === p || p
          , y = r.depthFunc
          , b = void 0 === y ? e.LEQUAL : y;
        i(this, t),
        e.canvas,
        this.gl = e,
        this.uniforms = h,
        this.id = U++,
        this.transparent = u,
        this.cullFace = c,
        this.frontFace = f,
        this.depthTest = g,
        this.depthWrite = m,
        this.depthFunc = b,
        this.blendFunc = {},
        this.blendEquation = {},
        this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
        this.vertexShader = e.createShader(e.VERTEX_SHADER),
        this.fragmentShader = e.createShader(e.FRAGMENT_SHADER),
        this.program = e.createProgram(),
        e.attachShader(this.program, this.vertexShader),
        e.attachShader(this.program, this.fragmentShader),
        this.setShaders({
            vertex: n,
            fragment: s
        })
    }
    ), [{
        key: "setShaders",
        value: function(t) {
            var e = t.vertex
              , i = t.fragment;
            if (e && (this.gl.shaderSource(this.vertexShader, e),
            this.gl.compileShader(this.vertexShader),
            this.gl.getShaderInfoLog(this.vertexShader)),
            i && (this.gl.shaderSource(this.fragmentShader, i),
            this.gl.compileShader(this.fragmentShader),
            this.gl.getShaderInfoLog(this.fragmentShader)),
            this.gl.linkProgram(this.program),
            this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
                this.uniformLocations = new Map;
                for (var r = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS), n = 0; n < r; n++) {
                    var s = this.gl.getActiveUniform(this.program, n);
                    this.uniformLocations.set(s, this.gl.getUniformLocation(this.program, s.name));
                    var a = s.name.match(/(\w+)/g);
                    s.uniformName = a[0],
                    s.nameComponents = a.slice(1)
                }
                this.attributeLocations = new Map;
                for (var h = [], o = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES), u = 0; u < o; u++) {
                    var l = this.gl.getActiveAttrib(this.program, u)
                      , c = this.gl.getAttribLocation(this.program, l.name);
                    -1 !== c && (h[c] = l.name,
                    this.attributeLocations.set(l, c))
                }
                this.attributeOrder = h.join("")
            }
        }
    }, {
        key: "setBlendFunc",
        value: function(t, e, i, r) {
            this.blendFunc.src = t,
            this.blendFunc.dst = e,
            this.blendFunc.srcAlpha = i,
            this.blendFunc.dstAlpha = r,
            t && (this.transparent = !0)
        }
    }, {
        key: "setBlendEquation",
        value: function(t, e) {
            this.blendEquation.modeRGB = t,
            this.blendEquation.modeAlpha = e
        }
    }, {
        key: "applyState",
        value: function() {
            this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
            this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
            this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
            this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
            this.gl.renderer.setFrontFace(this.frontFace),
            this.gl.renderer.setDepthMask(this.depthWrite),
            this.gl.renderer.setDepthFunc(this.depthFunc),
            this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
            this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
        }
    }, {
        key: "use",
        value: function() {
            var t = this
              , e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).flipFaces
              , i = void 0 !== e && e
              , r = -1;
            this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program),
            this.gl.renderer.state.currentProgram = this.id),
            this.uniformLocations.forEach((function(e, i) {
                var n, s = t.uniforms[i.uniformName], a = function(t, e) {
                    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!i) {
                        if (Array.isArray(t) || (i = g(t)) || e) {
                            i && (t = i);
                            var r = 0
                              , n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return r >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[r++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: n
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var s, a = !0, h = !1;
                    return {
                        s: function() {
                            i = i.call(t)
                        },
                        n: function() {
                            var t = i.next();
                            return a = t.done,
                            t
                        },
                        e: function(t) {
                            h = !0,
                            s = t
                        },
                        f: function() {
                            try {
                                a || null == i.return || i.return()
                            } finally {
                                if (h)
                                    throw s
                            }
                        }
                    }
                }(i.nameComponents);
                try {
                    for (a.s(); !(n = a.n()).done; ) {
                        var h = n.value;
                        if (!s)
                            break;
                        if (!(h in s)) {
                            if (Array.isArray(s.value))
                                break;
                            s = void 0;
                            break
                        }
                        s = s[h]
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                if (!s)
                    return z("Active uniform ".concat(i.name, " has not been supplied"));
                if (s && void 0 === s.value)
                    return z("".concat(i.name, " uniform is missing a value parameter"));
                if (s.value.texture)
                    return r += 1,
                    s.value.update(r),
                    D(t.gl, i.type, e, r);
                if (s.value.length && s.value[0].texture) {
                    var o = [];
                    return s.value.forEach((function(t) {
                        r += 1,
                        t.update(r),
                        o.push(r)
                    }
                    )),
                    D(t.gl, i.type, e, o)
                }
                D(t.gl, i.type, e, s.value)
            }
            )),
            this.applyState(),
            i && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
        }
    }, {
        key: "remove",
        value: function() {
            this.gl.deleteProgram(this.program)
        }
    }])
}();
function D(t, e, i, r) {
    r = r.length ? function(t) {
        var e = t.length
          , i = t[0].length;
        if (void 0 === i)
            return t;
        var r = e * i
          , n = B[r];
        n || (B[r] = n = new Float32Array(r));
        for (var s = 0; s < e; s++)
            n.set(t[s], s * i);
        return n
    }(r) : r;
    var n = t.renderer.state.uniformLocations.get(i);
    if (r.length)
        if (void 0 === n || n.length !== r.length)
            t.renderer.state.uniformLocations.set(i, r.slice(0));
        else {
            if (function(t, e) {
                if (t.length !== e.length)
                    return !1;
                for (var i = 0, r = t.length; i < r; i++)
                    if (t[i] !== e[i])
                        return !1;
                return !0
            }(n, r))
                return;
            n.set ? n.set(r) : function(t, e) {
                for (var i = 0, r = t.length; i < r; i++)
                    t[i] = e[i]
            }(n, r),
            t.renderer.state.uniformLocations.set(i, n)
        }
    else {
        if (n === r)
            return;
        t.renderer.state.uniformLocations.set(i, r)
    }
    switch (e) {
    case 5126:
        return r.length ? t.uniform1fv(i, r) : t.uniform1f(i, r);
    case 35664:
        return t.uniform2fv(i, r);
    case 35665:
        return t.uniform3fv(i, r);
    case 35666:
        return t.uniform4fv(i, r);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
        return r.length ? t.uniform1iv(i, r) : t.uniform1i(i, r);
    case 35671:
    case 35667:
        return t.uniform2iv(i, r);
    case 35672:
    case 35668:
        return t.uniform3iv(i, r);
    case 35673:
    case 35669:
        return t.uniform4iv(i, r);
    case 35674:
        return t.uniformMatrix2fv(i, !1, r);
    case 35675:
        return t.uniformMatrix3fv(i, !1, r);
    case 35676:
        return t.uniformMatrix4fv(i, !1, r)
    }
}
var N = 0;
function z(t) {
    N > 100 || N++
}
var W = new C
  , j = 1
  , q = function() {
    return n((function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , r = e.canvas
          , n = void 0 === r ? document.createElement("canvas") : r
          , s = e.width
          , a = void 0 === s ? 300 : s
          , h = e.height
          , o = void 0 === h ? 150 : h
          , u = e.dpr
          , l = void 0 === u ? 1 : u
          , c = e.alpha
          , d = void 0 !== c && c
          , f = e.depth
          , v = void 0 === f || f
          , g = e.stencil
          , p = void 0 !== g && g
          , m = e.antialias
          , y = void 0 === m || m
          , b = e.premultipliedAlpha
          , x = void 0 !== b && b
          , _ = e.preserveDrawingBuffer
          , w = void 0 === _ || _
          , k = e.powerPreference
          , M = void 0 === k ? "default" : k
          , A = e.autoClear
          , E = void 0 === A || A
          , S = e.webgl
          , T = void 0 === S ? 2 : S;
        i(this, t);
        var C = {
            alpha: d,
            depth: v,
            stencil: p,
            antialias: y,
            premultipliedAlpha: x,
            preserveDrawingBuffer: w,
            powerPreference: M
        };
        this.dpr = l,
        this.alpha = d,
        this.color = !0,
        this.depth = v,
        this.stencil = p,
        this.premultipliedAlpha = x,
        this.autoClear = E,
        this.id = j++,
        2 === T && (this.gl = n.getContext("webgl2", C)),
        this.isWebgl2 = !!this.gl,
        this.gl || (this.gl = n.getContext("webgl", C)),
        this.gl,
        this.gl.renderer = this,
        this.setSize(a, o),
        this.state = {},
        this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        },
        this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        },
        this.state.cullFace = !1,
        this.state.frontFace = this.gl.CCW,
        this.state.depthMask = !0,
        this.state.depthFunc = this.gl.LEQUAL,
        this.state.premultiplyAlpha = !1,
        this.state.flipY = !1,
        this.state.unpackAlignment = 4,
        this.state.framebuffer = null,
        this.state.viewport = {
            x: 0,
            y: 0,
            width: null,
            height: null
        },
        this.state.textureUnits = [],
        this.state.activeTextureUnit = 0,
        this.state.boundBuffer = null,
        this.state.uniformLocations = new Map,
        this.state.currentProgram = null,
        this.extensions = {},
        this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
        this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
        this.getExtension("OES_texture_float_linear"),
        this.getExtension("OES_texture_half_float"),
        this.getExtension("OES_texture_half_float_linear"),
        this.getExtension("OES_element_index_uint"),
        this.getExtension("OES_standard_derivatives"),
        this.getExtension("EXT_sRGB"),
        this.getExtension("WEBGL_depth_texture"),
        this.getExtension("WEBGL_draw_buffers")),
        this.getExtension("WEBGL_compressed_texture_astc"),
        this.getExtension("EXT_texture_compression_bptc"),
        this.getExtension("WEBGL_compressed_texture_s3tc"),
        this.getExtension("WEBGL_compressed_texture_etc1"),
        this.getExtension("WEBGL_compressed_texture_pvrtc"),
        this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
        this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
        this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
        this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
        this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
        this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
        this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
        this.parameters = {},
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
    ), [{
        key: "setSize",
        value: function(t, e) {
            this.width = t,
            this.height = e,
            this.gl.canvas.width = t * this.dpr,
            this.gl.canvas.height = e * this.dpr,
            this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
                width: t + "px",
                height: e + "px"
            })
        }
    }, {
        key: "setViewport",
        value: function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t,
            this.state.viewport.height = e,
            this.state.viewport.x = i,
            this.state.viewport.y = r,
            this.gl.viewport(i, r, t, e))
        }
    }, {
        key: "setScissor",
        value: function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            this.gl.scissor(i, r, t, e)
        }
    }, {
        key: "enable",
        value: function(t) {
            !0 !== this.state[t] && (this.gl.enable(t),
            this.state[t] = !0)
        }
    }, {
        key: "disable",
        value: function(t) {
            !1 !== this.state[t] && (this.gl.disable(t),
            this.state[t] = !1)
        }
    }, {
        key: "setBlendFunc",
        value: function(t, e, i, r) {
            this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === r || (this.state.blendFunc.src = t,
            this.state.blendFunc.dst = e,
            this.state.blendFunc.srcAlpha = i,
            this.state.blendFunc.dstAlpha = r,
            void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, r) : this.gl.blendFunc(t, e))
        }
    }, {
        key: "setBlendEquation",
        value: function(t, e) {
            t = t || this.gl.FUNC_ADD,
            this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t,
            this.state.blendEquation.modeAlpha = e,
            void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
        }
    }, {
        key: "setCullFace",
        value: function(t) {
            this.state.cullFace !== t && (this.state.cullFace = t,
            this.gl.cullFace(t))
        }
    }, {
        key: "setFrontFace",
        value: function(t) {
            this.state.frontFace !== t && (this.state.frontFace = t,
            this.gl.frontFace(t))
        }
    }, {
        key: "setDepthMask",
        value: function(t) {
            this.state.depthMask !== t && (this.state.depthMask = t,
            this.gl.depthMask(t))
        }
    }, {
        key: "setDepthFunc",
        value: function(t) {
            this.state.depthFunc !== t && (this.state.depthFunc = t,
            this.gl.depthFunc(t))
        }
    }, {
        key: "activeTexture",
        value: function(t) {
            this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t,
            this.gl.activeTexture(this.gl.TEXTURE0 + t))
        }
    }, {
        key: "bindFramebuffer",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.target
              , i = void 0 === e ? this.gl.FRAMEBUFFER : e
              , r = t.buffer
              , n = void 0 === r ? null : r;
            this.state.framebuffer !== n && (this.state.framebuffer = n,
            this.gl.bindFramebuffer(i, n))
        }
    }, {
        key: "getExtension",
        value: function(t, e, i) {
            return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
            e ? this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null : this.extensions[t])
        }
    }, {
        key: "sortOpaque",
        value: function(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
        }
    }, {
        key: "sortTransparent",
        value: function(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
        }
    }, {
        key: "sortUI",
        value: function(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
        }
    }, {
        key: "getRenderList",
        value: function(t) {
            var e = t.scene
              , i = t.camera
              , r = t.frustumCull
              , n = t.sort
              , s = [];
            if (i && r && i.updateFrustum(),
            e.traverse((function(t) {
                if (!t.visible)
                    return !0;
                t.draw && (r && t.frustumCulled && i && !i.frustumIntersectsMesh(t) || s.push(t))
            }
            )),
            n) {
                var a = []
                  , h = []
                  , o = [];
                s.forEach((function(t) {
                    t.program.transparent ? t.program.depthTest ? h.push(t) : o.push(t) : a.push(t),
                    t.zDepth = 0,
                    0 === t.renderOrder && t.program.depthTest && i && (t.worldMatrix.getTranslation(W),
                    W.applyMatrix4(i.projectionViewMatrix),
                    t.zDepth = W.z)
                }
                )),
                a.sort(this.sortOpaque),
                h.sort(this.sortTransparent),
                o.sort(this.sortUI),
                s = a.concat(h, o)
            }
            return s
        }
    }, {
        key: "render",
        value: function(t) {
            var e = t.scene
              , i = t.camera
              , r = t.target
              , n = void 0 === r ? null : r
              , s = t.update
              , a = void 0 === s || s
              , h = t.sort
              , o = void 0 === h || h
              , u = t.frustumCull
              , l = void 0 === u || u
              , c = t.clear;
            null === n ? (this.bindFramebuffer(),
            this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(n),
            this.setViewport(n.width, n.height)),
            (c || this.autoClear && !1 !== c) && (!this.depth || n && !n.depth || (this.enable(this.gl.DEPTH_TEST),
            this.setDepthMask(!0)),
            this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
            a && e.updateMatrixWorld(),
            i && i.updateMatrixWorld(),
            this.getRenderList({
                scene: e,
                camera: i,
                frustumCull: l,
                sort: o
            }).forEach((function(t) {
                t.draw({
                    camera: i
                })
            }
            ))
        }
    }])
}();
function G(t, e, i) {
    var r = e[0]
      , n = e[1]
      , s = e[2]
      , a = e[3]
      , h = i[0]
      , o = i[1]
      , u = i[2]
      , l = i[3];
    return t[0] = r * l + a * h + n * u - s * o,
    t[1] = n * l + a * o + s * h - r * u,
    t[2] = s * l + a * u + r * o - n * h,
    t[3] = a * l - r * h - n * o - s * u,
    t
}
var V = function(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t
}
  , X = function(t, e, i, r, n) {
    return t[0] = e,
    t[1] = i,
    t[2] = r,
    t[3] = n,
    t
}
  , Y = function(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
}
  , H = function(t, e) {
    var i = e[0]
      , r = e[1]
      , n = e[2]
      , s = e[3]
      , a = i * i + r * r + n * n + s * s;
    return a > 0 && (a = 1 / Math.sqrt(a)),
    t[0] = i * a,
    t[1] = r * a,
    t[2] = n * a,
    t[3] = s * a,
    t
}
  , Z = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        i(this, r),
        (t = e(this, r, [n, s, a, h])).onChange = function() {}
        ,
        t._target = t;
        var o = ["0", "1", "2", "3"];
        return u(t, new Proxy(t,{
            set: function(t, e) {
                var i = Reflect.set.apply(Reflect, arguments);
                return i && o.includes(e) && t.onChange(),
                i
            }
        }))
    }
    return h(r, p(Array)),
    n(r, [{
        key: "x",
        get: function() {
            return this[0]
        },
        set: function(t) {
            this._target[0] = t,
            this.onChange()
        }
    }, {
        key: "y",
        get: function() {
            return this[1]
        },
        set: function(t) {
            this._target[1] = t,
            this.onChange()
        }
    }, {
        key: "z",
        get: function() {
            return this[2]
        },
        set: function(t) {
            this._target[2] = t,
            this.onChange()
        }
    }, {
        key: "w",
        get: function() {
            return this[3]
        },
        set: function(t) {
            this._target[3] = t,
            this.onChange()
        }
    }, {
        key: "identity",
        value: function() {
            var t;
            return (t = this._target)[0] = 0,
            t[1] = 0,
            t[2] = 0,
            t[3] = 1,
            this.onChange(),
            this
        }
    }, {
        key: "set",
        value: function(t, e, i, r) {
            return t.length ? this.copy(t) : (X(this._target, t, e, i, r),
            this.onChange(),
            this)
        }
    }, {
        key: "rotateX",
        value: function(t) {
            return function(t, e, i) {
                i *= .5;
                var r = e[0]
                  , n = e[1]
                  , s = e[2]
                  , a = e[3]
                  , h = Math.sin(i)
                  , o = Math.cos(i);
                t[0] = r * o + a * h,
                t[1] = n * o + s * h,
                t[2] = s * o - n * h,
                t[3] = a * o - r * h
            }(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "rotateY",
        value: function(t) {
            return function(t, e, i) {
                i *= .5;
                var r = e[0]
                  , n = e[1]
                  , s = e[2]
                  , a = e[3]
                  , h = Math.sin(i)
                  , o = Math.cos(i);
                t[0] = r * o - s * h,
                t[1] = n * o + a * h,
                t[2] = s * o + r * h,
                t[3] = a * o - n * h
            }(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "rotateZ",
        value: function(t) {
            return function(t, e, i) {
                i *= .5;
                var r = e[0]
                  , n = e[1]
                  , s = e[2]
                  , a = e[3]
                  , h = Math.sin(i)
                  , o = Math.cos(i);
                t[0] = r * o + n * h,
                t[1] = n * o - r * h,
                t[2] = s * o + a * h,
                t[3] = a * o - s * h
            }(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "inverse",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._target;
            return function(t, e) {
                var i = e[0]
                  , r = e[1]
                  , n = e[2]
                  , s = e[3]
                  , a = i * i + r * r + n * n + s * s
                  , h = a ? 1 / a : 0;
                t[0] = -i * h,
                t[1] = -r * h,
                t[2] = -n * h,
                t[3] = s * h
            }(this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "conjugate",
        value: function() {
            var t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._target;
            return t = this._target,
            e = i,
            t[0] = -e[0],
            t[1] = -e[1],
            t[2] = -e[2],
            t[3] = e[3],
            this.onChange(),
            this
        }
    }, {
        key: "copy",
        value: function(t) {
            return V(this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "normalize",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._target;
            return H(this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            return e ? G(this._target, t, e) : G(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "dot",
        value: function(t) {
            return Y(this._target, t)
        }
    }, {
        key: "fromMatrix3",
        value: function(t) {
            return function(t, e) {
                var i, r = e[0] + e[4] + e[8];
                if (r > 0)
                    i = Math.sqrt(r + 1),
                    t[3] = .5 * i,
                    i = .5 / i,
                    t[0] = (e[5] - e[7]) * i,
                    t[1] = (e[6] - e[2]) * i,
                    t[2] = (e[1] - e[3]) * i;
                else {
                    var n = 0;
                    e[4] > e[0] && (n = 1),
                    e[8] > e[3 * n + n] && (n = 2);
                    var s = (n + 1) % 3
                      , a = (n + 2) % 3;
                    i = Math.sqrt(e[3 * n + n] - e[3 * s + s] - e[3 * a + a] + 1),
                    t[n] = .5 * i,
                    i = .5 / i,
                    t[3] = (e[3 * s + a] - e[3 * a + s]) * i,
                    t[s] = (e[3 * s + n] + e[3 * n + s]) * i,
                    t[a] = (e[3 * a + n] + e[3 * n + a]) * i
                }
            }(this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "fromEuler",
        value: function(t, e) {
            return function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "YXZ"
                  , r = Math.sin(.5 * e[0])
                  , n = Math.cos(.5 * e[0])
                  , s = Math.sin(.5 * e[1])
                  , a = Math.cos(.5 * e[1])
                  , h = Math.sin(.5 * e[2])
                  , o = Math.cos(.5 * e[2]);
                "XYZ" === i ? (t[0] = r * a * o + n * s * h,
                t[1] = n * s * o - r * a * h,
                t[2] = n * a * h + r * s * o,
                t[3] = n * a * o - r * s * h) : "YXZ" === i ? (t[0] = r * a * o + n * s * h,
                t[1] = n * s * o - r * a * h,
                t[2] = n * a * h - r * s * o,
                t[3] = n * a * o + r * s * h) : "ZXY" === i ? (t[0] = r * a * o - n * s * h,
                t[1] = n * s * o + r * a * h,
                t[2] = n * a * h + r * s * o,
                t[3] = n * a * o - r * s * h) : "ZYX" === i ? (t[0] = r * a * o - n * s * h,
                t[1] = n * s * o + r * a * h,
                t[2] = n * a * h - r * s * o,
                t[3] = n * a * o + r * s * h) : "YZX" === i ? (t[0] = r * a * o + n * s * h,
                t[1] = n * s * o + r * a * h,
                t[2] = n * a * h - r * s * o,
                t[3] = n * a * o - r * s * h) : "XZY" === i && (t[0] = r * a * o - n * s * h,
                t[1] = n * s * o - r * a * h,
                t[2] = n * a * h + r * s * o,
                t[3] = n * a * o + r * s * h)
            }(this._target, t, t.order),
            e || this.onChange(),
            this
        }
    }, {
        key: "fromAxisAngle",
        value: function(t, e) {
            return function(t, e, i) {
                i *= .5;
                var r = Math.sin(i);
                t[0] = r * e[0],
                t[1] = r * e[1],
                t[2] = r * e[2],
                t[3] = Math.cos(i)
            }(this._target, t, e),
            this.onChange(),
            this
        }
    }, {
        key: "slerp",
        value: function(t, e) {
            return function(t, e, i, r) {
                var n, s, a, h, o, u = e[0], l = e[1], c = e[2], d = e[3], f = i[0], v = i[1], g = i[2], p = i[3];
                (s = u * f + l * v + c * g + d * p) < 0 && (s = -s,
                f = -f,
                v = -v,
                g = -g,
                p = -p),
                1 - s > 1e-6 ? (n = Math.acos(s),
                a = Math.sin(n),
                h = Math.sin((1 - r) * n) / a,
                o = Math.sin(r * n) / a) : (h = 1 - r,
                o = r),
                t[0] = h * u + o * f,
                t[1] = h * l + o * v,
                t[2] = h * c + o * g,
                t[3] = h * d + o * p
            }(this._target, this._target, t, e),
            this.onChange(),
            this
        }
    }, {
        key: "fromArray",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this._target[0] = t[e],
            this._target[1] = t[e + 1],
            this._target[2] = t[e + 2],
            this._target[3] = t[e + 3],
            this.onChange(),
            this
        }
    }, {
        key: "toArray",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t[e] = this[0],
            t[e + 1] = this[1],
            t[e + 2] = this[2],
            t[e + 3] = this[3],
            t
        }
    }])
}();
function Q(t) {
    var e = t[0]
      , i = t[1]
      , r = t[2]
      , n = t[3]
      , s = t[4]
      , a = t[5]
      , h = t[6]
      , o = t[7]
      , u = t[8]
      , l = t[9]
      , c = t[10]
      , d = t[11]
      , f = t[12]
      , v = t[13]
      , g = t[14]
      , p = t[15];
    return (e * a - i * s) * (c * p - d * g) - (e * h - r * s) * (l * p - d * v) + (e * o - n * s) * (l * g - c * v) + (i * h - r * a) * (u * p - d * f) - (i * o - n * a) * (u * g - c * f) + (r * o - n * h) * (u * v - l * f)
}
function K(t, e, i) {
    var r = e[0]
      , n = e[1]
      , s = e[2]
      , a = e[3]
      , h = e[4]
      , o = e[5]
      , u = e[6]
      , l = e[7]
      , c = e[8]
      , d = e[9]
      , f = e[10]
      , v = e[11]
      , g = e[12]
      , p = e[13]
      , m = e[14]
      , y = e[15]
      , b = i[0]
      , x = i[1]
      , _ = i[2]
      , w = i[3];
    return t[0] = b * r + x * h + _ * c + w * g,
    t[1] = b * n + x * o + _ * d + w * p,
    t[2] = b * s + x * u + _ * f + w * m,
    t[3] = b * a + x * l + _ * v + w * y,
    b = i[4],
    x = i[5],
    _ = i[6],
    w = i[7],
    t[4] = b * r + x * h + _ * c + w * g,
    t[5] = b * n + x * o + _ * d + w * p,
    t[6] = b * s + x * u + _ * f + w * m,
    t[7] = b * a + x * l + _ * v + w * y,
    b = i[8],
    x = i[9],
    _ = i[10],
    w = i[11],
    t[8] = b * r + x * h + _ * c + w * g,
    t[9] = b * n + x * o + _ * d + w * p,
    t[10] = b * s + x * u + _ * f + w * m,
    t[11] = b * a + x * l + _ * v + w * y,
    b = i[12],
    x = i[13],
    _ = i[14],
    w = i[15],
    t[12] = b * r + x * h + _ * c + w * g,
    t[13] = b * n + x * o + _ * d + w * p,
    t[14] = b * s + x * u + _ * f + w * m,
    t[15] = b * a + x * l + _ * v + w * y,
    t
}
function $(t, e) {
    var i = e[0]
      , r = e[1]
      , n = e[2]
      , s = e[4]
      , a = e[5]
      , h = e[6]
      , o = e[8]
      , u = e[9]
      , l = e[10];
    return t[0] = Math.hypot(i, r, n),
    t[1] = Math.hypot(s, a, h),
    t[2] = Math.hypot(o, u, l),
    t
}
var J, tt = (J = [1, 1, 1],
function(t, e) {
    var i = J;
    $(i, e);
    var r = 1 / i[0]
      , n = 1 / i[1]
      , s = 1 / i[2]
      , a = e[0] * r
      , h = e[1] * n
      , o = e[2] * s
      , u = e[4] * r
      , l = e[5] * n
      , c = e[6] * s
      , d = e[8] * r
      , f = e[9] * n
      , v = e[10] * s
      , g = a + l + v
      , p = 0;
    return g > 0 ? (p = 2 * Math.sqrt(g + 1),
    t[3] = .25 * p,
    t[0] = (c - f) / p,
    t[1] = (d - o) / p,
    t[2] = (h - u) / p) : a > l && a > v ? (p = 2 * Math.sqrt(1 + a - l - v),
    t[3] = (c - f) / p,
    t[0] = .25 * p,
    t[1] = (h + u) / p,
    t[2] = (d + o) / p) : l > v ? (p = 2 * Math.sqrt(1 + l - a - v),
    t[3] = (d - o) / p,
    t[0] = (h + u) / p,
    t[1] = .25 * p,
    t[2] = (c + f) / p) : (p = 2 * Math.sqrt(1 + v - a - l),
    t[3] = (h - u) / p,
    t[0] = (d + o) / p,
    t[1] = (c + f) / p,
    t[2] = .25 * p),
    t
}
);
function et(t, e, i) {
    return t[0] = e[0] + i[0],
    t[1] = e[1] + i[1],
    t[2] = e[2] + i[2],
    t[3] = e[3] + i[3],
    t[4] = e[4] + i[4],
    t[5] = e[5] + i[5],
    t[6] = e[6] + i[6],
    t[7] = e[7] + i[7],
    t[8] = e[8] + i[8],
    t[9] = e[9] + i[9],
    t[10] = e[10] + i[10],
    t[11] = e[11] + i[11],
    t[12] = e[12] + i[12],
    t[13] = e[13] + i[13],
    t[14] = e[14] + i[14],
    t[15] = e[15] + i[15],
    t
}
function it(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t[2] = e[2] - i[2],
    t[3] = e[3] - i[3],
    t[4] = e[4] - i[4],
    t[5] = e[5] - i[5],
    t[6] = e[6] - i[6],
    t[7] = e[7] - i[7],
    t[8] = e[8] - i[8],
    t[9] = e[9] - i[9],
    t[10] = e[10] - i[10],
    t[11] = e[11] - i[11],
    t[12] = e[12] - i[12],
    t[13] = e[13] - i[13],
    t[14] = e[14] - i[14],
    t[15] = e[15] - i[15],
    t
}
var rt = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, d = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, f = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, v = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, g = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, p = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0, m = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0, y = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : 0, b = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0, x = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 1;
        return i(this, r),
        u(t = e(this, r, [n, s, a, h, o, l, c, d, f, v, g, p, m, y, b, x]), t)
    }
    return h(r, p(Array)),
    n(r, [{
        key: "x",
        get: function() {
            return this[12]
        },
        set: function(t) {
            this[12] = t
        }
    }, {
        key: "y",
        get: function() {
            return this[13]
        },
        set: function(t) {
            this[13] = t
        }
    }, {
        key: "z",
        get: function() {
            return this[14]
        },
        set: function(t) {
            this[14] = t
        }
    }, {
        key: "w",
        get: function() {
            return this[15]
        },
        set: function(t) {
            this[15] = t
        }
    }, {
        key: "set",
        value: function(t, e, i, r, n, s, a, h, o, u, l, c, d, f, v, g) {
            return t.length ? this.copy(t) : (function(t, e, i, r, n, s, a, h, o, u, l, c, d, f, v, g, p) {
                t[0] = e,
                t[1] = i,
                t[2] = r,
                t[3] = n,
                t[4] = s,
                t[5] = a,
                t[6] = h,
                t[7] = o,
                t[8] = u,
                t[9] = l,
                t[10] = c,
                t[11] = d,
                t[12] = f,
                t[13] = v,
                t[14] = g,
                t[15] = p
            }(this, t, e, i, r, n, s, a, h, o, u, l, c, d, f, v, g),
            this)
        }
    }, {
        key: "translate",
        value: function(t) {
            return function(t, e, i) {
                var r, n, s, a, h, o, u, l, c, d, f, v, g = i[0], p = i[1], m = i[2];
                e === t ? (t[12] = e[0] * g + e[4] * p + e[8] * m + e[12],
                t[13] = e[1] * g + e[5] * p + e[9] * m + e[13],
                t[14] = e[2] * g + e[6] * p + e[10] * m + e[14],
                t[15] = e[3] * g + e[7] * p + e[11] * m + e[15]) : (r = e[0],
                n = e[1],
                s = e[2],
                a = e[3],
                h = e[4],
                o = e[5],
                u = e[6],
                l = e[7],
                c = e[8],
                d = e[9],
                f = e[10],
                v = e[11],
                t[0] = r,
                t[1] = n,
                t[2] = s,
                t[3] = a,
                t[4] = h,
                t[5] = o,
                t[6] = u,
                t[7] = l,
                t[8] = c,
                t[9] = d,
                t[10] = f,
                t[11] = v,
                t[12] = r * g + h * p + c * m + e[12],
                t[13] = n * g + o * p + d * m + e[13],
                t[14] = s * g + u * p + f * m + e[14],
                t[15] = a * g + l * p + v * m + e[15])
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "rotate",
        value: function(t, e) {
            return function(t, e, i, r) {
                var n, s, a, h, o, u, l, c, d, f, v, g, p, m, y, b, x, _, w, k, M, A, E, S, T = r[0], C = r[1], F = r[2], R = Math.hypot(T, C, F);
                Math.abs(R) < 1e-6 || (T *= R = 1 / R,
                C *= R,
                F *= R,
                n = Math.sin(i),
                a = 1 - (s = Math.cos(i)),
                h = e[0],
                o = e[1],
                u = e[2],
                l = e[3],
                c = e[4],
                d = e[5],
                f = e[6],
                v = e[7],
                g = e[8],
                p = e[9],
                m = e[10],
                y = e[11],
                b = T * T * a + s,
                x = C * T * a + F * n,
                _ = F * T * a - C * n,
                w = T * C * a - F * n,
                k = C * C * a + s,
                M = F * C * a + T * n,
                A = T * F * a + C * n,
                E = C * F * a - T * n,
                S = F * F * a + s,
                t[0] = h * b + c * x + g * _,
                t[1] = o * b + d * x + p * _,
                t[2] = u * b + f * x + m * _,
                t[3] = l * b + v * x + y * _,
                t[4] = h * w + c * k + g * M,
                t[5] = o * w + d * k + p * M,
                t[6] = u * w + f * k + m * M,
                t[7] = l * w + v * k + y * M,
                t[8] = h * A + c * E + g * S,
                t[9] = o * A + d * E + p * S,
                t[10] = u * A + f * E + m * S,
                t[11] = l * A + v * E + y * S,
                e !== t && (t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15]))
            }(this, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this, t, e),
            this
        }
    }, {
        key: "scale",
        value: function(t) {
            return function(t, e, i) {
                var r = i[0]
                  , n = i[1]
                  , s = i[2];
                t[0] = e[0] * r,
                t[1] = e[1] * r,
                t[2] = e[2] * r,
                t[3] = e[3] * r,
                t[4] = e[4] * n,
                t[5] = e[5] * n,
                t[6] = e[6] * n,
                t[7] = e[7] * n,
                t[8] = e[8] * s,
                t[9] = e[9] * s,
                t[10] = e[10] * s,
                t[11] = e[11] * s,
                t[12] = e[12],
                t[13] = e[13],
                t[14] = e[14],
                t[15] = e[15]
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, "number" == typeof t ? [t, t, t] : t),
            this
        }
    }, {
        key: "add",
        value: function(t, e) {
            return e ? et(this, t, e) : et(this, this, t),
            this
        }
    }, {
        key: "sub",
        value: function(t, e) {
            return e ? it(this, t, e) : it(this, this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            var i, r, n;
            return t.length ? e ? K(this, t, e) : K(this, this, t) : (r = this,
            n = t,
            (i = this)[0] = r[0] * n,
            i[1] = r[1] * n,
            i[2] = r[2] * n,
            i[3] = r[3] * n,
            i[4] = r[4] * n,
            i[5] = r[5] * n,
            i[6] = r[6] * n,
            i[7] = r[7] * n,
            i[8] = r[8] * n,
            i[9] = r[9] * n,
            i[10] = r[10] * n,
            i[11] = r[11] * n,
            i[12] = r[12] * n,
            i[13] = r[13] * n,
            i[14] = r[14] * n,
            i[15] = r[15] * n),
            this
        }
    }, {
        key: "identity",
        value: function() {
            var t;
            return (t = this)[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 0,
            t[5] = 1,
            t[6] = 0,
            t[7] = 0,
            t[8] = 0,
            t[9] = 0,
            t[10] = 1,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            this
        }
    }, {
        key: "copy",
        value: function(t) {
            var e, i;
            return i = t,
            (e = this)[0] = i[0],
            e[1] = i[1],
            e[2] = i[2],
            e[3] = i[3],
            e[4] = i[4],
            e[5] = i[5],
            e[6] = i[6],
            e[7] = i[7],
            e[8] = i[8],
            e[9] = i[9],
            e[10] = i[10],
            e[11] = i[11],
            e[12] = i[12],
            e[13] = i[13],
            e[14] = i[14],
            e[15] = i[15],
            this
        }
    }, {
        key: "fromPerspective",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function(t, e, i, r, n) {
                var s = 1 / Math.tan(e / 2)
                  , a = 1 / (r - n);
                t[0] = s / i,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = s,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = (n + r) * a,
                t[11] = -1,
                t[12] = 0,
                t[13] = 0,
                t[14] = 2 * n * r * a,
                t[15] = 0
            }(this, t.fov, t.aspect, t.near, t.far),
            this
        }
    }, {
        key: "fromOrthogonal",
        value: function(t) {
            return function(t, e, i, r, n, s, a) {
                var h = 1 / (e - i)
                  , o = 1 / (r - n)
                  , u = 1 / (s - a);
                t[0] = -2 * h,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = -2 * o,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = 2 * u,
                t[11] = 0,
                t[12] = (e + i) * h,
                t[13] = (n + r) * o,
                t[14] = (a + s) * u,
                t[15] = 1
            }(this, t.left, t.right, t.bottom, t.top, t.near, t.far),
            this
        }
    }, {
        key: "fromQuaternion",
        value: function(t) {
            return function(t, e) {
                var i = e[0]
                  , r = e[1]
                  , n = e[2]
                  , s = e[3]
                  , a = i + i
                  , h = r + r
                  , o = n + n
                  , u = i * a
                  , l = r * a
                  , c = r * h
                  , d = n * a
                  , f = n * h
                  , v = n * o
                  , g = s * a
                  , p = s * h
                  , m = s * o;
                t[0] = 1 - c - v,
                t[1] = l + m,
                t[2] = d - p,
                t[3] = 0,
                t[4] = l - m,
                t[5] = 1 - u - v,
                t[6] = f + g,
                t[7] = 0,
                t[8] = d + p,
                t[9] = f - g,
                t[10] = 1 - u - c,
                t[11] = 0,
                t[12] = 0,
                t[13] = 0,
                t[14] = 0,
                t[15] = 1
            }(this, t),
            this
        }
    }, {
        key: "setPosition",
        value: function(t) {
            return this.x = t[0],
            this.y = t[1],
            this.z = t[2],
            this
        }
    }, {
        key: "inverse",
        value: function() {
            var t, e, i, r, n, s, a, h, o, u, l, c, d, f, v, g, p, m, y, b, x, _, w, k, M, A, E, S, T, C, F;
            return t = this,
            i = (e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0],
            r = e[1],
            n = e[2],
            s = e[3],
            a = e[4],
            h = e[5],
            o = e[6],
            u = e[7],
            l = e[8],
            c = e[9],
            d = e[10],
            f = e[11],
            v = e[12],
            g = e[13],
            p = e[14],
            m = e[15],
            (F = (y = i * h - r * a) * (C = d * m - f * p) - (b = i * o - n * a) * (T = c * m - f * g) + (x = i * u - s * a) * (S = c * p - d * g) + (_ = r * o - n * h) * (E = l * m - f * v) - (w = r * u - s * h) * (A = l * p - d * v) + (k = n * u - s * o) * (M = l * g - c * v)) && (F = 1 / F,
            t[0] = (h * C - o * T + u * S) * F,
            t[1] = (n * T - r * C - s * S) * F,
            t[2] = (g * k - p * w + m * _) * F,
            t[3] = (d * w - c * k - f * _) * F,
            t[4] = (o * E - a * C - u * A) * F,
            t[5] = (i * C - n * E + s * A) * F,
            t[6] = (p * x - v * k - m * b) * F,
            t[7] = (l * k - d * x + f * b) * F,
            t[8] = (a * T - h * E + u * M) * F,
            t[9] = (r * E - i * T - s * M) * F,
            t[10] = (v * w - g * x + m * y) * F,
            t[11] = (c * x - l * w - f * y) * F,
            t[12] = (h * A - a * S - o * M) * F,
            t[13] = (i * S - r * A + n * M) * F,
            t[14] = (g * b - v * _ - p * y) * F,
            t[15] = (l * _ - c * b + d * y) * F),
            this
        }
    }, {
        key: "compose",
        value: function(t, e, i) {
            var r, n, s, a, h, o, u, l, c, d, f, v, g, p, m, y, b, x, _, w, k, M, A;
            return n = e,
            s = i,
            a = this,
            h = (r = t)[0],
            o = r[1],
            u = r[2],
            l = r[3],
            v = h * (c = h + h),
            g = h * (d = o + o),
            p = h * (f = u + u),
            m = o * d,
            y = o * f,
            b = u * f,
            x = l * c,
            _ = l * d,
            w = l * f,
            k = s[0],
            M = s[1],
            A = s[2],
            a[0] = (1 - (m + b)) * k,
            a[1] = (g + w) * k,
            a[2] = (p - _) * k,
            a[3] = 0,
            a[4] = (g - w) * M,
            a[5] = (1 - (v + b)) * M,
            a[6] = (y + x) * M,
            a[7] = 0,
            a[8] = (p + _) * A,
            a[9] = (y - x) * A,
            a[10] = (1 - (v + m)) * A,
            a[11] = 0,
            a[12] = n[0],
            a[13] = n[1],
            a[14] = n[2],
            a[15] = 1,
            this
        }
    }, {
        key: "decompose",
        value: function(t, e, i) {
            return function(t, e, i, r) {
                var n = m([t[0], t[1], t[2]])
                  , s = m([t[4], t[5], t[6]])
                  , a = m([t[8], t[9], t[10]]);
                Q(t) < 0 && (n = -n),
                i[0] = t[12],
                i[1] = t[13],
                i[2] = t[14];
                var h = t.slice()
                  , o = 1 / n
                  , u = 1 / s
                  , l = 1 / a;
                h[0] *= o,
                h[1] *= o,
                h[2] *= o,
                h[4] *= u,
                h[5] *= u,
                h[6] *= u,
                h[8] *= l,
                h[9] *= l,
                h[10] *= l,
                tt(e, h),
                r[0] = n,
                r[1] = s,
                r[2] = a
            }(this, t, e, i),
            this
        }
    }, {
        key: "getRotation",
        value: function(t) {
            return tt(t, this),
            this
        }
    }, {
        key: "getTranslation",
        value: function(t) {
            var e, i;
            return i = this,
            (e = t)[0] = i[12],
            e[1] = i[13],
            e[2] = i[14],
            this
        }
    }, {
        key: "getScaling",
        value: function(t) {
            return $(t, this),
            this
        }
    }, {
        key: "getMaxScaleOnAxis",
        value: function() {
            return e = (t = this)[0],
            i = t[1],
            r = t[2],
            n = t[4],
            s = t[5],
            a = t[6],
            h = t[8],
            o = t[9],
            u = t[10],
            l = e * e + i * i + r * r,
            c = n * n + s * s + a * a,
            d = h * h + o * o + u * u,
            Math.sqrt(Math.max(l, c, d));
            var t, e, i, r, n, s, a, h, o, u, l, c, d
        }
    }, {
        key: "lookAt",
        value: function(t, e, i) {
            return function(t, e, i, r) {
                var n = e[0]
                  , s = e[1]
                  , a = e[2]
                  , h = r[0]
                  , o = r[1]
                  , u = r[2]
                  , l = n - i[0]
                  , c = s - i[1]
                  , d = a - i[2]
                  , f = l * l + c * c + d * d;
                0 === f ? d = 1 : (l *= f = 1 / Math.sqrt(f),
                c *= f,
                d *= f);
                var v = o * d - u * c
                  , g = u * l - h * d
                  , p = h * c - o * l;
                0 == (f = v * v + g * g + p * p) && (u ? h += 1e-6 : o ? u += 1e-6 : o += 1e-6,
                f = (v = o * d - u * c) * v + (g = u * l - h * d) * g + (p = h * c - o * l) * p),
                v *= f = 1 / Math.sqrt(f),
                g *= f,
                p *= f,
                t[0] = v,
                t[1] = g,
                t[2] = p,
                t[3] = 0,
                t[4] = c * p - d * g,
                t[5] = d * v - l * p,
                t[6] = l * g - c * v,
                t[7] = 0,
                t[8] = l,
                t[9] = c,
                t[10] = d,
                t[11] = 0,
                t[12] = n,
                t[13] = s,
                t[14] = a,
                t[15] = 1
            }(this, t, e, i),
            this
        }
    }, {
        key: "determinant",
        value: function() {
            return Q(this)
        }
    }, {
        key: "fromArray",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this[0] = t[e],
            this[1] = t[e + 1],
            this[2] = t[e + 2],
            this[3] = t[e + 3],
            this[4] = t[e + 4],
            this[5] = t[e + 5],
            this[6] = t[e + 6],
            this[7] = t[e + 7],
            this[8] = t[e + 8],
            this[9] = t[e + 9],
            this[10] = t[e + 10],
            this[11] = t[e + 11],
            this[12] = t[e + 12],
            this[13] = t[e + 13],
            this[14] = t[e + 14],
            this[15] = t[e + 15],
            this
        }
    }, {
        key: "toArray",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t[e] = this[0],
            t[e + 1] = this[1],
            t[e + 2] = this[2],
            t[e + 3] = this[3],
            t[e + 4] = this[4],
            t[e + 5] = this[5],
            t[e + 6] = this[6],
            t[e + 7] = this[7],
            t[e + 8] = this[8],
            t[e + 9] = this[9],
            t[e + 10] = this[10],
            t[e + 11] = this[11],
            t[e + 12] = this[12],
            t[e + 13] = this[13],
            t[e + 14] = this[14],
            t[e + 15] = this[15],
            t
        }
    }])
}();
var nt = new rt
  , st = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n, h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "YXZ";
        i(this, r),
        (t = e(this, r, [n, s, a])).order = h,
        t.onChange = function() {}
        ,
        t._target = t;
        var o = ["0", "1", "2"];
        return u(t, new Proxy(t,{
            set: function(t, e) {
                var i = Reflect.set.apply(Reflect, arguments);
                return i && o.includes(e) && t.onChange(),
                i
            }
        }))
    }
    return h(r, p(Array)),
    n(r, [{
        key: "x",
        get: function() {
            return this[0]
        },
        set: function(t) {
            this._target[0] = t,
            this.onChange()
        }
    }, {
        key: "y",
        get: function() {
            return this[1]
        },
        set: function(t) {
            this._target[1] = t,
            this.onChange()
        }
    }, {
        key: "z",
        get: function() {
            return this[2]
        },
        set: function(t) {
            this._target[2] = t,
            this.onChange()
        }
    }, {
        key: "set",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
            return t.length ? this.copy(t) : (this._target[0] = t,
            this._target[1] = e,
            this._target[2] = i,
            this.onChange(),
            this)
        }
    }, {
        key: "copy",
        value: function(t) {
            return this._target[0] = t[0],
            this._target[1] = t[1],
            this._target[2] = t[2],
            this.onChange(),
            this
        }
    }, {
        key: "reorder",
        value: function(t) {
            return this._target.order = t,
            this.onChange(),
            this
        }
    }, {
        key: "fromRotationMatrix",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.order;
            return function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "YXZ";
                "XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)),
                Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]),
                t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]),
                t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)),
                Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]),
                t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]),
                t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)),
                Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]),
                t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0,
                t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)),
                Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]),
                t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0,
                t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)),
                Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]),
                t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0,
                t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)),
                Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]),
                t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]),
                t[1] = 0))
            }(this._target, t, e),
            this.onChange(),
            this
        }
    }, {
        key: "fromQuaternion",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.order
              , i = arguments.length > 2 ? arguments[2] : void 0;
            return nt.fromQuaternion(t),
            this._target.fromRotationMatrix(nt, e),
            i || this.onChange(),
            this
        }
    }, {
        key: "fromArray",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this._target[0] = t[e],
            this._target[1] = t[e + 1],
            this._target[2] = t[e + 2],
            this
        }
    }, {
        key: "toArray",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t[e] = this[0],
            t[e + 1] = this[1],
            t[e + 2] = this[2],
            t
        }
    }])
}()
  , at = function() {
    return n((function t() {
        var e = this;
        i(this, t),
        this.parent = null,
        this.children = [],
        this.visible = !0,
        this.matrix = new rt,
        this.worldMatrix = new rt,
        this.matrixAutoUpdate = !0,
        this.worldMatrixNeedsUpdate = !1,
        this.position = new C,
        this.quaternion = new Z,
        this.scale = new C(1),
        this.rotation = new st,
        this.up = new C(0,1,0),
        this.rotation._target.onChange = function() {
            return e.quaternion.fromEuler(e.rotation, !0)
        }
        ,
        this.quaternion._target.onChange = function() {
            return e.rotation.fromQuaternion(e.quaternion, void 0, !0)
        }
    }
    ), [{
        key: "setParent",
        value: function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.parent && t !== this.parent && this.parent.removeChild(this, !1),
            this.parent = t,
            e && t && t.addChild(this, !1)
        }
    }, {
        key: "addChild",
        value: function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            ~this.children.indexOf(t) || this.children.push(t),
            e && t.setParent(this, !1)
        }
    }, {
        key: "removeChild",
        value: function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1),
            e && t.setParent(null, !1)
        }
    }, {
        key: "updateMatrixWorld",
        value: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
            this.worldMatrixNeedsUpdate = !1,
            t = !0);
            for (var e = 0, i = this.children.length; e < i; e++)
                this.children[e].updateMatrixWorld(t)
        }
    }, {
        key: "updateMatrix",
        value: function() {
            this.matrix.compose(this.quaternion, this.position, this.scale),
            this.worldMatrixNeedsUpdate = !0
        }
    }, {
        key: "traverse",
        value: function(t) {
            if (!t(this))
                for (var e = 0, i = this.children.length; e < i; e++)
                    this.children[e].traverse(t)
        }
    }, {
        key: "decompose",
        value: function() {
            this.matrix.decompose(this.quaternion._target, this.position, this.scale),
            this.rotation.fromQuaternion(this.quaternion)
        }
    }, {
        key: "lookAt",
        value: function(t) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
            this.matrix.getRotation(this.quaternion._target),
            this.rotation.fromQuaternion(this.quaternion)
        }
    }])
}()
  , ht = new rt
  , ot = new C
  , ut = new C
  , lt = function(t) {
    function r(t) {
        var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = s.near, h = void 0 === a ? .1 : a, o = s.far, u = void 0 === o ? 100 : o, l = s.fov, c = void 0 === l ? 45 : l, d = s.aspect, f = void 0 === d ? 1 : d, v = s.left, g = s.right, p = s.bottom, m = s.top, y = s.zoom, b = void 0 === y ? 1 : y;
        return i(this, r),
        n = e(this, r),
        Object.assign(n, {
            near: h,
            far: u,
            fov: c,
            aspect: f,
            left: v,
            right: g,
            bottom: p,
            top: m,
            zoom: b
        }),
        n.projectionMatrix = new rt,
        n.viewMatrix = new rt,
        n.projectionViewMatrix = new rt,
        n.worldPosition = new C,
        n.type = v || g ? "orthographic" : "perspective",
        "orthographic" === n.type ? n.orthographic() : n.perspective(),
        n
    }
    return h(r, at),
    n(r, [{
        key: "perspective",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.near
              , i = void 0 === e ? this.near : e
              , r = t.far
              , n = void 0 === r ? this.far : r
              , s = t.fov
              , a = void 0 === s ? this.fov : s
              , h = t.aspect
              , o = void 0 === h ? this.aspect : h;
            return Object.assign(this, {
                near: i,
                far: n,
                fov: a,
                aspect: o
            }),
            this.projectionMatrix.fromPerspective({
                fov: a * (Math.PI / 180),
                aspect: o,
                near: i,
                far: n
            }),
            this.type = "perspective",
            this
        }
    }, {
        key: "orthographic",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.near
              , i = void 0 === e ? this.near : e
              , r = t.far
              , n = void 0 === r ? this.far : r
              , s = t.left
              , a = void 0 === s ? this.left || -1 : s
              , h = t.right
              , o = void 0 === h ? this.right || 1 : h
              , u = t.bottom
              , l = void 0 === u ? this.bottom || -1 : u
              , c = t.top
              , d = void 0 === c ? this.top || 1 : c
              , f = t.zoom
              , v = void 0 === f ? this.zoom : f;
            return Object.assign(this, {
                near: i,
                far: n,
                left: a,
                right: o,
                bottom: l,
                top: d,
                zoom: v
            }),
            a /= v,
            o /= v,
            l /= v,
            d /= v,
            this.projectionMatrix.fromOrthogonal({
                left: a,
                right: o,
                bottom: l,
                top: d,
                near: i,
                far: n
            }),
            this.type = "orthographic",
            this
        }
    }, {
        key: "updateMatrixWorld",
        value: function() {
            return s(a(r.prototype), "updateMatrixWorld", this).call(this),
            this.viewMatrix.inverse(this.worldMatrix),
            this.worldMatrix.getTranslation(this.worldPosition),
            this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
            this
        }
    }, {
        key: "lookAt",
        value: function(t) {
            return s(a(r.prototype), "lookAt", this).call(this, t, !0),
            this
        }
    }, {
        key: "project",
        value: function(t) {
            return t.applyMatrix4(this.viewMatrix),
            t.applyMatrix4(this.projectionMatrix),
            this
        }
    }, {
        key: "unproject",
        value: function(t) {
            return t.applyMatrix4(ht.inverse(this.projectionMatrix)),
            t.applyMatrix4(this.worldMatrix),
            this
        }
    }, {
        key: "updateFrustum",
        value: function() {
            this.frustum || (this.frustum = [new C, new C, new C, new C, new C, new C]);
            var t = this.projectionViewMatrix;
            this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12],
            this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12],
            this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13],
            this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13],
            this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14],
            this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
            for (var e = 0; e < 6; e++) {
                var i = 1 / this.frustum[e].distance();
                this.frustum[e].multiply(i),
                this.frustum[e].constant *= i
            }
        }
    }, {
        key: "frustumIntersectsMesh",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.worldMatrix;
            if (!t.geometry.attributes.position)
                return !0;
            if (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere(),
            !t.geometry.bounds)
                return !0;
            var i = ot;
            i.copy(t.geometry.bounds.center),
            i.applyMatrix4(e);
            var r = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
            return this.frustumIntersectsSphere(i, r)
        }
    }, {
        key: "frustumIntersectsSphere",
        value: function(t, e) {
            for (var i = ut, r = 0; r < 6; r++) {
                var n = this.frustum[r];
                if (i.copy(n).dot(t) + n.constant < -e)
                    return !1
            }
            return !0
        }
    }])
}();
function ct(t, e, i) {
    var r = e[0]
      , n = e[1]
      , s = e[2]
      , a = e[3]
      , h = e[4]
      , o = e[5]
      , u = e[6]
      , l = e[7]
      , c = e[8]
      , d = i[0]
      , f = i[1]
      , v = i[2]
      , g = i[3]
      , p = i[4]
      , m = i[5]
      , y = i[6]
      , b = i[7]
      , x = i[8];
    return t[0] = d * r + f * a + v * u,
    t[1] = d * n + f * h + v * l,
    t[2] = d * s + f * o + v * c,
    t[3] = g * r + p * a + m * u,
    t[4] = g * n + p * h + m * l,
    t[5] = g * s + p * o + m * c,
    t[6] = y * r + b * a + x * u,
    t[7] = y * n + b * h + x * l,
    t[8] = y * s + b * o + x * c,
    t
}
var dt = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, d = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, f = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1;
        return i(this, r),
        u(t = e(this, r, [n, s, a, h, o, l, c, d, f]), t)
    }
    return h(r, p(Array)),
    n(r, [{
        key: "set",
        value: function(t, e, i, r, n, s, a, h, o) {
            return t.length ? this.copy(t) : (function(t, e, i, r, n, s, a, h, o, u) {
                t[0] = e,
                t[1] = i,
                t[2] = r,
                t[3] = n,
                t[4] = s,
                t[5] = a,
                t[6] = h,
                t[7] = o,
                t[8] = u
            }(this, t, e, i, r, n, s, a, h, o),
            this)
        }
    }, {
        key: "translate",
        value: function(t) {
            return function(t, e, i) {
                var r = e[0]
                  , n = e[1]
                  , s = e[2]
                  , a = e[3]
                  , h = e[4]
                  , o = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8]
                  , d = i[0]
                  , f = i[1];
                t[0] = r,
                t[1] = n,
                t[2] = s,
                t[3] = a,
                t[4] = h,
                t[5] = o,
                t[6] = d * r + f * a + u,
                t[7] = d * n + f * h + l,
                t[8] = d * s + f * o + c
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "rotate",
        value: function(t) {
            var e, i, r, n, s, a, h, o, u, l, c, d, f, v;
            return e = this,
            r = t,
            n = (i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)[0],
            s = i[1],
            a = i[2],
            h = i[3],
            o = i[4],
            u = i[5],
            l = i[6],
            c = i[7],
            d = i[8],
            f = Math.sin(r),
            v = Math.cos(r),
            e[0] = v * n + f * h,
            e[1] = v * s + f * o,
            e[2] = v * a + f * u,
            e[3] = v * h - f * n,
            e[4] = v * o - f * s,
            e[5] = v * u - f * a,
            e[6] = l,
            e[7] = c,
            e[8] = d,
            this
        }
    }, {
        key: "scale",
        value: function(t) {
            return function(t, e, i) {
                var r = i[0]
                  , n = i[1];
                t[0] = r * e[0],
                t[1] = r * e[1],
                t[2] = r * e[2],
                t[3] = n * e[3],
                t[4] = n * e[4],
                t[5] = n * e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[8] = e[8]
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            return e ? ct(this, t, e) : ct(this, this, t),
            this
        }
    }, {
        key: "identity",
        value: function() {
            var t;
            return (t = this)[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 1,
            t[5] = 0,
            t[6] = 0,
            t[7] = 0,
            t[8] = 1,
            this
        }
    }, {
        key: "copy",
        value: function(t) {
            var e, i;
            return i = t,
            (e = this)[0] = i[0],
            e[1] = i[1],
            e[2] = i[2],
            e[3] = i[3],
            e[4] = i[4],
            e[5] = i[5],
            e[6] = i[6],
            e[7] = i[7],
            e[8] = i[8],
            this
        }
    }, {
        key: "fromMatrix4",
        value: function(t) {
            var e, i;
            return i = t,
            (e = this)[0] = i[0],
            e[1] = i[1],
            e[2] = i[2],
            e[3] = i[4],
            e[4] = i[5],
            e[5] = i[6],
            e[6] = i[8],
            e[7] = i[9],
            e[8] = i[10],
            this
        }
    }, {
        key: "fromQuaternion",
        value: function(t) {
            return function(t, e) {
                var i = e[0]
                  , r = e[1]
                  , n = e[2]
                  , s = e[3]
                  , a = i + i
                  , h = r + r
                  , o = n + n
                  , u = i * a
                  , l = r * a
                  , c = r * h
                  , d = n * a
                  , f = n * h
                  , v = n * o
                  , g = s * a
                  , p = s * h
                  , m = s * o;
                t[0] = 1 - c - v,
                t[3] = l - m,
                t[6] = d + p,
                t[1] = l + m,
                t[4] = 1 - u - v,
                t[7] = f - g,
                t[2] = d - p,
                t[5] = f + g,
                t[8] = 1 - u - c
            }(this, t),
            this
        }
    }, {
        key: "fromBasis",
        value: function(t, e, i) {
            return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]),
            this
        }
    }, {
        key: "inverse",
        value: function() {
            var t, e, i, r, n, s, a, h, o, u, l, c, d, f, v;
            return t = this,
            i = (e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0],
            r = e[1],
            n = e[2],
            s = e[3],
            a = e[4],
            h = e[5],
            o = e[6],
            u = e[7],
            l = e[8],
            (v = i * (c = l * a - h * u) + r * (d = -l * s + h * o) + n * (f = u * s - a * o)) && (v = 1 / v,
            t[0] = c * v,
            t[1] = (-l * r + n * u) * v,
            t[2] = (h * r - n * a) * v,
            t[3] = d * v,
            t[4] = (l * i - n * o) * v,
            t[5] = (-h * i + n * s) * v,
            t[6] = f * v,
            t[7] = (-u * i + r * o) * v,
            t[8] = (a * i - r * s) * v),
            this
        }
    }, {
        key: "getNormalMatrix",
        value: function(t) {
            var e, i, r, n, s, a, h, o, u, l, c, d, f, v, g, p, m, y, b, x, _, w, k, M, A, E, S, T, C, F, R;
            return e = this,
            r = (i = t)[0],
            n = i[1],
            s = i[2],
            a = i[3],
            h = i[4],
            o = i[5],
            u = i[6],
            l = i[7],
            c = i[8],
            d = i[9],
            f = i[10],
            v = i[11],
            g = i[12],
            p = i[13],
            m = i[14],
            y = i[15],
            (R = (b = r * o - n * h) * (F = f * y - v * m) - (x = r * u - s * h) * (C = d * y - v * p) + (_ = r * l - a * h) * (T = d * m - f * p) + (w = n * u - s * o) * (S = c * y - v * g) - (k = n * l - a * o) * (E = c * m - f * g) + (M = s * l - a * u) * (A = c * p - d * g)) && (R = 1 / R,
            e[0] = (o * F - u * C + l * T) * R,
            e[1] = (u * S - h * F - l * E) * R,
            e[2] = (h * C - o * S + l * A) * R,
            e[3] = (s * C - n * F - a * T) * R,
            e[4] = (r * F - s * S + a * E) * R,
            e[5] = (n * S - r * C - a * A) * R,
            e[6] = (p * M - m * k + y * w) * R,
            e[7] = (m * _ - g * M - y * x) * R,
            e[8] = (g * k - p * _ + y * b) * R),
            this
        }
    }])
}()
  , ft = 0
  , vt = function(t) {
    function r(t) {
        var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = s.geometry, h = s.program, o = s.mode, u = void 0 === o ? t.TRIANGLES : o, l = s.frustumCulled, c = void 0 === l || l, d = s.renderOrder, f = void 0 === d ? 0 : d;
        return i(this, r),
        n = e(this, r),
        t.canvas,
        n.gl = t,
        n.id = ft++,
        n.geometry = a,
        n.program = h,
        n.mode = u,
        n.frustumCulled = c,
        n.renderOrder = f,
        n.modelViewMatrix = new rt,
        n.normalMatrix = new dt,
        n.beforeRenderCallbacks = [],
        n.afterRenderCallbacks = [],
        n
    }
    return h(r, at),
    n(r, [{
        key: "onBeforeRender",
        value: function(t) {
            return this.beforeRenderCallbacks.push(t),
            this
        }
    }, {
        key: "onAfterRender",
        value: function(t) {
            return this.afterRenderCallbacks.push(t),
            this
        }
    }, {
        key: "draw",
        value: function() {
            var t = this
              , e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).camera;
            e && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                modelMatrix: {
                    value: null
                },
                viewMatrix: {
                    value: null
                },
                modelViewMatrix: {
                    value: null
                },
                normalMatrix: {
                    value: null
                },
                projectionMatrix: {
                    value: null
                },
                cameraPosition: {
                    value: null
                }
            }),
            this.program.uniforms.projectionMatrix.value = e.projectionMatrix,
            this.program.uniforms.cameraPosition.value = e.worldPosition,
            this.program.uniforms.viewMatrix.value = e.viewMatrix,
            this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix),
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
            this.program.uniforms.modelMatrix.value = this.worldMatrix,
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
            this.program.uniforms.normalMatrix.value = this.normalMatrix),
            this.beforeRenderCallbacks.forEach((function(i) {
                return i && i({
                    mesh: t,
                    camera: e
                })
            }
            ));
            var i = this.program.cullFace && this.worldMatrix.determinant() < 0;
            this.program.use({
                flipFaces: i
            }),
            this.geometry.draw({
                mode: this.mode,
                program: this.program
            }),
            this.afterRenderCallbacks.forEach((function(i) {
                return i && i({
                    mesh: t,
                    camera: e
                })
            }
            ))
        }
    }])
}()
  , gt = new Uint8Array(4);
function pt(t) {
    return !(t & t - 1)
}
var mt = 1
  , yt = function() {
    return n((function t(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = r.image
          , s = r.target
          , a = void 0 === s ? e.TEXTURE_2D : s
          , h = r.type
          , o = void 0 === h ? e.UNSIGNED_BYTE : h
          , u = r.format
          , l = void 0 === u ? e.RGBA : u
          , c = r.internalFormat
          , d = void 0 === c ? l : c
          , f = r.wrapS
          , v = void 0 === f ? e.CLAMP_TO_EDGE : f
          , g = r.wrapT
          , p = void 0 === g ? e.CLAMP_TO_EDGE : g
          , m = r.generateMipmaps
          , y = void 0 === m || m
          , b = r.minFilter
          , x = void 0 === b ? y ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR : b
          , _ = r.magFilter
          , w = void 0 === _ ? e.LINEAR : _
          , k = r.premultiplyAlpha
          , M = void 0 !== k && k
          , A = r.unpackAlignment
          , E = void 0 === A ? 4 : A
          , S = r.flipY
          , T = void 0 === S ? a == e.TEXTURE_2D : S
          , C = r.anisotropy
          , F = void 0 === C ? 0 : C
          , R = r.level
          , P = void 0 === R ? 0 : R
          , O = r.width
          , I = r.height
          , U = void 0 === I ? O : I;
        i(this, t),
        this.gl = e,
        this.id = mt++,
        this.image = n,
        this.target = a,
        this.type = o,
        this.format = l,
        this.internalFormat = d,
        this.minFilter = x,
        this.magFilter = w,
        this.wrapS = v,
        this.wrapT = p,
        this.generateMipmaps = y,
        this.premultiplyAlpha = M,
        this.unpackAlignment = E,
        this.flipY = T,
        this.anisotropy = Math.min(F, this.gl.renderer.parameters.maxAnisotropy),
        this.level = P,
        this.width = O,
        this.height = U,
        this.texture = this.gl.createTexture(),
        this.store = {
            image: null
        },
        this.glState = this.gl.renderer.state,
        this.state = {},
        this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
        this.state.magFilter = this.gl.LINEAR,
        this.state.wrapS = this.gl.REPEAT,
        this.state.wrapT = this.gl.REPEAT,
        this.state.anisotropy = 0
    }
    ), [{
        key: "bind",
        value: function() {
            this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
            this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
        }
    }, {
        key: "update",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , e = !(this.image === this.store.image && !this.needsUpdate);
            if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t),
            this.bind()),
            e) {
                if (this.needsUpdate = !1,
                this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                this.glState.flipY = this.flipY),
                this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
                this.glState.premultiplyAlpha = this.premultiplyAlpha),
                this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
                this.glState.unpackAlignment = this.unpackAlignment),
                this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
                this.state.minFilter = this.minFilter),
                this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
                this.state.magFilter = this.magFilter),
                this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
                this.state.wrapS = this.wrapS),
                this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
                this.state.wrapT = this.wrapT),
                this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
                this.state.anisotropy = this.anisotropy),
                this.image) {
                    if (this.image.width && (this.width = this.image.width,
                    this.height = this.image.height),
                    this.target === this.gl.TEXTURE_CUBE_MAP)
                        for (var i = 0; i < 6; i++)
                            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
                    else if (ArrayBuffer.isView(this.image))
                        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                    else if (this.image.isCompressedTexture)
                        for (var r = 0; r < this.image.length; r++)
                            this.gl.compressedTexImage2D(this.target, r, this.internalFormat, this.image[r].width, this.image[r].height, 0, this.image[r].data);
                    else
                        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                    this.generateMipmaps && (this.gl.renderer.isWebgl2 || pt(this.image.width) && pt(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1,
                    this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                    this.minFilter = this.gl.LINEAR)),
                    this.onUpdate && this.onUpdate()
                } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                    for (var n = 0; n < 6; n++)
                        this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, gt);
                else
                    this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, gt);
                this.store.image = this.image
            }
        }
    }])
}()
  , bt = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000"
};
function xt(t) {
    4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
}
function _t(t) {
    return [((t = parseInt(t)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
}
function wt(t) {
    return void 0 === t ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(t) ? "#" === t[0] ? xt(t) : bt[t.toLowerCase()] ? xt(bt[t.toLowerCase()]) : [0, 0, 0] : _t(t)
}
var kt = Object.freeze({
    __proto__: null,
    hexToRGB: xt,
    numberToRGB: _t,
    parseColor: wt
})
  , Mt = function(t) {
    function r(t) {
        var n;
        return i(this, r),
        Array.isArray(t) ? u(n, n = e(this, r, d(t))) : u(n, n = e(this, r, d(wt.apply(kt, arguments))))
    }
    return h(r, p(Array)),
    n(r, [{
        key: "r",
        get: function() {
            return this[0]
        },
        set: function(t) {
            this[0] = t
        }
    }, {
        key: "g",
        get: function() {
            return this[1]
        },
        set: function(t) {
            this[1] = t
        }
    }, {
        key: "b",
        get: function() {
            return this[2]
        },
        set: function(t) {
            this[2] = t
        }
    }, {
        key: "set",
        value: function(t) {
            return Array.isArray(t) ? this.copy(t) : this.copy(wt.apply(kt, arguments))
        }
    }, {
        key: "copy",
        value: function(t) {
            return this[0] = t[0],
            this[1] = t[1],
            this[2] = t[2],
            this
        }
    }])
}();
function At(t, e, i) {
    return t[0] = e[0] + i[0],
    t[1] = e[1] + i[1],
    t
}
function Et(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t
}
function St(t, e, i) {
    return t[0] = e[0] * i,
    t[1] = e[1] * i,
    t
}
function Tt(t) {
    var e = t[0]
      , i = t[1];
    return Math.sqrt(e * e + i * i)
}
function Ct(t, e) {
    return t[0] * e[1] - t[1] * e[0]
}
var Ft = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
        return i(this, r),
        u(t = e(this, r, [n, s]), t)
    }
    return h(r, p(Array)),
    n(r, [{
        key: "x",
        get: function() {
            return this[0]
        },
        set: function(t) {
            this[0] = t
        }
    }, {
        key: "y",
        get: function() {
            return this[1]
        },
        set: function(t) {
            this[1] = t
        }
    }, {
        key: "set",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
            return t.length ? this.copy(t) : (function(t, e, i) {
                t[0] = e,
                t[1] = i
            }(this, t, e),
            this)
        }
    }, {
        key: "copy",
        value: function(t) {
            var e, i;
            return i = t,
            (e = this)[0] = i[0],
            e[1] = i[1],
            this
        }
    }, {
        key: "add",
        value: function(t, e) {
            return e ? At(this, t, e) : At(this, this, t),
            this
        }
    }, {
        key: "sub",
        value: function(t, e) {
            return e ? Et(this, t, e) : Et(this, this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t) {
            var e, i, r;
            return t.length ? (i = this,
            r = t,
            (e = this)[0] = i[0] * r[0],
            e[1] = i[1] * r[1]) : St(this, this, t),
            this
        }
    }, {
        key: "divide",
        value: function(t) {
            var e, i, r;
            return t.length ? (i = this,
            r = t,
            (e = this)[0] = i[0] / r[0],
            e[1] = i[1] / r[1]) : St(this, this, 1 / t),
            this
        }
    }, {
        key: "inverse",
        value: function() {
            var t, e;
            return e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this,
            (t = this)[0] = 1 / e[0],
            t[1] = 1 / e[1],
            this
        }
    }, {
        key: "len",
        value: function() {
            return Tt(this)
        }
    }, {
        key: "distance",
        value: function(t) {
            return t ? (e = this,
            r = (i = t)[0] - e[0],
            n = i[1] - e[1],
            Math.sqrt(r * r + n * n)) : Tt(this);
            var e, i, r, n
        }
    }, {
        key: "squaredLen",
        value: function() {
            return this.squaredDistance()
        }
    }, {
        key: "squaredDistance",
        value: function(t) {
            return t ? (e = this,
            r = (i = t)[0] - e[0],
            n = i[1] - e[1],
            r * r + n * n) : function(t) {
                var e = t[0]
                  , i = t[1];
                return e * e + i * i
            }(this);
            var e, i, r, n
        }
    }, {
        key: "negate",
        value: function() {
            var t, e;
            return e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this,
            (t = this)[0] = -e[0],
            t[1] = -e[1],
            this
        }
    }, {
        key: "cross",
        value: function(t, e) {
            return e ? Ct(t, e) : Ct(this, t)
        }
    }, {
        key: "scale",
        value: function(t) {
            return St(this, this, t),
            this
        }
    }, {
        key: "normalize",
        value: function() {
            var t, e, i, r, n;
            return t = this,
            i = (e = this)[0],
            r = e[1],
            (n = i * i + r * r) > 0 && (n = 1 / Math.sqrt(n)),
            t[0] = e[0] * n,
            t[1] = e[1] * n,
            this
        }
    }, {
        key: "dot",
        value: function(t) {
            return i = t,
            (e = this)[0] * i[0] + e[1] * i[1];
            var e, i
        }
    }, {
        key: "equals",
        value: function(t) {
            return i = t,
            (e = this)[0] === i[0] && e[1] === i[1];
            var e, i
        }
    }, {
        key: "applyMatrix3",
        value: function(t) {
            var e, i, r, n, s;
            return e = this,
            r = t,
            n = (i = this)[0],
            s = i[1],
            e[0] = r[0] * n + r[3] * s + r[6],
            e[1] = r[1] * n + r[4] * s + r[7],
            this
        }
    }, {
        key: "applyMatrix4",
        value: function(t) {
            var e, i, r, n, s;
            return e = this,
            r = t,
            n = (i = this)[0],
            s = i[1],
            e[0] = r[0] * n + r[4] * s + r[12],
            e[1] = r[1] * n + r[5] * s + r[13],
            this
        }
    }, {
        key: "lerp",
        value: function(t, e) {
            return function(t, e, i, r) {
                var n = e[0]
                  , s = e[1];
                t[0] = n + r * (i[0] - n),
                t[1] = s + r * (i[1] - s)
            }(this, this, t, e),
            this
        }
    }, {
        key: "clone",
        value: function() {
            return new r(this[0],this[1])
        }
    }, {
        key: "fromArray",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this[0] = t[e],
            this[1] = t[e + 1],
            this
        }
    }, {
        key: "toArray",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t[e] = this[0],
            t[e + 1] = this[1],
            t
        }
    }])
}()
  , Rt = function(t) {
    function r(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , s = n.width
          , a = void 0 === s ? 1 : s
          , h = n.height
          , o = void 0 === h ? 1 : h
          , u = n.widthSegments
          , l = void 0 === u ? 1 : u
          , c = n.heightSegments
          , d = void 0 === c ? 1 : c
          , f = n.attributes
          , v = void 0 === f ? {} : f;
        i(this, r);
        var g = l
          , p = d
          , m = (g + 1) * (p + 1)
          , y = g * p * 6
          , b = new Float32Array(3 * m)
          , x = new Float32Array(3 * m)
          , _ = new Float32Array(2 * m)
          , w = y > 65536 ? new Uint32Array(y) : new Uint16Array(y);
        return r.buildPlane(b, x, _, w, a, o, 0, g, p),
        Object.assign(v, {
            position: {
                size: 3,
                data: b
            },
            normal: {
                size: 3,
                data: x
            },
            uv: {
                size: 2,
                data: _
            },
            index: {
                data: w
            }
        }),
        e(this, r, [t, v])
    }
    return h(r, I),
    n(r, null, [{
        key: "buildPlane",
        value: function(t, e, i, r, n, s, a, h, o) {
            for (var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, l = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, c = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 2, d = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1, f = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : -1, v = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0, g = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 0, p = v, m = n / h, y = s / o, b = 0; b <= o; b++)
                for (var x = b * y - s / 2, _ = 0; _ <= h; _++,
                v++) {
                    var w = _ * m - n / 2;
                    if (t[3 * v + u] = w * d,
                    t[3 * v + l] = x * f,
                    t[3 * v + c] = a / 2,
                    e[3 * v + u] = 0,
                    e[3 * v + l] = 0,
                    e[3 * v + c] = a >= 0 ? 1 : -1,
                    i[2 * v] = _ / h,
                    i[2 * v + 1] = 1 - b / o,
                    b !== o && _ !== h) {
                        var k = p + _ + b * (h + 1)
                          , M = p + _ + (b + 1) * (h + 1)
                          , A = p + _ + (b + 1) * (h + 1) + 1
                          , E = p + _ + b * (h + 1) + 1;
                        r[6 * g] = k,
                        r[6 * g + 1] = M,
                        r[6 * g + 2] = E,
                        r[6 * g + 3] = M,
                        r[6 * g + 4] = A,
                        r[6 * g + 5] = E,
                        g++
                    }
                }
        }
    }])
}();
!function() {
    !function(t, e, i) {
        var r, n = 256, s = "random", a = i.pow(n, 6), h = i.pow(2, 52), o = 2 * h, u = n - 1;
        function l(u, l, v) {
            var m = []
              , y = g(f((l = 1 == l ? {
                entropy: !0
            } : l || {}).entropy ? [u, p(e)] : null == u ? function() {
                try {
                    var i;
                    return r && (i = r.randomBytes) ? i = i(n) : (i = new Uint8Array(n),
                    (t.crypto || t.msCrypto).getRandomValues(i)),
                    p(i)
                } catch (i) {
                    var s = t.navigator
                      , a = s && s.plugins;
                    return [+new Date, t, a, t.screen, p(e)]
                }
            }() : u, 3), m)
              , b = new c(m)
              , x = function() {
                for (var t = b.g(6), e = a, i = 0; t < h; )
                    t = (t + i) * n,
                    e *= n,
                    i = b.g(1);
                for (; t >= o; )
                    t /= 2,
                    e /= 2,
                    i >>>= 1;
                return (t + i) / e
            };
            return x.int32 = function() {
                return 0 | b.g(4)
            }
            ,
            x.quick = function() {
                return b.g(4) / 4294967296
            }
            ,
            x.double = x,
            g(p(b.S), e),
            (l.pass || v || function(t, e, r, n) {
                return n && (n.S && d(n, b),
                t.state = function() {
                    return d(b, {})
                }
                ),
                r ? (i[s] = t,
                e) : t
            }
            )(x, y, "global"in l ? l.global : this == i, l.state)
        }
        function c(t) {
            var e, i = t.length, r = this, s = 0, a = r.i = r.j = 0, h = r.S = [];
            for (i || (t = [i++]); s < n; )
                h[s] = s++;
            for (s = 0; s < n; s++)
                h[s] = h[a = u & a + t[s % i] + (e = h[s])],
                h[a] = e;
            (r.g = function(t) {
                for (var e, i = 0, s = r.i, a = r.j, h = r.S; t--; )
                    e = h[s = u & s + 1],
                    i = i * n + h[u & (h[s] = h[a = u & a + e]) + (h[a] = e)];
                return r.i = s,
                r.j = a,
                i
            }
            )(n)
        }
        function d(t, e) {
            return e.i = t.i,
            e.j = t.j,
            e.S = t.S.slice(),
            e
        }
        function f(t, e) {
            var i, r = [], n = v(t);
            if (e && "object" == n)
                for (i in t)
                    try {
                        r.push(f(t[i], e - 1))
                    } catch (t) {}
            return r.length ? r : "string" == n ? t : t + "\0"
        }
        function g(t, e) {
            for (var i, r = t + "", n = 0; n < r.length; )
                e[u & n] = u & (i ^= 19 * e[u & n]) + r.charCodeAt(n++);
            return p(e)
        }
        function p(t) {
            return String.fromCharCode.apply(0, t)
        }
        if (g(i.random(), e),
        "object" == ("undefined" == typeof module ? "undefined" : v(module)) && module.exports) {
            module.exports = l;
            try {
                r = require("crypto")
            } catch (t) {}
        } else
            "function" == typeof define && define.amd ? define((function() {
                return l
            }
            )) : i["seed" + s] = l
    }("undefined" != typeof self ? self : this, [], Math)
}();
var Pt = function() {
    return n((function t() {
        var e, r, n, s = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, h = arguments.length > 1 ? arguments[1] : void 0;
        i(this, t),
        e = this,
        n = function() {
            requestAnimationFrame(s._update),
            s.loop && (s.frame++,
            s._animate()),
            s.gl.clearColor(0, 0, 0, 1),
            s.renderer.render({
                scene: s.scene,
                camera: s.camera
            }),
            s.isRenderTarget && (s.gl.clearColor(0, 0, 0, 1),
            s.renderer.render({
                scene: s.rttPlane,
                camera: s.rttCamera,
                target: s.rtt
            }))
        }
        ,
        (r = f(r = "_update"))in e ? Object.defineProperty(e, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = n,
        this.params = a,
        this.options = {},
        this.loop = a.loop || !1,
        this.colors_num = h,
        this.colors_init = a.colors || [],
        this.palette = [],
        this.colors(this.colors_init),
        this.seed = a.seed || 1e3,
        this.rng = new Math.seedrandom(this.seed),
        this.frame = 0,
        this.parentDom = a.dom ? a.dom: document.body,
        "static" === window.getComputedStyle(this.parentDom).position && (this.parentDom.style.position = "relative");
        var o = this._getParentRect(this.parentDom);
        this.canvasW = o.w,
        this.canvasH = o.h,
        this.renderer = new q,
        this.renderer.setSize(this.canvasW, this.canvasH),
        this.gl = this.renderer.gl,
        this.gl.canvas.id = "colorbgcanvas",
        this.gl.canvas.style.position = "absolute",
        this.gl.canvas.style.top = 0,
        this.gl.canvas.style.left = 0,
        this.gl.canvas.style.zIndex = 0,
        this.parentDom.appendChild(this.gl.canvas),
        this.camera = new lt(this.gl,{
            near: .1,
            far: 10001,
            left: -this.canvasW / 2,
            right: this.canvasW / 2,
            bottom: -this.canvasH / 2,
            top: this.canvasH / 2,
            zoom: 1
        }),
        this.camera.position.z = 8e3,
        this.isRenderTarget = !1,
        this.scene = new at
    }
    ), [{
        key: "_getParentRect",
        value: function(t) {
            var e = t;
            return {
                w: e.getBoundingClientRect().width,
                h: e.getBoundingClientRect().height
            }
        }
    }, {
        key: "colors",
        value: function(t) {
            var e = !!this.palette.length;
            if (this.palette = [],
            0 == t.length)
                this.palette = ["#F00911", "#F3AA00", "#F6EE0B", "#39E90D", "#195ED2", "#F00911"];
            else if (t.length < this.colors_num) {
                for (var i = d(t), r = i.length; r < 6; r++) {
                    var n = r % i.length;
                    t.push(i[n])
                }
                this.palette = t
            } else
                for (var s = 0; s < this.colors_num; s++)
                    this.palette.push(t[s]);
            e && this._resetColors()
        }
    }, {
        key: "start",
        value: function() {
            this._size(),
            this._initRtt(),
            this._resetSeed(),
            this._makeMaterial(),
            this._make(),
            requestAnimationFrame(this._update)
        }
    }, {
        key: "resize",
        value: function() {
            var t = this._getParentRect(this.parentDom);
            this.canvasW = t.w,
            this.canvasH = t.h,
            this.renderer.setSize(this.canvasW, this.canvasH),
            this.camera.orthographic({
                near: .1,
                far: 10001,
                left: -this.canvasW / 2,
                right: this.canvasW / 2,
                bottom: -this.canvasH / 2,
                top: this.canvasH / 2,
                zoom: 1
            }),
            this._size(),
            this.reset()
        }
    }, {
        key: "reset",
        value: function(t) {
            this.rng = t ? new Math.seedrandom(t) : new Math.seedrandom(this.seed),
            this._delete(),
            this._resetSeed(),
            this._make()
        }
    }, {
        key: "_delete",
        value: function() {
            for (var t = this.scene.children.length - 1; t >= 0; t--)
                this.scene.removeChild(this.scene.children[t])
        }
    }, {
        key: "_size",
        value: function() {}
    }, {
        key: "_initRtt",
        value: function() {}
    }, {
        key: "_resetSeed",
        value: function() {}
    }, {
        key: "_animate",
        value: function() {}
    }, {
        key: "destroy",
        value: function() {
            this._delete(),
            this.parentDom.removeChild(this.gl.canvas)
        }
    }])
}()
  , Ot = function(t, e) {
    this.x = t || 0,
    this.y = e || 0,
    this.h0,
    this.h1
};
function It(t, e, i) {
    this.W = t || 100,
    this.H = e || 100,
    this.size = this.W > this.H ? this.H : this.W,
    this.shapes = [],
    this.palette = i,
    this.canvas2d = document.createElement("CANVAS"),
    this.canvas2d.width = this.W,
    this.canvas2d.height = this.H,
    this.canvas2d.style.display = "none",
    document.body.appendChild(this.canvas2d),
    this.ctx = this.canvas2d.getContext("2d")
}
function Ut(t, e, i, r, n, s, a, h, o) {
    this.x = e,
    this.y = i,
    this.W = r,
    this.H = n,
    this.colors = h,
    this.rng = o,
    this.num = s || 3,
    this.radius = a || 100,
    this.basePoints = [],
    this.anchors = [],
    this.makeBaseShape(s, a),
    this.makeAllAnchors(),
    this.makeAllBezierCurves(.5)
}
It.prototype.colors = function(t) {
    this.palette = t;
    for (var e = 0; e < this.shapes.length; e++)
        this.shapes[e].colors = [t[e + 1], t[e + 2]]
}
,
It.prototype.reset = function(t) {
    this.shapes = [];
    for (var e = 0; e < 4; e++) {
        var i = e % 2
          , r = Math.floor(e / 2)
          , n = 0 == Math.floor((i + r) % 2) ? .5 : 1
          , s = (i - .5) * this.W * n
          , a = (r - .5) * this.H * n
          , h = Math.floor(3 * t() + 3)
          , o = e % 6 + 0
          , u = e % 6 + 1 > 5 ? 0 : e % 6 + 1
          , l = [this.palette[o], this.palette[u]]
          , c = new Ut(this.ctx,s,a,this.W,this.H,h,this.size / 3,l,t);
        this.shapes.push(c)
    }
    this.draw()
}
,
It.prototype.draw = function() {
    var t = this;
    this.ctx.clearRect(0, 0, this.W, this.H);
    var e = this.ctx.createLinearGradient(0, 0, 0, this.H);
    e.addColorStop(0, this.palette[0]),
    e.addColorStop(1, this.palette[1]),
    this.ctx.fillStyle = e,
    this.ctx.globalAlpha = .4,
    this.ctx.fillRect(0, 0, this.W, this.H),
    this.shapes.forEach((function(e) {
        e.draw(t.ctx)
    }
    ))
}
,
It.prototype.destroy = function() {
    document.body.removeChild(this.canvas2d)
}
,
It.prototype.getCanvasData = function() {
    return this.canvasdata = this.canvas2d.toDataURL("image/png"),
    this.canvasdata
}
,
Ut.prototype.makeBaseShape = function(t, e) {
    for (var i = 2 * Math.PI / t, r = 0; r < t; r++) {
        var n = (r + .2) * i
          , s = (r + 1 - .2) * i
          , a = this.rng() * (s - n) + n
          , h = new Ot(e * Math.cos(a),e * Math.sin(a));
        this.basePoints.push(h)
    }
}
,
Ut.prototype.makeAllAnchors = function() {
    for (var t = function(t) {
        var e = t.reduce((function(e, i) {
            return {
                x: e.x + i.x / t.length,
                y: e.y + i.y / t.length
            }
        }
        ), {
            x: 0,
            y: 0
        })
          , i = t.map((function(i, r) {
            var n, s = function(t, e) {
                var i = e.x - t.x
                  , r = e.y - t.y;
                return [{
                    x: r,
                    y: -i
                }, {
                    x: -r,
                    y: i
                }]
            }(i, t[(r + 1) % t.length]), a = c(s, 2), h = a[0], o = a[1], u = function(t, e, i) {
                var r = {
                    x: i.x - t.x,
                    y: i.y - t.y
                };
                return e.x * r.x + e.y * r.y > 0
            }(i, h, e);
            return {
                x: (n = u ? h : o).x,
                y: n.y
            }
        }
        ));
        return i
    }(this.basePoints), e = 0; e < this.basePoints.length; e++) {
        var i = e
          , r = e == this.basePoints.length - 1 ? 0 : e + 1
          , n = 1 * -t[e].x
          , s = 1 * -t[e].y
          , a = new Ot(this.basePoints[i].x + n,this.basePoints[i].y + s)
          , h = new Ot(this.basePoints[r].x + n,this.basePoints[r].y + s);
        this.anchors.push(this.basePoints[i], a, h)
    }
}
,
Ut.prototype.makeAllBezierCurves = function(t) {
    for (var e = 0, i = this.anchors.length; e < i; e++) {
        var r = this.anchors[e]
          , n = 0 === e ? this.anchors[i - 1] : this.anchors[e - 1]
          , s = e === i - 1 ? this.anchors[0] : this.anchors[e + 1]
          , a = (n.x - s.x) * t / 2
          , h = (n.y - s.y) * t / 2
          , o = new Ft(r.x + a,r.y + h)
          , u = new Ft(r.x - a,r.y - h);
        r.h0 = o,
        r.h1 = u
    }
}
,
Ut.prototype.draw = function(t) {
    var e = t;
    e.save(),
    e.translate(this.W / 2 + this.x, this.H / 2 + this.y),
    e.beginPath(),
    e.moveTo(this.anchors[0].x, this.anchors[0].y);
    for (var i = 0; i < this.anchors.length; i++)
        i == this.anchors.length - 1 ? e.bezierCurveTo(this.anchors[i].h1.x, this.anchors[i].h1.y, this.anchors[0].h0.x, this.anchors[0].h0.y, this.anchors[0].x, this.anchors[0].y) : e.bezierCurveTo(this.anchors[i].h1.x, this.anchors[i].h1.y, this.anchors[i + 1].h0.x, this.anchors[i + 1].h0.y, this.anchors[i + 1].x, this.anchors[i + 1].y);
    e.closePath();
    var r = e.createLinearGradient(0, 0, this.H / 2, 0);
    r.addColorStop(0, this.colors[0]),
    r.addColorStop(1, this.colors[1]),
    e.globalAlpha = .6,
    e.fillStyle = r,
    e.fill(),
    e.restore()
}
,
Ut.prototype.drawHelpers = function(t, e) {
    var i = t;
    if (e.anchors)
        for (var r = 0; r < this.anchors.length; r++) {
            var n = this.anchors[r];
            i.fillStyle = "#f00",
            i.fillText("0", n.h0.x, n.h0.y),
            i.fillText("1", n.h1.x, n.h1.y)
        }
    if (e.baseShape) {
        i.beginPath(),
        i.moveTo(this.anchors[0].x, this.anchors[0].y);
        for (var s = 0; s < this.anchors.length; s++)
            s == this.anchors.length - 1 ? i.lineTo(this.anchors[0].x, this.anchors[0].y) : i.lineTo(this.anchors[s + 1].x, this.anchors[s + 1].y);
        i.closePath(),
        i.fillStyle = "rgba(255, 0, 0, 0.7)",
        i.fill()
    }
    if (e.basePoints)
        for (var a = 0; a < this.basePoints.length; a++)
            i.save(),
            i.fillStyle = "#000",
            i.translate(this.W / 2 + this.x, this.H / 2 + this.y),
            i.fillRect(this.basePoints[a].x - 5, this.basePoints[a].y - 5, 5, 5),
            i.fillText(a, this.basePoints[a].x + 5, this.basePoints[a].y + 5),
            i.restore()
}
;
var Bt = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i(this, r),
        (t = e(this, r, [n, 6])).options = t.params.options || {
            noise: .05
        },
        t.canvasManager = new It(t.canvasW,t.canvasH,t.palette),
        t.texture = new yt(t.gl),
        t.img = new Image,
        t.start(),
        t
    }
    return h(r, Pt),
    n(r, [{
        key: "_resetSeed",
        value: function() {
            this.canvasManager.reset(this.rng),
            this._loadCanvas()
        }
    }, {
        key: "_loadCanvas",
        value: function() {
            var t = this;
            this.img.src = this.canvasManager.getCanvasData(),
            this.img.onload = function() {
                t.texture.image = t.img,
                t.texture.needsUpdate = !0
            }
        }
    }, {
        key: "_makeMaterial",
        value: function() {
            this._planeShader = new L(this.gl,{
                vertex: "\n                #ifdef GL_ES\n                precision mediump float;\n                #endif\n\n                attribute vec3 position;\n                attribute vec2 uv;\n\n                uniform mat4 modelViewMatrix;\n                uniform mat4 projectionMatrix;\n\t\t\t\tuniform float uTime;\n\t\t\t\tuniform float uWavy;\n                varying vec2 vUv;\n\n                void main() {\n                    vUv = uv;\n\n\t\t\t\t\tvec2 wavyCoord;\n\t\t\t\t\twavyCoord.s = sin( uTime + vUv.t * 15.0 );\n\t\t\t\t\twavyCoord.t = cos( uTime + vUv.s * 15.0 );\n\n\t\t\t\t\tvec3 pos = position;\n\t\t\t\t\tpos.x += wavyCoord.s * uWavy;\n\t\t\t\t\tpos.y += wavyCoord.t * uWavy;\n\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n                }\n            ",
                fragment: "\n                #ifdef GL_ES\n                precision mediump float;\n                #endif\n\n\t\t\t\tuniform sampler2D tMap;\n\t\t\t\tuniform float uNoiseAmount;\n\t\t\t\tuniform float uTime;\n\t\t\t\tuniform bool uAdd;\n\t\t\t\tuniform vec3 u_color_0;\n\n                varying vec2 vUv;\n\n\t\t\t\tfloat random(vec2 co) {\n\t\t\t\t\treturn fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n\t\t\t\t}\n\n\t\t\t\tfloat blendScreen(float base, float blend) {\n\t\t\t\t\treturn 1.0-((1.0-base)*(1.0-blend));\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tvec3 blendScreen(vec3 base, vec3 blend) {\n\t\t\t\t\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n\t\t\t\t}\n\n                void main() {\n\t\t\t\t\tvec4 color = texture2D(tMap, vUv);\n\n\t\t\t\t\t// if(uAdd) {\n\t\t\t\t\t// \tvec3 colorAdd = u_color_0 * sin(uTime + vUv.x / 0.2) / 2.;\n\t\t\t\t\t// \tcolor.rgb = blendScreen( color.rgb, colorAdd );\n\t\t\t\t\t// }\n\n\t\t\t\t\tfloat noise = (random(vUv) - 0.5) * uNoiseAmount;\n\t\t\t\t\tcolor.rgb = color.rgb + color.rgb * noise;\n\n                    gl_FragColor = vec4(color.rgb, 1.0);\n                }\n            ",
                uniforms: {
                    tMap: {
                        value: this.texture
                    },
                    uNoiseAmount: {
                        value: this.options.noise
                    },
                    uWavy: {
                        value: 10
                    },
                    uTime: {
                        value: 0
                    },
                    uAdd: {
                        value: !1
                    },
                    u_color_0: {
                        value: new Mt(this.palette[0])
                    }
                }
            })
        }
    }, {
        key: "_make",
        value: function() {
            var t = new Rt(this.gl,{
                width: 1.06 * this.canvasW,
                height: 1.06 * this.canvasH,
                widthSegments: 99,
                heightSegments: 99
            });
            this._plane = new vt(this.gl,{
                geometry: t,
                program: this._planeShader
            }),
            this._plane.setParent(this.scene)
        }
    }, {
        key: "_resetColors",
        value: function() {
            this.canvasManager.colors(this.palette),
            this.canvasManager.draw(),
            this._loadCanvas()
        }
    }, {
        key: "_animate",
        value: function() {
            this._planeShader.uniforms.uTime.value = this.frame / 50
        }
    }, {
        key: "update",
        value: function(t, e) {
            switch (t) {
            case "noise":
                this._planeShader.uniforms.uNoiseAmount.value = parseFloat(e);
                break;
            case "wavy":
                this._planeShader.uniforms.uWavy.value = parseFloat(e)
            }
        }
    }])
}();
export {Bt as AbstractShapeBg};
