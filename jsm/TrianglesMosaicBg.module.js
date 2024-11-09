function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = Array(e); i < e; i++)
        n[i] = t[i];
    return n
}
function e(t, e, i) {
    return e = s(e),
    h(t, o() ? Reflect.construct(e, i || [], s(t).constructor) : e.apply(t, i))
}
function i(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function n(t, e, i) {
    return e && function(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, c(n.key), n)
        }
    }(t.prototype, e),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    t
}
function r() {
    return r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, i) {
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
    r.apply(null, arguments)
}
function s(t) {
    return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }
    ,
    s(t)
}
function a(t, e) {
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
    e && u(t, e)
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
function h(t, e) {
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
function u(t, e) {
    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e,
        t
    }
    ,
    u(t, e)
}
function l(e) {
    return function(e) {
        if (Array.isArray(e))
            return t(e)
    }(e) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
            return Array.from(t)
    }(e) || d(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function c(t) {
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
function f(t) {
    return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    f(t)
}
function d(e, i) {
    if (e) {
        if ("string" == typeof e)
            return t(e, i);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, i) : void 0
    }
}
function v(t) {
    var e = "function" == typeof Map ? new Map : void 0;
    return v = function(t) {
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
                var n = [null];
                n.push.apply(n, e);
                var r = new (t.bind.apply(t, n));
                return i && u(r, i.prototype),
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
        u(i, t)
    }
    ,
    v(t)
}
function g(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2];
    return Math.sqrt(e * e + i * i + n * n)
}
function p(t, e) {
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
function y(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t[2] = e[2] - i[2],
    t
}
function b(t, e, i) {
    return t[0] = e[0] * i,
    t[1] = e[1] * i,
    t[2] = e[2] * i,
    t
}
function x(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2];
    return e * e + i * i + n * n
}
function _(t, e) {
    var i = e[0]
      , n = e[1]
      , r = e[2]
      , s = i * i + n * n + r * r;
    return s > 0 && (s = 1 / Math.sqrt(s)),
    t[0] = e[0] * s,
    t[1] = e[1] * s,
    t[2] = e[2] * s,
    t
}
function M(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
}
function k(t, e, i) {
    var n = e[0]
      , r = e[1]
      , s = e[2]
      , a = i[0]
      , o = i[1]
      , h = i[2];
    return t[0] = r * h - s * o,
    t[1] = s * a - n * h,
    t[2] = n * o - r * a,
    t
}
var w, A, E = (w = [0, 0, 0],
A = [0, 0, 0],
function(t, e) {
    p(w, t),
    p(A, e),
    _(w, w),
    _(A, A);
    var i = M(w, A);
    return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
}
);
var S = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        return i(this, r),
        h(t = e(this, r, [n, s, a]), t)
    }
    return a(r, v(Array)),
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
            return p(this, t),
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
            return e ? y(this, t, e) : y(this, this, t),
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
            e[2] = i[2] * n[2]) : b(this, this, t),
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
            e[2] = i[2] / n[2]) : b(this, this, 1 / t),
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
            return g(this)
        }
    }, {
        key: "distance",
        value: function(t) {
            return t ? (e = this,
            n = (i = t)[0] - e[0],
            r = i[1] - e[1],
            s = i[2] - e[2],
            Math.sqrt(n * n + r * r + s * s)) : g(this);
            var e, i, n, r, s
        }
    }, {
        key: "squaredLen",
        value: function() {
            return x(this)
        }
    }, {
        key: "squaredDistance",
        value: function(t) {
            return t ? (e = this,
            n = (i = t)[0] - e[0],
            r = i[1] - e[1],
            s = i[2] - e[2],
            n * n + r * r + s * s) : x(this);
            var e, i, n, r, s
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
            return e ? k(this, t, e) : k(this, this, t),
            this
        }
    }, {
        key: "scale",
        value: function(t) {
            return b(this, this, t),
            this
        }
    }, {
        key: "normalize",
        value: function() {
            return _(this, this),
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
            var e, i, n, r, s, a;
            return e = this,
            n = t,
            r = (i = this)[0],
            s = i[1],
            a = i[2],
            e[0] = r * n[0] + s * n[3] + a * n[6],
            e[1] = r * n[1] + s * n[4] + a * n[7],
            e[2] = r * n[2] + s * n[5] + a * n[8],
            this
        }
    }, {
        key: "applyMatrix4",
        value: function(t) {
            var e, i, n, r, s, a, o;
            return e = this,
            n = t,
            r = (i = this)[0],
            s = i[1],
            a = i[2],
            o = (o = n[3] * r + n[7] * s + n[11] * a + n[15]) || 1,
            e[0] = (n[0] * r + n[4] * s + n[8] * a + n[12]) / o,
            e[1] = (n[1] * r + n[5] * s + n[9] * a + n[13]) / o,
            e[2] = (n[2] * r + n[6] * s + n[10] * a + n[14]) / o,
            this
        }
    }, {
        key: "scaleRotateMatrix4",
        value: function(t) {
            var e, i, n, r, s, a, o;
            return e = this,
            n = t,
            r = (i = this)[0],
            s = i[1],
            a = i[2],
            o = (o = n[3] * r + n[7] * s + n[11] * a + n[15]) || 1,
            e[0] = (n[0] * r + n[4] * s + n[8] * a) / o,
            e[1] = (n[1] * r + n[5] * s + n[9] * a) / o,
            e[2] = (n[2] * r + n[6] * s + n[10] * a) / o,
            this
        }
    }, {
        key: "applyQuaternion",
        value: function(t) {
            return function(t, e, i) {
                var n = e[0]
                  , r = e[1]
                  , s = e[2]
                  , a = i[0]
                  , o = i[1]
                  , h = i[2]
                  , u = o * s - h * r
                  , l = h * n - a * s
                  , c = a * r - o * n
                  , f = o * c - h * l
                  , d = h * u - a * c
                  , v = a * l - o * u
                  , g = 2 * i[3];
                u *= g,
                l *= g,
                c *= g,
                f *= 2,
                d *= 2,
                v *= 2,
                t[0] = n + u + f,
                t[1] = r + l + d,
                t[2] = s + c + v
            }(this, this, t),
            this
        }
    }, {
        key: "angle",
        value: function(t) {
            return E(this, t)
        }
    }, {
        key: "lerp",
        value: function(t, e) {
            return function(t, e, i, n) {
                var r = e[0]
                  , s = e[1]
                  , a = e[2];
                t[0] = r + n * (i[0] - r),
                t[1] = s + n * (i[1] - s),
                t[2] = a + n * (i[2] - a)
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
              , n = this[2];
            return this[0] = t[0] * e + t[4] * i + t[8] * n,
            this[1] = t[1] * e + t[5] * i + t[9] * n,
            this[2] = t[2] * e + t[6] * i + t[10] * n,
            this.normalize()
        }
    }])
}()
  , C = new S
  , F = 1
  , R = 1
  , O = !1
  , T = function() {
    return n((function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (var r in i(this, t),
        e.canvas,
        this.gl = e,
        this.attributes = n,
        this.id = F++,
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
            if (e.id = R++,
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
            e.setXYZ = function(t, n, r, s) {
                t *= this.size,
                this.data[t + 0] = n,
                this.data[t + 1] = r,
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
                var n = i.name
                  , r = i.type;
                if (e.attributes[n]) {
                    var s = e.attributes[n];
                    e.gl.bindBuffer(s.target, s.buffer),
                    e.glState.boundBuffer = s.buffer;
                    var a = 1;
                    35674 === r && (a = 2),
                    35675 === r && (a = 3),
                    35676 === r && (a = 4);
                    for (var o = s.size / a, h = 1 === a ? 0 : a * a * 4, u = 1 === a ? 0 : 4 * a, l = 0; l < a; l++)
                        e.gl.vertexAttribPointer(t + l, o, s.type, s.normalized, s.stride + h, s.offset + l * u),
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
            var e, i = this, n = t.program, r = t.mode, s = void 0 === r ? this.gl.TRIANGLES : r;
            this.gl.renderer.currentGeometry !== "".concat(this.id, "_").concat(n.attributeOrder) && (this.VAOs[n.attributeOrder] || this.createVAO(n),
            this.gl.renderer.bindVertexArray(this.VAOs[n.attributeOrder]),
            this.gl.renderer.currentGeometry = "".concat(this.id, "_").concat(n.attributeOrder)),
            n.attributeLocations.forEach((function(t, e) {
                var n = e.name
                  , r = i.attributes[n];
                r.needsUpdate && i.updateAttribute(r)
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
                min: new S,
                max: new S,
                center: new S,
                scale: new S,
                radius: 1 / 0
            });
            var n = this.bounds.min
              , r = this.bounds.max
              , s = this.bounds.center
              , a = this.bounds.scale;
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
            a.sub(r, n),
            s.add(n, r).divide(2)
        }
    }, {
        key: "computeBoundingSphere",
        value: function(t) {
            t || (t = this.getPosition());
            var e = t.data
              , i = t.size;
            this.bounds || this.computeBoundingBox(t);
            for (var n = 0, r = 0, s = e.length; r < s; r += i)
                C.fromArray(e, r),
                n = Math.max(n, this.bounds.center.squaredDistance(C));
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
  , P = 1
  , B = {}
  , z = function() {
    return n((function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , r = n.vertex
          , s = n.fragment
          , a = n.uniforms
          , o = void 0 === a ? {} : a
          , h = n.transparent
          , u = void 0 !== h && h
          , l = n.cullFace
          , c = void 0 === l ? e.BACK : l
          , f = n.frontFace
          , d = void 0 === f ? e.CCW : f
          , v = n.depthTest
          , g = void 0 === v || v
          , p = n.depthWrite
          , m = void 0 === p || p
          , y = n.depthFunc
          , b = void 0 === y ? e.LEQUAL : y;
        i(this, t),
        e.canvas,
        this.gl = e,
        this.uniforms = o,
        this.id = P++,
        this.transparent = u,
        this.cullFace = c,
        this.frontFace = d,
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
            vertex: r,
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
                for (var n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS), r = 0; r < n; r++) {
                    var s = this.gl.getActiveUniform(this.program, r);
                    this.uniformLocations.set(s, this.gl.getUniformLocation(this.program, s.name));
                    var a = s.name.match(/(\w+)/g);
                    s.uniformName = a[0],
                    s.nameComponents = a.slice(1)
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
                var r, s = t.uniforms[i.uniformName], a = function(t, e) {
                    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!i) {
                        if (Array.isArray(t) || (i = d(t)) || e) {
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
                    var s, a = !0, o = !1;
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
                            o = !0,
                            s = t
                        },
                        f: function() {
                            try {
                                a || null == i.return || i.return()
                            } finally {
                                if (o)
                                    throw s
                            }
                        }
                    }
                }(i.nameComponents);
                try {
                    for (a.s(); !(r = a.n()).done; ) {
                        var o = r.value;
                        if (!s)
                            break;
                        if (!(o in s)) {
                            if (Array.isArray(s.value))
                                break;
                            s = void 0;
                            break
                        }
                        s = s[o]
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                if (!s)
                    return D("Active uniform ".concat(i.name, " has not been supplied"));
                if (s && void 0 === s.value)
                    return D("".concat(i.name, " uniform is missing a value parameter"));
                if (s.value.texture)
                    return n += 1,
                    s.value.update(n),
                    I(t.gl, i.type, e, n);
                if (s.value.length && s.value[0].texture) {
                    var h = [];
                    return s.value.forEach((function(t) {
                        n += 1,
                        t.update(n),
                        h.push(n)
                    }
                    )),
                    I(t.gl, i.type, e, h)
                }
                I(t.gl, i.type, e, s.value)
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
function I(t, e, i, n) {
    n = n.length ? function(t) {
        var e = t.length
          , i = t[0].length;
        if (void 0 === i)
            return t;
        var n = e * i
          , r = B[n];
        r || (B[n] = r = new Float32Array(n));
        for (var s = 0; s < e; s++)
            r.set(t[s], s * i);
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
var L = 0;
function D(t) {
    L > 100 || L++
}
var j = new S
  , U = 1
  , N = function() {
    return n((function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , n = e.canvas
          , r = void 0 === n ? document.createElement("canvas") : n
          , s = e.width
          , a = void 0 === s ? 300 : s
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
          , m = e.antialias
          , y = void 0 === m || m
          , b = e.premultipliedAlpha
          , x = void 0 !== b && b
          , _ = e.preserveDrawingBuffer
          , M = void 0 === _ || _
          , k = e.powerPreference
          , w = void 0 === k ? "default" : k
          , A = e.autoClear
          , E = void 0 === A || A
          , S = e.webgl
          , C = void 0 === S ? 2 : S;
        i(this, t);
        var F = {
            alpha: f,
            depth: v,
            stencil: p,
            antialias: y,
            premultipliedAlpha: x,
            preserveDrawingBuffer: M,
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
        this.setSize(a, h),
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
              , s = [];
            if (i && n && i.updateFrustum(),
            e.traverse((function(t) {
                if (!t.visible)
                    return !0;
                t.draw && (n && t.frustumCulled && i && !i.frustumIntersectsMesh(t) || s.push(t))
            }
            )),
            r) {
                var a = []
                  , o = []
                  , h = [];
                s.forEach((function(t) {
                    t.program.transparent ? t.program.depthTest ? o.push(t) : h.push(t) : a.push(t),
                    t.zDepth = 0,
                    0 === t.renderOrder && t.program.depthTest && i && (t.worldMatrix.getTranslation(j),
                    j.applyMatrix4(i.projectionViewMatrix),
                    t.zDepth = j.z)
                }
                )),
                a.sort(this.sortOpaque),
                o.sort(this.sortTransparent),
                h.sort(this.sortUI),
                s = a.concat(o, h)
            }
            return s
        }
    }, {
        key: "render",
        value: function(t) {
            var e = t.scene
              , i = t.camera
              , n = t.target
              , r = void 0 === n ? null : n
              , s = t.update
              , a = void 0 === s || s
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
            a && e.updateMatrixWorld(),
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
function q(t, e, i) {
    var n = e[0]
      , r = e[1]
      , s = e[2]
      , a = e[3]
      , o = i[0]
      , h = i[1]
      , u = i[2]
      , l = i[3];
    return t[0] = n * l + a * o + r * u - s * h,
    t[1] = r * l + a * h + s * o - n * u,
    t[2] = s * l + a * u + n * h - r * o,
    t[3] = a * l - n * o - r * h - s * u,
    t
}
var V = function(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t
}
  , W = function(t, e, i, n, r) {
    return t[0] = e,
    t[1] = i,
    t[2] = n,
    t[3] = r,
    t
}
  , G = function(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
}
  , X = function(t, e) {
    var i = e[0]
      , n = e[1]
      , r = e[2]
      , s = e[3]
      , a = i * i + n * n + r * r + s * s;
    return a > 0 && (a = 1 / Math.sqrt(a)),
    t[0] = i * a,
    t[1] = n * a,
    t[2] = r * a,
    t[3] = s * a,
    t
}
  , H = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        i(this, r),
        (t = e(this, r, [n, s, a, o])).onChange = function() {}
        ,
        t._target = t;
        var u = ["0", "1", "2", "3"];
        return h(t, new Proxy(t,{
            set: function(t, e) {
                var i = Reflect.set.apply(Reflect, arguments);
                return i && u.includes(e) && t.onChange(),
                i
            }
        }))
    }
    return a(r, v(Array)),
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
        value: function(t, e, i, n) {
            return t.length ? this.copy(t) : (W(this._target, t, e, i, n),
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
                  , s = e[2]
                  , a = e[3]
                  , o = Math.sin(i)
                  , h = Math.cos(i);
                t[0] = n * h + a * o,
                t[1] = r * h + s * o,
                t[2] = s * h - r * o,
                t[3] = a * h - n * o
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
                  , s = e[2]
                  , a = e[3]
                  , o = Math.sin(i)
                  , h = Math.cos(i);
                t[0] = n * h - s * o,
                t[1] = r * h + a * o,
                t[2] = s * h + n * o,
                t[3] = a * h - r * o
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
                  , s = e[2]
                  , a = e[3]
                  , o = Math.sin(i)
                  , h = Math.cos(i);
                t[0] = n * h + r * o,
                t[1] = r * h - n * o,
                t[2] = s * h + a * o,
                t[3] = a * h - s * o
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
                  , s = e[3]
                  , a = i * i + n * n + r * r + s * s
                  , o = a ? 1 / a : 0;
                t[0] = -i * o,
                t[1] = -n * o,
                t[2] = -r * o,
                t[3] = s * o
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
            return X(this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            return e ? q(this._target, t, e) : q(this._target, this._target, t),
            this.onChange(),
            this
        }
    }, {
        key: "dot",
        value: function(t) {
            return G(this._target, t)
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
                    var s = (r + 1) % 3
                      , a = (r + 2) % 3;
                    i = Math.sqrt(e[3 * r + r] - e[3 * s + s] - e[3 * a + a] + 1),
                    t[r] = .5 * i,
                    i = .5 / i,
                    t[3] = (e[3 * s + a] - e[3 * a + s]) * i,
                    t[s] = (e[3 * s + r] + e[3 * r + s]) * i,
                    t[a] = (e[3 * a + r] + e[3 * r + a]) * i
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
                  , s = Math.sin(.5 * e[1])
                  , a = Math.cos(.5 * e[1])
                  , o = Math.sin(.5 * e[2])
                  , h = Math.cos(.5 * e[2]);
                "XYZ" === i ? (t[0] = n * a * h + r * s * o,
                t[1] = r * s * h - n * a * o,
                t[2] = r * a * o + n * s * h,
                t[3] = r * a * h - n * s * o) : "YXZ" === i ? (t[0] = n * a * h + r * s * o,
                t[1] = r * s * h - n * a * o,
                t[2] = r * a * o - n * s * h,
                t[3] = r * a * h + n * s * o) : "ZXY" === i ? (t[0] = n * a * h - r * s * o,
                t[1] = r * s * h + n * a * o,
                t[2] = r * a * o + n * s * h,
                t[3] = r * a * h - n * s * o) : "ZYX" === i ? (t[0] = n * a * h - r * s * o,
                t[1] = r * s * h + n * a * o,
                t[2] = r * a * o - n * s * h,
                t[3] = r * a * h + n * s * o) : "YZX" === i ? (t[0] = n * a * h + r * s * o,
                t[1] = r * s * h + n * a * o,
                t[2] = r * a * o - n * s * h,
                t[3] = r * a * h - n * s * o) : "XZY" === i && (t[0] = n * a * h - r * s * o,
                t[1] = r * s * h - n * a * o,
                t[2] = r * a * o + n * s * h,
                t[3] = r * a * h + n * s * o)
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
                var r, s, a, o, h, u = e[0], l = e[1], c = e[2], f = e[3], d = i[0], v = i[1], g = i[2], p = i[3];
                (s = u * d + l * v + c * g + f * p) < 0 && (s = -s,
                d = -d,
                v = -v,
                g = -g,
                p = -p),
                1 - s > 1e-6 ? (r = Math.acos(s),
                a = Math.sin(r),
                o = Math.sin((1 - n) * r) / a,
                h = Math.sin(n * r) / a) : (o = 1 - n,
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
function Y(t) {
    var e = t[0]
      , i = t[1]
      , n = t[2]
      , r = t[3]
      , s = t[4]
      , a = t[5]
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
    return (e * a - i * s) * (c * p - f * g) - (e * o - n * s) * (l * p - f * v) + (e * h - r * s) * (l * g - c * v) + (i * o - n * a) * (u * p - f * d) - (i * h - r * a) * (u * g - c * d) + (n * h - r * o) * (u * v - l * d)
}
function Z(t, e, i) {
    var n = e[0]
      , r = e[1]
      , s = e[2]
      , a = e[3]
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
      , m = e[14]
      , y = e[15]
      , b = i[0]
      , x = i[1]
      , _ = i[2]
      , M = i[3];
    return t[0] = b * n + x * o + _ * c + M * g,
    t[1] = b * r + x * h + _ * f + M * p,
    t[2] = b * s + x * u + _ * d + M * m,
    t[3] = b * a + x * l + _ * v + M * y,
    b = i[4],
    x = i[5],
    _ = i[6],
    M = i[7],
    t[4] = b * n + x * o + _ * c + M * g,
    t[5] = b * r + x * h + _ * f + M * p,
    t[6] = b * s + x * u + _ * d + M * m,
    t[7] = b * a + x * l + _ * v + M * y,
    b = i[8],
    x = i[9],
    _ = i[10],
    M = i[11],
    t[8] = b * n + x * o + _ * c + M * g,
    t[9] = b * r + x * h + _ * f + M * p,
    t[10] = b * s + x * u + _ * d + M * m,
    t[11] = b * a + x * l + _ * v + M * y,
    b = i[12],
    x = i[13],
    _ = i[14],
    M = i[15],
    t[12] = b * n + x * o + _ * c + M * g,
    t[13] = b * r + x * h + _ * f + M * p,
    t[14] = b * s + x * u + _ * d + M * m,
    t[15] = b * a + x * l + _ * v + M * y,
    t
}
function Q(t, e) {
    var i = e[0]
      , n = e[1]
      , r = e[2]
      , s = e[4]
      , a = e[5]
      , o = e[6]
      , h = e[8]
      , u = e[9]
      , l = e[10];
    return t[0] = Math.hypot(i, n, r),
    t[1] = Math.hypot(s, a, o),
    t[2] = Math.hypot(h, u, l),
    t
}
var K, $ = (K = [1, 1, 1],
function(t, e) {
    var i = K;
    Q(i, e);
    var n = 1 / i[0]
      , r = 1 / i[1]
      , s = 1 / i[2]
      , a = e[0] * n
      , o = e[1] * r
      , h = e[2] * s
      , u = e[4] * n
      , l = e[5] * r
      , c = e[6] * s
      , f = e[8] * n
      , d = e[9] * r
      , v = e[10] * s
      , g = a + l + v
      , p = 0;
    return g > 0 ? (p = 2 * Math.sqrt(g + 1),
    t[3] = .25 * p,
    t[0] = (c - d) / p,
    t[1] = (f - h) / p,
    t[2] = (o - u) / p) : a > l && a > v ? (p = 2 * Math.sqrt(1 + a - l - v),
    t[3] = (c - d) / p,
    t[0] = .25 * p,
    t[1] = (o + u) / p,
    t[2] = (f + h) / p) : l > v ? (p = 2 * Math.sqrt(1 + l - a - v),
    t[3] = (f - h) / p,
    t[0] = (o + u) / p,
    t[1] = .25 * p,
    t[2] = (c + d) / p) : (p = 2 * Math.sqrt(1 + v - a - l),
    t[3] = (o - u) / p,
    t[0] = (f + h) / p,
    t[1] = (c + d) / p,
    t[2] = .25 * p),
    t
}
);
function J(t, e, i) {
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
function tt(t, e, i) {
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
var et = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, f = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, v = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, g = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, p = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0, m = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0, y = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : 0, b = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0, x = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 1;
        return i(this, r),
        h(t = e(this, r, [n, s, a, o, u, l, c, f, d, v, g, p, m, y, b, x]), t)
    }
    return a(r, v(Array)),
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
        value: function(t, e, i, n, r, s, a, o, h, u, l, c, f, d, v, g) {
            return t.length ? this.copy(t) : (function(t, e, i, n, r, s, a, o, h, u, l, c, f, d, v, g, p) {
                t[0] = e,
                t[1] = i,
                t[2] = n,
                t[3] = r,
                t[4] = s,
                t[5] = a,
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
            }(this, t, e, i, n, r, s, a, o, h, u, l, c, f, d, v, g),
            this)
        }
    }, {
        key: "translate",
        value: function(t) {
            return function(t, e, i) {
                var n, r, s, a, o, h, u, l, c, f, d, v, g = i[0], p = i[1], m = i[2];
                e === t ? (t[12] = e[0] * g + e[4] * p + e[8] * m + e[12],
                t[13] = e[1] * g + e[5] * p + e[9] * m + e[13],
                t[14] = e[2] * g + e[6] * p + e[10] * m + e[14],
                t[15] = e[3] * g + e[7] * p + e[11] * m + e[15]) : (n = e[0],
                r = e[1],
                s = e[2],
                a = e[3],
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
                t[2] = s,
                t[3] = a,
                t[4] = o,
                t[5] = h,
                t[6] = u,
                t[7] = l,
                t[8] = c,
                t[9] = f,
                t[10] = d,
                t[11] = v,
                t[12] = n * g + o * p + c * m + e[12],
                t[13] = r * g + h * p + f * m + e[13],
                t[14] = s * g + u * p + d * m + e[14],
                t[15] = a * g + l * p + v * m + e[15])
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "rotate",
        value: function(t, e) {
            return function(t, e, i, n) {
                var r, s, a, o, h, u, l, c, f, d, v, g, p, m, y, b, x, _, M, k, w, A, E, S, C = n[0], F = n[1], R = n[2], O = Math.hypot(C, F, R);
                Math.abs(O) < 1e-6 || (C *= O = 1 / O,
                F *= O,
                R *= O,
                r = Math.sin(i),
                a = 1 - (s = Math.cos(i)),
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
                m = e[10],
                y = e[11],
                b = C * C * a + s,
                x = F * C * a + R * r,
                _ = R * C * a - F * r,
                M = C * F * a - R * r,
                k = F * F * a + s,
                w = R * F * a + C * r,
                A = C * R * a + F * r,
                E = F * R * a - C * r,
                S = R * R * a + s,
                t[0] = o * b + c * x + g * _,
                t[1] = h * b + f * x + p * _,
                t[2] = u * b + d * x + m * _,
                t[3] = l * b + v * x + y * _,
                t[4] = o * M + c * k + g * w,
                t[5] = h * M + f * k + p * w,
                t[6] = u * M + d * k + m * w,
                t[7] = l * M + v * k + y * w,
                t[8] = o * A + c * E + g * S,
                t[9] = h * A + f * E + p * S,
                t[10] = u * A + d * E + m * S,
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
                var n = i[0]
                  , r = i[1]
                  , s = i[2];
                t[0] = e[0] * n,
                t[1] = e[1] * n,
                t[2] = e[2] * n,
                t[3] = e[3] * n,
                t[4] = e[4] * r,
                t[5] = e[5] * r,
                t[6] = e[6] * r,
                t[7] = e[7] * r,
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
            return e ? J(this, t, e) : J(this, this, t),
            this
        }
    }, {
        key: "sub",
        value: function(t, e) {
            return e ? tt(this, t, e) : tt(this, this, t),
            this
        }
    }, {
        key: "multiply",
        value: function(t, e) {
            var i, n, r;
            return t.length ? e ? Z(this, t, e) : Z(this, this, t) : (n = this,
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
                var s = 1 / Math.tan(e / 2)
                  , a = 1 / (n - r);
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
                t[10] = (r + n) * a,
                t[11] = -1,
                t[12] = 0,
                t[13] = 0,
                t[14] = 2 * r * n * a,
                t[15] = 0
            }(this, t.fov, t.aspect, t.near, t.far),
            this
        }
    }, {
        key: "fromOrthogonal",
        value: function(t) {
            return function(t, e, i, n, r, s, a) {
                var o = 1 / (e - i)
                  , h = 1 / (n - r)
                  , u = 1 / (s - a);
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
                  , n = e[1]
                  , r = e[2]
                  , s = e[3]
                  , a = i + i
                  , o = n + n
                  , h = r + r
                  , u = i * a
                  , l = n * a
                  , c = n * o
                  , f = r * a
                  , d = r * o
                  , v = r * h
                  , g = s * a
                  , p = s * o
                  , m = s * h;
                t[0] = 1 - c - v,
                t[1] = l + m,
                t[2] = f - p,
                t[3] = 0,
                t[4] = l - m,
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
            var t, e, i, n, r, s, a, o, h, u, l, c, f, d, v, g, p, m, y, b, x, _, M, k, w, A, E, S, C, F, R;
            return t = this,
            i = (e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0],
            n = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
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
            m = e[15],
            (R = (y = i * o - n * a) * (F = f * m - d * p) - (b = i * h - r * a) * (C = c * m - d * g) + (x = i * u - s * a) * (S = c * p - f * g) + (_ = n * h - r * o) * (E = l * m - d * v) - (M = n * u - s * o) * (A = l * p - f * v) + (k = r * u - s * h) * (w = l * g - c * v)) && (R = 1 / R,
            t[0] = (o * F - h * C + u * S) * R,
            t[1] = (r * C - n * F - s * S) * R,
            t[2] = (g * k - p * M + m * _) * R,
            t[3] = (f * M - c * k - d * _) * R,
            t[4] = (h * E - a * F - u * A) * R,
            t[5] = (i * F - r * E + s * A) * R,
            t[6] = (p * x - v * k - m * b) * R,
            t[7] = (l * k - f * x + d * b) * R,
            t[8] = (a * C - o * E + u * w) * R,
            t[9] = (n * E - i * C - s * w) * R,
            t[10] = (v * M - g * x + m * y) * R,
            t[11] = (c * x - l * M - d * y) * R,
            t[12] = (o * A - a * S - h * w) * R,
            t[13] = (i * S - n * A + r * w) * R,
            t[14] = (g * b - v * _ - p * y) * R,
            t[15] = (l * _ - c * b + f * y) * R),
            this
        }
    }, {
        key: "compose",
        value: function(t, e, i) {
            var n, r, s, a, o, h, u, l, c, f, d, v, g, p, m, y, b, x, _, M, k, w, A;
            return r = e,
            s = i,
            a = this,
            o = (n = t)[0],
            h = n[1],
            u = n[2],
            l = n[3],
            v = o * (c = o + o),
            g = o * (f = h + h),
            p = o * (d = u + u),
            m = h * f,
            y = h * d,
            b = u * d,
            x = l * c,
            _ = l * f,
            M = l * d,
            k = s[0],
            w = s[1],
            A = s[2],
            a[0] = (1 - (m + b)) * k,
            a[1] = (g + M) * k,
            a[2] = (p - _) * k,
            a[3] = 0,
            a[4] = (g - M) * w,
            a[5] = (1 - (v + b)) * w,
            a[6] = (y + x) * w,
            a[7] = 0,
            a[8] = (p + _) * A,
            a[9] = (y - x) * A,
            a[10] = (1 - (v + m)) * A,
            a[11] = 0,
            a[12] = r[0],
            a[13] = r[1],
            a[14] = r[2],
            a[15] = 1,
            this
        }
    }, {
        key: "decompose",
        value: function(t, e, i) {
            return function(t, e, i, n) {
                var r = g([t[0], t[1], t[2]])
                  , s = g([t[4], t[5], t[6]])
                  , a = g([t[8], t[9], t[10]]);
                Y(t) < 0 && (r = -r),
                i[0] = t[12],
                i[1] = t[13],
                i[2] = t[14];
                var o = t.slice()
                  , h = 1 / r
                  , u = 1 / s
                  , l = 1 / a;
                o[0] *= h,
                o[1] *= h,
                o[2] *= h,
                o[4] *= u,
                o[5] *= u,
                o[6] *= u,
                o[8] *= l,
                o[9] *= l,
                o[10] *= l,
                $(e, o),
                n[0] = r,
                n[1] = s,
                n[2] = a
            }(this, t, e, i),
            this
        }
    }, {
        key: "getRotation",
        value: function(t) {
            return $(t, this),
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
            return Q(t, this),
            this
        }
    }, {
        key: "getMaxScaleOnAxis",
        value: function() {
            return e = (t = this)[0],
            i = t[1],
            n = t[2],
            r = t[4],
            s = t[5],
            a = t[6],
            o = t[8],
            h = t[9],
            u = t[10],
            l = e * e + i * i + n * n,
            c = r * r + s * s + a * a,
            f = o * o + h * h + u * u,
            Math.sqrt(Math.max(l, c, f));
            var t, e, i, n, r, s, a, o, h, u, l, c, f
        }
    }, {
        key: "lookAt",
        value: function(t, e, i) {
            return function(t, e, i, n) {
                var r = e[0]
                  , s = e[1]
                  , a = e[2]
                  , o = n[0]
                  , h = n[1]
                  , u = n[2]
                  , l = r - i[0]
                  , c = s - i[1]
                  , f = a - i[2]
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
                t[13] = s,
                t[14] = a,
                t[15] = 1
            }(this, t, e, i),
            this
        }
    }, {
        key: "determinant",
        value: function() {
            return Y(this)
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
var it = new et
  , nt = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "YXZ";
        i(this, r),
        (t = e(this, r, [n, s, a])).order = o,
        t.onChange = function() {}
        ,
        t._target = t;
        var u = ["0", "1", "2"];
        return h(t, new Proxy(t,{
            set: function(t, e) {
                var i = Reflect.set.apply(Reflect, arguments);
                return i && u.includes(e) && t.onChange(),
                i
            }
        }))
    }
    return a(r, v(Array)),
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
            return it.fromQuaternion(t),
            this._target.fromRotationMatrix(it, e),
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
  , rt = function() {
    return n((function t() {
        var e = this;
        i(this, t),
        this.parent = null,
        this.children = [],
        this.visible = !0,
        this.matrix = new et,
        this.worldMatrix = new et,
        this.matrixAutoUpdate = !0,
        this.worldMatrixNeedsUpdate = !1,
        this.position = new S,
        this.quaternion = new H,
        this.scale = new S(1),
        this.rotation = new nt,
        this.up = new S(0,1,0),
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
  , st = new et
  , at = new S
  , ot = new S
  , ht = function(t) {
    function o(t) {
        var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = r.near, a = void 0 === s ? .1 : s, h = r.far, u = void 0 === h ? 100 : h, l = r.fov, c = void 0 === l ? 45 : l, f = r.aspect, d = void 0 === f ? 1 : f, v = r.left, g = r.right, p = r.bottom, m = r.top, y = r.zoom, b = void 0 === y ? 1 : y;
        return i(this, o),
        n = e(this, o),
        Object.assign(n, {
            near: a,
            far: u,
            fov: c,
            aspect: d,
            left: v,
            right: g,
            bottom: p,
            top: m,
            zoom: b
        }),
        n.projectionMatrix = new et,
        n.viewMatrix = new et,
        n.projectionViewMatrix = new et,
        n.worldPosition = new S,
        n.type = v || g ? "orthographic" : "perspective",
        "orthographic" === n.type ? n.orthographic() : n.perspective(),
        n
    }
    return a(o, rt),
    n(o, [{
        key: "perspective",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = t.near
              , i = void 0 === e ? this.near : e
              , n = t.far
              , r = void 0 === n ? this.far : n
              , s = t.fov
              , a = void 0 === s ? this.fov : s
              , o = t.aspect
              , h = void 0 === o ? this.aspect : o;
            return Object.assign(this, {
                near: i,
                far: r,
                fov: a,
                aspect: h
            }),
            this.projectionMatrix.fromPerspective({
                fov: a * (Math.PI / 180),
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
              , s = t.left
              , a = void 0 === s ? this.left || -1 : s
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
                left: a,
                right: h,
                bottom: l,
                top: f,
                zoom: v
            }),
            a /= v,
            h /= v,
            l /= v,
            f /= v,
            this.projectionMatrix.fromOrthogonal({
                left: a,
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
            return r(s(o.prototype), "updateMatrixWorld", this).call(this),
            this.viewMatrix.inverse(this.worldMatrix),
            this.worldMatrix.getTranslation(this.worldPosition),
            this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
            this
        }
    }, {
        key: "lookAt",
        value: function(t) {
            return r(s(o.prototype), "lookAt", this).call(this, t, !0),
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
            this.frustum || (this.frustum = [new S, new S, new S, new S, new S, new S]);
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
            var i = at;
            i.copy(t.geometry.bounds.center),
            i.applyMatrix4(e);
            var n = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
            return this.frustumIntersectsSphere(i, n)
        }
    }, {
        key: "frustumIntersectsSphere",
        value: function(t, e) {
            for (var i = ot, n = 0; n < 6; n++) {
                var r = this.frustum[n];
                if (i.copy(r).dot(t) + r.constant < -e)
                    return !1
            }
            return !0
        }
    }])
}();
function ut(t, e, i) {
    var n = e[0]
      , r = e[1]
      , s = e[2]
      , a = e[3]
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
      , m = i[5]
      , y = i[6]
      , b = i[7]
      , x = i[8];
    return t[0] = f * n + d * a + v * u,
    t[1] = f * r + d * o + v * l,
    t[2] = f * s + d * h + v * c,
    t[3] = g * n + p * a + m * u,
    t[4] = g * r + p * o + m * l,
    t[5] = g * s + p * h + m * c,
    t[6] = y * n + b * a + x * u,
    t[7] = y * r + b * o + x * l,
    t[8] = y * s + b * h + x * c,
    t
}
var lt = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, f = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1;
        return i(this, r),
        h(t = e(this, r, [n, s, a, o, u, l, c, f, d]), t)
    }
    return a(r, v(Array)),
    n(r, [{
        key: "set",
        value: function(t, e, i, n, r, s, a, o, h) {
            return t.length ? this.copy(t) : (function(t, e, i, n, r, s, a, o, h, u) {
                t[0] = e,
                t[1] = i,
                t[2] = n,
                t[3] = r,
                t[4] = s,
                t[5] = a,
                t[6] = o,
                t[7] = h,
                t[8] = u
            }(this, t, e, i, n, r, s, a, o, h),
            this)
        }
    }, {
        key: "translate",
        value: function(t) {
            return function(t, e, i) {
                var n = e[0]
                  , r = e[1]
                  , s = e[2]
                  , a = e[3]
                  , o = e[4]
                  , h = e[5]
                  , u = e[6]
                  , l = e[7]
                  , c = e[8]
                  , f = i[0]
                  , d = i[1];
                t[0] = n,
                t[1] = r,
                t[2] = s,
                t[3] = a,
                t[4] = o,
                t[5] = h,
                t[6] = f * n + d * a + u,
                t[7] = f * r + d * o + l,
                t[8] = f * s + d * h + c
            }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t),
            this
        }
    }, {
        key: "rotate",
        value: function(t) {
            var e, i, n, r, s, a, o, h, u, l, c, f, d, v;
            return e = this,
            n = t,
            r = (i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)[0],
            s = i[1],
            a = i[2],
            o = i[3],
            h = i[4],
            u = i[5],
            l = i[6],
            c = i[7],
            f = i[8],
            d = Math.sin(n),
            v = Math.cos(n),
            e[0] = v * r + d * o,
            e[1] = v * s + d * h,
            e[2] = v * a + d * u,
            e[3] = v * o - d * r,
            e[4] = v * h - d * s,
            e[5] = v * u - d * a,
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
            return e ? ut(this, t, e) : ut(this, this, t),
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
                  , s = e[3]
                  , a = i + i
                  , o = n + n
                  , h = r + r
                  , u = i * a
                  , l = n * a
                  , c = n * o
                  , f = r * a
                  , d = r * o
                  , v = r * h
                  , g = s * a
                  , p = s * o
                  , m = s * h;
                t[0] = 1 - c - v,
                t[3] = l - m,
                t[6] = f + p,
                t[1] = l + m,
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
            var t, e, i, n, r, s, a, o, h, u, l, c, f, d, v;
            return t = this,
            i = (e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0],
            n = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            o = e[5],
            h = e[6],
            u = e[7],
            l = e[8],
            (v = i * (c = l * a - o * u) + n * (f = -l * s + o * h) + r * (d = u * s - a * h)) && (v = 1 / v,
            t[0] = c * v,
            t[1] = (-l * n + r * u) * v,
            t[2] = (o * n - r * a) * v,
            t[3] = f * v,
            t[4] = (l * i - r * h) * v,
            t[5] = (-o * i + r * s) * v,
            t[6] = d * v,
            t[7] = (-u * i + n * h) * v,
            t[8] = (a * i - n * s) * v),
            this
        }
    }, {
        key: "getNormalMatrix",
        value: function(t) {
            var e, i, n, r, s, a, o, h, u, l, c, f, d, v, g, p, m, y, b, x, _, M, k, w, A, E, S, C, F, R, O;
            return e = this,
            n = (i = t)[0],
            r = i[1],
            s = i[2],
            a = i[3],
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
            m = i[14],
            y = i[15],
            (O = (b = n * h - r * o) * (R = d * y - v * m) - (x = n * u - s * o) * (F = f * y - v * p) + (_ = n * l - a * o) * (C = f * m - d * p) + (M = r * u - s * h) * (S = c * y - v * g) - (k = r * l - a * h) * (E = c * m - d * g) + (w = s * l - a * u) * (A = c * p - f * g)) && (O = 1 / O,
            e[0] = (h * R - u * F + l * C) * O,
            e[1] = (u * S - o * R - l * E) * O,
            e[2] = (o * F - h * S + l * A) * O,
            e[3] = (s * F - r * R - a * C) * O,
            e[4] = (n * R - s * S + a * E) * O,
            e[5] = (r * S - n * F - a * A) * O,
            e[6] = (p * w - m * k + y * M) * O,
            e[7] = (m * _ - g * w - y * x) * O,
            e[8] = (g * k - p * _ + y * b) * O),
            this
        }
    }])
}()
  , ct = 0
  , ft = function(t) {
    function r(t) {
        var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = s.geometry, o = s.program, h = s.mode, u = void 0 === h ? t.TRIANGLES : h, l = s.frustumCulled, c = void 0 === l || l, f = s.renderOrder, d = void 0 === f ? 0 : f;
        return i(this, r),
        n = e(this, r),
        t.canvas,
        n.gl = t,
        n.id = ct++,
        n.geometry = a,
        n.program = o,
        n.mode = u,
        n.frustumCulled = c,
        n.renderOrder = d,
        n.modelViewMatrix = new et,
        n.normalMatrix = new lt,
        n.beforeRenderCallbacks = [],
        n.afterRenderCallbacks = [],
        n
    }
    return a(r, rt),
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
  , dt = {
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
function vt(t) {
    4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
}
function gt(t) {
    return [((t = parseInt(t)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
}
function pt(t) {
    return void 0 === t ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(t) ? "#" === t[0] ? vt(t) : dt[t.toLowerCase()] ? vt(dt[t.toLowerCase()]) : [0, 0, 0] : gt(t)
}
var mt = Object.freeze({
    __proto__: null,
    hexToRGB: vt,
    numberToRGB: gt,
    parseColor: pt
})
  , yt = function(t) {
    function r(t) {
        var n;
        return i(this, r),
        Array.isArray(t) ? h(n, n = e(this, r, l(t))) : h(n, n = e(this, r, l(pt.apply(mt, arguments))))
    }
    return a(r, v(Array)),
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
            return Array.isArray(t) ? this.copy(t) : this.copy(pt.apply(mt, arguments))
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
!function() {
    !function(t, e, i) {
        var n, r = 256, s = "random", a = i.pow(r, 6), o = i.pow(2, 52), h = 2 * o, u = r - 1;
        function l(u, l, f) {
            var m = []
              , y = g(v((l = 1 == l ? {
                entropy: !0
            } : l || {}).entropy ? [u, p(e)] : null == u ? function() {
                try {
                    var i;
                    return n && (i = n.randomBytes) ? i = i(r) : (i = new Uint8Array(r),
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
                for (var t = b.g(6), e = a, i = 0; t < o; )
                    t = (t + i) * r,
                    e *= r,
                    i = b.g(1);
                for (; t >= h; )
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
            (l.pass || f || function(t, e, n, r) {
                return r && (r.S && d(r, b),
                t.state = function() {
                    return d(b, {})
                }
                ),
                n ? (i[s] = t,
                e) : t
            }
            )(x, y, "global"in l ? l.global : this == i, l.state)
        }
        function c(t) {
            var e, i = t.length, n = this, s = 0, a = n.i = n.j = 0, o = n.S = [];
            for (i || (t = [i++]); s < r; )
                o[s] = s++;
            for (s = 0; s < r; s++)
                o[s] = o[a = u & a + t[s % i] + (e = o[s])],
                o[a] = e;
            (n.g = function(t) {
                for (var e, i = 0, s = n.i, a = n.j, o = n.S; t--; )
                    e = o[s = u & s + 1],
                    i = i * r + o[u & (o[s] = o[a = u & a + e]) + (o[a] = e)];
                return n.i = s,
                n.j = a,
                i
            }
            )(r)
        }
        function d(t, e) {
            return e.i = t.i,
            e.j = t.j,
            e.S = t.S.slice(),
            e
        }
        function v(t, e) {
            var i, n = [], r = f(t);
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
        "object" == ("undefined" == typeof module ? "undefined" : f(module)) && module.exports) {
            module.exports = l;
            try {
                n = require("crypto")
            } catch (t) {}
        } else
            "function" == typeof define && define.amd ? define((function() {
                return l
            }
            )) : i["seed" + s] = l
    }("undefined" != typeof self ? self : this, [], Math)
}();
var bt = function() {
    return n((function t() {
        var e, n, r, s = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
        i(this, t),
        e = this,
        r = function() {
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
        (n = c(n = "_update"))in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = r,
        this.params = a,
        this.options = {},
        this.loop = a.loop || !1,
        this.colors_num = o,
        this.colors_init = a.colors || [],
        this.palette = [],
        this.colors(this.colors_init),
        this.seed = a.seed || 1e3,
        this.rng = new Math.seedrandom(this.seed),
        this.frame = 0,
        this.parentDom = a.dom ? a.dom: document.body,
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
        this.camera = new ht(this.gl,{
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
        this.scene = new rt
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
                for (var i = l(t), n = i.length; n < 6; n++) {
                    var r = n % i.length;
                    t.push(i[r])
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
  , xt = function(t) {
    function r() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i(this, r),
        (t = e(this, r, [n, 6])).options = t.params.options || {},
        t.speed = 100,
        t.scale = 1,
        t.factor = 1,
        t.start(),
        t
    }
    return a(r, bt),
    n(r, [{
        key: "_size",
        value: function() {}
    }, {
        key: "_resetSeed",
        value: function() {
            this.factor = this.rng()
        }
    }, {
        key: "_makeMaterial",
        value: function() {
            this._planeShader = new z(this.gl,{
                vertex: "\n                attribute vec3 position;\n                attribute vec3 color;\n                attribute vec2 uv;\n                uniform mat4 modelViewMatrix;\n                uniform mat4 projectionMatrix;\n\t\t\t\tuniform float uTime;\n                varying vec2 vUv;\n                varying vec3 vColor;\n                void main() {\n                    vUv = uv;\n                    vColor = color;\n                    vec3 pos = position;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n                }\n            ",
                fragment: "\n\t\t\t\tprecision highp float;\n\n\t\t\t\tuniform sampler2D tMap;\n\t\t\t\tuniform float uTime;\n                uniform float uNoiseFactor;\n\t\t\t\tuniform float uScale;\n\n                uniform vec3 u_color_0;\n                uniform vec3 u_color_1;\n                uniform vec3 u_color_2;\n                uniform vec3 u_color_3;\n                uniform vec3 u_color_4;\n                uniform vec3 u_color_5;\n    \n                const vec3 C1 = vec3(0.0, 1.0, 1.0 );\n                const vec3 C2 = vec3(1.0, 1.0, 0.0 );\n                const vec3 C3 = vec3(0.0, 1.0, 0.0 );\n                const vec3 C4 = vec3(0.0, 1.0, 1.0 );\n                const vec3 C5 = vec3(0.0, 0.0, 1.0 );\n                const vec3 C6 = vec3(1.0, 0.0, 1.0 );\n    \n                const float x1 = 0.0;\n                const float x2 = 0.167;\n                const float x3 = 0.334;\n                const float x4 = 0.500;\n                const float x5 = 0.667;\n                const float x6 = 0.833;\n                const float x7 = 1.0;\n\n\t\t\t\tvarying vec2 vUv;\n                varying vec3 vColor;\n\n                vec3 lut( float x ) {\n\n                    if(x<0.0 || x>1.0)\n                        return u_color_0;\n    \n                    vec3 color = vec3(1.0);\n\n                    float P1 = abs(x - x1);\n                    float P2 = abs(x - x2);\n                    float P3 = abs(x - x3);\n                    float P4 = abs(x - x4);\n                    float P5 = abs(x - x5);\n                    float P6 = abs(x - x6);\n                    float P7 = abs(x - x7);\n\n                    float R1 = smoothstep( 1., -0.0, P1 * uScale) / 1.;\n                    float R2 = smoothstep( 1., -0.0, P2 * uScale) / 1.;\n                    float R3 = smoothstep( 1., -0.0, P3 * uScale) / 1.;\n                    float R4 = smoothstep( 1., -0.0, P4 * uScale) / 1.;\n                    float R5 = smoothstep( 1., -0.0, P5 * uScale) / 1.;\n                    float R6 = smoothstep( 1., -0.0, P6 * uScale) / 1.;\n                    float R7 = smoothstep( 1., -0.0, P7 * uScale) / 1.;\n\n                    color = u_color_0 * R1 + \n                            u_color_1 * R2 +\n                            u_color_2 * R3 +\n                            u_color_3 * R4 +\n                            u_color_4 * R5 + \n                            u_color_5 * R6 +\n                            u_color_0 * R7;\n\n                    return color;\n                }\n\n\t\t\t\tfloat random(vec2 co) {\n\t\t\t\t\treturn fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tvoid main() {\n                    float f = sin(uTime + vColor.x * 10.) * 0.5 + 0.5;\n\n                    vec3 color = lut(f);\n\n\t\t\t\t\tfloat noise = (random(vUv) - 0.5) * uNoiseFactor;\n\t\t\t\t\tcolor.rgb = color.rgb + color.rgb * noise;\n\n\t\t\t\t\tgl_FragColor = vec4( color, 1.0 );\n\t\t\t\t}\n            ",
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uScale: {
                        value: 6
                    },
                    uNoiseFactor: {
                        value: .1
                    },
                    u_color_0: {
                        value: new yt(this.palette[0])
                    },
                    u_color_1: {
                        value: new yt(this.palette[1])
                    },
                    u_color_2: {
                        value: new yt(this.palette[2])
                    },
                    u_color_3: {
                        value: new yt(this.palette[3])
                    },
                    u_color_4: {
                        value: new yt(this.palette[4])
                    },
                    u_color_5: {
                        value: new yt(this.palette[5])
                    }
                }
            })
        }
    }, {
        key: "_make",
        value: function() {
            for (var t = [], e = Math.floor(12 * this.canvasW / 100) + 2, i = Math.floor(12 * this.canvasH / 100) + 2, n = e * i, r = 0; r < i; r++)
                for (var s = 0; s < e; s++) {
                    var a = 100 * s - 12 * this.canvasW / 2
                      , o = -100 * r + 12 * this.canvasH / 2;
                    s > 0 && s < e - 1 && r > 0 && r < i - 1 && (a += (100 * this.rng() - 50) * this.factor,
                    o += (100 * this.rng() - 50) * this.factor);
                    var h = new S(a,o,0);
                    t.push(h)
                }
            for (var u = [], l = [], c = [], f = 0; f < n; f++) {
                var d = t[f]
                  , v = 200 * this.rng() - 100
                  , g = void 0
                  , p = void 0;
                f == t.length - 1 || f % e == e - 1 ? (g = t[f].x + 100,
                p = t[f].y) : (g = t[f + 1].x,
                p = t[f + 1].y);
                var m = void 0
                  , y = void 0;
                f == t.length - 1 ? (m = t[f].x,
                y = t[f].y - 100) : t[f + e] ? (m = t[f + e].x,
                y = t[f + e].y) : (m = t[f].x,
                y = t[f].y - 100);
                var b = void 0
                  , x = void 0;
                f == t.length - 1 ? (b = t[f].x + 100,
                x = t[f].y - 100) : t[f + e] && f % e + 1 < e ? (b = t[f + e + 1].x,
                x = t[f + e + 1].y) : (b = t[f].x + 100,
                x = t[f].y - 100),
                u.push(d.x),
                u.push(d.y),
                u.push(0),
                u.push(m),
                u.push(y),
                u.push(v),
                u.push(g),
                u.push(p),
                u.push(0),
                u.push(g),
                u.push(p),
                u.push(0),
                u.push(m),
                u.push(y),
                u.push(v),
                u.push(b),
                u.push(x),
                u.push(0);
                var _ = this.rng()
                  , M = this.rng();
                l.push(_),
                l.push(_),
                l.push(_),
                l.push(_),
                l.push(_),
                l.push(_),
                l.push(_),
                l.push(_),
                l.push(_),
                l.push(M),
                l.push(M),
                l.push(M),
                l.push(M),
                l.push(M),
                l.push(M),
                l.push(M),
                l.push(M),
                l.push(M),
                c.push(d.x / this.canvasW),
                c.push(d.y / this.canvasH),
                c.push(m / this.canvasW),
                c.push(y / this.canvasH),
                c.push(g / this.canvasW),
                c.push(p / this.canvasH),
                c.push(d.x / this.canvasW),
                c.push(d.y / this.canvasH),
                c.push(m / this.canvasW),
                c.push(y / this.canvasH),
                c.push(g / this.canvasW),
                c.push(p / this.canvasH)
            }
            var k = new T(this.gl,{
                position: {
                    size: 3,
                    data: new Float32Array(u)
                },
                color: {
                    size: 3,
                    data: new Float32Array(l)
                },
                uv: {
                    size: 2,
                    data: new Float32Array(c)
                }
            });
            new ft(this.gl,{
                geometry: k,
                program: this._planeShader
            }).setParent(this.scene)
        }
    }, {
        key: "_resetColors",
        value: function() {
            this._planeShader.uniforms.u_color_0.value = new yt(this.palette[0]),
            this._planeShader.uniforms.u_color_1.value = new yt(this.palette[1]),
            this._planeShader.uniforms.u_color_2.value = new yt(this.palette[2]),
            this._planeShader.uniforms.u_color_3.value = new yt(this.palette[3]),
            this._planeShader.uniforms.u_color_4.value = new yt(this.palette[4]),
            this._planeShader.uniforms.u_color_5.value = new yt(this.palette[5])
        }
    }, {
        key: "_animate",
        value: function() {
            this._planeShader.uniforms.uTime.value = this.frame / this.speed
        }
    }, {
        key: "update",
        value: function(t, e) {
            switch (t) {
            case "noise":
                this._planeShader.uniforms.uNoiseFactor.value = parseFloat(e);
                break;
            case "speed":
                var i = parseInt(e);
                this.speed = -400 * i / 9 + 4900 / 9;
                break;
            case "factor":
                this.factor = parseFloat(e)
            }
        }
    }])
}();
export {xt as TrianglesMosaicBg};
