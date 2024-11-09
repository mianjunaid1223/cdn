function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = Array(e); i < e; i++)
        n[i] = t[i];
    return n
}
function e(t, e, i) {
    return e = s(e),
    u(t, h() ? Reflect.construct(e, i || [], s(t).constructor) : e.apply(t, i))
}
function i(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function n(t, e) {
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(t, f(n.key), n)
    }
}
function r(t, e, i) {
    return e && n(t.prototype, e),
    i && n(t, i),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    t
}
function a() {
    return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
        var n = function(t, e) {
            for (; !{}.hasOwnProperty.call(t, e) && null !== (t = s(t)); )
                ;
            return t
        }(t, e);
        if (n) {
            var r = Object.getOwnPropertyDescriptor(n, e);
            return r.get ? r.get.call(arguments.length < 3 ? t : i) : r.value
        }
    }
    ,
    a.apply(null, arguments)
}
function s(t) {
    return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }
    ,
    s(t)
}
function o(t, e) {
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
function h() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
        )))
    } catch (t) {}
    return (h = function() {
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
function c(e) {
    return function(e) {
        if (Array.isArray(e))
            return t(e)
    }(e) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
            return Array.from(t)
    }(e) || v(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function f(t) {
    var e = function(t, e) {
        if ("object" != typeof t || !t)
            return t;
        var i = t[Symbol.toPrimitive];
        if (void 0 !== i) {
            var n = i.call(t, e);
            if ("object" != typeof n)
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(t)
    }(t, "string");
    return "symbol" == typeof e ? e : e + ""
}
function d(t) {
    return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    d(t)
}
function v(e, i) {
    if (e) {
        if ("string" == typeof e)
            return t(e, i);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, i) : void 0
    }
}
function g(t) {
    var e = "function" == typeof Map ? new Map : void 0;
    return g = function(t) {
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
                if (h())
                    return Reflect.construct.apply(null, arguments);
                var n = [null];
                n.push.apply(n, e);
                var r = new (t.bind.apply(t, n));
                return i && l(r, i.prototype),
                r
            }(t, arguments, s(this).constructor)
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
    g(t)
}
function p(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2];
    return Math.sqrt(e * e + i * i + n * n)
}
function y(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t
}
function m(t, e, i) {
    return t[0] = e[0] + i[0],
    t[1] = e[1] + i[1],
    t[2] = e[2] + i[2],
    t
}
function _(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t[2] = e[2] - i[2],
    t
}
function x(t, e, i) {
    return t[0] = e[0] * i,
    t[1] = e[1] * i,
    t[2] = e[2] * i,
    t
}
function b(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2];
    return e * e + i * i + n * n
}
function k(t, e) {
    var i = e[0]
      , n = e[1]
      , r = e[2]
      , a = i * i + n * n + r * r;
    return a > 0 && (a = 1 / Math.sqrt(a)),
    t[0] = e[0] * a,
    t[1] = e[1] * a,
    t[2] = e[2] * a,
    t
}
function M(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
}
function w(t, e, i) {
    var n = e[0]
      , r = e[1]
      , a = e[2]
      , s = i[0]
      , o = i[1]
      , h = i[2];
    return t[0] = r * h - a * o,
    t[1] = a * s - n * h,
    t[2] = n * o - r * s,
    t
}
var A, E, S = (A = [0, 0, 0],
E = [0, 0, 0],
function(t, e) {
    y(A, t),
    y(E, e),
    k(A, A),
    k(E, E);
    var i = M(A, E);
    return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
}
);
var C = function(t) {
    function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        return i(this, n),
        u(t = e(this, n, [r, a, s]), t)
    }
    return o(n, g(Array)),
    r(n, [{
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
            return t.length ? this.copy(t) : (function(t, e, i, n) {
                t[0] = e,
                t[1] = i,
                t[2] = n
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
            return e ? m(this, t, e) : m(this, this, t),
            this
        }
    }, {
        key: "sub",
        value: function(t, e) {
            return e ? _(this, t, e) : _(this, this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t) {
            var e, i, n;
            return t.length ? (i = this,
            n = t,
            (e = this)[0] = i[0] * n[0],
            e[1] = i[1] * n[1],
            e[2] = i[2] * n[2]) : x(this, this, t),
            this
        }
    }, {
        key: "divide",
        value: function(t) {
            var e, i, n;
            return t.length ? (i = this,
            n = t,
            (e = this)[0] = i[0] / n[0],
            e[1] = i[1] / n[1],
            e[2] = i[2] / n[2]) : x(this, this, 1 / t),
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
            return p(this)
        }
    }, {
        key: "distance",
        value: function(t) {
            return t ? (e = this,
            n = (i = t)[0] - e[0],
            r = i[1] - e[1],
            a = i[2] - e[2],
            Math.sqrt(n * n + r * r + a * a)) : p(this);
            var e, i, n, r, a
        }
    }, {
        key: "squaredLen",
        value: function() {
            return b(this)
        }
    }, {
        key: "squaredDistance",
        value: function(t) {
            return t ? (e = this,
            n = (i = t)[0] - e[0],
            r = i[1] - e[1],
            a = i[2] - e[2],
            n * n + r * r + a * a) : b(this);
            var e, i, n, r, a
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
            return e ? w(this, t, e) : w(this, this, t),
            this
        }
    }, {
        key: "scale",
        value: function(t) {
            return x(this, this, t),
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
            var e, i, n, r, a, s;
            return e = this,
            n = t,
            r = (i = this)[0],
            a = i[1],
            s = i[2],
            e[0] = r * n[0] + a * n[3] + s * n[6],
            e[1] = r * n[1] + a * n[4] + s * n[7],
            e[2] = r * n[2] + a * n[5] + s * n[8],
            this
        }
    }, {
        key: "applyMatrix4",
        value: function(t) {
            var e, i, n, r, a, s, o;
            return e = this,
            n = t,
            r = (i = this)[0],
            a = i[1],
            s = i[2],
            o = (o = n[3] * r + n[7] * a + n[11] * s + n[15]) || 1,
            e[0] = (n[0] * r + n[4] * a + n[8] * s + n[12]) / o,
            e[1] = (n[1] * r + n[5] * a + n[9] * s + n[13]) / o,
            e[2] = (n[2] * r + n[6] * a + n[10] * s + n[14]) / o,
            this
        }
    }, {
        key: "scaleRotateMatrix4",
        value: function(t) {
            var e, i, n, r, a, s, o;
            return e = this,
            n = t,
            r = (i = this)[0],
            a = i[1],
            s = i[2],
            o = (o = n[3] * r + n[7] * a + n[11] * s + n[15]) || 1,
            e[0] = (n[0] * r + n[4] * a + n[8] * s) / o,
            e[1] = (n[1] * r + n[5] * a + n[9] * s) / o,
            e[2] = (n[2] * r + n[6] * a + n[10] * s) / o,
            this
        }
    }, {
        key: "applyQuaternion",
        value: function(t) {
            return function(t, e, i) {
                var n = e[0]
                  , r = e[1]
                  , a = e[2]
                  , s = i[0]
                  , o = i[1]
                  , h = i[2]
                  , u = o * a - h * r
                  , l = h * n - s * a
                  , c = s * r - o * n
                  , f = o * c - h * l
                  , d = h * u - s * c
                  , v = s * l - o * u
                  , g = 2 * i[3];
                u *= g,
                l *= g,
                c *= g,
                f *= 2,
                d *= 2,
                v *= 2,
                t[0] = n + u + f,
                t[1] = r + l + d,
                t[2] = a + c + v
            }(this, this, t),
            this
        }
    }, {
        key: "angle",
        value: function(t) {
            return S(this, t)
        }
    }, {
        key: "lerp",
        value: function(t, e) {
            return function(t, e, i, n) {
                var r = e[0]
                  , a = e[1]
                  , s = e[2];
                t[0] = r + n * (i[0] - r),
                t[1] = a + n * (i[1] - a),
                t[2] = s + n * (i[2] - s)
            }(this, this, t, e),
            this
        }
    }, {
        key: "clone",
        value: function() {
            return new n(this[0],this[1],this[2])
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
              , n = this[2];
            return this[0] = t[0] * e + t[4] * i + t[8] * n,
            this[1] = t[1] * e + t[5] * i + t[9] * n,
            this[2] = t[2] * e + t[6] * i + t[10] * n,
            this.normalize()
        }
    }])
}()
  , F = new C
  , R = 1
  , O = 1
  , P = !1
  , T = function() {
    return r((function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (var r in i(this, t),
        e.canvas,
        this.gl = e,
        this.attributes = n,
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
        n)
            this.addAttribute(r, n[r])
    }
    ), [{
        key: "addAttribute",
        value: function(t, e) {
            this.attributes[t] = e;
            var i = this;
            if (e.id = O++,
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
            e.setXYZ = function(t, n, r, a) {
                t *= this.size,
                this.data[t + 0] = n,
                this.data[t + 1] = r,
                this.data[t + 2] = a,
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
                var n = i.name
                  , r = i.type;
                if (e.attributes[n]) {
                    var a = e.attributes[n];
                    e.gl.bindBuffer(a.target, a.buffer),
                    e.glState.boundBuffer = a.buffer;
                    var s = 1;
                    35674 === r && (s = 2),
                    35675 === r && (s = 3),
                    35676 === r && (s = 4);
                    for (var o = a.size / s, h = 1 === s ? 0 : s * s * 4, u = 1 === s ? 0 : 4 * s, l = 0; l < s; l++)
                        e.gl.vertexAttribPointer(t + l, o, a.type, a.normalized, a.stride + h, a.offset + l * u),
                        e.gl.enableVertexAttribArray(t + l),
                        e.gl.renderer.vertexAttribDivisor(t + l, a.divisor)
                }
            }
            )),
            this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
        }
    }, {
        key: "draw",
        value: function(t) {
            var e, i = this, n = t.program, r = t.mode, a = void 0 === r ? this.gl.TRIANGLES : r;
            this.gl.renderer.currentGeometry !== "".concat(this.id, "_").concat(n.attributeOrder) && (this.VAOs[n.attributeOrder] || this.createVAO(n),
            this.gl.renderer.bindVertexArray(this.VAOs[n.attributeOrder]),
            this.gl.renderer.currentGeometry = "".concat(this.id, "_").concat(n.attributeOrder)),
            n.attributeLocations.forEach((function(t, e) {
                var n = e.name
                  , r = i.attributes[n];
                r.needsUpdate && i.updateAttribute(r)
            }
            ));
            var s = 2;
            (null === (e = this.attributes.index) || void 0 === e ? void 0 : e.type) === this.gl.UNSIGNED_INT && (s = 4),
            this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(a, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * s, this.instancedCount) : this.gl.renderer.drawArraysInstanced(a, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(a, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * s) : this.gl.drawArrays(a, this.drawRange.start, this.drawRange.count)
        }
    }, {
        key: "getPosition",
        value: function() {
            var t = this.attributes.position;
            return t.data ? t : P ? void 0 : P = !0
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
            var n = this.bounds.min
              , r = this.bounds.max
              , a = this.bounds.center
              , s = this.bounds.scale;
            n.set(1 / 0),
            r.set(-1 / 0);
            for (var o = 0, h = e.length; o < h; o += i) {
                var u = e[o]
                  , l = e[o + 1]
                  , c = e[o + 2];
                n.x = Math.min(u, n.x),
                n.y = Math.min(l, n.y),
                n.z = Math.min(c, n.z),
                r.x = Math.max(u, r.x),
                r.y = Math.max(l, r.y),
                r.z = Math.max(c, r.z)
            }
            s.sub(r, n),
            a.add(n, r).divide(2)
        }
    }, {
        key: "computeBoundingSphere",
        value: function(t) {
            t || (t = this.getPosition());
            var e = t.data
              , i = t.size;
            this.bounds || this.computeBoundingBox(t);
            for (var n = 0, r = 0, a = e.length; r < a; r += i)
                F.fromArray(e, r),
                n = Math.max(n, this.bounds.center.squaredDistance(F));
            this.bounds.radius = Math.sqrt(n)
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
  , B = 1
  , z = {}
  , L = function() {
    return r((function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , r = n.vertex
          , a = n.fragment
          , s = n.uniforms
          , o = void 0 === s ? {} : s
          , h = n.transparent
          , u = void 0 !== h && h
          , l = n.cullFace
          , c = void 0 === l ? e.BACK : l
          , f = n.frontFace
          , d = void 0 === f ? e.CCW : f
          , v = n.depthTest
          , g = void 0 === v || v
          , p = n.depthWrite
          , y = void 0 === p || p
          , m = n.depthFunc
          , _ = void 0 === m ? e.LEQUAL : m;
        i(this, t),
        e.canvas,
        this.gl = e,
        this.uniforms = o,
        this.id = B++,
        this.transparent = u,
        this.cullFace = c,
        this.frontFace = d,
        this.depthTest = g,
        this.depthWrite = y,
        this.depthFunc = _,
        this.blendFunc = {},
        this.blendEquation = {},
        this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
        this.vertexShader = e.createShader(e.VERTEX_SHADER),
        this.fragmentShader = e.createShader(e.FRAGMENT_SHADER),
        this.program = e.createProgram(),
        e.attachShader(this.program, this.vertexShader),
        e.attachShader(this.program, this.fragmentShader),
        this.setShaders({
            vertex: r,
            fragment: a
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
                for (var n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS), r = 0; r < n; r++) {
                    var a = this.gl.getActiveUniform(this.program, r);
                    this.uniformLocations.set(a, this.gl.getUniformLocation(this.program, a.name));
                    var s = a.name.match(/(\w+)/g);
                    a.uniformName = s[0],
                    a.nameComponents = s.slice(1)
                }
                this.attributeLocations = new Map;
                for (var o = [], h = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES), u = 0; u < h; u++) {
                    var l = this.gl.getActiveAttrib(this.program, u)
                      , c = this.gl.getAttribLocation(this.program, l.name);
                    -1 !== c && (o[c] = l.name,
                    this.attributeLocations.set(l, c))
                }
                this.attributeOrder = o.join("")
            }
        }
    }, {
        key: "setBlendFunc",
        value: function(t, e, i, n) {
            this.blendFunc.src = t,
            this.blendFunc.dst = e,
            this.blendFunc.srcAlpha = i,
            this.blendFunc.dstAlpha = n,
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
              , n = -1;
            this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program),
            this.gl.renderer.state.currentProgram = this.id),
            this.uniformLocations.forEach((function(e, i) {
                var r, a = t.uniforms[i.uniformName], s = function(t, e) {
                    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!i) {
                        if (Array.isArray(t) || (i = v(t)) || e) {
                            i && (t = i);
                            var n = 0
                              , r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return n >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[n++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, s = !0, o = !1;
                    return {
                        s: function() {
                            i = i.call(t)
                        },
                        n: function() {
                            var t = i.next();
                            return s = t.done,
                            t
                        },
                        e: function(t) {
                            o = !0,
                            a = t
                        },
                        f: function() {
                            try {
                                s || null == i.return || i.return()
                            } finally {
                                if (o)
                                    throw a
                            }
                        }
                    }
                }(i.nameComponents);
                try {
                    for (s.s(); !(r = s.n()).done; ) {
                        var o = r.value;
                        if (!a)
                            break;
                        if (!(o in a)) {
                            if (Array.isArray(a.value))
                                break;
                            a = void 0;
                            break
                        }
                        a = a[o]
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                if (!a)
                    return j("Active uniform ".concat(i.name, " has not been supplied"));
                if (a && void 0 === a.value)
                    return j("".concat(i.name, " uniform is missing a value parameter"));
                if (a.value.texture)
                    return n += 1,
                    a.value.update(n),
                    D(t.gl, i.type, e, n);
                if (a.value.length && a.value[0].texture) {
                    var h = [];
                    return a.value.forEach((function(t) {
                        n += 1,
                        t.update(n),
                        h.push(n)
                    }
                    )),
                    D(t.gl, i.type, e, h)
                }
                D(t.gl, i.type, e, a.value)
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
function D(t, e, i, n) {
    n = n.length ? function(t) {
        var e = t.length
          , i = t[0].length;
        if (void 0 === i)
            return t;
        var n = e * i
          , r = z[n];
        r || (z[n] = r = new Float32Array(n));
        for (var a = 0; a < e; a++)
            r.set(t[a], a * i);
        return r
    }(n) : n;
    var r = t.renderer.state.uniformLocations.get(i);
    if (n.length)
        if (void 0 === r || r.length !== n.length)
            t.renderer.state.uniformLocations.set(i, n.slice(0));
        else {
            if (function(t, e) {
                if (t.length !== e.length)
                    return !1;
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] !== e[i])
                        return !1;
                return !0
            }(r, n))
                return;
            r.set ? r.set(n) : function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    t[i] = e[i]
            }(r, n),
            t.renderer.state.uniformLocations.set(i, r)
        }
    else {
        if (r === n)
            return;
        t.renderer.state.uniformLocations.set(i, n)
    }
    switch (e) {
    case 5126:
        return n.length ? t.uniform1fv(i, n) : t.uniform1f(i, n);
    case 35664:
        return t.uniform2fv(i, n);
    case 35665:
        return t.uniform3fv(i, n);
    case 35666:
        return t.uniform4fv(i, n);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
        return n.length ? t.uniform1iv(i, n) : t.uniform1i(i, n);
    case 35671:
    case 35667:
        return t.uniform2iv(i, n);
    case 35672:
    case 35668:
        return t.uniform3iv(i, n);
    case 35673:
    case 35669:
        return t.uniform4iv(i, n);
    case 35674:
        return t.uniformMatrix2fv(i, !1, n);
    case 35675:
        return t.uniformMatrix3fv(i, !1, n);
    case 35676:
        return t.uniformMatrix4fv(i, !1, n)
    }
}
var I = 0;
function j(t) {
    I > 100 || I++
}
var q = new C
  , U = 1
  , N = function() {
    return r((function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , n = e.canvas
          , r = void 0 === n ? document.createElement("canvas") : n
          , a = e.width
          , s = void 0 === a ? 300 : a
          , o = e.height
          , h = void 0 === o ? 150 : o
          , u = e.dpr
          , l = void 0 === u ? 1 : u
          , c = e.alpha
          , f = void 0 !== c && c
          , d = e.depth
          , v = void 0 === d || d
          , g = e.stencil
          , p = void 0 !== g && g
          , y = e.antialias
          , m = void 0 === y || y
          , _ = e.premultipliedAlpha
          , x = void 0 !== _ && _
          , b = e.preserveDrawingBuffer
          , k = void 0 === b || b
          , M = e.powerPreference
          , w = void 0 === M ? "default" : M
          , A = e.autoClear
          , E = void 0 === A || A
          , S = e.webgl
          , C = void 0 === S ? 2 : S;
        i(this, t);
        var F = {
            alpha: f,
            depth: v,
            stencil: p,
            antialias: m,
            premultipliedAlpha: x,
            preserveDrawingBuffer: k,
            powerPreference: w
        };
        this.dpr = l,
        this.alpha = f,
        this.color = !0,
        this.depth = v,
        this.stencil = p,
        this.premultipliedAlpha = x,
        this.autoClear = E,
        this.id = U++,
        2 === C && (this.gl = r.getContext("webgl2", F)),
        this.isWebgl2 = !!this.gl,
        this.gl || (this.gl = r.getContext("webgl", F)),
        this.gl,
        this.gl.renderer = this,
        this.setSize(s, h),
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
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t,
            this.state.viewport.height = e,
            this.state.viewport.x = i,
            this.state.viewport.y = n,
            this.gl.viewport(i, n, t, e))
        }
    }, {
        key: "setScissor",
        value: function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            this.gl.scissor(i, n, t, e)
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
        value: function(t, e, i, n) {
            this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === n || (this.state.blendFunc.src = t,
            this.state.blendFunc.dst = e,
            this.state.blendFunc.srcAlpha = i,
            this.state.blendFunc.dstAlpha = n,
            void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, n) : this.gl.blendFunc(t, e))
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
              , n = t.buffer
              , r = void 0 === n ? null : n;
            this.state.framebuffer !== r && (this.state.framebuffer = r,
            this.gl.bindFramebuffer(i, r))
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
              , n = t.frustumCull
              , r = t.sort
              , a = [];
            if (i && n && i.updateFrustum(),
            e.traverse((function(t) {
                if (!t.visible)
                    return !0;
                t.draw && (n && t.frustumCulled && i && !i.frustumIntersectsMesh(t) || a.push(t))
            }
            )),
            r) {
                var s = []
                  , o = []
                  , h = [];
                a.forEach((function(t) {
                    t.program.transparent ? t.program.depthTest ? o.push(t) : h.push(t) : s.push(t),
                    t.zDepth = 0,
                    0 === t.renderOrder && t.program.depthTest && i && (t.worldMatrix.getTranslation(q),
                    q.applyMatrix4(i.projectionViewMatrix),
                    t.zDepth = q.z)
                }
                )),
                s.sort(this.sortOpaque),
                o.sort(this.sortTransparent),
                h.sort(this.sortUI),
                a = s.concat(o, h)
            }
            return a
        }
    }, {
        key: "render",
        value: function(t) {
            var e = t.scene
              , i = t.camera
              , n = t.target
              , r = void 0 === n ? null : n
              , a = t.update
              , s = void 0 === a || a
              , o = t.sort
              , h = void 0 === o || o
              , u = t.frustumCull
              , l = void 0 === u || u
              , c = t.clear;
            null === r ? (this.bindFramebuffer(),
            this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(r),
            this.setViewport(r.width, r.height)),
            (c || this.autoClear && !1 !== c) && (!this.depth || r && !r.depth || (this.enable(this.gl.DEPTH_TEST),
            this.setDepthMask(!0)),
            this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
            s && e.updateMatrixWorld(),
            i && i.updateMatrixWorld(),
            this.getRenderList({
                scene: e,
                camera: i,
                frustumCull: l,
                sort: h
            }).forEach((function(t) {
                t.draw({
                    camera: i
                })
            }
            ))
        }
    }])
}();
function V(t, e, i) {
    var n = e[0]
      , r = e[1]
      , a = e[2]
      , s = e[3]
      , o = i[0]
      , h = i[1]
      , u = i[2]
      , l = i[3];
    return t[0] = n * l + s * o + r * u - a * h,
    t[1] = r * l + s * h + a * o - n * u,
    t[2] = a * l + s * u + n * h - r * o,
    t[3] = s * l - n * o - r * h - a * u,
    t
}
var W = function(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t
}
  , G = function(t, e, i, n, r) {
    return t[0] = e,
    t[1] = i,
    t[2] = n,
    t[3] = r,
    t
}
  , X = function(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
}
  , Y = function(t, e) {
    var i = e[0]
      , n = e[1]
      , r = e[2]
      , a = e[3]
      , s = i * i + n * n + r * r + a * a;
    return s > 0 && (s = 1 / Math.sqrt(s)),
    t[0] = i * s,
    t[1] = n * s,
    t[2] = r * s,
    t[3] = a * s,
    t
}
  , H = function(t) {
    function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        i(this, n),
        (t = e(this, n, [r, a, s, o])).onChange = function() {}
        ,
        t._target = t;
        var h = ["0", "1", "2", "3"];
        return u(t, new Proxy(t,{
            set: function(t, e) {
                var i = Reflect.set.apply(Reflect, arguments);
                return i && h.includes(e) && t.onChange(),
                i
            }
        }))
    }
    return o(n, g(Array)),
    r(n, [{
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
        value: function(t, e, i, n) {
            return t.length ? this.copy(t) : (G(this._target, t, e, i, n),
            this.onChange(),
            this)
        }
    }, {
        key: "rotateX",
        value: function(t) {
            return function(t, e, i) {
                i *= .5;
                var n = e[0]
                  , r = e[1]
                  , a = e[2]
                  , s = e[3]
                  , o = Math.sin(i)
                  , h = Math.cos(i);
                t[0] = n * h + s * o,
                t[1] = r * h + a * o,
                t[2] = a * h - r * o,
                t[3] = s * h - n * o
            }(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "rotateY",
        value: function(t) {
            return function(t, e, i) {
                i *= .5;
                var n = e[0]
                  , r = e[1]
                  , a = e[2]
                  , s = e[3]
                  , o = Math.sin(i)
                  , h = Math.cos(i);
                t[0] = n * h - a * o,
                t[1] = r * h + s * o,
                t[2] = a * h + n * o,
                t[3] = s * h - r * o
            }(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "rotateZ",
        value: function(t) {
            return function(t, e, i) {
                i *= .5;
                var n = e[0]
                  , r = e[1]
                  , a = e[2]
                  , s = e[3]
                  , o = Math.sin(i)
                  , h = Math.cos(i);
                t[0] = n * h + r * o,
                t[1] = r * h - n * o,
                t[2] = a * h + s * o,
                t[3] = s * h - a * o
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
                  , n = e[1]
                  , r = e[2]
                  , a = e[3]
                  , s = i * i + n * n + r * r + a * a
                  , o = s ? 1 / s : 0;
                t[0] = -i * o,
                t[1] = -n * o,
                t[2] = -r * o,
                t[3] = a * o
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
            return W(this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "normalize",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._target;
            return Y(this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            return e ? V(this._target, t, e) : V(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "dot",
        value: function(t) {
            return X(this._target, t)
        }
    }, {
        key: "fromMatrix3",
        value: function(t) {
            return function(t, e) {
                var i, n = e[0] + e[4] + e[8];
                if (n > 0)
                    i = Math.sqrt(n + 1),
                    t[3] = .5 * i,
                    i = .5 / i,
                    t[0] = (e[5] - e[7]) * i,
                    t[1] = (e[6] - e[2]) * i,
                    t[2] = (e[1] - e[3]) * i;
                else {
                    var r = 0;
                    e[4] > e[0] && (r = 1),
                    e[8] > e[3 * r + r] && (r = 2);
                    var a = (r + 1) % 3
                      , s = (r + 2) % 3;
                    i = Math.sqrt(e[3 * r + r] - e[3 * a + a] - e[3 * s + s] + 1),
                    t[r] = .5 * i,
                    i = .5 / i,
                    t[3] = (e[3 * a + s] - e[3 * s + a]) * i,
                    t[a] = (e[3 * a + r] + e[3 * r + a]) * i,
                    t[s] = (e[3 * s + r] + e[3 * r + s]) * i
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
                  , n = Math.sin(.5 * e[0])
                  , r = Math.cos(.5 * e[0])
                  , a = Math.sin(.5 * e[1])
                  , s = Math.cos(.5 * e[1])
                  , o = Math.sin(.5 * e[2])
                  , h = Math.cos(.5 * e[2]);
                "XYZ" === i ? (t[0] = n * s * h + r * a * o,
                t[1] = r * a * h - n * s * o,
                t[2] = r * s * o + n * a * h,
                t[3] = r * s * h - n * a * o) : "YXZ" === i ? (t[0] = n * s * h + r * a * o,
                t[1] = r * a * h - n * s * o,
                t[2] = r * s * o - n * a * h,
                t[3] = r * s * h + n * a * o) : "ZXY" === i ? (t[0] = n * s * h - r * a * o,
                t[1] = r * a * h + n * s * o,
                t[2] = r * s * o + n * a * h,
                t[3] = r * s * h - n * a * o) : "ZYX" === i ? (t[0] = n * s * h - r * a * o,
                t[1] = r * a * h + n * s * o,
                t[2] = r * s * o - n * a * h,
                t[3] = r * s * h + n * a * o) : "YZX" === i ? (t[0] = n * s * h + r * a * o,
                t[1] = r * a * h + n * s * o,
                t[2] = r * s * o - n * a * h,
                t[3] = r * s * h - n * a * o) : "XZY" === i && (t[0] = n * s * h - r * a * o,
                t[1] = r * a * h - n * s * o,
                t[2] = r * s * o + n * a * h,
                t[3] = r * s * h + n * a * o)
            }(this._target, t, t.order),
            e || this.onChange(),
            this
        }
    }, {
        key: "fromAxisAngle",
        value: function(t, e) {
            return function(t, e, i) {
                i *= .5;
                var n = Math.sin(i);
                t[0] = n * e[0],
                t[1] = n * e[1],
                t[2] = n * e[2],
                t[3] = Math.cos(i)
            }(this._target, t, e),
            this.onChange(),
            this
        }
    }, {
        key: "slerp",
        value: function(t, e) {
            return function(t, e, i, n) {
                var r, a, s, o, h, u = e[0], l = e[1], c = e[2], f = e[3], d = i[0], v = i[1], g = i[2], p = i[3];
                (a = u * d + l * v + c * g + f * p) < 0 && (a = -a,
                d = -d,
                v = -v,
                g = -g,
                p = -p),
                1 - a > 1e-6 ? (r = Math.acos(a),
                s = Math.sin(r),
                o = Math.sin((1 - n) * r) / s,
                h = Math.sin(n * r) / s) : (o = 1 - n,
                h = n),
                t[0] = o * u + h * d,
                t[1] = o * l + h * v,
                t[2] = o * c + h * g,
                t[3] = o * f + h * p
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
function Z(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2]
      , r = t[3]
      , a = t[4]
      , s = t[5]
      , o = t[6]
      , h = t[7]
      , u = t[8]
      , l = t[9]
      , c = t[10]
      , f = t[11]
      , d = t[12]
      , v = t[13]
      , g = t[14]
      , p = t[15];
    return (e * s - i * a) * (c * p - f * g) - (e * o - n * a) * (l * p - f * v) + (e * h - r * a) * (l * g - c * v) + (i * o - n * s) * (u * p - f * d) - (i * h - r * s) * (u * g - c * d) + (n * h - r * o) * (u * v - l * d)
}
function Q(t, e, i) {
    var n = e[0]
      , r = e[1]
      , a = e[2]
      , s = e[3]
      , o = e[4]
      , h = e[5]
      , u = e[6]
      , l = e[7]
      , c = e[8]
      , f = e[9]
      , d = e[10]
      , v = e[11]
      , g = e[12]
      , p = e[13]
      , y = e[14]
      , m = e[15]
      , _ = i[0]
      , x = i[1]
      , b = i[2]
      , k = i[3];
    return t[0] = _ * n + x * o + b * c + k * g,
    t[1] = _ * r + x * h + b * f + k * p,
    t[2] = _ * a + x * u + b * d + k * y,
    t[3] = _ * s + x * l + b * v + k * m,
    _ = i[4],
    x = i[5],
    b = i[6],
    k = i[7],
    t[4] = _ * n + x * o + b * c + k * g,
    t[5] = _ * r + x * h + b * f + k * p,
    t[6] = _ * a + x * u + b * d + k * y,
    t[7] = _ * s + x * l + b * v + k * m,
    _ = i[8],
    x = i[9],
    b = i[10],
    k = i[11],
    t[8] = _ * n + x * o + b * c + k * g,
    t[9] = _ * r + x * h + b * f + k * p,
    t[10] = _ * a + x * u + b * d + k * y,
    t[11] = _ * s + x * l + b * v + k * m,
    _ = i[12],
    x = i[13],
    b = i[14],
    k = i[15],
    t[12] = _ * n + x * o + b * c + k * g,
    t[13] = _ * r + x * h + b * f + k * p,
    t[14] = _ * a + x * u + b * d + k * y,
    t[15] = _ * s + x * l + b * v + k * m,
    t
}
function K(t, e) {
    var i = e[0]
      , n = e[1]
      , r = e[2]
      , a = e[4]
      , s = e[5]
      , o = e[6]
      , h = e[8]
      , u = e[9]
      , l = e[10];
    return t[0] = Math.hypot(i, n, r),
    t[1] = Math.hypot(a, s, o),
    t[2] = Math.hypot(h, u, l),
    t
}
var $, J = ($ = [1, 1, 1],
function(t, e) {
    var i = $;
    K(i, e);
    var n = 1 / i[0]
      , r = 1 / i[1]
      , a = 1 / i[2]
      , s = e[0] * n
      , o = e[1] * r
      , h = e[2] * a
      , u = e[4] * n
      , l = e[5] * r
      , c = e[6] * a
      , f = e[8] * n
      , d = e[9] * r
      , v = e[10] * a
      , g = s + l + v
      , p = 0;
    return g > 0 ? (p = 2 * Math.sqrt(g + 1),
    t[3] = .25 * p,
    t[0] = (c - d) / p,
    t[1] = (f - h) / p,
    t[2] = (o - u) / p) : s > l && s > v ? (p = 2 * Math.sqrt(1 + s - l - v),
    t[3] = (c - d) / p,
    t[0] = .25 * p,
    t[1] = (o + u) / p,
    t[2] = (f + h) / p) : l > v ? (p = 2 * Math.sqrt(1 + l - s - v),
    t[3] = (f - h) / p,
    t[0] = (o + u) / p,
    t[1] = .25 * p,
    t[2] = (c + d) / p) : (p = 2 * Math.sqrt(1 + v - s - l),
    t[3] = (o - u) / p,
    t[0] = (f + h) / p,
    t[1] = (c + d) / p,
    t[2] = .25 * p),
    t
}
);
function tt(t, e, i) {
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
function et(t, e, i) {
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
var it = function(t) {
    function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, f = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, v = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, g = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, p = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0, y = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0, m = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : 0, _ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0, x = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 1;
        return i(this, n),
        u(t = e(this, n, [r, a, s, o, h, l, c, f, d, v, g, p, y, m, _, x]), t)
    }
    return o(n, g(Array)),
    r(n, [{
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
        value: function(t, e, i, n, r, a, s, o, h, u, l, c, f, d, v, g) {
            return t.length ? this.copy(t) : (function(t, e, i, n, r, a, s, o, h, u, l, c, f, d, v, g, p) {
                t[0] = e,
                t[1] = i,
                t[2] = n,
                t[3] = r,
                t[4] = a,
                t[5] = s,
                t[6] = o,
                t[7] = h,
                t[8] = u,
                t[9] = l,
                t[10] = c,
                t[11] = f,
                t[12] = d,
                t[13] = v,
                t[14] = g,
                t[15] = p
            }(this, t, e, i, n, r, a, s, o, h, u, l, c, f, d, v, g),
            this)
        }
    }, {
        key: "translate",
        value: function(t) {
            return function(t, e, i) {
                var n, r, a, s, o, h, u, l, c, f, d, v, g = i[0], p = i[1], y = i[2];
                e === t ? (t[12] = e[0] * g + e[4] * p + e[8] * y + e[12],
                t[13] = e[1] * g + e[5] * p + e[9] * y + e[13],
                t[14] = e[2] * g + e[6] * p + e[10] * y + e[14],
                t[15] = e[3] * g + e[7] * p + e[11] * y + e[15]) : (n = e[0],
                r = e[1],
                a = e[2],
                s = e[3],
                o = e[4],
                h = e[5],
                u = e[6],
                l = e[7],
                c = e[8],
                f = e[9],
                d = e[10],
                v = e[11],
                t[0] = n,
                t[1] = r,
                t[2] = a,
                t[3] = s,
                t[4] = o,
                t[5] = h,
                t[6] = u,
                t[7] = l,
                t[8] = c,
                t[9] = f,
                t[10] = d,
                t[11] = v,
                t[12] = n * g + o * p + c * y + e[12],
                t[13] = r * g + h * p + f * y + e[13],
                t[14] = a * g + u * p + d * y + e[14],
                t[15] = s * g + l * p + v * y + e[15])
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "rotate",
        value: function(t, e) {
            return function(t, e, i, n) {
                var r, a, s, o, h, u, l, c, f, d, v, g, p, y, m, _, x, b, k, M, w, A, E, S, C = n[0], F = n[1], R = n[2], O = Math.hypot(C, F, R);
                Math.abs(O) < 1e-6 || (C *= O = 1 / O,
                F *= O,
                R *= O,
                r = Math.sin(i),
                s = 1 - (a = Math.cos(i)),
                o = e[0],
                h = e[1],
                u = e[2],
                l = e[3],
                c = e[4],
                f = e[5],
                d = e[6],
                v = e[7],
                g = e[8],
                p = e[9],
                y = e[10],
                m = e[11],
                _ = C * C * s + a,
                x = F * C * s + R * r,
                b = R * C * s - F * r,
                k = C * F * s - R * r,
                M = F * F * s + a,
                w = R * F * s + C * r,
                A = C * R * s + F * r,
                E = F * R * s - C * r,
                S = R * R * s + a,
                t[0] = o * _ + c * x + g * b,
                t[1] = h * _ + f * x + p * b,
                t[2] = u * _ + d * x + y * b,
                t[3] = l * _ + v * x + m * b,
                t[4] = o * k + c * M + g * w,
                t[5] = h * k + f * M + p * w,
                t[6] = u * k + d * M + y * w,
                t[7] = l * k + v * M + m * w,
                t[8] = o * A + c * E + g * S,
                t[9] = h * A + f * E + p * S,
                t[10] = u * A + d * E + y * S,
                t[11] = l * A + v * E + m * S,
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
                var n = i[0]
                  , r = i[1]
                  , a = i[2];
                t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t[4] = e[4] * r,
                t[5] = e[5] * r,
                t[6] = e[6] * r,
                t[7] = e[7] * r,
                t[8] = e[8] * a,
                t[9] = e[9] * a,
                t[10] = e[10] * a,
                t[11] = e[11] * a,
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
            return e ? tt(this, t, e) : tt(this, this, t),
            this
        }
    }, {
        key: "sub",
        value: function(t, e) {
            return e ? et(this, t, e) : et(this, this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            var i, n, r;
            return t.length ? e ? Q(this, t, e) : Q(this, this, t) : (n = this,
            r = t,
            (i = this)[0] = n[0] * r,
            i[1] = n[1] * r,
            i[2] = n[2] * r,
            i[3] = n[3] * r,
            i[4] = n[4] * r,
            i[5] = n[5] * r,
            i[6] = n[6] * r,
            i[7] = n[7] * r,
            i[8] = n[8] * r,
            i[9] = n[9] * r,
            i[10] = n[10] * r,
            i[11] = n[11] * r,
            i[12] = n[12] * r,
            i[13] = n[13] * r,
            i[14] = n[14] * r,
            i[15] = n[15] * r),
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
            return function(t, e, i, n, r) {
                var a = 1 / Math.tan(e / 2)
                  , s = 1 / (n - r);
                t[0] = a / i,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = a,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = (r + n) * s,
                t[11] = -1,
                t[12] = 0,
                t[13] = 0,
                t[14] = 2 * r * n * s,
                t[15] = 0
            }(this, t.fov, t.aspect, t.near, t.far),
            this
        }
    }, {
        key: "fromOrthogonal",
        value: function(t) {
            return function(t, e, i, n, r, a, s) {
                var o = 1 / (e - i)
                  , h = 1 / (n - r)
                  , u = 1 / (a - s);
                t[0] = -2 * o,
                t[1] = 0,
                t[2] = 0,
                t[3] = 0,
                t[4] = 0,
                t[5] = -2 * h,
                t[6] = 0,
                t[7] = 0,
                t[8] = 0,
                t[9] = 0,
                t[10] = 2 * u,
                t[11] = 0,
                t[12] = (e + i) * o,
                t[13] = (r + n) * h,
                t[14] = (s + a) * u,
                t[15] = 1
            }(this, t.left, t.right, t.bottom, t.top, t.near, t.far),
            this
        }
    }, {
        key: "fromQuaternion",
        value: function(t) {
            return function(t, e) {
                var i = e[0]
                  , n = e[1]
                  , r = e[2]
                  , a = e[3]
                  , s = i + i
                  , o = n + n
                  , h = r + r
                  , u = i * s
                  , l = n * s
                  , c = n * o
                  , f = r * s
                  , d = r * o
                  , v = r * h
                  , g = a * s
                  , p = a * o
                  , y = a * h;
                t[0] = 1 - c - v,
                t[1] = l + y,
                t[2] = f - p,
                t[3] = 0,
                t[4] = l - y,
                t[5] = 1 - u - v,
                t[6] = d + g,
                t[7] = 0,
                t[8] = f + p,
                t[9] = d - g,
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
            var t, e, i, n, r, a, s, o, h, u, l, c, f, d, v, g, p, y, m, _, x, b, k, M, w, A, E, S, C, F, R;
            return t = this,
            i = (e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0],
            n = e[1],
            r = e[2],
            a = e[3],
            s = e[4],
            o = e[5],
            h = e[6],
            u = e[7],
            l = e[8],
            c = e[9],
            f = e[10],
            d = e[11],
            v = e[12],
            g = e[13],
            p = e[14],
            y = e[15],
            (R = (m = i * o - n * s) * (F = f * y - d * p) - (_ = i * h - r * s) * (C = c * y - d * g) + (x = i * u - a * s) * (S = c * p - f * g) + (b = n * h - r * o) * (E = l * y - d * v) - (k = n * u - a * o) * (A = l * p - f * v) + (M = r * u - a * h) * (w = l * g - c * v)) && (R = 1 / R,
            t[0] = (o * F - h * C + u * S) * R,
            t[1] = (r * C - n * F - a * S) * R,
            t[2] = (g * M - p * k + y * b) * R,
            t[3] = (f * k - c * M - d * b) * R,
            t[4] = (h * E - s * F - u * A) * R,
            t[5] = (i * F - r * E + a * A) * R,
            t[6] = (p * x - v * M - y * _) * R,
            t[7] = (l * M - f * x + d * _) * R,
            t[8] = (s * C - o * E + u * w) * R,
            t[9] = (n * E - i * C - a * w) * R,
            t[10] = (v * k - g * x + y * m) * R,
            t[11] = (c * x - l * k - d * m) * R,
            t[12] = (o * A - s * S - h * w) * R,
            t[13] = (i * S - n * A + r * w) * R,
            t[14] = (g * _ - v * b - p * m) * R,
            t[15] = (l * b - c * _ + f * m) * R),
            this
        }
    }, {
        key: "compose",
        value: function(t, e, i) {
            var n, r, a, s, o, h, u, l, c, f, d, v, g, p, y, m, _, x, b, k, M, w, A;
            return r = e,
            a = i,
            s = this,
            o = (n = t)[0],
            h = n[1],
            u = n[2],
            l = n[3],
            v = o * (c = o + o),
            g = o * (f = h + h),
            p = o * (d = u + u),
            y = h * f,
            m = h * d,
            _ = u * d,
            x = l * c,
            b = l * f,
            k = l * d,
            M = a[0],
            w = a[1],
            A = a[2],
            s[0] = (1 - (y + _)) * M,
            s[1] = (g + k) * M,
            s[2] = (p - b) * M,
            s[3] = 0,
            s[4] = (g - k) * w,
            s[5] = (1 - (v + _)) * w,
            s[6] = (m + x) * w,
            s[7] = 0,
            s[8] = (p + b) * A,
            s[9] = (m - x) * A,
            s[10] = (1 - (v + y)) * A,
            s[11] = 0,
            s[12] = r[0],
            s[13] = r[1],
            s[14] = r[2],
            s[15] = 1,
            this
        }
    }, {
        key: "decompose",
        value: function(t, e, i) {
            return function(t, e, i, n) {
                var r = p([t[0], t[1], t[2]])
                  , a = p([t[4], t[5], t[6]])
                  , s = p([t[8], t[9], t[10]]);
                Z(t) < 0 && (r = -r),
                i[0] = t[12],
                i[1] = t[13],
                i[2] = t[14];
                var o = t.slice()
                  , h = 1 / r
                  , u = 1 / a
                  , l = 1 / s;
                o[0] *= h,
                o[1] *= h,
                o[2] *= h,
                o[4] *= u,
                o[5] *= u,
                o[6] *= u,
                o[8] *= l,
                o[9] *= l,
                o[10] *= l,
                J(e, o),
                n[0] = r,
                n[1] = a,
                n[2] = s
            }(this, t, e, i),
            this
        }
    }, {
        key: "getRotation",
        value: function(t) {
            return J(t, this),
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
            return K(t, this),
            this
        }
    }, {
        key: "getMaxScaleOnAxis",
        value: function() {
            return e = (t = this)[0],
            i = t[1],
            n = t[2],
            r = t[4],
            a = t[5],
            s = t[6],
            o = t[8],
            h = t[9],
            u = t[10],
            l = e * e + i * i + n * n,
            c = r * r + a * a + s * s,
            f = o * o + h * h + u * u,
            Math.sqrt(Math.max(l, c, f));
            var t, e, i, n, r, a, s, o, h, u, l, c, f
        }
    }, {
        key: "lookAt",
        value: function(t, e, i) {
            return function(t, e, i, n) {
                var r = e[0]
                  , a = e[1]
                  , s = e[2]
                  , o = n[0]
                  , h = n[1]
                  , u = n[2]
                  , l = r - i[0]
                  , c = a - i[1]
                  , f = s - i[2]
                  , d = l * l + c * c + f * f;
                0 === d ? f = 1 : (l *= d = 1 / Math.sqrt(d),
                c *= d,
                f *= d);
                var v = h * f - u * c
                  , g = u * l - o * f
                  , p = o * c - h * l;
                0 == (d = v * v + g * g + p * p) && (u ? o += 1e-6 : h ? u += 1e-6 : h += 1e-6,
                d = (v = h * f - u * c) * v + (g = u * l - o * f) * g + (p = o * c - h * l) * p),
                v *= d = 1 / Math.sqrt(d),
                g *= d,
                p *= d,
                t[0] = v,
                t[1] = g,
                t[2] = p,
                t[3] = 0,
                t[4] = c * p - f * g,
                t[5] = f * v - l * p,
                t[6] = l * g - c * v,
                t[7] = 0,
                t[8] = l,
                t[9] = c,
                t[10] = f,
                t[11] = 0,
                t[12] = r,
                t[13] = a,
                t[14] = s,
                t[15] = 1
            }(this, t, e, i),
            this
        }
    }, {
        key: "determinant",
        value: function() {
            return Z(this)
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
var nt = new it
  , rt = function(t) {
    function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "YXZ";
        i(this, n),
        (t = e(this, n, [r, a, s])).order = o,
        t.onChange = function() {}
        ,
        t._target = t;
        var h = ["0", "1", "2"];
        return u(t, new Proxy(t,{
            set: function(t, e) {
                var i = Reflect.set.apply(Reflect, arguments);
                return i && h.includes(e) && t.onChange(),
                i
            }
        }))
    }
    return o(n, g(Array)),
    r(n, [{
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
    return r((function t() {
        var e = this;
        i(this, t),
        this.parent = null,
        this.children = [],
        this.visible = !0,
        this.matrix = new it,
        this.worldMatrix = new it,
        this.matrixAutoUpdate = !0,
        this.worldMatrixNeedsUpdate = !1,
        this.position = new C,
        this.quaternion = new H,
        this.scale = new C(1),
        this.rotation = new rt,
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
  , st = new it
  , ot = new C
  , ht = new C
  , ut = function(t) {
    function n(t) {
        var r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = a.near, o = void 0 === s ? .1 : s, h = a.far, u = void 0 === h ? 100 : h, l = a.fov, c = void 0 === l ? 45 : l, f = a.aspect, d = void 0 === f ? 1 : f, v = a.left, g = a.right, p = a.bottom, y = a.top, m = a.zoom, _ = void 0 === m ? 1 : m;
        return i(this, n),
        r = e(this, n),
        Object.assign(r, {
            near: o,
            far: u,
            fov: c,
            aspect: d,
            left: v,
            right: g,
            bottom: p,
            top: y,
            zoom: _
        }),
        r.projectionMatrix = new it,
        r.viewMatrix = new it,
        r.projectionViewMatrix = new it,
        r.worldPosition = new C,
        r.type = v || g ? "orthographic" : "perspective",
        "orthographic" === r.type ? r.orthographic() : r.perspective(),
        r
    }
    return o(n, at),
    r(n, [{
        key: "perspective",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.near
              , i = void 0 === e ? this.near : e
              , n = t.far
              , r = void 0 === n ? this.far : n
              , a = t.fov
              , s = void 0 === a ? this.fov : a
              , o = t.aspect
              , h = void 0 === o ? this.aspect : o;
            return Object.assign(this, {
                near: i,
                far: r,
                fov: s,
                aspect: h
            }),
            this.projectionMatrix.fromPerspective({
                fov: s * (Math.PI / 180),
                aspect: h,
                near: i,
                far: r
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
              , n = t.far
              , r = void 0 === n ? this.far : n
              , a = t.left
              , s = void 0 === a ? this.left || -1 : a
              , o = t.right
              , h = void 0 === o ? this.right || 1 : o
              , u = t.bottom
              , l = void 0 === u ? this.bottom || -1 : u
              , c = t.top
              , f = void 0 === c ? this.top || 1 : c
              , d = t.zoom
              , v = void 0 === d ? this.zoom : d;
            return Object.assign(this, {
                near: i,
                far: r,
                left: s,
                right: h,
                bottom: l,
                top: f,
                zoom: v
            }),
            s /= v,
            h /= v,
            l /= v,
            f /= v,
            this.projectionMatrix.fromOrthogonal({
                left: s,
                right: h,
                bottom: l,
                top: f,
                near: i,
                far: r
            }),
            this.type = "orthographic",
            this
        }
    }, {
        key: "updateMatrixWorld",
        value: function() {
            return a(s(n.prototype), "updateMatrixWorld", this).call(this),
            this.viewMatrix.inverse(this.worldMatrix),
            this.worldMatrix.getTranslation(this.worldPosition),
            this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
            this
        }
    }, {
        key: "lookAt",
        value: function(t) {
            return a(s(n.prototype), "lookAt", this).call(this, t, !0),
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
            return t.applyMatrix4(st.inverse(this.projectionMatrix)),
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
            var n = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
            return this.frustumIntersectsSphere(i, n)
        }
    }, {
        key: "frustumIntersectsSphere",
        value: function(t, e) {
            for (var i = ht, n = 0; n < 6; n++) {
                var r = this.frustum[n];
                if (i.copy(r).dot(t) + r.constant < -e)
                    return !1
            }
            return !0
        }
    }])
}();
function lt(t, e, i) {
    var n = e[0]
      , r = e[1]
      , a = e[2]
      , s = e[3]
      , o = e[4]
      , h = e[5]
      , u = e[6]
      , l = e[7]
      , c = e[8]
      , f = i[0]
      , d = i[1]
      , v = i[2]
      , g = i[3]
      , p = i[4]
      , y = i[5]
      , m = i[6]
      , _ = i[7]
      , x = i[8];
    return t[0] = f * n + d * s + v * u,
    t[1] = f * r + d * o + v * l,
    t[2] = f * a + d * h + v * c,
    t[3] = g * n + p * s + y * u,
    t[4] = g * r + p * o + y * l,
    t[5] = g * a + p * h + y * c,
    t[6] = m * n + _ * s + x * u,
    t[7] = m * r + _ * o + x * l,
    t[8] = m * a + _ * h + x * c,
    t
}
var ct = function(t) {
    function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, f = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1;
        return i(this, n),
        u(t = e(this, n, [r, a, s, o, h, l, c, f, d]), t)
    }
    return o(n, g(Array)),
    r(n, [{
        key: "set",
        value: function(t, e, i, n, r, a, s, o, h) {
            return t.length ? this.copy(t) : (function(t, e, i, n, r, a, s, o, h, u) {
                t[0] = e,
                t[1] = i,
                t[2] = n,
                t[3] = r,
                t[4] = a,
                t[5] = s,
                t[6] = o,
                t[7] = h,
                t[8] = u
            }(this, t, e, i, n, r, a, s, o, h),
            this)
        }
    }, {
        key: "translate",
        value: function(t) {
            return function(t, e, i) {
                var n = e[0]
                  , r = e[1]
                  , a = e[2]
                  , s = e[3]
                  , o = e[4]
                  , h = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8]
                  , f = i[0]
                  , d = i[1];
                t[0] = n,
                t[1] = r,
                t[2] = a,
                t[3] = s,
                t[4] = o,
                t[5] = h,
                t[6] = f * n + d * s + u,
                t[7] = f * r + d * o + l,
                t[8] = f * a + d * h + c
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "rotate",
        value: function(t) {
            var e, i, n, r, a, s, o, h, u, l, c, f, d, v;
            return e = this,
            n = t,
            r = (i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)[0],
            a = i[1],
            s = i[2],
            o = i[3],
            h = i[4],
            u = i[5],
            l = i[6],
            c = i[7],
            f = i[8],
            d = Math.sin(n),
            v = Math.cos(n),
            e[0] = v * r + d * o,
            e[1] = v * a + d * h,
            e[2] = v * s + d * u,
            e[3] = v * o - d * r,
            e[4] = v * h - d * a,
            e[5] = v * u - d * s,
            e[6] = l,
            e[7] = c,
            e[8] = f,
            this
        }
    }, {
        key: "scale",
        value: function(t) {
            return function(t, e, i) {
                var n = i[0]
                  , r = i[1];
                t[0] = n * e[0],
                t[1] = n * e[1],
                t[2] = n * e[2],
                t[3] = r * e[3],
                t[4] = r * e[4],
                t[5] = r * e[5],
                t[6] = e[6],
                t[7] = e[7],
                t[8] = e[8]
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            return e ? lt(this, t, e) : lt(this, this, t),
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
                  , n = e[1]
                  , r = e[2]
                  , a = e[3]
                  , s = i + i
                  , o = n + n
                  , h = r + r
                  , u = i * s
                  , l = n * s
                  , c = n * o
                  , f = r * s
                  , d = r * o
                  , v = r * h
                  , g = a * s
                  , p = a * o
                  , y = a * h;
                t[0] = 1 - c - v,
                t[3] = l - y,
                t[6] = f + p,
                t[1] = l + y,
                t[4] = 1 - u - v,
                t[7] = d - g,
                t[2] = f - p,
                t[5] = d + g,
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
            var t, e, i, n, r, a, s, o, h, u, l, c, f, d, v;
            return t = this,
            i = (e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0],
            n = e[1],
            r = e[2],
            a = e[3],
            s = e[4],
            o = e[5],
            h = e[6],
            u = e[7],
            l = e[8],
            (v = i * (c = l * s - o * u) + n * (f = -l * a + o * h) + r * (d = u * a - s * h)) && (v = 1 / v,
            t[0] = c * v,
            t[1] = (-l * n + r * u) * v,
            t[2] = (o * n - r * s) * v,
            t[3] = f * v,
            t[4] = (l * i - r * h) * v,
            t[5] = (-o * i + r * a) * v,
            t[6] = d * v,
            t[7] = (-u * i + n * h) * v,
            t[8] = (s * i - n * a) * v),
            this
        }
    }, {
        key: "getNormalMatrix",
        value: function(t) {
            var e, i, n, r, a, s, o, h, u, l, c, f, d, v, g, p, y, m, _, x, b, k, M, w, A, E, S, C, F, R, O;
            return e = this,
            n = (i = t)[0],
            r = i[1],
            a = i[2],
            s = i[3],
            o = i[4],
            h = i[5],
            u = i[6],
            l = i[7],
            c = i[8],
            f = i[9],
            d = i[10],
            v = i[11],
            g = i[12],
            p = i[13],
            y = i[14],
            m = i[15],
            (O = (_ = n * h - r * o) * (R = d * m - v * y) - (x = n * u - a * o) * (F = f * m - v * p) + (b = n * l - s * o) * (C = f * y - d * p) + (k = r * u - a * h) * (S = c * m - v * g) - (M = r * l - s * h) * (E = c * y - d * g) + (w = a * l - s * u) * (A = c * p - f * g)) && (O = 1 / O,
            e[0] = (h * R - u * F + l * C) * O,
            e[1] = (u * S - o * R - l * E) * O,
            e[2] = (o * F - h * S + l * A) * O,
            e[3] = (a * F - r * R - s * C) * O,
            e[4] = (n * R - a * S + s * E) * O,
            e[5] = (r * S - n * F - s * A) * O,
            e[6] = (p * w - y * M + m * k) * O,
            e[7] = (y * b - g * w - m * x) * O,
            e[8] = (g * M - p * b + m * _) * O),
            this
        }
    }])
}()
  , ft = 0
  , dt = function(t) {
    function n(t) {
        var r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = a.geometry, o = a.program, h = a.mode, u = void 0 === h ? t.TRIANGLES : h, l = a.frustumCulled, c = void 0 === l || l, f = a.renderOrder, d = void 0 === f ? 0 : f;
        return i(this, n),
        r = e(this, n),
        t.canvas,
        r.gl = t,
        r.id = ft++,
        r.geometry = s,
        r.program = o,
        r.mode = u,
        r.frustumCulled = c,
        r.renderOrder = d,
        r.modelViewMatrix = new it,
        r.normalMatrix = new ct,
        r.beforeRenderCallbacks = [],
        r.afterRenderCallbacks = [],
        r
    }
    return o(n, at),
    r(n, [{
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
  , vt = {
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
function gt(t) {
    4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
}
function pt(t) {
    return [((t = parseInt(t)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
}
function yt(t) {
    return void 0 === t ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(t) ? "#" === t[0] ? gt(t) : vt[t.toLowerCase()] ? gt(vt[t.toLowerCase()]) : [0, 0, 0] : pt(t)
}
var mt = Object.freeze({
    __proto__: null,
    hexToRGB: gt,
    numberToRGB: pt,
    parseColor: yt
})
  , _t = function(t) {
    function n(t) {
        var r;
        return i(this, n),
        Array.isArray(t) ? u(r, r = e(this, n, c(t))) : u(r, r = e(this, n, c(yt.apply(mt, arguments))))
    }
    return o(n, g(Array)),
    r(n, [{
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
            return Array.isArray(t) ? this.copy(t) : this.copy(yt.apply(mt, arguments))
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
function xt(t, e, i) {
    return t[0] = e[0] + i[0],
    t[1] = e[1] + i[1],
    t
}
function bt(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t
}
function kt(t, e, i) {
    return t[0] = e[0] * i,
    t[1] = e[1] * i,
    t
}
function Mt(t) {
    var e = t[0]
      , i = t[1];
    return Math.sqrt(e * e + i * i)
}
function wt(t, e) {
    return t[0] * e[1] - t[1] * e[0]
}
var At = function(t) {
    function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return i(this, n),
        u(t = e(this, n, [r, a]), t)
    }
    return o(n, g(Array)),
    r(n, [{
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
            return e ? xt(this, t, e) : xt(this, this, t),
            this
        }
    }, {
        key: "sub",
        value: function(t, e) {
            return e ? bt(this, t, e) : bt(this, this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t) {
            var e, i, n;
            return t.length ? (i = this,
            n = t,
            (e = this)[0] = i[0] * n[0],
            e[1] = i[1] * n[1]) : kt(this, this, t),
            this
        }
    }, {
        key: "divide",
        value: function(t) {
            var e, i, n;
            return t.length ? (i = this,
            n = t,
            (e = this)[0] = i[0] / n[0],
            e[1] = i[1] / n[1]) : kt(this, this, 1 / t),
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
            return Mt(this)
        }
    }, {
        key: "distance",
        value: function(t) {
            return t ? (e = this,
            n = (i = t)[0] - e[0],
            r = i[1] - e[1],
            Math.sqrt(n * n + r * r)) : Mt(this);
            var e, i, n, r
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
            n = (i = t)[0] - e[0],
            r = i[1] - e[1],
            n * n + r * r) : function(t) {
                var e = t[0]
                  , i = t[1];
                return e * e + i * i
            }(this);
            var e, i, n, r
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
            return e ? wt(t, e) : wt(this, t)
        }
    }, {
        key: "scale",
        value: function(t) {
            return kt(this, this, t),
            this
        }
    }, {
        key: "normalize",
        value: function() {
            var t, e, i, n, r;
            return t = this,
            i = (e = this)[0],
            n = e[1],
            (r = i * i + n * n) > 0 && (r = 1 / Math.sqrt(r)),
            t[0] = e[0] * r,
            t[1] = e[1] * r,
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
            var e, i, n, r, a;
            return e = this,
            n = t,
            r = (i = this)[0],
            a = i[1],
            e[0] = n[0] * r + n[3] * a + n[6],
            e[1] = n[1] * r + n[4] * a + n[7],
            this
        }
    }, {
        key: "applyMatrix4",
        value: function(t) {
            var e, i, n, r, a;
            return e = this,
            n = t,
            r = (i = this)[0],
            a = i[1],
            e[0] = n[0] * r + n[4] * a + n[12],
            e[1] = n[1] * r + n[5] * a + n[13],
            this
        }
    }, {
        key: "lerp",
        value: function(t, e) {
            return function(t, e, i, n) {
                var r = e[0]
                  , a = e[1];
                t[0] = r + n * (i[0] - r),
                t[1] = a + n * (i[1] - a)
            }(this, this, t, e),
            this
        }
    }, {
        key: "clone",
        value: function() {
            return new n(this[0],this[1])
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
  , Et = function(t) {
    function n(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , a = r.width
          , s = void 0 === a ? 1 : a
          , o = r.height
          , h = void 0 === o ? 1 : o
          , u = r.widthSegments
          , l = void 0 === u ? 1 : u
          , c = r.heightSegments
          , f = void 0 === c ? 1 : c
          , d = r.attributes
          , v = void 0 === d ? {} : d;
        i(this, n);
        var g = l
          , p = f
          , y = (g + 1) * (p + 1)
          , m = g * p * 6
          , _ = new Float32Array(3 * y)
          , x = new Float32Array(3 * y)
          , b = new Float32Array(2 * y)
          , k = m > 65536 ? new Uint32Array(m) : new Uint16Array(m);
        return n.buildPlane(_, x, b, k, s, h, 0, g, p),
        Object.assign(v, {
            position: {
                size: 3,
                data: _
            },
            normal: {
                size: 3,
                data: x
            },
            uv: {
                size: 2,
                data: b
            },
            index: {
                data: k
            }
        }),
        e(this, n, [t, v])
    }
    return o(n, T),
    r(n, null, [{
        key: "buildPlane",
        value: function(t, e, i, n, r, a, s, o, h) {
            for (var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, l = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, c = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 2, f = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1, d = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : -1, v = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0, g = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 0, p = v, y = r / o, m = a / h, _ = 0; _ <= h; _++)
                for (var x = _ * m - a / 2, b = 0; b <= o; b++,
                v++) {
                    var k = b * y - r / 2;
                    if (t[3 * v + u] = k * f,
                    t[3 * v + l] = x * d,
                    t[3 * v + c] = s / 2,
                    e[3 * v + u] = 0,
                    e[3 * v + l] = 0,
                    e[3 * v + c] = s >= 0 ? 1 : -1,
                    i[2 * v] = b / o,
                    i[2 * v + 1] = 1 - _ / h,
                    _ !== h && b !== o) {
                        var M = p + b + _ * (o + 1)
                          , w = p + b + (_ + 1) * (o + 1)
                          , A = p + b + (_ + 1) * (o + 1) + 1
                          , E = p + b + _ * (o + 1) + 1;
                        n[6 * g] = M,
                        n[6 * g + 1] = w,
                        n[6 * g + 2] = E,
                        n[6 * g + 3] = w,
                        n[6 * g + 4] = A,
                        n[6 * g + 5] = E,
                        g++
                    }
                }
        }
    }])
}();
!function() {
    !function(t, e, i) {
        var n, r = 256, a = "random", s = i.pow(r, 6), o = i.pow(2, 52), h = 2 * o, u = r - 1;
        function l(u, l, d) {
            var y = []
              , m = g(v((l = 1 == l ? {
                entropy: !0
            } : l || {}).entropy ? [u, p(e)] : null == u ? function() {
                try {
                    var i;
                    return n && (i = n.randomBytes) ? i = i(r) : (i = new Uint8Array(r),
                    (t.crypto || t.msCrypto).getRandomValues(i)),
                    p(i)
                } catch (i) {
                    var a = t.navigator
                      , s = a && a.plugins;
                    return [+new Date, t, s, t.screen, p(e)]
                }
            }() : u, 3), y)
              , _ = new c(y)
              , x = function() {
                for (var t = _.g(6), e = s, i = 0; t < o; )
                    t = (t + i) * r,
                    e *= r,
                    i = _.g(1);
                for (; t >= h; )
                    t /= 2,
                    e /= 2,
                    i >>>= 1;
                return (t + i) / e
            };
            return x.int32 = function() {
                return 0 | _.g(4)
            }
            ,
            x.quick = function() {
                return _.g(4) / 4294967296
            }
            ,
            x.double = x,
            g(p(_.S), e),
            (l.pass || d || function(t, e, n, r) {
                return r && (r.S && f(r, _),
                t.state = function() {
                    return f(_, {})
                }
                ),
                n ? (i[a] = t,
                e) : t
            }
            )(x, m, "global"in l ? l.global : this == i, l.state)
        }
        function c(t) {
            var e, i = t.length, n = this, a = 0, s = n.i = n.j = 0, o = n.S = [];
            for (i || (t = [i++]); a < r; )
                o[a] = a++;
            for (a = 0; a < r; a++)
                o[a] = o[s = u & s + t[a % i] + (e = o[a])],
                o[s] = e;
            (n.g = function(t) {
                for (var e, i = 0, a = n.i, s = n.j, o = n.S; t--; )
                    e = o[a = u & a + 1],
                    i = i * r + o[u & (o[a] = o[s = u & s + e]) + (o[s] = e)];
                return n.i = a,
                n.j = s,
                i
            }
            )(r)
        }
        function f(t, e) {
            return e.i = t.i,
            e.j = t.j,
            e.S = t.S.slice(),
            e
        }
        function v(t, e) {
            var i, n = [], r = d(t);
            if (e && "object" == r)
                for (i in t)
                    try {
                        n.push(v(t[i], e - 1))
                    } catch (t) {}
            return n.length ? n : "string" == r ? t : t + "\0"
        }
        function g(t, e) {
            for (var i, n = t + "", r = 0; r < n.length; )
                e[u & r] = u & (i ^= 19 * e[u & r]) + n.charCodeAt(r++);
            return p(e)
        }
        function p(t) {
            return String.fromCharCode.apply(0, t)
        }
        if (g(i.random(), e),
        "object" == ("undefined" == typeof module ? "undefined" : d(module)) && module.exports) {
            module.exports = l;
            try {
                n = require("crypto")
            } catch (t) {}
        } else
            "function" == typeof define && define.amd ? define((function() {
                return l
            }
            )) : i["seed" + a] = l
    }("undefined" != typeof self ? self : this, [], Math)
}();
var St = function() {
    return r((function t() {
        var e, n, r, a = this, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
        i(this, t),
        e = this,
        r = function() {
            requestAnimationFrame(a._update),
            a.loop && (a.frame++,
            a._animate()),
            a.gl.clearColor(0, 0, 0, 1),
            a.renderer.render({
                scene: a.scene,
                camera: a.camera
            }),
            a.isRenderTarget && (a.gl.clearColor(0, 0, 0, 1),
            a.renderer.render({
                scene: a.rttPlane,
                camera: a.rttCamera,
                target: a.rtt
            }))
        }
        ,
        (n = f(n = "_update"))in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = r,
        this.params = s,
        this.options = {},
        this.loop = s.loop || !1,
        this.colors_num = o,
        this.colors_init = s.colors || [],
        this.palette = [],
        this.colors(this.colors_init),
        this.seed = s.seed || 1e3,
        this.rng = new Math.seedrandom(this.seed),
        this.frame = 0,
        this.parentDom = s.dom ? s.dom : document.body,
        "static" === window.getComputedStyle(this.parentDom).position && (this.parentDom.style.position = "relative");
        var h = this._getParentRect(this.parentDom);
        this.canvasW = h.w,
        this.canvasH = h.h,
        this.renderer = new N,
        this.renderer.setSize(this.canvasW, this.canvasH),
        this.gl = this.renderer.gl,
        this.gl.canvas.id = "colorbgcanvas",
        this.gl.canvas.style.position = "absolute",
        this.gl.canvas.style.top = 0,
        this.gl.canvas.style.left = 0,
        this.gl.canvas.style.zIndex = 0,
        this.parentDom.appendChild(this.gl.canvas),
        this.camera = new ut(this.gl,{
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
                for (var i = c(t), n = i.length; n < 6; n++) {
                    var r = n % i.length;
                    t.push(i[r])
                }
                this.palette = t
            } else
                for (var a = 0; a < this.colors_num; a++)
                    this.palette.push(t[a]);
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
  , Ct = function(t) {
    function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i(this, n),
        (t = e(this, n, [r, 6])).options = t.params.options || {},
        t.start(),
        t
    }
    return o(n, St),
    r(n, [{
        key: "_size",
        value: function() {
            this.size = this.canvasW > this.canvasH ? this.canvasW : this.canvasH
        }
    }, {
        key: "_resetSeed",
        value: function() {
            this._planeShader && (this._planeShader.uniforms.u_scale.value = 10 * this.rng() + 5)
        }
    }, {
        key: "_makeMaterial",
        value: function() {
            this._planeShader = new L(this.gl,{
                vertex: "\n                attribute vec3 position;\n                attribute vec2 uv;\n\n                uniform mat4 modelViewMatrix;\n                uniform mat4 projectionMatrix;\n                varying vec2 vUv;\n\n                void main() {\n                    vUv = uv;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                }\n            ",
                fragment: "\n                #ifdef GL_ES\n                precision mediump float;\n                #endif\n\n                uniform vec2 u_resolution;\n                uniform float u_time;\n                uniform float u_expand;\n                uniform float u_scale;\n\n                varying vec2 vUv;\n\n                float f(in vec2 p)\n                {\n                    //return sin(p.x+sin(p.y+u_time*0.1)) * sin(p.y*p.x*0.1+u_time*0.2);\n                    return sin( p.x + sin( p.y + u_time ) ) * sin( p.y * p.x * 0.1 + u_time );\n                }\n\n\n                //---------------Field to visualize defined here-----------------\n                vec2 field(in vec2 p)\n                {\n                    vec2 ep = vec2(.05,0.);\n                    vec2 rz= vec2(0);\n                    for( int i=0; i<7; i++ )\n                    {\n                    float t0 = f(p);\n                    float t1 = f(p + ep.xy);\n                    float t2 = f(p + ep.yx);\n                    vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;\n                    vec2 t = vec2(-g.y,g.x);\n                        \n                    p += 0.9 * t + g * 0.3;\n                    rz= t;\n                    }\n                    \n                    return rz;\n                }\n\n                uniform vec3 u_color_0;\n                uniform vec3 u_color_1;\n                uniform vec3 u_color_2;\n                uniform vec3 u_color_3;\n                uniform vec3 u_color_4;\n                uniform vec3 u_color_5;\n\n                const float x1 = 0.0;\n                const float x2 = 0.167;\n                const float x3 = 0.334;\n                const float x4 = 0.500;\n                const float x5 = 0.667;\n                const float x6 = 0.833;\n                const float x7 = 1.0;\n\n\n                vec3 lut( float x ) {\n\n                    if(x<0.0 || x>1.0)\n                        return u_color_0;\n\n                    vec3 color = vec3(1.0);\n                    \n                    float P1 = abs(x - x1);\n                    float P2 = abs(x - x2);\n                    float P3 = abs(x - x3);\n                    float P4 = abs(x - x4);\n                    float P5 = abs(x - x5);\n                    float P6 = abs(x - x6);\n                    float P7 = abs(x - x7);\n                    \n                    float R1 = smoothstep( 1., -0.0, P1 * u_expand) / 1.;\n                    float R2 = smoothstep( 1., -0.0, P2 * u_expand) / 1.;\n                    float R3 = smoothstep( 1., -0.0, P3 * u_expand) / 1.;\n                    float R4 = smoothstep( 1., -0.0, P4 * u_expand) / 1.;\n                    float R5 = smoothstep( 1., -0.0, P5 * u_expand) / 1.;\n                    float R6 = smoothstep( 1., -0.0, P6 * u_expand) / 1.;\n                    float R7 = smoothstep( 1., -0.0, P7 * u_expand) / 1.;\n                    \n                    color = u_color_0 * R1 + \n                            u_color_1 * R2 +\n                            u_color_2 * R3 +\n                            u_color_3 * R4 +\n                            u_color_4 * R5 + \n                            u_color_5 * R6 +\n                            u_color_0 * R7;\n                    \n                    return color;\n                }\n\n                void main()\n                {\n                    vec2 p = gl_FragCoord.xy / u_resolution.xy-0.5;\n                    p.x *= u_resolution.x/u_resolution.x;\n                    p *= u_scale;\n                \n                    vec2 fld = field(p);\n                    \n                    float factor = (1. - fld.y) * (0.5 - fld.x);\n                    vec3 col = lut( factor );\n                    \n                    gl_FragColor = vec4(col,1.0);\n                }\n            ",
                uniforms: {
                    u_time: {
                        value: 0
                    },
                    u_resolution: {
                        value: new At(this.canvasW,this.canvasH)
                    },
                    u_color_0: {
                        value: new _t(this.palette[0])
                    },
                    u_color_1: {
                        value: new _t(this.palette[1])
                    },
                    u_color_2: {
                        value: new _t(this.palette[2])
                    },
                    u_color_3: {
                        value: new _t(this.palette[3])
                    },
                    u_color_4: {
                        value: new _t(this.palette[4])
                    },
                    u_color_5: {
                        value: new _t(this.palette[5])
                    },
                    u_expand: {
                        value: 6
                    },
                    u_scale: {
                        value: 10 * this.rng() + 5
                    }
                }
            })
        }
    }, {
        key: "_make",
        value: function() {
            var t = new Et(this.gl,{
                width: this.size,
                height: this.size
            });
            new dt(this.gl,{
                geometry: t,
                program: this._planeShader
            }).setParent(this.scene)
        }
    }, {
        key: "_resetColors",
        value: function() {
            this._planeShader.uniforms.u_color_0.value = new _t(this.palette[0]),
            this._planeShader.uniforms.u_color_1.value = new _t(this.palette[1]),
            this._planeShader.uniforms.u_color_2.value = new _t(this.palette[2]),
            this._planeShader.uniforms.u_color_3.value = new _t(this.palette[3]),
            this._planeShader.uniforms.u_color_4.value = new _t(this.palette[4]),
            this._planeShader.uniforms.u_color_5.value = new _t(this.palette[5])
        }
    }, {
        key: "_animate",
        value: function() {
            this._planeShader.uniforms.u_time.value = this.frame / 100
        }
    }])
}();
export {Ct as WavyWavesBg};
