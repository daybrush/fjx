/*
Copyright (c) 2018 Daybrush
@name: fjx
license: MIT
author: Daybrush
repository: https://github.com/daybrush/fjx.git
@version 0.0.1-rc2
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

  /**
   * @namespace Consts
   */

  /**
  * @memberof Consts
  */
  var IS_SYMBOL = typeof Symbol !== "undefined";
  /**
  * @memberof Consts
  */

  var IS_PROMISE = typeof Promise !== "undefined";

  /**
   * @namespace Functions
   */

  /**
   * @memberof Functions
   */

  function reduceArrayF(callbackFn, initial, iterator) {
    return iterator.reduce(callbackFn, initial);
  }
  /**
   * @memberof Functions
   */

  function reduceObjectF(callbackFn, initial, iterator) {
    var cur = initial;

    for (var key in iterator) {
      cur = callbackFn(cur, iterator[key], key, iterator);
    }

    return cur;
  }
  /**
   * @memberof Functions
   */

  function reduceIteratorF(callbackFn, initial, iterator) {
    var e_1, _a;

    var cur = initial;

    try {
      for (var iterator_1 = __values(iterator), iterator_1_1 = iterator_1.next(); !iterator_1_1.done; iterator_1_1 = iterator_1.next()) {
        var value = iterator_1_1.value;
        cur = callbackFn(cur, value, iterator);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1.return)) _a.call(iterator_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return cur;
  } // each

  /**
   * @memberof Functions
   * @returns {} The calling array itself
   */

  function eachArrayF(f, iterator) {
    iterator.forEach(f);
    return iterator;
  }
  /**
   * @memberof Functions
   * @returns {} The calling object itself
   */

  function eachObjectF(f, iterator) {
    for (var key in iterator) {
      f(iterator[key], key, iterator);
    }

    return iterator;
  }
  /**
   * @memberof Functions
  * @returns {} The calling iterator itself
   */

  function eachIteratorF(f, iterator) {
    var e_2, _a;

    try {
      for (var iterator_2 = __values(iterator), iterator_2_1 = iterator_2.next(); !iterator_2_1.done; iterator_2_1 = iterator_2.next()) {
        var value = iterator_2_1.value;
        f(value, iterator);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (iterator_2_1 && !iterator_2_1.done && (_a = iterator_2.return)) _a.call(iterator_2);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return iterator;
  } // map

  /**
   * @memberof FunctionS
   */

  function mapArrayF(f, iterator) {
    return iterator.map(f);
  }
  /**
   * @memberof Functions
   */

  function mapObjectF(f, iterator) {
    var obj = {};

    for (var key in iterator) {
      obj[key] = f(iterator[key], key, iterator);
    }

    return obj;
  }
  /**
   * @memberof Functions
   */

  function mapIteratorF(f, iterator) {
    var e_3, _a, iterator_3, iterator_3_1, value, e_3_1;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 7]);

          iterator_3 = __values(iterator), iterator_3_1 = iterator_3.next();
          _b.label = 1;

        case 1:
          if (!!iterator_3_1.done) return [3
          /*break*/
          , 4];
          value = iterator_3_1.value;
          return [4
          /*yield*/
          , f(value, iterator)];

        case 2:
          _b.sent();

          _b.label = 3;

        case 3:
          iterator_3_1 = iterator_3.next();
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
            if (iterator_3_1 && !iterator_3_1.done && (_a = iterator_3.return)) _a.call(iterator_3);
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
  } // filter

  /**
   * @memberof Functions
   */

  function filterArrayF(f, iterator) {
    return iterator.filter(f);
  }
  /**
   * @memberof Functions
   */

  function filterObjectF(f, iterator) {
    var obj = {};

    for (var key in iterator) {
      f(iterator[key], key, iterator) && (obj[key] = iterator[key]);
    }

    return obj;
  }
  /**
   * @memberof Functions
   */

  function filterIteratorF(f, iterator) {
    var e_4, _a, iterator_4, iterator_4_1, value, _b, e_4_1;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 6, 7, 8]);

          iterator_4 = __values(iterator), iterator_4_1 = iterator_4.next();
          _c.label = 1;

        case 1:
          if (!!iterator_4_1.done) return [3
          /*break*/
          , 5];
          value = iterator_4_1.value;
          _b = f(value, iterator);
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
          iterator_4_1 = iterator_4.next();
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
            if (iterator_4_1 && !iterator_4_1.done && (_a = iterator_4.return)) _a.call(iterator_4);
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
   * @memberof Functions
   */

  function headArray(iterator) {
    return iterator[0];
  }
  /**
   * @memberof Functions
   */

  function tailArray(iterator) {
    return iterator[iterator.length - 1];
  }
  /**
   * @memberof Functions
   */

  function head(iterator) {
    var e_5, _a;

    try {
      for (var iterator_5 = __values(iterator), iterator_5_1 = iterator_5.next(); !iterator_5_1.done; iterator_5_1 = iterator_5.next()) {
        var value = iterator_5_1.value;
        return value;
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (iterator_5_1 && !iterator_5_1.done && (_a = iterator_5.return)) _a.call(iterator_5);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
  }
  /**
   * @memberof Functions
   */

  function tail(iterator) {
    return reduceIteratorF(function (prev) {
      return prev;
    }, void 0, iterator);
  }

  /*
  Copyright (c) 2018 Daybrush
  license: MIT
  author: Daybrush
  repository: https://github.com/daybrush/utils
  @version 0.4.0
  */
  /**
  * get string "function"
  * @memberof Consts
  * @example
  import {FUNCTION} from "@daybrush/utils";

  console.log(FUNCTION); // "function"
  */

  var FUNCTION = "function";
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
  * Check the type that the value is function.
  * @memberof Utils
  * @param {string} value - Value to check the type
  * @return {boolean} true if the type is correct, false otherwise
  * @example
  import {isFunction} from "@daybrush/utils";

  console.log(isFunction(function a() {})); // true
  console.log(isFunction(() => {})); // true
  console.log(isFunction("1234")); // false
  console.log(isFunction(1)); // false
  console.log(isFunction(null)); // false
  */


  function isFunction(value) {
    return typeof value === FUNCTION;
  }
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

  function isIterable(iter) {
    return IS_SYMBOL && !!(iter && (iter[Symbol.iterator] || iter[Symbol.asyncIterator]));
  }
  /**
   * @memberof utils
   */

  function isIterator(iter) {
    return iter && isFunction(iter.next);
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
      f.apply(void 0, __spread(args));
      return function () {
        var args2 = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args2[_i] = arguments[_i];
        }

        var length2 = length - args2.length;
        return length2 <= 0 ? f.apply(void 0, __spread(args, args2)) : nest(length2, args.concat(args2));
      };
    }

    return nest(length, []);
  }
  function _pipe(args) {
    return function (a) {
      return reduceArrayF(function (prev, cur) {
        return cur(prev);
      }, a, args);
    };
  }
  /**
   * @memberof utils
   */

  function pipe() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return _pipe(args);
  }
  /**
   * @memberof utils
   */

  function compose() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return _pipe(args.reverse());
  }

  /**
   * @memberof AsyncFunctions
   */

  function exec(v, f) {
    return isPromise(v) ? v.then(function (pv) {
      return f(pv);
    }) : f(v);
  } // async to await

  /**
   * @memberof AsyncFunctions
   */

  function asyncArray(iterator) {
    var _this = this;

    return reduceArrayF(function (prev, cur) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              return [4
              /*yield*/
              , prev];

            case 1:
              _b = (_a = _c.sent()).push;
              return [4
              /*yield*/
              , cur];

            case 2:
              _b.apply(_a, [_c.sent()]);

              return [2
              /*return*/
              , prev];
          }
        });
      });
    }, [], iterator);
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncObject(iterator) {
    var _this = this;

    return reduceObjectF(function (prev, cur, key) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              return [4
              /*yield*/
              , prev];

            case 1:
              _a = _c.sent();
              _b = key;
              return [4
              /*yield*/
              , cur];

            case 2:
              _a[_b] = _c.sent();
              return [2
              /*return*/
              , prev];
          }
        });
      });
    }, {}, iterator);
  }
  /**
   * @memberof AsyncFunctions
   */

  function toArray(iterator) {
    return Array.from(iterator);
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncIterator(iterator) {
    return Promise.all(toArray(iterator)).then(function (list) {
      return list[Symbol.iterator]();
    });
  } // async reduce

  /**
   * @memberof AsyncFunctions
   */

  function asyncReduceArrayF(callbackFn, initial, iterator) {
    var _this = this;

    return reduceArrayF(function (prev, cur, index) {
      return __awaiter(_this, void 0, void 0, function () {
        var prev2, cur2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , prev];

            case 1:
              prev2 = _a.sent();
              return [4
              /*yield*/
              , cur];

            case 2:
              cur2 = _a.sent();
              return [2
              /*return*/
              , callbackFn(prev2, cur2, index, iterator)];
          }
        });
      });
    }, initial, iterator);
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncReduceObjectF(callbackFn, initial, iterator) {
    var _this = this;

    return reduceObjectF(function (prev, cur, key) {
      return __awaiter(_this, void 0, void 0, function () {
        var prev2, cur2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , prev];

            case 1:
              prev2 = _a.sent();
              return [4
              /*yield*/
              , cur];

            case 2:
              cur2 = _a.sent();
              return [2
              /*return*/
              , callbackFn(prev2, cur2, key, iterator)];
          }
        });
      });
    }, initial, iterator);
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncReduceIteratorF(callbackFn, initial, iterator) {
    var _this = this;

    return reduceIteratorF(function (prev, cur) {
      return __awaiter(_this, void 0, void 0, function () {
        var prev2, cur2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , prev];

            case 1:
              prev2 = _a.sent();
              return [4
              /*yield*/
              , cur];

            case 2:
              cur2 = _a.sent();
              return [2
              /*return*/
              , callbackFn(prev2, cur2, iterator)];
          }
        });
      });
    }, initial, iterator);
  } // async each

  /**
   * @memberof AsyncFunctions
   */

  function asyncEachArrayF(f, iterator) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , asyncReduceArrayF(function (prev, cur, index) {
          f(cur, index, iterator);
          return cur;
        }, void 0, iterator).then(function () {
          return iterator;
        })];
      });
    });
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncEachObjectF(f, iterator) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , asyncReduceObjectF(function (prev, cur, key) {
          f(cur, key, iterator);
          return cur;
        }, void 0, iterator).then(function () {
          return iterator;
        })];
      });
    });
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncEachIteratorF(f, iterator) {
    return __awaiter(this, void 0, void 0, function () {
      var e_1, _a, iterator_1, iterator_1_1, value, _b, e_1_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 5, 6, 7]);

            iterator_1 = __values(iterator), iterator_1_1 = iterator_1.next();
            _c.label = 1;

          case 1:
            if (!!iterator_1_1.done) return [3
            /*break*/
            , 4];
            value = iterator_1_1.value;
            _b = f;
            return [4
            /*yield*/
            , value];

          case 2:
            _b.apply(void 0, [_c.sent(), iterator]);

            _c.label = 3;

          case 3:
            iterator_1_1 = iterator_1.next();
            return [3
            /*break*/
            , 1];

          case 4:
            return [3
            /*break*/
            , 7];

          case 5:
            e_1_1 = _c.sent();
            e_1 = {
              error: e_1_1
            };
            return [3
            /*break*/
            , 7];

          case 6:
            try {
              if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1.return)) _a.call(iterator_1);
            } finally {
              if (e_1) throw e_1.error;
            }

            return [7
            /*endfinally*/
            ];

          case 7:
            return [2
            /*return*/
            , iterator];
        }
      });
    });
  } // async map

  /**
   * @memberof AsyncFunctions
   */

  function asyncMapArrayF(f, iterator) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , asyncReduceArrayF(function (prev, cur, index) {
          prev.push(f(cur, index, iterator));
          return prev;
        }, [], iterator)];
      });
    });
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncMapObjectF(f, iterator) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , asyncReduceObjectF(function (prev, cur, key) {
          prev[key] = f(cur, key, iterator);
          return prev;
        }, {}, iterator)];
      });
    });
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncMapIteratorF(f, iterator) {
    return __asyncGenerator(this, arguments, function asyncMapIteratorF_1() {
      var e_2, _a, iterator_2, iterator_2_1, value, _b, e_2_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 7, 8, 9]);

            iterator_2 = __values(iterator), iterator_2_1 = iterator_2.next();
            _c.label = 1;

          case 1:
            if (!!iterator_2_1.done) return [3
            /*break*/
            , 6];
            value = iterator_2_1.value;
            _b = f;
            return [4
            /*yield*/
            , __await(value)];

          case 2:
            return [4
            /*yield*/
            , __await.apply(void 0, [_b.apply(void 0, [_c.sent(), iterator])])];

          case 3:
            return [4
            /*yield*/
            , _c.sent()];

          case 4:
            _c.sent();

            _c.label = 5;

          case 5:
            iterator_2_1 = iterator_2.next();
            return [3
            /*break*/
            , 1];

          case 6:
            return [3
            /*break*/
            , 9];

          case 7:
            e_2_1 = _c.sent();
            e_2 = {
              error: e_2_1
            };
            return [3
            /*break*/
            , 9];

          case 8:
            try {
              if (iterator_2_1 && !iterator_2_1.done && (_a = iterator_2.return)) _a.call(iterator_2);
            } finally {
              if (e_2) throw e_2.error;
            }

            return [7
            /*endfinally*/
            ];

          case 9:
            return [2
            /*return*/
            ];
        }
      });
    });
  } // async filter

  /**
   * @memberof AsyncFunctions
   */

  function asyncFilterArrayF(f, iterator) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , asyncReduceArrayF(function (prev, cur, index) {
          f(cur, index, iterator) && prev.push(cur);
          return prev;
        }, [], iterator)];
      });
    });
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncFilterObjectF(f, iterator) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , asyncReduceObjectF(function (prev, cur, key) {
          f(cur, key, iterator) && (prev[key] = cur);
          return prev;
        }, {}, iterator)];
      });
    });
  }
  /**
   * @memberof AsyncFunctions
   */

  function asyncFilterIteratorF(f, iterator) {
    return __asyncGenerator(this, arguments, function asyncFilterIteratorF_1() {
      var e_3, _a, iterator_3, iterator_3_1, value, _b, _c, e_3_1;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            _d.trys.push([0, 8, 9, 10]);

            iterator_3 = __values(iterator), iterator_3_1 = iterator_3.next();
            _d.label = 1;

          case 1:
            if (!!iterator_3_1.done) return [3
            /*break*/
            , 7];
            value = iterator_3_1.value;
            _c = f;
            return [4
            /*yield*/
            , __await(value)];

          case 2:
            _b = _c.apply(void 0, [_d.sent(), iterator]);
            if (!_b) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , __await(value)];

          case 3:
            return [4
            /*yield*/
            , _d.sent()];

          case 4:
            _b = _d.sent();
            _d.label = 5;

          case 5:
            _d.label = 6;

          case 6:
            iterator_3_1 = iterator_3.next();
            return [3
            /*break*/
            , 1];

          case 7:
            return [3
            /*break*/
            , 10];

          case 8:
            e_3_1 = _d.sent();
            e_3 = {
              error: e_3_1
            };
            return [3
            /*break*/
            , 10];

          case 9:
            try {
              if (iterator_3_1 && !iterator_3_1.done && (_a = iterator_3.return)) _a.call(iterator_3);
            } finally {
              if (e_3) throw e_3.error;
            }

            return [7
            /*endfinally*/
            ];

          case 10:
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  /**
   * @namespace Currying
   * @sort 1
   */

  /**
   * @memberof Currying
   * @function
   */
  // currying reduce

  var reduceArray =
  /*#__PURE__*/
  curry(reduceArrayF);
  /**
   * @memberof Currying
   * @function
   */

  var reduceObject =
  /*#__PURE__*/
  curry(reduceObjectF);
  /**
   * @memberof Currying
   * @function
   */

  var reduceIterator =
  /*#__PURE__*/
  curry(reduceIteratorF); // currying each

  /**
   * @memberof Currying
   * @function
   */

  var eachArray =
  /*#__PURE__*/
  curry(eachArrayF);
  /**
   * @memberof Currying
   * @function
   */

  var eachObject =
  /*#__PURE__*/
  curry(eachObjectF);
  /**
   * @memberof Currying
   * @function
   */

  var eachIterator =
  /*#__PURE__*/
  curry(eachIteratorF);
  /**
   * @memberof Currying
   * @function
   */

  var mapArray =
  /*#__PURE__*/
  curry(mapArrayF);
  /**
   * @memberof Currying
   * @function
   */

  var mapObject =
  /*#__PURE__*/
  curry(mapObjectF);
  /**
   * @memberof Currying
   * @function
   */

  var mapIterator =
  /*#__PURE__*/
  curry(mapIteratorF);
  /**
   * @memberof Currying
   * @function
   */

  var filterArray =
  /*#__PURE__*/
  curry(filterArrayF);
  /**
   * @memberof Currying
   * @function
   */

  var filterObject =
  /*#__PURE__*/
  curry(filterObjectF);
  /**
   * @memberof Currying
   * @function
   */

  var filterIterator =
  /*#__PURE__*/
  curry(filterIteratorF); // currying async each

  /**
   * @memberof Currying
   * @function
   */

  var asyncEachIterator =
  /*#__PURE__*/
  curry(asyncEachIteratorF);
  /**
   * @memberof Currying
   * @function
   */

  var asyncReduceIterator =
  /*#__PURE__*/
  curry(asyncReduceIteratorF);
  /**
   * @memberof Currying
   * @function
   * @param {} callbackFn - Function that produces an element of the new Iterator.
   * @param {} [iterator] - The iterator to call this function.
   * @example
  asyncMapIterator(v => console.log(v), [fetch("https://daybrush.com").then(res => res.json()), 1, 2, 3]);

  // curry
  const func = asyncMapIterator(v => console.log(v));

  func([fetch("https://daybrush.com").then(res => res.json()), 1, 2, 3])
   */

  var asyncMapIterator =
  /*#__PURE__*/
  curry(asyncMapIteratorF);



  var fjx = ({
    reduceArray: reduceArray,
    reduceObject: reduceObject,
    reduceIterator: reduceIterator,
    eachArray: eachArray,
    eachObject: eachObject,
    eachIterator: eachIterator,
    mapArray: mapArray,
    mapObject: mapObject,
    mapIterator: mapIterator,
    filterArray: filterArray,
    filterObject: filterObject,
    filterIterator: filterIterator,
    asyncEachIterator: asyncEachIterator,
    asyncReduceIterator: asyncReduceIterator,
    asyncMapIterator: asyncMapIterator,
    reduceArrayF: reduceArrayF,
    reduceObjectF: reduceObjectF,
    reduceIteratorF: reduceIteratorF,
    eachArrayF: eachArrayF,
    eachObjectF: eachObjectF,
    eachIteratorF: eachIteratorF,
    mapArrayF: mapArrayF,
    mapObjectF: mapObjectF,
    mapIteratorF: mapIteratorF,
    filterArrayF: filterArrayF,
    filterObjectF: filterObjectF,
    filterIteratorF: filterIteratorF,
    headArray: headArray,
    tailArray: tailArray,
    head: head,
    tail: tail,
    exec: exec,
    asyncArray: asyncArray,
    asyncObject: asyncObject,
    toArray: toArray,
    asyncIterator: asyncIterator,
    asyncReduceArrayF: asyncReduceArrayF,
    asyncReduceObjectF: asyncReduceObjectF,
    asyncReduceIteratorF: asyncReduceIteratorF,
    asyncEachArrayF: asyncEachArrayF,
    asyncEachObjectF: asyncEachObjectF,
    asyncEachIteratorF: asyncEachIteratorF,
    asyncMapArrayF: asyncMapArrayF,
    asyncMapObjectF: asyncMapObjectF,
    asyncMapIteratorF: asyncMapIteratorF,
    asyncFilterArrayF: asyncFilterArrayF,
    asyncFilterObjectF: asyncFilterObjectF,
    asyncFilterIteratorF: asyncFilterIteratorF,
    isPromise: isPromise,
    isIterable: isIterable,
    isIterator: isIterator,
    curry: curry,
    _pipe: _pipe,
    pipe: pipe,
    compose: compose
  });

  return fjx;

})));
//# sourceMappingURL=fjx.js.map
