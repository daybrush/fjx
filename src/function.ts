import {
  ReduceIteratorCallbackType,
  ReduceArrayCallbackType,
  ReduceObjectCallbackType,
  ObjectInterface,
  EachArrayCalllbackType,
  EachObjectCalllbackType,
  EachIteratorCalllbackType,
} from "./types";

// reduce
/**
 * @namespace Functions
 */
/**
 * @memberof Functions
 * @function
 */
export function reduceArrayF<T, U = T>(
  callbackFn: ReduceArrayCallbackType<T, U>,
  iterator: U[], initial: T) {
  return iterator.reduce(callbackFn, initial);
}
/**
 * @memberof Functions
 * @function
 */
export function reduceObjectF<T, U = T>(
  callbackFn: ReduceObjectCallbackType<T, U>,
  iterator: ObjectInterface<U>, initial: T) {
  let cur = initial;

  for (const key in iterator) {
    cur = callbackFn(cur, iterator[key], key, iterator);
  }
  return cur;
}
/**
 * @memberof Functions
 * @function
 */
export function reduceIteratorF<T, U = T>(
  callbackFn: ReduceIteratorCallbackType<T, U>,
  iterator: Iterable<U>, initial: T) {
  let cur = initial;

  for (const value of iterator) {
    cur = callbackFn(cur, value, iterator);
  }
  return cur;
}

// each
/**
 * @memberof Functions
 * @function
 */
export function eachArrayF<T = any>(f: EachArrayCalllbackType<T, void>, iterator: T[]) {
  iterator.forEach(f);
  return iterator;
}
/**
 * @memberof Functions
 * @function
 */
export function eachObjectF<T = any>(f: EachObjectCalllbackType<T, void>, iterator: ObjectInterface<T>) {
  for (const key in iterator) {
    f(iterator[key], key, iterator);
  }
  return iterator;
}
/**
 * @memberof Functions
 * @function
 */
export function eachIteratorF<T = any>(f: EachIteratorCalllbackType<T, void>, iterator: Iterable<T>) {
  for (const value of iterator) {
    f(value, iterator);
  }
  return iterator;
}

// map
/**
 * @memberof Functions
 * @function
 */
export function mapArrayF<T = any, U = any>(f: EachArrayCalllbackType<T, U>, iterator: T[]) {
  return iterator.map<U>(f);
}
/**
 * @memberof Functions
 * @function
 */
export function mapObjectF<T = any, U = any>(f: EachObjectCalllbackType<T, U>, iterator: ObjectInterface<T>) {
  const obj: ObjectInterface<U> = {};

  for (const key in iterator) {
    obj[key] = f(iterator[key], key, iterator);
  }
  return obj;
}
/**
 * @memberof Functions
 * @function
 */
export function* mapIteratorF<T = any, U = any>(f: EachIteratorCalllbackType<T, U>, iterator: Iterable<T>) {
  for (const value of iterator) {
    yield f(value, iterator);
  }
}

// filter
/**
 * @memberof Functions
 * @function
 */
export function filterArrayF<T = any>(f: EachArrayCalllbackType<T, boolean>, iterator: T[]) {
  return iterator.map(f);
}
/**
 * @memberof Functions
 * @function
 */
export function filterObjectF<T = any>(f: EachObjectCalllbackType<T, boolean>, iterator: ObjectInterface<T>) {
  const obj: Partial<ObjectInterface<T>> = {};

  for (const key in iterator) {
    f(iterator[key], key, iterator) && (obj[key] = iterator[key]);
  }
  return obj;
}
/**
 * @memberof Functions
 * @function
 */
export function* filterIteratorF<T = any>(f: EachIteratorCalllbackType<T, boolean>, iterator: Iterable<T>) {
  for (const value of iterator) {
    f(value, iterator) && (yield value);
  }
}
/**
 * @memberof Functions
 * @function
 */
export function headArray<T>(iterator: T[]) {
  return iterator[0];
}
/**
 * @memberof Functions
 * @function
 */
export function tailArray<T>(iterator: T[]) {
  return iterator[iterator.length - 1];
}
/**
 * @memberof Functions
 * @function
 */
export function head<T>(iterator: Iterable<T> | AsyncIterable<T>) {
  for (const value of iterator) {
    return value;
  }
}
/**
 * @memberof Functions
 * @function
 */
export function tail<T>(iterator: Iterable<T>) {
  return reduceIteratorF<T>(prev => prev, iterator, void 0);
}
