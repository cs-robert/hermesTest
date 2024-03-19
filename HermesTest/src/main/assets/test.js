'use strict';
var globalThis = this;
var hm_id = 1;
var idGenerator = () => hm_id++;
var testStr = "hello";
var console = {
  log: (...msgs) => printLog("console.log", ...msgs),
  debug: (...msgs) => printLog("console.debug", ...msgs),
  info: (...msgs) => printLog("console.info", ...msgs),
  warn: (...msgs) => printLog("console.warn", ...msgs),
  error: (...msgs) => printLog("console.error", ...msgs),
  assert: (assertion, ...msgs) => { if (!assertion) printLog("console.log", ...msgs) }
};
var __IS_DEBUG__ = true;


var printLog = (funcName, ...msgs) => {
  if (__IS_DEBUG__) {
    let msg = '';

    if (msgs.length == 1) {
      let m = msgs[0];

      if (typeof m === 'undefined') {
        msg = 'undefined';
      } else if (m == null) {
        msg = 'null';
      } else if (m instanceof Function) {
        msg = m.toString();
      } else if (m instanceof Object) {
        msg = JSON.stringify(m);
        if (m.message) {
          msg = msg.concat(', ').concat(m.message).concat('\n').concat(m.stack)
        }
      } else {
        msg = m.toString();
      }
    } else if (msgs.length > 1) {
      for (let i = 0; i < msgs.length; i++) {
        if (i > 0) {
          msg = msg.concat(', ');
        }

        let m = msgs[i];

        if (typeof m === 'undefined') {
          msg = msg.concat('undefined');
        } else if (m == null) {
          msg = msg.concat('null');
        } else if (m instanceof Function) {
          msg = msg.concat(m.toString());
        } else if (m instanceof Object) {
          msg = msg.concat(JSON.stringify(m));
          if (m.message) {
            msg = msg.concat(', ').concat(m.message).concat('\n').concat(m.stack)
          }
        } else {
          msg = msg.concat(m.toString());
        }
      }
    }

    JsNativeLog(msg);

  }
};


var _my_rt = {
  ctxs: {},
  createContext(name) {
    console.log("create_proxy")

    var scopeGlobal = {
      Symbol: globalThis.Symbol,
      Map: globalThis.Map,
      Set: globalThis.Set,
    }

    scopeGlobal.setTimeout = (func, timeout) => {
      let timerId = idGenerator();
      return timerId;
    };

    scopeGlobal.clearTimeout = timerId => {
    };

    scopeGlobal.setInterval = (func, interval) => {
      let timerId = idGenerator();
      return timerId;
    };

    scopeGlobal.clearInterval = timerId => {
    };

    scopeGlobal.setImmediate = (func) => {
      let timerId = idGenerator();
      return timerId;
    };




    this.ctxs[name] = scopeGlobal

  },
  getGlobal(name) {
    return this.ctxs[name];
  },
  removeGlobal(name) {
    delete this.ctxs[name];
  },
  evaluateInContext(name, fn) {
    var global = this.ctxs[name];
    if (!global) {
      throw new Error('Biz not registered in this zone');
    } else {
      console.log(`evaluateInContext ${global} ${global.__instantModuleProxy}`)
    }
    return fn(global);
  }
};

console.log(' out global ', globalThis, Object.keys(globalThis));

_my_rt.createContext("testModule");


