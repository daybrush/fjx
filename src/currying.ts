import {
  ObjectInterface,
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

// currying reduce
export const reduceArray:
  (<T, U = T>(a: ReduceArrayCallbackType<T, U>) => Curry2<U[], T, T>) &
  (<T, U = T>(a: ReduceArrayCallbackType<T, U>, b: U[]) => Curry1<T, T>) &
  (<T, U = T>(a: ReduceArrayCallbackType<T, U>, b: U[], c: T) => T) =
  /*#__PURE__*/curry(reduceArrayF);

export const reduceObject:
  (<T, U = T>(a: ReduceObjectCallbackType<T, U>) => Curry2<ObjectInterface<U>, T, T>) &
  (<T, U = T>(a: ReduceObjectCallbackType<T, U>, b: ObjectInterface<U>) => Curry1<T, T>) &
  (<T, U = T>(a: ReduceObjectCallbackType<T, U>, b: ObjectInterface<U>, c: T) => T) =
  /*#__PURE__*/curry(reduceObjectF);

export const reduceIterator:
  (<T, U = T>(a: ReduceIteratorCallbackType<T, U>) => Curry2<Iterable<U>, T, T>) &
  (<T, U = T>(a: ReduceIteratorCallbackType<T, U>, b: Iterable<U>) => Curry1<T, T>) &
  (<T, U = T>(a: ReduceIteratorCallbackType<T, U>, b: Iterable<U>, c: T) => T) =
  /*#__PURE__*/curry(reduceIteratorF);

 // currying each
export const eachArray:
  (<T = any>(a: EachArrayCalllbackType<T, void>) => Curry1<T[], T[]>) &
  (<T = any>(a: EachArrayCalllbackType<T, void>, b: T[]) => T[]) =
  /*#__PURE__*/curry(eachArrayF);

export const eachObject:
  (<T = any>(a: EachObjectCalllbackType<T, void>) => Curry1<ObjectInterface<T>, ObjectInterface<T>>) &
  (<T = any>(a: EachObjectCalllbackType<T, void>, b: ObjectInterface<T>) => ObjectInterface<T>) =
  /*#__PURE__*/curry(eachObjectF);

export const eachIterator:
  (<T = any>(a: EachIteratorCalllbackType<T, void>) => Curry1<Iterable<T>, Iterable<T>>) &
  (<T = any>(a: EachIteratorCalllbackType<T, void>, b: Iterable<T>) => Iterable<T>) =
  /*#__PURE__*/curry(eachIteratorF);

export const mapArray:
 (<T = any, U = any>(a: EachArrayCalllbackType<T, U>) => Curry1<T[], T[]>) &
 (<T = any, U = any>(a: EachArrayCalllbackType<T, U>, b: T[]) => T[]) =
 /*#__PURE__*/curry(mapArrayF);

export const mapObject:
 (<T = any, U = any>(a: EachObjectCalllbackType<T, U>) => Curry1<ObjectInterface<T>, ObjectInterface<T>>) &
 (<T = any, U = any>(a: EachObjectCalllbackType<T, U>, b: ObjectInterface<T>) => ObjectInterface<T>) =
 /*#__PURE__*/curry(mapObjectF);

export const mapIterator:
 (<T = any, U = any>(a: EachIteratorCalllbackType<T, U>) => Curry1<Iterable<T>, IterableIterator<T>>) &
 (<T = any, U = any>(a: EachIteratorCalllbackType<T, U>, b: Iterable<T>) => IterableIterator<T>) =
 /*#__PURE__*/ curry(mapIteratorF);

export const filterArray:
 (<T = any>(a: EachArrayCalllbackType<T, boolean>) => Curry1<T[], T[]>) &
 (<T = any>(a: EachArrayCalllbackType<T, boolean>, b: T[]) => T[]) =
 /*#__PURE__*/ curry(filterArrayF);

export const filterObject:
 (<T = any>(a: EachObjectCalllbackType<T, boolean>) => Curry1<ObjectInterface<T>, ObjectInterface<T>>) &
 (<T = any>(a: EachObjectCalllbackType<T, boolean>, b: ObjectInterface<T>) => ObjectInterface<T>) =
 /*#__PURE__*/ curry(filterObjectF);

export const filterIterator:
 (<T = any>(a: EachIteratorCalllbackType<T, boolean>) => Curry1<Iterable<T>, IterableIterator<T>>) &
 (<T = any>(a: EachIteratorCalllbackType<T, boolean>, b: Iterable<T>) => IterableIterator<T>) =
 /*#__PURE__*/ curry(filterIteratorF);

// currying async each
export const asyncEachIterator:
  (<T = any>(a: EachAsyncIteratorCalllbackType<T, void>) => Curry1<Iterable<T>, Promise<Iterable<T>>>) &
  (<T = any>(a: EachAsyncIteratorCalllbackType<T, void>, b: Iterable<T>) => Promise<Iterable<T>>) =
  /*#__PURE__*/ curry(asyncEachIteratorF);

export const asyncReduceIterator:
 (<T, U = T>(a: ReduceIteratorAsyncCallbackType<T, U>, b: Iterable<U | Promise<U>>, c: T) => Promise<T>) &
 (<T, U = T>(a: ReduceIteratorAsyncCallbackType<T, U>, b: Iterable<U | Promise<U>>) => Curry1<T, Promise<T>>) &
 (<T, U = T>(a: ReduceIteratorAsyncCallbackType<T, U>) => Curry2<Iterable<U | Promise<U>>, T, Promise<T>>) =
  /*#__PURE__*/ curry(asyncReduceIteratorF);

export const asyncMapIterator:
  (<T = any, U = any>(a: EachAsyncIteratorCalllbackType<T, U>) => Curry1<Iterable<T>, AsyncIterableIterator<T>>) &
  (<T = any, U = any>(a: EachAsyncIteratorCalllbackType<T, U>, b: Iterable<T>) => AsyncIterableIterator<T>) =
  /*#__PURE__*/ curry(asyncMapIteratorF); // comments???

export const a = /*#__PURE__*/curry(asyncMapIteratorF);
