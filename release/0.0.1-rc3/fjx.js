/*
Copyright (c) 2018 Daybrush
@name: fjx
license: MIT
author: Daybrush
repository: https://github.com/daybrush/fjx.git
@version 0.0.1-rc3
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.fjx = factory());
}(this, (function () { 'use strict';

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : new P(function (resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

    return ar;
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i;

    function verb(n) {
      if (g[n]) i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }

    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }

    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }

    function fulfill(value) {
      resume("next", value);
    }

    function reject(value) {
      resume("throw", value);
    }

    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);

    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }

    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({
          value: v,
          done: d
        });
      }, reject);
    }
  }

  /**
   * @namespace Consts
   */
  /**
  * @memberof Consts
  */

  var IS_PROMISE = typeof Promise !== "undefined";

  /*
  Copyright (c) 2018 Daybrush
  license: MIT
  author: Daybrush
  repository: https://github.com/daybrush/utils
  @version 0.4.0
  */
  /**
  * get string "undefined"
  * @memberof Consts
  * @example
  import {UNDEFINED} from "@daybrush/utils";

  console.log(UNDEFINED); // "undefined"
  */

  var UNDEFINED = "undefined";
  /**
  * Check whether the environment is window or node.js.
  * @memberof Consts
  * @example
  import {IS_WINDOW} from "@daybrush/utils";

  console.log(IS_WINDOW); // false in node.js
  console.log(IS_WINDOW); // true in browser
  */

  var IS_WINDOW = typeof window !== UNDEFINED;
  var prefixes = ["webkit", "ms", "moz", "o"];
  /**
   * @namespace CrossBrowser
   */

  /**
  * Get a CSS property with a vendor prefix that supports cross browser.
  * @function
  * @param {string} property - A CSS property
  * @return {string} CSS property with cross-browser vendor prefix
  * @memberof CrossBrowser
  * @example
  import {getCrossBrowserProperty} from "@daybrush/utils";

  console.log(getCrossBrowserProperty("transform")); // "transform", "-ms-transform", "-webkit-transform"
  console.log(getCrossBrowserProperty("filter")); // "filter", "-webkit-filter"
  */

  var getCrossBrowserProperty =
  /*#__PURE__*/
  function (property) {
    if (typeof document === UNDEFINED) {
      return "";
    }

    var styles = (document.body || document.documentElement).style;
    var length = prefixes.length;

    if (typeof styles[property] !== UNDEFINED) {
      return property;
    }

    for (var i = 0; i < length; ++i) {
      var name = "-" + prefixes[i] + "-" + property;

      if (typeof styles[name] !== UNDEFINED) {
        return name;
      }
    }

    return "";
  };
  /**
  * get string "transfrom" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {TRANSFORM} from "@daybrush/utils";

  console.log(TRANSFORM); // "transform", "-ms-transform", "-webkit-transform"
  */


  var TRANSFORM =
  /*#__PURE__*/
  getCrossBrowserProperty("transform");
  /**
  * get string "filter" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {FILTER} from "@daybrush/utils";

  console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
  */

  var FILTER =
  /*#__PURE__*/
  getCrossBrowserProperty("filter");
  /**
  * get string "animation" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {ANIMATION} from "@daybrush/utils";

  console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
  */

  var ANIMATION =
  /*#__PURE__*/
  getCrossBrowserProperty("animation");
  /**
  * get string "keyframes" with the vendor prefix.
  * @memberof CrossBrowser
  * @example
  import {KEYFRAMES} from "@daybrush/utils";

  console.log(KEYFRAMES); // "keyframes", "-ms-keyframes", "-webkit-keyframes"
  */

  var KEYFRAMES =
  /*#__PURE__*/
  ANIMATION.replace("animation", "keyframes");
  /**
  * Date.now() method
  * @memberof CrossBrowser
  * @return {number} milliseconds
  * @example
  import {now} from "@daybrush/utils";

  console.log(now()); // 12121324241(milliseconds)
  */


  function now() {
    return Date.now ? Date.now() : new Date().getTime();
  }
  /**
  * window.requestAnimationFrame() method with cross browser.
  * @function
  * @memberof CrossBrowser
  * @param {FrameRequestCallback} callback - The function to call when it's time to update your animation for the next repaint.
  * @return {number} id
  * @example
  import {requestAnimationFrame} from "@daybrush/utils";

  requestAnimationFrame((timestamp) => {
    console.log(timestamp);
  });
  */


  var requestAnimationFrame =
  /*#__PURE__*/
  function () {
    var firstTime = now();
    var raf = IS_WINDOW && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame);
    return raf ? raf.bind(window) : function (callback) {
      var currTime = now();
      var id = window.setTimeout(function () {
        callback(currTime - firstTime);
      }, 1000 / 60);
      return id;
    };
  }();

  /**
   * @memberof asyncArray
   * @example
  // [1, 2, 3, 4]
  const arr1: number[] = syncArray([1, 2, 3, 4]);
  // Promise => [1, 2, 3, 4]
  const arr2: Promise<number[]> = syncArray([1, Promise.resolve(2), 3, 4]);
   */

  function syncArray(arr) {
    return takeArrayF(Infinity, arr);
  }
  /**
   * @memberof asyncArray
   */

  function reduceAsyncArrayF(callbackFn, initial, arr) {
    return exec(function (arr2) {
      return reduceArrayF(callbackFn, initial, arr2);
    }, syncArray(arr));
  }
  /**
   * @memberof asyncArray
   * @function
   */

  var reduceAsyncArray =
  /*#__PURE__*/
  curry(reduceAsyncArrayF);
  /**
   * @memberof asyncArray
   */

  function eachAsyncArrayF(callbackFn, arr) {
    return exec(function (arr2) {
      return eachArrayF(callbackFn, arr2);
    }, syncArray(arr));
  }
  /**
   * @memberof asyncArray
   * @function
   */

  var eachAsyncArray =
  /*#__PURE__*/
  curry(eachAsyncArrayF);
  /**
   * @memberof asyncArray
   */

  function mapAsyncArrayF(callbackFn, arr) {
    return exec(function (arr2) {
      return mapArrayF(callbackFn, arr2);
    }, syncArray(arr));
  }
  /**
   * @memberof asyncArray
   * @function
   */

  var mapAsyncArray =
  /*#__PURE__*/
  curry(mapAsyncArrayF);
  /**
   * @memberof asyncArray
   */

  function filterAsyncArrayF(callbackFn, arr) {
    return exec(function (arr2) {
      return filterArrayF(callbackFn, arr2);
    }, syncArray(arr));
  }

  /**
   * @namespace utils
   */

  /**
   * @memberof utils
   */

  function isPromise(value) {
    return IS_PROMISE && value instanceof Promise;
  }
  /**
   * @memberof utils
   */

  function exec(f, v) {
    return isPromise(v) ? v.then(function (pv) {
      return f(pv);
    }) : f(v);
  }
  /**
   * @memberof utils
   */

  function curry(f) {
    var length = f.length;

    if (length === 0) {
      return f;
    }

    function nest(i, args) {
      return function () {
        var args2 = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args2[_i] = arguments[_i];
        }

        var length2 = i - args2.length;
        return length2 <= 0 ? f.apply(void 0, __spread(args, args2)) : nest(length2, args.concat(args2));
      };
    }

    return nest(length, []);
  }

  /**
   * @memberof array
   */

  function eachArrayF(f, arr) {
    arr.forEach(f);
    return arr;
  }
  /**
   * @memberof array
   * @function
   */

  var eachArray =
  /*#__PURE__*/
  curry(eachArrayF);
  /**
   * @memberof array
   */

  function mapArrayF(f, arr) {
    return arr.map(f);
  }
  /**
   * @memberof array
   * @function
   */

  var mapArray =
  /*#__PURE__*/
  curry(mapArrayF);
  /**
   * @memberof array
   */

  function reduceArrayF(callbackFn, initial, arr) {
    return arr.reduce(callbackFn, initial);
  }
  /**
   * @memberof array
   * @function
   */

  var reduceArray =
  /*#__PURE__*/
  curry(reduceArrayF);
  /**
   * @memberof array
   */

  function filterArrayF(f, arr) {
    return arr.filter(f);
  }
  /**
   * @memberof array
   * @function
   */

  var filterArray =
  /*#__PURE__*/
  curry(filterArrayF);
  /**
   * @memberof array
   */

  function headArray(iterator) {
    return iterator[0];
  }
  /**
   * @memberof array
   */

  function tailArray(iterator) {
    return iterator[iterator.length - 1];
  }
  /**
   * @memberof array
   */

  function takeArrayF(length, arr) {
    var arrLength = Math.min(length, arr.length);
    var arr2 = arr.slice(0, arrLength);
    return reduceArrayF(function (prev, cur) {
      return exec(function (p) {
        return exec(function (c) {
          p.push(c);
          return p;
        }, cur);
      }, prev);
    }, [], arr2);
  }
  /**
   * @memberof array
   * @function
   */

  var takeArray =
  /*#__PURE__*/
  curry(takeArrayF);

  /**
   * @memberof object
   */

  function reduceObjectF(callbackFn, initial, obj) {
    var cur = initial;

    for (var key in obj) {
      cur = callbackFn(cur, obj[key], key, obj);
    }

    return cur;
  }
  /**
   * @memberof object
   */

  function eachObjectF(f, obj) {
    for (var key in obj) {
      f(obj[key], key, obj);
    }

    return obj;
  }
  /**
   * @memberof object
   */

  function mapObjectF(f, obj) {
    var rv = {};

    for (var key in obj) {
      rv[key] = f(obj[key], key, obj);
    }

    return rv;
  }
  /**
   * @memberof object
   */

  function filterObjectF(f, obj) {
    var rv = {};

    for (var key in obj) {
      f(obj[key], key, obj) && (rv[key] = obj[key]);
    }

    return rv;
  }
  /**
   * @memberof object
   */

  function values$1(obj) {
    return Object.values(obj);
  }
  /**
   * @memberof object
   */

  function keys(obj) {
    return Object.keys(obj);
  }
  /**
   * @memberof object
   */

  function headObject(obj) {
    return headArray(values$1(obj));
  }
  /**
   * @memberof object
   */

  function tailObject(obj) {
    return tailArray(values$1(obj));
  }
  /**
   * @memberof object
   */

  function takeObjectF(length, obj) {
    var objkeys = keys(obj);
    var arrLength = Math.min(length, objkeys.length);
    var objkeys2 = objkeys.slice(0, arrLength);
    return reduceArrayF(function (prev, cur) {
      return exec(function (p) {
        return exec(function (c) {
          p[cur] = obj[cur];
          return p;
        }, cur);
      }, prev);
    }, {}, objkeys2);
  }

  /**
   * @memberof asyncObject
   * @example
  // {a: 1, b: 2, c: 3 , d: 4}
  const obj1: ObjectInterface<number> = syncObject({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
  });
  // Promise => {a: 1, b: 2, c: 3 , d: 4}
  const obj2: Promise<ObjectInterface<number>> = syncObject({
      a: 1,
      b: Promise.resolve(2),
      c: 3,
      d: 4,
  });
   */

  function syncObject(obj) {
    return takeObjectF(Infinity, obj);
  }
  /**
   * @memberof asyncObject
   */

  function reduceAsyncObjectF(callbackFn, initial, obj) {
    return exec(function (obj2) {
      return reduceObjectF(callbackFn, initial, obj2);
    }, syncObject(obj));
  }
  /**
   * @memberof asyncObject
   */

  function eachAsyncObjectF(callbackFn, obj) {
    return exec(function (obj2) {
      return eachObjectF(callbackFn, obj2);
    }, syncObject(obj));
  }
  /**
   * @memberof asyncObject
   */

  function mapAsyncObjectF(callbackFn, obj) {
    return exec(function (obj2) {
      return mapObjectF(callbackFn, obj2);
    }, syncObject(obj));
  }
  /**
   * @memberof asyncObject
   */

  function filterAsyncObjectF(callbackFn, obj) {
    return exec(function (obj2) {
      return filterObjectF(callbackFn, obj2);
    }, syncObject(obj));
  }

  /**
   * @memberof iterable
   */

  function reduceIterableF(callbackFn, initial, iterable) {
    var e_1, _a;

    var cur = initial;

    var _loop_1 = function (value) {
      cur = exec(function (c) {
        return exec(function (v) {
          return callbackFn(c, v, iterable);
        }, value);
      }, cur);
    };

    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;

        _loop_1(value);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return cur;
  }
  /**
   * @memberof iterable
   */

  function eachIterableF(callbackFn, iterable) {
    var e_2, _a;

    try {
      for (var iterable_2 = __values(iterable), iterable_2_1 = iterable_2.next(); !iterable_2_1.done; iterable_2_1 = iterable_2.next()) {
        var value = iterable_2_1.value;
        exec(function (v) {
          return callbackFn(v, iterable);
        }, value);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (iterable_2_1 && !iterable_2_1.done && (_a = iterable_2.return)) _a.call(iterable_2);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return iterable;
  }
  /**
   * @memberof iterable
   */

  function mapIterableF(callbackFn, iterable) {
    var e_3, _a, iterable_3, iterable_3_1, value, e_3_1;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 7]);

          iterable_3 = __values(iterable), iterable_3_1 = iterable_3.next();
          _b.label = 1;

        case 1:
          if (!!iterable_3_1.done) return [3
          /*break*/
          , 4];
          value = iterable_3_1.value;
          return [4
          /*yield*/
          , exec(function (v) {
            return callbackFn(v, iterable);
          }, value)];

        case 2:
          _b.sent();

          _b.label = 3;

        case 3:
          iterable_3_1 = iterable_3.next();
          return [3
          /*break*/
          , 1];

        case 4:
          return [3
          /*break*/
          , 7];

        case 5:
          e_3_1 = _b.sent();
          e_3 = {
            error: e_3_1
          };
          return [3
          /*break*/
          , 7];

        case 6:
          try {
            if (iterable_3_1 && !iterable_3_1.done && (_a = iterable_3.return)) _a.call(iterable_3);
          } finally {
            if (e_3) throw e_3.error;
          }

          return [7
          /*endfinally*/
          ];

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  }
  /**
   * @memberof iterable
   */

  function filterIterableF(callbackFn, iterable) {
    var e_4, _a, iterable_4, iterable_4_1, value, _b, e_4_1;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 6, 7, 8]);

          iterable_4 = __values(iterable), iterable_4_1 = iterable_4.next();
          _c.label = 1;

        case 1:
          if (!!iterable_4_1.done) return [3
          /*break*/
          , 5];
          value = iterable_4_1.value;
          _b = exec(function (v) {
            return callbackFn(v, iterable);
          }, value);
          if (!_b) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , value];

        case 2:
          _b = _c.sent();
          _c.label = 3;

        case 3:
          _c.label = 4;

        case 4:
          iterable_4_1 = iterable_4.next();
          return [3
          /*break*/
          , 1];

        case 5:
          return [3
          /*break*/
          , 8];

        case 6:
          e_4_1 = _c.sent();
          e_4 = {
            error: e_4_1
          };
          return [3
          /*break*/
          , 8];

        case 7:
          try {
            if (iterable_4_1 && !iterable_4_1.done && (_a = iterable_4.return)) _a.call(iterable_4);
          } finally {
            if (e_4) throw e_4.error;
          }

          return [7
          /*endfinally*/
          ];

        case 8:
          return [2
          /*return*/
          ];
      }
    });
  }
  /**
   * @memberof iterable
   */

  function headIterable(iterable) {
    var e_5, _a;

    try {
      for (var iterable_5 = __values(iterable), iterable_5_1 = iterable_5.next(); !iterable_5_1.done; iterable_5_1 = iterable_5.next()) {
        var value = iterable_5_1.value;
        return value;
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (iterable_5_1 && !iterable_5_1.done && (_a = iterable_5.return)) _a.call(iterable_5);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
  }
  /**
   * @memberof iterable
   */

  function tailIterable(iterable) {
    var e_6, _a;

    var cur;

    try {
      for (var iterable_6 = __values(iterable), iterable_6_1 = iterable_6.next(); !iterable_6_1.done; iterable_6_1 = iterable_6.next()) {
        var value = iterable_6_1.value;
        cur = value;
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (iterable_6_1 && !iterable_6_1.done && (_a = iterable_6.return)) _a.call(iterable_6);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    return cur;
  }
  function getIterator(iterable) {
    return (iterable[Symbol.asyncIterator] || iterable[Symbol.asyncIterator])();
  }
  /**
   * @memberof iterable
   */

  function takeIterableF(length, iterable) {
    var cur = [];

    if (length === 0) {
      return cur;
    }

    var i = 0;

    function _result(result, iter) {
      if (result.done || i >= length) {
        return cur;
      }

      ++i;
      var value = result.value;

      if (isPromise(value)) {
        return value.then(function (v) {
          cur.push(v);
          return _take(iter);
        });
      } else {
        cur.push(value);
      }

      return cur;
    }

    function _take(iter) {
      var result = iter.next();
      return exec(function (r) {
        return _result(r, iter);
      }, result);
    }

    return _take(getIterator(iterable));
  }

  /**
   * @memberof asyncIterable
   */

  function eachAsyncIterableF(callbackFn, iterable) {
    var iterable_1, iterable_1_1;
    return __awaiter(this, void 0, void 0, function () {
      var e_1, _a, value, _b, e_1_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 6, 7, 12]);

            iterable_1 = __asyncValues(iterable);
            _c.label = 1;

          case 1:
            return [4
            /*yield*/
            , iterable_1.next()];

          case 2:
            if (!(iterable_1_1 = _c.sent(), !iterable_1_1.done)) return [3
            /*break*/
            , 5];
            value = iterable_1_1.value;
            _b = callbackFn;
            return [4
            /*yield*/
            , value];

          case 3:
            _b.apply(void 0, [_c.sent(), iterable]);

            _c.label = 4;

          case 4:
            return [3
            /*break*/
            , 1];

          case 5:
            return [3
            /*break*/
            , 12];

          case 6:
            e_1_1 = _c.sent();
            e_1 = {
              error: e_1_1
            };
            return [3
            /*break*/
            , 12];

          case 7:
            _c.trys.push([7,, 10, 11]);

            if (!(iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))) return [3
            /*break*/
            , 9];
            return [4
            /*yield*/
            , _a.call(iterable_1)];

          case 8:
            _c.sent();

            _c.label = 9;

          case 9:
            return [3
            /*break*/
            , 11];

          case 10:
            if (e_1) throw e_1.error;
            return [7
            /*endfinally*/
            ];

          case 11:
            return [7
            /*endfinally*/
            ];

          case 12:
            return [2
            /*return*/
            , iterable];
        }
      });
    });
  }
  /**
   * @memberof asyncIterable
   */

  function mapAsyncIterableF(callbackFn, iterable) {
    return __asyncGenerator(this, arguments, function mapAsyncIterableF_1() {
      var e_2, _a, iterable_2, iterable_2_1, value, _b, e_2_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 8, 9, 14]);

            iterable_2 = __asyncValues(iterable);
            _c.label = 1;

          case 1:
            return [4
            /*yield*/
            , __await(iterable_2.next())];

          case 2:
            if (!(iterable_2_1 = _c.sent(), !iterable_2_1.done)) return [3
            /*break*/
            , 7];
            value = iterable_2_1.value;
            _b = callbackFn;
            return [4
            /*yield*/
            , __await(value)];

          case 3:
            return [4
            /*yield*/
            , __await.apply(void 0, [_b.apply(void 0, [_c.sent(), iterable])])];

          case 4:
            return [4
            /*yield*/
            , _c.sent()];

          case 5:
            _c.sent();

            _c.label = 6;

          case 6:
            return [3
            /*break*/
            , 1];

          case 7:
            return [3
            /*break*/
            , 14];

          case 8:
            e_2_1 = _c.sent();
            e_2 = {
              error: e_2_1
            };
            return [3
            /*break*/
            , 14];

          case 9:
            _c.trys.push([9,, 12, 13]);

            if (!(iterable_2_1 && !iterable_2_1.done && (_a = iterable_2.return))) return [3
            /*break*/
            , 11];
            return [4
            /*yield*/
            , __await(_a.call(iterable_2))];

          case 10:
            _c.sent();

            _c.label = 11;

          case 11:
            return [3
            /*break*/
            , 13];

          case 12:
            if (e_2) throw e_2.error;
            return [7
            /*endfinally*/
            ];

          case 13:
            return [7
            /*endfinally*/
            ];

          case 14:
            return [2
            /*return*/
            ];
        }
      });
    });
  }
  /**
   * @memberof asyncIterable
   */

  function filterAsyncIterableF(callbackFn, iterable) {
    return __asyncGenerator(this, arguments, function filterAsyncIterableF_1() {
      var e_3, _a, iterable_3, iterable_3_1, value, v, _b, e_3_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 9, 10, 15]);

            iterable_3 = __asyncValues(iterable);
            _c.label = 1;

          case 1:
            return [4
            /*yield*/
            , __await(iterable_3.next())];

          case 2:
            if (!(iterable_3_1 = _c.sent(), !iterable_3_1.done)) return [3
            /*break*/
            , 8];
            value = iterable_3_1.value;
            return [4
            /*yield*/
            , __await(value)];

          case 3:
            v = _c.sent();
            _b = callbackFn(v, iterable);
            if (!_b) return [3
            /*break*/
            , 6];
            return [4
            /*yield*/
            , __await(v)];

          case 4:
            return [4
            /*yield*/
            , _c.sent()];

          case 5:
            _b = _c.sent();
            _c.label = 6;

          case 6:
            _c.label = 7;

          case 7:
            return [3
            /*break*/
            , 1];

          case 8:
            return [3
            /*break*/
            , 15];

          case 9:
            e_3_1 = _c.sent();
            e_3 = {
              error: e_3_1
            };
            return [3
            /*break*/
            , 15];

          case 10:
            _c.trys.push([10,, 13, 14]);

            if (!(iterable_3_1 && !iterable_3_1.done && (_a = iterable_3.return))) return [3
            /*break*/
            , 12];
            return [4
            /*yield*/
            , __await(_a.call(iterable_3))];

          case 11:
            _c.sent();

            _c.label = 12;

          case 12:
            return [3
            /*break*/
            , 14];

          case 13:
            if (e_3) throw e_3.error;
            return [7
            /*endfinally*/
            ];

          case 14:
            return [7
            /*endfinally*/
            ];

          case 15:
            return [2
            /*return*/
            ];
        }
      });
    });
  }
  /**
   * @memberof asyncIterable
   */

  function reduceAsyncIterableF(callbackFn, initial, iterable) {
    var iterable_4, iterable_4_1;
    return __awaiter(this, void 0, void 0, function () {
      var e_4, _a, cur, value, v, e_4_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            cur = initial;
            _b.label = 1;

          case 1:
            _b.trys.push([1, 7, 8, 13]);

            iterable_4 = __asyncValues(iterable);
            _b.label = 2;

          case 2:
            return [4
            /*yield*/
            , iterable_4.next()];

          case 3:
            if (!(iterable_4_1 = _b.sent(), !iterable_4_1.done)) return [3
            /*break*/
            , 6];
            value = iterable_4_1.value;
            return [4
            /*yield*/
            , value];

          case 4:
            v = _b.sent();
            cur = callbackFn(cur, v, iterable);
            _b.label = 5;

          case 5:
            return [3
            /*break*/
            , 2];

          case 6:
            return [3
            /*break*/
            , 13];

          case 7:
            e_4_1 = _b.sent();
            e_4 = {
              error: e_4_1
            };
            return [3
            /*break*/
            , 13];

          case 8:
            _b.trys.push([8,, 11, 12]);

            if (!(iterable_4_1 && !iterable_4_1.done && (_a = iterable_4.return))) return [3
            /*break*/
            , 10];
            return [4
            /*yield*/
            , _a.call(iterable_4)];

          case 9:
            _b.sent();

            _b.label = 10;

          case 10:
            return [3
            /*break*/
            , 12];

          case 11:
            if (e_4) throw e_4.error;
            return [7
            /*endfinally*/
            ];

          case 12:
            return [7
            /*endfinally*/
            ];

          case 13:
            return [2
            /*return*/
            , cur];
        }
      });
    });
  }
  /**
   * @memberof asyncIterable
   */

  function syncIterable(iterable) {
    return takeIterableF(Infinity, iterable);
  }



  var fjx = ({
    eachArrayF: eachArrayF,
    eachArray: eachArray,
    mapArrayF: mapArrayF,
    mapArray: mapArray,
    reduceArrayF: reduceArrayF,
    reduceArray: reduceArray,
    filterArrayF: filterArrayF,
    filterArray: filterArray,
    headArray: headArray,
    tailArray: tailArray,
    takeArrayF: takeArrayF,
    takeArray: takeArray,
    syncArray: syncArray,
    reduceAsyncArrayF: reduceAsyncArrayF,
    reduceAsyncArray: reduceAsyncArray,
    eachAsyncArrayF: eachAsyncArrayF,
    eachAsyncArray: eachAsyncArray,
    mapAsyncArrayF: mapAsyncArrayF,
    mapAsyncArray: mapAsyncArray,
    filterAsyncArrayF: filterAsyncArrayF,
    reduceObjectF: reduceObjectF,
    eachObjectF: eachObjectF,
    mapObjectF: mapObjectF,
    filterObjectF: filterObjectF,
    values: values$1,
    keys: keys,
    headObject: headObject,
    tailObject: tailObject,
    takeObjectF: takeObjectF,
    syncObject: syncObject,
    reduceAsyncObjectF: reduceAsyncObjectF,
    eachAsyncObjectF: eachAsyncObjectF,
    mapAsyncObjectF: mapAsyncObjectF,
    filterAsyncObjectF: filterAsyncObjectF,
    reduceIterableF: reduceIterableF,
    eachIterableF: eachIterableF,
    mapIterableF: mapIterableF,
    filterIterableF: filterIterableF,
    headIterable: headIterable,
    tailIterable: tailIterable,
    getIterator: getIterator,
    takeIterableF: takeIterableF,
    eachAsyncIterableF: eachAsyncIterableF,
    mapAsyncIterableF: mapAsyncIterableF,
    filterAsyncIterableF: filterAsyncIterableF,
    reduceAsyncIterableF: reduceAsyncIterableF,
    syncIterable: syncIterable
  });

  return fjx;

})));
//# sourceMappingURL=fjx.js.map