(function () {

  var my_engineGlobal = { v: 1 };
  var my_engineGlobal2 = { v: 2 };
  var my_engineGlobal3 = { v: 3 };
  var my_engineGlobal4 = { v: 4 };
  var my_engineGlobal5 = { v: 5 };
  var my_engineGlobal6 = { v: 6 };
  var my_engineGlobal7 = { v: 7 };
  var my_engineGlobal8 = { v: 8 };
  var my_engineGlobal9 = { v: 9 };
  var my_engineGlobal10 = { v: 10 };
  var my_engineGlobal11 = { v: 11 };
  var my_engineGlobal12 = { v: 12 };
  var my_engineGlobal13 = { v: 13 };
  var my_engineGlobal14 = { v: 14 };
  var my_engineGlobal15 = { v: 15 };


  if (!globalThis._my_rt) {
    globalThis._my_rt = {
      evaluateInContext(name, fn) {
        fn(globalThis);
      }
    }
  }
  _my_rt.evaluateInContext('testModule', function (global) {
    console.log('  evaluateInContext start ', Object.keys(global).length, Object.keys(global));
    var globalThis = global;
    console.log('  evaluateInContext start ', Object.keys(globalThis).length, Object.keys(globalThis));
    var window = globalThis.window;
    var setTimeout = globalThis.setTimeout;
    globalThis.window = globalThis;
    globalThis.console = console;
    var AbortController = function (...args) {
      return new globalThis.AbortController(...args);
    };
    var XMLHttpRequest = function (...args) {
      return new globalThis.XMLHttpRequest(...args);
    };

      /******/ (() => { // webpackBootstrap webpack闭包开始

      var testModuleKK = { test: 1 };
 /******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/.pnpm/abort-controller@3.0.0/node_modules/abort-controller/dist/abort-controller.umd.js":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/abort-controller@3.0.0/node_modules/abort-controller/dist/abort-controller.umd.js ***!
  \***************************************************************************************************************/
/***/ (function (__unused_webpack_module, exports) {

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */(function (a, b) { true ? b(exports) : 0 })(this, function (a) { 'use strict'; function b(a) { return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, b(a) } function c(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function d(a, b) { for (var c, d = 0; d < b.length; d++)c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c) } function e(a, b, c) { return b && d(a.prototype, b), c && d(a, c), a } function f(a, b) { if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function"); a.prototype = Object.create(b && b.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), b && h(a, b) } function g(a) { return g = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) { return a.__proto__ || Object.getPrototypeOf(a) }, g(a) } function h(a, b) { return h = Object.setPrototypeOf || function (a, b) { return a.__proto__ = b, a }, h(a, b) } function i(a) { if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return a } function j(a, b) { return b && ("object" == typeof b || "function" == typeof b) ? b : i(a) } function k(a) { var b = F.get(a); return console.assert(null != b, "'this' is expected an Event object, but got", a), b } function l(a) { return null == a.passiveListener ? void (!a.event.cancelable || (a.canceled = !0, "function" == typeof a.event.preventDefault && a.event.preventDefault())) : void ("undefined" != typeof console && "function" == typeof console.error && console.error("Unable to preventDefault inside passive event listener invocation.", a.passiveListener)) } function m(a, b) { F.set(this, { eventTarget: a, event: b, eventPhase: 2, currentTarget: a, canceled: !1, stopped: !1, immediateStopped: !1, passiveListener: null, timeStamp: b.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: !1, enumerable: !0 }); for (var c, d = Object.keys(b), e = 0; e < d.length; ++e)c = d[e], c in this || Object.defineProperty(this, c, n(c)) } function n(a) { return { get: function () { return k(this).event[a] }, set: function (b) { k(this).event[a] = b }, configurable: !0, enumerable: !0 } } function o(a) { return { value: function () { var b = k(this).event; return b[a].apply(b, arguments) }, configurable: !0, enumerable: !0 } } function p(a, b) { function c(b, c) { a.call(this, b, c) } var d = Object.keys(b); if (0 === d.length) return a; c.prototype = Object.create(a.prototype, { constructor: { value: c, configurable: !0, writable: !0 } }); for (var e, f = 0; f < d.length; ++f)if (e = d[f], !(e in a.prototype)) { var g = Object.getOwnPropertyDescriptor(b, e), h = "function" == typeof g.value; Object.defineProperty(c.prototype, e, h ? o(e) : n(e)) } return c } function q(a) { if (null == a || a === Object.prototype) return m; var b = G.get(a); return null == b && (b = p(q(Object.getPrototypeOf(a)), a), G.set(a, b)), b } function r(a, b) { var c = q(Object.getPrototypeOf(b)); return new c(a, b) } function s(a) { return k(a).immediateStopped } function t(a, b) { k(a).eventPhase = b } function u(a, b) { k(a).currentTarget = b } function v(a, b) { k(a).passiveListener = b } function w(a) { return null !== a && "object" === b(a) } function x(a) { var b = H.get(a); if (null == b) throw new TypeError("'this' is expected an EventTarget object, but got another value."); return b } function y(a) { return { get: function () { for (var b = x(this), c = b.get(a); null != c;) { if (3 === c.listenerType) return c.listener; c = c.next } return null }, set: function (b) { "function" == typeof b || w(b) || (b = null); for (var c = x(this), d = null, e = c.get(a); null != e;)3 === e.listenerType ? null === d ? null === e.next ? c.delete(a) : c.set(a, e.next) : d.next = e.next : d = e, e = e.next; if (null !== b) { var f = { listener: b, listenerType: 3, passive: !1, once: !1, next: null }; null === d ? c.set(a, f) : d.next = f } }, configurable: !0, enumerable: !0 } } function z(a, b) { Object.defineProperty(a, "on".concat(b), y(b)) } function A(a) { function b() { B.call(this) } b.prototype = Object.create(B.prototype, { constructor: { value: b, configurable: !0, writable: !0 } }); for (var c = 0; c < a.length; ++c)z(b.prototype, a[c]); return b } function B() { if (this instanceof B) return void H.set(this, new Map); if (1 === arguments.length && Array.isArray(arguments[0])) return A(arguments[0]); if (0 < arguments.length) { for (var a = Array(arguments.length), b = 0; b < arguments.length; ++b)a[b] = arguments[b]; return A(a) } throw new TypeError("Cannot call a class as a function") } function C() { var a = Object.create(K.prototype); return B.call(a), L.set(a, !1), a } function D(a) { !1 !== L.get(a) || (L.set(a, !0), a.dispatchEvent({ type: "abort" })) } function E(a) { var c = N.get(a); if (null == c) throw new TypeError("Expected 'this' to be an 'AbortController' object, but got ".concat(null === a ? "null" : b(a))); return c } var F = new WeakMap, G = new WeakMap; m.prototype = { get type() { return k(this).event.type }, get target() { return k(this).eventTarget }, get currentTarget() { return k(this).currentTarget }, composedPath: function () { var a = k(this).currentTarget; return null == a ? [] : [a] }, get NONE() { return 0 }, get CAPTURING_PHASE() { return 1 }, get AT_TARGET() { return 2 }, get BUBBLING_PHASE() { return 3 }, get eventPhase() { return k(this).eventPhase }, stopPropagation: function () { var a = k(this); a.stopped = !0, "function" == typeof a.event.stopPropagation && a.event.stopPropagation() }, stopImmediatePropagation: function () { var a = k(this); a.stopped = !0, a.immediateStopped = !0, "function" == typeof a.event.stopImmediatePropagation && a.event.stopImmediatePropagation() }, get bubbles() { return !!k(this).event.bubbles }, get cancelable() { return !!k(this).event.cancelable }, preventDefault: function () { l(k(this)) }, get defaultPrevented() { return k(this).canceled }, get composed() { return !!k(this).event.composed }, get timeStamp() { return k(this).timeStamp }, get srcElement() { return k(this).eventTarget }, get cancelBubble() { return k(this).stopped }, set cancelBubble(a) { if (a) { var b = k(this); b.stopped = !0, "boolean" == typeof b.event.cancelBubble && (b.event.cancelBubble = !0) } }, get returnValue() { return !k(this).canceled }, set returnValue(a) { a || l(k(this)) }, initEvent: function () { } }, Object.defineProperty(m.prototype, "constructor", { value: m, configurable: !0, writable: !0 }), "undefined" != typeof window && "undefined" != typeof window.Event && (Object.setPrototypeOf(m.prototype, window.Event.prototype), G.set(window.Event.prototype, m)); var H = new WeakMap, I = 1, J = 2; B.prototype = { addEventListener: function (a, b, c) { if (null != b) { if ("function" != typeof b && !w(b)) throw new TypeError("'listener' should be a function or an object."); var d = x(this), e = w(c), f = e ? !!c.capture : !!c, g = f ? I : J, h = { listener: b, listenerType: g, passive: e && !!c.passive, once: e && !!c.once, next: null }, i = d.get(a); if (void 0 === i) return void d.set(a, h); for (var j = null; null != i;) { if (i.listener === b && i.listenerType === g) return; j = i, i = i.next } j.next = h } }, removeEventListener: function (a, b, c) { if (null != b) for (var d = x(this), e = w(c) ? !!c.capture : !!c, f = e ? I : J, g = null, h = d.get(a); null != h;) { if (h.listener === b && h.listenerType === f) return void (null === g ? null === h.next ? d.delete(a) : d.set(a, h.next) : g.next = h.next); g = h, h = h.next } }, dispatchEvent: function (a) { if (null == a || "string" != typeof a.type) throw new TypeError("\"event.type\" should be a string."); var b = x(this), c = a.type, d = b.get(c); if (null == d) return !0; for (var e = r(this, a), f = null; null != d;) { if (d.once ? null === f ? null === d.next ? b.delete(c) : b.set(c, d.next) : f.next = d.next : f = d, v(e, d.passive ? d.listener : null), "function" == typeof d.listener) try { d.listener.call(this, e) } catch (a) { "undefined" != typeof console && "function" == typeof console.error && console.error(a) } else d.listenerType !== 3 && "function" == typeof d.listener.handleEvent && d.listener.handleEvent(e); if (s(e)) break; d = d.next } return v(e, null), t(e, 0), u(e, null), !e.defaultPrevented } }, Object.defineProperty(B.prototype, "constructor", { value: B, configurable: !0, writable: !0 }), "undefined" != typeof window && "undefined" != typeof window.EventTarget && Object.setPrototypeOf(B.prototype, window.EventTarget.prototype); var K = function (a) { function d() { var a; throw c(this, d), a = j(this, g(d).call(this)), new TypeError("AbortSignal cannot be constructed directly") } return f(d, a), e(d, [{ key: "aborted", get: function () { var a = L.get(this); if ("boolean" != typeof a) throw new TypeError("Expected 'this' to be an 'AbortSignal' object, but got ".concat(null === this ? "null" : b(this))); return a } }]), d }(B); z(K.prototype, "abort"); var L = new WeakMap; Object.defineProperties(K.prototype, { aborted: { enumerable: !0 } }), "function" == typeof Symbol && "symbol" === b(Symbol.toStringTag) && Object.defineProperty(K.prototype, Symbol.toStringTag, { configurable: !0, value: "AbortSignal" }); var M = function () { function a() { c(this, a), N.set(this, C()) } return e(a, [{ key: "abort", value: function () { D(E(this)) } }, { key: "signal", get: function () { return E(this) } }]), a }(), N = new WeakMap; if (Object.defineProperties(M.prototype, { signal: { enumerable: !0 }, abort: { enumerable: !0 } }), "function" == typeof Symbol && "symbol" === b(Symbol.toStringTag) && Object.defineProperty(M.prototype, Symbol.toStringTag, { configurable: !0, value: "AbortController" }), a.AbortController = M, a.AbortSignal = K, a.default = M, Object.defineProperty(a, "__esModule", { value: !0 }), false && 0) { var O = Function("return this")(); "undefined" == typeof O.AbortController && (O.AbortController = M, O.AbortSignal = K) } });
            //# sourceMappingURL=abort-controller.umd.js.map


            /***/
          }),


/***/ "../node_modules/.pnpm/object-path@0.11.8/node_modules/object-path/index.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/.pnpm/object-path@0.11.8/node_modules/object-path/index.js ***!
  \**********************************************************************************/
/***/ (function (module, exports) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; (function (root, factory) {
              'use strict'

              /*istanbul ignore next:cant test*/
              if (true && typeof module.exports === 'object') {
                module.exports = factory()
              } else if (true) {
                // AMD. Register as an anonymous module.
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                  __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                    (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                  __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
              } else { }
            })(this, function () {
              'use strict'

              var toStr = Object.prototype.toString

              function hasOwnProperty(obj, prop) {
                if (obj == null) {
                  return false
                }
                //to handle objects with null prototypes (too edge case?)
                return Object.prototype.hasOwnProperty.call(obj, prop)
              }

              function isEmpty(value) {
                if (!value) {
                  return true
                }
                if (isArray(value) && value.length === 0) {
                  return true
                } else if (typeof value !== 'string') {
                  for (var i in value) {
                    if (hasOwnProperty(value, i)) {
                      return false
                    }
                  }
                  return true
                }
                return false
              }

              function toString(type) {
                return toStr.call(type)
              }

              function isObject(obj) {
                return typeof obj === 'object' && toString(obj) === '[object Object]'
              }

              var isArray = Array.isArray || function (obj) {
                /*istanbul ignore next:cant test*/
                return toStr.call(obj) === '[object Array]'
              }

              function isBoolean(obj) {
                return typeof obj === 'boolean' || toString(obj) === '[object Boolean]'
              }

              function getKey(key) {
                var intKey = parseInt(key)
                if (intKey.toString() === key) {
                  return intKey
                }
                return key
              }

              function factory(options) {
                options = options || {}

                var objectPath = function (obj) {
                  return Object.keys(objectPath).reduce(function (proxy, prop) {
                    if (prop === 'create') {
                      return proxy
                    }

                    /*istanbul ignore else*/
                    if (typeof objectPath[prop] === 'function') {
                      proxy[prop] = objectPath[prop].bind(objectPath, obj)
                    }

                    return proxy
                  }, {})
                }

                var hasShallowProperty
                if (options.includeInheritedProps) {
                  hasShallowProperty = function () {
                    return true
                  }
                } else {
                  hasShallowProperty = function (obj, prop) {
                    return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
                  }
                }

                function getShallowProperty(obj, prop) {
                  if (hasShallowProperty(obj, prop)) {
                    return obj[prop]
                  }
                }

                var getShallowPropertySafely
                if (options.includeInheritedProps) {
                  getShallowPropertySafely = function (obj, currentPath) {
                    if (typeof currentPath !== 'string' && typeof currentPath !== 'number') {
                      currentPath = String(currentPath)
                    }
                    var currentValue = getShallowProperty(obj, currentPath)
                    if (currentPath === '__proto__' || currentPath === 'prototype' ||
                      (currentPath === 'constructor' && typeof currentValue === 'function')) {
                      throw new Error('For security reasons, object\'s magic properties cannot be set')
                    }
                    return currentValue
                  }
                } else {
                  getShallowPropertySafely = function (obj, currentPath) {
                    return getShallowProperty(obj, currentPath)
                  }
                }

                function set(obj, path, value, doNotReplace) {
                  if (typeof path === 'number') {
                    path = [path]
                  }
                  if (!path || path.length === 0) {
                    return obj
                  }
                  if (typeof path === 'string') {
                    return set(obj, path.split('.').map(getKey), value, doNotReplace)
                  }
                  var currentPath = path[0]
                  var currentValue = getShallowPropertySafely(obj, currentPath)
                  if (path.length === 1) {
                    if (currentValue === void 0 || !doNotReplace) {
                      obj[currentPath] = value
                    }
                    return currentValue
                  }

                  if (currentValue === void 0) {
                    //check if we assume an array
                    if (typeof path[1] === 'number') {
                      obj[currentPath] = []
                    } else {
                      obj[currentPath] = {}
                    }
                  }

                  return set(obj[currentPath], path.slice(1), value, doNotReplace)
                }

                objectPath.has = function (obj, path) {
                  if (typeof path === 'number') {
                    path = [path]
                  } else if (typeof path === 'string') {
                    path = path.split('.')
                  }

                  if (!path || path.length === 0) {
                    return !!obj
                  }

                  for (var i = 0; i < path.length; i++) {
                    var j = getKey(path[i])

                    if ((typeof j === 'number' && isArray(obj) && j < obj.length) ||
                      (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
                      obj = obj[j]
                    } else {
                      return false
                    }
                  }

                  return true
                }

                objectPath.ensureExists = function (obj, path, value) {
                  return set(obj, path, value, true)
                }

                objectPath.set = function (obj, path, value, doNotReplace) {
                  return set(obj, path, value, doNotReplace)
                }

                objectPath.insert = function (obj, path, value, at) {
                  var arr = objectPath.get(obj, path)
                  at = ~~at
                  if (!isArray(arr)) {
                    arr = []
                    objectPath.set(obj, path, arr)
                  }
                  arr.splice(at, 0, value)
                }

                objectPath.empty = function (obj, path) {
                  if (isEmpty(path)) {
                    return void 0
                  }
                  if (obj == null) {
                    return void 0
                  }

                  var value, i
                  if (!(value = objectPath.get(obj, path))) {
                    return void 0
                  }

                  if (typeof value === 'string') {
                    return objectPath.set(obj, path, '')
                  } else if (isBoolean(value)) {
                    return objectPath.set(obj, path, false)
                  } else if (typeof value === 'number') {
                    return objectPath.set(obj, path, 0)
                  } else if (isArray(value)) {
                    value.length = 0
                  } else if (isObject(value)) {
                    for (i in value) {
                      if (hasShallowProperty(value, i)) {
                        delete value[i]
                      }
                    }
                  } else {
                    return objectPath.set(obj, path, null)
                  }
                }

                objectPath.push = function (obj, path /*, values */) {
                  var arr = objectPath.get(obj, path)
                  if (!isArray(arr)) {
                    arr = []
                    objectPath.set(obj, path, arr)
                  }

                  arr.push.apply(arr, Array.prototype.slice.call(arguments, 2))
                }

                objectPath.coalesce = function (obj, paths, defaultValue) {
                  var value

                  for (var i = 0, len = paths.length; i < len; i++) {
                    if ((value = objectPath.get(obj, paths[i])) !== void 0) {
                      return value
                    }
                  }

                  return defaultValue
                }

                objectPath.get = function (obj, path, defaultValue) {
                  if (typeof path === 'number') {
                    path = [path]
                  }
                  if (!path || path.length === 0) {
                    return obj
                  }
                  if (obj == null) {
                    return defaultValue
                  }
                  if (typeof path === 'string') {
                    return objectPath.get(obj, path.split('.'), defaultValue)
                  }

                  var currentPath = getKey(path[0])
                  var nextObj = getShallowPropertySafely(obj, currentPath)
                  if (nextObj === void 0) {
                    return defaultValue
                  }

                  if (path.length === 1) {
                    return nextObj
                  }

                  return objectPath.get(obj[currentPath], path.slice(1), defaultValue)
                }

                objectPath.del = function del(obj, path) {
                  if (typeof path === 'number') {
                    path = [path]
                  }

                  if (obj == null) {
                    return obj
                  }

                  if (isEmpty(path)) {
                    return obj
                  }
                  if (typeof path === 'string') {
                    return objectPath.del(obj, path.split('.'))
                  }

                  var currentPath = getKey(path[0])
                  getShallowPropertySafely(obj, currentPath)
                  if (!hasShallowProperty(obj, currentPath)) {
                    return obj
                  }

                  if (path.length === 1) {
                    if (isArray(obj)) {
                      obj.splice(currentPath, 1)
                    } else {
                      delete obj[currentPath]
                    }
                  } else {
                    return objectPath.del(obj[currentPath], path.slice(1))
                  }

                  return obj
                }

                return objectPath
              }

              var mod = factory()
              mod.create = factory
              mod.withInheritedProps = factory({ includeInheritedProps: true })
              return mod
            })


            /***/
          }),


/***/ "../node_modules/.pnpm/whatwg-fetch@3.6.19/node_modules/whatwg-fetch/fetch.js":
/*!************************************************************************************!*\
  !*** ../node_modules/.pnpm/whatwg-fetch@3.6.19/node_modules/whatwg-fetch/fetch.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMException": () => (/* binding */ DOMException),
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "fetch": () => (/* binding */ fetch)
              /* harmony export */
            });
            /* eslint-disable no-prototype-builtins */
            var g =
              (typeof globalThis !== 'undefined' && globalThis) ||
              (typeof self !== 'undefined' && self) ||
              // eslint-disable-next-line no-undef
              (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||
              {}

            var support = {
              searchParams: 'URLSearchParams' in g,
              iterable: 'Symbol' in g && 'iterator' in Symbol,
              blob:
                'FileReader' in g &&
                'Blob' in g &&
                (function () {
                  try {
                    new Blob()
                    return true
                  } catch (e) {
                    return false
                  }
                })(),
              formData: 'FormData' in g,
              arrayBuffer: 'ArrayBuffer' in g
            }

            function isDataView(obj) {
              return obj && DataView.prototype.isPrototypeOf(obj)
            }

            if (support.arrayBuffer) {
              var viewClasses = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
              ]

              var isArrayBufferView =
                ArrayBuffer.isView ||
                function (obj) {
                  return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
                }
            }

            function normalizeName(name) {
              if (typeof name !== 'string') {
                name = String(name)
              }
              if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
                throw new TypeError('Invalid character in header field name: "' + name + '"')
              }
              return name.toLowerCase()
            }

            function normalizeValue(value) {
              if (typeof value !== 'string') {
                value = String(value)
              }
              return value
            }

            // Build a destructive iterator for the value list
            function iteratorFor(items) {
              var iterator = {
                next: function () {
                  var value = items.shift()
                  return { done: value === undefined, value: value }
                }
              }

              if (support.iterable) {
                iterator[Symbol.iterator] = function () {
                  return iterator
                }
              }

              return iterator
            }

            function Headers(headers) {
              this.map = {}

              if (headers instanceof Headers) {
                headers.forEach(function (value, name) {
                  this.append(name, value)
                }, this)
              } else if (Array.isArray(headers)) {
                headers.forEach(function (header) {
                  if (header.length != 2) {
                    throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
                  }
                  this.append(header[0], header[1])
                }, this)
              } else if (headers) {
                Object.getOwnPropertyNames(headers).forEach(function (name) {
                  this.append(name, headers[name])
                }, this)
              }
            }

            Headers.prototype.append = function (name, value) {
              name = normalizeName(name)
              value = normalizeValue(value)
              var oldValue = this.map[name]
              this.map[name] = oldValue ? oldValue + ', ' + value : value
            }

            Headers.prototype['delete'] = function (name) {
              delete this.map[normalizeName(name)]
            }

            Headers.prototype.get = function (name) {
              name = normalizeName(name)
              return this.has(name) ? this.map[name] : null
            }

            Headers.prototype.has = function (name) {
              return this.map.hasOwnProperty(normalizeName(name))
            }

            Headers.prototype.set = function (name, value) {
              this.map[normalizeName(name)] = normalizeValue(value)
            }

            Headers.prototype.forEach = function (callback, thisArg) {
              for (var name in this.map) {
                if (this.map.hasOwnProperty(name)) {
                  callback.call(thisArg, this.map[name], name, this)
                }
              }
            }

            Headers.prototype.keys = function () {
              var items = []
              this.forEach(function (value, name) {
                items.push(name)
              })
              return iteratorFor(items)
            }

            Headers.prototype.values = function () {
              var items = []
              this.forEach(function (value) {
                items.push(value)
              })
              return iteratorFor(items)
            }

            Headers.prototype.entries = function () {
              var items = []
              this.forEach(function (value, name) {
                items.push([name, value])
              })
              return iteratorFor(items)
            }

            if (support.iterable) {
              Headers.prototype[Symbol.iterator] = Headers.prototype.entries
            }

            function consumed(body) {
              if (body._noBody) return
              if (body.bodyUsed) {
                return Promise.reject(new TypeError('Already read'))
              }
              body.bodyUsed = true
            }

            function fileReaderReady(reader) {
              return new Promise(function (resolve, reject) {
                reader.onload = function () {
                  resolve(reader.result)
                }
                reader.onerror = function () {
                  reject(reader.error)
                }
              })
            }

            function readBlobAsArrayBuffer(blob) {
              var reader = new FileReader()
              var promise = fileReaderReady(reader)
              reader.readAsArrayBuffer(blob)
              return promise
            }

            function readBlobAsText(blob) {
              var reader = new FileReader()
              var promise = fileReaderReady(reader)
              var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type)
              var encoding = match ? match[1] : 'utf-8'
              reader.readAsText(blob, encoding)
              return promise
            }

            function readArrayBufferAsText(buf) {
              var view = new Uint8Array(buf)
              var chars = new Array(view.length)

              for (var i = 0; i < view.length; i++) {
                chars[i] = String.fromCharCode(view[i])
              }
              return chars.join('')
            }

            function bufferClone(buf) {
              if (buf.slice) {
                return buf.slice(0)
              } else {
                var view = new Uint8Array(buf.byteLength)
                view.set(new Uint8Array(buf))
                return view.buffer
              }
            }

            function Body() {
              this.bodyUsed = false

              this._initBody = function (body) {
                /*
                  fetch-mock wraps the Response object in an ES6 Proxy to
                  provide useful test harness features such as flush. However, on
                  ES5 browsers without fetch or Proxy support pollyfills must be used;
                  the proxy-pollyfill is unable to proxy an attribute unless it exists
                  on the object before the Proxy is created. This change ensures
                  Response.bodyUsed exists on the instance, while maintaining the
                  semantic of setting Request.bodyUsed in the constructor before
                  _initBody is called.
                */
                // eslint-disable-next-line no-self-assign
                this.bodyUsed = this.bodyUsed
                this._bodyInit = body
                if (!body) {
                  this._noBody = true;
                  this._bodyText = ''
                } else if (typeof body === 'string') {
                  this._bodyText = body
                } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                  this._bodyBlob = body
                } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                  this._bodyFormData = body
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this._bodyText = body.toString()
                } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                  this._bodyArrayBuffer = bufferClone(body.buffer)
                  // IE 10-11 can't handle a DataView body.
                  this._bodyInit = new Blob([this._bodyArrayBuffer])
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                  this._bodyArrayBuffer = bufferClone(body)
                } else {
                  this._bodyText = body = Object.prototype.toString.call(body)
                }

                if (!this.headers.get('content-type')) {
                  if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type)
                  } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
                  }
                }
              }

              if (support.blob) {
                this.blob = function () {
                  var rejected = consumed(this)
                  if (rejected) {
                    return rejected
                  }

                  if (this._bodyBlob) {
                    return Promise.resolve(this._bodyBlob)
                  } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                  } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob')
                  } else {
                    return Promise.resolve(new Blob([this._bodyText]))
                  }
                }
              }

              this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var isConsumed = consumed(this)
                  if (isConsumed) {
                    return isConsumed
                  } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                    return Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                      )
                    )
                  } else {
                    return Promise.resolve(this._bodyArrayBuffer)
                  }
                } else if (support.blob) {
                  return this.blob().then(readBlobAsArrayBuffer)
                } else {
                  throw new Error('could not read as ArrayBuffer')
                }
              }

              this.text = function () {
                var rejected = consumed(this)
                if (rejected) {
                  return rejected
                }

                if (this._bodyBlob) {
                  return readBlobAsText(this._bodyBlob)
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
                } else if (this._bodyFormData) {
                  throw new Error('could not read FormData body as text')
                } else {
                  return Promise.resolve(this._bodyText)
                }
              }

              if (support.formData) {
                this.formData = function () {
                  return this.text().then(decode)
                }
              }

              this.json = function () {
                return this.text().then(JSON.parse)
              }

              return this
            }

            // HTTP methods whose capitalization should be normalized
            var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE']

            function normalizeMethod(method) {
              var upcased = method.toUpperCase()
              return methods.indexOf(upcased) > -1 ? upcased : method
            }

            function Request(input, options) {
              if (!(this instanceof Request)) {
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
              }

              options = options || {}
              var body = options.body

              if (input instanceof Request) {
                if (input.bodyUsed) {
                  throw new TypeError('Already read')
                }
                this.url = input.url
                this.credentials = input.credentials
                if (!options.headers) {
                  this.headers = new Headers(input.headers)
                }
                this.method = input.method
                this.mode = input.mode
                this.signal = input.signal
                if (!body && input._bodyInit != null) {
                  body = input._bodyInit
                  input.bodyUsed = true
                }
              } else {
                this.url = String(input)
              }

              this.credentials = options.credentials || this.credentials || 'same-origin'
              if (options.headers || !this.headers) {
                this.headers = new Headers(options.headers)
              }
              this.method = normalizeMethod(options.method || this.method || 'GET')
              this.mode = options.mode || this.mode || null
              this.signal = options.signal || this.signal || (function () {
                if ('AbortController' in g) {
                  var ctrl = new AbortController();
                  return ctrl.signal;
                }
              }());
              this.referrer = null

              if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                throw new TypeError('Body not allowed for GET or HEAD requests')
              }
              this._initBody(body)

              if (this.method === 'GET' || this.method === 'HEAD') {
                if (options.cache === 'no-store' || options.cache === 'no-cache') {
                  // Search for a '_' parameter in the query string
                  var reParamSearch = /([?&])_=[^&]*/
                  if (reParamSearch.test(this.url)) {
                    // If it already exists then set the value with the current time
                    this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
                  } else {
                    // Otherwise add a new '_' parameter to the end with the current time
                    var reQueryString = /\?/
                    this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
                  }
                }
              }
            }

            Request.prototype.clone = function () {
              return new Request(this, { body: this._bodyInit })
            }

            function decode(body) {
              var form = new FormData()
              body
                .trim()
                .split('&')
                .forEach(function (bytes) {
                  if (bytes) {
                    var split = bytes.split('=')
                    var name = split.shift().replace(/\+/g, ' ')
                    var value = split.join('=').replace(/\+/g, ' ')
                    form.append(decodeURIComponent(name), decodeURIComponent(value))
                  }
                })
              return form
            }

            function parseHeaders(rawHeaders) {
              var headers = new Headers()
              // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
              // https://tools.ietf.org/html/rfc7230#section-3.2
              var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
              // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
              // https://github.com/github/fetch/issues/748
              // https://github.com/zloirock/core-js/issues/751
              preProcessedHeaders
                .split('\r')
                .map(function (header) {
                  return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
                })
                .forEach(function (line) {
                  var parts = line.split(':')
                  var key = parts.shift().trim()
                  if (key) {
                    var value = parts.join(':').trim()
                    try {
                      headers.append(key, value)
                    } catch (error) {
                      console.warn('Response ' + error.message)
                    }
                  }
                })
              return headers
            }

            Body.call(Request.prototype)

            function Response(bodyInit, options) {
              if (!(this instanceof Response)) {
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
              }
              if (!options) {
                options = {}
              }

              this.type = 'default'
              this.status = options.status === undefined ? 200 : options.status
              if (this.status < 200 || this.status > 599) {
                throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
              }
              this.ok = this.status >= 200 && this.status < 300
              this.statusText = options.statusText === undefined ? '' : '' + options.statusText
              this.headers = new Headers(options.headers)
              this.url = options.url || ''
              this._initBody(bodyInit)
            }

            Body.call(Response.prototype)

            Response.prototype.clone = function () {
              return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
              })
            }

            Response.error = function () {
              var response = new Response(null, { status: 200, statusText: '' })
              response.status = 0
              response.type = 'error'
              return response
            }

            var redirectStatuses = [301, 302, 303, 307, 308]

            Response.redirect = function (url, status) {
              if (redirectStatuses.indexOf(status) === -1) {
                throw new RangeError('Invalid status code')
              }

              return new Response(null, { status: status, headers: { location: url } })
            }

            var DOMException = g.DOMException
            try {
              new DOMException()
            } catch (err) {
              DOMException = function (message, name) {
                this.message = message
                this.name = name
                var error = Error(message)
                this.stack = error.stack
              }
              DOMException.prototype = Object.create(Error.prototype)
              DOMException.prototype.constructor = DOMException
            }

            function fetch(input, init) {
              return new Promise(function (resolve, reject) {
                var request = new Request(input, init)

                if (request.signal && request.signal.aborted) {
                  return reject(new DOMException('Aborted', 'AbortError'))
                }

                var xhr = new XMLHttpRequest()

                function abortXhr() {
                  xhr.abort()
                }

                xhr.onload = function () {
                  var options = {
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                  }
                  // This check if specifically for when a user fetches a file locally from the file system
                  // Only if the status is out of a normal range
                  if (request.url.startsWith('file://') && (xhr.status < 200 || xhr.status > 599)) {
                    options.status = 200;
                  } else {
                    options.status = xhr.status;
                  }
                  options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
                  var body = 'response' in xhr ? xhr.response : xhr.responseText
                  setTimeout(function () {
                    resolve(new Response(body, options))
                  }, 0)
                }

                xhr.onerror = function () {
                  setTimeout(function () {
                    reject(new TypeError('Network request failed'))
                  }, 0)
                }

                xhr.ontimeout = function () {
                  setTimeout(function () {
                    reject(new TypeError('Network request timed out'))
                  }, 0)
                }

                xhr.onabort = function () {
                  setTimeout(function () {
                    reject(new DOMException('Aborted', 'AbortError'))
                  }, 0)
                }

                function fixUrl(url) {
                  try {
                    return url === '' && g.location.href ? g.location.href : url
                  } catch (e) {
                    return url
                  }
                }

                xhr.open(request.method, fixUrl(request.url), true)

                if (request.credentials === 'include') {
                  xhr.withCredentials = true
                } else if (request.credentials === 'omit') {
                  xhr.withCredentials = false
                }

                if ('responseType' in xhr) {
                  if (support.blob) {
                    xhr.responseType = 'blob'
                  } else if (
                    support.arrayBuffer
                  ) {
                    xhr.responseType = 'arraybuffer'
                  }
                }

                if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
                  var names = [];
                  Object.getOwnPropertyNames(init.headers).forEach(function (name) {
                    names.push(normalizeName(name))
                    xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
                  })
                  request.headers.forEach(function (value, name) {
                    if (names.indexOf(name) === -1) {
                      xhr.setRequestHeader(name, value)
                    }
                  })
                } else {
                  request.headers.forEach(function (value, name) {
                    xhr.setRequestHeader(name, value)
                  })
                }

                if (request.signal) {
                  request.signal.addEventListener('abort', abortXhr)

                  xhr.onreadystatechange = function () {
                    // DONE (success or failure)
                    if (xhr.readyState === 4) {
                      request.signal.removeEventListener('abort', abortXhr)
                    }
                  }
                }

                xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
              })
            }

            fetch.polyfill = true

            if (!g.fetch) {
              g.fetch = fetch
              g.Headers = Headers
              g.Request = Request
              g.Response = Response
            }


            /***/
          }),




