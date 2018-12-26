/*
Copyright (c) 2018 Daybrush
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/fjx.git
@version 0.0.1-rc1
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

    var IS_SYMBOL = typeof Symbol !== "undefined";
    var IS_PROMISE = typeof Promise !== "undefined";
    function isPromise(value) {
      return IS_PROMISE && value instanceof Promise;
    }
    function isIterable(iter) {
      return IS_SYMBOL && !!(iter && iter[Symbol.iterator]);
    }
    function exec(v, f) {
      return isPromise(v) ? v.then(function (pv) {
        return f(pv);
      }) : f(v);
    }
    function reduceA(callbackFn, iterator, initial) {
      var _this = this;

      return reduce(function (prev, cur) {
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
      }, iterator, initial);
    }
    function reduce(callbackFn, iterator, initial) {
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
          if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1["return"])) _a.call(iterator_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return cur;
    }
    function eachArray(f, iterator) {
      iterator.forEach(f);
      return iterator;
    }
    function eachObject(f, iterator) {
      for (var key in iterator) {
        f(iterator[key], key, iterator);
      }

      return iterator;
    }
    function eachIterator(f, iterator) {
      var e_2, _a;

      try {
        for (var iterator_2 = __values(iterator), iterator_2_1 = iterator_2.next(); !iterator_2_1.done; iterator_2_1 = iterator_2.next()) {
          var value = iterator_2_1.value;
          exec(value, function (v) {
            return f(v, iterator);
          });
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (iterator_2_1 && !iterator_2_1.done && (_a = iterator_2["return"])) _a.call(iterator_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      return iterator;
    }
    function eachIteratorA(f, iterator) {
      return __awaiter(this, void 0, void 0, function () {
        var e_3, _a, iterator_3, iterator_3_1, value, _b, e_3_1;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 5, 6, 7]);

              iterator_3 = __values(iterator), iterator_3_1 = iterator_3.next();
              _c.label = 1;

            case 1:
              if (!!iterator_3_1.done) return [3
              /*break*/
              , 4];
              value = iterator_3_1.value;
              _b = f;
              return [4
              /*yield*/
              , value];

            case 2:
              _b.apply(void 0, [_c.sent(), iterator]);

              _c.label = 3;

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
              e_3_1 = _c.sent();
              e_3 = {
                error: e_3_1
              };
              return [3
              /*break*/
              , 7];

            case 6:
              try {
                if (iterator_3_1 && !iterator_3_1.done && (_a = iterator_3["return"])) _a.call(iterator_3);
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
      });
    }
    function mapArray(f, iterator) {
      return iterator.map(f);
    }
    function mapObject(f, iterator) {
      var obj = {};

      for (var key in iterator) {
        obj[key] = f(iterator[key], key, iterator);
      }

      return obj;
    }
    function mapIterator(f, iterator) {
      var e_4, _a, iterator_4, iterator_4_1, value, e_4_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 7]);

            iterator_4 = __values(iterator), iterator_4_1 = iterator_4.next();
            _b.label = 1;

          case 1:
            if (!!iterator_4_1.done) return [3
            /*break*/
            , 4];
            value = iterator_4_1.value;
            return [4
            /*yield*/
            , exec(value, function (v) {
              return f(v, iterator);
            })];

          case 2:
            _b.sent();

            _b.label = 3;

          case 3:
            iterator_4_1 = iterator_4.next();
            return [3
            /*break*/
            , 1];

          case 4:
            return [3
            /*break*/
            , 7];

          case 5:
            e_4_1 = _b.sent();
            e_4 = {
              error: e_4_1
            };
            return [3
            /*break*/
            , 7];

          case 6:
            try {
              if (iterator_4_1 && !iterator_4_1.done && (_a = iterator_4["return"])) _a.call(iterator_4);
            } finally {
              if (e_4) throw e_4.error;
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
    function mapIteratorA(f, iterator) {
      return __asyncGenerator(this, arguments, function mapIteratorA_1() {
        var e_5, _a, iterator_5, iterator_5_1, value, _b, e_5_1;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 7, 8, 9]);

              iterator_5 = __values(iterator), iterator_5_1 = iterator_5.next();
              _c.label = 1;

            case 1:
              if (!!iterator_5_1.done) return [3
              /*break*/
              , 6];
              value = iterator_5_1.value;
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
              iterator_5_1 = iterator_5.next();
              return [3
              /*break*/
              , 1];

            case 6:
              return [3
              /*break*/
              , 9];

            case 7:
              e_5_1 = _c.sent();
              e_5 = {
                error: e_5_1
              };
              return [3
              /*break*/
              , 9];

            case 8:
              try {
                if (iterator_5_1 && !iterator_5_1.done && (_a = iterator_5["return"])) _a.call(iterator_5);
              } finally {
                if (e_5) throw e_5.error;
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
    }
    function filterArray(f, iterator) {
      return iterator.map(f);
    }
    function filterObject(f, iterator) {
      var obj = {};

      for (var key in iterator) {
        f(iterator[key], key, iterator) && (obj[key] = iterator[key]);
      }

      return obj;
    }
    function filterIterator(f, iterator) {
      return __asyncGenerator(this, arguments, function filterIterator_1() {
        var e_6, _a, iterator_6, iterator_6_1, value, _b, e_6_1;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 7, 8, 9]);

              iterator_6 = __values(iterator), iterator_6_1 = iterator_6.next();
              _c.label = 1;

            case 1:
              if (!!iterator_6_1.done) return [3
              /*break*/
              , 6];
              value = iterator_6_1.value;
              _b = f(value, iterator);
              if (!_b) return [3
              /*break*/
              , 4];
              return [4
              /*yield*/
              , __await(value)];

            case 2:
              return [4
              /*yield*/
              , _c.sent()];

            case 3:
              _b = _c.sent();
              _c.label = 4;

            case 4:
              _c.label = 5;

            case 5:
              iterator_6_1 = iterator_6.next();
              return [3
              /*break*/
              , 1];

            case 6:
              return [3
              /*break*/
              , 9];

            case 7:
              e_6_1 = _c.sent();
              e_6 = {
                error: e_6_1
              };
              return [3
              /*break*/
              , 9];

            case 8:
              try {
                if (iterator_6_1 && !iterator_6_1.done && (_a = iterator_6["return"])) _a.call(iterator_6);
              } finally {
                if (e_6) throw e_6.error;
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
    }
    function filterIteratorA(f, iterator) {
      return __asyncGenerator(this, arguments, function filterIteratorA_1() {
        var e_7, _a, iterator_7, iterator_7_1, value, _b, _c, e_7_1;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 8, 9, 10]);

              iterator_7 = __values(iterator), iterator_7_1 = iterator_7.next();
              _d.label = 1;

            case 1:
              if (!!iterator_7_1.done) return [3
              /*break*/
              , 7];
              value = iterator_7_1.value;
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
              iterator_7_1 = iterator_7.next();
              return [3
              /*break*/
              , 1];

            case 7:
              return [3
              /*break*/
              , 10];

            case 8:
              e_7_1 = _d.sent();
              e_7 = {
                error: e_7_1
              };
              return [3
              /*break*/
              , 10];

            case 9:
              try {
                if (iterator_7_1 && !iterator_7_1.done && (_a = iterator_7["return"])) _a.call(iterator_7);
              } finally {
                if (e_7) throw e_7.error;
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

    var fjx = ({
        IS_SYMBOL: IS_SYMBOL,
        IS_PROMISE: IS_PROMISE,
        isPromise: isPromise,
        isIterable: isIterable,
        exec: exec,
        reduceA: reduceA,
        reduce: reduce,
        eachArray: eachArray,
        eachObject: eachObject,
        eachIterator: eachIterator,
        eachIteratorA: eachIteratorA,
        mapArray: mapArray,
        mapObject: mapObject,
        mapIterator: mapIterator,
        mapIteratorA: mapIteratorA,
        filterArray: filterArray,
        filterObject: filterObject,
        filterIterator: filterIterator,
        filterIteratorA: filterIteratorA
    });

    return fjx;

})));
//# sourceMappingURL=fjx.js.map
