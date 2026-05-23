var e = Object.defineProperty
  , t = Object.defineProperties
  , n = Object.getOwnPropertyDescriptors
  , r = Object.getOwnPropertySymbols
  , o = Object.prototype.hasOwnProperty
  , i = Object.prototype.propertyIsEnumerable
  , a = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e)
  , s = (t, n, r) => n in t ? e(t, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[n] = r
  , u = (e, t) => {
    for (var n in t || (t = {}))
        o.call(t, n) && s(e, n, t[n]);
    if (r)
        for (var n of r(t))
            i.call(t, n) && s(e, n, t[n]);
    return e
}
  , l = (e, t, n) => new Promise(( (r, o) => {
    var i = e => {
        try {
            s(n.next(e))
        } catch (t) {
            o(t)
        }
    }
      , a = e => {
        try {
            s(n.throw(e))
        } catch (t) {
            o(t)
        }
    }
      , s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
    s((n = n.apply(e, t)).next())
}
))
  , c = function(e, t) {
    this[0] = e,
    this[1] = t
}
  , d = (e, t, n) => {
    var r = (e, t, o, i) => {
        try {
            var a = n[e](t)
              , s = (t = a.value)instanceof c
              , u = a.done;
            Promise.resolve(s ? t[0] : t).then((n => s ? r("return" === e ? e : "next", t[1] ? {
                done: n.done,
                value: n.value
            } : n, o, i) : o({
                value: n,
                done: u
            }))).catch((e => r("throw", e, o, i)))
        } catch (l) {
            i(l)
        }
    }
      , o = e => i[e] = t => new Promise(( (n, o) => r(e, t, n, o)))
      , i = {};
    return n = n.apply(e, t),
    i[a("asyncIterator")] = () => i,
    o("next"),
    o("throw"),
    o("return"),
    i
}
  , f = e => {
    var t, n = e[a("asyncIterator")], r = !1, o = {};
    return null == n ? (n = e[a("iterator")](),
    t = e => o[e] = t => n[e](t)) : (n = n.call(e),
    t = e => o[e] = t => {
        if (r) {
            if (r = !1,
            "throw" === e)
                throw t;
            return t
        }
        return r = !0,
        {
            done: !1,
            value: new c(new Promise((r => {
                var o = n[e](t);
                o instanceof Object || (e => {
                    throw TypeError(e)
                }
                )("Object expected"),
                r(o)
            }
            )),1)
        }
    }
    ),
    o[a("iterator")] = () => o,
    t("next"),
    "throw"in n ? t("throw") : o.throw = e => {
        throw e
    }
    ,
    "return"in n && t("return"),
    o
}
;
function p(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if ("string" != typeof r && !Array.isArray(r))
            for (const t in r)
                if ("default" !== t && !(t in e)) {
                    const n = Object.getOwnPropertyDescriptor(r, t);
                    n && Object.defineProperty(e, t, n.get ? n : {
                        enumerable: !0,
                        get: () => r[t]
                    })
                }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
var h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function m(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var g, y, v = {
    exports: {}
}, b = {}, _ = {
    exports: {}
}, w = {
    exports: {}
};
g = w,
y = w.exports,
function() {
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
    var e = Symbol.for("react.element")
      , t = Symbol.for("react.portal")
      , n = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , i = Symbol.for("react.provider")
      , a = Symbol.for("react.context")
      , s = Symbol.for("react.forward_ref")
      , u = Symbol.for("react.suspense")
      , l = Symbol.for("react.suspense_list")
      , c = Symbol.for("react.memo")
      , d = Symbol.for("react.lazy")
      , f = Symbol.for("react.offscreen")
      , p = Symbol.iterator
      , h = "@@iterator";
    function m(e) {
        if (null === e || "object" != typeof e)
            return null;
        var t = p && e[p] || e[h];
        return "function" == typeof t ? t : null
    }
    var v = {
        current: null
    }
      , b = {
        transition: null
    }
      , _ = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
    }
      , w = {
        current: null
    }
      , S = {}
      , k = null;
    function x(e) {
        k = e
    }
    S.setExtraStackFrame = function(e) {
        k = e
    }
    ,
    S.getCurrentStack = null,
    S.getStackAddendum = function() {
        var e = "";
        k && (e += k);
        var t = S.getCurrentStack;
        return t && (e += t() || ""),
        e
    }
    ;
    var E = !1
      , C = !1
      , T = !1
      , R = !1
      , O = !1
      , I = {
        ReactCurrentDispatcher: v,
        ReactCurrentBatchConfig: b,
        ReactCurrentOwner: w
    };
    function M(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        N("warn", e, n)
    }
    function P(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        N("error", e, n)
    }
    function N(e, t, n) {
        var r = I.ReactDebugCurrentFrame.getStackAddendum();
        "" !== r && (t += "%s",
        n = n.concat([r]));
        var o = n.map((function(e) {
            return String(e)
        }
        ));
        o.unshift("Warning: " + t),
        Function.prototype.apply.call(console[e], console, o)
    }
    I.ReactDebugCurrentFrame = S,
    I.ReactCurrentActQueue = _;
    var D = {};
    function L(e, t) {
        var n = e.constructor
          , r = n && (n.displayName || n.name) || "ReactClass"
          , o = r + "." + t;
        D[o] || (P("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, r),
        D[o] = !0)
    }
    var A = {
        isMounted: function(e) {
            return !1
        },
        enqueueForceUpdate: function(e, t, n) {
            L(e, "forceUpdate")
        },
        enqueueReplaceState: function(e, t, n, r) {
            L(e, "replaceState")
        },
        enqueueSetState: function(e, t, n, r) {
            L(e, "setState")
        }
    }
      , F = Object.assign
      , U = {};
    function j(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = U,
        this.updater = n || A
    }
    Object.freeze(U),
    j.prototype.isReactComponent = {},
    j.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }
    ,
    j.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }
    ;
    var z = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
    }
      , B = function(e, t) {
        Object.defineProperty(j.prototype, e, {
            get: function() {
                M("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1])
            }
        })
    };
    for (var q in z)
        z.hasOwnProperty(q) && B(q, z[q]);
    function W() {}
    function V(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = U,
        this.updater = n || A
    }
    W.prototype = j.prototype;
    var $ = V.prototype = new W;
    $.constructor = V,
    F($, j.prototype),
    $.isPureReactComponent = !0;
    var H = Array.isArray;
    function Q(e) {
        return H(e)
    }
    function Y(e) {
        return "" + e
    }
    function G(e) {
        if (function(e) {
            try {
                return Y(e),
                !1
            } catch (t) {
                return !0
            }
        }(e))
            return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", function(e) {
                return "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object"
            }(e)),
            Y(e)
    }
    function K(e) {
        return e.displayName || "Context"
    }
    function X(e) {
        if (null == e)
            return null;
        if ("number" == typeof e.tag && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
        "function" == typeof e)
            return e.displayName || e.name || null;
        if ("string" == typeof e)
            return e;
        switch (e) {
        case n:
            return "Fragment";
        case t:
            return "Portal";
        case o:
            return "Profiler";
        case r:
            return "StrictMode";
        case u:
            return "Suspense";
        case l:
            return "SuspenseList"
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case a:
                return K(e) + ".Consumer";
            case i:
                return K(e._context) + ".Provider";
            case s:
                return function(e, t, n) {
                    var r = e.displayName;
                    if (r)
                        return r;
                    var o = t.displayName || t.name || "";
                    return "" !== o ? n + "(" + o + ")" : n
                }(e, e.render, "ForwardRef");
            case c:
                var f = e.displayName || null;
                return null !== f ? f : X(e.type) || "Memo";
            case d:
                var p = e
                  , h = p._payload
                  , m = p._init;
                try {
                    return X(m(h))
                } catch (g) {
                    return null
                }
            }
        return null
    }
    var J, Z, ee, te = Object.prototype.hasOwnProperty, ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function re(e) {
        if (te.call(e, "ref")) {
            var t = Object.getOwnPropertyDescriptor(e, "ref").get;
            if (t && t.isReactWarning)
                return !1
        }
        return void 0 !== e.ref
    }
    function oe(e) {
        if (te.call(e, "key")) {
            var t = Object.getOwnPropertyDescriptor(e, "key").get;
            if (t && t.isReactWarning)
                return !1
        }
        return void 0 !== e.key
    }
    ee = {};
    var ie = function(t, n, r, o, i, a, s) {
        var u = {
            $$typeof: e,
            type: t,
            key: n,
            ref: r,
            props: s,
            _owner: a,
            _store: {}
        };
        return Object.defineProperty(u._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(u, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: o
        }),
        Object.defineProperty(u, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: i
        }),
        Object.freeze && (Object.freeze(u.props),
        Object.freeze(u)),
        u
    };
    function ae(e, t, n) {
        var r, o = {}, i = null, a = null, s = null, u = null;
        if (null != t)
            for (r in re(t) && (a = t.ref,
            function(e) {
                if ("string" == typeof e.ref && w.current && e.__self && w.current.stateNode !== e.__self) {
                    var t = X(w.current.type);
                    ee[t] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref),
                    ee[t] = !0)
                }
            }(t)),
            oe(t) && (G(t.key),
            i = "" + t.key),
            s = void 0 === t.__self ? null : t.__self,
            u = void 0 === t.__source ? null : t.__source,
            t)
                te.call(t, r) && !ne.hasOwnProperty(r) && (o[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l)
            o.children = n;
        else if (l > 1) {
            for (var c = Array(l), d = 0; d < l; d++)
                c[d] = arguments[d + 2];
            Object.freeze && Object.freeze(c),
            o.children = c
        }
        if (e && e.defaultProps) {
            var f = e.defaultProps;
            for (r in f)
                void 0 === o[r] && (o[r] = f[r])
        }
        if (i || a) {
            var p = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
            i && function(e, t) {
                var n = function() {
                    J || (J = !0,
                    P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                };
                n.isReactWarning = !0,
                Object.defineProperty(e, "key", {
                    get: n,
                    configurable: !0
                })
            }(o, p),
            a && function(e, t) {
                var n = function() {
                    Z || (Z = !0,
                    P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                };
                n.isReactWarning = !0,
                Object.defineProperty(e, "ref", {
                    get: n,
                    configurable: !0
                })
            }(o, p)
        }
        return ie(e, i, a, s, u, w.current, o)
    }
    function se(e, t, n) {
        if (null == e)
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r, o, i = F({}, e.props), a = e.key, s = e.ref, u = e._self, l = e._source, c = e._owner;
        if (null != t)
            for (r in re(t) && (s = t.ref,
            c = w.current),
            oe(t) && (G(t.key),
            a = "" + t.key),
            e.type && e.type.defaultProps && (o = e.type.defaultProps),
            t)
                te.call(t, r) && !ne.hasOwnProperty(r) && (void 0 === t[r] && void 0 !== o ? i[r] = o[r] : i[r] = t[r]);
        var d = arguments.length - 2;
        if (1 === d)
            i.children = n;
        else if (d > 1) {
            for (var f = Array(d), p = 0; p < d; p++)
                f[p] = arguments[p + 2];
            i.children = f
        }
        return ie(e.type, a, s, u, l, c, i)
    }
    function ue(t) {
        return "object" == typeof t && null !== t && t.$$typeof === e
    }
    var le = "."
      , ce = ":"
      , de = !1
      , fe = /\/+/g;
    function pe(e) {
        return e.replace(fe, "$&/")
    }
    function he(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? (G(e.key),
        n = "" + e.key,
        r = {
            "=": "=0",
            ":": "=2"
        },
        "$" + n.replace(/[=:]/g, (function(e) {
            return r[e]
        }
        ))) : t.toString(36);
        var n, r
    }
    function me(n, r, o, i, a) {
        var s = typeof n;
        "undefined" !== s && "boolean" !== s || (n = null);
        var u, l, c, d = !1;
        if (null === n)
            d = !0;
        else
            switch (s) {
            case "string":
            case "number":
                d = !0;
                break;
            case "object":
                switch (n.$$typeof) {
                case e:
                case t:
                    d = !0
                }
            }
        if (d) {
            var f = n
              , p = a(f)
              , h = "" === i ? le + he(f, 0) : i;
            if (Q(p)) {
                var g = "";
                null != h && (g = pe(h) + "/"),
                me(p, r, g, "", (function(e) {
                    return e
                }
                ))
            } else
                null != p && (ue(p) && (!p.key || f && f.key === p.key || G(p.key),
                u = p,
                l = o + (!p.key || f && f.key === p.key ? "" : pe("" + p.key) + "/") + h,
                p = ie(u.type, l, u.ref, u._self, u._source, u._owner, u.props)),
                r.push(p));
            return 1
        }
        var y = 0
          , v = "" === i ? le : i + ce;
        if (Q(n))
            for (var b = 0; b < n.length; b++)
                y += me(c = n[b], r, o, v + he(c, b), a);
        else {
            var _ = m(n);
            if ("function" == typeof _) {
                var w = n;
                _ === w.entries && (de || M("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),
                de = !0);
                for (var S, k = _.call(w), x = 0; !(S = k.next()).done; )
                    y += me(c = S.value, r, o, v + he(c, x++), a)
            } else if ("object" === s) {
                var E = String(n);
                throw new Error("Objects are not valid as a React child (found: " + ("[object Object]" === E ? "object with keys {" + Object.keys(n).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.")
            }
        }
        return y
    }
    function ge(e, t, n) {
        if (null == e)
            return e;
        var r = []
          , o = 0;
        return me(e, r, "", "", (function(e) {
            return t.call(n, e, o++)
        }
        )),
        r
    }
    var ye, ve = -1, be = 0, _e = 1, we = 2;
    function Se(e) {
        if (e._status === ve) {
            var t = (0,
            e._result)();
            if (t.then((function(t) {
                if (e._status === be || e._status === ve) {
                    var n = e;
                    n._status = _e,
                    n._result = t
                }
            }
            ), (function(t) {
                if (e._status === be || e._status === ve) {
                    var n = e;
                    n._status = we,
                    n._result = t
                }
            }
            )),
            e._status === ve) {
                var n = e;
                n._status = be,
                n._result = t
            }
        }
        if (e._status === _e) {
            var r = e._result;
            return void 0 === r && P("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", r),
            "default"in r || P("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", r),
            r.default
        }
        throw e._result
    }
    function ke(e) {
        return "string" == typeof e || "function" == typeof e || !!(e === n || e === o || O || e === r || e === u || e === l || R || e === f || E || C || T) || "object" == typeof e && null !== e && (e.$$typeof === d || e.$$typeof === c || e.$$typeof === i || e.$$typeof === a || e.$$typeof === s || e.$$typeof === ye || void 0 !== e.getModuleId)
    }
    function xe() {
        var e = v.current;
        return null === e && P("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),
        e
    }
    ye = Symbol.for("react.module.reference");
    var Ee, Ce, Te, Re, Oe, Ie, Me, Pe = 0;
    function Ne() {}
    Ne.__reactDisabledLog = !0;
    var De, Le = I.ReactCurrentDispatcher;
    function Ae(e, t, n) {
        if (void 0 === De)
            try {
                throw Error()
            } catch (o) {
                var r = o.stack.trim().match(/\n( *(at )?)/);
                De = r && r[1] || ""
            }
        return "\n" + De + e
    }
    var Fe, Ue = !1, je = "function" == typeof WeakMap ? WeakMap : Map;
    function ze(e, t) {
        if (!e || Ue)
            return "";
        var n, r = Fe.get(e);
        if (void 0 !== r)
            return r;
        Ue = !0;
        var o, i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0,
        o = Le.current,
        Le.current = null,
        function() {
            if (0 === Pe) {
                Ee = console.log,
                Ce = console.info,
                Te = console.warn,
                Re = console.error,
                Oe = console.group,
                Ie = console.groupCollapsed,
                Me = console.groupEnd;
                var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: Ne,
                    writable: !0
                };
                Object.defineProperties(console, {
                    info: e,
                    log: e,
                    warn: e,
                    error: e,
                    group: e,
                    groupCollapsed: e,
                    groupEnd: e
                })
            }
            Pe++
        }();
        try {
            if (t) {
                var a = function() {
                    throw Error()
                };
                if (Object.defineProperty(a.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(a, [])
                    } catch (h) {
                        n = h
                    }
                    Reflect.construct(e, [], a)
                } else {
                    try {
                        a.call()
                    } catch (h) {
                        n = h
                    }
                    e.call(a.prototype)
                }
            } else {
                try {
                    throw Error()
                } catch (h) {
                    n = h
                }
                e()
            }
        } catch (m) {
            if (m && n && "string" == typeof m.stack) {
                for (var s = m.stack.split("\n"), u = n.stack.split("\n"), l = s.length - 1, c = u.length - 1; l >= 1 && c >= 0 && s[l] !== u[c]; )
                    c--;
                for (; l >= 1 && c >= 0; l--,
                c--)
                    if (s[l] !== u[c]) {
                        if (1 !== l || 1 !== c)
                            do {
                                if (l--,
                                --c < 0 || s[l] !== u[c]) {
                                    var d = "\n" + s[l].replace(" at new ", " at ");
                                    return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)),
                                    "function" == typeof e && Fe.set(e, d),
                                    d
                                }
                            } while (l >= 1 && c >= 0);
                        break
                    }
            }
        } finally {
            Ue = !1,
            Le.current = o,
            function() {
                if (0 == --Pe) {
                    var e = {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0
                    };
                    Object.defineProperties(console, {
                        log: F({}, e, {
                            value: Ee
                        }),
                        info: F({}, e, {
                            value: Ce
                        }),
                        warn: F({}, e, {
                            value: Te
                        }),
                        error: F({}, e, {
                            value: Re
                        }),
                        group: F({}, e, {
                            value: Oe
                        }),
                        groupCollapsed: F({}, e, {
                            value: Ie
                        }),
                        groupEnd: F({}, e, {
                            value: Me
                        })
                    })
                }
                Pe < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
            }(),
            Error.prepareStackTrace = i
        }
        var f = e ? e.displayName || e.name : ""
          , p = f ? Ae(f) : "";
        return "function" == typeof e && Fe.set(e, p),
        p
    }
    function Be(e, t, n) {
        if (null == e)
            return "";
        if ("function" == typeof e)
            return ze(e, !(!(r = e.prototype) || !r.isReactComponent));
        var r;
        if ("string" == typeof e)
            return Ae(e);
        switch (e) {
        case u:
            return Ae("Suspense");
        case l:
            return Ae("SuspenseList")
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case s:
                return ze(e.render, !1);
            case c:
                return Be(e.type, t, n);
            case d:
                var o = e
                  , i = o._payload
                  , a = o._init;
                try {
                    return Be(a(i), t, n)
                } catch (f) {}
            }
        return ""
    }
    Fe = new je;
    var qe, We = {}, Ve = I.ReactDebugCurrentFrame;
    function $e(e) {
        if (e) {
            var t = e._owner
              , n = Be(e.type, e._source, t ? t.type : null);
            Ve.setExtraStackFrame(n)
        } else
            Ve.setExtraStackFrame(null)
    }
    function He(e) {
        if (e) {
            var t = e._owner;
            x(Be(e.type, e._source, t ? t.type : null))
        } else
            x(null)
    }
    function Qe() {
        if (w.current) {
            var e = X(w.current.type);
            if (e)
                return "\n\nCheck the render method of `" + e + "`."
        }
        return ""
    }
    qe = !1;
    var Ye = {};
    function Ge(e, t) {
        if (e._store && !e._store.validated && null == e.key) {
            e._store.validated = !0;
            var n = function(e) {
                var t = Qe();
                if (!t) {
                    var n = "string" == typeof e ? e : e.displayName || e.name;
                    n && (t = "\n\nCheck the top-level render call using <" + n + ">.")
                }
                return t
            }(t);
            if (!Ye[n]) {
                Ye[n] = !0;
                var r = "";
                e && e._owner && e._owner !== w.current && (r = " It was passed a child from " + X(e._owner.type) + "."),
                He(e),
                P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, r),
                He(null)
            }
        }
    }
    function Ke(e, t) {
        if ("object" == typeof e)
            if (Q(e))
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    ue(r) && Ge(r, t)
                }
            else if (ue(e))
                e._store && (e._store.validated = !0);
            else if (e) {
                var o = m(e);
                if ("function" == typeof o && o !== e.entries)
                    for (var i, a = o.call(e); !(i = a.next()).done; )
                        ue(i.value) && Ge(i.value, t)
            }
    }
    function Xe(e) {
        var t, n = e.type;
        if (null != n && "string" != typeof n) {
            if ("function" == typeof n)
                t = n.propTypes;
            else {
                if ("object" != typeof n || n.$$typeof !== s && n.$$typeof !== c)
                    return;
                t = n.propTypes
            }
            if (t) {
                var r = X(n);
                !function(e, t, n, r, o) {
                    var i = Function.call.bind(te);
                    for (var a in e)
                        if (i(e, a)) {
                            var s = void 0;
                            try {
                                if ("function" != typeof e[a]) {
                                    var u = Error((r || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                    throw u.name = "Invariant Violation",
                                    u
                                }
                                s = e[a](t, a, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                            } catch (l) {
                                s = l
                            }
                            !s || s instanceof Error || ($e(o),
                            P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, a, typeof s),
                            $e(null)),
                            s instanceof Error && !(s.message in We) && (We[s.message] = !0,
                            $e(o),
                            P("Failed %s type: %s", n, s.message),
                            $e(null))
                        }
                }(t, e.props, "prop", r, e)
            } else
                void 0 === n.PropTypes || qe || (qe = !0,
                P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X(n) || "Unknown"));
            "function" != typeof n.getDefaultProps || n.getDefaultProps.isReactClassApproved || P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")
        }
    }
    function Je(t, r, o) {
        var i, a, s = ke(t);
        if (!s) {
            var u = "";
            (void 0 === t || "object" == typeof t && null !== t && 0 === Object.keys(t).length) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var l, c = null != (i = r) && void 0 !== (a = i.__source) ? "\n\nCheck your code at " + a.fileName.replace(/^.*[\\\/]/, "") + ":" + a.lineNumber + "." : "";
            u += c || Qe(),
            null === t ? l = "null" : Q(t) ? l = "array" : void 0 !== t && t.$$typeof === e ? (l = "<" + (X(t.type) || "Unknown") + " />",
            u = " Did you accidentally export a JSX literal instead of a component?") : l = typeof t,
            P("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, u)
        }
        var d = ae.apply(this, arguments);
        if (null == d)
            return d;
        if (s)
            for (var f = 2; f < arguments.length; f++)
                Ke(arguments[f], t);
        return t === n ? function(e) {
            for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
                var r = t[n];
                if ("children" !== r && "key" !== r) {
                    He(e),
                    P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r),
                    He(null);
                    break
                }
            }
            null !== e.ref && (He(e),
            P("Invalid attribute `ref` supplied to `React.Fragment`."),
            He(null))
        }(d) : Xe(d),
        d
    }
    var Ze = !1
      , et = !1
      , tt = null
      , nt = 0
      , rt = !1;
    function ot(e) {
        var t = nt;
        nt++,
        null === _.current && (_.current = []);
        var n, r = _.isBatchingLegacy;
        try {
            if (_.isBatchingLegacy = !0,
            n = e(),
            !r && _.didScheduleLegacyUpdate) {
                var o = _.current;
                null !== o && (_.didScheduleLegacyUpdate = !1,
                ut(o))
            }
        } catch (c) {
            throw it(t),
            c
        } finally {
            _.isBatchingLegacy = r
        }
        if (null !== n && "object" == typeof n && "function" == typeof n.then) {
            var i = n
              , a = !1
              , s = {
                then: function(e, n) {
                    a = !0,
                    i.then((function(r) {
                        it(t),
                        0 === nt ? at(r, e, n) : e(r)
                    }
                    ), (function(e) {
                        it(t),
                        n(e)
                    }
                    ))
                }
            };
            return rt || "undefined" == typeof Promise || Promise.resolve().then((function() {}
            )).then((function() {
                a || (rt = !0,
                P("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))
            }
            )),
            s
        }
        var u = n;
        if (it(t),
        0 === nt) {
            var l = _.current;
            return null !== l && (ut(l),
            _.current = null),
            {
                then: function(e, t) {
                    null === _.current ? (_.current = [],
                    at(u, e, t)) : e(u)
                }
            }
        }
        return {
            then: function(e, t) {
                e(u)
            }
        }
    }
    function it(e) {
        e !== nt - 1 && P("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),
        nt = e
    }
    function at(e, t, n) {
        var r = _.current;
        if (null !== r)
            try {
                ut(r),
                function(e) {
                    if (null === tt)
                        try {
                            var t = ("require" + Math.random()).slice(0, 7);
                            tt = (g && g[t]).call(g, "timers").setImmediate
                        } catch (n) {
                            tt = function(e) {
                                !1 === et && (et = !0,
                                "undefined" == typeof MessageChannel && P("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                                var t = new MessageChannel;
                                t.port1.onmessage = e,
                                t.port2.postMessage(void 0)
                            }
                        }
                    tt(e)
                }((function() {
                    0 === r.length ? (_.current = null,
                    t(e)) : at(e, t, n)
                }
                ))
            } catch (o) {
                n(o)
            }
        else
            t(e)
    }
    var st = !1;
    function ut(e) {
        if (!st) {
            st = !0;
            var t = 0;
            try {
                for (; t < e.length; t++) {
                    var n = e[t];
                    do {
                        n = n(!0)
                    } while (null !== n)
                }
                e.length = 0
            } catch (r) {
                throw e = e.slice(t + 1),
                r
            } finally {
                st = !1
            }
        }
    }
    var lt = Je
      , ct = function(e, t, n) {
        for (var r = se.apply(this, arguments), o = 2; o < arguments.length; o++)
            Ke(arguments[o], r.type);
        return Xe(r),
        r
    }
      , dt = function(e) {
        var t = Je.bind(null, e);
        return t.type = e,
        Ze || (Ze = !0,
        M("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),
        Object.defineProperty(t, "type", {
            enumerable: !1,
            get: function() {
                return M("Factory.type is deprecated. Access the class directly before passing it to createFactory."),
                Object.defineProperty(this, "type", {
                    value: e
                }),
                e
            }
        }),
        t
    }
      , ft = {
        map: ge,
        forEach: function(e, t, n) {
            ge(e, (function() {
                t.apply(this, arguments)
            }
            ), n)
        },
        count: function(e) {
            var t = 0;
            return ge(e, (function() {
                t++
            }
            )),
            t
        },
        toArray: function(e) {
            return ge(e, (function(e) {
                return e
            }
            )) || []
        },
        only: function(e) {
            if (!ue(e))
                throw new Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    };
    y.Children = ft,
    y.Component = j,
    y.Fragment = n,
    y.Profiler = o,
    y.PureComponent = V,
    y.StrictMode = r,
    y.Suspense = u,
    y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I,
    y.act = ot,
    y.cloneElement = ct,
    y.createContext = function(e) {
        var t = {
            $$typeof: a,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        };
        t.Provider = {
            $$typeof: i,
            _context: t
        };
        var n = !1
          , r = !1
          , o = !1
          , s = {
            $$typeof: a,
            _context: t
        };
        return Object.defineProperties(s, {
            Provider: {
                get: function() {
                    return r || (r = !0,
                    P("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),
                    t.Provider
                },
                set: function(e) {
                    t.Provider = e
                }
            },
            _currentValue: {
                get: function() {
                    return t._currentValue
                },
                set: function(e) {
                    t._currentValue = e
                }
            },
            _currentValue2: {
                get: function() {
                    return t._currentValue2
                },
                set: function(e) {
                    t._currentValue2 = e
                }
            },
            _threadCount: {
                get: function() {
                    return t._threadCount
                },
                set: function(e) {
                    t._threadCount = e
                }
            },
            Consumer: {
                get: function() {
                    return n || (n = !0,
                    P("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),
                    t.Consumer
                }
            },
            displayName: {
                get: function() {
                    return t.displayName
                },
                set: function(e) {
                    o || (M("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", e),
                    o = !0)
                }
            }
        }),
        t.Consumer = s,
        t._currentRenderer = null,
        t._currentRenderer2 = null,
        t
    }
    ,
    y.createElement = lt,
    y.createFactory = dt,
    y.createRef = function() {
        var e = {
            current: null
        };
        return Object.seal(e),
        e
    }
    ,
    y.forwardRef = function(e) {
        null != e && e.$$typeof === c ? P("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" != typeof e ? P("forwardRef requires a render function but was given %s.", null === e ? "null" : typeof e) : 0 !== e.length && 2 !== e.length && P("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === e.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."),
        null != e && (null == e.defaultProps && null == e.propTypes || P("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));
        var t, n = {
            $$typeof: s,
            render: e
        };
        return Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return t
            },
            set: function(n) {
                t = n,
                e.name || e.displayName || (e.displayName = n)
            }
        }),
        n
    }
    ,
    y.isValidElement = ue,
    y.lazy = function(e) {
        var t, n, r = {
            $$typeof: d,
            _payload: {
                _status: ve,
                _result: e
            },
            _init: Se
        };
        return Object.defineProperties(r, {
            defaultProps: {
                configurable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    P("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),
                    t = e,
                    Object.defineProperty(r, "defaultProps", {
                        enumerable: !0
                    })
                }
            },
            propTypes: {
                configurable: !0,
                get: function() {
                    return n
                },
                set: function(e) {
                    P("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),
                    n = e,
                    Object.defineProperty(r, "propTypes", {
                        enumerable: !0
                    })
                }
            }
        }),
        r
    }
    ,
    y.memo = function(e, t) {
        ke(e) || P("memo: The first argument must be a component. Instead received: %s", null === e ? "null" : typeof e);
        var n, r = {
            $$typeof: c,
            type: e,
            compare: void 0 === t ? null : t
        };
        return Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return n
            },
            set: function(t) {
                n = t,
                e.name || e.displayName || (e.displayName = t)
            }
        }),
        r
    }
    ,
    y.startTransition = function(e, t) {
        var n = b.transition;
        b.transition = {};
        var r = b.transition;
        b.transition._updatedFibers = new Set;
        try {
            e()
        } finally {
            b.transition = n,
            null === n && r._updatedFibers && (r._updatedFibers.size > 10 && M("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),
            r._updatedFibers.clear())
        }
    }
    ,
    y.unstable_act = ot,
    y.useCallback = function(e, t) {
        return xe().useCallback(e, t)
    }
    ,
    y.useContext = function(e) {
        var t = xe();
        if (void 0 !== e._context) {
            var n = e._context;
            n.Consumer === e ? P("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && P("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")
        }
        return t.useContext(e)
    }
    ,
    y.useDebugValue = function(e, t) {
        return xe().useDebugValue(e, t)
    }
    ,
    y.useDeferredValue = function(e) {
        return xe().useDeferredValue(e)
    }
    ,
    y.useEffect = function(e, t) {
        return xe().useEffect(e, t)
    }
    ,
    y.useId = function() {
        return xe().useId()
    }
    ,
    y.useImperativeHandle = function(e, t, n) {
        return xe().useImperativeHandle(e, t, n)
    }
    ,
    y.useInsertionEffect = function(e, t) {
        return xe().useInsertionEffect(e, t)
    }
    ,
    y.useLayoutEffect = function(e, t) {
        return xe().useLayoutEffect(e, t)
    }
    ,
    y.useMemo = function(e, t) {
        return xe().useMemo(e, t)
    }
    ,
    y.useReducer = function(e, t, n) {
        return xe().useReducer(e, t, n)
    }
    ,
    y.useRef = function(e) {
        return xe().useRef(e)
    }
    ,
    y.useState = function(e) {
        return xe().useState(e)
    }
    ,
    y.useSyncExternalStore = function(e, t, n) {
        return xe().useSyncExternalStore(e, t, n)
    }
    ,
    y.useTransition = function() {
        return xe().useTransition()
    }
    ,
    y.version = "18.3.1",
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)
}();
var S = w.exports;
_.exports = S;
var k = _.exports;
const x = m(k)
  , E = p({
    __proto__: null,
    default: x
}, [k]);
!function() {
    var e = k
      , t = Symbol.for("react.element")
      , n = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , i = Symbol.for("react.profiler")
      , a = Symbol.for("react.provider")
      , s = Symbol.for("react.context")
      , u = Symbol.for("react.forward_ref")
      , l = Symbol.for("react.suspense")
      , c = Symbol.for("react.suspense_list")
      , d = Symbol.for("react.memo")
      , f = Symbol.for("react.lazy")
      , p = Symbol.for("react.offscreen")
      , h = Symbol.iterator
      , m = "@@iterator";
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        !function(e, t, n) {
            var r = g.ReactDebugCurrentFrame.getStackAddendum();
            "" !== r && (t += "%s",
            n = n.concat([r]));
            var o = n.map((function(e) {
                return String(e)
            }
            ));
            o.unshift("Warning: " + t),
            Function.prototype.apply.call(console[e], console, o)
        }("error", e, n)
    }
    var v, _ = !1, w = !1, S = !1, x = !1, E = !1;
    function C(e) {
        return e.displayName || "Context"
    }
    function T(e) {
        if (null == e)
            return null;
        if ("number" == typeof e.tag && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
        "function" == typeof e)
            return e.displayName || e.name || null;
        if ("string" == typeof e)
            return e;
        switch (e) {
        case r:
            return "Fragment";
        case n:
            return "Portal";
        case i:
            return "Profiler";
        case o:
            return "StrictMode";
        case l:
            return "Suspense";
        case c:
            return "SuspenseList"
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case s:
                return C(e) + ".Consumer";
            case a:
                return C(e._context) + ".Provider";
            case u:
                return function(e, t, n) {
                    var r = e.displayName;
                    if (r)
                        return r;
                    var o = t.displayName || t.name || "";
                    return "" !== o ? n + "(" + o + ")" : n
                }(e, e.render, "ForwardRef");
            case d:
                var t = e.displayName || null;
                return null !== t ? t : T(e.type) || "Memo";
            case f:
                var p = e
                  , h = p._payload
                  , m = p._init;
                try {
                    return T(m(h))
                } catch (g) {
                    return null
                }
            }
        return null
    }
    v = Symbol.for("react.module.reference");
    var R, O, I, M, P, N, D, L = Object.assign, A = 0;
    function F() {}
    F.__reactDisabledLog = !0;
    var U, j = g.ReactCurrentDispatcher;
    function z(e, t, n) {
        if (void 0 === U)
            try {
                throw Error()
            } catch (o) {
                var r = o.stack.trim().match(/\n( *(at )?)/);
                U = r && r[1] || ""
            }
        return "\n" + U + e
    }
    var B, q = !1, W = "function" == typeof WeakMap ? WeakMap : Map;
    function V(e, t) {
        if (!e || q)
            return "";
        var n, r = B.get(e);
        if (void 0 !== r)
            return r;
        q = !0;
        var o, i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0,
        o = j.current,
        j.current = null,
        function() {
            if (0 === A) {
                R = console.log,
                O = console.info,
                I = console.warn,
                M = console.error,
                P = console.group,
                N = console.groupCollapsed,
                D = console.groupEnd;
                var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: F,
                    writable: !0
                };
                Object.defineProperties(console, {
                    info: e,
                    log: e,
                    warn: e,
                    error: e,
                    group: e,
                    groupCollapsed: e,
                    groupEnd: e
                })
            }
            A++
        }();
        try {
            if (t) {
                var a = function() {
                    throw Error()
                };
                if (Object.defineProperty(a.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(a, [])
                    } catch (h) {
                        n = h
                    }
                    Reflect.construct(e, [], a)
                } else {
                    try {
                        a.call()
                    } catch (h) {
                        n = h
                    }
                    e.call(a.prototype)
                }
            } else {
                try {
                    throw Error()
                } catch (h) {
                    n = h
                }
                e()
            }
        } catch (m) {
            if (m && n && "string" == typeof m.stack) {
                for (var s = m.stack.split("\n"), u = n.stack.split("\n"), l = s.length - 1, c = u.length - 1; l >= 1 && c >= 0 && s[l] !== u[c]; )
                    c--;
                for (; l >= 1 && c >= 0; l--,
                c--)
                    if (s[l] !== u[c]) {
                        if (1 !== l || 1 !== c)
                            do {
                                if (l--,
                                --c < 0 || s[l] !== u[c]) {
                                    var d = "\n" + s[l].replace(" at new ", " at ");
                                    return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)),
                                    "function" == typeof e && B.set(e, d),
                                    d
                                }
                            } while (l >= 1 && c >= 0);
                        break
                    }
            }
        } finally {
            q = !1,
            j.current = o,
            function() {
                if (0 == --A) {
                    var e = {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0
                    };
                    Object.defineProperties(console, {
                        log: L({}, e, {
                            value: R
                        }),
                        info: L({}, e, {
                            value: O
                        }),
                        warn: L({}, e, {
                            value: I
                        }),
                        error: L({}, e, {
                            value: M
                        }),
                        group: L({}, e, {
                            value: P
                        }),
                        groupCollapsed: L({}, e, {
                            value: N
                        }),
                        groupEnd: L({}, e, {
                            value: D
                        })
                    })
                }
                A < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
            }(),
            Error.prepareStackTrace = i
        }
        var f = e ? e.displayName || e.name : ""
          , p = f ? z(f) : "";
        return "function" == typeof e && B.set(e, p),
        p
    }
    function $(e, t, n) {
        if (null == e)
            return "";
        if ("function" == typeof e)
            return V(e, !(!(r = e.prototype) || !r.isReactComponent));
        var r;
        if ("string" == typeof e)
            return z(e);
        switch (e) {
        case l:
            return z("Suspense");
        case c:
            return z("SuspenseList")
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case u:
                return V(e.render, !1);
            case d:
                return $(e.type, t, n);
            case f:
                var o = e
                  , i = o._payload
                  , a = o._init;
                try {
                    return $(a(i), t, n)
                } catch (s) {}
            }
        return ""
    }
    B = new W;
    var H = Object.prototype.hasOwnProperty
      , Q = {}
      , Y = g.ReactDebugCurrentFrame;
    function G(e) {
        if (e) {
            var t = e._owner
              , n = $(e.type, e._source, t ? t.type : null);
            Y.setExtraStackFrame(n)
        } else
            Y.setExtraStackFrame(null)
    }
    var K = Array.isArray;
    function X(e) {
        return K(e)
    }
    function J(e) {
        return "" + e
    }
    function Z(e) {
        if (function(e) {
            try {
                return J(e),
                !1
            } catch (t) {
                return !0
            }
        }(e))
            return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", function(e) {
                return "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object"
            }(e)),
            J(e)
    }
    var ee, te, ne, re = g.ReactCurrentOwner, oe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    ne = {};
    var ie = function(e, n, r, o, i, a, s) {
        var u = {
            $$typeof: t,
            type: e,
            key: n,
            ref: r,
            props: s,
            _owner: a,
            _store: {}
        };
        return Object.defineProperty(u._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(u, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: o
        }),
        Object.defineProperty(u, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: i
        }),
        Object.freeze && (Object.freeze(u.props),
        Object.freeze(u)),
        u
    };
    function ae(e, t, n, r, o) {
        var i, a = {}, s = null, u = null;
        for (i in void 0 !== n && (Z(n),
        s = "" + n),
        function(e) {
            if (H.call(e, "key")) {
                var t = Object.getOwnPropertyDescriptor(e, "key").get;
                if (t && t.isReactWarning)
                    return !1
            }
            return void 0 !== e.key
        }(t) && (Z(t.key),
        s = "" + t.key),
        function(e) {
            if (H.call(e, "ref")) {
                var t = Object.getOwnPropertyDescriptor(e, "ref").get;
                if (t && t.isReactWarning)
                    return !1
            }
            return void 0 !== e.ref
        }(t) && (u = t.ref,
        function(e, t) {
            if ("string" == typeof e.ref && re.current && t && re.current.stateNode !== t) {
                var n = T(re.current.type);
                ne[n] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(re.current.type), e.ref),
                ne[n] = !0)
            }
        }(t, o)),
        t)
            H.call(t, i) && !oe.hasOwnProperty(i) && (a[i] = t[i]);
        if (e && e.defaultProps) {
            var l = e.defaultProps;
            for (i in l)
                void 0 === a[i] && (a[i] = l[i])
        }
        if (s || u) {
            var c = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
            s && function(e, t) {
                var n = function() {
                    ee || (ee = !0,
                    y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                };
                n.isReactWarning = !0,
                Object.defineProperty(e, "key", {
                    get: n,
                    configurable: !0
                })
            }(a, c),
            u && function(e, t) {
                var n = function() {
                    te || (te = !0,
                    y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t))
                };
                n.isReactWarning = !0,
                Object.defineProperty(e, "ref", {
                    get: n,
                    configurable: !0
                })
            }(a, c)
        }
        return ie(e, s, u, o, r, re.current, a)
    }
    var se, ue = g.ReactCurrentOwner, le = g.ReactDebugCurrentFrame;
    function ce(e) {
        if (e) {
            var t = e._owner
              , n = $(e.type, e._source, t ? t.type : null);
            le.setExtraStackFrame(n)
        } else
            le.setExtraStackFrame(null)
    }
    function de(e) {
        return "object" == typeof e && null !== e && e.$$typeof === t
    }
    function fe() {
        if (ue.current) {
            var e = T(ue.current.type);
            if (e)
                return "\n\nCheck the render method of `" + e + "`."
        }
        return ""
    }
    se = !1;
    var pe = {};
    function he(e, t) {
        if (e._store && !e._store.validated && null == e.key) {
            e._store.validated = !0;
            var n = function(e) {
                var t = fe();
                if (!t) {
                    var n = "string" == typeof e ? e : e.displayName || e.name;
                    n && (t = "\n\nCheck the top-level render call using <" + n + ">.")
                }
                return t
            }(t);
            if (!pe[n]) {
                pe[n] = !0;
                var r = "";
                e && e._owner && e._owner !== ue.current && (r = " It was passed a child from " + T(e._owner.type) + "."),
                ce(e),
                y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, r),
                ce(null)
            }
        }
    }
    function me(e, t) {
        if ("object" == typeof e)
            if (X(e))
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    de(r) && he(r, t)
                }
            else if (de(e))
                e._store && (e._store.validated = !0);
            else if (e) {
                var o = function(e) {
                    if (null === e || "object" != typeof e)
                        return null;
                    var t = h && e[h] || e[m];
                    return "function" == typeof t ? t : null
                }(e);
                if ("function" == typeof o && o !== e.entries)
                    for (var i, a = o.call(e); !(i = a.next()).done; )
                        de(i.value) && he(i.value, t)
            }
    }
    function ge(e) {
        var t, n = e.type;
        if (null != n && "string" != typeof n) {
            if ("function" == typeof n)
                t = n.propTypes;
            else {
                if ("object" != typeof n || n.$$typeof !== u && n.$$typeof !== d)
                    return;
                t = n.propTypes
            }
            if (t) {
                var r = T(n);
                !function(e, t, n, r, o) {
                    var i = Function.call.bind(H);
                    for (var a in e)
                        if (i(e, a)) {
                            var s = void 0;
                            try {
                                if ("function" != typeof e[a]) {
                                    var u = Error((r || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                    throw u.name = "Invariant Violation",
                                    u
                                }
                                s = e[a](t, a, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                            } catch (l) {
                                s = l
                            }
                            !s || s instanceof Error || (G(o),
                            y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, a, typeof s),
                            G(null)),
                            s instanceof Error && !(s.message in Q) && (Q[s.message] = !0,
                            G(o),
                            y("Failed %s type: %s", n, s.message),
                            G(null))
                        }
                }(t, e.props, "prop", r, e)
            } else if (void 0 !== n.PropTypes && !se) {
                se = !0,
                y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T(n) || "Unknown")
            }
            "function" != typeof n.getDefaultProps || n.getDefaultProps.isReactClassApproved || y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")
        }
    }
    var ye = {};
    var ve = function(e, n, h, m, g, b) {
        var k = function(e) {
            return "string" == typeof e || "function" == typeof e || !!(e === r || e === i || E || e === o || e === l || e === c || x || e === p || _ || w || S) || "object" == typeof e && null !== e && (e.$$typeof === f || e.$$typeof === d || e.$$typeof === a || e.$$typeof === s || e.$$typeof === u || e.$$typeof === v || void 0 !== e.getModuleId)
        }(e);
        if (!k) {
            var C = "";
            (void 0 === e || "object" == typeof e && null !== e && 0 === Object.keys(e).length) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var R, O = function(e) {
                return void 0 !== e ? "\n\nCheck your code at " + e.fileName.replace(/^.*[\\\/]/, "") + ":" + e.lineNumber + "." : ""
            }(g);
            C += O || fe(),
            null === e ? R = "null" : X(e) ? R = "array" : void 0 !== e && e.$$typeof === t ? (R = "<" + (T(e.type) || "Unknown") + " />",
            C = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e,
            y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, C)
        }
        var I = ae(e, n, h, g, b);
        if (null == I)
            return I;
        if (k) {
            var M = n.children;
            if (void 0 !== M)
                if (m)
                    if (X(M)) {
                        for (var P = 0; P < M.length; P++)
                            me(M[P], e);
                        Object.freeze && Object.freeze(M)
                    } else
                        y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                else
                    me(M, e)
        }
        if (H.call(n, "key")) {
            var N = T(e)
              , D = Object.keys(n).filter((function(e) {
                return "key" !== e
            }
            ))
              , L = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
            if (!ye[N + L])
                y('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', L, N, D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}", N),
                ye[N + L] = !0
        }
        return e === r ? function(e) {
            for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
                var r = t[n];
                if ("children" !== r && "key" !== r) {
                    ce(e),
                    y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r),
                    ce(null);
                    break
                }
            }
            null !== e.ref && (ce(e),
            y("Invalid attribute `ref` supplied to `React.Fragment`."),
            ce(null))
        }(I) : ge(I),
        I
    };
    b.Fragment = r,
    b.jsxDEV = ve
}(),
v.exports = b;
var C = v.exports
  , T = {}
  , R = {
    exports: {}
}
  , O = {}
  , I = {
    exports: {}
}
  , M = {};
!function(e) {
    !function() {
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
        var t = !1
          , n = !1;
        function r(e, t) {
            var n = e.length;
            e.push(t),
            function(e, t, n) {
                var r = n;
                for (; r > 0; ) {
                    var o = r - 1 >>> 1
                      , i = e[o];
                    if (!(a(i, t) > 0))
                        return;
                    e[o] = t,
                    e[r] = i,
                    r = o
                }
            }(e, t, n)
        }
        function o(e) {
            return 0 === e.length ? null : e[0]
        }
        function i(e) {
            if (0 === e.length)
                return null;
            var t = e[0]
              , n = e.pop();
            return n !== t && (e[0] = n,
            function(e, t, n) {
                var r = n
                  , o = e.length
                  , i = o >>> 1;
                for (; r < i; ) {
                    var s = 2 * (r + 1) - 1
                      , u = e[s]
                      , l = s + 1
                      , c = e[l];
                    if (a(u, t) < 0)
                        l < o && a(c, u) < 0 ? (e[r] = c,
                        e[l] = t,
                        r = l) : (e[r] = u,
                        e[s] = t,
                        r = s);
                    else {
                        if (!(l < o && a(c, t) < 0))
                            return;
                        e[r] = c,
                        e[l] = t,
                        r = l
                    }
                }
            }(e, n, 0)),
            t
        }
        function a(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var s = performance;
            e.unstable_now = function() {
                return s.now()
            }
        } else {
            var u = Date
              , l = u.now();
            e.unstable_now = function() {
                return u.now() - l
            }
        }
        var c = []
          , d = []
          , f = 1
          , p = null
          , h = 3
          , m = !1
          , g = !1
          , y = !1
          , v = "function" == typeof setTimeout ? setTimeout : null
          , b = "function" == typeof clearTimeout ? clearTimeout : null
          , _ = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
            for (var t = o(d); null !== t; ) {
                if (null === t.callback)
                    i(d);
                else {
                    if (!(t.startTime <= e))
                        return;
                    i(d),
                    t.sortIndex = t.expirationTime,
                    r(c, t)
                }
                t = o(d)
            }
        }
        function S(e) {
            if (y = !1,
            w(e),
            !g)
                if (null !== o(c))
                    g = !0,
                    D(k);
                else {
                    var t = o(d);
                    null !== t && L(S, t.startTime - e)
                }
        }
        function k(r, a) {
            g = !1,
            y && (y = !1,
            A()),
            m = !0;
            var s = h;
            try {
                if (!n)
                    return function(n, r) {
                        var a = r;
                        w(a),
                        p = o(c);
                        for (; null !== p && !t && (!(p.expirationTime > a) || n && !O()); ) {
                            var s = p.callback;
                            if ("function" == typeof s) {
                                p.callback = null,
                                h = p.priorityLevel;
                                var u = s(p.expirationTime <= a);
                                a = e.unstable_now(),
                                "function" == typeof u ? p.callback = u : p === o(c) && i(c),
                                w(a)
                            } else
                                i(c);
                            p = o(c)
                        }
                        if (null !== p)
                            return !0;
                        var l = o(d);
                        return null !== l && L(S, l.startTime - a),
                        !1
                    }(r, a)
            } finally {
                p = null,
                h = s,
                m = !1
            }
        }
        "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x = !1
          , E = null
          , C = -1
          , T = 5
          , R = -1;
        function O() {
            return !(e.unstable_now() - R < T)
        }
        var I, M = function() {
            if (null !== E) {
                var t = e.unstable_now();
                R = t;
                var n = !0;
                try {
                    n = E(!0, t)
                } finally {
                    n ? I() : (x = !1,
                    E = null)
                }
            } else
                x = !1
        };
        if ("function" == typeof _)
            I = function() {
                _(M)
            }
            ;
        else if ("undefined" != typeof MessageChannel) {
            var P = new MessageChannel
              , N = P.port2;
            P.port1.onmessage = M,
            I = function() {
                N.postMessage(null)
            }
        } else
            I = function() {
                v(M, 0)
            }
            ;
        function D(e) {
            E = e,
            x || (x = !0,
            I())
        }
        function L(t, n) {
            C = v((function() {
                t(e.unstable_now())
            }
            ), n)
        }
        function A() {
            b(C),
            C = -1
        }
        var F = function() {};
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(e) {
            e.callback = null
        }
        ,
        e.unstable_continueExecution = function() {
            g || m || (g = !0,
            D(k))
        }
        ,
        e.unstable_forceFrameRate = function(e) {
            e < 0 || e > 125 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = e > 0 ? Math.floor(1e3 / e) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return h
        }
        ,
        e.unstable_getFirstCallbackNode = function() {
            return o(c)
        }
        ,
        e.unstable_next = function(e) {
            var t;
            switch (h) {
            case 1:
            case 2:
            case 3:
                t = 3;
                break;
            default:
                t = h
            }
            var n = h;
            h = t;
            try {
                return e()
            } finally {
                h = n
            }
        }
        ,
        e.unstable_pauseExecution = function() {}
        ,
        e.unstable_requestPaint = F,
        e.unstable_runWithPriority = function(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
            }
            var n = h;
            h = e;
            try {
                return t()
            } finally {
                h = n
            }
        }
        ,
        e.unstable_scheduleCallback = function(t, n, i) {
            var a, s, u = e.unstable_now();
            if ("object" == typeof i && null !== i) {
                var l = i.delay;
                a = "number" == typeof l && l > 0 ? u + l : u
            } else
                a = u;
            switch (t) {
            case 1:
                s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 1e4;
                break;
            default:
                s = 5e3
            }
            var p = a + s
              , h = {
                id: f++,
                callback: n,
                priorityLevel: t,
                startTime: a,
                expirationTime: p,
                sortIndex: -1
            };
            return a > u ? (h.sortIndex = a,
            r(d, h),
            null === o(c) && h === o(d) && (y ? A() : y = !0,
            L(S, a - u))) : (h.sortIndex = p,
            r(c, h),
            g || m || (g = !0,
            D(k))),
            h
        }
        ,
        e.unstable_shouldYield = O,
        e.unstable_wrapCallback = function(e) {
            var t = h;
            return function() {
                var n = h;
                h = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    h = n
                }
            }
        }
        ,
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)
    }()
}(M),
I.exports = M;
var P = I.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function() {
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
    var e = k
      , t = P
      , n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , r = !1;
    function o(e) {
        if (!r) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                n[o - 1] = arguments[o];
            a("warn", e, n)
        }
    }
    function i(e) {
        if (!r) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                n[o - 1] = arguments[o];
            a("error", e, n)
        }
    }
    function a(e, t, r) {
        var o = n.ReactDebugCurrentFrame.getStackAddendum();
        "" !== o && (t += "%s",
        r = r.concat([o]));
        var i = r.map((function(e) {
            return String(e)
        }
        ));
        i.unshift("Warning: " + t),
        Function.prototype.apply.call(console[e], console, i)
    }
    var s = 0
      , u = 1
      , l = 2
      , c = 3
      , d = 4
      , f = 5
      , p = 6
      , h = 7
      , m = 8
      , g = 9
      , y = 10
      , v = 11
      , b = 12
      , _ = 13
      , w = 14
      , S = 15
      , x = 16
      , E = 17
      , C = 18
      , T = 19
      , R = 21
      , I = 22
      , M = 23
      , N = 24
      , D = 25
      , L = !0
      , A = !1
      , F = !1
      , U = !1
      , j = !1
      , z = !0
      , B = !1
      , q = !0
      , W = !0
      , V = !0
      , $ = !0
      , H = new Set
      , Q = {}
      , Y = {};
    function G(e, t) {
        K(e, t),
        K(e + "Capture", t)
    }
    function K(e, t) {
        Q[e] && i("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e),
        Q[e] = t;
        var n = e.toLowerCase();
        Y[n] = e,
        "onDoubleClick" === e && (Y.ondblclick = e);
        for (var r = 0; r < t.length; r++)
            H.add(t[r])
    }
    var X = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
      , J = Object.prototype.hasOwnProperty;
    function Z(e) {
        return "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object"
    }
    function ee(e) {
        try {
            return te(e),
            !1
        } catch (t) {
            return !0
        }
    }
    function te(e) {
        return "" + e
    }
    function ne(e, t) {
        if (ee(e))
            return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Z(e)),
            te(e)
    }
    function re(e) {
        if (ee(e))
            return i("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Z(e)),
            te(e)
    }
    var oe = 0
      , ie = 3
      , ae = 4
      , se = 5
      , ue = 6
      , le = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"
      , ce = le + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040"
      , de = new RegExp("^[" + le + "][" + ce + "]*$")
      , fe = {}
      , pe = {};
    function he(e) {
        return !!J.call(pe, e) || !J.call(fe, e) && (de.test(e) ? (pe[e] = !0,
        !0) : (fe[e] = !0,
        i("Invalid attribute name: `%s`", e),
        !1))
    }
    function me(e, t, n) {
        return null !== t ? t.type === oe : !n && (e.length > 2 && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))
    }
    function ge(e, t, n, r) {
        if (null !== n && n.type === oe)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (r)
                return !1;
            if (null !== n)
                return !n.acceptsBooleans;
            var o = e.toLowerCase().slice(0, 5);
            return "data-" !== o && "aria-" !== o;
        default:
            return !1
        }
    }
    function ye(e, t, n, r) {
        if (null == t)
            return !0;
        if (ge(e, t, n, r))
            return !0;
        if (r)
            return !1;
        if (null !== n)
            switch (n.type) {
            case ie:
                return !t;
            case ae:
                return !1 === t;
            case se:
                return isNaN(t);
            case ue:
                return isNaN(t) || t < 1
            }
        return !1
    }
    function ve(e) {
        return _e.hasOwnProperty(e) ? _e[e] : null
    }
    function be(e, t, n, r, o, i, a) {
        this.acceptsBooleans = 2 === t || t === ie || t === ae,
        this.attributeName = r,
        this.attributeNamespace = o,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = i,
        this.removeEmptyString = a
    }
    var _e = {};
    ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach((function(e) {
        _e[e] = new be(e,oe,!1,e,null,!1,!1)
    }
    )),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
        var t = e[0]
          , n = e[1];
        _e[t] = new be(t,1,!1,n,null,!1,!1)
    }
    )),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        _e[e] = new be(e,2,!1,e.toLowerCase(),null,!1,!1)
    }
    )),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        _e[e] = new be(e,2,!1,e,null,!1,!1)
    }
    )),
    ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach((function(e) {
        _e[e] = new be(e,ie,!1,e.toLowerCase(),null,!1,!1)
    }
    )),
    ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        _e[e] = new be(e,ie,!0,e,null,!1,!1)
    }
    )),
    ["capture", "download"].forEach((function(e) {
        _e[e] = new be(e,ae,!1,e,null,!1,!1)
    }
    )),
    ["cols", "rows", "size", "span"].forEach((function(e) {
        _e[e] = new be(e,ue,!1,e,null,!1,!1)
    }
    )),
    ["rowSpan", "start"].forEach((function(e) {
        _e[e] = new be(e,se,!1,e.toLowerCase(),null,!1,!1)
    }
    ));
    var we = /[\-\:]([a-z])/g
      , Se = function(e) {
        return e[1].toUpperCase()
    };
    ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach((function(e) {
        var t = e.replace(we, Se);
        _e[t] = new be(t,1,!1,e,null,!1,!1)
    }
    )),
    ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach((function(e) {
        var t = e.replace(we, Se);
        _e[t] = new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }
    )),
    ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(we, Se);
        _e[t] = new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }
    )),
    ["tabIndex", "crossOrigin"].forEach((function(e) {
        _e[e] = new be(e,1,!1,e.toLowerCase(),null,!1,!1)
    }
    ));
    _e.xlinkHref = new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach((function(e) {
        _e[e] = new be(e,1,!1,e.toLowerCase(),null,!0,!0)
    }
    ));
    var ke = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i
      , xe = !1;
    function Ee(e) {
        !xe && ke.test(e) && (xe = !0,
        i("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)))
    }
    function Ce(e, t, n, r) {
        if (r.mustUseProperty)
            return e[r.propertyName];
        ne(n, t),
        r.sanitizeURL && Ee("" + n);
        var o = r.attributeName
          , i = null;
        if (r.type === ae) {
            if (e.hasAttribute(o)) {
                var a = e.getAttribute(o);
                return "" === a || (ye(t, n, r, !1) ? a : a === "" + n ? n : a)
            }
        } else if (e.hasAttribute(o)) {
            if (ye(t, n, r, !1))
                return e.getAttribute(o);
            if (r.type === ie)
                return n;
            i = e.getAttribute(o)
        }
        return ye(t, n, r, !1) ? null === i ? n : i : i === "" + n ? n : i
    }
    function Te(e, t, n, r) {
        if (he(t)) {
            if (!e.hasAttribute(t))
                return void 0 === n ? void 0 : null;
            var o = e.getAttribute(t);
            return ne(n, t),
            o === "" + n ? n : o
        }
    }
    function Re(e, t, n, r) {
        var o = ve(t);
        if (!me(t, o, r))
            if (ye(t, n, o, r) && (n = null),
            r || null === o) {
                if (he(t)) {
                    var i = t;
                    null === n ? e.removeAttribute(i) : (ne(n, t),
                    e.setAttribute(i, "" + n))
                }
            } else if (o.mustUseProperty) {
                var a = o.propertyName;
                if (null === n) {
                    var s = o.type;
                    e[a] = s !== ie && ""
                } else
                    e[a] = n
            } else {
                var u = o.attributeName
                  , l = o.attributeNamespace;
                if (null === n)
                    e.removeAttribute(u);
                else {
                    var c, d = o.type;
                    d === ie || d === ae && !0 === n ? c = "" : (ne(n, u),
                    c = "" + n,
                    o.sanitizeURL && Ee(c.toString())),
                    l ? e.setAttributeNS(l, u, c) : e.setAttribute(u, c)
                }
            }
    }
    var Oe = Symbol.for("react.element")
      , Ie = Symbol.for("react.portal")
      , Me = Symbol.for("react.fragment")
      , Pe = Symbol.for("react.strict_mode")
      , Ne = Symbol.for("react.profiler")
      , De = Symbol.for("react.provider")
      , Le = Symbol.for("react.context")
      , Ae = Symbol.for("react.forward_ref")
      , Fe = Symbol.for("react.suspense")
      , Ue = Symbol.for("react.suspense_list")
      , je = Symbol.for("react.memo")
      , ze = Symbol.for("react.lazy")
      , Be = (Symbol.for("react.scope"),
    Symbol.for("react.debug_trace_mode"),
    Symbol.for("react.offscreen"))
      , qe = (Symbol.for("react.legacy_hidden"),
    Symbol.for("react.cache"),
    Symbol.for("react.tracing_marker"),
    Symbol.iterator)
      , We = "@@iterator";
    function Ve(e) {
        if (null === e || "object" != typeof e)
            return null;
        var t = qe && e[qe] || e[We];
        return "function" == typeof t ? t : null
    }
    var $e, He, Qe, Ye, Ge, Ke, Xe, Je = Object.assign, Ze = 0;
    function et() {}
    et.__reactDisabledLog = !0;
    var tt, nt = n.ReactCurrentDispatcher;
    function rt(e, t, n) {
        if (void 0 === tt)
            try {
                throw Error()
            } catch (o) {
                var r = o.stack.trim().match(/\n( *(at )?)/);
                tt = r && r[1] || ""
            }
        return "\n" + tt + e
    }
    var ot, it = !1, at = "function" == typeof WeakMap ? WeakMap : Map;
    function st(e, t) {
        if (!e || it)
            return "";
        var n, r = ot.get(e);
        if (void 0 !== r)
            return r;
        it = !0;
        var o, a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0,
        o = nt.current,
        nt.current = null,
        function() {
            if (0 === Ze) {
                $e = console.log,
                He = console.info,
                Qe = console.warn,
                Ye = console.error,
                Ge = console.group,
                Ke = console.groupCollapsed,
                Xe = console.groupEnd;
                var e = {
                    configurable: !0,
                    enumerable: !0,
                    value: et,
                    writable: !0
                };
                Object.defineProperties(console, {
                    info: e,
                    log: e,
                    warn: e,
                    error: e,
                    group: e,
                    groupCollapsed: e,
                    groupEnd: e
                })
            }
            Ze++
        }();
        try {
            if (t) {
                var s = function() {
                    throw Error()
                };
                if (Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (m) {
                        n = m
                    }
                    Reflect.construct(e, [], s)
                } else {
                    try {
                        s.call()
                    } catch (m) {
                        n = m
                    }
                    e.call(s.prototype)
                }
            } else {
                try {
                    throw Error()
                } catch (m) {
                    n = m
                }
                e()
            }
        } catch (g) {
            if (g && n && "string" == typeof g.stack) {
                for (var u = g.stack.split("\n"), l = n.stack.split("\n"), c = u.length - 1, d = l.length - 1; c >= 1 && d >= 0 && u[c] !== l[d]; )
                    d--;
                for (; c >= 1 && d >= 0; c--,
                d--)
                    if (u[c] !== l[d]) {
                        if (1 !== c || 1 !== d)
                            do {
                                if (c--,
                                --d < 0 || u[c] !== l[d]) {
                                    var f = "\n" + u[c].replace(" at new ", " at ");
                                    return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)),
                                    "function" == typeof e && ot.set(e, f),
                                    f
                                }
                            } while (c >= 1 && d >= 0);
                        break
                    }
            }
        } finally {
            it = !1,
            nt.current = o,
            function() {
                if (0 == --Ze) {
                    var e = {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0
                    };
                    Object.defineProperties(console, {
                        log: Je({}, e, {
                            value: $e
                        }),
                        info: Je({}, e, {
                            value: He
                        }),
                        warn: Je({}, e, {
                            value: Qe
                        }),
                        error: Je({}, e, {
                            value: Ye
                        }),
                        group: Je({}, e, {
                            value: Ge
                        }),
                        groupCollapsed: Je({}, e, {
                            value: Ke
                        }),
                        groupEnd: Je({}, e, {
                            value: Xe
                        })
                    })
                }
                Ze < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
            }(),
            Error.prepareStackTrace = a
        }
        var p = e ? e.displayName || e.name : ""
          , h = p ? rt(p) : "";
        return "function" == typeof e && ot.set(e, h),
        h
    }
    function ut(e, t, n) {
        return st(e, !1)
    }
    function lt(e, t, n) {
        if (null == e)
            return "";
        if ("function" == typeof e)
            return st(e, !(!(r = e.prototype) || !r.isReactComponent));
        var r;
        if ("string" == typeof e)
            return rt(e);
        switch (e) {
        case Fe:
            return rt("Suspense");
        case Ue:
            return rt("SuspenseList")
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case Ae:
                return ut(e.render);
            case je:
                return lt(e.type, t, n);
            case ze:
                var o = e
                  , i = o._payload
                  , a = o._init;
                try {
                    return lt(a(i), t, n)
                } catch (s) {}
            }
        return ""
    }
    function ct(e) {
        switch (e._debugOwner && e._debugOwner.type,
        e._debugSource,
        e.tag) {
        case f:
            return rt(e.type);
        case x:
            return rt("Lazy");
        case _:
            return rt("Suspense");
        case T:
            return rt("SuspenseList");
        case s:
        case l:
        case S:
            return ut(e.type);
        case v:
            return ut(e.type.render);
        case u:
            return st(e.type, !0);
        default:
            return ""
        }
    }
    function dt(e) {
        try {
            var t = ""
              , n = e;
            do {
                t += ct(n),
                n = n.return
            } while (n);
            return t
        } catch (r) {
            return "\nError generating stack: " + r.message + "\n" + r.stack
        }
    }
    function ft(e) {
        return e.displayName || "Context"
    }
    function pt(e) {
        if (null == e)
            return null;
        if ("number" == typeof e.tag && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
        "function" == typeof e)
            return e.displayName || e.name || null;
        if ("string" == typeof e)
            return e;
        switch (e) {
        case Me:
            return "Fragment";
        case Ie:
            return "Portal";
        case Ne:
            return "Profiler";
        case Pe:
            return "StrictMode";
        case Fe:
            return "Suspense";
        case Ue:
            return "SuspenseList"
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case Le:
                return ft(e) + ".Consumer";
            case De:
                return ft(e._context) + ".Provider";
            case Ae:
                return function(e, t, n) {
                    var r = e.displayName;
                    if (r)
                        return r;
                    var o = t.displayName || t.name || "";
                    return "" !== o ? n + "(" + o + ")" : n
                }(e, e.render, "ForwardRef");
            case je:
                var t = e.displayName || null;
                return null !== t ? t : pt(e.type) || "Memo";
            case ze:
                var n = e
                  , r = n._payload
                  , o = n._init;
                try {
                    return pt(o(r))
                } catch (a) {
                    return null
                }
            }
        return null
    }
    function ht(e) {
        return e.displayName || "Context"
    }
    function mt(e) {
        var t, n, r, o, i = e.tag, a = e.type;
        switch (i) {
        case N:
            return "Cache";
        case g:
            return ht(a) + ".Consumer";
        case y:
            return ht(a._context) + ".Provider";
        case C:
            return "DehydratedFragment";
        case v:
            return t = a,
            n = a.render,
            r = "ForwardRef",
            o = n.displayName || n.name || "",
            t.displayName || ("" !== o ? r + "(" + o + ")" : r);
        case h:
            return "Fragment";
        case f:
            return a;
        case d:
            return "Portal";
        case c:
            return "Root";
        case p:
            return "Text";
        case x:
            return pt(a);
        case m:
            return a === Pe ? "StrictMode" : "Mode";
        case I:
            return "Offscreen";
        case b:
            return "Profiler";
        case R:
            return "Scope";
        case _:
            return "Suspense";
        case T:
            return "SuspenseList";
        case D:
            return "TracingMarker";
        case u:
        case s:
        case E:
        case l:
        case w:
        case S:
            if ("function" == typeof a)
                return a.displayName || a.name || null;
            if ("string" == typeof a)
                return a
        }
        return null
    }
    ot = new at;
    var gt = n.ReactDebugCurrentFrame
      , yt = null
      , vt = !1;
    function bt() {
        if (null === yt)
            return null;
        var e = yt._debugOwner;
        return null != e ? mt(e) : null
    }
    function _t() {
        return null === yt ? "" : dt(yt)
    }
    function wt() {
        gt.getCurrentStack = null,
        yt = null,
        vt = !1
    }
    function St(e) {
        gt.getCurrentStack = null === e ? null : _t,
        yt = e,
        vt = !1
    }
    function kt(e) {
        vt = e
    }
    function xt(e) {
        return "" + e
    }
    function Et(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return re(e),
            e;
        default:
            return ""
        }
    }
    var Ct = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
    };
    function Tt(e, t) {
        Ct[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || null == t.value || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),
        t.onChange || t.readOnly || t.disabled || null == t.checked || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
    }
    function Rt(e) {
        var t = e.type
          , n = e.nodeName;
        return n && "input" === n.toLowerCase() && ("checkbox" === t || "radio" === t)
    }
    function Ot(e) {
        return e._valueTracker
    }
    function It(e) {
        Ot(e) || (e._valueTracker = function(e) {
            var t = Rt(e) ? "checked" : "value"
              , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            re(e[t]);
            var r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var o = n.get
                  , i = n.set;
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return o.call(this)
                    },
                    set: function(e) {
                        re(e),
                        r = "" + e,
                        i.call(this, e)
                    }
                }),
                Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                });
                var a = {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        re(e),
                        r = "" + e
                    },
                    stopTracking: function() {
                        !function(e) {
                            e._valueTracker = null
                        }(e),
                        delete e[t]
                    }
                };
                return a
            }
        }(e))
    }
    function Mt(e) {
        if (!e)
            return !1;
        var t = Ot(e);
        if (!t)
            return !0;
        var n = t.getValue()
          , r = function(e) {
            var t = "";
            return e ? t = Rt(e) ? e.checked ? "true" : "false" : e.value : t
        }(e);
        return r !== n && (t.setValue(r),
        !0)
    }
    function Pt(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    var Nt = !1
      , Dt = !1
      , Lt = !1
      , At = !1;
    function Ft(e) {
        return "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
    }
    function Ut(e, t) {
        var n = e
          , r = t.checked;
        return Je({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : n._wrapperState.initialChecked
        })
    }
    function jt(e, t) {
        Tt(0, t),
        void 0 === t.checked || void 0 === t.defaultChecked || Dt || (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", bt() || "A component", t.type),
        Dt = !0),
        void 0 === t.value || void 0 === t.defaultValue || Nt || (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", bt() || "A component", t.type),
        Nt = !0);
        var n = e
          , r = null == t.defaultValue ? "" : t.defaultValue;
        n._wrapperState = {
            initialChecked: null != t.checked ? t.checked : t.defaultChecked,
            initialValue: Et(null != t.value ? t.value : r),
            controlled: Ft(t)
        }
    }
    function zt(e, t) {
        var n = e
          , r = t.checked;
        null != r && Re(n, "checked", r, !1)
    }
    function Bt(e, t) {
        var n = e
          , r = Ft(t);
        n._wrapperState.controlled || !r || At || (i("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),
        At = !0),
        !n._wrapperState.controlled || r || Lt || (i("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),
        Lt = !0),
        zt(e, t);
        var o = Et(t.value)
          , a = t.type;
        if (null != o)
            "number" === a ? (0 === o && "" === n.value || n.value != o) && (n.value = xt(o)) : n.value !== xt(o) && (n.value = xt(o));
        else if ("submit" === a || "reset" === a)
            return void n.removeAttribute("value");
        t.hasOwnProperty("value") ? Vt(n, t.type, o) : t.hasOwnProperty("defaultValue") && Vt(n, t.type, Et(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (n.defaultChecked = !!t.defaultChecked)
    }
    function qt(e, t, n) {
        var r = e;
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (("submit" === o || "reset" === o) && (void 0 === t.value || null === t.value))
                return;
            var i = xt(r._wrapperState.initialValue);
            n || i !== r.value && (r.value = i),
            r.defaultValue = i
        }
        var a = r.name;
        "" !== a && (r.name = ""),
        r.defaultChecked = !r.defaultChecked,
        r.defaultChecked = !!r._wrapperState.initialChecked,
        "" !== a && (r.name = a)
    }
    function Wt(e, t) {
        var n = e;
        Bt(n, t),
        function(e, t) {
            var n = t.name;
            if ("radio" === t.type && null != n) {
                for (var r = e; r.parentNode; )
                    r = r.parentNode;
                ne(n, "name");
                for (var o = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), i = 0; i < o.length; i++) {
                    var a = o[i];
                    if (a !== e && a.form === e.form) {
                        var s = Yc(a);
                        if (!s)
                            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
                        Mt(a),
                        Bt(a, s)
                    }
                }
            }
        }(n, t)
    }
    function Vt(e, t, n) {
        "number" === t && Pt(e.ownerDocument) === e || (null == n ? e.defaultValue = xt(e._wrapperState.initialValue) : e.defaultValue !== xt(n) && (e.defaultValue = xt(n)))
    }
    var $t = !1
      , Ht = !1
      , Qt = !1;
    function Yt(t, n) {
        null == n.value && ("object" == typeof n.children && null !== n.children ? e.Children.forEach(n.children, (function(e) {
            null != e && "string" != typeof e && "number" != typeof e && (Ht || (Ht = !0,
            i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))
        }
        )) : null != n.dangerouslySetInnerHTML && (Qt || (Qt = !0,
        i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))),
        null == n.selected || $t || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),
        $t = !0)
    }
    var Gt, Kt = Array.isArray;
    function Xt(e) {
        return Kt(e)
    }
    function Jt() {
        var e = bt();
        return e ? "\n\nCheck the render method of `" + e + "`." : ""
    }
    Gt = !1;
    var Zt = ["value", "defaultValue"];
    function en(e, t, n, r) {
        var o = e.options;
        if (t) {
            for (var i = n, a = {}, s = 0; s < i.length; s++)
                a["$" + i[s]] = !0;
            for (var u = 0; u < o.length; u++) {
                var l = a.hasOwnProperty("$" + o[u].value);
                o[u].selected !== l && (o[u].selected = l),
                l && r && (o[u].defaultSelected = !0)
            }
        } else {
            for (var c = xt(Et(n)), d = null, f = 0; f < o.length; f++) {
                if (o[f].value === c)
                    return o[f].selected = !0,
                    void (r && (o[f].defaultSelected = !0));
                null !== d || o[f].disabled || (d = o[f])
            }
            null !== d && (d.selected = !0)
        }
    }
    function tn(e, t) {
        return Je({}, t, {
            value: void 0
        })
    }
    function nn(e, t) {
        var n = e;
        !function(e) {
            Tt(0, e);
            for (var t = 0; t < Zt.length; t++) {
                var n = Zt[t];
                if (null != e[n]) {
                    var r = Xt(e[n]);
                    e.multiple && !r ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Jt()) : !e.multiple && r && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Jt())
                }
            }
        }(t),
        n._wrapperState = {
            wasMultiple: !!t.multiple
        },
        void 0 === t.value || void 0 === t.defaultValue || Gt || (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),
        Gt = !0)
    }
    var rn = !1;
    function on(e, t) {
        var n = e;
        if (null != t.dangerouslySetInnerHTML)
            throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
        return Je({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: xt(n._wrapperState.initialValue)
        })
    }
    function an(e, t) {
        var n = e;
        Tt(0, t),
        void 0 === t.value || void 0 === t.defaultValue || rn || (i("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", bt() || "A component"),
        rn = !0);
        var r = t.value;
        if (null == r) {
            var o = t.children
              , a = t.defaultValue;
            if (null != o) {
                if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."),
                null != a)
                    throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                if (Xt(o)) {
                    if (o.length > 1)
                        throw new Error("<textarea> can only have at most one child.");
                    o = o[0]
                }
                a = o
            }
            null == a && (a = ""),
            r = a
        }
        n._wrapperState = {
            initialValue: Et(r)
        }
    }
    function sn(e, t) {
        var n = e
          , r = Et(t.value)
          , o = Et(t.defaultValue);
        if (null != r) {
            var i = xt(r);
            i !== n.value && (n.value = i),
            null == t.defaultValue && n.defaultValue !== i && (n.defaultValue = i)
        }
        null != o && (n.defaultValue = xt(o))
    }
    function un(e, t) {
        var n = e
          , r = n.textContent;
        r === n._wrapperState.initialValue && "" !== r && null !== r && (n.value = r)
    }
    var ln = "http://www.w3.org/1999/xhtml"
      , cn = "http://www.w3.org/1998/Math/MathML"
      , dn = "http://www.w3.org/2000/svg";
    function fn(e) {
        switch (e) {
        case "svg":
            return dn;
        case "math":
            return cn;
        default:
            return ln
        }
    }
    function pn(e, t) {
        return null == e || e === ln ? fn(t) : e === dn && "foreignObject" === t ? ln : e
    }
    var hn, mn, gn = (mn = function(e, t) {
        if (e.namespaceURI !== dn || "innerHTML"in e)
            e.innerHTML = t;
        else {
            (hn = hn || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
            for (var n = hn.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; n.firstChild; )
                e.appendChild(n.firstChild)
        }
    }
    ,
    "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
        MSApp.execUnsafeLocalFunction((function() {
            return mn(e, t, n, r)
        }
        ))
    }
    : mn), yn = 1, vn = 3, bn = 8, _n = 9, wn = 11, Sn = function(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === vn)
                return void (n.nodeValue = t)
        }
        e.textContent = t
    }, kn = {
        animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
        background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
        backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
        border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
        borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
        borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
        borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
        borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
        borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
        borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
        borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
        borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
        borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
        borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
        borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
        borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
        borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
        columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
        columns: ["columnCount", "columnWidth"],
        flex: ["flexBasis", "flexGrow", "flexShrink"],
        flexFlow: ["flexDirection", "flexWrap"],
        font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
        fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
        gap: ["columnGap", "rowGap"],
        grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
        gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
        gridColumn: ["gridColumnEnd", "gridColumnStart"],
        gridColumnGap: ["columnGap"],
        gridGap: ["columnGap", "rowGap"],
        gridRow: ["gridRowEnd", "gridRowStart"],
        gridRowGap: ["rowGap"],
        gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
        listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
        margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
        marker: ["markerEnd", "markerMid", "markerStart"],
        mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
        maskPosition: ["maskPositionX", "maskPositionY"],
        outline: ["outlineColor", "outlineStyle", "outlineWidth"],
        overflow: ["overflowX", "overflowY"],
        padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
        placeContent: ["alignContent", "justifyContent"],
        placeItems: ["alignItems", "justifyItems"],
        placeSelf: ["alignSelf", "justifySelf"],
        textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
        textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
        transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
        wordWrap: ["overflowWrap"]
    }, xn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    };
    var En = ["Webkit", "ms", "Moz", "O"];
    function Cn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || xn.hasOwnProperty(e) && xn[e] ? (function(e, t) {
            if (ee(e))
                i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Z(e)),
                te(e)
        }(t, e),
        ("" + t).trim()) : t + "px"
    }
    Object.keys(xn).forEach((function(e) {
        En.forEach((function(t) {
            xn[function(e, t) {
                return e + t.charAt(0).toUpperCase() + t.substring(1)
            }(t, e)] = xn[e]
        }
        ))
    }
    ));
    var Tn = /([A-Z])/g
      , Rn = /^ms-/;
    var On = /^(?:webkit|moz|o)[A-Z]/
      , In = /^-ms-/
      , Mn = /-(.)/g
      , Pn = /;\s*$/
      , Nn = {}
      , Dn = {}
      , Ln = !1
      , An = !1
      , Fn = function(e) {
        Nn.hasOwnProperty(e) && Nn[e] || (Nn[e] = !0,
        i("Unsupported style property %s. Did you mean %s?", e, e.replace(In, "ms-").replace(Mn, (function(e, t) {
            return t.toUpperCase()
        }
        ))))
    }
      , Un = function(e, t) {
        e.indexOf("-") > -1 ? Fn(e) : On.test(e) ? function(e) {
            Nn.hasOwnProperty(e) && Nn[e] || (Nn[e] = !0,
            i("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)))
        }(e) : Pn.test(t) && function(e, t) {
            Dn.hasOwnProperty(t) && Dn[t] || (Dn[t] = !0,
            i('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', e, t.replace(Pn, "")))
        }(e, t),
        "number" == typeof t && (isNaN(t) ? function(e) {
            Ln || (Ln = !0,
            i("`NaN` is an invalid value for the `%s` css style property.", e))
        }(e) : isFinite(t) || function(e) {
            An || (An = !0,
            i("`Infinity` is an invalid value for the `%s` css style property.", e))
        }(e))
    };
    function jn(e) {
        var t = ""
          , n = "";
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var o = e[r];
                if (null != o) {
                    var i = 0 === r.indexOf("--");
                    t += n + (i ? r : r.replace(Tn, "-$1").toLowerCase().replace(Rn, "-ms-")) + ":",
                    t += Cn(r, o, i),
                    n = ";"
                }
            }
        return t || null
    }
    function zn(e, t) {
        var n = e.style;
        for (var r in t)
            if (t.hasOwnProperty(r)) {
                var o = 0 === r.indexOf("--");
                o || Un(r, t[r]);
                var i = Cn(r, t[r], o);
                "float" === r && (r = "cssFloat"),
                o ? n.setProperty(r, i) : n[r] = i
            }
    }
    function Bn(e) {
        var t = {};
        for (var n in e)
            for (var r = kn[n] || [n], o = 0; o < r.length; o++)
                t[r[o]] = n;
        return t
    }
    var qn = Je({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    })
      , Wn = "__html";
    function Vn(e, t) {
        if (t) {
            if (qn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                if ("object" != typeof t.dangerouslySetInnerHTML || !(Wn in t.dangerouslySetInnerHTML))
                    throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")
            }
            if (!t.suppressContentEditableWarning && t.contentEditable && null != t.children && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),
            null != t.style && "object" != typeof t.style)
                throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")
        }
    }
    function $n(e, t) {
        if (-1 === e.indexOf("-"))
            return "string" == typeof t.is;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Hn = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
    }
      , Qn = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
    }
      , Yn = {}
      , Gn = new RegExp("^(aria)-[" + ce + "]*$")
      , Kn = new RegExp("^(aria)[A-Z][" + ce + "]*$");
    function Xn(e, t) {
        if (J.call(Yn, t) && Yn[t])
            return !0;
        if (Kn.test(t)) {
            var n = "aria-" + t.slice(4).toLowerCase()
              , r = Qn.hasOwnProperty(n) ? n : null;
            if (null == r)
                return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t),
                Yn[t] = !0,
                !0;
            if (t !== r)
                return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, r),
                Yn[t] = !0,
                !0
        }
        if (Gn.test(t)) {
            var o = t.toLowerCase()
              , a = Qn.hasOwnProperty(o) ? o : null;
            if (null == a)
                return Yn[t] = !0,
                !1;
            if (t !== a)
                return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, a),
                Yn[t] = !0,
                !0
        }
        return !0
    }
    function Jn(e, t) {
        $n(e, t) || function(e, t) {
            var n = [];
            for (var r in t)
                Xn(0, r) || n.push(r);
            var o = n.map((function(e) {
                return "`" + e + "`"
            }
            )).join(", ");
            1 === n.length ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", o, e) : n.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", o, e)
        }(e, t)
    }
    var Zn = !1;
    var er, tr = {}, nr = /^on./, rr = /^on[^A-Z]/, or = new RegExp("^(aria)-[" + ce + "]*$"), ir = new RegExp("^(aria)[A-Z][" + ce + "]*$");
    er = function(e, t, n, r) {
        if (J.call(tr, t) && tr[t])
            return !0;
        var o = t.toLowerCase();
        if ("onfocusin" === o || "onfocusout" === o)
            return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),
            tr[t] = !0,
            !0;
        if (null != r) {
            var a = r.registrationNameDependencies
              , s = r.possibleRegistrationNames;
            if (a.hasOwnProperty(t))
                return !0;
            var u = s.hasOwnProperty(o) ? s[o] : null;
            if (null != u)
                return i("Invalid event handler property `%s`. Did you mean `%s`?", t, u),
                tr[t] = !0,
                !0;
            if (nr.test(t))
                return i("Unknown event handler property `%s`. It will be ignored.", t),
                tr[t] = !0,
                !0
        } else if (nr.test(t))
            return rr.test(t) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t),
            tr[t] = !0,
            !0;
        if (or.test(t) || ir.test(t))
            return !0;
        if ("innerhtml" === o)
            return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),
            tr[t] = !0,
            !0;
        if ("aria" === o)
            return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),
            tr[t] = !0,
            !0;
        if ("is" === o && null != n && "string" != typeof n)
            return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n),
            tr[t] = !0,
            !0;
        if ("number" == typeof n && isNaN(n))
            return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t),
            tr[t] = !0,
            !0;
        var l = ve(t)
          , c = null !== l && l.type === oe;
        if (Hn.hasOwnProperty(o)) {
            var d = Hn[o];
            if (d !== t)
                return i("Invalid DOM property `%s`. Did you mean `%s`?", t, d),
                tr[t] = !0,
                !0
        } else if (!c && t !== o)
            return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o),
            tr[t] = !0,
            !0;
        return "boolean" == typeof n && ge(t, n, l, !1) ? (n ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t),
        tr[t] = !0,
        !0) : !!c || (ge(t, n, l, !1) ? (tr[t] = !0,
        !1) : ("false" !== n && "true" !== n || null === l || l.type !== ie || (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, "false" === n ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n),
        tr[t] = !0),
        !0))
    }
    ;
    function ar(e, t, n) {
        $n(e, t) || function(e, t, n) {
            var r = [];
            for (var o in t)
                er(0, o, t[o], n) || r.push(o);
            var a = r.map((function(e) {
                return "`" + e + "`"
            }
            )).join(", ");
            1 === r.length ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", a, e) : r.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", a, e)
        }(e, t, n)
    }
    var sr = 1
      , ur = 2
      , lr = 4
      , cr = sr | ur | lr
      , dr = null;
    function fr(e) {
        var t = e.target || e.srcElement || window;
        return t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === vn ? t.parentNode : t
    }
    var pr = null
      , hr = null
      , mr = null;
    function gr(e) {
        var t = Hc(e);
        if (t) {
            if ("function" != typeof pr)
                throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
            var n = t.stateNode;
            if (n) {
                var r = Yc(n);
                pr(t.stateNode, t.type, r)
            }
        }
    }
    function yr(e) {
        hr ? mr ? mr.push(e) : mr = [e] : hr = e
    }
    function vr() {
        if (hr) {
            var e = hr
              , t = mr;
            if (hr = null,
            mr = null,
            gr(e),
            t)
                for (var n = 0; n < t.length; n++)
                    gr(t[n])
        }
    }
    var br = function(e, t) {
        return e(t)
    }
      , _r = function() {}
      , wr = !1;
    function Sr() {
        (null !== hr || null !== mr) && (_r(),
        vr())
    }
    function kr(e, t, n) {
        if (wr)
            return e(t, n);
        wr = !0;
        try {
            return br(e, t, n)
        } finally {
            wr = !1,
            Sr()
        }
    }
    function xr(e, t) {
        var n = e.stateNode;
        if (null === n)
            return null;
        var r = Yc(n);
        if (null === r)
            return null;
        var o = r[t];
        if (function(e, t, n) {
            switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                return !(!n.disabled || (r = t,
                "button" !== r && "input" !== r && "select" !== r && "textarea" !== r));
            default:
                return !1
            }
            var r
        }(t, e.type, r))
            return null;
        if (o && "function" != typeof o)
            throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
        return o
    }
    var Er = !1;
    if (X)
        try {
            var Cr = {};
            Object.defineProperty(Cr, "passive", {
                get: function() {
                    Er = !0
                }
            }),
            window.addEventListener("test", Cr, Cr),
            window.removeEventListener("test", Cr, Cr)
        } catch (hS) {
            Er = !1
        }
    function Tr(e, t, n, r, o, i, a, s, u) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, l)
        } catch (c) {
            this.onError(c)
        }
    }
    var Rr = Tr;
    if ("undefined" != typeof window && "function" == typeof window.dispatchEvent && "undefined" != typeof document && "function" == typeof document.createEvent) {
        var Or = document.createElement("react");
        Rr = function(e, t, n, r, o, i, a, s, u) {
            if ("undefined" == typeof document || null === document)
                throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
            var l = document.createEvent("Event")
              , c = !1
              , d = !0
              , f = window.event
              , p = Object.getOwnPropertyDescriptor(window, "event");
            function h() {
                Or.removeEventListener(w, y, !1),
                void 0 !== window.event && window.hasOwnProperty("event") && (window.event = f)
            }
            var m, g = Array.prototype.slice.call(arguments, 3);
            function y() {
                c = !0,
                h(),
                t.apply(n, g),
                d = !1
            }
            var v = !1
              , b = !1;
            function _(e) {
                if (m = e.error,
                v = !0,
                null === m && 0 === e.colno && 0 === e.lineno && (b = !0),
                e.defaultPrevented && null != m && "object" == typeof m)
                    try {
                        m._suppressLogging = !0
                    } catch (t) {}
            }
            var w = "react-" + (e || "invokeguardedcallback");
            if (window.addEventListener("error", _),
            Or.addEventListener(w, y, !1),
            l.initEvent(w, !1, !1),
            Or.dispatchEvent(l),
            p && Object.defineProperty(window, "event", p),
            c && d && (v ? b && (m = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : m = new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),
            this.onError(m)),
            window.removeEventListener("error", _),
            !c)
                return h(),
                Tr.apply(this, arguments)
        }
    }
    var Ir = Rr
      , Mr = !1
      , Pr = null
      , Nr = !1
      , Dr = null
      , Lr = {
        onError: function(e) {
            Mr = !0,
            Pr = e
        }
    };
    function Ar(e, t, n, r, o, i, a, s, u) {
        Mr = !1,
        Pr = null,
        Ir.apply(Lr, arguments)
    }
    function Fr() {
        if (Mr) {
            var e = Pr;
            return Mr = !1,
            Pr = null,
            e
        }
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")
    }
    function Ur(e) {
        return e._reactInternals
    }
    var jr = 0
      , zr = 1
      , Br = 2
      , qr = 4
      , Wr = 16
      , Vr = 32
      , $r = 64
      , Hr = 128
      , Qr = 256
      , Yr = 512
      , Gr = 1024
      , Kr = 2048
      , Xr = 4096
      , Jr = 8192
      , Zr = 16384
      , eo = Kr | qr | $r | Yr | Gr | Zr
      , to = 32767
      , no = 32768
      , ro = 65536
      , oo = 131072
      , io = 1048576
      , ao = 2097152
      , so = 4194304
      , uo = 8388608
      , lo = 16777216
      , co = 33554432
      , fo = qr | Gr
      , po = Br | qr | Wr | Vr | Yr | Xr | Jr
      , ho = qr | $r | Yr | Jr
      , mo = Kr | Wr
      , go = so | uo | ao
      , yo = n.ReactCurrentOwner;
    function vo(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            var r = t;
            do {
                ((t = r).flags & (Br | Xr)) !== jr && (n = t.return),
                r = t.return
            } while (r)
        }
        return t.tag === c ? n : null
    }
    function bo(e) {
        if (e.tag === _) {
            var t = e.memoizedState;
            if (null === t) {
                var n = e.alternate;
                null !== n && (t = n.memoizedState)
            }
            if (null !== t)
                return t.dehydrated
        }
        return null
    }
    function _o(e) {
        return e.tag === c ? e.stateNode.containerInfo : null
    }
    function wo(e) {
        if (vo(e) !== e)
            throw new Error("Unable to find node on an unmounted component.")
    }
    function So(e) {
        var t = e.alternate;
        if (!t) {
            var n = vo(e);
            if (null === n)
                throw new Error("Unable to find node on an unmounted component.");
            return n !== e ? null : e
        }
        for (var r = e, o = t; ; ) {
            var i = r.return;
            if (null === i)
                break;
            var a = i.alternate;
            if (null === a) {
                var s = i.return;
                if (null !== s) {
                    r = o = s;
                    continue
                }
                break
            }
            if (i.child === a.child) {
                for (var u = i.child; u; ) {
                    if (u === r)
                        return wo(i),
                        e;
                    if (u === o)
                        return wo(i),
                        t;
                    u = u.sibling
                }
                throw new Error("Unable to find node on an unmounted component.")
            }
            if (r.return !== o.return)
                r = i,
                o = a;
            else {
                for (var l = !1, d = i.child; d; ) {
                    if (d === r) {
                        l = !0,
                        r = i,
                        o = a;
                        break
                    }
                    if (d === o) {
                        l = !0,
                        o = i,
                        r = a;
                        break
                    }
                    d = d.sibling
                }
                if (!l) {
                    for (d = a.child; d; ) {
                        if (d === r) {
                            l = !0,
                            r = a,
                            o = i;
                            break
                        }
                        if (d === o) {
                            l = !0,
                            o = a,
                            r = i;
                            break
                        }
                        d = d.sibling
                    }
                    if (!l)
                        throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")
                }
            }
            if (r.alternate !== o)
                throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")
        }
        if (r.tag !== c)
            throw new Error("Unable to find node on an unmounted component.");
        return r.stateNode.current === r ? e : t
    }
    function ko(e) {
        var t = So(e);
        return null !== t ? xo(t) : null
    }
    function xo(e) {
        if (e.tag === f || e.tag === p)
            return e;
        for (var t = e.child; null !== t; ) {
            var n = xo(t);
            if (null !== n)
                return n;
            t = t.sibling
        }
        return null
    }
    function Eo(e) {
        var t = So(e);
        return null !== t ? Co(t) : null
    }
    function Co(e) {
        if (e.tag === f || e.tag === p)
            return e;
        for (var t = e.child; null !== t; ) {
            if (t.tag !== d) {
                var n = Co(t);
                if (null !== n)
                    return n
            }
            t = t.sibling
        }
        return null
    }
    var To = t.unstable_scheduleCallback
      , Ro = t.unstable_cancelCallback
      , Oo = t.unstable_shouldYield
      , Io = t.unstable_requestPaint
      , Mo = t.unstable_now
      , Po = t.unstable_getCurrentPriorityLevel
      , No = t.unstable_ImmediatePriority
      , Do = t.unstable_UserBlockingPriority
      , Lo = t.unstable_NormalPriority
      , Ao = t.unstable_LowPriority
      , Fo = t.unstable_IdlePriority
      , Uo = t.unstable_yieldValue
      , jo = t.unstable_setDisableYieldValue
      , zo = null
      , Bo = null
      , qo = null
      , Wo = !1
      , Vo = "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;
    function $o(e) {
        if ("function" == typeof Uo && (jo(e),
        r = e),
        Bo && "function" == typeof Bo.setStrictMode)
            try {
                Bo.setStrictMode(zo, e)
            } catch (t) {
                Wo || (Wo = !0,
                i("React instrumentation encountered an error: %s", t))
            }
    }
    function Ho(e) {
        qo = e
    }
    function Qo() {
        for (var e = new Map, t = 1, n = 0; n < pi; n++) {
            var r = Xi(t);
            e.set(t, r),
            t *= 2
        }
        return e
    }
    function Yo() {
        null !== qo && "function" == typeof qo.markCommitStopped && qo.markCommitStopped()
    }
    function Go(e) {
        null !== qo && "function" == typeof qo.markComponentRenderStarted && qo.markComponentRenderStarted(e)
    }
    function Ko() {
        null !== qo && "function" == typeof qo.markComponentRenderStopped && qo.markComponentRenderStopped()
    }
    function Xo(e) {
        null !== qo && "function" == typeof qo.markComponentLayoutEffectMountStarted && qo.markComponentLayoutEffectMountStarted(e)
    }
    function Jo(e) {
        null !== qo && "function" == typeof qo.markComponentLayoutEffectUnmountStarted && qo.markComponentLayoutEffectUnmountStarted(e)
    }
    function Zo() {
        null !== qo && "function" == typeof qo.markComponentLayoutEffectUnmountStopped && qo.markComponentLayoutEffectUnmountStopped()
    }
    function ei(e, t, n) {
        null !== qo && "function" == typeof qo.markComponentErrored && qo.markComponentErrored(e, t, n)
    }
    function ti(e, t, n) {
        null !== qo && "function" == typeof qo.markComponentSuspended && qo.markComponentSuspended(e, t, n)
    }
    function ni(e) {
        null !== qo && "function" == typeof qo.markRenderStarted && qo.markRenderStarted(e)
    }
    function ri() {
        null !== qo && "function" == typeof qo.markRenderStopped && qo.markRenderStopped()
    }
    function oi(e, t) {
        null !== qo && "function" == typeof qo.markStateUpdateScheduled && qo.markStateUpdateScheduled(e, t)
    }
    var ii = 0
      , ai = 1
      , si = 2
      , ui = 8
      , li = 16
      , ci = Math.clz32 ? Math.clz32 : function(e) {
        var t = e >>> 0;
        if (0 === t)
            return 32;
        return 31 - (di(t) / fi | 0) | 0
    }
      , di = Math.log
      , fi = Math.LN2;
    var pi = 31
      , hi = 0
      , mi = 0
      , gi = 1
      , yi = 2
      , vi = 4
      , bi = 8
      , _i = 16
      , wi = 32
      , Si = 4194240
      , ki = 64
      , xi = 128
      , Ei = 256
      , Ci = 512
      , Ti = 1024
      , Ri = 2048
      , Oi = 4096
      , Ii = 8192
      , Mi = 16384
      , Pi = 32768
      , Ni = 65536
      , Di = 131072
      , Li = 262144
      , Ai = 524288
      , Fi = 1048576
      , Ui = 2097152
      , ji = 130023424
      , zi = 4194304
      , Bi = 8388608
      , qi = 16777216
      , Wi = 33554432
      , Vi = 67108864
      , $i = zi
      , Hi = 134217728
      , Qi = 268435455
      , Yi = 268435456
      , Gi = 536870912
      , Ki = 1073741824;
    function Xi(e) {
        return e & gi ? "Sync" : e & yi ? "InputContinuousHydration" : e & vi ? "InputContinuous" : e & bi ? "DefaultHydration" : e & _i ? "Default" : e & wi ? "TransitionHydration" : e & Si ? "Transition" : e & ji ? "Retry" : e & Hi ? "SelectiveHydration" : e & Yi ? "IdleHydration" : e & Gi ? "Idle" : e & Ki ? "Offscreen" : void 0
    }
    var Ji = -1
      , Zi = ki
      , ea = zi;
    function ta(e) {
        switch (ca(e)) {
        case gi:
            return gi;
        case yi:
            return yi;
        case vi:
            return vi;
        case bi:
            return bi;
        case _i:
            return _i;
        case wi:
            return wi;
        case ki:
        case xi:
        case Ei:
        case Ci:
        case Ti:
        case Ri:
        case Oi:
        case Ii:
        case Mi:
        case Pi:
        case Ni:
        case Di:
        case Li:
        case Ai:
        case Fi:
        case Ui:
            return e & Si;
        case zi:
        case Bi:
        case qi:
        case Wi:
        case Vi:
            return e & ji;
        case Hi:
            return Hi;
        case Yi:
            return Yi;
        case Gi:
            return Gi;
        case Ki:
            return Ki;
        default:
            return i("Should have found matching lanes. This is a bug in React."),
            e
        }
    }
    function na(e, t) {
        var n = e.pendingLanes;
        if (n === hi)
            return hi;
        var r = hi
          , o = e.suspendedLanes
          , i = e.pingedLanes
          , a = n & Qi;
        if (a !== hi) {
            var s = a & ~o;
            if (s !== hi)
                r = ta(s);
            else {
                var u = a & i;
                u !== hi && (r = ta(u))
            }
        } else {
            var l = n & ~o;
            l !== hi ? r = ta(l) : i !== hi && (r = ta(i))
        }
        if (r === hi)
            return hi;
        if (t !== hi && t !== r && (t & o) === hi) {
            var c = ca(r)
              , d = ca(t);
            if (c >= d || c === _i && (d & Si) !== hi)
                return t
        }
        (r & vi) !== hi && (r |= n & _i);
        var f = e.entangledLanes;
        if (f !== hi)
            for (var p = e.entanglements, h = r & f; h > 0; ) {
                var m = fa(h)
                  , g = 1 << m;
                r |= p[m],
                h &= ~g
            }
        return r
    }
    function ra(e, t) {
        switch (e) {
        case gi:
        case yi:
        case vi:
            return t + 250;
        case bi:
        case _i:
        case wi:
        case ki:
        case xi:
        case Ei:
        case Ci:
        case Ti:
        case Ri:
        case Oi:
        case Ii:
        case Mi:
        case Pi:
        case Ni:
        case Di:
        case Li:
        case Ai:
        case Fi:
        case Ui:
            return t + 5e3;
        case zi:
        case Bi:
        case qi:
        case Wi:
        case Vi:
        case Hi:
        case Yi:
        case Gi:
        case Ki:
            return Ji;
        default:
            return i("Should have found matching lanes. This is a bug in React."),
            Ji
        }
    }
    function oa(e) {
        var t = e.pendingLanes & ~Ki;
        return t !== hi ? t : t & Ki ? Ki : hi
    }
    function ia(e) {
        return (e & Qi) !== hi
    }
    function aa(e) {
        return (e & ji) === e
    }
    function sa(e, t) {
        return (t & (yi | vi | bi | _i)) !== hi
    }
    function ua(e) {
        return (e & Si) !== hi
    }
    function la() {
        var e = Zi;
        return ((Zi <<= 1) & Si) === hi && (Zi = ki),
        e
    }
    function ca(e) {
        return e & -e
    }
    function da(e) {
        return ca(e)
    }
    function fa(e) {
        return 31 - ci(e)
    }
    function pa(e) {
        return fa(e)
    }
    function ha(e, t) {
        return (e & t) !== hi
    }
    function ma(e, t) {
        return (e & t) === t
    }
    function ga(e, t) {
        return e | t
    }
    function ya(e, t) {
        return e & ~t
    }
    function va(e, t) {
        return e & t
    }
    function ba(e) {
        for (var t = [], n = 0; n < pi; n++)
            t.push(e);
        return t
    }
    function _a(e, t, n) {
        e.pendingLanes |= t,
        t !== Gi && (e.suspendedLanes = hi,
        e.pingedLanes = hi),
        e.eventTimes[pa(t)] = n
    }
    function wa(e, t, n) {
        e.pingedLanes |= e.suspendedLanes & t
    }
    function Sa(e, t) {
        for (var n = e.entangledLanes |= t, r = e.entanglements, o = n; o; ) {
            var i = fa(o)
              , a = 1 << i;
            a & t | r[i] & t && (r[i] |= t),
            o &= ~a
        }
    }
    function ka(e, t, n) {
        if (Vo)
            for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
                var o = pa(n)
                  , i = 1 << o;
                r[o].add(t),
                n &= ~i
            }
    }
    function xa(e, t) {
        if (Vo)
            for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
                var o = pa(t)
                  , i = 1 << o
                  , a = n[o];
                a.size > 0 && (a.forEach((function(e) {
                    var t = e.alternate;
                    null !== t && r.has(t) || r.add(e)
                }
                )),
                a.clear()),
                t &= ~i
            }
    }
    var Ea, Ca, Ta, Ra, Oa, Ia = gi, Ma = vi, Pa = _i, Na = Gi, Da = mi;
    function La() {
        return Da
    }
    function Aa(e) {
        Da = e
    }
    function Fa(e, t) {
        return 0 !== e && e < t
    }
    function Ua(e) {
        var t = ca(e);
        return Fa(Ia, t) ? Fa(Ma, t) ? ia(t) ? Pa : Na : Ma : Ia
    }
    function ja(e) {
        return e.current.memoizedState.isDehydrated
    }
    function za(e) {
        Ea(e)
    }
    var Ba = !1
      , qa = []
      , Wa = null
      , Va = null
      , $a = null
      , Ha = new Map
      , Qa = new Map
      , Ya = []
      , Ga = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset", "submit"];
    function Ka(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Wa = null;
            break;
        case "dragenter":
        case "dragleave":
            Va = null;
            break;
        case "mouseover":
        case "mouseout":
            $a = null;
            break;
        case "pointerover":
        case "pointerout":
            var n = t.pointerId;
            Ha.delete(n);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            var r = t.pointerId;
            Qa.delete(r)
        }
    }
    function Xa(e, t, n, r, o, i) {
        if (null === e || e.nativeEvent !== i) {
            var a = function(e, t, n, r, o) {
                return {
                    blockedOn: e,
                    domEventName: t,
                    eventSystemFlags: n,
                    nativeEvent: o,
                    targetContainers: [r]
                }
            }(t, n, r, o, i);
            if (null !== t) {
                var s = Hc(t);
                null !== s && Ca(s)
            }
            return a
        }
        e.eventSystemFlags |= r;
        var u = e.targetContainers;
        return null !== o && -1 === u.indexOf(o) && u.push(o),
        e
    }
    function Ja(e) {
        var t = $c(e.target);
        if (null !== t) {
            var n = vo(t);
            if (null !== n) {
                var r = n.tag;
                if (r === _) {
                    var o = bo(n);
                    if (null !== o)
                        return e.blockedOn = o,
                        void Oa(e.priority, (function() {
                            Ta(n)
                        }
                        ))
                } else if (r === c) {
                    if (ja(n.stateNode))
                        return void (e.blockedOn = _o(n))
                }
            }
        }
        e.blockedOn = null
    }
    function Za(e) {
        if (null !== e.blockedOn)
            return !1;
        for (var t, n = e.targetContainers; n.length > 0; ) {
            var r = n[0]
              , o = ds(e.domEventName, e.eventSystemFlags, r, e.nativeEvent);
            if (null !== o) {
                var a = Hc(o);
                return null !== a && Ca(a),
                e.blockedOn = o,
                !1
            }
            var s = e.nativeEvent
              , u = new s.constructor(s.type,s);
            t = u,
            null !== dr && i("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),
            dr = t,
            s.target.dispatchEvent(u),
            null === dr && i("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),
            dr = null,
            n.shift()
        }
        return !0
    }
    function es(e, t, n) {
        Za(e) && n.delete(t)
    }
    function ts() {
        Ba = !1,
        null !== Wa && Za(Wa) && (Wa = null),
        null !== Va && Za(Va) && (Va = null),
        null !== $a && Za($a) && ($a = null),
        Ha.forEach(es),
        Qa.forEach(es)
    }
    function ns(e, n) {
        e.blockedOn === n && (e.blockedOn = null,
        Ba || (Ba = !0,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, ts)))
    }
    function rs(e) {
        if (qa.length > 0) {
            ns(qa[0], e);
            for (var t = 1; t < qa.length; t++) {
                var n = qa[t];
                n.blockedOn === e && (n.blockedOn = null)
            }
        }
        null !== Wa && ns(Wa, e),
        null !== Va && ns(Va, e),
        null !== $a && ns($a, e);
        var r = function(t) {
            return ns(t, e)
        };
        Ha.forEach(r),
        Qa.forEach(r);
        for (var o = 0; o < Ya.length; o++) {
            var i = Ya[o];
            i.blockedOn === e && (i.blockedOn = null)
        }
        for (; Ya.length > 0; ) {
            var a = Ya[0];
            if (null !== a.blockedOn)
                break;
            Ja(a),
            null === a.blockedOn && Ya.shift()
        }
    }
    var os = n.ReactCurrentBatchConfig
      , is = !0;
    function as(e) {
        is = !!e
    }
    function ss(e, t, n, r) {
        var o = La()
          , i = os.transition;
        os.transition = null;
        try {
            Aa(Ia),
            ls(e, t, n, r)
        } finally {
            Aa(o),
            os.transition = i
        }
    }
    function us(e, t, n, r) {
        var o = La()
          , i = os.transition;
        os.transition = null;
        try {
            Aa(Ma),
            ls(e, t, n, r)
        } finally {
            Aa(o),
            os.transition = i
        }
    }
    function ls(e, t, n, r) {
        is && function(e, t, n, r) {
            var o = ds(e, t, n, r);
            if (null === o)
                return yl(e, t, r, cs, n),
                void Ka(e, r);
            if (function(e, t, n, r, o) {
                switch (t) {
                case "focusin":
                    return Wa = Xa(Wa, e, t, n, r, o),
                    !0;
                case "dragenter":
                    return Va = Xa(Va, e, t, n, r, o),
                    !0;
                case "mouseover":
                    return $a = Xa($a, e, t, n, r, o),
                    !0;
                case "pointerover":
                    var i = o
                      , a = i.pointerId;
                    return Ha.set(a, Xa(Ha.get(a) || null, e, t, n, r, i)),
                    !0;
                case "gotpointercapture":
                    var s = o
                      , u = s.pointerId;
                    return Qa.set(u, Xa(Qa.get(u) || null, e, t, n, r, s)),
                    !0
                }
                return !1
            }(o, e, t, n, r))
                return void r.stopPropagation();
            if (Ka(e, r),
            t & lr && function(e) {
                return Ga.indexOf(e) > -1
            }(e)) {
                for (; null !== o; ) {
                    var i = Hc(o);
                    null !== i && za(i);
                    var a = ds(e, t, n, r);
                    if (null === a && yl(e, t, r, cs, n),
                    a === o)
                        break;
                    o = a
                }
                return void (null !== o && r.stopPropagation())
            }
            yl(e, t, r, null, n)
        }(e, t, n, r)
    }
    var cs = null;
    function ds(e, t, n, r) {
        cs = null;
        var o = $c(fr(r));
        if (null !== o) {
            var i = vo(o);
            if (null === i)
                o = null;
            else {
                var a = i.tag;
                if (a === _) {
                    var s = bo(i);
                    if (null !== s)
                        return s;
                    o = null
                } else if (a === c) {
                    if (ja(i.stateNode))
                        return _o(i);
                    o = null
                } else
                    i !== o && (o = null)
            }
        }
        return cs = o,
        null
    }
    function fs(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return Ia;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return Ma;
        case "message":
            switch (Po()) {
            case No:
                return Ia;
            case Do:
                return Ma;
            case Lo:
            case Ao:
                return Pa;
            case Fo:
                return Na;
            default:
                return Pa
            }
        default:
            return Pa
        }
    }
    var ps = null
      , hs = null
      , ms = null;
    function gs() {
        if (ms)
            return ms;
        var e, t, n = hs, r = n.length, o = ys(), i = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++)
            ;
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === o[i - t]; t++)
            ;
        var s = t > 1 ? 1 - t : void 0;
        return ms = o.slice(e, s)
    }
    function ys() {
        return "value"in ps ? ps.value : ps.textContent
    }
    function vs(e) {
        var t, n = e.keyCode;
        return "charCode"in e ? 0 === (t = e.charCode) && 13 === n && (t = 13) : t = n,
        10 === t && (t = 13),
        t >= 32 || 13 === t ? t : 0
    }
    function bs() {
        return !0
    }
    function _s() {
        return !1
    }
    function ws(e) {
        function t(t, n, r, o, i) {
            for (var a in this._reactName = t,
            this._targetInst = r,
            this.type = n,
            this.nativeEvent = o,
            this.target = i,
            this.currentTarget = null,
            e)
                if (e.hasOwnProperty(a)) {
                    var s = e[a];
                    this[a] = s ? s(o) : o[a]
                }
            var u = null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue;
            return this.isDefaultPrevented = u ? bs : _s,
            this.isPropagationStopped = _s,
            this
        }
        return Je(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                this.isDefaultPrevented = bs)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                this.isPropagationStopped = bs)
            },
            persist: function() {},
            isPersistent: bs
        }),
        t
    }
    var Ss, ks, xs, Es = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Cs = ws(Es), Ts = Je({}, Es, {
        view: 0,
        detail: 0
    }), Rs = ws(Ts);
    var Os = Je({}, Ts, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Bs,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (function(e) {
                e !== xs && (xs && "mousemove" === e.type ? (Ss = e.screenX - xs.screenX,
                ks = e.screenY - xs.screenY) : (Ss = 0,
                ks = 0),
                xs = e)
            }(e),
            Ss)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : ks
        }
    })
      , Is = ws(Os)
      , Ms = ws(Je({}, Os, {
        dataTransfer: 0
    }))
      , Ps = ws(Je({}, Ts, {
        relatedTarget: 0
    }))
      , Ns = ws(Je({}, Es, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }))
      , Ds = ws(Je({}, Es, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }))
      , Ls = ws(Je({}, Es, {
        data: 0
    }))
      , As = Ls
      , Fs = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }
      , Us = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    };
    var js = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function zs(e) {
        var t = this.nativeEvent;
        if (t.getModifierState)
            return t.getModifierState(e);
        var n = js[e];
        return !!n && !!t[n]
    }
    function Bs(e) {
        return zs
    }
    var qs = ws(Je({}, Ts, {
        key: function(e) {
            if (e.key) {
                var t = Fs[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t
            }
            if ("keypress" === e.type) {
                var n = vs(e);
                return 13 === n ? "Enter" : String.fromCharCode(n)
            }
            return "keydown" === e.type || "keyup" === e.type ? Us[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Bs,
        charCode: function(e) {
            return "keypress" === e.type ? vs(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? vs(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }))
      , Ws = ws(Je({}, Os, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }))
      , Vs = ws(Je({}, Ts, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Bs
    }))
      , $s = ws(Je({}, Es, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }))
      , Hs = ws(Je({}, Os, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }))
      , Qs = [9, 13, 27, 32]
      , Ys = 229
      , Gs = X && "CompositionEvent"in window
      , Ks = null;
    X && "documentMode"in document && (Ks = document.documentMode);
    var Xs = X && "TextEvent"in window && !Ks
      , Js = X && (!Gs || Ks && Ks > 8 && Ks <= 11)
      , Zs = 32
      , eu = String.fromCharCode(Zs);
    var tu = !1;
    function nu(e, t) {
        switch (e) {
        case "keyup":
            return -1 !== Qs.indexOf(t.keyCode);
        case "keydown":
            return t.keyCode !== Ys;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function ru(e) {
        var t = e.detail;
        return "object" == typeof t && "data"in t ? t.data : null
    }
    function ou(e) {
        return "ko" === e.locale
    }
    var iu = !1;
    function au(e, t, n, r, o) {
        var i, a;
        if (Gs ? i = function(e) {
            switch (e) {
            case "compositionstart":
                return "onCompositionStart";
            case "compositionend":
                return "onCompositionEnd";
            case "compositionupdate":
                return "onCompositionUpdate"
            }
        }(t) : iu ? nu(t, r) && (i = "onCompositionEnd") : function(e, t) {
            return "keydown" === e && t.keyCode === Ys
        }(t, r) && (i = "onCompositionStart"),
        !i)
            return null;
        Js && !ou(r) && (iu || "onCompositionStart" !== i ? "onCompositionEnd" === i && iu && (a = gs()) : iu = function(e) {
            return ps = e,
            hs = ys(),
            !0
        }(o));
        var s = bl(n, i);
        if (s.length > 0) {
            var u = new Ls(i,t,null,r,o);
            if (e.push({
                event: u,
                listeners: s
            }),
            a)
                u.data = a;
            else {
                var l = ru(r);
                null !== l && (u.data = l)
            }
        }
    }
    function su(e, t) {
        if (iu) {
            if ("compositionend" === e || !Gs && nu(e, t)) {
                var n = gs();
                return ps = null,
                hs = null,
                ms = null,
                iu = !1,
                n
            }
            return null
        }
        switch (e) {
        case "paste":
        default:
            return null;
        case "keypress":
            if (!function(e) {
                return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
            }(t)) {
                if (t.char && t.char.length > 1)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Js && !ou(t) ? null : t.data
        }
    }
    function uu(e, t, n, r, o) {
        var i;
        if (!(i = Xs ? function(e, t) {
            switch (e) {
            case "compositionend":
                return ru(t);
            case "keypress":
                return t.which !== Zs ? null : (tu = !0,
                eu);
            case "textInput":
                var n = t.data;
                return n === eu && tu ? null : n;
            default:
                return null
            }
        }(t, r) : su(t, r)))
            return null;
        var a = bl(n, "onBeforeInput");
        if (a.length > 0) {
            var s = new As("onBeforeInput","beforeinput",null,r,o);
            e.push({
                event: s,
                listeners: a
            }),
            s.data = i
        }
    }
    var lu = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function cu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!lu[e.type] : "textarea" === t
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function du(e, t, n, r) {
        yr(r);
        var o = bl(t, "onChange");
        if (o.length > 0) {
            var i = new Cs("onChange","change",null,n,r);
            e.push({
                event: i,
                listeners: o
            })
        }
    }
    var fu = null
      , pu = null;
    function hu(e) {
        cl(e, 0)
    }
    function mu(e) {
        if (Mt(Qc(e)))
            return e
    }
    function gu(e, t) {
        if ("change" === e)
            return t
    }
    var yu = !1;
    function vu() {
        fu && (fu.detachEvent("onpropertychange", bu),
        fu = null,
        pu = null)
    }
    function bu(e) {
        "value" === e.propertyName && mu(pu) && function(e) {
            var t = [];
            du(t, pu, e, fr(e)),
            kr(hu, t)
        }(e)
    }
    function _u(e, t, n) {
        "focusin" === e ? (vu(),
        function(e, t) {
            pu = t,
            (fu = e).attachEvent("onpropertychange", bu)
        }(t, n)) : "focusout" === e && vu()
    }
    function wu(e, t) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return mu(pu)
    }
    function Su(e, t) {
        if ("click" === e)
            return mu(t)
    }
    function ku(e, t) {
        if ("input" === e || "change" === e)
            return mu(t)
    }
    function xu(e, t, n, r, o, i, a) {
        var s, u, l, c, d, f, p = n ? Qc(n) : window;
        if ("select" === (c = (l = p).nodeName && l.nodeName.toLowerCase()) || "input" === c && "file" === l.type ? s = gu : cu(p) ? yu ? s = ku : (s = wu,
        u = _u) : function(e) {
            var t = e.nodeName;
            return t && "input" === t.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
        }(p) && (s = Su),
        s) {
            var h = s(t, n);
            if (h)
                return void du(e, h, r, o)
        }
        u && u(t, p, n),
        "focusout" === t && (f = (d = p)._wrapperState) && f.controlled && "number" === d.type && Vt(d, "number", d.value)
    }
    function Eu(e, t, n, r, o, i, a) {
        var s = "mouseover" === t || "pointerover" === t
          , u = "mouseout" === t || "pointerout" === t;
        if (s && r !== dr) {
            var l = r.relatedTarget || r.fromElement;
            if (l && ($c(l) || Vc(l)))
                return
        }
        if (u || s) {
            var c, d, h;
            if (o.window === o)
                c = o;
            else {
                var m = o.ownerDocument;
                c = m ? m.defaultView || m.parentWindow : window
            }
            if (u) {
                var g = r.relatedTarget || r.toElement;
                if (d = n,
                null !== (h = g ? $c(g) : null))
                    (h !== vo(h) || h.tag !== f && h.tag !== p) && (h = null)
            } else
                d = null,
                h = n;
            if (d !== h) {
                var y = Is
                  , v = "onMouseLeave"
                  , b = "onMouseEnter"
                  , _ = "mouse";
                "pointerout" !== t && "pointerover" !== t || (y = Ws,
                v = "onPointerLeave",
                b = "onPointerEnter",
                _ = "pointer");
                var w = null == d ? c : Qc(d)
                  , S = null == h ? c : Qc(h)
                  , k = new y(v,_ + "leave",d,r,o);
                k.target = w,
                k.relatedTarget = S;
                var x = null;
                if ($c(o) === n) {
                    var E = new y(b,_ + "enter",h,r,o);
                    E.target = S,
                    E.relatedTarget = w,
                    x = E
                }
                !function(e, t, n, r, o) {
                    var i = r && o ? function(e, t) {
                        for (var n = e, r = t, o = 0, i = n; i; i = _l(i))
                            o++;
                        for (var a = 0, s = r; s; s = _l(s))
                            a++;
                        for (; o - a > 0; )
                            n = _l(n),
                            o--;
                        for (; a - o > 0; )
                            r = _l(r),
                            a--;
                        var u = o;
                        for (; u--; ) {
                            if (n === r || null !== r && n === r.alternate)
                                return n;
                            n = _l(n),
                            r = _l(r)
                        }
                        return null
                    }(r, o) : null;
                    null !== r && wl(e, t, r, i, !1);
                    null !== o && null !== n && wl(e, n, o, i, !0)
                }(e, k, x, d, h)
            }
        }
    }
    X && (yu = function(e) {
        if (!X)
            return !1;
        var t = "on" + e
          , n = t in document;
        if (!n) {
            var r = document.createElement("div");
            r.setAttribute(t, "return;"),
            n = "function" == typeof r[t]
        }
        return n
    }("input") && (!document.documentMode || document.documentMode > 9));
    var Cu = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }
    ;
    function Tu(e, t) {
        if (Cu(e, t))
            return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if (!J.call(t, i) || !Cu(e[i], t[i]))
                return !1
        }
        return !0
    }
    function Ru(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Ou(e) {
        for (; e; ) {
            if (e.nextSibling)
                return e.nextSibling;
            e = e.parentNode
        }
    }
    function Iu(e, t) {
        for (var n = Ru(e), r = 0, o = 0; n; ) {
            if (n.nodeType === vn) {
                if (o = r + n.textContent.length,
                r <= t && o >= t)
                    return {
                        node: n,
                        offset: t - r
                    };
                r = o
            }
            n = Ru(Ou(n))
        }
    }
    function Mu(e) {
        var t = e.ownerDocument
          , n = t && t.defaultView || window
          , r = n.getSelection && n.getSelection();
        if (!r || 0 === r.rangeCount)
            return null;
        var o = r.anchorNode
          , i = r.anchorOffset
          , a = r.focusNode
          , s = r.focusOffset;
        try {
            o.nodeType,
            a.nodeType
        } catch (hS) {
            return null
        }
        return function(e, t, n, r, o) {
            var i = 0
              , a = -1
              , s = -1
              , u = 0
              , l = 0
              , c = e
              , d = null;
            e: for (; ; ) {
                for (var f = null; c !== t || 0 !== n && c.nodeType !== vn || (a = i + n),
                c !== r || 0 !== o && c.nodeType !== vn || (s = i + o),
                c.nodeType === vn && (i += c.nodeValue.length),
                null !== (f = c.firstChild); )
                    d = c,
                    c = f;
                for (; ; ) {
                    if (c === e)
                        break e;
                    if (d === t && ++u === n && (a = i),
                    d === r && ++l === o && (s = i),
                    null !== (f = c.nextSibling))
                        break;
                    d = (c = d).parentNode
                }
                c = f
            }
            if (-1 === a || -1 === s)
                return null;
            return {
                start: a,
                end: s
            }
        }(e, o, i, a, s)
    }
    function Pu(e) {
        return e && e.nodeType === vn
    }
    function Nu(e, t) {
        return !(!e || !t) && (e === t || !Pu(e) && (Pu(t) ? Nu(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }
    function Du(e) {
        return e && e.ownerDocument && Nu(e.ownerDocument.documentElement, e)
    }
    function Lu(e) {
        try {
            return "string" == typeof e.contentWindow.location.href
        } catch (t) {
            return !1
        }
    }
    function Au() {
        for (var e = window, t = Pt(); t instanceof e.HTMLIFrameElement; ) {
            if (!Lu(t))
                return t;
            t = Pt((e = t.contentWindow).document)
        }
        return t
    }
    function Fu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    function Uu(e) {
        var t = Au()
          , n = e.focusedElem
          , r = e.selectionRange;
        if (t !== n && Du(n)) {
            null !== r && Fu(n) && function(e, t) {
                var n = t.start
                  , r = t.end;
                void 0 === r && (r = n);
                "selectionStart"in e ? (e.selectionStart = n,
                e.selectionEnd = Math.min(r, e.value.length)) : function(e, t) {
                    var n = e.ownerDocument || document
                      , r = n && n.defaultView || window;
                    if (r.getSelection) {
                        var o = r.getSelection()
                          , i = e.textContent.length
                          , a = Math.min(t.start, i)
                          , s = void 0 === t.end ? a : Math.min(t.end, i);
                        if (!o.extend && a > s) {
                            var u = s;
                            s = a,
                            a = u
                        }
                        var l = Iu(e, a)
                          , c = Iu(e, s);
                        if (l && c) {
                            if (1 === o.rangeCount && o.anchorNode === l.node && o.anchorOffset === l.offset && o.focusNode === c.node && o.focusOffset === c.offset)
                                return;
                            var d = n.createRange();
                            d.setStart(l.node, l.offset),
                            o.removeAllRanges(),
                            a > s ? (o.addRange(d),
                            o.extend(c.node, c.offset)) : (d.setEnd(c.node, c.offset),
                            o.addRange(d))
                        }
                    }
                }(e, t)
            }(n, r);
            for (var o = [], i = n; i = i.parentNode; )
                i.nodeType === yn && o.push({
                    element: i,
                    left: i.scrollLeft,
                    top: i.scrollTop
                });
            "function" == typeof n.focus && n.focus();
            for (var a = 0; a < o.length; a++) {
                var s = o[a];
                s.element.scrollLeft = s.left,
                s.element.scrollTop = s.top
            }
        }
    }
    function ju(e) {
        return ("selectionStart"in e ? {
            start: e.selectionStart,
            end: e.selectionEnd
        } : Mu(e)) || {
            start: 0,
            end: 0
        }
    }
    var zu = X && "documentMode"in document && document.documentMode <= 11;
    var Bu = null
      , qu = null
      , Wu = null
      , Vu = !1;
    function $u(e, t, n) {
        var r, o = (r = n).window === r ? r.document : r.nodeType === _n ? r : r.ownerDocument;
        if (!Vu && null != Bu && Bu === Pt(o)) {
            var i = function(e) {
                if ("selectionStart"in e && Fu(e))
                    return {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                var t = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection();
                return {
                    anchorNode: t.anchorNode,
                    anchorOffset: t.anchorOffset,
                    focusNode: t.focusNode,
                    focusOffset: t.focusOffset
                }
            }(Bu);
            if (!Wu || !Tu(Wu, i)) {
                Wu = i;
                var a = bl(qu, "onSelect");
                if (a.length > 0) {
                    var s = new Cs("onSelect","select",null,t,n);
                    e.push({
                        event: s,
                        listeners: a
                    }),
                    s.target = Bu
                }
            }
        }
    }
    function Hu(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Qu = {
        animationend: Hu("Animation", "AnimationEnd"),
        animationiteration: Hu("Animation", "AnimationIteration"),
        animationstart: Hu("Animation", "AnimationStart"),
        transitionend: Hu("Transition", "TransitionEnd")
    }
      , Yu = {}
      , Gu = {};
    function Ku(e) {
        if (Yu[e])
            return Yu[e];
        if (!Qu[e])
            return e;
        var t = Qu[e];
        for (var n in t)
            if (t.hasOwnProperty(n) && n in Gu)
                return Yu[e] = t[n];
        return e
    }
    X && (Gu = document.createElement("div").style,
    "AnimationEvent"in window || (delete Qu.animationend.animation,
    delete Qu.animationiteration.animation,
    delete Qu.animationstart.animation),
    "TransitionEvent"in window || delete Qu.transitionend.transition);
    var Xu = Ku("animationend")
      , Ju = Ku("animationiteration")
      , Zu = Ku("animationstart")
      , el = Ku("transitionend")
      , tl = new Map
      , nl = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function rl(e, t) {
        tl.set(e, t),
        G(t, [e])
    }
    function ol(e, t, n, r, o, i, a) {
        var s = tl.get(t);
        if (void 0 !== s) {
            var u = Cs
              , l = t;
            switch (t) {
            case "keypress":
                if (0 === vs(r))
                    return;
            case "keydown":
            case "keyup":
                u = qs;
                break;
            case "focusin":
                l = "focus",
                u = Ps;
                break;
            case "focusout":
                l = "blur",
                u = Ps;
                break;
            case "beforeblur":
            case "afterblur":
                u = Ps;
                break;
            case "click":
                if (2 === r.button)
                    return;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                u = Is;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                u = Ms;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                u = Vs;
                break;
            case Xu:
            case Ju:
            case Zu:
                u = Ns;
                break;
            case el:
                u = $s;
                break;
            case "scroll":
                u = Rs;
                break;
            case "wheel":
                u = Hs;
                break;
            case "copy":
            case "cut":
            case "paste":
                u = Ds;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
                u = Ws
            }
            var c = !!(i & lr)
              , d = !c && "scroll" === t
              , p = function(e, t, n, r, o) {
                var i = null !== t ? t + "Capture" : null
                  , a = r ? i : t
                  , s = []
                  , u = e
                  , l = null;
                for (; null !== u; ) {
                    var c = u
                      , d = c.stateNode;
                    if (c.tag === f && null !== d && (l = d,
                    null !== a)) {
                        var p = xr(u, a);
                        null != p && s.push(vl(u, p, l))
                    }
                    if (o)
                        break;
                    u = u.return
                }
                return s
            }(n, s, r.type, c, d);
            if (p.length > 0) {
                var h = new u(s,l,null,r,o);
                e.push({
                    event: h,
                    listeners: p
                })
            }
        }
    }
    function il(e, t, n, r, o, i, a) {
        ol(e, t, n, r, o, i),
        !(i & cr) && (Eu(e, t, n, r, o),
        xu(e, t, n, r, o),
        function(e, t, n, r, o) {
            var i = n ? Qc(n) : window;
            switch (t) {
            case "focusin":
                (cu(i) || "true" === i.contentEditable) && (Bu = i,
                qu = n,
                Wu = null);
                break;
            case "focusout":
                Bu = null,
                qu = null,
                Wu = null;
                break;
            case "mousedown":
                Vu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Vu = !1,
                $u(e, r, o);
                break;
            case "selectionchange":
                if (zu)
                    break;
            case "keydown":
            case "keyup":
                $u(e, r, o)
            }
        }(e, t, n, r, o),
        function(e, t, n, r, o) {
            au(e, t, n, r, o),
            uu(e, t, n, r, o)
        }(e, t, n, r, o))
    }
    !function() {
        for (var e = 0; e < nl.length; e++) {
            var t = nl[e];
            rl(t.toLowerCase(), "on" + (t[0].toUpperCase() + t.slice(1)))
        }
        rl(Xu, "onAnimationEnd"),
        rl(Ju, "onAnimationIteration"),
        rl(Zu, "onAnimationStart"),
        rl("dblclick", "onDoubleClick"),
        rl("focusin", "onFocus"),
        rl("focusout", "onBlur"),
        rl(el, "onTransitionEnd")
    }(),
    K("onMouseEnter", ["mouseout", "mouseover"]),
    K("onMouseLeave", ["mouseout", "mouseover"]),
    K("onPointerEnter", ["pointerout", "pointerover"]),
    K("onPointerLeave", ["pointerout", "pointerover"]),
    G("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]),
    G("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]),
    G("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    G("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]),
    G("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]),
    G("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    var al = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"]
      , sl = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(al));
    function ul(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
        function(e, t, n, r, o, i, a, s, u) {
            if (Ar.apply(this, arguments),
            Mr) {
                var l = Fr();
                Nr || (Nr = !0,
                Dr = l)
            }
        }(r, t, void 0, e),
        e.currentTarget = null
    }
    function ll(e, t, n) {
        var r;
        if (n)
            for (var o = t.length - 1; o >= 0; o--) {
                var i = t[o]
                  , a = i.instance
                  , s = i.currentTarget
                  , u = i.listener;
                if (a !== r && e.isPropagationStopped())
                    return;
                ul(e, u, s),
                r = a
            }
        else
            for (var l = 0; l < t.length; l++) {
                var c = t[l]
                  , d = c.instance
                  , f = c.currentTarget
                  , p = c.listener;
                if (d !== r && e.isPropagationStopped())
                    return;
                ul(e, p, f),
                r = d
            }
    }
    function cl(e, t) {
        for (var n = !!(t & lr), r = 0; r < e.length; r++) {
            var o = e[r];
            ll(o.event, o.listeners, n)
        }
        !function() {
            if (Nr) {
                var e = Dr;
                throw Nr = !1,
                Dr = null,
                e
            }
        }()
    }
    function dl(e, t) {
        sl.has(e) || i('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
        var n = function(e) {
            var t = e[Uc];
            void 0 === t && (t = e[Uc] = new Set);
            return t
        }(t)
          , r = function(e) {
            return e + "__bubble"
        }(e);
        n.has(r) || (ml(t, e, ur, !1),
        n.add(r))
    }
    function fl(e, t, n) {
        sl.has(e) && !t && i('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
        var r = 0;
        t && (r |= lr),
        ml(n, e, r, t)
    }
    var pl = "_reactListening" + Math.random().toString(36).slice(2);
    function hl(e) {
        if (!e[pl]) {
            e[pl] = !0,
            H.forEach((function(t) {
                "selectionchange" !== t && (sl.has(t) || fl(t, !1, e),
                fl(t, !0, e))
            }
            ));
            var t = e.nodeType === _n ? e : e.ownerDocument;
            null !== t && (t[pl] || (t[pl] = !0,
            fl("selectionchange", !1, t)))
        }
    }
    function ml(e, t, n, r, o) {
        var i = function(e, t, n) {
            var r;
            switch (fs(t)) {
            case Ia:
                r = ss;
                break;
            case Ma:
                r = us;
                break;
            default:
                r = ls
            }
            return r.bind(null, t, n, e)
        }(e, t, n)
          , a = void 0;
        Er && ("touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0)),
        r ? void 0 !== a ? function(e, t, n, r) {
            e.addEventListener(t, n, {
                capture: !0,
                passive: r
            })
        }(e, t, i, a) : function(e, t, n) {
            e.addEventListener(t, n, !0)
        }(e, t, i) : void 0 !== a ? function(e, t, n, r) {
            e.addEventListener(t, n, {
                passive: r
            })
        }(e, t, i, a) : function(e, t, n) {
            e.addEventListener(t, n, !1)
        }(e, t, i)
    }
    function gl(e, t) {
        return e === t || e.nodeType === bn && e.parentNode === t
    }
    function yl(e, t, n, r, o) {
        var i = r;
        if (!(t & sr || t & ur)) {
            var a = o;
            if (null !== r) {
                var s = r;
                e: for (; ; ) {
                    if (null === s)
                        return;
                    var u = s.tag;
                    if (u === c || u === d) {
                        var l = s.stateNode.containerInfo;
                        if (gl(l, a))
                            break;
                        if (u === d)
                            for (var h = s.return; null !== h; ) {
                                var m = h.tag;
                                if (m === c || m === d)
                                    if (gl(h.stateNode.containerInfo, a))
                                        return;
                                h = h.return
                            }
                        for (; null !== l; ) {
                            var g = $c(l);
                            if (null === g)
                                return;
                            var y = g.tag;
                            if (y === f || y === p) {
                                s = i = g;
                                continue e
                            }
                            l = l.parentNode
                        }
                    }
                    s = s.return
                }
            }
        }
        kr((function() {
            return function(e, t, n, r) {
                var o = [];
                il(o, e, r, n, fr(n), t),
                cl(o, t)
            }(e, t, n, i)
        }
        ))
    }
    function vl(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function bl(e, t) {
        for (var n = t + "Capture", r = [], o = e; null !== o; ) {
            var i = o
              , a = i.stateNode;
            if (i.tag === f && null !== a) {
                var s = a
                  , u = xr(o, n);
                null != u && r.unshift(vl(o, u, s));
                var l = xr(o, t);
                null != l && r.push(vl(o, l, s))
            }
            o = o.return
        }
        return r
    }
    function _l(e) {
        if (null === e)
            return null;
        do {
            e = e.return
        } while (e && e.tag !== f);
        return e || null
    }
    function wl(e, t, n, r, o) {
        for (var i = t._reactName, a = [], s = n; null !== s && s !== r; ) {
            var u = s
              , l = u.alternate
              , c = u.stateNode
              , d = u.tag;
            if (null !== l && l === r)
                break;
            if (d === f && null !== c) {
                var p = c;
                if (o) {
                    var h = xr(s, i);
                    null != h && a.unshift(vl(s, h, p))
                } else if (!o) {
                    var m = xr(s, i);
                    null != m && a.push(vl(s, m, p))
                }
            }
            s = s.return
        }
        0 !== a.length && e.push({
            event: t,
            listeners: a
        })
    }
    var Sl, kl, xl, El, Cl, Tl, Rl, Ol = !1, Il = "dangerouslySetInnerHTML", Ml = "suppressContentEditableWarning", Pl = "suppressHydrationWarning", Nl = "autoFocus", Dl = "children", Ll = "style", Al = "__html";
    Sl = {
        dialog: !0,
        webview: !0
    },
    kl = function(e, t) {
        Jn(e, t),
        function(e, t) {
            "input" !== e && "textarea" !== e && "select" !== e || null == t || null !== t.value || Zn || (Zn = !0,
            "select" === e && t.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e))
        }(e, t),
        ar(e, t, {
            registrationNameDependencies: Q,
            possibleRegistrationNames: Y
        })
    }
    ,
    Tl = X && !document.documentMode,
    xl = function(e, t, n) {
        if (!Ol) {
            var r = jl(n)
              , o = jl(t);
            o !== r && (Ol = !0,
            i("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(r)))
        }
    }
    ,
    El = function(e) {
        if (!Ol) {
            Ol = !0;
            var t = [];
            e.forEach((function(e) {
                t.push(e)
            }
            )),
            i("Extra attributes from the server: %s", t)
        }
    }
    ,
    Cl = function(e, t) {
        !1 === t ? i("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : i("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t)
    }
    ,
    Rl = function(e, t) {
        var n = e.namespaceURI === ln ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return n.innerHTML = t,
        n.innerHTML
    }
    ;
    var Fl = /\r\n?/g
      , Ul = /\u0000|\uFFFD/g;
    function jl(e) {
        return function(e) {
            if (ee(e))
                i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Z(e)),
                te(e)
        }(e),
        ("string" == typeof e ? e : "" + e).replace(Fl, "\n").replace(Ul, "")
    }
    function zl(e, t, n, r) {
        var o = jl(t)
          , a = jl(e);
        if (a !== o && (r && (Ol || (Ol = !0,
        i('Text content did not match. Server: "%s" Client: "%s"', a, o))),
        n && L))
            throw new Error("Text content does not match server-rendered HTML.")
    }
    function Bl(e) {
        return e.nodeType === _n ? e : e.ownerDocument
    }
    function ql() {}
    function Wl(e) {
        e.onclick = ql
    }
    function Vl(e, t, n, r) {
        var o, i = $n(t, n);
        switch (kl(t, n),
        t) {
        case "dialog":
            dl("cancel", e),
            dl("close", e),
            o = n;
            break;
        case "iframe":
        case "object":
        case "embed":
            dl("load", e),
            o = n;
            break;
        case "video":
        case "audio":
            for (var a = 0; a < al.length; a++)
                dl(al[a], e);
            o = n;
            break;
        case "source":
            dl("error", e),
            o = n;
            break;
        case "img":
        case "image":
        case "link":
            dl("error", e),
            dl("load", e),
            o = n;
            break;
        case "details":
            dl("toggle", e),
            o = n;
            break;
        case "input":
            jt(e, n),
            o = Ut(e, n),
            dl("invalid", e);
            break;
        case "option":
            Yt(0, n),
            o = n;
            break;
        case "select":
            nn(e, n),
            o = tn(0, n),
            dl("invalid", e);
            break;
        case "textarea":
            an(e, n),
            o = on(e, n),
            dl("invalid", e);
            break;
        default:
            o = n
        }
        switch (Vn(t, o),
        function(e, t, n, r, o) {
            for (var i in r)
                if (r.hasOwnProperty(i)) {
                    var a = r[i];
                    if (i === Ll)
                        a && Object.freeze(a),
                        zn(t, a);
                    else if (i === Il) {
                        var s = a ? a[Al] : void 0;
                        null != s && gn(t, s)
                    } else
                        i === Dl ? "string" == typeof a ? ("textarea" !== e || "" !== a) && Sn(t, a) : "number" == typeof a && Sn(t, "" + a) : i === Ml || i === Pl || i === Nl || (Q.hasOwnProperty(i) ? null != a && ("function" != typeof a && Cl(i, a),
                        "onScroll" === i && dl("scroll", t)) : null != a && Re(t, i, a, o))
                }
        }(t, e, 0, o, i),
        t) {
        case "input":
            It(e),
            qt(e, n, !1);
            break;
        case "textarea":
            It(e),
            un(e);
            break;
        case "option":
            !function(e, t) {
                null != t.value && e.setAttribute("value", xt(Et(t.value)))
            }(e, n);
            break;
        case "select":
            !function(e, t) {
                var n = e;
                n.multiple = !!t.multiple;
                var r = t.value;
                null != r ? en(n, !!t.multiple, r, !1) : null != t.defaultValue && en(n, !!t.multiple, t.defaultValue, !0)
            }(e, n);
            break;
        default:
            "function" == typeof o.onClick && Wl(e)
        }
    }
    function $l(e, t, n, r, o) {
        kl(t, r);
        var a, s, u, l, c = null;
        switch (t) {
        case "input":
            a = Ut(e, n),
            s = Ut(e, r),
            c = [];
            break;
        case "select":
            a = tn(0, n),
            s = tn(0, r),
            c = [];
            break;
        case "textarea":
            a = on(e, n),
            s = on(e, r),
            c = [];
            break;
        default:
            s = r,
            "function" != typeof (a = n).onClick && "function" == typeof s.onClick && Wl(e)
        }
        Vn(t, s);
        var d = null;
        for (u in a)
            if (!s.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                if (u === Ll) {
                    var f = a[u];
                    for (l in f)
                        f.hasOwnProperty(l) && (d || (d = {}),
                        d[l] = "")
                } else
                    u === Il || u === Dl || u === Ml || u === Pl || u === Nl || (Q.hasOwnProperty(u) ? c || (c = []) : (c = c || []).push(u, null));
        for (u in s) {
            var p = s[u]
              , h = null != a ? a[u] : void 0;
            if (s.hasOwnProperty(u) && p !== h && (null != p || null != h))
                if (u === Ll)
                    if (p && Object.freeze(p),
                    h) {
                        for (l in h)
                            !h.hasOwnProperty(l) || p && p.hasOwnProperty(l) || (d || (d = {}),
                            d[l] = "");
                        for (l in p)
                            p.hasOwnProperty(l) && h[l] !== p[l] && (d || (d = {}),
                            d[l] = p[l])
                    } else
                        d || (c || (c = []),
                        c.push(u, d)),
                        d = p;
                else if (u === Il) {
                    var m = p ? p[Al] : void 0
                      , g = h ? h[Al] : void 0;
                    null != m && g !== m && (c = c || []).push(u, m)
                } else
                    u === Dl ? "string" != typeof p && "number" != typeof p || (c = c || []).push(u, "" + p) : u === Ml || u === Pl || (Q.hasOwnProperty(u) ? (null != p && ("function" != typeof p && Cl(u, p),
                    "onScroll" === u && dl("scroll", e)),
                    c || h === p || (c = [])) : (c = c || []).push(u, p))
        }
        return d && (!function(e, t) {
            if (t) {
                var n, r = Bn(e), o = Bn(t), a = {};
                for (var s in r) {
                    var u = r[s]
                      , l = o[s];
                    if (l && u !== l) {
                        var c = u + "," + l;
                        if (a[c])
                            continue;
                        a[c] = !0,
                        i("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", null == (n = e[u]) || "boolean" == typeof n || "" === n ? "Removing" : "Updating", u, l)
                    }
                }
            }
        }(d, s[Ll]),
        (c = c || []).push(Ll, d)),
        c
    }
    function Hl(e, t, n, r, o) {
        "input" === n && "radio" === o.type && null != o.name && zt(e, o);
        $n(n, r);
        switch (function(e, t, n, r) {
            for (var o = 0; o < t.length; o += 2) {
                var i = t[o]
                  , a = t[o + 1];
                i === Ll ? zn(e, a) : i === Il ? gn(e, a) : i === Dl ? Sn(e, a) : Re(e, i, a, r)
            }
        }(e, t, 0, $n(n, o)),
        n) {
        case "input":
            Bt(e, o);
            break;
        case "textarea":
            sn(e, o);
            break;
        case "select":
            !function(e, t) {
                var n = e
                  , r = n._wrapperState.wasMultiple;
                n._wrapperState.wasMultiple = !!t.multiple;
                var o = t.value;
                null != o ? en(n, !!t.multiple, o, !1) : r !== !!t.multiple && (null != t.defaultValue ? en(n, !!t.multiple, t.defaultValue, !0) : en(n, !!t.multiple, t.multiple ? [] : "", !1))
            }(e, o)
        }
    }
    function Ql(e, t) {
        Ol || (Ol = !0,
        i("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase()))
    }
    function Yl(e, t) {
        Ol || (Ol = !0,
        i('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase()))
    }
    function Gl(e, t, n) {
        Ol || (Ol = !0,
        i("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase()))
    }
    function Kl(e, t) {
        "" !== t && (Ol || (Ol = !0,
        i('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase())))
    }
    var Xl = function() {}
      , Jl = function() {}
      , Zl = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"]
      , ec = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"]
      , tc = ec.concat(["button"])
      , nc = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"]
      , rc = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
    };
    Jl = function(e, t) {
        var n = Je({}, e || rc)
          , r = {
            tag: t
        };
        return -1 !== ec.indexOf(t) && (n.aTagInScope = null,
        n.buttonTagInScope = null,
        n.nobrTagInScope = null),
        -1 !== tc.indexOf(t) && (n.pTagInButtonScope = null),
        -1 !== Zl.indexOf(t) && "address" !== t && "div" !== t && "p" !== t && (n.listItemTagAutoclosing = null,
        n.dlItemTagAutoclosing = null),
        n.current = r,
        "form" === t && (n.formTag = r),
        "a" === t && (n.aTagInScope = r),
        "button" === t && (n.buttonTagInScope = r),
        "nobr" === t && (n.nobrTagInScope = r),
        "p" === t && (n.pTagInButtonScope = r),
        "li" === t && (n.listItemTagAutoclosing = r),
        "dd" !== t && "dt" !== t || (n.dlItemTagAutoclosing = r),
        n
    }
    ;
    var oc = {};
    Xl = function(e, t, n) {
        var r = (n = n || rc).current
          , o = r && r.tag;
        null != t && (null != e && i("validateDOMNesting: when childText is passed, childTag should be null"),
        e = "#text");
        var a = function(e, t) {
            switch (t) {
            case "select":
                return "option" === e || "optgroup" === e || "#text" === e;
            case "optgroup":
                return "option" === e || "#text" === e;
            case "option":
                return "#text" === e;
            case "tr":
                return "th" === e || "td" === e || "style" === e || "script" === e || "template" === e;
            case "tbody":
            case "thead":
            case "tfoot":
                return "tr" === e || "style" === e || "script" === e || "template" === e;
            case "colgroup":
                return "col" === e || "template" === e;
            case "table":
                return "caption" === e || "colgroup" === e || "tbody" === e || "tfoot" === e || "thead" === e || "style" === e || "script" === e || "template" === e;
            case "head":
                return "base" === e || "basefont" === e || "bgsound" === e || "link" === e || "meta" === e || "title" === e || "noscript" === e || "noframes" === e || "style" === e || "script" === e || "template" === e;
            case "html":
                return "head" === e || "body" === e || "frameset" === e;
            case "frameset":
                return "frame" === e;
            case "#document":
                return "html" === e
            }
            switch (e) {
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
                return "h1" !== t && "h2" !== t && "h3" !== t && "h4" !== t && "h5" !== t && "h6" !== t;
            case "rp":
            case "rt":
                return -1 === nc.indexOf(t);
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "frameset":
            case "frame":
            case "head":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
                return null == t
            }
            return !0
        }(e, o) ? null : r
          , s = a ? null : function(e, t) {
            switch (e) {
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
            case "pre":
            case "listing":
            case "table":
            case "hr":
            case "xmp":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
                return t.pTagInButtonScope;
            case "form":
                return t.formTag || t.pTagInButtonScope;
            case "li":
                return t.listItemTagAutoclosing;
            case "dd":
            case "dt":
                return t.dlItemTagAutoclosing;
            case "button":
                return t.buttonTagInScope;
            case "a":
                return t.aTagInScope;
            case "nobr":
                return t.nobrTagInScope
            }
            return null
        }(e, n)
          , u = a || s;
        if (u) {
            var l = u.tag
              , c = !!a + "|" + e + "|" + l;
            if (!oc[c]) {
                oc[c] = !0;
                var d = e
                  , f = "";
                if ("#text" === e ? /\S/.test(t) ? d = "Text nodes" : (d = "Whitespace text nodes",
                f = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : d = "<" + e + ">",
                a) {
                    var p = "";
                    "table" === l && "tr" === e && (p += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),
                    i("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", d, l, f, p)
                } else
                    i("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", d, l)
            }
        }
    }
    ;
    var ic = "suppressHydrationWarning"
      , ac = "$"
      , sc = "/$"
      , uc = "$?"
      , lc = "$!"
      , cc = "style"
      , dc = null
      , fc = null;
    function pc(e) {
        var t;
        dc = is,
        t = Au(),
        fc = {
            focusedElem: t,
            selectionRange: Fu(t) ? ju(t) : null
        };
        return as(!1),
        null
    }
    function hc(e, t, n, r, o) {
        var a = r;
        if (Xl(e, null, a.ancestorInfo),
        "string" == typeof t.children || "number" == typeof t.children) {
            var s = "" + t.children
              , u = Jl(a.ancestorInfo, e);
            Xl(null, s, u)
        }
        var l = function(e, t, n, r) {
            var o, a, s = Bl(n), u = r;
            if (u === ln && (u = fn(e)),
            u === ln) {
                if ((o = $n(e, t)) || e === e.toLowerCase() || i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e),
                "script" === e) {
                    var l = s.createElement("div");
                    l.innerHTML = "<script><\/script>";
                    var c = l.firstChild;
                    a = l.removeChild(c)
                } else if ("string" == typeof t.is)
                    a = s.createElement(e, {
                        is: t.is
                    });
                else if (a = s.createElement(e),
                "select" === e) {
                    var d = a;
                    t.multiple ? d.multiple = !0 : t.size && (d.size = t.size)
                }
            } else
                a = s.createElementNS(u, e);
            return u === ln && (o || "[object HTMLUnknownElement]" !== Object.prototype.toString.call(a) || J.call(Sl, e) || (Sl[e] = !0,
            i("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e))),
            a
        }(e, t, n, a.namespace);
        return Bc(o, l),
        Gc(l, t),
        l
    }
    function mc(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    function gc(e, t, n, r) {
        Xl(null, e, n.ancestorInfo);
        var o = function(e, t) {
            return Bl(t).createTextNode(e)
        }(e, t);
        return Bc(r, o),
        o
    }
    var yc = "function" == typeof setTimeout ? setTimeout : void 0
      , vc = "function" == typeof clearTimeout ? clearTimeout : void 0
      , bc = -1
      , _c = "function" == typeof Promise ? Promise : void 0
      , wc = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== _c ? function(e) {
        return _c.resolve(null).then(e).catch(Sc)
    }
    : yc;
    function Sc(e) {
        setTimeout((function() {
            throw e
        }
        ))
    }
    function kc(e) {
        Sn(e, "")
    }
    function xc(e, t) {
        var n = t
          , r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n),
            o && o.nodeType === bn) {
                var i = o.data;
                if (i === sc) {
                    if (0 === r)
                        return e.removeChild(o),
                        void rs(t);
                    r--
                } else
                    i !== ac && i !== uc && i !== lc || r++
            }
            n = o
        } while (n);
        rs(t)
    }
    function Ec(e) {
        var t = e.style;
        "function" == typeof t.setProperty ? t.setProperty("display", "none", "important") : t.display = "none"
    }
    function Cc(e, t) {
        var n = t[cc]
          , r = null != n && n.hasOwnProperty("display") ? n.display : null;
        e.style.display = Cn("display", r)
    }
    function Tc(e, t) {
        e.nodeValue = t
    }
    function Rc(e) {
        return e.data === uc
    }
    function Oc(e) {
        return e.data === lc
    }
    function Ic(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === yn || t === vn)
                break;
            if (t === bn) {
                var n = e.data;
                if (n === ac || n === lc || n === uc)
                    break;
                if (n === sc)
                    return null
            }
        }
        return e
    }
    function Mc(e) {
        return Ic(e.nextSibling)
    }
    function Pc(e, t, n, r, o, i, a) {
        return Bc(i, e),
        Gc(e, n),
        function(e, t, n, r, o, i, a) {
            var s, u;
            switch (s = $n(t, n),
            kl(t, n),
            t) {
            case "dialog":
                dl("cancel", e),
                dl("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                dl("load", e);
                break;
            case "video":
            case "audio":
                for (var l = 0; l < al.length; l++)
                    dl(al[l], e);
                break;
            case "source":
                dl("error", e);
                break;
            case "img":
            case "image":
            case "link":
                dl("error", e),
                dl("load", e);
                break;
            case "details":
                dl("toggle", e);
                break;
            case "input":
                jt(e, n),
                dl("invalid", e);
                break;
            case "option":
                Yt(0, n);
                break;
            case "select":
                nn(e, n),
                dl("invalid", e);
                break;
            case "textarea":
                an(e, n),
                dl("invalid", e)
            }
            Vn(t, n),
            u = new Set;
            for (var c = e.attributes, d = 0; d < c.length; d++)
                switch (c[d].name.toLowerCase()) {
                case "value":
                case "checked":
                case "selected":
                    break;
                default:
                    u.add(c[d].name)
                }
            var f, p = null;
            for (var h in n)
                if (n.hasOwnProperty(h)) {
                    var m = n[h];
                    if (h === Dl)
                        "string" == typeof m ? e.textContent !== m && (!0 !== n[Pl] && zl(e.textContent, m, i, a),
                        p = [Dl, m]) : "number" == typeof m && e.textContent !== "" + m && (!0 !== n[Pl] && zl(e.textContent, m, i, a),
                        p = [Dl, "" + m]);
                    else if (Q.hasOwnProperty(h))
                        null != m && ("function" != typeof m && Cl(h, m),
                        "onScroll" === h && dl("scroll", e));
                    else if (a && "boolean" == typeof s) {
                        var g = void 0
                          , y = s && B ? null : ve(h);
                        if (!0 === n[Pl])
                            ;
                        else if (h === Ml || h === Pl || "value" === h || "checked" === h || "selected" === h)
                            ;
                        else if (h === Il) {
                            var v = e.innerHTML
                              , b = m ? m[Al] : void 0;
                            if (null != b) {
                                var _ = Rl(e, b);
                                _ !== v && xl(h, v, _)
                            }
                        } else if (h === Ll) {
                            if (u.delete(h),
                            Tl) {
                                var w = jn(m);
                                w !== (g = e.getAttribute("style")) && xl(h, g, w)
                            }
                        } else if (s && !B)
                            u.delete(h.toLowerCase()),
                            m !== (g = Te(e, h, m)) && xl(h, g, m);
                        else if (!me(h, y, s) && !ye(h, m, y, s)) {
                            var S = !1;
                            if (null !== y)
                                u.delete(y.attributeName),
                                g = Ce(e, h, m, y);
                            else {
                                var k = r;
                                if (k === ln && (k = fn(t)),
                                k === ln)
                                    u.delete(h.toLowerCase());
                                else {
                                    var x = (f = void 0,
                                    f = h.toLowerCase(),
                                    Hn.hasOwnProperty(f) && Hn[f] || null);
                                    null !== x && x !== h && (S = !0,
                                    u.delete(x)),
                                    u.delete(h)
                                }
                                g = Te(e, h, m)
                            }
                            B || m === g || S || xl(h, g, m)
                        }
                    }
                }
            switch (a && u.size > 0 && !0 !== n[Pl] && El(u),
            t) {
            case "input":
                It(e),
                qt(e, n, !0);
                break;
            case "textarea":
                It(e),
                un(e);
                break;
            case "select":
            case "option":
                break;
            default:
                "function" == typeof n.onClick && Wl(e)
            }
            return p
        }(e, t, n, o.namespace, 0, (i.mode & ai) !== ii, a)
    }
    function Nc(e) {
        for (var t = e.previousSibling, n = 0; t; ) {
            if (t.nodeType === bn) {
                var r = t.data;
                if (r === ac || r === lc || r === uc) {
                    if (0 === n)
                        return t;
                    n--
                } else
                    r === sc && n++
            }
            t = t.previousSibling
        }
        return null
    }
    var Dc = Math.random().toString(36).slice(2)
      , Lc = "__reactFiber$" + Dc
      , Ac = "__reactProps$" + Dc
      , Fc = "__reactContainer$" + Dc
      , Uc = "__reactEvents$" + Dc
      , jc = "__reactListeners$" + Dc
      , zc = "__reactHandles$" + Dc;
    function Bc(e, t) {
        t[Lc] = e
    }
    function qc(e, t) {
        t[Fc] = e
    }
    function Wc(e) {
        e[Fc] = null
    }
    function Vc(e) {
        return !!e[Fc]
    }
    function $c(e) {
        var t = e[Lc];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[Fc] || n[Lc]) {
                var r = t.alternate;
                if (null !== t.child || null !== r && null !== r.child)
                    for (var o = Nc(e); null !== o; ) {
                        var i = o[Lc];
                        if (i)
                            return i;
                        o = Nc(o)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }
    function Hc(e) {
        var t = e[Lc] || e[Fc];
        return t && (t.tag === f || t.tag === p || t.tag === _ || t.tag === c) ? t : null
    }
    function Qc(e) {
        if (e.tag === f || e.tag === p)
            return e.stateNode;
        throw new Error("getNodeFromInstance: Invalid argument.")
    }
    function Yc(e) {
        return e[Ac] || null
    }
    function Gc(e, t) {
        e[Ac] = t
    }
    var Kc = {}
      , Xc = n.ReactDebugCurrentFrame;
    function Jc(e) {
        if (e) {
            var t = e._owner
              , n = lt(e.type, e._source, t ? t.type : null);
            Xc.setExtraStackFrame(n)
        } else
            Xc.setExtraStackFrame(null)
    }
    function Zc(e, t, n, r, o) {
        var a = Function.call.bind(J);
        for (var s in e)
            if (a(e, s)) {
                var u = void 0;
                try {
                    if ("function" != typeof e[s]) {
                        var l = Error((r || "React class") + ": " + n + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                        throw l.name = "Invariant Violation",
                        l
                    }
                    u = e[s](t, s, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                } catch (c) {
                    u = c
                }
                !u || u instanceof Error || (Jc(o),
                i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, s, typeof u),
                Jc(null)),
                u instanceof Error && !(u.message in Kc) && (Kc[u.message] = !0,
                Jc(o),
                i("Failed %s type: %s", n, u.message),
                Jc(null))
            }
    }
    var ed, td = [];
    ed = [];
    var nd, rd = -1;
    function od(e) {
        return {
            current: e
        }
    }
    function id(e, t) {
        rd < 0 ? i("Unexpected pop.") : (t !== ed[rd] && i("Unexpected Fiber popped."),
        e.current = td[rd],
        td[rd] = null,
        ed[rd] = null,
        rd--)
    }
    function ad(e, t, n) {
        rd++,
        td[rd] = e.current,
        ed[rd] = n,
        e.current = t
    }
    nd = {};
    var sd = {};
    Object.freeze(sd);
    var ud = od(sd)
      , ld = od(!1)
      , cd = sd;
    function dd(e, t, n) {
        return n && md(t) ? cd : ud.current
    }
    function fd(e, t, n) {
        var r = e.stateNode;
        r.__reactInternalMemoizedUnmaskedChildContext = t,
        r.__reactInternalMemoizedMaskedChildContext = n
    }
    function pd(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return sd;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var o = {};
        for (var i in n)
            o[i] = t[i];
        return Zc(n, o, "context", mt(e) || "Unknown"),
        r && fd(e, t, o),
        o
    }
    function hd() {
        return ld.current
    }
    function md(e) {
        var t = e.childContextTypes;
        return null != t
    }
    function gd(e) {
        id(ld, e),
        id(ud, e)
    }
    function yd(e) {
        id(ld, e),
        id(ud, e)
    }
    function vd(e, t, n) {
        if (ud.current !== sd)
            throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ad(ud, t, e),
        ad(ld, n, e)
    }
    function bd(e, t, n) {
        var r = e.stateNode
          , o = t.childContextTypes;
        if ("function" != typeof r.getChildContext) {
            var a = mt(e) || "Unknown";
            return nd[a] || (nd[a] = !0,
            i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", a, a)),
            n
        }
        var s = r.getChildContext();
        for (var u in s)
            if (!(u in o))
                throw new Error((mt(e) || "Unknown") + '.getChildContext(): key "' + u + '" is not defined in childContextTypes.');
        return Zc(o, s, "child context", mt(e) || "Unknown"),
        Je({}, n, s)
    }
    function _d(e) {
        var t = e.stateNode
          , n = t && t.__reactInternalMemoizedMergedChildContext || sd;
        return cd = ud.current,
        ad(ud, n, e),
        ad(ld, ld.current, e),
        !0
    }
    function wd(e, t, n) {
        var r = e.stateNode;
        if (!r)
            throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (n) {
            var o = bd(e, t, cd);
            r.__reactInternalMemoizedMergedChildContext = o,
            id(ld, e),
            id(ud, e),
            ad(ud, o, e),
            ad(ld, n, e)
        } else
            id(ld, e),
            ad(ld, n, e)
    }
    function Sd(e) {
        if (!function(e) {
            return vo(e) === e
        }(e) || e.tag !== u)
            throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
            switch (t.tag) {
            case c:
                return t.stateNode.context;
            case u:
                if (md(t.type))
                    return t.stateNode.__reactInternalMemoizedMergedChildContext
            }
            t = t.return
        } while (null !== t);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")
    }
    var kd = 0
      , xd = 1
      , Ed = null
      , Cd = !1
      , Td = !1;
    function Rd(e) {
        null === Ed ? Ed = [e] : Ed.push(e)
    }
    function Od() {
        Cd && Id()
    }
    function Id() {
        if (!Td && null !== Ed) {
            Td = !0;
            var e = 0
              , t = La();
            try {
                var n = Ed;
                for (Aa(Ia); e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(true)
                    } while (null !== r)
                }
                Ed = null,
                Cd = !1
            } catch (o) {
                throw null !== Ed && (Ed = Ed.slice(e + 1)),
                To(No, Id),
                o
            } finally {
                Aa(t),
                Td = !1
            }
        }
        return null
    }
    var Md = []
      , Pd = 0
      , Nd = null
      , Dd = 0
      , Ld = []
      , Ad = 0
      , Fd = null
      , Ud = 1
      , jd = "";
    function zd() {
        var e = jd;
        return (Ud & ~function(e) {
            return 1 << Vd(e) - 1
        }(Ud)).toString(32) + e
    }
    function Bd(e, t) {
        Hd(),
        Md[Pd++] = Dd,
        Md[Pd++] = Nd,
        Nd = e,
        Dd = t
    }
    function qd(e, t, n) {
        Hd(),
        Ld[Ad++] = Ud,
        Ld[Ad++] = jd,
        Ld[Ad++] = Fd,
        Fd = e;
        var r = Ud
          , o = jd
          , i = Vd(r) - 1
          , a = r & ~(1 << i)
          , s = n + 1
          , u = Vd(t) + i;
        if (u > 30) {
            var l = i - i % 5
              , c = (a & (1 << l) - 1).toString(32)
              , d = a >> l
              , f = i - l
              , p = Vd(t) + f;
            Ud = 1 << p | (s << f | d),
            jd = c + o
        } else {
            Ud = 1 << u | (s << i | a),
            jd = o
        }
    }
    function Wd(e) {
        if (Hd(),
        null !== e.return) {
            Bd(e, 1),
            qd(e, 1, 0)
        }
    }
    function Vd(e) {
        return 32 - ci(e)
    }
    function $d(e) {
        for (; e === Nd; )
            Nd = Md[--Pd],
            Md[Pd] = null,
            Dd = Md[--Pd],
            Md[Pd] = null;
        for (; e === Fd; )
            Fd = Ld[--Ad],
            Ld[Ad] = null,
            jd = Ld[--Ad],
            Ld[Ad] = null,
            Ud = Ld[--Ad],
            Ld[Ad] = null
    }
    function Hd() {
        vf() || i("Expected to be hydrating. This is a bug in React. Please file an issue.")
    }
    var Qd = null
      , Yd = null
      , Gd = !1
      , Kd = !1
      , Xd = null;
    function Jd() {
        Kd = !0
    }
    function Zd(e) {
        var t = e.stateNode.containerInfo;
        return Yd = Ic(t.firstChild),
        Qd = e,
        Gd = !0,
        Xd = null,
        Kd = !1,
        !0
    }
    function ef(e, t, n) {
        var r, o;
        return Yd = Ic(t.nextSibling),
        Qd = e,
        Gd = !0,
        Xd = null,
        Kd = !1,
        null !== n && (r = e,
        o = n,
        Hd(),
        Ld[Ad++] = Ud,
        Ld[Ad++] = jd,
        Ld[Ad++] = Fd,
        Ud = o.id,
        jd = o.overflow,
        Fd = r),
        !0
    }
    function tf(e, t) {
        switch (e.tag) {
        case c:
            !function(e, t) {
                t.nodeType === yn ? Ql(e, t) : t.nodeType === bn || Yl(e, t)
            }(e.stateNode.containerInfo, t);
            break;
        case f:
            var n = (e.mode & ai) !== ii;
            !function(e, t, n, r, o) {
                (o || !0 !== t[ic]) && (r.nodeType === yn ? Ql(n, r) : r.nodeType === bn || Yl(n, r))
            }(e.type, e.memoizedProps, e.stateNode, t, n);
            break;
        case _:
            var r = e.memoizedState;
            null !== r.dehydrated && function(e, t) {
                var n = e.parentNode;
                null !== n && (t.nodeType === yn ? Ql(n, t) : t.nodeType === bn || Yl(n, t))
            }(r.dehydrated, t)
        }
    }
    function nf(e, t) {
        tf(e, t);
        var n, r = ((n = ow(f, null, null, ii)).elementType = "DELETED",
        n);
        r.stateNode = t,
        r.return = e;
        var o = e.deletions;
        null === o ? (e.deletions = [r],
        e.flags |= Wr) : o.push(r)
    }
    function rf(e, t) {
        if (!Kd)
            switch (e.tag) {
            case c:
                var n = e.stateNode.containerInfo;
                switch (t.tag) {
                case f:
                    var r = t.type;
                    t.pendingProps,
                    function(e, t) {
                        Gl(e, t)
                    }(n, r);
                    break;
                case p:
                    !function(e, t) {
                        Kl(e, t)
                    }(n, t.pendingProps)
                }
                break;
            case f:
                e.type;
                var o = e.memoizedProps
                  , i = e.stateNode;
                switch (t.tag) {
                case f:
                    var a = t.type;
                    t.pendingProps;
                    !function(e, t, n, r, o, i) {
                        (i || !0 !== t[ic]) && Gl(n, r)
                    }(0, o, i, a, 0, (e.mode & ai) !== ii);
                    break;
                case p:
                    !function(e, t, n, r, o) {
                        (o || !0 !== t[ic]) && Kl(n, r)
                    }(0, o, i, t.pendingProps, (e.mode & ai) !== ii)
                }
                break;
            case _:
                var s = e.memoizedState.dehydrated;
                if (null !== s)
                    switch (t.tag) {
                    case f:
                        var u = t.type;
                        t.pendingProps,
                        function(e, t) {
                            var n = e.parentNode;
                            null !== n && Gl(n, t)
                        }(s, u);
                        break;
                    case p:
                        !function(e, t) {
                            var n = e.parentNode;
                            null !== n && Kl(n, t)
                        }(s, t.pendingProps)
                    }
                break;
            default:
                return
            }
    }
    function of(e, t) {
        t.flags = t.flags & ~Xr | Br,
        rf(e, t)
    }
    function af(e, t) {
        switch (e.tag) {
        case f:
            var n = e.type;
            e.pendingProps;
            var r = function(e, t) {
                return e.nodeType !== yn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e
            }(t, n);
            return null !== r && (e.stateNode = r,
            Qd = e,
            Yd = Ic(r.firstChild),
            !0);
        case p:
            var o = function(e, t) {
                return "" === t || e.nodeType !== vn ? null : e
            }(t, e.pendingProps);
            return null !== o && (e.stateNode = o,
            Qd = e,
            Yd = null,
            !0);
        case _:
            var i = function(e) {
                return e.nodeType !== bn ? null : e
            }(t);
            if (null !== i) {
                var a = {
                    dehydrated: i,
                    treeContext: (Hd(),
                    null !== Fd ? {
                        id: Ud,
                        overflow: jd
                    } : null),
                    retryLane: Ki
                };
                e.memoizedState = a;
                var s = function(e) {
                    var t = ow(C, null, null, ii);
                    return t.stateNode = e,
                    t
                }(i);
                return s.return = e,
                e.child = s,
                Qd = e,
                Yd = null,
                !0
            }
            return !1;
        default:
            return !1
        }
    }
    function sf(e) {
        return (e.mode & ai) !== ii && (e.flags & Hr) === jr
    }
    function uf(e) {
        throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")
    }
    function lf(e) {
        if (Gd) {
            var t = Yd;
            if (!t)
                return sf(e) && (rf(Qd, e),
                uf()),
                of(Qd, e),
                Gd = !1,
                void (Qd = e);
            var n = t;
            if (!af(e, t)) {
                sf(e) && (rf(Qd, e),
                uf()),
                t = Mc(n);
                var r = Qd;
                if (!t || !af(e, t))
                    return of(Qd, e),
                    Gd = !1,
                    void (Qd = e);
                nf(r, n)
            }
        }
    }
    function cf(e) {
        var t = e.stateNode
          , n = e.memoizedProps
          , r = function(e, t, n) {
            return Bc(n, e),
            n.mode,
            function(e, t) {
                return e.nodeValue !== t
            }(e, t)
        }(t, n, e);
        if (r) {
            var o = Qd;
            if (null !== o)
                switch (o.tag) {
                case c:
                    o.stateNode.containerInfo;
                    !function(e, t, n, r) {
                        zl(t.nodeValue, n, r, !0)
                    }(0, t, n, (o.mode & ai) !== ii);
                    break;
                case f:
                    o.type;
                    var i = o.memoizedProps;
                    o.stateNode;
                    !function(e, t, n, r, o, i) {
                        !0 !== t[ic] && zl(r.nodeValue, o, i, !0)
                    }(0, i, 0, t, n, (o.mode & ai) !== ii)
                }
        }
        return r
    }
    function df(e) {
        var t = e.memoizedState
          , n = null !== t ? t.dehydrated : null;
        if (!n)
            throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
        !function(e, t) {
            Bc(t, e)
        }(n, e)
    }
    function ff(e) {
        var t = e.memoizedState
          , n = null !== t ? t.dehydrated : null;
        if (!n)
            throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
        return function(e) {
            for (var t = e.nextSibling, n = 0; t; ) {
                if (t.nodeType === bn) {
                    var r = t.data;
                    if (r === sc) {
                        if (0 === n)
                            return Mc(t);
                        n--
                    } else
                        r !== ac && r !== lc && r !== uc || n++
                }
                t = t.nextSibling
            }
            return null
        }(n)
    }
    function pf(e) {
        for (var t = e.return; null !== t && t.tag !== f && t.tag !== c && t.tag !== _; )
            t = t.return;
        Qd = t
    }
    function hf(e) {
        if (e !== Qd)
            return !1;
        if (!Gd)
            return pf(e),
            Gd = !0,
            !1;
        if (e.tag !== c && (e.tag !== f || "head" !== (n = e.type) && "body" !== n && !mc(e.type, e.memoizedProps))) {
            var t = Yd;
            if (t)
                if (sf(e))
                    mf(e),
                    uf();
                else
                    for (; t; )
                        nf(e, t),
                        t = Mc(t)
        }
        var n;
        return pf(e),
        Yd = e.tag === _ ? ff(e) : Qd ? Mc(e.stateNode) : null,
        !0
    }
    function mf(e) {
        for (var t = Yd; t; )
            tf(e, t),
            t = Mc(t)
    }
    function gf() {
        Qd = null,
        Yd = null,
        Gd = !1,
        Kd = !1
    }
    function yf() {
        null !== Xd && (t_(Xd),
        Xd = null)
    }
    function vf() {
        return Gd
    }
    function bf(e) {
        null === Xd ? Xd = [e] : Xd.push(e)
    }
    var _f = n.ReactCurrentBatchConfig
      , wf = null;
    var Sf = {
        recordUnsafeLifecycleWarnings: function(e, t) {},
        flushPendingUnsafeLifecycleWarnings: function() {},
        recordLegacyContextWarning: function(e, t) {},
        flushLegacyContextWarning: function() {},
        discardPendingWarnings: function() {}
    }
      , kf = function(e) {
        var t = [];
        return e.forEach((function(e) {
            t.push(e)
        }
        )),
        t.sort().join(", ")
    }
      , xf = []
      , Ef = []
      , Cf = []
      , Tf = []
      , Rf = []
      , Of = []
      , If = new Set;
    Sf.recordUnsafeLifecycleWarnings = function(e, t) {
        If.has(e.type) || ("function" == typeof t.componentWillMount && !0 !== t.componentWillMount.__suppressDeprecationWarning && xf.push(e),
        e.mode & ui && "function" == typeof t.UNSAFE_componentWillMount && Ef.push(e),
        "function" == typeof t.componentWillReceiveProps && !0 !== t.componentWillReceiveProps.__suppressDeprecationWarning && Cf.push(e),
        e.mode & ui && "function" == typeof t.UNSAFE_componentWillReceiveProps && Tf.push(e),
        "function" == typeof t.componentWillUpdate && !0 !== t.componentWillUpdate.__suppressDeprecationWarning && Rf.push(e),
        e.mode & ui && "function" == typeof t.UNSAFE_componentWillUpdate && Of.push(e))
    }
    ,
    Sf.flushPendingUnsafeLifecycleWarnings = function() {
        var e = new Set;
        xf.length > 0 && (xf.forEach((function(t) {
            e.add(mt(t) || "Component"),
            If.add(t.type)
        }
        )),
        xf = []);
        var t = new Set;
        Ef.length > 0 && (Ef.forEach((function(e) {
            t.add(mt(e) || "Component"),
            If.add(e.type)
        }
        )),
        Ef = []);
        var n = new Set;
        Cf.length > 0 && (Cf.forEach((function(e) {
            n.add(mt(e) || "Component"),
            If.add(e.type)
        }
        )),
        Cf = []);
        var r = new Set;
        Tf.length > 0 && (Tf.forEach((function(e) {
            r.add(mt(e) || "Component"),
            If.add(e.type)
        }
        )),
        Tf = []);
        var a = new Set;
        Rf.length > 0 && (Rf.forEach((function(e) {
            a.add(mt(e) || "Component"),
            If.add(e.type)
        }
        )),
        Rf = []);
        var s = new Set;
        (Of.length > 0 && (Of.forEach((function(e) {
            s.add(mt(e) || "Component"),
            If.add(e.type)
        }
        )),
        Of = []),
        t.size > 0) && i("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", kf(t));
        r.size > 0 && i("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s", kf(r));
        s.size > 0 && i("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", kf(s));
        e.size > 0 && o("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", kf(e));
        n.size > 0 && o("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", kf(n));
        a.size > 0 && o("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", kf(a))
    }
    ;
    var Mf, Pf, Nf, Df, Lf, Af = new Map, Ff = new Set;
    Sf.recordLegacyContextWarning = function(e, t) {
        var n = function(e) {
            for (var t = null, n = e; null !== n; )
                n.mode & ui && (t = n),
                n = n.return;
            return t
        }(e);
        if (null !== n) {
            if (!Ff.has(e.type)) {
                var r = Af.get(n);
                (null != e.type.contextTypes || null != e.type.childContextTypes || null !== t && "function" == typeof t.getChildContext) && (void 0 === r && (r = [],
                Af.set(n, r)),
                r.push(e))
            }
        } else
            i("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.")
    }
    ,
    Sf.flushLegacyContextWarning = function() {
        Af.forEach((function(e, t) {
            if (0 !== e.length) {
                var n = e[0]
                  , r = new Set;
                e.forEach((function(e) {
                    r.add(mt(e) || "Component"),
                    Ff.add(e.type)
                }
                ));
                var o = kf(r);
                try {
                    St(n),
                    i("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", o)
                } finally {
                    wt()
                }
            }
        }
        ))
    }
    ,
    Sf.discardPendingWarnings = function() {
        xf = [],
        Ef = [],
        Cf = [],
        Tf = [],
        Rf = [],
        Of = [],
        Af = new Map
    }
    ;
    var Uf;
    function jf(e, t, n) {
        var r, o = n.ref;
        if (null !== o && "function" != typeof o && "object" != typeof o) {
            if ((e.mode & ui || q) && (!n._owner || !n._self || n._owner.stateNode === n._self) && (!n._owner || n._owner.tag === u) && ("function" != typeof n.type || (r = n.type).prototype && r.prototype.isReactComponent) && n._owner) {
                var a = mt(e) || "Component";
                Nf[a] || (i('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, o),
                Nf[a] = !0)
            }
            if (n._owner) {
                var s, l = n._owner;
                if (l) {
                    var c = l;
                    if (c.tag !== u)
                        throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
                    s = c.stateNode
                }
                if (!s)
                    throw new Error("Missing owner for string ref " + o + ". This error is likely caused by a bug in React. Please file an issue.");
                var d = s;
                !function(e, t) {
                    if (ee(e))
                        i("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Z(e)),
                        te(e)
                }(o, "ref");
                var f = "" + o;
                if (null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === f)
                    return t.ref;
                var p = function(e) {
                    var t = d.refs;
                    null === e ? delete t[f] : t[f] = e
                };
                return p._stringRef = f,
                p
            }
            if ("string" != typeof o)
                throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
            if (!n._owner)
                throw new Error("Element ref was specified as a string (" + o + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.")
        }
        return o
    }
    function zf(e, t) {
        var n = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + ("[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.")
    }
    function Bf(e) {
        var t = mt(e) || "Component";
        Lf[t] || (Lf[t] = !0,
        i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."))
    }
    function qf(e) {
        var t = e._payload;
        return (0,
        e._init)(t)
    }
    function Wf(e) {
        function t(t, n) {
            if (e) {
                var r = t.deletions;
                null === r ? (t.deletions = [n],
                t.flags |= Wr) : r.push(n)
            }
        }
        function n(n, r) {
            if (!e)
                return null;
            for (var o = r; null !== o; )
                t(n, o),
                o = o.sibling;
            return null
        }
        function r(e, t) {
            for (var n = new Map, r = t; null !== r; )
                null !== r.key ? n.set(r.key, r) : n.set(r.index, r),
                r = r.sibling;
            return n
        }
        function o(e, t) {
            var n = aw(e, t);
            return n.index = 0,
            n.sibling = null,
            n
        }
        function a(t, n, r) {
            if (t.index = r,
            !e)
                return t.flags |= io,
                n;
            var o = t.alternate;
            if (null !== o) {
                var i = o.index;
                return i < n ? (t.flags |= Br,
                n) : i
            }
            return t.flags |= Br,
            n
        }
        function s(t) {
            return e && null === t.alternate && (t.flags |= Br),
            t
        }
        function u(e, t, n, r) {
            if (null === t || t.tag !== p) {
                var i = fw(n, e.mode, r);
                return i.return = e,
                i
            }
            var a = o(t, n);
            return a.return = e,
            a
        }
        function l(e, t, n, r) {
            var i = n.type;
            if (i === Me)
                return f(e, t, n.props.children, r, n.key);
            if (null !== t && (t.elementType === i || G_(t, n) || "object" == typeof i && null !== i && i.$$typeof === ze && qf(i) === t.type)) {
                var a = o(t, n.props);
                return a.ref = jf(e, t, n),
                a.return = e,
                a._debugSource = n._source,
                a._debugOwner = n._owner,
                a
            }
            var s = lw(n, e.mode, r);
            return s.ref = jf(e, t, n),
            s.return = e,
            s
        }
        function c(e, t, n, r) {
            if (null === t || t.tag !== d || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation) {
                var i = pw(n, e.mode, r);
                return i.return = e,
                i
            }
            var a = o(t, n.children || []);
            return a.return = e,
            a
        }
        function f(e, t, n, r, i) {
            if (null === t || t.tag !== h) {
                var a = cw(n, e.mode, r, i);
                return a.return = e,
                a
            }
            var s = o(t, n);
            return s.return = e,
            s
        }
        function m(e, t, n) {
            if ("string" == typeof t && "" !== t || "number" == typeof t) {
                var r = fw("" + t, e.mode, n);
                return r.return = e,
                r
            }
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                case Oe:
                    var o = lw(t, e.mode, n);
                    return o.ref = jf(e, null, t),
                    o.return = e,
                    o;
                case Ie:
                    var i = pw(t, e.mode, n);
                    return i.return = e,
                    i;
                case ze:
                    var a = t._payload;
                    return m(e, (0,
                    t._init)(a), n)
                }
                if (Xt(t) || Ve(t)) {
                    var s = cw(t, e.mode, n, null);
                    return s.return = e,
                    s
                }
                zf(0, t)
            }
            return "function" == typeof t && Bf(e),
            null
        }
        function g(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n && "" !== n || "number" == typeof n)
                return null !== o ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                case Oe:
                    return n.key === o ? l(e, t, n, r) : null;
                case Ie:
                    return n.key === o ? c(e, t, n, r) : null;
                case ze:
                    var i = n._payload;
                    return g(e, t, (0,
                    n._init)(i), r)
                }
                if (Xt(n) || Ve(n))
                    return null !== o ? null : f(e, t, n, r, null);
                zf(0, n)
            }
            return "function" == typeof n && Bf(e),
            null
        }
        function y(e, t, n, r, o) {
            if ("string" == typeof r && "" !== r || "number" == typeof r)
                return u(t, e.get(n) || null, "" + r, o);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                case Oe:
                    return l(t, e.get(null === r.key ? n : r.key) || null, r, o);
                case Ie:
                    return c(t, e.get(null === r.key ? n : r.key) || null, r, o);
                case ze:
                    var i = r._payload;
                    return y(e, t, n, (0,
                    r._init)(i), o)
                }
                if (Xt(r) || Ve(r))
                    return f(t, e.get(n) || null, r, o, null);
                zf(0, r)
            }
            return "function" == typeof r && Bf(t),
            null
        }
        function v(e, t, n) {
            if ("object" != typeof e || null === e)
                return t;
            switch (e.$$typeof) {
            case Oe:
            case Ie:
                Uf(e, n);
                var r = e.key;
                if ("string" != typeof r)
                    break;
                if (null === t) {
                    (t = new Set).add(r);
                    break
                }
                if (!t.has(r)) {
                    t.add(r);
                    break
                }
                i("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", r);
                break;
            case ze:
                var o = e._payload;
                v((0,
                e._init)(o), t, n)
            }
            return t
        }
        return function u(l, c, f, b) {
            if ("object" == typeof f && null !== f && f.type === Me && null === f.key && (f = f.props.children),
            "object" == typeof f && null !== f) {
                switch (f.$$typeof) {
                case Oe:
                    return s(function(e, r, i, a) {
                        for (var s = i.key, u = r; null !== u; ) {
                            if (u.key === s) {
                                var l = i.type;
                                if (l === Me) {
                                    if (u.tag === h) {
                                        n(e, u.sibling);
                                        var c = o(u, i.props.children);
                                        return c.return = e,
                                        c._debugSource = i._source,
                                        c._debugOwner = i._owner,
                                        c
                                    }
                                } else if (u.elementType === l || G_(u, i) || "object" == typeof l && null !== l && l.$$typeof === ze && qf(l) === u.type) {
                                    n(e, u.sibling);
                                    var d = o(u, i.props);
                                    return d.ref = jf(e, u, i),
                                    d.return = e,
                                    d._debugSource = i._source,
                                    d._debugOwner = i._owner,
                                    d
                                }
                                n(e, u);
                                break
                            }
                            t(e, u),
                            u = u.sibling
                        }
                        if (i.type === Me) {
                            var f = cw(i.props.children, e.mode, a, i.key);
                            return f.return = e,
                            f
                        }
                        var p = lw(i, e.mode, a);
                        return p.ref = jf(e, r, i),
                        p.return = e,
                        p
                    }(l, c, f, b));
                case Ie:
                    return s(function(e, r, i, a) {
                        for (var s = i.key, u = r; null !== u; ) {
                            if (u.key === s) {
                                if (u.tag === d && u.stateNode.containerInfo === i.containerInfo && u.stateNode.implementation === i.implementation) {
                                    n(e, u.sibling);
                                    var l = o(u, i.children || []);
                                    return l.return = e,
                                    l
                                }
                                n(e, u);
                                break
                            }
                            t(e, u),
                            u = u.sibling
                        }
                        var c = pw(i, e.mode, a);
                        return c.return = e,
                        c
                    }(l, c, f, b));
                case ze:
                    var _ = f._payload;
                    return u(l, c, (0,
                    f._init)(_), b)
                }
                if (Xt(f))
                    return function(o, i, s, u) {
                        for (var l = null, c = 0; c < s.length; c++)
                            l = v(s[c], l, o);
                        for (var d = null, f = null, p = i, h = 0, b = 0, _ = null; null !== p && b < s.length; b++) {
                            p.index > b ? (_ = p,
                            p = null) : _ = p.sibling;
                            var w = g(o, p, s[b], u);
                            if (null === w) {
                                null === p && (p = _);
                                break
                            }
                            e && p && null === w.alternate && t(o, p),
                            h = a(w, h, b),
                            null === f ? d = w : f.sibling = w,
                            f = w,
                            p = _
                        }
                        if (b === s.length)
                            return n(o, p),
                            vf() && Bd(o, b),
                            d;
                        if (null === p) {
                            for (; b < s.length; b++) {
                                var S = m(o, s[b], u);
                                null !== S && (h = a(S, h, b),
                                null === f ? d = S : f.sibling = S,
                                f = S)
                            }
                            return vf() && Bd(o, b),
                            d
                        }
                        for (var k = r(0, p); b < s.length; b++) {
                            var x = y(k, o, b, s[b], u);
                            null !== x && (e && null !== x.alternate && k.delete(null === x.key ? b : x.key),
                            h = a(x, h, b),
                            null === f ? d = x : f.sibling = x,
                            f = x)
                        }
                        return e && k.forEach((function(e) {
                            return t(o, e)
                        }
                        )),
                        vf() && Bd(o, b),
                        d
                    }(l, c, f, b);
                if (Ve(f))
                    return function(o, s, u, l) {
                        var c = Ve(u);
                        if ("function" != typeof c)
                            throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
                        "function" == typeof Symbol && "Generator" === u[Symbol.toStringTag] && (Pf || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),
                        Pf = !0),
                        u.entries === c && (Mf || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),
                        Mf = !0);
                        var d = c.call(u);
                        if (d)
                            for (var f = null, p = d.next(); !p.done; p = d.next())
                                f = v(p.value, f, o);
                        var h = c.call(u);
                        if (null == h)
                            throw new Error("An iterable object provided no iterator.");
                        for (var b = null, _ = null, w = s, S = 0, k = 0, x = null, E = h.next(); null !== w && !E.done; k++,
                        E = h.next()) {
                            w.index > k ? (x = w,
                            w = null) : x = w.sibling;
                            var C = g(o, w, E.value, l);
                            if (null === C) {
                                null === w && (w = x);
                                break
                            }
                            e && w && null === C.alternate && t(o, w),
                            S = a(C, S, k),
                            null === _ ? b = C : _.sibling = C,
                            _ = C,
                            w = x
                        }
                        if (E.done)
                            return n(o, w),
                            vf() && Bd(o, k),
                            b;
                        if (null === w) {
                            for (; !E.done; k++,
                            E = h.next()) {
                                var T = m(o, E.value, l);
                                null !== T && (S = a(T, S, k),
                                null === _ ? b = T : _.sibling = T,
                                _ = T)
                            }
                            return vf() && Bd(o, k),
                            b
                        }
                        for (var R = r(0, w); !E.done; k++,
                        E = h.next()) {
                            var O = y(R, o, k, E.value, l);
                            null !== O && (e && null !== O.alternate && R.delete(null === O.key ? k : O.key),
                            S = a(O, S, k),
                            null === _ ? b = O : _.sibling = O,
                            _ = O)
                        }
                        return e && R.forEach((function(e) {
                            return t(o, e)
                        }
                        )),
                        vf() && Bd(o, k),
                        b
                    }(l, c, f, b);
                zf(0, f)
            }
            return "string" == typeof f && "" !== f || "number" == typeof f ? s(function(e, t, r, i) {
                if (null !== t && t.tag === p) {
                    n(e, t.sibling);
                    var a = o(t, r);
                    return a.return = e,
                    a
                }
                n(e, t);
                var s = fw(r, e.mode, i);
                return s.return = e,
                s
            }(l, c, "" + f, b)) : ("function" == typeof f && Bf(l),
            n(l, c))
        }
    }
    Mf = !1,
    Pf = !1,
    Nf = {},
    Df = {},
    Lf = {},
    Uf = function(e, t) {
        if (null !== e && "object" == typeof e && e._store && !e._store.validated && null == e.key) {
            if ("object" != typeof e._store)
                throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
            e._store.validated = !0;
            var n = mt(t) || "Component";
            Df[n] || (Df[n] = !0,
            i('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))
        }
    }
    ;
    var Vf = Wf(!0)
      , $f = Wf(!1);
    function Hf(e, t) {
        for (var n = e.child; null !== n; )
            sw(n, t),
            n = n.sibling
    }
    var Qf, Yf = od(null);
    Qf = {};
    var Gf = null
      , Kf = null
      , Xf = null
      , Jf = !1;
    function Zf() {
        Gf = null,
        Kf = null,
        Xf = null,
        Jf = !1
    }
    function ep() {
        Jf = !0
    }
    function tp() {
        Jf = !1
    }
    function np(e, t, n) {
        ad(Yf, t._currentValue, e),
        t._currentValue = n,
        void 0 !== t._currentRenderer && null !== t._currentRenderer && t._currentRenderer !== Qf && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),
        t._currentRenderer = Qf
    }
    function rp(e, t) {
        var n = Yf.current;
        id(Yf, t),
        e._currentValue = n
    }
    function op(e, t, n) {
        for (var r = e; null !== r; ) {
            var o = r.alternate;
            if (ma(r.childLanes, t) ? null === o || ma(o.childLanes, t) || (o.childLanes = ga(o.childLanes, t)) : (r.childLanes = ga(r.childLanes, t),
            null !== o && (o.childLanes = ga(o.childLanes, t))),
            r === n)
                break;
            r = r.return
        }
        r !== n && i("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")
    }
    function ip(e, t, n) {
        !function(e, t, n) {
            var r = e.child;
            null !== r && (r.return = e);
            for (; null !== r; ) {
                var o = void 0
                  , i = r.dependencies;
                if (null !== i) {
                    o = r.child;
                    for (var a = i.firstContext; null !== a; ) {
                        if (a.context === t) {
                            if (r.tag === u) {
                                var s = da(n)
                                  , l = kp(Ji, s);
                                l.tag = vp;
                                var c = r.updateQueue;
                                if (null === c)
                                    ;
                                else {
                                    var d = c.shared
                                      , f = d.pending;
                                    null === f ? l.next = l : (l.next = f.next,
                                    f.next = l),
                                    d.pending = l
                                }
                            }
                            r.lanes = ga(r.lanes, n);
                            var p = r.alternate;
                            null !== p && (p.lanes = ga(p.lanes, n)),
                            op(r.return, n, e),
                            i.lanes = ga(i.lanes, n);
                            break
                        }
                        a = a.next
                    }
                } else if (r.tag === y)
                    o = r.type === e.type ? null : r.child;
                else if (r.tag === C) {
                    var h = r.return;
                    if (null === h)
                        throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
                    h.lanes = ga(h.lanes, n);
                    var m = h.alternate;
                    null !== m && (m.lanes = ga(m.lanes, n)),
                    op(h, n, e),
                    o = r.sibling
                } else
                    o = r.child;
                if (null !== o)
                    o.return = r;
                else
                    for (o = r; null !== o; ) {
                        if (o === e) {
                            o = null;
                            break
                        }
                        var g = o.sibling;
                        if (null !== g) {
                            g.return = o.return,
                            o = g;
                            break
                        }
                        o = o.return
                    }
                r = o
            }
        }(e, t, n)
    }
    function ap(e, t) {
        Gf = e,
        Kf = null,
        Xf = null;
        var n = e.dependencies;
        null !== n && (null !== n.firstContext && (ha(n.lanes, t) && Ey(),
        n.firstContext = null))
    }
    function sp(e) {
        Jf && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        var t = e._currentValue;
        if (Xf === e)
            ;
        else {
            var n = {
                context: e,
                memoizedValue: t,
                next: null
            };
            if (null === Kf) {
                if (null === Gf)
                    throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                Kf = n,
                Gf.dependencies = {
                    lanes: hi,
                    firstContext: n
                }
            } else
                Kf = Kf.next = n
        }
        return t
    }
    var up = null;
    function lp(e) {
        null === up ? up = [e] : up.push(e)
    }
    function cp(e, t, n, r) {
        var o = t.interleaved;
        return null === o ? (n.next = n,
        lp(t)) : (n.next = o.next,
        o.next = n),
        t.interleaved = n,
        pp(e, r)
    }
    function dp(e, t) {
        return pp(e, t)
    }
    var fp = pp;
    function pp(e, t) {
        e.lanes = ga(e.lanes, t);
        var n = e.alternate;
        null !== n && (n.lanes = ga(n.lanes, t)),
        null === n && (e.flags & (Br | Xr)) !== jr && D_(e);
        for (var r = e, o = e.return; null !== o; )
            o.childLanes = ga(o.childLanes, t),
            null !== (n = o.alternate) ? n.childLanes = ga(n.childLanes, t) : (o.flags & (Br | Xr)) !== jr && D_(e),
            r = o,
            o = o.return;
        return r.tag === c ? r.stateNode : null
    }
    var hp, mp, gp = 0, yp = 1, vp = 2, bp = 3, _p = !1;
    function wp(e) {
        var t = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: hi
            },
            effects: null
        };
        e.updateQueue = t
    }
    function Sp(e, t) {
        var n = t.updateQueue
          , r = e.updateQueue;
        if (n === r) {
            var o = {
                baseState: r.baseState,
                firstBaseUpdate: r.firstBaseUpdate,
                lastBaseUpdate: r.lastBaseUpdate,
                shared: r.shared,
                effects: r.effects
            };
            t.updateQueue = o
        }
    }
    function kp(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: gp,
            payload: null,
            callback: null,
            next: null
        }
    }
    function xp(e, t, n) {
        var r = e.updateQueue;
        if (null === r)
            return null;
        var o = r.shared;
        if (mp !== o || hp || (i("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),
        hp = !0),
        (ub & Zv) !== Xv) {
            var a = o.pending;
            return null === a ? t.next = t : (t.next = a.next,
            a.next = t),
            o.pending = t,
            fp(e, n)
        }
        return function(e, t, n, r) {
            var o = t.interleaved;
            return null === o ? (n.next = n,
            lp(t)) : (n.next = o.next,
            o.next = n),
            t.interleaved = n,
            pp(e, r)
        }(e, o, t, n)
    }
    function Ep(e, t, n) {
        var r = t.updateQueue;
        if (null !== r) {
            var o = r.shared;
            if (ua(n)) {
                var i = o.lanes
                  , a = ga(i = va(i, e.pendingLanes), n);
                o.lanes = a,
                Sa(e, a)
            }
        }
    }
    function Cp(e, t) {
        var n = e.updateQueue
          , r = e.alternate;
        if (null !== r) {
            var o = r.updateQueue;
            if (n === o) {
                var i = null
                  , a = null
                  , s = n.firstBaseUpdate;
                if (null !== s) {
                    var u = s;
                    do {
                        var l = {
                            eventTime: u.eventTime,
                            lane: u.lane,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null
                        };
                        null === a ? i = a = l : (a.next = l,
                        a = l),
                        u = u.next
                    } while (null !== u);
                    null === a ? i = a = t : (a.next = t,
                    a = t)
                } else
                    i = a = t;
                return n = {
                    baseState: o.baseState,
                    firstBaseUpdate: i,
                    lastBaseUpdate: a,
                    shared: o.shared,
                    effects: o.effects
                },
                void (e.updateQueue = n)
            }
        }
        var c = n.lastBaseUpdate;
        null === c ? n.firstBaseUpdate = t : c.next = t,
        n.lastBaseUpdate = t
    }
    function Tp(e, t, n, r, o, i) {
        switch (n.tag) {
        case yp:
            var a = n.payload;
            if ("function" == typeof a) {
                ep();
                var s = a.call(i, r, o);
                if (e.mode & ui) {
                    $o(!0);
                    try {
                        a.call(i, r, o)
                    } finally {
                        $o(!1)
                    }
                }
                return tp(),
                s
            }
            return a;
        case bp:
            e.flags = e.flags & ~ro | Hr;
        case gp:
            var u, l = n.payload;
            if ("function" == typeof l) {
                if (ep(),
                u = l.call(i, r, o),
                e.mode & ui) {
                    $o(!0);
                    try {
                        l.call(i, r, o)
                    } finally {
                        $o(!1)
                    }
                }
                tp()
            } else
                u = l;
            return null == u ? r : Je({}, r, u);
        case vp:
            return _p = !0,
            r
        }
        return r
    }
    function Rp(e, t, n, r) {
        var o = e.updateQueue;
        _p = !1,
        mp = o.shared;
        var i = o.firstBaseUpdate
          , a = o.lastBaseUpdate
          , s = o.shared.pending;
        if (null !== s) {
            o.shared.pending = null;
            var u = s
              , l = u.next;
            u.next = null,
            null === a ? i = l : a.next = l,
            a = u;
            var c = e.alternate;
            if (null !== c) {
                var d = c.updateQueue
                  , f = d.lastBaseUpdate;
                f !== a && (null === f ? d.firstBaseUpdate = l : f.next = l,
                d.lastBaseUpdate = u)
            }
        }
        if (null !== i) {
            for (var p = o.baseState, h = hi, m = null, g = null, y = null, v = i; ; ) {
                var b = v.lane
                  , _ = v.eventTime;
                if (ma(r, b)) {
                    if (null !== y) {
                        var w = {
                            eventTime: _,
                            lane: mi,
                            tag: v.tag,
                            payload: v.payload,
                            callback: v.callback,
                            next: null
                        };
                        y = y.next = w
                    }
                    if (p = Tp(e, 0, v, p, t, n),
                    null !== v.callback && v.lane !== mi) {
                        e.flags |= $r;
                        var S = o.effects;
                        null === S ? o.effects = [v] : S.push(v)
                    }
                } else {
                    var k = {
                        eventTime: _,
                        lane: b,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    };
                    null === y ? (g = y = k,
                    m = p) : y = y.next = k,
                    h = ga(h, b)
                }
                if (null === (v = v.next)) {
                    if (null === (s = o.shared.pending))
                        break;
                    var x = s
                      , E = x.next;
                    x.next = null,
                    v = E,
                    o.lastBaseUpdate = x,
                    o.shared.pending = null
                }
            }
            null === y && (m = p),
            o.baseState = m,
            o.firstBaseUpdate = g,
            o.lastBaseUpdate = y;
            var C = o.shared.interleaved;
            if (null !== C) {
                var T = C;
                do {
                    h = ga(h, T.lane),
                    T = T.next
                } while (T !== C)
            } else
                null === i && (o.shared.lanes = hi);
            p_(h),
            e.lanes = h,
            e.memoizedState = p
        }
        mp = null
    }
    function Op(e, t) {
        if ("function" != typeof e)
            throw new Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
        e.call(t)
    }
    function Ip() {
        _p = !1
    }
    function Mp() {
        return _p
    }
    function Pp(e, t, n) {
        var r = t.effects;
        if (t.effects = null,
        null !== r)
            for (var o = 0; o < r.length; o++) {
                var i = r[o]
                  , a = i.callback;
                null !== a && (i.callback = null,
                Op(a, n))
            }
    }
    hp = !1,
    mp = null;
    var Np = {}
      , Dp = od(Np)
      , Lp = od(Np)
      , Ap = od(Np);
    function Fp(e) {
        if (e === Np)
            throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
        return e
    }
    function Up() {
        return Fp(Ap.current)
    }
    function jp(e, t) {
        ad(Ap, t, e),
        ad(Lp, e, e),
        ad(Dp, Np, e);
        var n = function(e) {
            var t, n, r = e.nodeType;
            switch (r) {
            case _n:
            case wn:
                t = r === _n ? "#document" : "#fragment";
                var o = e.documentElement;
                n = o ? o.namespaceURI : pn(null, "");
                break;
            default:
                var i = r === bn ? e.parentNode : e;
                n = pn(i.namespaceURI || null, t = i.tagName)
            }
            var a = t.toLowerCase();
            return {
                namespace: n,
                ancestorInfo: Jl(null, a)
            }
        }(t);
        id(Dp, e),
        ad(Dp, n, e)
    }
    function zp(e) {
        id(Dp, e),
        id(Lp, e),
        id(Ap, e)
    }
    function Bp() {
        return Fp(Dp.current)
    }
    function qp(e) {
        Fp(Ap.current);
        var t, n, r, o = Fp(Dp.current), i = (t = o,
        n = e.type,
        {
            namespace: pn((r = t).namespace, n),
            ancestorInfo: Jl(r.ancestorInfo, n)
        });
        o !== i && (ad(Lp, e, e),
        ad(Dp, i, e))
    }
    function Wp(e) {
        Lp.current === e && (id(Dp, e),
        id(Lp, e))
    }
    var Vp = 1
      , $p = 1
      , Hp = 2
      , Qp = od(0);
    function Yp(e, t) {
        return !!(e & t)
    }
    function Gp(e) {
        return e & Vp
    }
    function Kp(e, t) {
        return e & Vp | t
    }
    function Xp(e, t) {
        ad(Qp, t, e)
    }
    function Jp(e) {
        id(Qp, e)
    }
    function Zp(e) {
        for (var t = e; null !== t; ) {
            if (t.tag === _) {
                var n = t.memoizedState;
                if (null !== n) {
                    var r = n.dehydrated;
                    if (null === r || Rc(r) || Oc(r))
                        return t
                }
            } else if (t.tag === T && void 0 !== t.memoizedProps.revealOrder) {
                if ((t.flags & Hr) !== jr)
                    return t
            } else if (null !== t.child) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                return null;
            for (; null === t.sibling; ) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var eh = 0
      , th = 1
      , nh = 2
      , rh = 4
      , oh = 8
      , ih = [];
    function ah() {
        for (var e = 0; e < ih.length; e++) {
            ih[e]._workInProgressVersionPrimary = null
        }
        ih.length = 0
    }
    function sh(e, t) {
        var n = (0,
        t._getVersion)(t._source);
        null == e.mutableSourceEagerHydrationData ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n)
    }
    var uh, lh, ch = n.ReactCurrentDispatcher, dh = n.ReactCurrentBatchConfig;
    uh = new Set;
    var fh = hi
      , ph = null
      , hh = null
      , mh = null
      , gh = !1
      , yh = !1
      , vh = 0
      , bh = 0
      , _h = 25
      , wh = null
      , Sh = null
      , kh = -1
      , xh = !1;
    function Eh() {
        var e = wh;
        null === Sh ? Sh = [e] : Sh.push(e)
    }
    function Ch() {
        var e = wh;
        null !== Sh && (kh++,
        Sh[kh] !== e && function(e) {
            var t = mt(ph);
            if (!uh.has(t) && (uh.add(t),
            null !== Sh)) {
                for (var n = "", r = 30, o = 0; o <= kh; o++) {
                    for (var a = Sh[o], s = o === kh ? e : a, u = o + 1 + ". " + a; u.length < r; )
                        u += " ";
                    n += u += s + "\n"
                }
                i("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", t, n)
            }
        }(e))
    }
    function Th(e) {
        null == e || Xt(e) || i("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", wh, typeof e)
    }
    function Rh() {
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.")
    }
    function Oh(e, t) {
        if (xh)
            return !1;
        if (null === t)
            return i("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", wh),
            !1;
        e.length !== t.length && i("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", wh, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Cu(e[n], t[n]))
                return !1;
        return !0
    }
    function Ih(e, t, n, r, o, a) {
        fh = a,
        ph = t,
        Sh = null !== e ? e._debugHookTypes : null,
        kh = -1,
        xh = null !== e && e.type !== t.type,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = hi,
        null !== e && null !== e.memoizedState ? ch.current = Am : ch.current = null !== Sh ? Lm : Dm;
        var s = n(r, o);
        if (yh) {
            var u = 0;
            do {
                if (yh = !1,
                vh = 0,
                u >= _h)
                    throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
                u += 1,
                xh = !1,
                hh = null,
                mh = null,
                t.updateQueue = null,
                kh = -1,
                ch.current = Fm,
                s = n(r, o)
            } while (yh)
        }
        ch.current = Nm,
        t._debugHookTypes = Sh;
        var l = null !== hh && null !== hh.next;
        if (fh = hi,
        ph = null,
        hh = null,
        mh = null,
        wh = null,
        Sh = null,
        kh = -1,
        null !== e && (e.flags & go) != (t.flags & go) && (e.mode & ai) !== ii && i("Internal React error: Expected static flag was missing. Please notify the React team."),
        gh = !1,
        l)
            throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
        return s
    }
    function Mh() {
        var e = 0 !== vh;
        return vh = 0,
        e
    }
    function Ph(e, t, n) {
        t.updateQueue = e.updateQueue,
        (t.mode & li) !== ii ? t.flags &= ~(co | lo | Kr | qr) : t.flags &= ~(Kr | qr),
        e.lanes = ya(e.lanes, n)
    }
    function Nh() {
        if (ch.current = Nm,
        gh) {
            for (var e = ph.memoizedState; null !== e; ) {
                var t = e.queue;
                null !== t && (t.pending = null),
                e = e.next
            }
            gh = !1
        }
        fh = hi,
        ph = null,
        hh = null,
        mh = null,
        Sh = null,
        kh = -1,
        wh = null,
        xm = !1,
        yh = !1,
        vh = 0
    }
    function Dh() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === mh ? ph.memoizedState = mh = e : mh = mh.next = e,
        mh
    }
    function Lh() {
        var e, t;
        if (null === hh) {
            var n = ph.alternate;
            e = null !== n ? n.memoizedState : null
        } else
            e = hh.next;
        if (null !== (t = null === mh ? ph.memoizedState : mh.next))
            t = (mh = t).next,
            hh = e;
        else {
            if (null === e)
                throw new Error("Rendered more hooks than during the previous render.");
            var r = {
                memoizedState: (hh = e).memoizedState,
                baseState: hh.baseState,
                baseQueue: hh.baseQueue,
                queue: hh.queue,
                next: null
            };
            null === mh ? ph.memoizedState = mh = r : mh = mh.next = r
        }
        return mh
    }
    function Ah(e, t) {
        return "function" == typeof t ? t(e) : t
    }
    function Fh(e, t, n) {
        var r, o = Dh();
        r = void 0 !== n ? n(t) : t,
        o.memoizedState = o.baseState = r;
        var i = {
            pending: null,
            interleaved: null,
            lanes: hi,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r
        };
        o.queue = i;
        var a = i.dispatch = Tm.bind(null, ph, i);
        return [o.memoizedState, a]
    }
    function Uh(e, t, n) {
        var r = Lh()
          , o = r.queue;
        if (null === o)
            throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
        o.lastRenderedReducer = e;
        var a = hh
          , s = a.baseQueue
          , u = o.pending;
        if (null !== u) {
            if (null !== s) {
                var l = s.next
                  , c = u.next;
                s.next = c,
                u.next = l
            }
            a.baseQueue !== s && i("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),
            a.baseQueue = s = u,
            o.pending = null
        }
        if (null !== s) {
            var d = s.next
              , f = a.baseState
              , p = null
              , h = null
              , m = null
              , g = d;
            do {
                var y = g.lane;
                if (ma(fh, y)) {
                    if (null !== m) {
                        var v = {
                            lane: mi,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        };
                        m = m.next = v
                    }
                    if (g.hasEagerState)
                        f = g.eagerState;
                    else
                        f = e(f, g.action)
                } else {
                    var b = {
                        lane: y,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    };
                    null === m ? (h = m = b,
                    p = f) : m = m.next = b,
                    ph.lanes = ga(ph.lanes, y),
                    p_(y)
                }
                g = g.next
            } while (null !== g && g !== d);
            null === m ? p = f : m.next = h,
            Cu(f, r.memoizedState) || Ey(),
            r.memoizedState = f,
            r.baseState = p,
            r.baseQueue = m,
            o.lastRenderedState = f
        }
        var _ = o.interleaved;
        if (null !== _) {
            var w = _;
            do {
                var S = w.lane;
                ph.lanes = ga(ph.lanes, S),
                p_(S),
                w = w.next
            } while (w !== _)
        } else
            null === s && (o.lanes = hi);
        var k = o.dispatch;
        return [r.memoizedState, k]
    }
    function jh(e, t, n) {
        var r = Lh()
          , o = r.queue;
        if (null === o)
            throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
        o.lastRenderedReducer = e;
        var i = o.dispatch
          , a = o.pending
          , s = r.memoizedState;
        if (null !== a) {
            o.pending = null;
            var u = a.next
              , l = u;
            do {
                s = e(s, l.action),
                l = l.next
            } while (l !== u);
            Cu(s, r.memoizedState) || Ey(),
            r.memoizedState = s,
            null === r.baseQueue && (r.baseState = s),
            o.lastRenderedState = s
        }
        return [s, i]
    }
    function zh(e, t, n) {
        var r, o = ph, a = Dh();
        if (vf()) {
            if (void 0 === n)
                throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
            r = n(),
            lh || r !== n() && (i("The result of getServerSnapshot should be cached to avoid an infinite loop"),
            lh = !0)
        } else {
            if (r = t(),
            !lh) {
                var s = t();
                Cu(r, s) || (i("The result of getSnapshot should be cached to avoid an infinite loop"),
                lh = !0)
            }
            var u = Qb();
            if (null === u)
                throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
            sa(0, fh) || qh(o, t, r)
        }
        a.memoizedState = r;
        var l = {
            value: r,
            getSnapshot: t
        };
        return a.queue = l,
        tm(Vh.bind(null, o, l, e), [e]),
        o.flags |= Kr,
        Kh(th | oh, Wh.bind(null, o, l, r, t), void 0, null),
        r
    }
    function Bh(e, t, n) {
        var r = ph
          , o = Lh()
          , a = t();
        if (!lh) {
            var s = t();
            Cu(a, s) || (i("The result of getSnapshot should be cached to avoid an infinite loop"),
            lh = !0)
        }
        var u = o.memoizedState
          , l = !Cu(u, a);
        l && (o.memoizedState = a,
        Ey());
        var c = o.queue;
        if (nm(Vh.bind(null, r, c, e), [e]),
        c.getSnapshot !== t || l || null !== mh && mh.memoizedState.tag & th) {
            r.flags |= Kr,
            Kh(th | oh, Wh.bind(null, r, c, a, t), void 0, null);
            var d = Qb();
            if (null === d)
                throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
            sa(0, fh) || qh(r, t, a)
        }
        return a
    }
    function qh(e, t, n) {
        e.flags |= Zr;
        var r = {
            getSnapshot: t,
            value: n
        }
          , o = ph.updateQueue;
        if (null === o)
            o = {
                lastEffect: null,
                stores: null
            },
            ph.updateQueue = o,
            o.stores = [r];
        else {
            var i = o.stores;
            null === i ? o.stores = [r] : i.push(r)
        }
    }
    function Wh(e, t, n, r) {
        t.value = n,
        t.getSnapshot = r,
        $h(t) && Hh(e)
    }
    function Vh(e, t, n) {
        return n((function() {
            $h(t) && Hh(e)
        }
        ))
    }
    function $h(e) {
        var t = e.getSnapshot
          , n = e.value;
        try {
            var r = t();
            return !Cu(n, r)
        } catch (o) {
            return !0
        }
    }
    function Hh(e) {
        var t = dp(e, gi);
        null !== t && Xb(t, e, gi, Ji)
    }
    function Qh(e) {
        var t = Dh();
        "function" == typeof e && (e = e()),
        t.memoizedState = t.baseState = e;
        var n = {
            pending: null,
            interleaved: null,
            lanes: hi,
            dispatch: null,
            lastRenderedReducer: Ah,
            lastRenderedState: e
        };
        t.queue = n;
        var r = n.dispatch = Rm.bind(null, ph, n);
        return [t.memoizedState, r]
    }
    function Yh(e) {
        return Uh(Ah)
    }
    function Gh(e) {
        return jh(Ah)
    }
    function Kh(e, t, n, r) {
        var o = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }
          , i = ph.updateQueue;
        if (null === i)
            i = {
                lastEffect: null,
                stores: null
            },
            ph.updateQueue = i,
            i.lastEffect = o.next = o;
        else {
            var a = i.lastEffect;
            if (null === a)
                i.lastEffect = o.next = o;
            else {
                var s = a.next;
                a.next = o,
                o.next = s,
                i.lastEffect = o
            }
        }
        return o
    }
    function Xh(e) {
        var t = {
            current: e
        };
        return Dh().memoizedState = t,
        t
    }
    function Jh(e) {
        return Lh().memoizedState
    }
    function Zh(e, t, n, r) {
        var o = Dh()
          , i = void 0 === r ? null : r;
        ph.flags |= e,
        o.memoizedState = Kh(th | t, n, void 0, i)
    }
    function em(e, t, n, r) {
        var o = Lh()
          , i = void 0 === r ? null : r
          , a = void 0;
        if (null !== hh) {
            var s = hh.memoizedState;
            if (a = s.destroy,
            null !== i)
                if (Oh(i, s.deps))
                    return void (o.memoizedState = Kh(t, n, a, i))
        }
        ph.flags |= e,
        o.memoizedState = Kh(th | t, n, a, i)
    }
    function tm(e, t) {
        return (ph.mode & li) !== ii ? Zh(co | Kr | uo, oh, e, t) : Zh(Kr | uo, oh, e, t)
    }
    function nm(e, t) {
        return em(Kr, oh, e, t)
    }
    function rm(e, t) {
        return Zh(qr, nh, e, t)
    }
    function om(e, t) {
        return em(qr, nh, e, t)
    }
    function im(e, t) {
        var n = qr;
        return n |= so,
        (ph.mode & li) !== ii && (n |= lo),
        Zh(n, rh, e, t)
    }
    function am(e, t) {
        return em(qr, rh, e, t)
    }
    function sm(e, t) {
        if ("function" == typeof t) {
            var n = t
              , r = e();
            return n(r),
            function() {
                n(null)
            }
        }
        if (null != t) {
            var o = t;
            o.hasOwnProperty("current") || i("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
            var a = e();
            return o.current = a,
            function() {
                o.current = null
            }
        }
    }
    function um(e, t, n) {
        "function" != typeof t && i("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", null !== t ? typeof t : "null");
        var r = null != n ? n.concat([e]) : null
          , o = qr;
        return o |= so,
        (ph.mode & li) !== ii && (o |= lo),
        Zh(o, rh, sm.bind(null, t, e), r)
    }
    function lm(e, t, n) {
        "function" != typeof t && i("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", null !== t ? typeof t : "null");
        var r = null != n ? n.concat([e]) : null;
        return em(qr, rh, sm.bind(null, t, e), r)
    }
    function cm(e, t) {}
    var dm = cm;
    function fm(e, t) {
        var n = void 0 === t ? null : t;
        return Dh().memoizedState = [e, n],
        e
    }
    function pm(e, t) {
        var n = Lh()
          , r = void 0 === t ? null : t
          , o = n.memoizedState;
        if (null !== o && (null !== r && Oh(r, o[1])))
            return o[0];
        return n.memoizedState = [e, r],
        e
    }
    function hm(e, t) {
        var n = Dh()
          , r = void 0 === t ? null : t
          , o = e();
        return n.memoizedState = [o, r],
        o
    }
    function mm(e, t) {
        var n = Lh()
          , r = void 0 === t ? null : t
          , o = n.memoizedState;
        if (null !== o && (null !== r && Oh(r, o[1])))
            return o[0];
        var i = e();
        return n.memoizedState = [i, r],
        i
    }
    function gm(e) {
        return Dh().memoizedState = e,
        e
    }
    function ym(e) {
        return bm(Lh(), hh.memoizedState, e)
    }
    function vm(e) {
        var t = Lh();
        return null === hh ? (t.memoizedState = e,
        e) : bm(t, hh.memoizedState, e)
    }
    function bm(e, t, n) {
        if (!((fh & (gi | vi | _i)) === hi)) {
            if (!Cu(n, t)) {
                var r = la();
                ph.lanes = ga(ph.lanes, r),
                p_(r),
                e.baseState = !0
            }
            return t
        }
        return e.baseState && (e.baseState = !1,
        Ey()),
        e.memoizedState = n,
        n
    }
    function _m(e, t, n) {
        var r, i, a = La();
        Aa((i = Ma,
        0 !== (r = a) && r < i ? r : i)),
        e(!0);
        var s = dh.transition;
        dh.transition = {};
        var u = dh.transition;
        dh.transition._updatedFibers = new Set;
        try {
            e(!1),
            t()
        } finally {
            if (Aa(a),
            dh.transition = s,
            null === s && u._updatedFibers)
                u._updatedFibers.size > 10 && o("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),
                u._updatedFibers.clear()
        }
    }
    function wm() {
        var e = Qh(!1)
          , t = e[0]
          , n = e[1]
          , r = _m.bind(null, n);
        return Dh().memoizedState = r,
        [t, r]
    }
    function Sm() {
        return [Yh()[0], Lh().memoizedState]
    }
    function km() {
        return [Gh()[0], Lh().memoizedState]
    }
    var xm = !1;
    function Em() {
        var e, t = Dh(), n = Qb().identifierPrefix;
        if (vf()) {
            e = ":" + n + "R" + zd();
            var r = vh++;
            r > 0 && (e += "H" + r.toString(32)),
            e += ":"
        } else {
            e = ":" + n + "r" + (bh++).toString(32) + ":"
        }
        return t.memoizedState = e,
        e
    }
    function Cm() {
        return Lh().memoizedState
    }
    function Tm(e, t, n) {
        "function" == typeof arguments[3] && i("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
        var r = Gb(e)
          , o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Om(e))
            Im(t, o);
        else {
            var a = cp(e, t, o, r);
            if (null !== a)
                Xb(a, e, r, Yb()),
                Mm(a, t, r)
        }
        Pm(e, r)
    }
    function Rm(e, t, n) {
        "function" == typeof arguments[3] && i("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
        var r = Gb(e)
          , o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Om(e))
            Im(t, o);
        else {
            var a = e.alternate;
            if (e.lanes === hi && (null === a || a.lanes === hi)) {
                var s = t.lastRenderedReducer;
                if (null !== s) {
                    var u;
                    u = ch.current,
                    ch.current = jm;
                    try {
                        var l = t.lastRenderedState
                          , c = s(l, n);
                        if (o.hasEagerState = !0,
                        o.eagerState = c,
                        Cu(c, l))
                            return void function(e, t, n) {
                                var r = t.interleaved;
                                null === r ? (n.next = n,
                                lp(t)) : (n.next = r.next,
                                r.next = n),
                                t.interleaved = n
                            }(0, t, o)
                    } catch (f) {} finally {
                        ch.current = u
                    }
                }
            }
            var d = cp(e, t, o, r);
            if (null !== d)
                Xb(d, e, r, Yb()),
                Mm(d, t, r)
        }
        Pm(e, r)
    }
    function Om(e) {
        var t = e.alternate;
        return e === ph || null !== t && t === ph
    }
    function Im(e, t) {
        yh = gh = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function Mm(e, t, n) {
        if (ua(n)) {
            var r = t.lanes
              , o = ga(r = va(r, e.pendingLanes), n);
            t.lanes = o,
            Sa(e, o)
        }
    }
    function Pm(e, t, n) {
        oi(e, t)
    }
    var Nm = {
        readContext: sp,
        useCallback: Rh,
        useContext: Rh,
        useEffect: Rh,
        useImperativeHandle: Rh,
        useInsertionEffect: Rh,
        useLayoutEffect: Rh,
        useMemo: Rh,
        useReducer: Rh,
        useRef: Rh,
        useState: Rh,
        useDebugValue: Rh,
        useDeferredValue: Rh,
        useTransition: Rh,
        useMutableSource: Rh,
        useSyncExternalStore: Rh,
        useId: Rh,
        unstable_isNewReconciler: A
    }
      , Dm = null
      , Lm = null
      , Am = null
      , Fm = null
      , Um = null
      , jm = null
      , zm = null
      , Bm = function() {
        i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")
    }
      , qm = function() {
        i("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")
    };
    Dm = {
        readContext: function(e) {
            return sp(e)
        },
        useCallback: function(e, t) {
            return wh = "useCallback",
            Eh(),
            Th(t),
            fm(e, t)
        },
        useContext: function(e) {
            return wh = "useContext",
            Eh(),
            sp(e)
        },
        useEffect: function(e, t) {
            return wh = "useEffect",
            Eh(),
            Th(t),
            tm(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return wh = "useImperativeHandle",
            Eh(),
            Th(n),
            um(e, t, n)
        },
        useInsertionEffect: function(e, t) {
            return wh = "useInsertionEffect",
            Eh(),
            Th(t),
            rm(e, t)
        },
        useLayoutEffect: function(e, t) {
            return wh = "useLayoutEffect",
            Eh(),
            Th(t),
            im(e, t)
        },
        useMemo: function(e, t) {
            wh = "useMemo",
            Eh(),
            Th(t);
            var n = ch.current;
            ch.current = Um;
            try {
                return hm(e, t)
            } finally {
                ch.current = n
            }
        },
        useReducer: function(e, t, n) {
            wh = "useReducer",
            Eh();
            var r = ch.current;
            ch.current = Um;
            try {
                return Fh(e, t, n)
            } finally {
                ch.current = r
            }
        },
        useRef: function(e) {
            return wh = "useRef",
            Eh(),
            Xh(e)
        },
        useState: function(e) {
            wh = "useState",
            Eh();
            var t = ch.current;
            ch.current = Um;
            try {
                return Qh(e)
            } finally {
                ch.current = t
            }
        },
        useDebugValue: function(e, t) {
            wh = "useDebugValue",
            Eh()
        },
        useDeferredValue: function(e) {
            return wh = "useDeferredValue",
            Eh(),
            gm(e)
        },
        useTransition: function() {
            return wh = "useTransition",
            Eh(),
            wm()
        },
        useMutableSource: function(e, t, n) {
            wh = "useMutableSource",
            Eh()
        },
        useSyncExternalStore: function(e, t, n) {
            return wh = "useSyncExternalStore",
            Eh(),
            zh(e, t, n)
        },
        useId: function() {
            return wh = "useId",
            Eh(),
            Em()
        },
        unstable_isNewReconciler: A
    },
    Lm = {
        readContext: function(e) {
            return sp(e)
        },
        useCallback: function(e, t) {
            return wh = "useCallback",
            Ch(),
            fm(e, t)
        },
        useContext: function(e) {
            return wh = "useContext",
            Ch(),
            sp(e)
        },
        useEffect: function(e, t) {
            return wh = "useEffect",
            Ch(),
            tm(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return wh = "useImperativeHandle",
            Ch(),
            um(e, t, n)
        },
        useInsertionEffect: function(e, t) {
            return wh = "useInsertionEffect",
            Ch(),
            rm(e, t)
        },
        useLayoutEffect: function(e, t) {
            return wh = "useLayoutEffect",
            Ch(),
            im(e, t)
        },
        useMemo: function(e, t) {
            wh = "useMemo",
            Ch();
            var n = ch.current;
            ch.current = Um;
            try {
                return hm(e, t)
            } finally {
                ch.current = n
            }
        },
        useReducer: function(e, t, n) {
            wh = "useReducer",
            Ch();
            var r = ch.current;
            ch.current = Um;
            try {
                return Fh(e, t, n)
            } finally {
                ch.current = r
            }
        },
        useRef: function(e) {
            return wh = "useRef",
            Ch(),
            Xh(e)
        },
        useState: function(e) {
            wh = "useState",
            Ch();
            var t = ch.current;
            ch.current = Um;
            try {
                return Qh(e)
            } finally {
                ch.current = t
            }
        },
        useDebugValue: function(e, t) {
            wh = "useDebugValue",
            Ch()
        },
        useDeferredValue: function(e) {
            return wh = "useDeferredValue",
            Ch(),
            gm(e)
        },
        useTransition: function() {
            return wh = "useTransition",
            Ch(),
            wm()
        },
        useMutableSource: function(e, t, n) {
            wh = "useMutableSource",
            Ch()
        },
        useSyncExternalStore: function(e, t, n) {
            return wh = "useSyncExternalStore",
            Ch(),
            zh(e, t, n)
        },
        useId: function() {
            return wh = "useId",
            Ch(),
            Em()
        },
        unstable_isNewReconciler: A
    },
    Am = {
        readContext: function(e) {
            return sp(e)
        },
        useCallback: function(e, t) {
            return wh = "useCallback",
            Ch(),
            pm(e, t)
        },
        useContext: function(e) {
            return wh = "useContext",
            Ch(),
            sp(e)
        },
        useEffect: function(e, t) {
            return wh = "useEffect",
            Ch(),
            nm(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return wh = "useImperativeHandle",
            Ch(),
            lm(e, t, n)
        },
        useInsertionEffect: function(e, t) {
            return wh = "useInsertionEffect",
            Ch(),
            om(e, t)
        },
        useLayoutEffect: function(e, t) {
            return wh = "useLayoutEffect",
            Ch(),
            am(e, t)
        },
        useMemo: function(e, t) {
            wh = "useMemo",
            Ch();
            var n = ch.current;
            ch.current = jm;
            try {
                return mm(e, t)
            } finally {
                ch.current = n
            }
        },
        useReducer: function(e, t, n) {
            wh = "useReducer",
            Ch();
            var r = ch.current;
            ch.current = jm;
            try {
                return Uh(e)
            } finally {
                ch.current = r
            }
        },
        useRef: function(e) {
            return wh = "useRef",
            Ch(),
            Jh()
        },
        useState: function(e) {
            wh = "useState",
            Ch();
            var t = ch.current;
            ch.current = jm;
            try {
                return Yh()
            } finally {
                ch.current = t
            }
        },
        useDebugValue: function(e, t) {
            return wh = "useDebugValue",
            Ch(),
            dm()
        },
        useDeferredValue: function(e) {
            return wh = "useDeferredValue",
            Ch(),
            ym(e)
        },
        useTransition: function() {
            return wh = "useTransition",
            Ch(),
            Sm()
        },
        useMutableSource: function(e, t, n) {
            wh = "useMutableSource",
            Ch()
        },
        useSyncExternalStore: function(e, t, n) {
            return wh = "useSyncExternalStore",
            Ch(),
            Bh(e, t)
        },
        useId: function() {
            return wh = "useId",
            Ch(),
            Cm()
        },
        unstable_isNewReconciler: A
    },
    Fm = {
        readContext: function(e) {
            return sp(e)
        },
        useCallback: function(e, t) {
            return wh = "useCallback",
            Ch(),
            pm(e, t)
        },
        useContext: function(e) {
            return wh = "useContext",
            Ch(),
            sp(e)
        },
        useEffect: function(e, t) {
            return wh = "useEffect",
            Ch(),
            nm(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return wh = "useImperativeHandle",
            Ch(),
            lm(e, t, n)
        },
        useInsertionEffect: function(e, t) {
            return wh = "useInsertionEffect",
            Ch(),
            om(e, t)
        },
        useLayoutEffect: function(e, t) {
            return wh = "useLayoutEffect",
            Ch(),
            am(e, t)
        },
        useMemo: function(e, t) {
            wh = "useMemo",
            Ch();
            var n = ch.current;
            ch.current = zm;
            try {
                return mm(e, t)
            } finally {
                ch.current = n
            }
        },
        useReducer: function(e, t, n) {
            wh = "useReducer",
            Ch();
            var r = ch.current;
            ch.current = zm;
            try {
                return jh(e)
            } finally {
                ch.current = r
            }
        },
        useRef: function(e) {
            return wh = "useRef",
            Ch(),
            Jh()
        },
        useState: function(e) {
            wh = "useState",
            Ch();
            var t = ch.current;
            ch.current = zm;
            try {
                return Gh()
            } finally {
                ch.current = t
            }
        },
        useDebugValue: function(e, t) {
            return wh = "useDebugValue",
            Ch(),
            dm()
        },
        useDeferredValue: function(e) {
            return wh = "useDeferredValue",
            Ch(),
            vm(e)
        },
        useTransition: function() {
            return wh = "useTransition",
            Ch(),
            km()
        },
        useMutableSource: function(e, t, n) {
            wh = "useMutableSource",
            Ch()
        },
        useSyncExternalStore: function(e, t, n) {
            return wh = "useSyncExternalStore",
            Ch(),
            Bh(e, t)
        },
        useId: function() {
            return wh = "useId",
            Ch(),
            Cm()
        },
        unstable_isNewReconciler: A
    },
    Um = {
        readContext: function(e) {
            return Bm(),
            sp(e)
        },
        useCallback: function(e, t) {
            return wh = "useCallback",
            qm(),
            Eh(),
            fm(e, t)
        },
        useContext: function(e) {
            return wh = "useContext",
            qm(),
            Eh(),
            sp(e)
        },
        useEffect: function(e, t) {
            return wh = "useEffect",
            qm(),
            Eh(),
            tm(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return wh = "useImperativeHandle",
            qm(),
            Eh(),
            um(e, t, n)
        },
        useInsertionEffect: function(e, t) {
            return wh = "useInsertionEffect",
            qm(),
            Eh(),
            rm(e, t)
        },
        useLayoutEffect: function(e, t) {
            return wh = "useLayoutEffect",
            qm(),
            Eh(),
            im(e, t)
        },
        useMemo: function(e, t) {
            wh = "useMemo",
            qm(),
            Eh();
            var n = ch.current;
            ch.current = Um;
            try {
                return hm(e, t)
            } finally {
                ch.current = n
            }
        },
        useReducer: function(e, t, n) {
            wh = "useReducer",
            qm(),
            Eh();
            var r = ch.current;
            ch.current = Um;
            try {
                return Fh(e, t, n)
            } finally {
                ch.current = r
            }
        },
        useRef: function(e) {
            return wh = "useRef",
            qm(),
            Eh(),
            Xh(e)
        },
        useState: function(e) {
            wh = "useState",
            qm(),
            Eh();
            var t = ch.current;
            ch.current = Um;
            try {
                return Qh(e)
            } finally {
                ch.current = t
            }
        },
        useDebugValue: function(e, t) {
            wh = "useDebugValue",
            qm(),
            Eh()
        },
        useDeferredValue: function(e) {
            return wh = "useDeferredValue",
            qm(),
            Eh(),
            gm(e)
        },
        useTransition: function() {
            return wh = "useTransition",
            qm(),
            Eh(),
            wm()
        },
        useMutableSource: function(e, t, n) {
            wh = "useMutableSource",
            qm(),
            Eh()
        },
        useSyncExternalStore: function(e, t, n) {
            return wh = "useSyncExternalStore",
            qm(),
            Eh(),
            zh(e, t, n)
        },
        useId: function() {
            return wh = "useId",
            qm(),
            Eh(),
            Em()
        },
        unstable_isNewReconciler: A
    },
    jm = {
        readContext: function(e) {
            return Bm(),
            sp(e)
        },
        useCallback: function(e, t) {
            return wh = "useCallback",
            qm(),
            Ch(),
            pm(e, t)
        },
        useContext: function(e) {
            return wh = "useContext",
            qm(),
            Ch(),
            sp(e)
        },
        useEffect: function(e, t) {
            return wh = "useEffect",
            qm(),
            Ch(),
            nm(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return wh = "useImperativeHandle",
            qm(),
            Ch(),
            lm(e, t, n)
        },
        useInsertionEffect: function(e, t) {
            return wh = "useInsertionEffect",
            qm(),
            Ch(),
            om(e, t)
        },
        useLayoutEffect: function(e, t) {
            return wh = "useLayoutEffect",
            qm(),
            Ch(),
            am(e, t)
        },
        useMemo: function(e, t) {
            wh = "useMemo",
            qm(),
            Ch();
            var n = ch.current;
            ch.current = jm;
            try {
                return mm(e, t)
            } finally {
                ch.current = n
            }
        },
        useReducer: function(e, t, n) {
            wh = "useReducer",
            qm(),
            Ch();
            var r = ch.current;
            ch.current = jm;
            try {
                return Uh(e)
            } finally {
                ch.current = r
            }
        },
        useRef: function(e) {
            return wh = "useRef",
            qm(),
            Ch(),
            Jh()
        },
        useState: function(e) {
            wh = "useState",
            qm(),
            Ch();
            var t = ch.current;
            ch.current = jm;
            try {
                return Yh()
            } finally {
                ch.current = t
            }
        },
        useDebugValue: function(e, t) {
            return wh = "useDebugValue",
            qm(),
            Ch(),
            dm()
        },
        useDeferredValue: function(e) {
            return wh = "useDeferredValue",
            qm(),
            Ch(),
            ym(e)
        },
        useTransition: function() {
            return wh = "useTransition",
            qm(),
            Ch(),
            Sm()
        },
        useMutableSource: function(e, t, n) {
            wh = "useMutableSource",
            qm(),
            Ch()
        },
        useSyncExternalStore: function(e, t, n) {
            return wh = "useSyncExternalStore",
            qm(),
            Ch(),
            Bh(e, t)
        },
        useId: function() {
            return wh = "useId",
            qm(),
            Ch(),
            Cm()
        },
        unstable_isNewReconciler: A
    },
    zm = {
        readContext: function(e) {
            return Bm(),
            sp(e)
        },
        useCallback: function(e, t) {
            return wh = "useCallback",
            qm(),
            Ch(),
            pm(e, t)
        },
        useContext: function(e) {
            return wh = "useContext",
            qm(),
            Ch(),
            sp(e)
        },
        useEffect: function(e, t) {
            return wh = "useEffect",
            qm(),
            Ch(),
            nm(e, t)
        },
        useImperativeHandle: function(e, t, n) {
            return wh = "useImperativeHandle",
            qm(),
            Ch(),
            lm(e, t, n)
        },
        useInsertionEffect: function(e, t) {
            return wh = "useInsertionEffect",
            qm(),
            Ch(),
            om(e, t)
        },
        useLayoutEffect: function(e, t) {
            return wh = "useLayoutEffect",
            qm(),
            Ch(),
            am(e, t)
        },
        useMemo: function(e, t) {
            wh = "useMemo",
            qm(),
            Ch();
            var n = ch.current;
            ch.current = jm;
            try {
                return mm(e, t)
            } finally {
                ch.current = n
            }
        },
        useReducer: function(e, t, n) {
            wh = "useReducer",
            qm(),
            Ch();
            var r = ch.current;
            ch.current = jm;
            try {
                return jh(e)
            } finally {
                ch.current = r
            }
        },
        useRef: function(e) {
            return wh = "useRef",
            qm(),
            Ch(),
            Jh()
        },
        useState: function(e) {
            wh = "useState",
            qm(),
            Ch();
            var t = ch.current;
            ch.current = jm;
            try {
                return Gh()
            } finally {
                ch.current = t
            }
        },
        useDebugValue: function(e, t) {
            return wh = "useDebugValue",
            qm(),
            Ch(),
            dm()
        },
        useDeferredValue: function(e) {
            return wh = "useDeferredValue",
            qm(),
            Ch(),
            vm(e)
        },
        useTransition: function() {
            return wh = "useTransition",
            qm(),
            Ch(),
            km()
        },
        useMutableSource: function(e, t, n) {
            wh = "useMutableSource",
            qm(),
            Ch()
        },
        useSyncExternalStore: function(e, t, n) {
            return wh = "useSyncExternalStore",
            qm(),
            Ch(),
            Bh(e, t)
        },
        useId: function() {
            return wh = "useId",
            qm(),
            Ch(),
            Cm()
        },
        unstable_isNewReconciler: A
    };
    var Wm = t.unstable_now
      , Vm = 0
      , $m = -1
      , Hm = -1
      , Qm = -1
      , Ym = !1
      , Gm = !1;
    function Km() {
        return Ym
    }
    function Xm() {
        return Vm
    }
    function Jm() {
        Vm = Wm()
    }
    function Zm(e) {
        Hm = Wm(),
        e.actualStartTime < 0 && (e.actualStartTime = Wm())
    }
    function eg(e) {
        Hm = -1
    }
    function tg(e, t) {
        if (Hm >= 0) {
            var n = Wm() - Hm;
            e.actualDuration += n,
            t && (e.selfBaseDuration = n),
            Hm = -1
        }
    }
    function ng(e) {
        if ($m >= 0) {
            var t = Wm() - $m;
            $m = -1;
            for (var n = e.return; null !== n; ) {
                switch (n.tag) {
                case c:
                    return void (n.stateNode.effectDuration += t);
                case b:
                    return void (n.stateNode.effectDuration += t)
                }
                n = n.return
            }
        }
    }
    function rg(e) {
        if (Qm >= 0) {
            var t = Wm() - Qm;
            Qm = -1;
            for (var n = e.return; null !== n; ) {
                switch (n.tag) {
                case c:
                    var r = n.stateNode;
                    return void (null !== r && (r.passiveEffectDuration += t));
                case b:
                    var o = n.stateNode;
                    return void (null !== o && (o.passiveEffectDuration += t))
                }
                n = n.return
            }
        }
    }
    function og() {
        $m = Wm()
    }
    function ig() {
        Qm = Wm()
    }
    function ag(e) {
        for (var t = e.child; t; )
            e.actualDuration += t.actualDuration,
            t = t.sibling
    }
    function sg(e, t) {
        if (e && e.defaultProps) {
            var n = Je({}, t)
              , r = e.defaultProps;
            for (var o in r)
                void 0 === n[o] && (n[o] = r[o]);
            return n
        }
        return t
    }
    var ug, lg, cg, dg, fg, pg, hg, mg, gg, yg, vg, bg = {};
    ug = new Set,
    lg = new Set,
    cg = new Set,
    dg = new Set,
    mg = new Set,
    fg = new Set,
    gg = new Set,
    yg = new Set,
    vg = new Set;
    var _g = new Set;
    function wg(e, t, n, r) {
        var o = e.memoizedState
          , i = n(r, o);
        if (e.mode & ui) {
            $o(!0);
            try {
                i = n(r, o)
            } finally {
                $o(!1)
            }
        }
        pg(t, i);
        var a = null == i ? o : Je({}, o, i);
        (e.memoizedState = a,
        e.lanes === hi) && (e.updateQueue.baseState = a)
    }
    hg = function(e, t) {
        if (null !== e && "function" != typeof e) {
            var n = t + "_" + e;
            _g.has(n) || (_g.add(n),
            i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e))
        }
    }
    ,
    pg = function(e, t) {
        if (void 0 === t) {
            var n = pt(e) || "Component";
            fg.has(n) || (fg.add(n),
            i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n))
        }
    }
    ,
    Object.defineProperty(bg, "_processChildContext", {
        enumerable: !1,
        value: function() {
            throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")
        }
    }),
    Object.freeze(bg);
    var Sg = {
        isMounted: function(e) {
            var t = yo.current;
            if (null !== t && t.tag === u) {
                var n = t
                  , r = n.stateNode;
                r._warnedAboutRefsInRender || i("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", mt(n) || "A component"),
                r._warnedAboutRefsInRender = !0
            }
            var o = Ur(e);
            return !!o && vo(o) === o
        },
        enqueueSetState: function(e, t, n) {
            var r = Ur(e)
              , o = Yb()
              , i = Gb(r)
              , a = kp(o, i);
            a.payload = t,
            null != n && (hg(n, "setState"),
            a.callback = n);
            var s = xp(r, a, i);
            null !== s && (Xb(s, r, i, o),
            Ep(s, r, i)),
            oi(r, i)
        },
        enqueueReplaceState: function(e, t, n) {
            var r = Ur(e)
              , o = Yb()
              , i = Gb(r)
              , a = kp(o, i);
            a.tag = yp,
            a.payload = t,
            null != n && (hg(n, "replaceState"),
            a.callback = n);
            var s = xp(r, a, i);
            null !== s && (Xb(s, r, i, o),
            Ep(s, r, i)),
            oi(r, i)
        },
        enqueueForceUpdate: function(e, t) {
            var n = Ur(e)
              , r = Yb()
              , o = Gb(n)
              , i = kp(r, o);
            i.tag = vp,
            null != t && (hg(t, "forceUpdate"),
            i.callback = t);
            var a = xp(n, i, o);
            null !== a && (Xb(a, n, o, r),
            Ep(a, n, o)),
            function(e, t) {
                null !== qo && "function" == typeof qo.markForceUpdateScheduled && qo.markForceUpdateScheduled(e, t)
            }(n, o)
        }
    };
    function kg(e, t, n, r, o, a, s) {
        var u = e.stateNode;
        if ("function" == typeof u.shouldComponentUpdate) {
            var l = u.shouldComponentUpdate(r, a, s);
            if (e.mode & ui) {
                $o(!0);
                try {
                    l = u.shouldComponentUpdate(r, a, s)
                } finally {
                    $o(!1)
                }
            }
            return void 0 === l && i("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", pt(t) || "Component"),
            l
        }
        return !t.prototype || !t.prototype.isPureReactComponent || (!Tu(n, r) || !Tu(o, a))
    }
    function xg(e, t) {
        var n;
        t.updater = Sg,
        e.stateNode = t,
        n = e,
        t._reactInternals = n,
        t._reactInternalInstance = bg
    }
    function Eg(e, t, n) {
        var r = !1
          , o = sd
          , a = sd
          , s = t.contextType;
        if ("contextType"in t && (!(null === s || void 0 !== s && s.$$typeof === Le && void 0 === s._context) && !yg.has(t))) {
            yg.add(t);
            var u = "";
            u = void 0 === s ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" != typeof s ? " However, it is set to a " + typeof s + "." : s.$$typeof === De ? " Did you accidentally pass the Context.Provider instead?" : void 0 !== s._context ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.",
            i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", pt(t) || "Component", u)
        }
        if ("object" == typeof s && null !== s)
            a = sp(s);
        else {
            o = dd(0, t, !0);
            var l = t.contextTypes;
            a = (r = null != l) ? pd(e, o) : sd
        }
        var c = new t(n,a);
        if (e.mode & ui) {
            $o(!0);
            try {
                c = new t(n,a)
            } finally {
                $o(!1)
            }
        }
        var d = e.memoizedState = null !== c.state && void 0 !== c.state ? c.state : null;
        if (xg(e, c),
        "function" == typeof t.getDerivedStateFromProps && null === d) {
            var f = pt(t) || "Component";
            lg.has(f) || (lg.add(f),
            i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", f, null === c.state ? "null" : "undefined", f))
        }
        if ("function" == typeof t.getDerivedStateFromProps || "function" == typeof c.getSnapshotBeforeUpdate) {
            var p = null
              , h = null
              , m = null;
            if ("function" == typeof c.componentWillMount && !0 !== c.componentWillMount.__suppressDeprecationWarning ? p = "componentWillMount" : "function" == typeof c.UNSAFE_componentWillMount && (p = "UNSAFE_componentWillMount"),
            "function" == typeof c.componentWillReceiveProps && !0 !== c.componentWillReceiveProps.__suppressDeprecationWarning ? h = "componentWillReceiveProps" : "function" == typeof c.UNSAFE_componentWillReceiveProps && (h = "UNSAFE_componentWillReceiveProps"),
            "function" == typeof c.componentWillUpdate && !0 !== c.componentWillUpdate.__suppressDeprecationWarning ? m = "componentWillUpdate" : "function" == typeof c.UNSAFE_componentWillUpdate && (m = "UNSAFE_componentWillUpdate"),
            null !== p || null !== h || null !== m) {
                var g = pt(t) || "Component"
                  , y = "function" == typeof t.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                dg.has(g) || (dg.add(g),
                i("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", g, y, null !== p ? "\n  " + p : "", null !== h ? "\n  " + h : "", null !== m ? "\n  " + m : ""))
            }
        }
        return r && fd(e, o, a),
        c
    }
    function Cg(e, t, n, r) {
        var o = t.state;
        if ("function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== o) {
            var a = mt(e) || "Component";
            ug.has(a) || (ug.add(a),
            i("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", a)),
            Sg.enqueueReplaceState(t, t.state, null)
        }
    }
    function Tg(e, t, n, r) {
        !function(e, t, n) {
            var r = e.stateNode
              , o = pt(t) || "Component";
            r.render || (t.prototype && "function" == typeof t.prototype.render ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)),
            !r.getInitialState || r.getInitialState.isReactClassApproved || r.state || i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o),
            r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o),
            r.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o),
            r.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o),
            t.childContextTypes && !vg.has(t) && (e.mode & ui) === ii && (vg.add(t),
            i("%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead\n\n.Learn more about this warning here: https://reactjs.org/link/legacy-context", o)),
            t.contextTypes && !vg.has(t) && (e.mode & ui) === ii && (vg.add(t),
            i("%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", o)),
            r.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o),
            t.contextType && t.contextTypes && !gg.has(t) && (gg.add(t),
            i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)),
            "function" == typeof r.componentShouldUpdate && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o),
            t.prototype && t.prototype.isPureReactComponent && void 0 !== r.shouldComponentUpdate && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", pt(t) || "A pure component"),
            "function" == typeof r.componentDidUnmount && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o),
            "function" == typeof r.componentDidReceiveProps && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o),
            "function" == typeof r.componentWillRecieveProps && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o),
            "function" == typeof r.UNSAFE_componentWillRecieveProps && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
            var a = r.props !== n;
            void 0 !== r.props && a && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o),
            r.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o),
            "function" != typeof r.getSnapshotBeforeUpdate || "function" == typeof r.componentDidUpdate || cg.has(t) || (cg.add(t),
            i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", pt(t))),
            "function" == typeof r.getDerivedStateFromProps && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o),
            "function" == typeof r.getDerivedStateFromError && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o),
            "function" == typeof t.getSnapshotBeforeUpdate && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
            var s = r.state;
            s && ("object" != typeof s || Xt(s)) && i("%s.state: must be set to an object or null", o),
            "function" == typeof r.getChildContext && "object" != typeof t.childContextTypes && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o)
        }(e, t, n);
        var o = e.stateNode;
        o.props = n,
        o.state = e.memoizedState,
        o.refs = {},
        wp(e);
        var a = t.contextType;
        if ("object" == typeof a && null !== a)
            o.context = sp(a);
        else {
            var s = dd(0, t, !0);
            o.context = pd(e, s)
        }
        if (o.state === n) {
            var u = pt(t) || "Component";
            mg.has(u) || (mg.add(u),
            i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", u))
        }
        e.mode & ui && Sf.recordLegacyContextWarning(e, o),
        Sf.recordUnsafeLifecycleWarnings(e, o),
        o.state = e.memoizedState;
        var l = t.getDerivedStateFromProps;
        if ("function" == typeof l && (wg(e, t, l, n),
        o.state = e.memoizedState),
        "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (!function(e, t) {
            var n = t.state;
            "function" == typeof t.componentWillMount && t.componentWillMount(),
            "function" == typeof t.UNSAFE_componentWillMount && t.UNSAFE_componentWillMount(),
            n !== t.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mt(e) || "Component"),
            Sg.enqueueReplaceState(t, t.state, null))
        }(e, o),
        Rp(e, n, o, r),
        o.state = e.memoizedState),
        "function" == typeof o.componentDidMount) {
            var c = qr;
            c |= so,
            (e.mode & li) !== ii && (c |= lo),
            e.flags |= c
        }
    }
    function Rg(e, t) {
        return {
            value: e,
            source: t,
            stack: dt(t),
            digest: null
        }
    }
    function Og(e, t, n) {
        return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null
        }
    }
    function Ig(e, t) {
        try {
            0;
            var n = t.value
              , r = t.source
              , o = t.stack
              , i = null !== o ? o : "";
            if (null != n && n._suppressLogging) {
                if (e.tag === u)
                    return;
                console.error(n)
            }
            var a = r ? mt(r) : null
              , s = (a ? "The above error occurred in the <" + a + "> component:" : "The above error occurred in one of your React components:") + "\n" + i + "\n\n" + (e.tag === c ? "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries." : "React will try to recreate this component tree from scratch using the error boundary you provided, " + (mt(e) || "Anonymous") + ".");
            console.error(s)
        } catch (hS) {
            setTimeout((function() {
                throw hS
            }
            ))
        }
    }
    var Mg = "function" == typeof WeakMap ? WeakMap : Map;
    function Pg(e, t, n) {
        var r = kp(Ji, n);
        r.tag = bp,
        r.payload = {
            element: null
        };
        var o = t.value;
        return r.callback = function() {
            k_(o),
            Ig(e, t)
        }
        ,
        r
    }
    function Ng(e, t, n) {
        var r = kp(Ji, n);
        r.tag = bp;
        var o = e.type.getDerivedStateFromError;
        if ("function" == typeof o) {
            var a = t.value;
            r.payload = function() {
                return o(a)
            }
            ,
            r.callback = function() {
                K_(e),
                Ig(e, t)
            }
        }
        var s = e.stateNode;
        return null !== s && "function" == typeof s.componentDidCatch && (r.callback = function() {
            var n;
            K_(e),
            Ig(e, t),
            "function" != typeof o && (n = this,
            null === Ib ? Ib = new Set([n]) : Ib.add(n));
            var r = t.value
              , a = t.stack;
            this.componentDidCatch(r, {
                componentStack: null !== a ? a : ""
            }),
            "function" != typeof o && (ha(e.lanes, gi) || i("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", mt(e) || "Unknown"))
        }
        ),
        r
    }
    function Dg(e, t, n) {
        var r, o = e.pingCache;
        if (null === o ? (o = e.pingCache = new Mg,
        r = new Set,
        o.set(t, r)) : void 0 === (r = o.get(t)) && (r = new Set,
        o.set(t, r)),
        !r.has(n)) {
            r.add(n);
            var i = C_.bind(null, e, t, n);
            Vo && F_(e, n),
            t.then(i, i)
        }
    }
    function Lg(e) {
        var t, n, r = e;
        do {
            if (r.tag === _ && (n = void 0,
            null !== (n = (t = r).memoizedState) ? null !== n.dehydrated : (t.memoizedProps,
            1)))
                return r;
            r = r.return
        } while (null !== r);
        return null
    }
    function Ag(e, t, n, r, o) {
        if ((e.mode & ai) === ii) {
            if (e === t)
                e.flags |= ro;
            else {
                if (e.flags |= Hr,
                n.flags |= oo,
                n.flags &= ~(eo | no),
                n.tag === u)
                    if (null === n.alternate)
                        n.tag = E;
                    else {
                        var i = kp(Ji, gi);
                        i.tag = vp,
                        xp(n, i, gi)
                    }
                n.lanes = ga(n.lanes, gi)
            }
            return e
        }
        return e.flags |= ro,
        e.lanes = o,
        e
    }
    function Fg(e, t, n, r, o) {
        if (n.flags |= no,
        Vo && F_(e, o),
        null !== r && "object" == typeof r && "function" == typeof r.then) {
            var i = r;
            !function(e) {
                var t = e.tag;
                if ((e.mode & ai) === ii && (t === s || t === v || t === S)) {
                    var n = e.alternate;
                    n ? (e.updateQueue = n.updateQueue,
                    e.memoizedState = n.memoizedState,
                    e.lanes = n.lanes) : (e.updateQueue = null,
                    e.memoizedState = null)
                }
            }(n),
            vf() && n.mode & ai && Jd();
            var a = Lg(t);
            if (null !== a)
                return a.flags &= ~Qr,
                Ag(a, t, n, 0, o),
                a.mode & ai && Dg(e, i, o),
                void function(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) {
                        var o = new Set;
                        o.add(n),
                        e.updateQueue = o
                    } else
                        r.add(n)
                }(a, 0, i);
            if ((o & gi) === hi)
                return Dg(e, i, o),
                void h_();
            r = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.")
        } else if (vf() && n.mode & ai) {
            Jd();
            var l = Lg(t);
            if (null !== l)
                return (l.flags & ro) === jr && (l.flags |= Qr),
                Ag(l, t, n, 0, o),
                void bf(Rg(r, n))
        }
        !function(e) {
            hb !== ib && (hb = rb);
            null === bb ? bb = [e] : bb.push(e)
        }(r = Rg(r, n));
        var d = t;
        do {
            switch (d.tag) {
            case c:
                var f = r;
                d.flags |= ro;
                var p = da(o);
                return d.lanes = ga(d.lanes, p),
                void Cp(d, Pg(d, f, p));
            case u:
                var h = r
                  , m = d.type
                  , g = d.stateNode;
                if ((d.flags & Hr) === jr && ("function" == typeof m.getDerivedStateFromError || null !== g && "function" == typeof g.componentDidCatch && !S_(g))) {
                    d.flags |= ro;
                    var y = da(o);
                    return d.lanes = ga(d.lanes, y),
                    void Cp(d, Ng(d, h, y))
                }
            }
            d = d.return
        } while (null !== d)
    }
    var Ug, jg, zg, Bg, qg, Wg, Vg, $g, Hg, Qg = n.ReactCurrentOwner, Yg = !1;
    function Gg(e, t, n, r) {
        t.child = null === e ? $f(t, null, n, r) : Vf(t, e.child, n, r)
    }
    function Kg(e, t, n, r, o) {
        if (t.type !== t.elementType) {
            var i = n.propTypes;
            i && Zc(i, r, "prop", pt(n))
        }
        var a, s, u = n.render, l = t.ref;
        if (ap(t, o),
        Go(t),
        Qg.current = t,
        kt(!0),
        a = Ih(e, t, u, r, l, o),
        s = Mh(),
        t.mode & ui) {
            $o(!0);
            try {
                a = Ih(e, t, u, r, l, o),
                s = Mh()
            } finally {
                $o(!1)
            }
        }
        return kt(!1),
        Ko(),
        null === e || Yg ? (vf() && s && Wd(t),
        t.flags |= zr,
        Gg(e, t, a, o),
        t.child) : (Ph(e, t, o),
        Ty(e, t, o))
    }
    function Xg(e, t, n, r, o) {
        if (null === e) {
            var a = n.type;
            if (function(e) {
                return "function" == typeof e && !iw(e) && void 0 === e.defaultProps
            }(a) && null === n.compare && void 0 === n.defaultProps) {
                var s;
                return s = H_(a),
                t.tag = S,
                t.type = s,
                sy(t, a),
                Jg(e, t, s, r, o)
            }
            var u = a.propTypes;
            if (u && Zc(u, r, "prop", pt(a)),
            void 0 !== n.defaultProps) {
                var l = pt(a) || "Unknown";
                Hg[l] || (i("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", l),
                Hg[l] = !0)
            }
            var c = uw(n.type, null, r, t, t.mode, o);
            return c.ref = t.ref,
            c.return = t,
            t.child = c,
            c
        }
        var d = n.type
          , f = d.propTypes;
        f && Zc(f, r, "prop", pt(d));
        var p = e.child;
        if (!Ry(e, o)) {
            var h = p.memoizedProps
              , m = n.compare;
            if ((m = null !== m ? m : Tu)(h, r) && e.ref === t.ref)
                return Ty(e, t, o)
        }
        t.flags |= zr;
        var g = aw(p, r);
        return g.ref = t.ref,
        g.return = t,
        t.child = g,
        g
    }
    function Jg(e, t, n, r, o) {
        if (t.type !== t.elementType) {
            var i = t.elementType;
            if (i.$$typeof === ze) {
                var a = i
                  , s = a._payload
                  , u = a._init;
                try {
                    i = u(s)
                } catch (d) {
                    i = null
                }
                var l = i && i.propTypes;
                l && Zc(l, r, "prop", pt(i))
            }
        }
        if (null !== e) {
            var c = e.memoizedProps;
            if (Tu(c, r) && e.ref === t.ref && t.type === e.type) {
                if (Yg = !1,
                t.pendingProps = r = c,
                !Ry(e, o))
                    return t.lanes = e.lanes,
                    Ty(e, t, o);
                (e.flags & oo) !== jr && (Yg = !0)
            }
        }
        return ty(e, t, n, r, o)
    }
    function Zg(e, t, n) {
        var r, o = t.pendingProps, i = o.children, a = null !== e ? e.memoizedState : null;
        if ("hidden" === o.mode || U)
            if ((t.mode & ai) === ii) {
                var s = {
                    baseLanes: hi,
                    cachePool: null,
                    transitions: null
                };
                t.memoizedState = s,
                s_(t, n)
            } else {
                if (!ha(n, Ki)) {
                    var u;
                    if (null !== a)
                        u = ga(a.baseLanes, n);
                    else
                        u = n;
                    t.lanes = t.childLanes = Ki;
                    var l = {
                        baseLanes: u,
                        cachePool: null,
                        transitions: null
                    };
                    return t.memoizedState = l,
                    t.updateQueue = null,
                    s_(t, u),
                    null
                }
                var c = {
                    baseLanes: hi,
                    cachePool: null,
                    transitions: null
                };
                t.memoizedState = c,
                s_(t, null !== a ? a.baseLanes : n)
            }
        else
            null !== a ? (r = ga(a.baseLanes, n),
            t.memoizedState = null) : r = n,
            s_(t, r);
        return Gg(e, t, i, n),
        t.child
    }
    function ey(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= Yr,
        t.flags |= ao)
    }
    function ty(e, t, n, r, o) {
        if (t.type !== t.elementType) {
            var i = n.propTypes;
            i && Zc(i, r, "prop", pt(n))
        }
        var a, s, u;
        if (a = pd(t, dd(0, n, !0)),
        ap(t, o),
        Go(t),
        Qg.current = t,
        kt(!0),
        s = Ih(e, t, n, r, a, o),
        u = Mh(),
        t.mode & ui) {
            $o(!0);
            try {
                s = Ih(e, t, n, r, a, o),
                u = Mh()
            } finally {
                $o(!1)
            }
        }
        return kt(!1),
        Ko(),
        null === e || Yg ? (vf() && u && Wd(t),
        t.flags |= zr,
        Gg(e, t, s, o),
        t.child) : (Ph(e, t, o),
        Ty(e, t, o))
    }
    function ny(e, t, n, r, o) {
        switch (Ow(t)) {
        case !1:
            var a = t.stateNode
              , s = new (0,
            t.type)(t.memoizedProps,a.context).state;
            a.updater.enqueueSetState(a, s, null);
            break;
        case !0:
            t.flags |= Hr,
            t.flags |= ro;
            var u = new Error("Simulated error coming from DevTools")
              , l = da(o);
            t.lanes = ga(t.lanes, l),
            Cp(t, Ng(t, Rg(u, t), l))
        }
        if (t.type !== t.elementType) {
            var c = n.propTypes;
            c && Zc(c, r, "prop", pt(n))
        }
        var d, f;
        md(n) ? (d = !0,
        _d(t)) : d = !1,
        ap(t, o),
        null === t.stateNode ? (Cy(e, t),
        Eg(t, n, r),
        Tg(t, n, r, o),
        f = !0) : f = null === e ? function(e, t, n, r) {
            var o = e.stateNode
              , i = e.memoizedProps;
            o.props = i;
            var a = o.context
              , s = t.contextType
              , u = sd;
            u = "object" == typeof s && null !== s ? sp(s) : pd(e, dd(0, t, !0));
            var l = t.getDerivedStateFromProps
              , c = "function" == typeof l || "function" == typeof o.getSnapshotBeforeUpdate;
            c || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || i === n && a === u || Cg(e, o, n, u),
            Ip();
            var d = e.memoizedState
              , f = o.state = d;
            if (Rp(e, n, o, r),
            f = e.memoizedState,
            i === n && d === f && !hd() && !Mp()) {
                if ("function" == typeof o.componentDidMount) {
                    var p = qr;
                    p |= so,
                    (e.mode & li) !== ii && (p |= lo),
                    e.flags |= p
                }
                return !1
            }
            "function" == typeof l && (wg(e, t, l, n),
            f = e.memoizedState);
            var h = Mp() || kg(e, t, i, n, d, f, u);
            if (h) {
                if (c || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(),
                "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                "function" == typeof o.componentDidMount) {
                    var m = qr;
                    m |= so,
                    (e.mode & li) !== ii && (m |= lo),
                    e.flags |= m
                }
            } else {
                if ("function" == typeof o.componentDidMount) {
                    var g = qr;
                    g |= so,
                    (e.mode & li) !== ii && (g |= lo),
                    e.flags |= g
                }
                e.memoizedProps = n,
                e.memoizedState = f
            }
            return o.props = n,
            o.state = f,
            o.context = u,
            h
        }(t, n, r, o) : function(e, t, n, r, o) {
            var i = t.stateNode;
            Sp(e, t);
            var a = t.memoizedProps
              , s = t.type === t.elementType ? a : sg(t.type, a);
            i.props = s;
            var u = t.pendingProps
              , l = i.context
              , c = n.contextType
              , d = sd;
            d = "object" == typeof c && null !== c ? sp(c) : pd(t, dd(0, n, !0));
            var f = n.getDerivedStateFromProps
              , p = "function" == typeof f || "function" == typeof i.getSnapshotBeforeUpdate;
            p || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || a === u && l === d || Cg(t, i, r, d),
            Ip();
            var h = t.memoizedState
              , m = i.state = h;
            if (Rp(t, r, i, o),
            m = t.memoizedState,
            a === u && h === m && !hd() && !Mp() && !F)
                return "function" == typeof i.componentDidUpdate && (a === e.memoizedProps && h === e.memoizedState || (t.flags |= qr)),
                "function" == typeof i.getSnapshotBeforeUpdate && (a === e.memoizedProps && h === e.memoizedState || (t.flags |= Gr)),
                !1;
            "function" == typeof f && (wg(t, n, f, r),
            m = t.memoizedState);
            var g = Mp() || kg(t, n, s, r, h, m, d) || F;
            return g ? (p || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, m, d),
            "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, m, d)),
            "function" == typeof i.componentDidUpdate && (t.flags |= qr),
            "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= Gr)) : ("function" == typeof i.componentDidUpdate && (a === e.memoizedProps && h === e.memoizedState || (t.flags |= qr)),
            "function" == typeof i.getSnapshotBeforeUpdate && (a === e.memoizedProps && h === e.memoizedState || (t.flags |= Gr)),
            t.memoizedProps = r,
            t.memoizedState = m),
            i.props = r,
            i.state = m,
            i.context = d,
            g
        }(e, t, n, r, o);
        var p = ry(e, t, n, f, d, o)
          , h = t.stateNode;
        return f && h.props !== r && (Wg || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mt(t) || "a component"),
        Wg = !0),
        p
    }
    function ry(e, t, n, r, o, i) {
        ey(e, t);
        var a = (t.flags & Hr) !== jr;
        if (!r && !a)
            return o && wd(t, n, !1),
            Ty(e, t, i);
        var s, u = t.stateNode;
        if (Qg.current = t,
        a && "function" != typeof n.getDerivedStateFromError)
            s = null,
            eg();
        else {
            if (Go(t),
            kt(!0),
            s = u.render(),
            t.mode & ui) {
                $o(!0);
                try {
                    u.render()
                } finally {
                    $o(!1)
                }
            }
            kt(!1),
            Ko()
        }
        return t.flags |= zr,
        null !== e && a ? function(e, t, n, r) {
            t.child = Vf(t, e.child, null, r),
            t.child = Vf(t, null, n, r)
        }(e, t, s, i) : Gg(e, t, s, i),
        t.memoizedState = u.state,
        o && wd(t, n, !0),
        t.child
    }
    function oy(e) {
        var t = e.stateNode;
        t.pendingContext ? vd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vd(e, t.context, !1),
        jp(e, t.containerInfo)
    }
    function iy(e, t, n, r, o) {
        return gf(),
        bf(o),
        t.flags |= Qr,
        Gg(e, t, n, r),
        t.child
    }
    function ay(e, t, n, r) {
        Cy(e, t);
        var o = t.pendingProps
          , i = n
          , a = i._payload
          , c = (0,
        i._init)(a);
        t.type = c;
        var d = t.tag = function(e) {
            if ("function" == typeof e)
                return iw(e) ? u : s;
            if (null != e) {
                var t = e.$$typeof;
                if (t === Ae)
                    return v;
                if (t === je)
                    return w
            }
            return l
        }(c)
          , f = sg(c, o);
        switch (d) {
        case s:
            return sy(t, c),
            t.type = c = H_(c),
            ty(null, t, c, f, r);
        case u:
            return t.type = c = Q_(c),
            ny(null, t, c, f, r);
        case v:
            return t.type = c = Y_(c),
            Kg(null, t, c, f, r);
        case w:
            if (t.type !== t.elementType) {
                var p = c.propTypes;
                p && Zc(p, f, "prop", pt(c))
            }
            return Xg(null, t, c, sg(c.type, f), r)
        }
        var h = "";
        throw null !== c && "object" == typeof c && c.$$typeof === ze && (h = " Did you wrap a component in React.lazy() more than once?"),
        new Error("Element type is invalid. Received a promise that resolves to: " + c + ". Lazy element type must resolve to a class or function." + h)
    }
    function sy(e, t) {
        if (t && t.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"),
        null !== e.ref) {
            var n = ""
              , r = bt();
            r && (n += "\n\nCheck the render method of `" + r + "`.");
            var o = r || ""
              , a = e._debugSource;
            a && (o = a.fileName + ":" + a.lineNumber),
            qg[o] || (qg[o] = !0,
            i("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n))
        }
        if (void 0 !== t.defaultProps) {
            var s = pt(t) || "Unknown";
            Hg[s] || (i("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", s),
            Hg[s] = !0)
        }
        if ("function" == typeof t.getDerivedStateFromProps) {
            var u = pt(t) || "Unknown";
            Bg[u] || (i("%s: Function components do not support getDerivedStateFromProps.", u),
            Bg[u] = !0)
        }
        if ("object" == typeof t.contextType && null !== t.contextType) {
            var l = pt(t) || "Unknown";
            zg[l] || (i("%s: Function components do not support contextType.", l),
            zg[l] = !0)
        }
    }
    Ug = {},
    jg = {},
    zg = {},
    Bg = {},
    qg = {},
    Wg = !1,
    Vg = {},
    $g = {},
    Hg = {};
    var uy = {
        dehydrated: null,
        treeContext: null,
        retryLane: mi
    };
    function ly(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function cy(e, t, n) {
        var r = t.pendingProps;
        Iw(t) && (t.flags |= Hr);
        var o = Qp.current
          , a = !1
          , s = (t.flags & Hr) !== jr;
        if (s || function(e, t) {
            return (null === t || null !== t.memoizedState) && Yp(e, Hp)
        }(o, e) ? (a = !0,
        t.flags &= ~Hr) : null !== e && null === e.memoizedState || (o = o | $p),
        Xp(t, o = Gp(o)),
        null === e) {
            lf(t);
            var u = t.memoizedState;
            if (null !== u) {
                var l = u.dehydrated;
                if (null !== l)
                    return function(e, t) {
                        (e.mode & ai) === ii ? (i("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),
                        e.lanes = gi) : Oc(t) ? e.lanes = bi : e.lanes = Ki;
                        return null
                    }(t, l)
            }
            var c = r.children
              , d = r.fallback;
            if (a) {
                var f = function(e, t, n, r) {
                    var o, i, a = e.mode, s = e.child, u = {
                        mode: "hidden",
                        children: t
                    };
                    (a & ai) === ii && null !== s ? ((o = s).childLanes = hi,
                    o.pendingProps = u,
                    e.mode & si && (o.actualDuration = 0,
                    o.actualStartTime = -1,
                    o.selfBaseDuration = 0,
                    o.treeBaseDuration = 0),
                    i = cw(n, a, r, null)) : (o = fy(u, a),
                    i = cw(n, a, r, null));
                    return o.return = e,
                    i.return = e,
                    o.sibling = i,
                    e.child = o,
                    i
                }(t, c, d, n);
                return t.child.memoizedState = ly(n),
                t.memoizedState = uy,
                f
            }
            return dy(t, c)
        }
        var p = e.memoizedState;
        if (null !== p) {
            var h = p.dehydrated;
            if (null !== h)
                return function(e, t, n, r, o, a, s) {
                    if (n) {
                        if (t.flags & Qr)
                            return t.flags &= ~Qr,
                            hy(e, t, s, Og(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering.")));
                        if (null !== t.memoizedState)
                            return t.child = e.child,
                            t.flags |= Hr,
                            null;
                        var u = function(e, t, n, r, o) {
                            var i = t.mode
                              , a = {
                                mode: "visible",
                                children: n
                            }
                              , s = fy(a, i)
                              , u = cw(r, i, o, null);
                            u.flags |= Br,
                            s.return = t,
                            u.return = t,
                            s.sibling = u,
                            t.child = s,
                            (t.mode & ai) !== ii && Vf(t, e.child, null, o);
                            return u
                        }(e, t, r.children, r.fallback, s);
                        return t.child.memoizedState = ly(s),
                        t.memoizedState = uy,
                        u
                    }
                    if (Gd && i("We should not be hydrating here. This is a bug in React. Please file a bug."),
                    (t.mode & ai) === ii)
                        return hy(e, t, s, null);
                    if (Oc(o)) {
                        var l, c, d, f = function(e) {
                            var t, n, r, o = e.nextSibling && e.nextSibling.dataset;
                            return o && (t = o.dgst,
                            n = o.msg,
                            r = o.stck),
                            {
                                message: n,
                                digest: t,
                                stack: r
                            }
                        }(o);
                        return l = f.digest,
                        c = f.message,
                        d = f.stack,
                        hy(e, t, s, Og(c ? new Error(c) : new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), l, d))
                    }
                    var p = ha(s, e.childLanes);
                    if (Yg || p) {
                        var h = Qb();
                        if (null !== h) {
                            var m = function(e, t) {
                                var n;
                                switch (ca(t)) {
                                case vi:
                                    n = yi;
                                    break;
                                case _i:
                                    n = bi;
                                    break;
                                case ki:
                                case xi:
                                case Ei:
                                case Ci:
                                case Ti:
                                case Ri:
                                case Oi:
                                case Ii:
                                case Mi:
                                case Pi:
                                case Ni:
                                case Di:
                                case Li:
                                case Ai:
                                case Fi:
                                case Ui:
                                case zi:
                                case Bi:
                                case qi:
                                case Wi:
                                case Vi:
                                    n = wi;
                                    break;
                                case Gi:
                                    n = Yi;
                                    break;
                                default:
                                    n = mi
                                }
                                return (n & (e.suspendedLanes | t)) !== mi ? mi : n
                            }(h, s);
                            if (m !== mi && m !== a.retryLane) {
                                a.retryLane = m;
                                var g = Ji;
                                dp(e, m),
                                Xb(h, e, m, g)
                            }
                        }
                        return h_(),
                        hy(e, t, s, Og(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.")))
                    }
                    if (Rc(o)) {
                        t.flags |= Hr,
                        t.child = e.child;
                        var y = R_.bind(null, e);
                        return b = y,
                        o._reactRetry = b,
                        null
                    }
                    ef(t, o, a.treeContext);
                    var v = dy(t, r.children);
                    return v.flags |= Xr,
                    v;
                    var b
                }(e, t, s, r, h, p, n)
        }
        if (a) {
            var m = r.fallback
              , g = function(e, t, n, r, o) {
                var i, a, s = t.mode, u = e.child, l = u.sibling, c = {
                    mode: "hidden",
                    children: n
                };
                if ((s & ai) === ii && t.child !== u) {
                    (i = t.child).childLanes = hi,
                    i.pendingProps = c,
                    t.mode & si && (i.actualDuration = 0,
                    i.actualStartTime = -1,
                    i.selfBaseDuration = u.selfBaseDuration,
                    i.treeBaseDuration = u.treeBaseDuration),
                    t.deletions = null
                } else
                    (i = py(u, c)).subtreeFlags = u.subtreeFlags & go;
                null !== l ? a = aw(l, r) : (a = cw(r, s, o, null)).flags |= Br;
                return a.return = t,
                i.return = t,
                i.sibling = a,
                t.child = i,
                a
            }(e, t, r.children, m, n)
              , y = t.child
              , v = e.child.memoizedState;
            return y.memoizedState = null === v ? ly(n) : function(e, t) {
                return {
                    baseLanes: ga(e.baseLanes, t),
                    cachePool: null,
                    transitions: e.transitions
                }
            }(v, n),
            y.childLanes = function(e, t) {
                return ya(e.childLanes, t)
            }(e, n),
            t.memoizedState = uy,
            g
        }
        var b = function(e, t, n, r) {
            var o = e.child
              , i = o.sibling
              , a = py(o, {
                mode: "visible",
                children: n
            });
            (t.mode & ai) === ii && (a.lanes = r);
            if (a.return = t,
            a.sibling = null,
            null !== i) {
                var s = t.deletions;
                null === s ? (t.deletions = [i],
                t.flags |= Wr) : s.push(i)
            }
            return t.child = a,
            a
        }(e, t, r.children, n);
        return t.memoizedState = null,
        b
    }
    function dy(e, t, n) {
        var r = fy({
            mode: "visible",
            children: t
        }, e.mode);
        return r.return = e,
        e.child = r,
        r
    }
    function fy(e, t, n) {
        return dw(e, t, hi, null)
    }
    function py(e, t) {
        return aw(e, t)
    }
    function hy(e, t, n, r) {
        null !== r && bf(r),
        Vf(t, e.child, null, n);
        var o = dy(t, t.pendingProps.children);
        return o.flags |= Br,
        t.memoizedState = null,
        o
    }
    function my(e, t, n) {
        e.lanes = ga(e.lanes, t);
        var r = e.alternate;
        null !== r && (r.lanes = ga(r.lanes, t)),
        op(e.return, t, n)
    }
    function gy(e, t) {
        var n = Xt(e)
          , r = !n && "function" == typeof Ve(e);
        if (n || r) {
            var o = n ? "array" : "iterable";
            return i("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o),
            !1
        }
        return !0
    }
    function yy(e, t, n, r, o) {
        var i = e.memoizedState;
        null === i ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o
        } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = r,
        i.tail = n,
        i.tailMode = o)
    }
    function vy(e, t, n) {
        var r = t.pendingProps
          , o = r.revealOrder
          , a = r.tail
          , s = r.children;
        !function(e) {
            if (void 0 !== e && "forwards" !== e && "backwards" !== e && "together" !== e && !Vg[e])
                if (Vg[e] = !0,
                "string" == typeof e)
                    switch (e.toLowerCase()) {
                    case "together":
                    case "forwards":
                    case "backwards":
                        i('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
                        break;
                    case "forward":
                    case "backward":
                        i('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
                        break;
                    default:
                        i('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e)
                    }
                else
                    i('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e)
        }(o),
        function(e, t) {
            void 0 === e || $g[e] || ("collapsed" !== e && "hidden" !== e ? ($g[e] = !0,
            i('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : "forwards" !== t && "backwards" !== t && ($g[e] = !0,
            i('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)))
        }(a, o),
        function(e, t) {
            if (("forwards" === t || "backwards" === t) && null != e && !1 !== e)
                if (Xt(e)) {
                    for (var n = 0; n < e.length; n++)
                        if (!gy(e[n], n))
                            return
                } else {
                    var r = Ve(e);
                    if ("function" == typeof r) {
                        var o = r.call(e);
                        if (o)
                            for (var a = o.next(), s = 0; !a.done; a = o.next()) {
                                if (!gy(a.value, s))
                                    return;
                                s++
                            }
                    } else
                        i('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t)
                }
        }(s, o),
        Gg(e, t, s, n);
        var u = Qp.current;
        Yp(u, Hp) ? (u = Kp(u, Hp),
        t.flags |= Hr) : (null !== e && (e.flags & Hr) !== jr && function(e, t, n) {
            for (var r = t; null !== r; ) {
                if (r.tag === _)
                    null !== r.memoizedState && my(r, n, e);
                else if (r.tag === T)
                    my(r, n, e);
                else if (null !== r.child) {
                    r.child.return = r,
                    r = r.child;
                    continue
                }
                if (r === e)
                    return;
                for (; null === r.sibling; ) {
                    if (null === r.return || r.return === e)
                        return;
                    r = r.return
                }
                r.sibling.return = r.return,
                r = r.sibling
            }
        }(t, t.child, n),
        u = Gp(u));
        if (Xp(t, u),
        (t.mode & ai) === ii)
            t.memoizedState = null;
        else
            switch (o) {
            case "forwards":
                var l, c = function(e) {
                    for (var t = e, n = null; null !== t; ) {
                        var r = t.alternate;
                        null !== r && null === Zp(r) && (n = t),
                        t = t.sibling
                    }
                    return n
                }(t.child);
                null === c ? (l = t.child,
                t.child = null) : (l = c.sibling,
                c.sibling = null),
                yy(t, !1, l, c, a);
                break;
            case "backwards":
                var d = null
                  , f = t.child;
                for (t.child = null; null !== f; ) {
                    var p = f.alternate;
                    if (null !== p && null === Zp(p)) {
                        t.child = f;
                        break
                    }
                    var h = f.sibling;
                    f.sibling = d,
                    d = f,
                    f = h
                }
                yy(t, !0, d, null, a);
                break;
            case "together":
                yy(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    var by = !1;
    var _y, wy, Sy, ky, xy = !1;
    function Ey() {
        Yg = !0
    }
    function Cy(e, t) {
        (t.mode & ai) === ii && null !== e && (e.alternate = null,
        t.alternate = null,
        t.flags |= Br)
    }
    function Ty(e, t, n) {
        return null !== e && (t.dependencies = e.dependencies),
        eg(),
        p_(t.lanes),
        ha(n, t.childLanes) ? (function(e, t) {
            if (null !== e && t.child !== e.child)
                throw new Error("Resuming work not yet implemented.");
            if (null !== t.child) {
                var n = t.child
                  , r = aw(n, n.pendingProps);
                for (t.child = r,
                r.return = t; null !== n.sibling; )
                    n = n.sibling,
                    (r = r.sibling = aw(n, n.pendingProps)).return = t;
                r.sibling = null
            }
        }(e, t),
        t.child) : null
    }
    function Ry(e, t) {
        return !!ha(e.lanes, t)
    }
    function Oy(e, t, n) {
        if (t._debugNeedsRemount && null !== e)
            return function(e, t, n) {
                var r = t.return;
                if (null === r)
                    throw new Error("Cannot swap the root fiber.");
                if (e.alternate = null,
                t.alternate = null,
                n.index = t.index,
                n.sibling = t.sibling,
                n.return = t.return,
                n.ref = t.ref,
                t === r.child)
                    r.child = n;
                else {
                    var o = r.child;
                    if (null === o)
                        throw new Error("Expected parent to have a child.");
                    for (; o.sibling !== t; )
                        if (null === (o = o.sibling))
                            throw new Error("Expected to find the previous sibling.");
                    o.sibling = n
                }
                var i = r.deletions;
                return null === i ? (r.deletions = [e],
                r.flags |= Wr) : i.push(e),
                n.flags |= Br,
                n
            }(e, t, uw(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
        if (null !== e)
            if (e.memoizedProps !== t.pendingProps || hd() || t.type !== e.type)
                Yg = !0;
            else {
                if (!Ry(e, n) && (t.flags & Hr) === jr)
                    return Yg = !1,
                    function(e, t, n) {
                        switch (t.tag) {
                        case c:
                            oy(t),
                            t.stateNode,
                            gf();
                            break;
                        case f:
                            qp(t);
                            break;
                        case u:
                            md(t.type) && _d(t);
                            break;
                        case d:
                            jp(t, t.stateNode.containerInfo);
                            break;
                        case y:
                            var r = t.memoizedProps.value;
                            np(t, t.type._context, r);
                            break;
                        case b:
                            ha(n, t.childLanes) && (t.flags |= qr);
                            var o = t.stateNode;
                            o.effectDuration = 0,
                            o.passiveEffectDuration = 0;
                            break;
                        case _:
                            var i = t.memoizedState;
                            if (null !== i) {
                                if (null !== i.dehydrated)
                                    return Xp(t, Gp(Qp.current)),
                                    t.flags |= Hr,
                                    null;
                                if (ha(n, t.child.childLanes))
                                    return cy(e, t, n);
                                Xp(t, Gp(Qp.current));
                                var a = Ty(e, t, n);
                                return null !== a ? a.sibling : null
                            }
                            Xp(t, Gp(Qp.current));
                            break;
                        case T:
                            var s = (e.flags & Hr) !== jr
                              , l = ha(n, t.childLanes);
                            if (s) {
                                if (l)
                                    return vy(e, t, n);
                                t.flags |= Hr
                            }
                            var p = t.memoizedState;
                            if (null !== p && (p.rendering = null,
                            p.tail = null,
                            p.lastEffect = null),
                            Xp(t, Qp.current),
                            l)
                                break;
                            return null;
                        case I:
                        case M:
                            return t.lanes = hi,
                            Zg(e, t, n)
                        }
                        return Ty(e, t, n)
                    }(e, t, n);
                Yg = (e.flags & oo) !== jr
            }
        else if (Yg = !1,
        vf() && function(e) {
            return Hd(),
            (e.flags & io) !== jr
        }(t)) {
            var r = t.index;
            qd(t, (Hd(),
            Dd), r)
        }
        switch (t.lanes = hi,
        t.tag) {
        case l:
            return function(e, t, n, r) {
                Cy(e, t);
                var o, a, l, c = t.pendingProps;
                if (o = pd(t, dd(0, n, !1)),
                ap(t, r),
                Go(t),
                n.prototype && "function" == typeof n.prototype.render) {
                    var d = pt(n) || "Unknown";
                    Ug[d] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", d, d),
                    Ug[d] = !0)
                }
                if (t.mode & ui && Sf.recordLegacyContextWarning(t, null),
                kt(!0),
                Qg.current = t,
                a = Ih(null, t, n, c, o, r),
                l = Mh(),
                kt(!1),
                Ko(),
                t.flags |= zr,
                "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                    var f = pt(n) || "Unknown";
                    jg[f] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", f, f, f),
                    jg[f] = !0)
                }
                if ("object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                    var p = pt(n) || "Unknown";
                    jg[p] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", p, p, p),
                    jg[p] = !0),
                    t.tag = u,
                    t.memoizedState = null,
                    t.updateQueue = null;
                    var h = !1;
                    return md(n) ? (h = !0,
                    _d(t)) : h = !1,
                    t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                    wp(t),
                    xg(t, a),
                    Tg(t, n, c, r),
                    ry(null, t, n, !0, h, r)
                }
                if (t.tag = s,
                t.mode & ui) {
                    $o(!0);
                    try {
                        a = Ih(null, t, n, c, o, r),
                        l = Mh()
                    } finally {
                        $o(!1)
                    }
                }
                return vf() && l && Wd(t),
                Gg(null, t, a, r),
                sy(t, n),
                t.child
            }(e, t, t.type, n);
        case x:
            return ay(e, t, t.elementType, n);
        case s:
            var o = t.type
              , a = t.pendingProps;
            return ty(e, t, o, t.elementType === o ? a : sg(o, a), n);
        case u:
            var k = t.type
              , C = t.pendingProps;
            return ny(e, t, k, t.elementType === k ? C : sg(k, C), n);
        case c:
            return function(e, t, n) {
                if (oy(t),
                null === e)
                    throw new Error("Should have a current fiber. This is a bug in React.");
                var r = t.pendingProps
                  , o = t.memoizedState
                  , i = o.element;
                Sp(e, t),
                Rp(t, r, null, n);
                var a = t.memoizedState;
                t.stateNode;
                var s = a.element;
                if (o.isDehydrated) {
                    var u = {
                        element: s,
                        isDehydrated: !1,
                        cache: a.cache,
                        pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                        transitions: a.transitions
                    };
                    if (t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & Qr)
                        return iy(e, t, s, n, Rg(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t));
                    if (s !== i)
                        return iy(e, t, s, n, Rg(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t));
                    Zd(t);
                    var l = $f(t, null, s, n);
                    t.child = l;
                    for (var c = l; c; )
                        c.flags = c.flags & ~Br | Xr,
                        c = c.sibling
                } else {
                    if (gf(),
                    s === i)
                    return Ty(e, t, n);
                    Gg(e, t, s, n)
                }
                return t.child
            }(e, t, n);
        case f:
            return function(e, t, n) {
                qp(t),
                null === e && lf(t);
                var r = t.type
                  , o = t.pendingProps
                  , i = null !== e ? e.memoizedProps : null
                  , a = o.children;
                return mc(r, o) ? a = null : null !== i && mc(r, i) && (t.flags |= Vr),
                ey(e, t),
                Gg(e, t, a, n),
                t.child
            }(e, t, n);
        case p:
            return function(e, t) {
                return null === e && lf(t),
                null
            }(e, t);
        case _:
            return cy(e, t, n);
        case d:
            return function(e, t, n) {
                jp(t, t.stateNode.containerInfo);
                var r = t.pendingProps;
                return null === e ? t.child = Vf(t, null, r, n) : Gg(e, t, r, n),
                t.child
            }(e, t, n);
        case v:
            var O = t.type
              , P = t.pendingProps;
            return Kg(e, t, O, t.elementType === O ? P : sg(O, P), n);
        case h:
            return function(e, t, n) {
                return Gg(e, t, t.pendingProps, n),
                t.child
            }(e, t, n);
        case m:
            return function(e, t, n) {
                return Gg(e, t, t.pendingProps.children, n),
                t.child
            }(e, t, n);
        case b:
            return function(e, t, n) {
                t.flags |= qr;
                var r = t.stateNode;
                return r.effectDuration = 0,
                r.passiveEffectDuration = 0,
                Gg(e, t, t.pendingProps.children, n),
                t.child
            }(e, t, n);
        case y:
            return function(e, t, n) {
                var r = t.type._context
                  , o = t.pendingProps
                  , a = t.memoizedProps
                  , s = o.value;
                "value"in o || by || (by = !0,
                i("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
                var u = t.type.propTypes;
                if (u && Zc(u, o, "prop", "Context.Provider"),
                np(t, r, s),
                null !== a) {
                    var l = a.value;
                    if (Cu(l, s)) {
                        if (a.children === o.children && !hd())
                            return Ty(e, t, n)
                    } else
                        ip(t, r, n)
                }
                return Gg(e, t, o.children, n),
                t.child
            }(e, t, n);
        case g:
            return function(e, t, n) {
                var r = t.type;
                void 0 === r._context ? r !== r.Consumer && (xy || (xy = !0,
                i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
                var o = t.pendingProps.children;
                "function" != typeof o && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),
                ap(t, n);
                var a, s = sp(r);
                return Go(t),
                Qg.current = t,
                kt(!0),
                a = o(s),
                kt(!1),
                Ko(),
                t.flags |= zr,
                Gg(e, t, a, n),
                t.child
            }(e, t, n);
        case w:
            var N = t.type
              , D = sg(N, t.pendingProps);
            if (t.type !== t.elementType) {
                var L = N.propTypes;
                L && Zc(L, D, "prop", pt(N))
            }
            return Xg(e, t, N, D = sg(N.type, D), n);
        case S:
            return Jg(e, t, t.type, t.pendingProps, n);
        case E:
            var A = t.type
              , F = t.pendingProps;
            return function(e, t, n, r, o) {
                var i;
                return Cy(e, t),
                t.tag = u,
                md(n) ? (i = !0,
                _d(t)) : i = !1,
                ap(t, o),
                Eg(t, n, r),
                Tg(t, n, r, o),
                ry(null, t, n, !0, i, o)
            }(e, t, A, t.elementType === A ? F : sg(A, F), n);
        case T:
            return vy(e, t, n);
        case R:
            break;
        case I:
            return Zg(e, t, n)
        }
        throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.")
    }
    function Iy(e) {
        e.flags |= qr
    }
    function My(e) {
        e.flags |= Yr,
        e.flags |= ao
    }
    function Py(e, t) {
        if (!vf())
            switch (e.tailMode) {
            case "hidden":
                for (var n = e.tail, r = null; null !== n; )
                    null !== n.alternate && (r = n),
                    n = n.sibling;
                null === r ? e.tail = null : r.sibling = null;
                break;
            case "collapsed":
                for (var o = e.tail, i = null; null !== o; )
                    null !== o.alternate && (i = o),
                    o = o.sibling;
                null === i ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : i.sibling = null
            }
    }
    function Ny(e) {
        var t = null !== e.alternate && e.alternate.child === e.child
          , n = hi
          , r = jr;
        if (t) {
            if ((e.mode & si) !== ii) {
                for (var o = e.selfBaseDuration, i = e.child; null !== i; )
                    n = ga(n, ga(i.lanes, i.childLanes)),
                    r |= i.subtreeFlags & go,
                    r |= i.flags & go,
                    o += i.treeBaseDuration,
                    i = i.sibling;
                e.treeBaseDuration = o
            } else
                for (var a = e.child; null !== a; )
                    n = ga(n, ga(a.lanes, a.childLanes)),
                    r |= a.subtreeFlags & go,
                    r |= a.flags & go,
                    a.return = e,
                    a = a.sibling;
            e.subtreeFlags |= r
        } else {
            if ((e.mode & si) !== ii) {
                for (var s = e.actualDuration, u = e.selfBaseDuration, l = e.child; null !== l; )
                    n = ga(n, ga(l.lanes, l.childLanes)),
                    r |= l.subtreeFlags,
                    r |= l.flags,
                    s += l.actualDuration,
                    u += l.treeBaseDuration,
                    l = l.sibling;
                e.actualDuration = s,
                e.treeBaseDuration = u
            } else
                for (var c = e.child; null !== c; )
                    n = ga(n, ga(c.lanes, c.childLanes)),
                    r |= c.subtreeFlags,
                    r |= c.flags,
                    c.return = e,
                    c = c.sibling;
            e.subtreeFlags |= r
        }
        return e.childLanes = n,
        t
    }
    function Dy(e, t, n) {
        if (Gd && null !== Yd && (t.mode & ai) !== ii && (t.flags & Hr) === jr)
            return mf(t),
            gf(),
            t.flags |= Qr | no | ro,
            !1;
        var r = hf(t);
        if (null !== n && null !== n.dehydrated) {
            if (null === e) {
                if (!r)
                    throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (df(t),
                Ny(t),
                (t.mode & si) !== ii)
                    if (null !== n) {
                        var o = t.child;
                        null !== o && (t.treeBaseDuration -= o.treeBaseDuration)
                    }
                return !1
            }
            if (gf(),
            (t.flags & Hr) === jr && (t.memoizedState = null),
            t.flags |= qr,
            Ny(t),
            (t.mode & si) !== ii && null !== n) {
                var i = t.child;
                null !== i && (t.treeBaseDuration -= i.treeBaseDuration)
            }
            return !1
        }
        return yf(),
        !0
    }
    function Ly(e, t, n) {
        var r = t.pendingProps;
        switch ($d(t),
        t.tag) {
        case l:
        case x:
        case S:
        case s:
        case v:
        case h:
        case m:
        case b:
        case g:
        case w:
            return Ny(t),
            null;
        case u:
            return md(t.type) && gd(t),
            Ny(t),
            null;
        case c:
            var o = t.stateNode;
            if (zp(t),
            yd(t),
            ah(),
            o.pendingContext && (o.context = o.pendingContext,
            o.pendingContext = null),
            null === e || null === e.child)
                if (hf(t))
                    Iy(t);
                else if (null !== e)
                    e.memoizedState.isDehydrated && (t.flags & Qr) === jr || (t.flags |= Gr,
                    yf());
            return wy(e, t),
            Ny(t),
            null;
        case f:
            Wp(t);
            var i = Up()
              , a = t.type;
            if (null !== e && null != t.stateNode)
                Sy(e, t, a, r, i),
                e.ref !== t.ref && My(t);
            else {
                if (!r) {
                    if (null === t.stateNode)
                        throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                    return Ny(t),
                    null
                }
                var k = Bp();
                if (hf(t))
                    (function(e, t, n) {
                        var r = e.stateNode
                          , o = !Kd
                          , i = Pc(r, e.type, e.memoizedProps, 0, n, e, o);
                        return e.updateQueue = i,
                        null !== i
                    }
                    )(t, 0, k) && Iy(t);
                else {
                    var C = hc(a, r, i, k, t);
                    _y(C, t, !1, !1),
                    t.stateNode = C,
                    function(e, t, n) {
                        switch (Vl(e, t, n),
                        t) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!n.autoFocus;
                        case "img":
                            return !0;
                        default:
                            return !1
                        }
                    }(C, a, r) && Iy(t)
                }
                null !== t.ref && My(t)
            }
            return Ny(t),
            null;
        case p:
            var O = r;
            if (e && null != t.stateNode) {
                var P = e.memoizedProps;
                ky(e, t, P, O)
            } else {
                if ("string" != typeof O && null === t.stateNode)
                    throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                var L = Up()
                  , A = Bp();
                hf(t) ? cf(t) && Iy(t) : t.stateNode = gc(O, L, A, t)
            }
            return Ny(t),
            null;
        case _:
            Jp(t);
            var F = t.memoizedState;
            if (null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated)
                if (!Dy(e, t, F))
                    return t.flags & ro ? t : null;
            if ((t.flags & Hr) !== jr)
                return t.lanes = n,
                (t.mode & si) !== ii && ag(t),
                t;
            var z = null !== F;
            if (z !== (null !== e && null !== e.memoizedState))
                if (z)
                    if (t.child.flags |= Jr,
                    (t.mode & ai) !== ii)
                        null === e && (!0 !== t.memoizedProps.unstable_avoidThisFallback || !j) || Yp(Qp.current, $p) ? hb === tb && (hb = ob) : h_();
            if (null !== t.updateQueue && (t.flags |= qr),
            Ny(t),
            (t.mode & si) !== ii && z) {
                var B = t.child;
                null !== B && (t.treeBaseDuration -= B.treeBaseDuration)
            }
            return null;
        case d:
            return zp(t),
            wy(e, t),
            null === e && hl(t.stateNode.containerInfo),
            Ny(t),
            null;
        case y:
            return rp(t.type._context, t),
            Ny(t),
            null;
        case E:
            return md(t.type) && gd(t),
            Ny(t),
            null;
        case T:
            Jp(t);
            var q = t.memoizedState;
            if (null === q)
                return Ny(t),
                null;
            var W = (t.flags & Hr) !== jr
              , V = q.rendering;
            if (null === V)
                if (W)
                    Py(q, !1);
                else {
                    if (!(hb === tb && (null === e || (e.flags & Hr) === jr)))
                        for (var $ = t.child; null !== $; ) {
                            var H = Zp($);
                            if (null !== H) {
                                W = !0,
                                t.flags |= Hr,
                                Py(q, !1);
                                var Q = H.updateQueue;
                                return null !== Q && (t.updateQueue = Q,
                                t.flags |= qr),
                                t.subtreeFlags = jr,
                                Hf(t, n),
                                Xp(t, Kp(Qp.current, Hp)),
                                t.child
                            }
                            $ = $.sibling
                        }
                    null !== q.tail && Mo() > Tb() && (t.flags |= Hr,
                    W = !0,
                    Py(q, !1),
                    t.lanes = $i)
                }
            else {
                if (!W) {
                    var Y = Zp(V);
                    if (null !== Y) {
                        t.flags |= Hr,
                        W = !0;
                        var G = Y.updateQueue;
                        if (null !== G && (t.updateQueue = G,
                        t.flags |= qr),
                        Py(q, !0),
                        null === q.tail && "hidden" === q.tailMode && !V.alternate && !vf())
                            return Ny(t),
                            null
                    } else
                        2 * Mo() - q.renderingStartTime > Tb() && n !== Ki && (t.flags |= Hr,
                        W = !0,
                        Py(q, !1),
                        t.lanes = $i)
                }
                if (q.isBackwards)
                    V.sibling = t.child,
                    t.child = V;
                else {
                    var K = q.last;
                    null !== K ? K.sibling = V : t.child = V,
                    q.last = V
                }
            }
            if (null !== q.tail) {
                var X = q.tail;
                q.rendering = X,
                q.tail = X.sibling,
                q.renderingStartTime = Mo(),
                X.sibling = null;
                var J = Qp.current;
                return Xp(t, J = W ? Kp(J, Hp) : Gp(J)),
                X
            }
            return Ny(t),
            null;
        case R:
            break;
        case I:
        case M:
            u_(t);
            var Z = null !== t.memoizedState;
            if (null !== e)
                null !== e.memoizedState === Z || U || (t.flags |= Jr);
            return Z && (t.mode & ai) !== ii ? ha(fb, Ki) && (Ny(t),
            t.subtreeFlags & (Br | qr) && (t.flags |= Jr)) : Ny(t),
            null;
        case N:
        case D:
            return null
        }
        throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.")
    }
    function Ay(e, t, n) {
        switch ($d(t),
        t.tag) {
        case u:
            md(t.type) && gd(t);
            var r = t.flags;
            return r & ro ? (t.flags = r & ~ro | Hr,
            (t.mode & si) !== ii && ag(t),
            t) : null;
        case c:
            t.stateNode,
            zp(t),
            yd(t),
            ah();
            var o = t.flags;
            return (o & ro) !== jr && (o & Hr) === jr ? (t.flags = o & ~ro | Hr,
            t) : null;
        case f:
            return Wp(t),
            null;
        case _:
            Jp(t);
            var i = t.memoizedState;
            if (null !== i && null !== i.dehydrated) {
                if (null === t.alternate)
                    throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
                gf()
            }
            var a = t.flags;
            return a & ro ? (t.flags = a & ~ro | Hr,
            (t.mode & si) !== ii && ag(t),
            t) : null;
        case T:
            return Jp(t),
            null;
        case d:
            return zp(t),
            null;
        case y:
            return rp(t.type._context, t),
            null;
        case I:
        case M:
            return u_(t),
            null;
        default:
            return null
        }
    }
    function Fy(e, t, n) {
        switch ($d(t),
        t.tag) {
        case u:
            var r = t.type.childContextTypes;
            null != r && gd(t);
            break;
        case c:
            t.stateNode,
            zp(t),
            yd(t),
            ah();
            break;
        case f:
            Wp(t);
            break;
        case d:
            zp(t);
            break;
        case _:
        case T:
            Jp(t);
            break;
        case y:
            rp(t.type._context, t);
            break;
        case I:
        case M:
            u_(t)
        }
    }
    _y = function(e, t, n, r) {
        for (var o, i, a = t.child; null !== a; ) {
            if (a.tag === f || a.tag === p)
                o = e,
                i = a.stateNode,
                o.appendChild(i);
            else if (a.tag === d)
                ;
            else if (null !== a.child) {
                a.child.return = a,
                a = a.child;
                continue
            }
            if (a === t)
                return;
            for (; null === a.sibling; ) {
                if (null === a.return || a.return === t)
                    return;
                a = a.return
            }
            a.sibling.return = a.return,
            a = a.sibling
        }
    }
    ,
    wy = function(e, t) {}
    ,
    Sy = function(e, t, n, r, o) {
        var i = e.memoizedProps;
        if (i !== r) {
            var a = function(e, t, n, r, o, i) {
                var a = i;
                if (typeof r.children != typeof n.children && ("string" == typeof r.children || "number" == typeof r.children)) {
                    var s = "" + r.children
                      , u = Jl(a.ancestorInfo, t);
                    Xl(null, s, u)
                }
                return $l(e, t, n, r)
            }(t.stateNode, n, i, r, 0, Bp());
            t.updateQueue = a,
            a && Iy(t)
        }
    }
    ,
    ky = function(e, t, n, r) {
        n !== r && Iy(t)
    }
    ;
    var Uy = null;
    Uy = new Set;
    var jy = !1
      , zy = !1
      , By = "function" == typeof WeakSet ? WeakSet : Set
      , qy = null
      , Wy = null
      , Vy = null;
    var $y = function(e, t) {
        if (t.props = e.memoizedProps,
        t.state = e.memoizedState,
        e.mode & si)
            try {
                og(),
                t.componentWillUnmount()
            } finally {
                ng(e)
            }
        else
            t.componentWillUnmount()
    };
    function Hy(e, t) {
        try {
            nv(rh, e)
        } catch (n) {
            E_(e, t, n)
        }
    }
    function Qy(e, t, n) {
        try {
            $y(e, n)
        } catch (r) {
            E_(e, t, r)
        }
    }
    function Yy(e, t) {
        try {
            av(e)
        } catch (n) {
            E_(e, t, n)
        }
    }
    function Gy(e, t) {
        var n = e.ref;
        if (null !== n)
            if ("function" == typeof n) {
                var r;
                try {
                    if (V && $ && e.mode & si)
                        try {
                            og(),
                            r = n(null)
                        } finally {
                            ng(e)
                        }
                    else
                        r = n(null)
                } catch (o) {
                    E_(e, t, o)
                }
                "function" == typeof r && i("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", mt(e))
            } else
                n.current = null
    }
    function Ky(e, t, n) {
        try {
            n()
        } catch (r) {
            E_(e, t, r)
        }
    }
    var Xy = !1;
    function Jy(e, t) {
        pc(e.containerInfo),
        qy = t,
        function() {
            for (; null !== qy; ) {
                var e = qy
                  , t = e.child;
                (e.subtreeFlags & fo) !== jr && null !== t ? (t.return = e,
                qy = t) : Zy()
            }
        }();
        var n = Xy;
        return Xy = !1,
        n
    }
    function Zy() {
        for (; null !== qy; ) {
            var e = qy;
            St(e);
            try {
                ev(e)
            } catch (n) {
                E_(e, e.return, n)
            }
            wt();
            var t = e.sibling;
            if (null !== t)
                return t.return = e.return,
                void (qy = t);
            qy = e.return
        }
    }
    function ev(e) {
        var t, n = e.alternate;
        if ((e.flags & Gr) !== jr) {
            switch (St(e),
            e.tag) {
            case s:
            case v:
            case S:
                break;
            case u:
                if (null !== n) {
                    var r = n.memoizedProps
                      , o = n.memoizedState
                      , a = e.stateNode;
                    e.type !== e.elementType || Wg || (a.props !== e.memoizedProps && i("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(e) || "instance"),
                    a.state !== e.memoizedState && i("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(e) || "instance"));
                    var l = a.getSnapshotBeforeUpdate(e.elementType === e.type ? r : sg(e.type, r), o)
                      , h = Uy;
                    void 0 !== l || h.has(e.type) || (h.add(e.type),
                    i("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", mt(e))),
                    a.__reactInternalSnapshotBeforeUpdate = l
                }
                break;
            case c:
                var m = e.stateNode;
                (t = m.containerInfo).nodeType === yn ? t.textContent = "" : t.nodeType === _n && t.documentElement && t.removeChild(t.documentElement);
                break;
            case f:
            case p:
            case d:
            case E:
                break;
            default:
                throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")
            }
            wt()
        }
    }
    function tv(e, t, n) {
        var r, o = t.updateQueue, i = null !== o ? o.lastEffect : null;
        if (null !== i) {
            var a = i.next
              , s = a;
            do {
                if ((s.tag & e) === e) {
                    var u = s.destroy;
                    s.destroy = void 0,
                    void 0 !== u && ((e & oh) !== eh ? (r = t,
                    null !== qo && "function" == typeof qo.markComponentPassiveEffectUnmountStarted && qo.markComponentPassiveEffectUnmountStarted(r)) : (e & rh) !== eh && Jo(t),
                    (e & nh) !== eh && q_(!0),
                    Ky(t, n, u),
                    (e & nh) !== eh && q_(!1),
                    (e & oh) !== eh ? null !== qo && "function" == typeof qo.markComponentPassiveEffectUnmountStopped && qo.markComponentPassiveEffectUnmountStopped() : (e & rh) !== eh && Zo())
                }
                s = s.next
            } while (s !== a)
        }
    }
    function nv(e, t) {
        var n, r = t.updateQueue, o = null !== r ? r.lastEffect : null;
        if (null !== o) {
            var a = o.next
              , s = a;
            do {
                if ((s.tag & e) === e) {
                    (e & oh) !== eh ? (n = t,
                    null !== qo && "function" == typeof qo.markComponentPassiveEffectMountStarted && qo.markComponentPassiveEffectMountStarted(n)) : (e & rh) !== eh && Xo(t);
                    var u = s.create;
                    (e & nh) !== eh && q_(!0),
                    s.destroy = u(),
                    (e & nh) !== eh && q_(!1),
                    (e & oh) !== eh ? null !== qo && "function" == typeof qo.markComponentPassiveEffectMountStopped && qo.markComponentPassiveEffectMountStopped() : (e & rh) !== eh && null !== qo && "function" == typeof qo.markComponentLayoutEffectMountStopped && qo.markComponentLayoutEffectMountStopped();
                    var l = s.destroy;
                    if (void 0 !== l && "function" != typeof l) {
                        var c = void 0;
                        i("%s must not return anything besides a function, which is used for clean-up.%s", c = (s.tag & rh) !== jr ? "useLayoutEffect" : (s.tag & nh) !== jr ? "useInsertionEffect" : "useEffect", null === l ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : "function" == typeof l.then ? "\n\nIt looks like you wrote " + c + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + c + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching" : " You returned: " + l)
                    }
                }
                s = s.next
            } while (s !== a)
        }
    }
    function rv(e, t) {
        if ((t.flags & qr) !== jr && t.tag === b) {
            var n = t.stateNode.passiveEffectDuration
              , r = t.memoizedProps
              , o = r.id
              , i = r.onPostCommit
              , a = Xm()
              , s = null === t.alternate ? "mount" : "update";
            Km() && (s = "nested-update"),
            "function" == typeof i && i(o, s, n, a);
            var u = t.return;
            e: for (; null !== u; ) {
                switch (u.tag) {
                case c:
                    u.stateNode.passiveEffectDuration += n;
                    break e;
                case b:
                    u.stateNode.passiveEffectDuration += n;
                    break e
                }
                u = u.return
            }
        }
    }
    function ov(e, t, n, r) {
        if ((n.flags & ho) !== jr)
            switch (n.tag) {
            case s:
            case v:
            case S:
                if (!zy)
                    if (n.mode & si)
                        try {
                            og(),
                            nv(rh | th, n)
                        } finally {
                            ng(n)
                        }
                    else
                        nv(rh | th, n);
                break;
            case u:
                var o = n.stateNode;
                if (n.flags & qr && !zy)
                    if (null === t)
                        if (n.type !== n.elementType || Wg || (o.props !== n.memoizedProps && i("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(n) || "instance"),
                        o.state !== n.memoizedState && i("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(n) || "instance")),
                        n.mode & si)
                            try {
                                og(),
                                o.componentDidMount()
                            } finally {
                                ng(n)
                            }
                        else
                            o.componentDidMount();
                    else {
                        var a = n.elementType === n.type ? t.memoizedProps : sg(n.type, t.memoizedProps)
                          , l = t.memoizedState;
                        if (n.type !== n.elementType || Wg || (o.props !== n.memoizedProps && i("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(n) || "instance"),
                        o.state !== n.memoizedState && i("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(n) || "instance")),
                        n.mode & si)
                            try {
                                og(),
                                o.componentDidUpdate(a, l, o.__reactInternalSnapshotBeforeUpdate)
                            } finally {
                                ng(n)
                            }
                        else
                            o.componentDidUpdate(a, l, o.__reactInternalSnapshotBeforeUpdate)
                    }
                var h = n.updateQueue;
                null !== h && (n.type !== n.elementType || Wg || (o.props !== n.memoizedProps && i("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", mt(n) || "instance"),
                o.state !== n.memoizedState && i("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", mt(n) || "instance")),
                Pp(0, h, o));
                break;
            case c:
                var m = n.updateQueue;
                if (null !== m) {
                    var g = null;
                    if (null !== n.child)
                        switch (n.child.tag) {
                        case f:
                        case u:
                            g = n.child.stateNode
                        }
                    Pp(0, m, g)
                }
                break;
            case f:
                var y = n.stateNode;
                if (null === t && n.flags & qr)
                    !function(e, t, n) {
                        switch (t) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return void (n.autoFocus && e.focus());
                        case "img":
                            n.src && (e.src = n.src)
                        }
                    }(y, n.type, n.memoizedProps);
                break;
            case p:
            case d:
                break;
            case b:
                var w = n.memoizedProps
                  , k = w.onCommit
                  , x = w.onRender
                  , C = n.stateNode.effectDuration
                  , O = Xm()
                  , P = null === t ? "mount" : "update";
                Km() && (P = "nested-update"),
                "function" == typeof x && x(n.memoizedProps.id, P, n.actualDuration, n.treeBaseDuration, n.actualStartTime, O),
                "function" == typeof k && k(n.memoizedProps.id, P, C, O),
                L = n,
                Db.push(L),
                Mb || (Mb = !0,
                j_(Lo, (function() {
                    return w_(),
                    null
                }
                )));
                var N = n.return;
                e: for (; null !== N; ) {
                    switch (N.tag) {
                    case c:
                        N.stateNode.effectDuration += C;
                        break e;
                    case b:
                        N.stateNode.effectDuration += C;
                        break e
                    }
                    N = N.return
                }
                break;
            case _:
                !function(e, t) {
                    var n = t.memoizedState;
                    if (null === n) {
                        var r = t.alternate;
                        if (null !== r) {
                            var o = r.memoizedState;
                            if (null !== o) {
                                var i = o.dehydrated;
                                null !== i && function(e) {
                                    rs(e)
                                }(i)
                            }
                        }
                    }
                }(0, n);
                break;
            case T:
            case E:
            case R:
            case I:
            case M:
            case D:
                break;
            default:
                throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")
            }
        var L;
        zy || n.flags & Yr && av(n)
    }
    function iv(e) {
        switch (e.tag) {
        case s:
        case v:
        case S:
            if (e.mode & si)
                try {
                    og(),
                    Hy(e, e.return)
                } finally {
                    ng(e)
                }
            else
                Hy(e, e.return);
            break;
        case u:
            var t = e.stateNode;
            "function" == typeof t.componentDidMount && function(e, t, n) {
                try {
                    n.componentDidMount()
                } catch (r) {
                    E_(e, t, r)
                }
            }(e, e.return, t),
            Yy(e, e.return);
            break;
        case f:
            Yy(e, e.return)
        }
    }
    function av(e) {
        var t = e.ref;
        if (null !== t) {
            var n, r = e.stateNode;
            if (e.tag,
            n = r,
            "function" == typeof t) {
                var o;
                if (e.mode & si)
                    try {
                        og(),
                        o = t(n)
                    } finally {
                        ng(e)
                    }
                else
                    o = t(n);
                "function" == typeof o && i("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", mt(e))
            } else
                t.hasOwnProperty("current") || i("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", mt(e)),
                t.current = n
        }
    }
    function sv(e) {
        var t, n = e.alternate;
        if (null !== n && (e.alternate = null,
        sv(n)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === f) {
            var r = e.stateNode;
            null !== r && (delete (t = r)[Lc],
            delete t[Ac],
            delete t[Uc],
            delete t[jc],
            delete t[zc])
        }
        e.stateNode = null,
        e._debugOwner = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function uv(e) {
        return e.tag === f || e.tag === c || e.tag === d
    }
    function lv(e) {
        var t = e;
        e: for (; ; ) {
            for (; null === t.sibling; ) {
                if (null === t.return || uv(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== f && t.tag !== p && t.tag !== C; ) {
                if (t.flags & Br)
                    continue e;
                if (null === t.child || t.tag === d)
                    continue e;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & Br))
                return t.stateNode
        }
    }
    function cv(e) {
        var t = function(e) {
            for (var t = e.return; null !== t; ) {
                if (uv(t))
                    return t;
                t = t.return
            }
            throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")
        }(e);
        switch (t.tag) {
        case f:
            var n = t.stateNode;
            t.flags & Vr && (kc(n),
            t.flags &= ~Vr),
            fv(e, lv(e), n);
            break;
        case c:
        case d:
            var r = t.stateNode.containerInfo;
            dv(e, lv(e), r);
            break;
        default:
            throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")
        }
    }
    function dv(e, t, n) {
        var r = e.tag;
        if (r === f || r === p) {
            var o = e.stateNode;
            t ? function(e, t, n) {
                e.nodeType === bn ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n)
            }(n, o, t) : function(e, t) {
                var n;
                e.nodeType === bn ? (n = e.parentNode).insertBefore(t, e) : (n = e).appendChild(t),
                null == e._reactRootContainer && null === n.onclick && Wl(n)
            }(n, o)
        } else if (r === d)
            ;
        else {
            var i = e.child;
            if (null !== i) {
                dv(i, t, n);
                for (var a = i.sibling; null !== a; )
                    dv(a, t, n),
                    a = a.sibling
            }
        }
    }
    function fv(e, t, n) {
        var r = e.tag;
        if (r === f || r === p) {
            var o = e.stateNode;
            t ? function(e, t, n) {
                e.insertBefore(t, n)
            }(n, o, t) : function(e, t) {
                e.appendChild(t)
            }(n, o)
        } else if (r === d)
            ;
        else {
            var i = e.child;
            if (null !== i) {
                fv(i, t, n);
                for (var a = i.sibling; null !== a; )
                    fv(a, t, n),
                    a = a.sibling
            }
        }
    }
    var pv = null
      , hv = !1;
    function mv(e, t, n) {
        var r, o, i = t;
        e: for (; null !== i; ) {
            switch (i.tag) {
            case f:
                pv = i.stateNode,
                hv = !1;
                break e;
            case c:
            case d:
                pv = i.stateNode.containerInfo,
                hv = !0;
                break e
            }
            i = i.return
        }
        if (null === pv)
            throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        yv(e, t, n),
        pv = null,
        hv = !1,
        null !== (o = (r = n).alternate) && (o.return = null),
        r.return = null
    }
    function gv(e, t, n) {
        for (var r = n.child; null !== r; )
            yv(e, t, r),
            r = r.sibling
    }
    function yv(e, t, n) {
        switch (function(e) {
            if (Bo && "function" == typeof Bo.onCommitFiberUnmount)
                try {
                    Bo.onCommitFiberUnmount(zo, e)
                } catch (t) {
                    Wo || (Wo = !0,
                    i("React instrumentation encountered an error: %s", t))
                }
        }(n),
        n.tag) {
        case f:
            zy || Gy(n, t);
        case p:
            var r = pv
              , o = hv;
            return pv = null,
            gv(e, t, n),
            hv = o,
            void (null !== (pv = r) && (hv ? (E = pv,
            T = n.stateNode,
            E.nodeType === bn ? E.parentNode.removeChild(T) : E.removeChild(T)) : function(e, t) {
                e.removeChild(t)
            }(pv, n.stateNode)));
        case C:
            return void (null !== pv && (hv ? function(e, t) {
                e.nodeType === bn ? xc(e.parentNode, t) : e.nodeType === yn && xc(e, t),
                rs(e)
            }(pv, n.stateNode) : xc(pv, n.stateNode)));
        case d:
            var a = pv
              , l = hv;
            return pv = n.stateNode.containerInfo,
            hv = !0,
            gv(e, t, n),
            pv = a,
            void (hv = l);
        case s:
        case v:
        case w:
        case S:
            if (!zy) {
                var c = n.updateQueue;
                if (null !== c) {
                    var h = c.lastEffect;
                    if (null !== h) {
                        var m = h.next
                          , g = m;
                        do {
                            var y = g
                              , b = y.destroy
                              , _ = y.tag;
                            void 0 !== b && ((_ & nh) !== eh ? Ky(n, t, b) : (_ & rh) !== eh && (Jo(n),
                            n.mode & si ? (og(),
                            Ky(n, t, b),
                            ng(n)) : Ky(n, t, b),
                            Zo())),
                            g = g.next
                        } while (g !== m)
                    }
                }
            }
            return void gv(e, t, n);
        case u:
            if (!zy) {
                Gy(n, t);
                var k = n.stateNode;
                "function" == typeof k.componentWillUnmount && Qy(n, t, k)
            }
            return void gv(e, t, n);
        case R:
            return void gv(e, t, n);
        case I:
            if (n.mode & ai) {
                var x = zy;
                zy = x || null !== n.memoizedState,
                gv(e, t, n),
                zy = x
            } else
                gv(e, t, n);
            break;
        default:
            return void gv(e, t, n)
        }
        var E, T
    }
    function vv(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new By),
            t.forEach((function(t) {
                var r = O_.bind(null, e, t);
                if (!n.has(t)) {
                    if (n.add(t),
                    Vo) {
                        if (null === Wy || null === Vy)
                            throw Error("Expected finished root and lanes to be set. This is a bug in React.");
                        F_(Vy, Wy)
                    }
                    t.then(r, r)
                }
            }
            ))
        }
    }
    function bv(e, t, n) {
        var r = t.deletions;
        if (null !== r)
            for (var o = 0; o < r.length; o++) {
                var i = r[o];
                try {
                    mv(e, t, i)
                } catch (u) {
                    E_(i, t, u)
                }
            }
        var a = yt;
        if (t.subtreeFlags & po)
            for (var s = t.child; null !== s; )
                St(s),
                _v(s, e),
                s = s.sibling;
        St(a)
    }
    function _v(e, t, n) {
        var r = e.alternate
          , o = e.flags;
        switch (e.tag) {
        case s:
        case v:
        case w:
        case S:
            if (bv(t, e),
            wv(e),
            o & qr) {
                try {
                    tv(nh | th, e, e.return),
                    nv(nh | th, e)
                } catch (A) {
                    E_(e, e.return, A)
                }
                if (e.mode & si) {
                    try {
                        og(),
                        tv(rh | th, e, e.return)
                    } catch (A) {
                        E_(e, e.return, A)
                    }
                    ng(e)
                } else
                    try {
                        tv(rh | th, e, e.return)
                    } catch (A) {
                        E_(e, e.return, A)
                    }
            }
            return;
        case u:
            return bv(t, e),
            wv(e),
            void (o & Yr && null !== r && Gy(r, r.return));
        case f:
            if (bv(t, e),
            wv(e),
            o & Yr && null !== r && Gy(r, r.return),
            e.flags & Vr) {
                var i = e.stateNode;
                try {
                    kc(i)
                } catch (A) {
                    E_(e, e.return, A)
                }
            }
            if (o & qr) {
                var a = e.stateNode;
                if (null != a) {
                    var l = e.memoizedProps
                      , h = null !== r ? r.memoizedProps : l
                      , m = e.type
                      , g = e.updateQueue;
                    if (e.updateQueue = null,
                    null !== g)
                        try {
                            !function(e, t, n, r, o) {
                                Hl(e, t, n, r, o),
                                Gc(e, o)
                            }(a, g, m, h, l)
                        } catch (A) {
                            E_(e, e.return, A)
                        }
                }
            }
            return;
        case p:
            if (bv(t, e),
            wv(e),
            o & qr) {
                if (null === e.stateNode)
                    throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                var y = e.stateNode
                  , b = e.memoizedProps;
                null !== r && r.memoizedProps;
                try {
                    !function(e, t, n) {
                        e.nodeValue = n
                    }(y, 0, b)
                } catch (A) {
                    E_(e, e.return, A)
                }
            }
            return;
        case c:
            if (bv(t, e),
            wv(e),
            o & qr)
                if (null !== r)
                    if (r.memoizedState.isDehydrated)
                        try {
                            rs(t.containerInfo)
                        } catch (A) {
                            E_(e, e.return, A)
                        }
            return;
        case d:
            return bv(t, e),
            void wv(e);
        case _:
            bv(t, e),
            wv(e);
            var k = e.child;
            if (k.flags & Jr) {
                var x = k.stateNode
                  , E = null !== k.memoizedState;
                if (x.isHidden = E,
                E)
                    null !== k.alternate && null !== k.alternate.memoizedState || (wb = Mo())
            }
            if (o & qr) {
                try {
                    !function(e) {
                        e.memoizedState
                    }(e)
                } catch (A) {
                    E_(e, e.return, A)
                }
                vv(e)
            }
            return;
        case I:
            var C = null !== r && null !== r.memoizedState;
            if (e.mode & ai) {
                var O = zy;
                zy = O || C,
                bv(t, e),
                zy = O
            } else
                bv(t, e);
            if (wv(e),
            o & Jr) {
                var P = e.stateNode
                  , N = null !== e.memoizedState
                  , D = e;
                if (P.isHidden = N,
                N && !C && (D.mode & ai) !== ii) {
                    qy = D;
                    for (var L = D.child; null !== L; )
                        qy = L,
                        Ev(L),
                        L = L.sibling
                }
                !function(e, t) {
                    for (var n = null, r = e; ; ) {
                        if (r.tag === f) {
                            if (null === n) {
                                n = r;
                                try {
                                    var o = r.stateNode;
                                    t ? Ec(o) : Cc(r.stateNode, r.memoizedProps)
                                } catch (A) {
                                    E_(e, e.return, A)
                                }
                            }
                        } else if (r.tag === p) {
                            if (null === n)
                                try {
                                    var i = r.stateNode;
                                    t ? i.nodeValue = "" : Tc(i, r.memoizedProps)
                                } catch (A) {
                                    E_(e, e.return, A)
                                }
                        } else if ((r.tag !== I && r.tag !== M || null === r.memoizedState || r === e) && null !== r.child) {
                            r.child.return = r,
                            r = r.child;
                            continue
                        }
                        if (r === e)
                            return;
                        for (; null === r.sibling; ) {
                            if (null === r.return || r.return === e)
                                return;
                            n === r && (n = null),
                            r = r.return
                        }
                        n === r && (n = null),
                        r.sibling.return = r.return,
                        r = r.sibling
                    }
                }(D, N)
            }
            return;
        case T:
            return bv(t, e),
            wv(e),
            void (o & qr && vv(e));
        case R:
            return;
        default:
            return bv(t, e),
            void wv(e)
        }
    }
    function wv(e) {
        var t = e.flags;
        if (t & Br) {
            try {
                cv(e)
            } catch (n) {
                E_(e, e.return, n)
            }
            e.flags &= ~Br
        }
        t & Xr && (e.flags &= ~Xr)
    }
    function Sv(e, t, n) {
        Wy = n,
        Vy = t,
        qy = e,
        kv(e, t, n),
        Wy = null,
        Vy = null
    }
    function kv(e, t, n) {
        for (var r = (e.mode & ai) !== ii; null !== qy; ) {
            var o = qy
              , i = o.child;
            if (o.tag === I && r) {
                var a = null !== o.memoizedState || jy;
                if (a) {
                    xv(e, t, n);
                    continue
                }
                var s = o.alternate
                  , u = null !== s && null !== s.memoizedState
                  , l = jy
                  , c = zy;
                jy = a,
                (zy = u || zy) && !c && (qy = o,
                Tv(o));
                for (var d = i; null !== d; )
                    qy = d,
                    kv(d, t, n),
                    d = d.sibling;
                qy = o,
                jy = l,
                zy = c,
                xv(e, t, n)
            } else
                (o.subtreeFlags & ho) !== jr && null !== i ? (i.return = o,
                qy = i) : xv(e, t, n)
        }
    }
    function xv(e, t, n) {
        for (; null !== qy; ) {
            var r = qy;
            if ((r.flags & ho) !== jr) {
                var o = r.alternate;
                St(r);
                try {
                    ov(0, o, r)
                } catch (a) {
                    E_(r, r.return, a)
                }
                wt()
            }
            if (r === e)
                return void (qy = null);
            var i = r.sibling;
            if (null !== i)
                return i.return = r.return,
                void (qy = i);
            qy = r.return
        }
    }
    function Ev(e) {
        for (; null !== qy; ) {
            var t = qy
              , n = t.child;
            switch (t.tag) {
            case s:
            case v:
            case w:
            case S:
                if (t.mode & si)
                    try {
                        og(),
                        tv(rh, t, t.return)
                    } finally {
                        ng(t)
                    }
                else
                    tv(rh, t, t.return);
                break;
            case u:
                Gy(t, t.return);
                var r = t.stateNode;
                "function" == typeof r.componentWillUnmount && Qy(t, t.return, r);
                break;
            case f:
                Gy(t, t.return);
                break;
            case I:
                if (null !== t.memoizedState) {
                    Cv(e);
                    continue
                }
            }
            null !== n ? (n.return = t,
            qy = n) : Cv(e)
        }
    }
    function Cv(e) {
        for (; null !== qy; ) {
            var t = qy;
            if (t === e)
                return void (qy = null);
            var n = t.sibling;
            if (null !== n)
                return n.return = t.return,
                void (qy = n);
            qy = t.return
        }
    }
    function Tv(e) {
        for (; null !== qy; ) {
            var t = qy
              , n = t.child;
            if (t.tag === I)
                if (null !== t.memoizedState) {
                    Rv(e);
                    continue
                }
            null !== n ? (n.return = t,
            qy = n) : Rv(e)
        }
    }
    function Rv(e) {
        for (; null !== qy; ) {
            var t = qy;
            St(t);
            try {
                iv(t)
            } catch (r) {
                E_(t, t.return, r)
            }
            if (wt(),
            t === e)
                return void (qy = null);
            var n = t.sibling;
            if (null !== n)
                return n.return = t.return,
                void (qy = n);
            qy = t.return
        }
    }
    function Ov(e, t, n, r) {
        qy = t,
        function(e, t, n, r) {
            for (; null !== qy; ) {
                var o = qy
                  , i = o.child;
                (o.subtreeFlags & mo) !== jr && null !== i ? (i.return = o,
                qy = i) : Iv(e, t, n, r)
            }
        }(t, e, n, r)
    }
    function Iv(e, t, n, r) {
        for (; null !== qy; ) {
            var o = qy;
            if ((o.flags & Kr) !== jr) {
                St(o);
                try {
                    Mv(t, o, n, r)
                } catch (a) {
                    E_(o, o.return, a)
                }
                wt()
            }
            if (o === e)
                return void (qy = null);
            var i = o.sibling;
            if (null !== i)
                return i.return = o.return,
                void (qy = i);
            qy = o.return
        }
    }
    function Mv(e, t, n, r) {
        switch (t.tag) {
        case s:
        case v:
        case S:
            if (t.mode & si) {
                ig();
                try {
                    nv(oh | th, t)
                } finally {
                    rg(t)
                }
            } else
                nv(oh | th, t)
        }
    }
    function Pv(e) {
        qy = e,
        function() {
            for (; null !== qy; ) {
                var e = qy
                  , t = e.child;
                if ((qy.flags & Wr) !== jr) {
                    var n = e.deletions;
                    if (null !== n) {
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            qy = o,
                            Lv(o, e)
                        }
                        var i = e.alternate;
                        if (null !== i) {
                            var a = i.child;
                            if (null !== a) {
                                i.child = null;
                                do {
                                    var s = a.sibling;
                                    a.sibling = null,
                                    a = s
                                } while (null !== a)
                            }
                        }
                        qy = e
                    }
                }
                (e.subtreeFlags & mo) !== jr && null !== t ? (t.return = e,
                qy = t) : Nv()
            }
        }()
    }
    function Nv() {
        for (; null !== qy; ) {
            var e = qy;
            (e.flags & Kr) !== jr && (St(e),
            Dv(e),
            wt());
            var t = e.sibling;
            if (null !== t)
                return t.return = e.return,
                void (qy = t);
            qy = e.return
        }
    }
    function Dv(e) {
        switch (e.tag) {
        case s:
        case v:
        case S:
            e.mode & si ? (ig(),
            tv(oh | th, e, e.return),
            rg(e)) : tv(oh | th, e, e.return)
        }
    }
    function Lv(e, t) {
        for (; null !== qy; ) {
            var n = qy;
            St(n),
            Fv(n, t),
            wt();
            var r = n.child;
            null !== r ? (r.return = n,
            qy = r) : Av(e)
        }
    }
    function Av(e) {
        for (; null !== qy; ) {
            var t = qy
              , n = t.sibling
              , r = t.return;
            if (sv(t),
            t === e)
                return void (qy = null);
            if (null !== n)
                return n.return = r,
                void (qy = n);
            qy = r
        }
    }
    function Fv(e, t) {
        switch (e.tag) {
        case s:
        case v:
        case S:
            e.mode & si ? (ig(),
            tv(oh, e, t),
            rg(e)) : tv(oh, e, t)
        }
    }
    function Uv(e) {
        switch (e.tag) {
        case s:
        case v:
        case S:
            try {
                nv(rh | th, e)
            } catch (n) {
                E_(e, e.return, n)
            }
            break;
        case u:
            var t = e.stateNode;
            try {
                t.componentDidMount()
            } catch (n) {
                E_(e, e.return, n)
            }
        }
    }
    function jv(e) {
        switch (e.tag) {
        case s:
        case v:
        case S:
            try {
                nv(oh | th, e)
            } catch (t) {
                E_(e, e.return, t)
            }
        }
    }
    function zv(e) {
        switch (e.tag) {
        case s:
        case v:
        case S:
            try {
                tv(rh | th, e, e.return)
            } catch (n) {
                E_(e, e.return, n)
            }
            break;
        case u:
            var t = e.stateNode;
            "function" == typeof t.componentWillUnmount && Qy(e, e.return, t)
        }
    }
    function Bv(e) {
        switch (e.tag) {
        case s:
        case v:
        case S:
            try {
                tv(oh | th, e, e.return)
            } catch (t) {
                E_(e, e.return, t)
            }
        }
    }
    if ("function" == typeof Symbol && Symbol.for) {
        var qv = Symbol.for;
        qv("selector.component"),
        qv("selector.has_pseudo_class"),
        qv("selector.role"),
        qv("selector.test_id"),
        qv("selector.text")
    }
    var Wv = [];
    var Vv = n.ReactCurrentActQueue;
    function $v() {
        var e = "undefined" != typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return e || null === Vv.current || i("The current testing environment is not configured to support act(...)"),
        e
    }
    var Hv = Math.ceil
      , Qv = n.ReactCurrentDispatcher
      , Yv = n.ReactCurrentOwner
      , Gv = n.ReactCurrentBatchConfig
      , Kv = n.ReactCurrentActQueue
      , Xv = 0
      , Jv = 1
      , Zv = 2
      , eb = 4
      , tb = 0
      , nb = 1
      , rb = 2
      , ob = 3
      , ib = 4
      , ab = 5
      , sb = 6
      , ub = Xv
      , lb = null
      , cb = null
      , db = hi
      , fb = hi
      , pb = od(hi)
      , hb = tb
      , mb = null
      , gb = hi
      , yb = hi
      , vb = hi
      , bb = null
      , _b = null
      , wb = 0
      , Sb = 500
      , kb = 1 / 0
      , xb = 500
      , Eb = null;
    function Cb() {
        kb = Mo() + xb
    }
    function Tb() {
        return kb
    }
    var Rb = !1
      , Ob = null
      , Ib = null
      , Mb = !1
      , Pb = null
      , Nb = hi
      , Db = []
      , Lb = null
      , Ab = 50
      , Fb = 0
      , Ub = null
      , jb = !1
      , zb = !1
      , Bb = 50
      , qb = 0
      , Wb = null
      , Vb = Ji
      , $b = hi
      , Hb = !1;
    function Qb() {
        return lb
    }
    function Yb() {
        return (ub & (Zv | eb)) !== Xv ? Mo() : Vb !== Ji ? Vb : Vb = Mo()
    }
    function Gb(e) {
        if ((e.mode & ai) === ii)
            return gi;
        if ((ub & Zv) !== Xv && db !== hi)
            return da(db);
        if (_f.transition !== wf) {
            if (null !== Gv.transition) {
                var t = Gv.transition;
                t._updatedFibers || (t._updatedFibers = new Set),
                t._updatedFibers.add(e)
            }
            return $b === mi && ($b = la()),
            $b
        }
        var n, r = La();
        return r !== mi ? r : void 0 === (n = window.event) ? Pa : fs(n.type)
    }
    function Kb(e) {
        var t;
        return (e.mode & ai) === ii ? gi : (t = ea,
        ((ea <<= 1) & ji) === hi && (ea = zi),
        t)
    }
    function Xb(e, t, n, r) {
        !function() {
            if (Fb > Ab)
                throw Fb = 0,
                Ub = null,
                new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
            qb > Bb && (qb = 0,
            Wb = null,
            i("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))
        }(),
        Hb && i("useInsertionEffect must not schedule updates."),
        jb && (zb = !0),
        _a(e, n, r),
        (ub & Zv) !== hi && e === lb ? function(e) {
            if (vt && !xm)
                switch (e.tag) {
                case s:
                case v:
                case S:
                    var t = cb && mt(cb) || "Unknown"
                      , n = t;
                    if (!L_.has(n))
                        L_.add(n),
                        i("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", mt(e) || "Unknown", t, t);
                    break;
                case u:
                    A_ || (i("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),
                    A_ = !0)
                }
        }(t) : (Vo && ka(e, t, n),
        function(e) {
            if (e.mode & ai) {
                if (!$v())
                    return
            } else {
                if (t = "undefined" != typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : void 0,
                "undefined" == typeof jest || !1 === t)
                    return;
                if (ub !== Xv)
                    return;
                if (e.tag !== s && e.tag !== v && e.tag !== S)
                    return
            }
            var t;
            if (null === Kv.current) {
                var n = yt;
                try {
                    St(e),
                    i("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", mt(e))
                } finally {
                    n ? St(e) : wt()
                }
            }
        }(t),
        e === lb && ((ub & Zv) === Xv && (yb = ga(yb, n)),
        hb === ib && n_(e, db)),
        Jb(e, r),
        n !== gi || ub !== Xv || (t.mode & ai) !== ii || Kv.isBatchingLegacy || (Cb(),
        Od()))
    }
    function Jb(e, t) {
        var n = e.callbackNode;
        !function(e, t) {
            for (var n = e.pendingLanes, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, a = n; a > 0; ) {
                var s = fa(a)
                  , u = 1 << s
                  , l = i[s];
                l === Ji ? (u & r) !== hi && (u & o) === hi || (i[s] = ra(u, t)) : l <= t && (e.expiredLanes |= u),
                a &= ~u
            }
        }(e, t);
        var r = na(e, e === lb ? db : hi);
        if (r === hi)
            return null !== n && z_(n),
            e.callbackNode = null,
            void (e.callbackPriority = mi);
        var o = ca(r)
          , a = e.callbackPriority;
        if (a !== o || null !== Kv.current && n !== U_) {
            var s, u;
            if (null != n && z_(n),
            o === gi)
                e.tag === kd ? (null !== Kv.isBatchingLegacy && (Kv.didScheduleLegacyUpdate = !0),
                u = r_.bind(null, e),
                Cd = !0,
                Rd(u)) : Rd(r_.bind(null, e)),
                null !== Kv.current ? Kv.current.push(Id) : wc((function() {
                    (ub & (Zv | eb)) === Xv && Id()
                }
                )),
                s = null;
            else {
                var l;
                switch (Ua(r)) {
                case Ia:
                    l = No;
                    break;
                case Ma:
                    l = Do;
                    break;
                case Pa:
                    l = Lo;
                    break;
                case Na:
                    l = Fo;
                    break;
                default:
                    l = Lo
                }
                s = j_(l, Zb.bind(null, e))
            }
            e.callbackPriority = o,
            e.callbackNode = s
        } else
            null == n && a !== gi && i("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.")
    }
    function Zb(e, t) {
        if (Ym = !1,
        Gm = !1,
        Vb = Ji,
        $b = hi,
        (ub & (Zv | eb)) !== Xv)
            throw new Error("Should not already be working.");
        var n = e.callbackNode;
        if (w_() && e.callbackNode !== n)
            return null;
        var r = na(e, e === lb ? db : hi);
        if (r === hi)
            return null;
        var o = !sa(0, r) && !function(e, t) {
            return (t & e.expiredLanes) !== hi
        }(e, r) && !t
          , i = o ? function(e, t) {
            var n = ub;
            ub |= Zv;
            var r = d_();
            if (lb !== e || db !== t) {
                if (Vo) {
                    var o = e.memoizedUpdaters;
                    o.size > 0 && (F_(e, db),
                    o.clear()),
                    xa(e, t)
                }
                Eb = null,
                Cb(),
                l_(e, t)
            }
            ni(t);
            for (; ; )
                try {
                    y_();
                    break
                } catch (i) {
                    c_(e, i)
                }
            return Zf(),
            f_(r),
            ub = n,
            null !== cb ? (null !== qo && "function" == typeof qo.markRenderYielded && qo.markRenderYielded(),
            tb) : (ri(),
            lb = null,
            db = hi,
            hb)
        }(e, r) : m_(e, r);
        if (i !== tb) {
            if (i === rb) {
                var a = oa(e);
                a !== hi && (r = a,
                i = e_(e, a))
            }
            if (i === nb) {
                var s = mb;
                throw l_(e, hi),
                n_(e, r),
                Jb(e, Mo()),
                s
            }
            if (i === sb)
                n_(e, r);
            else {
                var u = !sa(0, r)
                  , l = e.current.alternate;
                if (u && !function(e) {
                    var t = e;
                    for (; ; ) {
                        if (t.flags & Zr) {
                            var n = t.updateQueue;
                            if (null !== n) {
                                var r = n.stores;
                                if (null !== r)
                                    for (var o = 0; o < r.length; o++) {
                                        var i = r[o]
                                          , a = i.getSnapshot
                                          , s = i.value;
                                        try {
                                            if (!Cu(a(), s))
                                                return !1
                                        } catch (l) {
                                            return !1
                                        }
                                    }
                            }
                        }
                        var u = t.child;
                        if (t.subtreeFlags & Zr && null !== u)
                            u.return = t,
                            t = u;
                        else {
                            if (t === e)
                                return !0;
                            for (; null === t.sibling; ) {
                                if (null === t.return || t.return === e)
                                    return !0;
                                t = t.return
                            }
                            t.sibling.return = t.return,
                            t = t.sibling
                        }
                    }
                    return !0
                }(l)) {
                    if ((i = m_(e, r)) === rb) {
                        var c = oa(e);
                        c !== hi && (r = c,
                        i = e_(e, c))
                    }
                    if (i === nb) {
                        var d = mb;
                        throw l_(e, hi),
                        n_(e, r),
                        Jb(e, Mo()),
                        d
                    }
                }
                e.finishedWork = l,
                e.finishedLanes = r,
                function(e, t, n) {
                    switch (t) {
                    case tb:
                    case nb:
                        throw new Error("Root did not complete. This is a bug in React.");
                    case rb:
                        __(e, _b, Eb);
                        break;
                    case ob:
                        if (n_(e, n),
                        aa(n) && !B_()) {
                            var r = wb + Sb - Mo();
                            if (r > 10) {
                                if (na(e, hi) !== hi)
                                    break;
                                var o = e.suspendedLanes;
                                if (!ma(o, n)) {
                                    Yb(),
                                    wa(e, o);
                                    break
                                }
                                e.timeoutHandle = yc(__.bind(null, e, _b, Eb), r);
                                break
                            }
                        }
                        __(e, _b, Eb);
                        break;
                    case ib:
                        if (n_(e, n),
                        function(e) {
                            return (e & Si) === e
                        }(n))
                            break;
                        if (!B_()) {
                            var i = function(e, t) {
                                for (var n = e.eventTimes, r = Ji; t > 0; ) {
                                    var o = fa(t)
                                      , i = 1 << o
                                      , a = n[o];
                                    a > r && (r = a),
                                    t &= ~i
                                }
                                return r
                            }(e, n)
                              , a = i
                              , s = Mo() - a
                              , u = ((l = s) < 120 ? 120 : l < 480 ? 480 : l < 1080 ? 1080 : l < 1920 ? 1920 : l < 3e3 ? 3e3 : l < 4320 ? 4320 : 1960 * Hv(l / 1960)) - s;
                            if (u > 10) {
                                e.timeoutHandle = yc(__.bind(null, e, _b, Eb), u);
                                break
                            }
                        }
                        __(e, _b, Eb);
                        break;
                    case ab:
                        __(e, _b, Eb);
                        break;
                    default:
                        throw new Error("Unknown root exit status.")
                    }
                    var l
                }(e, i, r)
            }
        }
        return Jb(e, Mo()),
        e.callbackNode === n ? Zb.bind(null, e) : null
    }
    function e_(e, t) {
        var n = bb;
        ja(e) && (l_(e, t).flags |= Qr,
        i("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.containerInfo.nodeName.toLowerCase()));
        var r = m_(e, t);
        if (r !== rb) {
            var o = _b;
            _b = n,
            null !== o && t_(o)
        }
        return r
    }
    function t_(e) {
        null === _b ? _b = e : _b.push.apply(_b, e)
    }
    function n_(e, t) {
        t = ya(t, vb),
        function(e, t) {
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t;
            for (var n = e.expirationTimes, r = t; r > 0; ) {
                var o = fa(r)
                  , i = 1 << o;
                n[o] = Ji,
                r &= ~i
            }
        }(e, t = ya(t, yb))
    }
    function r_(e) {
        if (Ym = Gm,
        Gm = !1,
        (ub & (Zv | eb)) !== Xv)
            throw new Error("Should not already be working.");
        w_();
        var t = na(e, hi);
        if (!ha(t, gi))
            return Jb(e, Mo()),
            null;
        var n = m_(e, t);
        if (e.tag !== kd && n === rb) {
            var r = oa(e);
            r !== hi && (t = r,
            n = e_(e, r))
        }
        if (n === nb) {
            var o = mb;
            throw l_(e, hi),
            n_(e, t),
            Jb(e, Mo()),
            o
        }
        if (n === sb)
            throw new Error("Root did not complete. This is a bug in React.");
        var i = e.current.alternate;
        return e.finishedWork = i,
        e.finishedLanes = t,
        __(e, _b, Eb),
        Jb(e, Mo()),
        null
    }
    function o_(e, t) {
        var n = ub;
        ub |= Jv;
        try {
            return e(t)
        } finally {
            (ub = n) !== Xv || Kv.isBatchingLegacy || (Cb(),
            Od())
        }
    }
    function i_(e) {
        null !== Pb && Pb.tag === kd && (ub & (Zv | eb)) === Xv && w_();
        var t = ub;
        ub |= Jv;
        var n = Gv.transition
          , r = La();
        try {
            return Gv.transition = null,
            Aa(Ia),
            e ? e() : void 0
        } finally {
            Aa(r),
            Gv.transition = n,
            ((ub = t) & (Zv | eb)) === Xv && Id()
        }
    }
    function a_() {
        return (ub & (Zv | eb)) !== Xv
    }
    function s_(e, t) {
        ad(pb, fb, e),
        fb = ga(fb, t)
    }
    function u_(e) {
        fb = pb.current,
        id(pb, e)
    }
    function l_(e, t) {
        e.finishedWork = null,
        e.finishedLanes = hi;
        var n = e.timeoutHandle;
        if (n !== bc && (e.timeoutHandle = bc,
        vc(n)),
        null !== cb)
            for (var r = cb.return; null !== r; ) {
                r.alternate;
                Fy(0, r),
                r = r.return
            }
        lb = e;
        var o = aw(e.current, null);
        return cb = o,
        db = fb = t,
        hb = tb,
        mb = null,
        gb = hi,
        yb = hi,
        vb = hi,
        bb = null,
        _b = null,
        function() {
            if (null !== up) {
                for (var e = 0; e < up.length; e++) {
                    var t = up[e]
                      , n = t.interleaved;
                    if (null !== n) {
                        t.interleaved = null;
                        var r = n.next
                          , o = t.pending;
                        if (null !== o) {
                            var i = o.next;
                            o.next = r,
                            n.next = i
                        }
                        t.pending = n
                    }
                }
                up = null
            }
        }(),
        Sf.discardPendingWarnings(),
        o
    }
    function c_(e, t) {
        for (; ; ) {
            var n = cb;
            try {
                if (Zf(),
                Nh(),
                wt(),
                Yv.current = null,
                null === n || null === n.return)
                    return hb = nb,
                    mb = t,
                    void (cb = null);
                if (V && n.mode & si && tg(n, !0),
                W)
                    if (Ko(),
                    null !== t && "object" == typeof t && "function" == typeof t.then)
                        ti(n, t, db);
                    else
                        ei(n, t, db);
                Fg(e, n.return, n, t, db),
                b_(n)
            } catch (r) {
                t = r,
                cb === n && null !== n ? (n = n.return,
                cb = n) : n = cb;
                continue
            }
            return
        }
    }
    function d_() {
        var e = Qv.current;
        return Qv.current = Nm,
        null === e ? Nm : e
    }
    function f_(e) {
        Qv.current = e
    }
    function p_(e) {
        gb = ga(e, gb)
    }
    function h_() {
        hb !== tb && hb !== ob && hb !== rb || (hb = ib),
        null !== lb && (ia(gb) || ia(yb)) && n_(lb, db)
    }
    function m_(e, t) {
        var n = ub;
        ub |= Zv;
        var r = d_();
        if (lb !== e || db !== t) {
            if (Vo) {
                var o = e.memoizedUpdaters;
                o.size > 0 && (F_(e, db),
                o.clear()),
                xa(e, t)
            }
            Eb = null,
            l_(e, t)
        }
        for (ni(t); ; )
            try {
                g_();
                break
            } catch (i) {
                c_(e, i)
            }
        if (Zf(),
        ub = n,
        f_(r),
        null !== cb)
            throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
        return ri(),
        lb = null,
        db = hi,
        hb
    }
    function g_() {
        for (; null !== cb; )
            v_(cb)
    }
    function y_() {
        for (; null !== cb && !Oo(); )
            v_(cb)
    }
    function v_(e) {
        var t, n = e.alternate;
        St(e),
        (e.mode & si) !== ii ? (Zm(e),
        t = P_(n, e, fb),
        tg(e, !0)) : t = P_(n, e, fb),
        wt(),
        e.memoizedProps = e.pendingProps,
        null === t ? b_(e) : cb = t,
        Yv.current = null
    }
    function b_(e) {
        var t = e;
        do {
            var n = t.alternate
              , r = t.return;
            if ((t.flags & no) === jr) {
                St(t);
                var o = void 0;
                if ((t.mode & si) === ii ? o = Ly(n, t, fb) : (Zm(t),
                o = Ly(n, t, fb),
                tg(t, !1)),
                wt(),
                null !== o)
                    return void (cb = o)
            } else {
                var i = Ay(0, t);
                if (null !== i)
                    return i.flags &= to,
                    void (cb = i);
                if ((t.mode & si) !== ii) {
                    tg(t, !1);
                    for (var a = t.actualDuration, s = t.child; null !== s; )
                        a += s.actualDuration,
                        s = s.sibling;
                    t.actualDuration = a
                }
                if (null === r)
                    return hb = sb,
                    void (cb = null);
                r.flags |= no,
                r.subtreeFlags = jr,
                r.deletions = null
            }
            var u = t.sibling;
            if (null !== u)
                return void (cb = u);
            cb = t = r
        } while (null !== t);
        hb === tb && (hb = ab)
    }
    function __(e, t, n) {
        var r = La()
          , o = Gv.transition;
        try {
            Gv.transition = null,
            Aa(Ia),
            function(e, t, n, r) {
                do {
                    w_()
                } while (null !== Pb);
                if (function() {
                    Sf.flushLegacyContextWarning(),
                    Sf.flushPendingUnsafeLifecycleWarnings()
                }(),
                (ub & (Zv | eb)) !== Xv)
                    throw new Error("Should not already be working.");
                var o = e.finishedWork
                  , a = e.finishedLanes;
                if (function(e) {
                    null !== qo && "function" == typeof qo.markCommitStarted && qo.markCommitStarted(e)
                }(a),
                null === o)
                    return Yo(),
                    null;
                a === hi && i("root.finishedLanes should not be empty during a commit. This is a bug in React.");
                if (e.finishedWork = null,
                e.finishedLanes = hi,
                o === e.current)
                    throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
                e.callbackNode = null,
                e.callbackPriority = mi;
                var s = ga(o.lanes, o.childLanes);
                (function(e, t) {
                    var n = e.pendingLanes & ~t;
                    e.pendingLanes = t,
                    e.suspendedLanes = hi,
                    e.pingedLanes = hi,
                    e.expiredLanes &= t,
                    e.mutableReadLanes &= t,
                    e.entangledLanes &= t;
                    for (var r = e.entanglements, o = e.eventTimes, i = e.expirationTimes, a = n; a > 0; ) {
                        var s = fa(a)
                          , u = 1 << s;
                        r[s] = hi,
                        o[s] = Ji,
                        i[s] = Ji,
                        a &= ~u
                    }
                }
                )(e, s),
                e === lb && (lb = null,
                cb = null,
                db = hi);
                (o.subtreeFlags & mo) === jr && (o.flags & mo) === jr || Mb || (Mb = !0,
                Lb = n,
                j_(Lo, (function() {
                    return w_(),
                    null
                }
                )));
                var u = (o.subtreeFlags & (fo | po | ho | mo)) !== jr
                  , l = (o.flags & (fo | po | ho | mo)) !== jr;
                if (u || l) {
                    var c = Gv.transition;
                    Gv.transition = null;
                    var d = La();
                    Aa(Ia);
                    var f = ub;
                    ub |= eb,
                    Yv.current = null,
                    Jy(e, o),
                    Jm(),
                    function(e, t, n) {
                        Wy = n,
                        Vy = e,
                        St(t),
                        _v(t, e),
                        St(t),
                        Wy = null,
                        Vy = null
                    }(e, o, a),
                    e.containerInfo,
                    Uu(fc),
                    as(dc),
                    dc = null,
                    fc = null,
                    e.current = o,
                    function(e) {
                        null !== qo && "function" == typeof qo.markLayoutEffectsStarted && qo.markLayoutEffectsStarted(e)
                    }(a),
                    Sv(o, e, a),
                    null !== qo && "function" == typeof qo.markLayoutEffectsStopped && qo.markLayoutEffectsStopped(),
                    Io(),
                    ub = f,
                    Aa(d),
                    Gv.transition = c
                } else
                    e.current = o,
                    Jm();
                var p = Mb;
                Mb ? (Mb = !1,
                Pb = e,
                Nb = a) : (qb = 0,
                Wb = null);
                s = e.pendingLanes,
                s === hi && (Ib = null);
                p || I_(e.current, !1);
                (function(e, t) {
                    if (Bo && "function" == typeof Bo.onCommitFiberRoot)
                        try {
                            var n = (e.current.flags & Hr) === Hr;
                            if (V) {
                                var r;
                                switch (t) {
                                case Ia:
                                    r = No;
                                    break;
                                case Ma:
                                    r = Do;
                                    break;
                                case Pa:
                                    r = Lo;
                                    break;
                                case Na:
                                    r = Fo;
                                    break;
                                default:
                                    r = Lo
                                }
                                Bo.onCommitFiberRoot(zo, e, r, n)
                            }
                        } catch (o) {
                            Wo || (Wo = !0,
                            i("React instrumentation encountered an error: %s", o))
                        }
                }
                )(o.stateNode, r),
                Vo && e.memoizedUpdaters.clear();
                if (function() {
                    Wv.forEach((function(e) {
                        return e()
                    }
                    ))
                }(),
                Jb(e, Mo()),
                null !== t)
                    for (var h = e.onRecoverableError, m = 0; m < t.length; m++) {
                        var g = t[m]
                          , y = g.stack
                          , v = g.digest;
                        h(g.value, {
                            componentStack: y,
                            digest: v
                        })
                    }
                if (Rb) {
                    Rb = !1;
                    var b = Ob;
                    throw Ob = null,
                    b
                }
                ha(Nb, gi) && e.tag !== kd && w_();
                s = e.pendingLanes,
                ha(s, gi) ? (Gm = !0,
                e === Ub ? Fb++ : (Fb = 0,
                Ub = e)) : Fb = 0;
                Id(),
                Yo()
            }(e, t, n, r)
        } finally {
            Gv.transition = o,
            Aa(r)
        }
        return null
    }
    function w_() {
        if (null !== Pb) {
            var e = Ua(Nb)
              , t = (o = Pa) > (a = e) ? o : a
              , n = Gv.transition
              , r = La();
            try {
                return Gv.transition = null,
                Aa(t),
                function() {
                    if (null === Pb)
                        return !1;
                    var e = Lb;
                    Lb = null;
                    var t = Pb
                      , n = Nb;
                    if (Pb = null,
                    Nb = hi,
                    (ub & (Zv | eb)) !== Xv)
                        throw new Error("Cannot flush passive effects while already rendering.");
                    jb = !0,
                    zb = !1,
                    function(e) {
                        null !== qo && "function" == typeof qo.markPassiveEffectsStarted && qo.markPassiveEffectsStarted(e)
                    }(n);
                    var r = ub;
                    ub |= eb,
                    Pv(t.current),
                    Ov(t, t.current, n, e);
                    var o = Db;
                    Db = [];
                    for (var a = 0; a < o.length; a++) {
                        rv(0, o[a])
                    }
                    void (null !== qo && "function" == typeof qo.markPassiveEffectsStopped && qo.markPassiveEffectsStopped()),
                    I_(t.current, !0),
                    ub = r,
                    Id(),
                    zb ? t === Wb ? qb++ : (qb = 0,
                    Wb = t) : qb = 0;
                    jb = !1,
                    zb = !1,
                    function(e) {
                        if (Bo && "function" == typeof Bo.onPostCommitFiberRoot)
                            try {
                                Bo.onPostCommitFiberRoot(zo, e)
                            } catch (t) {
                                Wo || (Wo = !0,
                                i("React instrumentation encountered an error: %s", t))
                            }
                    }(t);
                    var s = t.current.stateNode;
                    return s.effectDuration = 0,
                    s.passiveEffectDuration = 0,
                    !0
                }()
            } finally {
                Aa(r),
                Gv.transition = n
            }
        }
        var o, a;
        return !1
    }
    function S_(e) {
        return null !== Ib && Ib.has(e)
    }
    var k_ = function(e) {
        Rb || (Rb = !0,
        Ob = e)
    };
    function x_(e, t, n) {
        var r = xp(e, Pg(e, Rg(n, t), gi), gi)
          , o = Yb();
        null !== r && (_a(r, gi, o),
        Jb(r, o))
    }
    function E_(e, t, n) {
        var r;
        if (r = n,
        Ar(null, (function() {
            throw r
        }
        )),
        Fr(),
        q_(!1),
        e.tag !== c) {
            var o = null;
            for (o = t; null !== o; ) {
                if (o.tag === c)
                    return void x_(o, e, n);
                if (o.tag === u) {
                    var a = o.type
                      , s = o.stateNode;
                    if ("function" == typeof a.getDerivedStateFromError || "function" == typeof s.componentDidCatch && !S_(s)) {
                        var l = xp(o, Ng(o, Rg(n, e), gi), gi)
                          , d = Yb();
                        return void (null !== l && (_a(l, gi, d),
                        Jb(l, d)))
                    }
                }
                o = o.return
            }
            i("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s", n)
        } else
            x_(e, e, n)
    }
    function C_(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t);
        var o = Yb();
        wa(e, n),
        function(e) {
            e.tag !== kd && $v() && null === Kv.current && i("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act")
        }(e),
        lb === e && ma(db, n) && (hb === ib || hb === ob && aa(db) && Mo() - wb < Sb ? l_(e, hi) : vb = ga(vb, n)),
        Jb(e, o)
    }
    function T_(e, t) {
        t === mi && (t = Kb(e));
        var n = Yb()
          , r = dp(e, t);
        null !== r && (_a(r, t, n),
        Jb(r, n))
    }
    function R_(e) {
        var t = e.memoizedState
          , n = mi;
        null !== t && (n = t.retryLane),
        T_(e, n)
    }
    function O_(e, t) {
        var n, r = mi;
        switch (e.tag) {
        case _:
            n = e.stateNode;
            var o = e.memoizedState;
            null !== o && (r = o.retryLane);
            break;
        case T:
            n = e.stateNode;
            break;
        default:
            throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")
        }
        null !== n && n.delete(t),
        T_(e, r)
    }
    function I_(e, t) {
        St(e),
        M_(e, lo, zv),
        t && M_(e, co, Bv),
        M_(e, lo, Uv),
        t && M_(e, co, jv),
        wt()
    }
    function M_(e, t, n) {
        for (var r = e, o = null; null !== r; ) {
            var i = r.subtreeFlags & t;
            r !== o && null !== r.child && i !== jr ? r = r.child : ((r.flags & t) !== jr && n(r),
            r = null !== r.sibling ? r.sibling : o = r.return)
        }
    }
    var P_, N_ = null;
    function D_(e) {
        if ((ub & Zv) === Xv && e.mode & ai) {
            var t = e.tag;
            if (t === l || t === c || t === u || t === s || t === v || t === w || t === S) {
                var n = mt(e) || "ReactComponent";
                if (null !== N_) {
                    if (N_.has(n))
                        return;
                    N_.add(n)
                } else
                    N_ = new Set([n]);
                var r = yt;
                try {
                    St(e),
                    i("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")
                } finally {
                    r ? St(e) : wt()
                }
            }
        }
    }
    P_ = function(e, t, n) {
        var r = hw(null, t);
        try {
            return Oy(e, t, n)
        } catch (i) {
            if (Kd || null !== i && "object" == typeof i && "function" == typeof i.then)
                throw i;
            if (Zf(),
            Nh(),
            Fy(0, t),
            hw(t, r),
            t.mode & si && Zm(t),
            Ar(null, Oy, null, e, t, n),
            Mr) {
                var o = Fr();
                "object" == typeof o && null !== o && o._suppressLogging && "object" == typeof i && null !== i && !i._suppressLogging && (i._suppressLogging = !0)
            }
            throw i
        }
    }
    ;
    var L_, A_ = !1;
    function F_(e, t) {
        Vo && e.memoizedUpdaters.forEach((function(n) {
            ka(e, n, t)
        }
        ))
    }
    L_ = new Set;
    var U_ = {};
    function j_(e, t) {
        var n = Kv.current;
        return null !== n ? (n.push(t),
        U_) : To(e, t)
    }
    function z_(e) {
        if (e !== U_)
            return Ro(e)
    }
    function B_() {
        return null !== Kv.current
    }
    function q_(e) {
        Hb = e
    }
    var W_ = null
      , V_ = null
      , $_ = function(e) {
        W_ = e
    };
    function H_(e) {
        if (null === W_)
            return e;
        var t = W_(e);
        return void 0 === t ? e : t.current
    }
    function Q_(e) {
        return H_(e)
    }
    function Y_(e) {
        if (null === W_)
            return e;
        var t = W_(e);
        if (void 0 === t) {
            if (null != e && "function" == typeof e.render) {
                var n = H_(e.render);
                if (e.render !== n) {
                    var r = {
                        $$typeof: Ae,
                        render: n
                    };
                    return void 0 !== e.displayName && (r.displayName = e.displayName),
                    r
                }
            }
            return e
        }
        return t.current
    }
    function G_(e, t) {
        if (null === W_)
            return !1;
        var n = e.elementType
          , r = t.type
          , o = !1
          , i = "object" == typeof r && null !== r ? r.$$typeof : null;
        switch (e.tag) {
        case u:
            "function" == typeof r && (o = !0);
            break;
        case s:
            ("function" == typeof r || i === ze) && (o = !0);
            break;
        case v:
            (i === Ae || i === ze) && (o = !0);
            break;
        case w:
        case S:
            (i === je || i === ze) && (o = !0);
            break;
        default:
            return !1
        }
        if (o) {
            var a = W_(n);
            if (void 0 !== a && a === W_(r))
                return !0
        }
        return !1
    }
    function K_(e) {
        null !== W_ && "function" == typeof WeakSet && (null === V_ && (V_ = new WeakSet),
        V_.add(e))
    }
    var X_ = function(e, t) {
        if (null !== W_) {
            var n = t.staleFamilies
              , r = t.updatedFamilies;
            w_(),
            i_((function() {
                Z_(e.current, r, n)
            }
            ))
        }
    }
      , J_ = function(e, t) {
        e.context === sd && (w_(),
        i_((function() {
            xw(t, e, null, null)
        }
        )))
    };
    function Z_(e, t, n) {
        var r = e.alternate
          , o = e.child
          , i = e.sibling
          , a = e.tag
          , l = e.type
          , c = null;
        switch (a) {
        case s:
        case S:
        case u:
            c = l;
            break;
        case v:
            c = l.render
        }
        if (null === W_)
            throw new Error("Expected resolveFamily to be set during hot reload.");
        var d = !1
          , f = !1;
        if (null !== c) {
            var p = W_(c);
            void 0 !== p && (n.has(p) ? f = !0 : t.has(p) && (a === u ? f = !0 : d = !0))
        }
        if (null !== V_ && (V_.has(e) || null !== r && V_.has(r)) && (f = !0),
        f && (e._debugNeedsRemount = !0),
        f || d) {
            var h = dp(e, gi);
            null !== h && Xb(h, e, gi, Ji)
        }
        null === o || f || Z_(o, t, n),
        null !== i && Z_(i, t, n)
    }
    var ew, tw = function(e, t) {
        var n = new Set
          , r = new Set(t.map((function(e) {
            return e.current
        }
        )));
        return nw(e.current, r, n),
        n
    };
    function nw(e, t, n) {
        var r = e.child
          , o = e.sibling
          , i = e.tag
          , a = e.type
          , l = null;
        switch (i) {
        case s:
        case S:
        case u:
            l = a;
            break;
        case v:
            l = a.render
        }
        var p = !1;
        null !== l && t.has(l) && (p = !0),
        p ? function(e, t) {
            var n = function(e, t) {
                var n = e
                  , r = !1;
                for (; ; ) {
                    if (n.tag === f)
                        r = !0,
                        t.add(n.stateNode);
                    else if (null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === e)
                        return r;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === e)
                            return r;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
                return !1
            }(e, t);
            if (n)
                return;
            var r = e;
            for (; ; ) {
                switch (r.tag) {
                case f:
                    return void t.add(r.stateNode);
                case d:
                case c:
                    return void t.add(r.stateNode.containerInfo)
                }
                if (null === r.return)
                    throw new Error("Expected to reach root first.");
                r = r.return
            }
        }(e, n) : null !== r && nw(r, t, n),
        null !== o && nw(o, t, n)
    }
    ew = !1;
    try {
        Object.preventExtensions({})
    } catch (hS) {
        ew = !0
    }
    function rw(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.elementType = null,
        this.type = null,
        this.stateNode = null,
        this.return = null,
        this.child = null,
        this.sibling = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.memoizedProps = null,
        this.updateQueue = null,
        this.memoizedState = null,
        this.dependencies = null,
        this.mode = r,
        this.flags = jr,
        this.subtreeFlags = jr,
        this.deletions = null,
        this.lanes = hi,
        this.childLanes = hi,
        this.alternate = null,
        this.actualDuration = Number.NaN,
        this.actualStartTime = Number.NaN,
        this.selfBaseDuration = Number.NaN,
        this.treeBaseDuration = Number.NaN,
        this.actualDuration = 0,
        this.actualStartTime = -1,
        this.selfBaseDuration = 0,
        this.treeBaseDuration = 0,
        this._debugSource = null,
        this._debugOwner = null,
        this._debugNeedsRemount = !1,
        this._debugHookTypes = null,
        ew || "function" != typeof Object.preventExtensions || Object.preventExtensions(this)
    }
    var ow = function(e, t, n, r) {
        return new rw(e,t,n,r)
    };
    function iw(e) {
        var t = e.prototype;
        return !(!t || !t.isReactComponent)
    }
    function aw(e, t) {
        var n = e.alternate;
        null === n ? ((n = ow(e.tag, t, e.key, e.mode)).elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n._debugSource = e._debugSource,
        n._debugOwner = e._debugOwner,
        n._debugHookTypes = e._debugHookTypes,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = jr,
        n.subtreeFlags = jr,
        n.deletions = null,
        n.actualDuration = 0,
        n.actualStartTime = -1),
        n.flags = e.flags & go,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue;
        var r = e.dependencies;
        switch (n.dependencies = null === r ? null : {
            lanes: r.lanes,
            firstContext: r.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.selfBaseDuration = e.selfBaseDuration,
        n.treeBaseDuration = e.treeBaseDuration,
        n._debugNeedsRemount = e._debugNeedsRemount,
        n.tag) {
        case l:
        case s:
        case S:
            n.type = H_(e.type);
            break;
        case u:
            n.type = Q_(e.type);
            break;
        case v:
            n.type = Y_(e.type)
        }
        return n
    }
    function sw(e, t) {
        e.flags &= go | Br;
        var n = e.alternate;
        if (null === n)
            e.childLanes = hi,
            e.lanes = t,
            e.child = null,
            e.subtreeFlags = jr,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.updateQueue = null,
            e.dependencies = null,
            e.stateNode = null,
            e.selfBaseDuration = 0,
            e.treeBaseDuration = 0;
        else {
            e.childLanes = n.childLanes,
            e.lanes = n.lanes,
            e.child = n.child,
            e.subtreeFlags = jr,
            e.deletions = null,
            e.memoizedProps = n.memoizedProps,
            e.memoizedState = n.memoizedState,
            e.updateQueue = n.updateQueue,
            e.type = n.type;
            var r = n.dependencies;
            e.dependencies = null === r ? null : {
                lanes: r.lanes,
                firstContext: r.firstContext
            },
            e.selfBaseDuration = n.selfBaseDuration,
            e.treeBaseDuration = n.treeBaseDuration
        }
        return e
    }
    function uw(e, t, n, r, o, a) {
        var s = l
          , c = e;
        if ("function" == typeof e)
            iw(e) ? (s = u,
            c = Q_(c)) : c = H_(c);
        else if ("string" == typeof e)
            s = f;
        else
            e: switch (e) {
            case Me:
                return cw(n.children, o, a, t);
            case Pe:
                s = m,
                ((o |= ui) & ai) !== ii && (o |= li);
                break;
            case Ne:
                return function(e, t, n, r) {
                    "string" != typeof e.id && i('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
                    var o = ow(b, e, r, t | si);
                    return o.elementType = Ne,
                    o.lanes = n,
                    o.stateNode = {
                        effectDuration: 0,
                        passiveEffectDuration: 0
                    },
                    o
                }(n, o, a, t);
            case Fe:
                return function(e, t, n, r) {
                    var o = ow(_, e, r, t);
                    return o.elementType = Fe,
                    o.lanes = n,
                    o
                }(n, o, a, t);
            case Ue:
                return function(e, t, n, r) {
                    var o = ow(T, e, r, t);
                    return o.elementType = Ue,
                    o.lanes = n,
                    o
                }(n, o, a, t);
            case Be:
                return dw(n, o, a, t);
            default:
                if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                    case De:
                        s = y;
                        break e;
                    case Le:
                        s = g;
                        break e;
                    case Ae:
                        s = v,
                        c = Y_(c);
                        break e;
                    case je:
                        s = w;
                        break e;
                    case ze:
                        s = x,
                        c = null;
                        break e
                    }
                var d = "";
                (void 0 === e || "object" == typeof e && null !== e && 0 === Object.keys(e).length) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var p = r ? mt(r) : null;
                throw p && (d += "\n\nCheck the render method of `" + p + "`."),
                new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (null == e ? e : typeof e) + "." + d)
            }
        var h = ow(s, n, t, o);
        return h.elementType = e,
        h.type = c,
        h.lanes = a,
        h._debugOwner = r,
        h
    }
    function lw(e, t, n) {
        var r;
        r = e._owner;
        var o = uw(e.type, e.key, e.props, r, t, n);
        return o._debugSource = e._source,
        o._debugOwner = e._owner,
        o
    }
    function cw(e, t, n, r) {
        var o = ow(h, e, r, t);
        return o.lanes = n,
        o
    }
    function dw(e, t, n, r) {
        var o = ow(I, e, r, t);
        o.elementType = Be,
        o.lanes = n;
        return o.stateNode = {
            isHidden: !1
        },
        o
    }
    function fw(e, t, n) {
        var r = ow(p, e, null, t);
        return r.lanes = n,
        r
    }
    function pw(e, t, n) {
        var r = null !== e.children ? e.children : []
          , o = ow(d, r, e.key, t);
        return o.lanes = n,
        o.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        o
    }
    function hw(e, t) {
        return null === e && (e = ow(l, null, null, ii)),
        e.tag = t.tag,
        e.key = t.key,
        e.elementType = t.elementType,
        e.type = t.type,
        e.stateNode = t.stateNode,
        e.return = t.return,
        e.child = t.child,
        e.sibling = t.sibling,
        e.index = t.index,
        e.ref = t.ref,
        e.pendingProps = t.pendingProps,
        e.memoizedProps = t.memoizedProps,
        e.updateQueue = t.updateQueue,
        e.memoizedState = t.memoizedState,
        e.dependencies = t.dependencies,
        e.mode = t.mode,
        e.flags = t.flags,
        e.subtreeFlags = t.subtreeFlags,
        e.deletions = t.deletions,
        e.lanes = t.lanes,
        e.childLanes = t.childLanes,
        e.alternate = t.alternate,
        e.actualDuration = t.actualDuration,
        e.actualStartTime = t.actualStartTime,
        e.selfBaseDuration = t.selfBaseDuration,
        e.treeBaseDuration = t.treeBaseDuration,
        e._debugSource = t._debugSource,
        e._debugOwner = t._debugOwner,
        e._debugNeedsRemount = t._debugNeedsRemount,
        e._debugHookTypes = t._debugHookTypes,
        e
    }
    function mw(e, t, n, r, o) {
        this.tag = t,
        this.containerInfo = e,
        this.pendingChildren = null,
        this.current = null,
        this.pingCache = null,
        this.finishedWork = null,
        this.timeoutHandle = bc,
        this.context = null,
        this.pendingContext = null,
        this.callbackNode = null,
        this.callbackPriority = mi,
        this.eventTimes = ba(hi),
        this.expirationTimes = ba(Ji),
        this.pendingLanes = hi,
        this.suspendedLanes = hi,
        this.pingedLanes = hi,
        this.expiredLanes = hi,
        this.mutableReadLanes = hi,
        this.finishedLanes = hi,
        this.entangledLanes = hi,
        this.entanglements = ba(hi),
        this.identifierPrefix = r,
        this.onRecoverableError = o,
        this.mutableSourceEagerHydrationData = null,
        this.effectDuration = 0,
        this.passiveEffectDuration = 0,
        this.memoizedUpdaters = new Set;
        for (var i = this.pendingUpdatersLaneMap = [], a = 0; a < pi; a++)
            i.push(new Set);
        switch (t) {
        case xd:
            this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
            break;
        case kd:
            this._debugRootType = n ? "hydrate()" : "render()"
        }
    }
    function gw(e, t, n, r, o, i, a, s, u, l) {
        var d = new mw(e,t,n,s,u)
          , f = function(e, t) {
            var n;
            return e === xd ? (n = ai,
            !0 === t && (n |= ui,
            n |= li)) : n = ii,
            Vo && (n |= si),
            ow(c, null, null, n)
        }(t, i);
        d.current = f,
        f.stateNode = d;
        var p = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        };
        return f.memoizedState = p,
        wp(f),
        d
    }
    var yw, vw, bw = "18.3.1";
    function _w(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return function(e) {
            if (ee(e))
                i("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Z(e)),
                te(e)
        }(r),
        {
            $$typeof: Ie,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function ww(e) {
        if (!e)
            return sd;
        var t = Ur(e)
          , n = Sd(t);
        if (t.tag === u) {
            var r = t.type;
            if (md(r))
                return bd(t, r, n)
        }
        return n
    }
    function Sw(e, t, n, r, o, i, a, s) {
        return gw(e, t, !1, null, 0, r, 0, i, a)
    }
    function kw(e, t, n, r, o, i, a, s, u, l) {
        var c = gw(n, r, !0, e, 0, i, 0, s, u);
        c.context = ww(null);
        var d = c.current
          , f = Yb()
          , p = Gb(d)
          , h = kp(f, p);
        return h.callback = null != t ? t : null,
        xp(d, h, p),
        function(e, t, n) {
            e.current.lanes = t,
            _a(e, t, n),
            Jb(e, n)
        }(c, p, f),
        c
    }
    function xw(e, t, n, r) {
        !function(e, t) {
            if (Bo && "function" == typeof Bo.onScheduleFiberRoot)
                try {
                    Bo.onScheduleFiberRoot(zo, e, t)
                } catch (n) {
                    Wo || (Wo = !0,
                    i("React instrumentation encountered an error: %s", n))
                }
        }(t, e);
        var o = t.current
          , a = Yb()
          , s = Gb(o);
        !function(e) {
            null !== qo && "function" == typeof qo.markRenderScheduled && qo.markRenderScheduled(e)
        }(s);
        var u = ww(n);
        null === t.context ? t.context = u : t.pendingContext = u,
        vt && null !== yt && !yw && (yw = !0,
        i("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", mt(yt) || "Unknown"));
        var l = kp(a, s);
        l.payload = {
            element: e
        },
        null !== (r = void 0 === r ? null : r) && ("function" != typeof r && i("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r),
        l.callback = r);
        var c = xp(o, l, s);
        return null !== c && (Xb(c, o, s, a),
        Ep(c, o, s)),
        s
    }
    function Ew(e) {
        var t = e.current;
        return t.child ? (t.child.tag,
        t.child.stateNode) : null
    }
    function Cw(e, t) {
        var n, r, o = e.memoizedState;
        null !== o && null !== o.dehydrated && (o.retryLane = (n = o.retryLane,
        r = t,
        n !== mi && n < r ? n : r))
    }
    function Tw(e, t) {
        Cw(e, t);
        var n = e.alternate;
        n && Cw(n, t)
    }
    function Rw(e) {
        var t = Eo(e);
        return null === t ? null : t.stateNode
    }
    yw = !1,
    vw = {};
    var Ow = function(e) {
        return null
    };
    var Iw = function(e) {
        return !1
    };
    var Mw, Pw, Nw, Dw, Lw, Aw, Fw, Uw, jw, zw = function(e, t, n) {
        var r = t[n]
          , o = Xt(e) ? e.slice() : Je({}, e);
        return n + 1 === t.length ? (Xt(o) ? o.splice(r, 1) : delete o[r],
        o) : (o[r] = zw(e[r], t, n + 1),
        o)
    }, Bw = function(e, t) {
        return zw(e, t, 0)
    }, qw = function(e, t, n, r) {
        var o = t[r]
          , i = Xt(e) ? e.slice() : Je({}, e);
        r + 1 === t.length ? (i[n[r]] = i[o],
        Xt(i) ? i.splice(o, 1) : delete i[o]) : i[o] = qw(e[o], t, n, r + 1);
        return i
    }, Ww = function(e, t, n) {
        if (t.length === n.length) {
            for (var r = 0; r < n.length - 1; r++)
                if (t[r] !== n[r])
                    return void o("copyWithRename() expects paths to be the same except for the deepest key");
            return qw(e, t, n, 0)
        }
        o("copyWithRename() expects paths of the same length")
    }, Vw = function(e, t, n, r) {
        if (n >= t.length)
            return r;
        var o = t[n]
          , i = Xt(e) ? e.slice() : Je({}, e);
        return i[o] = Vw(e[o], t, n + 1, r),
        i
    }, $w = function(e, t, n) {
        return Vw(e, t, 0, n)
    }, Hw = function(e, t) {
        for (var n = e.memoizedState; null !== n && t > 0; )
            n = n.next,
            t--;
        return n
    };
    function Qw(e) {
        var t = ko(e);
        return null === t ? null : t.stateNode
    }
    function Yw(e) {
        return null
    }
    function Gw() {
        return yt
    }
    Mw = function(e, t, n, r) {
        var o = Hw(e, t);
        if (null !== o) {
            var i = $w(o.memoizedState, n, r);
            o.memoizedState = i,
            o.baseState = i,
            e.memoizedProps = Je({}, e.memoizedProps);
            var a = dp(e, gi);
            null !== a && Xb(a, e, gi, Ji)
        }
    }
    ,
    Pw = function(e, t, n) {
        var r = Hw(e, t);
        if (null !== r) {
            var o = Bw(r.memoizedState, n);
            r.memoizedState = o,
            r.baseState = o,
            e.memoizedProps = Je({}, e.memoizedProps);
            var i = dp(e, gi);
            null !== i && Xb(i, e, gi, Ji)
        }
    }
    ,
    Nw = function(e, t, n, r) {
        var o = Hw(e, t);
        if (null !== o) {
            var i = Ww(o.memoizedState, n, r);
            o.memoizedState = i,
            o.baseState = i,
            e.memoizedProps = Je({}, e.memoizedProps);
            var a = dp(e, gi);
            null !== a && Xb(a, e, gi, Ji)
        }
    }
    ,
    Dw = function(e, t, n) {
        e.pendingProps = $w(e.memoizedProps, t, n),
        e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var r = dp(e, gi);
        null !== r && Xb(r, e, gi, Ji)
    }
    ,
    Lw = function(e, t) {
        e.pendingProps = Bw(e.memoizedProps, t),
        e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var n = dp(e, gi);
        null !== n && Xb(n, e, gi, Ji)
    }
    ,
    Aw = function(e, t, n) {
        e.pendingProps = Ww(e.memoizedProps, t, n),
        e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var r = dp(e, gi);
        null !== r && Xb(r, e, gi, Ji)
    }
    ,
    Fw = function(e) {
        var t = dp(e, gi);
        null !== t && Xb(t, e, gi, Ji)
    }
    ,
    Uw = function(e) {
        Ow = e
    }
    ,
    jw = function(e) {
        Iw = e
    }
    ;
    var Kw = "function" == typeof reportError ? reportError : function(e) {
        console.error(e)
    }
    ;
    function Xw(e) {
        this._internalRoot = e
    }
    function Jw(e) {
        this._internalRoot = e
    }
    function Zw(e) {
        return !(!e || e.nodeType !== yn && e.nodeType !== _n && e.nodeType !== wn && z)
    }
    function eS(e) {
        return !(!e || e.nodeType !== yn && e.nodeType !== _n && e.nodeType !== wn && (e.nodeType !== bn || " react-mount-point-unstable " !== e.nodeValue))
    }
    function tS(e) {
        e.nodeType === yn && e.tagName && "BODY" === e.tagName.toUpperCase() && i("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),
        Vc(e) && (e._reactRootContainer ? i("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : i("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))
    }
    Jw.prototype.render = Xw.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t)
            throw new Error("Cannot update an unmounted root.");
        "function" == typeof arguments[1] ? i("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Zw(arguments[1]) ? i("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : void 0 !== arguments[1] && i("You passed a second argument to root.render(...) but it only accepts one argument.");
        var n = t.containerInfo;
        if (n.nodeType !== bn) {
            var r = Rw(t.current);
            r && r.parentNode !== n && i("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")
        }
        xw(e, t, null, null)
    }
    ,
    Jw.prototype.unmount = Xw.prototype.unmount = function() {
        "function" == typeof arguments[0] && i("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var e = this._internalRoot;
        if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            a_() && i("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),
            i_((function() {
                xw(null, e, null, null)
            }
            )),
            Wc(t)
        }
    }
    ,
    Jw.prototype.unstable_scheduleHydration = function(e) {
        e && function(e) {
            for (var t = Ra(), n = {
                blockedOn: null,
                target: e,
                priority: t
            }, r = 0; r < Ya.length && Fa(t, Ya[r].priority); r++)
                ;
            Ya.splice(r, 0, n),
            0 === r && Ja(n)
        }(e)
    }
    ;
    var nS, rS = n.ReactCurrentOwner;
    function oS(e) {
        return e ? e.nodeType === _n ? e.documentElement : e.firstChild : null
    }
    function iS() {}
    function aS(e, t, n, r, o) {
        nS(n),
        function(e, t) {
            null !== e && "function" != typeof e && i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e)
        }(void 0 === o ? null : o, "render");
        var a, s = n._reactRootContainer;
        if (s) {
            if ("function" == typeof o) {
                var u = o;
                o = function() {
                    var e = Ew(a);
                    u.call(e)
                }
            }
            xw(t, a = s, e, o)
        } else
            a = function(e, t, n, r, o) {
                if (o) {
                    if ("function" == typeof r) {
                        var i = r;
                        r = function() {
                            var e = Ew(a);
                            i.call(e)
                        }
                    }
                    var a = kw(t, r, e, kd, 0, !1, 0, "", iS);
                    return e._reactRootContainer = a,
                    qc(a.current, e),
                    hl(e.nodeType === bn ? e.parentNode : e),
                    i_(),
                    a
                }
                for (var s; s = e.lastChild; )
                    e.removeChild(s);
                if ("function" == typeof r) {
                    var u = r;
                    r = function() {
                        var e = Ew(l);
                        u.call(e)
                    }
                }
                var l = Sw(e, kd, 0, !1, 0, "", iS);
                return e._reactRootContainer = l,
                qc(l.current, e),
                hl(e.nodeType === bn ? e.parentNode : e),
                i_((function() {
                    xw(t, l, n, r)
                }
                )),
                l
            }(n, t, e, o, r);
        return Ew(a)
    }
    nS = function(e) {
        if (e._reactRootContainer && e.nodeType !== bn) {
            var t = Rw(e._reactRootContainer.current);
            t && t.parentNode !== e && i("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")
        }
        var n = !!e._reactRootContainer
          , r = oS(e);
        !(!r || !Hc(r)) && !n && i("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),
        e.nodeType === yn && e.tagName && "BODY" === e.tagName.toUpperCase() && i("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")
    }
    ;
    var sS = !1;
    var uS = !1;
    Ea = function(e) {
        switch (e.tag) {
        case c:
            var t = e.stateNode;
            if (ja(t)) {
                var n = function(e) {
                    return ta(e.pendingLanes)
                }(t);
                !function(e, t) {
                    t !== hi && (Sa(e, ga(t, gi)),
                    Jb(e, Mo()),
                    (ub & (Zv | eb)) === Xv && (Cb(),
                    Id()))
                }(t, n)
            }
            break;
        case _:
            i_((function() {
                var t = dp(e, gi);
                if (null !== t) {
                    var n = Yb();
                    Xb(t, e, gi, n)
                }
            }
            )),
            Tw(e, gi)
        }
    }
    ,
    function(e) {
        Ca = e
    }((function(e) {
        if (e.tag === _) {
            var t = Hi
              , n = dp(e, t);
            if (null !== n)
                Xb(n, e, t, Yb());
            Tw(e, t)
        }
    }
    )),
    function(e) {
        Ta = e
    }((function(e) {
        if (e.tag === _) {
            var t = Gb(e)
              , n = dp(e, t);
            if (null !== n)
                Xb(n, e, t, Yb());
            Tw(e, t)
        }
    }
    )),
    function(e) {
        Ra = e
    }(La),
    function(e) {
        Oa = e
    }((function(e, t) {
        var n = Da;
        try {
            return Da = e,
            t()
        } finally {
            Da = n
        }
    }
    )),
    "function" == typeof Map && null != Map.prototype && "function" == typeof Map.prototype.forEach && "function" == typeof Set && null != Set.prototype && "function" == typeof Set.prototype.clear && "function" == typeof Set.prototype.forEach || i("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),
    pr = function(e, t, n) {
        switch (t) {
        case "input":
            return void Wt(e, n);
        case "textarea":
            return void function(e, t) {
                sn(e, t)
            }(e, n);
        case "select":
            return void function(e, t) {
                var n = e
                  , r = t.value;
                null != r && en(n, !!t.multiple, r, !1)
            }(e, n)
        }
    }
    ,
    br = o_,
    _r = i_;
    var lS, cS, dS, fS = {
        usingClientEntryPoint: !1,
        Events: [Hc, Qc, Yc, yr, vr, o_]
    };
    if (!(cS = (lS = {
        findFiberByHostInstance: $c,
        bundleType: 1,
        version: bw,
        rendererPackageName: "react-dom"
    }).findFiberByHostInstance,
    dS = n.ReactCurrentDispatcher,
    function(e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled)
            return !0;
        if (!t.supportsFiber)
            return i("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),
            !0;
        try {
            W && (e = Je({}, e, {
                getLaneLabelMap: Qo,
                injectProfilingHooks: Ho
            })),
            zo = t.inject(e),
            Bo = t
        } catch (n) {
            i("React instrumentation encountered an error: %s.", n)
        }
        return !!t.checkDCE
    }({
        bundleType: lS.bundleType,
        version: lS.version,
        rendererPackageName: lS.rendererPackageName,
        rendererConfig: lS.rendererConfig,
        overrideHookState: Mw,
        overrideHookStateDeletePath: Pw,
        overrideHookStateRenamePath: Nw,
        overrideProps: Dw,
        overridePropsDeletePath: Lw,
        overridePropsRenamePath: Aw,
        setErrorHandler: Uw,
        setSuspenseHandler: jw,
        scheduleUpdate: Fw,
        currentDispatcherRef: dS,
        findHostInstanceByFiber: Qw,
        findFiberByHostInstance: cS || Yw,
        findHostInstancesForRefresh: tw,
        scheduleRefresh: X_,
        scheduleRoot: J_,
        setRefreshHandler: $_,
        getCurrentFiber: Gw,
        reconcilerVersion: bw
    })) && X && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && -1 === navigator.userAgent.indexOf("Edge") || navigator.userAgent.indexOf("Firefox") > -1)) {
        var pS = window.location.protocol;
        /^(https?|file):$/.test(pS) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + ("file:" === pS ? "\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq" : ""), "font-weight:bold")
    }
    O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fS,
    O.createPortal = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Zw(t))
            throw new Error("Target container is not a DOM element.");
        return _w(e, t, null, n)
    }
    ,
    O.createRoot = function(e, t) {
        return fS.usingClientEntryPoint || i('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),
        function(e, t) {
            if (!Zw(e))
                throw new Error("createRoot(...): Target container is not a DOM element.");
            tS(e);
            var n = !1
              , r = ""
              , a = Kw;
            null != t && (t.hydrate ? o("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : "object" == typeof t && null !== t && t.$$typeof === Oe && i("You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);"),
            !0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (a = t.onRecoverableError),
            void 0 !== t.transitionCallbacks && t.transitionCallbacks);
            var s = Sw(e, xd, 0, n, 0, r, a);
            return qc(s.current, e),
            hl(e.nodeType === bn ? e.parentNode : e),
            new Xw(s)
        }(e, t)
    }
    ,
    O.findDOMNode = function(e) {
        sS || (sS = !0,
        i("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = rS.current;
        return null !== t && null !== t.stateNode && (t.stateNode._warnedAboutRefsInRender || i("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", pt(t.type) || "A component"),
        t.stateNode._warnedAboutRefsInRender = !0),
        null == e ? null : e.nodeType === yn ? e : function(e, t) {
            var n = Ur(e);
            if (void 0 === n) {
                if ("function" == typeof e.render)
                    throw new Error("Unable to find node on an unmounted component.");
                var r = Object.keys(e).join(",");
                throw new Error("Argument appears to not be a ReactComponent. Keys: " + r)
            }
            var o = ko(n);
            if (null === o)
                return null;
            if (o.mode & ui) {
                var a = mt(n) || "Component";
                if (!vw[a]) {
                    vw[a] = !0;
                    var s = yt;
                    try {
                        St(o),
                        n.mode & ui ? i("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, a) : i("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, a)
                    } finally {
                        s ? St(s) : wt()
                    }
                }
            }
            return o.stateNode
        }(e, "findDOMNode")
    }
    ,
    O.flushSync = function(e) {
        return a_() && i("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),
        i_(e)
    }
    ,
    O.hydrate = function(e, t, n) {
        if (i("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),
        !eS(t))
            throw new Error("Target container is not a DOM element.");
        return Vc(t) && void 0 === t._reactRootContainer && i("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?"),
        aS(null, e, t, !0, n)
    }
    ,
    O.hydrateRoot = function(e, t, n) {
        return fS.usingClientEntryPoint || i('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),
        function(e, t, n) {
            if (!Zw(e))
                throw new Error("hydrateRoot(...): Target container is not a DOM element.");
            tS(e),
            void 0 === t && i("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
            var r = null != n && n.hydratedSources || null
              , o = !1
              , a = ""
              , s = Kw;
            null != n && (!0 === n.unstable_strictMode && (o = !0),
            void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (s = n.onRecoverableError));
            var u = kw(t, null, e, xd, 0, o, 0, a, s);
            if (qc(u.current, e),
            hl(e),
            r)
                for (var l = 0; l < r.length; l++)
                    sh(u, r[l]);
            return new Jw(u)
        }(e, t, n)
    }
    ,
    O.render = function(e, t, n) {
        if (i("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),
        !eS(t))
            throw new Error("Target container is not a DOM element.");
        return Vc(t) && void 0 === t._reactRootContainer && i("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?"),
        aS(null, e, t, !1, n)
    }
    ,
    O.unmountComponentAtNode = function(e) {
        if (uS || (uS = !0,
        i("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")),
        !eS(e))
            throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
        if (Vc(e) && void 0 === e._reactRootContainer && i("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?"),
        e._reactRootContainer) {
            var t = oS(e);
            return t && !Hc(t) && i("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."),
            i_((function() {
                aS(null, null, e, !1, (function() {
                    e._reactRootContainer = null,
                    Wc(e)
                }
                ))
            }
            )),
            !0
        }
        var n = oS(e)
          , r = !(!n || !Hc(n))
          , o = e.nodeType === yn && eS(e.parentNode) && !!e.parentNode._reactRootContainer;
        return r && i("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", o ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component."),
        !1
    }
    ,
    O.unstable_batchedUpdates = o_,
    O.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        return function(e, t, n, r) {
            if (i("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),
            !eS(n))
                throw new Error("Target container is not a DOM element.");
            if (null == e || void 0 === e._reactInternals)
                throw new Error("parentComponent must be a valid React Component");
            return aS(e, t, n, !1, r)
        }(e, t, n, r)
    }
    ,
    O.version = bw,
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)
}(),
R.exports = O;
var N = R.exports;
const D = m(N)
  , L = p({
    __proto__: null,
    default: D
}, [N]);
var A, F = N, U = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
A = T.createRoot = function(e, t) {
    U.usingClientEntryPoint = !0;
    try {
        return F.createRoot(e, t)
    } finally {
        U.usingClientEntryPoint = !1
    }
}
,
T.hydrateRoot = function(e, t, n) {
    U.usingClientEntryPoint = !0;
    try {
        return F.hydrateRoot(e, t, n)
    } finally {
        U.usingClientEntryPoint = !1
    }
}
;
let j = (e=21) => {
    let t = ""
      , n = crypto.getRandomValues(new Uint8Array(e |= 0));
    for (; e--; )
        t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63 & n[e]];
    return t
}
;
const z = {
    actionToThemeMap: {},
    defaultTheme: "basic_functions",
    serverUrl: "https://data.wegic.ai",
    businessType: "",
    userId: "",
    isOnline: !1,
    enableBatch: !0,
    batchSize: 5,
    batchSendInterval: 5e3,
    onError: (e, t) => {
        console.error(`[CollectSDK] ${t || (null == e ? void 0 : e.toString())}`)
    }
}
  , B = "__trackingCount__"
  , q = "__sessionId__"
  , W = "__uniqueId__"
  , V = {
    "Amazon Silk": "amazon_silk",
    "Android Browser": "android",
    Bada: "bada",
    BlackBerry: "blackberry",
    Chrome: "chrome",
    Chromium: "chromium",
    Electron: "electron",
    Epiphany: "epiphany",
    Firefox: "firefox",
    Focus: "focus",
    Generic: "generic",
    "Google Search": "google_search",
    Googlebot: "googlebot",
    "Internet Explorer": "ie",
    "K-Meleon": "k_meleon",
    Maxthon: "maxthon",
    "Microsoft Edge": "edge",
    "MZ Browser": "mz",
    "NAVER Whale Browser": "naver",
    Opera: "opera",
    "Opera Coast": "opera_coast",
    PhantomJS: "phantomjs",
    Puffin: "puffin",
    QupZilla: "qupzilla",
    QQ: "qq",
    QQLite: "qqlite",
    Safari: "safari",
    Sailfish: "sailfish",
    "Samsung Internet for Android": "samsung_internet",
    SeaMonkey: "seamonkey",
    Sleipnir: "sleipnir",
    Swing: "swing",
    Tizen: "tizen",
    "UC Browser": "uc",
    Vivaldi: "vivaldi",
    "WebOS Browser": "webos",
    WeChat: "wechat",
    "Yandex Browser": "yandex",
    Roku: "roku"
}
  , $ = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    googlebot: "Googlebot",
    google_search: "Google Search",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    edge: "Microsoft Edge",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qupzilla: "QupZilla",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser"
}
  , H = {
    tablet: "tablet",
    mobile: "mobile",
    desktop: "desktop",
    tv: "tv"
}
  , Q = {
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MacOS: "macOS",
    iOS: "iOS",
    Android: "Android",
    WebOS: "WebOS",
    BlackBerry: "BlackBerry",
    Bada: "Bada",
    Tizen: "Tizen",
    Linux: "Linux",
    ChromeOS: "Chrome OS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku"
}
  , Y = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit"
};
class G {
    static getFirstMatch(e, t) {
        const n = t.match(e);
        return n && n.length > 0 && n[1] || ""
    }
    static getSecondMatch(e, t) {
        const n = t.match(e);
        return n && n.length > 1 && n[2] || ""
    }
    static matchAndReturnConst(e, t, n) {
        if (e.test(t))
            return n
    }
    static getWindowsVersionName(e) {
        switch (e) {
        case "NT":
            return "NT";
        case "XP":
        case "NT 5.1":
            return "XP";
        case "NT 5.0":
            return "2000";
        case "NT 5.2":
            return "2003";
        case "NT 6.0":
            return "Vista";
        case "NT 6.1":
            return "7";
        case "NT 6.2":
            return "8";
        case "NT 6.3":
            return "8.1";
        case "NT 10.0":
            return "10";
        default:
            return
        }
    }
    static getMacOSVersionName(e) {
        const t = e.split(".").splice(0, 2).map((e => parseInt(e, 10) || 0));
        if (t.push(0),
        10 === t[0])
            switch (t[1]) {
            case 5:
                return "Leopard";
            case 6:
                return "Snow Leopard";
            case 7:
                return "Lion";
            case 8:
                return "Mountain Lion";
            case 9:
                return "Mavericks";
            case 10:
                return "Yosemite";
            case 11:
                return "El Capitan";
            case 12:
                return "Sierra";
            case 13:
                return "High Sierra";
            case 14:
                return "Mojave";
            case 15:
                return "Catalina";
            default:
                return
            }
    }
    static getAndroidVersionName(e) {
        const t = e.split(".").splice(0, 2).map((e => parseInt(e, 10) || 0));
        if (t.push(0),
        !(1 === t[0] && t[1] < 5))
            return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
    }
    static getVersionPrecision(e) {
        return e.split(".").length
    }
    static compareVersions(e, t, n=!1) {
        const r = G.getVersionPrecision(e)
          , o = G.getVersionPrecision(t);
        let i = Math.max(r, o)
          , a = 0;
        const s = G.map([e, t], (e => {
            const t = i - G.getVersionPrecision(e)
              , n = e + new Array(t + 1).join(".0");
            return G.map(n.split("."), (e => new Array(20 - e.length).join("0") + e)).reverse()
        }
        ));
        for (n && (a = i - Math.min(r, o)),
        i -= 1; i >= a; ) {
            if (s[0][i] > s[1][i])
                return 1;
            if (s[0][i] === s[1][i]) {
                if (i === a)
                    return 0;
                i -= 1
            } else if (s[0][i] < s[1][i])
                return -1
        }
    }
    static map(e, t) {
        const n = [];
        let r;
        if (Array.prototype.map)
            return Array.prototype.map.call(e, t);
        for (r = 0; r < e.length; r += 1)
            n.push(t(e[r]));
        return n
    }
    static find(e, t) {
        let n, r;
        if (Array.prototype.find)
            return Array.prototype.find.call(e, t);
        for (n = 0,
        r = e.length; n < r; n += 1) {
            const r = e[n];
            if (t(r, n))
                return r
        }
    }
    static assign(e, ...t) {
        const n = e;
        let r, o;
        if (Object.assign)
            return Object.assign(e, ...t);
        for (r = 0,
        o = t.length; r < o; r += 1) {
            const e = t[r];
            if ("object" == typeof e && null !== e) {
                Object.keys(e).forEach((t => {
                    n[t] = e[t]
                }
                ))
            }
        }
        return e
    }
    static getBrowserAlias(e) {
        return V[e]
    }
    static getBrowserTypeByAlias(e) {
        return $[e] || ""
    }
}
const K = /version\/(\d+(\.?_?\d+)+)/i
  , X = [{
    test: [/googlebot/i],
    describe(e) {
        const t = {
            name: "Googlebot"
        }
          , n = G.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/opera/i],
    describe(e) {
        const t = {
            name: "Opera"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/opr\/|opios/i],
    describe(e) {
        const t = {
            name: "Opera"
        }
          , n = G.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/SamsungBrowser/i],
    describe(e) {
        const t = {
            name: "Samsung Internet for Android"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/Whale/i],
    describe(e) {
        const t = {
            name: "NAVER Whale Browser"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/MZBrowser/i],
    describe(e) {
        const t = {
            name: "MZ Browser"
        }
          , n = G.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/focus/i],
    describe(e) {
        const t = {
            name: "Focus"
        }
          , n = G.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/swing/i],
    describe(e) {
        const t = {
            name: "Swing"
        }
          , n = G.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/coast/i],
    describe(e) {
        const t = {
            name: "Opera Coast"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(e) {
        const t = {
            name: "Opera Touch"
        }
          , n = G.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/yabrowser/i],
    describe(e) {
        const t = {
            name: "Yandex Browser"
        }
          , n = G.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/ucbrowser/i],
    describe(e) {
        const t = {
            name: "UC Browser"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/Maxthon|mxios/i],
    describe(e) {
        const t = {
            name: "Maxthon"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/epiphany/i],
    describe(e) {
        const t = {
            name: "Epiphany"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/puffin/i],
    describe(e) {
        const t = {
            name: "Puffin"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/sleipnir/i],
    describe(e) {
        const t = {
            name: "Sleipnir"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/k-meleon/i],
    describe(e) {
        const t = {
            name: "K-Meleon"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/micromessenger/i],
    describe(e) {
        const t = {
            name: "WeChat"
        }
          , n = G.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/qqbrowser/i],
    describe(e) {
        const t = {
            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
        }
          , n = G.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/msie|trident/i],
    describe(e) {
        const t = {
            name: "Internet Explorer"
        }
          , n = G.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/\sedg\//i],
    describe(e) {
        const t = {
            name: "Microsoft Edge"
        }
          , n = G.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/edg([ea]|ios)/i],
    describe(e) {
        const t = {
            name: "Microsoft Edge"
        }
          , n = G.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/vivaldi/i],
    describe(e) {
        const t = {
            name: "Vivaldi"
        }
          , n = G.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/seamonkey/i],
    describe(e) {
        const t = {
            name: "SeaMonkey"
        }
          , n = G.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/sailfish/i],
    describe(e) {
        const t = {
            name: "Sailfish"
        }
          , n = G.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/silk/i],
    describe(e) {
        const t = {
            name: "Amazon Silk"
        }
          , n = G.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/phantom/i],
    describe(e) {
        const t = {
            name: "PhantomJS"
        }
          , n = G.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/slimerjs/i],
    describe(e) {
        const t = {
            name: "SlimerJS"
        }
          , n = G.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
        const t = {
            name: "BlackBerry"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
        const t = {
            name: "WebOS Browser"
        }
          , n = G.getFirstMatch(K, e) || G.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/bada/i],
    describe(e) {
        const t = {
            name: "Bada"
        }
          , n = G.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/tizen/i],
    describe(e) {
        const t = {
            name: "Tizen"
        }
          , n = G.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/qupzilla/i],
    describe(e) {
        const t = {
            name: "QupZilla"
        }
          , n = G.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/firefox|iceweasel|fxios/i],
    describe(e) {
        const t = {
            name: "Firefox"
        }
          , n = G.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/electron/i],
    describe(e) {
        const t = {
            name: "Electron"
        }
          , n = G.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/MiuiBrowser/i],
    describe(e) {
        const t = {
            name: "Miui"
        }
          , n = G.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/chromium/i],
    describe(e) {
        const t = {
            name: "Chromium"
        }
          , n = G.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/chrome|crios|crmo/i],
    describe(e) {
        const t = {
            name: "Chrome"
        }
          , n = G.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/GSA/i],
    describe(e) {
        const t = {
            name: "Google Search"
        }
          , n = G.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test(e) {
        const t = !e.test(/like android/i)
          , n = e.test(/android/i);
        return t && n
    },
    describe(e) {
        const t = {
            name: "Android Browser"
        }
          , n = G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/playstation 4/i],
    describe(e) {
        const t = {
            name: "PlayStation 4"
        }
          , n = G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/safari|applewebkit/i],
    describe(e) {
        const t = {
            name: "Safari"
        }
          , n = G.getFirstMatch(K, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/.*/i],
    describe(e) {
        const t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
        return {
            name: G.getFirstMatch(t, e),
            version: G.getSecondMatch(t, e)
        }
    }
}]
  , J = [{
    test: [/Roku\/DVP/],
    describe(e) {
        const t = G.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
        return {
            name: Q.Roku,
            version: t
        }
    }
}, {
    test: [/windows phone/i],
    describe(e) {
        const t = G.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
        return {
            name: Q.WindowsPhone,
            version: t
        }
    }
}, {
    test: [/windows /i],
    describe(e) {
        const t = G.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e)
          , n = G.getWindowsVersionName(t);
        return {
            name: Q.Windows,
            version: t,
            versionName: n
        }
    }
}, {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(e) {
        const t = {
            name: Q.iOS
        }
          , n = G.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/macintosh/i],
    describe(e) {
        const t = G.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, ".")
          , n = G.getMacOSVersionName(t)
          , r = {
            name: Q.MacOS,
            version: t
        };
        return n && (r.versionName = n),
        r
    }
}, {
    test: [/(ipod|iphone|ipad)/i],
    describe(e) {
        const t = G.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
        return {
            name: Q.iOS,
            version: t
        }
    }
}, {
    test(e) {
        const t = !e.test(/like android/i)
          , n = e.test(/android/i);
        return t && n
    },
    describe(e) {
        const t = G.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e)
          , n = G.getAndroidVersionName(t)
          , r = {
            name: Q.Android,
            version: t
        };
        return n && (r.versionName = n),
        r
    }
}, {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
        const t = G.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e)
          , n = {
            name: Q.WebOS
        };
        return t && t.length && (n.version = t),
        n
    }
}, {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
        const t = G.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || G.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || G.getFirstMatch(/\bbb(\d+)/i, e);
        return {
            name: Q.BlackBerry,
            version: t
        }
    }
}, {
    test: [/bada/i],
    describe(e) {
        const t = G.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
        return {
            name: Q.Bada,
            version: t
        }
    }
}, {
    test: [/tizen/i],
    describe(e) {
        const t = G.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
        return {
            name: Q.Tizen,
            version: t
        }
    }
}, {
    test: [/linux/i],
    describe: () => ({
        name: Q.Linux
    })
}, {
    test: [/CrOS/],
    describe: () => ({
        name: Q.ChromeOS
    })
}, {
    test: [/PlayStation 4/],
    describe(e) {
        const t = G.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
        return {
            name: Q.PlayStation4,
            version: t
        }
    }
}]
  , Z = [{
    test: [/googlebot/i],
    describe: () => ({
        type: "bot",
        vendor: "Google"
    })
}, {
    test: [/huawei/i],
    describe(e) {
        const t = G.getFirstMatch(/(can-l01)/i, e) && "Nova"
          , n = {
            type: H.mobile,
            vendor: "Huawei"
        };
        return t && (n.model = t),
        n
    }
}, {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe: () => ({
        type: H.tablet,
        vendor: "Nexus"
    })
}, {
    test: [/ipad/i],
    describe: () => ({
        type: H.tablet,
        vendor: "Apple",
        model: "iPad"
    })
}, {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe: () => ({
        type: H.tablet,
        vendor: "Apple",
        model: "iPad"
    })
}, {
    test: [/kftt build/i],
    describe: () => ({
        type: H.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
    })
}, {
    test: [/silk/i],
    describe: () => ({
        type: H.tablet,
        vendor: "Amazon"
    })
}, {
    test: [/tablet(?! pc)/i],
    describe: () => ({
        type: H.tablet
    })
}, {
    test(e) {
        const t = e.test(/ipod|iphone/i)
          , n = e.test(/like (ipod|iphone)/i);
        return t && !n
    },
    describe(e) {
        const t = G.getFirstMatch(/(ipod|iphone)/i, e);
        return {
            type: H.mobile,
            vendor: "Apple",
            model: t
        }
    }
}, {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe: () => ({
        type: H.mobile,
        vendor: "Nexus"
    })
}, {
    test: [/[^-]mobi/i],
    describe: () => ({
        type: H.mobile
    })
}, {
    test: e => "blackberry" === e.getBrowserName(!0),
    describe: () => ({
        type: H.mobile,
        vendor: "BlackBerry"
    })
}, {
    test: e => "bada" === e.getBrowserName(!0),
    describe: () => ({
        type: H.mobile
    })
}, {
    test: e => "windows phone" === e.getBrowserName(),
    describe: () => ({
        type: H.mobile,
        vendor: "Microsoft"
    })
}, {
    test(e) {
        const t = Number(String(e.getOSVersion()).split(".")[0]);
        return "android" === e.getOSName(!0) && t >= 3
    },
    describe: () => ({
        type: H.tablet
    })
}, {
    test: e => "android" === e.getOSName(!0),
    describe: () => ({
        type: H.mobile
    })
}, {
    test: e => "macos" === e.getOSName(!0),
    describe: () => ({
        type: H.desktop,
        vendor: "Apple"
    })
}, {
    test: e => "windows" === e.getOSName(!0),
    describe: () => ({
        type: H.desktop
    })
}, {
    test: e => "linux" === e.getOSName(!0),
    describe: () => ({
        type: H.desktop
    })
}, {
    test: e => "playstation 4" === e.getOSName(!0),
    describe: () => ({
        type: H.tv
    })
}, {
    test: e => "roku" === e.getOSName(!0),
    describe: () => ({
        type: H.tv
    })
}]
  , ee = [{
    test: e => "microsoft edge" === e.getBrowserName(!0),
    describe(e) {
        if (/\sedg\//i.test(e))
            return {
                name: Y.Blink
            };
        const t = G.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
        return {
            name: Y.EdgeHTML,
            version: t
        }
    }
}, {
    test: [/trident/i],
    describe(e) {
        const t = {
            name: Y.Trident
        }
          , n = G.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: e => e.test(/presto/i),
    describe(e) {
        const t = {
            name: Y.Presto
        }
          , n = G.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test(e) {
        const t = e.test(/gecko/i)
          , n = e.test(/like gecko/i);
        return t && !n
    },
    describe(e) {
        const t = {
            name: Y.Gecko
        }
          , n = G.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}, {
    test: [/(apple)?webkit\/537\.36/i],
    describe: () => ({
        name: Y.Blink
    })
}, {
    test: [/(apple)?webkit/i],
    describe(e) {
        const t = {
            name: Y.WebKit
        }
          , n = G.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
        return n && (t.version = n),
        t
    }
}];
class te {
    constructor(e, t=!1) {
        if (null == e || "" === e)
            throw new Error("UserAgent parameter can't be empty");
        this._ua = e,
        this.parsedResult = {},
        !0 !== t && this.parse()
    }
    getUA() {
        return this._ua
    }
    test(e) {
        return e.test(this._ua)
    }
    parseBrowser() {
        this.parsedResult.browser = {};
        const e = G.find(X, (e => {
            if ("function" == typeof e.test)
                return e.test(this);
            if (e.test instanceof Array)
                return e.test.some((e => this.test(e)));
            throw new Error("Browser's test function is not valid")
        }
        ));
        return e && (this.parsedResult.browser = e.describe(this.getUA())),
        this.parsedResult.browser
    }
    getBrowser() {
        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
    }
    getBrowserName(e) {
        return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
    }
    getBrowserVersion() {
        return this.getBrowser().version
    }
    getOS() {
        return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
    }
    parseOS() {
        this.parsedResult.os = {};
        const e = G.find(J, (e => {
            if ("function" == typeof e.test)
                return e.test(this);
            if (e.test instanceof Array)
                return e.test.some((e => this.test(e)));
            throw new Error("Browser's test function is not valid")
        }
        ));
        return e && (this.parsedResult.os = e.describe(this.getUA())),
        this.parsedResult.os
    }
    getOSName(e) {
        const {name: t} = this.getOS();
        return e ? String(t).toLowerCase() || "" : t || ""
    }
    getOSVersion() {
        return this.getOS().version
    }
    getPlatform() {
        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
    }
    getPlatformType(e=!1) {
        const {type: t} = this.getPlatform();
        return e ? String(t).toLowerCase() || "" : t || ""
    }
    parsePlatform() {
        this.parsedResult.platform = {};
        const e = G.find(Z, (e => {
            if ("function" == typeof e.test)
                return e.test(this);
            if (e.test instanceof Array)
                return e.test.some((e => this.test(e)));
            throw new Error("Browser's test function is not valid")
        }
        ));
        return e && (this.parsedResult.platform = e.describe(this.getUA())),
        this.parsedResult.platform
    }
    getEngine() {
        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
    }
    getEngineName(e) {
        return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
    }
    parseEngine() {
        this.parsedResult.engine = {};
        const e = G.find(ee, (e => {
            if ("function" == typeof e.test)
                return e.test(this);
            if (e.test instanceof Array)
                return e.test.some((e => this.test(e)));
            throw new Error("Browser's test function is not valid")
        }
        ));
        return e && (this.parsedResult.engine = e.describe(this.getUA())),
        this.parsedResult.engine
    }
    parse() {
        return this.parseBrowser(),
        this.parseOS(),
        this.parsePlatform(),
        this.parseEngine(),
        this
    }
    getResult() {
        return G.assign({}, this.parsedResult)
    }
    satisfies(e) {
        const t = {};
        let n = 0;
        const r = {};
        let o = 0;
        if (Object.keys(e).forEach((i => {
            const a = e[i];
            "string" == typeof a ? (r[i] = a,
            o += 1) : "object" == typeof a && (t[i] = a,
            n += 1)
        }
        )),
        n > 0) {
            const e = Object.keys(t)
              , n = G.find(e, (e => this.isOS(e)));
            if (n) {
                const e = this.satisfies(t[n]);
                if (void 0 !== e)
                    return e
            }
            const r = G.find(e, (e => this.isPlatform(e)));
            if (r) {
                const e = this.satisfies(t[r]);
                if (void 0 !== e)
                    return e
            }
        }
        if (o > 0) {
            const e = Object.keys(r)
              , t = G.find(e, (e => this.isBrowser(e, !0)));
            if (void 0 !== t)
                return this.compareVersion(r[t])
        }
    }
    isBrowser(e, t=!1) {
        const n = this.getBrowserName().toLowerCase();
        let r = e.toLowerCase();
        const o = G.getBrowserTypeByAlias(r);
        return t && o && (r = o.toLowerCase()),
        r === n
    }
    compareVersion(e) {
        let t = [0]
          , n = e
          , r = !1;
        const o = this.getBrowserVersion();
        if ("string" == typeof o)
            return ">" === e[0] || "<" === e[0] ? (n = e.substr(1),
            "=" === e[1] ? (r = !0,
            n = e.substr(2)) : t = [],
            ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (r = !0,
            n = e.substr(1)),
            t.indexOf(G.compareVersions(o, n, r)) > -1
    }
    isOS(e) {
        return this.getOSName(!0) === String(e).toLowerCase()
    }
    isPlatform(e) {
        return this.getPlatformType(!0) === String(e).toLowerCase()
    }
    isEngine(e) {
        return this.getEngineName(!0) === String(e).toLowerCase()
    }
    is(e, t=!1) {
        return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
    }
    some(e=[]) {
        return e.some((e => this.is(e)))
    }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class ne {
    static getParser(e, t=!1) {
        if ("string" != typeof e)
            throw new Error("UserAgent should be a string");
        return new te(e,t)
    }
    static parse(e) {
        return new te(e).getResult()
    }
    static get BROWSER_MAP() {
        return $
    }
    static get ENGINE_MAP() {
        return Y
    }
    static get OS_MAP() {
        return Q
    }
    static get PLATFORMS_MAP() {
        return H
    }
}
function re(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: oe} = Object.prototype
  , {getPrototypeOf: ie} = Object
  , ae = (e => t => {
    const n = oe.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , se = e => (e = e.toLowerCase(),
t => ae(t) === e)
  , ue = e => t => typeof t === e
  , {isArray: le} = Array
  , ce = ue("undefined");
const de = se("ArrayBuffer");
const fe = ue("string")
  , pe = ue("function")
  , he = ue("number")
  , me = e => null !== e && "object" == typeof e
  , ge = e => {
    if ("object" !== ae(e))
        return !1;
    const t = ie(e);
    return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
}
  , ye = se("Date")
  , ve = se("File")
  , be = se("Blob")
  , _e = se("FileList")
  , we = se("URLSearchParams")
  , [Se,ke,xe,Ee] = ["ReadableStream", "Request", "Response", "Headers"].map(se);
function Ce(e, t, {allOwnKeys: n=!1}={}) {
    if (null == e)
        return;
    let r, o;
    if ("object" != typeof e && (e = [e]),
    le(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = o.length;
        let a;
        for (r = 0; r < i; r++)
            a = o[r],
            t.call(null, e[a], a, e)
    }
}
function Te(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r, o = n.length;
    for (; o-- > 0; )
        if (r = n[o],
        t === r.toLowerCase())
            return r;
    return null
}
const Re = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global
  , Oe = e => !ce(e) && e !== Re;
const Ie = (e => t => e && t instanceof e)("undefined" != typeof Uint8Array && ie(Uint8Array))
  , Me = se("HTMLFormElement")
  , Pe = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Ne = se("RegExp")
  , De = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Ce(n, ( (n, o) => {
        let i;
        !1 !== (i = t(n, o, e)) && (r[o] = i || n)
    }
    )),
    Object.defineProperties(e, r)
}
  , Le = "abcdefghijklmnopqrstuvwxyz"
  , Ae = "0123456789"
  , Fe = {
    DIGIT: Ae,
    ALPHA: Le,
    ALPHA_DIGIT: Le + Le.toUpperCase() + Ae
};
const Ue = se("AsyncFunction")
  , je = (ze = "function" == typeof setImmediate,
Be = pe(Re.postMessage),
ze ? setImmediate : Be ? (qe = `axios@${Math.random()}`,
We = [],
Re.addEventListener("message", ( ({source: e, data: t}) => {
    e === Re && t === qe && We.length && We.shift()()
}
), !1),
e => {
    We.push(e),
    Re.postMessage(qe, "*")
}
) : e => setTimeout(e));
var ze, Be, qe, We;
const Ve = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(Re) : "undefined" != typeof process && process.nextTick || je
  , $e = {
    isArray: le,
    isArrayBuffer: de,
    isBuffer: function(e) {
        return null !== e && !ce(e) && null !== e.constructor && !ce(e.constructor) && pe(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    },
    isFormData: e => {
        let t;
        return e && ("function" == typeof FormData && e instanceof FormData || pe(e.append) && ("formdata" === (t = ae(e)) || "object" === t && pe(e.toString) && "[object FormData]" === e.toString()))
    }
    ,
    isArrayBufferView: function(e) {
        let t;
        return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && de(e.buffer),
        t
    },
    isString: fe,
    isNumber: he,
    isBoolean: e => !0 === e || !1 === e,
    isObject: me,
    isPlainObject: ge,
    isReadableStream: Se,
    isRequest: ke,
    isResponse: xe,
    isHeaders: Ee,
    isUndefined: ce,
    isDate: ye,
    isFile: ve,
    isBlob: be,
    isRegExp: Ne,
    isFunction: pe,
    isStream: e => me(e) && pe(e.pipe),
    isURLSearchParams: we,
    isTypedArray: Ie,
    isFileList: _e,
    forEach: Ce,
    merge: function e() {
        const {caseless: t} = Oe(this) && this || {}
          , n = {}
          , r = (r, o) => {
            const i = t && Te(n, o) || o;
            ge(n[i]) && ge(r) ? n[i] = e(n[i], r) : ge(r) ? n[i] = e({}, r) : le(r) ? n[i] = r.slice() : n[i] = r
        }
        ;
        for (let o = 0, i = arguments.length; o < i; o++)
            arguments[o] && Ce(arguments[o], r);
        return n
    },
    extend: (e, t, n, {allOwnKeys: r}={}) => (Ce(t, ( (t, r) => {
        n && pe(t) ? e[r] = re(t, n) : e[r] = t
    }
    ), {
        allOwnKeys: r
    }),
    e),
    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)),
    e),
    inherits: (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r),
        e.prototype.constructor = e,
        Object.defineProperty(e, "super", {
            value: t.prototype
        }),
        n && Object.assign(e.prototype, n)
    }
    ,
    toFlatObject: (e, t, n, r) => {
        let o, i, a;
        const s = {};
        if (t = t || {},
        null == e)
            return t;
        do {
            for (o = Object.getOwnPropertyNames(e),
            i = o.length; i-- > 0; )
                a = o[i],
                r && !r(a, e, t) || s[a] || (t[a] = e[a],
                s[a] = !0);
            e = !1 !== n && ie(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }
    ,
    kindOf: ae,
    kindOfTest: se,
    endsWith: (e, t, n) => {
        e = String(e),
        (void 0 === n || n > e.length) && (n = e.length),
        n -= t.length;
        const r = e.indexOf(t, n);
        return -1 !== r && r === n
    }
    ,
    toArray: e => {
        if (!e)
            return null;
        if (le(e))
            return e;
        let t = e.length;
        if (!he(t))
            return null;
        const n = new Array(t);
        for (; t-- > 0; )
            n[t] = e[t];
        return n
    }
    ,
    forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
            const n = r.value;
            t.call(e, n[0], n[1])
        }
    }
    ,
    matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); )
            r.push(n);
        return r
    }
    ,
    isHTMLForm: Me,
    hasOwnProperty: Pe,
    hasOwnProp: Pe,
    reduceDescriptors: De,
    freezeMethods: e => {
        De(e, ( (t, n) => {
            if (pe(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
            const r = e[n];
            pe(r) && (t.enumerable = !1,
            "writable"in t ? t.writable = !1 : t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            ))
        }
        ))
    }
    ,
    toObjectSet: (e, t) => {
        const n = {}
          , r = e => {
            e.forEach((e => {
                n[e] = !0
            }
            ))
        }
        ;
        return le(e) ? r(e) : r(String(e).split(t)),
        n
    }
    ,
    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
        return t.toUpperCase() + n
    }
    )),
    noop: () => {}
    ,
    toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
    findKey: Te,
    global: Re,
    isContextDefined: Oe,
    ALPHABET: Fe,
    generateString: (e=16, t=Fe.ALPHA_DIGIT) => {
        let n = "";
        const {length: r} = t;
        for (; e--; )
            n += t[Math.random() * r | 0];
        return n
    }
    ,
    isSpecCompliantForm: function(e) {
        return !!(e && pe(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
    },
    toJSONObject: e => {
        const t = new Array(10)
          , n = (e, r) => {
            if (me(e)) {
                if (t.indexOf(e) >= 0)
                    return;
                if (!("toJSON"in e)) {
                    t[r] = e;
                    const o = le(e) ? [] : {};
                    return Ce(e, ( (e, t) => {
                        const i = n(e, r + 1);
                        !ce(i) && (o[t] = i)
                    }
                    )),
                    t[r] = void 0,
                    o
                }
            }
            return e
        }
        ;
        return n(e, 0)
    }
    ,
    isAsyncFn: Ue,
    isThenable: e => e && (me(e) || pe(e)) && pe(e.then) && pe(e.catch),
    setImmediate: je,
    asap: Ve
};
function He(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o,
    this.status = o.status ? o.status : null)
}
$e.inherits(He, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: $e.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Qe = He.prototype
  , Ye = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
    Ye[e] = {
        value: e
    }
}
)),
Object.defineProperties(He, Ye),
Object.defineProperty(Qe, "isAxiosError", {
    value: !0
}),
He.from = (e, t, n, r, o, i) => {
    const a = Object.create(Qe);
    return $e.toFlatObject(e, a, (function(e) {
        return e !== Error.prototype
    }
    ), (e => "isAxiosError" !== e)),
    He.call(a, e.message, t, n, r, o),
    a.cause = e,
    a.name = e.name,
    i && Object.assign(a, i),
    a
}
;
function Ge(e) {
    return $e.isPlainObject(e) || $e.isArray(e)
}
function Ke(e) {
    return $e.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Xe(e, t, n) {
    return e ? e.concat(t).map((function(e, t) {
        return e = Ke(e),
        !n && t ? "[" + e + "]" : e
    }
    )).join(n ? "." : "") : t
}
const Je = $e.toFlatObject($e, {}, null, (function(e) {
    return /^is[A-Z]/.test(e)
}
));
function Ze(e, t, n) {
    if (!$e.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData;
    const r = (n = $e.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, (function(e, t) {
        return !$e.isUndefined(t[e])
    }
    ))).metaTokens
      , o = n.visitor || l
      , i = n.dots
      , a = n.indexes
      , s = (n.Blob || "undefined" != typeof Blob && Blob) && $e.isSpecCompliantForm(t);
    if (!$e.isFunction(o))
        throw new TypeError("visitor must be a function");
    function u(e) {
        if (null === e)
            return "";
        if ($e.isDate(e))
            return e.toISOString();
        if (!s && $e.isBlob(e))
            throw new He("Blob is not supported. Use a Buffer instead.");
        return $e.isArrayBuffer(e) || $e.isTypedArray(e) ? s && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
    }
    function l(e, n, o) {
        let s = e;
        if (e && !o && "object" == typeof e)
            if ($e.endsWith(n, "{}"))
                n = r ? n : n.slice(0, -2),
                e = JSON.stringify(e);
            else if ($e.isArray(e) && function(e) {
                return $e.isArray(e) && !e.some(Ge)
            }(e) || ($e.isFileList(e) || $e.endsWith(n, "[]")) && (s = $e.toArray(e)))
                return n = Ke(n),
                s.forEach((function(e, r) {
                    !$e.isUndefined(e) && null !== e && t.append(!0 === a ? Xe([n], r, i) : null === a ? n : n + "[]", u(e))
                }
                )),
                !1;
        return !!Ge(e) || (t.append(Xe(o, n, i), u(e)),
        !1)
    }
    const c = []
      , d = Object.assign(Je, {
        defaultVisitor: l,
        convertValue: u,
        isVisitable: Ge
    });
    if (!$e.isObject(e))
        throw new TypeError("data must be an object");
    return function e(n, r) {
        if (!$e.isUndefined(n)) {
            if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
            c.push(n),
            $e.forEach(n, (function(n, i) {
                !0 === (!($e.isUndefined(n) || null === n) && o.call(t, n, $e.isString(i) ? i.trim() : i, r, d)) && e(n, r ? r.concat(i) : [i])
            }
            )),
            c.pop()
        }
    }(e),
    t
}
function et(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
        return t[e]
    }
    ))
}
function tt(e, t) {
    this._pairs = [],
    e && Ze(e, this, t)
}
const nt = tt.prototype;
function rt(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function ot(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || rt;
    $e.isFunction(n) && (n = {
        serialize: n
    });
    const o = n && n.serialize;
    let i;
    if (i = o ? o(t, n) : $e.isURLSearchParams(t) ? t.toString() : new tt(t,n).toString(r),
    i) {
        const t = e.indexOf("#");
        -1 !== t && (e = e.slice(0, t)),
        e += (-1 === e.indexOf("?") ? "?" : "&") + i
    }
    return e
}
nt.append = function(e, t) {
    this._pairs.push([e, t])
}
,
nt.toString = function(e) {
    const t = e ? function(t) {
        return e.call(this, t, et)
    }
    : et;
    return this._pairs.map((function(e) {
        return t(e[0]) + "=" + t(e[1])
    }
    ), "").join("&")
}
;
class it {
    constructor() {
        this.handlers = []
    }
    use(e, t, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        $e.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }
        ))
    }
}
const at = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , st = {
    isBrowser: !0,
    classes: {
        URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : tt,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , ut = "undefined" != typeof window && "undefined" != typeof document
  , lt = "object" == typeof navigator && navigator || void 0
  , ct = ut && (!lt || ["ReactNative", "NativeScript", "NS"].indexOf(lt.product) < 0)
  , dt = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts
  , ft = ut && window.location.href || "http://localhost"
  , pt = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: ut,
    hasStandardBrowserEnv: ct,
    hasStandardBrowserWebWorkerEnv: dt,
    navigator: lt,
    origin: ft
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ht = u(u({}, pt), st);
function mt(e) {
    function t(e, n, r, o) {
        let i = e[o++];
        if ("__proto__" === i)
            return !0;
        const a = Number.isFinite(+i)
          , s = o >= e.length;
        if (i = !i && $e.isArray(r) ? r.length : i,
        s)
            return $e.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n,
            !a;
        r[i] && $e.isObject(r[i]) || (r[i] = []);
        return t(e, n, r[i], o) && $e.isArray(r[i]) && (r[i] = function(e) {
            const t = {}
              , n = Object.keys(e);
            let r;
            const o = n.length;
            let i;
            for (r = 0; r < o; r++)
                i = n[r],
                t[i] = e[i];
            return t
        }(r[i])),
        !a
    }
    if ($e.isFormData(e) && $e.isFunction(e.entries)) {
        const n = {};
        return $e.forEachEntry(e, ( (e, r) => {
            t(function(e) {
                return $e.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
            }(e), r, n, 0)
        }
        )),
        n
    }
    return null
}
const gt = {
    transitional: at,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, t) {
        const n = t.getContentType() || ""
          , r = n.indexOf("application/json") > -1
          , o = $e.isObject(e);
        o && $e.isHTMLForm(e) && (e = new FormData(e));
        if ($e.isFormData(e))
            return r ? JSON.stringify(mt(e)) : e;
        if ($e.isArrayBuffer(e) || $e.isBuffer(e) || $e.isStream(e) || $e.isFile(e) || $e.isBlob(e) || $e.isReadableStream(e))
            return e;
        if ($e.isArrayBufferView(e))
            return e.buffer;
        if ($e.isURLSearchParams(e))
            return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let i;
        if (o) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return function(e, t) {
                    return Ze(e, new ht.classes.URLSearchParams, Object.assign({
                        visitor: function(e, t, n, r) {
                            return ht.isNode && $e.isBuffer(e) ? (this.append(t, e.toString("base64")),
                            !1) : r.defaultVisitor.apply(this, arguments)
                        }
                    }, t))
                }(e, this.formSerializer).toString();
            if ((i = $e.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                const t = this.env && this.env.FormData;
                return Ze(i ? {
                    "files[]": e
                } : e, t && new t, this.formSerializer)
            }
        }
        return o || r ? (t.setContentType("application/json", !1),
        function(e, t, n) {
            if ($e.isString(e))
                try {
                    return (t || JSON.parse)(e),
                    $e.trim(e)
                } catch (r) {
                    if ("SyntaxError" !== r.name)
                        throw r
                }
            return (n || JSON.stringify)(e)
        }(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const t = this.transitional || gt.transitional
          , n = t && t.forcedJSONParsing
          , r = "json" === this.responseType;
        if ($e.isResponse(e) || $e.isReadableStream(e))
            return e;
        if (e && $e.isString(e) && (n && !this.responseType || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
                return JSON.parse(e)
            } catch (o) {
                if (n) {
                    if ("SyntaxError" === o.name)
                        throw He.from(o, He.ERR_BAD_RESPONSE, this, null, this.response);
                    throw o
                }
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: ht.classes.FormData,
        Blob: ht.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
$e.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
    gt.headers[e] = {}
}
));
const yt = $e.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , vt = Symbol("internals");
function bt(e) {
    return e && String(e).trim().toLowerCase()
}
function _t(e) {
    return !1 === e || null == e ? e : $e.isArray(e) ? e.map(_t) : String(e)
}
function wt(e, t, n, r, o) {
    return $e.isFunction(r) ? r.call(this, t, n) : (o && (t = n),
    $e.isString(t) ? $e.isString(r) ? -1 !== t.indexOf(r) : $e.isRegExp(r) ? r.test(t) : void 0 : void 0)
}
class St {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, n) {
        const r = this;
        function o(e, t, n) {
            const o = bt(t);
            if (!o)
                throw new Error("header name must be a non-empty string");
            const i = $e.findKey(r, o);
            (!i || void 0 === r[i] || !0 === n || void 0 === n && !1 !== r[i]) && (r[i || t] = _t(e))
        }
        const i = (e, t) => $e.forEach(e, ( (e, n) => o(e, n, t)));
        if ($e.isPlainObject(e) || e instanceof this.constructor)
            i(e, t);
        else if ($e.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
            i((e => {
                const t = {};
                let n, r, o;
                return e && e.split("\n").forEach((function(e) {
                    o = e.indexOf(":"),
                    n = e.substring(0, o).trim().toLowerCase(),
                    r = e.substring(o + 1).trim(),
                    !n || t[n] && yt[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                }
                )),
                t
            }
            )(e), t);
        else if ($e.isHeaders(e))
            for (const [a,s] of e.entries())
                o(s, a, n);
        else
            null != e && o(t, e, n);
        return this
    }
    get(e, t) {
        if (e = bt(e)) {
            const n = $e.findKey(this, e);
            if (n) {
                const e = this[n];
                if (!t)
                    return e;
                if (!0 === t)
                    return function(e) {
                        const t = Object.create(null)
                          , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let r;
                        for (; r = n.exec(e); )
                            t[r[1]] = r[2];
                        return t
                    }(e);
                if ($e.isFunction(t))
                    return t.call(this, e, n);
                if ($e.isRegExp(t))
                    return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, t) {
        if (e = bt(e)) {
            const n = $e.findKey(this, e);
            return !(!n || void 0 === this[n] || t && !wt(0, this[n], n, t))
        }
        return !1
    }
    delete(e, t) {
        const n = this;
        let r = !1;
        function o(e) {
            if (e = bt(e)) {
                const o = $e.findKey(n, e);
                !o || t && !wt(0, n[o], o, t) || (delete n[o],
                r = !0)
            }
        }
        return $e.isArray(e) ? e.forEach(o) : o(e),
        r
    }
    clear(e) {
        const t = Object.keys(this);
        let n = t.length
          , r = !1;
        for (; n--; ) {
            const o = t[n];
            e && !wt(0, this[o], o, e, !0) || (delete this[o],
            r = !0)
        }
        return r
    }
    normalize(e) {
        const t = this
          , n = {};
        return $e.forEach(this, ( (r, o) => {
            const i = $e.findKey(n, o);
            if (i)
                return t[i] = _t(r),
                void delete t[o];
            const a = e ? function(e) {
                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ( (e, t, n) => t.toUpperCase() + n))
            }(o) : String(o).trim();
            a !== o && delete t[o],
            t[a] = _t(r),
            n[a] = !0
        }
        )),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const t = Object.create(null);
        return $e.forEach(this, ( (n, r) => {
            null != n && !1 !== n && (t[r] = e && $e.isArray(n) ? n.join(", ") : n)
        }
        )),
        t
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(( ([e,t]) => e + ": " + t)).join("\n")
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
        const n = new this(e);
        return t.forEach((e => n.set(e))),
        n
    }
    static accessor(e) {
        const t = (this[vt] = this[vt] = {
            accessors: {}
        }).accessors
          , n = this.prototype;
        function r(e) {
            const r = bt(e);
            t[r] || (!function(e, t) {
                const n = $e.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r => {
                    Object.defineProperty(e, r + n, {
                        value: function(e, n, o) {
                            return this[r].call(this, t, e, n, o)
                        },
                        configurable: !0
                    })
                }
                ))
            }(n, e),
            t[r] = !0)
        }
        return $e.isArray(e) ? e.forEach(r) : r(e),
        this
    }
}
function kt(e, t) {
    const n = this || gt
      , r = t || n
      , o = St.from(r.headers);
    let i = r.data;
    return $e.forEach(e, (function(e) {
        i = e.call(n, i, o.normalize(), t ? t.status : void 0)
    }
    )),
    o.normalize(),
    i
}
function xt(e) {
    return !(!e || !e.__CANCEL__)
}
function Et(e, t, n) {
    He.call(this, null == e ? "canceled" : e, He.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
function Ct(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status) ? t(new He("Request failed with status code " + n.status,[He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n)) : e(n)
}
St.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
$e.reduceDescriptors(St.prototype, ( ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(e) {
            this[n] = e
        }
    }
}
)),
$e.freezeMethods(St),
$e.inherits(Et, He, {
    __CANCEL__: !0
});
const Tt = (e, t, n=3) => {
    let r = 0;
    const o = function(e, t) {
        e = e || 10;
        const n = new Array(e)
          , r = new Array(e);
        let o, i = 0, a = 0;
        return t = void 0 !== t ? t : 1e3,
        function(s) {
            const u = Date.now()
              , l = r[a];
            o || (o = u),
            n[i] = s,
            r[i] = u;
            let c = a
              , d = 0;
            for (; c !== i; )
                d += n[c++],
                c %= e;
            if (i = (i + 1) % e,
            i === a && (a = (a + 1) % e),
            u - o < t)
                return;
            const f = l && u - l;
            return f ? Math.round(1e3 * d / f) : void 0
        }
    }(50, 250);
    return function(e, t) {
        let n, r, o = 0, i = 1e3 / t;
        const a = (t, i=Date.now()) => {
            o = i,
            n = null,
            r && (clearTimeout(r),
            r = null),
            e.apply(null, t)
        }
        ;
        return [ (...e) => {
            const t = Date.now()
              , s = t - o;
            s >= i ? a(e, t) : (n = e,
            r || (r = setTimeout(( () => {
                r = null,
                a(n)
            }
            ), i - s)))
        }
        , () => n && a(n)]
    }((n => {
        const i = n.loaded
          , a = n.lengthComputable ? n.total : void 0
          , s = i - r
          , u = o(s);
        r = i;
        e({
            loaded: i,
            total: a,
            progress: a ? i / a : void 0,
            bytes: s,
            rate: u || void 0,
            estimated: u && a && i <= a ? (a - i) / u : void 0,
            event: n,
            lengthComputable: null != a,
            [t ? "download" : "upload"]: !0
        })
    }
    ), n)
}
  , Rt = (e, t) => {
    const n = null != e;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , Ot = e => (...t) => $e.asap(( () => e(...t)))
  , It = ht.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,ht.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(ht.origin), ht.navigator && /(msie|trident)/i.test(ht.navigator.userAgent)) : () => !0
  , Mt = ht.hasStandardBrowserEnv ? {
    write(e, t, n, r, o, i) {
        const a = [e + "=" + encodeURIComponent(t)];
        $e.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
        $e.isString(r) && a.push("path=" + r),
        $e.isString(o) && a.push("domain=" + o),
        !0 === i && a.push("secure"),
        document.cookie = a.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read: () => null,
    remove() {}
};
function Pt(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }(e, t) : t
}
const Nt = e => e instanceof St ? u({}, e) : e;
function Dt(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n, r) {
        return $e.isPlainObject(e) && $e.isPlainObject(t) ? $e.merge.call({
            caseless: r
        }, e, t) : $e.isPlainObject(t) ? $e.merge({}, t) : $e.isArray(t) ? t.slice() : t
    }
    function o(e, t, n, o) {
        return $e.isUndefined(t) ? $e.isUndefined(e) ? void 0 : r(void 0, e, 0, o) : r(e, t, 0, o)
    }
    function i(e, t) {
        if (!$e.isUndefined(t))
            return r(void 0, t)
    }
    function a(e, t) {
        return $e.isUndefined(t) ? $e.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
    }
    function s(n, o, i) {
        return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0
    }
    const u = {
        url: i,
        method: i,
        data: i,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        withXSRFToken: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: s,
        headers: (e, t, n) => o(Nt(e), Nt(t), 0, !0)
    };
    return $e.forEach(Object.keys(Object.assign({}, e, t)), (function(r) {
        const i = u[r] || o
          , a = i(e[r], t[r], r);
        $e.isUndefined(a) && i !== s || (n[r] = a)
    }
    )),
    n
}
const Lt = e => {
    const t = Dt({}, e);
    let n, {data: r, withXSRFToken: o, xsrfHeaderName: i, xsrfCookieName: a, headers: s, auth: u} = t;
    if (t.headers = s = St.from(s),
    t.url = ot(Pt(t.baseURL, t.url), e.params, e.paramsSerializer),
    u && s.set("Authorization", "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))),
    $e.isFormData(r))
        if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
        else if (!1 !== (n = s.getContentType())) {
            const [e,...t] = n ? n.split(";").map((e => e.trim())).filter(Boolean) : [];
            s.setContentType([e || "multipart/form-data", ...t].join("; "))
        }
    if (ht.hasStandardBrowserEnv && (o && $e.isFunction(o) && (o = o(t)),
    o || !1 !== o && It(t.url))) {
        const e = i && a && Mt.read(a);
        e && s.set(i, e)
    }
    return t
}
  , At = "undefined" != typeof XMLHttpRequest && function(e) {
    return new Promise((function(t, n) {
        const r = Lt(e);
        let o = r.data;
        const i = St.from(r.headers).normalize();
        let a, s, u, l, c, {responseType: d, onUploadProgress: f, onDownloadProgress: p} = r;
        function h() {
            l && l(),
            c && c(),
            r.cancelToken && r.cancelToken.unsubscribe(a),
            r.signal && r.signal.removeEventListener("abort", a)
        }
        let m = new XMLHttpRequest;
        function g() {
            if (!m)
                return;
            const r = St.from("getAllResponseHeaders"in m && m.getAllResponseHeaders());
            Ct((function(e) {
                t(e),
                h()
            }
            ), (function(e) {
                n(e),
                h()
            }
            ), {
                data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m
            }),
            m = null
        }
        m.open(r.method.toUpperCase(), r.url, !0),
        m.timeout = r.timeout,
        "onloadend"in m ? m.onloadend = g : m.onreadystatechange = function() {
            m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
        }
        ,
        m.onabort = function() {
            m && (n(new He("Request aborted",He.ECONNABORTED,e,m)),
            m = null)
        }
        ,
        m.onerror = function() {
            n(new He("Network Error",He.ERR_NETWORK,e,m)),
            m = null
        }
        ,
        m.ontimeout = function() {
            let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
            const o = r.transitional || at;
            r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
            n(new He(t,o.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,e,m)),
            m = null
        }
        ,
        void 0 === o && i.setContentType(null),
        "setRequestHeader"in m && $e.forEach(i.toJSON(), (function(e, t) {
            m.setRequestHeader(t, e)
        }
        )),
        $e.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials),
        d && "json" !== d && (m.responseType = r.responseType),
        p && ([u,c] = Tt(p, !0),
        m.addEventListener("progress", u)),
        f && m.upload && ([s,l] = Tt(f),
        m.upload.addEventListener("progress", s),
        m.upload.addEventListener("loadend", l)),
        (r.cancelToken || r.signal) && (a = t => {
            m && (n(!t || t.type ? new Et(null,e,m) : t),
            m.abort(),
            m = null)
        }
        ,
        r.cancelToken && r.cancelToken.subscribe(a),
        r.signal && (r.signal.aborted ? a() : r.signal.addEventListener("abort", a)));
        const y = function(e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return t && t[1] || ""
        }(r.url);
        y && -1 === ht.protocols.indexOf(y) ? n(new He("Unsupported protocol " + y + ":",He.ERR_BAD_REQUEST,e)) : m.send(o || null)
    }
    ))
}
  , Ft = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let n, r = new AbortController;
        const o = function(e) {
            if (!n) {
                n = !0,
                a();
                const t = e instanceof Error ? e : this.reason;
                r.abort(t instanceof He ? t : new Et(t instanceof Error ? t.message : t))
            }
        };
        let i = t && setTimeout(( () => {
            i = null,
            o(new He(`timeout ${t} of ms exceeded`,He.ETIMEDOUT))
        }
        ), t);
        const a = () => {
            e && (i && clearTimeout(i),
            i = null,
            e.forEach((e => {
                e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o)
            }
            )),
            e = null)
        }
        ;
        e.forEach((e => e.addEventListener("abort", o)));
        const {signal: s} = r;
        return s.unsubscribe = () => $e.asap(a),
        s
    }
}
  , Ut = function*(e, t) {
    let n = e.byteLength;
    if (!t || n < t)
        return void (yield e);
    let r, o = 0;
    for (; o < n; )
        r = o + t,
        yield e.slice(o, r),
        o = r
}
  , jt = function(e, t) {
    return d(this, null, (function*() {
        try {
            for (var n, r, o, i = ( (e, t, n) => (t = e[a("asyncIterator")]) ? t.call(e) : (e = e[a("iterator")](),
            t = {},
            (n = (n, r) => (r = e[n]) && (t[n] = t => new Promise(( (n, o, i) => (t = r.call(e, t),
            i = t.done,
            Promise.resolve(t.value).then((e => n({
                value: e,
                done: i
            })), o))))))("next"),
            n("return"),
            t))(zt(e)); n = !(r = yield new c(i.next())).done; n = !1) {
                const e = r.value;
                yield*f(Ut(e, t))
            }
        } catch (r) {
            o = [r]
        } finally {
            try {
                n && (r = i.return) && (yield new c(r.call(i)))
            } finally {
                if (o)
                    throw o[0]
            }
        }
    }
    ))
}
  , zt = function(e) {
    return d(this, null, (function*() {
        if (e[Symbol.asyncIterator])
            return void (yield*f(e));
        const t = e.getReader();
        try {
            for (; ; ) {
                const {done: e, value: n} = yield new c(t.read());
                if (e)
                    break;
                yield n
            }
        } finally {
            yield new c(t.cancel())
        }
    }
    ))
}
  , Bt = (e, t, n, r) => {
    const o = jt(e, t);
    let i, a = 0, s = e => {
        i || (i = !0,
        r && r(e))
    }
    ;
    return new ReadableStream({
        pull(e) {
            return l(this, null, (function*() {
                try {
                    const {done: t, value: r} = yield o.next();
                    if (t)
                        return s(),
                        void e.close();
                    let i = r.byteLength;
                    if (n) {
                        let e = a += i;
                        n(e)
                    }
                    e.enqueue(new Uint8Array(r))
                } catch (t) {
                    throw s(t),
                    t
                }
            }
            ))
        },
        cancel: e => (s(e),
        o.return())
    },{
        highWaterMark: 2
    })
}
  , qt = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response
  , Wt = qt && "function" == typeof ReadableStream
  , Vt = qt && ("function" == typeof TextEncoder ? (e => t => e.encode(t))(new TextEncoder) : e => l(void 0, null, (function*() {
    return new Uint8Array(yield new Response(e).arrayBuffer())
}
)))
  , $t = (e, ...t) => {
    try {
        return !!e(...t)
    } catch (n) {
        return !1
    }
}
  , Ht = Wt && $t(( () => {
    let e = !1;
    const t = new Request(ht.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
))
  , Qt = Wt && $t(( () => $e.isReadableStream(new Response("").body)))
  , Yt = {
    stream: Qt && (e => e.body)
};
var Gt;
qt && (Gt = new Response,
["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e => {
    !Yt[e] && (Yt[e] = $e.isFunction(Gt[e]) ? t => t[e]() : (t, n) => {
        throw new He(`Response type '${e}' is not supported`,He.ERR_NOT_SUPPORT,n)
    }
    )
}
)));
const Kt = (e, t) => l(void 0, null, (function*() {
    const n = $e.toFiniteNumber(e.getContentLength());
    return null == n ? (e => l(void 0, null, (function*() {
        if (null == e)
            return 0;
        if ($e.isBlob(e))
            return e.size;
        if ($e.isSpecCompliantForm(e)) {
            const t = new Request(ht.origin,{
                method: "POST",
                body: e
            });
            return (yield t.arrayBuffer()).byteLength
        }
        return $e.isArrayBufferView(e) || $e.isArrayBuffer(e) ? e.byteLength : ($e.isURLSearchParams(e) && (e += ""),
        $e.isString(e) ? (yield Vt(e)).byteLength : void 0)
    }
    )))(t) : n
}
))
  , Xt = qt && (e => l(void 0, null, (function*() {
    let {url: r, method: o, data: i, signal: a, cancelToken: s, timeout: l, onDownloadProgress: c, onUploadProgress: d, responseType: f, headers: p, withCredentials: h="same-origin", fetchOptions: m} = Lt(e);
    f = f ? (f + "").toLowerCase() : "text";
    let g, y = Ft([a, s && s.toAbortSignal()], l);
    const v = y && y.unsubscribe && ( () => {
        y.unsubscribe()
    }
    );
    let b;
    try {
        if (d && Ht && "get" !== o && "head" !== o && 0 !== (b = yield Kt(p, i))) {
            let e, t = new Request(r,{
                method: "POST",
                body: i,
                duplex: "half"
            });
            if ($e.isFormData(i) && (e = t.headers.get("content-type")) && p.setContentType(e),
            t.body) {
                const [e,n] = Rt(b, Tt(Ot(d)));
                i = Bt(t.body, 65536, e, n)
            }
        }
        $e.isString(h) || (h = h ? "include" : "omit");
        const a = "credentials"in Request.prototype;
        g = new Request(r,(_ = u({}, m),
        w = {
            signal: y,
            method: o.toUpperCase(),
            headers: p.normalize().toJSON(),
            body: i,
            duplex: "half",
            credentials: a ? h : void 0
        },
        t(_, n(w))));
        let s = yield fetch(g);
        const l = Qt && ("stream" === f || "response" === f);
        if (Qt && (c || l && v)) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t => {
                e[t] = s[t]
            }
            ));
            const t = $e.toFiniteNumber(s.headers.get("content-length"))
              , [n,r] = c && Rt(t, Tt(Ot(c), !0)) || [];
            s = new Response(Bt(s.body, 65536, n, ( () => {
                r && r(),
                v && v()
            }
            )),e)
        }
        f = f || "text";
        let S = yield Yt[$e.findKey(Yt, f) || "text"](s, e);
        return !l && v && v(),
        yield new Promise(( (t, n) => {
            Ct(t, n, {
                data: S,
                headers: St.from(s.headers),
                status: s.status,
                statusText: s.statusText,
                config: e,
                request: g
            })
        }
        ))
    } catch (S) {
        if (v && v(),
        S && "TypeError" === S.name && /fetch/i.test(S.message))
            throw Object.assign(new He("Network Error",He.ERR_NETWORK,e,g), {
                cause: S.cause || S
            });
        throw He.from(S, S && S.code, e, g)
    }
    var _, w
}
)))
  , Jt = {
    http: null,
    xhr: At,
    fetch: Xt
};
$e.forEach(Jt, ( (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch (n) {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
));
const Zt = e => `- ${e}`
  , en = e => $e.isFunction(e) || null === e || !1 === e
  , tn = e => {
    e = $e.isArray(e) ? e : [e];
    const {length: t} = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
        let t;
        if (n = e[i],
        r = n,
        !en(n) && (r = Jt[(t = String(n)).toLowerCase()],
        void 0 === r))
            throw new He(`Unknown adapter '${t}'`);
        if (r)
            break;
        o[t || "#" + i] = r
    }
    if (!r) {
        const e = Object.entries(o).map(( ([e,t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
        throw new He("There is no suitable adapter to dispatch the request " + (t ? e.length > 1 ? "since :\n" + e.map(Zt).join("\n") : " " + Zt(e[0]) : "as no adapter specified"),"ERR_NOT_SUPPORT")
    }
    return r
}
;
function nn(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Et(null,e)
}
function rn(e) {
    nn(e),
    e.headers = St.from(e.headers),
    e.data = kt.call(e, e.transformRequest),
    -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return tn(e.adapter || gt.adapter)(e).then((function(t) {
        return nn(e),
        t.data = kt.call(e, e.transformResponse, t),
        t.headers = St.from(t.headers),
        t
    }
    ), (function(t) {
        return xt(t) || (nn(e),
        t && t.response && (t.response.data = kt.call(e, e.transformResponse, t.response),
        t.response.headers = St.from(t.response.headers))),
        Promise.reject(t)
    }
    ))
}
const on = "1.7.9"
  , an = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(( (e, t) => {
    an[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
));
const sn = {};
an.transitional = function(e, t, n) {
    function r(e, t) {
        return "[Axios v1.7.9] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
    }
    return (n, o, i) => {
        if (!1 === e)
            throw new He(r(o, " has been removed" + (t ? " in " + t : "")),He.ERR_DEPRECATED);
        return t && !sn[o] && (sn[o] = !0,
        console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
        !e || e(n, o, i)
    }
}
,
an.spelling = function(e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`),
    !0)
}
;
const un = {
    assertOptions: function(e, t, n) {
        if ("object" != typeof e)
            throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
            const i = r[o]
              , a = t[i];
            if (a) {
                const t = e[i]
                  , n = void 0 === t || a(t, i, e);
                if (!0 !== n)
                    throw new He("option " + i + " must be " + n,He.ERR_BAD_OPTION_VALUE)
            } else if (!0 !== n)
                throw new He("Unknown option " + i,He.ERR_BAD_OPTION)
        }
    },
    validators: an
}
  , ln = un.validators;
class cn {
    constructor(e) {
        this.defaults = e,
        this.interceptors = {
            request: new it,
            response: new it
        }
    }
    request(e, t) {
        return l(this, null, (function*() {
            try {
                return yield this._request(e, t)
            } catch (n) {
                if (n instanceof Error) {
                    let e = {};
                    Error.captureStackTrace ? Error.captureStackTrace(e) : e = new Error;
                    const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                    try {
                        n.stack ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t) : n.stack = t
                    } catch (r) {}
                }
                throw n
            }
        }
        ))
    }
    _request(e, t) {
        "string" == typeof e ? (t = t || {}).url = e : t = e || {},
        t = Dt(this.defaults, t);
        const {transitional: n, paramsSerializer: r, headers: o} = t;
        void 0 !== n && un.assertOptions(n, {
            silentJSONParsing: ln.transitional(ln.boolean),
            forcedJSONParsing: ln.transitional(ln.boolean),
            clarifyTimeoutError: ln.transitional(ln.boolean)
        }, !1),
        null != r && ($e.isFunction(r) ? t.paramsSerializer = {
            serialize: r
        } : un.assertOptions(r, {
            encode: ln.function,
            serialize: ln.function
        }, !0)),
        un.assertOptions(t, {
            baseUrl: ln.spelling("baseURL"),
            withXsrfToken: ln.spelling("withXSRFToken")
        }, !0),
        t.method = (t.method || this.defaults.method || "get").toLowerCase();
        let i = o && $e.merge(o.common, o[t.method]);
        o && $e.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
            delete o[e]
        }
        )),
        t.headers = St.concat(i, o);
        const a = [];
        let s = !0;
        this.interceptors.request.forEach((function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (s = s && e.synchronous,
            a.unshift(e.fulfilled, e.rejected))
        }
        ));
        const u = [];
        let l;
        this.interceptors.response.forEach((function(e) {
            u.push(e.fulfilled, e.rejected)
        }
        ));
        let c, d = 0;
        if (!s) {
            const e = [rn.bind(this), void 0];
            for (e.unshift.apply(e, a),
            e.push.apply(e, u),
            c = e.length,
            l = Promise.resolve(t); d < c; )
                l = l.then(e[d++], e[d++]);
            return l
        }
        c = a.length;
        let f = t;
        for (d = 0; d < c; ) {
            const e = a[d++]
              , t = a[d++];
            try {
                f = e(f)
            } catch (ui) {
                t.call(this, ui);
                break
            }
        }
        try {
            l = rn.call(this, f)
        } catch (ui) {
            return Promise.reject(ui)
        }
        for (d = 0,
        c = u.length; d < c; )
            l = l.then(u[d++], u[d++]);
        return l
    }
    getUri(e) {
        return ot(Pt((e = Dt(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
    }
}
$e.forEach(["delete", "get", "head", "options"], (function(e) {
    cn.prototype[e] = function(t, n) {
        return this.request(Dt(n || {}, {
            method: e,
            url: t,
            data: (n || {}).data
        }))
    }
}
)),
$e.forEach(["post", "put", "patch"], (function(e) {
    function t(t) {
        return function(n, r, o) {
            return this.request(Dt(o || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: n,
                data: r
            }))
        }
    }
    cn.prototype[e] = t(),
    cn.prototype[e + "Form"] = t(!0)
}
));
class dn {
    constructor(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise((function(e) {
            t = e
        }
        ));
        const n = this;
        this.promise.then((e => {
            if (!n._listeners)
                return;
            let t = n._listeners.length;
            for (; t-- > 0; )
                n._listeners[t](e);
            n._listeners = null
        }
        )),
        this.promise.then = e => {
            let t;
            const r = new Promise((e => {
                n.subscribe(e),
                t = e
            }
            )).then(e);
            return r.cancel = function() {
                n.unsubscribe(t)
            }
            ,
            r
        }
        ,
        e((function(e, r, o) {
            n.reason || (n.reason = new Et(e,r,o),
            t(n.reason))
        }
        ))
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const t = this._listeners.indexOf(e);
        -1 !== t && this._listeners.splice(t, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , t = t => {
            e.abort(t)
        }
        ;
        return this.subscribe(t),
        e.signal.unsubscribe = () => this.unsubscribe(t),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new dn((function(t) {
                e = t
            }
            )),
            cancel: e
        }
    }
}
const fn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(fn).forEach(( ([e,t]) => {
    fn[t] = e
}
));
const pn = function e(t) {
    const n = new cn(t)
      , r = re(cn.prototype.request, n);
    return $e.extend(r, cn.prototype, n, {
        allOwnKeys: !0
    }),
    $e.extend(r, n, null, {
        allOwnKeys: !0
    }),
    r.create = function(n) {
        return e(Dt(t, n))
    }
    ,
    r
}(gt);
pn.Axios = cn,
pn.CanceledError = Et,
pn.CancelToken = dn,
pn.isCancel = xt,
pn.VERSION = on,
pn.toFormData = Ze,
pn.AxiosError = He,
pn.Cancel = pn.CanceledError,
pn.all = function(e) {
    return Promise.all(e)
}
,
pn.spread = function(e) {
    return function(t) {
        return e.apply(null, t)
    }
}
,
pn.isAxiosError = function(e) {
    return $e.isObject(e) && !0 === e.isAxiosError
}
,
pn.mergeConfig = Dt,
pn.AxiosHeaders = St,
pn.formToJSON = e => mt($e.isHTMLForm(e) ? new FormData(e) : e),
pn.getAdapter = tn,
pn.HttpStatusCode = fn,
pn.default = pn;
const hn = ne.getParser(window.navigator.userAgent);
function mn() {
    let e = sessionStorage.getItem(q);
    return e || (e = j(10),
    sessionStorage.setItem(q, e)),
    e
}
function gn() {
    var e;
    try {
        let t = Number.parseInt(null != (e = sessionStorage.getItem(B)) ? e : "0");
        return t++,
        sessionStorage.setItem(B, t.toString()),
        t
    } catch (t) {
        return 0
    }
}
function yn(e, t, n) {
    const {uniqueID: r, isNew: o} = function() {
        let e = localStorage.getItem(W)
          , t = !1;
        return e || (e = j(24),
        localStorage.setItem(W, e),
        t = !0),
        {
            uniqueID: e,
            isNew: t
        }
    }();
    return {
        business_type: n.businessType,
        theme: n.actionToThemeMap[e] || "basic_functions",
        action: e,
        distinct_id: j(22),
        time: Date.now() + 60 * (new Date).getTimezoneOffset() * 1e3 + 288e5,
        user_id: n.userId,
        hrefUrl: window.location.href,
        uniqueid: r,
        sessionId: mn(),
        count: gn(),
        properties: u({
            user_agent: window.navigator.userAgent,
            device_type: hn.getPlatformType(),
            os: hn.getOSName(),
            screen_magnification: `${window.devicePixelRatio}`,
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            browser_window_size: `${window.innerWidth}x${window.innerHeight}`,
            userLanguage: window.navigator.language,
            referrer_url: document.referrer,
            isNew: o,
            isOnline: n.isOnline
        }, t)
    }
}
const vn = (e, t) => {
    try {
        navigator.sendBeacon(e, JSON.stringify(t))
    } catch (ui) {
        throw ui
    }
}
  , bn = (e, t) => l(void 0, null, (function*() {
    try {
        yield pn.post(e, t)
    } catch (ui) {
        throw ui
    }
}
))
  , _n = (e, t) => l(void 0, null, (function*() {
    vn(t.serverUrl, e),
    yield bn(t.serverUrl, e)
}
))
  , wn = (e, t) => l(void 0, null, (function*() {
    for (const n of e)
        try {
            yield _n(n, t)
        } catch (ui) {
            kn(ui, "sendFallback failed", t)
        }
}
));
function Sn(e, t) {
    return l(this, null, (function*() {
        if (Array.isArray(e))
            try {
                yield( (e, t) => l(void 0, null, (function*() {
                    vn(t.serverUrl, e),
                    yield bn(t.serverUrl, e)
                }
                )))(e, t)
            } catch (ui) {
                kn(ui, "batch send failed, fallback", t),
                yield wn(e, t)
            }
        else
            try {
                yield _n(e, t)
            } catch (ui) {
                kn(ui, "single send failed, fallback", t),
                yield wn([e], t)
            }
    }
    ))
}
function kn(e, t, n) {
    if (n.onError)
        try {
            n.onError(e, t)
        } catch (r) {
            console.error("[CollectSDK] onError failed", r)
        }
}
const xn = e => {
    kn(new Error("not initialized"), "not initialized", e)
}
;
class En {
    static init(e) {
        this.isInitialized ? kn(null, "already initialized", this.config) : (this.config = u(u({}, this.config), e),
        this.isInitialized = !0,
        window.addEventListener("beforeunload", ( () => {
            this.sendTimer && (clearTimeout(this.sendTimer),
            this.sendTimer = null),
            this.collectQueue.length > 0 && (Sn(this.collectQueue, this.config),
            this.collectQueue = [])
        }
        )))
    }
    static setConfig(e, t) {
        this.isInitialized ? this.config[e] = t : xn(this.config)
    }
    static getBatchData() {
        const e = Math.min(this.collectQueue.length, this.config.batchSize)
          , t = this.collectQueue.slice(0, e);
        return this.collectQueue = this.collectQueue.slice(e),
        t
    }
    static processBatchQueue() {
        const e = this.getBatchData();
        e.length > 0 && Sn(e, this.config),
        this.collectQueue.length >= this.config.batchSize && this.processBatchQueue()
    }
    static handleCollectRequest(e) {
        this.config.enableBatch ? (this.collectQueue.push(e),
        this.collectQueue.length >= this.config.batchSize ? this.processBatchQueue() : this.sendTimer || (this.sendTimer = window.setTimeout(( () => {
            this.processBatchQueue(),
            this.sendTimer = null
        }
        ), this.config.batchSendInterval))) : Sn(e, this.config)
    }
    static collect(e, t={}) {
        if (!this.isInitialized)
            return void xn(this.config);
        const n = yn(e, t, this.config);
        this.handleCollectRequest(n)
    }
    static flush() {
        this.isInitialized ? this.collectQueue.length > 0 && this.processBatchQueue() : xn(this.config)
    }
}
En.config = z,
En.isInitialized = !1,
En.collectQueue = [],
En.sendTimer = null;
const Cn = {
    page_view_wegicapp: "basic_functions",
    pageview_404: "basic_functions",
    page_is_interaction: "wegic_app"
}
  , Tn = {
    pageview_404: "basic_functions"
};
var Rn, On;
function In(e) {
    const t = null == e ? void 0 : e.host;
    return Boolean((null == t ? void 0 : t.shadowRoot) === e)
}
function Mn(e) {
    return "[object ShadowRoot]" === Object.prototype.toString.call(e)
}
function Pn(e) {
    try {
        const n = e.rules || e.cssRules;
        return n ? ((t = Array.from(n, Nn).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
        t) : null
    } catch (ui) {
        return null
    }
    var t
}
function Nn(e) {
    let t;
    if (function(e) {
        return "styleSheet"in e
    }(e))
        try {
            t = Pn(e.styleSheet) || function(e) {
                const {cssText: t} = e;
                if (t.split('"').length < 3)
                    return t;
                const n = ["@import", `url(${JSON.stringify(e.href)})`];
                return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
                e.supportsText && n.push(`supports(${e.supportsText})`),
                e.media.length && n.push(e.media.mediaText),
                n.join(" ") + ";"
            }(e)
        } catch (ui) {}
    else if (function(e) {
        return "selectorText"in e
    }(e) && e.selectorText.includes(":"))
        return function(e) {
            const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
            return e.replace(t, "$1\\$2")
        }(e.cssText);
    return t || e.cssText
}
(On = Rn || (Rn = {}))[On.Document = 0] = "Document",
On[On.DocumentType = 1] = "DocumentType",
On[On.Element = 2] = "Element",
On[On.Text = 3] = "Text",
On[On.CDATA = 4] = "CDATA",
On[On.Comment = 5] = "Comment";
class Dn {
    constructor() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
    getId(e) {
        var t;
        if (!e)
            return -1;
        const n = null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id;
        return null != n ? n : -1
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null
    }
    getIds() {
        return Array.from(this.idNodeMap.keys())
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null
    }
    removeNodeFromMap(e) {
        const t = this.getId(e);
        this.idNodeMap.delete(t),
        e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
    }
    has(e) {
        return this.idNodeMap.has(e)
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e)
    }
    add(e, t) {
        const n = t.id;
        this.idNodeMap.set(n, e),
        this.nodeMetaMap.set(e, t)
    }
    replace(e, t) {
        const n = this.getNode(e);
        if (n) {
            const e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e)
        }
        this.idNodeMap.set(e, t)
    }
    reset() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
}
function Ln({element: e, maskInputOptions: t, tagName: n, type: r, value: o, maskInputFn: i}) {
    let a = o || "";
    const s = r && An(r);
    return (t[n.toLowerCase()] || s && t[s]) && (a = i ? i(a, e) : "*".repeat(a.length)),
    a
}
function An(e) {
    return e.toLowerCase()
}
const Fn = "__rrweb_original__";
function Un(e) {
    const t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? An(t) : null
}
function jn(e, t) {
    var n;
    let r;
    try {
        r = new URL(e,null != t ? t : window.location.href)
    } catch (i) {
        return null
    }
    const o = r.pathname.match(/\.([0-9a-z]+)(?:$)/i);
    return null !== (n = null == o ? void 0 : o[1]) && void 0 !== n ? n : null
}
let zn = 1;
const Bn = new RegExp("[^a-z0-9-_:]")
  , qn = -2;
function Wn() {
    return zn++
}
let Vn, $n;
const Hn = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
  , Qn = /^(?:[a-z+]+:)?\/\//i
  , Yn = /^www\..*/i
  , Gn = /^(data:)([^,]*),(.*)/i;
function Kn(e, t) {
    return (e || "").replace(Hn, ( (e, n, r, o, i, a) => {
        const s = r || i || a
          , u = n || o || "";
        if (!s)
            return e;
        if (Qn.test(s) || Yn.test(s))
            return `url(${u}${s}${u})`;
        if (Gn.test(s))
            return `url(${u}${s}${u})`;
        if ("/" === s[0])
            return `url(${u}${function(e) {
                lett = "";
                return t = e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0],
                t = t.split("?")[0],
                t
            }(t) + s}${u})`;
        const l = t.split("/")
          , c = s.split("/");
        l.pop();
        for (const t of c)
            "." !== t && (".." === t ? l.pop() : l.push(t));
        return `url(${u}${l.join("/")}${u})`
    }
    ))
}
const Xn = /^[^ \t\n\r\u000c]+/
  , Jn = /^[, \t\n\r\u000c]+/;
function Zn(e, t) {
    if (!t || "" === t.trim())
        return t;
    const n = e.createElement("a");
    return n.href = t,
    n.href
}
function er(e) {
    return Boolean("svg" === e.tagName || e.ownerSVGElement)
}
function tr() {
    const e = document.createElement("a");
    return e.href = "",
    e.href
}
function nr(e, t, n, r) {
    return r ? "src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? Zn(e, r) : "background" !== n || "table" !== t && "td" !== t && "th" !== t ? "srcset" === n ? function(e, t) {
        if ("" === t.trim())
            return t;
        let n = 0;
        function r(e) {
            let r;
            const o = e.exec(t.substring(n));
            return o ? (r = o[0],
            n += r.length,
            r) : ""
        }
        const o = [];
        for (; r(Jn),
        !(n >= t.length); ) {
            let i = r(Xn);
            if ("," === i.slice(-1))
                i = Zn(e, i.substring(0, i.length - 1)),
                o.push(i);
            else {
                let r = "";
                i = Zn(e, i);
                let a = !1;
                for (; ; ) {
                    const e = t.charAt(n);
                    if ("" === e) {
                        o.push((i + r).trim());
                        break
                    }
                    if (a)
                        ")" === e && (a = !1);
                    else {
                        if ("," === e) {
                            n += 1,
                            o.push((i + r).trim());
                            break
                        }
                        "(" === e && (a = !0)
                    }
                    r += e,
                    n += 1
                }
            }
        }
        return o.join(", ")
    }(e, r) : "style" === n ? Kn(r, tr()) : "object" === t && "data" === n ? Zn(e, r) : r : Zn(e, r) : r
}
function rr(e, t, n) {
    return ("video" === e || "audio" === e) && "autoplay" === t
}
function or(e, t, n) {
    if (!e)
        return !1;
    if (e.nodeType !== e.ELEMENT_NODE)
        return !!n && or(e.parentNode, t, n);
    for (let r = e.classList.length; r--; ) {
        const n = e.classList[r];
        if (t.test(n))
            return !0
    }
    return !!n && or(e.parentNode, t, n)
}
function ir(e, t, n, r) {
    try {
        const o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (null === o)
            return !1;
        if ("string" == typeof t) {
            if (r) {
                if (o.closest(`.${t}`))
                    return !0
            } else if (o.classList.contains(t))
                return !0
        } else if (or(o, t, r))
            return !0;
        if (n)
            if (r) {
                if (o.closest(n))
                    return !0
            } else if (o.matches(n))
                return !0
    } catch (o) {}
    return !1
}
function ar(e, t) {
    const {doc: n, mirror: r, blockClass: o, blockSelector: i, needsMask: a, inlineStylesheet: s, maskInputOptions: u={}, maskTextFn: l, maskInputFn: c, dataURLOptions: d={}, inlineImages: f, recordCanvas: p, keepIframeSrcFn: h, newlyAddedElement: m=!1} = t
      , g = function(e, t) {
        if (!t.hasNode(e))
            return;
        const n = t.getId(e);
        return 1 === n ? void 0 : n
    }(n, r);
    switch (e.nodeType) {
    case e.DOCUMENT_NODE:
        return "CSS1Compat" !== e.compatMode ? {
            type: Rn.Document,
            childNodes: [],
            compatMode: e.compatMode
        } : {
            type: Rn.Document,
            childNodes: []
        };
    case e.DOCUMENT_TYPE_NODE:
        return {
            type: Rn.DocumentType,
            name: e.name,
            publicId: e.publicId,
            systemId: e.systemId,
            rootId: g
        };
    case e.ELEMENT_NODE:
        return function(e, t) {
            const {doc: n, blockClass: r, blockSelector: o, inlineStylesheet: i, maskInputOptions: a={}, maskInputFn: s, dataURLOptions: u={}, inlineImages: l, recordCanvas: c, keepIframeSrcFn: d, newlyAddedElement: f=!1, rootId: p} = t
              , h = function(e, t, n) {
                try {
                    if ("string" == typeof t) {
                        if (e.classList.contains(t))
                            return !0
                    } else
                        for (let n = e.classList.length; n--; ) {
                            const r = e.classList[n];
                            if (t.test(r))
                                return !0
                        }
                    if (n)
                        return e.matches(n)
                } catch (r) {}
                return !1
            }(e, r, o)
              , m = function(e) {
                if (e instanceof HTMLFormElement)
                    return "form";
                const t = An(e.tagName);
                return Bn.test(t) ? "div" : t
            }(e);
            let g = {};
            const y = e.attributes.length;
            for (let _ = 0; _ < y; _++) {
                const t = e.attributes[_];
                rr(m, t.name, t.value) || (g[t.name] = nr(n, m, An(t.name), t.value))
            }
            if ("link" === m && i) {
                const t = Array.from(n.styleSheets).find((t => t.href === e.href));
                let r = null;
                t && (r = Pn(t)),
                r && (delete g.rel,
                delete g.href,
                g._cssText = Kn(r, t.href))
            }
            if ("style" === m && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                const t = Pn(e.sheet);
                t && (g._cssText = Kn(t, tr()))
            }
            if ("input" === m || "textarea" === m || "select" === m) {
                const t = e.value
                  , n = e.checked;
                "radio" !== g.type && "checkbox" !== g.type && "submit" !== g.type && "button" !== g.type && t ? g.value = Ln({
                    element: e,
                    type: Un(e),
                    tagName: m,
                    value: t,
                    maskInputOptions: a,
                    maskInputFn: s
                }) : n && (g.checked = n)
            }
            "option" === m && (e.selected && !a.select ? g.selected = !0 : delete g.selected);
            if ("canvas" === m && c)
                if ("2d" === e.__context)
                    (function(e) {
                        const t = e.getContext("2d");
                        if (!t)
                            return !0;
                        for (let n = 0; n < e.width; n += 50)
                            for (let r = 0; r < e.height; r += 50) {
                                const o = t.getImageData
                                  , i = Fn in o ? o[Fn] : o;
                                if (new Uint32Array(i.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some((e => 0 !== e)))
                                    return !1
                            }
                        return !0
                    }
                    )(e) || (g.rr_dataURL = e.toDataURL(u.type, u.quality));
                else if (!("__context"in e)) {
                    const t = e.toDataURL(u.type, u.quality)
                      , n = document.createElement("canvas");
                    n.width = e.width,
                    n.height = e.height;
                    t !== n.toDataURL(u.type, u.quality) && (g.rr_dataURL = t)
                }
            if ("img" === m && l) {
                Vn || (Vn = n.createElement("canvas"),
                $n = Vn.getContext("2d"));
                const t = e
                  , r = t.crossOrigin;
                t.crossOrigin = "anonymous";
                const o = () => {
                    t.removeEventListener("load", o);
                    try {
                        Vn.width = t.naturalWidth,
                        Vn.height = t.naturalHeight,
                        $n.drawImage(t, 0, 0),
                        g.rr_dataURL = Vn.toDataURL(u.type, u.quality)
                    } catch (e) {
                        console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
                    }
                    r ? g.crossOrigin = r : t.removeAttribute("crossorigin")
                }
                ;
                t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o)
            }
            if ("audio" === m || "video" === m) {
                const t = g;
                t.rr_mediaState = e.paused ? "paused" : "played",
                t.rr_mediaCurrentTime = e.currentTime,
                t.rr_mediaPlaybackRate = e.playbackRate,
                t.rr_mediaMuted = e.muted,
                t.rr_mediaLoop = e.loop,
                t.rr_mediaVolume = e.volume
            }
            f || (e.scrollLeft && (g.rr_scrollLeft = e.scrollLeft),
            e.scrollTop && (g.rr_scrollTop = e.scrollTop));
            if (h) {
                const {width: t, height: n} = e.getBoundingClientRect();
                g = {
                    class: g.class,
                    rr_width: `${t}px`,
                    rr_height: `${n}px`
                }
            }
            "iframe" !== m || d(g.src) || (e.contentDocument || (g.rr_src = g.src),
            delete g.src);
            let v;
            try {
                customElements.get(m) && (v = !0)
            } catch (b) {}
            return {
                type: Rn.Element,
                tagName: m,
                attributes: g,
                childNodes: [],
                isSVG: er(e) || void 0,
                needBlock: h,
                rootId: p,
                isCustom: v
            }
        }(e, {
            doc: n,
            blockClass: o,
            blockSelector: i,
            inlineStylesheet: s,
            maskInputOptions: u,
            maskInputFn: c,
            dataURLOptions: d,
            inlineImages: f,
            recordCanvas: p,
            keepIframeSrcFn: h,
            newlyAddedElement: m,
            rootId: g
        });
    case e.TEXT_NODE:
        return function(e, t) {
            var n;
            const {needsMask: r, maskTextFn: o, rootId: i} = t
              , a = e.parentNode && e.parentNode.tagName;
            let s = e.textContent;
            const u = "STYLE" === a || void 0
              , l = "SCRIPT" === a || void 0;
            if (u && s) {
                try {
                    e.nextSibling || e.previousSibling || (null === (n = e.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) && (s = Pn(e.parentNode.sheet))
                } catch (c) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${c}`, e)
                }
                s = Kn(s, tr())
            }
            l && (s = "SCRIPT_PLACEHOLDER");
            !u && !l && s && r && (s = o ? o(s, e.parentElement) : s.replace(/[\S]/g, "*"));
            return {
                type: Rn.Text,
                textContent: s || "",
                isStyle: u,
                rootId: i
            }
        }(e, {
            needsMask: a,
            maskTextFn: l,
            rootId: g
        });
    case e.CDATA_SECTION_NODE:
        return {
            type: Rn.CDATA,
            textContent: "",
            rootId: g
        };
    case e.COMMENT_NODE:
        return {
            type: Rn.Comment,
            textContent: e.textContent || "",
            rootId: g
        };
    default:
        return !1
    }
}
function sr(e) {
    return null == e ? "" : e.toLowerCase()
}
function ur(e, t) {
    const {doc: n, mirror: r, blockClass: o, blockSelector: i, maskTextClass: a, maskTextSelector: s, skipChild: u=!1, inlineStylesheet: l=!0, maskInputOptions: c={}, maskTextFn: d, maskInputFn: f, slimDOMOptions: p, dataURLOptions: h={}, inlineImages: m=!1, recordCanvas: g=!1, onSerialize: y, onIframeLoad: v, iframeLoadTimeout: b=5e3, onStylesheetLoad: _, stylesheetLoadTimeout: w=5e3, keepIframeSrcFn: S= () => !1, newlyAddedElement: k=!1} = t;
    let {needsMask: x} = t
      , {preserveWhiteSpace: E=!0} = t;
    if (!x && e.childNodes) {
        x = ir(e, a, s, void 0 === x)
    }
    const C = ar(e, {
        doc: n,
        mirror: r,
        blockClass: o,
        blockSelector: i,
        needsMask: x,
        inlineStylesheet: l,
        maskInputOptions: c,
        maskTextFn: d,
        maskInputFn: f,
        dataURLOptions: h,
        inlineImages: m,
        recordCanvas: g,
        keepIframeSrcFn: S,
        newlyAddedElement: k
    });
    if (!C)
        return console.warn(e, "not serialized"),
        null;
    let T;
    T = r.hasNode(e) ? r.getId(e) : !function(e, t) {
        if (t.comment && e.type === Rn.Comment)
            return !0;
        if (e.type === Rn.Element) {
            if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === jn(e.attributes.href)))
                return !0;
            if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (sr(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === sr(e.attributes.name) || "icon" === sr(e.attributes.rel) || "apple-touch-icon" === sr(e.attributes.rel) || "shortcut icon" === sr(e.attributes.rel))))
                return !0;
            if ("meta" === e.tagName) {
                if (t.headMetaDescKeywords && sr(e.attributes.name).match(/^description|keywords$/))
                    return !0;
                if (t.headMetaSocial && (sr(e.attributes.property).match(/^(og|twitter|fb):/) || sr(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === sr(e.attributes.name)))
                    return !0;
                if (t.headMetaRobots && ("robots" === sr(e.attributes.name) || "googlebot" === sr(e.attributes.name) || "bingbot" === sr(e.attributes.name)))
                    return !0;
                if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                    return !0;
                if (t.headMetaAuthorship && ("author" === sr(e.attributes.name) || "generator" === sr(e.attributes.name) || "framework" === sr(e.attributes.name) || "publisher" === sr(e.attributes.name) || "progid" === sr(e.attributes.name) || sr(e.attributes.property).match(/^article:/) || sr(e.attributes.property).match(/^product:/)))
                    return !0;
                if (t.headMetaVerification && ("google-site-verification" === sr(e.attributes.name) || "yandex-verification" === sr(e.attributes.name) || "csrf-token" === sr(e.attributes.name) || "p:domain_verify" === sr(e.attributes.name) || "verify-v1" === sr(e.attributes.name) || "verification" === sr(e.attributes.name) || "shopify-checkout-api-token" === sr(e.attributes.name)))
                    return !0
            }
        }
        return !1
    }(C, p) && (E || C.type !== Rn.Text || C.isStyle || C.textContent.replace(/^\s+|\s+$/gm, "").length) ? Wn() : qn;
    const R = Object.assign(C, {
        id: T
    });
    if (r.add(e, R),
    T === qn)
        return null;
    y && y(e);
    let O = !u;
    if (R.type === Rn.Element) {
        O = O && !R.needBlock,
        delete R.needBlock;
        const t = e.shadowRoot;
        t && Mn(t) && (R.isShadowHost = !0)
    }
    if ((R.type === Rn.Document || R.type === Rn.Element) && O) {
        p.headWhitespace && R.type === Rn.Element && "head" === R.tagName && (E = !1);
        const t = {
            doc: n,
            mirror: r,
            blockClass: o,
            blockSelector: i,
            needsMask: x,
            maskTextClass: a,
            maskTextSelector: s,
            skipChild: u,
            inlineStylesheet: l,
            maskInputOptions: c,
            maskTextFn: d,
            maskInputFn: f,
            slimDOMOptions: p,
            dataURLOptions: h,
            inlineImages: m,
            recordCanvas: g,
            preserveWhiteSpace: E,
            onSerialize: y,
            onIframeLoad: v,
            iframeLoadTimeout: b,
            onStylesheetLoad: _,
            stylesheetLoadTimeout: w,
            keepIframeSrcFn: S
        };
        if (R.type === Rn.Element && "textarea" === R.tagName && void 0 !== R.attributes.value)
            ;
        else
            for (const n of Array.from(e.childNodes)) {
                const e = ur(n, t);
                e && R.childNodes.push(e)
            }
        if (function(e) {
            return e.nodeType === e.ELEMENT_NODE
        }(e) && e.shadowRoot)
            for (const n of Array.from(e.shadowRoot.childNodes)) {
                const r = ur(n, t);
                r && (Mn(e.shadowRoot) && (r.isShadow = !0),
                R.childNodes.push(r))
            }
    }
    return e.parentNode && In(e.parentNode) && Mn(e.parentNode) && (R.isShadow = !0),
    R.type === Rn.Element && "iframe" === R.tagName && function(e, t, n) {
        const r = e.contentWindow;
        if (!r)
            return;
        let o, i = !1;
        try {
            o = r.document.readyState
        } catch (ui) {
            return
        }
        if ("complete" !== o) {
            const r = setTimeout(( () => {
                i || (t(),
                i = !0)
            }
            ), n);
            return void e.addEventListener("load", ( () => {
                clearTimeout(r),
                i = !0,
                t()
            }
            ))
        }
        const a = "about:blank";
        if (r.location.href !== a || e.src === a || "" === e.src)
            return setTimeout(t, 0),
            e.addEventListener("load", t);
        e.addEventListener("load", t)
    }(e, ( () => {
        const t = e.contentDocument;
        if (t && v) {
            const n = ur(t, {
                doc: t,
                mirror: r,
                blockClass: o,
                blockSelector: i,
                needsMask: x,
                maskTextClass: a,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: l,
                maskInputOptions: c,
                maskTextFn: d,
                maskInputFn: f,
                slimDOMOptions: p,
                dataURLOptions: h,
                inlineImages: m,
                recordCanvas: g,
                preserveWhiteSpace: E,
                onSerialize: y,
                onIframeLoad: v,
                iframeLoadTimeout: b,
                onStylesheetLoad: _,
                stylesheetLoadTimeout: w,
                keepIframeSrcFn: S
            });
            n && v(e, n)
        }
    }
    ), b),
    R.type === Rn.Element && "link" === R.tagName && "string" == typeof R.attributes.rel && ("stylesheet" === R.attributes.rel || "preload" === R.attributes.rel && "string" == typeof R.attributes.href && "css" === jn(R.attributes.href)) && function(e, t, n) {
        let r, o = !1;
        try {
            r = e.sheet
        } catch (ui) {
            return
        }
        if (r)
            return;
        const i = setTimeout(( () => {
            o || (t(),
            o = !0)
        }
        ), n);
        e.addEventListener("load", ( () => {
            clearTimeout(i),
            o = !0,
            t()
        }
        ))
    }(e, ( () => {
        if (_) {
            const t = ur(e, {
                doc: n,
                mirror: r,
                blockClass: o,
                blockSelector: i,
                needsMask: x,
                maskTextClass: a,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: l,
                maskInputOptions: c,
                maskTextFn: d,
                maskInputFn: f,
                slimDOMOptions: p,
                dataURLOptions: h,
                inlineImages: m,
                recordCanvas: g,
                preserveWhiteSpace: E,
                onSerialize: y,
                onIframeLoad: v,
                iframeLoadTimeout: b,
                onStylesheetLoad: _,
                stylesheetLoadTimeout: w,
                keepIframeSrcFn: S
            });
            t && _(e, t)
        }
    }
    ), w),
    R
}
function lr(e, t, n=document) {
    const r = {
        capture: !0,
        passive: !0
    };
    return n.addEventListener(e, t, r),
    () => n.removeEventListener(e, t, r)
}
const cr = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let dr = {
    map: {},
    getId: () => (console.error(cr),
    -1),
    getNode: () => (console.error(cr),
    null),
    removeNodeFromMap() {
        console.error(cr)
    },
    has: () => (console.error(cr),
    !1),
    reset() {
        console.error(cr)
    }
};
function fr(e, t, n={}) {
    let r = null
      , o = 0;
    return function(...i) {
        const a = Date.now();
        o || !1 !== n.leading || (o = a);
        const s = t - (a - o)
          , u = this;
        s <= 0 || s > t ? (r && (clearTimeout(r),
        r = null),
        o = a,
        e.apply(u, i)) : r || !1 === n.trailing || (r = setTimeout(( () => {
            o = !1 === n.leading ? 0 : Date.now(),
            r = null,
            e.apply(u, i)
        }
        ), s))
    }
}
function pr(e, t, n, r, o=window) {
    const i = o.Object.getOwnPropertyDescriptor(e, t);
    return o.Object.defineProperty(e, t, r ? n : {
        set(e) {
            setTimeout(( () => {
                n.set.call(this, e)
            }
            ), 0),
            i && i.set && i.set.call(this, e)
        }
    }),
    () => pr(e, t, i || {}, !0)
}
function hr(e, t, n) {
    try {
        if (!(t in e))
            return () => {}
            ;
        const r = e[t]
          , o = n(r);
        return "function" == typeof o && (o.prototype = o.prototype || {},
        Object.defineProperties(o, {
            __rrweb_original__: {
                enumerable: !1,
                value: r
            }
        })),
        e[t] = o,
        () => {
            e[t] = r
        }
    } catch (r) {
        return () => {}
    }
}
"undefined" != typeof window && window.Proxy && window.Reflect && (dr = new Proxy(dr,{
    get: (e, t, n) => ("map" === t && console.error(cr),
    Reflect.get(e, t, n))
}));
let mr = Date.now;
function gr(e) {
    var t, n, r, o, i, a;
    const s = e.document;
    return {
        left: s.scrollingElement ? s.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : (null == s ? void 0 : s.documentElement.scrollLeft) || (null === (n = null === (t = null == s ? void 0 : s.body) || void 0 === t ? void 0 : t.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null === (r = null == s ? void 0 : s.body) || void 0 === r ? void 0 : r.scrollLeft) || 0,
        top: s.scrollingElement ? s.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == s ? void 0 : s.documentElement.scrollTop) || (null === (i = null === (o = null == s ? void 0 : s.body) || void 0 === o ? void 0 : o.parentElement) || void 0 === i ? void 0 : i.scrollTop) || (null === (a = null == s ? void 0 : s.body) || void 0 === a ? void 0 : a.scrollTop) || 0
    }
}
function yr() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}
function vr() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}
function br(e) {
    if (!e)
        return null;
    return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
}
function _r(e, t, n, r) {
    if (!e)
        return !1;
    const o = br(e);
    if (!o)
        return !1;
    try {
        if ("string" == typeof t) {
            if (o.classList.contains(t))
                return !0;
            if (r && null !== o.closest("." + t))
                return !0
        } else if (or(o, t, r))
            return !0
    } catch (i) {}
    if (n) {
        if (o.matches(n))
            return !0;
        if (r && null !== o.closest(n))
            return !0
    }
    return !1
}
function wr(e, t) {
    return t.getId(e) === qn
}
function Sr(e, t) {
    if (In(e))
        return !1;
    const n = t.getId(e);
    return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || Sr(e.parentNode, t))
}
function kr(e) {
    return Boolean(e.changedTouches)
}
function xr(e, t) {
    return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
}
function Er(e, t) {
    return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
}
function Cr(e) {
    return Boolean(null == e ? void 0 : e.shadowRoot)
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (mr = () => (new Date).getTime());
class Tr {
    constructor() {
        this.id = 1,
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map
    }
    getId(e) {
        var t;
        return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1
    }
    has(e) {
        return this.styleIDMap.has(e)
    }
    add(e, t) {
        if (this.has(e))
            return this.getId(e);
        let n;
        return n = void 0 === t ? this.id++ : t,
        this.styleIDMap.set(e, n),
        this.idStyleMap.set(n, e),
        n
    }
    getStyle(e) {
        return this.idStyleMap.get(e) || null
    }
    reset() {
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map,
        this.id = 1
    }
    generateId() {
        return this.id++
    }
}
function Rr(e) {
    var t, n;
    let r = null;
    return (null === (n = null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)) || void 0 === n ? void 0 : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (r = e.getRootNode().host),
    r
}
function Or(e) {
    const t = e.ownerDocument;
    if (!t)
        return !1;
    const n = function(e) {
        let t, n = e;
        for (; t = Rr(n); )
            n = t;
        return n
    }(e);
    return t.contains(n)
}
function Ir(e) {
    const t = e.ownerDocument;
    return !!t && (t.contains(e) || Or(e))
}
var Mr = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
e[e.Load = 1] = "Load",
e[e.FullSnapshot = 2] = "FullSnapshot",
e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
e[e.Meta = 4] = "Meta",
e[e.Custom = 5] = "Custom",
e[e.Plugin = 6] = "Plugin",
e))(Mr || {})
  , Pr = (e => (e[e.Mutation = 0] = "Mutation",
e[e.MouseMove = 1] = "MouseMove",
e[e.MouseInteraction = 2] = "MouseInteraction",
e[e.Scroll = 3] = "Scroll",
e[e.ViewportResize = 4] = "ViewportResize",
e[e.Input = 5] = "Input",
e[e.TouchMove = 6] = "TouchMove",
e[e.MediaInteraction = 7] = "MediaInteraction",
e[e.StyleSheetRule = 8] = "StyleSheetRule",
e[e.CanvasMutation = 9] = "CanvasMutation",
e[e.Font = 10] = "Font",
e[e.Log = 11] = "Log",
e[e.Drag = 12] = "Drag",
e[e.StyleDeclaration = 13] = "StyleDeclaration",
e[e.Selection = 14] = "Selection",
e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
e[e.CustomElement = 16] = "CustomElement",
e))(Pr || {})
  , Nr = (e => (e[e.MouseUp = 0] = "MouseUp",
e[e.MouseDown = 1] = "MouseDown",
e[e.Click = 2] = "Click",
e[e.ContextMenu = 3] = "ContextMenu",
e[e.DblClick = 4] = "DblClick",
e[e.Focus = 5] = "Focus",
e[e.Blur = 6] = "Blur",
e[e.TouchStart = 7] = "TouchStart",
e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
e[e.TouchEnd = 9] = "TouchEnd",
e[e.TouchCancel = 10] = "TouchCancel",
e))(Nr || {})
  , Dr = (e => (e[e.Mouse = 0] = "Mouse",
e[e.Pen = 1] = "Pen",
e[e.Touch = 2] = "Touch",
e))(Dr || {})
  , Lr = (e => (e[e["2D"] = 0] = "2D",
e[e.WebGL = 1] = "WebGL",
e[e.WebGL2 = 2] = "WebGL2",
e))(Lr || {});
function Ar(e) {
    return "__ln"in e
}
class Fr {
    constructor() {
        this.length = 0,
        this.head = null,
        this.tail = null
    }
    get(e) {
        if (e >= this.length)
            throw new Error("Position outside of list range");
        let t = this.head;
        for (let n = 0; n < e; n++)
            t = (null == t ? void 0 : t.next) || null;
        return t
    }
    addNode(e) {
        const t = {
            value: e,
            previous: null,
            next: null
        };
        if (e.__ln = t,
        e.previousSibling && Ar(e.previousSibling)) {
            const n = e.previousSibling.__ln.next;
            t.next = n,
            t.previous = e.previousSibling.__ln,
            e.previousSibling.__ln.next = t,
            n && (n.previous = t)
        } else if (e.nextSibling && Ar(e.nextSibling) && e.nextSibling.__ln.previous) {
            const n = e.nextSibling.__ln.previous;
            t.previous = n,
            t.next = e.nextSibling.__ln,
            e.nextSibling.__ln.previous = t,
            n && (n.next = t)
        } else
            this.head && (this.head.previous = t),
            t.next = this.head,
            this.head = t;
        null === t.next && (this.tail = t),
        this.length++
    }
    removeNode(e) {
        const t = e.__ln;
        this.head && (t.previous ? (t.previous.next = t.next,
        t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next,
        this.head ? this.head.previous = null : this.tail = null),
        e.__ln && delete e.__ln,
        this.length--)
    }
}
const Ur = (e, t) => `${e}@${t}`;
class jr {
    constructor() {
        this.frozen = !1,
        this.locked = !1,
        this.texts = [],
        this.attributes = [],
        this.attributeMap = new WeakMap,
        this.removes = [],
        this.mapRemoves = [],
        this.movedMap = {},
        this.addedSet = new Set,
        this.movedSet = new Set,
        this.droppedSet = new Set,
        this.processMutations = e => {
            e.forEach(this.processMutation),
            this.emit()
        }
        ,
        this.emit = () => {
            if (this.frozen || this.locked)
                return;
            const e = []
              , t = new Set
              , n = new Fr
              , r = e => {
                let t = e
                  , n = qn;
                for (; n === qn; )
                    t = t && t.nextSibling,
                    n = t && this.mirror.getId(t);
                return n
            }
              , o = o => {
                if (!o.parentNode || !Ir(o) || "TEXTAREA" === o.parentNode.tagName)
                    return;
                const i = In(o.parentNode) ? this.mirror.getId(Rr(o)) : this.mirror.getId(o.parentNode)
                  , a = r(o);
                if (-1 === i || -1 === a)
                    return n.addNode(o);
                const s = ur(o, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskTextClass: this.maskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: e => {
                        xr(e, this.mirror) && this.iframeManager.addIframe(e),
                        Er(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                        Cr(o) && this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc)
                    }
                    ,
                    onIframeLoad: (e, t) => {
                        this.iframeManager.attachIframe(e, t),
                        this.shadowDomManager.observeAttachShadow(e)
                    }
                    ,
                    onStylesheetLoad: (e, t) => {
                        this.stylesheetManager.attachLinkElement(e, t)
                    }
                });
                s && (e.push({
                    parentId: i,
                    nextId: a,
                    node: s
                }),
                t.add(s.id))
            }
            ;
            for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const s of this.movedSet)
                Br(this.removes, s, this.mirror) && !this.movedSet.has(s.parentNode) || o(s);
            for (const s of this.addedSet)
                Wr(this.droppedSet, s) || Br(this.removes, s, this.mirror) ? Wr(this.movedSet, s) ? o(s) : this.droppedSet.add(s) : o(s);
            let i = null;
            for (; n.length; ) {
                let e = null;
                if (i) {
                    const t = this.mirror.getId(i.value.parentNode)
                      , n = r(i.value);
                    -1 !== t && -1 !== n && (e = i)
                }
                if (!e) {
                    let t = n.tail;
                    for (; t; ) {
                        const n = t;
                        if (t = t.previous,
                        n) {
                            const t = this.mirror.getId(n.value.parentNode);
                            if (-1 === r(n.value))
                                continue;
                            if (-1 !== t) {
                                e = n;
                                break
                            }
                            {
                                const t = n.value;
                                if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    const r = t.parentNode.host;
                                    if (-1 !== this.mirror.getId(r)) {
                                        e = n;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                if (!e) {
                    for (; n.head; )
                        n.removeNode(n.head.value);
                    break
                }
                i = e.previous,
                n.removeNode(e.value),
                o(e.value)
            }
            const a = {
                texts: this.texts.map((e => {
                    const t = e.node;
                    return t.parentNode && "TEXTAREA" === t.parentNode.tagName && this.genTextAreaValueMutation(t.parentNode),
                    {
                        id: this.mirror.getId(t),
                        value: e.value
                    }
                }
                )).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                attributes: this.attributes.map((e => {
                    const {attributes: t} = e;
                    if ("string" == typeof t.style) {
                        const n = JSON.stringify(e.styleDiff)
                          , r = JSON.stringify(e._unchangedStyles);
                        n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                    }
                    return {
                        id: this.mirror.getId(e.node),
                        attributes: t
                    }
                }
                )).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                removes: this.removes,
                adds: e
            };
            (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [],
            this.attributes = [],
            this.attributeMap = new WeakMap,
            this.removes = [],
            this.addedSet = new Set,
            this.movedSet = new Set,
            this.droppedSet = new Set,
            this.movedMap = {},
            this.mutationCb(a))
        }
        ,
        this.genTextAreaValueMutation = e => {
            let t = this.attributeMap.get(e);
            t || (t = {
                node: e,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
            },
            this.attributes.push(t),
            this.attributeMap.set(e, t)),
            t.attributes.value = Array.from(e.childNodes, (e => e.textContent || "")).join("")
        }
        ,
        this.processMutation = e => {
            if (!wr(e.target, this.mirror))
                switch (e.type) {
                case "characterData":
                    {
                        const t = e.target.textContent;
                        _r(e.target, this.blockClass, this.blockSelector, !1) || t === e.oldValue || this.texts.push({
                            value: ir(e.target, this.maskTextClass, this.maskTextSelector, !0) && t ? this.maskTextFn ? this.maskTextFn(t, br(e.target)) : t.replace(/[\S]/g, "*") : t,
                            node: e.target
                        });
                        break
                    }
                case "attributes":
                    {
                        const n = e.target;
                        let r = e.attributeName
                          , o = e.target.getAttribute(r);
                        if ("value" === r) {
                            const e = Un(n);
                            o = Ln({
                                element: n,
                                maskInputOptions: this.maskInputOptions,
                                tagName: n.tagName,
                                type: e,
                                value: o,
                                maskInputFn: this.maskInputFn
                            })
                        }
                        if (_r(e.target, this.blockClass, this.blockSelector, !1) || o === e.oldValue)
                            return;
                        let i = this.attributeMap.get(e.target);
                        if ("IFRAME" === n.tagName && "src" === r && !this.keepIframeSrcFn(o)) {
                            if (n.contentDocument)
                                return;
                            r = "rr_src"
                        }
                        if (i || (i = {
                            node: e.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        },
                        this.attributes.push(i),
                        this.attributeMap.set(e.target, i)),
                        "type" === r && "INPUT" === n.tagName && "password" === (e.oldValue || "").toLowerCase() && n.setAttribute("data-rr-is-password", "true"),
                        !rr(n.tagName, r) && (i.attributes[r] = nr(this.doc, An(n.tagName), An(r), o),
                        "style" === r)) {
                            if (!this.unattachedDoc)
                                try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument()
                                } catch (t) {
                                    this.unattachedDoc = this.doc
                                }
                            const r = this.unattachedDoc.createElement("span");
                            e.oldValue && r.setAttribute("style", e.oldValue);
                            for (const e of Array.from(n.style)) {
                                const t = n.style.getPropertyValue(e)
                                  , o = n.style.getPropertyPriority(e);
                                t !== r.style.getPropertyValue(e) || o !== r.style.getPropertyPriority(e) ? i.styleDiff[e] = "" === o ? t : [t, o] : i._unchangedStyles[e] = [t, o]
                            }
                            for (const e of Array.from(r.style))
                                "" === n.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                        }
                        break
                    }
                case "childList":
                    if (_r(e.target, this.blockClass, this.blockSelector, !0))
                        return;
                    if ("TEXTAREA" === e.target.tagName)
                        return void this.genTextAreaValueMutation(e.target);
                    e.addedNodes.forEach((t => this.genAdds(t, e.target))),
                    e.removedNodes.forEach((t => {
                        const n = this.mirror.getId(t)
                          , r = In(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                        _r(e.target, this.blockClass, this.blockSelector, !1) || wr(t, this.mirror) || !function(e, t) {
                            return -1 !== t.getId(e)
                        }(t, this.mirror) || (this.addedSet.has(t) ? (zr(this.addedSet, t),
                        this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || Sr(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Ur(n, r)] ? zr(this.movedSet, t) : this.removes.push({
                            parentId: r,
                            id: n,
                            isShadow: !(!In(e.target) || !Mn(e.target)) || void 0
                        })),
                        this.mapRemoves.push(t))
                    }
                    ))
                }
        }
        ,
        this.genAdds = (e, t) => {
            if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
                if (this.mirror.hasNode(e)) {
                    if (wr(e, this.mirror))
                        return;
                    this.movedSet.add(e);
                    let n = null;
                    t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                    n && -1 !== n && (this.movedMap[Ur(this.mirror.getId(e), n)] = !0)
                } else
                    this.addedSet.add(e),
                    this.droppedSet.delete(e);
                _r(e, this.blockClass, this.blockSelector, !1) || (e.childNodes.forEach((e => this.genAdds(e))),
                Cr(e) && e.shadowRoot.childNodes.forEach((t => {
                    this.processedNodeManager.add(t, this),
                    this.genAdds(t, e)
                }
                )))
            }
        }
    }
    init(e) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((t => {
            this[t] = e[t]
        }
        ))
    }
    freeze() {
        this.frozen = !0,
        this.canvasManager.freeze()
    }
    unfreeze() {
        this.frozen = !1,
        this.canvasManager.unfreeze(),
        this.emit()
    }
    isFrozen() {
        return this.frozen
    }
    lock() {
        this.locked = !0,
        this.canvasManager.lock()
    }
    unlock() {
        this.locked = !1,
        this.canvasManager.unlock(),
        this.emit()
    }
    reset() {
        this.shadowDomManager.reset(),
        this.canvasManager.reset()
    }
}
function zr(e, t) {
    e.delete(t),
    t.childNodes.forEach((t => zr(e, t)))
}
function Br(e, t, n) {
    return 0 !== e.length && qr(e, t, n)
}
function qr(e, t, n) {
    const {parentNode: r} = t;
    if (!r)
        return !1;
    const o = n.getId(r);
    return !!e.some((e => e.id === o)) || qr(e, r, n)
}
function Wr(e, t) {
    return 0 !== e.size && Vr(e, t)
}
function Vr(e, t) {
    const {parentNode: n} = t;
    return !!n && (!!e.has(n) || Vr(e, n))
}
let $r;
const Hr = e => {
    if (!$r)
        return e;
    return (...t) => {
        try {
            return e(...t)
        } catch (ui) {
            if ($r && !0 === $r(ui))
                return;
            throw ui
        }
    }
}
  , Qr = [];
function Yr(e) {
    try {
        if ("composedPath"in e) {
            const t = e.composedPath();
            if (t.length)
                return t[0]
        } else if ("path"in e && e.path.length)
            return e.path[0]
    } catch (t) {}
    return e && e.target
}
function Gr(e, t) {
    var n, r;
    const o = new jr;
    Qr.push(o),
    o.init(e);
    let i = window.MutationObserver || window.__rrMutationObserver;
    const a = null === (r = null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
    a && window[a] && (i = window[a]);
    const s = new i(Hr(o.processMutations.bind(o)));
    return s.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }),
    s
}
function Kr({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, sampling: i}) {
    if (!1 === i.mouseInteraction)
        return () => {}
        ;
    const a = !0 === i.mouseInteraction || void 0 === i.mouseInteraction ? {} : i.mouseInteraction
      , s = [];
    let u = null;
    return Object.keys(Nr).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e])).forEach((i => {
        let a = An(i);
        const l = (t => i => {
            const a = Yr(i);
            if (_r(a, r, o, !0))
                return;
            let s = null
              , l = t;
            if ("pointerType"in i) {
                switch (i.pointerType) {
                case "mouse":
                    s = Dr.Mouse;
                    break;
                case "touch":
                    s = Dr.Touch;
                    break;
                case "pen":
                    s = Dr.Pen
                }
                s === Dr.Touch ? Nr[t] === Nr.MouseDown ? l = "TouchStart" : Nr[t] === Nr.MouseUp && (l = "TouchEnd") : Dr.Pen
            } else
                kr(i) && (s = Dr.Touch);
            null !== s ? (u = s,
            (l.startsWith("Touch") && s === Dr.Touch || l.startsWith("Mouse") && s === Dr.Mouse) && (s = null)) : Nr[t] === Nr.Click && (s = u,
            u = null);
            const c = kr(i) ? i.changedTouches[0] : i;
            if (!c)
                return;
            const d = n.getId(a)
              , {clientX: f, clientY: p} = c;
            Hr(e)(Object.assign({
                type: Nr[l],
                id: d,
                x: f,
                y: p
            }, null !== s && {
                pointerType: s
            }))
        }
        )(i);
        if (window.PointerEvent)
            switch (Nr[i]) {
            case Nr.MouseDown:
            case Nr.MouseUp:
                a = a.replace("mouse", "pointer");
                break;
            case Nr.TouchStart:
            case Nr.TouchEnd:
                return
            }
        s.push(lr(a, l, t))
    }
    )),
    Hr(( () => {
        s.forEach((e => e()))
    }
    ))
}
function Xr({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, sampling: i}) {
    return lr("scroll", Hr(fr(Hr((i => {
        const a = Yr(i);
        if (!a || _r(a, r, o, !0))
            return;
        const s = n.getId(a);
        if (a === t && t.defaultView) {
            const n = gr(t.defaultView);
            e({
                id: s,
                x: n.left,
                y: n.top
            })
        } else
            e({
                id: s,
                x: a.scrollLeft,
                y: a.scrollTop
            })
    }
    )), i.scroll || 100)), t)
}
const Jr = ["INPUT", "TEXTAREA", "SELECT"]
  , Zr = new WeakMap;
function eo(e) {
    return function(e, t) {
        if (oo("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || oo("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || oo("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || oo("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
            const n = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(n)
        } else if (e.parentStyleSheet) {
            const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(n)
        }
        return t
    }(e, [])
}
function to(e, t, n) {
    let r, o;
    return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : o = n.getId(e),
    {
        styleId: o,
        id: r
    }) : {}
}
function no({mirror: e, stylesheetManager: t}, n) {
    var r, o, i;
    let a = null;
    a = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
    const s = "#document" === n.nodeName ? null === (r = n.defaultView) || void 0 === r ? void 0 : r.Document : null === (i = null === (o = n.ownerDocument) || void 0 === o ? void 0 : o.defaultView) || void 0 === i ? void 0 : i.ShadowRoot
      , u = (null == s ? void 0 : s.prototype) ? Object.getOwnPropertyDescriptor(null == s ? void 0 : s.prototype, "adoptedStyleSheets") : void 0;
    return null !== a && -1 !== a && s && u ? (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: u.configurable,
        enumerable: u.enumerable,
        get() {
            var e;
            return null === (e = u.get) || void 0 === e ? void 0 : e.call(this)
        },
        set(e) {
            var n;
            const r = null === (n = u.set) || void 0 === n ? void 0 : n.call(this, e);
            if (null !== a && -1 !== a)
                try {
                    t.adoptStyleSheets(e, a)
                } catch (o) {}
            return r
        }
    }),
    Hr(( () => {
        Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: u.configurable,
            enumerable: u.enumerable,
            get: u.get,
            set: u.set
        })
    }
    ))) : () => {}
}
function ro(e, t={}) {
    const n = e.doc.defaultView;
    if (!n)
        return () => {}
        ;
    let r;
    !function(e, t) {
        const {mutationCb: n, mousemoveCb: r, mouseInteractionCb: o, scrollCb: i, viewportResizeCb: a, inputCb: s, mediaInteractionCb: u, styleSheetRuleCb: l, styleDeclarationCb: c, canvasMutationCb: d, fontCb: f, selectionCb: p, customElementCb: h} = e;
        e.mutationCb = (...e) => {
            t.mutation && t.mutation(...e),
            n(...e)
        }
        ,
        e.mousemoveCb = (...e) => {
            t.mousemove && t.mousemove(...e),
            r(...e)
        }
        ,
        e.mouseInteractionCb = (...e) => {
            t.mouseInteraction && t.mouseInteraction(...e),
            o(...e)
        }
        ,
        e.scrollCb = (...e) => {
            t.scroll && t.scroll(...e),
            i(...e)
        }
        ,
        e.viewportResizeCb = (...e) => {
            t.viewportResize && t.viewportResize(...e),
            a(...e)
        }
        ,
        e.inputCb = (...e) => {
            t.input && t.input(...e),
            s(...e)
        }
        ,
        e.mediaInteractionCb = (...e) => {
            t.mediaInteaction && t.mediaInteaction(...e),
            u(...e)
        }
        ,
        e.styleSheetRuleCb = (...e) => {
            t.styleSheetRule && t.styleSheetRule(...e),
            l(...e)
        }
        ,
        e.styleDeclarationCb = (...e) => {
            t.styleDeclaration && t.styleDeclaration(...e),
            c(...e)
        }
        ,
        e.canvasMutationCb = (...e) => {
            t.canvasMutation && t.canvasMutation(...e),
            d(...e)
        }
        ,
        e.fontCb = (...e) => {
            t.font && t.font(...e),
            f(...e)
        }
        ,
        e.selectionCb = (...e) => {
            t.selection && t.selection(...e),
            p(...e)
        }
        ,
        e.customElementCb = (...e) => {
            t.customElement && t.customElement(...e),
            h(...e)
        }
    }(e, t),
    e.recordDOM && (r = Gr(e, e.doc));
    const o = function({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
        if (!1 === t.mousemove)
            return () => {}
            ;
        const o = "number" == typeof t.mousemove ? t.mousemove : 50
          , i = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
        let a, s = [];
        const u = fr(Hr((t => {
            const n = Date.now() - a;
            e(s.map((e => (e.timeOffset -= n,
            e))), t),
            s = [],
            a = null
        }
        )), i)
          , l = Hr(fr(Hr((e => {
            const t = Yr(e)
              , {clientX: n, clientY: o} = kr(e) ? e.changedTouches[0] : e;
            a || (a = mr()),
            s.push({
                x: n,
                y: o,
                id: r.getId(t),
                timeOffset: mr() - a
            }),
            u("undefined" != typeof DragEvent && e instanceof DragEvent ? Pr.Drag : e instanceof MouseEvent ? Pr.MouseMove : Pr.TouchMove)
        }
        )), o, {
            trailing: !1
        }))
          , c = [lr("mousemove", l, n), lr("touchmove", l, n), lr("drag", l, n)];
        return Hr(( () => {
            c.forEach((e => e()))
        }
        ))
    }(e)
      , i = Kr(e)
      , a = Xr(e)
      , s = function({viewportResizeCb: e}, {win: t}) {
        let n = -1
          , r = -1;
        return lr("resize", Hr(fr(Hr(( () => {
            const t = yr()
              , o = vr();
            n === t && r === o || (e({
                width: Number(o),
                height: Number(t)
            }),
            n = t,
            r = o)
        }
        )), 200)), t)
    }(e, {
        win: n
    })
      , u = function({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, ignoreClass: i, ignoreSelector: a, maskInputOptions: s, maskInputFn: u, sampling: l, userTriggeredOnInput: c}) {
        function d(e) {
            let n = Yr(e);
            const l = e.isTrusted
              , d = n && n.tagName;
            if (n && "OPTION" === d && (n = n.parentElement),
            !n || !d || Jr.indexOf(d) < 0 || _r(n, r, o, !0))
                return;
            if (n.classList.contains(i) || a && n.matches(a))
                return;
            let p = n.value
              , h = !1;
            const m = Un(n) || "";
            "radio" === m || "checkbox" === m ? h = n.checked : (s[d.toLowerCase()] || s[m]) && (p = Ln({
                element: n,
                maskInputOptions: s,
                tagName: d,
                type: m,
                value: p,
                maskInputFn: u
            })),
            f(n, c ? {
                text: p,
                isChecked: h,
                userTriggered: l
            } : {
                text: p,
                isChecked: h
            });
            const g = n.name;
            "radio" === m && g && h && t.querySelectorAll(`input[type="radio"][name="${g}"]`).forEach((e => {
                if (e !== n) {
                    const t = e.value;
                    f(e, c ? {
                        text: t,
                        isChecked: !h,
                        userTriggered: !1
                    } : {
                        text: t,
                        isChecked: !h
                    })
                }
            }
            ))
        }
        function f(t, r) {
            const o = Zr.get(t);
            if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                Zr.set(t, r);
                const o = n.getId(t);
                Hr(e)(Object.assign(Object.assign({}, r), {
                    id: o
                }))
            }
        }
        const p = ("last" === l.input ? ["change"] : ["input", "change"]).map((e => lr(e, Hr(d), t)))
          , h = t.defaultView;
        if (!h)
            return () => {
                p.forEach((e => e()))
            }
            ;
        const m = h.Object.getOwnPropertyDescriptor(h.HTMLInputElement.prototype, "value")
          , g = [[h.HTMLInputElement.prototype, "value"], [h.HTMLInputElement.prototype, "checked"], [h.HTMLSelectElement.prototype, "value"], [h.HTMLTextAreaElement.prototype, "value"], [h.HTMLSelectElement.prototype, "selectedIndex"], [h.HTMLOptionElement.prototype, "selected"]];
        return m && m.set && p.push(...g.map((e => pr(e[0], e[1], {
            set() {
                Hr(d)({
                    target: this,
                    isTrusted: !1
                })
            }
        }, !1, h)))),
        Hr(( () => {
            p.forEach((e => e()))
        }
        ))
    }(e)
      , l = function({mediaInteractionCb: e, blockClass: t, blockSelector: n, mirror: r, sampling: o, doc: i}) {
        const a = Hr((i => fr(Hr((o => {
            const a = Yr(o);
            if (!a || _r(a, t, n, !0))
                return;
            const {currentTime: s, volume: u, muted: l, playbackRate: c, loop: d} = a;
            e({
                type: i,
                id: r.getId(a),
                currentTime: s,
                volume: u,
                muted: l,
                playbackRate: c,
                loop: d
            })
        }
        )), o.media || 500)))
          , s = [lr("play", a(0), i), lr("pause", a(1), i), lr("seeked", a(2), i), lr("volumechange", a(3), i), lr("ratechange", a(4), i)];
        return Hr(( () => {
            s.forEach((e => e()))
        }
        ))
    }(e);
    let c = () => {}
      , d = () => {}
      , f = () => {}
      , p = () => {}
    ;
    e.recordDOM && (c = function({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
        if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
            return () => {}
            ;
        const o = r.CSSStyleSheet.prototype.insertRule;
        r.CSSStyleSheet.prototype.insertRule = new Proxy(o,{
            apply: Hr(( (r, o, i) => {
                const [a,s] = i
                  , {id: u, styleId: l} = to(o, t, n.styleMirror);
                return (u && -1 !== u || l && -1 !== l) && e({
                    id: u,
                    styleId: l,
                    adds: [{
                        rule: a,
                        index: s
                    }]
                }),
                r.apply(o, i)
            }
            ))
        });
        const i = r.CSSStyleSheet.prototype.deleteRule;
        let a, s;
        r.CSSStyleSheet.prototype.deleteRule = new Proxy(i,{
            apply: Hr(( (r, o, i) => {
                const [a] = i
                  , {id: s, styleId: u} = to(o, t, n.styleMirror);
                return (s && -1 !== s || u && -1 !== u) && e({
                    id: s,
                    styleId: u,
                    removes: [{
                        index: a
                    }]
                }),
                r.apply(o, i)
            }
            ))
        }),
        r.CSSStyleSheet.prototype.replace && (a = r.CSSStyleSheet.prototype.replace,
        r.CSSStyleSheet.prototype.replace = new Proxy(a,{
            apply: Hr(( (r, o, i) => {
                const [a] = i
                  , {id: s, styleId: u} = to(o, t, n.styleMirror);
                return (s && -1 !== s || u && -1 !== u) && e({
                    id: s,
                    styleId: u,
                    replace: a
                }),
                r.apply(o, i)
            }
            ))
        })),
        r.CSSStyleSheet.prototype.replaceSync && (s = r.CSSStyleSheet.prototype.replaceSync,
        r.CSSStyleSheet.prototype.replaceSync = new Proxy(s,{
            apply: Hr(( (r, o, i) => {
                const [a] = i
                  , {id: s, styleId: u} = to(o, t, n.styleMirror);
                return (s && -1 !== s || u && -1 !== u) && e({
                    id: s,
                    styleId: u,
                    replaceSync: a
                }),
                r.apply(o, i)
            }
            ))
        }));
        const u = {};
        io("CSSGroupingRule") ? u.CSSGroupingRule = r.CSSGroupingRule : (io("CSSMediaRule") && (u.CSSMediaRule = r.CSSMediaRule),
        io("CSSConditionRule") && (u.CSSConditionRule = r.CSSConditionRule),
        io("CSSSupportsRule") && (u.CSSSupportsRule = r.CSSSupportsRule));
        const l = {};
        return Object.entries(u).forEach(( ([r,o]) => {
            l[r] = {
                insertRule: o.prototype.insertRule,
                deleteRule: o.prototype.deleteRule
            },
            o.prototype.insertRule = new Proxy(l[r].insertRule,{
                apply: Hr(( (r, o, i) => {
                    const [a,s] = i
                      , {id: u, styleId: l} = to(o.parentStyleSheet, t, n.styleMirror);
                    return (u && -1 !== u || l && -1 !== l) && e({
                        id: u,
                        styleId: l,
                        adds: [{
                            rule: a,
                            index: [...eo(o), s || 0]
                        }]
                    }),
                    r.apply(o, i)
                }
                ))
            }),
            o.prototype.deleteRule = new Proxy(l[r].deleteRule,{
                apply: Hr(( (r, o, i) => {
                    const [a] = i
                      , {id: s, styleId: u} = to(o.parentStyleSheet, t, n.styleMirror);
                    return (s && -1 !== s || u && -1 !== u) && e({
                        id: s,
                        styleId: u,
                        removes: [{
                            index: [...eo(o), a]
                        }]
                    }),
                    r.apply(o, i)
                }
                ))
            })
        }
        )),
        Hr(( () => {
            r.CSSStyleSheet.prototype.insertRule = o,
            r.CSSStyleSheet.prototype.deleteRule = i,
            a && (r.CSSStyleSheet.prototype.replace = a),
            s && (r.CSSStyleSheet.prototype.replaceSync = s),
            Object.entries(u).forEach(( ([e,t]) => {
                t.prototype.insertRule = l[e].insertRule,
                t.prototype.deleteRule = l[e].deleteRule
            }
            ))
        }
        ))
    }(e, {
        win: n
    }),
    d = no(e, e.doc),
    f = function({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: o}) {
        const i = o.CSSStyleDeclaration.prototype.setProperty;
        o.CSSStyleDeclaration.prototype.setProperty = new Proxy(i,{
            apply: Hr(( (o, a, s) => {
                var u;
                const [l,c,d] = s;
                if (n.has(l))
                    return i.apply(a, [l, c, d]);
                const {id: f, styleId: p} = to(null === (u = a.parentRule) || void 0 === u ? void 0 : u.parentStyleSheet, t, r.styleMirror);
                return (f && -1 !== f || p && -1 !== p) && e({
                    id: f,
                    styleId: p,
                    set: {
                        property: l,
                        value: c,
                        priority: d
                    },
                    index: eo(a.parentRule)
                }),
                o.apply(a, s)
            }
            ))
        });
        const a = o.CSSStyleDeclaration.prototype.removeProperty;
        return o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(a,{
            apply: Hr(( (o, i, s) => {
                var u;
                const [l] = s;
                if (n.has(l))
                    return a.apply(i, [l]);
                const {id: c, styleId: d} = to(null === (u = i.parentRule) || void 0 === u ? void 0 : u.parentStyleSheet, t, r.styleMirror);
                return (c && -1 !== c || d && -1 !== d) && e({
                    id: c,
                    styleId: d,
                    remove: {
                        property: l
                    },
                    index: eo(i.parentRule)
                }),
                o.apply(i, s)
            }
            ))
        }),
        Hr(( () => {
            o.CSSStyleDeclaration.prototype.setProperty = i,
            o.CSSStyleDeclaration.prototype.removeProperty = a
        }
        ))
    }(e, {
        win: n
    }),
    e.collectFonts && (p = function({fontCb: e, doc: t}) {
        const n = t.defaultView;
        if (!n)
            return () => {}
            ;
        const r = []
          , o = new WeakMap
          , i = n.FontFace;
        n.FontFace = function(e, t, n) {
            const r = new i(e,t,n);
            return o.set(r, {
                family: e,
                buffer: "string" != typeof t,
                descriptors: n,
                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
            }),
            r
        }
        ;
        const a = hr(t.fonts, "add", (function(t) {
            return function(n) {
                return setTimeout(Hr(( () => {
                    const t = o.get(n);
                    t && (e(t),
                    o.delete(n))
                }
                )), 0),
                t.apply(this, [n])
            }
        }
        ));
        return r.push(( () => {
            n.FontFace = i
        }
        )),
        r.push(a),
        Hr(( () => {
            r.forEach((e => e()))
        }
        ))
    }(e)));
    const h = function(e) {
        const {doc: t, mirror: n, blockClass: r, blockSelector: o, selectionCb: i} = e;
        let a = !0;
        const s = Hr(( () => {
            const e = t.getSelection();
            if (!e || a && (null == e ? void 0 : e.isCollapsed))
                return;
            a = e.isCollapsed || !1;
            const s = []
              , u = e.rangeCount || 0;
            for (let t = 0; t < u; t++) {
                const i = e.getRangeAt(t)
                  , {startContainer: a, startOffset: u, endContainer: l, endOffset: c} = i;
                _r(a, r, o, !0) || _r(l, r, o, !0) || s.push({
                    start: n.getId(a),
                    startOffset: u,
                    end: n.getId(l),
                    endOffset: c
                })
            }
            i({
                ranges: s
            })
        }
        ));
        return s(),
        lr("selectionchange", s)
    }(e)
      , m = function({doc: e, customElementCb: t}) {
        const n = e.defaultView;
        return n && n.customElements ? hr(n.customElements, "define", (function(e) {
            return function(n, r, o) {
                try {
                    t({
                        define: {
                            name: n
                        }
                    })
                } catch (i) {
                    console.warn(`Custom element callback failed for ${n}`)
                }
                return e.apply(this, [n, r, o])
            }
        }
        )) : () => {}
    }(e)
      , g = [];
    for (const y of e.plugins)
        g.push(y.observer(y.callback, n, y.options));
    return Hr(( () => {
        Qr.forEach((e => e.reset())),
        null == r || r.disconnect(),
        o(),
        i(),
        a(),
        s(),
        u(),
        l(),
        c(),
        d(),
        f(),
        p(),
        h(),
        m(),
        g.forEach((e => e()))
    }
    ))
}
function oo(e) {
    return void 0 !== window[e]
}
function io(e) {
    return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
}
class ao {
    constructor(e) {
        this.generateIdFn = e,
        this.iframeIdToRemoteIdMap = new WeakMap,
        this.iframeRemoteIdToIdMap = new WeakMap
    }
    getId(e, t, n, r) {
        const o = n || this.getIdToRemoteIdMap(e)
          , i = r || this.getRemoteIdToIdMap(e);
        let a = o.get(t);
        return a || (a = this.generateIdFn(),
        o.set(t, a),
        i.set(a, t)),
        a
    }
    getIds(e, t) {
        const n = this.getIdToRemoteIdMap(e)
          , r = this.getRemoteIdToIdMap(e);
        return t.map((t => this.getId(e, t, n, r)))
    }
    getRemoteId(e, t, n) {
        const r = n || this.getRemoteIdToIdMap(e);
        if ("number" != typeof t)
            return t;
        const o = r.get(t);
        return o || -1
    }
    getRemoteIds(e, t) {
        const n = this.getRemoteIdToIdMap(e);
        return t.map((t => this.getRemoteId(e, t, n)))
    }
    reset(e) {
        if (!e)
            return this.iframeIdToRemoteIdMap = new WeakMap,
            void (this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(e),
        this.iframeRemoteIdToIdMap.delete(e)
    }
    getIdToRemoteIdMap(e) {
        let t = this.iframeIdToRemoteIdMap.get(e);
        return t || (t = new Map,
        this.iframeIdToRemoteIdMap.set(e, t)),
        t
    }
    getRemoteIdToIdMap(e) {
        let t = this.iframeRemoteIdToIdMap.get(e);
        return t || (t = new Map,
        this.iframeRemoteIdToIdMap.set(e, t)),
        t
    }
}
class so {
    constructor(e) {
        this.iframes = new WeakMap,
        this.crossOriginIframeMap = new WeakMap,
        this.crossOriginIframeMirror = new ao(Wn),
        this.crossOriginIframeRootIdMap = new WeakMap,
        this.mutationCb = e.mutationCb,
        this.wrappedEmit = e.wrappedEmit,
        this.stylesheetManager = e.stylesheetManager,
        this.recordCrossOriginIframes = e.recordCrossOriginIframes,
        this.crossOriginIframeStyleMirror = new ao(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
        this.mirror = e.mirror,
        this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
    }
    addIframe(e) {
        this.iframes.set(e, !0),
        e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
    }
    addLoadListener(e) {
        this.loadListener = e
    }
    attachIframe(e, t) {
        var n;
        this.mutationCb({
            adds: [{
                parentId: this.mirror.getId(e),
                nextId: null,
                node: t
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }),
        null === (n = this.loadListener) || void 0 === n || n.call(this, e),
        e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
    }
    handleMessage(e) {
        const t = e;
        if ("rrweb" !== t.data.type || t.origin !== t.data.origin)
            return;
        if (!e.source)
            return;
        const n = this.crossOriginIframeMap.get(e.source);
        if (!n)
            return;
        const r = this.transformCrossOriginEvent(n, t.data.event);
        r && this.wrappedEmit(r, t.data.isCheckout)
    }
    transformCrossOriginEvent(e, t) {
        var n;
        switch (t.type) {
        case Mr.FullSnapshot:
            {
                this.crossOriginIframeMirror.reset(e),
                this.crossOriginIframeStyleMirror.reset(e),
                this.replaceIdOnNode(t.data.node, e);
                const n = t.data.node.id;
                return this.crossOriginIframeRootIdMap.set(e, n),
                this.patchRootIdOnNode(t.data.node, n),
                {
                    timestamp: t.timestamp,
                    type: Mr.IncrementalSnapshot,
                    data: {
                        source: Pr.Mutation,
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t.data.node
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }
                }
            }
        case Mr.Meta:
        case Mr.Load:
        case Mr.DomContentLoaded:
            return !1;
        case Mr.Plugin:
            return t;
        case Mr.Custom:
            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]),
            t;
        case Mr.IncrementalSnapshot:
            switch (t.data.source) {
            case Pr.Mutation:
                return t.data.adds.forEach((t => {
                    this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                    this.replaceIdOnNode(t.node, e);
                    const n = this.crossOriginIframeRootIdMap.get(e);
                    n && this.patchRootIdOnNode(t.node, n)
                }
                )),
                t.data.removes.forEach((t => {
                    this.replaceIds(t, e, ["parentId", "id"])
                }
                )),
                t.data.attributes.forEach((t => {
                    this.replaceIds(t, e, ["id"])
                }
                )),
                t.data.texts.forEach((t => {
                    this.replaceIds(t, e, ["id"])
                }
                )),
                t;
            case Pr.Drag:
            case Pr.TouchMove:
            case Pr.MouseMove:
                return t.data.positions.forEach((t => {
                    this.replaceIds(t, e, ["id"])
                }
                )),
                t;
            case Pr.ViewportResize:
                return !1;
            case Pr.MediaInteraction:
            case Pr.MouseInteraction:
            case Pr.Scroll:
            case Pr.CanvasMutation:
            case Pr.Input:
                return this.replaceIds(t.data, e, ["id"]),
                t;
            case Pr.StyleSheetRule:
            case Pr.StyleDeclaration:
                return this.replaceIds(t.data, e, ["id"]),
                this.replaceStyleIds(t.data, e, ["styleId"]),
                t;
            case Pr.Font:
                return t;
            case Pr.Selection:
                return t.data.ranges.forEach((t => {
                    this.replaceIds(t, e, ["start", "end"])
                }
                )),
                t;
            case Pr.AdoptedStyleSheet:
                return this.replaceIds(t.data, e, ["id"]),
                this.replaceStyleIds(t.data, e, ["styleIds"]),
                null === (n = t.data.styles) || void 0 === n || n.forEach((t => {
                    this.replaceStyleIds(t, e, ["styleId"])
                }
                )),
                t
            }
        }
        return !1
    }
    replace(e, t, n, r) {
        for (const o of r)
            (Array.isArray(t[o]) || "number" == typeof t[o]) && (Array.isArray(t[o]) ? t[o] = e.getIds(n, t[o]) : t[o] = e.getId(n, t[o]));
        return t
    }
    replaceIds(e, t, n) {
        return this.replace(this.crossOriginIframeMirror, e, t, n)
    }
    replaceStyleIds(e, t, n) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
    }
    replaceIdOnNode(e, t) {
        this.replaceIds(e, t, ["id", "rootId"]),
        "childNodes"in e && e.childNodes.forEach((e => {
            this.replaceIdOnNode(e, t)
        }
        ))
    }
    patchRootIdOnNode(e, t) {
        e.type === Rn.Document || e.rootId || (e.rootId = t),
        "childNodes"in e && e.childNodes.forEach((e => {
            this.patchRootIdOnNode(e, t)
        }
        ))
    }
}
class uo {
    constructor(e) {
        this.shadowDoms = new WeakSet,
        this.restoreHandlers = [],
        this.mutationCb = e.mutationCb,
        this.scrollCb = e.scrollCb,
        this.bypassOptions = e.bypassOptions,
        this.mirror = e.mirror,
        this.init()
    }
    init() {
        this.reset(),
        this.patchAttachShadow(Element, document)
    }
    addShadowRoot(e, t) {
        if (!Mn(e))
            return;
        if (this.shadowDoms.has(e))
            return;
        this.shadowDoms.add(e);
        const n = Gr(Object.assign(Object.assign({}, this.bypassOptions), {
            doc: t,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }), e);
        this.restoreHandlers.push(( () => n.disconnect())),
        this.restoreHandlers.push(Xr(Object.assign(Object.assign({}, this.bypassOptions), {
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror
        }))),
        setTimeout(( () => {
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)),
            this.restoreHandlers.push(no({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, e))
        }
        ), 0)
    }
    observeAttachShadow(e) {
        e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
    }
    patchAttachShadow(e, t) {
        const n = this;
        this.restoreHandlers.push(hr(e.prototype, "attachShadow", (function(e) {
            return function(r) {
                const o = e.call(this, r);
                return this.shadowRoot && Ir(this) && n.addShadowRoot(this.shadowRoot, t),
                o
            }
        }
        )))
    }
    reset() {
        this.restoreHandlers.forEach((e => {
            try {
                e()
            } catch (t) {}
        }
        )),
        this.restoreHandlers = [],
        this.shadowDoms = new WeakSet
    }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function lo(e, t, n, r) {
    return new (n || (n = Promise))((function(t, o) {
        function i(e) {
            try {
                s(r.next(e))
            } catch (t) {
                o(t)
            }
        }
        function a(e) {
            try {
                s(r.throw(e))
            } catch (t) {
                o(t)
            }
        }
        function s(e) {
            var r;
            e.done ? t(e.value) : (r = e.value,
            r instanceof n ? r : new n((function(e) {
                e(r)
            }
            ))).then(i, a)
        }
        s((r = r.apply(e, [])).next())
    }
    ))
}
for (var co = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fo = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), po = 0; po < 64; po++)
    fo[co.charCodeAt(po)] = po;
const ho = new Map;
const mo = (e, t, n) => {
    if (!e || !vo(e, t) && "object" != typeof e)
        return;
    const r = function(e, t) {
        let n = ho.get(e);
        return n || (n = new Map,
        ho.set(e, n)),
        n.has(t) || n.set(t, []),
        n.get(t)
    }(n, e.constructor.name);
    let o = r.indexOf(e);
    return -1 === o && (o = r.length,
    r.push(e)),
    o
}
;
function go(e, t, n) {
    if (e instanceof Array)
        return e.map((e => go(e, t, n)));
    if (null === e)
        return e;
    if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) {
        return {
            rr_type: e.constructor.name,
            args: [Object.values(e)]
        }
    }
    if (e instanceof ArrayBuffer) {
        const t = e.constructor.name
          , n = function(e) {
            var t, n = new Uint8Array(e), r = n.length, o = "";
            for (t = 0; t < r; t += 3)
                o += co[n[t] >> 2],
                o += co[(3 & n[t]) << 4 | n[t + 1] >> 4],
                o += co[(15 & n[t + 1]) << 2 | n[t + 2] >> 6],
                o += co[63 & n[t + 2]];
            return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
            o
        }(e);
        return {
            rr_type: t,
            base64: n
        }
    }
    if (e instanceof DataView) {
        return {
            rr_type: e.constructor.name,
            args: [go(e.buffer, t, n), e.byteOffset, e.byteLength]
        }
    }
    if (e instanceof HTMLImageElement) {
        const t = e.constructor.name
          , {src: n} = e;
        return {
            rr_type: t,
            src: n
        }
    }
    if (e instanceof HTMLCanvasElement) {
        return {
            rr_type: "HTMLImageElement",
            src: e.toDataURL()
        }
    }
    if (e instanceof ImageData) {
        return {
            rr_type: e.constructor.name,
            args: [go(e.data, t, n), e.width, e.height]
        }
    }
    if (vo(e, t) || "object" == typeof e) {
        return {
            rr_type: e.constructor.name,
            index: mo(e, t, n)
        }
    }
    return e
}
const yo = (e, t, n) => e.map((e => go(e, t, n)))
  , vo = (e, t) => {
    const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" == typeof t[e]));
    return Boolean(n.find((n => e instanceof t[n])))
}
;
function bo(e, t, n, r) {
    const o = [];
    try {
        const i = hr(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
            return function(o, ...i) {
                if (!_r(this, t, n, !0)) {
                    const e = function(e) {
                        return "experimental-webgl" === e ? "webgl" : e
                    }(o);
                    if ("__context"in this || (this.__context = e),
                    r && ["webgl", "webgl2"].includes(e))
                        if (i[0] && "object" == typeof i[0]) {
                            const e = i[0];
                            e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                        } else
                            i.splice(0, 1, {
                                preserveDrawingBuffer: !0
                            })
                }
                return e.apply(this, [o, ...i])
            }
        }
        ));
        o.push(i)
    } catch (i) {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
    }
    return () => {
        o.forEach((e => e()))
    }
}
function _o(e, t, n, r, o, i, a) {
    const s = []
      , u = Object.getOwnPropertyNames(e);
    for (const c of u)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(c))
            try {
                if ("function" != typeof e[c])
                    continue;
                const i = hr(e, c, (function(e) {
                    return function(...i) {
                        const s = e.apply(this, i);
                        if (mo(s, a, this),
                        "tagName"in this.canvas && !_r(this.canvas, r, o, !0)) {
                            const e = yo(i, a, this)
                              , r = {
                                type: t,
                                property: c,
                                args: e
                            };
                            n(this.canvas, r)
                        }
                        return s
                    }
                }
                ));
                s.push(i)
            } catch (l) {
                const r = pr(e, c, {
                    set(e) {
                        n(this.canvas, {
                            type: t,
                            property: c,
                            args: [e],
                            setter: !0
                        })
                    }
                });
                s.push(r)
            }
    return s
}
var wo, So, ko = (wo = function() {
    !function() {
        /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
        Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
        function e(e, t, n, r) {
            return new (n || (n = Promise))((function(t, o) {
                function i(e) {
                    try {
                        s(r.next(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(e) {
                    try {
                        s(r.throw(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function s(e) {
                    var r;
                    e.done ? t(e.value) : (r = e.value,
                    r instanceof n ? r : new n((function(e) {
                        e(r)
                    }
                    ))).then(i, a)
                }
                s((r = r.apply(e, [])).next())
            }
            ))
        }
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), r = 0; r < 64; r++)
            n[t.charCodeAt(r)] = r;
        var o = function(e) {
            var n, r = new Uint8Array(e), o = r.length, i = "";
            for (n = 0; n < o; n += 3)
                i += t[r[n] >> 2],
                i += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                i += t[63 & r[n + 2]];
            return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
        };
        const i = new Map
          , a = new Map
          , s = self;
        s.onmessage = function(t) {
            return e(this, 0, void 0, (function*() {
                if (!("OffscreenCanvas"in globalThis))
                    return s.postMessage({
                        id: t.data.id
                    });
                {
                    const {id: n, bitmap: r, width: u, height: l, dataURLOptions: c} = t.data
                      , d = function(t, n, r) {
                        return e(this, 0, void 0, (function*() {
                            const e = `${t}-${n}`;
                            if ("OffscreenCanvas"in globalThis) {
                                if (a.has(e))
                                    return a.get(e);
                                const i = new OffscreenCanvas(t,n);
                                i.getContext("2d");
                                const s = yield i.convertToBlob(r)
                                  , u = yield s.arrayBuffer()
                                  , l = o(u);
                                return a.set(e, l),
                                l
                            }
                            return ""
                        }
                        ))
                    }(u, l, c)
                      , f = new OffscreenCanvas(u,l);
                    f.getContext("2d").drawImage(r, 0, 0),
                    r.close();
                    const p = yield f.convertToBlob(c)
                      , h = p.type
                      , m = yield p.arrayBuffer()
                      , g = o(m);
                    if (!i.has(n) && (yield d) === g)
                        return i.set(n, g),
                        s.postMessage({
                            id: n
                        });
                    if (i.get(n) === g)
                        return s.postMessage({
                            id: n
                        });
                    s.postMessage({
                        id: n,
                        type: h,
                        base64: g,
                        width: u,
                        height: l
                    }),
                    i.set(n, g)
                }
            }
            ))
        }
    }()
}
,
function(e) {
    return So = So || function(e) {
        var t = function(e) {
            var t = e.toString().split("\n");
            t.pop(),
            t.shift();
            for (var n = t[0].search(/\S/), r = /(['"])__worker_loader_strict__(['"])/g, o = 0, i = t.length; o < i; ++o)
                t[o] = t[o].substring(n).replace(r, "$1use strict$2") + "\n";
            return t
        }(e)
          , n = new Blob(t,{
            type: "application/javascript"
        });
        return URL.createObjectURL(n)
    }(wo),
    new Worker(So,e)
}
);
class xo {
    reset() {
        this.pendingCanvasMutations.clear(),
        this.resetObservers && this.resetObservers()
    }
    freeze() {
        this.frozen = !0
    }
    unfreeze() {
        this.frozen = !1
    }
    lock() {
        this.locked = !0
    }
    unlock() {
        this.locked = !1
    }
    constructor(e) {
        this.pendingCanvasMutations = new Map,
        this.rafStamps = {
            latestId: 0,
            invokeId: null
        },
        this.frozen = !1,
        this.locked = !1,
        this.processMutation = (e, t) => {
            !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId),
            this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []),
            this.pendingCanvasMutations.get(e).push(t)
        }
        ;
        const {sampling: t="all", win: n, blockClass: r, blockSelector: o, recordCanvas: i, dataURLOptions: a} = e;
        this.mutationCb = e.mutationCb,
        this.mirror = e.mirror,
        i && "all" === t && this.initCanvasMutationObserver(n, r, o),
        i && "number" == typeof t && this.initCanvasFPSObserver(t, n, r, o, {
            dataURLOptions: a
        })
    }
    initCanvasFPSObserver(e, t, n, r, o) {
        const i = bo(t, n, r, !0)
          , a = new Map
          , s = new ko;
        s.onmessage = e => {
            const {id: t} = e.data;
            if (a.set(t, !1),
            !("base64"in e.data))
                return;
            const {base64: n, type: r, width: o, height: i} = e.data;
            this.mutationCb({
                id: t,
                type: Lr["2D"],
                commands: [{
                    property: "clearRect",
                    args: [0, 0, o, i]
                }, {
                    property: "drawImage",
                    args: [{
                        rr_type: "ImageBitmap",
                        args: [{
                            rr_type: "Blob",
                            data: [{
                                rr_type: "ArrayBuffer",
                                base64: n
                            }],
                            type: r
                        }]
                    }, 0, 0]
                }]
            })
        }
        ;
        const u = 1e3 / e;
        let l, c = 0;
        const d = e => {
            c && e - c < u || (c = e,
            ( () => {
                const e = [];
                return t.document.querySelectorAll("canvas").forEach((t => {
                    _r(t, n, r, !0) || e.push(t)
                }
                )),
                e
            }
            )().forEach((e => lo(this, 0, void 0, (function*() {
                var t;
                const n = this.mirror.getId(e);
                if (a.get(n))
                    return;
                if (0 === e.width || 0 === e.height)
                    return;
                if (a.set(n, !0),
                ["webgl", "webgl2"].includes(e.__context)) {
                    const n = e.getContext(e.__context);
                    !1 === (null === (t = null == n ? void 0 : n.getContextAttributes()) || void 0 === t ? void 0 : t.preserveDrawingBuffer) && n.clear(n.COLOR_BUFFER_BIT)
                }
                const r = yield createImageBitmap(e);
                s.postMessage({
                    id: n,
                    bitmap: r,
                    width: e.width,
                    height: e.height,
                    dataURLOptions: o.dataURLOptions
                }, [r])
            }
            ))))),
            l = requestAnimationFrame(d)
        }
        ;
        l = requestAnimationFrame(d),
        this.resetObservers = () => {
            i(),
            cancelAnimationFrame(l)
        }
    }
    initCanvasMutationObserver(e, t, n) {
        this.startRAFTimestamping(),
        this.startPendingCanvasMutationFlusher();
        const r = bo(e, t, n, !1)
          , o = function(e, t, n, r) {
            const o = []
              , i = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
            for (const s of i)
                try {
                    if ("function" != typeof t.CanvasRenderingContext2D.prototype[s])
                        continue;
                    const i = hr(t.CanvasRenderingContext2D.prototype, s, (function(o) {
                        return function(...i) {
                            return _r(this.canvas, n, r, !0) || setTimeout(( () => {
                                const n = yo(i, t, this);
                                e(this.canvas, {
                                    type: Lr["2D"],
                                    property: s,
                                    args: n
                                })
                            }
                            ), 0),
                            o.apply(this, i)
                        }
                    }
                    ));
                    o.push(i)
                } catch (a) {
                    const n = pr(t.CanvasRenderingContext2D.prototype, s, {
                        set(t) {
                            e(this.canvas, {
                                type: Lr["2D"],
                                property: s,
                                args: [t],
                                setter: !0
                            })
                        }
                    });
                    o.push(n)
                }
            return () => {
                o.forEach((e => e()))
            }
        }(this.processMutation.bind(this), e, t, n)
          , i = function(e, t, n, r) {
            const o = [];
            return o.push(..._o(t.WebGLRenderingContext.prototype, Lr.WebGL, e, n, r, 0, t)),
            void 0 !== t.WebGL2RenderingContext && o.push(..._o(t.WebGL2RenderingContext.prototype, Lr.WebGL2, e, n, r, 0, t)),
            () => {
                o.forEach((e => e()))
            }
        }(this.processMutation.bind(this), e, t, n, this.mirror);
        this.resetObservers = () => {
            r(),
            o(),
            i()
        }
    }
    startPendingCanvasMutationFlusher() {
        requestAnimationFrame(( () => this.flushPendingCanvasMutations()))
    }
    startRAFTimestamping() {
        const e = t => {
            this.rafStamps.latestId = t,
            requestAnimationFrame(e)
        }
        ;
        requestAnimationFrame(e)
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(( (e, t) => {
            const n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n)
        }
        )),
        requestAnimationFrame(( () => this.flushPendingCanvasMutations()))
    }
    flushPendingCanvasMutationFor(e, t) {
        if (this.frozen || this.locked)
            return;
        const n = this.pendingCanvasMutations.get(e);
        if (!n || -1 === t)
            return;
        const r = n.map((e => {
            const t = function(e, t) {
                var n = {};
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                        t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }(e, ["type"]);
            return t
        }
        ))
          , {type: o} = n[0];
        this.mutationCb({
            id: t,
            type: o,
            commands: r
        }),
        this.pendingCanvasMutations.delete(e)
    }
}
class Eo {
    constructor(e) {
        this.trackedLinkElements = new WeakSet,
        this.styleMirror = new Tr,
        this.mutationCb = e.mutationCb,
        this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
    }
    attachLinkElement(e, t) {
        "_cssText"in t.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
                id: t.id,
                attributes: t.attributes
            }]
        }),
        this.trackLinkElement(e)
    }
    trackLinkElement(e) {
        this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e),
        this.trackStylesheetInLinkElement(e))
    }
    adoptStyleSheets(e, t) {
        if (0 === e.length)
            return;
        const n = {
            id: t,
            styleIds: []
        }
          , r = [];
        for (const o of e) {
            let e;
            this.styleMirror.has(o) ? e = this.styleMirror.getId(o) : (e = this.styleMirror.add(o),
            r.push({
                styleId: e,
                rules: Array.from(o.rules || CSSRule, ( (e, t) => ({
                    rule: Nn(e),
                    index: t
                })))
            })),
            n.styleIds.push(e)
        }
        r.length > 0 && (n.styles = r),
        this.adoptedStyleSheetCb(n)
    }
    reset() {
        this.styleMirror.reset(),
        this.trackedLinkElements = new WeakSet
    }
    trackStylesheetInLinkElement(e) {}
}
class Co {
    constructor() {
        this.nodeMap = new WeakMap,
        this.loop = !0,
        this.periodicallyClear()
    }
    periodicallyClear() {
        requestAnimationFrame(( () => {
            this.clear(),
            this.loop && this.periodicallyClear()
        }
        ))
    }
    inOtherBuffer(e, t) {
        const n = this.nodeMap.get(e);
        return n && Array.from(n).some((e => e !== t))
    }
    add(e, t) {
        this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
    }
    clear() {
        this.nodeMap = new WeakMap
    }
    destroy() {
        this.loop = !1
    }
}
function To(e) {
    return Object.assign(Object.assign({}, e), {
        timestamp: mr()
    })
}
let Ro, Oo, Io, Mo = !1;
const Po = new Dn;
function No(e={}) {
    const {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: o="rr-block", blockSelector: i=null, ignoreClass: a="rr-ignore", ignoreSelector: s=null, maskTextClass: u="rr-mask", maskTextSelector: l=null, inlineStylesheet: c=!0, maskAllInputs: d, maskInputOptions: f, slimDOMOptions: p, maskInputFn: h, maskTextFn: m, hooks: g, packFn: y, sampling: v={}, dataURLOptions: b={}, mousemoveWait: _, recordDOM: w=!0, recordCanvas: S=!1, recordCrossOriginIframes: k=!1, recordAfter: x=("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"), userTriggeredOnInput: E=!1, collectFonts: C=!1, inlineImages: T=!1, plugins: R, keepIframeSrcFn: O= () => !1, ignoreCSSAttributes: I=new Set([]), errorHandler: M} = e;
    $r = M;
    const P = !k || window.parent === window;
    let N = !1;
    if (!P)
        try {
            window.parent.document && (N = !1)
        } catch (H) {
            N = !0
        }
    if (P && !t)
        throw new Error("emit function is required");
    void 0 !== _ && void 0 === v.mousemove && (v.mousemove = _),
    Po.reset();
    const D = !0 === d ? {
        color: !0,
        date: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
        textarea: !0,
        select: !0,
        password: !0
    } : void 0 !== f ? f : {
        password: !0
    }
      , L = !0 === p || "all" === p ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === p,
        headMetaDescKeywords: "all" === p
    } : p || {};
    let A;
    !function(e=window) {
        "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
        "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
        Node.prototype.contains || (Node.prototype.contains = (...e) => {
            let t = e[0];
            if (!(0 in e))
                throw new TypeError("1 argument is required");
            do {
                if (this === t)
                    return !0
            } while (t = t && t.parentNode);
            return !1
        }
        )
    }();
    let F = 0;
    const U = e => {
        for (const t of R || [])
            t.eventProcessor && (e = t.eventProcessor(e));
        return y && !N && (e = y(e)),
        e
    }
    ;
    Ro = (e, o) => {
        var i;
        if (!(null === (i = Qr[0]) || void 0 === i ? void 0 : i.isFrozen()) || e.type === Mr.FullSnapshot || e.type === Mr.IncrementalSnapshot && e.data.source === Pr.Mutation || Qr.forEach((e => e.unfreeze())),
        P)
            null == t || t(U(e), o);
        else if (N) {
            const t = {
                type: "rrweb",
                event: U(e),
                origin: window.location.origin,
                isCheckout: o
            };
            window.parent.postMessage(t, "*")
        }
        if (e.type === Mr.FullSnapshot)
            A = e,
            F = 0;
        else if (e.type === Mr.IncrementalSnapshot) {
            if (e.data.source === Pr.Mutation && e.data.isAttachIframe)
                return;
            F++;
            const t = r && F >= r
              , o = n && e.timestamp - A.timestamp > n;
            (t || o) && Oo(!0)
        }
    }
    ;
    const j = e => {
        Ro(To({
            type: Mr.IncrementalSnapshot,
            data: Object.assign({
                source: Pr.Mutation
            }, e)
        }))
    }
      , z = e => Ro(To({
        type: Mr.IncrementalSnapshot,
        data: Object.assign({
            source: Pr.Scroll
        }, e)
    }))
      , B = e => Ro(To({
        type: Mr.IncrementalSnapshot,
        data: Object.assign({
            source: Pr.CanvasMutation
        }, e)
    }))
      , q = new Eo({
        mutationCb: j,
        adoptedStyleSheetCb: e => Ro(To({
            type: Mr.IncrementalSnapshot,
            data: Object.assign({
                source: Pr.AdoptedStyleSheet
            }, e)
        }))
    })
      , W = new so({
        mirror: Po,
        mutationCb: j,
        stylesheetManager: q,
        recordCrossOriginIframes: k,
        wrappedEmit: Ro
    });
    for (const Q of R || [])
        Q.getMirror && Q.getMirror({
            nodeMirror: Po,
            crossOriginIframeMirror: W.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: W.crossOriginIframeStyleMirror
        });
    const V = new Co;
    Io = new xo({
        recordCanvas: S,
        mutationCb: B,
        win: window,
        blockClass: o,
        blockSelector: i,
        mirror: Po,
        sampling: v.canvas,
        dataURLOptions: b
    });
    const $ = new uo({
        mutationCb: j,
        scrollCb: z,
        bypassOptions: {
            blockClass: o,
            blockSelector: i,
            maskTextClass: u,
            maskTextSelector: l,
            inlineStylesheet: c,
            maskInputOptions: D,
            dataURLOptions: b,
            maskTextFn: m,
            maskInputFn: h,
            recordCanvas: S,
            inlineImages: T,
            sampling: v,
            slimDOMOptions: L,
            iframeManager: W,
            stylesheetManager: q,
            canvasManager: Io,
            keepIframeSrcFn: O,
            processedNodeManager: V
        },
        mirror: Po
    });
    Oo = (e=!1) => {
        if (!w)
            return;
        Ro(To({
            type: Mr.Meta,
            data: {
                href: window.location.href,
                width: vr(),
                height: yr()
            }
        }), e),
        q.reset(),
        $.init(),
        Qr.forEach((e => e.lock()));
        const t = function(e, t) {
            const {mirror: n=new Dn, blockClass: r="rr-block", blockSelector: o=null, maskTextClass: i="rr-mask", maskTextSelector: a=null, inlineStylesheet: s=!0, inlineImages: u=!1, recordCanvas: l=!1, maskAllInputs: c=!1, maskTextFn: d, maskInputFn: f, slimDOM: p=!1, dataURLOptions: h, preserveWhiteSpace: m, onSerialize: g, onIframeLoad: y, iframeLoadTimeout: v, onStylesheetLoad: b, stylesheetLoadTimeout: _, keepIframeSrcFn: w= () => !1} = t || {};
            return ur(e, {
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: o,
                maskTextClass: i,
                maskTextSelector: a,
                skipChild: !1,
                inlineStylesheet: s,
                maskInputOptions: !0 === c ? {
                    color: !0,
                    date: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    password: !0
                } : !1 === c ? {
                    password: !0
                } : c,
                maskTextFn: d,
                maskInputFn: f,
                slimDOMOptions: !0 === p || "all" === p ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaDescKeywords: "all" === p,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaAuthorship: !0,
                    headMetaVerification: !0
                } : !1 === p ? {} : p,
                dataURLOptions: h,
                inlineImages: u,
                recordCanvas: l,
                preserveWhiteSpace: m,
                onSerialize: g,
                onIframeLoad: y,
                iframeLoadTimeout: v,
                onStylesheetLoad: b,
                stylesheetLoadTimeout: _,
                keepIframeSrcFn: w,
                newlyAddedElement: !1
            })
        }(document, {
            mirror: Po,
            blockClass: o,
            blockSelector: i,
            maskTextClass: u,
            maskTextSelector: l,
            inlineStylesheet: c,
            maskAllInputs: D,
            maskTextFn: m,
            slimDOM: L,
            dataURLOptions: b,
            recordCanvas: S,
            inlineImages: T,
            onSerialize: e => {
                xr(e, Po) && W.addIframe(e),
                Er(e, Po) && q.trackLinkElement(e),
                Cr(e) && $.addShadowRoot(e.shadowRoot, document)
            }
            ,
            onIframeLoad: (e, t) => {
                W.attachIframe(e, t),
                $.observeAttachShadow(e)
            }
            ,
            onStylesheetLoad: (e, t) => {
                q.attachLinkElement(e, t)
            }
            ,
            keepIframeSrcFn: O
        });
        if (!t)
            return console.warn("Failed to snapshot the document");
        Ro(To({
            type: Mr.FullSnapshot,
            data: {
                node: t,
                initialOffset: gr(window)
            }
        }), e),
        Qr.forEach((e => e.unlock())),
        document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && q.adoptStyleSheets(document.adoptedStyleSheets, Po.getId(document))
    }
    ;
    try {
        const e = []
          , t = e => {
            var t;
            return Hr(ro)({
                mutationCb: j,
                mousemoveCb: (e, t) => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: {
                        source: t,
                        positions: e
                    }
                })),
                mouseInteractionCb: e => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: Object.assign({
                        source: Pr.MouseInteraction
                    }, e)
                })),
                scrollCb: z,
                viewportResizeCb: e => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: Object.assign({
                        source: Pr.ViewportResize
                    }, e)
                })),
                inputCb: e => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: Object.assign({
                        source: Pr.Input
                    }, e)
                })),
                mediaInteractionCb: e => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: Object.assign({
                        source: Pr.MediaInteraction
                    }, e)
                })),
                styleSheetRuleCb: e => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: Object.assign({
                        source: Pr.StyleSheetRule
                    }, e)
                })),
                styleDeclarationCb: e => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: Object.assign({
                        source: Pr.StyleDeclaration
                    }, e)
                })),
                canvasMutationCb: B,
                fontCb: e => Ro(To({
                    type: Mr.IncrementalSnapshot,
                    data: Object.assign({
                        source: Pr.Font
                    }, e)
                })),
                selectionCb: e => {
                    Ro(To({
                        type: Mr.IncrementalSnapshot,
                        data: Object.assign({
                            source: Pr.Selection
                        }, e)
                    }))
                }
                ,
                customElementCb: e => {
                    Ro(To({
                        type: Mr.IncrementalSnapshot,
                        data: Object.assign({
                            source: Pr.CustomElement
                        }, e)
                    }))
                }
                ,
                blockClass: o,
                ignoreClass: a,
                ignoreSelector: s,
                maskTextClass: u,
                maskTextSelector: l,
                maskInputOptions: D,
                inlineStylesheet: c,
                sampling: v,
                recordDOM: w,
                recordCanvas: S,
                inlineImages: T,
                userTriggeredOnInput: E,
                collectFonts: C,
                doc: e,
                maskInputFn: h,
                maskTextFn: m,
                keepIframeSrcFn: O,
                blockSelector: i,
                slimDOMOptions: L,
                dataURLOptions: b,
                mirror: Po,
                iframeManager: W,
                stylesheetManager: q,
                shadowDomManager: $,
                processedNodeManager: V,
                canvasManager: Io,
                ignoreCSSAttributes: I,
                plugins: (null === (t = null == R ? void 0 : R.filter((e => e.observer))) || void 0 === t ? void 0 : t.map((e => ({
                    observer: e.observer,
                    options: e.options,
                    callback: t => Ro(To({
                        type: Mr.Plugin,
                        data: {
                            plugin: e.name,
                            payload: t
                        }
                    }))
                })))) || []
            }, g)
        }
        ;
        W.addLoadListener((n => {
            try {
                e.push(t(n.contentDocument))
            } catch (ui) {
                console.warn(ui)
            }
        }
        ));
        const n = () => {
            Oo(),
            e.push(t(document)),
            Mo = !0
        }
        ;
        return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(lr("DOMContentLoaded", ( () => {
            Ro(To({
                type: Mr.DomContentLoaded,
                data: {}
            })),
            "DOMContentLoaded" === x && n()
        }
        ))),
        e.push(lr("load", ( () => {
            Ro(To({
                type: Mr.Load,
                data: {}
            })),
            "load" === x && n()
        }
        ), window))),
        () => {
            e.forEach((e => e())),
            V.destroy(),
            Mo = !1,
            $r = void 0
        }
    } catch (ui) {
        console.warn(ui)
    }
}
No.addCustomEvent = (e, t) => {
    if (!Mo)
        throw new Error("please add custom event after start recording");
    Ro(To({
        type: Mr.Custom,
        data: {
            tag: e,
            payload: t
        }
    }))
}
,
No.freezePage = () => {
    Qr.forEach((e => e.freeze()))
}
,
No.takeFullSnapshot = e => {
    if (!Mo)
        throw new Error("please take full snapshot after start recording");
    Oo(e)
}
,
No.mirror = Po;
var Do, Lo = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
e[e.Load = 1] = "Load",
e[e.FullSnapshot = 2] = "FullSnapshot",
e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
e[e.Meta = 4] = "Meta",
e[e.Custom = 5] = "Custom",
e[e.Plugin = 6] = "Plugin",
e))(Lo || {}), Ao = (e => (e[e.Mutation = 0] = "Mutation",
e[e.MouseMove = 1] = "MouseMove",
e[e.MouseInteraction = 2] = "MouseInteraction",
e[e.Scroll = 3] = "Scroll",
e[e.ViewportResize = 4] = "ViewportResize",
e[e.Input = 5] = "Input",
e[e.TouchMove = 6] = "TouchMove",
e[e.MediaInteraction = 7] = "MediaInteraction",
e[e.StyleSheetRule = 8] = "StyleSheetRule",
e[e.CanvasMutation = 9] = "CanvasMutation",
e[e.Font = 10] = "Font",
e[e.Log = 11] = "Log",
e[e.Drag = 12] = "Drag",
e[e.StyleDeclaration = 13] = "StyleDeclaration",
e[e.Selection = 14] = "Selection",
e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
e[e.CustomElement = 16] = "CustomElement",
e))(Ao || {}), Fo = {
    DEBUG: !1,
    LIB_VERSION: "2.58.0"
};
if ("undefined" == typeof window) {
    var Uo = {
        hostname: ""
    };
    Do = {
        navigator: {
            userAgent: "",
            onLine: !0
        },
        document: {
            location: Uo,
            referrer: ""
        },
        screen: {
            width: 0,
            height: 0
        },
        location: Uo
    }
} else
    Do = window;
var jo, zo, Bo, qo = Do.setImmediate, Wo = Object.prototype.toString, Vo = void 0 !== qo ? function(e) {
    return qo(e)
}
: setTimeout;
try {
    Object.defineProperty({}, "x", {}),
    jo = function(e, t, n, r) {
        return Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !1 !== r
        })
    }
} catch (Ss) {
    jo = function(e, t, n) {
        return e[t] = n,
        e
    }
}
function $o(e, t) {
    Bo.add(e, t),
    zo || (zo = Vo(Bo.drain))
}
function Ho(e) {
    var t, n = typeof e;
    return null === e || "object" !== n && "function" !== n || (t = e.then),
    "function" == typeof t && t
}
function Qo() {
    for (var e = 0; e < this.chain.length; e++)
        Yo(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
    this.chain.length = 0
}
function Yo(e, t, n) {
    var r, o;
    try {
        !1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = Ho(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r)
    } catch (Ss) {
        n.reject(Ss)
    }
}
function Go(e) {
    var t, n = this;
    if (!n.triggered) {
        n.triggered = !0,
        n.def && (n = n.def);
        try {
            (t = Ho(e)) ? $o((function() {
                var r = new Jo(n);
                try {
                    t.call(e, (function() {
                        Go.apply(r, arguments)
                    }
                    ), (function() {
                        Ko.apply(r, arguments)
                    }
                    ))
                } catch (Ss) {
                    Ko.call(r, Ss)
                }
            }
            )) : (n.msg = e,
            n.state = 1,
            n.chain.length > 0 && $o(Qo, n))
        } catch (Ss) {
            Ko.call(new Jo(n), Ss)
        }
    }
}
function Ko(e) {
    var t = this;
    t.triggered || (t.triggered = !0,
    t.def && (t = t.def),
    t.msg = e,
    t.state = 2,
    t.chain.length > 0 && $o(Qo, t))
}
function Xo(e, t, n, r) {
    for (var o = 0; o < t.length; o++)
        !function(o) {
            e.resolve(t[o]).then((function(e) {
                n(o, e)
            }
            ), r)
        }(o)
}
function Jo(e) {
    this.def = e,
    this.triggered = !1
}
function Zo(e) {
    this.promise = e,
    this.state = 0,
    this.triggered = !1,
    this.chain = [],
    this.msg = void 0
}
function ei(e) {
    if ("function" != typeof e)
        throw TypeError("Not a function");
    if (0 !== this.__NPO__)
        throw TypeError("Not a promise");
    this.__NPO__ = 1;
    var t = new Zo(this);
    this.then = function(e, n) {
        var r = {
            success: "function" != typeof e || e,
            failure: "function" == typeof n && n
        };
        return r.promise = new this.constructor((function(e, t) {
            if ("function" != typeof e || "function" != typeof t)
                throw TypeError("Not a function");
            r.resolve = e,
            r.reject = t
        }
        )),
        t.chain.push(r),
        0 !== t.state && $o(Qo, t),
        r.promise
    }
    ,
    this.catch = function(e) {
        return this.then(void 0, e)
    }
    ;
    try {
        e.call(void 0, (function(e) {
            Go.call(t, e)
        }
        ), (function(e) {
            Ko.call(t, e)
        }
        ))
    } catch (Ss) {
        Ko.call(t, Ss)
    }
}
Bo = function() {
    var e, t, n;
    function r(e, t) {
        this.fn = e,
        this.self = t,
        this.next = void 0
    }
    return {
        add: function(o, i) {
            n = new r(o,i),
            t ? t.next = n : e = n,
            t = n,
            n = void 0
        },
        drain: function() {
            var n = e;
            for (e = t = zo = void 0; n; )
                n.fn.call(n.self),
                n = n.next
        }
    }
}();
var ti, ni = jo({}, "constructor", ei, !1);
ei.prototype = ni,
jo(ni, "__NPO__", 0, !1),
jo(ei, "resolve", (function(e) {
    return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function(t, n) {
        if ("function" != typeof t || "function" != typeof n)
            throw TypeError("Not a function");
        t(e)
    }
    ))
}
)),
jo(ei, "reject", (function(e) {
    return new this((function(t, n) {
        if ("function" != typeof t || "function" != typeof n)
            throw TypeError("Not a function");
        n(e)
    }
    ))
}
)),
jo(ei, "all", (function(e) {
    var t = this;
    return "[object Array]" !== Wo.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function(n, r) {
        if ("function" != typeof n || "function" != typeof r)
            throw TypeError("Not a function");
        var o = e.length
          , i = Array(o)
          , a = 0;
        Xo(t, e, (function(e, t) {
            i[e] = t,
            ++a === o && n(i)
        }
        ), r)
    }
    ))
}
)),
jo(ei, "race", (function(e) {
    var t = this;
    return "[object Array]" !== Wo.call(e) ? t.reject(TypeError("Not an array")) : new t((function(n, r) {
        if ("function" != typeof n || "function" != typeof r)
            throw TypeError("Not a function");
        Xo(t, e, (function(e, t) {
            n(t)
        }
        ), r)
    }
    ))
}
)),
ti = "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]") ? Promise : ei;
var ri, oi, ii, ai, si, ui, li, ci, di, fi, pi = 864e5, hi = 8e3, mi = Array.prototype, gi = Function.prototype, yi = Object.prototype, vi = mi.slice, bi = yi.toString, _i = yi.hasOwnProperty, wi = Do.console, Si = Do.navigator, ki = Do.document, xi = Do.opera, Ei = Do.screen, Ci = Si.userAgent, Ti = gi.bind, Ri = mi.forEach, Oi = mi.indexOf, Ii = mi.map, Mi = Array.isArray, Pi = {}, Ni = {
    trim: function(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
}, Di = {
    log: function() {
        if (Fo.DEBUG && !Ni.isUndefined(wi) && wi)
            try {
                wi.log.apply(wi, arguments)
            } catch (Ss) {
                Ni.each(arguments, (function(e) {
                    wi.log(e)
                }
                ))
            }
    },
    warn: function() {
        if (Fo.DEBUG && !Ni.isUndefined(wi) && wi) {
            var e = ["Mixpanel warning:"].concat(Ni.toArray(arguments));
            try {
                wi.warn.apply(wi, e)
            } catch (Ss) {
                Ni.each(e, (function(e) {
                    wi.warn(e)
                }
                ))
            }
        }
    },
    error: function() {
        if (Fo.DEBUG && !Ni.isUndefined(wi) && wi) {
            var e = ["Mixpanel error:"].concat(Ni.toArray(arguments));
            try {
                wi.error.apply(wi, e)
            } catch (Ss) {
                Ni.each(e, (function(e) {
                    wi.error(e)
                }
                ))
            }
        }
    },
    critical: function() {
        if (!Ni.isUndefined(wi) && wi) {
            var e = ["Mixpanel error:"].concat(Ni.toArray(arguments));
            try {
                wi.error.apply(wi, e)
            } catch (Ss) {
                Ni.each(e, (function(e) {
                    wi.error(e)
                }
                ))
            }
        }
    }
}, Li = function(e, t) {
    return function() {
        return arguments[0] = "[" + t + "] " + arguments[0],
        e.apply(Di, arguments)
    }
}, Ai = function(e) {
    return {
        log: Li(Di.log, e),
        error: Li(Di.error, e),
        critical: Li(Di.critical, e)
    }
};
Ni.bind = function(e, t) {
    var n, r;
    if (Ti && e.bind === Ti)
        return Ti.apply(e, vi.call(arguments, 1));
    if (!Ni.isFunction(e))
        throw new TypeError;
    return n = vi.call(arguments, 2),
    r = function() {
        if (!(this instanceof r))
            return e.apply(t, n.concat(vi.call(arguments)));
        var o = {};
        o.prototype = e.prototype;
        var i = new o;
        o.prototype = null;
        var a = e.apply(i, n.concat(vi.call(arguments)));
        return Object(a) === a ? a : i
    }
    ,
    r
}
,
Ni.each = function(e, t, n) {
    if (null != e)
        if (Ri && e.forEach === Ri)
            e.forEach(t, n);
        else if (e.length === +e.length) {
            for (var r = 0, o = e.length; r < o; r++)
                if (r in e && t.call(n, e[r], r, e) === Pi)
                    return
        } else
            for (var i in e)
                if (_i.call(e, i) && t.call(n, e[i], i, e) === Pi)
                    return
}
,
Ni.extend = function(e) {
    return Ni.each(vi.call(arguments, 1), (function(t) {
        for (var n in t)
            void 0 !== t[n] && (e[n] = t[n])
    }
    )),
    e
}
,
Ni.isArray = Mi || function(e) {
    return "[object Array]" === bi.call(e)
}
,
Ni.isFunction = function(e) {
    try {
        return /^\s*\bfunction\b/.test(e)
    } catch (t) {
        return !1
    }
}
,
Ni.isArguments = function(e) {
    return !(!e || !_i.call(e, "callee"))
}
,
Ni.toArray = function(e) {
    return e ? e.toArray ? e.toArray() : Ni.isArray(e) || Ni.isArguments(e) ? vi.call(e) : Ni.values(e) : []
}
,
Ni.map = function(e, t, n) {
    if (Ii && e.map === Ii)
        return e.map(t, n);
    var r = [];
    return Ni.each(e, (function(e) {
        r.push(t.call(n, e))
    }
    )),
    r
}
,
Ni.keys = function(e) {
    var t = [];
    return null === e || Ni.each(e, (function(e, n) {
        t[t.length] = n
    }
    )),
    t
}
,
Ni.values = function(e) {
    var t = [];
    return null === e || Ni.each(e, (function(e) {
        t[t.length] = e
    }
    )),
    t
}
,
Ni.include = function(e, t) {
    var n = !1;
    return null === e ? n : Oi && e.indexOf === Oi ? -1 != e.indexOf(t) : (Ni.each(e, (function(e) {
        if (n || (n = e === t))
            return Pi
    }
    )),
    n)
}
,
Ni.includes = function(e, t) {
    return -1 !== e.indexOf(t)
}
,
Ni.inherit = function(e, t) {
    return e.prototype = new t,
    e.prototype.constructor = e,
    e.superclass = t.prototype,
    e
}
,
Ni.isObject = function(e) {
    return e === Object(e) && !Ni.isArray(e)
}
,
Ni.isEmptyObject = function(e) {
    if (Ni.isObject(e)) {
        for (var t in e)
            if (_i.call(e, t))
                return !1;
        return !0
    }
    return !1
}
,
Ni.isUndefined = function(e) {
    return void 0 === e
}
,
Ni.isString = function(e) {
    return "[object String]" == bi.call(e)
}
,
Ni.isDate = function(e) {
    return "[object Date]" == bi.call(e)
}
,
Ni.isNumber = function(e) {
    return "[object Number]" == bi.call(e)
}
,
Ni.isElement = function(e) {
    return !(!e || 1 !== e.nodeType)
}
,
Ni.encodeDates = function(e) {
    return Ni.each(e, (function(t, n) {
        Ni.isDate(t) ? e[n] = Ni.formatDate(t) : Ni.isObject(t) && (e[n] = Ni.encodeDates(t))
    }
    )),
    e
}
,
Ni.timestamp = function() {
    return Date.now = Date.now || function() {
        return +new Date
    }
    ,
    Date.now()
}
,
Ni.formatDate = function(e) {
    function t(e) {
        return e < 10 ? "0" + e : e
    }
    return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
}
,
Ni.strip_empty_properties = function(e) {
    var t = {};
    return Ni.each(e, (function(e, n) {
        Ni.isString(e) && e.length > 0 && (t[n] = e)
    }
    )),
    t
}
,
Ni.truncate = function(e, t) {
    var n;
    return "string" == typeof e ? n = e.slice(0, t) : Ni.isArray(e) ? (n = [],
    Ni.each(e, (function(e) {
        n.push(Ni.truncate(e, t))
    }
    ))) : Ni.isObject(e) ? (n = {},
    Ni.each(e, (function(e, r) {
        n[r] = Ni.truncate(e, t)
    }
    ))) : n = e,
    n
}
,
Ni.JSONEncode = function() {
    return function(e) {
        var t = function(e) {
            var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
              , n = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            return t.lastIndex = 0,
            t.test(e) ? '"' + e.replace(t, (function(e) {
                var t = n[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }
            )) + '"' : '"' + e + '"'
        }
          , n = function(e, r) {
            var o = ""
              , i = 0
              , a = ""
              , s = ""
              , u = 0
              , l = o
              , c = []
              , d = r[e];
            switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(e)),
            typeof d) {
            case "string":
                return t(d);
            case "number":
                return isFinite(d) ? String(d) : "null";
            case "boolean":
            case "null":
                return String(d);
            case "object":
                if (!d)
                    return "null";
                if (o += "    ",
                c = [],
                "[object Array]" === bi.apply(d)) {
                    for (u = d.length,
                    i = 0; i < u; i += 1)
                        c[i] = n(i, d) || "null";
                    return s = 0 === c.length ? "[]" : o ? "[\n" + o + c.join(",\n" + o) + "\n" + l + "]" : "[" + c.join(",") + "]",
                    o = l,
                    s
                }
                for (a in d)
                    _i.call(d, a) && (s = n(a, d)) && c.push(t(a) + (o ? ": " : ":") + s);
                return s = 0 === c.length ? "{}" : o ? "{" + c.join(",") + l + "}" : "{" + c.join(",") + "}",
                o = l,
                s
            }
        };
        return n("", {
            "": e
        })
    }
}(),
Ni.JSONDecode = (si = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t"
},
ui = function(e) {
    var t = new SyntaxError(e);
    throw t.at = ri,
    t.text = ii,
    t
}
,
li = function(e) {
    return e && e !== oi && ui("Expected '" + e + "' instead of '" + oi + "'"),
    oi = ii.charAt(ri),
    ri += 1,
    oi
}
,
ci = function() {
    var e, t = "";
    for ("-" === oi && (t = "-",
    li("-")); oi >= "0" && oi <= "9"; )
        t += oi,
        li();
    if ("." === oi)
        for (t += "."; li() && oi >= "0" && oi <= "9"; )
            t += oi;
    if ("e" === oi || "E" === oi)
        for (t += oi,
        li(),
        "-" !== oi && "+" !== oi || (t += oi,
        li()); oi >= "0" && oi <= "9"; )
            t += oi,
            li();
    if (e = +t,
    isFinite(e))
        return e;
    ui("Bad number")
}
,
di = function() {
    var e, t, n, r = "";
    if ('"' === oi)
        for (; li(); ) {
            if ('"' === oi)
                return li(),
                r;
            if ("\\" === oi)
                if (li(),
                "u" === oi) {
                    for (n = 0,
                    t = 0; t < 4 && (e = parseInt(li(), 16),
                    isFinite(e)); t += 1)
                        n = 16 * n + e;
                    r += String.fromCharCode(n)
                } else {
                    if ("string" != typeof si[oi])
                        break;
                    r += si[oi]
                }
            else
                r += oi
        }
    ui("Bad string")
}
,
fi = function() {
    for (; oi && oi <= " "; )
        li()
}
,
ai = function() {
    switch (fi(),
    oi) {
    case "{":
        return function() {
            var e, t = {};
            if ("{" === oi) {
                if (li("{"),
                fi(),
                "}" === oi)
                    return li("}"),
                    t;
                for (; oi; ) {
                    if (e = di(),
                    fi(),
                    li(":"),
                    Object.hasOwnProperty.call(t, e) && ui('Duplicate key "' + e + '"'),
                    t[e] = ai(),
                    fi(),
                    "}" === oi)
                        return li("}"),
                        t;
                    li(","),
                    fi()
                }
            }
            ui("Bad object")
        }();
    case "[":
        return function() {
            var e = [];
            if ("[" === oi) {
                if (li("["),
                fi(),
                "]" === oi)
                    return li("]"),
                    e;
                for (; oi; ) {
                    if (e.push(ai()),
                    fi(),
                    "]" === oi)
                        return li("]"),
                        e;
                    li(","),
                    fi()
                }
            }
            ui("Bad array")
        }();
    case '"':
        return di();
    case "-":
        return ci();
    default:
        return oi >= "0" && oi <= "9" ? ci() : function() {
            switch (oi) {
            case "t":
                return li("t"),
                li("r"),
                li("u"),
                li("e"),
                !0;
            case "f":
                return li("f"),
                li("a"),
                li("l"),
                li("s"),
                li("e"),
                !1;
            case "n":
                return li("n"),
                li("u"),
                li("l"),
                li("l"),
                null
            }
            ui('Unexpected "' + oi + '"')
        }()
    }
}
,
function(e) {
    var t;
    return ii = e,
    ri = 0,
    oi = " ",
    t = ai(),
    fi(),
    oi && ui("Syntax error"),
    t
}
),
Ni.base64Encode = function(e) {
    var t, n, r, o, i, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = 0, u = 0, l = "", c = [];
    if (!e)
        return e;
    e = Ni.utf8Encode(e);
    do {
        t = (i = e.charCodeAt(s++) << 16 | e.charCodeAt(s++) << 8 | e.charCodeAt(s++)) >> 18 & 63,
        n = i >> 12 & 63,
        r = i >> 6 & 63,
        o = 63 & i,
        c[u++] = a.charAt(t) + a.charAt(n) + a.charAt(r) + a.charAt(o)
    } while (s < e.length);
    switch (l = c.join(""),
    e.length % 3) {
    case 1:
        l = l.slice(0, -2) + "==";
        break;
    case 2:
        l = l.slice(0, -1) + "="
    }
    return l
}
,
Ni.utf8Encode = function(e) {
    var t, n, r, o, i = "";
    for (t = n = 0,
    r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
    o = 0; o < r; o++) {
        var a = e.charCodeAt(o)
          , s = null;
        a < 128 ? n++ : s = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128),
        null !== s && (n > t && (i += e.substring(t, n)),
        i += s,
        t = n = o + 1)
    }
    return n > t && (i += e.substring(t, e.length)),
    i
}
,
Ni.UUID = function() {
    var e = function() {
        var e, t = 1 * new Date;
        if (Do.performance && Do.performance.now)
            e = Do.performance.now();
        else
            for (e = 0; t == 1 * new Date; )
                e++;
        return t.toString(16) + Math.floor(e).toString(16)
    };
    return function() {
        var t = (Ei.height * Ei.width).toString(16);
        return e() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
            var e, t, n = Ci, r = [], o = 0;
            function i(e, t) {
                var n, o = 0;
                for (n = 0; n < t.length; n++)
                    o |= r[n] << 8 * n;
                return e ^ o
            }
            for (e = 0; e < n.length; e++)
                t = n.charCodeAt(e),
                r.unshift(255 & t),
                r.length >= 4 && (o = i(o, r),
                r = []);
            return r.length > 0 && (o = i(o, r)),
            o.toString(16)
        }() + "-" + t + "-" + e()
    }
}();
var Fi = ["ahrefsbot", "ahrefssiteaudit", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
Ni.isBlockedUA = function(e) {
    var t;
    for (e = e.toLowerCase(),
    t = 0; t < Fi.length; t++)
        if (-1 !== e.indexOf(Fi[t]))
            return !0;
    return !1
}
,
Ni.HTTPBuildQuery = function(e, t) {
    var n, r, o = [];
    return Ni.isUndefined(t) && (t = "&"),
    Ni.each(e, (function(e, t) {
        n = encodeURIComponent(e.toString()),
        r = encodeURIComponent(t),
        o[o.length] = r + "=" + n
    }
    )),
    o.join(t)
}
,
Ni.getQueryParam = function(e, t) {
    t = t.replace(/[[]/g, "\\[").replace(/[\]]/g, "\\]");
    var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
    if (null === n || n && "string" != typeof n[1] && n[1].length)
        return "";
    var r = n[1];
    try {
        r = decodeURIComponent(r)
    } catch (Ss) {
        Di.error("Skipping decoding for malformed query param: " + r)
    }
    return r.replace(/\+/g, " ")
}
,
Ni.cookie = {
    get: function(e) {
        for (var t = e + "=", n = ki.cookie.split(";"), r = 0; r < n.length; r++) {
            for (var o = n[r]; " " == o.charAt(0); )
                o = o.substring(1, o.length);
            if (0 === o.indexOf(t))
                return decodeURIComponent(o.substring(t.length, o.length))
        }
        return null
    },
    parse: function(e) {
        var t;
        try {
            t = Ni.JSONDecode(Ni.cookie.get(e)) || {}
        } catch (Ss) {}
        return t
    },
    set_seconds: function(e, t, n, r, o, i, a) {
        var s = ""
          , u = ""
          , l = "";
        if (a)
            s = "; domain=" + a;
        else if (r) {
            var c = Hi(ki.location.hostname);
            s = c ? "; domain=." + c : ""
        }
        if (n) {
            var d = new Date;
            d.setTime(d.getTime() + 1e3 * n),
            u = "; expires=" + d.toGMTString()
        }
        i && (o = !0,
        l = "; SameSite=None"),
        o && (l += "; secure"),
        ki.cookie = e + "=" + encodeURIComponent(t) + u + "; path=/" + s + l
    },
    set: function(e, t, n, r, o, i, a) {
        var s = ""
          , u = ""
          , l = "";
        if (a)
            s = "; domain=" + a;
        else if (r) {
            var c = Hi(ki.location.hostname);
            s = c ? "; domain=." + c : ""
        }
        if (n) {
            var d = new Date;
            d.setTime(d.getTime() + 24 * n * 60 * 60 * 1e3),
            u = "; expires=" + d.toGMTString()
        }
        i && (o = !0,
        l = "; SameSite=None"),
        o && (l += "; secure");
        var f = e + "=" + encodeURIComponent(t) + u + "; path=/" + s + l;
        return ki.cookie = f,
        f
    },
    remove: function(e, t, n) {
        Ni.cookie.set(e, "", -1, t, !1, !1, n)
    }
};
var Ui = null
  , ji = function(e, t) {
    if (null !== Ui && !t)
        return Ui;
    var n = !0;
    try {
        e = e || Do.localStorage;
        var r = "__mplss_" + Wi(8);
        e.setItem(r, "xyz"),
        "xyz" !== e.getItem(r) && (n = !1),
        e.removeItem(r)
    } catch (Ss) {
        n = !1
    }
    return Ui = n,
    n
};
Ni.localStorage = {
    is_supported: function(e) {
        var t = ji(null, e);
        return t || Di.error("localStorage unsupported; falling back to cookie store"),
        t
    },
    error: function(e) {
        Di.error("localStorage error: " + e)
    },
    get: function(e) {
        try {
            return Do.localStorage.getItem(e)
        } catch (Ss) {
            Ni.localStorage.error(Ss)
        }
        return null
    },
    parse: function(e) {
        try {
            return Ni.JSONDecode(Ni.localStorage.get(e)) || {}
        } catch (Ss) {}
        return null
    },
    set: function(e, t) {
        try {
            Do.localStorage.setItem(e, t)
        } catch (Ss) {
            Ni.localStorage.error(Ss)
        }
    },
    remove: function(e) {
        try {
            Do.localStorage.removeItem(e)
        } catch (Ss) {
            Ni.localStorage.error(Ss)
        }
    }
},
Ni.register_event = function() {
    function e(t) {
        return t && (t.preventDefault = e.preventDefault,
        t.stopPropagation = e.stopPropagation),
        t
    }
    return e.preventDefault = function() {
        this.returnValue = !1
    }
    ,
    e.stopPropagation = function() {
        this.cancelBubble = !0
    }
    ,
    function(t, n, r, o, i) {
        if (t)
            if (t.addEventListener && !o)
                t.addEventListener(n, r, !!i);
            else {
                var a = "on" + n
                  , s = t[a];
                t[a] = function(t, n, r) {
                    var o = function(o) {
                        if (o = o || e(Do.event)) {
                            var i, a, s = !0;
                            return Ni.isFunction(r) && (i = r(o)),
                            a = n.call(t, o),
                            !1 !== i && !1 !== a || (s = !1),
                            s
                        }
                    };
                    return o
                }(t, r, s)
            }
        else
            Di.error("No valid element provided to register_event")
    }
}();
var zi = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
Ni.dom_query = function() {
    function e(e) {
        return e.all ? e.all : e.getElementsByTagName("*")
    }
    var t = /[\t\r\n]/g;
    function n(e, n) {
        var r = " " + n + " ";
        return (" " + e.className + " ").replace(t, " ").indexOf(r) >= 0
    }
    function r(t) {
        if (!ki.getElementsByTagName)
            return [];
        var r, o, i, a, s, u, l, c, d, f, p = t.split(" "), h = [ki];
        for (u = 0; u < p.length; u++)
            if ((r = p[u].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
                i = (o = r.split("#"))[0];
                var m = o[1]
                  , g = ki.getElementById(m);
                if (!g || i && g.nodeName.toLowerCase() != i)
                    return [];
                h = [g]
            } else if (r.indexOf(".") > -1) {
                i = (o = r.split("."))[0];
                var y = o[1];
                for (i || (i = "*"),
                a = [],
                s = 0,
                l = 0; l < h.length; l++)
                    for (d = "*" == i ? e(h[l]) : h[l].getElementsByTagName(i),
                    c = 0; c < d.length; c++)
                        a[s++] = d[c];
                for (h = [],
                f = 0,
                l = 0; l < a.length; l++)
                    a[l].className && Ni.isString(a[l].className) && n(a[l], y) && (h[f++] = a[l])
            } else {
                var v = r.match(zi);
                if (v) {
                    i = v[1];
                    var b, _ = v[2], w = v[3], S = v[4];
                    for (i || (i = "*"),
                    a = [],
                    s = 0,
                    l = 0; l < h.length; l++)
                        for (d = "*" == i ? e(h[l]) : h[l].getElementsByTagName(i),
                        c = 0; c < d.length; c++)
                            a[s++] = d[c];
                    switch (h = [],
                    f = 0,
                    w) {
                    case "=":
                        b = function(e) {
                            return e.getAttribute(_) == S
                        }
                        ;
                        break;
                    case "~":
                        b = function(e) {
                            return e.getAttribute(_).match(new RegExp("\\b" + S + "\\b"))
                        }
                        ;
                        break;
                    case "|":
                        b = function(e) {
                            return e.getAttribute(_).match(new RegExp("^" + S + "-?"))
                        }
                        ;
                        break;
                    case "^":
                        b = function(e) {
                            return 0 === e.getAttribute(_).indexOf(S)
                        }
                        ;
                        break;
                    case "$":
                        b = function(e) {
                            return e.getAttribute(_).lastIndexOf(S) == e.getAttribute(_).length - S.length
                        }
                        ;
                        break;
                    case "*":
                        b = function(e) {
                            return e.getAttribute(_).indexOf(S) > -1
                        }
                        ;
                        break;
                    default:
                        b = function(e) {
                            return e.getAttribute(_)
                        }
                    }
                    for (h = [],
                    f = 0,
                    l = 0; l < a.length; l++)
                        b(a[l]) && (h[f++] = a[l])
                } else {
                    for (i = r,
                    a = [],
                    s = 0,
                    l = 0; l < h.length; l++)
                        for (d = h[l].getElementsByTagName(i),
                        c = 0; c < d.length; c++)
                            a[s++] = d[c];
                    h = a
                }
            }
        return h
    }
    return function(e) {
        return Ni.isElement(e) ? [e] : Ni.isObject(e) && !Ni.isUndefined(e.length) ? e : r.call(this, e)
    }
}();
var Bi = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "utm_source_platform", "utm_campaign_id", "utm_creative_format", "utm_marketing_tactic"]
  , qi = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "sccid", "ttclid", "twclid", "wbraid"];
Ni.info = {
    campaignParams: function(e) {
        var t = ""
          , n = {};
        return Ni.each(Bi, (function(r) {
            (t = Ni.getQueryParam(ki.URL, r)).length ? n[r] = t : void 0 !== e && (n[r] = e)
        }
        )),
        n
    },
    clickParams: function() {
        var e = ""
          , t = {};
        return Ni.each(qi, (function(n) {
            (e = Ni.getQueryParam(ki.URL, n)).length && (t[n] = e)
        }
        )),
        t
    },
    marketingParams: function() {
        return Ni.extend(Ni.info.campaignParams(), Ni.info.clickParams())
    },
    searchEngine: function(e) {
        return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
    },
    searchInfo: function(e) {
        var t = Ni.info.searchEngine(e)
          , n = "yahoo" != t ? "q" : "p"
          , r = {};
        if (null !== t) {
            r.$search_engine = t;
            var o = Ni.getQueryParam(e, n);
            o.length && (r.mp_keyword = o)
        }
        return r
    },
    browser: function(e, t, n) {
        return t = t || "",
        n || Ni.includes(e, " OPR/") ? Ni.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : Ni.includes(e, "IEMobile") || Ni.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : Ni.includes(e, "SamsungBrowser/") ? "Samsung Internet" : Ni.includes(e, "Edge") || Ni.includes(e, "Edg/") ? "Microsoft Edge" : Ni.includes(e, "FBIOS") ? "Facebook Mobile" : Ni.includes(e, "Chrome") ? "Chrome" : Ni.includes(e, "CriOS") ? "Chrome iOS" : Ni.includes(e, "UCWEB") || Ni.includes(e, "UCBrowser") ? "UC Browser" : Ni.includes(e, "FxiOS") ? "Firefox iOS" : Ni.includes(t, "Apple") ? Ni.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : Ni.includes(e, "Android") ? "Android Mobile" : Ni.includes(e, "Konqueror") ? "Konqueror" : Ni.includes(e, "Firefox") ? "Firefox" : Ni.includes(e, "MSIE") || Ni.includes(e, "Trident/") ? "Internet Explorer" : Ni.includes(e, "Gecko") ? "Mozilla" : ""
    },
    browserVersion: function(e, t, n) {
        var r = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/
        }[Ni.info.browser(e, t, n)];
        if (void 0 === r)
            return null;
        var o = e.match(r);
        return o ? parseFloat(o[o.length - 2]) : null
    },
    os: function() {
        var e = Ci;
        return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
    },
    device: function(e) {
        return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : ""
    },
    referringDomain: function(e) {
        var t = e.split("/");
        return t.length >= 3 ? t[2] : ""
    },
    currentUrl: function() {
        return Do.location.href
    },
    properties: function(e) {
        return "object" != typeof e && (e = {}),
        Ni.extend(Ni.strip_empty_properties({
            $os: Ni.info.os(),
            $browser: Ni.info.browser(Ci, Si.vendor, xi),
            $referrer: ki.referrer,
            $referring_domain: Ni.info.referringDomain(ki.referrer),
            $device: Ni.info.device(Ci)
        }), {
            $current_url: Ni.info.currentUrl(),
            $browser_version: Ni.info.browserVersion(Ci, Si.vendor, xi),
            $screen_height: Ei.height,
            $screen_width: Ei.width,
            mp_lib: "web",
            $lib_version: Fo.LIB_VERSION,
            $insert_id: Wi(),
            time: Ni.timestamp() / 1e3
        }, Ni.strip_empty_properties(e))
    },
    people_properties: function() {
        return Ni.extend(Ni.strip_empty_properties({
            $os: Ni.info.os(),
            $browser: Ni.info.browser(Ci, Si.vendor, xi)
        }), {
            $browser_version: Ni.info.browserVersion(Ci, Si.vendor, xi)
        })
    },
    mpPageViewProperties: function() {
        return Ni.strip_empty_properties({
            current_page_title: ki.title,
            current_domain: Do.location.hostname,
            current_url_path: Do.location.pathname,
            current_url_protocol: Do.location.protocol,
            current_url_search: Do.location.search
        })
    }
};
var Wi = function(e) {
    var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    return e ? t.substring(0, e) : t
}
  , Vi = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i
  , $i = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i
  , Hi = function(e) {
    var t = $i
      , n = e.split(".")
      , r = n[n.length - 1];
    (r.length > 4 || "com" === r || "org" === r) && (t = Vi);
    var o = e.match(t);
    return o ? o[0] : ""
}
  , Qi = null
  , Yi = null;
"undefined" != typeof JSON && (Qi = JSON.stringify,
Yi = JSON.parse),
Qi = Qi || Ni.JSONEncode,
Yi = Yi || Ni.JSONDecode,
Ni.toArray = Ni.toArray,
Ni.isObject = Ni.isObject,
Ni.JSONEncode = Ni.JSONEncode,
Ni.JSONDecode = Ni.JSONDecode,
Ni.isBlockedUA = Ni.isBlockedUA,
Ni.isEmptyObject = Ni.isEmptyObject,
Ni.info = Ni.info,
Ni.info.device = Ni.info.device,
Ni.info.browser = Ni.info.browser,
Ni.info.browserVersion = Ni.info.browserVersion,
Ni.info.properties = Ni.info.properties,
Ni.NPO = ei;
var Gi = "__mp_opt_in_out_";
function Ki(e, t) {
    sa(!0, e, t)
}
function Xi(e, t) {
    sa(!1, e, t)
}
function Ji(e, t) {
    return "1" === aa(e, t)
}
function Zi(e, t) {
    if (function(e) {
        if (e && e.ignoreDnt)
            return !1;
        var t = e && e.window || Do
          , n = t.navigator || {}
          , r = !1;
        return Ni.each([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], (function(e) {
            Ni.includes([!0, 1, "1", "yes"], e) && (r = !0)
        }
        )),
        r
    }(t))
        return Di.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'),
        !0;
    var n = "0" === aa(e, t);
    return n && Di.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."),
    n
}
function ea(e) {
    return ua(e, (function(e) {
        return this.get_config(e)
    }
    ))
}
function ta(e) {
    return ua(e, (function(e) {
        return this._get_config(e)
    }
    ))
}
function na(e) {
    return ua(e, (function(e) {
        return this._get_config(e)
    }
    ))
}
function ra(e, t) {
    oa(t = t || {}).remove(ia(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
}
function oa(e) {
    return "localStorage" === (e = e || {}).persistenceType ? Ni.localStorage : Ni.cookie
}
function ia(e, t) {
    return ((t = t || {}).persistencePrefix || Gi) + e
}
function aa(e, t) {
    return oa(t).get(ia(e, t))
}
function sa(e, t, n) {
    Ni.isString(t) && t.length ? (oa(n = n || {}).set(ia(t, n), e ? 1 : 0, Ni.isNumber(n.cookieExpiration) ? n.cookieExpiration : null, !!n.crossSubdomainCookie, !!n.secureCookie, !!n.crossSiteCookie, n.cookieDomain),
    n.track && e && n.track(n.trackEventName || "$opt_in", n.trackProperties, {
        send_immediately: !0
    })) : Di.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
}
function ua(e, t) {
    return function() {
        var n = !1;
        try {
            var r = t.call(this, "token")
              , o = t.call(this, "ignore_dnt")
              , i = t.call(this, "opt_out_tracking_persistence_type")
              , a = t.call(this, "opt_out_tracking_cookie_prefix")
              , s = t.call(this, "window");
            r && (n = Zi(r, {
                ignoreDnt: o,
                persistenceType: i,
                persistencePrefix: a,
                window: s
            }))
        } catch (Ss) {
            Di.error("Unexpected error when checking tracking opt-out status: " + Ss)
        }
        if (!n)
            return e.apply(this, arguments);
        var u = arguments[arguments.length - 1];
        "function" == typeof u && u(0)
    }
}
var la = Ai("lock")
  , ca = function(e, t) {
    t = t || {},
    this.storageKey = e,
    this.storage = t.storage || window.localStorage,
    this.pollIntervalMS = t.pollIntervalMS || 100,
    this.timeoutMS = t.timeoutMS || 2e3,
    this.promiseImpl = t.promiseImpl || ti
};
ca.prototype.withLock = function(e, t) {
    return new (0,
    this.promiseImpl)(Ni.bind((function(n, r) {
        var o = t || (new Date).getTime() + "|" + Math.random()
          , i = (new Date).getTime()
          , a = this.storageKey
          , s = this.pollIntervalMS
          , u = this.timeoutMS
          , l = this.storage
          , c = a + ":X"
          , d = a + ":Y"
          , f = a + ":Z"
          , p = function(e) {
            if ((new Date).getTime() - i > u)
                return la.error("Timeout waiting for mutex on " + a + "; clearing lock. [" + o + "]"),
                l.removeItem(f),
                l.removeItem(d),
                void g();
            setTimeout((function() {
                try {
                    e()
                } catch (Ss) {
                    r(Ss)
                }
            }
            ), s * (Math.random() + .1))
        }
          , h = function(e, t) {
            e() ? t() : p((function() {
                h(e, t)
            }
            ))
        }
          , m = function() {
            var e = l.getItem(d);
            return (!e || e === o) && (l.setItem(d, o),
            l.getItem(d) === o || (ji(l, !0) || r(new Error("localStorage support dropped while acquiring lock")),
            !1))
        }
          , g = function() {
            l.setItem(c, o),
            h(m, (function() {
                l.getItem(c) !== o ? p((function() {
                    l.getItem(d) === o ? h((function() {
                        return !l.getItem(f)
                    }
                    ), y) : g()
                }
                )) : y()
            }
            ))
        }
          , y = function() {
            l.setItem(f, "1");
            var t = function() {
                l.removeItem(f),
                l.getItem(d) === o && l.removeItem(d),
                l.getItem(c) === o && l.removeItem(c)
            };
            e().then((function(e) {
                t(),
                n(e)
            }
            )).catch((function(e) {
                t(),
                r(e)
            }
            ))
        };
        try {
            if (!ji(l, !0))
                throw new Error("localStorage support check failed");
            g()
        } catch (Ss) {
            r(Ss)
        }
    }
    ), this))
}
;
var da = function(e) {
    this.storage = e || localStorage
};
da.prototype.init = function() {
    return ti.resolve()
}
,
da.prototype.setItem = function(e, t) {
    return new ti(Ni.bind((function(n, r) {
        try {
            this.storage.setItem(e, t)
        } catch (o) {
            r(o)
        }
        n()
    }
    ), this))
}
,
da.prototype.getItem = function(e) {
    return new ti(Ni.bind((function(t, n) {
        var r;
        try {
            r = this.storage.getItem(e)
        } catch (o) {
            n(o)
        }
        t(r)
    }
    ), this))
}
,
da.prototype.removeItem = function(e) {
    return new ti(Ni.bind((function(t, n) {
        try {
            this.storage.removeItem(e)
        } catch (r) {
            n(r)
        }
        t()
    }
    ), this))
}
;
var fa = Ai("batch")
  , pa = function(e, t) {
    t = t || {},
    this.storageKey = e,
    this.usePersistence = t.usePersistence,
    this.usePersistence && (this.queueStorage = t.queueStorage || new da,
    this.lock = new ca(e,{
        storage: t.sharedLockStorage || window.localStorage
    }),
    this.queueStorage.init()),
    this.reportError = t.errorReporter || Ni.bind(fa.error, fa),
    this.pid = t.pid || null,
    this.memQueue = [],
    this.initialized = !1
};
pa.prototype.ensureInit = function() {
    return this.initialized ? ti.resolve() : this.queueStorage.init().then(Ni.bind((function() {
        this.initialized = !0
    }
    ), this)).catch(Ni.bind((function(e) {
        this.reportError("Error initializing queue persistence. Disabling persistence", e),
        this.initialized = !0,
        this.usePersistence = !1
    }
    ), this))
}
,
pa.prototype.enqueue = function(e, t) {
    var n = {
        id: Wi(),
        flushAfter: (new Date).getTime() + 2 * t,
        payload: e
    };
    if (this.usePersistence) {
        var r = Ni.bind((function() {
            return this.ensureInit().then(Ni.bind((function() {
                return this.readFromStorage()
            }
            ), this)).then(Ni.bind((function(e) {
                return e.push(n),
                this.saveToStorage(e)
            }
            ), this)).then(Ni.bind((function(e) {
                return e && this.memQueue.push(n),
                e
            }
            ), this)).catch(Ni.bind((function(t) {
                return this.reportError("Error enqueueing item", t, e),
                !1
            }
            ), this))
        }
        ), this);
        return this.lock.withLock(r, this.pid).catch(Ni.bind((function(e) {
            return this.reportError("Error acquiring storage lock", e),
            !1
        }
        ), this))
    }
    return this.memQueue.push(n),
    ti.resolve(!0)
}
,
pa.prototype.fillBatch = function(e) {
    var t = this.memQueue.slice(0, e);
    return this.usePersistence && t.length < e ? this.ensureInit().then(Ni.bind((function() {
        return this.readFromStorage()
    }
    ), this)).then(Ni.bind((function(n) {
        if (n.length) {
            var r = {};
            Ni.each(t, (function(e) {
                r[e.id] = !0
            }
            ));
            for (var o = 0; o < n.length; o++) {
                var i = n[o];
                if ((new Date).getTime() > i.flushAfter && !r[i.id] && (i.orphaned = !0,
                t.push(i),
                t.length >= e))
                    break
            }
        }
        return t
    }
    ), this)) : ti.resolve(t)
}
;
var ha = function(e, t) {
    var n = [];
    return Ni.each(e, (function(e) {
        e.id && !t[e.id] && n.push(e)
    }
    )),
    n
};
pa.prototype.removeItemsByID = function(e) {
    var t = {};
    if (Ni.each(e, (function(e) {
        t[e] = !0
    }
    )),
    this.memQueue = ha(this.memQueue, t),
    this.usePersistence) {
        var n = Ni.bind((function() {
            return this.ensureInit().then(Ni.bind((function() {
                return this.readFromStorage()
            }
            ), this)).then(Ni.bind((function(e) {
                return e = ha(e, t),
                this.saveToStorage(e)
            }
            ), this)).then(Ni.bind((function() {
                return this.readFromStorage()
            }
            ), this)).then(Ni.bind((function(e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.id && t[r.id])
                        throw new Error("Item not removed from storage")
                }
                return !0
            }
            ), this)).catch(Ni.bind((function(t) {
                return this.reportError("Error removing items", t, e),
                !1
            }
            ), this))
        }
        ), this);
        return this.lock.withLock(n, this.pid).catch(Ni.bind((function(e) {
            return this.reportError("Error acquiring storage lock", e),
            !ji(this.queueStorage.storage, !0) && n().then(Ni.bind((function(e) {
                return e || this.queueStorage.removeItem(this.storageKey).then((function() {
                    return e
                }
                ))
            }
            ), this)).catch(Ni.bind((function(e) {
                return this.reportError("Error clearing queue", e),
                !1
            }
            ), this))
        }
        ), this))
    }
    return ti.resolve(!0)
}
;
var ma = function(e, t) {
    var n = [];
    return Ni.each(e, (function(e) {
        var r = e.id;
        if (r in t) {
            var o = t[r];
            null !== o && (e.payload = o,
            n.push(e))
        } else
            n.push(e)
    }
    )),
    n
};
pa.prototype.updatePayloads = function(e) {
    return this.memQueue = ma(this.memQueue, e),
    this.usePersistence ? this.lock.withLock(Ni.bind((function() {
        return this.ensureInit().then(Ni.bind((function() {
            return this.readFromStorage()
        }
        ), this)).then(Ni.bind((function(t) {
            return t = ma(t, e),
            this.saveToStorage(t)
        }
        ), this)).catch(Ni.bind((function(t) {
            return this.reportError("Error updating items", e, t),
            !1
        }
        ), this))
    }
    ), this), this.pid).catch(Ni.bind((function(e) {
        return this.reportError("Error acquiring storage lock", e),
        !1
    }
    ), this)) : ti.resolve(!0)
}
,
pa.prototype.readFromStorage = function() {
    return this.ensureInit().then(Ni.bind((function() {
        return this.queueStorage.getItem(this.storageKey)
    }
    ), this)).then(Ni.bind((function(e) {
        return e && (e = Yi(e),
        Ni.isArray(e) || (this.reportError("Invalid storage entry:", e),
        e = null)),
        e || []
    }
    ), this)).catch(Ni.bind((function(e) {
        return this.reportError("Error retrieving queue", e),
        []
    }
    ), this))
}
,
pa.prototype.saveToStorage = function(e) {
    try {
        var t = Qi(e)
    } catch (Ss) {
        return this.reportError("Error serializing queue", Ss),
        ti.resolve(!1)
    }
    return this.ensureInit().then(Ni.bind((function() {
        return this.queueStorage.setItem(this.storageKey, t)
    }
    ), this)).then((function() {
        return !0
    }
    )).catch(Ni.bind((function(e) {
        return this.reportError("Error saving queue", e),
        !1
    }
    ), this))
}
,
pa.prototype.clear = function() {
    return this.memQueue = [],
    this.usePersistence ? this.ensureInit().then(Ni.bind((function() {
        return this.queueStorage.removeItem(this.storageKey)
    }
    ), this)) : ti.resolve()
}
;
var ga = Ai("batch")
  , ya = function(e, t) {
    this.errorReporter = t.errorReporter,
    this.queue = new pa(e,{
        errorReporter: Ni.bind(this.reportError, this),
        queueStorage: t.queueStorage,
        sharedLockStorage: t.sharedLockStorage,
        usePersistence: t.usePersistence
    }),
    this.libConfig = t.libConfig,
    this.sendRequest = t.sendRequestFunc,
    this.beforeSendHook = t.beforeSendHook,
    this.stopAllBatching = t.stopAllBatchingFunc,
    this.batchSize = this.libConfig.batch_size,
    this.flushInterval = this.libConfig.batch_flush_interval_ms,
    this.stopped = !this.libConfig.batch_autostart,
    this.consecutiveRemovalFailures = 0,
    this.itemIdsSentSuccessfully = {},
    this.flushOnlyOnInterval = t.flushOnlyOnInterval || !1
};
ya.prototype.enqueue = function(e) {
    return this.queue.enqueue(e, this.flushInterval)
}
,
ya.prototype.start = function() {
    return this.stopped = !1,
    this.consecutiveRemovalFailures = 0,
    this.flush()
}
,
ya.prototype.stop = function() {
    this.stopped = !0,
    this.timeoutID && (clearTimeout(this.timeoutID),
    this.timeoutID = null)
}
,
ya.prototype.clear = function() {
    return this.queue.clear()
}
,
ya.prototype.resetBatchSize = function() {
    this.batchSize = this.libConfig.batch_size
}
,
ya.prototype.resetFlush = function() {
    this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
}
,
ya.prototype.scheduleFlush = function(e) {
    this.flushInterval = e,
    this.stopped || (this.timeoutID = setTimeout(Ni.bind((function() {
        this.stopped || this.flush()
    }
    ), this), this.flushInterval))
}
,
ya.prototype.sendRequestPromise = function(e, t) {
    return new ti(Ni.bind((function(n) {
        this.sendRequest(e, t, n)
    }
    ), this))
}
,
ya.prototype.flush = function(e) {
    if (this.requestInProgress)
        return ga.log("Flush: Request already in progress"),
        ti.resolve();
    this.requestInProgress = !0,
    e = e || {};
    var t = this.libConfig.batch_request_timeout_ms
      , n = (new Date).getTime()
      , r = this.batchSize;
    return this.queue.fillBatch(r).then(Ni.bind((function(o) {
        var i = o.length === r
          , a = []
          , s = {};
        if (Ni.each(o, (function(e) {
            var t = e.payload;
            if (this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)),
            t) {
                t.event && t.properties && (t.properties = Ni.extend({}, t.properties, {
                    mp_sent_by_lib_version: Fo.LIB_VERSION
                }));
                var n = !0
                  , r = e.id;
                r ? (this.itemIdsSentSuccessfully[r] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
                    item: e,
                    batchSize: o.length,
                    timesSent: this.itemIdsSentSuccessfully[r]
                }),
                n = !1) : this.reportError("[dupe] found item with no ID", {
                    item: e
                }),
                n && a.push(t)
            }
            s[e.id] = t
        }
        ), this),
        a.length < 1)
            return this.requestInProgress = !1,
            this.resetFlush(),
            ti.resolve();
        var u = Ni.bind((function() {
            return this.queue.removeItemsByID(Ni.map(o, (function(e) {
                return e.id
            }
            ))).then(Ni.bind((function(e) {
                return Ni.each(o, Ni.bind((function(e) {
                    var t = e.id;
                    t ? (this.itemIdsSentSuccessfully[t] = this.itemIdsSentSuccessfully[t] || 0,
                    this.itemIdsSentSuccessfully[t]++,
                    this.itemIdsSentSuccessfully[t] > 5 && this.reportError("[dupe] item ID sent too many times", {
                        item: e,
                        batchSize: o.length,
                        timesSent: this.itemIdsSentSuccessfully[t]
                    })) : this.reportError("[dupe] found item with no ID while removing", {
                        item: e
                    })
                }
                ), this)),
                e ? (this.consecutiveRemovalFailures = 0,
                this.flushOnlyOnInterval && !i ? (this.resetFlush(),
                ti.resolve()) : this.flush()) : (++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."),
                this.stopAllBatching()) : this.resetFlush(),
                ti.resolve())
            }
            ), this))
        }
        ), this)
          , l = Ni.bind((function(i) {
            this.requestInProgress = !1;
            try {
                if (e.unloading)
                    return this.queue.updatePayloads(s);
                if (Ni.isObject(i) && "timeout" === i.error && (new Date).getTime() - n >= t)
                    return this.reportError("Network timeout; retrying"),
                    this.flush();
                if (Ni.isObject(i) && (i.httpStatusCode >= 500 || 429 === i.httpStatusCode || i.httpStatusCode <= 0 && (c = Do.navigator.onLine,
                !Ni.isUndefined(c) && !c) || "timeout" === i.error)) {
                    var a = 2 * this.flushInterval;
                    return i.retryAfter && (a = 1e3 * parseInt(i.retryAfter, 10) || a),
                    a = Math.min(6e5, a),
                    this.reportError("Error; retry in " + a + " ms"),
                    this.scheduleFlush(a),
                    ti.resolve()
                }
                if (Ni.isObject(i) && 413 === i.httpStatusCode) {
                    if (o.length > 1) {
                        var l = Math.max(1, Math.floor(r / 2));
                        return this.batchSize = Math.min(this.batchSize, l, o.length - 1),
                        this.reportError("413 response; reducing batch size to " + this.batchSize),
                        this.resetFlush(),
                        ti.resolve()
                    }
                    return this.reportError("Single-event request too large; dropping", o),
                    this.resetBatchSize(),
                    u()
                }
                return u()
            } catch (Ss) {
                this.reportError("Error handling API response", Ss),
                this.resetFlush()
            }
            var c
        }
        ), this)
          , c = {
            method: "POST",
            verbose: !0,
            ignore_json_errors: !0,
            timeout_ms: t
        };
        return e.unloading && (c.transport = "sendBeacon"),
        ga.log("MIXPANEL REQUEST:", a),
        this.sendRequestPromise(a, c).then(l)
    }
    ), this)).catch(Ni.bind((function(e) {
        this.reportError("Error flushing request queue", e),
        this.resetFlush()
    }
    ), this))
}
,
ya.prototype.reportError = function(e, t) {
    if (ga.error.apply(ga.error, arguments),
    this.errorReporter)
        try {
            t instanceof Error || (t = new Error(e)),
            this.errorReporter(e, t)
        } catch (n) {
            ga.error(n)
        }
}
;
var va = Ai("recorder")
  , ba = Do.CompressionStream
  , _a = {
    batch_size: 1e3,
    batch_flush_interval_ms: 1e4,
    batch_request_timeout_ms: 9e4,
    batch_autostart: !0
}
  , wa = new Set([Ao.MouseMove, Ao.MouseInteraction, Ao.Scroll, Ao.ViewportResize, Ao.Input, Ao.TouchMove, Ao.MediaInteraction, Ao.Drag, Ao.Selection]);
var Sa = function(e) {
    this._mixpanel = e.mixpanelInstance,
    this._onIdleTimeout = e.onIdleTimeout,
    this._onMaxLengthReached = e.onMaxLengthReached,
    this._rrwebRecord = e.rrwebRecord,
    this.replayId = e.replayId,
    this._stopRecording = null,
    this.seqNo = 0,
    this.replayStartTime = null,
    this.replayStartUrl = null,
    this.batchStartUrl = null,
    this.idleTimeoutId = null,
    this.maxTimeoutId = null,
    this.recordMaxMs = pi,
    this.recordMinMs = 0;
    var t = "__mprec_" + this.getConfig("token") + "_" + this.replayId;
    this.batcher = new ya(t,{
        errorReporter: Ni.bind(this.reportError, this),
        flushOnlyOnInterval: !0,
        libConfig: _a,
        sendRequestFunc: Ni.bind(this.flushEventsWithOptOut, this),
        usePersistence: !1
    })
};
Sa.prototype.getConfig = function(e) {
    return this._mixpanel.get_config(e)
}
,
Sa.prototype.get_config = function(e) {
    return this.getConfig(e)
}
,
Sa.prototype.startRecording = function(e) {
    if (null === this._stopRecording) {
        this.recordMaxMs = this.getConfig("record_max_ms"),
        this.recordMaxMs > pi && (this.recordMaxMs = pi,
        va.critical("record_max_ms cannot be greater than " + pi + "ms. Capping value.")),
        this.recordMinMs = this.getConfig("record_min_ms"),
        this.recordMinMs > hi && (this.recordMinMs = hi,
        va.critical("record_min_ms cannot be greater than 8000ms. Capping value.")),
        this.replayStartTime = (new Date).getTime(),
        this.batchStartUrl = Ni.info.currentUrl(),
        this.replayStartUrl = Ni.info.currentUrl(),
        e || this.recordMinMs > 0 ? this.batcher.stop() : this.batcher.start();
        var t = Ni.bind((function() {
            clearTimeout(this.idleTimeoutId),
            this.idleTimeoutId = setTimeout(this._onIdleTimeout, this.getConfig("record_idle_timeout_ms"))
        }
        ), this)
          , n = this.getConfig("record_block_selector");
        if ("" !== n && null !== n || (n = void 0),
        this._stopRecording = this._rrwebRecord({
            emit: Ni.bind((function(e) {
                this.batcher.enqueue(e),
                function(e) {
                    return e.type === Lo.IncrementalSnapshot && wa.has(e.data.source)
                }(e) && (this.batcher.stopped && (new Date).getTime() - this.replayStartTime >= this.recordMinMs && this.batcher.start(),
                t())
            }
            ), this),
            blockClass: this.getConfig("record_block_class"),
            blockSelector: n,
            collectFonts: this.getConfig("record_collect_fonts"),
            dataURLOptions: {
                type: "image/webp",
                quality: .6
            },
            maskAllInputs: !0,
            maskTextClass: this.getConfig("record_mask_text_class"),
            maskTextSelector: this.getConfig("record_mask_text_selector"),
            recordCanvas: this.getConfig("record_canvas"),
            sampling: {
                canvas: 15
            }
        }),
        "function" != typeof this._stopRecording)
            return this.reportError("rrweb failed to start, skipping this recording."),
            this._stopRecording = null,
            void this.stopRecording();
        t(),
        this.maxTimeoutId = setTimeout(Ni.bind(this._onMaxLengthReached, this), this.recordMaxMs)
    } else
        va.log("Recording already in progress, skipping startRecording.")
}
,
Sa.prototype.stopRecording = function() {
    if (!this.isRrwebStopped()) {
        try {
            this._stopRecording()
        } catch (Ss) {
            this.reportError("Error with rrweb stopRecording", Ss)
        }
        this._stopRecording = null
    }
    this.batcher.stopped ? this.batcher.clear() : (this.batcher.flush(),
    this.batcher.stop()),
    clearTimeout(this.idleTimeoutId),
    clearTimeout(this.maxTimeoutId)
}
,
Sa.prototype.isRrwebStopped = function() {
    return null === this._stopRecording
}
,
Sa.prototype.flushEventsWithOptOut = function(e, t, n) {
    this._flushEvents(e, t, n, Ni.bind(this._onOptOut, this))
}
,
Sa.prototype._onOptOut = function(e) {
    0 === e && this.stopRecording()
}
,
Sa.prototype._sendRequest = function(e, t, n, r) {
    var o = Ni.bind((function(t, n) {
        200 === t.status && this.replayId === e && (this.seqNo++,
        this.batchStartUrl = Ni.info.currentUrl()),
        r({
            status: 0,
            httpStatusCode: t.status,
            responseBody: n,
            retryAfter: t.headers.get("Retry-After")
        })
    }
    ), this);
    Do.fetch(this.getConfig("api_host") + "/" + this.getConfig("api_routes").record + "?" + new URLSearchParams(t), {
        method: "POST",
        headers: {
            Authorization: "Basic " + btoa(this.getConfig("token") + ":"),
            "Content-Type": "application/octet-stream"
        },
        body: n
    }).then((function(e) {
        e.json().then((function(t) {
            o(e, t)
        }
        )).catch((function(e) {
            r({
                error: e
            })
        }
        ))
    }
    )).catch((function(e) {
        r({
            error: e,
            httpStatusCode: 0
        })
    }
    ))
}
,
Sa.prototype._flushEvents = ea((function(e, t, n) {
    const r = e.length;
    if (r > 0) {
        var o = this.replayId
          , i = e[0].timestamp;
        0 !== this.seqNo && this.replayStartTime || (0 !== this.seqNo && this.reportError("Replay start time not set but seqNo is not 0. Using current batch start time as a fallback."),
        this.replayStartTime = i);
        var a = e[r - 1].timestamp - this.replayStartTime
          , s = {
            $current_url: this.batchStartUrl,
            $lib_version: Fo.LIB_VERSION,
            batch_start_time: i / 1e3,
            distinct_id: String(this._mixpanel.get_distinct_id()),
            mp_lib: "web",
            replay_id: o,
            replay_length_ms: a,
            replay_start_time: this.replayStartTime / 1e3,
            replay_start_url: this.replayStartUrl,
            seq: this.seqNo
        }
          , u = Ni.JSONEncode(e)
          , l = this._mixpanel.get_property("$device_id");
        l && (s.$device_id = l);
        var c = this._mixpanel.get_property("$user_id");
        if (c && (s.$user_id = c),
        ba) {
            var d = new Blob([u],{
                type: "application/json"
            }).stream().pipeThrough(new ba("gzip"));
            new Response(d).blob().then(Ni.bind((function(e) {
                s.format = "gzip",
                this._sendRequest(o, s, e, n)
            }
            ), this))
        } else
            s.format = "body",
            this._sendRequest(o, s, u, n)
    }
}
)),
Sa.prototype.reportError = function(e, t) {
    va.error.apply(va.error, arguments);
    try {
        t || e instanceof Error || (e = new Error(e)),
        this.getConfig("error_reporter")(e, t)
    } catch (n) {
        va.error(n)
    }
}
;
var ka = Ai("recorder")
  , xa = function(e) {
    this._mixpanel = e,
    this.activeRecording = null
};
xa.prototype.startRecording = function(e) {
    if (!this.activeRecording || this.activeRecording.isRrwebStopped()) {
        var t = Ni.bind((function() {
            ka.log("Idle timeout reached, restarting recording."),
            this.resetRecording()
        }
        ), this)
          , n = Ni.bind((function() {
            ka.log("Max recording length reached, stopping recording."),
            this.resetRecording()
        }
        ), this);
        this.activeRecording = new Sa({
            mixpanelInstance: this._mixpanel,
            onIdleTimeout: t,
            onMaxLengthReached: n,
            replayId: Ni.UUID(),
            rrwebRecord: No
        }),
        this.activeRecording.startRecording(e)
    } else
        ka.log("Recording already in progress, skipping startRecording.")
}
,
xa.prototype.stopRecording = function() {
    this.activeRecording && (this.activeRecording.stopRecording(),
    this.activeRecording = null)
}
,
xa.prototype.resetRecording = function() {
    this.stopRecording(),
    this.startRecording(!0)
}
,
xa.prototype.getActiveReplayId = function() {
    return this.activeRecording && !this.activeRecording.isRrwebStopped() ? this.activeRecording.replayId : null
}
,
Object.defineProperty(xa.prototype, "replayId", {
    get: function() {
        return this.getActiveReplayId()
    }
}),
Do.__mp_recorder = xa;
var Ea = function() {};
Ea.prototype.create_properties = function() {}
,
Ea.prototype.event_handler = function() {}
,
Ea.prototype.after_track_handler = function() {}
,
Ea.prototype.init = function(e) {
    return this.mp = e,
    this
}
,
Ea.prototype.track = function(e, t, n, r) {
    var o = this
      , i = Ni.dom_query(e);
    if (0 !== i.length)
        return Ni.each(i, (function(e) {
            Ni.register_event(e, this.override_event, (function(e) {
                var i = {}
                  , a = o.create_properties(n, this)
                  , s = o.mp.get_config("track_links_timeout");
                o.event_handler(e, this, i),
                window.setTimeout(o.track_callback(r, a, i, !0), s),
                o.mp.track(t, a, o.track_callback(r, a, i))
            }
            ))
        }
        ), this),
        !0;
    Di.error("The DOM query (" + e + ") returned 0 elements")
}
,
Ea.prototype.track_callback = function(e, t, n, r) {
    r = r || !1;
    var o = this;
    return function() {
        n.callback_fired || (n.callback_fired = !0,
        e && !1 === e(r, t) || o.after_track_handler(t, n, r))
    }
}
,
Ea.prototype.create_properties = function(e, t) {
    return "function" == typeof e ? e(t) : Ni.extend({}, e)
}
;
var Ca = function() {
    this.override_event = "click"
};
Ni.inherit(Ca, Ea),
Ca.prototype.create_properties = function(e, t) {
    var n = Ca.superclass.create_properties.apply(this, arguments);
    return t.href && (n.url = t.href),
    n
}
,
Ca.prototype.event_handler = function(e, t, n) {
    n.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target,
    n.href = t.href,
    n.new_tab || e.preventDefault()
}
,
Ca.prototype.after_track_handler = function(e, t) {
    t.new_tab || setTimeout((function() {
        window.location = t.href
    }
    ), 0)
}
;
var Ta = function() {
    this.override_event = "submit"
};
Ni.inherit(Ta, Ea),
Ta.prototype.event_handler = function(e, t, n) {
    n.element = t,
    e.preventDefault()
}
,
Ta.prototype.after_track_handler = function(e, t) {
    setTimeout((function() {
        t.element.submit()
    }
    ), 0)
}
;
var Ra = "$set"
  , Oa = "$set_once"
  , Ia = "$unset"
  , Ma = "$add"
  , Pa = "$append"
  , Na = "$union"
  , Da = "$remove"
  , La = {
    set_action: function(e, t) {
        var n = {}
          , r = {};
        return Ni.isObject(e) ? Ni.each(e, (function(e, t) {
            this._is_reserved_property(t) || (r[t] = e)
        }
        ), this) : r[e] = t,
        n[Ra] = r,
        n
    },
    unset_action: function(e) {
        var t = {}
          , n = [];
        return Ni.isArray(e) || (e = [e]),
        Ni.each(e, (function(e) {
            this._is_reserved_property(e) || n.push(e)
        }
        ), this),
        t[Ia] = n,
        t
    },
    set_once_action: function(e, t) {
        var n = {}
          , r = {};
        return Ni.isObject(e) ? Ni.each(e, (function(e, t) {
            this._is_reserved_property(t) || (r[t] = e)
        }
        ), this) : r[e] = t,
        n[Oa] = r,
        n
    },
    union_action: function(e, t) {
        var n = {}
          , r = {};
        return Ni.isObject(e) ? Ni.each(e, (function(e, t) {
            this._is_reserved_property(t) || (r[t] = Ni.isArray(e) ? e : [e])
        }
        ), this) : r[e] = Ni.isArray(t) ? t : [t],
        n[Na] = r,
        n
    },
    append_action: function(e, t) {
        var n = {}
          , r = {};
        return Ni.isObject(e) ? Ni.each(e, (function(e, t) {
            this._is_reserved_property(t) || (r[t] = e)
        }
        ), this) : r[e] = t,
        n[Pa] = r,
        n
    },
    remove_action: function(e, t) {
        var n = {}
          , r = {};
        return Ni.isObject(e) ? Ni.each(e, (function(e, t) {
            this._is_reserved_property(t) || (r[t] = e)
        }
        ), this) : r[e] = t,
        n[Da] = r,
        n
    },
    delete_action: function() {
        var e = {
            $delete: ""
        };
        return e
    }
}
  , Aa = function() {};
Ni.extend(Aa.prototype, La),
Aa.prototype._init = function(e, t, n) {
    this._mixpanel = e,
    this._group_key = t,
    this._group_id = n
}
,
Aa.prototype.set = na((function(e, t, n) {
    var r = this.set_action(e, t);
    return Ni.isObject(e) && (n = t),
    this._send_request(r, n)
}
)),
Aa.prototype.set_once = na((function(e, t, n) {
    var r = this.set_once_action(e, t);
    return Ni.isObject(e) && (n = t),
    this._send_request(r, n)
}
)),
Aa.prototype.unset = na((function(e, t) {
    var n = this.unset_action(e);
    return this._send_request(n, t)
}
)),
Aa.prototype.union = na((function(e, t, n) {
    Ni.isObject(e) && (n = t);
    var r = this.union_action(e, t);
    return this._send_request(r, n)
}
)),
Aa.prototype.delete = na((function(e) {
    var t = this.delete_action();
    return this._send_request(t, e)
}
)),
Aa.prototype.remove = na((function(e, t, n) {
    var r = this.remove_action(e, t);
    return this._send_request(r, n)
}
)),
Aa.prototype._send_request = function(e, t) {
    e.$group_key = this._group_key,
    e.$group_id = this._group_id,
    e.$token = this._get_config("token");
    var n = Ni.encodeDates(e);
    return this._mixpanel._track_or_batch({
        type: "groups",
        data: n,
        endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").groups,
        batcher: this._mixpanel.request_batchers.groups
    }, t)
}
,
Aa.prototype._is_reserved_property = function(e) {
    return "$group_key" === e || "$group_id" === e
}
,
Aa.prototype._get_config = function(e) {
    return this._mixpanel.get_config(e)
}
,
Aa.prototype.toString = function() {
    return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
}
,
Aa.prototype.remove = Aa.prototype.remove,
Aa.prototype.set = Aa.prototype.set,
Aa.prototype.set_once = Aa.prototype.set_once,
Aa.prototype.union = Aa.prototype.union,
Aa.prototype.unset = Aa.prototype.unset,
Aa.prototype.toString = Aa.prototype.toString;
var Fa = function() {};
Ni.extend(Fa.prototype, La),
Fa.prototype._init = function(e) {
    this._mixpanel = e
}
,
Fa.prototype.set = ta((function(e, t, n) {
    var r = this.set_action(e, t);
    return Ni.isObject(e) && (n = t),
    this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer),
    r[Ra] = Ni.extend({}, Ni.info.people_properties(), r[Ra]),
    this._send_request(r, n)
}
)),
Fa.prototype.set_once = ta((function(e, t, n) {
    var r = this.set_once_action(e, t);
    return Ni.isObject(e) && (n = t),
    this._send_request(r, n)
}
)),
Fa.prototype.unset = ta((function(e, t) {
    var n = this.unset_action(e);
    return this._send_request(n, t)
}
)),
Fa.prototype.increment = ta((function(e, t, n) {
    var r = {}
      , o = {};
    return Ni.isObject(e) ? (Ni.each(e, (function(e, t) {
        if (!this._is_reserved_property(t)) {
            if (isNaN(parseFloat(e)))
                return void Di.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
            o[t] = e
        }
    }
    ), this),
    n = t) : (Ni.isUndefined(t) && (t = 1),
    o[e] = t),
    r[Ma] = o,
    this._send_request(r, n)
}
)),
Fa.prototype.append = ta((function(e, t, n) {
    Ni.isObject(e) && (n = t);
    var r = this.append_action(e, t);
    return this._send_request(r, n)
}
)),
Fa.prototype.remove = ta((function(e, t, n) {
    Ni.isObject(e) && (n = t);
    var r = this.remove_action(e, t);
    return this._send_request(r, n)
}
)),
Fa.prototype.union = ta((function(e, t, n) {
    Ni.isObject(e) && (n = t);
    var r = this.union_action(e, t);
    return this._send_request(r, n)
}
)),
Fa.prototype.track_charge = ta((function(e, t, n) {
    if (Ni.isNumber(e) || (e = parseFloat(e),
    !isNaN(e)))
        return this.append("$transactions", Ni.extend({
            $amount: e
        }, t), n);
    Di.error("Invalid value passed to mixpanel.people.track_charge - must be a number")
}
)),
Fa.prototype.clear_charges = function(e) {
    return this.set("$transactions", [], e)
}
,
Fa.prototype.delete_user = function() {
    if (this._identify_called()) {
        var e = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(e)
    }
    Di.error("mixpanel.people.delete_user() requires you to call identify() first")
}
,
Fa.prototype.toString = function() {
    return this._mixpanel.toString() + ".people"
}
,
Fa.prototype._send_request = function(e, t) {
    e.$token = this._get_config("token"),
    e.$distinct_id = this._mixpanel.get_distinct_id();
    var n = this._mixpanel.get_property("$device_id")
      , r = this._mixpanel.get_property("$user_id")
      , o = this._mixpanel.get_property("$had_persisted_distinct_id");
    n && (e.$device_id = n),
    r && (e.$user_id = r),
    o && (e.$had_persisted_distinct_id = o);
    var i = Ni.encodeDates(e);
    return this._identify_called() ? this._mixpanel._track_or_batch({
        type: "people",
        data: i,
        endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").engage,
        batcher: this._mixpanel.request_batchers.people
    }, t) : (this._enqueue(e),
    Ni.isUndefined(t) || (this._get_config("verbose") ? t({
        status: -1,
        error: null
    }) : t(-1)),
    Ni.truncate(i, 255))
}
,
Fa.prototype._get_config = function(e) {
    return this._mixpanel.get_config(e)
}
,
Fa.prototype._identify_called = function() {
    return !0 === this._mixpanel._flags.identify_called
}
,
Fa.prototype._enqueue = function(e) {
    Ra in e ? this._mixpanel.persistence._add_to_people_queue(Ra, e) : Oa in e ? this._mixpanel.persistence._add_to_people_queue(Oa, e) : Ia in e ? this._mixpanel.persistence._add_to_people_queue(Ia, e) : Ma in e ? this._mixpanel.persistence._add_to_people_queue(Ma, e) : Pa in e ? this._mixpanel.persistence._add_to_people_queue(Pa, e) : Da in e ? this._mixpanel.persistence._add_to_people_queue(Da, e) : Na in e ? this._mixpanel.persistence._add_to_people_queue(Na, e) : Di.error("Invalid call to _enqueue():", e)
}
,
Fa.prototype._flush_one_queue = function(e, t, n, r) {
    var o = this
      , i = Ni.extend({}, this._mixpanel.persistence.load_queue(e))
      , a = i;
    Ni.isUndefined(i) || !Ni.isObject(i) || Ni.isEmptyObject(i) || (o._mixpanel.persistence._pop_from_people_queue(e, i),
    o._mixpanel.persistence.save(),
    r && (a = r(i)),
    t.call(o, a, (function(t, r) {
        0 === t && o._mixpanel.persistence._add_to_people_queue(e, i),
        Ni.isUndefined(n) || n(t, r)
    }
    )))
}
,
Fa.prototype._flush = function(e, t, n, r, o, i, a) {
    var s = this;
    this._flush_one_queue(Ra, this.set, e),
    this._flush_one_queue(Oa, this.set_once, r),
    this._flush_one_queue(Ia, this.unset, i, (function(e) {
        return Ni.keys(e)
    }
    )),
    this._flush_one_queue(Ma, this.increment, t),
    this._flush_one_queue(Na, this.union, o);
    var u = this._mixpanel.persistence.load_queue(Pa);
    if (!Ni.isUndefined(u) && Ni.isArray(u) && u.length)
        for (var l, c = function(e, t) {
            0 === e && s._mixpanel.persistence._add_to_people_queue(Pa, l),
            Ni.isUndefined(n) || n(e, t)
        }, d = u.length - 1; d >= 0; d--)
            u = this._mixpanel.persistence.load_queue(Pa),
            l = u.pop(),
            s._mixpanel.persistence.save(),
            Ni.isEmptyObject(l) || s.append(l, c);
    var f = this._mixpanel.persistence.load_queue(Da);
    if (!Ni.isUndefined(f) && Ni.isArray(f) && f.length)
        for (var p, h = function(e, t) {
            0 === e && s._mixpanel.persistence._add_to_people_queue(Da, p),
            Ni.isUndefined(a) || a(e, t)
        }, m = f.length - 1; m >= 0; m--)
            f = this._mixpanel.persistence.load_queue(Da),
            p = f.pop(),
            s._mixpanel.persistence.save(),
            Ni.isEmptyObject(p) || s.remove(p, h)
}
,
Fa.prototype._is_reserved_property = function(e) {
    return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
}
,
Fa.prototype.set = Fa.prototype.set,
Fa.prototype.set_once = Fa.prototype.set_once,
Fa.prototype.unset = Fa.prototype.unset,
Fa.prototype.increment = Fa.prototype.increment,
Fa.prototype.append = Fa.prototype.append,
Fa.prototype.remove = Fa.prototype.remove,
Fa.prototype.union = Fa.prototype.union,
Fa.prototype.track_charge = Fa.prototype.track_charge,
Fa.prototype.clear_charges = Fa.prototype.clear_charges,
Fa.prototype.delete_user = Fa.prototype.delete_user,
Fa.prototype.toString = Fa.prototype.toString;
var Ua, ja = "__mps", za = "__mpso", Ba = "__mpus", qa = "__mpa", Wa = "__mpap", Va = "__mpr", $a = "__mpu", Ha = "$people_distinct_id", Qa = "__alias", Ya = "__timers", Ga = [ja, za, Ba, qa, Wa, Va, $a, Ha, Qa, Ya], Ka = function(e) {
    this.props = {},
    this.campaign_params_saved = !1,
    e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
    var t = e.persistence;
    "cookie" !== t && "localStorage" !== t && (Di.critical("Unknown persistence type " + t + "; falling back to cookie"),
    t = e.persistence = "cookie"),
    "localStorage" === t && Ni.localStorage.is_supported() ? this.storage = Ni.localStorage : this.storage = Ni.cookie,
    this.load(),
    this.update_config(e),
    this.upgrade(),
    this.save()
};
Ka.prototype.properties = function() {
    var e = {};
    return this.load(),
    Ni.each(this.props, (function(t, n) {
        Ni.include(Ga, n) || (e[n] = t)
    }
    )),
    e
}
,
Ka.prototype.load = function() {
    if (!this.disabled) {
        var e = this.storage.parse(this.name);
        e && (this.props = Ni.extend({}, e))
    }
}
,
Ka.prototype.upgrade = function() {
    var e, t;
    this.storage === Ni.localStorage ? (e = Ni.cookie.parse(this.name),
    Ni.cookie.remove(this.name),
    Ni.cookie.remove(this.name, !0),
    e && this.register_once(e)) : this.storage === Ni.cookie && (t = Ni.localStorage.parse(this.name),
    Ni.localStorage.remove(this.name),
    t && this.register_once(t))
}
,
Ka.prototype.save = function() {
    this.disabled || this.storage.set(this.name, Ni.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
}
,
Ka.prototype.load_prop = function(e) {
    return this.load(),
    this.props[e]
}
,
Ka.prototype.remove = function() {
    this.storage.remove(this.name, !1, this.cookie_domain),
    this.storage.remove(this.name, !0, this.cookie_domain)
}
,
Ka.prototype.clear = function() {
    this.remove(),
    this.props = {}
}
,
Ka.prototype.register_once = function(e, t, n) {
    return !!Ni.isObject(e) && (void 0 === t && (t = "None"),
    this.expire_days = void 0 === n ? this.default_expiry : n,
    this.load(),
    Ni.each(e, (function(e, n) {
        this.props.hasOwnProperty(n) && this.props[n] !== t || (this.props[n] = e)
    }
    ), this),
    this.save(),
    !0)
}
,
Ka.prototype.register = function(e, t) {
    return !!Ni.isObject(e) && (this.expire_days = void 0 === t ? this.default_expiry : t,
    this.load(),
    Ni.extend(this.props, e),
    this.save(),
    !0)
}
,
Ka.prototype.unregister = function(e) {
    this.load(),
    e in this.props && (delete this.props[e],
    this.save())
}
,
Ka.prototype.update_search_keyword = function(e) {
    this.register(Ni.info.searchInfo(e))
}
,
Ka.prototype.update_referrer_info = function(e) {
    this.register_once({
        $initial_referrer: e || "$direct",
        $initial_referring_domain: Ni.info.referringDomain(e) || "$direct"
    }, "")
}
,
Ka.prototype.get_referrer_info = function() {
    return Ni.strip_empty_properties({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain
    })
}
,
Ka.prototype.update_config = function(e) {
    this.default_expiry = this.expire_days = e.cookie_expiration,
    this.set_disabled(e.disable_persistence),
    this.set_cookie_domain(e.cookie_domain),
    this.set_cross_site(e.cross_site_cookie),
    this.set_cross_subdomain(e.cross_subdomain_cookie),
    this.set_secure(e.secure_cookie)
}
,
Ka.prototype.set_disabled = function(e) {
    this.disabled = e,
    this.disabled ? this.remove() : this.save()
}
,
Ka.prototype.set_cookie_domain = function(e) {
    e !== this.cookie_domain && (this.remove(),
    this.cookie_domain = e,
    this.save())
}
,
Ka.prototype.set_cross_site = function(e) {
    e !== this.cross_site && (this.cross_site = e,
    this.remove(),
    this.save())
}
,
Ka.prototype.set_cross_subdomain = function(e) {
    e !== this.cross_subdomain && (this.cross_subdomain = e,
    this.remove(),
    this.save())
}
,
Ka.prototype.get_cross_subdomain = function() {
    return this.cross_subdomain
}
,
Ka.prototype.set_secure = function(e) {
    e !== this.secure && (this.secure = !!e,
    this.remove(),
    this.save())
}
,
Ka.prototype._add_to_people_queue = function(e, t) {
    var n = this._get_queue_key(e)
      , r = t[e]
      , o = this._get_or_create_queue(Ra)
      , i = this._get_or_create_queue(Oa)
      , a = this._get_or_create_queue(Ia)
      , s = this._get_or_create_queue(Ma)
      , u = this._get_or_create_queue(Na)
      , l = this._get_or_create_queue(Da, [])
      , c = this._get_or_create_queue(Pa, []);
    n === ja ? (Ni.extend(o, r),
    this._pop_from_people_queue(Ma, r),
    this._pop_from_people_queue(Na, r),
    this._pop_from_people_queue(Ia, r)) : n === za ? (Ni.each(r, (function(e, t) {
        t in i || (i[t] = e)
    }
    )),
    this._pop_from_people_queue(Ia, r)) : n === Ba ? Ni.each(r, (function(e) {
        Ni.each([o, i, s, u], (function(t) {
            e in t && delete t[e]
        }
        )),
        Ni.each(c, (function(t) {
            e in t && delete t[e]
        }
        )),
        a[e] = !0
    }
    )) : n === qa ? (Ni.each(r, (function(e, t) {
        t in o ? o[t] += e : (t in s || (s[t] = 0),
        s[t] += e)
    }
    ), this),
    this._pop_from_people_queue(Ia, r)) : n === $a ? (Ni.each(r, (function(e, t) {
        Ni.isArray(e) && (t in u || (u[t] = []),
        u[t] = u[t].concat(e))
    }
    )),
    this._pop_from_people_queue(Ia, r)) : n === Va ? (l.push(r),
    this._pop_from_people_queue(Pa, r)) : n === Wa && (c.push(r),
    this._pop_from_people_queue(Ia, r)),
    Di.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
    Di.log(t),
    this.save()
}
,
Ka.prototype._pop_from_people_queue = function(e, t) {
    var n = this.props[this._get_queue_key(e)];
    Ni.isUndefined(n) || Ni.each(t, (function(t, r) {
        e === Pa || e === Da ? Ni.each(n, (function(e) {
            e[r] === t && delete e[r]
        }
        )) : delete n[r]
    }
    ), this)
}
,
Ka.prototype.load_queue = function(e) {
    return this.load_prop(this._get_queue_key(e))
}
,
Ka.prototype._get_queue_key = function(e) {
    return e === Ra ? ja : e === Oa ? za : e === Ia ? Ba : e === Ma ? qa : e === Pa ? Wa : e === Da ? Va : e === Na ? $a : void Di.error("Invalid queue:", e)
}
,
Ka.prototype._get_or_create_queue = function(e, t) {
    var n = this._get_queue_key(e);
    return t = Ni.isUndefined(t) ? {} : t,
    this.props[n] || (this.props[n] = t)
}
,
Ka.prototype.set_event_timer = function(e, t) {
    var n = this.load_prop(Ya) || {};
    n[e] = t,
    this.props[Ya] = n,
    this.save()
}
,
Ka.prototype.remove_event_timer = function(e) {
    var t = (this.load_prop(Ya) || {})[e];
    return Ni.isUndefined(t) || (delete this.props[Ya][e],
    this.save()),
    t
}
;
var Xa, Ja = function(e, t) {
    throw new Error(e + " not available in this build.")
}, Za = function(e) {
    return e
}, es = function() {}, ts = "mixpanel", ns = "base64", rs = "$device:", os = Do.XMLHttpRequest && "withCredentials"in new XMLHttpRequest, is = !os && -1 === Ci.indexOf("MSIE") && -1 === Ci.indexOf("Mozilla"), as = null;
Si.sendBeacon && (as = function() {
    return Si.sendBeacon.apply(Si, arguments)
}
);
var ss = {
    track: "track/",
    engage: "engage/",
    groups: "groups/",
    record: "record/"
}
  , us = {
    api_host: "https://api-js.mixpanel.com",
    api_routes: ss,
    api_method: "POST",
    api_transport: "XHR",
    api_payload_format: ns,
    app_host: "https://mixpanel.com",
    cdn: "https://cdn.mxpnl.com",
    cross_site_cookie: !1,
    cross_subdomain_cookie: !0,
    error_reporter: es,
    persistence: "cookie",
    persistence_name: "",
    cookie_domain: "",
    cookie_name: "",
    loaded: es,
    mp_loader: null,
    track_marketing: !0,
    track_pageview: !1,
    skip_first_touch_marketing: !1,
    store_google: !0,
    stop_utm_persistence: !1,
    save_referrer: !0,
    test: !1,
    verbose: !1,
    img: !1,
    debug: !1,
    track_links_timeout: 300,
    cookie_expiration: 365,
    upgrade: !1,
    disable_persistence: !1,
    disable_cookie: !1,
    secure_cookie: !1,
    ip: !0,
    opt_out_tracking_by_default: !1,
    opt_out_persistence_by_default: !1,
    opt_out_tracking_persistence_type: "localStorage",
    opt_out_tracking_cookie_prefix: null,
    property_blacklist: [],
    xhr_headers: {},
    ignore_dnt: !1,
    batch_requests: !0,
    batch_size: 50,
    batch_flush_interval_ms: 5e3,
    batch_request_timeout_ms: 9e4,
    batch_autostart: !0,
    hooks: {},
    record_block_class: new RegExp("^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$"),
    record_block_selector: "img, video",
    record_canvas: !1,
    record_collect_fonts: !1,
    record_idle_timeout_ms: 18e5,
    record_mask_text_class: new RegExp("^(mp-mask|fs-mask|amp-mask|rr-mask|ph-mask)$"),
    record_mask_text_selector: "*",
    record_max_ms: pi,
    record_min_ms: 0,
    record_sessions_percent: 0,
    recorder_src: "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js"
}
  , ls = !1
  , cs = function() {}
  , ds = function(e, t, n) {
    var r, o = n === ts ? Xa : Xa[n];
    if (o && 0 === Ua)
        r = o;
    else {
        if (o && !Ni.isArray(o))
            return void Di.error("You have already initialized " + n);
        r = new cs
    }
    if (r._cached_groups = {},
    r._init(e, t, n),
    r.people = new Fa,
    r.people._init(r),
    !r.get_config("skip_first_touch_marketing")) {
        var i = Ni.info.campaignParams(null)
          , a = {}
          , s = !1;
        Ni.each(i, (function(e, t) {
            a["initial_" + t] = e,
            e && (s = !0)
        }
        )),
        s && r.people.set_once(a)
    }
    return Fo.DEBUG = Fo.DEBUG || r.get_config("debug"),
    !Ni.isUndefined(o) && Ni.isArray(o) && (r._execute_array.call(r.people, o.people),
    r._execute_array(o)),
    r
};
cs.prototype.init = function(e, t, n) {
    if (Ni.isUndefined(n))
        this.report_error("You must name your new library: init(token, config, name)");
    else {
        if (n !== ts) {
            var r = ds(e, t, n);
            return Xa[n] = r,
            r._loaded(),
            r
        }
        this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet")
    }
}
,
cs.prototype._init = function(e, t, n) {
    t = t || {},
    this.__loaded = !0,
    this.config = {};
    var r = {};
    "api_payload_format"in t || (t.api_host || us.api_host).match(/\.mixpanel\.com/) && (r.api_payload_format = "json");
    if (this.set_config(Ni.extend({}, us, r, t, {
        name: n,
        token: e,
        callback_fn: (n === ts ? n : ts + "." + n) + "._jsc"
    })),
    this._jsc = es,
    this.__dom_loaded_queue = [],
    this.__request_queue = [],
    this.__disabled_events = [],
    this._flags = {
        disable_all_events: !1,
        identify_called: !1
    },
    this.request_batchers = {},
    this._batch_requests = this.get_config("batch_requests"),
    this._batch_requests)
        if (Ni.localStorage.is_supported(!0) && os) {
            if (this.init_batchers(),
            as && Do.addEventListener) {
                var o = Ni.bind((function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }
                ), this);
                Do.addEventListener("pagehide", (function(e) {
                    e.persisted && o()
                }
                )),
                Do.addEventListener("visibilitychange", (function() {
                    "hidden" === ki.visibilityState && o()
                }
                ))
            }
        } else
            this._batch_requests = !1,
            Di.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"),
            Ni.each(this.get_batcher_configs(), (function(e) {
                Di.log("Clearing batch queue " + e.queue_key),
                Ni.localStorage.remove(e.queue_key)
            }
            ));
    this.persistence = this.cookie = new Ka(this.config),
    this.unpersisted_superprops = {},
    this._gdpr_init();
    var i = Ni.UUID();
    this.get_distinct_id() || this.register_once({
        distinct_id: rs + i,
        $device_id: i
    }, "");
    var a = this.get_config("track_pageview");
    a && this._init_url_change_tracking(a),
    this.get_config("record_sessions_percent") > 0 && 100 * Math.random() <= this.get_config("record_sessions_percent") && this.start_session_recording()
}
,
cs.prototype.start_session_recording = ea((function() {
    if (Do.MutationObserver) {
        var e = Ni.bind((function() {
            this._recorder = this._recorder || new Do.__mp_recorder(this),
            this._recorder.startRecording()
        }
        ), this);
        Ni.isUndefined(Do.__mp_recorder) ? Ja(this.get_config("recorder_src"), e) : e()
    } else
        Di.critical("Browser does not support MutationObserver; skipping session recording")
}
)),
cs.prototype.stop_session_recording = function() {
    this._recorder ? this._recorder.stopRecording() : Di.critical("Session recorder module not loaded")
}
,
cs.prototype.get_session_recording_properties = function() {
    var e = {}
      , t = this._get_session_replay_id();
    return t && (e.$mp_replay_id = t),
    e
}
,
cs.prototype.get_session_replay_url = function() {
    var e = null
      , t = this._get_session_replay_id();
    t && (e = "https://mixpanel.com/projects/replay-redirect?" + Ni.HTTPBuildQuery({
        replay_id: t,
        distinct_id: this.get_distinct_id(),
        token: this.get_config("token")
    }));
    return e
}
,
cs.prototype._get_session_replay_id = function() {
    var e = null;
    return this._recorder && (e = this._recorder.replayId),
    e || null
}
,
cs.prototype._loaded = function() {
    if (this.get_config("loaded")(this),
    this._set_default_superprops(),
    this.people.set_once(this.persistence.get_referrer_info()),
    this.get_config("store_google") && this.get_config("stop_utm_persistence")) {
        var e = Ni.info.campaignParams(null);
        Ni.each(e, function(e, t) {
            this.unregister(t)
        }
        .bind(this))
    }
}
,
cs.prototype._set_default_superprops = function() {
    this.persistence.update_search_keyword(ki.referrer),
    this.get_config("store_google") && !this.get_config("stop_utm_persistence") && this.register(Ni.info.campaignParams()),
    this.get_config("save_referrer") && this.persistence.update_referrer_info(ki.referrer)
}
,
cs.prototype._dom_loaded = function() {
    Ni.each(this.__dom_loaded_queue, (function(e) {
        this._track_dom.apply(this, e)
    }
    ), this),
    this.has_opted_out_tracking() || Ni.each(this.__request_queue, (function(e) {
        this._send_request.apply(this, e)
    }
    ), this),
    delete this.__dom_loaded_queue,
    delete this.__request_queue
}
,
cs.prototype._track_dom = function(e, t) {
    if (this.get_config("img"))
        return this.report_error("You can't use DOM tracking functions with img = true."),
        !1;
    if (!ls)
        return this.__dom_loaded_queue.push([e, t]),
        !1;
    var n = (new e).init(this);
    return n.track.apply(n, t)
}
,
cs.prototype._init_url_change_tracking = function(e) {
    var t = "";
    if (this.track_pageview() && (t = Ni.info.currentUrl()),
    Ni.include(["full-url", "url-with-path-and-query-string", "url-with-path"], e)) {
        Do.addEventListener("popstate", (function() {
            Do.dispatchEvent(new Event("mp_locationchange"))
        }
        )),
        Do.addEventListener("hashchange", (function() {
            Do.dispatchEvent(new Event("mp_locationchange"))
        }
        ));
        var n = Do.history.pushState;
        "function" == typeof n && (Do.history.pushState = function(e, t, r) {
            n.call(Do.history, e, t, r),
            Do.dispatchEvent(new Event("mp_locationchange"))
        }
        );
        var r = Do.history.replaceState;
        "function" == typeof r && (Do.history.replaceState = function(e, t, n) {
            r.call(Do.history, e, t, n),
            Do.dispatchEvent(new Event("mp_locationchange"))
        }
        ),
        Do.addEventListener("mp_locationchange", function() {
            var n = Ni.info.currentUrl()
              , r = !1;
            ("full-url" === e ? r = n !== t : "url-with-path-and-query-string" === e ? r = n.split("#")[0] !== t.split("#")[0] : "url-with-path" === e && (r = n.split("#")[0].split("?")[0] !== t.split("#")[0].split("?")[0]),
            r) && (this.track_pageview() && (t = n))
        }
        .bind(this))
    }
}
,
cs.prototype._prepare_callback = function(e, t) {
    if (Ni.isUndefined(e))
        return null;
    if (os) {
        return function(n) {
            e(n, t)
        }
    }
    var n = this._jsc
      , r = "" + Math.floor(1e8 * Math.random())
      , o = this.get_config("callback_fn") + "[" + r + "]";
    return n[r] = function(o) {
        delete n[r],
        e(o, t)
    }
    ,
    o
}
,
cs.prototype._send_request = function(e, t, n, r) {
    var o = !0;
    if (is)
        return this.__request_queue.push(arguments),
        o;
    var i = {
        method: this.get_config("api_method"),
        transport: this.get_config("api_transport"),
        verbose: this.get_config("verbose")
    }
      , a = null;
    r || !Ni.isFunction(n) && "string" != typeof n || (r = n,
    n = null),
    n = Ni.extend(i, n || {}),
    os || (n.method = "GET");
    var s = "POST" === n.method
      , u = as && s && "sendbeacon" === n.transport.toLowerCase()
      , l = n.verbose;
    t.verbose && (l = !0),
    this.get_config("test") && (t.test = 1),
    l && (t.verbose = 1),
    this.get_config("img") && (t.img = 1),
    os || (r ? t.callback = r : (l || this.get_config("test")) && (t.callback = "(function(){})")),
    t.ip = this.get_config("ip") ? 1 : 0,
    t._ = (new Date).getTime().toString(),
    s && (a = "data=" + encodeURIComponent(t.data),
    delete t.data),
    e += "?" + Ni.HTTPBuildQuery(t);
    var c = this;
    if ("img"in t) {
        var d = ki.createElement("img");
        d.src = e,
        ki.body.appendChild(d)
    } else if (u) {
        try {
            o = as(e, a)
        } catch (y) {
            c.report_error(y),
            o = !1
        }
        try {
            r && r(o ? 1 : 0)
        } catch (y) {
            c.report_error(y)
        }
    } else if (os)
        try {
            var f = new XMLHttpRequest;
            f.open(n.method, e, !0);
            var p = this.get_config("xhr_headers");
            if (s && (p["Content-Type"] = "application/x-www-form-urlencoded"),
            Ni.each(p, (function(e, t) {
                f.setRequestHeader(t, e)
            }
            )),
            n.timeout_ms && void 0 !== f.timeout) {
                f.timeout = n.timeout_ms;
                var h = (new Date).getTime()
            }
            f.withCredentials = !0,
            f.onreadystatechange = function() {
                var e;
                if (4 === f.readyState)
                    if (200 === f.status) {
                        if (r)
                            if (l) {
                                var t;
                                try {
                                    t = Ni.JSONDecode(f.responseText)
                                } catch (y) {
                                    if (c.report_error(y),
                                    !n.ignore_json_errors)
                                        return;
                                    t = f.responseText
                                }
                                r(t)
                            } else
                                r(Number(f.responseText))
                    } else if (e = f.timeout && !f.status && (new Date).getTime() - h >= f.timeout ? "timeout" : "Bad HTTP status: " + f.status + " " + f.statusText,
                    c.report_error(e),
                    r)
                        if (l) {
                            var o = f.responseHeaders || {};
                            r({
                                status: 0,
                                httpStatusCode: f.status,
                                error: e,
                                retryAfter: o["Retry-After"]
                            })
                        } else
                            r(0)
            }
            ,
            f.send(a)
        } catch (y) {
            c.report_error(y),
            o = !1
        }
    else {
        var m = ki.createElement("script");
        m.type = "text/javascript",
        m.async = !0,
        m.defer = !0,
        m.src = e;
        var g = ki.getElementsByTagName("script")[0];
        g.parentNode.insertBefore(m, g)
    }
    return o
}
,
cs.prototype._execute_array = function(e) {
    var t, n = [], r = [], o = [];
    Ni.each(e, (function(e) {
        e && (t = e[0],
        Ni.isArray(t) ? o.push(e) : "function" == typeof e ? e.call(this) : Ni.isArray(e) && "alias" === t ? n.push(e) : Ni.isArray(e) && -1 !== t.indexOf("track") && "function" == typeof this[t] ? o.push(e) : r.push(e))
    }
    ), this);
    var i = function(e, t) {
        Ni.each(e, (function(e) {
            if (Ni.isArray(e[0])) {
                var n = t;
                Ni.each(e, (function(e) {
                    n = n[e[0]].apply(n, e.slice(1))
                }
                ))
            } else
                this[e[0]].apply(this, e.slice(1))
        }
        ), t)
    };
    i(n, this),
    i(r, this),
    i(o, this)
}
,
cs.prototype.are_batchers_initialized = function() {
    return !!this.request_batchers.events
}
,
cs.prototype.get_batcher_configs = function() {
    var e = "__mpq_" + this.get_config("token")
      , t = this.get_config("api_routes");
    return this._batcher_configs = this._batcher_configs || {
        events: {
            type: "events",
            endpoint: "/" + t.track,
            queue_key: e + "_ev"
        },
        people: {
            type: "people",
            endpoint: "/" + t.engage,
            queue_key: e + "_pp"
        },
        groups: {
            type: "groups",
            endpoint: "/" + t.groups,
            queue_key: e + "_gr"
        }
    },
    this._batcher_configs
}
,
cs.prototype.init_batchers = function() {
    if (!this.are_batchers_initialized()) {
        var e = Ni.bind((function(e) {
            return new ya(e.queue_key,{
                libConfig: this.config,
                errorReporter: this.get_config("error_reporter"),
                sendRequestFunc: Ni.bind((function(t, n, r) {
                    this._send_request(this.get_config("api_host") + e.endpoint, this._encode_data_for_request(t), n, this._prepare_callback(r, t))
                }
                ), this),
                beforeSendHook: Ni.bind((function(t) {
                    return this._run_hook("before_send_" + e.type, t)
                }
                ), this),
                stopAllBatchingFunc: Ni.bind(this.stop_batch_senders, this),
                usePersistence: !0
            })
        }
        ), this)
          , t = this.get_batcher_configs();
        this.request_batchers = {
            events: e(t.events),
            people: e(t.people),
            groups: e(t.groups)
        }
    }
    this.get_config("batch_autostart") && this.start_batch_senders()
}
,
cs.prototype.start_batch_senders = function() {
    this._batchers_were_started = !0,
    this.are_batchers_initialized() && (this._batch_requests = !0,
    Ni.each(this.request_batchers, (function(e) {
        e.start()
    }
    )))
}
,
cs.prototype.stop_batch_senders = function() {
    this._batch_requests = !1,
    Ni.each(this.request_batchers, (function(e) {
        e.stop(),
        e.clear()
    }
    ))
}
,
cs.prototype.push = function(e) {
    this._execute_array([e])
}
,
cs.prototype.disable = function(e) {
    void 0 === e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
}
,
cs.prototype._encode_data_for_request = function(e) {
    var t = Ni.JSONEncode(e);
    return this.get_config("api_payload_format") === ns && (t = Ni.base64Encode(t)),
    {
        data: t
    }
}
,
cs.prototype._track_or_batch = function(e, t) {
    var n = Ni.truncate(e.data, 255)
      , r = e.endpoint
      , o = e.batcher
      , i = e.should_send_immediately
      , a = e.send_request_options || {};
    t = t || es;
    var s = !0
      , u = Ni.bind((function() {
        return a.skip_hooks || (n = this._run_hook("before_send_" + e.type, n)),
        n ? (Di.log("MIXPANEL REQUEST:"),
        Di.log(n),
        this._send_request(r, this._encode_data_for_request(n), a, this._prepare_callback(t, n))) : null
    }
    ), this);
    return this._batch_requests && !i ? o.enqueue(n).then((function(e) {
        e ? t(1, n) : u()
    }
    )) : s = u(),
    s && n
}
,
cs.prototype.track = ea((function(e, t, n, r) {
    r || "function" != typeof n || (r = n,
    n = null);
    var o = (n = n || {}).transport;
    o && (n.transport = o);
    var i = n.send_immediately;
    if ("function" != typeof r && (r = es),
    Ni.isUndefined(e))
        this.report_error("No event name provided to mixpanel.track");
    else {
        if (!this._event_is_disabled(e)) {
            (t = Ni.extend({}, t)).token = this.get_config("token");
            var a = this.persistence.remove_event_timer(e);
            if (!Ni.isUndefined(a)) {
                var s = (new Date).getTime() - a;
                t.$duration = parseFloat((s / 1e3).toFixed(3))
            }
            this._set_default_superprops();
            var u = this.get_config("track_marketing") ? Ni.info.marketingParams() : {};
            t = Ni.extend({}, Ni.info.properties({
                mp_loader: this.get_config("mp_loader")
            }), u, this.persistence.properties(), this.unpersisted_superprops, this.get_session_recording_properties(), t);
            var l = this.get_config("property_blacklist");
            Ni.isArray(l) ? Ni.each(l, (function(e) {
                delete t[e]
            }
            )) : this.report_error("Invalid value for property_blacklist config: " + l);
            var c = {
                event: e,
                properties: t
            };
            return this._track_or_batch({
                type: "events",
                data: c,
                endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes").track,
                batcher: this.request_batchers.events,
                should_send_immediately: i,
                send_request_options: n
            }, r)
        }
        r(0)
    }
}
)),
cs.prototype.set_group = ea((function(e, t, n) {
    Ni.isArray(t) || (t = [t]);
    var r = {};
    return r[e] = t,
    this.register(r),
    this.people.set(e, t, n)
}
)),
cs.prototype.add_group = ea((function(e, t, n) {
    var r = this.get_property(e)
      , o = {};
    return void 0 === r ? (o[e] = [t],
    this.register(o)) : -1 === r.indexOf(t) && (r.push(t),
    o[e] = r,
    this.register(o)),
    this.people.union(e, t, n)
}
)),
cs.prototype.remove_group = ea((function(e, t, n) {
    var r = this.get_property(e);
    if (void 0 !== r) {
        var o = r.indexOf(t);
        o > -1 && (r.splice(o, 1),
        this.register({
            group_key: r
        })),
        0 === r.length && this.unregister(e)
    }
    return this.people.remove(e, t, n)
}
)),
cs.prototype.track_with_groups = ea((function(e, t, n, r) {
    var o = Ni.extend({}, t || {});
    return Ni.each(n, (function(e, t) {
        null != e && (o[t] = e)
    }
    )),
    this.track(e, o, r)
}
)),
cs.prototype._create_map_key = function(e, t) {
    return e + "_" + JSON.stringify(t)
}
,
cs.prototype._remove_group_from_cache = function(e, t) {
    delete this._cached_groups[this._create_map_key(e, t)]
}
,
cs.prototype.get_group = function(e, t) {
    var n = this._create_map_key(e, t)
      , r = this._cached_groups[n];
    return void 0 !== r && r._group_key === e && r._group_id === t || ((r = new Aa)._init(this, e, t),
    this._cached_groups[n] = r),
    r
}
,
cs.prototype.track_pageview = ea((function(e, t) {
    "object" != typeof e && (e = {});
    var n = (t = t || {}).event_name || "$mp_web_page_view"
      , r = Ni.extend(Ni.info.mpPageViewProperties(), Ni.info.campaignParams(), Ni.info.clickParams())
      , o = Ni.extend({}, r, e);
    return this.track(n, o)
}
)),
cs.prototype.track_links = function() {
    return this._track_dom.call(this, Ca, arguments)
}
,
cs.prototype.track_forms = function() {
    return this._track_dom.call(this, Ta, arguments)
}
,
cs.prototype.time_event = function(e) {
    Ni.isUndefined(e) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e) || this.persistence.set_event_timer(e, (new Date).getTime())
}
;
var fs = {
    persistent: !0
}
  , ps = function(e) {
    var t;
    return t = Ni.isObject(e) ? e : Ni.isUndefined(e) ? {} : {
        days: e
    },
    Ni.extend({}, fs, t)
};
cs.prototype.register = function(e, t) {
    var n = ps(t);
    n.persistent ? this.persistence.register(e, n.days) : Ni.extend(this.unpersisted_superprops, e)
}
,
cs.prototype.register_once = function(e, t, n) {
    var r = ps(n);
    r.persistent ? this.persistence.register_once(e, t, r.days) : (void 0 === t && (t = "None"),
    Ni.each(e, (function(e, n) {
        this.unpersisted_superprops.hasOwnProperty(n) && this.unpersisted_superprops[n] !== t || (this.unpersisted_superprops[n] = e)
    }
    ), this))
}
,
cs.prototype.unregister = function(e, t) {
    (t = ps(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
}
,
cs.prototype._register_single = function(e, t) {
    var n = {};
    n[e] = t,
    this.register(n)
}
,
cs.prototype.identify = function(e, t, n, r, o, i, a, s) {
    var u = this.get_distinct_id();
    if (e && u !== e) {
        if ("string" == typeof e && 0 === e.indexOf(rs))
            return this.report_error("distinct_id cannot have $device: prefix"),
            -1;
        this.register({
            $user_id: e
        })
    }
    if (!this.get_property("$device_id")) {
        var l = u;
        this.register_once({
            $had_persisted_distinct_id: !0,
            $device_id: l
        }, "")
    }
    e !== u && e !== this.get_property(Qa) && (this.unregister(Qa),
    this.register({
        distinct_id: e
    })),
    this._flags.identify_called = !0,
    this.people._flush(t, n, r, o, i, a, s),
    e !== u && this.track("$identify", {
        distinct_id: e,
        $anon_distinct_id: u
    }, {
        skip_hooks: !0
    })
}
,
cs.prototype.reset = function() {
    this.persistence.clear(),
    this._flags.identify_called = !1;
    var e = Ni.UUID();
    this.register_once({
        distinct_id: rs + e,
        $device_id: e
    }, "")
}
,
cs.prototype.get_distinct_id = function() {
    return this.get_property("distinct_id")
}
,
cs.prototype.alias = function(e, t) {
    if (e === this.get_property(Ha))
        return this.report_error("Attempting to create alias for existing People user - aborting."),
        -2;
    var n = this;
    return Ni.isUndefined(t) && (t = this.get_distinct_id()),
    e !== t ? (this._register_single(Qa, e),
    this.track("$create_alias", {
        alias: e,
        distinct_id: t
    }, {
        skip_hooks: !0
    }, (function() {
        n.identify(e)
    }
    ))) : (this.report_error("alias matches current distinct_id - skipping api call."),
    this.identify(e),
    -1)
}
,
cs.prototype.name_tag = function(e) {
    this._register_single("mp_name_tag", e)
}
,
cs.prototype.set_config = function(e) {
    Ni.isObject(e) && (Ni.extend(this.config, e),
    e.batch_size && Ni.each(this.request_batchers, (function(e) {
        e.resetBatchSize()
    }
    )),
    this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
    this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
    this.persistence && this.persistence.update_config(this.config),
    Fo.DEBUG = Fo.DEBUG || this.get_config("debug"))
}
,
cs.prototype.get_config = function(e) {
    return this.config[e]
}
,
cs.prototype._run_hook = function(e) {
    var t = (this.config.hooks[e] || Za).apply(this, vi.call(arguments, 1));
    return void 0 === t && (this.report_error(e + " hook did not return a value"),
    t = null),
    t
}
,
cs.prototype.get_property = function(e) {
    return this.persistence.load_prop([e])
}
,
cs.prototype.toString = function() {
    var e = this.get_config("name");
    return e !== ts && (e = ts + "." + e),
    e
}
,
cs.prototype._event_is_disabled = function(e) {
    return Ni.isBlockedUA(Ci) || this._flags.disable_all_events || Ni.include(this.__disabled_events, e)
}
,
cs.prototype._gdpr_init = function() {
    "localStorage" === this.get_config("opt_out_tracking_persistence_type") && Ni.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
        persistence_type: "cookie"
    }) && this.opt_in_tracking({
        enable_persistence: !1
    }),
    !this.has_opted_out_tracking() && this.has_opted_out_tracking({
        persistence_type: "cookie"
    }) && this.opt_out_tracking({
        clear_persistence: !1
    }),
    this.clear_opt_in_out_tracking({
        persistence_type: "cookie",
        enable_persistence: !1
    })),
    this.has_opted_out_tracking() ? this._gdpr_update_persistence({
        clear_persistence: !0
    }) : this.has_opted_in_tracking() || !this.get_config("opt_out_tracking_by_default") && !Ni.cookie.get("mp_optout") || (Ni.cookie.remove("mp_optout"),
    this.opt_out_tracking({
        clear_persistence: this.get_config("opt_out_persistence_by_default")
    }))
}
,
cs.prototype._gdpr_update_persistence = function(e) {
    var t;
    if (e && e.clear_persistence)
        t = !0;
    else {
        if (!e || !e.enable_persistence)
            return;
        t = !1
    }
    this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t),
    t ? this.stop_batch_senders() : this._batchers_were_started && this.start_batch_senders()
}
,
cs.prototype._gdpr_call_func = function(e, t) {
    return t = Ni.extend({
        track: Ni.bind(this.track, this),
        persistence_type: this.get_config("opt_out_tracking_persistence_type"),
        cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
        cookie_expiration: this.get_config("cookie_expiration"),
        cross_site_cookie: this.get_config("cross_site_cookie"),
        cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
        cookie_domain: this.get_config("cookie_domain"),
        secure_cookie: this.get_config("secure_cookie"),
        ignore_dnt: this.get_config("ignore_dnt")
    }, t),
    Ni.localStorage.is_supported() || (t.persistence_type = "cookie"),
    e(this.get_config("token"), {
        track: t.track,
        trackEventName: t.track_event_name,
        trackProperties: t.track_properties,
        persistenceType: t.persistence_type,
        persistencePrefix: t.cookie_prefix,
        cookieDomain: t.cookie_domain,
        cookieExpiration: t.cookie_expiration,
        crossSiteCookie: t.cross_site_cookie,
        crossSubdomainCookie: t.cross_subdomain_cookie,
        secureCookie: t.secure_cookie,
        ignoreDnt: t.ignore_dnt
    })
}
,
cs.prototype.opt_in_tracking = function(e) {
    e = Ni.extend({
        enable_persistence: !0
    }, e),
    this._gdpr_call_func(Ki, e),
    this._gdpr_update_persistence(e)
}
,
cs.prototype.opt_out_tracking = function(e) {
    (e = Ni.extend({
        clear_persistence: !0,
        delete_user: !0
    }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(),
    this.people.clear_charges()),
    this._gdpr_call_func(Xi, e),
    this._gdpr_update_persistence(e)
}
,
cs.prototype.has_opted_in_tracking = function(e) {
    return this._gdpr_call_func(Ji, e)
}
,
cs.prototype.has_opted_out_tracking = function(e) {
    return this._gdpr_call_func(Zi, e)
}
,
cs.prototype.clear_opt_in_out_tracking = function(e) {
    e = Ni.extend({
        enable_persistence: !0
    }, e),
    this._gdpr_call_func(ra, e),
    this._gdpr_update_persistence(e)
}
,
cs.prototype.report_error = function(e, t) {
    Di.error.apply(Di.error, arguments);
    try {
        t || e instanceof Error || (e = new Error(e)),
        this.get_config("error_reporter")(e, t)
    } catch (n) {
        Di.error(n)
    }
}
,
cs.prototype.init = cs.prototype.init,
cs.prototype.reset = cs.prototype.reset,
cs.prototype.disable = cs.prototype.disable,
cs.prototype.time_event = cs.prototype.time_event,
cs.prototype.track = cs.prototype.track,
cs.prototype.track_links = cs.prototype.track_links,
cs.prototype.track_forms = cs.prototype.track_forms,
cs.prototype.track_pageview = cs.prototype.track_pageview,
cs.prototype.register = cs.prototype.register,
cs.prototype.register_once = cs.prototype.register_once,
cs.prototype.unregister = cs.prototype.unregister,
cs.prototype.identify = cs.prototype.identify,
cs.prototype.alias = cs.prototype.alias,
cs.prototype.name_tag = cs.prototype.name_tag,
cs.prototype.set_config = cs.prototype.set_config,
cs.prototype.get_config = cs.prototype.get_config,
cs.prototype.get_property = cs.prototype.get_property,
cs.prototype.get_distinct_id = cs.prototype.get_distinct_id,
cs.prototype.toString = cs.prototype.toString,
cs.prototype.opt_out_tracking = cs.prototype.opt_out_tracking,
cs.prototype.opt_in_tracking = cs.prototype.opt_in_tracking,
cs.prototype.has_opted_out_tracking = cs.prototype.has_opted_out_tracking,
cs.prototype.has_opted_in_tracking = cs.prototype.has_opted_in_tracking,
cs.prototype.clear_opt_in_out_tracking = cs.prototype.clear_opt_in_out_tracking,
cs.prototype.get_group = cs.prototype.get_group,
cs.prototype.set_group = cs.prototype.set_group,
cs.prototype.add_group = cs.prototype.add_group,
cs.prototype.remove_group = cs.prototype.remove_group,
cs.prototype.track_with_groups = cs.prototype.track_with_groups,
cs.prototype.start_batch_senders = cs.prototype.start_batch_senders,
cs.prototype.stop_batch_senders = cs.prototype.stop_batch_senders,
cs.prototype.start_session_recording = cs.prototype.start_session_recording,
cs.prototype.stop_session_recording = cs.prototype.stop_session_recording,
cs.prototype.get_session_recording_properties = cs.prototype.get_session_recording_properties,
cs.prototype.get_session_replay_url = cs.prototype.get_session_replay_url,
cs.prototype.DEFAULT_API_ROUTES = ss,
Ka.prototype.properties = Ka.prototype.properties,
Ka.prototype.update_search_keyword = Ka.prototype.update_search_keyword,
Ka.prototype.update_referrer_info = Ka.prototype.update_referrer_info,
Ka.prototype.get_cross_subdomain = Ka.prototype.get_cross_subdomain,
Ka.prototype.clear = Ka.prototype.clear;
var hs = {}
  , ms = function() {
    Xa.init = function(e, t, n) {
        if (n)
            return Xa[n] || (Xa[n] = hs[n] = ds(e, t, n),
            Xa[n]._loaded()),
            Xa[n];
        var r = Xa;
        hs[ts] ? r = hs[ts] : e && ((r = ds(e, t, ts))._loaded(),
        hs[ts] = r),
        Xa = r,
        1 === Ua && (Do[ts] = Xa),
        Ni.each(hs, (function(e, t) {
            t !== ts && (Xa[t] = e)
        }
        )),
        Xa._ = Ni
    }
};
var gs = (Ja = function(e, t) {
    t()
}
,
Ua = 0,
Xa = new cs,
ms(),
Xa.init(),
function() {
    function e() {
        e.done || (e.done = !0,
        ls = !0,
        is = !1,
        Ni.each(hs, (function(e) {
            e._dom_loaded()
        }
        )))
    }
    if (ki.addEventListener)
        "complete" === ki.readyState ? e() : ki.addEventListener("DOMContentLoaded", e, !1);
    else if (ki.attachEvent) {
        ki.attachEvent("onreadystatechange", e);
        var t = !1;
        try {
            t = null === Do.frameElement
        } catch (n) {}
        ki.documentElement.doScroll && t && function t() {
            try {
                ki.documentElement.doScroll("left")
            } catch (n) {
                return void setTimeout(t, 1)
            }
            e()
        }()
    }
    Ni.register_event(Do, "load", e, !0)
}(),
Xa);
const ys = !0
  , vs = "https://data.wegic.ai"
  , bs = () => window.__jsServerUrl__ ? window.__jsServerUrl__ : "https://wegic.ai/api/onepage";
ne.getParser(window.navigator.userAgent),
gs.init("c0c9107e228cebac15c1fd3f7bf7c911", {
    track_pageview: !1
});
let _s = !1;
function ws(e, t) {
    return l(this, null, (function*() {
        yield function() {
            return l(this, null, (function*() {
                _s || (En.init({
                    actionToThemeMap: Cn,
                    businessType: "wegic",
                    userId: "",
                    isOnline: ys,
                    serverUrl: vs
                }),
                _s = !0)
            }
            ))
        }();
        const n = t;
        Tn[e] && gs.track(e, n),
        ( (...e) => {
            En.collect(...e)
        }
        )(e, n)
    }
    ))
}
export {x as R, h as a, pn as b, T as c, ws as d, E as e, L as f, m as g, vs as h, bs as i, C as j, D as k, A as l, k as r};
//# sourceMappingURL=chunk-index-VBe6ZgAS.js.map