/***/ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js ***!
  \********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
            function _createForOfIteratorHelper(o, allowArrayLike) {
              var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
              if (!it) {
                if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                  if (it) o = it;
                  var i = 0;
                  var F = function F() { };
                  return {
                    s: F,
                    n: function n() {
                      if (i >= o.length) return {
                        done: true
                      };
                      return {
                        done: false,
                        value: o[i++]
                      };
                    },
                    e: function e(_e) {
                      throw _e;
                    },
                    f: F
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var normalCompletion = true,
                didErr = false,
                err;
              return {
                s: function s() {
                  it = it.call(o);
                },
                n: function n() {
                  var step = it.next();
                  normalCompletion = step.done;
                  return step;
                },
                e: function e(_e2) {
                  didErr = true;
                  err = _e2;
                },
                f: function f() {
                  try {
                    if (!normalCompletion && it["return"] != null) it["return"]();
                  } finally {
                    if (didErr) throw err;
                  }
                }
              };
            }
            module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

            /***/
          }),

/***/ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createSuper.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createSuper.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
            var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");
            var possibleConstructorReturn = __webpack_require__(/*! ./possibleConstructorReturn.js */ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return possibleConstructorReturn(this, result);
              };
            }
            module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

            /***/
          }),


/***/ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
            function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if (typeof o === "string") return arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor) n = o.constructor.name;
              if (n === "Map" || n === "Set") return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
            }
            module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

            /***/
          })

        /******/
      });

