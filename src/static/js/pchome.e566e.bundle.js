! function(e) {
    function t(t) {
        for (var a, s, o = t[0], l = t[1], d = t[2], u = 0, p = []; u < o.length; u++) s = o[u], Object.prototype.hasOwnProperty.call(n, s) && n[s] && p.push(n[s][0]), n[s] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        for (c && c(t); p.length;) p.shift()();
        return r.push.apply(r, d || []), i()
    }

    function i() {
        for (var e, t = 0; t < r.length; t++) {
            for (var i = r[t], a = !0, o = 1; o < i.length; o++) {
                var l = i[o];
                0 !== n[l] && (a = !1)
            }
            a && (r.splice(t--, 1), e = s(s.s = i[0]))
        }
        return e
    }
    var a = {},
        n = {
            5: 0
        },
        r = [];

    function s(t) {
        if (a[t]) return a[t].exports;
        var i = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, s), i.l = !0, i.exports
    }
    s.m = e, s.c = a, s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) s.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "//dl.twtouda.com/wylsg/";
    var o = window.webpackJsonp = window.webpackJsonp || [],
        l = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var d = 0; d < o.length; d++) t(o[d]);
    var c = l;
    r.push([675, 0]), i()
}({
    100: function(e, t, i) {
        var a = i(12);
        a(a.P, "Function", {
            bind: i(164)
        })
    },
    101: function(e, t, i) {
        "use strict";
        var a = i(167)(!0);
        e.exports = function(e, t, i) {
            return t + (i ? a(e, t).length : 1)
        }
    },
    102: function(e, t, i) {
        "use strict";
        var a = i(103),
            n = RegExp.prototype.exec;
        e.exports = function(e, t) {
            var i = e.exec;
            if ("function" == typeof i) {
                var r = i.call(e, t);
                if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== a(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return n.call(e, t)
        }
    },
    103: function(e, t, i) {
        var a = i(58),
            n = i(16)("toStringTag"),
            r = "Arguments" == a(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, i, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(i = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), n)) ? i : r ? a(t) : "Object" == (s = a(t)) && "function" == typeof t.callee ? "Arguments" : s
        }
    },
    104: function(e, t, i) {
        "use strict";
        i(202);
        var a = i(36),
            n = i(39),
            r = i(28),
            s = i(43),
            o = i(16),
            l = i(93),
            d = o("species"),
            c = !r((function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e
                }, "7" !== "".replace(e, "$<a>")
            })),
            u = function() {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function() {
                    return t.apply(this, arguments)
                };
                var i = "ab".split(e);
                return 2 === i.length && "a" === i[0] && "b" === i[1]
            }();
        e.exports = function(e, t, i) {
            var p = o(e),
                h = !r((function() {
                    var t = {};
                    return t[p] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                f = h ? !r((function() {
                    var t = !1,
                        i = /a/;
                    return i.exec = function() {
                        return t = !0, null
                    }, "split" === e && (i.constructor = {}, i.constructor[d] = function() {
                        return i
                    }), i[p](""), !t
                })) : void 0;
            if (!h || !f || "replace" === e && !c || "split" === e && !u) {
                var v = /./ [p],
                    m = i(s, p, "" [e], (function(e, t, i, a, n) {
                        return t.exec === l ? h && !n ? {
                            done: !0,
                            value: v.call(t, i, a)
                        } : {
                            done: !0,
                            value: e.call(i, t, a)
                        } : {
                            done: !1
                        }
                    })),
                    g = m[0],
                    b = m[1];
                a(String.prototype, e, g), n(RegExp.prototype, p, 2 == t ? function(e, t) {
                    return b.call(e, this, t)
                } : function(e) {
                    return b.call(e, this)
                })
            }
        }
    },
    105: function(e, t, i) {
        var a = i(35).f,
            n = i(47),
            r = i(16)("toStringTag");
        e.exports = function(e, t, i) {
            e && !n(e = i ? e : e.prototype, r) && a(e, r, {
                configurable: !0,
                value: t
            })
        }
    },
    113: function(e, t, i) {
        var a = i(34),
            n = i(27).document,
            r = a(n) && a(n.createElement);
        e.exports = function(e) {
            return r ? n.createElement(e) : {}
        }
    },
    114: function(e, t, i) {
        var a = i(58);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == a(e) ? e.split("") : Object(e)
        }
    },
    115: function(e, t, i) {
        var a = i(16)("unscopables"),
            n = Array.prototype;
        null == n[a] && i(39)(n, a, {}), e.exports = function(e) {
            n[a][e] = !0
        }
    },
    116: function(e, t, i) {
        var a = i(34),
            n = i(58),
            r = i(16)("match");
        e.exports = function(e) {
            var t;
            return a(e) && (void 0 !== (t = e[r]) ? !!t : "RegExp" == n(e))
        }
    },
    117: function(e, t, i) {
        var a = i(23),
            n = i(132),
            r = i(99),
            s = i(92)("IE_PROTO"),
            o = function() {},
            l = function() {
                var e, t = i(113)("iframe"),
                    a = r.length;
                for (t.style.display = "none", i(163).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; a--;) delete l.prototype[r[a]];
                return l()
            };
        e.exports = Object.create || function(e, t) {
            var i;
            return null !== e ? (o.prototype = a(e), i = new o, o.prototype = null, i[s] = e) : i = l(), void 0 === t ? i : n(i, t)
        }
    },
    118: function(e, t, i) {
        var a = i(35).f,
            n = Function.prototype,
            r = /^\s*function ([^ (]*)/;
        "name" in n || i(21) && a(n, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(r)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    },
    12: function(e, t, i) {
        var a = i(27),
            n = i(51),
            r = i(39),
            s = i(36),
            o = i(65),
            l = function(e, t, i) {
                var d, c, u, p, h = e & l.F,
                    f = e & l.G,
                    v = e & l.S,
                    m = e & l.P,
                    g = e & l.B,
                    b = f ? a : v ? a[t] || (a[t] = {}) : (a[t] || {}).prototype,
                    y = f ? n : n[t] || (n[t] = {}),
                    w = y.prototype || (y.prototype = {});
                for (d in f && (i = t), i) u = ((c = !h && b && void 0 !== b[d]) ? b : i)[d], p = g && c ? o(u, a) : m && "function" == typeof u ? o(Function.call, u) : u, b && s(b, d, u, e & l.U), y[d] != u && r(y, d, p), m && w[d] != u && (w[d] = u)
            };
        a.core = n, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
    },
    1215: function(e, t) {},
    1221: function(e, t) {},
    131: function(e, t, i) {
        var a = i(34);
        e.exports = function(e, t) {
            if (!a(e)) return e;
            var i, n;
            if (t && "function" == typeof(i = e.toString) && !a(n = i.call(e))) return n;
            if ("function" == typeof(i = e.valueOf) && !a(n = i.call(e))) return n;
            if (!t && "function" == typeof(i = e.toString) && !a(n = i.call(e))) return n;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    132: function(e, t, i) {
        var a = i(35),
            n = i(23),
            r = i(67);
        e.exports = i(21) ? Object.defineProperties : function(e, t) {
            n(e);
            for (var i, s = r(t), o = s.length, l = 0; o > l;) a.f(e, i = s[l++], t[i]);
            return e
        }
    },
    133: function(e, t, i) {
        var a = i(58);
        e.exports = Array.isArray || function(e) {
            return "Array" == a(e)
        }
    },
    147: function(e, t, i) {
        "use strict";
        (function(t) {
            var a = i(38),
                n = i(290),
                r = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function s(e, t) {
                !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var o, l = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t) && (o = i(193)), o),
                transformRequest: [function(e, t) {
                    return n(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
            l.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, a.forEach(["delete", "get", "head"], (function(e) {
                l.headers[e] = {}
            })), a.forEach(["post", "put", "patch"], (function(e) {
                l.headers[e] = a.merge(r)
            })), e.exports = l
        }).call(this, i(162))
    },
    148: function(e, t, i) {
        e.exports = !i(21) && !i(28)((function() {
            return 7 != Object.defineProperty(i(113)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    149: function(e, t, i) {
        var a = i(47),
            n = i(57),
            r = i(98)(!1),
            s = i(92)("IE_PROTO");
        e.exports = function(e, t) {
            var i, o = n(e),
                l = 0,
                d = [];
            for (i in o) i != s && a(o, i) && d.push(i);
            for (; t.length > l;) a(o, i = t[l++]) && (~r(d, i) || d.push(i));
            return d
        }
    },
    150: function(e, t, i) {
        "use strict";
        var a = i(116),
            n = i(23),
            r = i(169),
            s = i(101),
            o = i(48),
            l = i(102),
            d = i(93),
            c = i(28),
            u = Math.min,
            p = [].push,
            h = "length",
            f = !c((function() {
                RegExp(4294967295, "y")
            }));
        i(104)("split", 2, (function(e, t, i, c) {
            var v;
            return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[h] || 2 != "ab".split(/(?:ab)*/)[h] || 4 != ".".split(/(.?)(.?)/)[h] || ".".split(/()()/)[h] > 1 || "".split(/.?/)[h] ? function(e, t) {
                var n = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!a(e)) return i.call(n, e, t);
                for (var r, s, o, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, f = void 0 === t ? 4294967295 : t >>> 0, v = new RegExp(e.source, c + "g");
                    (r = d.call(v, n)) && !((s = v.lastIndex) > u && (l.push(n.slice(u, r.index)), r[h] > 1 && r.index < n[h] && p.apply(l, r.slice(1)), o = r[0][h], u = s, l[h] >= f));) v.lastIndex === r.index && v.lastIndex++;
                return u === n[h] ? !o && v.test("") || l.push("") : l.push(n.slice(u)), l[h] > f ? l.slice(0, f) : l
            } : "0".split(void 0, 0)[h] ? function(e, t) {
                return void 0 === e && 0 === t ? [] : i.call(this, e, t)
            } : i, [function(i, a) {
                var n = e(this),
                    r = null == i ? void 0 : i[t];
                return void 0 !== r ? r.call(i, n, a) : v.call(String(n), i, a)
            }, function(e, t) {
                var a = c(v, e, this, t, v !== i);
                if (a.done) return a.value;
                var d = n(e),
                    p = String(this),
                    h = r(d, RegExp),
                    m = d.unicode,
                    g = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (f ? "y" : "g"),
                    b = new h(f ? d : "^(?:" + d.source + ")", g),
                    y = void 0 === t ? 4294967295 : t >>> 0;
                if (0 === y) return [];
                if (0 === p.length) return null === l(b, p) ? [p] : [];
                for (var w = 0, x = 0, T = []; x < p.length;) {
                    b.lastIndex = f ? x : 0;
                    var E, S = l(b, f ? p : p.slice(x));
                    if (null === S || (E = u(o(b.lastIndex + (f ? 0 : x)), p.length)) === w) x = s(p, x, m);
                    else {
                        if (T.push(p.slice(w, x)), T.length === y) return T;
                        for (var C = 1; C <= S.length - 1; C++)
                            if (T.push(S[C]), T.length === y) return T;
                        x = w = E
                    }
                }
                return T.push(p.slice(w)), T
            }]
        }))
    },
    16: function(e, t, i) {
        var a = i(83)("wks"),
            n = i(76),
            r = i(27).Symbol,
            s = "function" == typeof r;
        (e.exports = function(e) {
            return a[e] || (a[e] = s && r[e] || (s ? r : n)("Symbol." + e))
        }).store = a
    },
    162: function(e, t) {
        var i, a, n = e.exports = {};

        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (i === setTimeout) return setTimeout(e, 0);
            if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }! function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                i = r
            }
            try {
                a = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                a = s
            }
        }();
        var l, d = [],
            c = !1,
            u = -1;

        function p() {
            c && l && (c = !1, l.length ? d = l.concat(d) : u = -1, d.length && h())
        }

        function h() {
            if (!c) {
                var e = o(p);
                c = !0;
                for (var t = d.length; t;) {
                    for (l = d, d = []; ++u < t;) l && l[u].run();
                    u = -1, t = d.length
                }
                l = null, c = !1,
                    function(e) {
                        if (a === clearTimeout) return clearTimeout(e);
                        if ((a === s || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
                        try {
                            a(e)
                        } catch (t) {
                            try {
                                return a.call(null, e)
                            } catch (t) {
                                return a.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function f(e, t) {
            this.fun = e, this.array = t
        }

        function v() {}
        n.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            d.push(new f(e, t)), 1 !== d.length || c || o(h)
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = v, n.addListener = v, n.once = v, n.off = v, n.removeListener = v, n.removeAllListeners = v, n.emit = v, n.prependListener = v, n.prependOnceListener = v, n.listeners = function(e) {
            return []
        }, n.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        }
    },
    163: function(e, t, i) {
        var a = i(27).document;
        e.exports = a && a.documentElement
    },
    164: function(e, t, i) {
        "use strict";
        var a = i(56),
            n = i(34),
            r = i(165),
            s = [].slice,
            o = {},
            l = function(e, t, i) {
                if (!(t in o)) {
                    for (var a = [], n = 0; n < t; n++) a[n] = "a[" + n + "]";
                    o[t] = Function("F,a", "return new F(" + a.join(",") + ")")
                }
                return o[t](e, i)
            };
        e.exports = Function.bind || function(e) {
            var t = a(this),
                i = s.call(arguments, 1),
                o = function() {
                    var a = i.concat(s.call(arguments));
                    return this instanceof o ? l(t, a.length, a) : r(t, a, e)
                };
            return n(t.prototype) && (o.prototype = t.prototype), o
        }
    },
    165: function(e, t) {
        e.exports = function(e, t, i) {
            var a = void 0 === i;
            switch (t.length) {
                case 0:
                    return a ? e() : e.call(i);
                case 1:
                    return a ? e(t[0]) : e.call(i, t[0]);
                case 2:
                    return a ? e(t[0], t[1]) : e.call(i, t[0], t[1]);
                case 3:
                    return a ? e(t[0], t[1], t[2]) : e.call(i, t[0], t[1], t[2]);
                case 4:
                    return a ? e(t[0], t[1], t[2], t[3]) : e.call(i, t[0], t[1], t[2], t[3])
            }
            return e.apply(i, t)
        }
    },
    166: function(e, t, i) {
        "use strict";
        var a = i(23),
            n = i(45),
            r = i(48),
            s = i(66),
            o = i(101),
            l = i(102),
            d = Math.max,
            c = Math.min,
            u = Math.floor,
            p = /\$([$&`']|\d\d?|<[^>]*>)/g,
            h = /\$([$&`']|\d\d?)/g;
        i(104)("replace", 2, (function(e, t, i, f) {
            return [function(a, n) {
                var r = e(this),
                    s = null == a ? void 0 : a[t];
                return void 0 !== s ? s.call(a, r, n) : i.call(String(r), a, n)
            }, function(e, t) {
                var n = f(i, e, this, t);
                if (n.done) return n.value;
                var u = a(e),
                    p = String(this),
                    h = "function" == typeof t;
                h || (t = String(t));
                var m = u.global;
                if (m) {
                    var g = u.unicode;
                    u.lastIndex = 0
                }
                for (var b = [];;) {
                    var y = l(u, p);
                    if (null === y) break;
                    if (b.push(y), !m) break;
                    "" === String(y[0]) && (u.lastIndex = o(p, r(u.lastIndex), g))
                }
                for (var w, x = "", T = 0, E = 0; E < b.length; E++) {
                    y = b[E];
                    for (var S = String(y[0]), C = d(c(s(y.index), p.length), 0), M = [], P = 1; P < y.length; P++) M.push(void 0 === (w = y[P]) ? w : String(w));
                    var k = y.groups;
                    if (h) {
                        var z = [S].concat(M, C, p);
                        void 0 !== k && z.push(k);
                        var L = String(t.apply(void 0, z))
                    } else L = v(S, p, C, M, k, t);
                    C >= T && (x += p.slice(T, C) + L, T = C + S.length)
                }
                return x + p.slice(T)
            }];

            function v(e, t, a, r, s, o) {
                var l = a + e.length,
                    d = r.length,
                    c = h;
                return void 0 !== s && (s = n(s), c = p), i.call(o, c, (function(i, n) {
                    var o;
                    switch (n.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return e;
                        case "`":
                            return t.slice(0, a);
                        case "'":
                            return t.slice(l);
                        case "<":
                            o = s[n.slice(1, -1)];
                            break;
                        default:
                            var c = +n;
                            if (0 === c) return i;
                            if (c > d) {
                                var p = u(c / 10);
                                return 0 === p ? i : p <= d ? void 0 === r[p - 1] ? n.charAt(1) : r[p - 1] + n.charAt(1) : i
                            }
                            o = r[c - 1]
                    }
                    return void 0 === o ? "" : o
                }))
            }
        }))
    },
    167: function(e, t, i) {
        var a = i(66),
            n = i(43);
        e.exports = function(e) {
            return function(t, i) {
                var r, s, o = String(n(t)),
                    l = a(i),
                    d = o.length;
                return l < 0 || l >= d ? e ? "" : void 0 : (r = o.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === d || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : r : e ? o.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536
            }
        }
    },
    168: function(e, t, i) {
        "use strict";
        var a = i(91),
            n = i(12),
            r = i(36),
            s = i(39),
            o = i(80),
            l = i(204),
            d = i(105),
            c = i(205),
            u = i(16)("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function() {
                return this
            };
        e.exports = function(e, t, i, f, v, m, g) {
            l(i, t, f);
            var b, y, w, x = function(e) {
                    if (!p && e in C) return C[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new i(this, e)
                            }
                    }
                    return function() {
                        return new i(this, e)
                    }
                },
                T = t + " Iterator",
                E = "values" == v,
                S = !1,
                C = e.prototype,
                M = C[u] || C["@@iterator"] || v && C[v],
                P = M || x(v),
                k = v ? E ? x("entries") : P : void 0,
                z = "Array" == t && C.entries || M;
            if (z && (w = c(z.call(new e))) !== Object.prototype && w.next && (d(w, T, !0), a || "function" == typeof w[u] || s(w, u, h)), E && M && "values" !== M.name && (S = !0, P = function() {
                    return M.call(this)
                }), a && !g || !p && !S && C[u] || s(C, u, P), o[t] = P, o[T] = h, v)
                if (b = {
                        values: E ? P : x("values"),
                        keys: m ? P : x("keys"),
                        entries: k
                    }, g)
                    for (y in b) y in C || r(C, y, b[y]);
                else n(n.P + n.F * (p || S), t, b);
            return b
        }
    },
    169: function(e, t, i) {
        var a = i(23),
            n = i(56),
            r = i(16)("species");
        e.exports = function(e, t) {
            var i, s = a(e).constructor;
            return void 0 === s || null == (i = a(s)[r]) ? t : n(i)
        }
    },
    192: function(e, t, i) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var i = new Array(arguments.length), a = 0; a < i.length; a++) i[a] = arguments[a];
                return e.apply(t, i)
            }
        }
    },
    193: function(e, t, i) {
        "use strict";
        var a = i(38),
            n = i(291),
            r = i(293),
            s = i(294),
            o = i(295),
            l = i(194);
        e.exports = function(e) {
            return new Promise((function(t, d) {
                var c = e.data,
                    u = e.headers;
                a.isFormData(c) && delete u["Content-Type"];
                var p = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || "",
                        f = e.auth.password || "";
                    u.Authorization = "Basic " + btoa(h + ":" + f)
                }
                if (p.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                        if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                            var i = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                                a = {
                                    data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                    status: p.status,
                                    statusText: p.statusText,
                                    headers: i,
                                    config: e,
                                    request: p
                                };
                            n(t, d, a), p = null
                        }
                    }, p.onerror = function() {
                        d(l("Network Error", e, null, p)), p = null
                    }, p.ontimeout = function() {
                        d(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                    }, a.isStandardBrowserEnv()) {
                    var v = i(296),
                        m = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                    m && (u[e.xsrfHeaderName] = m)
                }
                if ("setRequestHeader" in p && a.forEach(u, (function(e, t) {
                        void 0 === c && "content-type" === t.toLowerCase() ? delete u[t] : p.setRequestHeader(t, e)
                    })), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                    p.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                    p && (p.abort(), d(e), p = null)
                })), void 0 === c && (c = null), p.send(c)
            }))
        }
    },
    194: function(e, t, i) {
        "use strict";
        var a = i(292);
        e.exports = function(e, t, i, n, r) {
            var s = new Error(e);
            return a(s, t, i, n, r)
        }
    },
    195: function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    },
    196: function(e, t, i) {
        "use strict";

        function a(e) {
            this.message = e
        }
        a.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, a.prototype.__CANCEL__ = !0, e.exports = a
    },
    197: function(e, t, i) {
        e.exports = i(83)("native-function-to-string", Function.toString)
    },
    198: function(e, t, i) {
        var a = i(66),
            n = Math.max,
            r = Math.min;
        e.exports = function(e, t) {
            return (e = a(e)) < 0 ? n(e + t, 0) : r(e, t)
        }
    },
    199: function(e, t, i) {
        var a = i(200);
        e.exports = function(e, t) {
            return new(a(e))(t)
        }
    },
    2: function(e, t) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    200: function(e, t, i) {
        var a = i(34),
            n = i(133),
            r = i(16)("species");
        e.exports = function(e) {
            var t;
            return n(e) && ("function" != typeof(t = e.constructor) || t !== Array && !n(t.prototype) || (t = void 0), a(t) && null === (t = t[r]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    201: function(e, t, i) {
        i(21) && "g" != /./g.flags && i(35).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: i(78)
        })
    },
    202: function(e, t, i) {
        "use strict";
        var a = i(93);
        i(12)({
            target: "RegExp",
            proto: !0,
            forced: a !== /./.exec
        }, {
            exec: a
        })
    },
    203: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    204: function(e, t, i) {
        "use strict";
        var a = i(117),
            n = i(82),
            r = i(105),
            s = {};
        i(39)(s, i(16)("iterator"), (function() {
            return this
        })), e.exports = function(e, t, i) {
            e.prototype = a(s, {
                next: n(1, i)
            }), r(e, t + " Iterator")
        }
    },
    205: function(e, t, i) {
        var a = i(47),
            n = i(45),
            r = i(92)("IE_PROTO"),
            s = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = n(e), a(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    },
    206: function(e, t, i) {
        var a = i(12),
            n = i(51),
            r = i(28);
        e.exports = function(e, t) {
            var i = (n.Object || {})[e] || Object[e],
                s = {};
            s[e] = t(i), a(a.S + a.F * r((function() {
                i(1)
            })), "Object", s)
        }
    },
    21: function(e, t, i) {
        e.exports = !i(28)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    23: function(e, t, i) {
        var a = i(34);
        e.exports = function(e) {
            if (!a(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    241: function(e, t, i) {
        "use strict";
        (function(e) {
            i(40), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formRequest = function(t, i, n, r) {
                e.ajax({
                    url: a.baseUrl + t,
                    type: r || "POST",
                    data: i,
                    contentType: !(t.indexOf("upload") > -1) && "application/x-www-form-urlencoded",
                    processData: !(t.indexOf("upload") > -1),
                    success: function(t) {
                        0 == t.code ? n(t.data, t.message) : e(".alert") && e(".alert").html(t.message).show().delay(3e3).fadeOut()
                    },
                    error: function(e) {
                        console.log(e)
                    }
                })
            }, t.formRequestRes = function(t, i, n, r) {
                e.ajax({
                    url: a.baseUrl + t,
                    type: r || "POST",
                    data: i,
                    contentType: "application/x-www-form-urlencoded",
                    success: function(e) {
                        n(e)
                    },
                    error: function(e) {
                        console.log(e)
                    }
                })
            }, i(97);
            var a = i(305)
        }).call(this, i(112))
    },
    27: function(e, t) {
        var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    },
    28: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    286: function(e, t, i) {
        e.exports = i(287)
    },
    287: function(e, t, i) {
        "use strict";
        var a = i(38),
            n = i(192),
            r = i(289),
            s = i(147);

        function o(e) {
            var t = new r(e),
                i = n(r.prototype.request, t);
            return a.extend(i, r.prototype, t), a.extend(i, t), i
        }
        var l = o(s);
        l.Axios = r, l.create = function(e) {
            return o(a.merge(s, e))
        }, l.Cancel = i(196), l.CancelToken = i(302), l.isCancel = i(195), l.all = function(e) {
            return Promise.all(e)
        }, l.spread = i(303), e.exports = l, e.exports.default = l
    },
    288: function(e, t) {
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    },
    289: function(e, t, i) {
        "use strict";
        var a = i(147),
            n = i(38),
            r = i(297),
            s = i(298);

        function o(e) {
            this.defaults = e, this.interceptors = {
                request: new r,
                response: new r
            }
        }
        o.prototype.request = function(e) {
            "string" == typeof e && (e = n.merge({
                url: arguments[0]
            }, arguments[1])), (e = n.merge(a, {
                method: "get"
            }, this.defaults, e)).method = e.method.toLowerCase();
            var t = [s, void 0],
                i = Promise.resolve(e);
            for (this.interceptors.request.forEach((function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                })), this.interceptors.response.forEach((function(e) {
                    t.push(e.fulfilled, e.rejected)
                })); t.length;) i = i.then(t.shift(), t.shift());
            return i
        }, n.forEach(["delete", "get", "head", "options"], (function(e) {
            o.prototype[e] = function(t, i) {
                return this.request(n.merge(i || {}, {
                    method: e,
                    url: t
                }))
            }
        })), n.forEach(["post", "put", "patch"], (function(e) {
            o.prototype[e] = function(t, i, a) {
                return this.request(n.merge(a || {}, {
                    method: e,
                    url: t,
                    data: i
                }))
            }
        })), e.exports = o
    },
    290: function(e, t, i) {
        "use strict";
        var a = i(38);
        e.exports = function(e, t) {
            a.forEach(e, (function(i, a) {
                a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = i, delete e[a])
            }))
        }
    },
    291: function(e, t, i) {
        "use strict";
        var a = i(194);
        e.exports = function(e, t, i) {
            var n = i.config.validateStatus;
            i.status && n && !n(i.status) ? t(a("Request failed with status code " + i.status, i.config, null, i.request, i)) : e(i)
        }
    },
    292: function(e, t, i) {
        "use strict";
        e.exports = function(e, t, i, a, n) {
            return e.config = t, i && (e.code = i), e.request = a, e.response = n, e
        }
    },
    293: function(e, t, i) {
        "use strict";
        var a = i(38);

        function n(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, i) {
            if (!t) return e;
            var r;
            if (i) r = i(t);
            else if (a.isURLSearchParams(t)) r = t.toString();
            else {
                var s = [];
                a.forEach(t, (function(e, t) {
                    null != e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, (function(e) {
                        a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), s.push(n(t) + "=" + n(e))
                    })))
                })), r = s.join("&")
            }
            return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
        }
    },
    294: function(e, t, i) {
        "use strict";
        var a = i(38),
            n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, i, r, s = {};
            return e ? (a.forEach(e.split("\n"), (function(e) {
                if (r = e.indexOf(":"), t = a.trim(e.substr(0, r)).toLowerCase(), i = a.trim(e.substr(r + 1)), t) {
                    if (s[t] && n.indexOf(t) >= 0) return;
                    s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([i]) : s[t] ? s[t] + ", " + i : i
                }
            })), s) : s
        }
    },
    295: function(e, t, i) {
        "use strict";
        var a = i(38);
        e.exports = a.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
                i = document.createElement("a");

            function n(e) {
                var a = e;
                return t && (i.setAttribute("href", a), a = i.href), i.setAttribute("href", a), {
                    href: i.href,
                    protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                    host: i.host,
                    search: i.search ? i.search.replace(/^\?/, "") : "",
                    hash: i.hash ? i.hash.replace(/^#/, "") : "",
                    hostname: i.hostname,
                    port: i.port,
                    pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                }
            }
            return e = n(window.location.href),
                function(t) {
                    var i = a.isString(t) ? n(t) : t;
                    return i.protocol === e.protocol && i.host === e.host
                }
        }() : function() {
            return !0
        }
    },
    296: function(e, t, i) {
        "use strict";
        var a = i(38);
        e.exports = a.isStandardBrowserEnv() ? {
            write: function(e, t, i, n, r, s) {
                var o = [];
                o.push(e + "=" + encodeURIComponent(t)), a.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()), a.isString(n) && o.push("path=" + n), a.isString(r) && o.push("domain=" + r), !0 === s && o.push("secure"), document.cookie = o.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    },
    297: function(e, t, i) {
        "use strict";
        var a = i(38);

        function n() {
            this.handlers = []
        }
        n.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, n.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, n.prototype.forEach = function(e) {
            a.forEach(this.handlers, (function(t) {
                null !== t && e(t)
            }))
        }, e.exports = n
    },
    298: function(e, t, i) {
        "use strict";
        var a = i(38),
            n = i(299),
            r = i(195),
            s = i(147),
            o = i(300),
            l = i(301);

        function d(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(e) {
            return d(e), e.baseURL && !o(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = n(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                delete e.headers[t]
            })), (e.adapter || s.adapter)(e).then((function(t) {
                return d(e), t.data = n(t.data, t.headers, e.transformResponse), t
            }), (function(t) {
                return r(t) || (d(e), t && t.response && (t.response.data = n(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            }))
        }
    },
    299: function(e, t, i) {
        "use strict";
        var a = i(38);
        e.exports = function(e, t, i) {
            return a.forEach(i, (function(i) {
                e = i(e, t)
            })), e
        }
    },
    300: function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    },
    301: function(e, t, i) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    },
    302: function(e, t, i) {
        "use strict";
        var a = i(196);

        function n(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
                t = e
            }));
            var i = this;
            e((function(e) {
                i.reason || (i.reason = new a(e), t(i.reason))
            }))
        }
        n.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, n.source = function() {
            var e;
            return {
                token: new n((function(t) {
                    e = t
                })),
                cancel: e
            }
        }, e.exports = n
    },
    303: function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    },
    304: function(e, t, i) {
        "use strict";
        (function(e) {
            i(97);
            var t = i(241);
            e((function() {
                ({
                    giftBox: e(".gift-box"),
                    receiveGiftBox: e(".gift-receive-box"),
                    time: 59,
                    timer: null,
                    init: function() {
                        this.addVisitLog()
                    },
                    addVisitLog: function() {
                        var e = window.location.href;
                        if (e.indexOf("/preview") > -1) return !1;
                        (0, t.formRequest)("/web/addVisitLog", {
                            url: e
                        }, (function(e) {}))
                    }
                }).init()
            }))
        }).call(this, i(112))
    },
    305: function(e, t) {
        e.exports = {
            baseUrl: ""
        }
    },
    306: function(e, t, i) {
        var a, n;
        i(307), i(308), i(311), i(312), i(313), i(84), i(118), i(100), i(314), i(40), i(52), i(53), i(166), i(79), i(315), i(85), i(60), i(46), i(86), i(68), i(87), i(150), i(316), i(97), i(317);
        var r = i(44);
        ! function(s, o) {
            "object" == r(t) && void 0 !== e ? e.exports = o() : void 0 === (n = "function" == typeof(a = o) ? a.call(t, i, t, e) : a) || (e.exports = n)
        }(0, (function() {
            "use strict";
            var e = "undefined" == typeof document ? {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    location: {
                        hash: ""
                    }
                } : document,
                t = "undefined" == typeof window ? {
                    document: e,
                    navigator: {
                        userAgent: ""
                    },
                    location: {},
                    history: {},
                    CustomEvent: function() {
                        return this
                    },
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    getComputedStyle: function() {
                        return {
                            getPropertyValue: function() {
                                return ""
                            }
                        }
                    },
                    Image: function() {},
                    Date: function() {},
                    screen: {},
                    setTimeout: function() {},
                    clearTimeout: function() {}
                } : window,
                i = function(e) {
                    for (var t = 0; t < e.length; t += 1) this[t] = e[t];
                    return this.length = e.length, this
                };

            function a(a, n) {
                var r = [],
                    s = 0;
                if (a && !n && a instanceof i) return a;
                if (a)
                    if ("string" == typeof a) {
                        var o, l, d = a.trim();
                        if (0 <= d.indexOf("<") && 0 <= d.indexOf(">")) {
                            var c = "div";
                            for (0 === d.indexOf("<li") && (c = "ul"), 0 === d.indexOf("<tr") && (c = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (c = "tr"), 0 === d.indexOf("<tbody") && (c = "table"), 0 === d.indexOf("<option") && (c = "select"), (l = e.createElement(c)).innerHTML = d, s = 0; s < l.childNodes.length; s += 1) r.push(l.childNodes[s])
                        } else
                            for (o = n || "#" !== a[0] || a.match(/[ .<>:~]/) ? (n || e).querySelectorAll(a.trim()) : [e.getElementById(a.trim().split("#")[1])], s = 0; s < o.length; s += 1) o[s] && r.push(o[s])
                    } else if (a.nodeType || a === t || a === e) r.push(a);
                else if (0 < a.length && a[0].nodeType)
                    for (s = 0; s < a.length; s += 1) r.push(a[s]);
                return new i(r)
            }

            function n(e) {
                for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            a.fn = i.prototype, a.Class = i, a.Dom7 = i;
            var s = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var a = 0; a < this.length; a += 1) void 0 !== this[a] && void 0 !== this[a].classList && this[a].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var a = 0; a < this.length; a += 1) void 0 !== this[a] && void 0 !== this[a].classList && this[a].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var a = 0; a < this.length; a += 1) void 0 !== this[a] && void 0 !== this[a].classList && this[a].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    var i = arguments;
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var a = 0; a < this.length; a += 1)
                        if (2 === i.length) this[a].setAttribute(e, t);
                        else
                            for (var n in e) this[a][n] = e[n], this[a].setAttribute(n, e[n]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    var i;
                    if (void 0 !== t) {
                        for (var a = 0; a < this.length; a += 1)(i = this[a]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        i.webkitTransform = e, i.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        i.webkitTransitionDuration = e, i.transitionDuration = e
                    }
                    return this
                },
                on: function() {
                    for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                    var n = t[0],
                        r = t[1],
                        s = t[2],
                        o = t[3];

                    function l(e) {
                        var t = e.target;
                        if (t) {
                            var i = e.target.dom7EventData || [];
                            if (i.indexOf(e) < 0 && i.unshift(e), a(t).is(r)) s.apply(t, i);
                            else
                                for (var n = a(t).parents(), o = 0; o < n.length; o += 1) a(n[o]).is(r) && s.apply(n[o], i)
                        }
                    }

                    function d(e) {
                        var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
                    }
                    "function" == typeof t[1] && (n = (e = t)[0], s = e[1], o = e[2], r = void 0), o = o || !1;
                    for (var c, u = n.split(" "), p = 0; p < this.length; p += 1) {
                        var h = this[p];
                        if (r)
                            for (c = 0; c < u.length; c += 1) {
                                var f = u[c];
                                h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
                                    listener: s,
                                    proxyListener: l
                                }), h.addEventListener(f, l, o)
                            } else
                                for (c = 0; c < u.length; c += 1) {
                                    var v = u[c];
                                    h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[v] || (h.dom7Listeners[v] = []), h.dom7Listeners[v].push({
                                        listener: s,
                                        proxyListener: d
                                    }), h.addEventListener(v, d, o)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                    var a = t[0],
                        n = t[1],
                        r = t[2],
                        s = t[3];
                    "function" == typeof t[1] && (a = (e = t)[0], r = e[1], s = e[2], n = void 0), s = s || !1;
                    for (var o = a.split(" "), l = 0; l < o.length; l += 1)
                        for (var d = o[l], c = 0; c < this.length; c += 1) {
                            var u = this[c],
                                p = void 0;
                            if (!n && u.dom7Listeners ? p = u.dom7Listeners[d] : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length)
                                for (var h = p.length - 1; 0 <= h; h -= 1) {
                                    var f = p[h];
                                    r && f.listener === r || r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (u.removeEventListener(d, f.proxyListener, s), p.splice(h, 1)) : r || (u.removeEventListener(d, f.proxyListener, s), p.splice(h, 1))
                                }
                        }
                    return this
                },
                trigger: function() {
                    for (var i = [], a = arguments.length; a--;) i[a] = arguments[a];
                    for (var n = i[0].split(" "), r = i[1], s = 0; s < n.length; s += 1)
                        for (var o = n[s], l = 0; l < this.length; l += 1) {
                            var d = this[l],
                                c = void 0;
                            try {
                                c = new t.CustomEvent(o, {
                                    detail: r,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (i) {
                                (c = e.createEvent("Event")).initEvent(o, !0, !0), c.detail = r
                            }
                            d.dom7EventData = i.filter((function(e, t) {
                                return 0 < t
                            })), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
                        }
                    return this
                },
                transitionEnd: function(e) {
                    var t, i = ["webkitTransitionEnd", "transitionend"],
                        a = this;

                    function n(r) {
                        if (r.target === this)
                            for (e.call(this, r), t = 0; t < i.length; t += 1) a.off(i[t], n)
                    }
                    if (e)
                        for (t = 0; t < i.length; t += 1) a.on(i[t], n);
                    return this
                },
                outerWidth: function(e) {
                    if (0 < this.length) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (0 < this.length) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (0 < this.length) {
                        var i = this[0],
                            a = i.getBoundingClientRect(),
                            n = e.body,
                            r = i.clientTop || n.clientTop || 0,
                            s = i.clientLeft || n.clientLeft || 0,
                            o = i === t ? t.scrollY : i.scrollTop,
                            l = i === t ? t.scrollX : i.scrollLeft;
                        return {
                            top: a.top + o - r,
                            left: a.left + l - s
                        }
                    }
                    return null
                },
                css: function(e, i) {
                    var a;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (a = 0; a < this.length; a += 1)
                                for (var n in e) this[a].style[n] = e[n];
                            return this
                        }
                        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 !== arguments.length || "string" != typeof e) return this;
                    for (a = 0; a < this.length; a += 1) this[a].style[e] = i;
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (var t = 0; t < this.length; t += 1)
                        if (!1 === e.call(this[t], t, this[t])) return this;
                    return this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(n) {
                    var r, s, o = this[0];
                    if (!o || void 0 === n) return !1;
                    if ("string" == typeof n) {
                        if (o.matches) return o.matches(n);
                        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(n);
                        if (o.msMatchesSelector) return o.msMatchesSelector(n);
                        for (r = a(n), s = 0; s < r.length; s += 1)
                            if (r[s] === o) return !0;
                        return !1
                    }
                    if (n === e) return o === e;
                    if (n === t) return o === t;
                    if (n.nodeType || n instanceof i) {
                        for (r = n.nodeType ? [n] : n, s = 0; s < r.length; s += 1)
                            if (r[s] === o) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    var e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    var t, a = this.length;
                    return new i(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
                },
                append: function() {
                    for (var t, a = [], n = arguments.length; n--;) a[n] = arguments[n];
                    for (var r = 0; r < a.length; r += 1) {
                        t = a[r];
                        for (var s = 0; s < this.length; s += 1)
                            if ("string" == typeof t) {
                                var o = e.createElement("div");
                                for (o.innerHTML = t; o.firstChild;) this[s].appendChild(o.firstChild)
                            } else if (t instanceof i)
                            for (var l = 0; l < t.length; l += 1) this[s].appendChild(t[l]);
                        else this[s].appendChild(t)
                    }
                    return this
                },
                prepend: function(t) {
                    var a, n;
                    for (a = 0; a < this.length; a += 1)
                        if ("string" == typeof t) {
                            var r = e.createElement("div");
                            for (r.innerHTML = t, n = r.childNodes.length - 1; 0 <= n; n -= 1) this[a].insertBefore(r.childNodes[n], this[a].childNodes[0])
                        } else if (t instanceof i)
                        for (n = 0; n < t.length; n += 1) this[a].insertBefore(t[n], this[a].childNodes[0]);
                    else this[a].insertBefore(t, this[a].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return 0 < this.length ? e ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
                },
                nextAll: function(e) {
                    var t = [],
                        n = this[0];
                    if (!n) return new i([]);
                    for (; n.nextElementSibling;) {
                        var r = n.nextElementSibling;
                        e ? a(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new i(t)
                },
                prev: function(e) {
                    if (0 < this.length) {
                        var t = this[0];
                        return e ? t.previousElementSibling && a(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
                    }
                    return new i([])
                },
                prevAll: function(e) {
                    var t = [],
                        n = this[0];
                    if (!n) return new i([]);
                    for (; n.previousElementSibling;) {
                        var r = n.previousElementSibling;
                        e ? a(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new i(t)
                },
                parent: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return a(n(t))
                },
                parents: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var r = this[i].parentNode; r;) e ? a(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
                    return a(n(t))
                },
                closest: function(e) {
                    var t = this;
                    return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    for (var t = [], a = 0; a < this.length; a += 1)
                        for (var n = this[a].querySelectorAll(e), r = 0; r < n.length; r += 1) t.push(n[r]);
                    return new i(t)
                },
                children: function(e) {
                    for (var t = [], r = 0; r < this.length; r += 1)
                        for (var s = this[r].childNodes, o = 0; o < s.length; o += 1) e ? 1 === s[o].nodeType && a(s[o]).is(e) && t.push(s[o]) : 1 === s[o].nodeType && t.push(s[o]);
                    return new i(n(t))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    var i, n;
                    for (i = 0; i < e.length; i += 1) {
                        var r = a(e[i]);
                        for (n = 0; n < r.length; n += 1) this[this.length] = r[n], this.length += 1
                    }
                    return this
                },
                styles: function() {
                    return this[0] ? t.getComputedStyle(this[0], null) : {}
                }
            };

            function o(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
                    t.on(e, t.params.on[e])
                }))
            }
            Object.keys(s).forEach((function(e) {
                a.fn[e] = a.fn[e] || s[e]
            }));
            var l, d, c, u, p = {
                    deleteProps: function(e) {
                        var t = e;
                        Object.keys(t).forEach((function(e) {
                            try {
                                t[e] = null
                            } catch (e) {}
                            try {
                                delete t[e]
                            } catch (e) {}
                        }))
                    },
                    nextTick: function(e, t) {
                        return void 0 === t && (t = 0), setTimeout(e, t)
                    },
                    now: function() {
                        return Date.now()
                    },
                    getTranslate: function(e, i) {
                        var a, n, r;
                        void 0 === i && (i = "x");
                        var s = t.getComputedStyle(e, null);
                        return t.WebKitCSSMatrix ? (6 < (n = s.transform || s.webkitTransform).split(",").length && (n = n.split(", ").map((function(e) {
                            return e.replace(",", ".")
                        })).join(", ")), r = new t.WebKitCSSMatrix("none" === n ? "" : n)) : a = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (n = t.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === i && (n = t.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), n || 0
                    },
                    parseUrlQuery: function(e) {
                        var i, a, n, r, s = {},
                            o = e || t.location.href;
                        if ("string" == typeof o && o.length)
                            for (r = (a = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                                    return "" !== e
                                }))).length, i = 0; i < r; i += 1) n = a[i].replace(/#\S+/g, "").split("="), s[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                        return s
                    },
                    isObject: function(e) {
                        return "object" == r(e) && null !== e && e.constructor && e.constructor === Object
                    },
                    extend: function() {
                        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                        for (var i = Object(e[0]), a = 1; a < e.length; a += 1) {
                            var n = e[a];
                            if (null != n)
                                for (var r = Object.keys(Object(n)), s = 0, o = r.length; s < o; s += 1) {
                                    var l = r[s],
                                        d = Object.getOwnPropertyDescriptor(n, l);
                                    void 0 !== d && d.enumerable && (p.isObject(i[l]) && p.isObject(n[l]) ? p.extend(i[l], n[l]) : !p.isObject(i[l]) && p.isObject(n[l]) ? (i[l] = {}, p.extend(i[l], n[l])) : i[l] = n[l])
                                }
                        }
                        return i
                    }
                },
                h = (c = e.createElement("div"), {
                    touch: t.Modernizr && !0 === t.Modernizr.touch || !!(0 < t.navigator.maxTouchPoints || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                    pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints" in t.navigator && 0 < t.navigator.maxTouchPoints),
                    prefixedPointerEvents: !!t.navigator.msPointerEnabled,
                    transition: (d = c.style, "transition" in d || "webkitTransition" in d || "MozTransition" in d),
                    transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (l = c.style, "webkitPerspective" in l || "MozPerspective" in l || "OPerspective" in l || "MsPerspective" in l || "perspective" in l),
                    flexbox: function() {
                        for (var e = c.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                            if (t[i] in e) return !0;
                        return !1
                    }(),
                    observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                    passiveListener: function() {
                        var e = !1;
                        try {
                            var i = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e = !0
                                }
                            });
                            t.addEventListener("testPassiveListener", null, i)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: "ongesturestart" in t
                }),
                f = {
                    isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!t.navigator.userAgent.match(/Edge/g),
                    isSafari: (u = t.navigator.userAgent.toLowerCase(), 0 <= u.indexOf("safari") && u.indexOf("chrome") < 0 && u.indexOf("android") < 0),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                },
                v = {
                    components: {
                        configurable: !0
                    }
                };
            o.prototype.on = function(e, t, i) {
                var a = this;
                if ("function" != typeof t) return a;
                var n = i ? "unshift" : "push";
                return e.split(" ").forEach((function(e) {
                    a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][n](t)
                })), a
            }, o.prototype.once = function(e, t, i) {
                var a = this;
                if ("function" != typeof t) return a;

                function n() {
                    for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
                    t.apply(a, i), a.off(e, n), n.f7proxy && delete n.f7proxy
                }
                return n.f7proxy = t, a.on(e, n, i)
            }, o.prototype.off = function(e, t) {
                var i = this;
                return i.eventsListeners && e.split(" ").forEach((function(e) {
                    void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(a, n) {
                        (a === t || a.f7proxy && a.f7proxy === t) && i.eventsListeners[e].splice(n, 1)
                    }))
                })), i
            }, o.prototype.emit = function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, a, n, r = this;
                return r.eventsListeners && (n = "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], a = e.slice(1, e.length), r) : (i = e[0].events, a = e[0].data, e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach((function(e) {
                    if (r.eventsListeners && r.eventsListeners[e]) {
                        var t = [];
                        r.eventsListeners[e].forEach((function(e) {
                            t.push(e)
                        })), t.forEach((function(e) {
                            e.apply(n, a)
                        }))
                    }
                }))), r
            }, o.prototype.useModulesParams = function(e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var a = t.modules[i];
                    a.params && p.extend(e, a.params)
                }))
            }, o.prototype.useModules = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var a = t.modules[i],
                        n = e[i] || {};
                    a.instance && Object.keys(a.instance).forEach((function(e) {
                        var i = a.instance[e];
                        t[e] = "function" == typeof i ? i.bind(t) : i
                    })), a.on && t.on && Object.keys(a.on).forEach((function(e) {
                        t.on(e, a.on[e])
                    })), a.create && a.create.bind(t)(n)
                }))
            }, v.components.set = function(e) {
                this.use && this.use(e)
            }, o.installModule = function(e) {
                for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
                var a = this;
                a.prototype.modules || (a.prototype.modules = {});
                var n = e.name || Object.keys(a.prototype.modules).length + "_" + p.now();
                return (a.prototype.modules[n] = e).proto && Object.keys(e.proto).forEach((function(t) {
                    a.prototype[t] = e.proto[t]
                })), e.static && Object.keys(e.static).forEach((function(t) {
                    a[t] = e.static[t]
                })), e.install && e.install.apply(a, t), a
            }, o.use = function(e) {
                for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
                var a = this;
                return Array.isArray(e) ? (e.forEach((function(e) {
                    return a.installModule(e)
                })), a) : a.installModule.apply(a, [e].concat(t))
            }, Object.defineProperties(o, v);
            var m = {
                    updateSize: function() {
                        var e, t, i = this,
                            a = i.$el;
                        e = void 0 !== i.params.width ? i.params.width : a[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : a[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(a.css("padding-left"), 10) - parseInt(a.css("padding-right"), 10), t = t - parseInt(a.css("padding-top"), 10) - parseInt(a.css("padding-bottom"), 10), p.extend(i, {
                            width: e,
                            height: t,
                            size: i.isHorizontal() ? e : t
                        }))
                    },
                    updateSlides: function() {
                        var e = this,
                            i = e.params,
                            a = e.$wrapperEl,
                            n = e.size,
                            r = e.rtlTranslate,
                            s = e.wrongRTL,
                            o = e.virtual && i.virtual.enabled,
                            l = o ? e.virtual.slides.length : e.slides.length,
                            d = a.children("." + e.params.slideClass),
                            c = o ? e.virtual.slides.length : d.length,
                            u = [],
                            v = [],
                            m = [],
                            g = i.slidesOffsetBefore;
                        "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
                        var b = i.slidesOffsetAfter;
                        "function" == typeof b && (b = i.slidesOffsetAfter.call(e));
                        var y = e.snapGrid.length,
                            w = e.snapGrid.length,
                            x = i.spaceBetween,
                            T = -g,
                            E = 0,
                            S = 0;
                        if (void 0 !== n) {
                            var C, M;
                            "string" == typeof x && 0 <= x.indexOf("%") && (x = parseFloat(x.replace("%", "")) / 100 * n), e.virtualSize = -x, r ? d.css({
                                marginLeft: "",
                                marginTop: ""
                            }) : d.css({
                                marginRight: "",
                                marginBottom: ""
                            }), 1 < i.slidesPerColumn && (C = Math.floor(c / i.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (C = Math.max(C, i.slidesPerView * i.slidesPerColumn)));
                            for (var P, k = i.slidesPerColumn, z = C / k, L = Math.floor(c / i.slidesPerColumn), I = 0; I < c; I += 1) {
                                M = 0;
                                var O = d.eq(I);
                                if (1 < i.slidesPerColumn) {
                                    var $ = void 0,
                                        D = void 0,
                                        A = void 0;
                                    if ("column" === i.slidesPerColumnFill || "row" === i.slidesPerColumnFill && 1 < i.slidesPerGroup) {
                                        if ("column" === i.slidesPerColumnFill) A = I - (D = Math.floor(I / k)) * k, (L < D || D === L && A === k - 1) && k <= (A += 1) && (A = 0, D += 1);
                                        else {
                                            var N = Math.floor(I / i.slidesPerGroup);
                                            D = I - (A = Math.floor(I / i.slidesPerView) - N * i.slidesPerColumn) * i.slidesPerView - N * i.slidesPerView
                                        }
                                        $ = D + A * C / k, O.css({
                                            "-webkit-box-ordinal-group": $,
                                            "-moz-box-ordinal-group": $,
                                            "-ms-flex-order": $,
                                            "-webkit-order": $,
                                            order: $
                                        })
                                    } else D = I - (A = Math.floor(I / z)) * z;
                                    O.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== A && i.spaceBetween && i.spaceBetween + "px").attr("data-swiper-column", D).attr("data-swiper-row", A)
                                }
                                if ("none" !== O.css("display")) {
                                    if ("auto" === i.slidesPerView) {
                                        var B = t.getComputedStyle(O[0], null),
                                            j = O[0].style.transform,
                                            R = O[0].style.webkitTransform;
                                        if (j && (O[0].style.transform = "none"), R && (O[0].style.webkitTransform = "none"), i.roundLengths) M = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                                        else if (e.isHorizontal()) {
                                            var H = parseFloat(B.getPropertyValue("width")),
                                                G = parseFloat(B.getPropertyValue("padding-left")),
                                                q = parseFloat(B.getPropertyValue("padding-right")),
                                                F = parseFloat(B.getPropertyValue("margin-left")),
                                                V = parseFloat(B.getPropertyValue("margin-right")),
                                                X = B.getPropertyValue("box-sizing");
                                            M = X && "border-box" === X && !f.isIE ? H + F + V : H + G + q + F + V
                                        } else {
                                            var Y = parseFloat(B.getPropertyValue("height")),
                                                _ = parseFloat(B.getPropertyValue("padding-top")),
                                                W = parseFloat(B.getPropertyValue("padding-bottom")),
                                                U = parseFloat(B.getPropertyValue("margin-top")),
                                                K = parseFloat(B.getPropertyValue("margin-bottom")),
                                                J = B.getPropertyValue("box-sizing");
                                            M = J && "border-box" === J && !f.isIE ? Y + U + K : Y + _ + W + U + K
                                        }
                                        j && (O[0].style.transform = j), R && (O[0].style.webkitTransform = R), i.roundLengths && (M = Math.floor(M))
                                    } else M = (n - (i.slidesPerView - 1) * x) / i.slidesPerView, i.roundLengths && (M = Math.floor(M)), d[I] && (e.isHorizontal() ? d[I].style.width = M + "px" : d[I].style.height = M + "px");
                                    d[I] && (d[I].swiperSlideSize = M), m.push(M), i.centeredSlides ? (T = T + M / 2 + E / 2 + x, 0 === E && 0 !== I && (T = T - n / 2 - x), 0 === I && (T = T - n / 2 - x), Math.abs(T) < .001 && (T = 0), i.roundLengths && (T = Math.floor(T)), S % i.slidesPerGroup == 0 && u.push(T), v.push(T)) : (i.roundLengths && (T = Math.floor(T)), S % i.slidesPerGroup == 0 && u.push(T), v.push(T), T = T + M + x), e.virtualSize += M + x, E = M, S += 1
                                }
                            }
                            if (e.virtualSize = Math.max(e.virtualSize, n) + b, r && s && ("slide" === i.effect || "coverflow" === i.effect) && a.css({
                                    width: e.virtualSize + i.spaceBetween + "px"
                                }), h.flexbox && !i.setWrapperSize || (e.isHorizontal() ? a.css({
                                    width: e.virtualSize + i.spaceBetween + "px"
                                }) : a.css({
                                    height: e.virtualSize + i.spaceBetween + "px"
                                })), 1 < i.slidesPerColumn && (e.virtualSize = (M + i.spaceBetween) * C, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, e.isHorizontal() ? a.css({
                                    width: e.virtualSize + i.spaceBetween + "px"
                                }) : a.css({
                                    height: e.virtualSize + i.spaceBetween + "px"
                                }), i.centeredSlides)) {
                                P = [];
                                for (var Z = 0; Z < u.length; Z += 1) {
                                    var Q = u[Z];
                                    i.roundLengths && (Q = Math.floor(Q)), u[Z] < e.virtualSize + u[0] && P.push(Q)
                                }
                                u = P
                            }
                            if (!i.centeredSlides) {
                                P = [];
                                for (var ee = 0; ee < u.length; ee += 1) {
                                    var te = u[ee];
                                    i.roundLengths && (te = Math.floor(te)), u[ee] <= e.virtualSize - n && P.push(te)
                                }
                                u = P, 1 < Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) && u.push(e.virtualSize - n)
                            }
                            if (0 === u.length && (u = [0]), 0 !== i.spaceBetween && (e.isHorizontal() ? r ? d.css({
                                    marginLeft: x + "px"
                                }) : d.css({
                                    marginRight: x + "px"
                                }) : d.css({
                                    marginBottom: x + "px"
                                })), i.centerInsufficientSlides) {
                                var ie = 0;
                                if (m.forEach((function(e) {
                                        ie += e + (i.spaceBetween ? i.spaceBetween : 0)
                                    })), (ie -= i.spaceBetween) < n) {
                                    var ae = (n - ie) / 2;
                                    u.forEach((function(e, t) {
                                        u[t] = e - ae
                                    })), v.forEach((function(e, t) {
                                        v[t] = e + ae
                                    }))
                                }
                            }
                            p.extend(e, {
                                slides: d,
                                snapGrid: u,
                                slidesGrid: v,
                                slidesSizesGrid: m
                            }), c !== l && e.emit("slidesLengthChange"), u.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), v.length !== w && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
                        }
                    },
                    updateAutoHeight: function(e) {
                        var t, i = this,
                            a = [],
                            n = 0;
                        if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                var r = i.activeIndex + t;
                                if (r > i.slides.length) break;
                                a.push(i.slides.eq(r)[0])
                            } else a.push(i.slides.eq(i.activeIndex)[0]);
                        for (t = 0; t < a.length; t += 1)
                            if (void 0 !== a[t]) {
                                var s = a[t].offsetHeight;
                                n = n < s ? s : n
                            }
                        n && i.$wrapperEl.css("height", n + "px")
                    },
                    updateSlidesOffset: function() {
                        for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                    },
                    updateSlidesProgress: function(e) {
                        var t = this,
                            i = t.params;
                        void 0 === e && (e = t && t.translate || 0);
                        var n = t.slides,
                            r = t.rtlTranslate;
                        if (0 !== n.length) {
                            void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                            var s = -e;
                            r && (s = e), n.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (var o = 0; o < n.length; o += 1) {
                                var l = n[o],
                                    d = (s + (i.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                                if (i.watchSlidesVisibility) {
                                    var c = -(s - l.swiperSlideOffset),
                                        u = c + t.slidesSizesGrid[o];
                                    (0 <= c && c < t.size - 1 || 1 < u && u <= t.size || c <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), n.eq(o).addClass(i.slideVisibleClass))
                                }
                                l.progress = r ? -d : d
                            }
                            t.visibleSlides = a(t.visibleSlides)
                        }
                    },
                    updateProgress: function(e) {
                        var t = this,
                            i = t.params;
                        if (void 0 === e) {
                            var a = t.rtlTranslate ? -1 : 1;
                            e = t && t.translate && t.translate * a || 0
                        }
                        var n = t.maxTranslate() - t.minTranslate(),
                            r = t.progress,
                            s = t.isBeginning,
                            o = t.isEnd,
                            l = s,
                            d = o;
                        o = 0 == n ? s = !(r = 0) : (s = (r = (e - t.minTranslate()) / n) <= 0, 1 <= r), p.extend(t, {
                            progress: r,
                            isBeginning: s,
                            isEnd: o
                        }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !s || d && !o) && t.emit("fromEdge"), t.emit("progress", r)
                    },
                    updateSlidesClasses: function() {
                        var e, t = this,
                            i = t.slides,
                            a = t.params,
                            n = t.$wrapperEl,
                            r = t.activeIndex,
                            s = t.realIndex,
                            o = t.virtual && a.virtual.enabled;
                        i.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + r + '"]') : i.eq(r)).addClass(a.slideActiveClass), a.loop && (e.hasClass(a.slideDuplicateClass) ? n.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(a.slideDuplicateActiveClass) : n.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(a.slideDuplicateActiveClass));
                        var l = e.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
                        a.loop && 0 === l.length && (l = i.eq(0)).addClass(a.slideNextClass);
                        var d = e.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
                        a.loop && 0 === d.length && (d = i.eq(-1)).addClass(a.slidePrevClass), a.loop && (l.hasClass(a.slideDuplicateClass) ? n.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : n.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? n.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : n.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
                    },
                    updateActiveIndex: function(e) {
                        var t, i = this,
                            a = i.rtlTranslate ? i.translate : -i.translate,
                            n = i.slidesGrid,
                            r = i.snapGrid,
                            s = i.params,
                            o = i.activeIndex,
                            l = i.realIndex,
                            d = i.snapIndex,
                            c = e;
                        if (void 0 === c) {
                            for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? a >= n[u] && a < n[u + 1] - (n[u + 1] - n[u]) / 2 ? c = u : a >= n[u] && a < n[u + 1] && (c = u + 1) : a >= n[u] && (c = u);
                            s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                        }
                        if ((t = 0 <= r.indexOf(a) ? r.indexOf(a) : Math.floor(c / s.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== o) {
                            var h = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                            p.extend(i, {
                                snapIndex: t,
                                realIndex: h,
                                previousIndex: o,
                                activeIndex: c
                            }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== h && i.emit("realIndexChange"), (i.initialized || i.runCallbacksOnInit) && i.emit("slideChange")
                        } else t !== d && (i.snapIndex = t, i.emit("snapIndexChange"))
                    },
                    updateClickedSlide: function(e) {
                        var t = this,
                            i = t.params,
                            n = a(e.target).closest("." + i.slideClass)[0],
                            r = !1;
                        if (n)
                            for (var s = 0; s < t.slides.length; s += 1) t.slides[s] === n && (r = !0);
                        if (!n || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                        t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a(n).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                    }
                },
                g = {
                    getTranslate: function(e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        var t = this.params,
                            i = this.rtlTranslate,
                            a = this.translate,
                            n = this.$wrapperEl;
                        if (t.virtualTranslate) return i ? -a : a;
                        var r = p.getTranslate(n[0], e);
                        return i && (r = -r), r || 0
                    },
                    setTranslate: function(e, t) {
                        var i = this,
                            a = i.rtlTranslate,
                            n = i.params,
                            r = i.$wrapperEl,
                            s = i.progress,
                            o = 0,
                            l = 0;
                        i.isHorizontal() ? o = a ? -e : e : l = e, n.roundLengths && (o = Math.floor(o), l = Math.floor(l)), n.virtualTranslate || (h.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;
                        var d = i.maxTranslate() - i.minTranslate();
                        (0 == d ? 0 : (e - i.minTranslate()) / d) !== s && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0]
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1]
                    }
                },
                b = {
                    slideTo: function(e, t, i, a) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                        var n = this,
                            r = e;
                        r < 0 && (r = 0);
                        var s = n.params,
                            o = n.snapGrid,
                            l = n.slidesGrid,
                            d = n.previousIndex,
                            c = n.activeIndex,
                            u = n.rtlTranslate;
                        if (n.animating && s.preventInteractionOnTransition) return !1;
                        var p = Math.floor(r / s.slidesPerGroup);
                        p >= o.length && (p = o.length - 1), (c || s.initialSlide || 0) === (d || 0) && i && n.emit("beforeSlideChangeStart");
                        var f, v = -o[p];
                        if (n.updateProgress(v), s.normalizeSlideIndex)
                            for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (r = m);
                        if (n.initialized && r !== c) {
                            if (!n.allowSlideNext && v < n.translate && v < n.minTranslate()) return !1;
                            if (!n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (c || 0) !== r) return !1
                        }
                        return f = c < r ? "next" : r < c ? "prev" : "reset", u && -v === n.translate || !u && v === n.translate ? (n.updateActiveIndex(r), s.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== s.effect && n.setTranslate(v), "reset" !== f && (n.transitionStart(i, f), n.transitionEnd(i, f)), !1) : (0 !== t && h.transition ? (n.setTransition(t), n.setTranslate(v), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, a), n.transitionStart(i, f), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                            n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, f))
                        }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0), n.setTranslate(v), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, a), n.transitionStart(i, f), n.transitionEnd(i, f)), !0)
                    },
                    slideToLoop: function(e, t, i, a) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                        var n = e;
                        return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, a)
                    },
                    slideNext: function(e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        var a = this,
                            n = a.params,
                            r = a.animating;
                        return n.loop ? !r && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, a.slideTo(a.activeIndex + n.slidesPerGroup, e, t, i)) : a.slideTo(a.activeIndex + n.slidesPerGroup, e, t, i)
                    },
                    slidePrev: function(e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        var a = this,
                            n = a.params,
                            r = a.animating,
                            s = a.snapGrid,
                            o = a.slidesGrid,
                            l = a.rtlTranslate;
                        if (n.loop) {
                            if (r) return !1;
                            a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                        }

                        function d(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                        }
                        var c, u = d(l ? a.translate : -a.translate),
                            p = s.map((function(e) {
                                return d(e)
                            })),
                            h = (o.map((function(e) {
                                return d(e)
                            })), s[p.indexOf(u)], s[p.indexOf(u) - 1]);
                        return void 0 !== h && (c = o.indexOf(h)) < 0 && (c = a.activeIndex - 1), a.slideTo(c, e, t, i)
                    },
                    slideReset: function(e, t, i) {
                        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                    },
                    slideToClosest: function(e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        var a = this,
                            n = a.activeIndex,
                            r = Math.floor(n / a.params.slidesPerGroup);
                        if (r < a.snapGrid.length - 1) {
                            var s = a.rtlTranslate ? a.translate : -a.translate,
                                o = a.snapGrid[r];
                            (a.snapGrid[r + 1] - o) / 2 < s - o && (n = a.params.slidesPerGroup)
                        }
                        return a.slideTo(n, e, t, i)
                    },
                    slideToClickedSlide: function() {
                        var e, t = this,
                            i = t.params,
                            n = t.$wrapperEl,
                            r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                            s = t.clickedIndex;
                        if (i.loop) {
                            if (t.animating) return;
                            e = parseInt(a(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < t.loopedSlides - r / 2 || s > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), s = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), p.nextTick((function() {
                                t.slideTo(s)
                            }))) : t.slideTo(s) : s > t.slides.length - r ? (t.loopFix(), s = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), p.nextTick((function() {
                                t.slideTo(s)
                            }))) : t.slideTo(s)
                        } else t.slideTo(s)
                    }
                },
                y = {
                    loopCreate: function() {
                        var t = this,
                            i = t.params,
                            n = t.$wrapperEl;
                        n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                        var r = n.children("." + i.slideClass);
                        if (i.loopFillGroupWithBlank) {
                            var s = i.slidesPerGroup - r.length % i.slidesPerGroup;
                            if (s !== i.slidesPerGroup) {
                                for (var o = 0; o < s; o += 1) {
                                    var l = a(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                    n.append(l)
                                }
                                r = n.children("." + i.slideClass)
                            }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
                        var d = [],
                            c = [];
                        r.each((function(e, i) {
                            var n = a(i);
                            e < t.loopedSlides && c.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), n.attr("data-swiper-slide-index", e)
                        }));
                        for (var u = 0; u < c.length; u += 1) n.append(a(c[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                        for (var p = d.length - 1; 0 <= p; p -= 1) n.prepend(a(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
                    },
                    loopFix: function() {
                        var e, t = this,
                            i = t.params,
                            a = t.activeIndex,
                            n = t.slides,
                            r = t.loopedSlides,
                            s = t.allowSlidePrev,
                            o = t.allowSlideNext,
                            l = t.snapGrid,
                            d = t.rtlTranslate;
                        t.allowSlidePrev = !0, t.allowSlideNext = !0;
                        var c = -l[a] - t.getTranslate();
                        a < r ? (e = n.length - 3 * r + a, e += r, t.slideTo(e, 0, !1, !0) && 0 != c && t.setTranslate((d ? -t.translate : t.translate) - c)) : ("auto" === i.slidesPerView && 2 * r <= a || a >= n.length - r) && (e = -n.length + a + r, e += r, t.slideTo(e, 0, !1, !0) && 0 != c && t.setTranslate((d ? -t.translate : t.translate) - c)), t.allowSlidePrev = s, t.allowSlideNext = o
                    },
                    loopDestroy: function() {
                        var e = this.$wrapperEl,
                            t = this.params,
                            i = this.slides;
                        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                    }
                },
                w = {
                    setGrabCursor: function(e) {
                        if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                            var t = this.el;
                            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                        }
                    },
                    unsetGrabCursor: function() {
                        h.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
                    }
                },
                x = {
                    appendSlide: function(e) {
                        var t = this,
                            i = t.$wrapperEl,
                            a = t.params;
                        if (a.loop && t.loopDestroy(), "object" == r(e) && "length" in e)
                            for (var n = 0; n < e.length; n += 1) e[n] && i.append(e[n]);
                        else i.append(e);
                        a.loop && t.loopCreate(), a.observer && h.observer || t.update()
                    },
                    prependSlide: function(e) {
                        var t = this,
                            i = t.params,
                            a = t.$wrapperEl,
                            n = t.activeIndex;
                        i.loop && t.loopDestroy();
                        var s = n + 1;
                        if ("object" == r(e) && "length" in e) {
                            for (var o = 0; o < e.length; o += 1) e[o] && a.prepend(e[o]);
                            s = n + e.length
                        } else a.prepend(e);
                        i.loop && t.loopCreate(), i.observer && h.observer || t.update(), t.slideTo(s, 0, !1)
                    },
                    addSlide: function(e, t) {
                        var i = this,
                            a = i.$wrapperEl,
                            n = i.params,
                            s = i.activeIndex;
                        n.loop && (s -= i.loopedSlides, i.loopDestroy(), i.slides = a.children("." + n.slideClass));
                        var o = i.slides.length;
                        if (e <= 0) i.prependSlide(t);
                        else if (o <= e) i.appendSlide(t);
                        else {
                            for (var l = e < s ? s + 1 : s, d = [], c = o - 1; e <= c; c -= 1) {
                                var u = i.slides.eq(c);
                                u.remove(), d.unshift(u)
                            }
                            if ("object" == r(t) && "length" in t) {
                                for (var p = 0; p < t.length; p += 1) t[p] && a.append(t[p]);
                                l = e < s ? s + t.length : s
                            } else a.append(t);
                            for (var f = 0; f < d.length; f += 1) a.append(d[f]);
                            n.loop && i.loopCreate(), n.observer && h.observer || i.update(), n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
                        }
                    },
                    removeSlide: function(e) {
                        var t = this,
                            i = t.params,
                            a = t.$wrapperEl,
                            n = t.activeIndex;
                        i.loop && (n -= t.loopedSlides, t.loopDestroy(), t.slides = a.children("." + i.slideClass));
                        var s, o = n;
                        if ("object" == r(e) && "length" in e) {
                            for (var l = 0; l < e.length; l += 1) s = e[l], t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1);
                            o = Math.max(o, 0)
                        } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1), o = Math.max(o, 0);
                        i.loop && t.loopCreate(), i.observer && h.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
                    },
                    removeAllSlides: function() {
                        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                        this.removeSlide(e)
                    }
                },
                T = function() {
                    var i = t.navigator.userAgent,
                        a = {
                            ios: !1,
                            android: !1,
                            androidChrome: !1,
                            desktop: !1,
                            windows: !1,
                            iphone: !1,
                            ipod: !1,
                            ipad: !1,
                            cordova: t.cordova || t.phonegap,
                            phonegap: t.cordova || t.phonegap
                        },
                        n = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                        r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                        s = i.match(/(iPad).*OS\s([\d_]+)/),
                        o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                        l = !s && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                    if (n && (a.os = "windows", a.osVersion = n[2], a.windows = !0), r && !n && (a.os = "android", a.osVersion = r[2], a.android = !0, a.androidChrome = 0 <= i.toLowerCase().indexOf("chrome")), (s || l || o) && (a.os = "ios", a.ios = !0), l && !o && (a.osVersion = l[2].replace(/_/g, "."), a.iphone = !0), s && (a.osVersion = s[2].replace(/_/g, "."), a.ipad = !0), o && (a.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, a.iphone = !0), a.ios && a.osVersion && 0 <= i.indexOf("Version/") && "10" === a.osVersion.split(".")[0] && (a.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), a.desktop = !(a.os || a.android || a.webView), a.webView = (l || s || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), a.os && "ios" === a.os) {
                        var d = a.osVersion.split("."),
                            c = e.querySelector('meta[name="viewport"]');
                        a.minimalUi = !a.webView && (o || l) && (1 * d[0] == 7 ? 1 <= 1 * d[1] : 7 < 1 * d[0]) && c && 0 <= c.getAttribute("content").indexOf("minimal-ui")
                    }
                    return a.pixelRatio = t.devicePixelRatio || 1, a
                }();

            function E() {
                var e = this,
                    t = e.params,
                    i = e.el;
                if (!i || 0 !== i.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var a = e.allowSlideNext,
                        n = e.allowSlidePrev,
                        r = e.snapGrid;
                    if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                        var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                    } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
                }
            }
            var S = !1;

            function C() {}
            var M = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    preventInteractionOnTransition: !1,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    breakpointsInverse: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !1,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: .85,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0
                },
                P = {
                    update: m,
                    translate: g,
                    transition: {
                        setTransition: function(e, t) {
                            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            var i = this,
                                a = i.activeIndex,
                                n = i.params,
                                r = i.previousIndex;
                            n.autoHeight && i.updateAutoHeight();
                            var s = t;
                            if (s = s || (r < a ? "next" : a < r ? "prev" : "reset"), i.emit("transitionStart"), e && a !== r) {
                                if ("reset" === s) return void i.emit("slideResetTransitionStart");
                                i.emit("slideChangeTransitionStart"), "next" === s ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                            }
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            var i = this,
                                a = i.activeIndex,
                                n = i.previousIndex;
                            i.animating = !1, i.setTransition(0);
                            var r = t;
                            if (r = r || (n < a ? "next" : a < n ? "prev" : "reset"), i.emit("transitionEnd"), e && a !== n) {
                                if ("reset" === r) return void i.emit("slideResetTransitionEnd");
                                i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                            }
                        }
                    },
                    slide: b,
                    loop: y,
                    grabCursor: w,
                    manipulation: x,
                    events: {
                        attachEvents: function() {
                            var i = this,
                                n = i.params,
                                r = i.touchEvents,
                                s = i.el,
                                o = i.wrapperEl;
                            i.onTouchStart = function(i) {
                                var n = this,
                                    r = n.touchEventsData,
                                    s = n.params,
                                    o = n.touches;
                                if (!n.animating || !s.preventInteractionOnTransition) {
                                    var l = i;
                                    if (l.originalEvent && (l = l.originalEvent), r.isTouchEvent = "touchstart" === l.type, (r.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!r.isTouchEvent && "button" in l && 0 < l.button || r.isTouched && r.isMoved))
                                        if (s.noSwiping && a(l.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) n.allowClick = !0;
                                        else if (!s.swipeHandler || a(l).closest(s.swipeHandler)[0]) {
                                        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                        var d = o.currentX,
                                            c = o.currentY,
                                            u = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                                            h = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                                        if (!u || !(d <= h || d >= t.screen.width - h)) {
                                            if (p.extend(r, {
                                                    isTouched: !0,
                                                    isMoved: !1,
                                                    allowTouchCallbacks: !0,
                                                    isScrolling: void 0,
                                                    startMoving: void 0
                                                }), o.startX = d, o.startY = c, r.touchStartTime = p.now(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, 0 < s.threshold && (r.allowThresholdMove = !1), "touchstart" !== l.type) {
                                                var f = !0;
                                                a(l.target).is(r.formElements) && (f = !1), e.activeElement && a(e.activeElement).is(r.formElements) && e.activeElement !== l.target && e.activeElement.blur();
                                                var v = f && n.allowTouchMove && s.touchStartPreventDefault;
                                                (s.touchStartForcePreventDefault || v) && l.preventDefault()
                                            }
                                            n.emit("touchStart", l)
                                        }
                                    }
                                }
                            }.bind(i), i.onTouchMove = function(t) {
                                var i = this,
                                    n = i.touchEventsData,
                                    r = i.params,
                                    s = i.touches,
                                    o = i.rtlTranslate,
                                    l = t;
                                if (l.originalEvent && (l = l.originalEvent), n.isTouched) {
                                    if (!n.isTouchEvent || "mousemove" !== l.type) {
                                        var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                                            c = "touchmove" === l.type ? d.pageX : l.pageX,
                                            u = "touchmove" === l.type ? d.pageY : l.pageY;
                                        if (l.preventedByNestedSwiper) return s.startX = c, void(s.startY = u);
                                        if (!i.allowTouchMove) return i.allowClick = !1, void(n.isTouched && (p.extend(s, {
                                            startX: c,
                                            startY: u,
                                            currentX: c,
                                            currentY: u
                                        }), n.touchStartTime = p.now()));
                                        if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                                            if (i.isVertical()) {
                                                if (u < s.startY && i.translate <= i.maxTranslate() || u > s.startY && i.translate >= i.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                                            } else if (c < s.startX && i.translate <= i.maxTranslate() || c > s.startX && i.translate >= i.minTranslate()) return;
                                        if (n.isTouchEvent && e.activeElement && l.target === e.activeElement && a(l.target).is(n.formElements)) return n.isMoved = !0, void(i.allowClick = !1);
                                        if (n.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                                            s.currentX = c, s.currentY = u;
                                            var h, f = s.currentX - s.startX,
                                                v = s.currentY - s.startY;
                                            if (!(i.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(v, 2)) < i.params.threshold))
                                                if (void 0 === n.isScrolling && (i.isHorizontal() && s.currentY === s.startY || i.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : 25 <= f * f + v * v && (h = 180 * Math.atan2(Math.abs(v), Math.abs(f)) / Math.PI, n.isScrolling = i.isHorizontal() ? h > r.touchAngle : 90 - h > r.touchAngle)), n.isScrolling && i.emit("touchMoveOpposite", l), void 0 === n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                                                else if (n.startMoving) {
                                                i.allowClick = !1, l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), n.isMoved || (r.loop && i.loopFix(), n.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), n.isMoved = !0;
                                                var m = i.isHorizontal() ? f : v;
                                                s.diff = m, m *= r.touchRatio, o && (m = -m), i.swipeDirection = 0 < m ? "prev" : "next", n.currentTranslate = m + n.startTranslate;
                                                var g = !0,
                                                    b = r.resistanceRatio;
                                                if (r.touchReleaseOnEdges && (b = 0), 0 < m && n.currentTranslate > i.minTranslate() ? (g = !1, r.resistance && (n.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + n.startTranslate + m, b))) : m < 0 && n.currentTranslate < i.maxTranslate() && (g = !1, r.resistance && (n.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - n.startTranslate - m, b))), g && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), 0 < r.threshold) {
                                                    if (!(Math.abs(m) > r.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                                                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                                }
                                                r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && (0 === n.velocities.length && n.velocities.push({
                                                    position: s[i.isHorizontal() ? "startX" : "startY"],
                                                    time: n.touchStartTime
                                                }), n.velocities.push({
                                                    position: s[i.isHorizontal() ? "currentX" : "currentY"],
                                                    time: p.now()
                                                })), i.updateProgress(n.currentTranslate), i.setTranslate(n.currentTranslate))
                                            }
                                        }
                                    }
                                } else n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", l)
                            }.bind(i), i.onTouchEnd = function(e) {
                                var t = this,
                                    i = t.touchEventsData,
                                    a = t.params,
                                    n = t.touches,
                                    r = t.rtlTranslate,
                                    s = t.$wrapperEl,
                                    o = t.slidesGrid,
                                    l = t.snapGrid,
                                    d = e;
                                if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && a.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                                a.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                                var c, u = p.now(),
                                    h = u - i.touchStartTime;
                                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), h < 300 && 300 < u - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = p.nextTick((function() {
                                        t && !t.destroyed && t.emit("click", d)
                                    }), 300)), h < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = p.now(), p.nextTick((function() {
                                        t.destroyed || (t.allowClick = !0)
                                    })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = a.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, a.freeMode) {
                                    if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                    if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                                    if (a.freeModeMomentum) {
                                        if (1 < i.velocities.length) {
                                            var f = i.velocities.pop(),
                                                v = i.velocities.pop(),
                                                m = f.position - v.position,
                                                g = f.time - v.time;
                                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < a.freeModeMinimumVelocity && (t.velocity = 0), (150 < g || 300 < p.now() - f.time) && (t.velocity = 0)
                                        } else t.velocity = 0;
                                        t.velocity *= a.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                        var b = 1e3 * a.freeModeMomentumRatio,
                                            y = t.velocity * b,
                                            w = t.translate + y;
                                        r && (w = -w);
                                        var x, T, E = !1,
                                            S = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
                                        if (w < t.maxTranslate()) a.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), a.loop && a.centeredSlides && (T = !0);
                                        else if (w > t.minTranslate()) a.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), a.loop && a.centeredSlides && (T = !0);
                                        else if (a.freeModeSticky) {
                                            for (var C, M = 0; M < l.length; M += 1)
                                                if (l[M] > -w) {
                                                    C = M;
                                                    break
                                                }
                                            w = -(w = Math.abs(l[C] - w) < Math.abs(l[C - 1] - w) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                                        }
                                        if (T && t.once("transitionEnd", (function() {
                                                t.loopFix()
                                            })), 0 !== t.velocity) b = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                                        else if (a.freeModeSticky) return void t.slideToClosest();
                                        a.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd((function() {
                                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(a.speed), t.setTranslate(x), s.transitionEnd((function() {
                                                t && !t.destroyed && t.transitionEnd()
                                            })))
                                        }))) : t.velocity ? (t.updateProgress(w), t.setTransition(b), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd((function() {
                                            t && !t.destroyed && t.transitionEnd()
                                        })))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                                    } else if (a.freeModeSticky) return void t.slideToClosest();
                                    (!a.freeModeMomentum || h >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                                } else {
                                    for (var P = 0, k = t.slidesSizesGrid[0], z = 0; z < o.length; z += a.slidesPerGroup) void 0 !== o[z + a.slidesPerGroup] ? c >= o[z] && c < o[z + a.slidesPerGroup] && (k = o[(P = z) + a.slidesPerGroup] - o[z]) : c >= o[z] && (P = z, k = o[o.length - 1] - o[o.length - 2]);
                                    var L = (c - o[P]) / k;
                                    if (h > a.longSwipesMs) {
                                        if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                                        "next" === t.swipeDirection && (L >= a.longSwipesRatio ? t.slideTo(P + a.slidesPerGroup) : t.slideTo(P)), "prev" === t.swipeDirection && (L > 1 - a.longSwipesRatio ? t.slideTo(P + a.slidesPerGroup) : t.slideTo(P))
                                    } else {
                                        if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                                        "next" === t.swipeDirection && t.slideTo(P + a.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(P)
                                    }
                                }
                            }.bind(i), i.onClick = function(e) {
                                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                            }.bind(i);
                            var l = "container" === n.touchEventsTarget ? s : o,
                                d = !!n.nested;
                            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                                if (h.touch) {
                                    var c = !("touchstart" !== r.start || !h.passiveListener || !n.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    l.addEventListener(r.start, i.onTouchStart, c), l.addEventListener(r.move, i.onTouchMove, h.passiveListener ? {
                                        passive: !1,
                                        capture: d
                                    } : d), l.addEventListener(r.end, i.onTouchEnd, c), S || (e.addEventListener("touchstart", C), S = !0)
                                }(n.simulateTouch && !T.ios && !T.android || n.simulateTouch && !h.touch && T.ios) && (l.addEventListener("mousedown", i.onTouchStart, !1), e.addEventListener("mousemove", i.onTouchMove, d), e.addEventListener("mouseup", i.onTouchEnd, !1))
                            } else l.addEventListener(r.start, i.onTouchStart, !1), e.addEventListener(r.move, i.onTouchMove, d), e.addEventListener(r.end, i.onTouchEnd, !1);
                            (n.preventClicks || n.preventClicksPropagation) && l.addEventListener("click", i.onClick, !0), i.on(T.ios || T.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0)
                        },
                        detachEvents: function() {
                            var t = this,
                                i = t.params,
                                a = t.touchEvents,
                                n = t.el,
                                r = t.wrapperEl,
                                s = "container" === i.touchEventsTarget ? n : r,
                                o = !!i.nested;
                            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                                if (h.touch) {
                                    var l = !("onTouchStart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    s.removeEventListener(a.start, t.onTouchStart, l), s.removeEventListener(a.move, t.onTouchMove, o), s.removeEventListener(a.end, t.onTouchEnd, l)
                                }(i.simulateTouch && !T.ios && !T.android || i.simulateTouch && !h.touch && T.ios) && (s.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, o), e.removeEventListener("mouseup", t.onTouchEnd, !1))
                            } else s.removeEventListener(a.start, t.onTouchStart, !1), e.removeEventListener(a.move, t.onTouchMove, o), e.removeEventListener(a.end, t.onTouchEnd, !1);
                            (i.preventClicks || i.preventClicksPropagation) && s.removeEventListener("click", t.onClick, !0), t.off(T.ios || T.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            var e = this,
                                t = e.activeIndex,
                                i = e.initialized,
                                a = e.loopedSlides;
                            void 0 === a && (a = 0);
                            var n = e.params,
                                r = n.breakpoints;
                            if (r && (!r || 0 !== Object.keys(r).length)) {
                                var s = e.getBreakpoint(r);
                                if (s && e.currentBreakpoint !== s) {
                                    var o = s in r ? r[s] : void 0;
                                    o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((function(e) {
                                        var t = o[e];
                                        void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                                    }));
                                    var l = o || e.originalParams,
                                        d = l.direction && l.direction !== n.direction,
                                        c = n.loop && (l.slidesPerView !== n.slidesPerView || d);
                                    d && i && e.changeDirection(), p.extend(e.params, l), p.extend(e, {
                                        allowTouchMove: e.params.allowTouchMove,
                                        allowSlideNext: e.params.allowSlideNext,
                                        allowSlidePrev: e.params.allowSlidePrev
                                    }), e.currentBreakpoint = s, c && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                                }
                            }
                        },
                        getBreakpoint: function(e) {
                            if (e) {
                                var i = !1,
                                    a = [];
                                Object.keys(e).forEach((function(e) {
                                    a.push(e)
                                })), a.sort((function(e, t) {
                                    return parseInt(e, 10) - parseInt(t, 10)
                                }));
                                for (var n = 0; n < a.length; n += 1) {
                                    var r = a[n];
                                    this.params.breakpointsInverse ? r <= t.innerWidth && (i = r) : r >= t.innerWidth && !i && (i = r)
                                }
                                return i || "max"
                            }
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            var e = this,
                                t = e.isLocked;
                            e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            var e = this.classNames,
                                t = this.params,
                                i = this.rtl,
                                a = this.$el,
                                n = [];
                            n.push("initialized"), n.push(t.direction), t.freeMode && n.push("free-mode"), h.flexbox || n.push("no-flexbox"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), 1 < t.slidesPerColumn && n.push("multirow"), T.android && n.push("android"), T.ios && n.push("ios"), (f.isIE || f.isEdge) && (h.pointerEvents || h.prefixedPointerEvents) && n.push("wp8-" + t.direction), n.forEach((function(i) {
                                e.push(t.containerModifierClass + i)
                            })), a.addClass(e.join(" "))
                        },
                        removeClasses: function() {
                            var e = this.$el,
                                t = this.classNames;
                            e.removeClass(t.join(" "))
                        }
                    },
                    images: {
                        loadImage: function(e, i, a, n, r, s) {
                            var o;

                            function l() {
                                s && s()
                            }
                            e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, n && (o.sizes = n), a && (o.srcset = a), i && (o.src = i)) : l()
                        },
                        preloadImages: function() {
                            var e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                                var a = e.imagesToLoad[i];
                                e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                k = {},
                z = function(e) {
                    function t() {
                        for (var i, n, s, o = [], l = arguments.length; l--;) o[l] = arguments[l];
                        s = (s = 1 === o.length && o[0].constructor && o[0].constructor === Object ? o[0] : (n = (i = o)[0], i[1])) || {}, s = p.extend({}, s), n && !s.el && (s.el = n), e.call(this, s), Object.keys(P).forEach((function(e) {
                            Object.keys(P[e]).forEach((function(i) {
                                t.prototype[i] || (t.prototype[i] = P[e][i])
                            }))
                        }));
                        var d = this;
                        void 0 === d.modules && (d.modules = {}), Object.keys(d.modules).forEach((function(e) {
                            var t = d.modules[e];
                            if (t.params) {
                                var i = Object.keys(t.params)[0],
                                    a = t.params[i];
                                if ("object" != r(a) || null === a) return;
                                if (!(i in s) || !("enabled" in a)) return;
                                !0 === s[i] && (s[i] = {
                                    enabled: !0
                                }), "object" != r(s[i]) || "enabled" in s[i] || (s[i].enabled = !0), s[i] || (s[i] = {
                                    enabled: !1
                                })
                            }
                        }));
                        var c = p.extend({}, M);
                        d.useModulesParams(c), d.params = p.extend({}, c, k, s), d.originalParams = p.extend({}, d.params), d.passedParams = p.extend({}, s);
                        var u = (d.$ = a)(d.params.el);
                        if (n = u[0]) {
                            if (1 < u.length) {
                                var f = [];
                                return u.each((function(e, i) {
                                    var a = p.extend({}, s, {
                                        el: i
                                    });
                                    f.push(new t(a))
                                })), f
                            }
                            n.swiper = d, u.data("swiper", d);
                            var v, m, g = u.children("." + d.params.wrapperClass);
                            return p.extend(d, {
                                $el: u,
                                el: n,
                                $wrapperEl: g,
                                wrapperEl: g[0],
                                classNames: [],
                                slides: a(),
                                slidesGrid: [],
                                snapGrid: [],
                                slidesSizesGrid: [],
                                isHorizontal: function() {
                                    return "horizontal" === d.params.direction
                                },
                                isVertical: function() {
                                    return "vertical" === d.params.direction
                                },
                                rtl: "rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction"),
                                rtlTranslate: "horizontal" === d.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction")),
                                wrongRTL: "-webkit-box" === g.css("display"),
                                activeIndex: 0,
                                realIndex: 0,
                                isBeginning: !0,
                                isEnd: !1,
                                translate: 0,
                                previousTranslate: 0,
                                progress: 0,
                                velocity: 0,
                                animating: !1,
                                allowSlideNext: d.params.allowSlideNext,
                                allowSlidePrev: d.params.allowSlidePrev,
                                touchEvents: (v = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), d.touchEventsTouch = {
                                    start: v[0],
                                    move: v[1],
                                    end: v[2]
                                }, d.touchEventsDesktop = {
                                    start: m[0],
                                    move: m[1],
                                    end: m[2]
                                }, h.touch || !d.params.simulateTouch ? d.touchEventsTouch : d.touchEventsDesktop),
                                touchEventsData: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    allowTouchCallbacks: void 0,
                                    touchStartTime: void 0,
                                    isScrolling: void 0,
                                    currentTranslate: void 0,
                                    startTranslate: void 0,
                                    allowThresholdMove: void 0,
                                    formElements: "input, select, option, textarea, button, video",
                                    lastClickTime: p.now(),
                                    clickTimeout: void 0,
                                    velocities: [],
                                    allowMomentumBounce: void 0,
                                    isTouchEvent: void 0,
                                    startMoving: void 0
                                },
                                allowClick: !0,
                                allowTouchMove: d.params.allowTouchMove,
                                touches: {
                                    startX: 0,
                                    startY: 0,
                                    currentX: 0,
                                    currentY: 0,
                                    diff: 0
                                },
                                imagesToLoad: [],
                                imagesLoaded: 0
                            }), d.useModules(), d.params.init && d.init(), d
                        }
                    }
                    e && (t.__proto__ = e);
                    var i = {
                        extendedDefaults: {
                            configurable: !0
                        },
                        defaults: {
                            configurable: !0
                        },
                        Class: {
                            configurable: !0
                        },
                        $: {
                            configurable: !0
                        }
                    };
                    return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function() {
                        var e = this,
                            t = e.params,
                            i = e.slides,
                            a = e.slidesGrid,
                            n = e.size,
                            r = e.activeIndex,
                            s = 1;
                        if (t.centeredSlides) {
                            for (var o, l = i[r].swiperSlideSize, d = r + 1; d < i.length; d += 1) i[d] && !o && (s += 1, n < (l += i[d].swiperSlideSize) && (o = !0));
                            for (var c = r - 1; 0 <= c; c -= 1) i[c] && !o && (s += 1, n < (l += i[c].swiperSlideSize) && (o = !0))
                        } else
                            for (var u = r + 1; u < i.length; u += 1) a[u] - a[r] < n && (s += 1);
                        return s
                    }, t.prototype.update = function() {
                        var e = this;
                        if (e && !e.destroyed) {
                            var t = e.snapGrid,
                                i = e.params;
                            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || a(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                        }

                        function a() {
                            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                        }
                    }, t.prototype.changeDirection = function(e, t) {
                        void 0 === t && (t = !0);
                        var i = this,
                            a = i.params.direction;
                        return (e = e || ("horizontal" === a ? "vertical" : "horizontal")) === a || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass("" + i.params.containerModifierClass + a + " wp8-" + a).addClass("" + i.params.containerModifierClass + e), (f.isIE || f.isEdge) && (h.pointerEvents || h.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e), i.params.direction = e, i.slides.each((function(t, i) {
                            "vertical" === e ? i.style.width = "" : i.style.height = ""
                        })), i.emit("changeDirection"), t && i.update()), i
                    }, t.prototype.init = function() {
                        var e = this;
                        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                    }, t.prototype.destroy = function(e, t) {
                        void 0 === e && (e = !0), void 0 === t && (t = !0);
                        var i = this,
                            a = i.params,
                            n = i.$el,
                            r = i.$wrapperEl,
                            s = i.slides;
                        return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), a.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), s && s.length && s.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
                            i.off(e)
                        })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), p.deleteProps(i)), i.destroyed = !0), null
                    }, t.extendDefaults = function(e) {
                        p.extend(k, e)
                    }, i.extendedDefaults.get = function() {
                        return k
                    }, i.defaults.get = function() {
                        return M
                    }, i.Class.get = function() {
                        return e
                    }, i.$.get = function() {
                        return a
                    }, Object.defineProperties(t, i), t
                }(o),
                L = {
                    name: "device",
                    proto: {
                        device: T
                    },
                    static: {
                        device: T
                    }
                },
                I = {
                    name: "support",
                    proto: {
                        support: h
                    },
                    static: {
                        support: h
                    }
                },
                O = {
                    name: "browser",
                    proto: {
                        browser: f
                    },
                    static: {
                        browser: f
                    }
                },
                $ = {
                    name: "resize",
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            resize: {
                                resizeHandler: function() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                },
                                orientationChangeHandler: function() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                }
                            }
                        })
                    },
                    on: {
                        init: function() {
                            t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        },
                        destroy: function() {
                            t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                },
                D = {
                    func: t.MutationObserver || t.WebkitMutationObserver,
                    attach: function(e, i) {
                        void 0 === i && (i = {});
                        var a = this,
                            n = new D.func((function(e) {
                                if (1 !== e.length) {
                                    var i = function() {
                                        a.emit("observerUpdate", e[0])
                                    };
                                    t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                                } else a.emit("observerUpdate", e[0])
                            }));
                        n.observe(e, {
                            attributes: void 0 === i.attributes || i.attributes,
                            childList: void 0 === i.childList || i.childList,
                            characterData: void 0 === i.characterData || i.characterData
                        }), a.observer.observers.push(n)
                    },
                    init: function() {
                        var e = this;
                        if (h.observer && e.params.observer) {
                            if (e.params.observeParents)
                                for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                            e.observer.attach(e.$el[0], {
                                childList: e.params.observeSlideChildren
                            }), e.observer.attach(e.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    destroy: function() {
                        this.observer.observers.forEach((function(e) {
                            e.disconnect()
                        })), this.observer.observers = []
                    }
                },
                A = {
                    name: "observer",
                    params: {
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    },
                    create: function() {
                        p.extend(this, {
                            observer: {
                                init: D.init.bind(this),
                                attach: D.attach.bind(this),
                                destroy: D.destroy.bind(this),
                                observers: []
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.observer.init()
                        },
                        destroy: function() {
                            this.observer.destroy()
                        }
                    }
                },
                N = {
                    update: function(e) {
                        var t = this,
                            i = t.params,
                            a = i.slidesPerView,
                            n = i.slidesPerGroup,
                            r = i.centeredSlides,
                            s = t.params.virtual,
                            o = s.addSlidesBefore,
                            l = s.addSlidesAfter,
                            d = t.virtual,
                            c = d.from,
                            u = d.to,
                            h = d.slides,
                            f = d.slidesGrid,
                            v = d.renderSlide,
                            m = d.offset;
                        t.updateActiveIndex();
                        var g, b, y, w = t.activeIndex || 0;
                        g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", y = r ? (b = Math.floor(a / 2) + n + o, Math.floor(a / 2) + n + l) : (b = a + (n - 1) + o, n + l);
                        var x = Math.max((w || 0) - y, 0),
                            T = Math.min((w || 0) + b, h.length - 1),
                            E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

                        function S() {
                            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                        }
                        if (p.extend(t.virtual, {
                                from: x,
                                to: T,
                                offset: E,
                                slidesGrid: t.slidesGrid
                            }), c === x && u === T && !e) return t.slidesGrid !== f && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
                        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                            offset: E,
                            from: x,
                            to: T,
                            slides: function() {
                                for (var e = [], t = x; t <= T; t += 1) e.push(h[t]);
                                return e
                            }()
                        }), void S();
                        var C = [],
                            M = [];
                        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                        else
                            for (var P = c; P <= u; P += 1)(P < x || T < P) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                        for (var k = 0; k < h.length; k += 1) x <= k && k <= T && (void 0 === u || e ? M.push(k) : (u < k && M.push(k), k < c && C.push(k)));
                        M.forEach((function(e) {
                            t.$wrapperEl.append(v(h[e], e))
                        })), C.sort((function(e, t) {
                            return t - e
                        })).forEach((function(e) {
                            t.$wrapperEl.prepend(v(h[e], e))
                        })), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
                    },
                    renderSlide: function(e, t) {
                        var i = this,
                            n = i.params.virtual;
                        if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                        var r = n.renderSlide ? a(n.renderSlide.call(i, e, t)) : a('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                        return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), n.cache && (i.virtual.cache[t] = r), r
                    },
                    appendSlide: function(e) {
                        if ("object" == r(e) && "length" in e)
                            for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                        else this.virtual.slides.push(e);
                        this.virtual.update(!0)
                    },
                    prependSlide: function(e) {
                        var t = this,
                            i = t.activeIndex,
                            a = i + 1,
                            n = 1;
                        if (Array.isArray(e)) {
                            for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
                            a = i + e.length, n = e.length
                        } else t.virtual.slides.unshift(e);
                        if (t.params.virtual.cache) {
                            var s = t.virtual.cache,
                                o = {};
                            Object.keys(s).forEach((function(e) {
                                o[parseInt(e, 10) + n] = s[e]
                            })), t.virtual.cache = o
                        }
                        t.virtual.update(!0), t.slideTo(a, 0)
                    },
                    removeSlide: function(e) {
                        var t = this;
                        if (null != e) {
                            var i = t.activeIndex;
                            if (Array.isArray(e))
                                for (var a = e.length - 1; 0 <= a; a -= 1) t.virtual.slides.splice(e[a], 1), t.params.virtual.cache && delete t.virtual.cache[e[a]], e[a] < i && (i -= 1), i = Math.max(i, 0);
                            else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
                            t.virtual.update(!0), t.slideTo(i, 0)
                        }
                    },
                    removeAllSlides: function() {
                        var e = this;
                        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
                    }
                },
                B = {
                    name: "virtual",
                    params: {
                        virtual: {
                            enabled: !1,
                            slides: [],
                            cache: !0,
                            renderSlide: null,
                            renderExternal: null,
                            addSlidesBefore: 0,
                            addSlidesAfter: 0
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            virtual: {
                                update: N.update.bind(e),
                                appendSlide: N.appendSlide.bind(e),
                                prependSlide: N.prependSlide.bind(e),
                                removeSlide: N.removeSlide.bind(e),
                                removeAllSlides: N.removeAllSlides.bind(e),
                                renderSlide: N.renderSlide.bind(e),
                                slides: e.params.virtual.slides,
                                cache: {}
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            var e = this;
                            if (e.params.virtual.enabled) {
                                e.classNames.push(e.params.containerModifierClass + "virtual");
                                var t = {
                                    watchSlidesProgress: !0
                                };
                                p.extend(e.params, t), p.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                            }
                        },
                        setTranslate: function() {
                            this.params.virtual.enabled && this.virtual.update()
                        }
                    }
                },
                j = {
                    handle: function(i) {
                        var a = this,
                            n = a.rtlTranslate,
                            r = i;
                        r.originalEvent && (r = r.originalEvent);
                        var s = r.keyCode || r.charCode;
                        if (!a.allowSlideNext && (a.isHorizontal() && 39 === s || a.isVertical() && 40 === s || 34 === s)) return !1;
                        if (!a.allowSlidePrev && (a.isHorizontal() && 37 === s || a.isVertical() && 38 === s || 33 === s)) return !1;
                        if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                            if (a.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
                                var o = !1;
                                if (0 < a.$el.parents("." + a.params.slideClass).length && 0 === a.$el.parents("." + a.params.slideActiveClass).length) return;
                                var l = t.innerWidth,
                                    d = t.innerHeight,
                                    c = a.$el.offset();
                                n && (c.left -= a.$el[0].scrollLeft);
                                for (var u = [
                                        [c.left, c.top],
                                        [c.left + a.width, c.top],
                                        [c.left, c.top + a.height],
                                        [c.left + a.width, c.top + a.height]
                                    ], p = 0; p < u.length; p += 1) {
                                    var h = u[p];
                                    0 <= h[0] && h[0] <= l && 0 <= h[1] && h[1] <= d && (o = !0)
                                }
                                if (!o) return
                            }
                            a.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (34 !== s && 39 !== s || n) && (33 !== s && 37 !== s || !n) || a.slideNext(), (33 !== s && 37 !== s || n) && (34 !== s && 39 !== s || !n) || a.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), 34 !== s && 40 !== s || a.slideNext(), 33 !== s && 38 !== s || a.slidePrev()), a.emit("keyPress", s)
                        }
                    },
                    enable: function() {
                        this.keyboard.enabled || (a(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                    },
                    disable: function() {
                        this.keyboard.enabled && (a(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                    }
                },
                R = {
                    name: "keyboard",
                    params: {
                        keyboard: {
                            enabled: !1,
                            onlyInViewport: !0
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            keyboard: {
                                enabled: !1,
                                enable: j.enable.bind(this),
                                disable: j.disable.bind(this),
                                handle: j.handle.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.params.keyboard.enabled && this.keyboard.enable()
                        },
                        destroy: function() {
                            this.keyboard.enabled && this.keyboard.disable()
                        }
                    }
                },
                H = {
                    lastScrollTime: p.now(),
                    event: -1 < t.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                        var t = "onwheel",
                            i = t in e;
                        if (!i) {
                            var a = e.createElement("div");
                            a.setAttribute(t, "return;"), i = "function" == typeof a[t]
                        }
                        return !i && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (i = e.implementation.hasFeature("Events.wheel", "3.0")), i
                    }() ? "wheel" : "mousewheel",
                    normalize: function(e) {
                        var t = 0,
                            i = 0,
                            a = 0,
                            n = 0;
                        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), a = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (a = e.deltaX), (a || n) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, n *= 40) : (a *= 800, n *= 800)), a && !t && (t = a < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: i,
                            pixelX: a,
                            pixelY: n
                        }
                    },
                    handleMouseEnter: function() {
                        this.mouseEntered = !0
                    },
                    handleMouseLeave: function() {
                        this.mouseEntered = !1
                    },
                    handle: function(e) {
                        var i = e,
                            a = this,
                            n = a.params.mousewheel;
                        if (!a.mouseEntered && !n.releaseOnEdges) return !0;
                        i.originalEvent && (i = i.originalEvent);
                        var r = 0,
                            s = a.rtlTranslate ? -1 : 1,
                            o = H.normalize(i);
                        if (n.forceToAxis)
                            if (a.isHorizontal()) {
                                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                                r = o.pixelX * s
                            } else {
                                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                                r = o.pixelY
                            }
                        else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                        if (0 === r) return !0;
                        if (n.invert && (r = -r), a.params.freeMode) {
                            a.params.loop && a.loopFix();
                            var l = a.getTranslate() + r * n.sensitivity,
                                d = a.isBeginning,
                                c = a.isEnd;
                            if (l >= a.minTranslate() && (l = a.minTranslate()), l <= a.maxTranslate() && (l = a.maxTranslate()), a.setTransition(0), a.setTranslate(l), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!d && a.isBeginning || !c && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = p.nextTick((function() {
                                    a.slideToClosest()
                                }), 300)), a.emit("scroll", i), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), l === a.minTranslate() || l === a.maxTranslate()) return !0
                        } else {
                            if (60 < p.now() - a.mousewheel.lastScrollTime)
                                if (r < 0)
                                    if (a.isEnd && !a.params.loop || a.animating) {
                                        if (n.releaseOnEdges) return !0
                                    } else a.slideNext(), a.emit("scroll", i);
                            else if (a.isBeginning && !a.params.loop || a.animating) {
                                if (n.releaseOnEdges) return !0
                            } else a.slidePrev(), a.emit("scroll", i);
                            a.mousewheel.lastScrollTime = (new t.Date).getTime()
                        }
                        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                    },
                    enable: function() {
                        var e = this;
                        if (!H.event) return !1;
                        if (e.mousewheel.enabled) return !1;
                        var t = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
                    },
                    disable: function() {
                        var e = this;
                        if (!H.event) return !1;
                        if (!e.mousewheel.enabled) return !1;
                        var t = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
                    }
                },
                G = {
                    update: function() {
                        var e = this,
                            t = e.params.navigation;
                        if (!e.params.loop) {
                            var i = e.navigation,
                                a = i.$nextEl,
                                n = i.$prevEl;
                            n && 0 < n.length && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), a && 0 < a.length && (e.isEnd ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                        }
                    },
                    onPrevClick: function(e) {
                        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
                    },
                    onNextClick: function(e) {
                        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
                    },
                    init: function() {
                        var e, t, i = this,
                            n = i.params.navigation;
                        (n.nextEl || n.prevEl) && (n.nextEl && (e = a(n.nextEl), i.params.uniqueNavElements && "string" == typeof n.nextEl && 1 < e.length && 1 === i.$el.find(n.nextEl).length && (e = i.$el.find(n.nextEl))), n.prevEl && (t = a(n.prevEl), i.params.uniqueNavElements && "string" == typeof n.prevEl && 1 < t.length && 1 === i.$el.find(n.prevEl).length && (t = i.$el.find(n.prevEl))), e && 0 < e.length && e.on("click", i.navigation.onNextClick), t && 0 < t.length && t.on("click", i.navigation.onPrevClick), p.extend(i.navigation, {
                            $nextEl: e,
                            nextEl: e && e[0],
                            $prevEl: t,
                            prevEl: t && t[0]
                        }))
                    },
                    destroy: function() {
                        var e = this,
                            t = e.navigation,
                            i = t.$nextEl,
                            a = t.$prevEl;
                        i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), a && a.length && (a.off("click", e.navigation.onPrevClick), a.removeClass(e.params.navigation.disabledClass))
                    }
                },
                q = {
                    update: function() {
                        var e = this,
                            t = e.rtl,
                            i = e.params.pagination;
                        if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var n, r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                                s = e.pagination.$el,
                                o = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                            if (e.params.loop ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e.loopedSlides && (n -= r - 2 * e.loopedSlides), o - 1 < n && (n -= o), n < 0 && "bullets" !== e.params.paginationType && (n = o + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                                var l, d, c, u = e.pagination.bullets;
                                if (i.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = n - e.pagination.dynamicBulletIndex, c = ((d = l + (Math.min(u.length, i.dynamicMainBullets) - 1)) + l) / 2), u.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < s.length) u.each((function(e, t) {
                                    var r = a(t),
                                        s = r.index();
                                    s === n && r.addClass(i.bulletActiveClass), i.dynamicBullets && (l <= s && s <= d && r.addClass(i.bulletActiveClass + "-main"), s === l && r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s === d && r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                                }));
                                else if (u.eq(n).addClass(i.bulletActiveClass), i.dynamicBullets) {
                                    for (var p = u.eq(l), h = u.eq(d), f = l; f <= d; f += 1) u.eq(f).addClass(i.bulletActiveClass + "-main");
                                    p.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), h.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                                }
                                if (i.dynamicBullets) {
                                    var v = Math.min(u.length, i.dynamicMainBullets + 4),
                                        m = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                                        g = t ? "right" : "left";
                                    u.css(e.isHorizontal() ? g : "top", m + "px")
                                }
                            }
                            if ("fraction" === i.type && (s.find("." + i.currentClass).text(i.formatFractionCurrent(n + 1)), s.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                                var b;
                                b = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                                var y = (n + 1) / o,
                                    w = 1,
                                    x = 1;
                                "horizontal" === b ? w = y : x = y, s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + x + ")").transition(e.params.speed)
                            }
                            "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, n + 1, o)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                        }
                    },
                    render: function() {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                                a = e.pagination.$el,
                                n = "";
                            if ("bullets" === t.type) {
                                for (var r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < r; s += 1) t.renderBullet ? n += t.renderBullet.call(e, s, t.bulletClass) : n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                                a.html(n), e.pagination.bullets = a.find("." + t.bulletClass)
                            }
                            "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', a.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', a.html(n)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                        }
                    },
                    init: function() {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el) {
                            var i = a(t.el);
                            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                                t.preventDefault();
                                var i = a(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                            })), p.extend(e.pagination, {
                                $el: i,
                                el: i[0]
                            }))
                        }
                    },
                    destroy: function() {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var i = e.pagination.$el;
                            i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass)
                        }
                    }
                },
                F = {
                    setTranslate: function() {
                        var e = this;
                        if (e.params.scrollbar.el && e.scrollbar.el) {
                            var t = e.scrollbar,
                                i = e.rtlTranslate,
                                a = e.progress,
                                n = t.dragSize,
                                r = t.trackSize,
                                s = t.$dragEl,
                                o = t.$el,
                                l = e.params.scrollbar,
                                d = n,
                                c = (r - n) * a;
                            i ? 0 < (c = -c) ? (d = n - c, c = 0) : r < -c + n && (d = r + c) : c < 0 ? (d = n + c, c = 0) : r < c + n && (d = r - c), e.isHorizontal() ? (h.transforms3d ? s.transform("translate3d(" + c + "px, 0, 0)") : s.transform("translateX(" + c + "px)"), s[0].style.width = d + "px") : (h.transforms3d ? s.transform("translate3d(0px, " + c + "px, 0)") : s.transform("translateY(" + c + "px)"), s[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function() {
                                o[0].style.opacity = 0, o.transition(400)
                            }), 1e3))
                        }
                    },
                    setTransition: function(e) {
                        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                    },
                    updateSize: function() {
                        var e = this;
                        if (e.params.scrollbar.el && e.scrollbar.el) {
                            var t = e.scrollbar,
                                i = t.$dragEl,
                                a = t.$el;
                            i[0].style.width = "", i[0].style.height = "";
                            var n, r = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
                                s = e.size / e.virtualSize,
                                o = s * (r / e.size);
                            n = "auto" === e.params.scrollbar.dragSize ? r * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = n + "px" : i[0].style.height = n + "px", a[0].style.display = 1 <= s ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), p.extend(t, {
                                trackSize: r,
                                divider: s,
                                moveDivider: o,
                                dragSize: n
                            }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                        }
                    },
                    getPointerPosition: function(e) {
                        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                    },
                    setDragPosition: function(e) {
                        var t, i = this,
                            a = i.scrollbar,
                            n = i.rtlTranslate,
                            r = a.$el,
                            s = a.dragSize,
                            o = a.trackSize,
                            l = a.dragStartPos;
                        t = (a.getPointerPosition(e) - r.offset()[i.isHorizontal() ? "left" : "top"] - (null !== l ? l : s / 2)) / (o - s), t = Math.max(Math.min(t, 1), 0), n && (t = 1 - t);
                        var d = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
                        i.updateProgress(d), i.setTranslate(d), i.updateActiveIndex(), i.updateSlidesClasses()
                    },
                    onDragStart: function(e) {
                        var t = this,
                            i = t.params.scrollbar,
                            a = t.scrollbar,
                            n = t.$wrapperEl,
                            r = a.$el,
                            s = a.$dragEl;
                        t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? a.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), n.transition(100), s.transition(100), a.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), i.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
                    },
                    onDragMove: function(e) {
                        var t = this.scrollbar,
                            i = this.$wrapperEl,
                            a = t.$el,
                            n = t.$dragEl;
                        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), a.transition(0), n.transition(0), this.emit("scrollbarDragMove", e))
                    },
                    onDragEnd: function(e) {
                        var t = this,
                            i = t.params.scrollbar,
                            a = t.scrollbar.$el;
                        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = p.nextTick((function() {
                            a.css("opacity", 0), a.transition(400)
                        }), 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
                    },
                    enableDraggable: function() {
                        var t = this;
                        if (t.params.scrollbar.el) {
                            var i = t.scrollbar,
                                a = t.touchEventsTouch,
                                n = t.touchEventsDesktop,
                                r = t.params,
                                s = i.$el[0],
                                o = !(!h.passiveListener || !r.passiveListeners) && {
                                    passive: !1,
                                    capture: !1
                                },
                                l = !(!h.passiveListener || !r.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                            h.touch ? (s.addEventListener(a.start, t.scrollbar.onDragStart, o), s.addEventListener(a.move, t.scrollbar.onDragMove, o), s.addEventListener(a.end, t.scrollbar.onDragEnd, l)) : (s.addEventListener(n.start, t.scrollbar.onDragStart, o), e.addEventListener(n.move, t.scrollbar.onDragMove, o), e.addEventListener(n.end, t.scrollbar.onDragEnd, l))
                        }
                    },
                    disableDraggable: function() {
                        var t = this;
                        if (t.params.scrollbar.el) {
                            var i = t.scrollbar,
                                a = t.touchEventsTouch,
                                n = t.touchEventsDesktop,
                                r = t.params,
                                s = i.$el[0],
                                o = !(!h.passiveListener || !r.passiveListeners) && {
                                    passive: !1,
                                    capture: !1
                                },
                                l = !(!h.passiveListener || !r.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                            h.touch ? (s.removeEventListener(a.start, t.scrollbar.onDragStart, o), s.removeEventListener(a.move, t.scrollbar.onDragMove, o), s.removeEventListener(a.end, t.scrollbar.onDragEnd, l)) : (s.removeEventListener(n.start, t.scrollbar.onDragStart, o), e.removeEventListener(n.move, t.scrollbar.onDragMove, o), e.removeEventListener(n.end, t.scrollbar.onDragEnd, l))
                        }
                    },
                    init: function() {
                        var e = this;
                        if (e.params.scrollbar.el) {
                            var t = e.scrollbar,
                                i = e.$el,
                                n = e.params.scrollbar,
                                r = a(n.el);
                            e.params.uniqueNavElements && "string" == typeof n.el && 1 < r.length && 1 === i.find(n.el).length && (r = i.find(n.el));
                            var s = r.find("." + e.params.scrollbar.dragClass);
                            0 === s.length && (s = a('<div class="' + e.params.scrollbar.dragClass + '"></div>'), r.append(s)), p.extend(t, {
                                $el: r,
                                el: r[0],
                                $dragEl: s,
                                dragEl: s[0]
                            }), n.draggable && t.enableDraggable()
                        }
                    },
                    destroy: function() {
                        this.scrollbar.disableDraggable()
                    }
                },
                V = {
                    setTransform: function(e, t) {
                        var i = this.rtl,
                            n = a(e),
                            r = i ? -1 : 1,
                            s = n.attr("data-swiper-parallax") || "0",
                            o = n.attr("data-swiper-parallax-x"),
                            l = n.attr("data-swiper-parallax-y"),
                            d = n.attr("data-swiper-parallax-scale"),
                            c = n.attr("data-swiper-parallax-opacity");
                        if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = s, l = "0") : (l = s, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px", null != c) {
                            var u = c - (c - 1) * (1 - Math.abs(t));
                            n[0].style.opacity = u
                        }
                        if (null == d) n.transform("translate3d(" + o + ", " + l + ", 0px)");
                        else {
                            var p = d - (d - 1) * (1 - Math.abs(t));
                            n.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + p + ")")
                        }
                    },
                    setTranslate: function() {
                        var e = this,
                            t = e.$el,
                            i = e.slides,
                            n = e.progress,
                            r = e.snapGrid;
                        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                            e.parallax.setTransform(i, n)
                        })), i.each((function(t, i) {
                            var s = i.progress;
                            1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (s += Math.ceil(t / 2) - n * (r.length - 1)), s = Math.min(Math.max(s, -1), 1), a(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                                e.parallax.setTransform(i, s)
                            }))
                        }))
                    },
                    setTransition: function(e) {
                        void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                            var n = a(i),
                                r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (r = 0), n.transition(r)
                        }))
                    }
                },
                X = {
                    getDistanceBetweenTouches: function(e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX,
                            i = e.targetTouches[0].pageY,
                            a = e.targetTouches[1].pageX,
                            n = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(a - t, 2) + Math.pow(n - i, 2))
                    },
                    onGestureStart: function(e) {
                        var t = this,
                            i = t.params.zoom,
                            n = t.zoom,
                            r = n.gesture;
                        if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !h.gestures) {
                            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                            n.fakeGestureTouched = !0, r.scaleStart = X.getDistanceBetweenTouches(e)
                        }
                        r.$slideEl && r.$slideEl.length || (r.$slideEl = a(e.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0
                    },
                    onGestureChange: function(e) {
                        var t = this.params.zoom,
                            i = this.zoom,
                            a = i.gesture;
                        if (!h.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                            i.fakeGestureMoved = !0, a.scaleMove = X.getDistanceBetweenTouches(e)
                        }
                        a.$imageEl && 0 !== a.$imageEl.length && (i.scale = h.gestures ? e.scale * i.currentScale : a.scaleMove / a.scaleStart * i.currentScale, i.scale > a.maxRatio && (i.scale = a.maxRatio - 1 + Math.pow(i.scale - a.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                    },
                    onGestureEnd: function(e) {
                        var t = this.params.zoom,
                            i = this.zoom,
                            a = i.gesture;
                        if (!h.gestures) {
                            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                            if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !T.android) return;
                            i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                        }
                        a.$imageEl && 0 !== a.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, a.maxRatio), t.minRatio), a.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (a.$slideEl = void 0))
                    },
                    onTouchStart: function(e) {
                        var t = this.zoom,
                            i = t.gesture,
                            a = t.image;
                        i.$imageEl && 0 !== i.$imageEl.length && (a.isTouched || (T.android && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                    },
                    onTouchMove: function(e) {
                        var t = this,
                            i = t.zoom,
                            a = i.gesture,
                            n = i.image,
                            r = i.velocity;
                        if (a.$imageEl && 0 !== a.$imageEl.length && (t.allowClick = !1, n.isTouched && a.$slideEl)) {
                            n.isMoved || (n.width = a.$imageEl[0].offsetWidth, n.height = a.$imageEl[0].offsetHeight, n.startX = p.getTranslate(a.$imageWrapEl[0], "x") || 0, n.startY = p.getTranslate(a.$imageWrapEl[0], "y") || 0, a.slideWidth = a.$slideEl[0].offsetWidth, a.slideHeight = a.$slideEl[0].offsetHeight, a.$imageWrapEl.transition(0), t.rtl && (n.startX = -n.startX, n.startY = -n.startY));
                            var s = n.width * i.scale,
                                o = n.height * i.scale;
                            if (!(s < a.slideWidth && o < a.slideHeight)) {
                                if (n.minX = Math.min(a.slideWidth / 2 - s / 2, 0), n.maxX = -n.minX, n.minY = Math.min(a.slideHeight / 2 - o / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !i.isScaling) {
                                    if (t.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                                    if (!t.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                                }
                                e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = n.touchesCurrent.x, r.prevPositionY = n.touchesCurrent.y, r.prevTime = Date.now(), a.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function() {
                        var e = this.zoom,
                            t = e.gesture,
                            i = e.image,
                            a = e.velocity;
                        if (t.$imageEl && 0 !== t.$imageEl.length) {
                            if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                            i.isTouched = !1, i.isMoved = !1;
                            var n = 300,
                                r = 300,
                                s = a.x * n,
                                o = i.currentX + s,
                                l = a.y * r,
                                d = i.currentY + l;
                            0 !== a.x && (n = Math.abs((o - i.currentX) / a.x)), 0 !== a.y && (r = Math.abs((d - i.currentY) / a.y));
                            var c = Math.max(n, r);
                            i.currentX = o, i.currentY = d;
                            var u = i.width * e.scale,
                                p = i.height * e.scale;
                            i.minX = Math.min(t.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - p / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function() {
                        var e = this.zoom,
                            t = e.gesture;
                        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
                    },
                    toggle: function(e) {
                        var t = this.zoom;
                        t.scale && 1 !== t.scale ? t.out() : t.in(e)
                    },
                    in: function(e) {
                        var t, i, n, r, s, o, l, d, c, u, p, h, f, v, m, g, b = this,
                            y = b.zoom,
                            w = b.params.zoom,
                            x = y.gesture,
                            T = y.image;
                        x.$slideEl || (x.$slideEl = b.clickedSlide ? a(b.clickedSlide) : b.slides.eq(b.activeIndex), x.$imageEl = x.$slideEl.find("img, svg, canvas"), x.$imageWrapEl = x.$imageEl.parent("." + w.containerClass)), x.$imageEl && 0 !== x.$imageEl.length && (x.$slideEl.addClass("" + w.zoomedSlideClass), i = void 0 === T.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = T.touchesStart.x, T.touchesStart.y), y.scale = x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = x.$slideEl[0].offsetWidth, g = x.$slideEl[0].offsetHeight, n = x.$slideEl.offset().left + m / 2 - t, r = x.$slideEl.offset().top + g / 2 - i, l = x.$imageEl[0].offsetWidth, d = x.$imageEl[0].offsetHeight, c = l * y.scale, u = d * y.scale, f = -(p = Math.min(m / 2 - c / 2, 0)), v = -(h = Math.min(g / 2 - u / 2, 0)), (s = n * y.scale) < p && (s = p), f < s && (s = f), (o = r * y.scale) < h && (o = h), v < o && (o = v)) : o = s = 0, x.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"), x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                    },
                    out: function() {
                        var e = this,
                            t = e.zoom,
                            i = e.params.zoom,
                            n = t.gesture;
                        n.$slideEl || (n.$slideEl = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1, t.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + i.zoomedSlideClass), n.$slideEl = void 0)
                    },
                    enable: function() {
                        var e = this,
                            t = e.zoom;
                        if (!t.enabled) {
                            t.enabled = !0;
                            var i = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            h.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                        }
                    },
                    disable: function() {
                        var e = this,
                            t = e.zoom;
                        if (t.enabled) {
                            e.zoom.enabled = !1;
                            var i = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            h.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                        }
                    }
                },
                Y = {
                    loadInSlide: function(e, t) {
                        void 0 === t && (t = !0);
                        var i = this,
                            n = i.params.lazy;
                        if (void 0 !== e && 0 !== i.slides.length) {
                            var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                                s = r.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
                            !r.hasClass(n.elementClass) || r.hasClass(n.loadedClass) || r.hasClass(n.loadingClass) || (s = s.add(r[0])), 0 !== s.length && s.each((function(e, s) {
                                var o = a(s);
                                o.addClass(n.loadingClass);
                                var l = o.attr("data-background"),
                                    d = o.attr("data-src"),
                                    c = o.attr("data-srcset"),
                                    u = o.attr("data-sizes");
                                i.loadImage(o[0], d || l, c, u, !1, (function() {
                                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                                        if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), r.find("." + n.preloaderClass).remove(), i.params.loop && t) {
                                            var e = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(i.params.slideDuplicateClass)) {
                                                var a = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                i.lazy.loadInSlide(a.index(), !1)
                                            } else {
                                                var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                i.lazy.loadInSlide(s.index(), !1)
                                            }
                                        }
                                        i.emit("lazyImageReady", r[0], o[0])
                                    }
                                })), i.emit("lazyImageLoad", r[0], o[0])
                            }))
                        }
                    },
                    load: function() {
                        var e = this,
                            t = e.$wrapperEl,
                            i = e.params,
                            n = e.slides,
                            r = e.activeIndex,
                            s = e.virtual && i.virtual.enabled,
                            o = i.lazy,
                            l = i.slidesPerView;

                        function d(e) {
                            if (s) {
                                if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                            } else if (n[e]) return !0;
                            return !1
                        }

                        function c(e) {
                            return s ? a(e).attr("data-swiper-slide-index") : a(e).index()
                        }
                        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function(t, i) {
                            var n = s ? a(i).attr("data-swiper-slide-index") : a(i).index();
                            e.lazy.loadInSlide(n)
                        }));
                        else if (1 < l)
                            for (var u = r; u < r + l; u += 1) d(u) && e.lazy.loadInSlide(u);
                        else e.lazy.loadInSlide(r);
                        if (o.loadPrevNext)
                            if (1 < l || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                                for (var p = o.loadPrevNextAmount, h = l, f = Math.min(r + h + Math.max(p, h), n.length), v = Math.max(r - Math.max(h, p), 0), m = r + l; m < f; m += 1) d(m) && e.lazy.loadInSlide(m);
                                for (var g = v; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
                            } else {
                                var b = t.children("." + i.slideNextClass);
                                0 < b.length && e.lazy.loadInSlide(c(b));
                                var y = t.children("." + i.slidePrevClass);
                                0 < y.length && e.lazy.loadInSlide(c(y))
                            }
                    }
                },
                _ = {
                    LinearSpline: function(e, t) {
                        var i, a, n, r, s;
                        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                            return e ? (s = function(e, t) {
                                for (a = -1, i = e.length; 1 < i - a;) e[n = i + a >> 1] <= t ? a = n : i = n;
                                return i
                            }(this.x, e), r = s - 1, (e - this.x[r]) * (this.y[s] - this.y[r]) / (this.x[s] - this.x[r]) + this.y[r]) : 0
                        }, this
                    },
                    getInterpolateFunction: function(e) {
                        var t = this;
                        t.controller.spline || (t.controller.spline = t.params.loop ? new _.LinearSpline(t.slidesGrid, e.slidesGrid) : new _.LinearSpline(t.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, t) {
                        var i, a, n = this,
                            r = n.controller.control;

                        function s(e) {
                            var t = n.rtlTranslate ? -n.translate : n.translate;
                            "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), a = -n.controller.spline.interpolate(-t)), a && "container" !== n.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), a = (t - n.minTranslate()) * i + e.minTranslate()), n.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, n), e.updateActiveIndex(), e.updateSlidesClasses()
                        }
                        if (Array.isArray(r))
                            for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof z && s(r[o]);
                        else r instanceof z && t !== r && s(r)
                    },
                    setTransition: function(e, t) {
                        var i, a = this,
                            n = a.controller.control;

                        function r(t) {
                            t.setTransition(e, a), 0 !== e && (t.transitionStart(), t.params.autoHeight && p.nextTick((function() {
                                t.updateAutoHeight()
                            })), t.$wrapperEl.transitionEnd((function() {
                                n && (t.params.loop && "slide" === a.params.controller.by && t.loopFix(), t.transitionEnd())
                            })))
                        }
                        if (Array.isArray(n))
                            for (i = 0; i < n.length; i += 1) n[i] !== t && n[i] instanceof z && r(n[i]);
                        else n instanceof z && t !== n && r(n)
                    }
                },
                W = {
                    makeElFocusable: function(e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addElRole: function(e, t) {
                        return e.attr("role", t), e
                    },
                    addElLabel: function(e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disableEl: function(e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enableEl: function(e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function(e) {
                        var t = this,
                            i = t.params.a11y;
                        if (13 === e.keyCode) {
                            var n = a(e.target);
                            t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && n.is("." + t.params.pagination.bulletClass) && n[0].click()
                        }
                    },
                    notify: function(e) {
                        var t = this.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    updateNavigation: function() {
                        var e = this;
                        if (!e.params.loop) {
                            var t = e.navigation,
                                i = t.$nextEl,
                                a = t.$prevEl;
                            a && 0 < a.length && (e.isBeginning ? e.a11y.disableEl(a) : e.a11y.enableEl(a)), i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
                        }
                    },
                    updatePagination: function() {
                        var e = this,
                            t = e.params.a11y;
                        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, n) {
                            var r = a(n);
                            e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                        }))
                    },
                    init: function() {
                        var e = this;
                        e.$el.append(e.a11y.liveRegion);
                        var t, i, a = e.params.a11y;
                        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, a.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, a.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                    },
                    destroy: function() {
                        var e, t, i = this;
                        i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
                    }
                },
                U = {
                    init: function() {
                        var e = this;
                        if (e.params.history) {
                            if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                            var i = e.history;
                            i.initialized = !0, i.paths = U.getPathValues(), (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
                        }
                    },
                    destroy: function() {
                        this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
                    },
                    setHistoryPopState: function() {
                        this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                    },
                    getPathValues: function() {
                        var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                                return "" !== e
                            })),
                            i = e.length;
                        return {
                            key: e[i - 2],
                            value: e[i - 1]
                        }
                    },
                    setHistory: function(e, i) {
                        if (this.history.initialized && this.params.history.enabled) {
                            var a = this.slides.eq(i),
                                n = U.slugify(a.attr("data-history"));
                            t.location.pathname.includes(e) || (n = e + "/" + n);
                            var r = t.history.state;
                            r && r.value === n || (this.params.history.replaceState ? t.history.replaceState({
                                value: n
                            }, null, n) : t.history.pushState({
                                value: n
                            }, null, n))
                        }
                    },
                    slugify: function(e) {
                        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function(e, t, i) {
                        var a = this;
                        if (t)
                            for (var n = 0, r = a.slides.length; n < r; n += 1) {
                                var s = a.slides.eq(n);
                                if (U.slugify(s.attr("data-history")) === t && !s.hasClass(a.params.slideDuplicateClass)) {
                                    var o = s.index();
                                    a.slideTo(o, e, i)
                                }
                            } else a.slideTo(0, e, i)
                    }
                },
                K = {
                    onHashCange: function() {
                        var t = this,
                            i = e.location.hash.replace("#", "");
                        if (i !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                            var a = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + i + '"]').index();
                            if (void 0 === a) return;
                            t.slideTo(a)
                        }
                    },
                    setHash: function() {
                        var i = this;
                        if (i.hashNavigation.initialized && i.params.hashNavigation.enabled)
                            if (i.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || !1);
                            else {
                                var a = i.slides.eq(i.activeIndex),
                                    n = a.attr("data-hash") || a.attr("data-history");
                                e.location.hash = n || ""
                            }
                    },
                    init: function() {
                        var i = this;
                        if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                            i.hashNavigation.initialized = !0;
                            var n = e.location.hash.replace("#", "");
                            if (n)
                                for (var r = 0, s = i.slides.length; r < s; r += 1) {
                                    var o = i.slides.eq(r);
                                    if ((o.attr("data-hash") || o.attr("data-history")) === n && !o.hasClass(i.params.slideDuplicateClass)) {
                                        var l = o.index();
                                        i.slideTo(l, 0, i.params.runCallbacksOnInit, !0)
                                    }
                                }
                            i.params.hashNavigation.watchState && a(t).on("hashchange", i.hashNavigation.onHashCange)
                        }
                    },
                    destroy: function() {
                        this.params.hashNavigation.watchState && a(t).off("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                J = {
                    run: function() {
                        var e = this,
                            t = e.slides.eq(e.activeIndex),
                            i = e.params.autoplay.delay;
                        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = p.nextTick((function() {
                            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                        }), i)
                    },
                    start: function() {
                        var e = this;
                        return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
                    },
                    stop: function() {
                        var e = this;
                        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
                    },
                    pause: function(e) {
                        var t = this;
                        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                    }
                },
                Z = {
                    setTranslate: function() {
                        for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                            var a = e.slides.eq(i),
                                n = -a[0].swiperSlideOffset;
                            e.params.virtualTranslate || (n -= e.translate);
                            var r = 0;
                            e.isHorizontal() || (r = n, n = 0);
                            var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: s
                            }).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        var t = this,
                            i = t.slides,
                            a = t.$wrapperEl;
                        if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                            var n = !1;
                            i.transitionEnd((function() {
                                if (!n && t && !t.destroyed) {
                                    n = !0, t.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                                }
                            }))
                        }
                    }
                },
                Q = {
                    setTranslate: function() {
                        var e, t = this,
                            i = t.$el,
                            n = t.$wrapperEl,
                            r = t.slides,
                            s = t.width,
                            o = t.height,
                            l = t.rtlTranslate,
                            d = t.size,
                            c = t.params.cubeEffect,
                            u = t.isHorizontal(),
                            p = t.virtual && t.params.virtual.enabled,
                            h = 0;
                        c.shadow && (u ? (0 === (e = n.find(".swiper-cube-shadow")).length && (e = a('<div class="swiper-cube-shadow"></div>'), n.append(e)), e.css({
                            height: s + "px"
                        })) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = a('<div class="swiper-cube-shadow"></div>'), i.append(e)));
                        for (var v = 0; v < r.length; v += 1) {
                            var m = r.eq(v),
                                g = v;
                            p && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
                            var b = 90 * g,
                                y = Math.floor(b / 360);
                            l && (b = -b, y = Math.floor(-b / 360));
                            var w = Math.max(Math.min(m[0].progress, 1), -1),
                                x = 0,
                                T = 0,
                                E = 0;
                            g % 4 == 0 ? (x = 4 * -y * d, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -y * d) : (g - 2) % 4 == 0 ? (x = d + 4 * y * d, E = d) : (g - 3) % 4 == 0 && (x = -d, E = 3 * d + 4 * d * y), l && (x = -x), u || (T = x, x = 0);
                            var S = "rotateX(" + (u ? 0 : -b) + "deg) rotateY(" + (u ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
                            if (w <= 1 && -1 < w && (h = 90 * g + 90 * w, l && (h = 90 * -g - 90 * w)), m.transform(S), c.slideShadows) {
                                var C = u ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                    M = u ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                                0 === C.length && (C = a('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), m.append(C)), 0 === M.length && (M = a('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), m.append(M)), C.length && (C[0].style.opacity = Math.max(-w, 0)), M.length && (M[0].style.opacity = Math.max(w, 0))
                            }
                        }
                        if (n.css({
                                "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                                "transform-origin": "50% 50% -" + d / 2 + "px"
                            }), c.shadow)
                            if (u) e.transform("translate3d(0px, " + (s / 2 + c.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
                            else {
                                var P = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                                    k = 1.5 - (Math.sin(2 * P * Math.PI / 360) / 2 + Math.cos(2 * P * Math.PI / 360) / 2),
                                    z = c.shadowScale,
                                    L = c.shadowScale / k,
                                    I = c.shadowOffset;
                                e.transform("scale3d(" + z + ", 1, " + L + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / L + "px) rotateX(-90deg)")
                            }
                        var O = f.isSafari || f.isUiWebView ? -d / 2 : 0;
                        n.transform("translate3d(0px,0," + O + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        var t = this.$el;
                        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                    }
                },
                ee = {
                    setTranslate: function() {
                        for (var e = this, t = e.slides, i = e.rtlTranslate, n = 0; n < t.length; n += 1) {
                            var r = t.eq(n),
                                s = r[0].progress;
                            e.params.flipEffect.limitRotation && (s = Math.max(Math.min(r[0].progress, 1), -1));
                            var o = -180 * s,
                                l = 0,
                                d = -r[0].swiperSlideOffset,
                                c = 0;
                            if (e.isHorizontal() ? i && (o = -o) : (c = d, l = -o, o = d = 0), r[0].style.zIndex = -Math.abs(Math.round(s)) + t.length, e.params.flipEffect.slideShadows) {
                                var u = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                    p = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === p.length && (p = a('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(p)), u.length && (u[0].style.opacity = Math.max(-s, 0)), p.length && (p[0].style.opacity = Math.max(s, 0))
                            }
                            r.transform("translate3d(" + d + "px, " + c + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                        }
                    },
                    setTransition: function(e) {
                        var t = this,
                            i = t.slides,
                            a = t.activeIndex,
                            n = t.$wrapperEl;
                        if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                            var r = !1;
                            i.eq(a).transitionEnd((function() {
                                if (!r && t && !t.destroyed) {
                                    r = !0, t.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                                }
                            }))
                        }
                    }
                },
                te = {
                    setTranslate: function() {
                        for (var e = this, t = e.width, i = e.height, n = e.slides, r = e.$wrapperEl, s = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), d = e.translate, c = l ? t / 2 - d : i / 2 - d, u = l ? o.rotate : -o.rotate, p = o.depth, f = 0, v = n.length; f < v; f += 1) {
                            var m = n.eq(f),
                                g = s[f],
                                b = (c - m[0].swiperSlideOffset - g / 2) / g * o.modifier,
                                y = l ? u * b : 0,
                                w = l ? 0 : u * b,
                                x = -p * Math.abs(b),
                                T = l ? 0 : o.stretch * b,
                                E = l ? o.stretch * b : 0;
                            Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0);
                            var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
                            if (m.transform(S), m[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
                                var C = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                    M = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                                0 === C.length && (C = a('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(C)), 0 === M.length && (M = a('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(M)), C.length && (C[0].style.opacity = 0 < b ? b : 0), M.length && (M[0].style.opacity = 0 < -b ? -b : 0)
                            }
                        }(h.pointerEvents || h.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = c + "px 50%")
                    },
                    setTransition: function(e) {
                        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                },
                ie = {
                    init: function() {
                        var e = this,
                            t = e.params.thumbs,
                            i = e.constructor;
                        t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, p.extend(e.thumbs.swiper.originalParams, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), p.extend(e.thumbs.swiper.params, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })) : p.isObject(t.swiper) && (e.thumbs.swiper = new i(p.extend({}, t.swiper, {
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                    },
                    onThumbClick: function() {
                        var e = this,
                            t = e.thumbs.swiper;
                        if (t) {
                            var i = t.clickedIndex,
                                n = t.clickedSlide;
                            if (!(n && a(n).hasClass(e.params.thumbs.slideThumbActiveClass) || null == i)) {
                                var r;
                                if (r = t.params.loop ? parseInt(a(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                                    var s = e.activeIndex;
                                    e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
                                    var o = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                                        l = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                                    r = void 0 === o ? l : void 0 === l ? o : l - s < s - o ? l : o
                                }
                                e.slideTo(r)
                            }
                        }
                    },
                    update: function(e) {
                        var t = this,
                            i = t.thumbs.swiper;
                        if (i) {
                            var a = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                            if (t.realIndex !== i.realIndex) {
                                var n, r = i.activeIndex;
                                if (i.params.loop) {
                                    i.slides.eq(r).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, r = i.activeIndex);
                                    var s = i.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                        o = i.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                                    n = void 0 === s ? o : void 0 === o ? s : o - r == r - s ? r : o - r < r - s ? o : s
                                } else n = t.realIndex;
                                i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(n) < 0 && (i.params.centeredSlides ? n = r < n ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : r < n && (n = n - a + 1), i.slideTo(n, e ? 0 : void 0))
                            }
                            var l = 1,
                                d = t.params.thumbs.slideThumbActiveClass;
                            if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), i.slides.removeClass(d), i.params.loop || i.params.virtual)
                                for (var c = 0; c < l; c += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(d);
                            else
                                for (var u = 0; u < l; u += 1) i.slides.eq(t.realIndex + u).addClass(d)
                        }
                    }
                },
                ae = [L, I, O, $, A, B, R, {
                    name: "mousewheel",
                    params: {
                        mousewheel: {
                            enabled: !1,
                            releaseOnEdges: !1,
                            invert: !1,
                            forceToAxis: !1,
                            sensitivity: 1,
                            eventsTarged: "container"
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            mousewheel: {
                                enabled: !1,
                                enable: H.enable.bind(e),
                                disable: H.disable.bind(e),
                                handle: H.handle.bind(e),
                                handleMouseEnter: H.handleMouseEnter.bind(e),
                                handleMouseLeave: H.handleMouseLeave.bind(e),
                                lastScrollTime: p.now()
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.params.mousewheel.enabled && this.mousewheel.enable()
                        },
                        destroy: function() {
                            this.mousewheel.enabled && this.mousewheel.disable()
                        }
                    }
                }, {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            navigation: {
                                init: G.init.bind(e),
                                update: G.update.bind(e),
                                destroy: G.destroy.bind(e),
                                onNextClick: G.onNextClick.bind(e),
                                onPrevClick: G.onPrevClick.bind(e)
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.navigation.init(), this.navigation.update()
                        },
                        toEdge: function() {
                            this.navigation.update()
                        },
                        fromEdge: function() {
                            this.navigation.update()
                        },
                        destroy: function() {
                            this.navigation.destroy()
                        },
                        click: function(e) {
                            var t, i = this,
                                n = i.navigation,
                                r = n.$nextEl,
                                s = n.$prevEl;
                            !i.params.navigation.hideOnClick || a(e.target).is(s) || a(e.target).is(r) || (r ? t = r.hasClass(i.params.navigation.hiddenClass) : s && (t = s.hasClass(i.params.navigation.hiddenClass)), !0 === t ? i.emit("navigationShow", i) : i.emit("navigationHide", i), r && r.toggleClass(i.params.navigation.hiddenClass), s && s.toggleClass(i.params.navigation.hiddenClass))
                        }
                    }
                }, {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function(e) {
                                return e
                            },
                            formatFractionTotal: function(e) {
                                return e
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock"
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            pagination: {
                                init: q.init.bind(e),
                                render: q.render.bind(e),
                                update: q.update.bind(e),
                                destroy: q.destroy.bind(e),
                                dynamicBulletIndex: 0
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.pagination.init(), this.pagination.render(), this.pagination.update()
                        },
                        activeIndexChange: function() {
                            (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
                        },
                        snapIndexChange: function() {
                            this.params.loop || this.pagination.update()
                        },
                        slidesLengthChange: function() {
                            this.params.loop && (this.pagination.render(), this.pagination.update())
                        },
                        snapGridLengthChange: function() {
                            this.params.loop || (this.pagination.render(), this.pagination.update())
                        },
                        destroy: function() {
                            this.pagination.destroy()
                        },
                        click: function(e) {
                            var t = this;
                            t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !a(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
                        }
                    }
                }, {
                    name: "scrollbar",
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag"
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            scrollbar: {
                                init: F.init.bind(e),
                                destroy: F.destroy.bind(e),
                                updateSize: F.updateSize.bind(e),
                                setTranslate: F.setTranslate.bind(e),
                                setTransition: F.setTransition.bind(e),
                                enableDraggable: F.enableDraggable.bind(e),
                                disableDraggable: F.disableDraggable.bind(e),
                                setDragPosition: F.setDragPosition.bind(e),
                                getPointerPosition: F.getPointerPosition.bind(e),
                                onDragStart: F.onDragStart.bind(e),
                                onDragMove: F.onDragMove.bind(e),
                                onDragEnd: F.onDragEnd.bind(e),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                        },
                        update: function() {
                            this.scrollbar.updateSize()
                        },
                        resize: function() {
                            this.scrollbar.updateSize()
                        },
                        observerUpdate: function() {
                            this.scrollbar.updateSize()
                        },
                        setTranslate: function() {
                            this.scrollbar.setTranslate()
                        },
                        setTransition: function(e) {
                            this.scrollbar.setTransition(e)
                        },
                        destroy: function() {
                            this.scrollbar.destroy()
                        }
                    }
                }, {
                    name: "parallax",
                    params: {
                        parallax: {
                            enabled: !1
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            parallax: {
                                setTransform: V.setTransform.bind(this),
                                setTranslate: V.setTranslate.bind(this),
                                setTransition: V.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                        },
                        init: function() {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTranslate: function() {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTransition: function(e) {
                            this.params.parallax.enabled && this.parallax.setTransition(e)
                        }
                    }
                }, {
                    name: "zoom",
                    params: {
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: "swiper-zoom-container",
                            zoomedSlideClass: "swiper-slide-zoomed"
                        }
                    },
                    create: function() {
                        var e = this,
                            t = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    $slideEl: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    $imageEl: void 0,
                                    $imageWrapEl: void 0,
                                    maxRatio: 3
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {}
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0
                                }
                            };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                            t[i] = X[i].bind(e)
                        })), p.extend(e, {
                            zoom: t
                        });
                        var i = 1;
                        Object.defineProperty(e.zoom, "scale", {
                            get: function() {
                                return i
                            },
                            set: function(t) {
                                if (i !== t) {
                                    var a = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                        n = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                    e.emit("zoomChange", t, a, n)
                                }
                                i = t
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.params.zoom.enabled && this.zoom.enable()
                        },
                        destroy: function() {
                            this.zoom.disable()
                        },
                        touchStart: function(e) {
                            this.zoom.enabled && this.zoom.onTouchStart(e)
                        },
                        touchEnd: function(e) {
                            this.zoom.enabled && this.zoom.onTouchEnd(e)
                        },
                        doubleTap: function(e) {
                            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                        },
                        transitionEnd: function() {
                            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                        }
                    }
                }, {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader"
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            lazy: {
                                initialImageLoaded: !1,
                                load: Y.load.bind(this),
                                loadInSlide: Y.loadInSlide.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                        },
                        init: function() {
                            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                        },
                        scroll: function() {
                            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                        },
                        resize: function() {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        scrollbarDragMove: function() {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        transitionStart: function() {
                            var e = this;
                            e.params.lazy.enabled && (!e.params.lazy.loadOnTransitionStart && (e.params.lazy.loadOnTransitionStart || e.lazy.initialImageLoaded) || e.lazy.load())
                        },
                        transitionEnd: function() {
                            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                        }
                    }
                }, {
                    name: "controller",
                    params: {
                        controller: {
                            control: void 0,
                            inverse: !1,
                            by: "slide"
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            controller: {
                                control: e.params.controller.control,
                                getInterpolateFunction: _.getInterpolateFunction.bind(e),
                                setTranslate: _.setTranslate.bind(e),
                                setTransition: _.setTransition.bind(e)
                            }
                        })
                    },
                    on: {
                        update: function() {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        },
                        resize: function() {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        },
                        observerUpdate: function() {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        },
                        setTranslate: function(e, t) {
                            this.controller.control && this.controller.setTranslate(e, t)
                        },
                        setTransition: function(e, t) {
                            this.controller.control && this.controller.setTransition(e, t)
                        }
                    }
                }, {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}"
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            a11y: {
                                liveRegion: a('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                            }
                        }), Object.keys(W).forEach((function(t) {
                            e.a11y[t] = W[t].bind(e)
                        }))
                    },
                    on: {
                        init: function() {
                            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                        },
                        toEdge: function() {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        fromEdge: function() {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        paginationUpdate: function() {
                            this.params.a11y.enabled && this.a11y.updatePagination()
                        },
                        destroy: function() {
                            this.params.a11y.enabled && this.a11y.destroy()
                        }
                    }
                }, {
                    name: "history",
                    params: {
                        history: {
                            enabled: !1,
                            replaceState: !1,
                            key: "slides"
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            history: {
                                init: U.init.bind(e),
                                setHistory: U.setHistory.bind(e),
                                setHistoryPopState: U.setHistoryPopState.bind(e),
                                scrollToSlide: U.scrollToSlide.bind(e),
                                destroy: U.destroy.bind(e)
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.params.history.enabled && this.history.init()
                        },
                        destroy: function() {
                            this.params.history.enabled && this.history.destroy()
                        },
                        transitionEnd: function() {
                            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                        }
                    }
                }, {
                    name: "hash-navigation",
                    params: {
                        hashNavigation: {
                            enabled: !1,
                            replaceState: !1,
                            watchState: !1
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            hashNavigation: {
                                initialized: !1,
                                init: K.init.bind(e),
                                destroy: K.destroy.bind(e),
                                setHash: K.setHash.bind(e),
                                onHashCange: K.onHashCange.bind(e)
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.params.hashNavigation.enabled && this.hashNavigation.init()
                        },
                        destroy: function() {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                        },
                        transitionEnd: function() {
                            this.hashNavigation.initialized && this.hashNavigation.setHash()
                        }
                    }
                }, {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create: function() {
                        var e = this;
                        p.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: J.run.bind(e),
                                start: J.start.bind(e),
                                stop: J.stop.bind(e),
                                pause: J.pause.bind(e),
                                onTransitionEnd: function(t) {
                                    e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                                }
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.params.autoplay.enabled && this.autoplay.start()
                        },
                        beforeTransitionStart: function(e, t) {
                            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                        },
                        sliderFirstMove: function() {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                        },
                        destroy: function() {
                            this.autoplay.running && this.autoplay.stop()
                        }
                    }
                }, {
                    name: "effect-fade",
                    params: {
                        fadeEffect: {
                            crossFade: !1
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            fadeEffect: {
                                setTranslate: Z.setTranslate.bind(this),
                                setTransition: Z.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            var e = this;
                            if ("fade" === e.params.effect) {
                                e.classNames.push(e.params.containerModifierClass + "fade");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                p.extend(e.params, t), p.extend(e.originalParams, t)
                            }
                        },
                        setTranslate: function() {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate()
                        },
                        setTransition: function(e) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-cube",
                    params: {
                        cubeEffect: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            cubeEffect: {
                                setTranslate: Q.setTranslate.bind(this),
                                setTransition: Q.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            var e = this;
                            if ("cube" === e.params.effect) {
                                e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: !1,
                                    virtualTranslate: !0
                                };
                                p.extend(e.params, t), p.extend(e.originalParams, t)
                            }
                        },
                        setTranslate: function() {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate()
                        },
                        setTransition: function(e) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-flip",
                    params: {
                        flipEffect: {
                            slideShadows: !0,
                            limitRotation: !0
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            flipEffect: {
                                setTranslate: ee.setTranslate.bind(this),
                                setTransition: ee.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            var e = this;
                            if ("flip" === e.params.effect) {
                                e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                p.extend(e.params, t), p.extend(e.originalParams, t)
                            }
                        },
                        setTranslate: function() {
                            "flip" === this.params.effect && this.flipEffect.setTranslate()
                        },
                        setTransition: function(e) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-coverflow",
                    params: {
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            coverflowEffect: {
                                setTranslate: te.setTranslate.bind(this),
                                setTransition: te.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            var e = this;
                            "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                        },
                        setTranslate: function() {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                        },
                        setTransition: function(e) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "thumbs",
                    params: {
                        thumbs: {
                            swiper: null,
                            slideThumbActiveClass: "swiper-slide-thumb-active",
                            thumbsContainerClass: "swiper-container-thumbs"
                        }
                    },
                    create: function() {
                        p.extend(this, {
                            thumbs: {
                                swiper: null,
                                init: ie.init.bind(this),
                                update: ie.update.bind(this),
                                onThumbClick: ie.onThumbClick.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function() {
                            var e = this.params.thumbs;
                            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                        },
                        slideChange: function() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        update: function() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        resize: function() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        observerUpdate: function() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        setTransition: function(e) {
                            var t = this.thumbs.swiper;
                            t && t.setTransition(e)
                        },
                        beforeDestroy: function() {
                            var e = this.thumbs.swiper;
                            e && this.thumbs.swiperCreated && e && e.destroy()
                        }
                    }
                }];
            return void 0 === z.use && (z.use = z.Class.use, z.installModule = z.Class.installModule), z.use(ae), z
        }))
    },
    307: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(98)(!0);
        a(a.P, "Array", {
            includes: function(e) {
                return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i(115)("includes")
    },
    308: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(309);
        a(a.P + a.F * i(310)("includes"), "String", {
            includes: function(e) {
                return !!~n(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    309: function(e, t, i) {
        var a = i(116),
            n = i(43);
        e.exports = function(e, t, i) {
            if (a(t)) throw TypeError("String#" + i + " doesn't accept regex!");
            return String(n(e))
        }
    },
    310: function(e, t, i) {
        var a = i(16)("match");
        e.exports = function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (i) {
                try {
                    return t[a] = !1, !"/./" [e](t)
                } catch (e) {}
            }
            return !0
        }
    },
    311: function(e, t, i) {
        var a = i(12);
        a(a.S, "Object", {
            create: i(117)
        })
    },
    312: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(56),
            r = i(45),
            s = i(28),
            o = [].sort,
            l = [1, 2, 3];
        a(a.P + a.F * (s((function() {
            l.sort(void 0)
        })) || !s((function() {
            l.sort(null)
        })) || !i(59)(o)), "Array", {
            sort: function(e) {
                return void 0 === e ? o.call(r(this)) : o.call(r(this), n(e))
            }
        })
    },
    313: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(77)(5),
            r = !0;
        "find" in [] && Array(1).find((function() {
            r = !1
        })), a(a.P + a.F * r, "Array", {
            find: function(e) {
                return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i(115)("find")
    },
    314: function(e, t, i) {
        var a = i(12);
        a(a.S, "Array", {
            isArray: i(133)
        })
    },
    315: function(e, t, i) {
        var a = i(12);
        a(a.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    },
    316: function(e, t, i) {
        "use strict";
        var a = i(23),
            n = i(48),
            r = i(101),
            s = i(102);
        i(104)("match", 1, (function(e, t, i, o) {
            return [function(i) {
                var a = e(this),
                    n = null == i ? void 0 : i[t];
                return void 0 !== n ? n.call(i, a) : new RegExp(i)[t](String(a))
            }, function(e) {
                var t = o(i, e, this);
                if (t.done) return t.value;
                var l = a(e),
                    d = String(this);
                if (!l.global) return s(l, d);
                var c = l.unicode;
                l.lastIndex = 0;
                for (var u, p = [], h = 0; null !== (u = s(l, d));) {
                    var f = String(u[0]);
                    p[h] = f, "" === f && (l.lastIndex = r(d, n(l.lastIndex), c)), h++
                }
                return 0 === h ? null : p
            }]
        }))
    },
    317: function(e, t, i) {
        "use strict";
        i(318)("trim", (function(e) {
            return function() {
                return e(this, 3)
            }
        }))
    },
    318: function(e, t, i) {
        var a = i(12),
            n = i(43),
            r = i(28),
            s = i(319),
            o = "[" + s + "]",
            l = RegExp("^" + o + o + "*"),
            d = RegExp(o + o + "*$"),
            c = function(e, t, i) {
                var n = {},
                    o = r((function() {
                        return !!s[e]() || "​" != "​" [e]()
                    })),
                    l = n[e] = o ? t(u) : s[e];
                i && (n[i] = l), a(a.P + a.F * o, "String", n)
            },
            u = c.trim = function(e, t) {
                return e = String(n(e)), 1 & t && (e = e.replace(l, "")), 2 & t && (e = e.replace(d, "")), e
            };
        e.exports = c
    },
    319: function(e, t) {
        e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    },
    34: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    35: function(e, t, i) {
        var a = i(23),
            n = i(148),
            r = i(131),
            s = Object.defineProperty;
        t.f = i(21) ? Object.defineProperty : function(e, t, i) {
            if (a(e), t = r(t, !0), a(i), n) try {
                return s(e, t, i)
            } catch (e) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (e[t] = i.value), e
        }
    },
    36: function(e, t, i) {
        var a = i(27),
            n = i(39),
            r = i(47),
            s = i(76)("src"),
            o = i(197),
            l = ("" + o).split("toString");
        i(51).inspectSource = function(e) {
            return o.call(e)
        }, (e.exports = function(e, t, i, o) {
            var d = "function" == typeof i;
            d && (r(i, "name") || n(i, "name", t)), e[t] !== i && (d && (r(i, s) || n(i, s, e[t] ? "" + e[t] : l.join(String(t)))), e === a ? e[t] = i : o ? e[t] ? e[t] = i : n(e, t, i) : (delete e[t], n(e, t, i)))
        })(Function.prototype, "toString", (function() {
            return "function" == typeof this && this[s] || o.call(this)
        }))
    },
    38: function(e, t, i) {
        "use strict";
        var a = i(192),
            n = i(288),
            r = Object.prototype.toString;

        function s(e) {
            return "[object Array]" === r.call(e)
        }

        function o(e) {
            return null !== e && "object" == typeof e
        }

        function l(e) {
            return "[object Function]" === r.call(e)
        }

        function d(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]), s(e))
                    for (var i = 0, a = e.length; i < a; i++) t.call(null, e[i], i, e);
                else
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
        }
        e.exports = {
            isArray: s,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === r.call(e)
            },
            isBuffer: n,
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isObject: o,
            isUndefined: function(e) {
                return void 0 === e
            },
            isDate: function(e) {
                return "[object Date]" === r.call(e)
            },
            isFile: function(e) {
                return "[object File]" === r.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === r.call(e)
            },
            isFunction: l,
            isStream: function(e) {
                return o(e) && l(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: d,
            merge: function e() {
                var t = {};

                function i(i, a) {
                    "object" == typeof t[a] && "object" == typeof i ? t[a] = e(t[a], i) : t[a] = i
                }
                for (var a = 0, n = arguments.length; a < n; a++) d(arguments[a], i);
                return t
            },
            extend: function(e, t, i) {
                return d(t, (function(t, n) {
                    e[n] = i && "function" == typeof t ? a(t, i) : t
                })), e
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    },
    39: function(e, t, i) {
        var a = i(35),
            n = i(82);
        e.exports = i(21) ? function(e, t, i) {
            return a.f(e, t, n(1, i))
        } : function(e, t, i) {
            return e[t] = i, e
        }
    },
    40: function(e, t, i) {
        var a = i(12);
        a(a.S + a.F * !i(21), "Object", {
            defineProperty: i(35).f
        })
    },
    43: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    44: function(e, t) {
        function i(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = i = function(e) {
                return typeof e
            } : e.exports = i = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, i(t)
        }
        e.exports = i
    },
    45: function(e, t, i) {
        var a = i(43);
        e.exports = function(e) {
            return Object(a(e))
        }
    },
    46: function(e, t, i) {
        "use strict";
        var a = i(103),
            n = {};
        n[i(16)("toStringTag")] = "z", n + "" != "[object z]" && i(36)(Object.prototype, "toString", (function() {
            return "[object " + a(this) + "]"
        }), !0)
    },
    47: function(e, t) {
        var i = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return i.call(e, t)
        }
    },
    48: function(e, t, i) {
        var a = i(66),
            n = Math.min;
        e.exports = function(e) {
            return e > 0 ? n(a(e), 9007199254740991) : 0
        }
    },
    51: function(e, t) {
        var i = e.exports = {
            version: "2.6.12"
        };
        "number" == typeof __e && (__e = i)
    },
    52: function(e, t, i) {
        "use strict";
        i(201);
        var a = i(23),
            n = i(78),
            r = i(21),
            s = /./.toString,
            o = function(e) {
                i(36)(RegExp.prototype, "toString", e, !0)
            };
        i(28)((function() {
            return "/a/b" != s.call({
                source: "a",
                flags: "b"
            })
        })) ? o((function() {
            var e = a(this);
            return "/".concat(e.source, "/", "flags" in e ? e.flags : !r && e instanceof RegExp ? n.call(e) : void 0)
        })) : "toString" != s.name && o((function() {
            return s.call(this)
        }))
    },
    53: function(e, t, i) {
        var a = Date.prototype,
            n = a.toString,
            r = a.getTime;
        new Date(NaN) + "" != "Invalid Date" && i(36)(a, "toString", (function() {
            var e = r.call(this);
            return e == e ? n.call(this) : "Invalid Date"
        }))
    },
    56: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    57: function(e, t, i) {
        var a = i(114),
            n = i(43);
        e.exports = function(e) {
            return a(n(e))
        }
    },
    58: function(e, t) {
        var i = {}.toString;
        e.exports = function(e) {
            return i.call(e).slice(8, -1)
        }
    },
    59: function(e, t, i) {
        "use strict";
        var a = i(28);
        e.exports = function(e, t) {
            return !!e && a((function() {
                t ? e.call(null, (function() {}), 1) : e.call(null)
            }))
        }
    },
    60: function(e, t, i) {
        "use strict";
        var a = i(115),
            n = i(203),
            r = i(80),
            s = i(57);
        e.exports = i(168)(Array, "Array", (function(e, t) {
            this._t = s(e), this._i = 0, this._k = t
        }), (function() {
            var e = this._t,
                t = this._k,
                i = this._i++;
            return !e || i >= e.length ? (this._t = void 0, n(1)) : n(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]])
        }), "values"), r.Arguments = r.Array, a("keys"), a("values"), a("entries")
    },
    65: function(e, t, i) {
        var a = i(56);
        e.exports = function(e, t, i) {
            if (a(e), void 0 === t) return e;
            switch (i) {
                case 1:
                    return function(i) {
                        return e.call(t, i)
                    };
                case 2:
                    return function(i, a) {
                        return e.call(t, i, a)
                    };
                case 3:
                    return function(i, a, n) {
                        return e.call(t, i, a, n)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    },
    66: function(e, t) {
        var i = Math.ceil,
            a = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? a : i)(e)
        }
    },
    67: function(e, t, i) {
        var a = i(149),
            n = i(99);
        e.exports = Object.keys || function(e) {
            return a(e, n)
        }
    },
    675: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i(2);
            i(677);
            var a = t(i(306));
            i(1221);
            e((function() {
                ({
                    wid: parseInt(e(".features-top .swiper-slide").eq(0).width()),
                    init: function() {
                        var t = this;
                        e(".gifs").show(), this.show_gifs(), window.onresize = function() {
                            t.wid = parseInt(e(".features-top .swiper-slide").eq(0).width())
                        }, this.features_banner()
                    },
                    show_gifs: function() {
                        var t = -1;
                        e(".icons").on("click", "div", (function() {
                            var i = e(this).index();
                            i == t || -1 == t ? (e(".gifs").toggleClass("active"), e(".gifs img").eq(i).show().siblings().hide()) : (e(".gifs").removeClass("active"), setTimeout((function() {
                                e(".gifs").addClass("active"), e(".gifs img").eq(i).show().siblings().hide()
                            }), 500)), t = i
                        }))
                    },
                    features_banner: function() {
                        var e = this,
                            t = new a.default(".features-top", {
                                initialSlide: 0,
                                loop: !0,
                                speed: 500,
                                slidesPerView: "auto",
                                loopAdditionalSlides: 1,
                                watchSlidesProgress: !0,
                                centeredSlides: !0,
                                autoplay: {
                                    delay: 2e3,
                                    disableOnInteraction: !1
                                },
                                allowTouchMove: !0,
                                observer: !0,
                                observeParents: !0,
                                navigation: {
                                    nextEl: ".features .next",
                                    prevEl: ".features .prev"
                                },
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0
                                },
                                on: {
                                    progress: function(t) {
                                        for (var i = 0; i < this.slides.length; i++) {
                                            var a = this.slides.eq(i),
                                                n = this.slides[i].progress,
                                                r = 1;
                                            Math.abs(n) > 1 && (r = .3 * (Math.abs(n) - 1) + 1);
                                            var s = n * r * (e.wid / 1.5) + "px",
                                                o = 1 - Math.abs(n) / this.slides.length,
                                                l = 999 - Math.abs(Math.round(10 * n)),
                                                d = 1 - Math.abs(n) / 3.5;
                                            a.transform("translateX(" + s + ") scale(" + o + ")"), a.css("zIndex", l), a.css("opacity", 1), a.css("filter", "brightness(" + d + ")"), Math.abs(n) > 2 && a.css("opacity", 0)
                                        }
                                    },
                                    setTransition: function(e) {
                                        for (var t = 0; t < this.slides.length; t++) {
                                            this.slides.eq(t).transition(e)
                                        }
                                    }
                                }
                            });
                        console.log(t.autoplay), t && this.mouseoverOrout(t)
                    },
                    mouseoverOrout: function(e, t) {
                        e && (e.el.onmouseover = function() {
                            e.autoplay.stop(), t && t.autoplay.stop()
                        }, e.el.onmouseout = function() {
                            e.autoplay.start(), t && t.autoplay.start()
                        })
                    }
                }).init()
            }))
        }).call(this, i(112))
    },
    677: function(e, t, i) {
        "use strict";
        (function(e) {
            i(2)(i(286));
            i(1215), i(304);
            e((function() {
                ({
                    $navs: e(".header .nav li"),
                    init: function() {
                        var t = e("section"),
                            i = this;
                        this.$navs.on("click", (function() {
                            var a = e(this).index();
                            i.$navs.eq(a).addClass("active").siblings().removeClass("active"), e("html,body").animate({
                                scrollTop: t.eq(a).offset().top
                            }, {
                                duration: 500,
                                easing: "swing"
                            })
                        })), e(window).scroll((function() {
                            for (var a = e(window).scrollTop(), n = 0; n < i.$navs.length; n++) t.eq(n).offset().top <= a + 100 && i.$navs.eq(n).addClass("active").siblings().removeClass("active")
                        })), e(".concat").hover((function() {
                            e(".email-box").fadeIn()
                        }), (function() {
                            e(".email-box").fadeOut()
                        }))
                    }
                }).init()
            }))
        }).call(this, i(112))
    },
    678: function(e, t, i) {
        "use strict";
        i.r(t), t.default = 'module.exports = "<header>\\n    <div class=\\"header\\">\\n        <ul class=\\"nav\\">\\n            <li class=\\"active\\">\\n                <img src=\\"" + require("../images/common/1_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/1_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/2_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/2_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/3_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/3_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/4_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/4_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/5_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/5_on.png") + "\\" alt=\\"\\">\\n            </li>\\n        </ul>\\n    </div>\\n\\n</header>";'
    },
    679: function(e, t, i) {
        "use strict";
        i.r(t), t.default = 'module.exports = "<footer>\\n    <div class=\\"logo\\">\\n    </div>\\n    <div class=\\"text\\">\\n        \x3c!-- <p><a href=\\"<%= initData.userLink %>\\" target=\\"_blank\\" class=\\"pro\\">用戶協定</a>\\n            <a href=<%=initData.privacyLink %>\\" target=\\"_blank\\" class=\\"pro\\">隱私政策</a>\\n            <span class=\\"pro concat\\">聯系我們</span>\\n        </p> --\x3e\\n        <div class=\\"left\\">\\n            <p>公司：香港商途達有限公司台灣分公司</p>\\n            <p>Email：<%- initData.email %>\\n            </p>\\n            <p>用戶協議：<a class=\\"pro\\" href=\\"<%= initData.userLink %>\\" target=\\"_blank\\">\\n                    <%- initData.userLink %>\\n                </a>\\n\\n            </p>\\n            <p>隱私權條款：<a class=\\"pro\\" href=\\"<%=initData.privacyLink %>\\" target=\\"_blank\\">\\n                    <%- initData.privacyLink %>\\n                </a></p>\\n        </div>\\n        <div class=\\"right\\">\\n            <img src=\\"" + require("../images/common/class.jpg") + "\\" alt=\\"\\">\\n            <div class=\\"grade-info\\">\\n                <p>※本軟體因涉及性、暴力情節，依遊戲軟體分級管理辦法分類為輔12級。</p>\\n                <p>※本遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。</p>\\n                <p>※請注意遊戲時間，避免沉迷。</p>\\n            </div>\\n        </div>\\n        <p class=\\"reserved\\">Published by TOUDA TAIWAN BRANCH © LONGSIN All Rights Reserved.</p>\\n    </div>\\n    <div class=\\"email-box\\">\\n        <%- initData.email %>\\n    </div>\\n</footer>";'
    },
    68: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(77)(0),
            r = i(59)([].forEach, !0);
        a(a.P + a.F * !r, "Array", {
            forEach: function(e) {
                return n(this, e, arguments[1])
            }
        })
    },
    680: function(e, t, i) {
        "use strict";
        i.r(t), t.default = 'module.exports = "<!DOCTYPE html>\\n<html lang=\\"en\\">\\n\\n<head>\\n\\t<meta name=\\"description\\" content=\\"我要練神功\\">\\n<meta name=\\"keywords\\" content=\\"我要練神功\\">\\n<meta charset=\\"UTF-8\\">\\n<meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\\">\\n<link rel=\\"shurtcut icon\\" href=\\"" + require("../../common/images/favicon.ico") + "\\">\\n<title>我要練神功</title>\\n<meta property=\\"og:type\\" content=\\"website\\">\\n<meta property=\\"og:url\\" content=\\"https://www.facebook.com/WYLSG\\">\\n<meta property=\\"og:title\\" content=\\"我要練神功\\">\\n<meta property=\\"og:description\\" content=\\"我要練神功\\">\\n<meta name=\\"keywords\\" content=\\"我要練神功\\">\\n\x3c!-- fb 登录 --\x3e\\n<script>\\n    window.fbAsyncInit = function () {\\n        FB.init({\\n            appId: \'491583228760641\', // 正式\\n            cookie: true,  // enable cookies to allow the server to access \\n            // the session\\n            xfbml: true,  // parse social plugins on this page\\n            version: \'v9.0\' // use graph api version 3.1li\\n        });\\n    };\\n    // // Load the SDK asynchronously\\n    (function (d, s, id) {\\n        var js, fjs = d.getElementsByTagName(s)[0];\\n        if (d.getElementById(id)) return;\\n        js = d.createElement(s); js.id = id;\\n        js.src = \\"https://connect.facebook.net/en_US/sdk.js\\";\\n        fjs.parentNode.insertBefore(js, fjs);\\n    }(document, \'script\', \'facebook-jssdk\'));\\n\\n<\/script>\\n</head>\\n\\n\\n<body data-gray=\\"<%= initData.isGray %>\\">\\n\\t<% if (!initData.isShowHome) { %>\\n\\t\\t<div id=\\"root\\">\\n\\t\\t\\t<header>\\n    <div class=\\"header\\">\\n        <ul class=\\"nav\\">\\n            <li class=\\"active\\">\\n                <img src=\\"" + require("../images/common/1_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/1_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/2_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/2_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/3_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/3_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/4_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/4_on.png") + "\\" alt=\\"\\">\\n            </li>\\n            <li class=\\"\\">\\n                <img src=\\"" + require("../images/common/5_off.png") + "\\" alt=\\"\\">\\n                <img src=\\"" + require("../images/common/5_on.png") + "\\" alt=\\"\\">\\n            </li>\\n        </ul>\\n    </div>\\n\\n</header>\\n\\t\\t\\t\\t<div class=\\"wrapper\\">\\n\\t\\t\\t\\t\\t<section class=\\"first\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"<%= initData.banner.pcUrl%>\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"head\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"download\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"download-btns\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<% for(var i=0;i < initData.newsBanner.length; i++){ %>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"btn\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"<%= initData.newsBanner[i].href || \'javascript:;\' %>\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttarget=\\"<%= initData.newsBanner[i].href?\'_blank\':\'\' %>\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"<%= initData.newsBanner[i].bUrl %>\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<% } %>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</section>\\n\\t\\t\\t\\t\\t<section class=\\"second\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/bgs/bg2.jpg") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"news-btns\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"https://www.facebook.com/WYLSG\\" target=\\"_blank\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/fb.png") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"https://bit.ly/3htHejK\\" target=\\"_blank\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/baha.png") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"news\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"fb\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"fb-page\\" data-href=\\"https://www.facebook.com/WYLSG\\" data-tabs=\\"timeline\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdata-small-header=\\"true\\" data-width=\\"500\\" data-height=\\"580\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tdata-adapt-container-width=\\"true\\" data-hide-cover=\\"false\\" data-show-facepile=\\"true\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</section>\\n\\t\\t\\t\\t\\t<section class=\\"three\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/bgs/bg3.jpg") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"icons\\">\\n\\t\\t\\t\\t\\t\\t\\t<div></div>\\n\\t\\t\\t\\t\\t\\t\\t<div></div>\\n\\t\\t\\t\\t\\t\\t\\t<div></div>\\n\\t\\t\\t\\t\\t\\t\\t<div></div>\\n\\t\\t\\t\\t\\t\\t\\t<div></div>\\n\\t\\t\\t\\t\\t\\t\\t<div></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"gifs\\">\\n\\t\\t\\t\\t\\t\\t\\t<% for(var i=0;i < initData.gifs.length; i++){ %>\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"<%= initData.gifs[i].pcUrl %>\\" title=\\"\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t<% } %>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</section>\\n\\t\\t\\t\\t\\t<section class=\\"four\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/bgs/bg4.jpg") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t<iframe width=\\"560\\" height=\\"315\\" src=\\"<%= initData.videoLink %>\\" title=\\"YouTube video player\\"\\n\\t\\t\\t\\t\\t\\t\\tframeborder=\\"0\\"\\n\\t\\t\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\"\\n\\t\\t\\t\\t\\t\\t\\tallowfullscreen></iframe>\\n\\n\\t\\t\\t\\t\\t</section>\\n\\t\\t\\t\\t\\t<section class=\\"five\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/bgs/bg5.jpg") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"features\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"swiper-container features-top swiper-container-horizontal\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"swiper-wrapper\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<% for(var i=0;i < initData.games.length; i++){ %>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"swiper-slide\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"<%= initData.games[i].pcUrl %>\\" title=\\"\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<% } %>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\x3c!-- Add Pagination --\x3e\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"swiper-pagination\\">\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"next\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/right.png") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"prev\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"" + require("../images/home/left.png") + "\\" alt=\\"\\">\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t</section>\\n\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<footer>\\n    <div class=\\"logo\\">\\n    </div>\\n    <div class=\\"text\\">\\n        \x3c!-- <p><a href=\\"<%= initData.userLink %>\\" target=\\"_blank\\" class=\\"pro\\">用戶協定</a>\\n            <a href=<%=initData.privacyLink %>\\" target=\\"_blank\\" class=\\"pro\\">隱私政策</a>\\n            <span class=\\"pro concat\\">聯系我們</span>\\n        </p> --\x3e\\n        <div class=\\"left\\">\\n            <p>公司：香港商途達有限公司台灣分公司</p>\\n            <p>Email：<%- initData.email %>\\n            </p>\\n            <p>用戶協議：<a class=\\"pro\\" href=\\"<%= initData.userLink %>\\" target=\\"_blank\\">\\n                    <%- initData.userLink %>\\n                </a>\\n\\n            </p>\\n            <p>隱私權條款：<a class=\\"pro\\" href=\\"<%=initData.privacyLink %>\\" target=\\"_blank\\">\\n                    <%- initData.privacyLink %>\\n                </a></p>\\n        </div>\\n        <div class=\\"right\\">\\n            <img src=\\"" + require("../images/common/class.jpg") + "\\" alt=\\"\\">\\n            <div class=\\"grade-info\\">\\n                <p>※本軟體因涉及性、暴力情節，依遊戲軟體分級管理辦法分類為輔12級。</p>\\n                <p>※本遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。</p>\\n                <p>※請注意遊戲時間，避免沉迷。</p>\\n            </div>\\n        </div>\\n        <p class=\\"reserved\\">Published by TOUDA TAIWAN BRANCH © LONGSIN All Rights Reserved.</p>\\n    </div>\\n    <div class=\\"email-box\\">\\n        <%- initData.email %>\\n    </div>\\n</footer>\\n\\t\\t</div>\\n\\t\\t<% } else { %>\\n\\t\\t\\t<div class=\\"record\\">\\n\\t\\t\\t\\t<%- initData.record %>\\n\\t\\t\\t</div>\\n\\t\\t\\t<% } %>\\n</body>\\n\\n</html>";'
    },
    76: function(e, t) {
        var i = 0,
            a = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + a).toString(36))
        }
    },
    77: function(e, t, i) {
        var a = i(65),
            n = i(114),
            r = i(45),
            s = i(48),
            o = i(199);
        e.exports = function(e, t) {
            var i = 1 == e,
                l = 2 == e,
                d = 3 == e,
                c = 4 == e,
                u = 6 == e,
                p = 5 == e || u,
                h = t || o;
            return function(t, o, f) {
                for (var v, m, g = r(t), b = n(g), y = a(o, f, 3), w = s(b.length), x = 0, T = i ? h(t, w) : l ? h(t, 0) : void 0; w > x; x++)
                    if ((p || x in b) && (m = y(v = b[x], x, g), e))
                        if (i) T[x] = m;
                        else if (m) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return v;
                        case 6:
                            return x;
                        case 2:
                            T.push(v)
                    } else if (c) return !1;
                return u ? -1 : d || c ? c : T
            }
        }
    },
    78: function(e, t, i) {
        "use strict";
        var a = i(23);
        e.exports = function() {
            var e = a(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    },
    79: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(77)(1);
        a(a.P + a.F * !i(59)([].map, !0), "Array", {
            map: function(e) {
                return n(this, e, arguments[1])
            }
        })
    },
    80: function(e, t) {
        e.exports = {}
    },
    82: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    83: function(e, t, i) {
        var a = i(51),
            n = i(27),
            r = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
        (e.exports = function(e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: a.version,
            mode: i(91) ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    },
    84: function(e, t, i) {
        var a = i(12);
        a(a.S + a.F * !i(21), "Object", {
            defineProperties: i(132)
        })
    },
    85: function(e, t, i) {
        for (var a = i(60), n = i(67), r = i(36), s = i(27), o = i(39), l = i(80), d = i(16), c = d("iterator"), u = d("toStringTag"), p = l.Array, h = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, f = n(h), v = 0; v < f.length; v++) {
            var m, g = f[v],
                b = h[g],
                y = s[g],
                w = y && y.prototype;
            if (w && (w[c] || o(w, c, p), w[u] || o(w, u, g), l[g] = p, b))
                for (m in a) w[m] || r(w, m, a[m], !0)
        }
    },
    86: function(e, t, i) {
        var a = i(45),
            n = i(67);
        i(206)("keys", (function() {
            return function(e) {
                return n(a(e))
            }
        }))
    },
    87: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(77)(2);
        a(a.P + a.F * !i(59)([].filter, !0), "Array", {
            filter: function(e) {
                return n(this, e, arguments[1])
            }
        })
    },
    91: function(e, t) {
        e.exports = !1
    },
    92: function(e, t, i) {
        var a = i(83)("keys"),
            n = i(76);
        e.exports = function(e) {
            return a[e] || (a[e] = n(e))
        }
    },
    93: function(e, t, i) {
        "use strict";
        var a, n, r = i(78),
            s = RegExp.prototype.exec,
            o = String.prototype.replace,
            l = s,
            d = (a = /a/, n = /b*/g, s.call(a, "a"), s.call(n, "a"), 0 !== a.lastIndex || 0 !== n.lastIndex),
            c = void 0 !== /()??/.exec("")[1];
        (d || c) && (l = function(e) {
            var t, i, a, n, l = this;
            return c && (i = new RegExp("^" + l.source + "$(?!\\s)", r.call(l))), d && (t = l.lastIndex), a = s.call(l, e), d && a && (l.lastIndex = l.global ? a.index + a[0].length : t), c && a && a.length > 1 && o.call(a[0], i, (function() {
                for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (a[n] = void 0)
            })), a
        }), e.exports = l
    },
    97: function(e, t, i) {
        "use strict";
        var a = i(12),
            n = i(98)(!1),
            r = [].indexOf,
            s = !!r && 1 / [1].indexOf(1, -0) < 0;
        a(a.P + a.F * (s || !i(59)(r)), "Array", {
            indexOf: function(e) {
                return s ? r.apply(this, arguments) || 0 : n(this, e, arguments[1])
            }
        })
    },
    98: function(e, t, i) {
        var a = i(57),
            n = i(48),
            r = i(198);
        e.exports = function(e) {
            return function(t, i, s) {
                var o, l = a(t),
                    d = n(l.length),
                    c = r(s, d);
                if (e && i != i) {
                    for (; d > c;)
                        if ((o = l[c++]) != o) return !0
                } else
                    for (; d > c; c++)
                        if ((e || c in l) && l[c] === i) return e || c || 0;
                return !e && -1
            }
        }
    },
    99: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
});