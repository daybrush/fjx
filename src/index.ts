import {
  EachCalllbackType,
  ObjectInterface,
  ReduceIteratorCallbackType,
  IteratorCalllbackType,
  ReduceIteratorAsyncCallbackType,
} from "./types";

export const IS_SYMBOL = typeof Symbol !== "undefined";
export const IS_PROMISE = typeof Promise !== "undefined";
export function isPromise<T = any>(value: any): value is Promise<T> {
  return IS_PROMISE && (value instanceof Promise);
}
export function isIterable<T = any>(iter: any): iter is Iterable<T> {
  return IS_SYMBOL && !!(iter && iter[Symbol.iterator]);
}

export function exec<T, U = T>(v: Promise<T>, f: (pv: T) => U): Promise<U>;
export function exec<T, U = T>(v: T, f: (pv: T) => U): U;
export function exec<T, U = T>(v: Promise<T> | T, f: (pv: T) => U): Promise<U> | U;
export function exec<T, U = T>(v: T | Promise<T>, f: (pv: T) => U) {
  return isPromise(v) ? v.then(pv => f(pv)) : f(v);
}
export function reduceA<T, U = T>(
  callbackFn: ReduceIteratorAsyncCallbackType<T, U>,
  iterator: Iterable<U | Promise<U>>,
  initial?: T) {
  return reduce<T | Promise<T>, U | Promise<U>>(async (prev, cur) => {
    const prev2 = await prev;
    const cur2 = await cur;

    return callbackFn(prev2, cur2, iterator);
  }, iterator, initial) as Promise<T>;
}
export function reduce<T, U = T>(
  callbackFn: ReduceIteratorCallbackType<T, U>,
  iterator: Iterable<U>, initial?: T) {
  let cur = initial;

  for (const value of iterator) {
    cur = callbackFn(cur, value, iterator);
  }
  return cur;
}

export function eachArray<T = any>(f: EachCalllbackType<T, number, void>, iterator: T[]) {
  iterator.forEach(f);
  return iterator;
}

export function eachObject<T = any>(f: EachCalllbackType<T, string, void>, iterator: ObjectInterface<T>) {
  for (const key in iterator) {
    f(iterator[key], key, iterator);
  }
  return iterator;
}

export function eachIterator<T = any>(f: IteratorCalllbackType<T, void>, iterator: Iterable<T>) {
  for (const value of iterator) {
    exec(value, v => f(v, iterator));
  }
  return iterator;
}

export async function eachIteratorA<T = any>(f: IteratorCalllbackType<T, void>, iterator: Iterable<T>) {
  for (const value of iterator) {
    f(await value, iterator);
  }
}

export function mapArray<T = any, U = any>(f: EachCalllbackType<T, number, U>, iterator: T[]) {
  return iterator.map<U>(f);
}

export function mapObject<T = any, U = any>(f: EachCalllbackType<T, string, U>, iterator: ObjectInterface<T>) {
  const obj: ObjectInterface<U> = {};

  for (const key in iterator) {
    obj[key] = f(iterator[key], key, iterator);
  }
  return obj;
}

export function *mapIterator<T = any, U = any>(f: IteratorCalllbackType<T, U>, iterator: Iterable<T>) {
  for (const value of iterator) {
    yield exec(value, v => f(v, iterator));
  }
}

export async function *mapIteratorA<T = any, U = any>(f: IteratorCalllbackType<T, U>, iterator: Iterable<T>) {
  for (const value of iterator) {
    yield f(await value, iterator);
  }
}

export function filterArray<T = any>(f: EachCalllbackType<T, number, boolean>, iterator: T[]) {
  return iterator.map(f);
}

export function filterObject<T = any>(f: EachCalllbackType<T, string, boolean>, iterator: ObjectInterface<T>) {
  const obj: Partial<ObjectInterface<T>> = {};

  for (const key in iterator) {
    f(iterator[key], key, iterator) && (obj[key] = iterator[key]);
  }
  return obj;
}

export async function *filterIterator<T = any>(
  f: IteratorCalllbackType<T, boolean>, iterator: Iterable<T>) {
  for (const value of iterator) {
    f(value, iterator) && (yield value);
  }
}

export async function *filterIteratorA<T = any>(
  f: IteratorCalllbackType<T, boolean | Promise<boolean>>, iterator: Iterable<T>) {
  for (const value of iterator) {
    f(await value, iterator) && (yield value);
  }
}

export * from "./types";