//__webpack_modules__ 定义完成
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
          /******/
        }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
          /******/
        };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
      }

/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();

/******/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function () {
          /******/
          tempTest(my_engineGlobal, my_engineGlobal2, my_engineGlobal3, my_engineGlobal4);
          function tempTest(globalArg, globalArg2, globalArg3, globalArg4) {
            console.log(' temp originGlobal innerhh ', my_engineGlobal, Object.keys(my_engineGlobal).length, Object.keys(my_engineGlobal));
          }
          if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
            /******/
          } catch (e) {
/******/ 				if (typeof window === 'object') return window;
            /******/
          }
          /******/
        })();
        /******/
      })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
      })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
          }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
          /******/
        };
        /******/
      })();
/******/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
        /******/
        tempTest(my_engineGlobal, my_engineGlobal2, my_engineGlobal3, my_engineGlobal4);
        function tempTest(globalArg, globalArg2, globalArg3, globalArg4) {
          console.log(' temp originGlobal innerhh ', my_engineGlobal, Object.keys(my_engineGlobal).length, Object.keys(my_engineGlobal));
        }
        __webpack_require__.nmd = (module) => {
          module.paths = [];
          if (!module.children) module.children = [];
          return module;
          /******/
        };
        /******/
      })();

      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be in strict mode.
      (() => {
        //        "use strict";
        /*!*****************************************!*\

          \*****************************************/

        console.log('customGlobal', globalThis.moduleName, Object.keys(globalThis));
        var oldGlobal = my_engineGlobal;
        var testModule = testModuleKK;
        tempTest(my_engineGlobal, my_engineGlobal2, my_engineGlobal3, my_engineGlobal4);
        console.log(" originGlobal my_engineGlobal === oldGlobal 1 ", my_engineGlobal === oldGlobal);
        console.log(' temp originGlobal inner old 1 ', oldGlobal);
        function tempTest(globalArg, globalArg2, globalArg3, globalArg4) {
          console.log(" originGlobal my_engineGlobal === oldGlobal 2 ", my_engineGlobal === oldGlobal, testStr);
          console.log(0, Object.keys(globalThis).length, Object.keys(globalThis));
          console.log(' temp originGlobal inner globalArg', globalArg, Object.keys(globalArg).length, Object.keys(globalArg));
          console.log(' temp originGlobal inner ', my_engineGlobal, Object.keys(my_engineGlobal).length, Object.keys(my_engineGlobal));
          console.log(' temp originGlobal2 inner ', my_engineGlobal2, Object.keys(my_engineGlobal2).length, Object.keys(my_engineGlobal2));
          console.log(' temp originGlobal3 inner ', my_engineGlobal3, Object.keys(my_engineGlobal3).length, Object.keys(my_engineGlobal3));
          console.log(' temp originGlobal4 inner ', my_engineGlobal4, Object.keys(my_engineGlobal4).length, Object.keys(my_engineGlobal4));
          console.log(' temp originGlobal5 inner ', my_engineGlobal5, Object.keys(my_engineGlobal5).length, Object.keys(my_engineGlobal5));
          console.log(' temp originGlobal6 inner ', my_engineGlobal6, Object.keys(my_engineGlobal6).length, Object.keys(my_engineGlobal6));
          console.log(' temp originGlobal7 inner ', my_engineGlobal7, Object.keys(my_engineGlobal7).length, Object.keys(my_engineGlobal7));
          console.log(' temp originGlobal8 inner ', my_engineGlobal8, Object.keys(my_engineGlobal8).length, Object.keys(my_engineGlobal8));
          console.log(' temp originGlobal9 inner ', my_engineGlobal9, Object.keys(my_engineGlobal9).length, Object.keys(my_engineGlobal9));
          console.log(' temp originGlobal10 inner ', my_engineGlobal10, Object.keys(my_engineGlobal10).length, Object.keys(my_engineGlobal10));
          console.log(' temp originGlobal11 inner ', typeof my_engineGlobal11, my_engineGlobal11, Object.keys(my_engineGlobal11).length, Object.keys(my_engineGlobal11));
          console.log(' temp originGlobal12 inner ', typeof my_engineGlobal12, my_engineGlobal12, Object.keys(my_engineGlobal12).length, Object.keys(my_engineGlobal12));
          console.log(' temp originGlobal13 inner ', typeof my_engineGlobal13, my_engineGlobal13, Object.keys(my_engineGlobal13).length, Object.keys(my_engineGlobal13));
          console.log(' temp originGlobal14 inner ', typeof my_engineGlobal14, my_engineGlobal14, Object.keys(my_engineGlobal14).length, Object.keys(my_engineGlobal14));
          console.log(' temp originGlobal15 inner ', typeof my_engineGlobal15, my_engineGlobal15, Object.keys(my_engineGlobal15).length, Object.keys(my_engineGlobal15));

          console.log(' temp testModule  inner ', testModule, Object.keys(testModule).length, Object.keys(testModule));
          // console.log(' temp __webpack_modules__ inner ', __webpack_modules__, Object.temp originGlobal inner old 1 keys(__webpack_modules__).length, Object.keys(__webpack_modules__));
          console.log(' temp originGlobal inner old ', oldGlobal);
        }
        console.log(" originGlobal my_engineGlobal === oldGlobal 3 ", my_engineGlobal === oldGlobal);
        console.log(' temp originGlobal 3 ', Object.keys(my_engineGlobal).length, Object.keys(my_engineGlobal));
      })(); //业务代码闭包执行完成
      (() => {
        tempTest(my_engineGlobal, my_engineGlobal2, my_engineGlobal3, my_engineGlobal4);

        function tempTest(globalArg, globalArg2, globalArg3, globalArg4) {
          console.log(0, Object.keys(globalThis).length, Object.keys(globalThis));
          console.log(' temp originGlobal inner globalArg', globalArg, Object.keys(globalArg).length, Object.keys(globalArg));
          console.log(' temp originGlobal inner ', my_engineGlobal, Object.keys(my_engineGlobal).length, Object.keys(my_engineGlobal));
          console.log(' temp originGlobal2 inner ', my_engineGlobal2, Object.keys(my_engineGlobal2).length, Object.keys(my_engineGlobal2));
          console.log(' temp originGlobal3 inner ', my_engineGlobal3, Object.keys(my_engineGlobal3).length, Object.keys(my_engineGlobal3));
          console.log(' temp originGlobal4 inner ', my_engineGlobal4, Object.keys(my_engineGlobal4).length, Object.keys(my_engineGlobal4));
          console.log(' temp originGlobal5 inner ', my_engineGlobal5, Object.keys(my_engineGlobal5).length, Object.keys(my_engineGlobal5));
          console.log(' temp originGlobal6 inner ', my_engineGlobal6, Object.keys(my_engineGlobal6).length, Object.keys(my_engineGlobal6));
          console.log(' temp originGlobal7 inner ', my_engineGlobal7, Object.keys(my_engineGlobal7).length, Object.keys(my_engineGlobal7));
          console.log(' temp originGlobal8 inner ', my_engineGlobal8, Object.keys(my_engineGlobal8).length, Object.keys(my_engineGlobal8));
          console.log(' temp originGlobal9 inner ', my_engineGlobal9, Object.keys(my_engineGlobal9).length, Object.keys(my_engineGlobal9));
          console.log(' temp originGlobal10 inner ', my_engineGlobal10, Object.keys(my_engineGlobal10).length, Object.keys(my_engineGlobal10));
          console.log(' temp originGlobal11 inner ', typeof my_engineGlobal11, my_engineGlobal11, Object.keys(my_engineGlobal11).length, Object.keys(my_engineGlobal11));
          console.log(' temp originGlobal12 inner ', typeof my_engineGlobal12, my_engineGlobal12, Object.keys(my_engineGlobal12).length, Object.keys(my_engineGlobal12));
          console.log(' temp originGlobal13 inner ', typeof my_engineGlobal13, my_engineGlobal13, Object.keys(my_engineGlobal13).length, Object.keys(my_engineGlobal13));
          console.log(' temp originGlobal14 inner ', typeof my_engineGlobal14, my_engineGlobal14, Object.keys(my_engineGlobal14).length, Object.keys(my_engineGlobal14));
          console.log(' temp originGlobal15 inner ', typeof my_engineGlobal15, my_engineGlobal15, Object.keys(my_engineGlobal15).length, Object.keys(my_engineGlobal15));
        }

      })(); //业务代码闭包执行完成

    })();// webpack的闭包



  });// evaluateInContext 结束

  console.log('hhhhhh end ');

})();  //最大闭包结束
