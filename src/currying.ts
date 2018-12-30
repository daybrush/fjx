import {
  ReduceIteratorCallbackType,
  ReduceIteratorAsyncCallbackType,
  Curry1,
  Curry2,
  EachArrayCalllbackType,
  EachObjectCalllbackType,
  EachIteratorCalllbackType,
  EachAsyncIteratorCalllbackType,
  ReduceArrayCallbackType,
  ReduceObjectCallbackType,
} from "./types";
import { curry } from "./utils";
import {
  asyncReduceIteratorF, asyncMapIteratorF, asyncEachIteratorF
} from "./async";
import {
  reduceIteratorF,
  eachArrayF,
  eachObjectF,
  eachIteratorF,
  mapArrayF,
  mapObjectF,
  mapIteratorF,
  reduceArrayF,
  reduceObjectF,
  filterArrayF,
  filterObjectF,
  filterIteratorF
} from "./function";
import { ObjectInterface } from "@daybrush/utils";
/**
 * @namespace Currying
 * @sort 1
 */
/**
 * @memberof Currying
 * @function
 */
// currying reduce
export const reduceArray:
  (<T, U = T>(a: ReduceArrayCallbackType<T, U>) => Curry2<U[], T, T>) &
  (<T, U = T>(a: ReduceArrayCallbackType<T, U>, b: U[]) => Curry1<T, T>) &
  (<T, U = T>(a: ReduceArrayCallbackType<T, U>, b: U[], c: T) => T) =
  /*#__PURE__*/curry(reduceArrayF);

/**
 * @memberof Currying
 * @function
 */
export const reduceObject:
  (<T, U = T>(a: ReduceObjectCallbackType<T, U>) => Curry2<ObjectInterface<U>, T, T>) &
  (<T, U = T>(a: ReduceObjectCallbackType<T, U>, b: ObjectInterface<U>) => Curry1<T, T>) &
  (<T, U = T>(a: ReduceObjectCallbackType<T, U>, b: ObjectInterface<U>, c: T) => T) =
  /*#__PURE__*/curry(reduceObjectF);

/**
 * @memberof Currying
 * @function
 */
export const reduceIterator:
  (<T, U = T>(a: ReduceIteratorCallbackType<T, U>) => Curry2<Iterable<U>, T, T>) &
  (<T, U = T>(a: ReduceIteratorCallbackType<T, U>, b: Iterable<U>) => Curry1<T, T>) &
  (<T, U = T>(a: ReduceIteratorCallbackType<T, U>, b: Iterable<U>, c: T) => T) =
  /*#__PURE__*/curry(reduceIteratorF);

// currying each
/**
 * @memberof Currying
 * @function
 */
export const eachArray:
  (<T = any>(a: EachArrayCalllbackType<T, void>) => Curry1<T[], T[]>) &
  (<T = any>(a: EachArrayCalllbackType<T, void>, b: T[]) => T[]) =
  /*#__PURE__*/curry(eachArrayF);
/**
 * @memberof Currying
 * @function
 */
export const eachObject:
  (<T = any>(a: EachObjectCalllbackType<T, void>) => Curry1<ObjectInterface<T>, ObjectInterface<T>>) &
  (<T = any>(a: EachObjectCalllbackType<T, void>, b: ObjectInterface<T>) => ObjectInterface<T>) =
  /*#__PURE__*/curry(eachObjectF);
/**
 * @memberof Currying
 * @function
 */
export const eachIterator:
  (<T = any>(a: EachIteratorCalllbackType<T, void>) => Curry1<Iterable<T>, Iterable<T>>) &
  (<T = any>(a: EachIteratorCalllbackType<T, void>, b: Iterable<T>) => Iterable<T>) =
  /*#__PURE__*/curry(eachIteratorF);
/**
 * @memberof Currying
 * @function
 */
export const mapArray:
 (<T = any, U = any>(a: EachArrayCalllbackType<T, U>) => Curry1<T[], T[]>) &
 (<T = any, U = any>(a: EachArrayCalllbackType<T, U>, b: T[]) => T[]) =
 /*#__PURE__*/curry(mapArrayF);
/**
 * @memberof Currying
 * @function
 */
export const mapObject:
 (<T = any, U = any>(a: EachObjectCalllbackType<T, U>) => Curry1<ObjectInterface<T>, ObjectInterface<T>>) &
 (<T = any, U = any>(a: EachObjectCalllbackType<T, U>, b: ObjectInterface<T>) => ObjectInterface<T>) =
 /*#__PURE__*/curry(mapObjectF);
/**
 * @memberof Currying
 * @function
 */
export const mapIterator:
 (<T = any, U = any>(a: EachIteratorCalllbackType<T, U>) => Curry1<Iterable<T>, IterableIterator<T>>) &
 (<T = any, U = any>(a: EachIteratorCalllbackType<T, U>, b: Iterable<T>) => IterableIterator<T>) =
 /*#__PURE__*/ curry(mapIteratorF);
/**
 * @memberof Currying
 * @function
 */
export const filterArray:
 (<T = any>(a: EachArrayCalllbackType<T, boolean>) => Curry1<T[], T[]>) &
 (<T = any>(a: EachArrayCalllbackType<T, boolean>, b: T[]) => T[]) =
 /*#__PURE__*/ curry(filterArrayF);
/**
 * @memberof Currying
 * @function
 */
export const filterObject:
 (<T = any>(a: EachObjectCalllbackType<T, boolean>) => Curry1<ObjectInterface<T>, ObjectInterface<T>>) &
 (<T = any>(a: EachObjectCalllbackType<T, boolean>, b: ObjectInterface<T>) => ObjectInterface<T>) =
 /*#__PURE__*/ curry(filterObjectF);
/**
 * @memberof Currying
 * @function
 */
export const filterIterator:
 (<T = any>(a: EachIteratorCalllbackType<T, boolean>) => Curry1<Iterable<T>, IterableIterator<T>>) &
 (<T = any>(a: EachIteratorCalllbackType<T, boolean>, b: Iterable<T>) => IterableIterator<T>) =
 /*#__PURE__*/ curry(filterIteratorF);

// currying async each
/**
 * @memberof Currying
 * @function
 */
export const asyncEachIterator:
  (<T = any>(a: EachAsyncIteratorCalllbackType<T, void>) => Curry1<Iterable<T>, Promise<Iterable<T>>>) &
  (<T = any>(a: EachAsyncIteratorCalllbackType<T, void>, b: Iterable<T>) => Promise<Iterable<T>>) =
  /*#__PURE__*/ curry(asyncEachIteratorF);
/**
 * @memberof Currying
 * @function
 */
export const asyncReduceIterator:
 (<T, U = T>(a: ReduceIteratorAsyncCallbackType<T, U>, b: Iterable<U | Promise<U>>, c: T) => Promise<T>) &
 (<T, U = T>(a: ReduceIteratorAsyncCallbackType<T, U>, b: Iterable<U | Promise<U>>) => Curry1<T, Promise<T>>) &
 (<T, U = T>(a: ReduceIteratorAsyncCallbackType<T, U>) => Curry2<Iterable<U | Promise<U>>, T, Promise<T>>) =
  /*#__PURE__*/ curry(asyncReduceIteratorF);
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
export const asyncMapIterator:
  (<T = any, U = any>(a: EachAsyncIteratorCalllbackType<T, U>) => Curry1<Iterable<T>, AsyncIterableIterator<T>>) &
  (<T = any, U = any>(a: EachAsyncIteratorCalllbackType<T, U>, b: Iterable<T>) => AsyncIterableIterator<T>) =
  /*#__PURE__*/ curry(asyncMapIteratorF);
