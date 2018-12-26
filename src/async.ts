import { isPromise } from "./utils";
import {
  ReduceIteratorAsyncCallbackType,
  ReduceArrayAsyncCallbackType,
  ObjectInterface,
  ReduceObjectAsyncCallbackType,
  EachAsyncArrayCalllbackType,
  EachAsyncObjectCalllbackType,
  EachAsyncIteratorCalllbackType,
} from "./types";
import { reduceIteratorF, reduceArrayF, reduceObjectF } from "./function";
/**
 * @namespace AsyncFunctions
 */
export function exec<T, U = T>(v: Promise<T>, f: (pv: T) => U): Promise<U>;
export function exec<T, U = T>(v: T, f: (pv: T) => U): U;
export function exec<T, U = T>(v: Promise<T> | T, f: (pv: T) => U): Promise<U> | U;
/**
 * @memberof AsyncFunctions
 */
export function exec<T, U = T>(v: T | Promise<T>, f: (pv: T) => U) {
  return isPromise(v) ? v.then(pv => f(pv)) : f(v);
}
// async to await
/**
 * @memberof AsyncFunctions
 */
export function asyncArray<T>(iterator: Array<T | Promise<T>>) {
  return reduceArrayF<T[] | Promise<T[]>, T | Promise<T>>(async (prev, cur) => {
    (await prev).push(await cur);
    return prev;
  }, iterator, []);
}
/**
 * @memberof AsyncFunctions
 */
export function asyncObject<T>(iterator: ObjectInterface<T | Promise<T>>) {
  return reduceObjectF<ObjectInterface<T> | Promise<ObjectInterface<T>>, T | Promise<T>>(async (prev, cur, key) => {
    (await prev)[key] = (await cur);
    return prev;
  }, iterator, {});
}
/**
 * @memberof AsyncFunctions
 */
export function toArray<T = any>(iterator: Iterable<T>) {
  return Array.from(iterator);
}
/**
 * @memberof AsyncFunctions
 */
export function asyncIterator<T = any>(iterator: Iterable<T>) {
    return Promise.all(toArray(iterator)).then(list => list[Symbol.iterator]());
}
// async reduce
/**
 * @memberof AsyncFunctions
 */
export function asyncReduceArrayF<T, U = T>(
  callbackFn: ReduceArrayAsyncCallbackType<T, U>,
  iterator: Array<U | Promise<U>>,
  initial: T) {
  return reduceArrayF<T | Promise<T>, U | Promise<U>>(async (prev, cur, index) => {
    const prev2 = await prev;
    const cur2 = await cur;

    return callbackFn(prev2, cur2, index, iterator);
  }, iterator, initial) as Promise<T>;
}
/**
 * @memberof AsyncFunctions
 */
export function asyncReduceObjectF<T, U = T>(
  callbackFn: ReduceObjectAsyncCallbackType<T, U>,
  iterator: ObjectInterface<U | Promise<U>>,
  initial: T) {
  return reduceObjectF<T | Promise<T>, U | Promise<U>>(async (prev, cur, key) => {
    const prev2 = await prev;
    const cur2 = await cur;

    return callbackFn(prev2, cur2, key, iterator);
  }, iterator, initial) as Promise<T>;
}
/**
 * @memberof AsyncFunctions
 */
export function asyncReduceIteratorF<T, U = T>(
  callbackFn: ReduceIteratorAsyncCallbackType<T, U>,
  iterator: Iterable<U | Promise<U>>,
  initial: T) {
  return reduceIteratorF<T | Promise<T>, U | Promise<U>>(async (prev, cur) => {
    const prev2 = await prev;
    const cur2 = await cur;

    return callbackFn(prev2, cur2, iterator);
  }, iterator, initial) as Promise<T>;
}

// async each
/**
 * @memberof AsyncFunctions
 */
export async function asyncEachArrayF<T = any>(
  f: EachAsyncArrayCalllbackType<T, void>, iterator: Array<T | Promise<T>>) {
  return asyncReduceArrayF<T, T>((prev, cur, index) => {
    f(cur, index, iterator);

    return cur;
  }, iterator, void 0).then(() => iterator);
}
/**
 * @memberof AsyncFunctions
 */
export async function asyncEachObjectF<T = any>(
  f: EachAsyncObjectCalllbackType<T, void>, iterator: ObjectInterface<T | Promise<T>>) {
  return asyncReduceObjectF<T, T>((prev, cur, key) => {
    f(cur, key, iterator);

    return cur;
  }, iterator, void 0).then(() => iterator);
}
/**
 * @memberof AsyncFunctions
 */
export async function asyncEachIteratorF<T = any>(
  f: EachAsyncIteratorCalllbackType<T, void>, iterator: Iterable<T>) {
  for (const value of iterator) {
    f(await value, iterator);
  }
  return iterator;
}

// async map
/**
 * @memberof AsyncFunctions
 */
export async function asyncMapArrayF<T = any, U = any>(
  f: EachAsyncArrayCalllbackType<T, U>, iterator: Array<T | Promise<T>>) {
  return asyncReduceArrayF<U[], T>((prev, cur, index) => {
    prev.push(f(cur, index, iterator));

    return prev;
  }, iterator, []);
}
/**
 * @memberof AsyncFunctions
 */
export async function asyncMapObjectF<T = any, U = any>(
  f: EachAsyncObjectCalllbackType<T, U>, iterator: ObjectInterface<T | Promise<T>>) {
  return asyncReduceObjectF<ObjectInterface<U>, T>((prev, cur, key) => {
    prev[key] = f(cur, key, iterator);

    return prev;
  }, iterator, {});
}
/**
 * @memberof AsyncFunctions
 */
export async function* asyncMapIteratorF<T = any, U = any>(
  f: EachAsyncIteratorCalllbackType<T, U>, iterator: Iterable<T>) {
  for (const value of iterator) {
    yield f(await value, iterator);
  }
}

// async filter
/**
 * @memberof AsyncFunctions
 */
export async function asyncFilterArrayF<T = any>(
  f: EachAsyncArrayCalllbackType<T, boolean>, iterator: Array<T | Promise<T>>) {
  return asyncReduceArrayF<T[], T>((prev, cur, index) => {
    f(cur, index, iterator) && prev.push(cur);

    return prev;
  }, iterator, []);
}
/**
 * @memberof AsyncFunctions
 */
export async function asyncFilterObjectF<T = any>(
  f: EachAsyncObjectCalllbackType<T, boolean>, iterator: ObjectInterface<T | Promise<T>>) {
  return asyncReduceObjectF<ObjectInterface<T>, T>((prev, cur, key) => {
    f(cur, key, iterator) && (prev[key] = cur);

    return prev;
  }, iterator, {});
}
/**
 * @memberof AsyncFunctions
 */
export async function* asyncFilterIteratorF<T = any>(
  f: EachAsyncIteratorCalllbackType<T, boolean | Promise<boolean>>, iterator: Iterable<T>) {
  for (const value of iterator) {
    f(await value, iterator) && (yield value);
  }
}
