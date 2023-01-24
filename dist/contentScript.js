var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function u_(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
function l_(v) {
  if (v.__esModule)
    return v;
  var m = v.default;
  if (typeof m == "function") {
    var h = function R() {
      if (this instanceof R) {
        var O = [null];
        O.push.apply(O, arguments);
        var A = Function.bind.apply(m, O);
        return new A();
      }
      return m.apply(this, arguments);
    };
    h.prototype = m.prototype;
  } else
    h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(v).forEach(function(R) {
    var O = Object.getOwnPropertyDescriptor(v, R);
    Object.defineProperty(h, R, O.get ? O : {
      enumerable: !0,
      get: function() {
        return v[R];
      }
    });
  }), h;
}
var sy = {}, lD = {
  get exports() {
    return sy;
  },
  set exports(v) {
    sy = v;
  }
}, sp = {}, Tt = {}, oD = {
  get exports() {
    return Tt;
  },
  set exports(v) {
    Tt = v;
  }
}, Ft = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VR;
function sD() {
  if (VR)
    return Ft;
  VR = 1;
  var v = Symbol.for("react.element"), m = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), E = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), N = Symbol.iterator;
  function P(b) {
    return b === null || typeof b != "object" ? null : (b = N && b[N] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var Y = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, oe = {};
  function ee(b, G, we) {
    this.props = b, this.context = G, this.refs = oe, this.updater = we || Y;
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(b, G) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, G, "setState");
  }, ee.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function de() {
  }
  de.prototype = ee.prototype;
  function ue(b, G, we) {
    this.props = b, this.context = G, this.refs = oe, this.updater = we || Y;
  }
  var Ee = ue.prototype = new de();
  Ee.constructor = ue, q(Ee, ee.prototype), Ee.isPureReactComponent = !0;
  var be = Array.isArray, pe = Object.prototype.hasOwnProperty, Ve = { current: null }, me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(b, G, we) {
    var et, qe = {}, Rt = null, ht = null;
    if (G != null)
      for (et in G.ref !== void 0 && (ht = G.ref), G.key !== void 0 && (Rt = "" + G.key), G)
        pe.call(G, et) && !me.hasOwnProperty(et) && (qe[et] = G[et]);
    var yt = arguments.length - 2;
    if (yt === 1)
      qe.children = we;
    else if (1 < yt) {
      for (var vt = Array(yt), $t = 0; $t < yt; $t++)
        vt[$t] = arguments[$t + 2];
      qe.children = vt;
    }
    if (b && b.defaultProps)
      for (et in yt = b.defaultProps, yt)
        qe[et] === void 0 && (qe[et] = yt[et]);
    return { $$typeof: v, type: b, key: Rt, ref: ht, props: qe, _owner: Ve.current };
  }
  function Ye(b, G) {
    return { $$typeof: v, type: b.type, key: G, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function se(b) {
    return typeof b == "object" && b !== null && b.$$typeof === v;
  }
  function ye(b) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(we) {
      return G[we];
    });
  }
  var Fe = /\/+/g;
  function re(b, G) {
    return typeof b == "object" && b !== null && b.key != null ? ye("" + b.key) : G.toString(36);
  }
  function ae(b, G, we, et, qe) {
    var Rt = typeof b;
    (Rt === "undefined" || Rt === "boolean") && (b = null);
    var ht = !1;
    if (b === null)
      ht = !0;
    else
      switch (Rt) {
        case "string":
        case "number":
          ht = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case v:
            case m:
              ht = !0;
          }
      }
    if (ht)
      return ht = b, qe = qe(ht), b = et === "" ? "." + re(ht, 0) : et, be(qe) ? (we = "", b != null && (we = b.replace(Fe, "$&/") + "/"), ae(qe, G, we, "", function($t) {
        return $t;
      })) : qe != null && (se(qe) && (qe = Ye(qe, we + (!qe.key || ht && ht.key === qe.key ? "" : ("" + qe.key).replace(Fe, "$&/") + "/") + b)), G.push(qe)), 1;
    if (ht = 0, et = et === "" ? "." : et + ":", be(b))
      for (var yt = 0; yt < b.length; yt++) {
        Rt = b[yt];
        var vt = et + re(Rt, yt);
        ht += ae(Rt, G, we, vt, qe);
      }
    else if (vt = P(b), typeof vt == "function")
      for (b = vt.call(b), yt = 0; !(Rt = b.next()).done; )
        Rt = Rt.value, vt = et + re(Rt, yt++), ht += ae(Rt, G, we, vt, qe);
    else if (Rt === "object")
      throw G = String(b), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function Le(b, G, we) {
    if (b == null)
      return b;
    var et = [], qe = 0;
    return ae(b, et, "", "", function(Rt) {
      return G.call(we, Rt, qe++);
    }), et;
  }
  function _e(b) {
    if (b._status === -1) {
      var G = b._result;
      G = G(), G.then(function(we) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = we);
      }, function(we) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = we);
      }), b._status === -1 && (b._status = 0, b._result = G);
    }
    if (b._status === 1)
      return b._result.default;
    throw b._result;
  }
  var le = { current: null }, te = { transition: null }, xe = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: te, ReactCurrentOwner: Ve };
  return Ft.Children = { map: Le, forEach: function(b, G, we) {
    Le(b, function() {
      G.apply(this, arguments);
    }, we);
  }, count: function(b) {
    var G = 0;
    return Le(b, function() {
      G++;
    }), G;
  }, toArray: function(b) {
    return Le(b, function(G) {
      return G;
    }) || [];
  }, only: function(b) {
    if (!se(b))
      throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, Ft.Component = ee, Ft.Fragment = h, Ft.Profiler = O, Ft.PureComponent = ue, Ft.StrictMode = R, Ft.Suspense = H, Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, Ft.cloneElement = function(b, G, we) {
    if (b == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var et = q({}, b.props), qe = b.key, Rt = b.ref, ht = b._owner;
    if (G != null) {
      if (G.ref !== void 0 && (Rt = G.ref, ht = Ve.current), G.key !== void 0 && (qe = "" + G.key), b.type && b.type.defaultProps)
        var yt = b.type.defaultProps;
      for (vt in G)
        pe.call(G, vt) && !me.hasOwnProperty(vt) && (et[vt] = G[vt] === void 0 && yt !== void 0 ? yt[vt] : G[vt]);
    }
    var vt = arguments.length - 2;
    if (vt === 1)
      et.children = we;
    else if (1 < vt) {
      yt = Array(vt);
      for (var $t = 0; $t < vt; $t++)
        yt[$t] = arguments[$t + 2];
      et.children = yt;
    }
    return { $$typeof: v, type: b.type, key: qe, ref: Rt, props: et, _owner: ht };
  }, Ft.createContext = function(b) {
    return b = { $$typeof: E, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: A, _context: b }, b.Consumer = b;
  }, Ft.createElement = Xe, Ft.createFactory = function(b) {
    var G = Xe.bind(null, b);
    return G.type = b, G;
  }, Ft.createRef = function() {
    return { current: null };
  }, Ft.forwardRef = function(b) {
    return { $$typeof: W, render: b };
  }, Ft.isValidElement = se, Ft.lazy = function(b) {
    return { $$typeof: he, _payload: { _status: -1, _result: b }, _init: _e };
  }, Ft.memo = function(b, G) {
    return { $$typeof: B, type: b, compare: G === void 0 ? null : G };
  }, Ft.startTransition = function(b) {
    var G = te.transition;
    te.transition = {};
    try {
      b();
    } finally {
      te.transition = G;
    }
  }, Ft.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ft.useCallback = function(b, G) {
    return le.current.useCallback(b, G);
  }, Ft.useContext = function(b) {
    return le.current.useContext(b);
  }, Ft.useDebugValue = function() {
  }, Ft.useDeferredValue = function(b) {
    return le.current.useDeferredValue(b);
  }, Ft.useEffect = function(b, G) {
    return le.current.useEffect(b, G);
  }, Ft.useId = function() {
    return le.current.useId();
  }, Ft.useImperativeHandle = function(b, G, we) {
    return le.current.useImperativeHandle(b, G, we);
  }, Ft.useInsertionEffect = function(b, G) {
    return le.current.useInsertionEffect(b, G);
  }, Ft.useLayoutEffect = function(b, G) {
    return le.current.useLayoutEffect(b, G);
  }, Ft.useMemo = function(b, G) {
    return le.current.useMemo(b, G);
  }, Ft.useReducer = function(b, G, we) {
    return le.current.useReducer(b, G, we);
  }, Ft.useRef = function(b) {
    return le.current.useRef(b);
  }, Ft.useState = function(b) {
    return le.current.useState(b);
  }, Ft.useSyncExternalStore = function(b, G, we) {
    return le.current.useSyncExternalStore(b, G, we);
  }, Ft.useTransition = function() {
    return le.current.useTransition();
  }, Ft.version = "18.2.0", Ft;
}
var mp = {}, cD = {
  get exports() {
    return mp;
  },
  set exports(v) {
    mp = v;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BR;
function fD() {
  return BR || (BR = 1, function(v, m) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = "18.2.0", R = Symbol.for("react.element"), O = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), B = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), ee = Symbol.iterator, de = "@@iterator";
      function ue(g) {
        if (g === null || typeof g != "object")
          return null;
        var w = ee && g[ee] || g[de];
        return typeof w == "function" ? w : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, be = {
        transition: null
      }, pe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, me = {}, Xe = null;
      function Ye(g) {
        Xe = g;
      }
      me.setExtraStackFrame = function(g) {
        Xe = g;
      }, me.getCurrentStack = null, me.getStackAddendum = function() {
        var g = "";
        Xe && (g += Xe);
        var w = me.getCurrentStack;
        return w && (g += w() || ""), g;
      };
      var se = !1, ye = !1, Fe = !1, re = !1, ae = !1, Le = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: be,
        ReactCurrentOwner: Ve
      };
      Le.ReactDebugCurrentFrame = me, Le.ReactCurrentActQueue = pe;
      function _e(g) {
        {
          for (var w = arguments.length, $ = new Array(w > 1 ? w - 1 : 0), Q = 1; Q < w; Q++)
            $[Q - 1] = arguments[Q];
          te("warn", g, $);
        }
      }
      function le(g) {
        {
          for (var w = arguments.length, $ = new Array(w > 1 ? w - 1 : 0), Q = 1; Q < w; Q++)
            $[Q - 1] = arguments[Q];
          te("error", g, $);
        }
      }
      function te(g, w, $) {
        {
          var Q = Le.ReactDebugCurrentFrame, Ce = Q.getStackAddendum();
          Ce !== "" && (w += "%s", $ = $.concat([Ce]));
          var it = $.map(function(Me) {
            return String(Me);
          });
          it.unshift("Warning: " + w), Function.prototype.apply.call(console[g], console, it);
        }
      }
      var xe = {};
      function b(g, w) {
        {
          var $ = g.constructor, Q = $ && ($.displayName || $.name) || "ReactClass", Ce = Q + "." + w;
          if (xe[Ce])
            return;
          le("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, Q), xe[Ce] = !0;
        }
      }
      var G = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(g, w, $) {
          b(g, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(g, w, $, Q) {
          b(g, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(g, w, $, Q) {
          b(g, "setState");
        }
      }, we = Object.assign, et = {};
      Object.freeze(et);
      function qe(g, w, $) {
        this.props = g, this.context = w, this.refs = et, this.updater = $ || G;
      }
      qe.prototype.isReactComponent = {}, qe.prototype.setState = function(g, w) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, w, "setState");
      }, qe.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var Rt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(g, w) {
          Object.defineProperty(qe.prototype, g, {
            get: function() {
              _e("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var yt in Rt)
          Rt.hasOwnProperty(yt) && ht(yt, Rt[yt]);
      }
      function vt() {
      }
      vt.prototype = qe.prototype;
      function $t(g, w, $) {
        this.props = g, this.context = w, this.refs = et, this.updater = $ || G;
      }
      var mr = $t.prototype = new vt();
      mr.constructor = $t, we(mr, qe.prototype), mr.isPureReactComponent = !0;
      function Zn() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var ur = Array.isArray;
      function pn(g) {
        return ur(g);
      }
      function Kn(g) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, $ = w && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return $;
        }
      }
      function Un(g) {
        try {
          return xn(g), !1;
        } catch {
          return !0;
        }
      }
      function xn(g) {
        return "" + g;
      }
      function gn(g) {
        if (Un(g))
          return le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(g)), xn(g);
      }
      function Dr(g, w, $) {
        var Q = g.displayName;
        if (Q)
          return Q;
        var Ce = w.displayName || w.name || "";
        return Ce !== "" ? $ + "(" + Ce + ")" : $;
      }
      function bt(g) {
        return g.displayName || "Context";
      }
      function Mt(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case A:
            return "Fragment";
          case O:
            return "Portal";
          case W:
            return "Profiler";
          case E:
            return "StrictMode";
          case N:
            return "Suspense";
          case P:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case B:
              var w = g;
              return bt(w) + ".Consumer";
            case H:
              var $ = g;
              return bt($._context) + ".Provider";
            case he:
              return Dr(g, g.render, "ForwardRef");
            case Y:
              var Q = g.displayName || null;
              return Q !== null ? Q : Mt(g.type) || "Memo";
            case q: {
              var Ce = g, it = Ce._payload, Me = Ce._init;
              try {
                return Mt(Me(it));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var _t = Object.prototype.hasOwnProperty, sn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Nt, On, an;
      an = {};
      function Sn(g) {
        if (_t.call(g, "ref")) {
          var w = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function un(g) {
        if (_t.call(g, "key")) {
          var w = Object.getOwnPropertyDescriptor(g, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function Dn(g, w) {
        var $ = function() {
          Nt || (Nt = !0, le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        $.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: $,
          configurable: !0
        });
      }
      function Jn(g, w) {
        var $ = function() {
          On || (On = !0, le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        $.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: $,
          configurable: !0
        });
      }
      function lr(g) {
        if (typeof g.ref == "string" && Ve.current && g.__self && Ve.current.stateNode !== g.__self) {
          var w = Mt(Ve.current.type);
          an[w] || (le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, g.ref), an[w] = !0);
        }
      }
      var Te = function(g, w, $, Q, Ce, it, Me) {
        var rt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: R,
          // Built-in properties that belong on the element
          type: g,
          key: w,
          ref: $,
          props: Me,
          // Record the component responsible for creating this element.
          _owner: it
        };
        return rt._store = {}, Object.defineProperty(rt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(rt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q
        }), Object.defineProperty(rt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ce
        }), Object.freeze && (Object.freeze(rt.props), Object.freeze(rt)), rt;
      };
      function We(g, w, $) {
        var Q, Ce = {}, it = null, Me = null, rt = null, xt = null;
        if (w != null) {
          Sn(w) && (Me = w.ref, lr(w)), un(w) && (gn(w.key), it = "" + w.key), rt = w.__self === void 0 ? null : w.__self, xt = w.__source === void 0 ? null : w.__source;
          for (Q in w)
            _t.call(w, Q) && !sn.hasOwnProperty(Q) && (Ce[Q] = w[Q]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          Ce.children = $;
        else if (Bt > 1) {
          for (var cn = Array(Bt), rn = 0; rn < Bt; rn++)
            cn[rn] = arguments[rn + 2];
          Object.freeze && Object.freeze(cn), Ce.children = cn;
        }
        if (g && g.defaultProps) {
          var fn = g.defaultProps;
          for (Q in fn)
            Ce[Q] === void 0 && (Ce[Q] = fn[Q]);
        }
        if (it || Me) {
          var yn = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          it && Dn(Ce, yn), Me && Jn(Ce, yn);
        }
        return Te(g, it, Me, rt, xt, Ve.current, Ce);
      }
      function gt(g, w) {
        var $ = Te(g.type, w, g.ref, g._self, g._source, g._owner, g.props);
        return $;
      }
      function At(g, w, $) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var Q, Ce = we({}, g.props), it = g.key, Me = g.ref, rt = g._self, xt = g._source, Bt = g._owner;
        if (w != null) {
          Sn(w) && (Me = w.ref, Bt = Ve.current), un(w) && (gn(w.key), it = "" + w.key);
          var cn;
          g.type && g.type.defaultProps && (cn = g.type.defaultProps);
          for (Q in w)
            _t.call(w, Q) && !sn.hasOwnProperty(Q) && (w[Q] === void 0 && cn !== void 0 ? Ce[Q] = cn[Q] : Ce[Q] = w[Q]);
        }
        var rn = arguments.length - 2;
        if (rn === 1)
          Ce.children = $;
        else if (rn > 1) {
          for (var fn = Array(rn), yn = 0; yn < rn; yn++)
            fn[yn] = arguments[yn + 2];
          Ce.children = fn;
        }
        return Te(g.type, it, Me, rt, xt, Bt, Ce);
      }
      function qt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === R;
      }
      var Vn = ".", kn = ":";
      function kr(g) {
        var w = /[=:]/g, $ = {
          "=": "=0",
          ":": "=2"
        }, Q = g.replace(w, function(Ce) {
          return $[Ce];
        });
        return "$" + Q;
      }
      var nn = !1, Fr = /\/+/g;
      function Gt(g) {
        return g.replace(Fr, "$&/");
      }
      function Xt(g, w) {
        return typeof g == "object" && g !== null && g.key != null ? (gn(g.key), kr("" + g.key)) : w.toString(36);
      }
      function ei(g, w, $, Q, Ce) {
        var it = typeof g;
        (it === "undefined" || it === "boolean") && (g = null);
        var Me = !1;
        if (g === null)
          Me = !0;
        else
          switch (it) {
            case "string":
            case "number":
              Me = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case R:
                case O:
                  Me = !0;
              }
          }
        if (Me) {
          var rt = g, xt = Ce(rt), Bt = Q === "" ? Vn + Xt(rt, 0) : Q;
          if (pn(xt)) {
            var cn = "";
            Bt != null && (cn = Gt(Bt) + "/"), ei(xt, w, cn, "", function(rd) {
              return rd;
            });
          } else
            xt != null && (qt(xt) && (xt.key && (!rt || rt.key !== xt.key) && gn(xt.key), xt = gt(
              xt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              $ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (xt.key && (!rt || rt.key !== xt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Gt("" + xt.key) + "/"
              ) : "") + Bt
            )), w.push(xt));
          return 1;
        }
        var rn, fn, yn = 0, Lt = Q === "" ? Vn : Q + kn;
        if (pn(g))
          for (var ji = 0; ji < g.length; ji++)
            rn = g[ji], fn = Lt + Xt(rn, ji), yn += ei(rn, w, $, fn, Ce);
        else {
          var uo = ue(g);
          if (typeof uo == "function") {
            var os = g;
            uo === os.entries && (nn || _e("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), nn = !0);
            for (var nd = uo.call(os), ai, ss = 0; !(ai = nd.next()).done; )
              rn = ai.value, fn = Lt + Xt(rn, ss++), yn += ei(rn, w, $, fn, Ce);
          } else if (it === "object") {
            var cs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (cs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : cs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return yn;
      }
      function La(g, w, $) {
        if (g == null)
          return g;
        var Q = [], Ce = 0;
        return ei(g, Q, "", "", function(it) {
          return w.call($, it, Ce++);
        }), Q;
      }
      function fu(g) {
        var w = 0;
        return La(g, function() {
          w++;
        }), w;
      }
      function rl(g, w, $) {
        La(g, function() {
          w.apply(this, arguments);
        }, $);
      }
      function Ql(g) {
        return La(g, function(w) {
          return w;
        }) || [];
      }
      function Ai(g) {
        if (!qt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function du(g) {
        var w = {
          $$typeof: B,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: H,
          _context: w
        };
        var $ = !1, Q = !1, Ce = !1;
        {
          var it = {
            $$typeof: B,
            _context: w
          };
          Object.defineProperties(it, {
            Provider: {
              get: function() {
                return Q || (Q = !0, le("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(Me) {
                w.Provider = Me;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(Me) {
                w._currentValue = Me;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(Me) {
                w._currentValue2 = Me;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(Me) {
                w._threadCount = Me;
              }
            },
            Consumer: {
              get: function() {
                return $ || ($ = !0, le("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(Me) {
                Ce || (_e("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Me), Ce = !0);
              }
            }
          }), w.Consumer = it;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ya = -1, vi = 0, ga = 1, pi = 2;
      function Hr(g) {
        if (g._status === ya) {
          var w = g._result, $ = w();
          if ($.then(function(it) {
            if (g._status === vi || g._status === ya) {
              var Me = g;
              Me._status = ga, Me._result = it;
            }
          }, function(it) {
            if (g._status === vi || g._status === ya) {
              var Me = g;
              Me._status = pi, Me._result = it;
            }
          }), g._status === ya) {
            var Q = g;
            Q._status = vi, Q._result = $;
          }
        }
        if (g._status === ga) {
          var Ce = g._result;
          return Ce === void 0 && le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ce), "default" in Ce || le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ce), Ce.default;
        } else
          throw g._result;
      }
      function Sa(g) {
        var w = {
          // We use these fields to store the result.
          _status: ya,
          _result: g
        }, $ = {
          $$typeof: q,
          _payload: w,
          _init: Hr
        };
        {
          var Q, Ce;
          Object.defineProperties($, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Q;
              },
              set: function(it) {
                le("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Q = it, Object.defineProperty($, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ce;
              },
              set: function(it) {
                le("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ce = it, Object.defineProperty($, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return $;
      }
      function hi(g) {
        g != null && g.$$typeof === Y ? le("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? le("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && le("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && le("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: he,
          render: g
        };
        {
          var $;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(Q) {
              $ = Q, !g.name && !g.displayName && (g.displayName = Q);
            }
          });
        }
        return w;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function ce(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === A || g === W || ae || g === E || g === N || g === P || re || g === oe || se || ye || Fe || typeof g == "object" && g !== null && (g.$$typeof === q || g.$$typeof === Y || g.$$typeof === H || g.$$typeof === B || g.$$typeof === he || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === x || g.getModuleId !== void 0));
      }
      function Oe(g, w) {
        ce(g) || le("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var $ = {
          $$typeof: Y,
          type: g,
          compare: w === void 0 ? null : w
        };
        {
          var Q;
          Object.defineProperty($, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(Ce) {
              Q = Ce, !g.name && !g.displayName && (g.displayName = Ce);
            }
          });
        }
        return $;
      }
      function Ue() {
        var g = Ee.current;
        return g === null && le(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function mt(g) {
        var w = Ue();
        if (g._context !== void 0) {
          var $ = g._context;
          $.Consumer === g ? le("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : $.Provider === g && le("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(g);
      }
      function zt(g) {
        var w = Ue();
        return w.useState(g);
      }
      function St(g, w, $) {
        var Q = Ue();
        return Q.useReducer(g, w, $);
      }
      function tt(g) {
        var w = Ue();
        return w.useRef(g);
      }
      function Wn(g, w) {
        var $ = Ue();
        return $.useEffect(g, w);
      }
      function hn(g, w) {
        var $ = Ue();
        return $.useInsertionEffect(g, w);
      }
      function mn(g, w) {
        var $ = Ue();
        return $.useLayoutEffect(g, w);
      }
      function yr(g, w) {
        var $ = Ue();
        return $.useCallback(g, w);
      }
      function mi(g, w) {
        var $ = Ue();
        return $.useMemo(g, w);
      }
      function ql(g, w, $) {
        var Q = Ue();
        return Q.useImperativeHandle(g, w, $);
      }
      function Ht(g, w) {
        {
          var $ = Ue();
          return $.useDebugValue(g, w);
        }
      }
      function ed() {
        var g = Ue();
        return g.useTransition();
      }
      function ti(g) {
        var w = Ue();
        return w.useDeferredValue(g);
      }
      function wt() {
        var g = Ue();
        return g.useId();
      }
      function yi(g, w, $) {
        var Q = Ue();
        return Q.useSyncExternalStore(g, w, $);
      }
      var vu = 0, Gl, pu, ea, as, Vr, is, us;
      function cc() {
      }
      cc.__reactDisabledLog = !0;
      function Xl() {
        {
          if (vu === 0) {
            Gl = console.log, pu = console.info, ea = console.warn, as = console.error, Vr = console.group, is = console.groupCollapsed, us = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: cc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          vu++;
        }
      }
      function hu() {
        {
          if (vu--, vu === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: we({}, g, {
                value: Gl
              }),
              info: we({}, g, {
                value: pu
              }),
              warn: we({}, g, {
                value: ea
              }),
              error: we({}, g, {
                value: as
              }),
              group: we({}, g, {
                value: Vr
              }),
              groupCollapsed: we({}, g, {
                value: is
              }),
              groupEnd: we({}, g, {
                value: us
              })
            });
          }
          vu < 0 && le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = Le.ReactCurrentDispatcher, Br;
      function mu(g, w, $) {
        {
          if (Br === void 0)
            try {
              throw Error();
            } catch (Ce) {
              var Q = Ce.stack.trim().match(/\n( *(at )?)/);
              Br = Q && Q[1] || "";
            }
          return `
` + Br + g;
        }
      }
      var yu = !1, gu;
      {
        var Zl = typeof WeakMap == "function" ? WeakMap : Map;
        gu = new Zl();
      }
      function Jl(g, w) {
        if (!g || yu)
          return "";
        {
          var $ = gu.get(g);
          if ($ !== void 0)
            return $;
        }
        var Q;
        yu = !0;
        var Ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var it;
        it = ni.current, ni.current = null, Xl();
        try {
          if (w) {
            var Me = function() {
              throw Error();
            };
            if (Object.defineProperty(Me.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Me, []);
              } catch (Lt) {
                Q = Lt;
              }
              Reflect.construct(g, [], Me);
            } else {
              try {
                Me.call();
              } catch (Lt) {
                Q = Lt;
              }
              g.call(Me.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Lt) {
              Q = Lt;
            }
            g();
          }
        } catch (Lt) {
          if (Lt && Q && typeof Lt.stack == "string") {
            for (var rt = Lt.stack.split(`
`), xt = Q.stack.split(`
`), Bt = rt.length - 1, cn = xt.length - 1; Bt >= 1 && cn >= 0 && rt[Bt] !== xt[cn]; )
              cn--;
            for (; Bt >= 1 && cn >= 0; Bt--, cn--)
              if (rt[Bt] !== xt[cn]) {
                if (Bt !== 1 || cn !== 1)
                  do
                    if (Bt--, cn--, cn < 0 || rt[Bt] !== xt[cn]) {
                      var rn = `
` + rt[Bt].replace(" at new ", " at ");
                      return g.displayName && rn.includes("<anonymous>") && (rn = rn.replace("<anonymous>", g.displayName)), typeof g == "function" && gu.set(g, rn), rn;
                    }
                  while (Bt >= 1 && cn >= 0);
                break;
              }
          }
        } finally {
          yu = !1, ni.current = it, hu(), Error.prepareStackTrace = Ce;
        }
        var fn = g ? g.displayName || g.name : "", yn = fn ? mu(fn) : "";
        return typeof g == "function" && gu.set(g, yn), yn;
      }
      function zi(g, w, $) {
        return Jl(g, !1);
      }
      function td(g) {
        var w = g.prototype;
        return !!(w && w.isReactComponent);
      }
      function gi(g, w, $) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return Jl(g, td(g));
        if (typeof g == "string")
          return mu(g);
        switch (g) {
          case N:
            return mu("Suspense");
          case P:
            return mu("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case he:
              return zi(g.render);
            case Y:
              return gi(g.type, w, $);
            case q: {
              var Q = g, Ce = Q._payload, it = Q._init;
              try {
                return gi(it(Ce), w, $);
              } catch {
              }
            }
          }
        return "";
      }
      var Yt = {}, eo = Le.ReactDebugCurrentFrame;
      function al(g) {
        if (g) {
          var w = g._owner, $ = gi(g.type, g._source, w ? w.type : null);
          eo.setExtraStackFrame($);
        } else
          eo.setExtraStackFrame(null);
      }
      function to(g, w, $, Q, Ce) {
        {
          var it = Function.call.bind(_t);
          for (var Me in g)
            if (it(g, Me)) {
              var rt = void 0;
              try {
                if (typeof g[Me] != "function") {
                  var xt = Error((Q || "React class") + ": " + $ + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw xt.name = "Invariant Violation", xt;
                }
                rt = g[Me](w, Me, Q, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Bt) {
                rt = Bt;
              }
              rt && !(rt instanceof Error) && (al(Ce), le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", $, Me, typeof rt), al(null)), rt instanceof Error && !(rt.message in Yt) && (Yt[rt.message] = !0, al(Ce), le("Failed %s type: %s", $, rt.message), al(null));
            }
        }
      }
      function Vt(g) {
        if (g) {
          var w = g._owner, $ = gi(g.type, g._source, w ? w.type : null);
          Ye($);
        } else
          Ye(null);
      }
      var no;
      no = !1;
      function ro() {
        if (Ve.current) {
          var g = Mt(Ve.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function ft(g) {
        if (g !== void 0) {
          var w = g.fileName.replace(/^.*[\\\/]/, ""), $ = g.lineNumber;
          return `

Check your code at ` + w + ":" + $ + ".";
        }
        return "";
      }
      function il(g) {
        return g != null ? ft(g.__source) : "";
      }
      var Mn = {};
      function ta(g) {
        var w = ro();
        if (!w) {
          var $ = typeof g == "string" ? g : g.displayName || g.name;
          $ && (w = `

Check the top-level render call using <` + $ + ">.");
        }
        return w;
      }
      function $r(g, w) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var $ = ta(w);
          if (!Mn[$]) {
            Mn[$] = !0;
            var Q = "";
            g && g._owner && g._owner !== Ve.current && (Q = " It was passed a child from " + Mt(g._owner.type) + "."), Vt(g), le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, Q), Vt(null);
          }
        }
      }
      function Su(g, w) {
        if (typeof g == "object") {
          if (pn(g))
            for (var $ = 0; $ < g.length; $++) {
              var Q = g[$];
              qt(Q) && $r(Q, w);
            }
          else if (qt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var Ce = ue(g);
            if (typeof Ce == "function" && Ce !== g.entries)
              for (var it = Ce.call(g), Me; !(Me = it.next()).done; )
                qt(Me.value) && $r(Me.value, w);
          }
        }
      }
      function jn(g) {
        {
          var w = g.type;
          if (w == null || typeof w == "string")
            return;
          var $;
          if (typeof w == "function")
            $ = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === he || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === Y))
            $ = w.propTypes;
          else
            return;
          if ($) {
            var Q = Mt(w);
            to($, g.props, "prop", Q, g);
          } else if (w.PropTypes !== void 0 && !no) {
            no = !0;
            var Ce = Mt(w);
            le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zt(g) {
        {
          for (var w = Object.keys(g.props), $ = 0; $ < w.length; $++) {
            var Q = w[$];
            if (Q !== "children" && Q !== "key") {
              Vt(g), le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), Vt(null);
              break;
            }
          }
          g.ref !== null && (Vt(g), le("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
        }
      }
      function fc(g, w, $) {
        var Q = ce(g);
        if (!Q) {
          var Ce = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var it = il(w);
          it ? Ce += it : Ce += ro();
          var Me;
          g === null ? Me = "null" : pn(g) ? Me = "array" : g !== void 0 && g.$$typeof === R ? (Me = "<" + (Mt(g.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : Me = typeof g, le("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Me, Ce);
        }
        var rt = We.apply(this, arguments);
        if (rt == null)
          return rt;
        if (Q)
          for (var xt = 2; xt < arguments.length; xt++)
            Su(arguments[xt], g);
        return g === A ? Zt(rt) : jn(rt), rt;
      }
      var na = !1;
      function or(g) {
        var w = fc.bind(null, g);
        return w.type = g, na || (na = !0, _e("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return _e("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), w;
      }
      function Si(g, w, $) {
        for (var Q = At.apply(this, arguments), Ce = 2; Ce < arguments.length; Ce++)
          Su(arguments[Ce], Q.type);
        return jn(Q), Q;
      }
      function dc(g, w) {
        var $ = be.transition;
        be.transition = {};
        var Q = be.transition;
        be.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (be.transition = $, $ === null && Q._updatedFibers) {
            var Ce = Q._updatedFibers.size;
            Ce > 10 && _e("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Q._updatedFibers.clear();
          }
        }
      }
      var Ui = !1, Eu = null;
      function vc(g) {
        if (Eu === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), $ = v && v[w];
            Eu = $.call(v, "timers").setImmediate;
          } catch {
            Eu = function(Ce) {
              Ui === !1 && (Ui = !0, typeof MessageChannel > "u" && le("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var it = new MessageChannel();
              it.port1.onmessage = Ce, it.port2.postMessage(void 0);
            };
          }
        return Eu(g);
      }
      var Na = 0, Cu = !1;
      function Ru(g) {
        {
          var w = Na;
          Na++, pe.current === null && (pe.current = []);
          var $ = pe.isBatchingLegacy, Q;
          try {
            if (pe.isBatchingLegacy = !0, Q = g(), !$ && pe.didScheduleLegacyUpdate) {
              var Ce = pe.current;
              Ce !== null && (pe.didScheduleLegacyUpdate = !1, Tu(Ce));
            }
          } catch (fn) {
            throw Aa(w), fn;
          } finally {
            pe.isBatchingLegacy = $;
          }
          if (Q !== null && typeof Q == "object" && typeof Q.then == "function") {
            var it = Q, Me = !1, rt = {
              then: function(fn, yn) {
                Me = !0, it.then(function(Lt) {
                  Aa(w), Na === 0 ? ao(Lt, fn, yn) : fn(Lt);
                }, function(Lt) {
                  Aa(w), yn(Lt);
                });
              }
            };
            return !Cu && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Me || (Cu = !0, le("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), rt;
          } else {
            var xt = Q;
            if (Aa(w), Na === 0) {
              var Bt = pe.current;
              Bt !== null && (Tu(Bt), pe.current = null);
              var cn = {
                then: function(fn, yn) {
                  pe.current === null ? (pe.current = [], ao(xt, fn, yn)) : fn(xt);
                }
              };
              return cn;
            } else {
              var rn = {
                then: function(fn, yn) {
                  fn(xt);
                }
              };
              return rn;
            }
          }
        }
      }
      function Aa(g) {
        g !== Na - 1 && le("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = g;
      }
      function ao(g, w, $) {
        {
          var Q = pe.current;
          if (Q !== null)
            try {
              Tu(Q), vc(function() {
                Q.length === 0 ? (pe.current = null, w(g)) : ao(g, w, $);
              });
            } catch (Ce) {
              $(Ce);
            }
          else
            w(g);
        }
      }
      var _u = !1;
      function Tu(g) {
        if (!_u) {
          _u = !0;
          var w = 0;
          try {
            for (; w < g.length; w++) {
              var $ = g[w];
              do
                $ = $(!0);
              while ($ !== null);
            }
            g.length = 0;
          } catch (Q) {
            throw g = g.slice(w + 1), Q;
          } finally {
            _u = !1;
          }
        }
      }
      var ul = fc, io = Si, ls = or, ri = {
        map: La,
        forEach: rl,
        count: fu,
        toArray: Ql,
        only: Ai
      };
      m.Children = ri, m.Component = qe, m.Fragment = A, m.Profiler = W, m.PureComponent = $t, m.StrictMode = E, m.Suspense = N, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, m.cloneElement = io, m.createContext = du, m.createElement = ul, m.createFactory = ls, m.createRef = Zn, m.forwardRef = hi, m.isValidElement = qt, m.lazy = Sa, m.memo = Oe, m.startTransition = dc, m.unstable_act = Ru, m.useCallback = yr, m.useContext = mt, m.useDebugValue = Ht, m.useDeferredValue = ti, m.useEffect = Wn, m.useId = wt, m.useImperativeHandle = ql, m.useInsertionEffect = hn, m.useLayoutEffect = mn, m.useMemo = mi, m.useReducer = St, m.useRef = tt, m.useState = zt, m.useSyncExternalStore = yi, m.useTransition = ed, m.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(cD, mp)), mp;
}
(function(v) {
  ({}).NODE_ENV === "production" ? v.exports = sD() : v.exports = fD();
})(oD);
const Yn = /* @__PURE__ */ u_(Tt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $R;
function dD() {
  if ($R)
    return sp;
  $R = 1;
  var v = Tt, m = Symbol.for("react.element"), h = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, O = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(W, H, B) {
    var he, N = {}, P = null, Y = null;
    B !== void 0 && (P = "" + B), H.key !== void 0 && (P = "" + H.key), H.ref !== void 0 && (Y = H.ref);
    for (he in H)
      R.call(H, he) && !A.hasOwnProperty(he) && (N[he] = H[he]);
    if (W && W.defaultProps)
      for (he in H = W.defaultProps, H)
        N[he] === void 0 && (N[he] = H[he]);
    return { $$typeof: m, type: W, key: P, ref: Y, props: N, _owner: O.current };
  }
  return sp.Fragment = h, sp.jsx = E, sp.jsxs = E, sp;
}
var cp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IR;
function vD() {
  return IR || (IR = 1, {}.NODE_ENV !== "production" && function() {
    var v = Tt, m = Symbol.for("react.element"), h = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), W = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), q = Symbol.iterator, oe = "@@iterator";
    function ee(x) {
      if (x === null || typeof x != "object")
        return null;
      var ce = q && x[q] || x[oe];
      return typeof ce == "function" ? ce : null;
    }
    var de = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ue(x) {
      {
        for (var ce = arguments.length, Oe = new Array(ce > 1 ? ce - 1 : 0), Ue = 1; Ue < ce; Ue++)
          Oe[Ue - 1] = arguments[Ue];
        Ee("error", x, Oe);
      }
    }
    function Ee(x, ce, Oe) {
      {
        var Ue = de.ReactDebugCurrentFrame, mt = Ue.getStackAddendum();
        mt !== "" && (ce += "%s", Oe = Oe.concat([mt]));
        var zt = Oe.map(function(St) {
          return String(St);
        });
        zt.unshift("Warning: " + ce), Function.prototype.apply.call(console[x], console, zt);
      }
    }
    var be = !1, pe = !1, Ve = !1, me = !1, Xe = !1, Ye;
    Ye = Symbol.for("react.module.reference");
    function se(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === R || x === A || Xe || x === O || x === B || x === he || me || x === Y || be || pe || Ve || typeof x == "object" && x !== null && (x.$$typeof === P || x.$$typeof === N || x.$$typeof === E || x.$$typeof === W || x.$$typeof === H || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Ye || x.getModuleId !== void 0));
    }
    function ye(x, ce, Oe) {
      var Ue = x.displayName;
      if (Ue)
        return Ue;
      var mt = ce.displayName || ce.name || "";
      return mt !== "" ? Oe + "(" + mt + ")" : Oe;
    }
    function Fe(x) {
      return x.displayName || "Context";
    }
    function re(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case R:
          return "Fragment";
        case h:
          return "Portal";
        case A:
          return "Profiler";
        case O:
          return "StrictMode";
        case B:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case W:
            var ce = x;
            return Fe(ce) + ".Consumer";
          case E:
            var Oe = x;
            return Fe(Oe._context) + ".Provider";
          case H:
            return ye(x, x.render, "ForwardRef");
          case N:
            var Ue = x.displayName || null;
            return Ue !== null ? Ue : re(x.type) || "Memo";
          case P: {
            var mt = x, zt = mt._payload, St = mt._init;
            try {
              return re(St(zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, Le = 0, _e, le, te, xe, b, G, we;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function qe() {
      {
        if (Le === 0) {
          _e = console.log, le = console.info, te = console.warn, xe = console.error, b = console.group, G = console.groupCollapsed, we = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: et,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        Le++;
      }
    }
    function Rt() {
      {
        if (Le--, Le === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, x, {
              value: _e
            }),
            info: ae({}, x, {
              value: le
            }),
            warn: ae({}, x, {
              value: te
            }),
            error: ae({}, x, {
              value: xe
            }),
            group: ae({}, x, {
              value: b
            }),
            groupCollapsed: ae({}, x, {
              value: G
            }),
            groupEnd: ae({}, x, {
              value: we
            })
          });
        }
        Le < 0 && ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = de.ReactCurrentDispatcher, yt;
    function vt(x, ce, Oe) {
      {
        if (yt === void 0)
          try {
            throw Error();
          } catch (mt) {
            var Ue = mt.stack.trim().match(/\n( *(at )?)/);
            yt = Ue && Ue[1] || "";
          }
        return `
` + yt + x;
      }
    }
    var $t = !1, mr;
    {
      var Zn = typeof WeakMap == "function" ? WeakMap : Map;
      mr = new Zn();
    }
    function ur(x, ce) {
      if (!x || $t)
        return "";
      {
        var Oe = mr.get(x);
        if (Oe !== void 0)
          return Oe;
      }
      var Ue;
      $t = !0;
      var mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var zt;
      zt = ht.current, ht.current = null, qe();
      try {
        if (ce) {
          var St = function() {
            throw Error();
          };
          if (Object.defineProperty(St.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(St, []);
            } catch (Ht) {
              Ue = Ht;
            }
            Reflect.construct(x, [], St);
          } else {
            try {
              St.call();
            } catch (Ht) {
              Ue = Ht;
            }
            x.call(St.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            Ue = Ht;
          }
          x();
        }
      } catch (Ht) {
        if (Ht && Ue && typeof Ht.stack == "string") {
          for (var tt = Ht.stack.split(`
`), Wn = Ue.stack.split(`
`), hn = tt.length - 1, mn = Wn.length - 1; hn >= 1 && mn >= 0 && tt[hn] !== Wn[mn]; )
            mn--;
          for (; hn >= 1 && mn >= 0; hn--, mn--)
            if (tt[hn] !== Wn[mn]) {
              if (hn !== 1 || mn !== 1)
                do
                  if (hn--, mn--, mn < 0 || tt[hn] !== Wn[mn]) {
                    var yr = `
` + tt[hn].replace(" at new ", " at ");
                    return x.displayName && yr.includes("<anonymous>") && (yr = yr.replace("<anonymous>", x.displayName)), typeof x == "function" && mr.set(x, yr), yr;
                  }
                while (hn >= 1 && mn >= 0);
              break;
            }
        }
      } finally {
        $t = !1, ht.current = zt, Rt(), Error.prepareStackTrace = mt;
      }
      var mi = x ? x.displayName || x.name : "", ql = mi ? vt(mi) : "";
      return typeof x == "function" && mr.set(x, ql), ql;
    }
    function pn(x, ce, Oe) {
      return ur(x, !1);
    }
    function Kn(x) {
      var ce = x.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function Un(x, ce, Oe) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return ur(x, Kn(x));
      if (typeof x == "string")
        return vt(x);
      switch (x) {
        case B:
          return vt("Suspense");
        case he:
          return vt("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case H:
            return pn(x.render);
          case N:
            return Un(x.type, ce, Oe);
          case P: {
            var Ue = x, mt = Ue._payload, zt = Ue._init;
            try {
              return Un(zt(mt), ce, Oe);
            } catch {
            }
          }
        }
      return "";
    }
    var xn = Object.prototype.hasOwnProperty, gn = {}, Dr = de.ReactDebugCurrentFrame;
    function bt(x) {
      if (x) {
        var ce = x._owner, Oe = Un(x.type, x._source, ce ? ce.type : null);
        Dr.setExtraStackFrame(Oe);
      } else
        Dr.setExtraStackFrame(null);
    }
    function Mt(x, ce, Oe, Ue, mt) {
      {
        var zt = Function.call.bind(xn);
        for (var St in x)
          if (zt(x, St)) {
            var tt = void 0;
            try {
              if (typeof x[St] != "function") {
                var Wn = Error((Ue || "React class") + ": " + Oe + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Wn.name = "Invariant Violation", Wn;
              }
              tt = x[St](ce, St, Ue, Oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (hn) {
              tt = hn;
            }
            tt && !(tt instanceof Error) && (bt(mt), ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ue || "React class", Oe, St, typeof tt), bt(null)), tt instanceof Error && !(tt.message in gn) && (gn[tt.message] = !0, bt(mt), ue("Failed %s type: %s", Oe, tt.message), bt(null));
          }
      }
    }
    var _t = Array.isArray;
    function sn(x) {
      return _t(x);
    }
    function Nt(x) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, Oe = ce && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return Oe;
      }
    }
    function On(x) {
      try {
        return an(x), !1;
      } catch {
        return !0;
      }
    }
    function an(x) {
      return "" + x;
    }
    function Sn(x) {
      if (On(x))
        return ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(x)), an(x);
    }
    var un = de.ReactCurrentOwner, Dn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Jn, lr, Te;
    Te = {};
    function We(x) {
      if (xn.call(x, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function gt(x) {
      if (xn.call(x, "key")) {
        var ce = Object.getOwnPropertyDescriptor(x, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function At(x, ce) {
      if (typeof x.ref == "string" && un.current && ce && un.current.stateNode !== ce) {
        var Oe = re(un.current.type);
        Te[Oe] || (ue('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(un.current.type), x.ref), Te[Oe] = !0);
      }
    }
    function qt(x, ce) {
      {
        var Oe = function() {
          Jn || (Jn = !0, ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        Oe.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: Oe,
          configurable: !0
        });
      }
    }
    function Vn(x, ce) {
      {
        var Oe = function() {
          lr || (lr = !0, ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        Oe.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: Oe,
          configurable: !0
        });
      }
    }
    var kn = function(x, ce, Oe, Ue, mt, zt, St) {
      var tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: x,
        key: ce,
        ref: Oe,
        props: St,
        // Record the component responsible for creating this element.
        _owner: zt
      };
      return tt._store = {}, Object.defineProperty(tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.defineProperty(tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt
      }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
    };
    function kr(x, ce, Oe, Ue, mt) {
      {
        var zt, St = {}, tt = null, Wn = null;
        Oe !== void 0 && (Sn(Oe), tt = "" + Oe), gt(ce) && (Sn(ce.key), tt = "" + ce.key), We(ce) && (Wn = ce.ref, At(ce, mt));
        for (zt in ce)
          xn.call(ce, zt) && !Dn.hasOwnProperty(zt) && (St[zt] = ce[zt]);
        if (x && x.defaultProps) {
          var hn = x.defaultProps;
          for (zt in hn)
            St[zt] === void 0 && (St[zt] = hn[zt]);
        }
        if (tt || Wn) {
          var mn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          tt && qt(St, mn), Wn && Vn(St, mn);
        }
        return kn(x, tt, Wn, mt, Ue, un.current, St);
      }
    }
    var nn = de.ReactCurrentOwner, Fr = de.ReactDebugCurrentFrame;
    function Gt(x) {
      if (x) {
        var ce = x._owner, Oe = Un(x.type, x._source, ce ? ce.type : null);
        Fr.setExtraStackFrame(Oe);
      } else
        Fr.setExtraStackFrame(null);
    }
    var Xt;
    Xt = !1;
    function ei(x) {
      return typeof x == "object" && x !== null && x.$$typeof === m;
    }
    function La() {
      {
        if (nn.current) {
          var x = re(nn.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function fu(x) {
      {
        if (x !== void 0) {
          var ce = x.fileName.replace(/^.*[\\\/]/, ""), Oe = x.lineNumber;
          return `

Check your code at ` + ce + ":" + Oe + ".";
        }
        return "";
      }
    }
    var rl = {};
    function Ql(x) {
      {
        var ce = La();
        if (!ce) {
          var Oe = typeof x == "string" ? x : x.displayName || x.name;
          Oe && (ce = `

Check the top-level render call using <` + Oe + ">.");
        }
        return ce;
      }
    }
    function Ai(x, ce) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var Oe = Ql(ce);
        if (rl[Oe])
          return;
        rl[Oe] = !0;
        var Ue = "";
        x && x._owner && x._owner !== nn.current && (Ue = " It was passed a child from " + re(x._owner.type) + "."), Gt(x), ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Oe, Ue), Gt(null);
      }
    }
    function du(x, ce) {
      {
        if (typeof x != "object")
          return;
        if (sn(x))
          for (var Oe = 0; Oe < x.length; Oe++) {
            var Ue = x[Oe];
            ei(Ue) && Ai(Ue, ce);
          }
        else if (ei(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var mt = ee(x);
          if (typeof mt == "function" && mt !== x.entries)
            for (var zt = mt.call(x), St; !(St = zt.next()).done; )
              ei(St.value) && Ai(St.value, ce);
        }
      }
    }
    function ya(x) {
      {
        var ce = x.type;
        if (ce == null || typeof ce == "string")
          return;
        var Oe;
        if (typeof ce == "function")
          Oe = ce.propTypes;
        else if (typeof ce == "object" && (ce.$$typeof === H || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ce.$$typeof === N))
          Oe = ce.propTypes;
        else
          return;
        if (Oe) {
          var Ue = re(ce);
          Mt(Oe, x.props, "prop", Ue, x);
        } else if (ce.PropTypes !== void 0 && !Xt) {
          Xt = !0;
          var mt = re(ce);
          ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", mt || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vi(x) {
      {
        for (var ce = Object.keys(x.props), Oe = 0; Oe < ce.length; Oe++) {
          var Ue = ce[Oe];
          if (Ue !== "children" && Ue !== "key") {
            Gt(x), ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ue), Gt(null);
            break;
          }
        }
        x.ref !== null && (Gt(x), ue("Invalid attribute `ref` supplied to `React.Fragment`."), Gt(null));
      }
    }
    function ga(x, ce, Oe, Ue, mt, zt) {
      {
        var St = se(x);
        if (!St) {
          var tt = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Wn = fu(mt);
          Wn ? tt += Wn : tt += La();
          var hn;
          x === null ? hn = "null" : sn(x) ? hn = "array" : x !== void 0 && x.$$typeof === m ? (hn = "<" + (re(x.type) || "Unknown") + " />", tt = " Did you accidentally export a JSX literal instead of a component?") : hn = typeof x, ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", hn, tt);
        }
        var mn = kr(x, ce, Oe, mt, zt);
        if (mn == null)
          return mn;
        if (St) {
          var yr = ce.children;
          if (yr !== void 0)
            if (Ue)
              if (sn(yr)) {
                for (var mi = 0; mi < yr.length; mi++)
                  du(yr[mi], x);
                Object.freeze && Object.freeze(yr);
              } else
                ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              du(yr, x);
        }
        return x === R ? vi(mn) : ya(mn), mn;
      }
    }
    function pi(x, ce, Oe) {
      return ga(x, ce, Oe, !0);
    }
    function Hr(x, ce, Oe) {
      return ga(x, ce, Oe, !1);
    }
    var Sa = Hr, hi = pi;
    cp.Fragment = R, cp.jsx = Sa, cp.jsxs = hi;
  }()), cp;
}
(function(v) {
  ({}).NODE_ENV === "production" ? v.exports = dD() : v.exports = vD();
})(lD);
const Ma = sy.jsx, oy = sy.jsxs;
var hp = {}, cy = {}, pD = {
  get exports() {
    return cy;
  },
  set exports(v) {
    cy = v;
  }
}, Za = {}, fy = {}, hD = {
  get exports() {
    return fy;
  },
  set exports(v) {
    fy = v;
  }
}, W0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YR;
function mD() {
  return YR || (YR = 1, function(v) {
    function m(te, xe) {
      var b = te.length;
      te.push(xe);
      e:
        for (; 0 < b; ) {
          var G = b - 1 >>> 1, we = te[G];
          if (0 < O(we, xe))
            te[G] = xe, te[b] = we, b = G;
          else
            break e;
        }
    }
    function h(te) {
      return te.length === 0 ? null : te[0];
    }
    function R(te) {
      if (te.length === 0)
        return null;
      var xe = te[0], b = te.pop();
      if (b !== xe) {
        te[0] = b;
        e:
          for (var G = 0, we = te.length, et = we >>> 1; G < et; ) {
            var qe = 2 * (G + 1) - 1, Rt = te[qe], ht = qe + 1, yt = te[ht];
            if (0 > O(Rt, b))
              ht < we && 0 > O(yt, Rt) ? (te[G] = yt, te[ht] = b, G = ht) : (te[G] = Rt, te[qe] = b, G = qe);
            else if (ht < we && 0 > O(yt, b))
              te[G] = yt, te[ht] = b, G = ht;
            else
              break e;
          }
      }
      return xe;
    }
    function O(te, xe) {
      var b = te.sortIndex - xe.sortIndex;
      return b !== 0 ? b : te.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      v.unstable_now = function() {
        return A.now();
      };
    } else {
      var E = Date, W = E.now();
      v.unstable_now = function() {
        return E.now() - W;
      };
    }
    var H = [], B = [], he = 1, N = null, P = 3, Y = !1, q = !1, oe = !1, ee = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(te) {
      for (var xe = h(B); xe !== null; ) {
        if (xe.callback === null)
          R(B);
        else if (xe.startTime <= te)
          R(B), xe.sortIndex = xe.expirationTime, m(H, xe);
        else
          break;
        xe = h(B);
      }
    }
    function be(te) {
      if (oe = !1, Ee(te), !q)
        if (h(H) !== null)
          q = !0, _e(pe);
        else {
          var xe = h(B);
          xe !== null && le(be, xe.startTime - te);
        }
    }
    function pe(te, xe) {
      q = !1, oe && (oe = !1, de(Xe), Xe = -1), Y = !0;
      var b = P;
      try {
        for (Ee(xe), N = h(H); N !== null && (!(N.expirationTime > xe) || te && !ye()); ) {
          var G = N.callback;
          if (typeof G == "function") {
            N.callback = null, P = N.priorityLevel;
            var we = G(N.expirationTime <= xe);
            xe = v.unstable_now(), typeof we == "function" ? N.callback = we : N === h(H) && R(H), Ee(xe);
          } else
            R(H);
          N = h(H);
        }
        if (N !== null)
          var et = !0;
        else {
          var qe = h(B);
          qe !== null && le(be, qe.startTime - xe), et = !1;
        }
        return et;
      } finally {
        N = null, P = b, Y = !1;
      }
    }
    var Ve = !1, me = null, Xe = -1, Ye = 5, se = -1;
    function ye() {
      return !(v.unstable_now() - se < Ye);
    }
    function Fe() {
      if (me !== null) {
        var te = v.unstable_now();
        se = te;
        var xe = !0;
        try {
          xe = me(!0, te);
        } finally {
          xe ? re() : (Ve = !1, me = null);
        }
      } else
        Ve = !1;
    }
    var re;
    if (typeof ue == "function")
      re = function() {
        ue(Fe);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), Le = ae.port2;
      ae.port1.onmessage = Fe, re = function() {
        Le.postMessage(null);
      };
    } else
      re = function() {
        ee(Fe, 0);
      };
    function _e(te) {
      me = te, Ve || (Ve = !0, re());
    }
    function le(te, xe) {
      Xe = ee(function() {
        te(v.unstable_now());
      }, xe);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(te) {
      te.callback = null;
    }, v.unstable_continueExecution = function() {
      q || Y || (q = !0, _e(pe));
    }, v.unstable_forceFrameRate = function(te) {
      0 > te || 125 < te ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ye = 0 < te ? Math.floor(1e3 / te) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, v.unstable_getFirstCallbackNode = function() {
      return h(H);
    }, v.unstable_next = function(te) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = P;
      }
      var b = P;
      P = xe;
      try {
        return te();
      } finally {
        P = b;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(te, xe) {
      switch (te) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          te = 3;
      }
      var b = P;
      P = te;
      try {
        return xe();
      } finally {
        P = b;
      }
    }, v.unstable_scheduleCallback = function(te, xe, b) {
      var G = v.unstable_now();
      switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? G + b : G) : b = G, te) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return we = b + we, te = { id: he++, callback: xe, priorityLevel: te, startTime: b, expirationTime: we, sortIndex: -1 }, b > G ? (te.sortIndex = b, m(B, te), h(H) === null && te === h(B) && (oe ? (de(Xe), Xe = -1) : oe = !0, le(be, b - G))) : (te.sortIndex = we, m(H, te), q || Y || (q = !0, _e(pe))), te;
    }, v.unstable_shouldYield = ye, v.unstable_wrapCallback = function(te) {
      var xe = P;
      return function() {
        var b = P;
        P = xe;
        try {
          return te.apply(this, arguments);
        } finally {
          P = b;
        }
      };
    };
  }(W0)), W0;
}
var Q0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function yD() {
  return KR || (KR = 1, function(v) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = !1, h = !1, R = 5;
      function O(Te, We) {
        var gt = Te.length;
        Te.push(We), W(Te, We, gt);
      }
      function A(Te) {
        return Te.length === 0 ? null : Te[0];
      }
      function E(Te) {
        if (Te.length === 0)
          return null;
        var We = Te[0], gt = Te.pop();
        return gt !== We && (Te[0] = gt, H(Te, gt, 0)), We;
      }
      function W(Te, We, gt) {
        for (var At = gt; At > 0; ) {
          var qt = At - 1 >>> 1, Vn = Te[qt];
          if (B(Vn, We) > 0)
            Te[qt] = We, Te[At] = Vn, At = qt;
          else
            return;
        }
      }
      function H(Te, We, gt) {
        for (var At = gt, qt = Te.length, Vn = qt >>> 1; At < Vn; ) {
          var kn = (At + 1) * 2 - 1, kr = Te[kn], nn = kn + 1, Fr = Te[nn];
          if (B(kr, We) < 0)
            nn < qt && B(Fr, kr) < 0 ? (Te[At] = Fr, Te[nn] = We, At = nn) : (Te[At] = kr, Te[kn] = We, At = kn);
          else if (nn < qt && B(Fr, We) < 0)
            Te[At] = Fr, Te[nn] = We, At = nn;
          else
            return;
        }
      }
      function B(Te, We) {
        var gt = Te.sortIndex - We.sortIndex;
        return gt !== 0 ? gt : Te.id - We.id;
      }
      var he = 1, N = 2, P = 3, Y = 4, q = 5;
      function oe(Te, We) {
      }
      var ee = typeof performance == "object" && typeof performance.now == "function";
      if (ee) {
        var de = performance;
        v.unstable_now = function() {
          return de.now();
        };
      } else {
        var ue = Date, Ee = ue.now();
        v.unstable_now = function() {
          return ue.now() - Ee;
        };
      }
      var be = 1073741823, pe = -1, Ve = 250, me = 5e3, Xe = 1e4, Ye = be, se = [], ye = [], Fe = 1, re = null, ae = P, Le = !1, _e = !1, le = !1, te = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(Te) {
        for (var We = A(ye); We !== null; ) {
          if (We.callback === null)
            E(ye);
          else if (We.startTime <= Te)
            E(ye), We.sortIndex = We.expirationTime, O(se, We);
          else
            return;
          We = A(ye);
        }
      }
      function we(Te) {
        if (le = !1, G(Te), !_e)
          if (A(se) !== null)
            _e = !0, Sn(et);
          else {
            var We = A(ye);
            We !== null && un(we, We.startTime - Te);
          }
      }
      function et(Te, We) {
        _e = !1, le && (le = !1, Dn()), Le = !0;
        var gt = ae;
        try {
          var At;
          if (!h)
            return qe(Te, We);
        } finally {
          re = null, ae = gt, Le = !1;
        }
      }
      function qe(Te, We) {
        var gt = We;
        for (G(gt), re = A(se); re !== null && !m && !(re.expirationTime > gt && (!Te || bt())); ) {
          var At = re.callback;
          if (typeof At == "function") {
            re.callback = null, ae = re.priorityLevel;
            var qt = re.expirationTime <= gt, Vn = At(qt);
            gt = v.unstable_now(), typeof Vn == "function" ? re.callback = Vn : re === A(se) && E(se), G(gt);
          } else
            E(se);
          re = A(se);
        }
        if (re !== null)
          return !0;
        var kn = A(ye);
        return kn !== null && un(we, kn.startTime - gt), !1;
      }
      function Rt(Te, We) {
        switch (Te) {
          case he:
          case N:
          case P:
          case Y:
          case q:
            break;
          default:
            Te = P;
        }
        var gt = ae;
        ae = Te;
        try {
          return We();
        } finally {
          ae = gt;
        }
      }
      function ht(Te) {
        var We;
        switch (ae) {
          case he:
          case N:
          case P:
            We = P;
            break;
          default:
            We = ae;
            break;
        }
        var gt = ae;
        ae = We;
        try {
          return Te();
        } finally {
          ae = gt;
        }
      }
      function yt(Te) {
        var We = ae;
        return function() {
          var gt = ae;
          ae = We;
          try {
            return Te.apply(this, arguments);
          } finally {
            ae = gt;
          }
        };
      }
      function vt(Te, We, gt) {
        var At = v.unstable_now(), qt;
        if (typeof gt == "object" && gt !== null) {
          var Vn = gt.delay;
          typeof Vn == "number" && Vn > 0 ? qt = At + Vn : qt = At;
        } else
          qt = At;
        var kn;
        switch (Te) {
          case he:
            kn = pe;
            break;
          case N:
            kn = Ve;
            break;
          case q:
            kn = Ye;
            break;
          case Y:
            kn = Xe;
            break;
          case P:
          default:
            kn = me;
            break;
        }
        var kr = qt + kn, nn = {
          id: Fe++,
          callback: We,
          priorityLevel: Te,
          startTime: qt,
          expirationTime: kr,
          sortIndex: -1
        };
        return qt > At ? (nn.sortIndex = qt, O(ye, nn), A(se) === null && nn === A(ye) && (le ? Dn() : le = !0, un(we, qt - At))) : (nn.sortIndex = kr, O(se, nn), !_e && !Le && (_e = !0, Sn(et))), nn;
      }
      function $t() {
      }
      function mr() {
        !_e && !Le && (_e = !0, Sn(et));
      }
      function Zn() {
        return A(se);
      }
      function ur(Te) {
        Te.callback = null;
      }
      function pn() {
        return ae;
      }
      var Kn = !1, Un = null, xn = -1, gn = R, Dr = -1;
      function bt() {
        var Te = v.unstable_now() - Dr;
        return !(Te < gn);
      }
      function Mt() {
      }
      function _t(Te) {
        if (Te < 0 || Te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Te > 0 ? gn = Math.floor(1e3 / Te) : gn = R;
      }
      var sn = function() {
        if (Un !== null) {
          var Te = v.unstable_now();
          Dr = Te;
          var We = !0, gt = !0;
          try {
            gt = Un(We, Te);
          } finally {
            gt ? Nt() : (Kn = !1, Un = null);
          }
        } else
          Kn = !1;
      }, Nt;
      if (typeof b == "function")
        Nt = function() {
          b(sn);
        };
      else if (typeof MessageChannel < "u") {
        var On = new MessageChannel(), an = On.port2;
        On.port1.onmessage = sn, Nt = function() {
          an.postMessage(null);
        };
      } else
        Nt = function() {
          te(sn, 0);
        };
      function Sn(Te) {
        Un = Te, Kn || (Kn = !0, Nt());
      }
      function un(Te, We) {
        xn = te(function() {
          Te(v.unstable_now());
        }, We);
      }
      function Dn() {
        xe(xn), xn = -1;
      }
      var Jn = Mt, lr = null;
      v.unstable_IdlePriority = q, v.unstable_ImmediatePriority = he, v.unstable_LowPriority = Y, v.unstable_NormalPriority = P, v.unstable_Profiling = lr, v.unstable_UserBlockingPriority = N, v.unstable_cancelCallback = ur, v.unstable_continueExecution = mr, v.unstable_forceFrameRate = _t, v.unstable_getCurrentPriorityLevel = pn, v.unstable_getFirstCallbackNode = Zn, v.unstable_next = ht, v.unstable_pauseExecution = $t, v.unstable_requestPaint = Jn, v.unstable_runWithPriority = Rt, v.unstable_scheduleCallback = vt, v.unstable_shouldYield = bt, v.unstable_wrapCallback = yt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Q0)), Q0;
}
var WR;
function o_() {
  return WR || (WR = 1, function(v) {
    ({}).NODE_ENV === "production" ? v.exports = mD() : v.exports = yD();
  }(hD)), fy;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QR;
function gD() {
  if (QR)
    return Za;
  QR = 1;
  var v = Tt, m = o_();
  function h(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      r += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var R = /* @__PURE__ */ new Set(), O = {};
  function A(n, r) {
    E(n, r), E(n + "Capture", r);
  }
  function E(n, r) {
    for (O[n] = r, n = 0; n < r.length; n++)
      R.add(r[n]);
  }
  var W = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, he = {}, N = {};
  function P(n) {
    return H.call(N, n) ? !0 : H.call(he, n) ? !1 : B.test(n) ? N[n] = !0 : (he[n] = !0, !1);
  }
  function Y(n, r, u, o) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function q(n, r, u, o) {
    if (r === null || typeof r > "u" || Y(n, r, u, o))
      return !0;
    if (o)
      return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function oe(n, r, u, o, c, d, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = u, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = S;
  }
  var ee = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ee[n] = new oe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ee[r] = new oe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ee[n] = new oe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ee[n] = new oe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ee[n] = new oe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ee[n] = new oe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ee[n] = new oe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ee[n] = new oe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ee[n] = new oe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var de = /[\-:]([a-z])/g;
  function ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      de,
      ue
    );
    ee[r] = new oe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(de, ue);
    ee[r] = new oe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(de, ue);
    ee[r] = new oe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ee[n] = new oe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ee.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ee[n] = new oe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ee(n, r, u, o) {
    var c = ee.hasOwnProperty(r) ? ee[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (q(r, u, c, o) && (u = null), o || c === null ? P(r) && (u === null ? n.removeAttribute(r) : n.setAttribute(r, "" + u)) : c.mustUseProperty ? n[c.propertyName] = u === null ? c.type === 3 ? !1 : "" : u : (r = c.attributeName, o = c.attributeNamespace, u === null ? n.removeAttribute(r) : (c = c.type, u = c === 3 || c === 4 && u === !0 ? "" : "" + u, o ? n.setAttributeNS(o, r, u) : n.setAttribute(r, u))));
  }
  var be = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pe = Symbol.for("react.element"), Ve = Symbol.for("react.portal"), me = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), Ye = Symbol.for("react.profiler"), se = Symbol.for("react.provider"), ye = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), te = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = te && n[te] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var b = Object.assign, G;
  function we(n) {
    if (G === void 0)
      try {
        throw Error();
      } catch (u) {
        var r = u.stack.trim().match(/\n( *(at )?)/);
        G = r && r[1] || "";
      }
    return `
` + G + n;
  }
  var et = !1;
  function qe(n, r) {
    if (!n || et)
      return "";
    et = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (K) {
            var o = K;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (K) {
            o = K;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (K) {
          o = K;
        }
        n();
      }
    } catch (K) {
      if (K && o && typeof K.stack == "string") {
        for (var c = K.stack.split(`
`), d = o.stack.split(`
`), S = c.length - 1, T = d.length - 1; 1 <= S && 0 <= T && c[S] !== d[T]; )
          T--;
        for (; 1 <= S && 0 <= T; S--, T--)
          if (c[S] !== d[T]) {
            if (S !== 1 || T !== 1)
              do
                if (S--, T--, 0 > T || c[S] !== d[T]) {
                  var D = `
` + c[S].replace(" at new ", " at ");
                  return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
                }
              while (1 <= S && 0 <= T);
            break;
          }
      }
    } finally {
      et = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? we(n) : "";
  }
  function Rt(n) {
    switch (n.tag) {
      case 5:
        return we(n.type);
      case 16:
        return we("Lazy");
      case 13:
        return we("Suspense");
      case 19:
        return we("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = qe(n.type, !1), n;
      case 11:
        return n = qe(n.type.render, !1), n;
      case 1:
        return n = qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case me:
        return "Fragment";
      case Ve:
        return "Portal";
      case Ye:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case re:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ye:
          return (n.displayName || "Context") + ".Consumer";
        case se:
          return (n._context.displayName || "Context") + ".Provider";
        case Fe:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Le:
          return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
        case _e:
          r = n._payload, n = n._init;
          try {
            return ht(n(r));
          } catch {
          }
      }
    return null;
  }
  function yt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ht(r);
      case 8:
        return r === Xe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function vt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function $t(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function mr(n) {
    var r = $t(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var c = u.get, d = u.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(S) {
        o = "" + S, d.call(this, S);
      } }), Object.defineProperty(n, r, { enumerable: u.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(S) {
        o = "" + S;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Zn(n) {
    n._valueTracker || (n._valueTracker = mr(n));
  }
  function ur(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var u = r.getValue(), o = "";
    return n && (o = $t(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== u ? (r.setValue(n), !0) : !1;
  }
  function pn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Kn(n, r) {
    var u = r.checked;
    return b({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u ?? n._wrapperState.initialChecked });
  }
  function Un(n, r) {
    var u = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    u = vt(r.value != null ? r.value : u), n._wrapperState = { initialChecked: o, initialValue: u, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function xn(n, r) {
    r = r.checked, r != null && Ee(n, "checked", r, !1);
  }
  function gn(n, r) {
    xn(n, r);
    var u = vt(r.value), o = r.type;
    if (u != null)
      o === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? bt(n, r.type, u) : r.hasOwnProperty("defaultValue") && bt(n, r.type, vt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Dr(n, r, u) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, u || r === n.value || (n.value = r), n.defaultValue = r;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function bt(n, r, u) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  var Mt = Array.isArray;
  function _t(n, r, u, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < u.length; c++)
        r["$" + u[c]] = !0;
      for (u = 0; u < n.length; u++)
        c = r.hasOwnProperty("$" + n[u].value), n[u].selected !== c && (n[u].selected = c), c && o && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + vt(u), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === u) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function sn(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(h(91));
    return b({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Nt(n, r) {
    var u = r.value;
    if (u == null) {
      if (u = r.children, r = r.defaultValue, u != null) {
        if (r != null)
          throw Error(h(92));
        if (Mt(u)) {
          if (1 < u.length)
            throw Error(h(93));
          u = u[0];
        }
        r = u;
      }
      r == null && (r = ""), u = r;
    }
    n._wrapperState = { initialValue: vt(u) };
  }
  function On(n, r) {
    var u = vt(r.value), o = vt(r.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), r.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), o != null && (n.defaultValue = "" + o);
  }
  function an(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function un(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Dn, Jn = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, u, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, u, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Dn = Dn || document.createElement("div"), Dn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Dn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function lr(n, r) {
    if (r) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Te = {
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
  }, We = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Te).forEach(function(n) {
    We.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Te[r] = Te[n];
    });
  });
  function gt(n, r, u) {
    return r == null || typeof r == "boolean" || r === "" ? "" : u || typeof r != "number" || r === 0 || Te.hasOwnProperty(n) && Te[n] ? ("" + r).trim() : r + "px";
  }
  function At(n, r) {
    n = n.style;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var o = u.indexOf("--") === 0, c = gt(u, r[u], o);
        u === "float" && (u = "cssFloat"), o ? n.setProperty(u, c) : n[u] = c;
      }
  }
  var qt = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Vn(n, r) {
    if (r) {
      if (qt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(h(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(h(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(h(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(h(62));
    }
  }
  function kn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
        return !0;
    }
  }
  var kr = null;
  function nn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Fr = null, Gt = null, Xt = null;
  function ei(n) {
    if (n = Cs(n)) {
      if (typeof Fr != "function")
        throw Error(h(280));
      var r = n.stateNode;
      r && (r = Je(r), Fr(n.stateNode, n.type, r));
    }
  }
  function La(n) {
    Gt ? Xt ? Xt.push(n) : Xt = [n] : Gt = n;
  }
  function fu() {
    if (Gt) {
      var n = Gt, r = Xt;
      if (Xt = Gt = null, ei(n), r)
        for (n = 0; n < r.length; n++)
          ei(r[n]);
    }
  }
  function rl(n, r) {
    return n(r);
  }
  function Ql() {
  }
  var Ai = !1;
  function du(n, r, u) {
    if (Ai)
      return n(r, u);
    Ai = !0;
    try {
      return rl(n, r, u);
    } finally {
      Ai = !1, (Gt !== null || Xt !== null) && (Ql(), fu());
    }
  }
  function ya(n, r) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var o = Je(u);
    if (o === null)
      return null;
    u = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (u && typeof u != "function")
      throw Error(h(231, r, typeof u));
    return u;
  }
  var vi = !1;
  if (W)
    try {
      var ga = {};
      Object.defineProperty(ga, "passive", { get: function() {
        vi = !0;
      } }), window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
    } catch {
      vi = !1;
    }
  function pi(n, r, u, o, c, d, S, T, D) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(u, K);
    } catch (ve) {
      this.onError(ve);
    }
  }
  var Hr = !1, Sa = null, hi = !1, x = null, ce = { onError: function(n) {
    Hr = !0, Sa = n;
  } };
  function Oe(n, r, u, o, c, d, S, T, D) {
    Hr = !1, Sa = null, pi.apply(ce, arguments);
  }
  function Ue(n, r, u, o, c, d, S, T, D) {
    if (Oe.apply(this, arguments), Hr) {
      if (Hr) {
        var K = Sa;
        Hr = !1, Sa = null;
      } else
        throw Error(h(198));
      hi || (hi = !0, x = K);
    }
  }
  function mt(n) {
    var r = n, u = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (u = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? u : null;
  }
  function zt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function St(n) {
    if (mt(n) !== n)
      throw Error(h(188));
  }
  function tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = mt(n), r === null)
        throw Error(h(188));
      return r !== n ? null : n;
    }
    for (var u = n, o = r; ; ) {
      var c = u.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          u = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === u)
            return St(c), n;
          if (d === o)
            return St(c), r;
          d = d.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== o.return)
        u = c, o = d;
      else {
        for (var S = !1, T = c.child; T; ) {
          if (T === u) {
            S = !0, u = c, o = d;
            break;
          }
          if (T === o) {
            S = !0, o = c, u = d;
            break;
          }
          T = T.sibling;
        }
        if (!S) {
          for (T = d.child; T; ) {
            if (T === u) {
              S = !0, u = d, o = c;
              break;
            }
            if (T === o) {
              S = !0, o = d, u = c;
              break;
            }
            T = T.sibling;
          }
          if (!S)
            throw Error(h(189));
        }
      }
      if (u.alternate !== o)
        throw Error(h(190));
    }
    if (u.tag !== 3)
      throw Error(h(188));
    return u.stateNode.current === u ? n : r;
  }
  function Wn(n) {
    return n = tt(n), n !== null ? hn(n) : null;
  }
  function hn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = hn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var mn = m.unstable_scheduleCallback, yr = m.unstable_cancelCallback, mi = m.unstable_shouldYield, ql = m.unstable_requestPaint, Ht = m.unstable_now, ed = m.unstable_getCurrentPriorityLevel, ti = m.unstable_ImmediatePriority, wt = m.unstable_UserBlockingPriority, yi = m.unstable_NormalPriority, vu = m.unstable_LowPriority, Gl = m.unstable_IdlePriority, pu = null, ea = null;
  function as(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function")
      try {
        ea.onCommitFiberRoot(pu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Vr = Math.clz32 ? Math.clz32 : cc, is = Math.log, us = Math.LN2;
  function cc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (is(n) / us | 0) | 0;
  }
  var Xl = 64, hu = 4194304;
  function ni(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Br(n, r) {
    var u = n.pendingLanes;
    if (u === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, S = u & 268435455;
    if (S !== 0) {
      var T = S & ~c;
      T !== 0 ? o = ni(T) : (d &= S, d !== 0 && (o = ni(d)));
    } else
      S = u & ~c, S !== 0 ? o = ni(S) : d !== 0 && (o = ni(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= u & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        u = 31 - Vr(r), c = 1 << u, o |= n[u], r &= ~c;
    return o;
  }
  function mu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yu(n, r) {
    for (var u = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var S = 31 - Vr(d), T = 1 << S, D = c[S];
      D === -1 ? (!(T & u) || T & o) && (c[S] = mu(T, r)) : D <= r && (n.expiredLanes |= T), d &= ~T;
    }
  }
  function gu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zl() {
    var n = Xl;
    return Xl <<= 1, !(Xl & 4194240) && (Xl = 64), n;
  }
  function Jl(n) {
    for (var r = [], u = 0; 31 > u; u++)
      r.push(n);
    return r;
  }
  function zi(n, r, u) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Vr(r), n[r] = u;
  }
  function td(n, r) {
    var u = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < u; ) {
      var c = 31 - Vr(u), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, u &= ~d;
    }
  }
  function gi(n, r) {
    var u = n.entangledLanes |= r;
    for (n = n.entanglements; u; ) {
      var o = 31 - Vr(u), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), u &= ~c;
    }
  }
  var Yt = 0;
  function eo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var al, to, Vt, no, ro, ft = !1, il = [], Mn = null, ta = null, $r = null, Su = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), Zt = [], fc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Mn = null;
        break;
      case "dragenter":
      case "dragleave":
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        $r = null;
        break;
      case "pointerover":
      case "pointerout":
        Su.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jn.delete(r.pointerId);
    }
  }
  function or(n, r, u, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: u, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Cs(r), r !== null && to(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Si(n, r, u, o, c) {
    switch (r) {
      case "focusin":
        return Mn = or(Mn, n, r, u, o, c), !0;
      case "dragenter":
        return ta = or(ta, n, r, u, o, c), !0;
      case "mouseover":
        return $r = or($r, n, r, u, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Su.set(d, or(Su.get(d) || null, n, r, u, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, jn.set(d, or(jn.get(d) || null, n, r, u, o, c)), !0;
    }
    return !1;
  }
  function dc(n) {
    var r = Ua(n.target);
    if (r !== null) {
      var u = mt(r);
      if (u !== null) {
        if (r = u.tag, r === 13) {
          if (r = zt(u), r !== null) {
            n.blockedOn = r, ro(n.priority, function() {
              Vt(u);
            });
            return;
          }
        } else if (r === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ui(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var u = io(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var o = new u.constructor(u.type, u);
        kr = o, u.target.dispatchEvent(o), kr = null;
      } else
        return r = Cs(u), r !== null && to(r), n.blockedOn = u, !1;
      r.shift();
    }
    return !0;
  }
  function Eu(n, r, u) {
    Ui(n) && u.delete(r);
  }
  function vc() {
    ft = !1, Mn !== null && Ui(Mn) && (Mn = null), ta !== null && Ui(ta) && (ta = null), $r !== null && Ui($r) && ($r = null), Su.forEach(Eu), jn.forEach(Eu);
  }
  function Na(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ft || (ft = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, vc)));
  }
  function Cu(n) {
    function r(c) {
      return Na(c, n);
    }
    if (0 < il.length) {
      Na(il[0], n);
      for (var u = 1; u < il.length; u++) {
        var o = il[u];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Mn !== null && Na(Mn, n), ta !== null && Na(ta, n), $r !== null && Na($r, n), Su.forEach(r), jn.forEach(r), u = 0; u < Zt.length; u++)
      o = Zt[u], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Zt.length && (u = Zt[0], u.blockedOn === null); )
      dc(u), u.blockedOn === null && Zt.shift();
  }
  var Ru = be.ReactCurrentBatchConfig, Aa = !0;
  function ao(n, r, u, o) {
    var c = Yt, d = Ru.transition;
    Ru.transition = null;
    try {
      Yt = 1, Tu(n, r, u, o);
    } finally {
      Yt = c, Ru.transition = d;
    }
  }
  function _u(n, r, u, o) {
    var c = Yt, d = Ru.transition;
    Ru.transition = null;
    try {
      Yt = 4, Tu(n, r, u, o);
    } finally {
      Yt = c, Ru.transition = d;
    }
  }
  function Tu(n, r, u, o) {
    if (Aa) {
      var c = io(n, r, u, o);
      if (c === null)
        Rc(n, r, o, ul, u), na(n, o);
      else if (Si(c, n, r, u, o))
        o.stopPropagation();
      else if (na(n, o), r & 4 && -1 < fc.indexOf(n)) {
        for (; c !== null; ) {
          var d = Cs(c);
          if (d !== null && al(d), d = io(n, r, u, o), d === null && Rc(n, r, o, ul, u), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Rc(n, r, o, null, u);
    }
  }
  var ul = null;
  function io(n, r, u, o) {
    if (ul = null, n = nn(o), n = Ua(n), n !== null)
      if (r = mt(n), r === null)
        n = null;
      else if (u = r.tag, u === 13) {
        if (n = zt(r), n !== null)
          return n;
        n = null;
      } else if (u === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return ul = n, null;
  }
  function ls(n) {
    switch (n) {
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
        return 1;
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
        return 4;
      case "message":
        switch (ed()) {
          case ti:
            return 1;
          case wt:
            return 4;
          case yi:
          case vu:
            return 16;
          case Gl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, g = null, w = null;
  function $() {
    if (w)
      return w;
    var n, r = g, u = r.length, o, c = "value" in ri ? ri.value : ri.textContent, d = c.length;
    for (n = 0; n < u && r[n] === c[n]; n++)
      ;
    var S = u - n;
    for (o = 1; o <= S && r[u - o] === c[d - o]; o++)
      ;
    return w = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ce() {
    return !0;
  }
  function it() {
    return !1;
  }
  function Me(n) {
    function r(u, o, c, d, S) {
      this._reactName = u, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = S, this.currentTarget = null;
      for (var T in n)
        n.hasOwnProperty(T) && (u = n[T], this[T] = u ? u(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ce : it, this.isPropagationStopped = it, this;
    }
    return b(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ce);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ce);
    }, persist: function() {
    }, isPersistent: Ce }), r;
  }
  var rt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xt = Me(rt), Bt = b({}, rt, { view: 0, detail: 0 }), cn = Me(Bt), rn, fn, yn, Lt = b({}, Bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ud, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yn && (yn && n.type === "mousemove" ? (rn = n.screenX - yn.screenX, fn = n.screenY - yn.screenY) : fn = rn = 0, yn = n), rn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : fn;
  } }), ji = Me(Lt), uo = b({}, Lt, { dataTransfer: 0 }), os = Me(uo), nd = b({}, Bt, { relatedTarget: 0 }), ai = Me(nd), ss = b({}, rt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cs = Me(ss), rd = b({}, rt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ry = Me(rd), _y = b({}, rt, { data: 0 }), ad = Me(_y), id = {
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
  }, Cp = {
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
  }, Rp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _p(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Rp[n]) ? !!r[n] : !1;
  }
  function ud() {
    return _p;
  }
  var Pi = b({}, Bt, { key: function(n) {
    if (n.key) {
      var r = id[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Cp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ud, charCode: function(n) {
    return n.type === "keypress" ? Q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ty = Me(Pi), ld = b({}, Lt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pc = Me(ld), od = b({}, Bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ud }), by = Me(od), hc = b({}, rt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tp = Me(hc), ra = b({}, Lt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = Me(ra), Qn = [9, 13, 27, 32], ii = W && "CompositionEvent" in window, ll = null;
  W && "documentMode" in document && (ll = document.documentMode);
  var mc = W && "TextEvent" in window && !ll, bp = W && (!ii || ll && 8 < ll && 11 >= ll), lo = String.fromCharCode(32), wp = !1;
  function xp(n, r) {
    switch (n) {
      case "keyup":
        return Qn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var oo = !1;
  function wy(n, r) {
    switch (n) {
      case "compositionend":
        return yc(r);
      case "keypress":
        return r.which !== 32 ? null : (wp = !0, lo);
      case "textInput":
        return n = r.data, n === lo && wp ? null : n;
      default:
        return null;
    }
  }
  function xy(n, r) {
    if (oo)
      return n === "compositionend" || !ii && xp(n, r) ? (n = $(), w = g = ri = null, oo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return bp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Op = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Dp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Op[n.type] : r === "textarea";
  }
  function kp(n, r, u, o) {
    La(o), r = gs(r, "onChange"), 0 < r.length && (u = new xt("onChange", "change", null, u, o), n.push({ event: u, listeners: r }));
  }
  var fs = null, so = null;
  function co(n) {
    Cc(n, 0);
  }
  function fo(n) {
    var r = po(n);
    if (ur(r))
      return n;
  }
  function Mp(n, r) {
    if (n === "change")
      return r;
  }
  var sd = !1;
  if (W) {
    var cd;
    if (W) {
      var fd = "oninput" in document;
      if (!fd) {
        var Lp = document.createElement("div");
        Lp.setAttribute("oninput", "return;"), fd = typeof Lp.oninput == "function";
      }
      cd = fd;
    } else
      cd = !1;
    sd = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function Np() {
    fs && (fs.detachEvent("onpropertychange", Ap), so = fs = null);
  }
  function Ap(n) {
    if (n.propertyName === "value" && fo(so)) {
      var r = [];
      kp(r, so, n, nn(n)), du(co, r);
    }
  }
  function Oy(n, r, u) {
    n === "focusin" ? (Np(), fs = r, so = u, fs.attachEvent("onpropertychange", Ap)) : n === "focusout" && Np();
  }
  function Dy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return fo(so);
  }
  function ky(n, r) {
    if (n === "click")
      return fo(r);
  }
  function zp(n, r) {
    if (n === "input" || n === "change")
      return fo(r);
  }
  function My(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var za = typeof Object.is == "function" ? Object.is : My;
  function ds(n, r) {
    if (za(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var u = Object.keys(n), o = Object.keys(r);
    if (u.length !== o.length)
      return !1;
    for (o = 0; o < u.length; o++) {
      var c = u[o];
      if (!H.call(r, c) || !za(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Up(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function jp(n, r) {
    var u = Up(n);
    n = 0;
    for (var o; u; ) {
      if (u.nodeType === 3) {
        if (o = n + u.textContent.length, n <= r && o >= r)
          return { node: u, offset: r - n };
        n = o;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Up(u);
    }
  }
  function Pp(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Pp(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function gc() {
    for (var n = window, r = pn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof r.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u)
        n = r.contentWindow;
      else
        break;
      r = pn(n.document);
    }
    return r;
  }
  function Hi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Sc(n) {
    var r = gc(), u = n.focusedElem, o = n.selectionRange;
    if (r !== u && u && u.ownerDocument && Pp(u.ownerDocument.documentElement, u)) {
      if (o !== null && Hi(u)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in u)
          u.selectionStart = r, u.selectionEnd = Math.min(n, u.value.length);
        else if (n = (r = u.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = u.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = jp(u, d);
          var S = jp(
            u,
            o
          );
          c && S && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== S.node || n.focusOffset !== S.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(S.node, S.offset)) : (r.setEnd(S.node, S.offset), n.addRange(r)));
        }
      }
      for (r = [], n = u; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof u.focus == "function" && u.focus(), u = 0; u < r.length; u++)
        n = r[u], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Fp = W && "documentMode" in document && 11 >= document.documentMode, ui = null, dd = null, vs = null, vd = !1;
  function Hp(n, r, u) {
    var o = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    vd || ui == null || ui !== pn(o) || (o = ui, "selectionStart" in o && Hi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), vs && ds(vs, o) || (vs = o, o = gs(dd, "onSelect"), 0 < o.length && (r = new xt("onSelect", "select", null, r, u), n.push({ event: r, listeners: o }), r.target = ui)));
  }
  function Ec(n, r) {
    var u = {};
    return u[n.toLowerCase()] = r.toLowerCase(), u["Webkit" + n] = "webkit" + r, u["Moz" + n] = "moz" + r, u;
  }
  var ol = { animationend: Ec("Animation", "AnimationEnd"), animationiteration: Ec("Animation", "AnimationIteration"), animationstart: Ec("Animation", "AnimationStart"), transitionend: Ec("Transition", "TransitionEnd") }, pd = {}, hd = {};
  W && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete ol.animationend.animation, delete ol.animationiteration.animation, delete ol.animationstart.animation), "TransitionEvent" in window || delete ol.transitionend.transition);
  function sr(n) {
    if (pd[n])
      return pd[n];
    if (!ol[n])
      return n;
    var r = ol[n], u;
    for (u in r)
      if (r.hasOwnProperty(u) && u in hd)
        return pd[n] = r[u];
    return n;
  }
  var md = sr("animationend"), Vp = sr("animationiteration"), Bp = sr("animationstart"), $p = sr("transitionend"), Ip = /* @__PURE__ */ new Map(), Yp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Vi(n, r) {
    Ip.set(n, r), A(r, [n]);
  }
  for (var ps = 0; ps < Yp.length; ps++) {
    var sl = Yp[ps], Ly = sl.toLowerCase(), hs = sl[0].toUpperCase() + sl.slice(1);
    Vi(Ly, "on" + hs);
  }
  Vi(md, "onAnimationEnd"), Vi(Vp, "onAnimationIteration"), Vi(Bp, "onAnimationStart"), Vi("dblclick", "onDoubleClick"), Vi("focusin", "onFocus"), Vi("focusout", "onBlur"), Vi($p, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), A("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), A("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), A("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), A("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
  function Kp(n, r, u) {
    var o = n.type || "unknown-event";
    n.currentTarget = u, Ue(o, r, void 0, n), n.currentTarget = null;
  }
  function Cc(n, r) {
    r = (r & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var o = n[u], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var S = o.length - 1; 0 <= S; S--) {
            var T = o[S], D = T.instance, K = T.currentTarget;
            if (T = T.listener, D !== d && c.isPropagationStopped())
              break e;
            Kp(c, T, K), d = D;
          }
        else
          for (S = 0; S < o.length; S++) {
            if (T = o[S], D = T.instance, K = T.currentTarget, T = T.listener, D !== d && c.isPropagationStopped())
              break e;
            Kp(c, T, K), d = D;
          }
      }
    }
    if (hi)
      throw n = x, hi = !1, x = null, n;
  }
  function dn(n, r) {
    var u = r[_d];
    u === void 0 && (u = r[_d] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    u.has(o) || (Wp(r, n, 2, !1), u.add(o));
  }
  function bu(n, r, u) {
    var o = 0;
    r && (o |= 4), Wp(u, n, o, r);
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function vo(n) {
    if (!n[Bi]) {
      n[Bi] = !0, R.forEach(function(u) {
        u !== "selectionchange" && (Ny.has(u) || bu(u, !1, n), bu(u, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Bi] || (r[Bi] = !0, bu("selectionchange", !1, r));
    }
  }
  function Wp(n, r, u, o) {
    switch (ls(r)) {
      case 1:
        var c = ao;
        break;
      case 4:
        c = _u;
        break;
      default:
        c = Tu;
    }
    u = c.bind(null, r, u, n), c = void 0, !vi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, u, { capture: !0, passive: c }) : n.addEventListener(r, u, !0) : c !== void 0 ? n.addEventListener(r, u, { passive: c }) : n.addEventListener(r, u, !1);
  }
  function Rc(n, r, u, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var S = o.tag;
          if (S === 3 || S === 4) {
            var T = o.stateNode.containerInfo;
            if (T === c || T.nodeType === 8 && T.parentNode === c)
              break;
            if (S === 4)
              for (S = o.return; S !== null; ) {
                var D = S.tag;
                if ((D === 3 || D === 4) && (D = S.stateNode.containerInfo, D === c || D.nodeType === 8 && D.parentNode === c))
                  return;
                S = S.return;
              }
            for (; T !== null; ) {
              if (S = Ua(T), S === null)
                return;
              if (D = S.tag, D === 5 || D === 6) {
                o = d = S;
                continue e;
              }
              T = T.parentNode;
            }
          }
          o = o.return;
        }
    du(function() {
      var K = d, ve = nn(u), ge = [];
      e: {
        var fe = Ip.get(n);
        if (fe !== void 0) {
          var Ae = xt, Be = n;
          switch (n) {
            case "keypress":
              if (Q(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ae = Ty;
              break;
            case "focusin":
              Be = "focus", Ae = ai;
              break;
            case "focusout":
              Be = "blur", Ae = ai;
              break;
            case "beforeblur":
            case "afterblur":
              Ae = ai;
              break;
            case "click":
              if (u.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ae = ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ae = os;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ae = by;
              break;
            case md:
            case Vp:
            case Bp:
              Ae = cs;
              break;
            case $p:
              Ae = Tp;
              break;
            case "scroll":
              Ae = cn;
              break;
            case "wheel":
              Ae = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ae = Ry;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ae = pc;
          }
          var Ke = (r & 4) !== 0, $n = !Ke && n === "scroll", z = Ke ? fe !== null ? fe + "Capture" : null : fe;
          Ke = [];
          for (var M = K, F; M !== null; ) {
            F = M;
            var Re = F.stateNode;
            if (F.tag === 5 && Re !== null && (F = Re, z !== null && (Re = ya(M, z), Re != null && Ke.push(ys(M, Re, F)))), $n)
              break;
            M = M.return;
          }
          0 < Ke.length && (fe = new Ae(fe, Be, null, u, ve), ge.push({ event: fe, listeners: Ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (fe = n === "mouseover" || n === "pointerover", Ae = n === "mouseout" || n === "pointerout", fe && u !== kr && (Be = u.relatedTarget || u.fromElement) && (Ua(Be) || Be[$i]))
            break e;
          if ((Ae || fe) && (fe = ve.window === ve ? ve : (fe = ve.ownerDocument) ? fe.defaultView || fe.parentWindow : window, Ae ? (Be = u.relatedTarget || u.toElement, Ae = K, Be = Be ? Ua(Be) : null, Be !== null && ($n = mt(Be), Be !== $n || Be.tag !== 5 && Be.tag !== 6) && (Be = null)) : (Ae = null, Be = K), Ae !== Be)) {
            if (Ke = ji, Re = "onMouseLeave", z = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (Ke = pc, Re = "onPointerLeave", z = "onPointerEnter", M = "pointer"), $n = Ae == null ? fe : po(Ae), F = Be == null ? fe : po(Be), fe = new Ke(Re, M + "leave", Ae, u, ve), fe.target = $n, fe.relatedTarget = F, Re = null, Ua(ve) === K && (Ke = new Ke(z, M + "enter", Be, u, ve), Ke.target = F, Ke.relatedTarget = $n, Re = Ke), $n = Re, Ae && Be)
              t: {
                for (Ke = Ae, z = Be, M = 0, F = Ke; F; F = cl(F))
                  M++;
                for (F = 0, Re = z; Re; Re = cl(Re))
                  F++;
                for (; 0 < M - F; )
                  Ke = cl(Ke), M--;
                for (; 0 < F - M; )
                  z = cl(z), F--;
                for (; M--; ) {
                  if (Ke === z || z !== null && Ke === z.alternate)
                    break t;
                  Ke = cl(Ke), z = cl(z);
                }
                Ke = null;
              }
            else
              Ke = null;
            Ae !== null && yd(ge, fe, Ae, Ke, !1), Be !== null && $n !== null && yd(ge, $n, Be, Ke, !0);
          }
        }
        e: {
          if (fe = K ? po(K) : window, Ae = fe.nodeName && fe.nodeName.toLowerCase(), Ae === "select" || Ae === "input" && fe.type === "file")
            var Qe = Mp;
          else if (Dp(fe))
            if (sd)
              Qe = zp;
            else {
              Qe = Dy;
              var $e = Oy;
            }
          else
            (Ae = fe.nodeName) && Ae.toLowerCase() === "input" && (fe.type === "checkbox" || fe.type === "radio") && (Qe = ky);
          if (Qe && (Qe = Qe(n, K))) {
            kp(ge, Qe, u, ve);
            break e;
          }
          $e && $e(n, fe, K), n === "focusout" && ($e = fe._wrapperState) && $e.controlled && fe.type === "number" && bt(fe, "number", fe.value);
        }
        switch ($e = K ? po(K) : window, n) {
          case "focusin":
            (Dp($e) || $e.contentEditable === "true") && (ui = $e, dd = K, vs = null);
            break;
          case "focusout":
            vs = dd = ui = null;
            break;
          case "mousedown":
            vd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vd = !1, Hp(ge, u, ve);
            break;
          case "selectionchange":
            if (Fp)
              break;
          case "keydown":
          case "keyup":
            Hp(ge, u, ve);
        }
        var Ze;
        if (ii)
          e: {
            switch (n) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break e;
              case "compositionend":
                ct = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break e;
            }
            ct = void 0;
          }
        else
          oo ? xp(n, u) && (ct = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (ct = "onCompositionStart");
        ct && (bp && u.locale !== "ko" && (oo || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && oo && (Ze = $()) : (ri = ve, g = "value" in ri ? ri.value : ri.textContent, oo = !0)), $e = gs(K, ct), 0 < $e.length && (ct = new ad(ct, n, null, u, ve), ge.push({ event: ct, listeners: $e }), Ze ? ct.data = Ze : (Ze = yc(u), Ze !== null && (ct.data = Ze)))), (Ze = mc ? wy(n, u) : xy(n, u)) && (K = gs(K, "onBeforeInput"), 0 < K.length && (ve = new ad("onBeforeInput", "beforeinput", null, u, ve), ge.push({ event: ve, listeners: K }), ve.data = Ze));
      }
      Cc(ge, r);
    });
  }
  function ys(n, r, u) {
    return { instance: n, listener: r, currentTarget: u };
  }
  function gs(n, r) {
    for (var u = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ya(n, u), d != null && o.unshift(ys(n, d, c)), d = ya(n, r), d != null && o.push(ys(n, d, c))), n = n.return;
    }
    return o;
  }
  function cl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function yd(n, r, u, o, c) {
    for (var d = r._reactName, S = []; u !== null && u !== o; ) {
      var T = u, D = T.alternate, K = T.stateNode;
      if (D !== null && D === o)
        break;
      T.tag === 5 && K !== null && (T = K, c ? (D = ya(u, d), D != null && S.unshift(ys(u, D, T))) : c || (D = ya(u, d), D != null && S.push(ys(u, D, T)))), u = u.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var gd = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
  function Sd(n) {
    return (typeof n == "string" ? n : "" + n).replace(gd, `
`).replace(Ay, "");
  }
  function _c(n, r, u) {
    if (r = Sd(r), Sd(n) !== r && u)
      throw Error(h(425));
  }
  function Tc() {
  }
  var Ed = null, fl = null;
  function Ss(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var dl = typeof setTimeout == "function" ? setTimeout : void 0, Qp = typeof clearTimeout == "function" ? clearTimeout : void 0, Cd = typeof Promise == "function" ? Promise : void 0, Rd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cd < "u" ? function(n) {
    return Cd.resolve(null).then(n).catch(zy);
  } : dl;
  function zy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function wu(n, r) {
    var u = r, o = 0;
    do {
      var c = u.nextSibling;
      if (n.removeChild(u), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (o === 0) {
            n.removeChild(c), Cu(r);
            return;
          }
          o--;
        } else
          u !== "$" && u !== "$?" && u !== "$!" || o++;
      u = c;
    } while (u);
    Cu(r);
  }
  function li(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Es(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          u === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var xu = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + xu, vl = "__reactProps$" + xu, $i = "__reactContainer$" + xu, _d = "__reactEvents$" + xu, Uy = "__reactListeners$" + xu, Td = "__reactHandles$" + xu;
  function Ua(n) {
    var r = n[Ei];
    if (r)
      return r;
    for (var u = n.parentNode; u; ) {
      if (r = u[$i] || u[Ei]) {
        if (u = r.alternate, r.child !== null || u !== null && u.child !== null)
          for (n = Es(n); n !== null; ) {
            if (u = n[Ei])
              return u;
            n = Es(n);
          }
        return r;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Cs(n) {
    return n = n[Ei] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function po(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(h(33));
  }
  function Je(n) {
    return n[vl] || null;
  }
  var Ou = [], En = -1;
  function Et(n) {
    return { current: n };
  }
  function Qt(n) {
    0 > En || (n.current = Ou[En], Ou[En] = null, En--);
  }
  function Jt(n, r) {
    En++, Ou[En] = n.current, n.current = r;
  }
  var Ci = {}, st = Et(Ci), Pn = Et(!1), aa = Ci;
  function ja(n, r) {
    var u = n.type.contextTypes;
    if (!u)
      return Ci;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in u)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function bn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Pa() {
    Qt(Pn), Qt(st);
  }
  function Du(n, r, u) {
    if (st.current !== Ci)
      throw Error(h(168));
    Jt(st, r), Jt(Pn, u);
  }
  function Rs(n, r, u) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return u;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(h(108, yt(n) || "Unknown", c));
    return b({}, u, o);
  }
  function bc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ci, aa = st.current, Jt(st, n), Jt(Pn, Pn.current), !0;
  }
  function qp(n, r, u) {
    var o = n.stateNode;
    if (!o)
      throw Error(h(169));
    u ? (n = Rs(n, r, aa), o.__reactInternalMemoizedMergedChildContext = n, Qt(Pn), Qt(st), Jt(st, n)) : Qt(Pn), Jt(Pn, u);
  }
  var Ea = null, cr = !1, _s = !1;
  function bd(n) {
    Ea === null ? Ea = [n] : Ea.push(n);
  }
  function wd(n) {
    cr = !0, bd(n);
  }
  function ia() {
    if (!_s && Ea !== null) {
      _s = !0;
      var n = 0, r = Yt;
      try {
        var u = Ea;
        for (Yt = 1; n < u.length; n++) {
          var o = u[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ea = null, cr = !1;
      } catch (c) {
        throw Ea !== null && (Ea = Ea.slice(n + 1)), mn(ti, ia), c;
      } finally {
        Yt = r, _s = !1;
      }
    }
    return null;
  }
  var ku = [], ua = 0, pl = null, ho = 0, la = [], Mr = 0, Fa = null, gr = 1, Ii = "";
  function Ca(n, r) {
    ku[ua++] = ho, ku[ua++] = pl, pl = n, ho = r;
  }
  function xd(n, r, u) {
    la[Mr++] = gr, la[Mr++] = Ii, la[Mr++] = Fa, Fa = n;
    var o = gr;
    n = Ii;
    var c = 32 - Vr(o) - 1;
    o &= ~(1 << c), u += 1;
    var d = 32 - Vr(r) + c;
    if (30 < d) {
      var S = c - c % 5;
      d = (o & (1 << S) - 1).toString(32), o >>= S, c -= S, gr = 1 << 32 - Vr(r) + c | u << c | o, Ii = d + n;
    } else
      gr = 1 << d | u << c | o, Ii = n;
  }
  function wc(n) {
    n.return !== null && (Ca(n, 1), xd(n, 1, 0));
  }
  function Od(n) {
    for (; n === pl; )
      pl = ku[--ua], ku[ua] = null, ho = ku[--ua], ku[ua] = null;
    for (; n === Fa; )
      Fa = la[--Mr], la[Mr] = null, Ii = la[--Mr], la[Mr] = null, gr = la[--Mr], la[Mr] = null;
  }
  var Ra = null, oa = null, Cn = !1, Ha = null;
  function Dd(n, r) {
    var u = Ka(5, null, null, 0);
    u.elementType = "DELETED", u.stateNode = r, u.return = n, r = n.deletions, r === null ? (n.deletions = [u], n.flags |= 16) : r.push(u);
  }
  function Gp(n, r) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return r = r.nodeType !== 1 || u.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ra = n, oa = li(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ra = n, oa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (u = Fa !== null ? { id: gr, overflow: Ii } : null, n.memoizedState = { dehydrated: r, treeContext: u, retryLane: 1073741824 }, u = Ka(18, null, null, 0), u.stateNode = r, u.return = n, n.child = u, Ra = n, oa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Oc(n) {
    if (Cn) {
      var r = oa;
      if (r) {
        var u = r;
        if (!Gp(n, r)) {
          if (xc(n))
            throw Error(h(418));
          r = li(u.nextSibling);
          var o = Ra;
          r && Gp(n, r) ? Dd(o, u) : (n.flags = n.flags & -4097 | 2, Cn = !1, Ra = n);
        }
      } else {
        if (xc(n))
          throw Error(h(418));
        n.flags = n.flags & -4097 | 2, Cn = !1, Ra = n;
      }
    }
  }
  function Xp(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ra = n;
  }
  function Dc(n) {
    if (n !== Ra)
      return !1;
    if (!Cn)
      return Xp(n), Cn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ss(n.type, n.memoizedProps)), r && (r = oa)) {
      if (xc(n))
        throw Zp(), Error(h(418));
      for (; r; )
        Dd(n, r), r = li(r.nextSibling);
    }
    if (Xp(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(h(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (r === 0) {
                oa = li(n.nextSibling);
                break e;
              }
              r--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        oa = null;
      }
    } else
      oa = Ra ? li(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Zp() {
    for (var n = oa; n; )
      n = li(n.nextSibling);
  }
  function Ln() {
    oa = Ra = null, Cn = !1;
  }
  function kd(n) {
    Ha === null ? Ha = [n] : Ha.push(n);
  }
  var kc = be.ReactCurrentBatchConfig;
  function _a(n, r) {
    if (n && n.defaultProps) {
      r = b({}, r), n = n.defaultProps;
      for (var u in n)
        r[u] === void 0 && (r[u] = n[u]);
      return r;
    }
    return r;
  }
  var Ri = Et(null), Mc = null, Mu = null, Md = null;
  function Ld() {
    Md = Mu = Mc = null;
  }
  function Lu(n) {
    var r = Ri.current;
    Qt(Ri), n._currentValue = r;
  }
  function fr(n, r, u) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === u)
        break;
      n = n.return;
    }
  }
  function De(n, r) {
    Mc = n, Md = Mu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (qn = !0), n.firstContext = null);
  }
  function Bn(n) {
    var r = n._currentValue;
    if (Md !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Mu === null) {
        if (Mc === null)
          throw Error(h(308));
        Mu = n, Mc.dependencies = { lanes: 0, firstContext: n };
      } else
        Mu = Mu.next = n;
    return r;
  }
  var Sr = null;
  function Nd(n) {
    Sr === null ? Sr = [n] : Sr.push(n);
  }
  function Jp(n, r, u, o) {
    var c = r.interleaved;
    return c === null ? (u.next = u, Nd(r)) : (u.next = c.next, c.next = u), r.interleaved = u, Yi(n, o);
  }
  function Yi(n, r) {
    n.lanes |= r;
    var u = n.alternate;
    for (u !== null && (u.lanes |= r), u = n, n = n.return; n !== null; )
      n.childLanes |= r, u = n.alternate, u !== null && (u.childLanes |= r), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  var Nu = !1;
  function Ad(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function er(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Au(n, r, u) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Yi(n, u);
    }
    return c = o.interleaved, c === null ? (r.next = r, Nd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Yi(n, u);
  }
  function Lc(n, r, u) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (u & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, gi(n, u);
    }
  }
  function zd(n, r) {
    var u = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, u === o)) {
      var c = null, d = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var S = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          d === null ? c = d = S : d = d.next = S, u = u.next;
        } while (u !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      u = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = r : n.next = r, u.lastBaseUpdate = r;
  }
  function zu(n, r, u, o) {
    var c = n.updateQueue;
    Nu = !1;
    var d = c.firstBaseUpdate, S = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var D = T, K = D.next;
      D.next = null, S === null ? d = K : S.next = K, S = D;
      var ve = n.alternate;
      ve !== null && (ve = ve.updateQueue, T = ve.lastBaseUpdate, T !== S && (T === null ? ve.firstBaseUpdate = K : T.next = K, ve.lastBaseUpdate = D));
    }
    if (d !== null) {
      var ge = c.baseState;
      S = 0, ve = K = D = null, T = d;
      do {
        var fe = T.lane, Ae = T.eventTime;
        if ((o & fe) === fe) {
          ve !== null && (ve = ve.next = {
            eventTime: Ae,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Be = n, Ke = T;
            switch (fe = r, Ae = u, Ke.tag) {
              case 1:
                if (Be = Ke.payload, typeof Be == "function") {
                  ge = Be.call(Ae, ge, fe);
                  break e;
                }
                ge = Be;
                break e;
              case 3:
                Be.flags = Be.flags & -65537 | 128;
              case 0:
                if (Be = Ke.payload, fe = typeof Be == "function" ? Be.call(Ae, ge, fe) : Be, fe == null)
                  break e;
                ge = b({}, ge, fe);
                break e;
              case 2:
                Nu = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, fe = c.effects, fe === null ? c.effects = [T] : fe.push(T));
        } else
          Ae = { eventTime: Ae, lane: fe, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, ve === null ? (K = ve = Ae, D = ge) : ve = ve.next = Ae, S |= fe;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null)
            break;
          fe = T, T = fe.next, fe.next = null, c.lastBaseUpdate = fe, c.shared.pending = null;
        }
      } while (1);
      if (ve === null && (D = ge), c.baseState = D, c.firstBaseUpdate = K, c.lastBaseUpdate = ve, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Gi |= S, n.lanes = S, n.memoizedState = ge;
    }
  }
  function hl(n, r, u) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = u, typeof c != "function")
            throw Error(h(191, c));
          c.call(o);
        }
      }
  }
  var eh = new v.Component().refs;
  function Ud(n, r, u, o) {
    r = n.memoizedState, u = u(o, r), u = u == null ? r : b({}, r, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Nc = { isMounted: function(n) {
    return (n = n._reactInternals) ? mt(n) === n : !1;
  }, enqueueSetState: function(n, r, u) {
    n = n._reactInternals;
    var o = zr(), c = Gn(n), d = Ki(o, c);
    d.payload = r, u != null && (d.callback = u), r = Au(n, d, c), r !== null && (Ur(r, n, c, o), Lc(r, n, c));
  }, enqueueReplaceState: function(n, r, u) {
    n = n._reactInternals;
    var o = zr(), c = Gn(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, u != null && (d.callback = u), r = Au(n, d, c), r !== null && (Ur(r, n, c, o), Lc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var u = zr(), o = Gn(n), c = Ki(u, o);
    c.tag = 2, r != null && (c.callback = r), r = Au(n, c, o), r !== null && (Ur(r, n, o, u), Lc(r, n, o));
  } };
  function th(n, r, u, o, c, d, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, S) : r.prototype && r.prototype.isPureReactComponent ? !ds(u, o) || !ds(c, d) : !0;
  }
  function nh(n, r, u) {
    var o = !1, c = Ci, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Bn(d) : (c = bn(r) ? aa : st.current, o = r.contextTypes, d = (o = o != null) ? ja(n, c) : Ci), r = new r(u, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Nc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function rh(n, r, u, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(u, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(u, o), r.state !== n && Nc.enqueueReplaceState(r, r.state, null);
  }
  function Ac(n, r, u, o) {
    var c = n.stateNode;
    c.props = u, c.state = n.memoizedState, c.refs = eh, Ad(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Bn(d) : (d = bn(r) ? aa : st.current, c.context = ja(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ud(n, r, d, u), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Nc.enqueueReplaceState(c, c.state, null), zu(n, u, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function mo(n, r, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(h(309));
          var o = u.stateNode;
        }
        if (!o)
          throw Error(h(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(S) {
          var T = c.refs;
          T === eh && (T = c.refs = {}), S === null ? delete T[d] : T[d] = S;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(h(284));
      if (!u._owner)
        throw Error(h(290, n));
    }
    return n;
  }
  function zc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ah(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ih(n) {
    function r(z, M) {
      if (n) {
        var F = z.deletions;
        F === null ? (z.deletions = [M], z.flags |= 16) : F.push(M);
      }
    }
    function u(z, M) {
      if (!n)
        return null;
      for (; M !== null; )
        r(z, M), M = M.sibling;
      return null;
    }
    function o(z, M) {
      for (z = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function c(z, M) {
      return z = $u(z, M), z.index = 0, z.sibling = null, z;
    }
    function d(z, M, F) {
      return z.index = F, n ? (F = z.alternate, F !== null ? (F = F.index, F < M ? (z.flags |= 2, M) : F) : (z.flags |= 2, M)) : (z.flags |= 1048576, M);
    }
    function S(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function T(z, M, F, Re) {
      return M === null || M.tag !== 6 ? (M = Bs(F, z.mode, Re), M.return = z, M) : (M = c(M, F), M.return = z, M);
    }
    function D(z, M, F, Re) {
      var Qe = F.type;
      return Qe === me ? ve(z, M, F.props.children, Re, F.key) : M !== null && (M.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === _e && ah(Qe) === M.type) ? (Re = c(M, F.props), Re.ref = mo(z, M, F), Re.return = z, Re) : (Re = pf(F.type, F.key, F.props, null, z.mode, Re), Re.ref = mo(z, M, F), Re.return = z, Re);
    }
    function K(z, M, F, Re) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== F.containerInfo || M.stateNode.implementation !== F.implementation ? (M = Al(F, z.mode, Re), M.return = z, M) : (M = c(M, F.children || []), M.return = z, M);
    }
    function ve(z, M, F, Re, Qe) {
      return M === null || M.tag !== 7 ? (M = Nl(F, z.mode, Re, Qe), M.return = z, M) : (M = c(M, F), M.return = z, M);
    }
    function ge(z, M, F) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = Bs("" + M, z.mode, F), M.return = z, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case pe:
            return F = pf(M.type, M.key, M.props, null, z.mode, F), F.ref = mo(z, null, M), F.return = z, F;
          case Ve:
            return M = Al(M, z.mode, F), M.return = z, M;
          case _e:
            var Re = M._init;
            return ge(z, Re(M._payload), F);
        }
        if (Mt(M) || xe(M))
          return M = Nl(M, z.mode, F, null), M.return = z, M;
        zc(z, M);
      }
      return null;
    }
    function fe(z, M, F, Re) {
      var Qe = M !== null ? M.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return Qe !== null ? null : T(z, M, "" + F, Re);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case pe:
            return F.key === Qe ? D(z, M, F, Re) : null;
          case Ve:
            return F.key === Qe ? K(z, M, F, Re) : null;
          case _e:
            return Qe = F._init, fe(
              z,
              M,
              Qe(F._payload),
              Re
            );
        }
        if (Mt(F) || xe(F))
          return Qe !== null ? null : ve(z, M, F, Re, null);
        zc(z, F);
      }
      return null;
    }
    function Ae(z, M, F, Re, Qe) {
      if (typeof Re == "string" && Re !== "" || typeof Re == "number")
        return z = z.get(F) || null, T(M, z, "" + Re, Qe);
      if (typeof Re == "object" && Re !== null) {
        switch (Re.$$typeof) {
          case pe:
            return z = z.get(Re.key === null ? F : Re.key) || null, D(M, z, Re, Qe);
          case Ve:
            return z = z.get(Re.key === null ? F : Re.key) || null, K(M, z, Re, Qe);
          case _e:
            var $e = Re._init;
            return Ae(z, M, F, $e(Re._payload), Qe);
        }
        if (Mt(Re) || xe(Re))
          return z = z.get(F) || null, ve(M, z, Re, Qe, null);
        zc(M, Re);
      }
      return null;
    }
    function Be(z, M, F, Re) {
      for (var Qe = null, $e = null, Ze = M, ct = M = 0, pr = null; Ze !== null && ct < F.length; ct++) {
        Ze.index > ct ? (pr = Ze, Ze = null) : pr = Ze.sibling;
        var It = fe(z, Ze, F[ct], Re);
        if (It === null) {
          Ze === null && (Ze = pr);
          break;
        }
        n && Ze && It.alternate === null && r(z, Ze), M = d(It, M, ct), $e === null ? Qe = It : $e.sibling = It, $e = It, Ze = pr;
      }
      if (ct === F.length)
        return u(z, Ze), Cn && Ca(z, ct), Qe;
      if (Ze === null) {
        for (; ct < F.length; ct++)
          Ze = ge(z, F[ct], Re), Ze !== null && (M = d(Ze, M, ct), $e === null ? Qe = Ze : $e.sibling = Ze, $e = Ze);
        return Cn && Ca(z, ct), Qe;
      }
      for (Ze = o(z, Ze); ct < F.length; ct++)
        pr = Ae(Ze, z, ct, F[ct], Re), pr !== null && (n && pr.alternate !== null && Ze.delete(pr.key === null ? ct : pr.key), M = d(pr, M, ct), $e === null ? Qe = pr : $e.sibling = pr, $e = pr);
      return n && Ze.forEach(function(Iu) {
        return r(z, Iu);
      }), Cn && Ca(z, ct), Qe;
    }
    function Ke(z, M, F, Re) {
      var Qe = xe(F);
      if (typeof Qe != "function")
        throw Error(h(150));
      if (F = Qe.call(F), F == null)
        throw Error(h(151));
      for (var $e = Qe = null, Ze = M, ct = M = 0, pr = null, It = F.next(); Ze !== null && !It.done; ct++, It = F.next()) {
        Ze.index > ct ? (pr = Ze, Ze = null) : pr = Ze.sibling;
        var Iu = fe(z, Ze, It.value, Re);
        if (Iu === null) {
          Ze === null && (Ze = pr);
          break;
        }
        n && Ze && Iu.alternate === null && r(z, Ze), M = d(Iu, M, ct), $e === null ? Qe = Iu : $e.sibling = Iu, $e = Iu, Ze = pr;
      }
      if (It.done)
        return u(
          z,
          Ze
        ), Cn && Ca(z, ct), Qe;
      if (Ze === null) {
        for (; !It.done; ct++, It = F.next())
          It = ge(z, It.value, Re), It !== null && (M = d(It, M, ct), $e === null ? Qe = It : $e.sibling = It, $e = It);
        return Cn && Ca(z, ct), Qe;
      }
      for (Ze = o(z, Ze); !It.done; ct++, It = F.next())
        It = Ae(Ze, z, ct, It.value, Re), It !== null && (n && It.alternate !== null && Ze.delete(It.key === null ? ct : It.key), M = d(It, M, ct), $e === null ? Qe = It : $e.sibling = It, $e = It);
      return n && Ze.forEach(function(ng) {
        return r(z, ng);
      }), Cn && Ca(z, ct), Qe;
    }
    function $n(z, M, F, Re) {
      if (typeof F == "object" && F !== null && F.type === me && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case pe:
            e: {
              for (var Qe = F.key, $e = M; $e !== null; ) {
                if ($e.key === Qe) {
                  if (Qe = F.type, Qe === me) {
                    if ($e.tag === 7) {
                      u(z, $e.sibling), M = c($e, F.props.children), M.return = z, z = M;
                      break e;
                    }
                  } else if ($e.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === _e && ah(Qe) === $e.type) {
                    u(z, $e.sibling), M = c($e, F.props), M.ref = mo(z, $e, F), M.return = z, z = M;
                    break e;
                  }
                  u(z, $e);
                  break;
                } else
                  r(z, $e);
                $e = $e.sibling;
              }
              F.type === me ? (M = Nl(F.props.children, z.mode, Re, F.key), M.return = z, z = M) : (Re = pf(F.type, F.key, F.props, null, z.mode, Re), Re.ref = mo(z, M, F), Re.return = z, z = Re);
            }
            return S(z);
          case Ve:
            e: {
              for ($e = F.key; M !== null; ) {
                if (M.key === $e)
                  if (M.tag === 4 && M.stateNode.containerInfo === F.containerInfo && M.stateNode.implementation === F.implementation) {
                    u(z, M.sibling), M = c(M, F.children || []), M.return = z, z = M;
                    break e;
                  } else {
                    u(z, M);
                    break;
                  }
                else
                  r(z, M);
                M = M.sibling;
              }
              M = Al(F, z.mode, Re), M.return = z, z = M;
            }
            return S(z);
          case _e:
            return $e = F._init, $n(z, M, $e(F._payload), Re);
        }
        if (Mt(F))
          return Be(z, M, F, Re);
        if (xe(F))
          return Ke(z, M, F, Re);
        zc(z, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, M !== null && M.tag === 6 ? (u(z, M.sibling), M = c(M, F), M.return = z, z = M) : (u(z, M), M = Bs(F, z.mode, Re), M.return = z, z = M), S(z)) : u(z, M);
    }
    return $n;
  }
  var yo = ih(!0), uh = ih(!1), Ts = {}, oi = Et(Ts), bs = Et(Ts), go = Et(Ts);
  function ml(n) {
    if (n === Ts)
      throw Error(h(174));
    return n;
  }
  function jd(n, r) {
    switch (Jt(go, r), Jt(bs, n), Jt(oi, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : un(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = un(r, n);
    }
    Qt(oi), Jt(oi, r);
  }
  function Uu() {
    Qt(oi), Qt(bs), Qt(go);
  }
  function at(n) {
    ml(go.current);
    var r = ml(oi.current), u = un(r, n.type);
    r !== u && (Jt(bs, n), Jt(oi, u));
  }
  function Ot(n) {
    bs.current === n && (Qt(oi), Qt(bs));
  }
  var ut = Et(0);
  function Nn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var u = r.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Va = [];
  function Uc() {
    for (var n = 0; n < Va.length; n++)
      Va[n]._workInProgressVersionPrimary = null;
    Va.length = 0;
  }
  var jc = be.ReactCurrentDispatcher, Pd = be.ReactCurrentBatchConfig, yl = 0, Rn = null, J = null, Ut = null, lt = !1, _i = !1, Ta = 0, gl = 0;
  function _n() {
    throw Error(h(321));
  }
  function Sl(n, r) {
    if (r === null)
      return !1;
    for (var u = 0; u < r.length && u < n.length; u++)
      if (!za(n[u], r[u]))
        return !1;
    return !0;
  }
  function ju(n, r, u, o, c, d) {
    if (yl = d, Rn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, jc.current = n === null || n.memoizedState === null ? Py : Fy, n = u(o, c), _i) {
      d = 0;
      do {
        if (_i = !1, Ta = 0, 25 <= d)
          throw Error(h(301));
        d += 1, Ut = J = null, r.updateQueue = null, jc.current = Hd, n = u(o, c);
      } while (_i);
    }
    if (jc.current = Jc, r = J !== null && J.next !== null, yl = 0, Ut = J = Rn = null, lt = !1, r)
      throw Error(h(300));
    return n;
  }
  function El() {
    var n = Ta !== 0;
    return Ta = 0, n;
  }
  function Ba() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ut === null ? Rn.memoizedState = Ut = n : Ut = Ut.next = n, Ut;
  }
  function sa() {
    if (J === null) {
      var n = Rn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = J.next;
    var r = Ut === null ? Rn.memoizedState : Ut.next;
    if (r !== null)
      Ut = r, J = n;
    else {
      if (n === null)
        throw Error(h(310));
      J = n, n = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, Ut === null ? Rn.memoizedState = Ut = n : Ut = Ut.next = n;
    }
    return Ut;
  }
  function Cl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ws(n) {
    var r = sa(), u = r.queue;
    if (u === null)
      throw Error(h(311));
    u.lastRenderedReducer = n;
    var o = J, c = o.baseQueue, d = u.pending;
    if (d !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = d.next, d.next = S;
      }
      o.baseQueue = c = d, u.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var T = S = null, D = null, K = d;
      do {
        var ve = K.lane;
        if ((yl & ve) === ve)
          D !== null && (D = D.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), o = K.hasEagerState ? K.eagerState : n(o, K.action);
        else {
          var ge = {
            lane: ve,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          D === null ? (T = D = ge, S = o) : D = D.next = ge, Rn.lanes |= ve, Gi |= ve;
        }
        K = K.next;
      } while (K !== null && K !== d);
      D === null ? S = o : D.next = T, za(o, r.memoizedState) || (qn = !0), r.memoizedState = o, r.baseState = S, r.baseQueue = D, u.lastRenderedState = o;
    }
    if (n = u.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Rn.lanes |= d, Gi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (u.lanes = 0);
    return [r.memoizedState, u.dispatch];
  }
  function xs(n) {
    var r = sa(), u = r.queue;
    if (u === null)
      throw Error(h(311));
    u.lastRenderedReducer = n;
    var o = u.dispatch, c = u.pending, d = r.memoizedState;
    if (c !== null) {
      u.pending = null;
      var S = c = c.next;
      do
        d = n(d, S.action), S = S.next;
      while (S !== c);
      za(d, r.memoizedState) || (qn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), u.lastRenderedState = d;
    }
    return [d, o];
  }
  function Pc() {
  }
  function Fc(n, r) {
    var u = Rn, o = sa(), c = r(), d = !za(o.memoizedState, c);
    if (d && (o.memoizedState = c, qn = !0), o = o.queue, Os(Bc.bind(null, u, o, n), [n]), o.getSnapshot !== r || d || Ut !== null && Ut.memoizedState.tag & 1) {
      if (u.flags |= 2048, Rl(9, Vc.bind(null, u, o, c, r), void 0, null), An === null)
        throw Error(h(349));
      yl & 30 || Hc(u, r, c);
    }
    return c;
  }
  function Hc(n, r, u) {
    n.flags |= 16384, n = { getSnapshot: r, value: u }, r = Rn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Rn.updateQueue = r, r.stores = [n]) : (u = r.stores, u === null ? r.stores = [n] : u.push(n));
  }
  function Vc(n, r, u, o) {
    r.value = u, r.getSnapshot = o, $c(r) && Ic(n);
  }
  function Bc(n, r, u) {
    return u(function() {
      $c(r) && Ic(n);
    });
  }
  function $c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var u = r();
      return !za(n, u);
    } catch {
      return !0;
    }
  }
  function Ic(n) {
    var r = Yi(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Yc(n) {
    var r = Ba();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Zc.bind(null, Rn, n), [r.memoizedState, n];
  }
  function Rl(n, r, u, o) {
    return n = { tag: n, create: r, destroy: u, deps: o, next: null }, r = Rn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Rn.updateQueue = r, r.lastEffect = n.next = n) : (u = r.lastEffect, u === null ? r.lastEffect = n.next = n : (o = u.next, u.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Kc() {
    return sa().memoizedState;
  }
  function _l(n, r, u, o) {
    var c = Ba();
    Rn.flags |= n, c.memoizedState = Rl(1 | r, u, void 0, o === void 0 ? null : o);
  }
  function Wi(n, r, u, o) {
    var c = sa();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (J !== null) {
      var S = J.memoizedState;
      if (d = S.destroy, o !== null && Sl(o, S.deps)) {
        c.memoizedState = Rl(r, u, d, o);
        return;
      }
    }
    Rn.flags |= n, c.memoizedState = Rl(1 | r, u, d, o);
  }
  function Wc(n, r) {
    return _l(8390656, 8, n, r);
  }
  function Os(n, r) {
    return Wi(2048, 8, n, r);
  }
  function Qc(n, r) {
    return Wi(4, 2, n, r);
  }
  function qc(n, r) {
    return Wi(4, 4, n, r);
  }
  function Fd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function So(n, r, u) {
    return u = u != null ? u.concat([n]) : null, Wi(4, 4, Fd.bind(null, r, n), u);
  }
  function Gc() {
  }
  function Eo(n, r) {
    var u = sa();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && Sl(r, o[1]) ? o[0] : (u.memoizedState = [n, r], n);
  }
  function Pu(n, r) {
    var u = sa();
    r = r === void 0 ? null : r;
    var o = u.memoizedState;
    return o !== null && r !== null && Sl(r, o[1]) ? o[0] : (n = n(), u.memoizedState = [n, r], n);
  }
  function ca(n, r, u) {
    return yl & 21 ? (za(u, r) || (u = Zl(), Rn.lanes |= u, Gi |= u, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, qn = !0), n.memoizedState = u);
  }
  function jy(n, r) {
    var u = Yt;
    Yt = u !== 0 && 4 > u ? u : 4, n(!0);
    var o = Pd.transition;
    Pd.transition = {};
    try {
      n(!1), r();
    } finally {
      Yt = u, Pd.transition = o;
    }
  }
  function vn() {
    return sa().memoizedState;
  }
  function Xc(n, r, u) {
    var o = Gn(n);
    if (u = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null }, Co(n))
      Ds(r, u);
    else if (u = Jp(n, r, u, o), u !== null) {
      var c = zr();
      Ur(u, n, o, c), lh(u, r, o);
    }
  }
  function Zc(n, r, u) {
    var o = Gn(n), c = { lane: o, action: u, hasEagerState: !1, eagerState: null, next: null };
    if (Co(n))
      Ds(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var S = r.lastRenderedState, T = d(S, u);
          if (c.hasEagerState = !0, c.eagerState = T, za(T, S)) {
            var D = r.interleaved;
            D === null ? (c.next = c, Nd(r)) : (c.next = D.next, D.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      u = Jp(n, r, c, o), u !== null && (c = zr(), Ur(u, n, o, c), lh(u, r, o));
    }
  }
  function Co(n) {
    var r = n.alternate;
    return n === Rn || r !== null && r === Rn;
  }
  function Ds(n, r) {
    _i = lt = !0;
    var u = n.pending;
    u === null ? r.next = r : (r.next = u.next, u.next = r), n.pending = r;
  }
  function lh(n, r, u) {
    if (u & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, u |= o, r.lanes = u, gi(n, u);
    }
  }
  var Jc = { readContext: Bn, useCallback: _n, useContext: _n, useEffect: _n, useImperativeHandle: _n, useInsertionEffect: _n, useLayoutEffect: _n, useMemo: _n, useReducer: _n, useRef: _n, useState: _n, useDebugValue: _n, useDeferredValue: _n, useTransition: _n, useMutableSource: _n, useSyncExternalStore: _n, useId: _n, unstable_isNewReconciler: !1 }, Py = { readContext: Bn, useCallback: function(n, r) {
    return Ba().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Bn, useEffect: Wc, useImperativeHandle: function(n, r, u) {
    return u = u != null ? u.concat([n]) : null, _l(
      4194308,
      4,
      Fd.bind(null, r, n),
      u
    );
  }, useLayoutEffect: function(n, r) {
    return _l(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return _l(4, 2, n, r);
  }, useMemo: function(n, r) {
    var u = Ba();
    return r = r === void 0 ? null : r, n = n(), u.memoizedState = [n, r], n;
  }, useReducer: function(n, r, u) {
    var o = Ba();
    return r = u !== void 0 ? u(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Xc.bind(null, Rn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ba();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Yc, useDebugValue: Gc, useDeferredValue: function(n) {
    return Ba().memoizedState = n;
  }, useTransition: function() {
    var n = Yc(!1), r = n[0];
    return n = jy.bind(null, n[1]), Ba().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, u) {
    var o = Rn, c = Ba();
    if (Cn) {
      if (u === void 0)
        throw Error(h(407));
      u = u();
    } else {
      if (u = r(), An === null)
        throw Error(h(349));
      yl & 30 || Hc(o, r, u);
    }
    c.memoizedState = u;
    var d = { value: u, getSnapshot: r };
    return c.queue = d, Wc(Bc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Rl(9, Vc.bind(null, o, d, u, r), void 0, null), u;
  }, useId: function() {
    var n = Ba(), r = An.identifierPrefix;
    if (Cn) {
      var u = Ii, o = gr;
      u = (o & ~(1 << 32 - Vr(o) - 1)).toString(32) + u, r = ":" + r + "R" + u, u = Ta++, 0 < u && (r += "H" + u.toString(32)), r += ":";
    } else
      u = gl++, r = ":" + r + "r" + u.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Fy = {
    readContext: Bn,
    useCallback: Eo,
    useContext: Bn,
    useEffect: Os,
    useImperativeHandle: So,
    useInsertionEffect: Qc,
    useLayoutEffect: qc,
    useMemo: Pu,
    useReducer: ws,
    useRef: Kc,
    useState: function() {
      return ws(Cl);
    },
    useDebugValue: Gc,
    useDeferredValue: function(n) {
      var r = sa();
      return ca(r, J.memoizedState, n);
    },
    useTransition: function() {
      var n = ws(Cl)[0], r = sa().memoizedState;
      return [n, r];
    },
    useMutableSource: Pc,
    useSyncExternalStore: Fc,
    useId: vn,
    unstable_isNewReconciler: !1
  }, Hd = { readContext: Bn, useCallback: Eo, useContext: Bn, useEffect: Os, useImperativeHandle: So, useInsertionEffect: Qc, useLayoutEffect: qc, useMemo: Pu, useReducer: xs, useRef: Kc, useState: function() {
    return xs(Cl);
  }, useDebugValue: Gc, useDeferredValue: function(n) {
    var r = sa();
    return J === null ? r.memoizedState = n : ca(r, J.memoizedState, n);
  }, useTransition: function() {
    var n = xs(Cl)[0], r = sa().memoizedState;
    return [n, r];
  }, useMutableSource: Pc, useSyncExternalStore: Fc, useId: vn, unstable_isNewReconciler: !1 };
  function Ro(n, r) {
    try {
      var u = "", o = r;
      do
        u += Rt(o), o = o.return;
      while (o);
      var c = u;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function ks(n, r, u) {
    return { value: n, source: null, stack: u ?? null, digest: r ?? null };
  }
  function ef(n, r) {
    try {
      console.error(r.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Hy = typeof WeakMap == "function" ? WeakMap : Map;
  function oh(n, r, u) {
    u = Ki(-1, u), u.tag = 3, u.payload = { element: null };
    var o = r.value;
    return u.callback = function() {
      of || (of = !0, Ol = o), ef(n, r);
    }, u;
  }
  function Ms(n, r, u) {
    u = Ki(-1, u), u.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      u.payload = function() {
        return o(c);
      }, u.callback = function() {
        ef(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (u.callback = function() {
      ef(n, r), typeof o != "function" && (wi === null ? wi = /* @__PURE__ */ new Set([this]) : wi.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), u;
  }
  function sh(n, r, u) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Hy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(u) || (c.add(u), n = Wy.bind(null, n, r, u), r.then(n, n));
  }
  function Vd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Bd(n, r, u, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, u.flags |= 131072, u.flags &= -52805, u.tag === 1 && (u.alternate === null ? u.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Au(u, r, 1))), u.lanes |= 1), n);
  }
  var Vy = be.ReactCurrentOwner, qn = !1;
  function tr(n, r, u, o) {
    r.child = n === null ? uh(r, null, u, o) : yo(r, n.child, u, o);
  }
  function Fu(n, r, u, o, c) {
    u = u.render;
    var d = r.ref;
    return De(r, c), o = ju(n, r, u, o, d, c), u = El(), n !== null && !qn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Er(n, r, c)) : (Cn && u && wc(r), r.flags |= 1, tr(n, r, o, c), r.child);
  }
  function tf(n, r, u, o, c) {
    if (n === null) {
      var d = u.type;
      return typeof d == "function" && !lv(d) && d.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (r.tag = 15, r.type = d, fa(n, r, d, o, c)) : (n = pf(u.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var S = d.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ds, u(S, o) && n.ref === r.ref)
        return Er(n, r, c);
    }
    return r.flags |= 1, n = $u(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function fa(n, r, u, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ds(d, o) && n.ref === r.ref)
        if (qn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (qn = !0);
        else
          return r.lanes = n.lanes, Er(n, r, c);
    }
    return _o(n, r, u, o, c);
  }
  function Tl(n, r, u) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt(Do, ba), ba |= u;
      else {
        if (!(u & 1073741824))
          return n = d !== null ? d.baseLanes | u : u, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt(Do, ba), ba |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : u, Jt(Do, ba), ba |= o;
      }
    else
      d !== null ? (o = d.baseLanes | u, r.memoizedState = null) : o = u, Jt(Do, ba), ba |= o;
    return tr(n, r, c, u), r.child;
  }
  function Ct(n, r) {
    var u = r.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (r.flags |= 512, r.flags |= 2097152);
  }
  function _o(n, r, u, o, c) {
    var d = bn(u) ? aa : st.current;
    return d = ja(r, d), De(r, c), u = ju(n, r, u, o, d, c), o = El(), n !== null && !qn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Er(n, r, c)) : (Cn && o && wc(r), r.flags |= 1, tr(n, r, u, c), r.child);
  }
  function $d(n, r, u, o, c) {
    if (bn(u)) {
      var d = !0;
      bc(r);
    } else
      d = !1;
    if (De(r, c), r.stateNode === null)
      Lr(n, r), nh(r, u, o), Ac(r, u, o, c), o = !0;
    else if (n === null) {
      var S = r.stateNode, T = r.memoizedProps;
      S.props = T;
      var D = S.context, K = u.contextType;
      typeof K == "object" && K !== null ? K = Bn(K) : (K = bn(u) ? aa : st.current, K = ja(r, K));
      var ve = u.getDerivedStateFromProps, ge = typeof ve == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      ge || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (T !== o || D !== K) && rh(r, S, o, K), Nu = !1;
      var fe = r.memoizedState;
      S.state = fe, zu(r, o, S, c), D = r.memoizedState, T !== o || fe !== D || Pn.current || Nu ? (typeof ve == "function" && (Ud(r, u, ve, o), D = r.memoizedState), (T = Nu || th(r, u, T, o, fe, D, K)) ? (ge || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = D), S.props = o, S.state = D, S.context = K, o = T) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      S = r.stateNode, er(n, r), T = r.memoizedProps, K = r.type === r.elementType ? T : _a(r.type, T), S.props = K, ge = r.pendingProps, fe = S.context, D = u.contextType, typeof D == "object" && D !== null ? D = Bn(D) : (D = bn(u) ? aa : st.current, D = ja(r, D));
      var Ae = u.getDerivedStateFromProps;
      (ve = typeof Ae == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (T !== ge || fe !== D) && rh(r, S, o, D), Nu = !1, fe = r.memoizedState, S.state = fe, zu(r, o, S, c);
      var Be = r.memoizedState;
      T !== ge || fe !== Be || Pn.current || Nu ? (typeof Ae == "function" && (Ud(r, u, Ae, o), Be = r.memoizedState), (K = Nu || th(r, u, K, o, fe, Be, D) || !1) ? (ve || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(o, Be, D), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(o, Be, D)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || T === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Be), S.props = o, S.state = Be, S.context = D, o = K) : (typeof S.componentDidUpdate != "function" || T === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ch(n, r, u, o, d, c);
  }
  function ch(n, r, u, o, c, d) {
    Ct(n, r);
    var S = (r.flags & 128) !== 0;
    if (!o && !S)
      return c && qp(r, u, !1), Er(n, r, d);
    o = r.stateNode, Vy.current = r;
    var T = S && typeof u.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && S ? (r.child = yo(r, n.child, null, d), r.child = yo(r, null, T, d)) : tr(n, r, T, d), r.memoizedState = o.state, c && qp(r, u, !0), r.child;
  }
  function fh(n) {
    var r = n.stateNode;
    r.pendingContext ? Du(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Du(n, r.context, !1), jd(n, r.containerInfo);
  }
  function nf(n, r, u, o, c) {
    return Ln(), kd(c), r.flags |= 256, tr(n, r, u, o), r.child;
  }
  var bl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Id(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Yd(n, r, u) {
    var o = r.pendingProps, c = ut.current, d = !1, S = (r.flags & 128) !== 0, T;
    if ((T = S) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Jt(ut, c & 1), n === null)
      return Oc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, S = { mode: "hidden", children: S }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = S) : d = Vs(S, o, 0, null), n = Nl(n, o, u, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Id(u), r.memoizedState = bl, n) : Kd(r, S));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null))
      return By(n, r, S, o, T, c, u);
    if (d) {
      d = o.fallback, S = r.mode, c = n.child, T = c.sibling;
      var D = { mode: "hidden", children: o.children };
      return !(S & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = D, r.deletions = null) : (o = $u(c, D), o.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = $u(T, d) : (d = Nl(d, S, u, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, S = n.child.memoizedState, S = S === null ? Id(u) : { baseLanes: S.baseLanes | u, cachePool: null, transitions: S.transitions }, d.memoizedState = S, d.childLanes = n.childLanes & ~u, r.memoizedState = bl, o;
    }
    return d = n.child, n = d.sibling, o = $u(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = u), o.return = r, o.sibling = null, n !== null && (u = r.deletions, u === null ? (r.deletions = [n], r.flags |= 16) : u.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Kd(n, r) {
    return r = Vs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function To(n, r, u, o) {
    return o !== null && kd(o), yo(r, n.child, null, u), n = Kd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function By(n, r, u, o, c, d, S) {
    if (u)
      return r.flags & 256 ? (r.flags &= -257, o = ks(Error(h(422))), To(n, r, S, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Vs({ mode: "visible", children: o.children }, c, 0, null), d = Nl(d, c, S, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && yo(r, n.child, null, S), r.child.memoizedState = Id(S), r.memoizedState = bl, d);
    if (!(r.mode & 1))
      return To(n, r, S, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var T = o.dgst;
      return o = T, d = Error(h(419)), o = ks(d, o, void 0), To(n, r, S, o);
    }
    if (T = (S & n.childLanes) !== 0, qn || T) {
      if (o = An, o !== null) {
        switch (S & -S) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | S) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Yi(n, c), Ur(o, n, c, -1));
      }
      return av(), o = ks(Error(h(421))), To(n, r, S, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Qy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, oa = li(c.nextSibling), Ra = r, Cn = !0, Ha = null, n !== null && (la[Mr++] = gr, la[Mr++] = Ii, la[Mr++] = Fa, gr = n.id, Ii = n.overflow, Fa = r), r = Kd(r, o.children), r.flags |= 4096, r);
  }
  function Wd(n, r, u) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), fr(n.return, r, u);
  }
  function rf(n, r, u, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: u, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = u, d.tailMode = c);
  }
  function Qd(n, r, u) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (tr(n, r, o.children, u), o = ut.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Wd(n, u, r);
            else if (n.tag === 19)
              Wd(n, u, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Jt(ut, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (u = r.child, c = null; u !== null; )
            n = u.alternate, n !== null && Nn(n) === null && (c = u), u = u.sibling;
          u = c, u === null ? (c = r.child, r.child = null) : (c = u.sibling, u.sibling = null), rf(r, !1, c, u, d);
          break;
        case "backwards":
          for (u = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Nn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = u, u = c, c = n;
          }
          rf(r, !0, u, null, d);
          break;
        case "together":
          rf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Lr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Er(n, r, u) {
    if (n !== null && (r.dependencies = n.dependencies), Gi |= r.lanes, !(u & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(h(153));
    if (r.child !== null) {
      for (n = r.child, u = $u(n, n.pendingProps), r.child = u, u.return = r; n.sibling !== null; )
        n = n.sibling, u = u.sibling = $u(n, n.pendingProps), u.return = r;
      u.sibling = null;
    }
    return r.child;
  }
  function Qi(n, r, u) {
    switch (r.tag) {
      case 3:
        fh(r), Ln();
        break;
      case 5:
        at(r);
        break;
      case 1:
        bn(r.type) && bc(r);
        break;
      case 4:
        jd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Jt(Ri, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Jt(ut, ut.current & 1), r.flags |= 128, null) : u & r.child.childLanes ? Yd(n, r, u) : (Jt(ut, ut.current & 1), n = Er(n, r, u), n !== null ? n.sibling : null);
        Jt(ut, ut.current & 1);
        break;
      case 19:
        if (o = (u & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Qd(n, r, u);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Jt(ut, ut.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Tl(n, r, u);
    }
    return Er(n, r, u);
  }
  var Ls, wl, $a, nr;
  Ls = function(n, r) {
    for (var u = r.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === r)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === r)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, wl = function() {
  }, $a = function(n, r, u, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ml(oi.current);
      var d = null;
      switch (u) {
        case "input":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        case "select":
          c = b({}, c, { value: void 0 }), o = b({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = sn(n, c), o = sn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Tc);
      }
      Vn(u, o);
      var S;
      u = null;
      for (K in c)
        if (!o.hasOwnProperty(K) && c.hasOwnProperty(K) && c[K] != null)
          if (K === "style") {
            var T = c[K];
            for (S in T)
              T.hasOwnProperty(S) && (u || (u = {}), u[S] = "");
          } else
            K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (O.hasOwnProperty(K) ? d || (d = []) : (d = d || []).push(K, null));
      for (K in o) {
        var D = o[K];
        if (T = c != null ? c[K] : void 0, o.hasOwnProperty(K) && D !== T && (D != null || T != null))
          if (K === "style")
            if (T) {
              for (S in T)
                !T.hasOwnProperty(S) || D && D.hasOwnProperty(S) || (u || (u = {}), u[S] = "");
              for (S in D)
                D.hasOwnProperty(S) && T[S] !== D[S] && (u || (u = {}), u[S] = D[S]);
            } else
              u || (d || (d = []), d.push(
                K,
                u
              )), u = D;
          else
            K === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, T = T ? T.__html : void 0, D != null && T !== D && (d = d || []).push(K, D)) : K === "children" ? typeof D != "string" && typeof D != "number" || (d = d || []).push(K, "" + D) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (O.hasOwnProperty(K) ? (D != null && K === "onScroll" && dn("scroll", n), d || T === D || (d = [])) : (d = d || []).push(K, D));
      }
      u && (d = d || []).push("style", u);
      var K = d;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, nr = function(n, r, u, o) {
    u !== o && (r.flags |= 4);
  };
  function Ns(n, r) {
    if (!Cn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var u = null; r !== null; )
            r.alternate !== null && (u = r), r = r.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var o = null; u !== null; )
            u.alternate !== null && (o = u), u = u.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, u = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        u |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        u |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = u, r;
  }
  function $y(n, r, u) {
    var o = r.pendingProps;
    switch (Od(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nr(r), null;
      case 1:
        return bn(r.type) && Pa(), Nr(r), null;
      case 3:
        return o = r.stateNode, Uu(), Qt(Pn), Qt(st), Uc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ha !== null && (Hs(Ha), Ha = null))), wl(n, r), Nr(r), null;
      case 5:
        Ot(r);
        var c = ml(go.current);
        if (u = r.type, n !== null && r.stateNode != null)
          $a(n, r, u, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(h(166));
            return Nr(r), null;
          }
          if (n = ml(oi.current), Dc(r)) {
            o = r.stateNode, u = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[vl] = d, n = (r.mode & 1) !== 0, u) {
              case "dialog":
                dn("cancel", o), dn("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                dn("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ms.length; c++)
                  dn(ms[c], o);
                break;
              case "source":
                dn("error", o);
                break;
              case "img":
              case "image":
              case "link":
                dn(
                  "error",
                  o
                ), dn("load", o);
                break;
              case "details":
                dn("toggle", o);
                break;
              case "input":
                Un(o, d), dn("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, dn("invalid", o);
                break;
              case "textarea":
                Nt(o, d), dn("invalid", o);
            }
            Vn(u, d), c = null;
            for (var S in d)
              if (d.hasOwnProperty(S)) {
                var T = d[S];
                S === "children" ? typeof T == "string" ? o.textContent !== T && (d.suppressHydrationWarning !== !0 && _c(o.textContent, T, n), c = ["children", T]) : typeof T == "number" && o.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && _c(
                  o.textContent,
                  T,
                  n
                ), c = ["children", "" + T]) : O.hasOwnProperty(S) && T != null && S === "onScroll" && dn("scroll", o);
              }
            switch (u) {
              case "input":
                Zn(o), Dr(o, d, !0);
                break;
              case "textarea":
                Zn(o), an(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Tc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sn(u)), n === "http://www.w3.org/1999/xhtml" ? u === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = S.createElement(u, { is: o.is }) : (n = S.createElement(u), u === "select" && (S = n, o.multiple ? S.multiple = !0 : o.size && (S.size = o.size))) : n = S.createElementNS(n, u), n[Ei] = r, n[vl] = o, Ls(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = kn(u, o), u) {
                case "dialog":
                  dn("cancel", n), dn("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  dn("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ms.length; c++)
                    dn(ms[c], n);
                  c = o;
                  break;
                case "source":
                  dn("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  dn(
                    "error",
                    n
                  ), dn("load", n), c = o;
                  break;
                case "details":
                  dn("toggle", n), c = o;
                  break;
                case "input":
                  Un(n, o), c = Kn(n, o), dn("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = b({}, o, { value: void 0 }), dn("invalid", n);
                  break;
                case "textarea":
                  Nt(n, o), c = sn(n, o), dn("invalid", n);
                  break;
                default:
                  c = o;
              }
              Vn(u, c), T = c;
              for (d in T)
                if (T.hasOwnProperty(d)) {
                  var D = T[d];
                  d === "style" ? At(n, D) : d === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && Jn(n, D)) : d === "children" ? typeof D == "string" ? (u !== "textarea" || D !== "") && lr(n, D) : typeof D == "number" && lr(n, "" + D) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (O.hasOwnProperty(d) ? D != null && d === "onScroll" && dn("scroll", n) : D != null && Ee(n, d, D, S));
                }
              switch (u) {
                case "input":
                  Zn(n), Dr(n, o, !1);
                  break;
                case "textarea":
                  Zn(n), an(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + vt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? _t(n, !!o.multiple, d, !1) : o.defaultValue != null && _t(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Tc);
              }
              switch (u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Nr(r), null;
      case 6:
        if (n && r.stateNode != null)
          nr(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(h(166));
          if (u = ml(go.current), ml(oi.current), Dc(r)) {
            if (o = r.stateNode, u = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== u) && (n = Ra, n !== null))
              switch (n.tag) {
                case 3:
                  _c(o.nodeValue, u, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && _c(o.nodeValue, u, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Nr(r), null;
      case 13:
        if (Qt(ut), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Cn && oa !== null && r.mode & 1 && !(r.flags & 128))
            Zp(), Ln(), r.flags |= 98560, d = !1;
          else if (d = Dc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(h(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(h(317));
              d[Ei] = r;
            } else
              Ln(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Nr(r), d = !1;
          } else
            Ha !== null && (Hs(Ha), Ha = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = u, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || ut.current & 1 ? ar === 0 && (ar = 3) : av())), r.updateQueue !== null && (r.flags |= 4), Nr(r), null);
      case 4:
        return Uu(), wl(n, r), n === null && vo(r.stateNode.containerInfo), Nr(r), null;
      case 10:
        return Lu(r.type._context), Nr(r), null;
      case 17:
        return bn(r.type) && Pa(), Nr(r), null;
      case 19:
        if (Qt(ut), d = r.memoizedState, d === null)
          return Nr(r), null;
        if (o = (r.flags & 128) !== 0, S = d.rendering, S === null)
          if (o)
            Ns(d, !1);
          else {
            if (ar !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = Nn(n), S !== null) {
                  for (r.flags |= 128, Ns(d, !1), o = S.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = u, u = r.child; u !== null; )
                    d = u, n = o, d.flags &= 14680066, S = d.alternate, S === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = S.childLanes, d.lanes = S.lanes, d.child = S.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = S.memoizedProps, d.memoizedState = S.memoizedState, d.updateQueue = S.updateQueue, d.type = S.type, n = S.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return Jt(ut, ut.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Ht() > Mo && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Nn(S), n !== null) {
              if (r.flags |= 128, o = !0, u = n.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), Ns(d, !0), d.tail === null && d.tailMode === "hidden" && !S.alternate && !Cn)
                return Nr(r), null;
            } else
              2 * Ht() - d.renderingStartTime > Mo && u !== 1073741824 && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
          d.isBackwards ? (S.sibling = r.child, r.child = S) : (u = d.last, u !== null ? u.sibling = S : r.child = S, d.last = S);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ht(), r.sibling = null, u = ut.current, Jt(ut, o ? u & 1 | 2 : u & 1), r) : (Nr(r), null);
      case 22:
      case 23:
        return rv(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ba & 1073741824 && (Nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function qd(n, r) {
    switch (Od(r), r.tag) {
      case 1:
        return bn(r.type) && Pa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Uu(), Qt(Pn), Qt(st), Uc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ot(r), null;
      case 13:
        if (Qt(ut), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(h(340));
          Ln();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qt(ut), null;
      case 4:
        return Uu(), null;
      case 10:
        return Lu(r.type._context), null;
      case 22:
      case 23:
        return rv(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var As = !1, rr = !1, dh = typeof WeakSet == "function" ? WeakSet : Set, He = null;
  function bo(n, r) {
    var u = n.ref;
    if (u !== null)
      if (typeof u == "function")
        try {
          u(null);
        } catch (o) {
          Hn(n, r, o);
        }
      else
        u.current = null;
  }
  function zs(n, r, u) {
    try {
      u();
    } catch (o) {
      Hn(n, r, o);
    }
  }
  var vh = !1;
  function ph(n, r) {
    if (Ed = Aa, n = gc(), Hi(n)) {
      if ("selectionStart" in n)
        var u = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var o = u.getSelection && u.getSelection();
          if (o && o.rangeCount !== 0) {
            u = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              u.nodeType, d.nodeType;
            } catch {
              u = null;
              break e;
            }
            var S = 0, T = -1, D = -1, K = 0, ve = 0, ge = n, fe = null;
            t:
              for (; ; ) {
                for (var Ae; ge !== u || c !== 0 && ge.nodeType !== 3 || (T = S + c), ge !== d || o !== 0 && ge.nodeType !== 3 || (D = S + o), ge.nodeType === 3 && (S += ge.nodeValue.length), (Ae = ge.firstChild) !== null; )
                  fe = ge, ge = Ae;
                for (; ; ) {
                  if (ge === n)
                    break t;
                  if (fe === u && ++K === c && (T = S), fe === d && ++ve === o && (D = S), (Ae = ge.nextSibling) !== null)
                    break;
                  ge = fe, fe = ge.parentNode;
                }
                ge = Ae;
              }
            u = T === -1 || D === -1 ? null : { start: T, end: D };
          } else
            u = null;
        }
      u = u || { start: 0, end: 0 };
    } else
      u = null;
    for (fl = { focusedElem: n, selectionRange: u }, Aa = !1, He = r; He !== null; )
      if (r = He, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, He = n;
      else
        for (; He !== null; ) {
          r = He;
          try {
            var Be = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Be !== null) {
                    var Ke = Be.memoizedProps, $n = Be.memoizedState, z = r.stateNode, M = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Ke : _a(r.type, Ke), $n);
                    z.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var F = r.stateNode.containerInfo;
                  F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(h(163));
              }
          } catch (Re) {
            Hn(r, r.return, Re);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, He = n;
            break;
          }
          He = r.return;
        }
    return Be = vh, vh = !1, Be;
  }
  function Us(n, r, u) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && zs(r, u, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function js(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var u = r = r.next;
      do {
        if ((u.tag & n) === n) {
          var o = u.create;
          u.destroy = o();
        }
        u = u.next;
      } while (u !== r);
    }
  }
  function Gd(n) {
    var r = n.ref;
    if (r !== null) {
      var u = n.stateNode;
      switch (n.tag) {
        case 5:
          n = u;
          break;
        default:
          n = u;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Xd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Xd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[vl], delete r[_d], delete r[Uy], delete r[Td])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function hh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function af(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || hh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function wo(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? u.nodeType === 8 ? u.parentNode.insertBefore(n, r) : u.insertBefore(n, r) : (u.nodeType === 8 ? (r = u.parentNode, r.insertBefore(n, u)) : (r = u, r.appendChild(n)), u = u._reactRootContainer, u != null || r.onclick !== null || (r.onclick = Tc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (wo(n, r, u), n = n.sibling; n !== null; )
        wo(n, r, u), n = n.sibling;
  }
  function Ti(n, r, u) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? u.insertBefore(n, r) : u.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ti(n, r, u), n = n.sibling; n !== null; )
        Ti(n, r, u), n = n.sibling;
  }
  var wn = null, dr = !1;
  function Ia(n, r, u) {
    for (u = u.child; u !== null; )
      xo(n, r, u), u = u.sibling;
  }
  function xo(n, r, u) {
    if (ea && typeof ea.onCommitFiberUnmount == "function")
      try {
        ea.onCommitFiberUnmount(pu, u);
      } catch {
      }
    switch (u.tag) {
      case 5:
        rr || bo(u, r);
      case 6:
        var o = wn, c = dr;
        wn = null, Ia(n, r, u), wn = o, dr = c, wn !== null && (dr ? (n = wn, u = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(u) : n.removeChild(u)) : wn.removeChild(u.stateNode));
        break;
      case 18:
        wn !== null && (dr ? (n = wn, u = u.stateNode, n.nodeType === 8 ? wu(n.parentNode, u) : n.nodeType === 1 && wu(n, u), Cu(n)) : wu(wn, u.stateNode));
        break;
      case 4:
        o = wn, c = dr, wn = u.stateNode.containerInfo, dr = !0, Ia(n, r, u), wn = o, dr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rr && (o = u.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, S = d.destroy;
            d = d.tag, S !== void 0 && (d & 2 || d & 4) && zs(u, r, S), c = c.next;
          } while (c !== o);
        }
        Ia(n, r, u);
        break;
      case 1:
        if (!rr && (bo(u, r), o = u.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = u.memoizedProps, o.state = u.memoizedState, o.componentWillUnmount();
          } catch (T) {
            Hn(u, r, T);
          }
        Ia(n, r, u);
        break;
      case 21:
        Ia(n, r, u);
        break;
      case 22:
        u.mode & 1 ? (rr = (o = rr) || u.memoizedState !== null, Ia(n, r, u), rr = o) : Ia(n, r, u);
        break;
      default:
        Ia(n, r, u);
    }
  }
  function qi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new dh()), r.forEach(function(o) {
        var c = qy.bind(null, n, o);
        u.has(o) || (u.add(o), o.then(c, c));
      });
    }
  }
  function si(n, r) {
    var u = r.deletions;
    if (u !== null)
      for (var o = 0; o < u.length; o++) {
        var c = u[o];
        try {
          var d = n, S = r, T = S;
          e:
            for (; T !== null; ) {
              switch (T.tag) {
                case 5:
                  wn = T.stateNode, dr = !1;
                  break e;
                case 3:
                  wn = T.stateNode.containerInfo, dr = !0;
                  break e;
                case 4:
                  wn = T.stateNode.containerInfo, dr = !0;
                  break e;
              }
              T = T.return;
            }
          if (wn === null)
            throw Error(h(160));
          xo(d, S, c), wn = null, dr = !1;
          var D = c.alternate;
          D !== null && (D.return = null), c.return = null;
        } catch (K) {
          Hn(c, r, K);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        mh(r, n), r = r.sibling;
  }
  function mh(n, r) {
    var u = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (si(r, n), bi(n), o & 4) {
          try {
            Us(3, n, n.return), js(3, n);
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
          try {
            Us(5, n, n.return);
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        }
        break;
      case 1:
        si(r, n), bi(n), o & 512 && u !== null && bo(u, u.return);
        break;
      case 5:
        if (si(r, n), bi(n), o & 512 && u !== null && bo(u, u.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            lr(c, "");
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, S = u !== null ? u.memoizedProps : d, T = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null)
            try {
              T === "input" && d.type === "radio" && d.name != null && xn(c, d), kn(T, S);
              var K = kn(T, d);
              for (S = 0; S < D.length; S += 2) {
                var ve = D[S], ge = D[S + 1];
                ve === "style" ? At(c, ge) : ve === "dangerouslySetInnerHTML" ? Jn(c, ge) : ve === "children" ? lr(c, ge) : Ee(c, ve, ge, K);
              }
              switch (T) {
                case "input":
                  gn(c, d);
                  break;
                case "textarea":
                  On(c, d);
                  break;
                case "select":
                  var fe = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var Ae = d.value;
                  Ae != null ? _t(c, !!d.multiple, Ae, !1) : fe !== !!d.multiple && (d.defaultValue != null ? _t(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : _t(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[vl] = d;
            } catch (Ke) {
              Hn(n, n.return, Ke);
            }
        }
        break;
      case 6:
        if (si(r, n), bi(n), o & 4) {
          if (n.stateNode === null)
            throw Error(h(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        }
        break;
      case 3:
        if (si(r, n), bi(n), o & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Cu(r.containerInfo);
          } catch (Ke) {
            Hn(n, n.return, Ke);
          }
        break;
      case 4:
        si(r, n), bi(n);
        break;
      case 13:
        si(r, n), bi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (ev = Ht())), o & 4 && qi(n);
        break;
      case 22:
        if (ve = u !== null && u.memoizedState !== null, n.mode & 1 ? (rr = (K = rr) || ve, si(r, n), rr = K) : si(r, n), bi(n), o & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !ve && n.mode & 1)
            for (He = n, ve = n.child; ve !== null; ) {
              for (ge = He = ve; He !== null; ) {
                switch (fe = He, Ae = fe.child, fe.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Us(4, fe, fe.return);
                    break;
                  case 1:
                    bo(fe, fe.return);
                    var Be = fe.stateNode;
                    if (typeof Be.componentWillUnmount == "function") {
                      o = fe, u = fe.return;
                      try {
                        r = o, Be.props = r.memoizedProps, Be.state = r.memoizedState, Be.componentWillUnmount();
                      } catch (Ke) {
                        Hn(o, u, Ke);
                      }
                    }
                    break;
                  case 5:
                    bo(fe, fe.return);
                    break;
                  case 22:
                    if (fe.memoizedState !== null) {
                      Zd(ge);
                      continue;
                    }
                }
                Ae !== null ? (Ae.return = fe, He = Ae) : Zd(ge);
              }
              ve = ve.sibling;
            }
          e:
            for (ve = null, ge = n; ; ) {
              if (ge.tag === 5) {
                if (ve === null) {
                  ve = ge;
                  try {
                    c = ge.stateNode, K ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = ge.stateNode, D = ge.memoizedProps.style, S = D != null && D.hasOwnProperty("display") ? D.display : null, T.style.display = gt("display", S));
                  } catch (Ke) {
                    Hn(n, n.return, Ke);
                  }
                }
              } else if (ge.tag === 6) {
                if (ve === null)
                  try {
                    ge.stateNode.nodeValue = K ? "" : ge.memoizedProps;
                  } catch (Ke) {
                    Hn(n, n.return, Ke);
                  }
              } else if ((ge.tag !== 22 && ge.tag !== 23 || ge.memoizedState === null || ge === n) && ge.child !== null) {
                ge.child.return = ge, ge = ge.child;
                continue;
              }
              if (ge === n)
                break e;
              for (; ge.sibling === null; ) {
                if (ge.return === null || ge.return === n)
                  break e;
                ve === ge && (ve = null), ge = ge.return;
              }
              ve === ge && (ve = null), ge.sibling.return = ge.return, ge = ge.sibling;
            }
        }
        break;
      case 19:
        si(r, n), bi(n), o & 4 && qi(n);
        break;
      case 21:
        break;
      default:
        si(
          r,
          n
        ), bi(n);
    }
  }
  function bi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var u = n.return; u !== null; ) {
            if (hh(u)) {
              var o = u;
              break e;
            }
            u = u.return;
          }
          throw Error(h(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (lr(c, ""), o.flags &= -33);
            var d = af(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var S = o.stateNode.containerInfo, T = af(n);
            wo(n, T, S);
            break;
          default:
            throw Error(h(161));
        }
      } catch (D) {
        Hn(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function yh(n, r, u) {
    He = n, Oo(n);
  }
  function Oo(n, r, u) {
    for (var o = (n.mode & 1) !== 0; He !== null; ) {
      var c = He, d = c.child;
      if (c.tag === 22 && o) {
        var S = c.memoizedState !== null || As;
        if (!S) {
          var T = c.alternate, D = T !== null && T.memoizedState !== null || rr;
          T = As;
          var K = rr;
          if (As = S, (rr = D) && !K)
            for (He = c; He !== null; )
              S = He, D = S.child, S.tag === 22 && S.memoizedState !== null ? Sh(c) : D !== null ? (D.return = S, He = D) : Sh(c);
          for (; d !== null; )
            He = d, Oo(d), d = d.sibling;
          He = c, As = T, rr = K;
        }
        gh(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, He = d) : gh(n);
    }
  }
  function gh(n) {
    for (; He !== null; ) {
      var r = He;
      if (r.flags & 8772) {
        var u = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                rr || js(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !rr)
                  if (u === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? u.memoizedProps : _a(r.type, u.memoizedProps);
                    o.componentDidUpdate(c, u.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && hl(r, d, o);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (u = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        u = r.child.stateNode;
                        break;
                      case 1:
                        u = r.child.stateNode;
                    }
                  hl(r, S, u);
                }
                break;
              case 5:
                var T = r.stateNode;
                if (u === null && r.flags & 4) {
                  u = T;
                  var D = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      D.autoFocus && u.focus();
                      break;
                    case "img":
                      D.src && (u.src = D.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var K = r.alternate;
                  if (K !== null) {
                    var ve = K.memoizedState;
                    if (ve !== null) {
                      var ge = ve.dehydrated;
                      ge !== null && Cu(ge);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(h(163));
            }
          rr || r.flags & 512 && Gd(r);
        } catch (fe) {
          Hn(r, r.return, fe);
        }
      }
      if (r === n) {
        He = null;
        break;
      }
      if (u = r.sibling, u !== null) {
        u.return = r.return, He = u;
        break;
      }
      He = r.return;
    }
  }
  function Zd(n) {
    for (; He !== null; ) {
      var r = He;
      if (r === n) {
        He = null;
        break;
      }
      var u = r.sibling;
      if (u !== null) {
        u.return = r.return, He = u;
        break;
      }
      He = r.return;
    }
  }
  function Sh(n) {
    for (; He !== null; ) {
      var r = He;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var u = r.return;
            try {
              js(4, r);
            } catch (D) {
              Hn(r, u, D);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (D) {
                Hn(r, c, D);
              }
            }
            var d = r.return;
            try {
              Gd(r);
            } catch (D) {
              Hn(r, d, D);
            }
            break;
          case 5:
            var S = r.return;
            try {
              Gd(r);
            } catch (D) {
              Hn(r, S, D);
            }
        }
      } catch (D) {
        Hn(r, r.return, D);
      }
      if (r === n) {
        He = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, He = T;
        break;
      }
      He = r.return;
    }
  }
  var uf = Math.ceil, Ps = be.ReactCurrentDispatcher, Jd = be.ReactCurrentOwner, Ar = be.ReactCurrentBatchConfig, Dt = 0, An = null, Fn = null, vr = 0, ba = 0, Do = Et(0), ar = 0, Fs = null, Gi = 0, lf = 0, ko = 0, xl = null, Ir = null, ev = 0, Mo = 1 / 0, Xi = null, of = !1, Ol = null, wi = null, Hu = !1, Vu = null, sf = 0, Lo = 0, cf = null, Dl = -1, kl = 0;
  function zr() {
    return Dt & 6 ? Ht() : Dl !== -1 ? Dl : Dl = Ht();
  }
  function Gn(n) {
    return n.mode & 1 ? Dt & 2 && vr !== 0 ? vr & -vr : kc.transition !== null ? (kl === 0 && (kl = Zl()), kl) : (n = Yt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ls(n.type)), n) : 1;
  }
  function Ur(n, r, u, o) {
    if (50 < Lo)
      throw Lo = 0, cf = null, Error(h(185));
    zi(n, u, o), (!(Dt & 2) || n !== An) && (n === An && (!(Dt & 2) && (lf |= u), ar === 4 && Ya(n, vr)), jr(n, o), u === 1 && Dt === 0 && !(r.mode & 1) && (Mo = Ht() + 500, cr && ia()));
  }
  function jr(n, r) {
    var u = n.callbackNode;
    yu(n, r);
    var o = Br(n, n === An ? vr : 0);
    if (o === 0)
      u !== null && yr(u), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (u != null && yr(u), r === 1)
        n.tag === 0 ? wd(Eh.bind(null, n)) : bd(Eh.bind(null, n)), Rd(function() {
          !(Dt & 6) && ia();
        }), u = null;
      else {
        switch (eo(o)) {
          case 1:
            u = ti;
            break;
          case 4:
            u = wt;
            break;
          case 16:
            u = yi;
            break;
          case 536870912:
            u = Gl;
            break;
          default:
            u = yi;
        }
        u = uv(u, No.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = u;
    }
  }
  function No(n, r) {
    if (Dl = -1, kl = 0, Dt & 6)
      throw Error(h(327));
    var u = n.callbackNode;
    if (zo() && n.callbackNode !== u)
      return null;
    var o = Br(n, n === An ? vr : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = df(n, o);
    else {
      r = o;
      var c = Dt;
      Dt |= 2;
      var d = ff();
      (An !== n || vr !== r) && (Xi = null, Mo = Ht() + 500, Ml(n, r));
      do
        try {
          Yy();
          break;
        } catch (T) {
          Ch(n, T);
        }
      while (1);
      Ld(), Ps.current = d, Dt = c, Fn !== null ? r = 0 : (An = null, vr = 0, r = ar);
    }
    if (r !== 0) {
      if (r === 2 && (c = gu(n), c !== 0 && (o = c, r = tv(n, c))), r === 1)
        throw u = Fs, Ml(n, 0), Ya(n, o), jr(n, Ht()), u;
      if (r === 6)
        Ya(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !nv(c) && (r = df(n, o), r === 2 && (d = gu(n), d !== 0 && (o = d, r = tv(n, d))), r === 1))
          throw u = Fs, Ml(n, 0), Ya(n, o), jr(n, Ht()), u;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Ll(n, Ir, Xi);
            break;
          case 3:
            if (Ya(n, o), (o & 130023424) === o && (r = ev + 500 - Ht(), 10 < r)) {
              if (Br(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                zr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = dl(Ll.bind(null, n, Ir, Xi), r);
              break;
            }
            Ll(n, Ir, Xi);
            break;
          case 4:
            if (Ya(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var S = 31 - Vr(o);
              d = 1 << S, S = r[S], S > c && (c = S), o &= ~d;
            }
            if (o = c, o = Ht() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * uf(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = dl(Ll.bind(null, n, Ir, Xi), o);
              break;
            }
            Ll(n, Ir, Xi);
            break;
          case 5:
            Ll(n, Ir, Xi);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return jr(n, Ht()), n.callbackNode === u ? No.bind(null, n) : null;
  }
  function tv(n, r) {
    var u = xl;
    return n.current.memoizedState.isDehydrated && (Ml(n, r).flags |= 256), n = df(n, r), n !== 2 && (r = Ir, Ir = u, r !== null && Hs(r)), n;
  }
  function Hs(n) {
    Ir === null ? Ir = n : Ir.push.apply(Ir, n);
  }
  function nv(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var u = r.updateQueue;
        if (u !== null && (u = u.stores, u !== null))
          for (var o = 0; o < u.length; o++) {
            var c = u[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!za(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (u = r.child, r.subtreeFlags & 16384 && u !== null)
        u.return = r, r = u;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ya(n, r) {
    for (r &= ~ko, r &= ~lf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var u = 31 - Vr(r), o = 1 << u;
      n[u] = -1, r &= ~o;
    }
  }
  function Eh(n) {
    if (Dt & 6)
      throw Error(h(327));
    zo();
    var r = Br(n, 0);
    if (!(r & 1))
      return jr(n, Ht()), null;
    var u = df(n, r);
    if (n.tag !== 0 && u === 2) {
      var o = gu(n);
      o !== 0 && (r = o, u = tv(n, o));
    }
    if (u === 1)
      throw u = Fs, Ml(n, 0), Ya(n, r), jr(n, Ht()), u;
    if (u === 6)
      throw Error(h(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ll(n, Ir, Xi), jr(n, Ht()), null;
  }
  function Ao(n, r) {
    var u = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = u, Dt === 0 && (Mo = Ht() + 500, cr && ia());
    }
  }
  function Bu(n) {
    Vu !== null && Vu.tag === 0 && !(Dt & 6) && zo();
    var r = Dt;
    Dt |= 1;
    var u = Ar.transition, o = Yt;
    try {
      if (Ar.transition = null, Yt = 1, n)
        return n();
    } finally {
      Yt = o, Ar.transition = u, Dt = r, !(Dt & 6) && ia();
    }
  }
  function rv() {
    ba = Do.current, Qt(Do);
  }
  function Ml(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, Qp(u)), Fn !== null)
      for (u = Fn.return; u !== null; ) {
        var o = u;
        switch (Od(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Pa();
            break;
          case 3:
            Uu(), Qt(Pn), Qt(st), Uc();
            break;
          case 5:
            Ot(o);
            break;
          case 4:
            Uu();
            break;
          case 13:
            Qt(ut);
            break;
          case 19:
            Qt(ut);
            break;
          case 10:
            Lu(o.type._context);
            break;
          case 22:
          case 23:
            rv();
        }
        u = u.return;
      }
    if (An = n, Fn = n = $u(n.current, null), vr = ba = r, ar = 0, Fs = null, ko = lf = Gi = 0, Ir = xl = null, Sr !== null) {
      for (r = 0; r < Sr.length; r++)
        if (u = Sr[r], o = u.interleaved, o !== null) {
          u.interleaved = null;
          var c = o.next, d = u.pending;
          if (d !== null) {
            var S = d.next;
            d.next = c, o.next = S;
          }
          u.pending = o;
        }
      Sr = null;
    }
    return n;
  }
  function Ch(n, r) {
    do {
      var u = Fn;
      try {
        if (Ld(), jc.current = Jc, lt) {
          for (var o = Rn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          lt = !1;
        }
        if (yl = 0, Ut = J = Rn = null, _i = !1, Ta = 0, Jd.current = null, u === null || u.return === null) {
          ar = 1, Fs = r, Fn = null;
          break;
        }
        e: {
          var d = n, S = u.return, T = u, D = r;
          if (r = vr, T.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var K = D, ve = T, ge = ve.tag;
            if (!(ve.mode & 1) && (ge === 0 || ge === 11 || ge === 15)) {
              var fe = ve.alternate;
              fe ? (ve.updateQueue = fe.updateQueue, ve.memoizedState = fe.memoizedState, ve.lanes = fe.lanes) : (ve.updateQueue = null, ve.memoizedState = null);
            }
            var Ae = Vd(S);
            if (Ae !== null) {
              Ae.flags &= -257, Bd(Ae, S, T, d, r), Ae.mode & 1 && sh(d, K, r), r = Ae, D = K;
              var Be = r.updateQueue;
              if (Be === null) {
                var Ke = /* @__PURE__ */ new Set();
                Ke.add(D), r.updateQueue = Ke;
              } else
                Be.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                sh(d, K, r), av();
                break e;
              }
              D = Error(h(426));
            }
          } else if (Cn && T.mode & 1) {
            var $n = Vd(S);
            if ($n !== null) {
              !($n.flags & 65536) && ($n.flags |= 256), Bd($n, S, T, d, r), kd(Ro(D, T));
              break e;
            }
          }
          d = D = Ro(D, T), ar !== 4 && (ar = 2), xl === null ? xl = [d] : xl.push(d), d = S;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var z = oh(d, D, r);
                zd(d, z);
                break e;
              case 1:
                T = D;
                var M = d.type, F = d.stateNode;
                if (!(d.flags & 128) && (typeof M.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (wi === null || !wi.has(F)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Re = Ms(d, T, r);
                  zd(d, Re);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        iv(u);
      } catch (Qe) {
        r = Qe, Fn === u && u !== null && (Fn = u = u.return);
        continue;
      }
      break;
    } while (1);
  }
  function ff() {
    var n = Ps.current;
    return Ps.current = Jc, n === null ? Jc : n;
  }
  function av() {
    (ar === 0 || ar === 3 || ar === 2) && (ar = 4), An === null || !(Gi & 268435455) && !(lf & 268435455) || Ya(An, vr);
  }
  function df(n, r) {
    var u = Dt;
    Dt |= 2;
    var o = ff();
    (An !== n || vr !== r) && (Xi = null, Ml(n, r));
    do
      try {
        Iy();
        break;
      } catch (c) {
        Ch(n, c);
      }
    while (1);
    if (Ld(), Dt = u, Ps.current = o, Fn !== null)
      throw Error(h(261));
    return An = null, vr = 0, ar;
  }
  function Iy() {
    for (; Fn !== null; )
      Rh(Fn);
  }
  function Yy() {
    for (; Fn !== null && !mi(); )
      Rh(Fn);
  }
  function Rh(n) {
    var r = Th(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? iv(n) : Fn = r, Jd.current = null;
  }
  function iv(n) {
    var r = n;
    do {
      var u = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (u = qd(u, r), u !== null) {
          u.flags &= 32767, Fn = u;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ar = 6, Fn = null;
          return;
        }
      } else if (u = $y(u, r, ba), u !== null) {
        Fn = u;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    ar === 0 && (ar = 5);
  }
  function Ll(n, r, u) {
    var o = Yt, c = Ar.transition;
    try {
      Ar.transition = null, Yt = 1, Ky(n, r, u, o);
    } finally {
      Ar.transition = c, Yt = o;
    }
    return null;
  }
  function Ky(n, r, u, o) {
    do
      zo();
    while (Vu !== null);
    if (Dt & 6)
      throw Error(h(327));
    u = n.finishedWork;
    var c = n.finishedLanes;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(h(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = u.lanes | u.childLanes;
    if (td(n, d), n === An && (Fn = An = null, vr = 0), !(u.subtreeFlags & 2064) && !(u.flags & 2064) || Hu || (Hu = !0, uv(yi, function() {
      return zo(), null;
    })), d = (u.flags & 15990) !== 0, u.subtreeFlags & 15990 || d) {
      d = Ar.transition, Ar.transition = null;
      var S = Yt;
      Yt = 1;
      var T = Dt;
      Dt |= 4, Jd.current = null, ph(n, u), mh(u, n), Sc(fl), Aa = !!Ed, fl = Ed = null, n.current = u, yh(u), ql(), Dt = T, Yt = S, Ar.transition = d;
    } else
      n.current = u;
    if (Hu && (Hu = !1, Vu = n, sf = c), d = n.pendingLanes, d === 0 && (wi = null), as(u.stateNode), jr(n, Ht()), r !== null)
      for (o = n.onRecoverableError, u = 0; u < r.length; u++)
        c = r[u], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (of)
      throw of = !1, n = Ol, Ol = null, n;
    return sf & 1 && n.tag !== 0 && zo(), d = n.pendingLanes, d & 1 ? n === cf ? Lo++ : (Lo = 0, cf = n) : Lo = 0, ia(), null;
  }
  function zo() {
    if (Vu !== null) {
      var n = eo(sf), r = Ar.transition, u = Yt;
      try {
        if (Ar.transition = null, Yt = 16 > n ? 16 : n, Vu === null)
          var o = !1;
        else {
          if (n = Vu, Vu = null, sf = 0, Dt & 6)
            throw Error(h(331));
          var c = Dt;
          for (Dt |= 4, He = n.current; He !== null; ) {
            var d = He, S = d.child;
            if (He.flags & 16) {
              var T = d.deletions;
              if (T !== null) {
                for (var D = 0; D < T.length; D++) {
                  var K = T[D];
                  for (He = K; He !== null; ) {
                    var ve = He;
                    switch (ve.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(8, ve, d);
                    }
                    var ge = ve.child;
                    if (ge !== null)
                      ge.return = ve, He = ge;
                    else
                      for (; He !== null; ) {
                        ve = He;
                        var fe = ve.sibling, Ae = ve.return;
                        if (Xd(ve), ve === K) {
                          He = null;
                          break;
                        }
                        if (fe !== null) {
                          fe.return = Ae, He = fe;
                          break;
                        }
                        He = Ae;
                      }
                  }
                }
                var Be = d.alternate;
                if (Be !== null) {
                  var Ke = Be.child;
                  if (Ke !== null) {
                    Be.child = null;
                    do {
                      var $n = Ke.sibling;
                      Ke.sibling = null, Ke = $n;
                    } while (Ke !== null);
                  }
                }
                He = d;
              }
            }
            if (d.subtreeFlags & 2064 && S !== null)
              S.return = d, He = S;
            else
              e:
                for (; He !== null; ) {
                  if (d = He, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(9, d, d.return);
                    }
                  var z = d.sibling;
                  if (z !== null) {
                    z.return = d.return, He = z;
                    break e;
                  }
                  He = d.return;
                }
          }
          var M = n.current;
          for (He = M; He !== null; ) {
            S = He;
            var F = S.child;
            if (S.subtreeFlags & 2064 && F !== null)
              F.return = S, He = F;
            else
              e:
                for (S = M; He !== null; ) {
                  if (T = He, T.flags & 2048)
                    try {
                      switch (T.tag) {
                        case 0:
                        case 11:
                        case 15:
                          js(9, T);
                      }
                    } catch (Qe) {
                      Hn(T, T.return, Qe);
                    }
                  if (T === S) {
                    He = null;
                    break e;
                  }
                  var Re = T.sibling;
                  if (Re !== null) {
                    Re.return = T.return, He = Re;
                    break e;
                  }
                  He = T.return;
                }
          }
          if (Dt = c, ia(), ea && typeof ea.onPostCommitFiberRoot == "function")
            try {
              ea.onPostCommitFiberRoot(pu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Yt = u, Ar.transition = r;
      }
    }
    return !1;
  }
  function _h(n, r, u) {
    r = Ro(u, r), r = oh(n, r, 1), n = Au(n, r, 1), r = zr(), n !== null && (zi(n, 1, r), jr(n, r));
  }
  function Hn(n, r, u) {
    if (n.tag === 3)
      _h(n, n, u);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          _h(r, n, u);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (wi === null || !wi.has(o))) {
            n = Ro(u, n), n = Ms(r, n, 1), r = Au(r, n, 1), n = zr(), r !== null && (zi(r, 1, n), jr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Wy(n, r, u) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = zr(), n.pingedLanes |= n.suspendedLanes & u, An === n && (vr & u) === u && (ar === 4 || ar === 3 && (vr & 130023424) === vr && 500 > Ht() - ev ? Ml(n, 0) : ko |= u), jr(n, r);
  }
  function vf(n, r) {
    r === 0 && (n.mode & 1 ? (r = hu, hu <<= 1, !(hu & 130023424) && (hu = 4194304)) : r = 1);
    var u = zr();
    n = Yi(n, r), n !== null && (zi(n, r, u), jr(n, u));
  }
  function Qy(n) {
    var r = n.memoizedState, u = 0;
    r !== null && (u = r.retryLane), vf(n, u);
  }
  function qy(n, r) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (u = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    o !== null && o.delete(r), vf(n, u);
  }
  var Th;
  Th = function(n, r, u) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Pn.current)
        qn = !0;
      else {
        if (!(n.lanes & u) && !(r.flags & 128))
          return qn = !1, Qi(n, r, u);
        qn = !!(n.flags & 131072);
      }
    else
      qn = !1, Cn && r.flags & 1048576 && xd(r, ho, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Lr(n, r), n = r.pendingProps;
        var c = ja(r, st.current);
        De(r, u), c = ju(null, r, o, n, c, u);
        var d = El();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, bn(o) ? (d = !0, bc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ad(r), c.updater = Nc, r.stateNode = c, c._reactInternals = r, Ac(r, o, n, u), r = ch(null, r, o, !0, d, u)) : (r.tag = 0, Cn && d && wc(r), tr(null, r, c, u), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Lr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Xy(o), n = _a(o, n), c) {
            case 0:
              r = _o(null, r, o, n, u);
              break e;
            case 1:
              r = $d(null, r, o, n, u);
              break e;
            case 11:
              r = Fu(null, r, o, n, u);
              break e;
            case 14:
              r = tf(null, r, o, _a(o.type, n), u);
              break e;
          }
          throw Error(h(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), _o(n, r, o, c, u);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), $d(n, r, o, c, u);
      case 3:
        e: {
          if (fh(r), n === null)
            throw Error(h(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, er(n, r), zu(r, o, null, u);
          var S = r.memoizedState;
          if (o = S.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ro(Error(h(423)), r), r = nf(n, r, o, u, c);
              break e;
            } else if (o !== c) {
              c = Ro(Error(h(424)), r), r = nf(n, r, o, u, c);
              break e;
            } else
              for (oa = li(r.stateNode.containerInfo.firstChild), Ra = r, Cn = !0, Ha = null, u = uh(r, null, o, u), r.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ln(), o === c) {
              r = Er(n, r, u);
              break e;
            }
            tr(n, r, o, u);
          }
          r = r.child;
        }
        return r;
      case 5:
        return at(r), n === null && Oc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, S = c.children, Ss(o, c) ? S = null : d !== null && Ss(o, d) && (r.flags |= 32), Ct(n, r), tr(n, r, S, u), r.child;
      case 6:
        return n === null && Oc(r), null;
      case 13:
        return Yd(n, r, u);
      case 4:
        return jd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = yo(r, null, o, u) : tr(n, r, o, u), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), Fu(n, r, o, c, u);
      case 7:
        return tr(n, r, r.pendingProps, u), r.child;
      case 8:
        return tr(n, r, r.pendingProps.children, u), r.child;
      case 12:
        return tr(n, r, r.pendingProps.children, u), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, S = c.value, Jt(Ri, o._currentValue), o._currentValue = S, d !== null)
            if (za(d.value, S)) {
              if (d.children === c.children && !Pn.current) {
                r = Er(n, r, u);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var T = d.dependencies;
                if (T !== null) {
                  S = d.child;
                  for (var D = T.firstContext; D !== null; ) {
                    if (D.context === o) {
                      if (d.tag === 1) {
                        D = Ki(-1, u & -u), D.tag = 2;
                        var K = d.updateQueue;
                        if (K !== null) {
                          K = K.shared;
                          var ve = K.pending;
                          ve === null ? D.next = D : (D.next = ve.next, ve.next = D), K.pending = D;
                        }
                      }
                      d.lanes |= u, D = d.alternate, D !== null && (D.lanes |= u), fr(
                        d.return,
                        u,
                        r
                      ), T.lanes |= u;
                      break;
                    }
                    D = D.next;
                  }
                } else if (d.tag === 10)
                  S = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (S = d.return, S === null)
                    throw Error(h(341));
                  S.lanes |= u, T = S.alternate, T !== null && (T.lanes |= u), fr(S, u, r), S = d.sibling;
                } else
                  S = d.child;
                if (S !== null)
                  S.return = d;
                else
                  for (S = d; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (d = S.sibling, d !== null) {
                      d.return = S.return, S = d;
                      break;
                    }
                    S = S.return;
                  }
                d = S;
              }
          tr(n, r, c.children, u), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, De(r, u), c = Bn(c), o = o(c), r.flags |= 1, tr(n, r, o, u), r.child;
      case 14:
        return o = r.type, c = _a(o, r.pendingProps), c = _a(o.type, c), tf(n, r, o, c, u);
      case 15:
        return fa(n, r, r.type, r.pendingProps, u);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), Lr(n, r), r.tag = 1, bn(o) ? (n = !0, bc(r)) : n = !1, De(r, u), nh(r, o, c), Ac(r, o, c, u), ch(null, r, o, !0, n, u);
      case 19:
        return Qd(n, r, u);
      case 22:
        return Tl(n, r, u);
    }
    throw Error(h(156, r.tag));
  };
  function uv(n, r) {
    return mn(n, r);
  }
  function Gy(n, r, u, o) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ka(n, r, u, o) {
    return new Gy(n, r, u, o);
  }
  function lv(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Xy(n) {
    if (typeof n == "function")
      return lv(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Fe)
        return 11;
      if (n === Le)
        return 14;
    }
    return 2;
  }
  function $u(n, r) {
    var u = n.alternate;
    return u === null ? (u = Ka(n.tag, r, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = r, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 14680064, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, r = n.dependencies, u.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function pf(n, r, u, o, c, d) {
    var S = 2;
    if (o = n, typeof n == "function")
      lv(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case me:
            return Nl(u.children, c, d, r);
          case Xe:
            S = 8, c |= 8;
            break;
          case Ye:
            return n = Ka(12, u, r, c | 2), n.elementType = Ye, n.lanes = d, n;
          case re:
            return n = Ka(13, u, r, c), n.elementType = re, n.lanes = d, n;
          case ae:
            return n = Ka(19, u, r, c), n.elementType = ae, n.lanes = d, n;
          case le:
            return Vs(u, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case se:
                  S = 10;
                  break e;
                case ye:
                  S = 9;
                  break e;
                case Fe:
                  S = 11;
                  break e;
                case Le:
                  S = 14;
                  break e;
                case _e:
                  S = 16, o = null;
                  break e;
              }
            throw Error(h(130, n == null ? n : typeof n, ""));
        }
    return r = Ka(S, u, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Nl(n, r, u, o) {
    return n = Ka(7, n, o, r), n.lanes = u, n;
  }
  function Vs(n, r, u, o) {
    return n = Ka(22, n, o, r), n.elementType = le, n.lanes = u, n.stateNode = { isHidden: !1 }, n;
  }
  function Bs(n, r, u) {
    return n = Ka(6, n, null, r), n.lanes = u, n;
  }
  function Al(n, r, u) {
    return r = Ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = u, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Zy(n, r, u, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hf(n, r, u, o, c, d, S, T, D) {
    return n = new Zy(n, r, u, T, D), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ka(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: u, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ad(d), n;
  }
  function bh(n, r, u) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ve, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: u };
  }
  function ov(n) {
    if (!n)
      return Ci;
    n = n._reactInternals;
    e: {
      if (mt(n) !== n || n.tag !== 1)
        throw Error(h(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (bn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (n.tag === 1) {
      var u = n.type;
      if (bn(u))
        return Rs(n, u, r);
    }
    return r;
  }
  function wh(n, r, u, o, c, d, S, T, D) {
    return n = hf(u, o, !0, n, c, d, S, T, D), n.context = ov(null), u = n.current, o = zr(), c = Gn(u), d = Ki(o, c), d.callback = r ?? null, Au(u, d, c), n.current.lanes = c, zi(n, c, o), jr(n, o), n;
  }
  function $s(n, r, u, o) {
    var c = r.current, d = zr(), S = Gn(c);
    return u = ov(u), r.context === null ? r.context = u : r.pendingContext = u, r = Ki(d, S), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Au(c, r, S), n !== null && (Ur(n, c, S, d), Lc(n, c, S)), S;
  }
  function mf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function xh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < r ? u : r;
    }
  }
  function sv(n, r) {
    xh(n, r), (n = n.alternate) && xh(n, r);
  }
  function Oh() {
    return null;
  }
  var cv = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function yf(n) {
    this._internalRoot = n;
  }
  Zi.prototype.render = yf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(h(409));
    $s(n, r, null, null);
  }, Zi.prototype.unmount = yf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Bu(function() {
        $s(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function Zi(n) {
    this._internalRoot = n;
  }
  Zi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = no();
      n = { blockedOn: null, target: n, priority: r };
      for (var u = 0; u < Zt.length && r !== 0 && r < Zt[u].priority; u++)
        ;
      Zt.splice(u, 0, n), u === 0 && dc(n);
    }
  };
  function fv(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function gf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Dh() {
  }
  function Jy(n, r, u, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var K = mf(S);
          d.call(K);
        };
      }
      var S = wh(r, o, n, 0, null, !1, !1, "", Dh);
      return n._reactRootContainer = S, n[$i] = S.current, vo(n.nodeType === 8 ? n.parentNode : n), Bu(), S;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var T = o;
      o = function() {
        var K = mf(D);
        T.call(K);
      };
    }
    var D = hf(n, 0, !1, null, null, !1, !1, "", Dh);
    return n._reactRootContainer = D, n[$i] = D.current, vo(n.nodeType === 8 ? n.parentNode : n), Bu(function() {
      $s(r, D, u, o);
    }), D;
  }
  function Sf(n, r, u, o, c) {
    var d = u._reactRootContainer;
    if (d) {
      var S = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var D = mf(S);
          T.call(D);
        };
      }
      $s(r, S, n, c);
    } else
      S = Jy(u, r, n, c, o);
    return mf(S);
  }
  al = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var u = ni(r.pendingLanes);
          u !== 0 && (gi(r, u | 1), jr(r, Ht()), !(Dt & 6) && (Mo = Ht() + 500, ia()));
        }
        break;
      case 13:
        Bu(function() {
          var o = Yi(n, 1);
          if (o !== null) {
            var c = zr();
            Ur(o, n, 1, c);
          }
        }), sv(n, 1);
    }
  }, to = function(n) {
    if (n.tag === 13) {
      var r = Yi(n, 134217728);
      if (r !== null) {
        var u = zr();
        Ur(r, n, 134217728, u);
      }
      sv(n, 134217728);
    }
  }, Vt = function(n) {
    if (n.tag === 13) {
      var r = Gn(n), u = Yi(n, r);
      if (u !== null) {
        var o = zr();
        Ur(u, n, r, o);
      }
      sv(n, r);
    }
  }, no = function() {
    return Yt;
  }, ro = function(n, r) {
    var u = Yt;
    try {
      return Yt = n, r();
    } finally {
      Yt = u;
    }
  }, Fr = function(n, r, u) {
    switch (r) {
      case "input":
        if (gn(n, u), r = u.name, u.type === "radio" && r != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < u.length; r++) {
            var o = u[r];
            if (o !== n && o.form === n.form) {
              var c = Je(o);
              if (!c)
                throw Error(h(90));
              ur(o), gn(o, c);
            }
          }
        }
        break;
      case "textarea":
        On(n, u);
        break;
      case "select":
        r = u.value, r != null && _t(n, !!u.multiple, r, !1);
    }
  }, rl = Ao, Ql = Bu;
  var eg = { usingClientEntryPoint: !1, Events: [Cs, po, Je, La, fu, Ao] }, Uo = { findFiberByHostInstance: Ua, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tg = { bundleType: Uo.bundleType, version: Uo.version, rendererPackageName: Uo.rendererPackageName, rendererConfig: Uo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Uo.findFiberByHostInstance || Oh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ef = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ef.isDisabled && Ef.supportsFiber)
      try {
        pu = Ef.inject(tg), ea = Ef;
      } catch {
      }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg, Za.createPortal = function(n, r) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fv(r))
      throw Error(h(200));
    return bh(n, r, null, u);
  }, Za.createRoot = function(n, r) {
    if (!fv(n))
      throw Error(h(299));
    var u = !1, o = "", c = cv;
    return r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hf(n, 1, !1, null, null, u, !1, o, c), n[$i] = r.current, vo(n.nodeType === 8 ? n.parentNode : n), new yf(r);
  }, Za.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
    return n = Wn(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return Bu(n);
  }, Za.hydrate = function(n, r, u) {
    if (!gf(r))
      throw Error(h(200));
    return Sf(null, n, r, !0, u);
  }, Za.hydrateRoot = function(n, r, u) {
    if (!fv(n))
      throw Error(h(405));
    var o = u != null && u.hydratedSources || null, c = !1, d = "", S = cv;
    if (u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (d = u.identifierPrefix), u.onRecoverableError !== void 0 && (S = u.onRecoverableError)), r = wh(r, null, n, 1, u ?? null, c, !1, d, S), n[$i] = r.current, vo(n), o)
      for (n = 0; n < o.length; n++)
        u = o[n], c = u._getVersion, c = c(u._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [u, c] : r.mutableSourceEagerHydrationData.push(
          u,
          c
        );
    return new Zi(r);
  }, Za.render = function(n, r, u) {
    if (!gf(r))
      throw Error(h(200));
    return Sf(null, n, r, !1, u);
  }, Za.unmountComponentAtNode = function(n) {
    if (!gf(n))
      throw Error(h(40));
    return n._reactRootContainer ? (Bu(function() {
      Sf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = Ao, Za.unstable_renderSubtreeIntoContainer = function(n, r, u, o) {
    if (!gf(u))
      throw Error(h(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(h(38));
    return Sf(n, r, u, !1, o);
  }, Za.version = "18.2.0-next-9e3b772b8-20220608", Za;
}
var Ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qR;
function SD() {
  return qR || (qR = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = Tt, m = o_(), h = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = !1;
    function O(e) {
      R = e;
    }
    function A(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        W("warn", e, a);
      }
    }
    function E(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        W("error", e, a);
      }
    }
    function W(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var H = 0, B = 1, he = 2, N = 3, P = 4, Y = 5, q = 6, oe = 7, ee = 8, de = 9, ue = 10, Ee = 11, be = 12, pe = 13, Ve = 14, me = 15, Xe = 16, Ye = 17, se = 18, ye = 19, Fe = 21, re = 22, ae = 23, Le = 24, _e = 25, le = !0, te = !1, xe = !1, b = !1, G = !1, we = !0, et = !1, qe = !1, Rt = !0, ht = !0, yt = !0, vt = /* @__PURE__ */ new Set(), $t = {}, mr = {};
    function Zn(e, t) {
      ur(e, t), ur(e + "Capture", t);
    }
    function ur(e, t) {
      $t[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), $t[e] = t;
      {
        var a = e.toLowerCase();
        mr[a] = e, e === "onDoubleClick" && (mr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        vt.add(t[i]);
    }
    var pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kn = Object.prototype.hasOwnProperty;
    function Un(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function xn(e) {
      try {
        return gn(e), !1;
      } catch {
        return !0;
      }
    }
    function gn(e) {
      return "" + e;
    }
    function Dr(e, t) {
      if (xn(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), gn(e);
    }
    function bt(e) {
      if (xn(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Un(e)), gn(e);
    }
    function Mt(e, t) {
      if (xn(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), gn(e);
    }
    function _t(e, t) {
      if (xn(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), gn(e);
    }
    function sn(e) {
      if (xn(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Un(e)), gn(e);
    }
    function Nt(e) {
      if (xn(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Un(e)), gn(e);
    }
    var On = 0, an = 1, Sn = 2, un = 3, Dn = 4, Jn = 5, lr = 6, Te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", We = Te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", gt = new RegExp("^[" + Te + "][" + We + "]*$"), At = {}, qt = {};
    function Vn(e) {
      return Kn.call(qt, e) ? !0 : Kn.call(At, e) ? !1 : gt.test(e) ? (qt[e] = !0, !0) : (At[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function kn(e, t, a) {
      return t !== null ? t.type === On : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function kr(e, t, a, i) {
      if (a !== null && a.type === On)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function nn(e, t, a, i) {
      if (t === null || typeof t > "u" || kr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case un:
            return !t;
          case Dn:
            return t === !1;
          case Jn:
            return isNaN(t);
          case lr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Fr(e) {
      return Xt.hasOwnProperty(e) ? Xt[e] : null;
    }
    function Gt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Sn || t === un || t === Dn, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Xt = {}, ei = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ei.forEach(function(e) {
      Xt[e] = new Gt(
        e,
        On,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Xt[t] = new Gt(
        t,
        an,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Sn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        un,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        un,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Dn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var La = /[\-\:]([a-z])/g, fu = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(La, fu);
      Xt[t] = new Gt(
        t,
        an,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(La, fu);
      Xt[t] = new Gt(
        t,
        an,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(La, fu);
      Xt[t] = new Gt(
        t,
        an,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        an,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var rl = "xlinkHref";
    Xt[rl] = new Gt(
      "xlinkHref",
      an,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Xt[e] = new Gt(
        e,
        an,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ql = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ai = !1;
    function du(e) {
      !Ai && Ql.test(e) && (Ai = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ya(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Dr(a, t), i.sanitizeURL && du("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Dn) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : nn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (nn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === un)
            return a;
          f = e.getAttribute(s);
        }
        return nn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function vi(e, t, a, i) {
      {
        if (!Vn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Dr(a, t), l === "" + a ? a : l;
      }
    }
    function ga(e, t, a, i) {
      var l = Fr(t);
      if (!kn(t, l, i)) {
        if (nn(t, a, l, i) && (a = null), i || l === null) {
          if (Vn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Dr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var y = l.type;
            e[p] = y === un ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = l.attributeName, _ = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var L = l.type, k;
          L === un || L === Dn && a === !0 ? k = "" : (Dr(a, C), k = "" + a, l.sanitizeURL && du(k.toString())), _ ? e.setAttributeNS(_, C, k) : e.setAttribute(C, k);
        }
      }
    }
    var pi = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), Sa = Symbol.for("react.fragment"), hi = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), Oe = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), zt = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), Wn = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), mn = Symbol.for("react.offscreen"), yr = Symbol.for("react.legacy_hidden"), mi = Symbol.for("react.cache"), ql = Symbol.for("react.tracing_marker"), Ht = Symbol.iterator, ed = "@@iterator";
    function ti(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ht && e[Ht] || e[ed];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, yi = 0, vu, Gl, pu, ea, as, Vr, is;
    function us() {
    }
    us.__reactDisabledLog = !0;
    function cc() {
      {
        if (yi === 0) {
          vu = console.log, Gl = console.info, pu = console.warn, ea = console.error, as = console.group, Vr = console.groupCollapsed, is = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: us,
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
          });
        }
        yi++;
      }
    }
    function Xl() {
      {
        if (yi--, yi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, e, {
              value: vu
            }),
            info: wt({}, e, {
              value: Gl
            }),
            warn: wt({}, e, {
              value: pu
            }),
            error: wt({}, e, {
              value: ea
            }),
            group: wt({}, e, {
              value: as
            }),
            groupCollapsed: wt({}, e, {
              value: Vr
            }),
            groupEnd: wt({}, e, {
              value: is
            })
          });
        }
        yi < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var hu = h.ReactCurrentDispatcher, ni;
    function Br(e, t, a) {
      {
        if (ni === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            ni = i && i[1] || "";
          }
        return `
` + ni + e;
      }
    }
    var mu = !1, yu;
    {
      var gu = typeof WeakMap == "function" ? WeakMap : Map;
      yu = new gu();
    }
    function Zl(e, t) {
      if (!e || mu)
        return "";
      {
        var a = yu.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      mu = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = hu.current, hu.current = null, cc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (I) {
              i = I;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var p = I.stack.split(`
`), y = i.stack.split(`
`), C = p.length - 1, _ = y.length - 1; C >= 1 && _ >= 0 && p[C] !== y[_]; )
            _--;
          for (; C >= 1 && _ >= 0; C--, _--)
            if (p[C] !== y[_]) {
              if (C !== 1 || _ !== 1)
                do
                  if (C--, _--, _ < 0 || p[C] !== y[_]) {
                    var L = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && yu.set(e, L), L;
                  }
                while (C >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        mu = !1, hu.current = s, Xl(), Error.prepareStackTrace = l;
      }
      var k = e ? e.displayName || e.name : "", V = k ? Br(k) : "";
      return typeof e == "function" && yu.set(e, V), V;
    }
    function Jl(e, t, a) {
      return Zl(e, !0);
    }
    function zi(e, t, a) {
      return Zl(e, !1);
    }
    function td(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function gi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Zl(e, td(e));
      if (typeof e == "string")
        return Br(e);
      switch (e) {
        case mt:
          return Br("Suspense");
        case zt:
          return Br("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ue:
            return zi(e.render);
          case St:
            return gi(e.type, t, a);
          case tt: {
            var i = e, l = i._payload, s = i._init;
            try {
              return gi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Yt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Y:
          return Br(e.type);
        case Xe:
          return Br("Lazy");
        case pe:
          return Br("Suspense");
        case ye:
          return Br("SuspenseList");
        case H:
        case he:
        case me:
          return zi(e.type);
        case Ee:
          return zi(e.type.render);
        case B:
          return Jl(e.type);
        default:
          return "";
      }
    }
    function eo(e) {
      try {
        var t = "", a = e;
        do
          t += Yt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function al(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function to(e) {
      return e.displayName || "Context";
    }
    function Vt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Sa:
          return "Fragment";
        case Hr:
          return "Portal";
        case x:
          return "Profiler";
        case hi:
          return "StrictMode";
        case mt:
          return "Suspense";
        case zt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Oe:
            var t = e;
            return to(t) + ".Consumer";
          case ce:
            var a = e;
            return to(a._context) + ".Provider";
          case Ue:
            return al(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : Vt(e.type) || "Memo";
          case tt: {
            var l = e, s = l._payload, f = l._init;
            try {
              return Vt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function no(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ro(e) {
      return e.displayName || "Context";
    }
    function ft(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Le:
          return "Cache";
        case de:
          var i = a;
          return ro(i) + ".Consumer";
        case ue:
          var l = a;
          return ro(l._context) + ".Provider";
        case se:
          return "DehydratedFragment";
        case Ee:
          return no(a, a.render, "ForwardRef");
        case oe:
          return "Fragment";
        case Y:
          return a;
        case P:
          return "Portal";
        case N:
          return "Root";
        case q:
          return "Text";
        case Xe:
          return Vt(a);
        case ee:
          return a === hi ? "StrictMode" : "Mode";
        case re:
          return "Offscreen";
        case be:
          return "Profiler";
        case Fe:
          return "Scope";
        case pe:
          return "Suspense";
        case ye:
          return "SuspenseList";
        case _e:
          return "TracingMarker";
        case B:
        case H:
        case Ye:
        case he:
        case Ve:
        case me:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var il = h.ReactDebugCurrentFrame, Mn = null, ta = !1;
    function $r() {
      {
        if (Mn === null)
          return null;
        var e = Mn._debugOwner;
        if (e !== null && typeof e < "u")
          return ft(e);
      }
      return null;
    }
    function Su() {
      return Mn === null ? "" : eo(Mn);
    }
    function jn() {
      il.getCurrentStack = null, Mn = null, ta = !1;
    }
    function Zt(e) {
      il.getCurrentStack = e === null ? null : Su, Mn = e, ta = !1;
    }
    function fc() {
      return Mn;
    }
    function na(e) {
      ta = e;
    }
    function or(e) {
      return "" + e;
    }
    function Si(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Nt(e), e;
        default:
          return "";
      }
    }
    var dc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ui(e, t) {
      dc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Eu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function vc(e) {
      return e._valueTracker;
    }
    function Na(e) {
      e._valueTracker = null;
    }
    function Cu(e) {
      var t = "";
      return e && (Eu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ru(e) {
      var t = Eu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Nt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            Nt(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Nt(p), i = "" + p;
          },
          stopTracking: function() {
            Na(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Aa(e) {
      vc(e) || (e._valueTracker = Ru(e));
    }
    function ao(e) {
      if (!e)
        return !1;
      var t = vc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Cu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _u(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Tu = !1, ul = !1, io = !1, ls = !1;
    function ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function g(e, t) {
      var a = e, i = t.checked, l = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function w(e, t) {
      Ui("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ul && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", $r() || "A component", t.type), ul = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Tu && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", $r() || "A component", t.type), Tu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Si(t.value != null ? t.value : i),
        controlled: ri(t)
      };
    }
    function $(e, t) {
      var a = e, i = t.checked;
      i != null && ga(a, "checked", i, !1);
    }
    function Q(e, t) {
      var a = e;
      {
        var i = ri(t);
        !a._wrapperState.controlled && i && !ls && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ls = !0), a._wrapperState.controlled && !i && !io && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), io = !0);
      }
      $(e, t);
      var l = Si(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = or(l)) : a.value !== or(l) && (a.value = or(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? rt(a, t.type, l) : t.hasOwnProperty("defaultValue") && rt(a, t.type, Si(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ce(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function it(e, t) {
      var a = e;
      Q(a, t), Me(a, t);
    }
    function Me(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Dr(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Kh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ao(f), Q(f, p);
          }
        }
      }
    }
    function rt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _u(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var xt = !1, Bt = !1, cn = !1;
    function rn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Bt || (Bt = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (cn || (cn = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xt && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xt = !0);
    }
    function fn(e, t) {
      t.value != null && e.setAttribute("value", or(Si(t.value)));
    }
    var yn = Array.isArray;
    function Lt(e) {
      return yn(e);
    }
    var ji;
    ji = !1;
    function uo() {
      var e = $r();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var os = ["value", "defaultValue"];
    function nd(e) {
      {
        Ui("select", e);
        for (var t = 0; t < os.length; t++) {
          var a = os[t];
          if (e[a] != null) {
            var i = Lt(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, uo()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, uo());
          }
        }
      }
    }
    function ai(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var y = 0; y < l.length; y++) {
          var C = f.hasOwnProperty("$" + l[y].value);
          l[y].selected !== C && (l[y].selected = C), C && i && (l[y].defaultSelected = !0);
        }
      } else {
        for (var _ = or(Si(a)), L = null, k = 0; k < l.length; k++) {
          if (l[k].value === _) {
            l[k].selected = !0, i && (l[k].defaultSelected = !0);
            return;
          }
          L === null && !l[k].disabled && (L = l[k]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function ss(e, t) {
      return wt({}, t, {
        value: void 0
      });
    }
    function cs(e, t) {
      var a = e;
      nd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ji && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ji = !0);
    }
    function rd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ai(a, !!t.multiple, i, !1) : t.defaultValue != null && ai(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ry(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ai(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? ai(a, !!t.multiple, t.defaultValue, !0) : ai(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function _y(e, t) {
      var a = e, i = t.value;
      i != null && ai(a, !!t.multiple, i, !1);
    }
    var ad = !1;
    function id(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = wt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Cp(e, t) {
      var a = e;
      Ui("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ad && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", $r() || "A component"), ad = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Lt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Si(i)
      };
    }
    function Rp(e, t) {
      var a = e, i = Si(t.value), l = Si(t.defaultValue);
      if (i != null) {
        var s = or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = or(l));
    }
    function _p(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ud(e, t) {
      Rp(e, t);
    }
    var Pi = "http://www.w3.org/1999/xhtml", Ty = "http://www.w3.org/1998/Math/MathML", ld = "http://www.w3.org/2000/svg";
    function pc(e) {
      switch (e) {
        case "svg":
          return ld;
        case "math":
          return Ty;
        default:
          return Pi;
      }
    }
    function od(e, t) {
      return e == null || e === Pi ? pc(t) : e === ld && t === "foreignObject" ? Pi : e;
    }
    var by = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, hc, Tp = by(function(e, t) {
      if (e.namespaceURI === ld && !("innerHTML" in e)) {
        hc = hc || document.createElement("div"), hc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = hc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ra = 1, Fi = 3, Qn = 8, ii = 9, ll = 11, mc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Fi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, bp = {
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
    }, lo = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function wp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var xp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(lo).forEach(function(e) {
      xp.forEach(function(t) {
        lo[wp(t, e)] = lo[e];
      });
    });
    function yc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(lo.hasOwnProperty(e) && lo[e]) ? t + "px" : (_t(t, e), ("" + t).trim());
    }
    var oo = /([A-Z])/g, wy = /^ms-/;
    function xy(e) {
      return e.replace(oo, "-$1").toLowerCase().replace(wy, "-ms-");
    }
    var Op = function() {
    };
    {
      var Dp = /^(?:webkit|moz|o)[A-Z]/, kp = /^-ms-/, fs = /-(.)/g, so = /;\s*$/, co = {}, fo = {}, Mp = !1, sd = !1, cd = function(e) {
        return e.replace(fs, function(t, a) {
          return a.toUpperCase();
        });
      }, fd = function(e) {
        co.hasOwnProperty(e) && co[e] || (co[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          cd(e.replace(kp, "ms-"))
        ));
      }, Lp = function(e) {
        co.hasOwnProperty(e) && co[e] || (co[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Np = function(e, t) {
        fo.hasOwnProperty(t) && fo[t] || (fo[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(so, "")));
      }, Ap = function(e, t) {
        Mp || (Mp = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Oy = function(e, t) {
        sd || (sd = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Op = function(e, t) {
        e.indexOf("-") > -1 ? fd(e) : Dp.test(e) ? Lp(e) : so.test(t) && Np(e, t), typeof t == "number" && (isNaN(t) ? Ap(e, t) : isFinite(t) || Oy(e, t));
      };
    }
    var Dy = Op;
    function ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : xy(i)) + ":", t += yc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function zp(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Dy(i, t[i]);
          var s = yc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function My(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function za(e) {
      var t = {};
      for (var a in e)
        for (var i = bp[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function ds(e, t) {
      {
        if (!t)
          return;
        var a = za(e), i = za(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var y = f + "," + p;
            if (l[y])
              continue;
            l[y] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", My(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Up = {
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
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, jp = wt({
      menuitem: !0
    }, Up), Pp = "__html";
    function gc(e, t) {
      if (t) {
        if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Pp in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Hi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
          return !0;
      }
    }
    var Sc = {
      // HTML
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
      // SVG
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
    }, Fp = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
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
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
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
    }, ui = {}, dd = new RegExp("^(aria)-[" + We + "]*$"), vs = new RegExp("^(aria)[A-Z][" + We + "]*$");
    function vd(e, t) {
      {
        if (Kn.call(ui, t) && ui[t])
          return !0;
        if (vs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Fp.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ui[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ui[t] = !0, !0;
        }
        if (dd.test(t)) {
          var l = t.toLowerCase(), s = Fp.hasOwnProperty(l) ? l : null;
          if (s == null)
            return ui[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ui[t] = !0, !0;
        }
      }
      return !0;
    }
    function Hp(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = vd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ec(e, t) {
      Hi(e, t) || Hp(e, t);
    }
    var ol = !1;
    function pd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ol && (ol = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hd = function() {
    };
    {
      var sr = {}, md = /^on./, Vp = /^on[^A-Z]/, Bp = new RegExp("^(aria)-[" + We + "]*$"), $p = new RegExp("^(aria)[A-Z][" + We + "]*$");
      hd = function(e, t, a, i) {
        if (Kn.call(sr, t) && sr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, p), sr[t] = !0, !0;
          if (md.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), sr[t] = !0, !0;
        } else if (md.test(t))
          return Vp.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), sr[t] = !0, !0;
        if (Bp.test(t) || $p.test(t))
          return !0;
        if (l === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), sr[t] = !0, !0;
        if (l === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), sr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), sr[t] = !0, !0;
        var y = Fr(t), C = y !== null && y.type === On;
        if (Sc.hasOwnProperty(l)) {
          var _ = Sc[l];
          if (_ !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, _), sr[t] = !0, !0;
        } else if (!C && t !== l)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), sr[t] = !0, !0;
        return typeof a == "boolean" && kr(t, a, y, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), sr[t] = !0, !0) : C ? !0 : kr(t, a, y, !1) ? (sr[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === un && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), sr[t] = !0), !0);
      };
    }
    var Ip = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = hd(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Yp(e, t, a) {
      Hi(e, t) || Ip(e, t, a);
    }
    var Vi = 1, ps = 1 << 1, sl = 1 << 2, Ly = Vi | ps | sl, hs = null;
    function ms(e) {
      hs !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), hs = e;
    }
    function Ny() {
      hs === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), hs = null;
    }
    function Kp(e) {
      return e === hs;
    }
    function Cc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Fi ? t.parentNode : t;
    }
    var dn = null, bu = null, Bi = null;
    function vo(e) {
      var t = Fo(e);
      if (t) {
        if (typeof dn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Kh(a);
          dn(t.stateNode, t.type, i);
        }
      }
    }
    function Wp(e) {
      dn = e;
    }
    function Rc(e) {
      bu ? Bi ? Bi.push(e) : Bi = [e] : bu = e;
    }
    function ys() {
      return bu !== null || Bi !== null;
    }
    function gs() {
      if (bu) {
        var e = bu, t = Bi;
        if (bu = null, Bi = null, vo(e), t)
          for (var a = 0; a < t.length; a++)
            vo(t[a]);
      }
    }
    var cl = function(e, t) {
      return e(t);
    }, yd = function() {
    }, gd = !1;
    function Ay() {
      var e = ys();
      e && (yd(), gs());
    }
    function Sd(e, t, a) {
      if (gd)
        return e(t, a);
      gd = !0;
      try {
        return cl(e, t, a);
      } finally {
        gd = !1, Ay();
      }
    }
    function _c(e, t, a) {
      cl = e, yd = a;
    }
    function Tc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ed(e, t, a) {
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
          return !!(a.disabled && Tc(t));
        default:
          return !1;
      }
    }
    function fl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Kh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Ed(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Ss = !1;
    if (pn)
      try {
        var dl = {};
        Object.defineProperty(dl, "passive", {
          get: function() {
            Ss = !0;
          }
        }), window.addEventListener("test", dl, dl), window.removeEventListener("test", dl, dl);
      } catch {
        Ss = !1;
      }
    function Qp(e, t, a, i, l, s, f, p, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (_) {
        this.onError(_);
      }
    }
    var Cd = Qp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rd = document.createElement("react");
      Cd = function(t, a, i, l, s, f, p, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), L = !1, k = !0, V = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          Rd.removeEventListener(Z, nt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var je = Array.prototype.slice.call(arguments, 3);
        function nt() {
          L = !0, X(), a.apply(i, je), k = !1;
        }
        var Ge, Pt = !1, kt = !1;
        function U(j) {
          if (Ge = j.error, Pt = !0, Ge === null && j.colno === 0 && j.lineno === 0 && (kt = !0), j.defaultPrevented && Ge != null && typeof Ge == "object")
            try {
              Ge._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), Rd.addEventListener(Z, nt, !1), _.initEvent(Z, !1, !1), Rd.dispatchEvent(_), I && Object.defineProperty(window, "event", I), L && k && (Pt ? kt && (Ge = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ge = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ge)), window.removeEventListener("error", U), !L)
          return X(), Qp.apply(this, arguments);
      };
    }
    var zy = Cd, wu = !1, li = null, Es = !1, xu = null, Ei = {
      onError: function(e) {
        wu = !0, li = e;
      }
    };
    function vl(e, t, a, i, l, s, f, p, y) {
      wu = !1, li = null, zy.apply(Ei, arguments);
    }
    function $i(e, t, a, i, l, s, f, p, y) {
      if (vl.apply(this, arguments), wu) {
        var C = Td();
        Es || (Es = !0, xu = C);
      }
    }
    function _d() {
      if (Es) {
        var e = xu;
        throw Es = !1, xu = null, e;
      }
    }
    function Uy() {
      return wu;
    }
    function Td() {
      if (wu) {
        var e = li;
        return wu = !1, li = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ua(e) {
      return e._reactInternals;
    }
    function Cs(e) {
      return e._reactInternals !== void 0;
    }
    function po(e, t) {
      e._reactInternals = t;
    }
    var Je = (
      /*                      */
      0
    ), Ou = (
      /*                */
      1
    ), En = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), Qt = (
      /*                */
      16
    ), Jt = (
      /*                 */
      32
    ), Ci = (
      /*                     */
      64
    ), st = (
      /*                   */
      128
    ), Pn = (
      /*            */
      256
    ), aa = (
      /*                          */
      512
    ), ja = (
      /*                     */
      1024
    ), bn = (
      /*                      */
      2048
    ), Pa = (
      /*                    */
      4096
    ), Du = (
      /*                   */
      8192
    ), Rs = (
      /*             */
      16384
    ), bc = bn | Et | Ci | aa | ja | Rs, qp = (
      /*               */
      32767
    ), Ea = (
      /*                   */
      32768
    ), cr = (
      /*                */
      65536
    ), _s = (
      /* */
      131072
    ), bd = (
      /*                       */
      1048576
    ), wd = (
      /*                    */
      2097152
    ), ia = (
      /*                 */
      4194304
    ), ku = (
      /*                */
      8388608
    ), ua = (
      /*               */
      16777216
    ), pl = (
      /*              */
      33554432
    ), ho = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | ja | 0
    ), la = En | Et | Qt | Jt | aa | Pa | Du, Mr = Et | Ci | aa | Du, Fa = bn | Qt, gr = ia | ku | wd, Ii = h.ReactCurrentOwner;
    function Ca(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (En | Pa)) !== Je && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === N ? a : null;
    }
    function xd(e) {
      if (e.tag === pe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wc(e) {
      return e.tag === N ? e.stateNode.containerInfo : null;
    }
    function Od(e) {
      return Ca(e) === e;
    }
    function Ra(e) {
      {
        var t = Ii.current;
        if (t !== null && t.tag === B) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ft(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ua(e);
      return l ? Ca(l) === l : !1;
    }
    function oa(e) {
      if (Ca(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Cn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ca(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return oa(s), e;
            if (y === l)
              return oa(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var C = !1, _ = s.child; _; ) {
            if (_ === i) {
              C = !0, i = s, l = f;
              break;
            }
            if (_ === l) {
              C = !0, l = s, i = f;
              break;
            }
            _ = _.sibling;
          }
          if (!C) {
            for (_ = f.child; _; ) {
              if (_ === i) {
                C = !0, i = f, l = s;
                break;
              }
              if (_ === l) {
                C = !0, l = f, i = s;
                break;
              }
              _ = _.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== N)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ha(e) {
      var t = Cn(e);
      return t !== null ? Dd(t) : null;
    }
    function Dd(e) {
      if (e.tag === Y || e.tag === q)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Dd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Gp(e) {
      var t = Cn(e);
      return t !== null ? xc(t) : null;
    }
    function xc(e) {
      if (e.tag === Y || e.tag === q)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== P) {
          var a = xc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Oc = m.unstable_scheduleCallback, Xp = m.unstable_cancelCallback, Dc = m.unstable_shouldYield, Zp = m.unstable_requestPaint, Ln = m.unstable_now, kd = m.unstable_getCurrentPriorityLevel, kc = m.unstable_ImmediatePriority, _a = m.unstable_UserBlockingPriority, Ri = m.unstable_NormalPriority, Mc = m.unstable_LowPriority, Mu = m.unstable_IdlePriority, Md = m.unstable_yieldValue, Ld = m.unstable_setDisableYieldValue, Lu = null, fr = null, De = null, Bn = !1, Sr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Nd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Rt && (e = wt({}, e, {
          getLaneLabelMap: Au,
          injectProfilingHooks: Ki
        })), Lu = t.inject(e), fr = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Jp(e, t) {
      if (fr && typeof fr.onScheduleFiberRoot == "function")
        try {
          fr.onScheduleFiberRoot(Lu, e, t);
        } catch (a) {
          Bn || (Bn = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function Yi(e, t) {
      if (fr && typeof fr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & st) === st;
          if (ht) {
            var i;
            switch (t) {
              case Lr:
                i = kc;
                break;
              case Er:
                i = _a;
                break;
              case Qi:
                i = Ri;
                break;
              case Ls:
                i = Mu;
                break;
              default:
                i = Ri;
                break;
            }
            fr.onCommitFiberRoot(Lu, e, i, a);
          }
        } catch (l) {
          Bn || (Bn = !0, E("React instrumentation encountered an error: %s", l));
        }
    }
    function Nu(e) {
      if (fr && typeof fr.onPostCommitFiberRoot == "function")
        try {
          fr.onPostCommitFiberRoot(Lu, e);
        } catch (t) {
          Bn || (Bn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Ad(e) {
      if (fr && typeof fr.onCommitFiberUnmount == "function")
        try {
          fr.onCommitFiberUnmount(Lu, e);
        } catch (t) {
          Bn || (Bn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function er(e) {
      if (typeof Md == "function" && (Ld(e), O(e)), fr && typeof fr.setStrictMode == "function")
        try {
          fr.setStrictMode(Lu, e);
        } catch (t) {
          Bn || (Bn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Ki(e) {
      De = e;
    }
    function Au() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Rn; a++) {
          var i = jy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Lc(e) {
      De !== null && typeof De.markCommitStarted == "function" && De.markCommitStarted(e);
    }
    function zd() {
      De !== null && typeof De.markCommitStopped == "function" && De.markCommitStopped();
    }
    function zu(e) {
      De !== null && typeof De.markComponentRenderStarted == "function" && De.markComponentRenderStarted(e);
    }
    function hl() {
      De !== null && typeof De.markComponentRenderStopped == "function" && De.markComponentRenderStopped();
    }
    function eh(e) {
      De !== null && typeof De.markComponentPassiveEffectMountStarted == "function" && De.markComponentPassiveEffectMountStarted(e);
    }
    function Ud() {
      De !== null && typeof De.markComponentPassiveEffectMountStopped == "function" && De.markComponentPassiveEffectMountStopped();
    }
    function Nc(e) {
      De !== null && typeof De.markComponentPassiveEffectUnmountStarted == "function" && De.markComponentPassiveEffectUnmountStarted(e);
    }
    function th() {
      De !== null && typeof De.markComponentPassiveEffectUnmountStopped == "function" && De.markComponentPassiveEffectUnmountStopped();
    }
    function nh(e) {
      De !== null && typeof De.markComponentLayoutEffectMountStarted == "function" && De.markComponentLayoutEffectMountStarted(e);
    }
    function rh() {
      De !== null && typeof De.markComponentLayoutEffectMountStopped == "function" && De.markComponentLayoutEffectMountStopped();
    }
    function Ac(e) {
      De !== null && typeof De.markComponentLayoutEffectUnmountStarted == "function" && De.markComponentLayoutEffectUnmountStarted(e);
    }
    function mo() {
      De !== null && typeof De.markComponentLayoutEffectUnmountStopped == "function" && De.markComponentLayoutEffectUnmountStopped();
    }
    function zc(e, t, a) {
      De !== null && typeof De.markComponentErrored == "function" && De.markComponentErrored(e, t, a);
    }
    function ah(e, t, a) {
      De !== null && typeof De.markComponentSuspended == "function" && De.markComponentSuspended(e, t, a);
    }
    function ih(e) {
      De !== null && typeof De.markLayoutEffectsStarted == "function" && De.markLayoutEffectsStarted(e);
    }
    function yo() {
      De !== null && typeof De.markLayoutEffectsStopped == "function" && De.markLayoutEffectsStopped();
    }
    function uh(e) {
      De !== null && typeof De.markPassiveEffectsStarted == "function" && De.markPassiveEffectsStarted(e);
    }
    function Ts() {
      De !== null && typeof De.markPassiveEffectsStopped == "function" && De.markPassiveEffectsStopped();
    }
    function oi(e) {
      De !== null && typeof De.markRenderStarted == "function" && De.markRenderStarted(e);
    }
    function bs() {
      De !== null && typeof De.markRenderYielded == "function" && De.markRenderYielded();
    }
    function go() {
      De !== null && typeof De.markRenderStopped == "function" && De.markRenderStopped();
    }
    function ml(e) {
      De !== null && typeof De.markRenderScheduled == "function" && De.markRenderScheduled(e);
    }
    function jd(e, t) {
      De !== null && typeof De.markForceUpdateScheduled == "function" && De.markForceUpdateScheduled(e, t);
    }
    function Uu(e, t) {
      De !== null && typeof De.markStateUpdateScheduled == "function" && De.markStateUpdateScheduled(e, t);
    }
    var at = (
      /*                         */
      0
    ), Ot = (
      /*                 */
      1
    ), ut = (
      /*                    */
      2
    ), Nn = (
      /*               */
      8
    ), Va = (
      /*              */
      16
    ), Uc = Math.clz32 ? Math.clz32 : yl, jc = Math.log, Pd = Math.LN2;
    function yl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (jc(t) / Pd | 0) | 0;
    }
    var Rn = 31, J = (
      /*                        */
      0
    ), Ut = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), _i = (
      /*    */
      2
    ), Ta = (
      /*             */
      4
    ), gl = (
      /*            */
      8
    ), _n = (
      /*                     */
      16
    ), Sl = (
      /*                */
      32
    ), ju = (
      /*                       */
      4194240
    ), El = (
      /*                        */
      64
    ), Ba = (
      /*                        */
      128
    ), sa = (
      /*                        */
      256
    ), Cl = (
      /*                        */
      512
    ), ws = (
      /*                        */
      1024
    ), xs = (
      /*                        */
      2048
    ), Pc = (
      /*                        */
      4096
    ), Fc = (
      /*                        */
      8192
    ), Hc = (
      /*                        */
      16384
    ), Vc = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), $c = (
      /*                       */
      131072
    ), Ic = (
      /*                       */
      262144
    ), Yc = (
      /*                       */
      524288
    ), Rl = (
      /*                       */
      1048576
    ), Kc = (
      /*                       */
      2097152
    ), _l = (
      /*                            */
      130023424
    ), Wi = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Os = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), qc = (
      /*                             */
      67108864
    ), Fd = Wi, So = (
      /*          */
      134217728
    ), Gc = (
      /*                          */
      268435455
    ), Eo = (
      /*               */
      268435456
    ), Pu = (
      /*                        */
      536870912
    ), ca = (
      /*                   */
      1073741824
    );
    function jy(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & _i)
          return "InputContinuousHydration";
        if (e & Ta)
          return "InputContinuous";
        if (e & gl)
          return "DefaultHydration";
        if (e & _n)
          return "Default";
        if (e & Sl)
          return "TransitionHydration";
        if (e & ju)
          return "Transition";
        if (e & _l)
          return "Retry";
        if (e & So)
          return "SelectiveHydration";
        if (e & Eo)
          return "IdleHydration";
        if (e & Pu)
          return "Idle";
        if (e & ca)
          return "Offscreen";
      }
    }
    var vn = -1, Xc = El, Zc = Wi;
    function Co(e) {
      switch (qn(e)) {
        case lt:
          return lt;
        case _i:
          return _i;
        case Ta:
          return Ta;
        case gl:
          return gl;
        case _n:
          return _n;
        case Sl:
          return Sl;
        case El:
        case Ba:
        case sa:
        case Cl:
        case ws:
        case xs:
        case Pc:
        case Fc:
        case Hc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Rl:
        case Kc:
          return e & ju;
        case Wi:
        case Wc:
        case Os:
        case Qc:
        case qc:
          return e & _l;
        case So:
          return So;
        case Eo:
          return Eo;
        case Pu:
          return Pu;
        case ca:
          return ca;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ds(e, t) {
      var a = e.pendingLanes;
      if (a === J)
        return J;
      var i = J, l = e.suspendedLanes, s = e.pingedLanes, f = a & Gc;
      if (f !== J) {
        var p = f & ~l;
        if (p !== J)
          i = Co(p);
        else {
          var y = f & s;
          y !== J && (i = Co(y));
        }
      } else {
        var C = a & ~l;
        C !== J ? i = Co(C) : s !== J && (i = Co(s));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === J) {
        var _ = qn(i), L = qn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === _n && (L & ju) !== J
        )
          return t;
      }
      (i & Ta) !== J && (i |= a & _n);
      var k = e.entangledLanes;
      if (k !== J)
        for (var V = e.entanglements, I = i & k; I > 0; ) {
          var X = Fu(I), je = 1 << X;
          i |= V[X], I &= ~je;
        }
      return i;
    }
    function lh(e, t) {
      for (var a = e.eventTimes, i = vn; t > 0; ) {
        var l = Fu(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Jc(e, t) {
      switch (e) {
        case lt:
        case _i:
        case Ta:
          return t + 250;
        case gl:
        case _n:
        case Sl:
        case El:
        case Ba:
        case sa:
        case Cl:
        case ws:
        case xs:
        case Pc:
        case Fc:
        case Hc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Rl:
        case Kc:
          return t + 5e3;
        case Wi:
        case Wc:
        case Os:
        case Qc:
        case qc:
          return vn;
        case So:
        case Eo:
        case Pu:
        case ca:
          return vn;
        default:
          return E("Should have found matching lanes. This is a bug in React."), vn;
      }
    }
    function Py(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fu(f), y = 1 << p, C = s[p];
        C === vn ? ((y & i) === J || (y & l) !== J) && (s[p] = Jc(y, t)) : C <= t && (e.expiredLanes |= y), f &= ~y;
      }
    }
    function Fy(e) {
      return Co(e.pendingLanes);
    }
    function Hd(e) {
      var t = e.pendingLanes & ~ca;
      return t !== J ? t : t & ca ? ca : J;
    }
    function Ro(e) {
      return (e & lt) !== J;
    }
    function ks(e) {
      return (e & Gc) !== J;
    }
    function ef(e) {
      return (e & _l) === e;
    }
    function Hy(e) {
      var t = lt | Ta | _n;
      return (e & t) === J;
    }
    function oh(e) {
      return (e & ju) === e;
    }
    function Ms(e, t) {
      var a = _i | Ta | gl | _n;
      return (t & a) !== J;
    }
    function sh(e, t) {
      return (t & e.expiredLanes) !== J;
    }
    function Vd(e) {
      return (e & ju) !== J;
    }
    function Bd() {
      var e = Xc;
      return Xc <<= 1, (Xc & ju) === J && (Xc = El), e;
    }
    function Vy() {
      var e = Zc;
      return Zc <<= 1, (Zc & _l) === J && (Zc = Wi), e;
    }
    function qn(e) {
      return e & -e;
    }
    function tr(e) {
      return qn(e);
    }
    function Fu(e) {
      return 31 - Uc(e);
    }
    function tf(e) {
      return Fu(e);
    }
    function fa(e, t) {
      return (e & t) !== J;
    }
    function Tl(e, t) {
      return (e & t) === t;
    }
    function Ct(e, t) {
      return e | t;
    }
    function _o(e, t) {
      return e & ~t;
    }
    function $d(e, t) {
      return e & t;
    }
    function ch(e) {
      return e;
    }
    function fh(e, t) {
      return e !== Ut && e < t ? e : t;
    }
    function nf(e) {
      for (var t = [], a = 0; a < Rn; a++)
        t.push(e);
      return t;
    }
    function bl(e, t, a) {
      e.pendingLanes |= t, t !== Pu && (e.suspendedLanes = J, e.pingedLanes = J);
      var i = e.eventTimes, l = tf(t);
      i[l] = a;
    }
    function Id(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Fu(i), s = 1 << l;
        a[l] = vn, i &= ~s;
      }
    }
    function Yd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = J, e.pingedLanes = J, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fu(f), y = 1 << p;
        i[p] = J, l[p] = vn, s[p] = vn, f &= ~y;
      }
    }
    function To(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Fu(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function By(e, t) {
      var a = qn(t), i;
      switch (a) {
        case Ta:
          i = _i;
          break;
        case _n:
          i = gl;
          break;
        case El:
        case Ba:
        case sa:
        case Cl:
        case ws:
        case xs:
        case Pc:
        case Fc:
        case Hc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Rl:
        case Kc:
        case Wi:
        case Wc:
        case Os:
        case Qc:
        case qc:
          i = Sl;
          break;
        case Pu:
          i = Eo;
          break;
        default:
          i = Ut;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ut ? Ut : i;
    }
    function Wd(e, t, a) {
      if (Sr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = tf(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function rf(e, t) {
      if (Sr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = tf(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var y = p.alternate;
            (y === null || !i.has(y)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Qd(e, t) {
      return null;
    }
    var Lr = lt, Er = Ta, Qi = _n, Ls = Pu, wl = Ut;
    function $a() {
      return wl;
    }
    function nr(e) {
      wl = e;
    }
    function Ns(e, t) {
      var a = wl;
      try {
        return wl = e, t();
      } finally {
        wl = a;
      }
    }
    function Nr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function $y(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function qd(e, t) {
      return e !== 0 && e < t;
    }
    function As(e) {
      var t = qn(e);
      return qd(Lr, t) ? qd(Er, t) ? ks(t) ? Qi : Ls : Er : Lr;
    }
    function rr(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var dh;
    function He(e) {
      dh = e;
    }
    function bo(e) {
      dh(e);
    }
    var zs;
    function vh(e) {
      zs = e;
    }
    var ph;
    function Us(e) {
      ph = e;
    }
    var js;
    function Gd(e) {
      js = e;
    }
    var Xd;
    function hh(e) {
      Xd = e;
    }
    var af = !1, wo = [], Ti = null, wn = null, dr = null, Ia = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), qi = [], si = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function mh(e) {
      return si.indexOf(e) > -1;
    }
    function bi(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function yh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ti = null;
          break;
        case "dragenter":
        case "dragleave":
          wn = null;
          break;
        case "mouseover":
        case "mouseout":
          dr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ia.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          xo.delete(i);
          break;
        }
      }
    }
    function Oo(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = bi(t, a, i, l, s);
        if (t !== null) {
          var p = Fo(t);
          p !== null && zs(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return l !== null && y.indexOf(l) === -1 && y.push(l), e;
    }
    function gh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Ti = Oo(Ti, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return wn = Oo(wn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return dr = Oo(dr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var y = l, C = y.pointerId;
          return Ia.set(C, Oo(Ia.get(C) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var _ = l, L = _.pointerId;
          return xo.set(L, Oo(xo.get(L) || null, e, t, a, i, _)), !0;
        }
      }
      return !1;
    }
    function Zd(e) {
      var t = Ks(e.target);
      if (t !== null) {
        var a = Ca(t);
        if (a !== null) {
          var i = a.tag;
          if (i === pe) {
            var l = xd(a);
            if (l !== null) {
              e.blockedOn = l, Xd(e.priority, function() {
                ph(a);
              });
              return;
            }
          } else if (i === N) {
            var s = a.stateNode;
            if (rr(s)) {
              e.blockedOn = wc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Sh(e) {
      for (var t = js(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qi.length && qd(t, qi[i].priority); i++)
        ;
      qi.splice(i, 0, a), i === 0 && Zd(a);
    }
    function uf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          ms(s), l.target.dispatchEvent(s), Ny();
        } else {
          var f = Fo(i);
          return f !== null && zs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ps(e, t, a) {
      uf(e) && a.delete(t);
    }
    function Jd() {
      af = !1, Ti !== null && uf(Ti) && (Ti = null), wn !== null && uf(wn) && (wn = null), dr !== null && uf(dr) && (dr = null), Ia.forEach(Ps), xo.forEach(Ps);
    }
    function Ar(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Jd)));
    }
    function Dt(e) {
      if (wo.length > 0) {
        Ar(wo[0], e);
        for (var t = 1; t < wo.length; t++) {
          var a = wo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ti !== null && Ar(Ti, e), wn !== null && Ar(wn, e), dr !== null && Ar(dr, e);
      var i = function(p) {
        return Ar(p, e);
      };
      Ia.forEach(i), xo.forEach(i);
      for (var l = 0; l < qi.length; l++) {
        var s = qi[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; qi.length > 0; ) {
        var f = qi[0];
        if (f.blockedOn !== null)
          break;
        Zd(f), f.blockedOn === null && qi.shift();
      }
    }
    var An = h.ReactCurrentBatchConfig, Fn = !0;
    function vr(e) {
      Fn = !!e;
    }
    function ba() {
      return Fn;
    }
    function Do(e, t, a) {
      var i = Ir(t), l;
      switch (i) {
        case Lr:
          l = ar;
          break;
        case Er:
          l = Fs;
          break;
        case Qi:
        default:
          l = Gi;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function ar(e, t, a, i) {
      var l = $a(), s = An.transition;
      An.transition = null;
      try {
        nr(Lr), Gi(e, t, a, i);
      } finally {
        nr(l), An.transition = s;
      }
    }
    function Fs(e, t, a, i) {
      var l = $a(), s = An.transition;
      An.transition = null;
      try {
        nr(Er), Gi(e, t, a, i);
      } finally {
        nr(l), An.transition = s;
      }
    }
    function Gi(e, t, a, i) {
      Fn && lf(e, t, a, i);
    }
    function lf(e, t, a, i) {
      var l = xl(e, t, a, i);
      if (l === null) {
        sg(e, t, i, ko, a), yh(e, i);
        return;
      }
      if (gh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (yh(e, i), t & sl && mh(e)) {
        for (; l !== null; ) {
          var s = Fo(l);
          s !== null && bo(s);
          var f = xl(e, t, a, i);
          if (f === null && sg(e, t, i, ko, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      sg(e, t, i, null, a);
    }
    var ko = null;
    function xl(e, t, a, i) {
      ko = null;
      var l = Cc(i), s = Ks(l);
      if (s !== null) {
        var f = Ca(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === pe) {
            var y = xd(f);
            if (y !== null)
              return y;
            s = null;
          } else if (p === N) {
            var C = f.stateNode;
            if (rr(C))
              return wc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return ko = s, null;
    }
    function Ir(e) {
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
          return Lr;
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
          return Er;
        case "message": {
          var t = kd();
          switch (t) {
            case kc:
              return Lr;
            case _a:
              return Er;
            case Ri:
            case Mc:
              return Qi;
            case Mu:
              return Ls;
            default:
              return Qi;
          }
        }
        default:
          return Qi;
      }
    }
    function ev(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Mo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Xi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function of(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ol = null, wi = null, Hu = null;
    function Vu(e) {
      return Ol = e, wi = cf(), !0;
    }
    function sf() {
      Ol = null, wi = null, Hu = null;
    }
    function Lo() {
      if (Hu)
        return Hu;
      var e, t = wi, a = t.length, i, l = cf(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Hu = l.slice(e, p), Hu;
    }
    function cf() {
      return "value" in Ol ? Ol.value : Ol.textContent;
    }
    function Dl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function kl() {
      return !0;
    }
    function zr() {
      return !1;
    }
    function Gn(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var y = e[p];
            y ? this[p] = y(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = kl : this.isDefaultPrevented = zr, this.isPropagationStopped = zr, this;
      }
      return wt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = kl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = kl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: kl
      }), t;
    }
    var Ur = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, jr = Gn(Ur), No = wt({}, Ur, {
      view: 0,
      detail: 0
    }), tv = Gn(No), Hs, nv, Ya;
    function Eh(e) {
      e !== Ya && (Ya && e.type === "mousemove" ? (Hs = e.screenX - Ya.screenX, nv = e.screenY - Ya.screenY) : (Hs = 0, nv = 0), Ya = e);
    }
    var Ao = wt({}, No, {
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
      getModifierState: vf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Eh(e), Hs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : nv;
      }
    }), Bu = Gn(Ao), rv = wt({}, Ao, {
      dataTransfer: 0
    }), Ml = Gn(rv), Ch = wt({}, No, {
      relatedTarget: 0
    }), ff = Gn(Ch), av = wt({}, Ur, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), df = Gn(av), Iy = wt({}, Ur, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yy = Gn(Iy), Rh = wt({}, Ur, {
      data: 0
    }), iv = Gn(Rh), Ll = iv, Ky = {
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
    }, zo = {
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
    function _h(e) {
      if (e.key) {
        var t = Ky[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Dl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? zo[e.keyCode] || "Unidentified" : "";
    }
    var Hn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Wy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Hn[e];
      return i ? !!a[i] : !1;
    }
    function vf(e) {
      return Wy;
    }
    var Qy = wt({}, No, {
      key: _h,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Dl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qy = Gn(Qy), Th = wt({}, Ao, {
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
    }), uv = Gn(Th), Gy = wt({}, No, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vf
    }), Ka = Gn(Gy), lv = wt({}, Ur, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xy = Gn(lv), $u = wt({}, Ao, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), pf = Gn($u), Nl = [9, 13, 27, 32], Vs = 229, Bs = pn && "CompositionEvent" in window, Al = null;
    pn && "documentMode" in document && (Al = document.documentMode);
    var Zy = pn && "TextEvent" in window && !Al, hf = pn && (!Bs || Al && Al > 8 && Al <= 11), bh = 32, ov = String.fromCharCode(bh);
    function wh() {
      Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Zn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Zn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Zn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var $s = !1;
    function mf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function xh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function sv(e, t) {
      return e === "keydown" && t.keyCode === Vs;
    }
    function Oh(e, t) {
      switch (e) {
        case "keyup":
          return Nl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Vs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function cv(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function yf(e) {
      return e.locale === "ko";
    }
    var Zi = !1;
    function fv(e, t, a, i, l) {
      var s, f;
      if (Bs ? s = xh(t) : Zi ? Oh(t, i) && (s = "onCompositionEnd") : sv(t, i) && (s = "onCompositionStart"), !s)
        return null;
      hf && !yf(i) && (!Zi && s === "onCompositionStart" ? Zi = Vu(l) : s === "onCompositionEnd" && Zi && (f = Lo()));
      var p = Nh(a, s);
      if (p.length > 0) {
        var y = new iv(s, t, null, i, l);
        if (e.push({
          event: y,
          listeners: p
        }), f)
          y.data = f;
        else {
          var C = cv(i);
          C !== null && (y.data = C);
        }
      }
    }
    function gf(e, t) {
      switch (e) {
        case "compositionend":
          return cv(t);
        case "keypress":
          var a = t.which;
          return a !== bh ? null : ($s = !0, ov);
        case "textInput":
          var i = t.data;
          return i === ov && $s ? null : i;
        default:
          return null;
      }
    }
    function Dh(e, t) {
      if (Zi) {
        if (e === "compositionend" || !Bs && Oh(e, t)) {
          var a = Lo();
          return sf(), Zi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!mf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return hf && !yf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Jy(e, t, a, i, l) {
      var s;
      if (Zy ? s = gf(t, i) : s = Dh(t, i), !s)
        return null;
      var f = Nh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Ll("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sf(e, t, a, i, l, s, f) {
      fv(e, t, a, i, l), Jy(e, t, a, i, l);
    }
    var eg = {
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
    function Uo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!eg[e.type] : t === "textarea";
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
    function tg(e) {
      if (!pn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ef() {
      Zn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Rc(i);
      var l = Nh(t, "onChange");
      if (l.length > 0) {
        var s = new jr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var r = null, u = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, u, e, Cc(e)), Sd(d, t);
    }
    function d(e) {
      SE(e, 0);
    }
    function S(e) {
      var t = wf(e);
      if (ao(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var D = !1;
    pn && (D = tg("input") && (!document.documentMode || document.documentMode > 9));
    function K(e, t) {
      r = e, u = t, r.attachEvent("onpropertychange", ge);
    }
    function ve() {
      r && (r.detachEvent("onpropertychange", ge), r = null, u = null);
    }
    function ge(e) {
      e.propertyName === "value" && S(u) && c(e);
    }
    function fe(e, t, a) {
      e === "focusin" ? (ve(), K(t, a)) : e === "focusout" && ve();
    }
    function Ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(u);
    }
    function Be(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ke(e, t) {
      if (e === "click")
        return S(t);
    }
    function $n(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function z(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function M(e, t, a, i, l, s, f) {
      var p = a ? wf(a) : window, y, C;
      if (o(p) ? y = T : Uo(p) ? D ? y = $n : (y = Ae, C = fe) : Be(p) && (y = Ke), y) {
        var _ = y(t, a);
        if (_) {
          n(e, _, i, l);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && z(p);
    }
    function F() {
      ur("onMouseEnter", ["mouseout", "mouseover"]), ur("onMouseLeave", ["mouseout", "mouseover"]), ur("onPointerEnter", ["pointerout", "pointerover"]), ur("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Re(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (p && !Kp(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Ks(C) || bv(C)))
          return;
      }
      if (!(!y && !p)) {
        var _;
        if (l.window === l)
          _ = l;
        else {
          var L = l.ownerDocument;
          L ? _ = L.defaultView || L.parentWindow : _ = window;
        }
        var k, V;
        if (y) {
          var I = i.relatedTarget || i.toElement;
          if (k = a, V = I ? Ks(I) : null, V !== null) {
            var X = Ca(V);
            (V !== X || V.tag !== Y && V.tag !== q) && (V = null);
          }
        } else
          k = null, V = a;
        if (k !== V) {
          var je = Bu, nt = "onMouseLeave", Ge = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (je = uv, nt = "onPointerLeave", Ge = "onPointerEnter", Pt = "pointer");
          var kt = k == null ? _ : wf(k), U = V == null ? _ : wf(V), Z = new je(nt, Pt + "leave", k, i, l);
          Z.target = kt, Z.relatedTarget = U;
          var j = null, Se = Ks(l);
          if (Se === a) {
            var Pe = new je(Ge, Pt + "enter", V, i, l);
            Pe.target = U, Pe.relatedTarget = kt, j = Pe;
          }
          H_(e, Z, j, k, V);
        }
      }
    }
    function Qe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var $e = typeof Object.is == "function" ? Object.is : Qe;
    function Ze(e, t) {
      if ($e(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Kn.call(t, s) || !$e(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ct(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function pr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function It(e, t) {
      for (var a = ct(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Fi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = ct(pr(a));
      }
    }
    function Iu(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return ng(e, l, s, f, p);
    }
    function ng(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, y = 0, C = 0, _ = e, L = null;
      e:
        for (; ; ) {
          for (var k = null; _ === t && (a === 0 || _.nodeType === Fi) && (f = s + a), _ === i && (l === 0 || _.nodeType === Fi) && (p = s + l), _.nodeType === Fi && (s += _.nodeValue.length), (k = _.firstChild) !== null; )
            L = _, _ = k;
          for (; ; ) {
            if (_ === e)
              break e;
            if (L === t && ++y === a && (f = s), L === i && ++C === l && (p = s), (k = _.nextSibling) !== null)
              break;
            _ = L, L = _.parentNode;
          }
          _ = k;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function C_(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var y = p;
          p = f, f = y;
        }
        var C = It(e, f), _ = It(e, p);
        if (C && _) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === _.node && l.focusOffset === _.offset)
            return;
          var L = a.createRange();
          L.setStart(C.node, C.offset), l.removeAllRanges(), f > p ? (l.addRange(L), l.extend(_.node, _.offset)) : (L.setEnd(_.node, _.offset), l.addRange(L));
        }
      }
    }
    function lE(e) {
      return e && e.nodeType === Fi;
    }
    function oE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : lE(e) ? !1 : lE(t) ? oE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function R_(e) {
      return e && e.ownerDocument && oE(e.ownerDocument.documentElement, e);
    }
    function __(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function sE() {
      for (var e = window, t = _u(); t instanceof e.HTMLIFrameElement; ) {
        if (__(t))
          e = t.contentWindow;
        else
          return t;
        t = _u(e.document);
      }
      return t;
    }
    function rg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function T_() {
      var e = sE();
      return {
        focusedElem: e,
        selectionRange: rg(e) ? w_(e) : null
      };
    }
    function b_(e) {
      var t = sE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && R_(a)) {
        i !== null && rg(a) && x_(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ra && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var p = l[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function w_(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Iu(e), t || {
        start: 0,
        end: 0
      };
    }
    function x_(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : C_(e, t);
    }
    var O_ = pn && "documentMode" in document && document.documentMode <= 11;
    function D_() {
      Zn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, ag = null, dv = null, ig = !1;
    function k_(e) {
      if ("selectionStart" in e && rg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function M_(e) {
      return e.window === e ? e.document : e.nodeType === ii ? e : e.ownerDocument;
    }
    function cE(e, t, a) {
      var i = M_(a);
      if (!(ig || Cf == null || Cf !== _u(i))) {
        var l = k_(Cf);
        if (!dv || !Ze(dv, l)) {
          dv = l;
          var s = Nh(ag, "onSelect");
          if (s.length > 0) {
            var f = new jr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Cf;
          }
        }
      }
    }
    function L_(e, t, a, i, l, s, f) {
      var p = a ? wf(a) : window;
      switch (t) {
        case "focusin":
          (Uo(p) || p.contentEditable === "true") && (Cf = p, ag = a, dv = null);
          break;
        case "focusout":
          Cf = null, ag = null, dv = null;
          break;
        case "mousedown":
          ig = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ig = !1, cE(e, i, l);
          break;
        case "selectionchange":
          if (O_)
            break;
        case "keydown":
        case "keyup":
          cE(e, i, l);
      }
    }
    function kh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Rf = {
      animationend: kh("Animation", "AnimationEnd"),
      animationiteration: kh("Animation", "AnimationIteration"),
      animationstart: kh("Animation", "AnimationStart"),
      transitionend: kh("Transition", "TransitionEnd")
    }, ug = {}, fE = {};
    pn && (fE = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
    function Mh(e) {
      if (ug[e])
        return ug[e];
      if (!Rf[e])
        return e;
      var t = Rf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in fE)
          return ug[e] = t[a];
      return e;
    }
    var dE = Mh("animationend"), vE = Mh("animationiteration"), pE = Mh("animationstart"), hE = Mh("transitionend"), mE = /* @__PURE__ */ new Map(), yE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function jo(e, t) {
      mE.set(e, t), Zn(t, [e]);
    }
    function N_() {
      for (var e = 0; e < yE.length; e++) {
        var t = yE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        jo(a, "on" + i);
      }
      jo(dE, "onAnimationEnd"), jo(vE, "onAnimationIteration"), jo(pE, "onAnimationStart"), jo("dblclick", "onDoubleClick"), jo("focusin", "onFocus"), jo("focusout", "onBlur"), jo(hE, "onTransitionEnd");
    }
    function A_(e, t, a, i, l, s, f) {
      var p = mE.get(t);
      if (p !== void 0) {
        var y = jr, C = t;
        switch (t) {
          case "keypress":
            if (Dl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = qy;
            break;
          case "focusin":
            C = "focus", y = ff;
            break;
          case "focusout":
            C = "blur", y = ff;
            break;
          case "beforeblur":
          case "afterblur":
            y = ff;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ml;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Ka;
            break;
          case dE:
          case vE:
          case pE:
            y = df;
            break;
          case hE:
            y = Xy;
            break;
          case "scroll":
            y = tv;
            break;
          case "wheel":
            y = pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Yy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = uv;
            break;
        }
        var _ = (s & sl) !== 0;
        {
          var L = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = P_(a, p, i.type, _, L);
          if (k.length > 0) {
            var V = new y(p, C, null, i, l);
            e.push({
              event: V,
              listeners: k
            });
          }
        }
      }
    }
    N_(), F(), Ef(), D_(), wh();
    function z_(e, t, a, i, l, s, f) {
      A_(e, t, a, i, l, s);
      var p = (s & Ly) === 0;
      p && (Re(e, t, a, i, l), M(e, t, a, i, l), L_(e, t, a, i, l), Sf(e, t, a, i, l));
    }
    var vv = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], lg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(vv));
    function gE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, $i(i, t, void 0, e), e.currentTarget = null;
    }
    function U_(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, y = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          gE(e, y, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var _ = t[C], L = _.instance, k = _.currentTarget, V = _.listener;
          if (L !== i && e.isPropagationStopped())
            return;
          gE(e, V, k), i = L;
        }
    }
    function SE(e, t) {
      for (var a = (t & sl) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        U_(s, f, a);
      }
      _d();
    }
    function j_(e, t, a, i, l) {
      var s = Cc(a), f = [];
      z_(f, e, i, a, s, t), SE(f, t);
    }
    function zn(e, t) {
      lg.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = vb(t), l = V_(e, a);
      i.has(l) || (EE(t, e, ps, a), i.add(l));
    }
    function og(e, t, a) {
      lg.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= sl), EE(a, e, i, t);
    }
    var Lh = "_reactListening" + Math.random().toString(36).slice(2);
    function pv(e) {
      if (!e[Lh]) {
        e[Lh] = !0, vt.forEach(function(a) {
          a !== "selectionchange" && (lg.has(a) || og(a, !1, e), og(a, !0, e));
        });
        var t = e.nodeType === ii ? e : e.ownerDocument;
        t !== null && (t[Lh] || (t[Lh] = !0, og("selectionchange", !1, t)));
      }
    }
    function EE(e, t, a, i, l) {
      var s = Do(e, t, a), f = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Xi(e, t, s, f) : Mo(e, t, s) : f !== void 0 ? of(e, t, s, f) : ev(e, t, s);
    }
    function CE(e, t) {
      return e === t || e.nodeType === Qn && e.parentNode === t;
    }
    function sg(e, t, a, i, l) {
      var s = i;
      if (!(t & Vi) && !(t & ps)) {
        var f = l;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var y = p.tag;
              if (y === N || y === P) {
                var C = p.stateNode.containerInfo;
                if (CE(C, f))
                  break;
                if (y === P)
                  for (var _ = p.return; _ !== null; ) {
                    var L = _.tag;
                    if (L === N || L === P) {
                      var k = _.stateNode.containerInfo;
                      if (CE(k, f))
                        return;
                    }
                    _ = _.return;
                  }
                for (; C !== null; ) {
                  var V = Ks(C);
                  if (V === null)
                    return;
                  var I = V.tag;
                  if (I === Y || I === q) {
                    p = s = V;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Sd(function() {
        return j_(e, t, a, s);
      });
    }
    function hv(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function P_(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, y = [], C = e, _ = null; C !== null; ) {
        var L = C, k = L.stateNode, V = L.tag;
        if (V === Y && k !== null && (_ = k, p !== null)) {
          var I = fl(C, p);
          I != null && y.push(hv(C, I, _));
        }
        if (l)
          break;
        C = C.return;
      }
      return y;
    }
    function Nh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === Y && f !== null) {
          var y = f, C = fl(l, a);
          C != null && i.unshift(hv(l, C, y));
          var _ = fl(l, t);
          _ != null && i.push(hv(l, _, y));
        }
        l = l.return;
      }
      return i;
    }
    function _f(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Y);
      return e || null;
    }
    function F_(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = _f(s))
        l++;
      for (var f = 0, p = i; p; p = _f(p))
        f++;
      for (; l - f > 0; )
        a = _f(a), l--;
      for (; f - l > 0; )
        i = _f(i), f--;
      for (var y = l; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = _f(a), i = _f(i);
      }
      return null;
    }
    function RE(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var y = p, C = y.alternate, _ = y.stateNode, L = y.tag;
        if (C !== null && C === i)
          break;
        if (L === Y && _ !== null) {
          var k = _;
          if (l) {
            var V = fl(p, s);
            V != null && f.unshift(hv(p, V, k));
          } else if (!l) {
            var I = fl(p, s);
            I != null && f.push(hv(p, I, k));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function H_(e, t, a, i, l) {
      var s = i && l ? F_(i, l) : null;
      i !== null && RE(e, t, i, s, !1), l !== null && a !== null && RE(e, a, l, s, !0);
    }
    function V_(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Wa = !1, mv = "dangerouslySetInnerHTML", Ah = "suppressContentEditableWarning", Po = "suppressHydrationWarning", _E = "autoFocus", Is = "children", Ys = "style", zh = "__html", cg, Uh, yv, TE, jh, bE, wE;
    cg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Uh = function(e, t) {
      Ec(e, t), pd(e, t), Yp(e, t, {
        registrationNameDependencies: $t,
        possibleRegistrationNames: mr
      });
    }, bE = pn && !document.documentMode, yv = function(e, t, a) {
      if (!Wa) {
        var i = Ph(a), l = Ph(t);
        l !== i && (Wa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, TE = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, jh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, wE = function(e, t) {
      var a = e.namespaceURI === Pi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var B_ = /\r\n?/g, $_ = /\u0000|\uFFFD/g;
    function Ph(e) {
      sn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(B_, `
`).replace($_, "");
    }
    function Fh(e, t, a, i) {
      var l = Ph(t), s = Ph(e);
      if (s !== l && (i && (Wa || (Wa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && le))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function xE(e) {
      return e.nodeType === ii ? e : e.ownerDocument;
    }
    function I_() {
    }
    function Hh(e) {
      e.onclick = I_;
    }
    function Y_(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ys)
            f && Object.freeze(f), zp(t, f);
          else if (s === mv) {
            var p = f ? f[zh] : void 0;
            p != null && Tp(t, p);
          } else if (s === Is)
            if (typeof f == "string") {
              var y = e !== "textarea" || f !== "";
              y && mc(t, f);
            } else
              typeof f == "number" && mc(t, "" + f);
          else
            s === Ah || s === Po || s === _E || ($t.hasOwnProperty(s) ? f != null && (typeof f != "function" && jh(s, f), s === "onScroll" && zn("scroll", t)) : f != null && ga(t, s, f, l));
        }
    }
    function K_(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Ys ? zp(e, f) : s === mv ? Tp(e, f) : s === Is ? mc(e, f) : ga(e, s, f, i);
      }
    }
    function W_(e, t, a, i) {
      var l, s = xE(a), f, p = i;
      if (p === Pi && (p = pc(e)), p === Pi) {
        if (l = Hi(e, t), !l && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          f = y.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var _ = f;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Pi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Kn.call(cg, e) && (cg[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function Q_(e, t) {
      return xE(t).createTextNode(e);
    }
    function q_(e, t, a, i) {
      var l = Hi(t, a);
      Uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          zn("cancel", e), zn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < vv.length; f++)
            zn(vv[f], e);
          s = a;
          break;
        case "source":
          zn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e), s = a;
          break;
        case "details":
          zn("toggle", e), s = a;
          break;
        case "input":
          w(e, a), s = g(e, a), zn("invalid", e);
          break;
        case "option":
          rn(e, a), s = a;
          break;
        case "select":
          cs(e, a), s = ss(e, a), zn("invalid", e);
          break;
        case "textarea":
          Cp(e, a), s = id(e, a), zn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (gc(t, s), Y_(t, e, i, s, l), t) {
        case "input":
          Aa(e), Ce(e, a, !1);
          break;
        case "textarea":
          Aa(e), _p(e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          rd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Hh(e);
          break;
      }
    }
    function G_(e, t, a, i, l) {
      Uh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = g(e, a), p = g(e, i), s = [];
          break;
        case "select":
          f = ss(e, a), p = ss(e, i), s = [];
          break;
        case "textarea":
          f = id(e, a), p = id(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Hh(e);
          break;
      }
      gc(t, p);
      var y, C, _ = null;
      for (y in f)
        if (!(p.hasOwnProperty(y) || !f.hasOwnProperty(y) || f[y] == null))
          if (y === Ys) {
            var L = f[y];
            for (C in L)
              L.hasOwnProperty(C) && (_ || (_ = {}), _[C] = "");
          } else
            y === mv || y === Is || y === Ah || y === Po || y === _E || ($t.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in p) {
        var k = p[y], V = f != null ? f[y] : void 0;
        if (!(!p.hasOwnProperty(y) || k === V || k == null && V == null))
          if (y === Ys)
            if (k && Object.freeze(k), V) {
              for (C in V)
                V.hasOwnProperty(C) && (!k || !k.hasOwnProperty(C)) && (_ || (_ = {}), _[C] = "");
              for (C in k)
                k.hasOwnProperty(C) && V[C] !== k[C] && (_ || (_ = {}), _[C] = k[C]);
            } else
              _ || (s || (s = []), s.push(y, _)), _ = k;
          else if (y === mv) {
            var I = k ? k[zh] : void 0, X = V ? V[zh] : void 0;
            I != null && X !== I && (s = s || []).push(y, I);
          } else
            y === Is ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(y, "" + k) : y === Ah || y === Po || ($t.hasOwnProperty(y) ? (k != null && (typeof k != "function" && jh(y, k), y === "onScroll" && zn("scroll", e)), !s && V !== k && (s = [])) : (s = s || []).push(y, k));
      }
      return _ && (ds(_, p[Ys]), (s = s || []).push(Ys, _)), s;
    }
    function X_(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && $(e, l);
      var s = Hi(a, i), f = Hi(a, l);
      switch (K_(e, t, s, f), a) {
        case "input":
          Q(e, l);
          break;
        case "textarea":
          Rp(e, l);
          break;
        case "select":
          Ry(e, l);
          break;
      }
    }
    function Z_(e) {
      {
        var t = e.toLowerCase();
        return Sc.hasOwnProperty(t) && Sc[t] || null;
      }
    }
    function J_(e, t, a, i, l, s, f) {
      var p, y;
      switch (p = Hi(t, a), Uh(t, a), t) {
        case "dialog":
          zn("cancel", e), zn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < vv.length; C++)
            zn(vv[C], e);
          break;
        case "source":
          zn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e);
          break;
        case "details":
          zn("toggle", e);
          break;
        case "input":
          w(e, a), zn("invalid", e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          cs(e, a), zn("invalid", e);
          break;
        case "textarea":
          Cp(e, a), zn("invalid", e);
          break;
      }
      gc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, L = 0; L < _.length; L++) {
          var k = _[L].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(_[L].name);
          }
        }
      }
      var V = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var X = a[I];
          if (I === Is)
            typeof X == "string" ? e.textContent !== X && (a[Po] !== !0 && Fh(e.textContent, X, s, f), V = [Is, X]) : typeof X == "number" && e.textContent !== "" + X && (a[Po] !== !0 && Fh(e.textContent, X, s, f), V = [Is, "" + X]);
          else if ($t.hasOwnProperty(I))
            X != null && (typeof X != "function" && jh(I, X), I === "onScroll" && zn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var je = void 0, nt = p && et ? null : Fr(I);
            if (a[Po] !== !0) {
              if (!(I === Ah || I === Po || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === mv) {
                  var Ge = e.innerHTML, Pt = X ? X[zh] : void 0;
                  if (Pt != null) {
                    var kt = wE(e, Pt);
                    kt !== Ge && yv(I, Ge, kt);
                  }
                } else if (I === Ys) {
                  if (y.delete(I), bE) {
                    var U = ky(X);
                    je = e.getAttribute("style"), U !== je && yv(I, je, U);
                  }
                } else if (p && !et)
                  y.delete(I.toLowerCase()), je = vi(e, I, X), X !== je && yv(I, je, X);
                else if (!kn(I, nt, p) && !nn(I, X, nt, p)) {
                  var Z = !1;
                  if (nt !== null)
                    y.delete(nt.attributeName), je = ya(e, I, X, nt);
                  else {
                    var j = i;
                    if (j === Pi && (j = pc(t)), j === Pi)
                      y.delete(I.toLowerCase());
                    else {
                      var Se = Z_(I);
                      Se !== null && Se !== I && (Z = !0, y.delete(Se)), y.delete(I);
                    }
                    je = vi(e, I, X);
                  }
                  var Pe = et;
                  !Pe && X !== je && !Z && yv(I, je, X);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Po] !== !0 && TE(y), t) {
        case "input":
          Aa(e), Ce(e, a, !0);
          break;
        case "textarea":
          Aa(e), _p(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Hh(e);
          break;
      }
      return V;
    }
    function eT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function fg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function dg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function vg(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function pg(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function tT(e, t, a) {
      switch (t) {
        case "input":
          it(e, a);
          return;
        case "textarea":
          ud(e, a);
          return;
        case "select":
          _y(e, a);
          return;
      }
    }
    var gv = function() {
    }, Sv = function() {
    };
    {
      var nT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], OE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], rT = OE.concat(["button"]), aT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], DE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Sv = function(e, t) {
        var a = wt({}, e || DE), i = {
          tag: t
        };
        return OE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), rT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), nT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var iT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return aT.indexOf(t) === -1;
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
            return t == null;
        }
        return !0;
      }, uT = function(e, t) {
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
            return t.nobrTagInScope;
        }
        return null;
      }, kE = {};
      gv = function(e, t, a) {
        a = a || DE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = iT(e, l) ? null : i, f = s ? null : uT(e, a), p = s || f;
        if (p) {
          var y = p.tag, C = !!s + "|" + e + "|" + y;
          if (!kE[C]) {
            kE[C] = !0;
            var _ = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", s) {
              var k = "";
              y === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, y, L, k);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, y);
          }
        }
      };
    }
    var Vh = "suppressHydrationWarning", Bh = "$", $h = "/$", Ev = "$?", Cv = "$!", lT = "style", hg = null, mg = null;
    function oT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ii:
        case ll: {
          t = i === ii ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : od(null, "");
          break;
        }
        default: {
          var s = i === Qn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = od(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), y = Sv(null, p);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function sT(e, t, a) {
      {
        var i = e, l = od(i.namespace, t), s = Sv(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function zM(e) {
      return e;
    }
    function cT(e) {
      hg = ba(), mg = T_();
      var t = null;
      return vr(!1), t;
    }
    function fT(e) {
      b_(mg), vr(hg), hg = null, mg = null;
    }
    function dT(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (gv(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, y = Sv(f.ancestorInfo, e);
          gv(null, p, y);
        }
        s = f.namespace;
      }
      var C = W_(e, t, a, s);
      return Tv(l, C), Tg(C, t), C;
    }
    function vT(e, t) {
      e.appendChild(t);
    }
    function pT(e, t, a, i, l) {
      switch (q_(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function hT(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, y = Sv(f.ancestorInfo, t);
          gv(null, p, y);
        }
      }
      return G_(e, t, a, i);
    }
    function yg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function mT(e, t, a, i) {
      {
        var l = a;
        gv(null, e, l.ancestorInfo);
      }
      var s = Q_(e, t);
      return Tv(i, s), s;
    }
    function yT() {
      var e = window.event;
      return e === void 0 ? Qi : Ir(e.type);
    }
    var gg = typeof setTimeout == "function" ? setTimeout : void 0, gT = typeof clearTimeout == "function" ? clearTimeout : void 0, Sg = -1, ME = typeof Promise == "function" ? Promise : void 0, ST = typeof queueMicrotask == "function" ? queueMicrotask : typeof ME < "u" ? function(e) {
      return ME.resolve(null).then(e).catch(ET);
    } : gg;
    function ET(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function CT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function RT(e, t, a, i, l, s) {
      X_(e, t, a, i, l), Tg(e, l);
    }
    function LE(e) {
      mc(e, "");
    }
    function _T(e, t, a) {
      e.nodeValue = a;
    }
    function TT(e, t) {
      e.appendChild(t);
    }
    function bT(e, t) {
      var a;
      e.nodeType === Qn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Hh(a);
    }
    function wT(e, t, a) {
      e.insertBefore(t, a);
    }
    function xT(e, t, a) {
      e.nodeType === Qn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function OT(e, t) {
      e.removeChild(t);
    }
    function DT(e, t) {
      e.nodeType === Qn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Eg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Qn) {
          var s = l.data;
          if (s === $h)
            if (i === 0) {
              e.removeChild(l), Dt(t);
              return;
            } else
              i--;
          else
            (s === Bh || s === Ev || s === Cv) && i++;
        }
        a = l;
      } while (a);
      Dt(t);
    }
    function kT(e, t) {
      e.nodeType === Qn ? Eg(e.parentNode, t) : e.nodeType === ra && Eg(e, t), Dt(e);
    }
    function MT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function LT(e) {
      e.nodeValue = "";
    }
    function NT(e, t) {
      e = e;
      var a = t[lT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = yc("display", i);
    }
    function AT(e, t) {
      e.nodeValue = t;
    }
    function zT(e) {
      e.nodeType === ra ? e.textContent = "" : e.nodeType === ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function UT(e, t, a) {
      return e.nodeType !== ra || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function jT(e, t) {
      return t === "" || e.nodeType !== Fi ? null : e;
    }
    function PT(e) {
      return e.nodeType !== Qn ? null : e;
    }
    function NE(e) {
      return e.data === Ev;
    }
    function Cg(e) {
      return e.data === Cv;
    }
    function FT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function HT(e, t) {
      e._reactRetry = t;
    }
    function Ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ra || t === Fi)
          break;
        if (t === Qn) {
          var a = e.data;
          if (a === Bh || a === Cv || a === Ev)
            break;
          if (a === $h)
            return null;
        }
      }
      return e;
    }
    function Rv(e) {
      return Ih(e.nextSibling);
    }
    function VT(e) {
      return Ih(e.firstChild);
    }
    function BT(e) {
      return Ih(e.firstChild);
    }
    function $T(e) {
      return Ih(e.nextSibling);
    }
    function IT(e, t, a, i, l, s, f) {
      Tv(s, e), Tg(e, a);
      var p;
      {
        var y = l;
        p = y.namespace;
      }
      var C = (s.mode & Ot) !== at;
      return J_(e, t, a, p, i, C, f);
    }
    function YT(e, t, a, i) {
      return Tv(a, e), a.mode & Ot, eT(e, t);
    }
    function KT(e, t) {
      Tv(t, e);
    }
    function WT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Qn) {
          var i = t.data;
          if (i === $h) {
            if (a === 0)
              return Rv(t);
            a--;
          } else
            (i === Bh || i === Cv || i === Ev) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function AE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Qn) {
          var i = t.data;
          if (i === Bh || i === Cv || i === Ev) {
            if (a === 0)
              return t;
            a--;
          } else
            i === $h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function QT(e) {
      Dt(e);
    }
    function qT(e) {
      Dt(e);
    }
    function GT(e) {
      return e !== "head" && e !== "body";
    }
    function XT(e, t, a, i) {
      var l = !0;
      Fh(t.nodeValue, a, i, l);
    }
    function ZT(e, t, a, i, l, s) {
      if (t[Vh] !== !0) {
        var f = !0;
        Fh(i.nodeValue, l, s, f);
      }
    }
    function JT(e, t) {
      t.nodeType === ra ? fg(e, t) : t.nodeType === Qn || dg(e, t);
    }
    function eb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ra ? fg(a, t) : t.nodeType === Qn || dg(a, t));
      }
    }
    function tb(e, t, a, i, l) {
      (l || t[Vh] !== !0) && (i.nodeType === ra ? fg(a, i) : i.nodeType === Qn || dg(a, i));
    }
    function nb(e, t, a) {
      vg(e, t);
    }
    function rb(e, t) {
      pg(e, t);
    }
    function ab(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && vg(i, t);
      }
    }
    function ib(e, t) {
      {
        var a = e.parentNode;
        a !== null && pg(a, t);
      }
    }
    function ub(e, t, a, i, l, s) {
      (s || t[Vh] !== !0) && vg(a, i);
    }
    function lb(e, t, a, i, l) {
      (l || t[Vh] !== !0) && pg(a, i);
    }
    function ob(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function sb(e) {
      pv(e);
    }
    var Tf = Math.random().toString(36).slice(2), bf = "__reactFiber$" + Tf, Rg = "__reactProps$" + Tf, _v = "__reactContainer$" + Tf, _g = "__reactEvents$" + Tf, cb = "__reactListeners$" + Tf, fb = "__reactHandles$" + Tf;
    function db(e) {
      delete e[bf], delete e[Rg], delete e[_g], delete e[cb], delete e[fb];
    }
    function Tv(e, t) {
      t[bf] = e;
    }
    function Yh(e, t) {
      t[_v] = e;
    }
    function zE(e) {
      e[_v] = null;
    }
    function bv(e) {
      return !!e[_v];
    }
    function Ks(e) {
      var t = e[bf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[_v] || a[bf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = AE(e); l !== null; ) {
              var s = l[bf];
              if (s)
                return s;
              l = AE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Fo(e) {
      var t = e[bf] || e[_v];
      return t && (t.tag === Y || t.tag === q || t.tag === pe || t.tag === N) ? t : null;
    }
    function wf(e) {
      if (e.tag === Y || e.tag === q)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Kh(e) {
      return e[Rg] || null;
    }
    function Tg(e, t) {
      e[Rg] = t;
    }
    function vb(e) {
      var t = e[_g];
      return t === void 0 && (t = e[_g] = /* @__PURE__ */ new Set()), t;
    }
    var UE = {}, jE = h.ReactDebugCurrentFrame;
    function Wh(e) {
      if (e) {
        var t = e._owner, a = gi(e.type, e._source, t ? t.type : null);
        jE.setExtraStackFrame(a);
      } else
        jE.setExtraStackFrame(null);
    }
    function Ji(e, t, a, i, l) {
      {
        var s = Function.call.bind(Kn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              p = C;
            }
            p && !(p instanceof Error) && (Wh(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Wh(null)), p instanceof Error && !(p.message in UE) && (UE[p.message] = !0, Wh(l), E("Failed %s type: %s", a, p.message), Wh(null));
          }
      }
    }
    var bg = [], Qh;
    Qh = [];
    var zl = -1;
    function Ho(e) {
      return {
        current: e
      };
    }
    function da(e, t) {
      if (zl < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Qh[zl] && E("Unexpected Fiber popped."), e.current = bg[zl], bg[zl] = null, Qh[zl] = null, zl--;
    }
    function va(e, t, a) {
      zl++, bg[zl] = e.current, Qh[zl] = a, e.current = t;
    }
    var wg;
    wg = {};
    var ci = {};
    Object.freeze(ci);
    var Ul = Ho(ci), Yu = Ho(!1), xg = ci;
    function xf(e, t, a) {
      return a && Ku(t) ? xg : Ul.current;
    }
    function PE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Of(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ci;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = ft(e) || "Unknown";
          Ji(i, s, "context", p);
        }
        return l && PE(e, t, s), s;
      }
    }
    function qh() {
      return Yu.current;
    }
    function Ku(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Gh(e) {
      da(Yu, e), da(Ul, e);
    }
    function Og(e) {
      da(Yu, e), da(Ul, e);
    }
    function FE(e, t, a) {
      {
        if (Ul.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        va(Ul, t, e), va(Yu, a, e);
      }
    }
    function HE(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ft(e) || "Unknown";
            wg[s] || (wg[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((ft(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var y = ft(e) || "Unknown";
          Ji(l, f, "child context", y);
        }
        return wt({}, a, f);
      }
    }
    function Xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return xg = Ul.current, va(Ul, a, e), va(Yu, Yu.current, e), !0;
      }
    }
    function VE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = HE(e, t, xg);
          i.__reactInternalMemoizedMergedChildContext = l, da(Yu, e), da(Ul, e), va(Ul, l, e), va(Yu, a, e);
        } else
          da(Yu, e), va(Yu, a, e);
      }
    }
    function pb(e) {
      {
        if (!Od(e) || e.tag !== B)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case N:
              return t.stateNode.context;
            case B: {
              var a = t.type;
              if (Ku(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Vo = 0, Zh = 1, jl = null, Dg = !1, kg = !1;
    function BE(e) {
      jl === null ? jl = [e] : jl.push(e);
    }
    function hb(e) {
      Dg = !0, BE(e);
    }
    function $E() {
      Dg && Bo();
    }
    function Bo() {
      if (!kg && jl !== null) {
        kg = !0;
        var e = 0, t = $a();
        try {
          var a = !0, i = jl;
          for (nr(Lr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          jl = null, Dg = !1;
        } catch (s) {
          throw jl !== null && (jl = jl.slice(e + 1)), Oc(kc, Bo), s;
        } finally {
          nr(t), kg = !1;
        }
      }
      return null;
    }
    var Df = [], kf = 0, Jh = null, em = 0, xi = [], Oi = 0, Ws = null, Pl = 1, Fl = "";
    function mb(e) {
      return qs(), (e.flags & bd) !== Je;
    }
    function yb(e) {
      return qs(), em;
    }
    function gb() {
      var e = Fl, t = Pl, a = t & ~Sb(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      qs(), Df[kf++] = em, Df[kf++] = Jh, Jh = e, em = t;
    }
    function IE(e, t, a) {
      qs(), xi[Oi++] = Pl, xi[Oi++] = Fl, xi[Oi++] = Ws, Ws = e;
      var i = Pl, l = Fl, s = tm(i) - 1, f = i & ~(1 << s), p = a + 1, y = tm(t) + s;
      if (y > 30) {
        var C = s - s % 5, _ = (1 << C) - 1, L = (f & _).toString(32), k = f >> C, V = s - C, I = tm(t) + V, X = p << V, je = X | k, nt = L + l;
        Pl = 1 << I | je, Fl = nt;
      } else {
        var Ge = p << s, Pt = Ge | f, kt = l;
        Pl = 1 << y | Pt, Fl = kt;
      }
    }
    function Mg(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), IE(e, a, i);
      }
    }
    function tm(e) {
      return 32 - Uc(e);
    }
    function Sb(e) {
      return 1 << tm(e) - 1;
    }
    function Lg(e) {
      for (; e === Jh; )
        Jh = Df[--kf], Df[kf] = null, em = Df[--kf], Df[kf] = null;
      for (; e === Ws; )
        Ws = xi[--Oi], xi[Oi] = null, Fl = xi[--Oi], xi[Oi] = null, Pl = xi[--Oi], xi[Oi] = null;
    }
    function Eb() {
      return qs(), Ws !== null ? {
        id: Pl,
        overflow: Fl
      } : null;
    }
    function Cb(e, t) {
      qs(), xi[Oi++] = Pl, xi[Oi++] = Fl, xi[Oi++] = Ws, Pl = t.id, Fl = t.overflow, Ws = e;
    }
    function qs() {
      Kr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Yr = null, Di = null, eu = !1, Gs = !1, $o = null;
    function Rb() {
      eu && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function YE() {
      Gs = !0;
    }
    function _b() {
      return Gs;
    }
    function Tb(e) {
      var t = e.stateNode.containerInfo;
      return Di = BT(t), Yr = e, eu = !0, $o = null, Gs = !1, !0;
    }
    function bb(e, t, a) {
      return Di = $T(t), Yr = e, eu = !0, $o = null, Gs = !1, a !== null && Cb(e, a), !0;
    }
    function KE(e, t) {
      switch (e.tag) {
        case N: {
          JT(e.stateNode.containerInfo, t);
          break;
        }
        case Y: {
          var a = (e.mode & Ot) !== at;
          tb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case pe: {
          var i = e.memoizedState;
          i.dehydrated !== null && eb(i.dehydrated, t);
          break;
        }
      }
    }
    function WE(e, t) {
      KE(e, t);
      var a = OO();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Qt) : i.push(a);
    }
    function Ng(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case N: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Y:
                var i = t.type;
                t.pendingProps, nb(a, i);
                break;
              case q:
                var l = t.pendingProps;
                rb(a, l);
                break;
            }
            break;
          }
          case Y: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Y: {
                var y = t.type, C = t.pendingProps, _ = (e.mode & Ot) !== at;
                ub(
                  s,
                  f,
                  p,
                  y,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case q: {
                var L = t.pendingProps, k = (e.mode & Ot) !== at;
                lb(
                  s,
                  f,
                  p,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case pe: {
            var V = e.memoizedState, I = V.dehydrated;
            if (I !== null)
              switch (t.tag) {
                case Y:
                  var X = t.type;
                  t.pendingProps, ab(I, X);
                  break;
                case q:
                  var je = t.pendingProps;
                  ib(I, je);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function QE(e, t) {
      t.flags = t.flags & ~Pa | En, Ng(e, t);
    }
    function qE(e, t) {
      switch (e.tag) {
        case Y: {
          var a = e.type;
          e.pendingProps;
          var i = UT(t, a);
          return i !== null ? (e.stateNode = i, Yr = e, Di = VT(i), !0) : !1;
        }
        case q: {
          var l = e.pendingProps, s = jT(t, l);
          return s !== null ? (e.stateNode = s, Yr = e, Di = null, !0) : !1;
        }
        case pe: {
          var f = PT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Eb(),
              retryLane: ca
            };
            e.memoizedState = p;
            var y = DO(f);
            return y.return = e, e.child = y, Yr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ag(e) {
      return (e.mode & Ot) !== at && (e.flags & st) === Je;
    }
    function zg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ug(e) {
      if (eu) {
        var t = Di;
        if (!t) {
          Ag(e) && (Ng(Yr, e), zg()), QE(Yr, e), eu = !1, Yr = e;
          return;
        }
        var a = t;
        if (!qE(e, t)) {
          Ag(e) && (Ng(Yr, e), zg()), t = Rv(a);
          var i = Yr;
          if (!t || !qE(e, t)) {
            QE(Yr, e), eu = !1, Yr = e;
            return;
          }
          WE(i, a);
        }
      }
    }
    function wb(e, t, a) {
      var i = e.stateNode, l = !Gs, s = IT(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function xb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = YT(t, a, e);
      if (i) {
        var l = Yr;
        if (l !== null)
          switch (l.tag) {
            case N: {
              var s = l.stateNode.containerInfo, f = (l.mode & Ot) !== at;
              XT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Y: {
              var p = l.type, y = l.memoizedProps, C = l.stateNode, _ = (l.mode & Ot) !== at;
              ZT(
                p,
                y,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return i;
    }
    function Ob(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      KT(a, e);
    }
    function Db(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return WT(a);
    }
    function GE(e) {
      for (var t = e.return; t !== null && t.tag !== Y && t.tag !== N && t.tag !== pe; )
        t = t.return;
      Yr = t;
    }
    function nm(e) {
      if (e !== Yr)
        return !1;
      if (!eu)
        return GE(e), eu = !0, !1;
      if (e.tag !== N && (e.tag !== Y || GT(e.type) && !yg(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (Ag(e))
            XE(e), zg();
          else
            for (; t; )
              WE(e, t), t = Rv(t);
      }
      return GE(e), e.tag === pe ? Di = Db(e) : Di = Yr ? Rv(e.stateNode) : null, !0;
    }
    function kb() {
      return eu && Di !== null;
    }
    function XE(e) {
      for (var t = Di; t; )
        KE(e, t), t = Rv(t);
    }
    function Mf() {
      Yr = null, Di = null, eu = !1, Gs = !1;
    }
    function ZE() {
      $o !== null && (K1($o), $o = null);
    }
    function Kr() {
      return eu;
    }
    function jg(e) {
      $o === null ? $o = [e] : $o.push(e);
    }
    var Mb = h.ReactCurrentBatchConfig, Lb = null;
    function Nb() {
      return Mb.transition;
    }
    var tu = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Ab = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Nn && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, wv = [], xv = [], Ov = [], Dv = [], kv = [], Mv = [], Zs = /* @__PURE__ */ new Set();
      tu.recordUnsafeLifecycleWarnings = function(e, t) {
        Zs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && wv.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillMount == "function" && xv.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ov.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Dv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && kv.push(e), e.mode & Nn && typeof t.UNSAFE_componentWillUpdate == "function" && Mv.push(e));
      }, tu.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        wv.length > 0 && (wv.forEach(function(k) {
          e.add(ft(k) || "Component"), Zs.add(k.type);
        }), wv = []);
        var t = /* @__PURE__ */ new Set();
        xv.length > 0 && (xv.forEach(function(k) {
          t.add(ft(k) || "Component"), Zs.add(k.type);
        }), xv = []);
        var a = /* @__PURE__ */ new Set();
        Ov.length > 0 && (Ov.forEach(function(k) {
          a.add(ft(k) || "Component"), Zs.add(k.type);
        }), Ov = []);
        var i = /* @__PURE__ */ new Set();
        Dv.length > 0 && (Dv.forEach(function(k) {
          i.add(ft(k) || "Component"), Zs.add(k.type);
        }), Dv = []);
        var l = /* @__PURE__ */ new Set();
        kv.length > 0 && (kv.forEach(function(k) {
          l.add(ft(k) || "Component"), Zs.add(k.type);
        }), kv = []);
        var s = /* @__PURE__ */ new Set();
        if (Mv.length > 0 && (Mv.forEach(function(k) {
          s.add(ft(k) || "Component"), Zs.add(k.type);
        }), Mv = []), t.size > 0) {
          var f = Xs(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Xs(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var y = Xs(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var C = Xs(e);
          A(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var _ = Xs(a);
          A(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (l.size > 0) {
          var L = Xs(l);
          A(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var rm = /* @__PURE__ */ new Map(), JE = /* @__PURE__ */ new Set();
      tu.recordLegacyContextWarning = function(e, t) {
        var a = Ab(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!JE.has(e.type)) {
          var i = rm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], rm.set(a, i)), i.push(e));
        }
      }, tu.flushLegacyContextWarning = function() {
        rm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ft(s) || "Component"), JE.add(s.type);
            });
            var l = Xs(i);
            try {
              Zt(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              jn();
            }
          }
        });
      }, tu.discardPendingWarnings = function() {
        wv = [], xv = [], Ov = [], Dv = [], kv = [], Mv = [], rm = /* @__PURE__ */ new Map();
      };
    }
    function nu(e, t) {
      if (e && e.defaultProps) {
        var a = wt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var Pg = Ho(null), Fg;
    Fg = {};
    var am = null, Lf = null, Hg = null, im = !1;
    function um() {
      am = null, Lf = null, Hg = null, im = !1;
    }
    function eC() {
      im = !0;
    }
    function tC() {
      im = !1;
    }
    function nC(e, t, a) {
      va(Pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Fg && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Fg;
    }
    function Vg(e, t) {
      var a = Pg.current;
      da(Pg, t), e._currentValue = a;
    }
    function Bg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Tl(i.childLanes, t) ? l !== null && !Tl(l.childLanes, t) && (l.childLanes = Ct(l.childLanes, t)) : (i.childLanes = Ct(i.childLanes, t), l !== null && (l.childLanes = Ct(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zb(e, t, a) {
      Ub(e, t, a);
    }
    function Ub(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === B) {
                var p = tr(a), y = Hl(vn, p);
                y.tag = om;
                var C = i.updateQueue;
                if (C !== null) {
                  var _ = C.shared, L = _.pending;
                  L === null ? y.next = y : (y.next = L.next, L.next = y), _.pending = y;
                }
              }
              i.lanes = Ct(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = Ct(k.lanes, a)), Bg(i.return, a, e), s.lanes = Ct(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ue)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === se) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = Ct(V.lanes, a);
          var I = V.alternate;
          I !== null && (I.lanes = Ct(I.lanes, a)), Bg(V, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var X = l.sibling;
            if (X !== null) {
              X.return = l.return, l = X;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Nf(e, t) {
      am = e, Lf = null, Hg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (fa(a.lanes, t) && Yv(), a.firstContext = null);
      }
    }
    function hr(e) {
      im && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Hg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (am === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, am.dependencies = {
            lanes: J,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Js = null;
    function $g(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function jb() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function rC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a, lm(e, i);
    }
    function Pb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Fb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a, lm(e, i);
    }
    function Qa(e, t) {
      return lm(e, t);
    }
    var Hb = lm;
    function lm(e, t) {
      e.lanes = Ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ct(a.lanes, t)), a === null && (e.flags & (En | Pa)) !== Je && aR(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ct(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ct(a.childLanes, t) : (l.flags & (En | Pa)) !== Je && aR(e), i = l, l = l.return;
      if (i.tag === N) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var aC = 0, iC = 1, om = 2, Ig = 3, sm = !1, Yg, cm;
    Yg = !1, cm = null;
    function Kg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: J
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function uC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Hl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: aC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Io(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (cm === l && !Yg && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Yg = !0), Hx()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, Hb(e, a);
      } else
        return Fb(e, l, t, a);
    }
    function fm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Vd(a)) {
          var s = l.lanes;
          s = $d(s, e.pendingLanes);
          var f = Ct(s, a);
          l.lanes = f, To(e, f);
        }
      }
    }
    function Wg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var y = p;
            do {
              var C = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), y = y.next;
            } while (y !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var _ = a.lastBaseUpdate;
      _ === null ? a.firstBaseUpdate = t : _.next = t, a.lastBaseUpdate = t;
    }
    function Vb(e, t, a, i, l, s) {
      switch (a.tag) {
        case iC: {
          var f = a.payload;
          if (typeof f == "function") {
            eC();
            var p = f.call(s, i, l);
            {
              if (e.mode & Nn) {
                er(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  er(!1);
                }
              }
              tC();
            }
            return p;
          }
          return f;
        }
        case Ig:
          e.flags = e.flags & ~cr | st;
        case aC: {
          var y = a.payload, C;
          if (typeof y == "function") {
            eC(), C = y.call(s, i, l);
            {
              if (e.mode & Nn) {
                er(!0);
                try {
                  y.call(s, i, l);
                } finally {
                  er(!1);
                }
              }
              tC();
            }
          } else
            C = y;
          return C == null ? i : wt({}, i, C);
        }
        case om:
          return sm = !0, i;
      }
      return i;
    }
    function dm(e, t, a, i) {
      var l = e.updateQueue;
      sm = !1, cm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var y = p, C = y.next;
        y.next = null, f === null ? s = C : f.next = C, f = y;
        var _ = e.alternate;
        if (_ !== null) {
          var L = _.updateQueue, k = L.lastBaseUpdate;
          k !== f && (k === null ? L.firstBaseUpdate = C : k.next = C, L.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var V = l.baseState, I = J, X = null, je = null, nt = null, Ge = s;
        do {
          var Pt = Ge.lane, kt = Ge.eventTime;
          if (Tl(i, Pt)) {
            if (nt !== null) {
              var Z = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                tag: Ge.tag,
                payload: Ge.payload,
                callback: Ge.callback,
                next: null
              };
              nt = nt.next = Z;
            }
            V = Vb(e, l, Ge, V, t, a);
            var j = Ge.callback;
            if (j !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ge.lane !== Ut) {
              e.flags |= Ci;
              var Se = l.effects;
              Se === null ? l.effects = [Ge] : Se.push(Ge);
            }
          } else {
            var U = {
              eventTime: kt,
              lane: Pt,
              tag: Ge.tag,
              payload: Ge.payload,
              callback: Ge.callback,
              next: null
            };
            nt === null ? (je = nt = U, X = V) : nt = nt.next = U, I = Ct(I, Pt);
          }
          if (Ge = Ge.next, Ge === null) {
            if (p = l.shared.pending, p === null)
              break;
            var Pe = p, Ne = Pe.next;
            Pe.next = null, Ge = Ne, l.lastBaseUpdate = Pe, l.shared.pending = null;
          }
        } while (!0);
        nt === null && (X = V), l.baseState = X, l.firstBaseUpdate = je, l.lastBaseUpdate = nt;
        var ot = l.shared.interleaved;
        if (ot !== null) {
          var pt = ot;
          do
            I = Ct(I, pt.lane), pt = pt.next;
          while (pt !== ot);
        } else
          s === null && (l.shared.lanes = J);
        rp(I), e.lanes = I, e.memoizedState = V;
      }
      cm = null;
    }
    function Bb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function lC() {
      sm = !1;
    }
    function vm() {
      return sm;
    }
    function oC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, Bb(f, a));
        }
    }
    var Qg = {}, sC = new v.Component().refs, qg, Gg, Xg, Zg, Jg, cC, pm, eS, tS, nS;
    {
      qg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set();
      var fC = /* @__PURE__ */ new Set();
      pm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          fC.has(a) || (fC.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, cC = function(e, t) {
        if (t === void 0) {
          var a = Vt(e) || "Component";
          Jg.has(a) || (Jg.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qg);
    }
    function rS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & Nn) {
          er(!0);
          try {
            s = a(i, l);
          } finally {
            er(!1);
          }
        }
        cC(t, s);
      }
      var f = s == null ? l : wt({}, l, s);
      if (e.memoizedState = f, e.lanes === J) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Ra,
      enqueueSetState: function(e, t, a) {
        var i = Ua(e), l = Oa(), s = Zo(i), f = Hl(l, s);
        f.payload = t, a != null && (pm(a, "setState"), f.callback = a);
        var p = Io(i, f, s);
        p !== null && (Or(p, i, s, l), fm(p, i, s)), Uu(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ua(e), l = Oa(), s = Zo(i), f = Hl(l, s);
        f.tag = iC, f.payload = t, a != null && (pm(a, "replaceState"), f.callback = a);
        var p = Io(i, f, s);
        p !== null && (Or(p, i, s, l), fm(p, i, s)), Uu(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ua(e), i = Oa(), l = Zo(a), s = Hl(i, l);
        s.tag = om, t != null && (pm(t, "forceUpdate"), s.callback = t);
        var f = Io(a, s, l);
        f !== null && (Or(f, a, l, i), fm(f, a, l)), jd(a, l);
      }
    };
    function dC(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var y = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Nn) {
            er(!0);
            try {
              y = p.shouldComponentUpdate(i, s, f);
            } finally {
              er(!1);
            }
          }
          y === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Vt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ze(a, i) || !Ze(l, s) : !0;
    }
    function $b(e, t, a) {
      var i = e.stateNode;
      {
        var l = Vt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Vt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Vt(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || Lt(p)) && E("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function vC(e, t) {
      t.updater = aS, e.stateNode = t, po(t, e), t._reactInternalInstance = Qg;
    }
    function pC(e, t, a) {
      var i = !1, l = ci, s = ci, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Oe && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var y = "";
          f === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? y = " However, it is set to a " + typeof f + "." : f.$$typeof === ce ? y = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Vt(t) || "Component", y);
        }
      }
      if (typeof f == "object" && f !== null)
        s = hr(f);
      else {
        l = xf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Of(e, l) : ci;
      }
      var _ = new t(a, s);
      if (e.mode & Nn) {
        er(!0);
        try {
          _ = new t(a, s);
        } finally {
          er(!1);
        }
      }
      var L = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      vC(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var k = Vt(t) || "Component";
          Gg.has(k) || (Gg.add(k), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, _.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var V = null, I = null, X = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), V !== null || I !== null || X !== null) {
            var je = Vt(t) || "Component", nt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(je) || (Zg.add(je), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, je, nt, V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && PE(e, l, s), _;
    }
    function Ib(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ft(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function hC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ft(e) || "Component";
          qg.has(s) || (qg.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      $b(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = sC, Kg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = hr(s);
      else {
        var f = xf(e, t, !0);
        l.context = Of(e, f);
      }
      {
        if (l.state === a) {
          var p = Vt(t) || "Component";
          eS.has(p) || (eS.add(p), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Nn && tu.recordLegacyContextWarning(e, l), tu.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (rS(e, t, y, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Ib(e, l), dm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Et;
        C |= ia, (e.mode & Va) !== at && (C |= ua), e.flags |= C;
      }
    }
    function Yb(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, y = ci;
      if (typeof p == "object" && p !== null)
        y = hr(p);
      else {
        var C = xf(e, t, !0);
        y = Of(e, C);
      }
      var _ = t.getDerivedStateFromProps, L = typeof _ == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !L && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== y) && hC(e, l, a, y), lC();
      var k = e.memoizedState, V = l.state = k;
      if (dm(e, a, l, i), V = e.memoizedState, s === a && k === V && !qh() && !vm()) {
        if (typeof l.componentDidMount == "function") {
          var I = Et;
          I |= ia, (e.mode & Va) !== at && (I |= ua), e.flags |= I;
        }
        return !1;
      }
      typeof _ == "function" && (rS(e, t, _, a), V = e.memoizedState);
      var X = vm() || dC(e, t, s, a, k, V, y);
      if (X) {
        if (!L && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var je = Et;
          je |= ia, (e.mode & Va) !== at && (je |= ua), e.flags |= je;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var nt = Et;
          nt |= ia, (e.mode & Va) !== at && (nt |= ua), e.flags |= nt;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return l.props = a, l.state = V, l.context = y, X;
    }
    function Kb(e, t, a, i, l) {
      var s = t.stateNode;
      uC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nu(t.type, f);
      s.props = p;
      var y = t.pendingProps, C = s.context, _ = a.contextType, L = ci;
      if (typeof _ == "object" && _ !== null)
        L = hr(_);
      else {
        var k = xf(t, a, !0);
        L = Of(t, k);
      }
      var V = a.getDerivedStateFromProps, I = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !I && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== y || C !== L) && hC(t, s, i, L), lC();
      var X = t.memoizedState, je = s.state = X;
      if (dm(t, i, s, l), je = t.memoizedState, f === y && X === je && !qh() && !vm() && !xe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ja), !1;
      typeof V == "function" && (rS(t, a, V, i), je = t.memoizedState);
      var nt = vm() || dC(t, a, p, i, X, je, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      xe;
      return nt ? (!I && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, je, L), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, je, L)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ja)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ja), t.memoizedProps = i, t.memoizedState = je), s.props = i, s.state = je, s.context = L, nt;
    }
    var uS, lS, oS, sS, cS, mC = function(e, t) {
    };
    uS = !1, lS = !1, oS = {}, sS = {}, cS = {}, mC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ft(t) || "Component";
        sS[a] || (sS[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Lv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Nn || qe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = ft(e) || "Component";
          oS[l] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), oS[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== B)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = f;
          Mt(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var _ = function(L) {
            var k = y.refs;
            k === sC && (k = y.refs = {}), L === null ? delete k[C] : k[C] = L;
          };
          return _._stringRef = C, _;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function hm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function mm(e) {
      {
        var t = ft(e) || "Component";
        if (cS[t])
          return;
        cS[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function yC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function gC(e) {
      function t(U, Z) {
        if (e) {
          var j = U.deletions;
          j === null ? (U.deletions = [Z], U.flags |= Qt) : j.push(Z);
        }
      }
      function a(U, Z) {
        if (!e)
          return null;
        for (var j = Z; j !== null; )
          t(U, j), j = j.sibling;
        return null;
      }
      function i(U, Z) {
        for (var j = /* @__PURE__ */ new Map(), Se = Z; Se !== null; )
          Se.key !== null ? j.set(Se.key, Se) : j.set(Se.index, Se), Se = Se.sibling;
        return j;
      }
      function l(U, Z) {
        var j = lc(U, Z);
        return j.index = 0, j.sibling = null, j;
      }
      function s(U, Z, j) {
        if (U.index = j, !e)
          return U.flags |= bd, Z;
        var Se = U.alternate;
        if (Se !== null) {
          var Pe = Se.index;
          return Pe < Z ? (U.flags |= En, Z) : Pe;
        } else
          return U.flags |= En, Z;
      }
      function f(U) {
        return e && U.alternate === null && (U.flags |= En), U;
      }
      function p(U, Z, j, Se) {
        if (Z === null || Z.tag !== q) {
          var Pe = j0(j, U.mode, Se);
          return Pe.return = U, Pe;
        } else {
          var Ne = l(Z, j);
          return Ne.return = U, Ne;
        }
      }
      function y(U, Z, j, Se) {
        var Pe = j.type;
        if (Pe === Sa)
          return _(U, Z, j.props.children, Se, j.key);
        if (Z !== null && (Z.elementType === Pe || // Keep this check inline so it only runs on the false path:
        oR(Z, j) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Pe == "object" && Pe !== null && Pe.$$typeof === tt && yC(Pe) === Z.type)) {
          var Ne = l(Z, j.props);
          return Ne.ref = Lv(U, Z, j), Ne.return = U, Ne._debugSource = j._source, Ne._debugOwner = j._owner, Ne;
        }
        var ot = U0(j, U.mode, Se);
        return ot.ref = Lv(U, Z, j), ot.return = U, ot;
      }
      function C(U, Z, j, Se) {
        if (Z === null || Z.tag !== P || Z.stateNode.containerInfo !== j.containerInfo || Z.stateNode.implementation !== j.implementation) {
          var Pe = P0(j, U.mode, Se);
          return Pe.return = U, Pe;
        } else {
          var Ne = l(Z, j.children || []);
          return Ne.return = U, Ne;
        }
      }
      function _(U, Z, j, Se, Pe) {
        if (Z === null || Z.tag !== oe) {
          var Ne = es(j, U.mode, Se, Pe);
          return Ne.return = U, Ne;
        } else {
          var ot = l(Z, j);
          return ot.return = U, ot;
        }
      }
      function L(U, Z, j) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var Se = j0("" + Z, U.mode, j);
          return Se.return = U, Se;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case pi: {
              var Pe = U0(Z, U.mode, j);
              return Pe.ref = Lv(U, null, Z), Pe.return = U, Pe;
            }
            case Hr: {
              var Ne = P0(Z, U.mode, j);
              return Ne.return = U, Ne;
            }
            case tt: {
              var ot = Z._payload, pt = Z._init;
              return L(U, pt(ot), j);
            }
          }
          if (Lt(Z) || ti(Z)) {
            var on = es(Z, U.mode, j, null);
            return on.return = U, on;
          }
          hm(U, Z);
        }
        return typeof Z == "function" && mm(U), null;
      }
      function k(U, Z, j, Se) {
        var Pe = Z !== null ? Z.key : null;
        if (typeof j == "string" && j !== "" || typeof j == "number")
          return Pe !== null ? null : p(U, Z, "" + j, Se);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case pi:
              return j.key === Pe ? y(U, Z, j, Se) : null;
            case Hr:
              return j.key === Pe ? C(U, Z, j, Se) : null;
            case tt: {
              var Ne = j._payload, ot = j._init;
              return k(U, Z, ot(Ne), Se);
            }
          }
          if (Lt(j) || ti(j))
            return Pe !== null ? null : _(U, Z, j, Se, null);
          hm(U, j);
        }
        return typeof j == "function" && mm(U), null;
      }
      function V(U, Z, j, Se, Pe) {
        if (typeof Se == "string" && Se !== "" || typeof Se == "number") {
          var Ne = U.get(j) || null;
          return p(Z, Ne, "" + Se, Pe);
        }
        if (typeof Se == "object" && Se !== null) {
          switch (Se.$$typeof) {
            case pi: {
              var ot = U.get(Se.key === null ? j : Se.key) || null;
              return y(Z, ot, Se, Pe);
            }
            case Hr: {
              var pt = U.get(Se.key === null ? j : Se.key) || null;
              return C(Z, pt, Se, Pe);
            }
            case tt:
              var on = Se._payload, Kt = Se._init;
              return V(U, Z, j, Kt(on), Pe);
          }
          if (Lt(Se) || ti(Se)) {
            var ir = U.get(j) || null;
            return _(Z, ir, Se, Pe, null);
          }
          hm(Z, Se);
        }
        return typeof Se == "function" && mm(Z), null;
      }
      function I(U, Z, j) {
        {
          if (typeof U != "object" || U === null)
            return Z;
          switch (U.$$typeof) {
            case pi:
            case Hr:
              mC(U, j);
              var Se = U.key;
              if (typeof Se != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(Se);
                break;
              }
              if (!Z.has(Se)) {
                Z.add(Se);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Se);
              break;
            case tt:
              var Pe = U._payload, Ne = U._init;
              I(Ne(Pe), Z, j);
              break;
          }
        }
        return Z;
      }
      function X(U, Z, j, Se) {
        for (var Pe = null, Ne = 0; Ne < j.length; Ne++) {
          var ot = j[Ne];
          Pe = I(ot, Pe, U);
        }
        for (var pt = null, on = null, Kt = Z, ir = 0, Wt = 0, Xn = null; Kt !== null && Wt < j.length; Wt++) {
          Kt.index > Wt ? (Xn = Kt, Kt = null) : Xn = Kt.sibling;
          var ha = k(U, Kt, j[Wt], Se);
          if (ha === null) {
            Kt === null && (Kt = Xn);
            break;
          }
          e && Kt && ha.alternate === null && t(U, Kt), ir = s(ha, ir, Wt), on === null ? pt = ha : on.sibling = ha, on = ha, Kt = Xn;
        }
        if (Wt === j.length) {
          if (a(U, Kt), Kr()) {
            var Jr = Wt;
            Qs(U, Jr);
          }
          return pt;
        }
        if (Kt === null) {
          for (; Wt < j.length; Wt++) {
            var di = L(U, j[Wt], Se);
            di !== null && (ir = s(di, ir, Wt), on === null ? pt = di : on.sibling = di, on = di);
          }
          if (Kr()) {
            var Da = Wt;
            Qs(U, Da);
          }
          return pt;
        }
        for (var ka = i(U, Kt); Wt < j.length; Wt++) {
          var ma = V(ka, U, Wt, j[Wt], Se);
          ma !== null && (e && ma.alternate !== null && ka.delete(ma.key === null ? Wt : ma.key), ir = s(ma, ir, Wt), on === null ? pt = ma : on.sibling = ma, on = ma);
        }
        if (e && ka.forEach(function(Gf) {
          return t(U, Gf);
        }), Kr()) {
          var Kl = Wt;
          Qs(U, Kl);
        }
        return pt;
      }
      function je(U, Z, j, Se) {
        var Pe = ti(j);
        if (typeof Pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          j[Symbol.toStringTag] === "Generator" && (lS || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lS = !0), j.entries === Pe && (uS || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var Ne = Pe.call(j);
          if (Ne)
            for (var ot = null, pt = Ne.next(); !pt.done; pt = Ne.next()) {
              var on = pt.value;
              ot = I(on, ot, U);
            }
        }
        var Kt = Pe.call(j);
        if (Kt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var ir = null, Wt = null, Xn = Z, ha = 0, Jr = 0, di = null, Da = Kt.next(); Xn !== null && !Da.done; Jr++, Da = Kt.next()) {
          Xn.index > Jr ? (di = Xn, Xn = null) : di = Xn.sibling;
          var ka = k(U, Xn, Da.value, Se);
          if (ka === null) {
            Xn === null && (Xn = di);
            break;
          }
          e && Xn && ka.alternate === null && t(U, Xn), ha = s(ka, ha, Jr), Wt === null ? ir = ka : Wt.sibling = ka, Wt = ka, Xn = di;
        }
        if (Da.done) {
          if (a(U, Xn), Kr()) {
            var ma = Jr;
            Qs(U, ma);
          }
          return ir;
        }
        if (Xn === null) {
          for (; !Da.done; Jr++, Da = Kt.next()) {
            var Kl = L(U, Da.value, Se);
            Kl !== null && (ha = s(Kl, ha, Jr), Wt === null ? ir = Kl : Wt.sibling = Kl, Wt = Kl);
          }
          if (Kr()) {
            var Gf = Jr;
            Qs(U, Gf);
          }
          return ir;
        }
        for (var op = i(U, Xn); !Da.done; Jr++, Da = Kt.next()) {
          var el = V(op, U, Jr, Da.value, Se);
          el !== null && (e && el.alternate !== null && op.delete(el.key === null ? Jr : el.key), ha = s(el, ha, Jr), Wt === null ? ir = el : Wt.sibling = el, Wt = el);
        }
        if (e && op.forEach(function(uD) {
          return t(U, uD);
        }), Kr()) {
          var iD = Jr;
          Qs(U, iD);
        }
        return ir;
      }
      function nt(U, Z, j, Se) {
        if (Z !== null && Z.tag === q) {
          a(U, Z.sibling);
          var Pe = l(Z, j);
          return Pe.return = U, Pe;
        }
        a(U, Z);
        var Ne = j0(j, U.mode, Se);
        return Ne.return = U, Ne;
      }
      function Ge(U, Z, j, Se) {
        for (var Pe = j.key, Ne = Z; Ne !== null; ) {
          if (Ne.key === Pe) {
            var ot = j.type;
            if (ot === Sa) {
              if (Ne.tag === oe) {
                a(U, Ne.sibling);
                var pt = l(Ne, j.props.children);
                return pt.return = U, pt._debugSource = j._source, pt._debugOwner = j._owner, pt;
              }
            } else if (Ne.elementType === ot || // Keep this check inline so it only runs on the false path:
            oR(Ne, j) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ot == "object" && ot !== null && ot.$$typeof === tt && yC(ot) === Ne.type) {
              a(U, Ne.sibling);
              var on = l(Ne, j.props);
              return on.ref = Lv(U, Ne, j), on.return = U, on._debugSource = j._source, on._debugOwner = j._owner, on;
            }
            a(U, Ne);
            break;
          } else
            t(U, Ne);
          Ne = Ne.sibling;
        }
        if (j.type === Sa) {
          var Kt = es(j.props.children, U.mode, Se, j.key);
          return Kt.return = U, Kt;
        } else {
          var ir = U0(j, U.mode, Se);
          return ir.ref = Lv(U, Z, j), ir.return = U, ir;
        }
      }
      function Pt(U, Z, j, Se) {
        for (var Pe = j.key, Ne = Z; Ne !== null; ) {
          if (Ne.key === Pe)
            if (Ne.tag === P && Ne.stateNode.containerInfo === j.containerInfo && Ne.stateNode.implementation === j.implementation) {
              a(U, Ne.sibling);
              var ot = l(Ne, j.children || []);
              return ot.return = U, ot;
            } else {
              a(U, Ne);
              break;
            }
          else
            t(U, Ne);
          Ne = Ne.sibling;
        }
        var pt = P0(j, U.mode, Se);
        return pt.return = U, pt;
      }
      function kt(U, Z, j, Se) {
        var Pe = typeof j == "object" && j !== null && j.type === Sa && j.key === null;
        if (Pe && (j = j.props.children), typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case pi:
              return f(Ge(U, Z, j, Se));
            case Hr:
              return f(Pt(U, Z, j, Se));
            case tt:
              var Ne = j._payload, ot = j._init;
              return kt(U, Z, ot(Ne), Se);
          }
          if (Lt(j))
            return X(U, Z, j, Se);
          if (ti(j))
            return je(U, Z, j, Se);
          hm(U, j);
        }
        return typeof j == "string" && j !== "" || typeof j == "number" ? f(nt(U, Z, "" + j, Se)) : (typeof j == "function" && mm(U), a(U, Z));
      }
      return kt;
    }
    var Af = gC(!0), SC = gC(!1);
    function Wb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = lc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = lc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Qb(e, t) {
      for (var a = e.child; a !== null; )
        _O(a, t), a = a.sibling;
    }
    var Nv = {}, Yo = Ho(Nv), Av = Ho(Nv), ym = Ho(Nv);
    function gm(e) {
      if (e === Nv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = gm(ym.current);
      return e;
    }
    function fS(e, t) {
      va(ym, t, e), va(Av, e, e), va(Yo, Nv, e);
      var a = oT(t);
      da(Yo, e), va(Yo, a, e);
    }
    function zf(e) {
      da(Yo, e), da(Av, e), da(ym, e);
    }
    function dS() {
      var e = gm(Yo.current);
      return e;
    }
    function CC(e) {
      gm(ym.current);
      var t = gm(Yo.current), a = sT(t, e.type);
      t !== a && (va(Av, e, e), va(Yo, a, e));
    }
    function vS(e) {
      Av.current === e && (da(Yo, e), da(Av, e));
    }
    var qb = 0, RC = 1, _C = 1, zv = 2, ru = Ho(qb);
    function pS(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & RC;
    }
    function hS(e, t) {
      return e & RC | t;
    }
    function Gb(e, t) {
      return e | t;
    }
    function Ko(e, t) {
      va(ru, t, e);
    }
    function jf(e) {
      da(ru, e);
    }
    function Xb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Sm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === pe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || NE(i) || Cg(i))
              return t;
          }
        } else if (t.tag === ye && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & st) !== Je;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var qa = (
      /*   */
      0
    ), Cr = (
      /* */
      1
    ), Wu = (
      /*  */
      2
    ), Rr = (
      /*    */
      4
    ), Wr = (
      /*   */
      8
    ), mS = [];
    function yS() {
      for (var e = 0; e < mS.length; e++) {
        var t = mS[e];
        t._workInProgressVersionPrimary = null;
      }
      mS.length = 0;
    }
    function Zb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ze = h.ReactCurrentDispatcher, Uv = h.ReactCurrentBatchConfig, gS, Pf;
    gS = /* @__PURE__ */ new Set();
    var ec = J, ln = null, _r = null, Tr = null, Em = !1, jv = !1, Pv = 0, Jb = 0, ew = 25, ne = null, ki = null, Wo = -1, SS = !1;
    function en() {
      {
        var e = ne;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ke() {
      {
        var e = ne;
        ki !== null && (Wo++, ki[Wo] !== e && tw(e));
      }
    }
    function Ff(e) {
      e != null && !Lt(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function tw(e) {
      {
        var t = ft(ln);
        if (!gS.has(t) && (gS.add(t), ki !== null)) {
          for (var a = "", i = 30, l = 0; l <= Wo; l++) {
            for (var s = ki[l], f = l === Wo ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function pa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function ES(e, t) {
      if (SS)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!$e(e[a], t[a]))
          return !1;
      return !0;
    }
    function Hf(e, t, a, i, l, s) {
      ec = s, ln = t, ki = e !== null ? e._debugHookTypes : null, Wo = -1, SS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? ze.current = YC : ki !== null ? ze.current = IC : ze.current = $C;
      var f = a(i, l);
      if (jv) {
        var p = 0;
        do {
          if (jv = !1, Pv = 0, p >= ew)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, SS = !1, _r = null, Tr = null, t.updateQueue = null, Wo = -1, ze.current = KC, f = a(i, l);
        } while (jv);
      }
      ze.current = Nm, t._debugHookTypes = ki;
      var y = _r !== null && _r.next !== null;
      if (ec = J, ln = null, _r = null, Tr = null, ne = null, ki = null, Wo = -1, e !== null && (e.flags & gr) !== (t.flags & gr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ot) !== at && E("Internal React error: Expected static flag was missing. Please notify the React team."), Em = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vf() {
      var e = Pv !== 0;
      return Pv = 0, e;
    }
    function TC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Va) !== at ? t.flags &= ~(pl | ua | bn | Et) : t.flags &= ~(bn | Et), e.lanes = _o(e.lanes, a);
    }
    function bC() {
      if (ze.current = Nm, Em) {
        for (var e = ln.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Em = !1;
      }
      ec = J, ln = null, _r = null, Tr = null, ki = null, Wo = -1, ne = null, PC = !1, jv = !1, Pv = 0;
    }
    function Qu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Tr === null ? ln.memoizedState = Tr = e : Tr = Tr.next = e, Tr;
    }
    function Mi() {
      var e;
      if (_r === null) {
        var t = ln.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = _r.next;
      var a;
      if (Tr === null ? a = ln.memoizedState : a = Tr.next, a !== null)
        Tr = a, a = Tr.next, _r = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        _r = e;
        var i = {
          memoizedState: _r.memoizedState,
          baseState: _r.baseState,
          baseQueue: _r.baseQueue,
          queue: _r.queue,
          next: null
        };
        Tr === null ? ln.memoizedState = Tr = i : Tr = Tr.next = i;
      }
      return Tr;
    }
    function wC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function CS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function RS(e, t, a) {
      var i = Qu(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = iw.bind(null, ln, s);
      return [i.memoizedState, f];
    }
    function _S(e, t, a) {
      var i = Mi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = _r, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var y = f.next, C = p.next;
          f.next = C, p.next = y;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var _ = f.next, L = s.baseState, k = null, V = null, I = null, X = _;
        do {
          var je = X.lane;
          if (Tl(ec, je)) {
            if (I !== null) {
              var Ge = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              I = I.next = Ge;
            }
            if (X.hasEagerState)
              L = X.eagerState;
            else {
              var Pt = X.action;
              L = e(L, Pt);
            }
          } else {
            var nt = {
              lane: je,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            I === null ? (V = I = nt, k = L) : I = I.next = nt, ln.lanes = Ct(ln.lanes, je), rp(je);
          }
          X = X.next;
        } while (X !== null && X !== _);
        I === null ? k = L : I.next = V, $e(L, i.memoizedState) || Yv(), i.memoizedState = L, i.baseState = k, i.baseQueue = I, l.lastRenderedState = L;
      }
      var kt = l.interleaved;
      if (kt !== null) {
        var U = kt;
        do {
          var Z = U.lane;
          ln.lanes = Ct(ln.lanes, Z), rp(Z), U = U.next;
        } while (U !== kt);
      } else
        f === null && (l.lanes = J);
      var j = l.dispatch;
      return [i.memoizedState, j];
    }
    function TS(e, t, a) {
      var i = Mi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var y = f.next, C = y;
        do {
          var _ = C.action;
          p = e(p, _), C = C.next;
        } while (C !== y);
        $e(p, i.memoizedState) || Yv(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function UM(e, t, a) {
    }
    function jM(e, t, a) {
    }
    function bS(e, t, a) {
      var i = ln, l = Qu(), s, f = Kr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Pf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      } else {
        if (s = t(), !Pf) {
          var p = t();
          $e(s, p) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
        }
        var y = Xm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(y, ec) || xC(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, bm(DC.bind(null, i, C, e), [e]), i.flags |= bn, Fv(Cr | Wr, OC.bind(null, i, C, s, t), void 0, null), s;
    }
    function Cm(e, t, a) {
      var i = ln, l = Mi(), s = t();
      if (!Pf) {
        var f = t();
        $e(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      }
      var p = l.memoizedState, y = !$e(p, s);
      y && (l.memoizedState = s, Yv());
      var C = l.queue;
      if (Vv(DC.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Tr !== null && Tr.memoizedState.tag & Cr) {
        i.flags |= bn, Fv(Cr | Wr, OC.bind(null, i, C, s, t), void 0, null);
        var _ = Xm();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(_, ec) || xC(i, t, s);
      }
      return s;
    }
    function xC(e, t, a) {
      e.flags |= Rs;
      var i = {
        getSnapshot: t,
        value: a
      }, l = ln.updateQueue;
      if (l === null)
        l = wC(), ln.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function OC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, kC(t) && MC(e);
    }
    function DC(e, t, a) {
      var i = function() {
        kC(t) && MC(e);
      };
      return a(i);
    }
    function kC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !$e(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = Qa(e, lt);
      t !== null && Or(t, e, lt, vn);
    }
    function Rm(e) {
      var t = Qu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: CS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = uw.bind(null, ln, a);
      return [t.memoizedState, i];
    }
    function wS(e) {
      return _S(CS);
    }
    function xS(e) {
      return TS(CS);
    }
    function Fv(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = ln.updateQueue;
      if (s === null)
        s = wC(), ln.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var p = f.next;
          f.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function OS(e) {
      var t = Qu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function _m(e) {
      var t = Mi();
      return t.memoizedState;
    }
    function Hv(e, t, a, i) {
      var l = Qu(), s = i === void 0 ? null : i;
      ln.flags |= e, l.memoizedState = Fv(Cr | t, a, void 0, s);
    }
    function Tm(e, t, a, i) {
      var l = Mi(), s = i === void 0 ? null : i, f = void 0;
      if (_r !== null) {
        var p = _r.memoizedState;
        if (f = p.destroy, s !== null) {
          var y = p.deps;
          if (ES(s, y)) {
            l.memoizedState = Fv(t, a, f, s);
            return;
          }
        }
      }
      ln.flags |= e, l.memoizedState = Fv(Cr | t, a, f, s);
    }
    function bm(e, t) {
      return (ln.mode & Va) !== at ? Hv(pl | bn | ku, Wr, e, t) : Hv(bn | ku, Wr, e, t);
    }
    function Vv(e, t) {
      return Tm(bn, Wr, e, t);
    }
    function DS(e, t) {
      return Hv(Et, Wu, e, t);
    }
    function wm(e, t) {
      return Tm(Et, Wu, e, t);
    }
    function kS(e, t) {
      var a = Et;
      return a |= ia, (ln.mode & Va) !== at && (a |= ua), Hv(a, Rr, e, t);
    }
    function xm(e, t) {
      return Tm(Et, Rr, e, t);
    }
    function LC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function MS(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Et;
      return l |= ia, (ln.mode & Va) !== at && (l |= ua), Hv(l, Rr, LC.bind(null, t, e), i);
    }
    function Om(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Tm(Et, Rr, LC.bind(null, t, e), i);
    }
    function nw(e, t) {
    }
    var Dm = nw;
    function LS(e, t) {
      var a = Qu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function km(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (ES(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function NS(e, t) {
      var a = Qu(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Mm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (ES(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function AS(e) {
      var t = Qu();
      return t.memoizedState = e, e;
    }
    function NC(e) {
      var t = Mi(), a = _r, i = a.memoizedState;
      return zC(t, i, e);
    }
    function AC(e) {
      var t = Mi();
      if (_r === null)
        return t.memoizedState = e, e;
      var a = _r.memoizedState;
      return zC(t, a, e);
    }
    function zC(e, t, a) {
      var i = !Hy(ec);
      if (i) {
        if (!$e(a, t)) {
          var l = Bd();
          ln.lanes = Ct(ln.lanes, l), rp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Yv()), e.memoizedState = a, a;
    }
    function rw(e, t, a) {
      var i = $a();
      nr(Nr(i, Er)), e(!0);
      var l = Uv.transition;
      Uv.transition = {};
      var s = Uv.transition;
      Uv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (nr(i), Uv.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && A("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function zS() {
      var e = Rm(!1), t = e[0], a = e[1], i = rw.bind(null, a), l = Qu();
      return l.memoizedState = i, [t, i];
    }
    function UC() {
      var e = wS(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    function jC() {
      var e = xS(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    var PC = !1;
    function aw() {
      return PC;
    }
    function US() {
      var e = Qu(), t = Xm(), a = t.identifierPrefix, i;
      if (Kr()) {
        var l = gb();
        i = ":" + a + "R" + l;
        var s = Pv++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Jb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Lm() {
      var e = Mi(), t = e.memoizedState;
      return t;
    }
    function iw(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Zo(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FC(e))
        HC(t, l);
      else {
        var s = rC(e, t, l, i);
        if (s !== null) {
          var f = Oa();
          Or(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function uw(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Zo(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FC(e))
        HC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === J && (s === null || s.lanes === J)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ze.current, ze.current = au;
            try {
              var y = t.lastRenderedState, C = f(y, a);
              if (l.hasEagerState = !0, l.eagerState = C, $e(C, y)) {
                Pb(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ze.current = p;
            }
          }
        }
        var _ = rC(e, t, l, i);
        if (_ !== null) {
          var L = Oa();
          Or(_, e, i, L), VC(_, t, i);
        }
      }
      BC(e, i);
    }
    function FC(e) {
      var t = e.alternate;
      return e === ln || t !== null && t === ln;
    }
    function HC(e, t) {
      jv = Em = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Vd(a)) {
        var i = t.lanes;
        i = $d(i, e.pendingLanes);
        var l = Ct(i, a);
        t.lanes = l, To(e, l);
      }
    }
    function BC(e, t, a) {
      Uu(e, t);
    }
    var Nm = {
      readContext: hr,
      useCallback: pa,
      useContext: pa,
      useEffect: pa,
      useImperativeHandle: pa,
      useInsertionEffect: pa,
      useLayoutEffect: pa,
      useMemo: pa,
      useReducer: pa,
      useRef: pa,
      useState: pa,
      useDebugValue: pa,
      useDeferredValue: pa,
      useTransition: pa,
      useMutableSource: pa,
      useSyncExternalStore: pa,
      useId: pa,
      unstable_isNewReconciler: te
    }, $C = null, IC = null, YC = null, KC = null, qu = null, au = null, Am = null;
    {
      var jS = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, dt = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", en(), Ff(t), LS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", en(), hr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", en(), Ff(t), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", en(), Ff(a), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", en(), Ff(t), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", en(), Ff(t), kS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", en(), Ff(t);
          var a = ze.current;
          ze.current = qu;
          try {
            return NS(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", en();
          var i = ze.current;
          ze.current = qu;
          try {
            return RS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", en(), OS(e);
        },
        useState: function(e) {
          ne = "useState", en();
          var t = ze.current;
          ze.current = qu;
          try {
            return Rm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", en(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", en(), AS(e);
        },
        useTransition: function() {
          return ne = "useTransition", en(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", en(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", en(), bS(e, t, a);
        },
        useId: function() {
          return ne = "useId", en(), US();
        },
        unstable_isNewReconciler: te
      }, IC = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ke(), LS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ke(), hr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ke(), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ke(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ke(), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ke(), kS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ke();
          var a = ze.current;
          ze.current = qu;
          try {
            return NS(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ke();
          var i = ze.current;
          ze.current = qu;
          try {
            return RS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ke(), OS(e);
        },
        useState: function(e) {
          ne = "useState", ke();
          var t = ze.current;
          ze.current = qu;
          try {
            return Rm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ke(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ke(), AS(e);
        },
        useTransition: function() {
          return ne = "useTransition", ke(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ke(), bS(e, t, a);
        },
        useId: function() {
          return ne = "useId", ke(), US();
        },
        unstable_isNewReconciler: te
      }, YC = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ke(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ke(), hr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ke(), Vv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ke(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ke(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ke(), xm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ke();
          var a = ze.current;
          ze.current = au;
          try {
            return Mm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ke();
          var i = ze.current;
          ze.current = au;
          try {
            return _S(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ke(), _m();
        },
        useState: function(e) {
          ne = "useState", ke();
          var t = ze.current;
          ze.current = au;
          try {
            return wS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ke(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ke(), NC(e);
        },
        useTransition: function() {
          return ne = "useTransition", ke(), UC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ke(), Cm(e, t);
        },
        useId: function() {
          return ne = "useId", ke(), Lm();
        },
        unstable_isNewReconciler: te
      }, KC = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ke(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ke(), hr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ke(), Vv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ke(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ke(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ke(), xm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ke();
          var a = ze.current;
          ze.current = Am;
          try {
            return Mm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ke();
          var i = ze.current;
          ze.current = Am;
          try {
            return TS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ke(), _m();
        },
        useState: function(e) {
          ne = "useState", ke();
          var t = ze.current;
          ze.current = Am;
          try {
            return xS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ke(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ke(), AC(e);
        },
        useTransition: function() {
          return ne = "useTransition", ke(), jC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ke(), Cm(e, t);
        },
        useId: function() {
          return ne = "useId", ke(), Lm();
        },
        unstable_isNewReconciler: te
      }, qu = {
        readContext: function(e) {
          return jS(), hr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", dt(), en(), LS(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", dt(), en(), hr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", dt(), en(), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", dt(), en(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", dt(), en(), DS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", dt(), en(), kS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", dt(), en();
          var a = ze.current;
          ze.current = qu;
          try {
            return NS(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", dt(), en();
          var i = ze.current;
          ze.current = qu;
          try {
            return RS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", dt(), en(), OS(e);
        },
        useState: function(e) {
          ne = "useState", dt(), en();
          var t = ze.current;
          ze.current = qu;
          try {
            return Rm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", dt(), en(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", dt(), en(), AS(e);
        },
        useTransition: function() {
          return ne = "useTransition", dt(), en(), zS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", dt(), en(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", dt(), en(), bS(e, t, a);
        },
        useId: function() {
          return ne = "useId", dt(), en(), US();
        },
        unstable_isNewReconciler: te
      }, au = {
        readContext: function(e) {
          return jS(), hr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", dt(), ke(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", dt(), ke(), hr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", dt(), ke(), Vv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", dt(), ke(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", dt(), ke(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", dt(), ke(), xm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", dt(), ke();
          var a = ze.current;
          ze.current = au;
          try {
            return Mm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", dt(), ke();
          var i = ze.current;
          ze.current = au;
          try {
            return _S(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", dt(), ke(), _m();
        },
        useState: function(e) {
          ne = "useState", dt(), ke();
          var t = ze.current;
          ze.current = au;
          try {
            return wS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", dt(), ke(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", dt(), ke(), NC(e);
        },
        useTransition: function() {
          return ne = "useTransition", dt(), ke(), UC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", dt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", dt(), ke(), Cm(e, t);
        },
        useId: function() {
          return ne = "useId", dt(), ke(), Lm();
        },
        unstable_isNewReconciler: te
      }, Am = {
        readContext: function(e) {
          return jS(), hr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", dt(), ke(), km(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", dt(), ke(), hr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", dt(), ke(), Vv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", dt(), ke(), Om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", dt(), ke(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", dt(), ke(), xm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", dt(), ke();
          var a = ze.current;
          ze.current = au;
          try {
            return Mm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", dt(), ke();
          var i = ze.current;
          ze.current = au;
          try {
            return TS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", dt(), ke(), _m();
        },
        useState: function(e) {
          ne = "useState", dt(), ke();
          var t = ze.current;
          ze.current = au;
          try {
            return xS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", dt(), ke(), Dm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", dt(), ke(), AC(e);
        },
        useTransition: function() {
          return ne = "useTransition", dt(), ke(), jC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", dt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", dt(), ke(), Cm(e, t);
        },
        useId: function() {
          return ne = "useId", dt(), ke(), Lm();
        },
        unstable_isNewReconciler: te
      };
    }
    var Qo = m.unstable_now, WC = 0, zm = -1, Bv = -1, Um = -1, PS = !1, jm = !1;
    function QC() {
      return PS;
    }
    function lw() {
      jm = !0;
    }
    function ow() {
      PS = !1, jm = !1;
    }
    function sw() {
      PS = jm, jm = !1;
    }
    function qC() {
      return WC;
    }
    function GC() {
      WC = Qo();
    }
    function FS(e) {
      Bv = Qo(), e.actualStartTime < 0 && (e.actualStartTime = Qo());
    }
    function XC(e) {
      Bv = -1;
    }
    function Pm(e, t) {
      if (Bv >= 0) {
        var a = Qo() - Bv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Bv = -1;
      }
    }
    function Gu(e) {
      if (zm >= 0) {
        var t = Qo() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case be:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function HS(e) {
      if (Um >= 0) {
        var t = Qo() - Um;
        Um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case be:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Xu() {
      zm = Qo();
    }
    function VS() {
      Um = Qo();
    }
    function BS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function tc(e, t) {
      return {
        value: e,
        source: t,
        stack: eo(t),
        digest: null
      };
    }
    function $S(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function cw(e, t) {
      return !0;
    }
    function IS(e, t) {
      try {
        var a = cw(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === B)
            return;
          console.error(i);
        }
        var p = l ? ft(l) : null, y = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === N)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = ft(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var L = y + `
` + f + `

` + ("" + C);
        console.error(L);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var fw = typeof WeakMap == "function" ? WeakMap : Map;
    function ZC(e, t, a) {
      var i = Hl(vn, a);
      i.tag = Ig, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        rO(l), IS(e, t);
      }, i;
    }
    function YS(e, t, a) {
      var i = Hl(vn, a);
      i.tag = Ig;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          sR(e), IS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        sR(e), IS(e, t), typeof l != "function" && tO(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (fa(e.lanes, lt) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ft(e) || "Unknown"));
      }), i;
    }
    function JC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new fw(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = aO.bind(null, e, t, a);
        Sr && ap(e, a), t.then(s, s);
      }
    }
    function dw(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function vw(e, t) {
      var a = e.tag;
      if ((e.mode & Ot) === at && (a === H || a === Ee || a === me)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function e1(e) {
      var t = e;
      do {
        if (t.tag === pe && Xb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function t1(e, t, a, i, l) {
      if ((e.mode & Ot) === at) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= st, a.flags |= _s, a.flags &= ~(bc | Ea), a.tag === B) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ye;
            else {
              var f = Hl(vn, lt);
              f.tag = om, Io(a, f, lt);
            }
          }
          a.lanes = Ct(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = l, e;
    }
    function pw(e, t, a, i, l) {
      if (a.flags |= Ea, Sr && ap(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        vw(a), Kr() && a.mode & Ot && YE();
        var f = e1(t);
        if (f !== null) {
          f.flags &= ~Pn, t1(f, t, a, e, l), f.mode & Ot && JC(e, s, l), dw(f, e, s);
          return;
        } else {
          if (!Ro(l)) {
            JC(e, s, l), T0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Kr() && a.mode & Ot) {
        YE();
        var y = e1(t);
        if (y !== null) {
          (y.flags & cr) === Je && (y.flags |= Pn), t1(y, t, a, e, l), jg(tc(i, a));
          return;
        }
      }
      i = tc(i, a), Wx(i);
      var C = t;
      do {
        switch (C.tag) {
          case N: {
            var _ = i;
            C.flags |= cr;
            var L = tr(l);
            C.lanes = Ct(C.lanes, L);
            var k = ZC(C, _, L);
            Wg(C, k);
            return;
          }
          case B:
            var V = i, I = C.type, X = C.stateNode;
            if ((C.flags & st) === Je && (typeof I.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !eR(X))) {
              C.flags |= cr;
              var je = tr(l);
              C.lanes = Ct(C.lanes, je);
              var nt = YS(C, V, je);
              Wg(C, nt);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function hw() {
      return null;
    }
    var $v = h.ReactCurrentOwner, iu = !1, KS, Iv, WS, QS, qS, nc, GS, Fm;
    KS = {}, Iv = {}, WS = {}, QS = {}, qS = {}, nc = !1, GS = {}, Fm = {};
    function wa(e, t, a, i) {
      e === null ? t.child = SC(t, null, a, i) : t.child = Af(t, e.child, a, i);
    }
    function mw(e, t, a, i) {
      t.child = Af(t, e.child, null, i), t.child = Af(t, null, a, i);
    }
    function n1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f = a.render, p = t.ref, y, C;
      Nf(t, l), zu(t);
      {
        if ($v.current = t, na(!0), y = Hf(e, t, f, i, p, l), C = Vf(), t.mode & Nn) {
          er(!0);
          try {
            y = Hf(e, t, f, i, p, l), C = Vf();
          } finally {
            er(!1);
          }
        }
        na(!1);
      }
      return hl(), e !== null && !iu ? (TC(e, t, l), Vl(e, t, l)) : (Kr() && C && Mg(t), t.flags |= Ou, wa(e, t, y, l), t.child);
    }
    function r1(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (CO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = qf(s), t.tag = me, t.type = f, JS(t, s), a1(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          p && Ji(
            p,
            i,
            // Resolved props
            "prop",
            Vt(s)
          );
        }
        var y = z0(a.type, null, i, t, t.mode, l);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var C = a.type, _ = C.propTypes;
        _ && Ji(
          _,
          i,
          // Resolved props
          "prop",
          Vt(C)
        );
      }
      var L = e.child, k = i0(e, l);
      if (!k) {
        var V = L.memoizedProps, I = a.compare;
        if (I = I !== null ? I : Ze, I(V, i) && e.ref === t.ref)
          return Vl(e, t, l);
      }
      t.flags |= Ou;
      var X = lc(L, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function a1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === tt) {
          var f = s, p = f._payload, y = f._init;
          try {
            s = y(p);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && Ji(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Vt(s)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (Ze(_, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (iu = !1, t.pendingProps = i = _, i0(e, l))
            (e.flags & _s) !== Je && (iu = !0);
          else
            return t.lanes = e.lanes, Vl(e, t, l);
      }
      return XS(e, t, a, i, l);
    }
    function i1(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & Ot) === at) {
          var f = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Zm(t, a);
        } else if (fa(a, ca)) {
          var L = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var k = s !== null ? s.baseLanes : a;
          Zm(t, k);
        } else {
          var p = null, y;
          if (s !== null) {
            var C = s.baseLanes;
            y = Ct(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = ca;
          var _ = {
            baseLanes: y,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, Zm(t, y), null;
        }
      else {
        var V;
        s !== null ? (V = Ct(s.baseLanes, a), t.memoizedState = null) : V = a, Zm(t, V);
      }
      return wa(e, t, l, a), t.child;
    }
    function yw(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function gw(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function Sw(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return wa(e, t, s, a), t.child;
    }
    function u1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= aa, t.flags |= wd);
    }
    function XS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f;
      {
        var p = xf(t, a, !0);
        f = Of(t, p);
      }
      var y, C;
      Nf(t, l), zu(t);
      {
        if ($v.current = t, na(!0), y = Hf(e, t, a, i, f, l), C = Vf(), t.mode & Nn) {
          er(!0);
          try {
            y = Hf(e, t, a, i, f, l), C = Vf();
          } finally {
            er(!1);
          }
        }
        na(!1);
      }
      return hl(), e !== null && !iu ? (TC(e, t, l), Vl(e, t, l)) : (Kr() && C && Mg(t), t.flags |= Ou, wa(e, t, y, l), t.child);
    }
    function l1(e, t, a, i, l) {
      {
        switch (UO(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), y = p.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= st, t.flags |= cr;
            var C = new Error("Simulated error coming from DevTools"), _ = tr(l);
            t.lanes = Ct(t.lanes, _);
            var L = YS(t, tc(C, t), _);
            Wg(t, L);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && Ji(
            k,
            i,
            // Resolved props
            "prop",
            Vt(a)
          );
        }
      }
      var V;
      Ku(a) ? (V = !0, Xh(t)) : V = !1, Nf(t, l);
      var I = t.stateNode, X;
      I === null ? (Vm(e, t), pC(t, a, i), iS(t, a, i, l), X = !0) : e === null ? X = Yb(t, a, i, l) : X = Kb(e, t, a, i, l);
      var je = ZS(e, t, a, X, V, l);
      {
        var nt = t.stateNode;
        X && nt.props !== i && (nc || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ft(t) || "a component"), nc = !0);
      }
      return je;
    }
    function ZS(e, t, a, i, l, s) {
      u1(e, t);
      var f = (t.flags & st) !== Je;
      if (!i && !f)
        return l && VE(t, a, !1), Vl(e, t, s);
      var p = t.stateNode;
      $v.current = t;
      var y;
      if (f && typeof a.getDerivedStateFromError != "function")
        y = null, XC();
      else {
        zu(t);
        {
          if (na(!0), y = p.render(), t.mode & Nn) {
            er(!0);
            try {
              p.render();
            } finally {
              er(!1);
            }
          }
          na(!1);
        }
        hl();
      }
      return t.flags |= Ou, e !== null && f ? mw(e, t, y, s) : wa(e, t, y, s), t.memoizedState = p.state, l && VE(t, a, !0), t.child;
    }
    function o1(e) {
      var t = e.stateNode;
      t.pendingContext ? FE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && FE(e, t.context, !1), fS(e, t.containerInfo);
    }
    function Ew(e, t, a) {
      if (o1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      uC(e, t), dm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var y = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & Pn) {
          var _ = tc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return s1(e, t, p, a, _);
        } else if (p !== s) {
          var L = tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return s1(e, t, p, a, L);
        } else {
          Tb(t);
          var k = SC(t, null, p, a);
          t.child = k;
          for (var V = k; V; )
            V.flags = V.flags & ~En | Pa, V = V.sibling;
        }
      } else {
        if (Mf(), p === s)
          return Vl(e, t, a);
        wa(e, t, p, a);
      }
      return t.child;
    }
    function s1(e, t, a, i, l) {
      return Mf(), jg(l), t.flags |= Pn, wa(e, t, a, i), t.child;
    }
    function Cw(e, t, a) {
      CC(t), e === null && Ug(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = yg(i, l);
      return p ? f = null : s !== null && yg(i, s) && (t.flags |= Jt), u1(e, t), wa(e, t, f, a), t.child;
    }
    function Rw(e, t) {
      return e === null && Ug(t), null;
    }
    function _w(e, t, a, i) {
      Vm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, y = p(f);
      t.type = y;
      var C = t.tag = RO(y), _ = nu(y, l), L;
      switch (C) {
        case H:
          return JS(t, y), t.type = y = qf(y), L = XS(null, t, y, _, i), L;
        case B:
          return t.type = y = D0(y), L = l1(null, t, y, _, i), L;
        case Ee:
          return t.type = y = k0(y), L = n1(null, t, y, _, i), L;
        case Ve: {
          if (t.type !== t.elementType) {
            var k = y.propTypes;
            k && Ji(
              k,
              _,
              // Resolved for outer only
              "prop",
              Vt(y)
            );
          }
          return L = r1(
            null,
            t,
            y,
            nu(y.type, _),
            // The inner type can have defaults too
            i
          ), L;
        }
      }
      var V = "";
      throw y !== null && typeof y == "object" && y.$$typeof === tt && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function Tw(e, t, a, i, l) {
      Vm(e, t), t.tag = B;
      var s;
      return Ku(a) ? (s = !0, Xh(t)) : s = !1, Nf(t, l), pC(t, a, i), iS(t, a, i, l), ZS(null, t, a, !0, s, l);
    }
    function bw(e, t, a, i) {
      Vm(e, t);
      var l = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = Of(t, f);
      }
      Nf(t, i);
      var p, y;
      zu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = Vt(a) || "Unknown";
          KS[C] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), KS[C] = !0);
        }
        t.mode & Nn && tu.recordLegacyContextWarning(t, null), na(!0), $v.current = t, p = Hf(null, t, a, l, s, i), y = Vf(), na(!1);
      }
      if (hl(), t.flags |= Ou, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var _ = Vt(a) || "Unknown";
        Iv[_] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Iv[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var L = Vt(a) || "Unknown";
          Iv[L] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), Iv[L] = !0);
        }
        t.tag = B, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Ku(a) ? (k = !0, Xh(t)) : k = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Kg(t), vC(t, p), iS(t, a, l, i), ZS(null, t, a, !0, k, i);
      } else {
        if (t.tag = H, t.mode & Nn) {
          er(!0);
          try {
            p = Hf(null, t, a, l, s, i), y = Vf();
          } finally {
            er(!1);
          }
        }
        return Kr() && y && Mg(t), wa(null, t, p, i), JS(t, a), t.child;
      }
    }
    function JS(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = $r();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), qS[l] || (qS[l] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Vt(t) || "Unknown";
          QS[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), QS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Vt(t) || "Unknown";
          WS[p] || (E("%s: Function components do not support contextType.", p), WS[p] = !0);
        }
      }
    }
    var e0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ut
    };
    function t0(e) {
      return {
        baseLanes: e,
        cachePool: hw(),
        transitions: null
      };
    }
    function ww(e, t) {
      var a = null;
      return {
        baseLanes: Ct(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function xw(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return pS(e, zv);
    }
    function Ow(e, t) {
      return _o(e.childLanes, t);
    }
    function c1(e, t, a) {
      var i = t.pendingProps;
      jO(t) && (t.flags |= st);
      var l = ru.current, s = !1, f = (t.flags & st) !== Je;
      if (f || xw(l, e) ? (s = !0, t.flags &= ~st) : (e === null || e.memoizedState !== null) && (l = Gb(l, _C)), l = Uf(l), Ko(t, l), e === null) {
        Ug(t);
        var p = t.memoizedState;
        if (p !== null) {
          var y = p.dehydrated;
          if (y !== null)
            return Nw(t, y);
        }
        var C = i.children, _ = i.fallback;
        if (s) {
          var L = Dw(t, C, _, a), k = t.child;
          return k.memoizedState = t0(a), t.memoizedState = e0, L;
        } else
          return n0(t, C);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var I = V.dehydrated;
          if (I !== null)
            return Aw(e, t, f, i, I, V, a);
        }
        if (s) {
          var X = i.fallback, je = i.children, nt = Mw(e, t, je, X, a), Ge = t.child, Pt = e.child.memoizedState;
          return Ge.memoizedState = Pt === null ? t0(a) : ww(Pt, a), Ge.childLanes = Ow(e, a), t.memoizedState = e0, nt;
        } else {
          var kt = i.children, U = kw(e, t, kt, a);
          return t.memoizedState = null, U;
        }
      }
    }
    function n0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = r0(l, i);
      return s.return = e, e.child = s, s;
    }
    function Dw(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, y;
      return (l & Ot) === at && s !== null ? (p = s, p.childLanes = J, p.pendingProps = f, e.mode & ut && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), y = es(a, l, i, null)) : (p = r0(f, l), y = es(a, l, i, null)), p.return = e, y.return = e, p.sibling = y, e.child = p, y;
    }
    function r0(e, t, a) {
      return fR(e, t, J, null);
    }
    function f1(e, t) {
      return lc(e, t);
    }
    function kw(e, t, a, i) {
      var l = e.child, s = l.sibling, f = f1(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ot) === at && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Qt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Mw(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ot) === at && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var _ = t.child;
        C = _, C.childLanes = J, C.pendingProps = y, t.mode & ut && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = f1(f, y), C.subtreeFlags = f.subtreeFlags & gr;
      var L;
      return p !== null ? L = lc(p, i) : (L = es(i, s, l, null), L.flags |= En), L.return = t, C.return = t, C.sibling = L, t.child = C, L;
    }
    function Hm(e, t, a, i) {
      i !== null && jg(i), Af(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = n0(t, s);
      return f.flags |= En, t.memoizedState = null, f;
    }
    function Lw(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = r0(f, s), y = es(i, s, l, null);
      return y.flags |= En, p.return = t, y.return = t, p.sibling = y, t.child = p, (t.mode & Ot) !== at && Af(t, e.child, null, l), y;
    }
    function Nw(e, t, a) {
      return (e.mode & Ot) === at ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : Cg(t) ? e.lanes = gl : e.lanes = ca, null;
    }
    function Aw(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Pn) {
          t.flags &= ~Pn;
          var U = $S(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Hm(e, t, f, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= st, null;
          var Z = i.children, j = i.fallback, Se = Lw(e, t, Z, j, f), Pe = t.child;
          return Pe.memoizedState = t0(f), t.memoizedState = e0, Se;
        }
      else {
        if (Rb(), (t.mode & Ot) === at)
          return Hm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Cg(l)) {
          var p, y, C;
          {
            var _ = FT(l);
            p = _.digest, y = _.message, C = _.stack;
          }
          var L;
          y ? L = new Error(y) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = $S(L, p, C);
          return Hm(e, t, f, k);
        }
        var V = fa(f, e.childLanes);
        if (iu || V) {
          var I = Xm();
          if (I !== null) {
            var X = By(I, f);
            if (X !== Ut && X !== s.retryLane) {
              s.retryLane = X;
              var je = vn;
              Qa(e, X), Or(I, e, X, je);
            }
          }
          T0();
          var nt = $S(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Hm(e, t, f, nt);
        } else if (NE(l)) {
          t.flags |= st, t.child = e.child;
          var Ge = iO.bind(null, e);
          return HT(l, Ge), null;
        } else {
          bb(t, l, s.treeContext);
          var Pt = i.children, kt = n0(t, Pt);
          return kt.flags |= Pa, kt;
        }
      }
    }
    function d1(e, t, a) {
      e.lanes = Ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ct(i.lanes, t)), Bg(e.return, t, a);
    }
    function zw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === pe) {
          var l = i.memoizedState;
          l !== null && d1(i, a, e);
        } else if (i.tag === ye)
          d1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Uw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Sm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function jw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !GS[e])
        if (GS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Pw(e, t) {
      e !== void 0 && !Fm[e] && (e !== "collapsed" && e !== "hidden" ? (Fm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Fm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function v1(e, t) {
      {
        var a = Lt(e), i = !a && typeof ti(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function Fw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!v1(e[a], a))
              return;
        } else {
          var i = ti(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!v1(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function a0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function p1(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      jw(l), Pw(s, l), Fw(f, l), wa(e, t, f, a);
      var p = ru.current, y = pS(p, zv);
      if (y)
        p = hS(p, zv), t.flags |= st;
      else {
        var C = e !== null && (e.flags & st) !== Je;
        C && zw(t, t.child, a), p = Uf(p);
      }
      if (Ko(t, p), (t.mode & Ot) === at)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var _ = Uw(t.child), L;
            _ === null ? (L = t.child, t.child = null) : (L = _.sibling, _.sibling = null), a0(
              t,
              !1,
              // isBackwards
              L,
              _,
              s
            );
            break;
          }
          case "backwards": {
            var k = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var I = V.alternate;
              if (I !== null && Sm(I) === null) {
                t.child = V;
                break;
              }
              var X = V.sibling;
              V.sibling = k, k = V, V = X;
            }
            a0(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            a0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Hw(e, t, a) {
      fS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Af(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var h1 = !1;
    function Vw(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || h1 || (h1 = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && Ji(y, s, "prop", "Context.Provider");
      }
      if (nC(t, l, p), f !== null) {
        var C = f.value;
        if ($e(C, p)) {
          if (f.children === s.children && !qh())
            return Vl(e, t, a);
        } else
          zb(t, l, a);
      }
      var _ = s.children;
      return wa(e, t, _, a), t.child;
    }
    var m1 = !1;
    function Bw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (m1 || (m1 = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = hr(i);
      zu(t);
      var p;
      return $v.current = t, na(!0), p = s(f), na(!1), hl(), t.flags |= Ou, wa(e, t, p, a), t.child;
    }
    function Yv() {
      iu = !0;
    }
    function Vm(e, t) {
      (t.mode & Ot) === at && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function Vl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), rp(t.lanes), fa(a, t.childLanes) ? (Wb(e, t), t.child) : null;
    }
    function $w(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Qt) : s.push(e), a.flags |= En, a;
      }
    }
    function i0(e, t) {
      var a = e.lanes;
      return !!fa(a, t);
    }
    function Iw(e, t, a) {
      switch (t.tag) {
        case N:
          o1(t), t.stateNode, Mf();
          break;
        case Y:
          CC(t);
          break;
        case B: {
          var i = t.type;
          Ku(i) && Xh(t);
          break;
        }
        case P:
          fS(t, t.stateNode.containerInfo);
          break;
        case ue: {
          var l = t.memoizedProps.value, s = t.type._context;
          nC(t, s, l);
          break;
        }
        case be:
          {
            var f = fa(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case pe: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Ko(t, Uf(ru.current)), t.flags |= st, null;
            var C = t.child, _ = C.childLanes;
            if (fa(a, _))
              return c1(e, t, a);
            Ko(t, Uf(ru.current));
            var L = Vl(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            Ko(t, Uf(ru.current));
          break;
        }
        case ye: {
          var k = (e.flags & st) !== Je, V = fa(a, t.childLanes);
          if (k) {
            if (V)
              return p1(e, t, a);
            t.flags |= st;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Ko(t, ru.current), V)
            break;
          return null;
        }
        case re:
        case ae:
          return t.lanes = J, i1(e, t, a);
      }
      return Vl(e, t, a);
    }
    function y1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return $w(e, t, z0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          iu = !0;
        else {
          var s = i0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & st) === Je)
            return iu = !1, Iw(e, t, a);
          (e.flags & _s) !== Je ? iu = !0 : iu = !1;
        }
      } else if (iu = !1, Kr() && mb(t)) {
        var f = t.index, p = yb();
        IE(t, p, f);
      }
      switch (t.lanes = J, t.tag) {
        case he:
          return bw(e, t, t.type, a);
        case Xe: {
          var y = t.elementType;
          return _w(e, t, y, a);
        }
        case H: {
          var C = t.type, _ = t.pendingProps, L = t.elementType === C ? _ : nu(C, _);
          return XS(e, t, C, L, a);
        }
        case B: {
          var k = t.type, V = t.pendingProps, I = t.elementType === k ? V : nu(k, V);
          return l1(e, t, k, I, a);
        }
        case N:
          return Ew(e, t, a);
        case Y:
          return Cw(e, t, a);
        case q:
          return Rw(e, t);
        case pe:
          return c1(e, t, a);
        case P:
          return Hw(e, t, a);
        case Ee: {
          var X = t.type, je = t.pendingProps, nt = t.elementType === X ? je : nu(X, je);
          return n1(e, t, X, nt, a);
        }
        case oe:
          return yw(e, t, a);
        case ee:
          return gw(e, t, a);
        case be:
          return Sw(e, t, a);
        case ue:
          return Vw(e, t, a);
        case de:
          return Bw(e, t, a);
        case Ve: {
          var Ge = t.type, Pt = t.pendingProps, kt = nu(Ge, Pt);
          if (t.type !== t.elementType) {
            var U = Ge.propTypes;
            U && Ji(
              U,
              kt,
              // Resolved for outer only
              "prop",
              Vt(Ge)
            );
          }
          return kt = nu(Ge.type, kt), r1(e, t, Ge, kt, a);
        }
        case me:
          return a1(e, t, t.type, t.pendingProps, a);
        case Ye: {
          var Z = t.type, j = t.pendingProps, Se = t.elementType === Z ? j : nu(Z, j);
          return Tw(e, t, Z, Se, a);
        }
        case ye:
          return p1(e, t, a);
        case Fe:
          break;
        case re:
          return i1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Et;
    }
    function g1(e) {
      e.flags |= aa, e.flags |= wd;
    }
    var S1, u0, E1, C1;
    S1 = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === Y || l.tag === q)
          vT(e, l.stateNode);
        else if (l.tag !== P) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, u0 = function(e, t) {
    }, E1 = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = dS(), y = hT(f, a, s, i, l, p);
        t.updateQueue = y, y && Bf(t);
      }
    }, C1 = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Kv(e, t) {
      if (!Kr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Qr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = Je;
      if (t) {
        if ((e.mode & ut) !== at) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = Ct(a, Ct(C.lanes, C.childLanes)), i |= C.subtreeFlags & gr, i |= C.flags & gr, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var _ = e.child; _ !== null; )
            a = Ct(a, Ct(_.lanes, _.childLanes)), i |= _.subtreeFlags & gr, i |= _.flags & gr, _.return = e, _ = _.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ut) !== at) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ct(a, Ct(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ct(a, Ct(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Yw(e, t, a) {
      if (kb() && (t.mode & Ot) !== at && (t.flags & st) === Je)
        return XE(t), Mf(), t.flags |= Pn | Ea | cr, !1;
      var i = nm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ob(t), Qr(t), (t.mode & ut) !== at) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & st) === Je && (t.memoizedState = null), t.flags |= Et, Qr(t), (t.mode & ut) !== at) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return ZE(), !0;
    }
    function R1(e, t, a) {
      var i = t.pendingProps;
      switch (Lg(t), t.tag) {
        case he:
        case Xe:
        case me:
        case H:
        case Ee:
        case oe:
        case ee:
        case be:
        case de:
        case Ve:
          return Qr(t), null;
        case B: {
          var l = t.type;
          return Ku(l) && Gh(t), Qr(t), null;
        }
        case N: {
          var s = t.stateNode;
          if (zf(t), Og(t), yS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = nm(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Pn) !== Je) && (t.flags |= ja, ZE());
            }
          }
          return u0(e, t), Qr(t), null;
        }
        case Y: {
          vS(t);
          var y = EC(), C = t.type;
          if (e !== null && t.stateNode != null)
            E1(e, t, C, i, y), e.ref !== t.ref && g1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Qr(t), null;
            }
            var _ = dS(), L = nm(t);
            if (L)
              wb(t, y, _) && Bf(t);
            else {
              var k = dT(C, i, y, _, t);
              S1(k, t, !1, !1), t.stateNode = k, pT(k, C, i, y) && Bf(t);
            }
            t.ref !== null && g1(t);
          }
          return Qr(t), null;
        }
        case q: {
          var V = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            C1(e, t, I, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = EC(), je = dS(), nt = nm(t);
            nt ? xb(t) && Bf(t) : t.stateNode = mT(V, X, je, t);
          }
          return Qr(t), null;
        }
        case pe: {
          jf(t);
          var Ge = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = Yw(e, t, Ge);
            if (!Pt)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & st) !== Je)
            return t.lanes = a, (t.mode & ut) !== at && BS(t), t;
          var kt = Ge !== null, U = e !== null && e.memoizedState !== null;
          if (kt !== U && kt) {
            var Z = t.child;
            if (Z.flags |= Du, (t.mode & Ot) !== at) {
              var j = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !G);
              j || pS(ru.current, _C) ? Kx() : T0();
            }
          }
          var Se = t.updateQueue;
          if (Se !== null && (t.flags |= Et), Qr(t), (t.mode & ut) !== at && kt) {
            var Pe = t.child;
            Pe !== null && (t.treeBaseDuration -= Pe.treeBaseDuration);
          }
          return null;
        }
        case P:
          return zf(t), u0(e, t), e === null && sb(t.stateNode.containerInfo), Qr(t), null;
        case ue:
          var Ne = t.type._context;
          return Vg(Ne, t), Qr(t), null;
        case Ye: {
          var ot = t.type;
          return Ku(ot) && Gh(t), Qr(t), null;
        }
        case ye: {
          jf(t);
          var pt = t.memoizedState;
          if (pt === null)
            return Qr(t), null;
          var on = (t.flags & st) !== Je, Kt = pt.rendering;
          if (Kt === null)
            if (on)
              Kv(pt, !1);
            else {
              var ir = Qx() && (e === null || (e.flags & st) === Je);
              if (!ir)
                for (var Wt = t.child; Wt !== null; ) {
                  var Xn = Sm(Wt);
                  if (Xn !== null) {
                    on = !0, t.flags |= st, Kv(pt, !1);
                    var ha = Xn.updateQueue;
                    return ha !== null && (t.updateQueue = ha, t.flags |= Et), t.subtreeFlags = Je, Qb(t, a), Ko(t, hS(ru.current, zv)), t.child;
                  }
                  Wt = Wt.sibling;
                }
              pt.tail !== null && Ln() > $1() && (t.flags |= st, on = !0, Kv(pt, !1), t.lanes = Fd);
            }
          else {
            if (!on) {
              var Jr = Sm(Kt);
              if (Jr !== null) {
                t.flags |= st, on = !0;
                var di = Jr.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= Et), Kv(pt, !0), pt.tail === null && pt.tailMode === "hidden" && !Kt.alternate && !Kr())
                  return Qr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Ln() * 2 - pt.renderingStartTime > $1() && a !== ca && (t.flags |= st, on = !0, Kv(pt, !1), t.lanes = Fd);
            }
            if (pt.isBackwards)
              Kt.sibling = t.child, t.child = Kt;
            else {
              var Da = pt.last;
              Da !== null ? Da.sibling = Kt : t.child = Kt, pt.last = Kt;
            }
          }
          if (pt.tail !== null) {
            var ka = pt.tail;
            pt.rendering = ka, pt.tail = ka.sibling, pt.renderingStartTime = Ln(), ka.sibling = null;
            var ma = ru.current;
            return on ? ma = hS(ma, zv) : ma = Uf(ma), Ko(t, ma), ka;
          }
          return Qr(t), null;
        }
        case Fe:
          break;
        case re:
        case ae: {
          _0(t);
          var Kl = t.memoizedState, Gf = Kl !== null;
          if (e !== null) {
            var op = e.memoizedState, el = op !== null;
            el !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= Du);
          }
          return !Gf || (t.mode & Ot) === at ? Qr(t) : fa(Ju, ca) && (Qr(t), t.subtreeFlags & (En | Et) && (t.flags |= Du)), null;
        }
        case Le:
          return null;
        case _e:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kw(e, t, a) {
      switch (Lg(t), t.tag) {
        case B: {
          var i = t.type;
          Ku(i) && Gh(t);
          var l = t.flags;
          return l & cr ? (t.flags = l & ~cr | st, (t.mode & ut) !== at && BS(t), t) : null;
        }
        case N: {
          t.stateNode, zf(t), Og(t), yS();
          var s = t.flags;
          return (s & cr) !== Je && (s & st) === Je ? (t.flags = s & ~cr | st, t) : null;
        }
        case Y:
          return vS(t), null;
        case pe: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mf();
          }
          var p = t.flags;
          return p & cr ? (t.flags = p & ~cr | st, (t.mode & ut) !== at && BS(t), t) : null;
        }
        case ye:
          return jf(t), null;
        case P:
          return zf(t), null;
        case ue:
          var y = t.type._context;
          return Vg(y, t), null;
        case re:
        case ae:
          return _0(t), null;
        case Le:
          return null;
        default:
          return null;
      }
    }
    function _1(e, t, a) {
      switch (Lg(t), t.tag) {
        case B: {
          var i = t.type.childContextTypes;
          i != null && Gh(t);
          break;
        }
        case N: {
          t.stateNode, zf(t), Og(t), yS();
          break;
        }
        case Y: {
          vS(t);
          break;
        }
        case P:
          zf(t);
          break;
        case pe:
          jf(t);
          break;
        case ye:
          jf(t);
          break;
        case ue:
          var l = t.type._context;
          Vg(l, t);
          break;
        case re:
        case ae:
          _0(t);
          break;
      }
    }
    var T1 = null;
    T1 = /* @__PURE__ */ new Set();
    var Bm = !1, qr = !1, Ww = typeof WeakSet == "function" ? WeakSet : Set, Ie = null, $f = null, If = null;
    function Qw(e) {
      vl(null, function() {
        throw e;
      }), Td();
    }
    var qw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ut)
        try {
          Xu(), t.componentWillUnmount();
        } finally {
          Gu(e);
        }
      else
        t.componentWillUnmount();
    };
    function b1(e, t) {
      try {
        qo(Rr, e);
      } catch (a) {
        Tn(e, t, a);
      }
    }
    function l0(e, t, a) {
      try {
        qw(e, a);
      } catch (i) {
        Tn(e, t, i);
      }
    }
    function Gw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Tn(e, t, i);
      }
    }
    function w1(e, t) {
      try {
        O1(e);
      } catch (a) {
        Tn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ht && yt && e.mode & ut)
              try {
                Xu(), i = a(null);
              } finally {
                Gu(e);
              }
            else
              i = a(null);
          } catch (l) {
            Tn(e, t, l);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          a.current = null;
    }
    function $m(e, t, a) {
      try {
        a();
      } catch (i) {
        Tn(e, t, i);
      }
    }
    var x1 = !1;
    function Xw(e, t) {
      cT(e.containerInfo), Ie = t, Zw();
      var a = x1;
      return x1 = !1, a;
    }
    function Zw() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        (e.subtreeFlags & ho) !== Je && t !== null ? (t.return = e, Ie = t) : Jw();
      }
    }
    function Jw() {
      for (; Ie !== null; ) {
        var e = Ie;
        Zt(e);
        try {
          ex(e);
        } catch (a) {
          Tn(e, e.return, a);
        }
        jn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function ex(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ja) !== Je) {
        switch (Zt(e), e.tag) {
          case H:
          case Ee:
          case me:
            break;
          case B: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !nc && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nu(e.type, i), l);
              {
                var p = T1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ft(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case N: {
            {
              var y = e.stateNode;
              zT(y.containerInfo);
            }
            break;
          }
          case Y:
          case q:
          case P:
          case Ye:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        jn();
      }
    }
    function uu(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Wr) !== qa ? Nc(t) : (e & Rr) !== qa && Ac(t), (e & Wu) !== qa && ip(!0), $m(t, a, p), (e & Wu) !== qa && ip(!1), (e & Wr) !== qa ? th() : (e & Rr) !== qa && mo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Wr) !== qa ? eh(t) : (e & Rr) !== qa && nh(t);
            var f = s.create;
            (e & Wu) !== qa && ip(!0), s.destroy = f(), (e & Wu) !== qa && ip(!1), (e & Wr) !== qa ? Ud() : (e & Rr) !== qa && rh();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var y = void 0;
                (s.tag & Rr) !== Je ? y = "useLayoutEffect" : (s.tag & Wu) !== Je ? y = "useInsertionEffect" : y = "useEffect";
                var C = void 0;
                p === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? C = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, E("%s must not return anything besides a function, which is used for clean-up.%s", y, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function tx(e, t) {
      if ((t.flags & Et) !== Je)
        switch (t.tag) {
          case be: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            QC() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case N:
                    var C = y.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case be:
                    var _ = y.stateNode;
                    _.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function nx(e, t, a, i) {
      if ((a.flags & Mr) !== Je)
        switch (a.tag) {
          case H:
          case Ee:
          case me: {
            if (!qr)
              if (a.mode & ut)
                try {
                  Xu(), qo(Rr | Cr, a);
                } finally {
                  Gu(a);
                }
              else
                qo(Rr | Cr, a);
            break;
          }
          case B: {
            var l = a.stateNode;
            if (a.flags & Et && !qr)
              if (t === null)
                if (a.type === a.elementType && !nc && (l.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & ut)
                  try {
                    Xu(), l.componentDidMount();
                  } finally {
                    Gu(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nu(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !nc && (l.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & ut)
                  try {
                    Xu(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gu(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !nc && (l.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), l.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), oC(a, p, l));
            break;
          }
          case N: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Y:
                    C = a.child.stateNode;
                    break;
                  case B:
                    C = a.child.stateNode;
                    break;
                }
              oC(a, y, C);
            }
            break;
          }
          case Y: {
            var _ = a.stateNode;
            if (t === null && a.flags & Et) {
              var L = a.type, k = a.memoizedProps;
              CT(_, L, k);
            }
            break;
          }
          case q:
            break;
          case P:
            break;
          case be: {
            {
              var V = a.memoizedProps, I = V.onCommit, X = V.onRender, je = a.stateNode.effectDuration, nt = qC(), Ge = t === null ? "mount" : "update";
              QC() && (Ge = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, Ge, a.actualDuration, a.treeBaseDuration, a.actualStartTime, nt);
              {
                typeof I == "function" && I(a.memoizedProps.id, Ge, je, nt), Jx(a);
                var Pt = a.return;
                e:
                  for (; Pt !== null; ) {
                    switch (Pt.tag) {
                      case N:
                        var kt = Pt.stateNode;
                        kt.effectDuration += je;
                        break e;
                      case be:
                        var U = Pt.stateNode;
                        U.effectDuration += je;
                        break e;
                    }
                    Pt = Pt.return;
                  }
              }
            }
            break;
          }
          case pe: {
            cx(e, a);
            break;
          }
          case ye:
          case Ye:
          case Fe:
          case re:
          case ae:
          case _e:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qr || a.flags & aa && O1(a);
    }
    function rx(e) {
      switch (e.tag) {
        case H:
        case Ee:
        case me: {
          if (e.mode & ut)
            try {
              Xu(), b1(e, e.return);
            } finally {
              Gu(e);
            }
          else
            b1(e, e.return);
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Gw(e, e.return, t), w1(e, e.return);
          break;
        }
        case Y: {
          w1(e, e.return);
          break;
        }
      }
    }
    function ax(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Y) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? MT(l) : NT(i.stateNode, i.memoizedProps);
            } catch (f) {
              Tn(e, e.return, f);
            }
          }
        } else if (i.tag === q) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? LT(s) : AT(s, i.memoizedProps);
            } catch (f) {
              Tn(e, e.return, f);
            }
        } else if (!((i.tag === re || i.tag === ae) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function O1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Y:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & ut)
            try {
              Xu(), l = t(i);
            } finally {
              Gu(e);
            }
          else
            l = t(i);
          typeof l == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ft(e)), t.current = i;
      }
    }
    function ix(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function D1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, D1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Y) {
          var a = e.stateNode;
          a !== null && db(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function ux(e) {
      for (var t = e.return; t !== null; ) {
        if (k1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function k1(e) {
      return e.tag === Y || e.tag === N || e.tag === P;
    }
    function M1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || k1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Y && t.tag !== q && t.tag !== se; ) {
            if (t.flags & En || t.child === null || t.tag === P)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & En))
            return t.stateNode;
        }
    }
    function lx(e) {
      var t = ux(e);
      switch (t.tag) {
        case Y: {
          var a = t.stateNode;
          t.flags & Jt && (LE(a), t.flags &= ~Jt);
          var i = M1(e);
          s0(e, i, a);
          break;
        }
        case N:
        case P: {
          var l = t.stateNode.containerInfo, s = M1(e);
          o0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function o0(e, t, a) {
      var i = e.tag, l = i === Y || i === q;
      if (l) {
        var s = e.stateNode;
        t ? xT(a, s, t) : bT(a, s);
      } else if (i !== P) {
        var f = e.child;
        if (f !== null) {
          o0(f, t, a);
          for (var p = f.sibling; p !== null; )
            o0(p, t, a), p = p.sibling;
        }
      }
    }
    function s0(e, t, a) {
      var i = e.tag, l = i === Y || i === q;
      if (l) {
        var s = e.stateNode;
        t ? wT(a, s, t) : TT(a, s);
      } else if (i !== P) {
        var f = e.child;
        if (f !== null) {
          s0(f, t, a);
          for (var p = f.sibling; p !== null; )
            s0(p, t, a), p = p.sibling;
        }
      }
    }
    var Gr = null, lu = !1;
    function ox(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Y: {
                Gr = i.stateNode, lu = !1;
                break e;
              }
              case N: {
                Gr = i.stateNode.containerInfo, lu = !0;
                break e;
              }
              case P: {
                Gr = i.stateNode.containerInfo, lu = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Gr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        L1(e, t, a), Gr = null, lu = !1;
      }
      ix(a);
    }
    function Go(e, t, a) {
      for (var i = a.child; i !== null; )
        L1(e, t, i), i = i.sibling;
    }
    function L1(e, t, a) {
      switch (Ad(a), a.tag) {
        case Y:
          qr || Yf(a, t);
        case q: {
          {
            var i = Gr, l = lu;
            Gr = null, Go(e, t, a), Gr = i, lu = l, Gr !== null && (lu ? DT(Gr, a.stateNode) : OT(Gr, a.stateNode));
          }
          return;
        }
        case se: {
          Gr !== null && (lu ? kT(Gr, a.stateNode) : Eg(Gr, a.stateNode));
          return;
        }
        case P: {
          {
            var s = Gr, f = lu;
            Gr = a.stateNode.containerInfo, lu = !0, Go(e, t, a), Gr = s, lu = f;
          }
          return;
        }
        case H:
        case Ee:
        case Ve:
        case me: {
          if (!qr) {
            var p = a.updateQueue;
            if (p !== null) {
              var y = p.lastEffect;
              if (y !== null) {
                var C = y.next, _ = C;
                do {
                  var L = _, k = L.destroy, V = L.tag;
                  k !== void 0 && ((V & Wu) !== qa ? $m(a, t, k) : (V & Rr) !== qa && (Ac(a), a.mode & ut ? (Xu(), $m(a, t, k), Gu(a)) : $m(a, t, k), mo())), _ = _.next;
                } while (_ !== C);
              }
            }
          }
          Go(e, t, a);
          return;
        }
        case B: {
          if (!qr) {
            Yf(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && l0(a, t, I);
          }
          Go(e, t, a);
          return;
        }
        case Fe: {
          Go(e, t, a);
          return;
        }
        case re: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ot
          ) {
            var X = qr;
            qr = X || a.memoizedState !== null, Go(e, t, a), qr = X;
          } else
            Go(e, t, a);
          break;
        }
        default: {
          Go(e, t, a);
          return;
        }
      }
    }
    function sx(e) {
      e.memoizedState;
    }
    function cx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && qT(s);
          }
        }
      }
    }
    function N1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ww()), t.forEach(function(i) {
          var l = uO.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Sr)
              if ($f !== null && If !== null)
                ap(If, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function fx(e, t, a) {
      $f = a, If = e, Zt(t), A1(t, e), Zt(t), $f = null, If = null;
    }
    function ou(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            ox(e, t, s);
          } catch (y) {
            Tn(s, t, y);
          }
        }
      var f = fc();
      if (t.subtreeFlags & la)
        for (var p = t.child; p !== null; )
          Zt(p), A1(p, e), p = p.sibling;
      Zt(f);
    }
    function A1(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case H:
        case Ee:
        case Ve:
        case me: {
          if (ou(t, e), Zu(e), l & Et) {
            try {
              uu(Wu | Cr, e, e.return), qo(Wu | Cr, e);
            } catch (ot) {
              Tn(e, e.return, ot);
            }
            if (e.mode & ut) {
              try {
                Xu(), uu(Rr | Cr, e, e.return);
              } catch (ot) {
                Tn(e, e.return, ot);
              }
              Gu(e);
            } else
              try {
                uu(Rr | Cr, e, e.return);
              } catch (ot) {
                Tn(e, e.return, ot);
              }
          }
          return;
        }
        case B: {
          ou(t, e), Zu(e), l & aa && i !== null && Yf(i, i.return);
          return;
        }
        case Y: {
          ou(t, e), Zu(e), l & aa && i !== null && Yf(i, i.return);
          {
            if (e.flags & Jt) {
              var s = e.stateNode;
              try {
                LE(s);
              } catch (ot) {
                Tn(e, e.return, ot);
              }
            }
            if (l & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, y = i !== null ? i.memoizedProps : p, C = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    RT(f, _, C, y, p, e);
                  } catch (ot) {
                    Tn(e, e.return, ot);
                  }
              }
            }
          }
          return;
        }
        case q: {
          if (ou(t, e), Zu(e), l & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, k = e.memoizedProps, V = i !== null ? i.memoizedProps : k;
            try {
              _T(L, V, k);
            } catch (ot) {
              Tn(e, e.return, ot);
            }
          }
          return;
        }
        case N: {
          if (ou(t, e), Zu(e), l & Et && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                QT(t.containerInfo);
              } catch (ot) {
                Tn(e, e.return, ot);
              }
          }
          return;
        }
        case P: {
          ou(t, e), Zu(e);
          return;
        }
        case pe: {
          ou(t, e), Zu(e);
          var X = e.child;
          if (X.flags & Du) {
            var je = X.stateNode, nt = X.memoizedState, Ge = nt !== null;
            if (je.isHidden = Ge, Ge) {
              var Pt = X.alternate !== null && X.alternate.memoizedState !== null;
              Pt || Yx();
            }
          }
          if (l & Et) {
            try {
              sx(e);
            } catch (ot) {
              Tn(e, e.return, ot);
            }
            N1(e);
          }
          return;
        }
        case re: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ot
          ) {
            var U = qr;
            qr = U || kt, ou(t, e), qr = U;
          } else
            ou(t, e);
          if (Zu(e), l & Du) {
            var Z = e.stateNode, j = e.memoizedState, Se = j !== null, Pe = e;
            if (Z.isHidden = Se, Se && !kt && (Pe.mode & Ot) !== at) {
              Ie = Pe;
              for (var Ne = Pe.child; Ne !== null; )
                Ie = Ne, vx(Ne), Ne = Ne.sibling;
            }
            ax(Pe, Se);
          }
          return;
        }
        case ye: {
          ou(t, e), Zu(e), l & Et && N1(e);
          return;
        }
        case Fe:
          return;
        default: {
          ou(t, e), Zu(e);
          return;
        }
      }
    }
    function Zu(e) {
      var t = e.flags;
      if (t & En) {
        try {
          lx(e);
        } catch (a) {
          Tn(e, e.return, a);
        }
        e.flags &= ~En;
      }
      t & Pa && (e.flags &= ~Pa);
    }
    function dx(e, t, a) {
      $f = a, If = t, Ie = e, z1(e, t, a), $f = null, If = null;
    }
    function z1(e, t, a) {
      for (var i = (e.mode & Ot) !== at; Ie !== null; ) {
        var l = Ie, s = l.child;
        if (l.tag === re && i) {
          var f = l.memoizedState !== null, p = f || Bm;
          if (p) {
            c0(e, t, a);
            continue;
          } else {
            var y = l.alternate, C = y !== null && y.memoizedState !== null, _ = C || qr, L = Bm, k = qr;
            Bm = p, qr = _, qr && !k && (Ie = l, px(l));
            for (var V = s; V !== null; )
              Ie = V, z1(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            Ie = l, Bm = L, qr = k, c0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Mr) !== Je && s !== null ? (s.return = l, Ie = s) : c0(e, t, a);
      }
    }
    function c0(e, t, a) {
      for (; Ie !== null; ) {
        var i = Ie;
        if ((i.flags & Mr) !== Je) {
          var l = i.alternate;
          Zt(i);
          try {
            nx(t, l, i, a);
          } catch (f) {
            Tn(i, i.return, f);
          }
          jn();
        }
        if (i === e) {
          Ie = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ie = s;
          return;
        }
        Ie = i.return;
      }
    }
    function vx(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.child;
        switch (t.tag) {
          case H:
          case Ee:
          case Ve:
          case me: {
            if (t.mode & ut)
              try {
                Xu(), uu(Rr, t, t.return);
              } finally {
                Gu(t);
              }
            else
              uu(Rr, t, t.return);
            break;
          }
          case B: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && l0(t, t.return, i);
            break;
          }
          case Y: {
            Yf(t, t.return);
            break;
          }
          case re: {
            var l = t.memoizedState !== null;
            if (l) {
              U1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ie = a) : U1(e);
      }
    }
    function U1(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        if (t === e) {
          Ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ie = a;
          return;
        }
        Ie = t.return;
      }
    }
    function px(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.child;
        if (t.tag === re) {
          var i = t.memoizedState !== null;
          if (i) {
            j1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ie = a) : j1(e);
      }
    }
    function j1(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        Zt(t);
        try {
          rx(t);
        } catch (i) {
          Tn(t, t.return, i);
        }
        if (jn(), t === e) {
          Ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ie = a;
          return;
        }
        Ie = t.return;
      }
    }
    function hx(e, t, a, i) {
      Ie = t, mx(t, e, a, i);
    }
    function mx(e, t, a, i) {
      for (; Ie !== null; ) {
        var l = Ie, s = l.child;
        (l.subtreeFlags & Fa) !== Je && s !== null ? (s.return = l, Ie = s) : yx(e, t, a, i);
      }
    }
    function yx(e, t, a, i) {
      for (; Ie !== null; ) {
        var l = Ie;
        if ((l.flags & bn) !== Je) {
          Zt(l);
          try {
            gx(t, l, a, i);
          } catch (f) {
            Tn(l, l.return, f);
          }
          jn();
        }
        if (l === e) {
          Ie = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ie = s;
          return;
        }
        Ie = l.return;
      }
    }
    function gx(e, t, a, i) {
      switch (t.tag) {
        case H:
        case Ee:
        case me: {
          if (t.mode & ut) {
            VS();
            try {
              qo(Wr | Cr, t);
            } finally {
              HS(t);
            }
          } else
            qo(Wr | Cr, t);
          break;
        }
      }
    }
    function Sx(e) {
      Ie = e, Ex();
    }
    function Ex() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        if ((Ie.flags & Qt) !== Je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ie = l, _x(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ie = e;
          }
        }
        (e.subtreeFlags & Fa) !== Je && t !== null ? (t.return = e, Ie = t) : Cx();
      }
    }
    function Cx() {
      for (; Ie !== null; ) {
        var e = Ie;
        (e.flags & bn) !== Je && (Zt(e), Rx(e), jn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function Rx(e) {
      switch (e.tag) {
        case H:
        case Ee:
        case me: {
          e.mode & ut ? (VS(), uu(Wr | Cr, e, e.return), HS(e)) : uu(Wr | Cr, e, e.return);
          break;
        }
      }
    }
    function _x(e, t) {
      for (; Ie !== null; ) {
        var a = Ie;
        Zt(a), bx(a, t), jn();
        var i = a.child;
        i !== null ? (i.return = a, Ie = i) : Tx(e);
      }
    }
    function Tx(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.sibling, i = t.return;
        if (D1(t), t === e) {
          Ie = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ie = a;
          return;
        }
        Ie = i;
      }
    }
    function bx(e, t) {
      switch (e.tag) {
        case H:
        case Ee:
        case me: {
          e.mode & ut ? (VS(), uu(Wr, e, t), HS(e)) : uu(Wr, e, t);
          break;
        }
      }
    }
    function wx(e) {
      switch (e.tag) {
        case H:
        case Ee:
        case me: {
          try {
            qo(Rr | Cr, e);
          } catch (a) {
            Tn(e, e.return, a);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Tn(e, e.return, a);
          }
          break;
        }
      }
    }
    function xx(e) {
      switch (e.tag) {
        case H:
        case Ee:
        case me: {
          try {
            qo(Wr | Cr, e);
          } catch (t) {
            Tn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ox(e) {
      switch (e.tag) {
        case H:
        case Ee:
        case me: {
          try {
            uu(Rr | Cr, e, e.return);
          } catch (a) {
            Tn(e, e.return, a);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && l0(e, e.return, t);
          break;
        }
      }
    }
    function Dx(e) {
      switch (e.tag) {
        case H:
        case Ee:
        case me:
          try {
            uu(Wr | Cr, e, e.return);
          } catch (t) {
            Tn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Wv = Symbol.for;
      Wv("selector.component"), Wv("selector.has_pseudo_class"), Wv("selector.role"), Wv("selector.test_id"), Wv("selector.text");
    }
    var kx = [];
    function Mx() {
      kx.forEach(function(e) {
        return e();
      });
    }
    var Lx = h.ReactCurrentActQueue;
    function Nx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function P1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Lx.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Ax = Math.ceil, f0 = h.ReactCurrentDispatcher, d0 = h.ReactCurrentOwner, Xr = h.ReactCurrentBatchConfig, su = h.ReactCurrentActQueue, br = (
      /*             */
      0
    ), F1 = (
      /*               */
      1
    ), Zr = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Bl = 0, Qv = 1, rc = 2, Im = 3, qv = 4, H1 = 5, v0 = 6, jt = br, xa = null, In = null, wr = J, Ju = J, p0 = Ho(J), xr = Bl, Gv = null, Ym = J, Xv = J, Km = J, Zv = null, Ga = null, h0 = 0, V1 = 500, B1 = 1 / 0, zx = 500, $l = null;
    function Jv() {
      B1 = Ln() + zx;
    }
    function $1() {
      return B1;
    }
    var Wm = !1, m0 = null, Kf = null, ac = !1, Xo = null, ep = J, y0 = [], g0 = null, Ux = 50, tp = 0, S0 = null, E0 = !1, Qm = !1, jx = 50, Wf = 0, qm = null, np = vn, Gm = J, I1 = !1;
    function Xm() {
      return xa;
    }
    function Oa() {
      return (jt & (Zr | Li)) !== br ? Ln() : (np !== vn || (np = Ln()), np);
    }
    function Zo(e) {
      var t = e.mode;
      if ((t & Ot) === at)
        return lt;
      if ((jt & Zr) !== br && wr !== J)
        return tr(wr);
      var a = Nb() !== Lb;
      if (a) {
        if (Xr.transition !== null) {
          var i = Xr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Gm === Ut && (Gm = Bd()), Gm;
      }
      var l = $a();
      if (l !== Ut)
        return l;
      var s = yT();
      return s;
    }
    function Px(e) {
      var t = e.mode;
      return (t & Ot) === at ? lt : Vy();
    }
    function Or(e, t, a, i) {
      oO(), I1 && E("useInsertionEffect must not schedule updates."), E0 && (Qm = !0), bl(e, a, i), (jt & Zr) !== J && e === xa ? fO(t) : (Sr && Wd(e, t, a), dO(t), e === xa && ((jt & Zr) === br && (Xv = Ct(Xv, a)), xr === qv && Jo(e, wr)), Xa(e, i), a === lt && jt === br && (t.mode & Ot) === at && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !su.isBatchingLegacy && (Jv(), $E()));
    }
    function Fx(e, t, a) {
      var i = e.current;
      i.lanes = t, bl(e, t, a), Xa(e, a);
    }
    function Hx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (jt & Zr) !== br
      );
    }
    function Xa(e, t) {
      var a = e.callbackNode;
      Py(e, t);
      var i = Ds(e, e === xa ? wr : J);
      if (i === J) {
        a !== null && uR(a), e.callbackNode = null, e.callbackPriority = Ut;
        return;
      }
      var l = qn(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(su.current !== null && a !== x0)) {
        a == null && s !== lt && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && uR(a);
      var f;
      if (l === lt)
        e.tag === Vo ? (su.isBatchingLegacy !== null && (su.didScheduleLegacyUpdate = !0), hb(W1.bind(null, e))) : BE(W1.bind(null, e)), su.current !== null ? su.current.push(Bo) : ST(function() {
          (jt & (Zr | Li)) === br && Bo();
        }), f = null;
      else {
        var p;
        switch (As(i)) {
          case Lr:
            p = kc;
            break;
          case Er:
            p = _a;
            break;
          case Qi:
            p = Ri;
            break;
          case Ls:
            p = Mu;
            break;
          default:
            p = Ri;
            break;
        }
        f = O0(p, Y1.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function Y1(e, t) {
      if (ow(), np = vn, Gm = J, (jt & (Zr | Li)) !== br)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yl();
      if (i && e.callbackNode !== a)
        return null;
      var l = Ds(e, e === xa ? wr : J);
      if (l === J)
        return null;
      var s = !Ms(e, l) && !sh(e, l) && !t, f = s ? Gx(e, l) : Jm(e, l);
      if (f !== Bl) {
        if (f === rc) {
          var p = Hd(e);
          p !== J && (l = p, f = C0(e, p));
        }
        if (f === Qv) {
          var y = Gv;
          throw ic(e, J), Jo(e, l), Xa(e, Ln()), y;
        }
        if (f === v0)
          Jo(e, l);
        else {
          var C = !Ms(e, l), _ = e.current.alternate;
          if (C && !Bx(_)) {
            if (f = Jm(e, l), f === rc) {
              var L = Hd(e);
              L !== J && (l = L, f = C0(e, L));
            }
            if (f === Qv) {
              var k = Gv;
              throw ic(e, J), Jo(e, l), Xa(e, Ln()), k;
            }
          }
          e.finishedWork = _, e.finishedLanes = l, Vx(e, f, l);
        }
      }
      return Xa(e, Ln()), e.callbackNode === a ? Y1.bind(null, e) : null;
    }
    function C0(e, t) {
      var a = Zv;
      if (rr(e)) {
        var i = ic(e, t);
        i.flags |= Pn, ob(e.containerInfo);
      }
      var l = Jm(e, t);
      if (l !== rc) {
        var s = Ga;
        Ga = a, s !== null && K1(s);
      }
      return l;
    }
    function K1(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function Vx(e, t, a) {
      switch (t) {
        case Bl:
        case Qv:
          throw new Error("Root did not complete. This is a bug in React.");
        case rc: {
          uc(e, Ga, $l);
          break;
        }
        case Im: {
          if (Jo(e, a), ef(a) && // do not delay if we're inside an act() scope
          !lR()) {
            var i = h0 + V1 - Ln();
            if (i > 10) {
              var l = Ds(e, J);
              if (l !== J)
                break;
              var s = e.suspendedLanes;
              if (!Tl(s, a)) {
                Oa(), Yd(e, s);
                break;
              }
              e.timeoutHandle = gg(uc.bind(null, e, Ga, $l), i);
              break;
            }
          }
          uc(e, Ga, $l);
          break;
        }
        case qv: {
          if (Jo(e, a), oh(a))
            break;
          if (!lR()) {
            var f = lh(e, a), p = f, y = Ln() - p, C = lO(y) - y;
            if (C > 10) {
              e.timeoutHandle = gg(uc.bind(null, e, Ga, $l), C);
              break;
            }
          }
          uc(e, Ga, $l);
          break;
        }
        case H1: {
          uc(e, Ga, $l);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Bx(e) {
      for (var t = e; ; ) {
        if (t.flags & Rs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!$e(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Rs && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Jo(e, t) {
      t = _o(t, Km), t = _o(t, Xv), Id(e, t);
    }
    function W1(e) {
      if (sw(), (jt & (Zr | Li)) !== br)
        throw new Error("Should not already be working.");
      Yl();
      var t = Ds(e, J);
      if (!fa(t, lt))
        return Xa(e, Ln()), null;
      var a = Jm(e, t);
      if (e.tag !== Vo && a === rc) {
        var i = Hd(e);
        i !== J && (t = i, a = C0(e, i));
      }
      if (a === Qv) {
        var l = Gv;
        throw ic(e, J), Jo(e, t), Xa(e, Ln()), l;
      }
      if (a === v0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, uc(e, Ga, $l), Xa(e, Ln()), null;
    }
    function $x(e, t) {
      t !== J && (To(e, Ct(t, lt)), Xa(e, Ln()), (jt & (Zr | Li)) === br && (Jv(), Bo()));
    }
    function R0(e, t) {
      var a = jt;
      jt |= F1;
      try {
        return e(t);
      } finally {
        jt = a, jt === br && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !su.isBatchingLegacy && (Jv(), $E());
      }
    }
    function Ix(e, t, a, i, l) {
      var s = $a(), f = Xr.transition;
      try {
        return Xr.transition = null, nr(Lr), e(t, a, i, l);
      } finally {
        nr(s), Xr.transition = f, jt === br && Jv();
      }
    }
    function Il(e) {
      Xo !== null && Xo.tag === Vo && (jt & (Zr | Li)) === br && Yl();
      var t = jt;
      jt |= F1;
      var a = Xr.transition, i = $a();
      try {
        return Xr.transition = null, nr(Lr), e ? e() : void 0;
      } finally {
        nr(i), Xr.transition = a, jt = t, (jt & (Zr | Li)) === br && Bo();
      }
    }
    function Q1() {
      return (jt & (Zr | Li)) !== br;
    }
    function Zm(e, t) {
      va(p0, Ju, e), Ju = Ct(Ju, t);
    }
    function _0(e) {
      Ju = p0.current, da(p0, e);
    }
    function ic(e, t) {
      e.finishedWork = null, e.finishedLanes = J;
      var a = e.timeoutHandle;
      if (a !== Sg && (e.timeoutHandle = Sg, gT(a)), In !== null)
        for (var i = In.return; i !== null; ) {
          var l = i.alternate;
          _1(l, i), i = i.return;
        }
      xa = e;
      var s = lc(e.current, null);
      return In = s, wr = Ju = t, xr = Bl, Gv = null, Ym = J, Xv = J, Km = J, Zv = null, Ga = null, jb(), tu.discardPendingWarnings(), s;
    }
    function q1(e, t) {
      do {
        var a = In;
        try {
          if (um(), bC(), jn(), d0.current = null, a === null || a.return === null) {
            xr = Qv, Gv = t, In = null;
            return;
          }
          if (ht && a.mode & ut && Pm(a, !0), Rt)
            if (hl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ah(a, i, wr);
            } else
              zc(a, t, wr);
          pw(e, a.return, a, t, wr), J1(a);
        } catch (l) {
          t = l, In === a && a !== null ? (a = a.return, In = a) : a = In;
          continue;
        }
        return;
      } while (!0);
    }
    function G1() {
      var e = f0.current;
      return f0.current = Nm, e === null ? Nm : e;
    }
    function X1(e) {
      f0.current = e;
    }
    function Yx() {
      h0 = Ln();
    }
    function rp(e) {
      Ym = Ct(e, Ym);
    }
    function Kx() {
      xr === Bl && (xr = Im);
    }
    function T0() {
      (xr === Bl || xr === Im || xr === rc) && (xr = qv), xa !== null && (ks(Ym) || ks(Xv)) && Jo(xa, wr);
    }
    function Wx(e) {
      xr !== qv && (xr = rc), Zv === null ? Zv = [e] : Zv.push(e);
    }
    function Qx() {
      return xr === Bl;
    }
    function Jm(e, t) {
      var a = jt;
      jt |= Zr;
      var i = G1();
      if (xa !== e || wr !== t) {
        if (Sr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (ap(e, wr), l.clear()), rf(e, t);
        }
        $l = Qd(), ic(e, t);
      }
      oi(t);
      do
        try {
          qx();
          break;
        } catch (s) {
          q1(e, s);
        }
      while (!0);
      if (um(), jt = a, X1(i), In !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return go(), xa = null, wr = J, xr;
    }
    function qx() {
      for (; In !== null; )
        Z1(In);
    }
    function Gx(e, t) {
      var a = jt;
      jt |= Zr;
      var i = G1();
      if (xa !== e || wr !== t) {
        if (Sr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (ap(e, wr), l.clear()), rf(e, t);
        }
        $l = Qd(), Jv(), ic(e, t);
      }
      oi(t);
      do
        try {
          Xx();
          break;
        } catch (s) {
          q1(e, s);
        }
      while (!0);
      return um(), X1(i), jt = a, In !== null ? (bs(), Bl) : (go(), xa = null, wr = J, xr);
    }
    function Xx() {
      for (; In !== null && !Dc(); )
        Z1(In);
    }
    function Z1(e) {
      var t = e.alternate;
      Zt(e);
      var a;
      (e.mode & ut) !== at ? (FS(e), a = b0(t, e, Ju), Pm(e, !0)) : a = b0(t, e, Ju), jn(), e.memoizedProps = e.pendingProps, a === null ? J1(e) : In = a, d0.current = null;
    }
    function J1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ea) === Je) {
          Zt(t);
          var l = void 0;
          if ((t.mode & ut) === at ? l = R1(a, t, Ju) : (FS(t), l = R1(a, t, Ju), Pm(t, !1)), jn(), l !== null) {
            In = l;
            return;
          }
        } else {
          var s = Kw(a, t);
          if (s !== null) {
            s.flags &= qp, In = s;
            return;
          }
          if ((t.mode & ut) !== at) {
            Pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ea, i.subtreeFlags = Je, i.deletions = null;
          else {
            xr = v0, In = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          In = y;
          return;
        }
        t = i, In = t;
      } while (t !== null);
      xr === Bl && (xr = H1);
    }
    function uc(e, t, a) {
      var i = $a(), l = Xr.transition;
      try {
        Xr.transition = null, nr(Lr), Zx(e, t, a, i);
      } finally {
        Xr.transition = l, nr(i);
      }
      return null;
    }
    function Zx(e, t, a, i) {
      do
        Yl();
      while (Xo !== null);
      if (sO(), (jt & (Zr | Li)) !== br)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Lc(s), l === null)
        return zd(), null;
      if (s === J && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ut;
      var f = Ct(l.lanes, l.childLanes);
      Kd(e, f), e === xa && (xa = null, In = null, wr = J), ((l.subtreeFlags & Fa) !== Je || (l.flags & Fa) !== Je) && (ac || (ac = !0, g0 = a, O0(Ri, function() {
        return Yl(), null;
      })));
      var p = (l.subtreeFlags & (ho | la | Mr | Fa)) !== Je, y = (l.flags & (ho | la | Mr | Fa)) !== Je;
      if (p || y) {
        var C = Xr.transition;
        Xr.transition = null;
        var _ = $a();
        nr(Lr);
        var L = jt;
        jt |= Li, d0.current = null, Xw(e, l), GC(), fx(e, l, s), fT(e.containerInfo), e.current = l, ih(s), dx(l, e, s), yo(), Zp(), jt = L, nr(_), Xr.transition = C;
      } else
        e.current = l, GC();
      var k = ac;
      if (ac ? (ac = !1, Xo = e, ep = s) : (Wf = 0, qm = null), f = e.pendingLanes, f === J && (Kf = null), k || rR(e.current, !1), Yi(l.stateNode, i), Sr && e.memoizedUpdaters.clear(), Mx(), Xa(e, Ln()), t !== null)
        for (var V = e.onRecoverableError, I = 0; I < t.length; I++) {
          var X = t[I], je = X.stack, nt = X.digest;
          V(X.value, {
            componentStack: je,
            digest: nt
          });
        }
      if (Wm) {
        Wm = !1;
        var Ge = m0;
        throw m0 = null, Ge;
      }
      return fa(ep, lt) && e.tag !== Vo && Yl(), f = e.pendingLanes, fa(f, lt) ? (lw(), e === S0 ? tp++ : (tp = 0, S0 = e)) : tp = 0, Bo(), zd(), null;
    }
    function Yl() {
      if (Xo !== null) {
        var e = As(ep), t = $y(Qi, e), a = Xr.transition, i = $a();
        try {
          return Xr.transition = null, nr(t), eO();
        } finally {
          nr(i), Xr.transition = a;
        }
      }
      return !1;
    }
    function Jx(e) {
      y0.push(e), ac || (ac = !0, O0(Ri, function() {
        return Yl(), null;
      }));
    }
    function eO() {
      if (Xo === null)
        return !1;
      var e = g0;
      g0 = null;
      var t = Xo, a = ep;
      if (Xo = null, ep = J, (jt & (Zr | Li)) !== br)
        throw new Error("Cannot flush passive effects while already rendering.");
      E0 = !0, Qm = !1, uh(a);
      var i = jt;
      jt |= Li, Sx(t.current), hx(t, t.current, a, e);
      {
        var l = y0;
        y0 = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          tx(t, f);
        }
      }
      Ts(), rR(t.current, !0), jt = i, Bo(), Qm ? t === qm ? Wf++ : (Wf = 0, qm = t) : Wf = 0, E0 = !1, Qm = !1, Nu(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function eR(e) {
      return Kf !== null && Kf.has(e);
    }
    function tO(e) {
      Kf === null ? Kf = /* @__PURE__ */ new Set([e]) : Kf.add(e);
    }
    function nO(e) {
      Wm || (Wm = !0, m0 = e);
    }
    var rO = nO;
    function tR(e, t, a) {
      var i = tc(a, t), l = ZC(e, i, lt), s = Io(e, l, lt), f = Oa();
      s !== null && (bl(s, lt, f), Xa(s, f));
    }
    function Tn(e, t, a) {
      if (Qw(a), ip(!1), e.tag === N) {
        tR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === N) {
          tR(i, e, a);
          return;
        } else if (i.tag === B) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !eR(s)) {
            var f = tc(a, e), p = YS(i, f, lt), y = Io(i, p, lt), C = Oa();
            y !== null && (bl(y, lt, C), Xa(y, C));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function aO(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Oa();
      Yd(e, a), vO(e), xa === e && Tl(wr, a) && (xr === qv || xr === Im && ef(wr) && Ln() - h0 < V1 ? ic(e, J) : Km = Ct(Km, a)), Xa(e, l);
    }
    function nR(e, t) {
      t === Ut && (t = Px(e));
      var a = Oa(), i = Qa(e, t);
      i !== null && (bl(i, t, a), Xa(i, a));
    }
    function iO(e) {
      var t = e.memoizedState, a = Ut;
      t !== null && (a = t.retryLane), nR(e, a);
    }
    function uO(e, t) {
      var a = Ut, i;
      switch (e.tag) {
        case pe:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ye:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), nR(e, a);
    }
    function lO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Ax(e / 1960) * 1960;
    }
    function oO() {
      if (tp > Ux)
        throw tp = 0, S0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Wf > jx && (Wf = 0, qm = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function sO() {
      tu.flushLegacyContextWarning(), tu.flushPendingUnsafeLifecycleWarnings();
    }
    function rR(e, t) {
      Zt(e), ey(e, ua, Ox), t && ey(e, pl, Dx), ey(e, ua, wx), t && ey(e, pl, xx), jn();
    }
    function ey(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Je ? i = i.child : ((i.flags & t) !== Je && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ty = null;
    function aR(e) {
      {
        if ((jt & Zr) !== br || !(e.mode & Ot))
          return;
        var t = e.tag;
        if (t !== he && t !== N && t !== B && t !== H && t !== Ee && t !== Ve && t !== me)
          return;
        var a = ft(e) || "ReactComponent";
        if (ty !== null) {
          if (ty.has(a))
            return;
          ty.add(a);
        } else
          ty = /* @__PURE__ */ new Set([a]);
        var i = Mn;
        try {
          Zt(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Zt(e) : jn();
        }
      }
    }
    var b0;
    {
      var cO = null;
      b0 = function(e, t, a) {
        var i = dR(cO, t);
        try {
          return y1(e, t, a);
        } catch (s) {
          if (_b() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (um(), bC(), _1(e, t), dR(t, i), t.mode & ut && FS(t), vl(null, y1, null, e, t, a), Uy()) {
            var l = Td();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var iR = !1, w0;
    w0 = /* @__PURE__ */ new Set();
    function fO(e) {
      if (ta && !aw())
        switch (e.tag) {
          case H:
          case Ee:
          case me: {
            var t = In && ft(In) || "Unknown", a = t;
            if (!w0.has(a)) {
              w0.add(a);
              var i = ft(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case B: {
            iR || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), iR = !0);
            break;
          }
        }
    }
    function ap(e, t) {
      if (Sr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Wd(e, i, t);
        });
      }
    }
    var x0 = {};
    function O0(e, t) {
      {
        var a = su.current;
        return a !== null ? (a.push(t), x0) : Oc(e, t);
      }
    }
    function uR(e) {
      if (e !== x0)
        return Xp(e);
    }
    function lR() {
      return su.current !== null;
    }
    function dO(e) {
      {
        if (e.mode & Ot) {
          if (!P1())
            return;
        } else if (!Nx() || jt !== br || e.tag !== H && e.tag !== Ee && e.tag !== me)
          return;
        if (su.current === null) {
          var t = Mn;
          try {
            Zt(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ft(e));
          } finally {
            t ? Zt(e) : jn();
          }
        }
      }
    }
    function vO(e) {
      e.tag !== Vo && P1() && su.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ip(e) {
      I1 = e;
    }
    var Ni = null, Qf = null, pO = function(e) {
      Ni = e;
    };
    function qf(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        return t === void 0 ? e : t.current;
      }
    }
    function D0(e) {
      return qf(e);
    }
    function k0(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ue,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function oR(e, t) {
      {
        if (Ni === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case B: {
            typeof i == "function" && (l = !0);
            break;
          }
          case H: {
            (typeof i == "function" || s === tt) && (l = !0);
            break;
          }
          case Ee: {
            (s === Ue || s === tt) && (l = !0);
            break;
          }
          case Ve:
          case me: {
            (s === St || s === tt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = Ni(a);
          if (f !== void 0 && f === Ni(i))
            return !0;
        }
        return !1;
      }
    }
    function sR(e) {
      {
        if (Ni === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var hO = function(e, t) {
      {
        if (Ni === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yl(), Il(function() {
          M0(e.current, i, a);
        });
      }
    }, mO = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Yl(), Il(function() {
          up(t, e, null, null);
        });
      }
    };
    function M0(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, y = null;
        switch (f) {
          case H:
          case me:
          case B:
            y = p;
            break;
          case Ee:
            y = p.render;
            break;
        }
        if (Ni === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, _ = !1;
        if (y !== null) {
          var L = Ni(y);
          L !== void 0 && (a.has(L) ? _ = !0 : t.has(L) && (f === B ? _ = !0 : C = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || C) {
          var k = Qa(e, lt);
          k !== null && Or(k, e, lt, vn);
        }
        l !== null && !_ && M0(l, t, a), s !== null && M0(s, t, a);
      }
    }
    var yO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return L0(e.current, i, a), a;
      }
    };
    function L0(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case H:
          case me:
          case B:
            p = f;
            break;
          case Ee:
            p = f.render;
            break;
        }
        var y = !1;
        p !== null && t.has(p) && (y = !0), y ? gO(e, a) : i !== null && L0(i, t, a), l !== null && L0(l, t, a);
      }
    }
    function gO(e, t) {
      {
        var a = SO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Y:
              t.add(i.stateNode);
              return;
            case P:
              t.add(i.stateNode.containerInfo);
              return;
            case N:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function SO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Y)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var N0;
    {
      N0 = !1;
      try {
        var cR = Object.preventExtensions({});
      } catch {
        N0 = !0;
      }
    }
    function EO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Je, this.subtreeFlags = Je, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !N0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new EO(e, t, a, i);
    };
    function A0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function CO(e) {
      return typeof e == "function" && !A0(e) && e.defaultProps === void 0;
    }
    function RO(e) {
      if (typeof e == "function")
        return A0(e) ? B : H;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ue)
          return Ee;
        if (t === St)
          return Ve;
      }
      return he;
    }
    function lc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Je, a.subtreeFlags = Je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & gr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case he:
        case H:
        case me:
          a.type = qf(e.type);
          break;
        case B:
          a.type = D0(e.type);
          break;
        case Ee:
          a.type = k0(e.type);
          break;
      }
      return a;
    }
    function _O(e, t) {
      e.flags &= gr | En;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = Je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function TO(e, t, a) {
      var i;
      return e === Zh ? (i = Ot, t === !0 && (i |= Nn, i |= Va)) : i = at, Sr && (i |= ut), fi(N, null, null, i);
    }
    function z0(e, t, a, i, l, s) {
      var f = he, p = e;
      if (typeof e == "function")
        A0(e) ? (f = B, p = D0(p)) : p = qf(p);
      else if (typeof e == "string")
        f = Y;
      else {
        e:
          switch (e) {
            case Sa:
              return es(a.children, l, s, t);
            case hi:
              f = ee, l |= Nn, (l & Ot) !== at && (l |= Va);
              break;
            case x:
              return bO(a, l, s, t);
            case mt:
              return wO(a, l, s, t);
            case zt:
              return xO(a, l, s, t);
            case mn:
              return fR(a, l, s, t);
            case yr:
            case Wn:
            case mi:
            case ql:
            case hn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ce:
                    f = ue;
                    break e;
                  case Oe:
                    f = de;
                    break e;
                  case Ue:
                    f = Ee, p = k0(p);
                    break e;
                  case St:
                    f = Ve;
                    break e;
                  case tt:
                    f = Xe, p = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? ft(i) : null;
                C && (y += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      }
      var _ = fi(f, a, t, l);
      return _.elementType = e, _.type = p, _.lanes = s, _._debugOwner = i, _;
    }
    function U0(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = z0(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function es(e, t, a, i) {
      var l = fi(oe, e, i, t);
      return l.lanes = a, l;
    }
    function bO(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = fi(be, e, i, t | ut);
      return l.elementType = x, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function wO(e, t, a, i) {
      var l = fi(pe, e, i, t);
      return l.elementType = mt, l.lanes = a, l;
    }
    function xO(e, t, a, i) {
      var l = fi(ye, e, i, t);
      return l.elementType = zt, l.lanes = a, l;
    }
    function fR(e, t, a, i) {
      var l = fi(re, e, i, t);
      l.elementType = mn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function j0(e, t, a) {
      var i = fi(q, e, null, t);
      return i.lanes = a, i;
    }
    function OO() {
      var e = fi(Y, null, null, at);
      return e.elementType = "DELETED", e;
    }
    function DO(e) {
      var t = fi(se, null, null, at);
      return t.stateNode = e, t;
    }
    function P0(e, t, a) {
      var i = e.children !== null ? e.children : [], l = fi(P, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function dR(e, t) {
      return e === null && (e = fi(he, null, null, at)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function kO(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ut, this.eventTimes = nf(J), this.expirationTimes = nf(vn), this.pendingLanes = J, this.suspendedLanes = J, this.pingedLanes = J, this.expiredLanes = J, this.mutableReadLanes = J, this.finishedLanes = J, this.entangledLanes = J, this.entanglements = nf(J), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Rn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Vo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function vR(e, t, a, i, l, s, f, p, y, C) {
      var _ = new kO(e, t, a, p, y), L = TO(t, s);
      _.current = L, L.stateNode = _;
      {
        var k = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = k;
      }
      return Kg(L), _;
    }
    var F0 = "18.2.0";
    function MO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return bt(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var H0, V0;
    H0 = !1, V0 = {};
    function pR(e) {
      if (!e)
        return ci;
      var t = Ua(e), a = pb(t);
      if (t.tag === B) {
        var i = t.type;
        if (Ku(i))
          return HE(t, i, a);
      }
      return a;
    }
    function LO(e, t) {
      {
        var a = Ua(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Ha(a);
        if (l === null)
          return null;
        if (l.mode & Nn) {
          var s = ft(a) || "Component";
          if (!V0[s]) {
            V0[s] = !0;
            var f = Mn;
            try {
              Zt(l), a.mode & Nn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Zt(f) : jn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function hR(e, t, a, i, l, s, f, p) {
      var y = !1, C = null;
      return vR(e, t, y, C, a, i, l, s, f);
    }
    function mR(e, t, a, i, l, s, f, p, y, C) {
      var _ = !0, L = vR(a, i, _, e, l, s, f, p, y);
      L.context = pR(null);
      var k = L.current, V = Oa(), I = Zo(k), X = Hl(V, I);
      return X.callback = t ?? null, Io(k, X, I), Fx(L, I, V), L;
    }
    function up(e, t, a, i) {
      Jp(t, e);
      var l = t.current, s = Oa(), f = Zo(l);
      ml(f);
      var p = pR(a);
      t.context === null ? t.context = p : t.pendingContext = p, ta && Mn !== null && !H0 && (H0 = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ft(Mn) || "Unknown"));
      var y = Hl(s, f);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = Io(l, y, f);
      return C !== null && (Or(C, l, f, s), fm(C, l, f)), f;
    }
    function ny(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Y:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function NO(e) {
      switch (e.tag) {
        case N: {
          var t = e.stateNode;
          if (rr(t)) {
            var a = Fy(t);
            $x(t, a);
          }
          break;
        }
        case pe: {
          Il(function() {
            var l = Qa(e, lt);
            if (l !== null) {
              var s = Oa();
              Or(l, e, lt, s);
            }
          });
          var i = lt;
          B0(e, i);
          break;
        }
      }
    }
    function yR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = fh(a.retryLane, t));
    }
    function B0(e, t) {
      yR(e, t);
      var a = e.alternate;
      a && yR(a, t);
    }
    function AO(e) {
      if (e.tag === pe) {
        var t = So, a = Qa(e, t);
        if (a !== null) {
          var i = Oa();
          Or(a, e, t, i);
        }
        B0(e, t);
      }
    }
    function zO(e) {
      if (e.tag === pe) {
        var t = Zo(e), a = Qa(e, t);
        if (a !== null) {
          var i = Oa();
          Or(a, e, t, i);
        }
        B0(e, t);
      }
    }
    function gR(e) {
      var t = Gp(e);
      return t === null ? null : t.stateNode;
    }
    var SR = function(e) {
      return null;
    };
    function UO(e) {
      return SR(e);
    }
    var ER = function(e) {
      return !1;
    };
    function jO(e) {
      return ER(e);
    }
    var CR = null, RR = null, _R = null, TR = null, bR = null, wR = null, xR = null, OR = null, DR = null;
    {
      var kR = function(e, t, a) {
        var i = t[a], l = Lt(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (Lt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = kR(e[i], t, a + 1), l);
      }, MR = function(e, t) {
        return kR(e, t, 0);
      }, LR = function(e, t, a, i) {
        var l = t[i], s = Lt(e) ? e.slice() : wt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Lt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = LR(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, NR = function(e, t, a) {
        if (t.length !== a.length) {
          A("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              A("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return LR(e, t, a, 0);
      }, AR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Lt(e) ? e.slice() : wt({}, e);
        return s[l] = AR(e[l], t, a + 1, i), s;
      }, zR = function(e, t, a) {
        return AR(e, t, 0, a);
      }, $0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      CR = function(e, t, a, i) {
        var l = $0(e, t);
        if (l !== null) {
          var s = zR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var f = Qa(e, lt);
          f !== null && Or(f, e, lt, vn);
        }
      }, RR = function(e, t, a) {
        var i = $0(e, t);
        if (i !== null) {
          var l = MR(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = wt({}, e.memoizedProps);
          var s = Qa(e, lt);
          s !== null && Or(s, e, lt, vn);
        }
      }, _R = function(e, t, a, i) {
        var l = $0(e, t);
        if (l !== null) {
          var s = NR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var f = Qa(e, lt);
          f !== null && Or(f, e, lt, vn);
        }
      }, TR = function(e, t, a) {
        e.pendingProps = zR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, lt);
        i !== null && Or(i, e, lt, vn);
      }, bR = function(e, t) {
        e.pendingProps = MR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, lt);
        a !== null && Or(a, e, lt, vn);
      }, wR = function(e, t, a) {
        e.pendingProps = NR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, lt);
        i !== null && Or(i, e, lt, vn);
      }, xR = function(e) {
        var t = Qa(e, lt);
        t !== null && Or(t, e, lt, vn);
      }, OR = function(e) {
        SR = e;
      }, DR = function(e) {
        ER = e;
      };
    }
    function PO(e) {
      var t = Ha(e);
      return t === null ? null : t.stateNode;
    }
    function FO(e) {
      return null;
    }
    function HO() {
      return Mn;
    }
    function VO(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return Nd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: CR,
        overrideHookStateDeletePath: RR,
        overrideHookStateRenamePath: _R,
        overrideProps: TR,
        overridePropsDeletePath: bR,
        overridePropsRenamePath: wR,
        setErrorHandler: OR,
        setSuspenseHandler: DR,
        scheduleUpdate: xR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: PO,
        findFiberByHostInstance: t || FO,
        // React Refresh
        findHostInstancesForRefresh: yO,
        scheduleRefresh: hO,
        scheduleRoot: mO,
        setRefreshHandler: pO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: HO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: F0
      });
    }
    var UR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function I0(e) {
      this._internalRoot = e;
    }
    ry.prototype.render = I0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ay(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Qn) {
          var i = gR(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      up(e, t, null, null);
    }, ry.prototype.unmount = I0.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Q1() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Il(function() {
          up(null, e, null, null);
        }), zE(t);
      }
    };
    function BO(e, t) {
      if (!ay(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      jR(e);
      var a = !1, i = !1, l = "", s = UR;
      t != null && (t.hydrate ? A("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === pi && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = hR(e, Zh, null, a, i, l, s);
      Yh(f.current, e);
      var p = e.nodeType === Qn ? e.parentNode : e;
      return pv(p), new I0(f);
    }
    function ry(e) {
      this._internalRoot = e;
    }
    function $O(e) {
      e && Sh(e);
    }
    ry.prototype.unstable_scheduleHydration = $O;
    function IO(e, t, a) {
      if (!ay(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      jR(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", y = UR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = mR(t, null, e, Zh, i, s, f, p, y);
      if (Yh(C.current, e), pv(e), l)
        for (var _ = 0; _ < l.length; _++) {
          var L = l[_];
          Zb(C, L);
        }
      return new ry(C);
    }
    function ay(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === ii || e.nodeType === ll || !we));
    }
    function lp(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === ii || e.nodeType === ll || e.nodeType === Qn && e.nodeValue === " react-mount-point-unstable "));
    }
    function jR(e) {
      e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), bv(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var YO = h.ReactCurrentOwner, PR;
    PR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Qn) {
        var t = gR(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Y0(e), l = !!(i && Fo(i));
      l && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Y0(e) {
      return e ? e.nodeType === ii ? e.documentElement : e.firstChild : null;
    }
    function FR() {
    }
    function KO(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = ny(f);
            s.call(k);
          };
        }
        var f = mR(
          t,
          i,
          e,
          Vo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FR
        );
        e._reactRootContainer = f, Yh(f.current, e);
        var p = e.nodeType === Qn ? e.parentNode : e;
        return pv(p), Il(), f;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var k = ny(_);
            C.call(k);
          };
        }
        var _ = hR(
          e,
          Vo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FR
        );
        e._reactRootContainer = _, Yh(_.current, e);
        var L = e.nodeType === Qn ? e.parentNode : e;
        return pv(L), Il(function() {
          up(t, _, a, i);
        }), _;
      }
    }
    function WO(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function iy(e, t, a, i, l) {
      PR(a), WO(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = KO(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var y = ny(f);
            p.call(y);
          };
        }
        up(t, f, e, l);
      }
      return ny(f);
    }
    function QO(e) {
      {
        var t = YO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Vt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ra ? e : LO(e, "findDOMNode");
    }
    function qO(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bv(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return iy(null, e, t, !0, a);
    }
    function GO(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bv(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return iy(null, e, t, !1, a);
    }
    function XO(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Cs(e))
        throw new Error("parentComponent must be a valid React Component");
      return iy(e, t, a, !1, i);
    }
    function ZO(e) {
      if (!lp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = bv(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Y0(e), i = a && !Fo(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Il(function() {
          iy(null, null, e, !1, function() {
            e._reactRootContainer = null, zE(e);
          });
        }), !0;
      } else {
        {
          var l = Y0(e), s = !!(l && Fo(l)), f = e.nodeType === ra && lp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    He(NO), vh(AO), Us(zO), Gd($a), hh(Ns), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Wp(tT), _c(R0, Ix, Il);
    function JO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ay(t))
        throw new Error("Target container is not a DOM element.");
      return MO(e, t, null, a);
    }
    function eD(e, t, a, i) {
      return XO(e, t, a, i);
    }
    var K0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Fo, wf, Kh, Rc, gs, R0]
    };
    function tD(e, t) {
      return K0.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), BO(e, t);
    }
    function nD(e, t, a) {
      return K0.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), IO(e, t, a);
    }
    function rD(e) {
      return Q1() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Il(e);
    }
    var aD = VO({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: F0,
      rendererPackageName: "react-dom"
    });
    if (!aD && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var HR = window.location.protocol;
      /^(https?|file):$/.test(HR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (HR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0, Ja.createPortal = JO, Ja.createRoot = tD, Ja.findDOMNode = QO, Ja.flushSync = rD, Ja.hydrate = qO, Ja.hydrateRoot = nD, Ja.render = GO, Ja.unmountComponentAtNode = ZO, Ja.unstable_batchedUpdates = R0, Ja.unstable_renderSubtreeIntoContainer = eD, Ja.version = F0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ja;
}
(function(v) {
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ({}.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (h) {
        console.error(h);
      }
    }
  }
  ({}).NODE_ENV === "production" ? (m(), v.exports = gD()) : v.exports = SD();
})(pD);
const ED = /* @__PURE__ */ u_(cy);
var fp = cy;
if ({}.NODE_ENV === "production")
  hp.createRoot = fp.createRoot, hp.hydrateRoot = fp.hydrateRoot;
else {
  var uy = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hp.createRoot = function(v, m) {
    uy.usingClientEntryPoint = !0;
    try {
      return fp.createRoot(v, m);
    } finally {
      uy.usingClientEntryPoint = !1;
    }
  }, hp.hydrateRoot = function(v, m, h) {
    uy.usingClientEntryPoint = !0;
    try {
      return fp.hydrateRoot(v, m, h);
    } finally {
      uy.usingClientEntryPoint = !1;
    }
  };
}
var nl = {}, tn = {}, J0 = ie && ie.__assign || function() {
  return J0 = Object.assign || function(v) {
    for (var m, h = 1, R = arguments.length; h < R; h++) {
      m = arguments[h];
      for (var O in m)
        Object.prototype.hasOwnProperty.call(m, O) && (v[O] = m[O]);
    }
    return v;
  }, J0.apply(this, arguments);
}, CD = ie && ie.__createBinding || (Object.create ? function(v, m, h, R) {
  R === void 0 && (R = h), Object.defineProperty(v, R, { enumerable: !0, get: function() {
    return m[h];
  } });
} : function(v, m, h, R) {
  R === void 0 && (R = h), v[R] = m[h];
}), RD = ie && ie.__setModuleDefault || (Object.create ? function(v, m) {
  Object.defineProperty(v, "default", { enumerable: !0, value: m });
} : function(v, m) {
  v.default = m;
}), _D = ie && ie.__importStar || function(v) {
  if (v && v.__esModule)
    return v;
  var m = {};
  if (v != null)
    for (var h in v)
      h !== "default" && Object.prototype.hasOwnProperty.call(v, h) && CD(m, v, h);
  return RD(m, v), m;
}, TD = ie && ie.__spreadArray || function(v, m, h) {
  if (h || arguments.length === 2)
    for (var R = 0, O = m.length, A; R < O; R++)
      (A || !(R in m)) && (A || (A = Array.prototype.slice.call(m, 0, R)), A[R] = m[R]);
  return v.concat(A || Array.prototype.slice.call(m));
};
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.Priority = tn.isModKey = tn.shouldRejectKeystrokes = tn.useThrottledValue = tn.getScrollbarWidth = tn.useIsomorphicLayout = tn.noop = tn.createAction = tn.randomId = tn.usePointerMovedSinceMount = tn.useOuterClick = tn.swallowEvent = void 0;
var ns = _D(Tt);
function bD(v) {
  v.stopPropagation(), v.preventDefault();
}
tn.swallowEvent = bD;
function wD(v, m) {
  var h = ns.useRef(m);
  h.current = m, ns.useEffect(function() {
    function R(O) {
      var A, E;
      !((A = v.current) === null || A === void 0) && A.contains(O.target) || // Add support for ReactShadowRoot
      // @ts-expect-error wrong types, the `host` property exists https://stackoverflow.com/a/25340456
      O.target === ((E = v.current) === null || E === void 0 ? void 0 : E.getRootNode().host) || (O.preventDefault(), O.stopPropagation(), h.current());
    }
    return window.addEventListener("pointerdown", R, !0), function() {
      return window.removeEventListener("pointerdown", R, !0);
    };
  }, [v]);
}
tn.useOuterClick = wD;
function xD() {
  var v = ns.useState(!1), m = v[0], h = v[1];
  return ns.useEffect(function() {
    function R() {
      h(!0);
    }
    if (!m)
      return window.addEventListener("pointermove", R), function() {
        return window.removeEventListener("pointermove", R);
      };
  }, [m]), m;
}
tn.usePointerMovedSinceMount = xD;
function s_() {
  return Math.random().toString(36).substring(2, 9);
}
tn.randomId = s_;
function OD(v) {
  return J0({ id: s_() }, v);
}
tn.createAction = OD;
function c_() {
}
tn.noop = c_;
tn.useIsomorphicLayout = typeof window > "u" ? c_ : ns.useLayoutEffect;
function DD() {
  var v = document.createElement("div");
  v.style.visibility = "hidden", v.style.overflow = "scroll", document.body.appendChild(v);
  var m = document.createElement("div");
  v.appendChild(m);
  var h = v.offsetWidth - m.offsetWidth;
  return v.parentNode.removeChild(v), h;
}
tn.getScrollbarWidth = DD;
function kD(v, m) {
  m === void 0 && (m = 100);
  var h = ns.useState(v), R = h[0], O = h[1], A = ns.useRef(Date.now());
  return ns.useEffect(function() {
    if (m !== 0) {
      var E = setTimeout(function() {
        O(v), A.current = Date.now();
      }, A.current - (Date.now() - m));
      return function() {
        clearTimeout(E);
      };
    }
  }, [m, v]), m === 0 ? v : R;
}
tn.useThrottledValue = kD;
function MD(v) {
  var m, h, R = v === void 0 ? { ignoreWhenFocused: [] } : v, O = R.ignoreWhenFocused, A = TD(["input", "textarea"], O, !0).map(function(H) {
    return H.toLowerCase();
  }), E = document.activeElement, W = E && (A.indexOf(E.tagName.toLowerCase()) !== -1 || ((m = E.attributes.getNamedItem("role")) === null || m === void 0 ? void 0 : m.value) === "textbox" || ((h = E.attributes.getNamedItem("contenteditable")) === null || h === void 0 ? void 0 : h.value) === "true");
  return W;
}
tn.shouldRejectKeystrokes = MD;
var LD = typeof window > "u", ND = !LD && window.navigator.platform === "MacIntel";
function AD(v) {
  return ND ? v.metaKey : v.ctrlKey;
}
tn.isModKey = AD;
tn.Priority = {
  HIGH: 1,
  NORMAL: 0,
  LOW: -1
};
var f_ = {}, dp = {}, q0 = {}, hy = {}, dy = {}, zD = {
  get exports() {
    return dy;
  },
  set exports(v) {
    dy = v;
  }
};
(function(v, m) {
  (function(h, R) {
    R(m);
  })(ie, function(h) {
    var R = typeof WeakSet == "function", O = Object.keys;
    function A(se, ye) {
      return se === ye || se !== se && ye !== ye;
    }
    function E(se) {
      return se.constructor === Object || se.constructor == null;
    }
    function W(se) {
      return !!se && typeof se.then == "function";
    }
    function H(se) {
      return !!(se && se.$$typeof);
    }
    function B() {
      var se = [];
      return {
        add: function(ye) {
          se.push(ye);
        },
        has: function(ye) {
          return se.indexOf(ye) !== -1;
        }
      };
    }
    var he = function(se) {
      return se ? function() {
        return /* @__PURE__ */ new WeakSet();
      } : B;
    }(R);
    function N(se) {
      return function(Fe) {
        var re = se || Fe;
        return function(Le, _e, le) {
          le === void 0 && (le = he());
          var te = !!Le && typeof Le == "object", xe = !!_e && typeof _e == "object";
          if (te || xe) {
            var b = te && le.has(Le), G = xe && le.has(_e);
            if (b || G)
              return b && G;
            te && le.add(Le), xe && le.add(_e);
          }
          return re(Le, _e, le);
        };
      };
    }
    function P(se, ye, Fe, re) {
      var ae = se.length;
      if (ye.length !== ae)
        return !1;
      for (; ae-- > 0; )
        if (!Fe(se[ae], ye[ae], re))
          return !1;
      return !0;
    }
    function Y(se, ye, Fe, re) {
      var ae = se.size === ye.size;
      if (ae && se.size) {
        var Le = {};
        se.forEach(function(_e, le) {
          if (ae) {
            var te = !1, xe = 0;
            ye.forEach(function(b, G) {
              !te && !Le[xe] && (te = Fe(le, G, re) && Fe(_e, b, re), te && (Le[xe] = !0)), xe++;
            }), ae = te;
          }
        });
      }
      return ae;
    }
    var q = "_owner", oe = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
    function ee(se, ye, Fe, re) {
      var ae = O(se), Le = ae.length;
      if (O(ye).length !== Le)
        return !1;
      if (Le)
        for (var _e = void 0; Le-- > 0; ) {
          if (_e = ae[Le], _e === q) {
            var le = H(se), te = H(ye);
            if ((le || te) && le !== te)
              return !1;
          }
          if (!oe(ye, _e) || !Fe(se[_e], ye[_e], re))
            return !1;
        }
      return !0;
    }
    function de(se, ye) {
      return se.source === ye.source && se.global === ye.global && se.ignoreCase === ye.ignoreCase && se.multiline === ye.multiline && se.unicode === ye.unicode && se.sticky === ye.sticky && se.lastIndex === ye.lastIndex;
    }
    function ue(se, ye, Fe, re) {
      var ae = se.size === ye.size;
      if (ae && se.size) {
        var Le = {};
        se.forEach(function(_e) {
          if (ae) {
            var le = !1, te = 0;
            ye.forEach(function(xe) {
              !le && !Le[te] && (le = Fe(_e, xe, re), le && (Le[te] = !0)), te++;
            }), ae = le;
          }
        });
      }
      return ae;
    }
    var Ee = typeof Map == "function", be = typeof Set == "function";
    function pe(se) {
      var ye = (
        /* eslint-disable no-use-before-define */
        typeof se == "function" ? se(Fe) : Fe
      );
      function Fe(re, ae, Le) {
        if (re === ae)
          return !0;
        if (re && ae && typeof re == "object" && typeof ae == "object") {
          if (E(re) && E(ae))
            return ee(re, ae, ye, Le);
          var _e = Array.isArray(re), le = Array.isArray(ae);
          return _e || le ? _e === le && P(re, ae, ye, Le) : (_e = re instanceof Date, le = ae instanceof Date, _e || le ? _e === le && A(re.getTime(), ae.getTime()) : (_e = re instanceof RegExp, le = ae instanceof RegExp, _e || le ? _e === le && de(re, ae) : W(re) || W(ae) ? re === ae : Ee && (_e = re instanceof Map, le = ae instanceof Map, _e || le) ? _e === le && Y(re, ae, ye, Le) : be && (_e = re instanceof Set, le = ae instanceof Set, _e || le) ? _e === le && ue(re, ae, ye, Le) : ee(re, ae, ye, Le)));
        }
        return re !== re && ae !== ae;
      }
      return Fe;
    }
    var Ve = pe(), me = pe(function() {
      return A;
    }), Xe = pe(N()), Ye = pe(N(A));
    h.circularDeepEqual = Xe, h.circularShallowEqual = Ye, h.createCustomEqual = pe, h.deepEqual = Ve, h.sameValueZeroEqual = A, h.shallowEqual = me, Object.defineProperty(h, "__esModule", { value: !0 });
  });
})(zD, dy);
var UD = {}.NODE_ENV === "production", G0 = "Invariant failed";
function jD(v, m) {
  if (!v) {
    if (UD)
      throw new Error(G0);
    var h = typeof m == "function" ? m() : m, R = h ? "".concat(G0, ": ").concat(h) : G0;
    throw new Error(R);
  }
}
var aE = jD, Sp = {}, Ep = {}, my = {};
Object.defineProperty(my, "__esModule", { value: !0 });
my.Command = void 0;
var PD = (
  /** @class */
  function() {
    function v(m, h) {
      var R = this;
      h === void 0 && (h = {}), this.perform = function() {
        var O = m.perform();
        if (typeof O == "function") {
          var A = h.history;
          A && (R.historyItem && A.remove(R.historyItem), R.historyItem = A.add({
            perform: m.perform,
            negate: O
          }), R.history = {
            undo: function() {
              return A.undo(R.historyItem);
            },
            redo: function() {
              return A.redo(R.historyItem);
            }
          });
        }
      };
    }
    return v;
  }()
);
my.Command = PD;
var FD = ie && ie.__importDefault || function(v) {
  return v && v.__esModule ? v : { default: v };
};
Object.defineProperty(Ep, "__esModule", { value: !0 });
Ep.ActionImpl = void 0;
var HD = FD(aE), VD = my, BD = tn, $D = function(v) {
  var m = v.keywords, h = m === void 0 ? "" : m, R = v.section, O = R === void 0 ? "" : R;
  return (h + " " + (typeof O == "string" ? O : O.name)).trim();
}, ID = (
  /** @class */
  function() {
    function v(m, h) {
      var R = this, O;
      this.priority = BD.Priority.NORMAL, this.ancestors = [], this.children = [], Object.assign(this, m), this.id = m.id, this.name = m.name, this.keywords = $D(m);
      var A = m.perform;
      if (this.command = A && new VD.Command({
        perform: function() {
          return A(R);
        }
      }, {
        history: h.history
      }), this.perform = (O = this.command) === null || O === void 0 ? void 0 : O.perform, m.parent) {
        var E = h.store[m.parent];
        (0, HD.default)(E, "attempted to create an action whos parent: " + m.parent + " does not exist in the store."), E.addChild(this);
      }
    }
    return v.prototype.addChild = function(m) {
      m.ancestors.unshift(this);
      for (var h = this.parentActionImpl; h; )
        m.ancestors.unshift(h), h = h.parentActionImpl;
      this.children.push(m);
    }, v.prototype.removeChild = function(m) {
      var h = this, R = this.children.indexOf(m);
      R !== -1 && this.children.splice(R, 1), m.children && m.children.forEach(function(O) {
        h.removeChild(O);
      });
    }, Object.defineProperty(v.prototype, "parentActionImpl", {
      // easily access parentActionImpl after creation
      get: function() {
        return this.ancestors[this.ancestors.length - 1];
      },
      enumerable: !1,
      configurable: !0
    }), v.create = function(m, h) {
      return new v(m, h);
    }, v;
  }()
);
Ep.ActionImpl = ID;
var vy = ie && ie.__assign || function() {
  return vy = Object.assign || function(v) {
    for (var m, h = 1, R = arguments.length; h < R; h++) {
      m = arguments[h];
      for (var O in m)
        Object.prototype.hasOwnProperty.call(m, O) && (v[O] = m[O]);
    }
    return v;
  }, vy.apply(this, arguments);
}, YD = ie && ie.__importDefault || function(v) {
  return v && v.__esModule ? v : { default: v };
};
Object.defineProperty(Sp, "__esModule", { value: !0 });
Sp.ActionInterface = void 0;
var KD = YD(aE), WD = Ep, QD = (
  /** @class */
  function() {
    function v(m, h) {
      m === void 0 && (m = []), h === void 0 && (h = {}), this.actions = {}, this.options = h, this.add(m);
    }
    return v.prototype.add = function(m) {
      for (var h = 0; h < m.length; h++) {
        var R = m[h];
        R.parent && (0, KD.default)(this.actions[R.parent], 'Attempted to create action "' + R.name + '" without registering its parent "' + R.parent + '" first.'), this.actions[R.id] = WD.ActionImpl.create(R, {
          history: this.options.historyManager,
          store: this.actions
        });
      }
      return vy({}, this.actions);
    }, v.prototype.remove = function(m) {
      var h = this;
      return m.forEach(function(R) {
        var O = h.actions[R.id];
        if (O) {
          for (var A = O.children; A.length; ) {
            var E = A.pop();
            if (!E)
              return;
            delete h.actions[E.id], E.parentActionImpl && E.parentActionImpl.removeChild(E), E.children && A.push.apply(A, E.children);
          }
          O.parentActionImpl && O.parentActionImpl.removeChild(O), delete h.actions[R.id];
        }
      }), vy({}, this.actions);
    }, v;
  }()
);
Sp.ActionInterface = QD;
var Zf = {};
Object.defineProperty(Zf, "__esModule", { value: !0 });
Zf.history = Zf.HistoryItemImpl = void 0;
var qD = tn, d_ = (
  /** @class */
  function() {
    function v(m) {
      this.perform = m.perform, this.negate = m.negate;
    }
    return v.create = function(m) {
      return new v(m);
    }, v;
  }()
);
Zf.HistoryItemImpl = d_;
var GD = (
  /** @class */
  function() {
    function v() {
      return this.undoStack = [], this.redoStack = [], v.instance || (v.instance = this, this.init()), v.instance;
    }
    return v.prototype.init = function() {
      var m = this;
      typeof window > "u" || window.addEventListener("keydown", function(h) {
        var R;
        if (!(!m.redoStack.length && !m.undoStack.length || (0, qD.shouldRejectKeystrokes)())) {
          var O = (R = h.key) === null || R === void 0 ? void 0 : R.toLowerCase();
          h.metaKey && O === "z" && h.shiftKey ? m.redo() : h.metaKey && O === "z" && m.undo();
        }
      });
    }, v.prototype.add = function(m) {
      var h = d_.create(m);
      return this.undoStack.push(h), h;
    }, v.prototype.remove = function(m) {
      var h = this.undoStack.findIndex(function(O) {
        return O === m;
      });
      if (h !== -1) {
        this.undoStack.splice(h, 1);
        return;
      }
      var R = this.redoStack.findIndex(function(O) {
        return O === m;
      });
      R !== -1 && this.redoStack.splice(R, 1);
    }, v.prototype.undo = function(m) {
      if (!m) {
        var h = this.undoStack.pop();
        return h ? (h == null || h.negate(), this.redoStack.push(h), h) : void 0;
      }
      var R = this.undoStack.findIndex(function(O) {
        return O === m;
      });
      if (R !== -1)
        return this.undoStack.splice(R, 1), m.negate(), this.redoStack.push(m), m;
    }, v.prototype.redo = function(m) {
      if (!m) {
        var h = this.redoStack.pop();
        return h ? (h == null || h.perform(), this.undoStack.push(h), h) : void 0;
      }
      var R = this.redoStack.findIndex(function(O) {
        return O === m;
      });
      if (R !== -1)
        return this.redoStack.splice(R, 1), m.perform(), this.undoStack.push(m), m;
    }, v.prototype.reset = function() {
      this.undoStack.splice(0), this.redoStack.splice(0);
    }, v;
  }()
), v_ = new GD();
Zf.history = v_;
Object.freeze(v_);
var sc = {};
(function(v) {
  Object.defineProperty(v, "__esModule", { value: !0 }), v.VisualState = void 0, function(m) {
    m.animatingIn = "animating-in", m.showing = "showing", m.animatingOut = "animating-out", m.hidden = "hidden";
  }(v.VisualState || (v.VisualState = {}));
})(sc);
var Pr = ie && ie.__assign || function() {
  return Pr = Object.assign || function(v) {
    for (var m, h = 1, R = arguments.length; h < R; h++) {
      m = arguments[h];
      for (var O in m)
        Object.prototype.hasOwnProperty.call(m, O) && (v[O] = m[O]);
    }
    return v;
  }, Pr.apply(this, arguments);
}, XD = ie && ie.__createBinding || (Object.create ? function(v, m, h, R) {
  R === void 0 && (R = h), Object.defineProperty(v, R, { enumerable: !0, get: function() {
    return m[h];
  } });
} : function(v, m, h, R) {
  R === void 0 && (R = h), v[R] = m[h];
}), ZD = ie && ie.__setModuleDefault || (Object.create ? function(v, m) {
  Object.defineProperty(v, "default", { enumerable: !0, value: m });
} : function(v, m) {
  v.default = m;
}), JD = ie && ie.__importStar || function(v) {
  if (v && v.__esModule)
    return v;
  var m = {};
  if (v != null)
    for (var h in v)
      h !== "default" && Object.prototype.hasOwnProperty.call(v, h) && XD(m, v, h);
  return ZD(m, v), m;
}, ek = ie && ie.__importDefault || function(v) {
  return v && v.__esModule ? v : { default: v };
};
Object.defineProperty(hy, "__esModule", { value: !0 });
hy.useStore = void 0;
var tk = dy, tl = JD(Tt), nk = ek(aE), rk = Sp, ak = Zf, vp = sc;
function ik(v) {
  var m = tl.useRef(Pr({ animations: {
    enterMs: 200,
    exitMs: 100
  } }, v.options)), h = tl.useMemo(
    function() {
      return new rk.ActionInterface(v.actions || [], {
        historyManager: m.current.enableHistory ? ak.history : void 0
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), R = tl.useState({
    searchQuery: "",
    currentRootActionId: null,
    visualState: vp.VisualState.hidden,
    actions: Pr({}, h.actions),
    activeIndex: 0
  }), O = R[0], A = R[1], E = tl.useRef(O);
  E.current = O;
  var W = tl.useCallback(function() {
    return E.current;
  }, []), H = tl.useMemo(function() {
    return new uk(W);
  }, [W]);
  tl.useEffect(function() {
    E.current = O, H.notify();
  }, [O, H]);
  var B = tl.useCallback(function(N) {
    return A(function(P) {
      return Pr(Pr({}, P), { actions: h.add(N) });
    }), function() {
      A(function(Y) {
        return Pr(Pr({}, Y), { actions: h.remove(N) });
      });
    };
  }, [h]), he = tl.useRef(null);
  return tl.useMemo(function() {
    return {
      getState: W,
      query: {
        setCurrentRootAction: function(N) {
          A(function(P) {
            return Pr(Pr({}, P), { currentRootActionId: N });
          });
        },
        setVisualState: function(N) {
          A(function(P) {
            return Pr(Pr({}, P), { visualState: typeof N == "function" ? N(P.visualState) : N });
          });
        },
        setSearch: function(N) {
          return A(function(P) {
            return Pr(Pr({}, P), { searchQuery: N });
          });
        },
        registerActions: B,
        toggle: function() {
          return A(function(N) {
            return Pr(Pr({}, N), { visualState: [
              vp.VisualState.animatingOut,
              vp.VisualState.hidden
            ].includes(N.visualState) ? vp.VisualState.animatingIn : vp.VisualState.animatingOut });
          });
        },
        setActiveIndex: function(N) {
          return A(function(P) {
            return Pr(Pr({}, P), { activeIndex: typeof N == "number" ? N : N(P.activeIndex) });
          });
        },
        inputRefSetter: function(N) {
          he.current = N;
        },
        getInput: function() {
          return (0, nk.default)(he.current, "Input is undefined, make sure you apple `query.inputRefSetter` to your search input."), he.current;
        }
      },
      options: m.current,
      subscribe: function(N, P) {
        return H.subscribe(N, P);
      }
    };
  }, [W, H, B]);
}
hy.useStore = ik;
var uk = (
  /** @class */
  function() {
    function v(m) {
      this.subscribers = [], this.getState = m;
    }
    return v.prototype.subscribe = function(m, h) {
      var R = this, O = new lk(function() {
        return m(R.getState());
      }, h);
      return this.subscribers.push(O), this.unsubscribe.bind(this, O);
    }, v.prototype.unsubscribe = function(m) {
      if (this.subscribers.length) {
        var h = this.subscribers.indexOf(m);
        if (h > -1)
          return this.subscribers.splice(h, 1);
      }
    }, v.prototype.notify = function() {
      this.subscribers.forEach(function(m) {
        return m.collect();
      });
    }, v;
  }()
), lk = (
  /** @class */
  function() {
    function v(m, h) {
      this.collector = m, this.onChange = h;
    }
    return v.prototype.collect = function() {
      try {
        var m = this.collector();
        (0, tk.deepEqual)(m, this.collected) || (this.collected = m, this.onChange && this.onChange(this.collected));
      } catch (h) {
        console.warn(h);
      }
    }, v;
  }()
), pp = {}, iE = {};
Object.defineProperty(iE, "__esModule", { value: !0 });
var ok = ["Shift", "Meta", "Alt", "Control"], sk = 1e3, ck = "keydown", fk = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function eE(v, m) {
  return typeof v.getModifierState == "function" ? v.getModifierState(m) : !1;
}
function dk(v) {
  return v.trim().split(" ").map(function(m) {
    var h = m.split(/\b\+/), R = h.pop();
    return h = h.map(function(O) {
      return O === "$mod" ? fk : O;
    }), [h, R];
  });
}
function vk(v, m) {
  return /^[^A-Za-z0-9]$/.test(v.key) && m[1] === v.key ? !0 : !// Allow either the `event.key` or the `event.code`
  // MDN event.key: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
  // MDN event.code: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  (m[1].toUpperCase() !== v.key.toUpperCase() && m[1] !== v.code || // Ensure all the modifiers in the keybinding are pressed.
  m[0].find(function(h) {
    return !eE(v, h);
  }) || // KEYBINDING_MODIFIER_KEYS (Shift/Control/etc) change the meaning of a
  // keybinding. So if they are pressed but aren't part of the current
  // keybinding press, then we don't have a match.
  ok.find(function(h) {
    return !m[0].includes(h) && m[1] !== h && eE(v, h);
  }));
}
function pk(v, m, h) {
  var R, O;
  h === void 0 && (h = {});
  var A = (R = h.timeout) !== null && R !== void 0 ? R : sk, E = (O = h.event) !== null && O !== void 0 ? O : ck, W = Object.keys(m).map(function(N) {
    return [dk(N), m[N]];
  }), H = /* @__PURE__ */ new Map(), B = null, he = function(N) {
    N instanceof KeyboardEvent && (W.forEach(function(P) {
      var Y = P[0], q = P[1], oe = H.get(Y), ee = oe || Y, de = ee[0], ue = vk(N, de);
      ue ? ee.length > 1 ? H.set(Y, ee.slice(1)) : (H.delete(Y), q(N)) : eE(N, N.key) || H.delete(Y);
    }), B && clearTimeout(B), B = setTimeout(H.clear.bind(H), A));
  };
  return v.addEventListener(E, he), function() {
    v.removeEventListener(E, he);
  };
}
iE.default = pk;
var GR;
function hk() {
  if (GR)
    return pp;
  GR = 1;
  var v = ie && ie.__createBinding || (Object.create ? function(ee, de, ue, Ee) {
    Ee === void 0 && (Ee = ue), Object.defineProperty(ee, Ee, { enumerable: !0, get: function() {
      return de[ue];
    } });
  } : function(ee, de, ue, Ee) {
    Ee === void 0 && (Ee = ue), ee[Ee] = de[ue];
  }), m = ie && ie.__setModuleDefault || (Object.create ? function(ee, de) {
    Object.defineProperty(ee, "default", { enumerable: !0, value: de });
  } : function(ee, de) {
    ee.default = de;
  }), h = ie && ie.__importStar || function(ee) {
    if (ee && ee.__esModule)
      return ee;
    var de = {};
    if (ee != null)
      for (var ue in ee)
        ue !== "default" && Object.prototype.hasOwnProperty.call(ee, ue) && v(de, ee, ue);
    return m(de, ee), de;
  }, R = ie && ie.__importDefault || function(ee) {
    return ee && ee.__esModule ? ee : { default: ee };
  };
  Object.defineProperty(pp, "__esModule", { value: !0 }), pp.InternalEvents = void 0;
  var O = h(Tt), A = R(iE), E = sc, W = rs(), H = tn;
  function B() {
    return he(), N(), q(), oe(), null;
  }
  pp.InternalEvents = B;
  function he() {
    var ee, de, ue = (0, W.useKBar)(function(Ye) {
      return {
        visualState: Ye.visualState,
        showing: Ye.visualState !== E.VisualState.hidden
      };
    }), Ee = ue.query, be = ue.options, pe = ue.visualState, Ve = ue.showing;
    O.useEffect(function() {
      var Ye, se = be.toggleShortcut || "$mod+k", ye = (0, A.default)(window, (Ye = {}, Ye[se] = function(Fe) {
        var re, ae, Le, _e;
        Fe.defaultPrevented || (Fe.preventDefault(), Ee.toggle(), Ve ? (ae = (re = be.callbacks) === null || re === void 0 ? void 0 : re.onClose) === null || ae === void 0 || ae.call(re) : (_e = (Le = be.callbacks) === null || Le === void 0 ? void 0 : Le.onOpen) === null || _e === void 0 || _e.call(Le));
      }, Ye.Escape = function(Fe) {
        var re, ae;
        Ve && (Fe.stopPropagation(), Fe.preventDefault(), (ae = (re = be.callbacks) === null || re === void 0 ? void 0 : re.onClose) === null || ae === void 0 || ae.call(re)), Ee.setVisualState(function(Le) {
          return Le === E.VisualState.hidden || Le === E.VisualState.animatingOut ? Le : E.VisualState.animatingOut;
        });
      }, Ye));
      return function() {
        ye();
      };
    }, [be.callbacks, be.toggleShortcut, Ee, Ve]);
    var me = O.useRef(), Xe = O.useCallback(function(Ye) {
      var se, ye, Fe = 0;
      Ye === E.VisualState.animatingIn && (Fe = ((se = be.animations) === null || se === void 0 ? void 0 : se.enterMs) || 0), Ye === E.VisualState.animatingOut && (Fe = ((ye = be.animations) === null || ye === void 0 ? void 0 : ye.exitMs) || 0), clearTimeout(me.current), me.current = setTimeout(function() {
        var re = !1;
        Ee.setVisualState(function() {
          var ae = Ye === E.VisualState.animatingIn ? E.VisualState.showing : E.VisualState.hidden;
          return ae === E.VisualState.hidden && (re = !0), ae;
        }), re && Ee.setCurrentRootAction(null);
      }, Fe);
    }, [(ee = be.animations) === null || ee === void 0 ? void 0 : ee.enterMs, (de = be.animations) === null || de === void 0 ? void 0 : de.exitMs, Ee]);
    O.useEffect(function() {
      switch (pe) {
        case E.VisualState.animatingIn:
        case E.VisualState.animatingOut:
          Xe(pe);
          break;
      }
    }, [Xe, pe]);
  }
  function N() {
    var ee = (0, W.useKBar)(function(Ee) {
      return {
        visualState: Ee.visualState
      };
    }), de = ee.visualState, ue = ee.options;
    O.useEffect(function() {
      if (!ue.disableDocumentLock)
        if (de === E.VisualState.animatingIn) {
          if (document.body.style.overflow = "hidden", !ue.disableScrollbarManagement) {
            var Ee = (0, H.getScrollbarWidth)(), be = getComputedStyle(document.body)["margin-right"];
            be && (Ee += Number(be.replace(/\D/g, ""))), document.body.style.marginRight = Ee + "px";
          }
        } else
          de === E.VisualState.hidden && (document.body.style.removeProperty("overflow"), ue.disableScrollbarManagement || document.body.style.removeProperty("margin-right"));
    }, [
      ue.disableDocumentLock,
      ue.disableScrollbarManagement,
      de
    ]);
  }
  var P = /* @__PURE__ */ new WeakSet();
  function Y(ee) {
    return function(de) {
      P.has(de) || (ee(de), P.add(de));
    };
  }
  function q() {
    var ee = (0, W.useKBar)(function(pe) {
      return {
        actions: pe.actions,
        open: pe.visualState === E.VisualState.showing
      };
    }), de = ee.actions, ue = ee.query, Ee = ee.open, be = ee.options;
    O.useEffect(function() {
      var pe;
      if (!Ee) {
        for (var Ve = Object.keys(de).map(function(_e) {
          return de[_e];
        }), me = [], Xe = 0, Ye = Ve; Xe < Ye.length; Xe++) {
          var se = Ye[Xe];
          !((pe = se.shortcut) === null || pe === void 0) && pe.length && me.push(se);
        }
        me = me.sort(function(_e, le) {
          return le.shortcut.join(" ").length - _e.shortcut.join(" ").length;
        });
        for (var ye = {}, Fe = function(_e) {
          var le = _e.shortcut.join(" ");
          ye[le] = Y(function(te) {
            var xe, b, G, we, et, qe;
            (0, H.shouldRejectKeystrokes)() || (te.preventDefault(), !((xe = _e.children) === null || xe === void 0) && xe.length ? (ue.setCurrentRootAction(_e.id), ue.toggle(), (G = (b = be.callbacks) === null || b === void 0 ? void 0 : b.onOpen) === null || G === void 0 || G.call(b)) : ((we = _e.command) === null || we === void 0 || we.perform(), (qe = (et = be.callbacks) === null || et === void 0 ? void 0 : et.onSelectAction) === null || qe === void 0 || qe.call(et, _e)));
          });
        }, re = 0, ae = me; re < ae.length; re++) {
          var se = ae[re];
          Fe(se);
        }
        var Le = (0, A.default)(window, ye, {
          timeout: 400
        });
        return function() {
          Le();
        };
      }
    }, [de, Ee, be.callbacks, ue]);
  }
  function oe() {
    var ee = O.useRef(!0), de = (0, W.useKBar)(function(pe) {
      return {
        isShowing: pe.visualState === E.VisualState.showing || pe.visualState === E.VisualState.animatingIn
      };
    }), ue = de.isShowing, Ee = de.query, be = O.useRef(null);
    O.useEffect(function() {
      if (ee.current) {
        ee.current = !1;
        return;
      }
      if (ue) {
        be.current = document.activeElement;
        return;
      }
      var pe = document.activeElement;
      (pe == null ? void 0 : pe.tagName.toLowerCase()) === "input" && pe.blur();
      var Ve = be.current;
      Ve && Ve.focus();
    }, [ue]), O.useEffect(function() {
      function pe(Ve) {
        var me = Ee.getInput();
        Ve.target !== me && me.focus();
      }
      if (ue)
        return window.addEventListener("keydown", pe), function() {
          window.removeEventListener("keydown", pe);
        };
    }, [ue, Ee]);
  }
  return pp;
}
var XR;
function p_() {
  return XR || (XR = 1, function(v) {
    var m = ie && ie.__createBinding || (Object.create ? function(H, B, he, N) {
      N === void 0 && (N = he), Object.defineProperty(H, N, { enumerable: !0, get: function() {
        return B[he];
      } });
    } : function(H, B, he, N) {
      N === void 0 && (N = he), H[N] = B[he];
    }), h = ie && ie.__setModuleDefault || (Object.create ? function(H, B) {
      Object.defineProperty(H, "default", { enumerable: !0, value: B });
    } : function(H, B) {
      H.default = B;
    }), R = ie && ie.__importStar || function(H) {
      if (H && H.__esModule)
        return H;
      var B = {};
      if (H != null)
        for (var he in H)
          he !== "default" && Object.prototype.hasOwnProperty.call(H, he) && m(B, H, he);
      return h(B, H), B;
    };
    Object.defineProperty(v, "__esModule", { value: !0 }), v.KBarProvider = v.KBarContext = void 0;
    var O = hy, A = R(Tt), E = hk();
    v.KBarContext = A.createContext({});
    var W = function(H) {
      var B = (0, O.useStore)(H);
      return A.createElement(
        v.KBarContext.Provider,
        { value: B },
        A.createElement(E.InternalEvents, null),
        H.children
      );
    };
    v.KBarProvider = W;
  }(q0)), q0;
}
var ZR;
function rs() {
  if (ZR)
    return dp;
  ZR = 1;
  var v = ie && ie.__assign || function() {
    return v = Object.assign || function(W) {
      for (var H, B = 1, he = arguments.length; B < he; B++) {
        H = arguments[B];
        for (var N in H)
          Object.prototype.hasOwnProperty.call(H, N) && (W[N] = H[N]);
      }
      return W;
    }, v.apply(this, arguments);
  }, m = ie && ie.__createBinding || (Object.create ? function(W, H, B, he) {
    he === void 0 && (he = B), Object.defineProperty(W, he, { enumerable: !0, get: function() {
      return H[B];
    } });
  } : function(W, H, B, he) {
    he === void 0 && (he = B), W[he] = H[B];
  }), h = ie && ie.__setModuleDefault || (Object.create ? function(W, H) {
    Object.defineProperty(W, "default", { enumerable: !0, value: H });
  } : function(W, H) {
    W.default = H;
  }), R = ie && ie.__importStar || function(W) {
    if (W && W.__esModule)
      return W;
    var H = {};
    if (W != null)
      for (var B in W)
        B !== "default" && Object.prototype.hasOwnProperty.call(W, B) && m(H, W, B);
    return h(H, W), H;
  };
  Object.defineProperty(dp, "__esModule", { value: !0 }), dp.useKBar = void 0;
  var O = R(Tt), A = p_();
  function E(W) {
    var H = O.useContext(A.KBarContext), B = H.query, he = H.getState, N = H.subscribe, P = H.options, Y = O.useRef(W == null ? void 0 : W(he())), q = O.useRef(W), oe = O.useCallback(function(Ee) {
      return v(v({}, Ee), { query: B, options: P });
    }, [B, P]), ee = O.useState(oe(Y.current)), de = ee[0], ue = ee[1];
    return O.useEffect(function() {
      var Ee;
      return q.current && (Ee = N(function(be) {
        return q.current(be);
      }, function(be) {
        return ue(oe(be));
      })), function() {
        Ee && Ee();
      };
    }, [oe, N]), de;
  }
  return dp.useKBar = E, dp;
}
var JR = 1, mk = 0.9, yk = 0.3, X0 = 0.1, gk = 0, Z0 = 0.999, Sk = 0.9999, Ek = 0.99, e_ = /[\\\/\-_+.# \t"@\[\(\{&]/, Ck = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function tE(v, m, h, R, O, A) {
  if (A === m.length)
    return O === v.length ? JR : Ek;
  for (var E = R.charAt(A), W = h.indexOf(E, O), H = 0, B, he, N; W >= 0; )
    B = tE(v, m, h, R, W + 1, A + 1), B > H && (W === O ? B *= JR : e_.test(v.charAt(W - 1)) ? (B *= mk, N = v.slice(O, W - 1).match(Ck), N && O > 0 && (B *= Math.pow(Z0, N.length))) : e_.test(v.slice(O, W - 1)) ? (B *= gk, O > 0 && (B *= Math.pow(Z0, W - O))) : (B *= yk, O > 0 && (B *= Math.pow(Z0, W - O))), v.charAt(W) !== m.charAt(A) && (B *= Sk)), B < X0 && h.charAt(W - 1) === R.charAt(A + 1) && h.charAt(W - 1) !== R.charAt(A) && (he = tE(v, m, h, R, W + 1, A + 2), he * X0 > B && (B = he * X0)), B > H && (H = B), W = h.indexOf(E, W + 1);
  return H;
}
function Rk(v, m) {
  return tE(v, m, v.toLowerCase(), m.toLowerCase(), 0, 0);
}
var _k = Rk;
(function(v) {
  var m = ie && ie.__createBinding || (Object.create ? function(P, Y, q, oe) {
    oe === void 0 && (oe = q), Object.defineProperty(P, oe, { enumerable: !0, get: function() {
      return Y[q];
    } });
  } : function(P, Y, q, oe) {
    oe === void 0 && (oe = q), P[oe] = Y[q];
  }), h = ie && ie.__setModuleDefault || (Object.create ? function(P, Y) {
    Object.defineProperty(P, "default", { enumerable: !0, value: Y });
  } : function(P, Y) {
    P.default = Y;
  }), R = ie && ie.__importStar || function(P) {
    if (P && P.__esModule)
      return P;
    var Y = {};
    if (P != null)
      for (var q in P)
        q !== "default" && Object.prototype.hasOwnProperty.call(P, q) && m(Y, P, q);
    return h(Y, P), Y;
  }, O = ie && ie.__importDefault || function(P) {
    return P && P.__esModule ? P : { default: P };
  };
  Object.defineProperty(v, "__esModule", { value: !0 }), v.useDeepMatches = v.useMatches = v.NO_GROUP = void 0;
  var A = R(Tt), E = rs(), W = tn, H = O(_k);
  v.NO_GROUP = {
    name: "none",
    priority: W.Priority.NORMAL
  };
  function B(P, Y) {
    return Y.priority - P.priority;
  }
  function he() {
    var P = (0, E.useKBar)(function(me) {
      return {
        search: me.searchQuery,
        actions: me.actions,
        rootActionId: me.currentRootActionId
      };
    }), Y = P.search, q = P.actions, oe = P.rootActionId, ee = A.useMemo(function() {
      return Object.keys(q).reduce(function(me, Xe) {
        var Ye = q[Xe];
        if (!Ye.parent && !oe && me.push(Ye), Ye.id === oe)
          for (var se = 0; se < Ye.children.length; se++)
            me.push(Ye.children[se]);
        return me;
      }, []).sort(B);
    }, [q, oe]), de = A.useCallback(function(me) {
      for (var Xe = [], Ye = 0; Ye < me.length; Ye++)
        Xe.push(me[Ye]);
      return function se(ye, Fe) {
        Fe === void 0 && (Fe = Xe);
        for (var re = 0; re < ye.length; re++)
          if (ye[re].children.length > 0) {
            for (var ae = ye[re].children, Le = 0; Le < ae.length; Le++)
              Fe.push(ae[Le]);
            se(ye[re].children, Fe);
          }
        return Fe;
      }(me);
    }, []), ue = !Y, Ee = A.useMemo(function() {
      return ue ? ee : de(ee);
    }, [de, ee, ue]), be = N(Ee, Y), pe = A.useMemo(function() {
      for (var me, Xe, Ye = {}, se = [], ye = [], Fe = 0; Fe < be.length; Fe++) {
        var re = be[Fe], ae = re.action, Le = re.score || W.Priority.NORMAL, _e = {
          name: typeof ae.section == "string" ? ae.section : ((me = ae.section) === null || me === void 0 ? void 0 : me.name) || v.NO_GROUP.name,
          priority: typeof ae.section == "string" ? Le : ((Xe = ae.section) === null || Xe === void 0 ? void 0 : Xe.priority) || 0 + Le
        };
        Ye[_e.name] || (Ye[_e.name] = [], se.push(_e)), Ye[_e.name].push({
          priority: ae.priority + Le,
          action: ae
        });
      }
      ye = se.sort(B).map(function(b) {
        return {
          name: b.name,
          actions: Ye[b.name].sort(B).map(function(G) {
            return G.action;
          })
        };
      });
      for (var le = [], Fe = 0; Fe < ye.length; Fe++) {
        var te = ye[Fe];
        te.name !== v.NO_GROUP.name && le.push(te.name);
        for (var xe = 0; xe < te.actions.length; xe++)
          le.push(te.actions[xe]);
      }
      return le;
    }, [be]), Ve = A.useMemo(function() {
      return oe;
    }, [pe]);
    return A.useMemo(function() {
      return {
        results: pe,
        rootActionId: Ve
      };
    }, [Ve, pe]);
  }
  v.useMatches = he;
  function N(P, Y) {
    var q = A.useMemo(function() {
      return {
        filtered: P,
        search: Y
      };
    }, [P, Y]), oe = (0, W.useThrottledValue)(q), ee = oe.filtered, de = oe.search;
    return A.useMemo(function() {
      if (de.trim() === "")
        return ee.map(function(Ve) {
          return { score: 0, action: Ve };
        });
      for (var ue = [], Ee = 0; Ee < ee.length; Ee++) {
        var be = ee[Ee], pe = (0, H.default)([be.name, be.keywords, be.subtitle].join(" "), de);
        pe > 0 && ue.push({ score: pe, action: be });
      }
      return ue;
    }, [ee, de]);
  }
  v.useDeepMatches = he;
})(f_);
var yy = {};
function Jf() {
  return Jf = Object.assign ? Object.assign.bind() : function(v) {
    for (var m = 1; m < arguments.length; m++) {
      var h = arguments[m];
      for (var R in h)
        Object.prototype.hasOwnProperty.call(h, R) && (v[R] = h[R]);
    }
    return v;
  }, Jf.apply(this, arguments);
}
function Tk(v, m) {
  typeof v == "function" ? v(m) : v != null && (v.current = m);
}
function bk(...v) {
  return (m) => v.forEach(
    (h) => Tk(h, m)
  );
}
const h_ = /* @__PURE__ */ Tt.forwardRef((v, m) => {
  const { children: h, ...R } = v, O = Tt.Children.toArray(h), A = O.find(xk);
  if (A) {
    const E = A.props.children, W = O.map((H) => H === A ? Tt.Children.count(E) > 1 ? Tt.Children.only(null) : /* @__PURE__ */ Tt.isValidElement(E) ? E.props.children : null : H);
    return /* @__PURE__ */ Tt.createElement(nE, Jf({}, R, {
      ref: m
    }), /* @__PURE__ */ Tt.isValidElement(E) ? /* @__PURE__ */ Tt.cloneElement(E, void 0, W) : null);
  }
  return /* @__PURE__ */ Tt.createElement(nE, Jf({}, R, {
    ref: m
  }), h);
});
h_.displayName = "Slot";
const nE = /* @__PURE__ */ Tt.forwardRef((v, m) => {
  const { children: h, ...R } = v;
  return /* @__PURE__ */ Tt.isValidElement(h) ? /* @__PURE__ */ Tt.cloneElement(h, {
    ...Ok(R, h.props),
    ref: bk(m, h.ref)
  }) : Tt.Children.count(h) > 1 ? Tt.Children.only(null) : null;
});
nE.displayName = "SlotClone";
const wk = ({ children: v }) => /* @__PURE__ */ Tt.createElement(Tt.Fragment, null, v);
function xk(v) {
  return /* @__PURE__ */ Tt.isValidElement(v) && v.type === wk;
}
function Ok(v, m) {
  const h = {
    ...m
  };
  for (const R in m) {
    const O = v[R], A = m[R];
    /^on[A-Z]/.test(R) ? O && A ? h[R] = (...W) => {
      A(...W), O(...W);
    } : O && (h[R] = O) : R === "style" ? h[R] = {
      ...O,
      ...A
    } : R === "className" && (h[R] = [
      O,
      A
    ].filter(Boolean).join(" "));
  }
  return {
    ...v,
    ...h
  };
}
const Dk = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], kk = Dk.reduce((v, m) => {
  const h = /* @__PURE__ */ Tt.forwardRef((R, O) => {
    const { asChild: A, ...E } = R, W = A ? h_ : m;
    return Tt.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ Tt.createElement(W, Jf({}, E, {
      ref: O
    }));
  });
  return h.displayName = `Primitive.${m}`, {
    ...v,
    [m]: h
  };
}, {}), m_ = /* @__PURE__ */ Tt.forwardRef((v, m) => {
  var h;
  const { container: R = globalThis == null || (h = globalThis.document) === null || h === void 0 ? void 0 : h.body, ...O } = v;
  return R ? /* @__PURE__ */ ED.createPortal(/* @__PURE__ */ Tt.createElement(kk.div, Jf({}, O, {
    ref: m
  })), R) : null;
}), Mk = m_, Lk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Portal: m_,
  Root: Mk
}, Symbol.toStringTag, { value: "Module" })), Nk = /* @__PURE__ */ l_(Lk);
var Ak = ie && ie.__createBinding || (Object.create ? function(v, m, h, R) {
  R === void 0 && (R = h), Object.defineProperty(v, R, { enumerable: !0, get: function() {
    return m[h];
  } });
} : function(v, m, h, R) {
  R === void 0 && (R = h), v[R] = m[h];
}), zk = ie && ie.__setModuleDefault || (Object.create ? function(v, m) {
  Object.defineProperty(v, "default", { enumerable: !0, value: m });
} : function(v, m) {
  v.default = m;
}), Uk = ie && ie.__importStar || function(v) {
  if (v && v.__esModule)
    return v;
  var m = {};
  if (v != null)
    for (var h in v)
      h !== "default" && Object.prototype.hasOwnProperty.call(v, h) && Ak(m, v, h);
  return zk(m, v), m;
};
Object.defineProperty(yy, "__esModule", { value: !0 });
yy.KBarPortal = void 0;
var jk = Nk, Pk = Uk(Tt), Fk = sc, Hk = rs();
function Vk(v) {
  var m = (0, Hk.useKBar)(function(h) {
    return {
      showing: h.visualState !== Fk.VisualState.hidden
    };
  }).showing;
  return m ? Pk.createElement(jk.Portal, null, v.children) : null;
}
yy.KBarPortal = Vk;
var gy = {}, gp = ie && ie.__assign || function() {
  return gp = Object.assign || function(v) {
    for (var m, h = 1, R = arguments.length; h < R; h++) {
      m = arguments[h];
      for (var O in m)
        Object.prototype.hasOwnProperty.call(m, O) && (v[O] = m[O]);
    }
    return v;
  }, gp.apply(this, arguments);
}, Bk = ie && ie.__createBinding || (Object.create ? function(v, m, h, R) {
  R === void 0 && (R = h), Object.defineProperty(v, R, { enumerable: !0, get: function() {
    return m[h];
  } });
} : function(v, m, h, R) {
  R === void 0 && (R = h), v[R] = m[h];
}), $k = ie && ie.__setModuleDefault || (Object.create ? function(v, m) {
  Object.defineProperty(v, "default", { enumerable: !0, value: m });
} : function(v, m) {
  v.default = m;
}), Ik = ie && ie.__importStar || function(v) {
  if (v && v.__esModule)
    return v;
  var m = {};
  if (v != null)
    for (var h in v)
      h !== "default" && Object.prototype.hasOwnProperty.call(v, h) && Bk(m, v, h);
  return $k(m, v), m;
}, Yk = ie && ie.__rest || function(v, m) {
  var h = {};
  for (var R in v)
    Object.prototype.hasOwnProperty.call(v, R) && m.indexOf(R) < 0 && (h[R] = v[R]);
  if (v != null && typeof Object.getOwnPropertySymbols == "function")
    for (var O = 0, R = Object.getOwnPropertySymbols(v); O < R.length; O++)
      m.indexOf(R[O]) < 0 && Object.prototype.propertyIsEnumerable.call(v, R[O]) && (h[R[O]] = v[R[O]]);
  return h;
};
Object.defineProperty(gy, "__esModule", { value: !0 });
gy.KBarPositioner = void 0;
var t_ = Ik(Tt), n_ = {
  position: "fixed",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  inset: "0px",
  padding: "14vh 16px 16px"
};
function Kk(v) {
  return v ? gp(gp({}, n_), v) : n_;
}
gy.KBarPositioner = t_.forwardRef(function(v, m) {
  var h = v.style, R = v.children, O = Yk(v, ["style", "children"]);
  return t_.createElement("div", gp({ ref: m, style: Kk(h) }, O), R);
});
var uE = {};
(function(v) {
  var m = ie && ie.__assign || function() {
    return m = Object.assign || function(N) {
      for (var P, Y = 1, q = arguments.length; Y < q; Y++) {
        P = arguments[Y];
        for (var oe in P)
          Object.prototype.hasOwnProperty.call(P, oe) && (N[oe] = P[oe]);
      }
      return N;
    }, m.apply(this, arguments);
  }, h = ie && ie.__createBinding || (Object.create ? function(N, P, Y, q) {
    q === void 0 && (q = Y), Object.defineProperty(N, q, { enumerable: !0, get: function() {
      return P[Y];
    } });
  } : function(N, P, Y, q) {
    q === void 0 && (q = Y), N[q] = P[Y];
  }), R = ie && ie.__setModuleDefault || (Object.create ? function(N, P) {
    Object.defineProperty(N, "default", { enumerable: !0, value: P });
  } : function(N, P) {
    N.default = P;
  }), O = ie && ie.__importStar || function(N) {
    if (N && N.__esModule)
      return N;
    var P = {};
    if (N != null)
      for (var Y in N)
        Y !== "default" && Object.prototype.hasOwnProperty.call(N, Y) && h(P, N, Y);
    return R(P, N), P;
  }, A = ie && ie.__rest || function(N, P) {
    var Y = {};
    for (var q in N)
      Object.prototype.hasOwnProperty.call(N, q) && P.indexOf(q) < 0 && (Y[q] = N[q]);
    if (N != null && typeof Object.getOwnPropertySymbols == "function")
      for (var oe = 0, q = Object.getOwnPropertySymbols(N); oe < q.length; oe++)
        P.indexOf(q[oe]) < 0 && Object.prototype.propertyIsEnumerable.call(N, q[oe]) && (Y[q[oe]] = N[q[oe]]);
    return Y;
  };
  Object.defineProperty(v, "__esModule", { value: !0 }), v.KBarSearch = v.getListboxItemId = v.KBAR_LISTBOX = void 0;
  var E = O(Tt), W = sc, H = rs();
  v.KBAR_LISTBOX = "kbar-listbox";
  var B = function(N) {
    return "kbar-listbox-item-" + N;
  };
  v.getListboxItemId = B;
  function he(N) {
    var P = (0, H.useKBar)(function(me) {
      return {
        search: me.searchQuery,
        currentRootActionId: me.currentRootActionId,
        actions: me.actions,
        activeIndex: me.activeIndex,
        showing: me.visualState === W.VisualState.showing
      };
    }), Y = P.query, q = P.search, oe = P.actions, ee = P.currentRootActionId, de = P.activeIndex, ue = P.showing, Ee = P.options, be = N.defaultPlaceholder, pe = A(N, ["defaultPlaceholder"]);
    E.useEffect(function() {
      return Y.setSearch(""), Y.getInput().focus(), function() {
        return Y.setSearch("");
      };
    }, [ee, Y]);
    var Ve = E.useMemo(function() {
      var me = be ?? "Type a command or search…";
      return ee && oe[ee] ? oe[ee].name : me;
    }, [oe, ee, be]);
    return E.createElement("input", m({}, pe, { ref: Y.inputRefSetter, autoFocus: !0, autoComplete: "off", role: "combobox", spellCheck: "false", "aria-expanded": ue, "aria-controls": v.KBAR_LISTBOX, "aria-activedescendant": (0, v.getListboxItemId)(de), value: q, placeholder: Ve, onChange: function(me) {
      var Xe, Ye, se;
      (Xe = N.onChange) === null || Xe === void 0 || Xe.call(N, me), Y.setSearch(me.target.value), (se = (Ye = Ee == null ? void 0 : Ee.callbacks) === null || Ye === void 0 ? void 0 : Ye.onQueryChange) === null || se === void 0 || se.call(Ye, me.target.value);
    }, onKeyDown: function(me) {
      var Xe;
      if ((Xe = N.onKeyDown) === null || Xe === void 0 || Xe.call(N, me), ee && !q && me.key === "Backspace") {
        var Ye = oe[ee].parent;
        Y.setCurrentRootAction(Ye);
      }
    } }));
  }
  v.KBarSearch = he;
})(uE);
var Sy = {};
function oc() {
  return oc = Object.assign || function(v) {
    for (var m = 1; m < arguments.length; m++) {
      var h = arguments[m];
      for (var R in h)
        Object.prototype.hasOwnProperty.call(h, R) && (v[R] = h[R]);
    }
    return v;
  }, oc.apply(this, arguments);
}
function Wk(v, m) {
  if (v == null)
    return {};
  var h = {}, R = Object.keys(v), O, A;
  for (A = 0; A < R.length; A++)
    O = R[A], !(m.indexOf(O) >= 0) && (h[O] = v[O]);
  return h;
}
var Qk = ["bottom", "height", "left", "right", "top", "width"], qk = function(m, h) {
  return m === void 0 && (m = {}), h === void 0 && (h = {}), Qk.some(function(R) {
    return m[R] !== h[R];
  });
}, ts = /* @__PURE__ */ new Map(), y_, Gk = function v() {
  var m = [];
  ts.forEach(function(h, R) {
    var O = R.getBoundingClientRect();
    qk(O, h.rect) && (h.rect = O, m.push(h));
  }), m.forEach(function(h) {
    h.callbacks.forEach(function(R) {
      return R(h.rect);
    });
  }), y_ = window.requestAnimationFrame(v);
};
function Xk(v, m) {
  return {
    observe: function() {
      var R = ts.size === 0;
      ts.has(v) ? ts.get(v).callbacks.push(m) : ts.set(v, {
        rect: void 0,
        hasRectChanged: !1,
        callbacks: [m]
      }), R && Gk();
    },
    unobserve: function() {
      var R = ts.get(v);
      if (R) {
        var O = R.callbacks.indexOf(m);
        O >= 0 && R.callbacks.splice(O, 1), R.callbacks.length || ts.delete(v), ts.size || cancelAnimationFrame(y_);
      }
    }
  };
}
var py = typeof window < "u" ? Yn.useLayoutEffect : Yn.useEffect;
function Zk(v, m) {
  m === void 0 && (m = {
    width: 0,
    height: 0
  });
  var h = Yn.useState(v.current), R = h[0], O = h[1], A = Yn.useReducer(Jk, m), E = A[0], W = A[1], H = Yn.useRef(!1);
  return py(function() {
    v.current !== R && O(v.current);
  }), py(function() {
    if (R && !H.current) {
      H.current = !0;
      var B = R.getBoundingClientRect();
      W({
        rect: B
      });
    }
  }, [R]), Yn.useEffect(function() {
    if (R) {
      var B = Xk(R, function(he) {
        W({
          rect: he
        });
      });
      return B.observe(), function() {
        B.unobserve();
      };
    }
  }, [R]), E;
}
function Jk(v, m) {
  var h = m.rect;
  return v.height !== h.height || v.width !== h.width ? h : v;
}
var eM = function() {
  return 50;
}, tM = function(m) {
  return m;
}, nM = function(m, h) {
  var R = h ? "offsetWidth" : "offsetHeight";
  return m[R];
}, g_ = function(m) {
  for (var h = Math.max(m.start - m.overscan, 0), R = Math.min(m.end + m.overscan, m.size - 1), O = [], A = h; A <= R; A++)
    O.push(A);
  return O;
};
function rM(v) {
  var m, h = v.size, R = h === void 0 ? 0 : h, O = v.estimateSize, A = O === void 0 ? eM : O, E = v.overscan, W = E === void 0 ? 1 : E, H = v.paddingStart, B = H === void 0 ? 0 : H, he = v.paddingEnd, N = he === void 0 ? 0 : he, P = v.parentRef, Y = v.horizontal, q = v.scrollToFn, oe = v.useObserver, ee = v.initialRect, de = v.onScrollElement, ue = v.scrollOffsetFn, Ee = v.keyExtractor, be = Ee === void 0 ? tM : Ee, pe = v.measureSize, Ve = pe === void 0 ? nM : pe, me = v.rangeExtractor, Xe = me === void 0 ? g_ : me, Ye = Y ? "width" : "height", se = Y ? "scrollLeft" : "scrollTop", ye = Yn.useRef({
    scrollOffset: 0,
    measurements: []
  }), Fe = Yn.useState(0), re = Fe[0], ae = Fe[1];
  ye.current.scrollOffset = re;
  var Le = oe || Zk, _e = Le(P, ee), le = _e[Ye];
  ye.current.outerSize = le;
  var te = Yn.useCallback(function(bt) {
    P.current && (P.current[se] = bt);
  }, [P, se]), xe = q || te;
  q = Yn.useCallback(function(bt) {
    xe(bt, te);
  }, [te, xe]);
  var b = Yn.useState({}), G = b[0], we = b[1], et = Yn.useCallback(function() {
    return we({});
  }, []), qe = Yn.useRef([]), Rt = Yn.useMemo(function() {
    var bt = qe.current.length > 0 ? Math.min.apply(Math, qe.current) : 0;
    qe.current = [];
    for (var Mt = ye.current.measurements.slice(0, bt), _t = bt; _t < R; _t++) {
      var sn = be(_t), Nt = G[sn], On = Mt[_t - 1] ? Mt[_t - 1].end : B, an = typeof Nt == "number" ? Nt : A(_t), Sn = On + an;
      Mt[_t] = {
        index: _t,
        start: On,
        size: an,
        end: Sn,
        key: sn
      };
    }
    return Mt;
  }, [A, G, B, R, be]), ht = (((m = Rt[R - 1]) == null ? void 0 : m.end) || B) + N;
  ye.current.measurements = Rt, ye.current.totalSize = ht;
  var yt = de ? de.current : P.current, vt = Yn.useRef(ue);
  vt.current = ue, py(function() {
    if (!yt) {
      ae(0);
      return;
    }
    var bt = function(_t) {
      var sn = vt.current ? vt.current(_t) : yt[se];
      ae(sn);
    };
    return bt(), yt.addEventListener("scroll", bt, {
      capture: !1,
      passive: !0
    }), function() {
      yt.removeEventListener("scroll", bt);
    };
  }, [yt, se]);
  var $t = iM(ye.current), mr = $t.start, Zn = $t.end, ur = Yn.useMemo(function() {
    return Xe({
      start: mr,
      end: Zn,
      overscan: W,
      size: Rt.length
    });
  }, [mr, Zn, W, Rt.length, Xe]), pn = Yn.useRef(Ve);
  pn.current = Ve;
  var Kn = Yn.useMemo(function() {
    for (var bt = [], Mt = function(On, an) {
      var Sn = ur[On], un = Rt[Sn], Dn = oc(oc({}, un), {}, {
        measureRef: function(lr) {
          if (lr) {
            var Te = pn.current(lr, Y);
            if (Te !== Dn.size) {
              var We = ye.current.scrollOffset;
              Dn.start < We && te(We + (Te - Dn.size)), qe.current.push(Sn), we(function(gt) {
                var At;
                return oc(oc({}, gt), {}, (At = {}, At[Dn.key] = Te, At));
              });
            }
          }
        }
      });
      bt.push(Dn);
    }, _t = 0, sn = ur.length; _t < sn; _t++)
      Mt(_t);
    return bt;
  }, [ur, te, Y, Rt]), Un = Yn.useRef(!1);
  py(function() {
    Un.current && we({}), Un.current = !0;
  }, [A]);
  var xn = Yn.useCallback(function(bt, Mt) {
    var _t = Mt === void 0 ? {} : Mt, sn = _t.align, Nt = sn === void 0 ? "start" : sn, On = ye.current, an = On.scrollOffset, Sn = On.outerSize;
    Nt === "auto" && (bt <= an ? Nt = "start" : bt >= an + Sn ? Nt = "end" : Nt = "start"), Nt === "start" ? q(bt) : Nt === "end" ? q(bt - Sn) : Nt === "center" && q(bt - Sn / 2);
  }, [q]), gn = Yn.useCallback(function(bt, Mt) {
    var _t = Mt === void 0 ? {} : Mt, sn = _t.align, Nt = sn === void 0 ? "auto" : sn, On = Wk(_t, ["align"]), an = ye.current, Sn = an.measurements, un = an.scrollOffset, Dn = an.outerSize, Jn = Sn[Math.max(0, Math.min(bt, R - 1))];
    if (Jn) {
      if (Nt === "auto")
        if (Jn.end >= un + Dn)
          Nt = "end";
        else if (Jn.start <= un)
          Nt = "start";
        else
          return;
      var lr = Nt === "center" ? Jn.start + Jn.size / 2 : Nt === "end" ? Jn.end : Jn.start;
      xn(lr, oc({
        align: Nt
      }, On));
    }
  }, [xn, R]), Dr = Yn.useCallback(function() {
    for (var bt = arguments.length, Mt = new Array(bt), _t = 0; _t < bt; _t++)
      Mt[_t] = arguments[_t];
    gn.apply(void 0, Mt), requestAnimationFrame(function() {
      gn.apply(void 0, Mt);
    });
  }, [gn]);
  return {
    virtualItems: Kn,
    totalSize: ht,
    scrollToOffset: xn,
    scrollToIndex: Dr,
    measure: et
  };
}
var aM = function(m, h, R, O) {
  for (; m <= h; ) {
    var A = (m + h) / 2 | 0, E = R(A);
    if (E < O)
      m = A + 1;
    else if (E > O)
      h = A - 1;
    else
      return A;
  }
  return m > 0 ? m - 1 : 0;
};
function iM(v) {
  for (var m = v.measurements, h = v.outerSize, R = v.scrollOffset, O = m.length - 1, A = function(B) {
    return m[B].start;
  }, E = aM(0, O, A, R), W = E; W < O && m[W].end < R + h; )
    W++;
  return {
    start: E,
    end: W
  };
}
const uM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defaultRangeExtractor: g_,
  useVirtual: rM
}, Symbol.toStringTag, { value: "Module" })), lM = /* @__PURE__ */ l_(uM);
var rE = ie && ie.__assign || function() {
  return rE = Object.assign || function(v) {
    for (var m, h = 1, R = arguments.length; h < R; h++) {
      m = arguments[h];
      for (var O in m)
        Object.prototype.hasOwnProperty.call(m, O) && (v[O] = m[O]);
    }
    return v;
  }, rE.apply(this, arguments);
}, oM = ie && ie.__createBinding || (Object.create ? function(v, m, h, R) {
  R === void 0 && (R = h), Object.defineProperty(v, R, { enumerable: !0, get: function() {
    return m[h];
  } });
} : function(v, m, h, R) {
  R === void 0 && (R = h), v[R] = m[h];
}), sM = ie && ie.__setModuleDefault || (Object.create ? function(v, m) {
  Object.defineProperty(v, "default", { enumerable: !0, value: m });
} : function(v, m) {
  v.default = m;
}), cM = ie && ie.__importStar || function(v) {
  if (v && v.__esModule)
    return v;
  var m = {};
  if (v != null)
    for (var h in v)
      h !== "default" && Object.prototype.hasOwnProperty.call(v, h) && oM(m, v, h);
  return sM(m, v), m;
};
Object.defineProperty(Sy, "__esModule", { value: !0 });
Sy.KBarResults = void 0;
var cu = cM(Tt), fM = lM, r_ = uE, dM = rs(), vM = tn, ly = 0, pM = function(v) {
  var m = cu.useRef(null), h = cu.useRef(null), R = cu.useRef(v.items);
  R.current = v.items;
  var O = (0, fM.useVirtual)({
    size: R.current.length,
    parentRef: h
  }), A = (0, dM.useKBar)(function(q) {
    return {
      search: q.searchQuery,
      currentRootActionId: q.currentRootActionId,
      activeIndex: q.activeIndex
    };
  }), E = A.query, W = A.search, H = A.currentRootActionId, B = A.activeIndex, he = A.options;
  cu.useEffect(function() {
    var q = function(oe) {
      var ee;
      oe.key === "ArrowUp" || oe.ctrlKey && oe.key === "p" ? (oe.preventDefault(), E.setActiveIndex(function(de) {
        var ue = de > ly ? de - 1 : de;
        if (typeof R.current[ue] == "string") {
          if (ue === 0)
            return de;
          ue -= 1;
        }
        return ue;
      })) : oe.key === "ArrowDown" || oe.ctrlKey && oe.key === "n" ? (oe.preventDefault(), E.setActiveIndex(function(de) {
        var ue = de < R.current.length - 1 ? de + 1 : de;
        if (typeof R.current[ue] == "string") {
          if (ue === R.current.length - 1)
            return de;
          ue += 1;
        }
        return ue;
      })) : oe.key === "Enter" && (oe.preventDefault(), (ee = m.current) === null || ee === void 0 || ee.click());
    };
    return window.addEventListener("keydown", q), function() {
      return window.removeEventListener("keydown", q);
    };
  }, [E]);
  var N = O.scrollToIndex;
  cu.useEffect(function() {
    N(B, {
      // ensure that if the first item in the list is a group
      // name and we are focused on the second item, to not
      // scroll past that group, hiding it.
      align: B <= 1 ? "end" : "auto"
    });
  }, [B, N]), cu.useEffect(function() {
    E.setActiveIndex(
      // avoid setting active index on a group
      typeof v.items[ly] == "string" ? ly + 1 : ly
    );
  }, [W, H, v.items, E]);
  var P = cu.useCallback(function(q) {
    var oe, ee;
    typeof q != "string" && (q.command ? (q.command.perform(q), E.toggle()) : (E.setSearch(""), E.setCurrentRootAction(q.id)), (ee = (oe = he.callbacks) === null || oe === void 0 ? void 0 : oe.onSelectAction) === null || ee === void 0 || ee.call(oe, q));
  }, [E, he]), Y = (0, vM.usePointerMovedSinceMount)();
  return cu.createElement(
    "div",
    { ref: h, style: {
      maxHeight: v.maxHeight || 400,
      position: "relative",
      overflow: "auto"
    } },
    cu.createElement("div", { role: "listbox", id: r_.KBAR_LISTBOX, style: {
      height: O.totalSize + "px",
      width: "100%"
    } }, O.virtualItems.map(function(q) {
      var oe = R.current[q.index], ee = typeof oe != "string" && {
        onPointerMove: function() {
          return Y && B !== q.index && E.setActiveIndex(q.index);
        },
        onPointerDown: function() {
          return E.setActiveIndex(q.index);
        },
        onClick: function() {
          return P(oe);
        }
      }, de = q.index === B;
      return cu.createElement("div", rE({ ref: de ? m : null, id: (0, r_.getListboxItemId)(q.index), role: "option", "aria-selected": de, key: q.index, style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: "translateY(" + q.start + "px)"
      } }, ee), cu.cloneElement(v.onRender({
        item: oe,
        active: de
      }), {
        ref: q.measureRef
      }));
    }))
  );
};
Sy.KBarResults = pM;
var Ey = {}, hM = ie && ie.__createBinding || (Object.create ? function(v, m, h, R) {
  R === void 0 && (R = h), Object.defineProperty(v, R, { enumerable: !0, get: function() {
    return m[h];
  } });
} : function(v, m, h, R) {
  R === void 0 && (R = h), v[R] = m[h];
}), mM = ie && ie.__setModuleDefault || (Object.create ? function(v, m) {
  Object.defineProperty(v, "default", { enumerable: !0, value: m });
} : function(v, m) {
  v.default = m;
}), yM = ie && ie.__importStar || function(v) {
  if (v && v.__esModule)
    return v;
  var m = {};
  if (v != null)
    for (var h in v)
      h !== "default" && Object.prototype.hasOwnProperty.call(v, h) && hM(m, v, h);
  return mM(m, v), m;
};
Object.defineProperty(Ey, "__esModule", { value: !0 });
Ey.useRegisterActions = void 0;
var a_ = yM(Tt), gM = rs();
function SM(v, m) {
  m === void 0 && (m = []);
  var h = (0, gM.useKBar)().query, R = a_.useMemo(function() {
    return v;
  }, m);
  a_.useEffect(function() {
    if (R.length) {
      var O = h.registerActions(R);
      return function() {
        O();
      };
    }
  }, [h, R]);
}
Ey.useRegisterActions = SM;
var Cy = {}, yp = ie && ie.__assign || function() {
  return yp = Object.assign || function(v) {
    for (var m, h = 1, R = arguments.length; h < R; h++) {
      m = arguments[h];
      for (var O in m)
        Object.prototype.hasOwnProperty.call(m, O) && (v[O] = m[O]);
    }
    return v;
  }, yp.apply(this, arguments);
}, EM = ie && ie.__createBinding || (Object.create ? function(v, m, h, R) {
  R === void 0 && (R = h), Object.defineProperty(v, R, { enumerable: !0, get: function() {
    return m[h];
  } });
} : function(v, m, h, R) {
  R === void 0 && (R = h), v[R] = m[h];
}), CM = ie && ie.__setModuleDefault || (Object.create ? function(v, m) {
  Object.defineProperty(v, "default", { enumerable: !0, value: m });
} : function(v, m) {
  v.default = m;
}), RM = ie && ie.__importStar || function(v) {
  if (v && v.__esModule)
    return v;
  var m = {};
  if (v != null)
    for (var h in v)
      h !== "default" && Object.prototype.hasOwnProperty.call(v, h) && EM(m, v, h);
  return CM(m, v), m;
};
Object.defineProperty(Cy, "__esModule", { value: !0 });
Cy.KBarAnimator = void 0;
var Wl = RM(Tt), Xf = sc, _M = rs(), TM = tn, i_ = [
  {
    opacity: 0,
    transform: "scale(.99)"
  },
  { opacity: 1, transform: "scale(1.01)" },
  { opacity: 1, transform: "scale(1)" }
], bM = [
  {
    transform: "scale(1)"
  },
  {
    transform: "scale(.98)"
  },
  {
    transform: "scale(1)"
  }
], wM = function(v) {
  var m, h, R = v.children, O = v.style, A = v.className, E = (0, _M.useKBar)(function(de) {
    return {
      visualState: de.visualState,
      currentRootActionId: de.currentRootActionId
    };
  }), W = E.visualState, H = E.currentRootActionId, B = E.query, he = E.options, N = Wl.useRef(null), P = Wl.useRef(null), Y = ((m = he == null ? void 0 : he.animations) === null || m === void 0 ? void 0 : m.enterMs) || 0, q = ((h = he == null ? void 0 : he.animations) === null || h === void 0 ? void 0 : h.exitMs) || 0;
  Wl.useEffect(function() {
    if (W !== Xf.VisualState.showing) {
      var de = W === Xf.VisualState.animatingIn ? Y : q, ue = N.current;
      ue == null || ue.animate(i_, {
        duration: de,
        easing: (
          // TODO: expose easing in options
          W === Xf.VisualState.animatingOut ? "ease-in" : "ease-out"
        ),
        direction: W === Xf.VisualState.animatingOut ? "reverse" : "normal",
        fill: "forwards"
      });
    }
  }, [he, W, Y, q]);
  var oe = Wl.useRef();
  Wl.useEffect(function() {
    if (W === Xf.VisualState.showing) {
      var de = N.current, ue = P.current;
      if (!de || !ue)
        return;
      var Ee = new ResizeObserver(function(be) {
        for (var pe = 0, Ve = be; pe < Ve.length; pe++) {
          var me = Ve[pe], Xe = me.contentRect;
          oe.current || (oe.current = Xe.height), de.animate([
            {
              height: oe.current + "px"
            },
            {
              height: Xe.height + "px"
            }
          ], {
            duration: Y / 2,
            // TODO: expose configs here
            easing: "ease-out",
            fill: "forwards"
          }), oe.current = Xe.height;
        }
      });
      return Ee.observe(ue), function() {
        Ee.unobserve(ue);
      };
    }
  }, [W, he, Y, q]);
  var ee = Wl.useRef(!0);
  return Wl.useEffect(function() {
    if (ee.current) {
      ee.current = !1;
      return;
    }
    var de = N.current;
    de && de.animate(bM, {
      duration: Y,
      easing: "ease-out"
    });
  }, [H, Y]), (0, TM.useOuterClick)(N, function() {
    var de, ue;
    B.setVisualState(Xf.VisualState.animatingOut), (ue = (de = he.callbacks) === null || de === void 0 ? void 0 : de.onClose) === null || ue === void 0 || ue.call(de);
  }), Wl.createElement(
    "div",
    { ref: N, style: yp(yp(yp({}, i_[0]), O), { pointerEvents: "auto" }), className: A },
    Wl.createElement("div", { ref: P }, R)
  );
};
Cy.KBarAnimator = wM;
var S_ = {};
(function(v) {
  var m = ie && ie.__createBinding || (Object.create ? function(R, O, A, E) {
    E === void 0 && (E = A), Object.defineProperty(R, E, { enumerable: !0, get: function() {
      return O[A];
    } });
  } : function(R, O, A, E) {
    E === void 0 && (E = A), R[E] = O[A];
  }), h = ie && ie.__exportStar || function(R, O) {
    for (var A in R)
      A !== "default" && !Object.prototype.hasOwnProperty.call(O, A) && m(O, R, A);
  };
  Object.defineProperty(v, "__esModule", { value: !0 }), h(Sp, v), h(Ep, v);
})(S_);
(function(v) {
  var m = ie && ie.__createBinding || (Object.create ? function(O, A, E, W) {
    W === void 0 && (W = E), Object.defineProperty(O, W, { enumerable: !0, get: function() {
      return A[E];
    } });
  } : function(O, A, E, W) {
    W === void 0 && (W = E), O[W] = A[E];
  }), h = ie && ie.__exportStar || function(O, A) {
    for (var E in O)
      E !== "default" && !Object.prototype.hasOwnProperty.call(A, E) && m(A, O, E);
  };
  Object.defineProperty(v, "__esModule", { value: !0 }), v.Priority = v.createAction = void 0;
  var R = tn;
  Object.defineProperty(v, "createAction", { enumerable: !0, get: function() {
    return R.createAction;
  } }), Object.defineProperty(v, "Priority", { enumerable: !0, get: function() {
    return R.Priority;
  } }), h(f_, v), h(yy, v), h(gy, v), h(uE, v), h(Sy, v), h(rs(), v), h(Ey, v), h(p_(), v), h(Cy, v), h(sc, v), h(S_, v);
})(nl);
function xM({ action: v, active: m }, h) {
  var R;
  return /* @__PURE__ */ oy(
    "div",
    {
      ref: h,
      style: {
        margin: "2px 8px",
        padding: "8px 8px",
        color: m ? "white" : "black",
        background: m ? "#ff641e" : "#fff",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer"
      },
      children: [
        /* @__PURE__ */ oy(
          "div",
          {
            style: {
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: 14
            },
            children: [
              v.icon && v.icon,
              /* @__PURE__ */ oy("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ Ma("span", { children: v.name }),
                v.subtitle && /* @__PURE__ */ Ma("span", { style: { fontSize: 12, opacity: 0.75 }, children: v.subtitle })
              ] })
            ]
          }
        ),
        ((R = v.shortcut) == null ? void 0 : R.length) && /* @__PURE__ */ Ma("div", { style: { display: "grid", gridAutoFlow: "column", gap: "4px" }, children: v.shortcut.map((O) => /* @__PURE__ */ Ma(
          "kbd",
          {
            style: {
              padding: "4px 6px",
              background: "rgba(0 0 0 / .1)",
              borderRadius: "4px",
              fontSize: 14
            },
            children: O
          },
          O
        )) })
      ]
    }
  );
}
const OM = Tt.forwardRef(xM), DM = {
  padding: "8px 16px",
  fontSize: "12px"
};
function kM() {
  const { results: v } = nl.useMatches();
  return /* @__PURE__ */ Ma(
    nl.KBarResults,
    {
      items: v,
      onRender: ({ item: m, active: h }) => typeof m == "string" ? /* @__PURE__ */ Ma("div", { style: DM, children: m }) : /* @__PURE__ */ Ma(OM, { action: m, active: h })
    }
  );
}
function MM({ action: v }) {
  return nl.useRegisterActions(v), null;
}
const LM = {
  maxWidth: "600px",
  width: "100%",
  borderRadius: "8px",
  overflow: "hidden",
  background: "#fff"
}, NM = {
  padding: "12px 16px",
  fontFamily: "'Source Code Pro', monospace",
  fontSize: "16px",
  width: "100%",
  outline: "none",
  border: "none"
};
function AM() {
  const [v, m] = Tt.useState(), h = () => {
    const R = document.querySelectorAll(".docs-sheet-tab"), A = [...R].map((E) => {
      var W;
      return ((W = E.querySelector("span")) == null ? void 0 : W.textContent) || "";
    }).map((E, W) => {
      var H;
      return nl.createAction({
        name: E,
        shortcut: [...((H = E.at(0)) == null ? void 0 : H.toLocaleLowerCase()) ?? ""],
        keywords: E.at(0),
        perform: () => R[W].dispatchEvent(new MouseEvent("mousedown", { bubbles: !0 }))
      });
    });
    m(A);
  };
  return /* @__PURE__ */ Ma(nl.KBarProvider, { actions: v, options: { callbacks: { onOpen: h } }, children: /* @__PURE__ */ Ma(nl.KBarPortal, { children: /* @__PURE__ */ Ma(nl.KBarPositioner, { children: /* @__PURE__ */ oy(nl.KBarAnimator, { style: LM, children: [
    /* @__PURE__ */ Ma(nl.KBarSearch, { style: NM, defaultPlaceholder: "搜索工作表" }),
    /* @__PURE__ */ Ma(kM, {}),
    Array.isArray(v) && (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ Ma(MM, { action: v })
  ] }) }) }) });
}
const E_ = document.createElement("div");
document.body.appendChild(E_);
hp.createRoot(E_).render(
  /* @__PURE__ */ Ma(Yn.StrictMode, { children: /* @__PURE__ */ Ma(AM, {}) })
);
