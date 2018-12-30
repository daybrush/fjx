import {
  ReduceIteratorCallbackType,
  ReduceArrayCallbackType,
  ReduceObjectCallbackType,
  EachArrayCalllbackType,
  EachObjectCalllbackType,
  EachIteratorCalllbackType,
} from "./types";
import { ObjectInterface } from "@daybrush/utils";

// reduce
/**
 * @namespace Functions
 */
/**
 * @memberof Functions
 */
export function reduceArrayF<T, U = T>(
  callbackFn: ReduceArrayCallbackType<T, U>,
  initial: T,
  iterator: U[]): T {
  return iterator.reduce(callbackFn, initial);
}
/**
 * @memberof Functions
 */
export function reduceObjectF<T, U = T>(
  callbackFn: ReduceObjectCallbackType<T, U>,
  initial: T,
  iterator: ObjectInterface<U>): T {
  let cur = initial;

  for (const key in iterator) {
    cur = callbackFn(cur, iterator[key], key, iterator);
  }
  return cur;
}
/**
 * @memberof Functions
 */
export function reduceIteratorF<T, U = T>(
  callbackFn: ReduceIteratorCallbackType<T, U>,
  initial: T,
  iterator: Iterable<U>): T {
  let cur = initial;

  for (const value of iterator) {
    cur = callbackFn(cur, value, iterator);
  }
  return cur;
}

// each
/**
 * @memberof Functions
 * @returns {} The calling array itself
 */
export function eachArrayF<T = any>(f: EachArrayCalllbackType<T, void>, iterator: T[]): T[] {
  iterator.forEach(f);
  return iterator;
}
/**
 * @memberof Functions
 * @returns {} The calling object itself
 */
export function eachObjectF<T = any>(f: EachObjectCalllbackType<T, void>, iterator: ObjectInterface<T>):
  ObjectInterface<T> {
  for (const key in iterator) {
    f(iterator[key], key, iterator);
  }
  return iterator;
}
/**
 * @memberof Functions
* @returns {} The calling iterator itself
 */
export function eachIteratorF<T = any>(f: EachIteratorCalllbackType<T, void>, iterator: Iterable<T>): Iterable<T> {
  for (const value of iterator) {
    f(value, iterator);
  }
  return iterator;
}

// map
/**
 * @memberof FunctionS
 */
export function mapArrayF<T = any, U = any>(f: EachArrayCalllbackType<T, U>, iterator: T[]): U[] {
  return iterator.map<U>(f);
}
/**
 * @memberof Functions
 */
export function mapObjectF<T = any, U = any>(f: EachObjectCalllbackType<T, U>, iterator: ObjectInterface<T>):
  ObjectInterface<U> {
  const obj: ObjectInterface<U> = {};

  for (const key in iterator) {
    obj[key] = f(iterator[key], key, iterator);
  }
  return obj;
}
/**
 * @memberof Functions
 */
export function* mapIteratorF<T = any, U = any>(f: EachIteratorCalllbackType<T, U>, iterator: Iterable<T>) {
  for (const value of iterator) {
    yield f(value, iterator);
  }
}

// filter
/**
 * @memberof Functions
 */
export function filterArrayF<T = any>(f: EachArrayCalllbackType<T, boolean>, iterator: T[]): T[] {
  return iterator.filter(f);
}
/**
 * @memberof Functions
 */
export function filterObjectF<T = any>(f: EachObjectCalllbackType<T, boolean>, iterator: ObjectInterface<T>):
  ObjectInterface<T> {
  const obj: Partial<ObjectInterface<T>> = {};

  for (const key in iterator) {
    f(iterator[key], key, iterator) && (obj[key] = iterator[key]);
  }
  return obj;
}
/**
 * @memberof Functions
 */
export function* filterIteratorF<T = any>(f: EachIteratorCalllbackType<T, boolean>, iterator: Iterable<T>):
  IterableIterator<T> {
  for (const value of iterator) {
    f(value, iterator) && (yield value);
  }
}
/**
 * @memberof Functions
 */
export function headArray<T>(iterator: T[]): T {
  return iterator[0];
}
/**
 * @memberof Functions
 */
export function tailArray<T>(iterator: T[]): T {
  return iterator[iterator.length - 1];
}
/**
 * @memberof Functions
 */
export function head<T>(iterator: Iterable<T> | AsyncIterable<T>): T {
  for (const value of iterator) {
    return value;
  }
}
/**
 * @memberof Functions
 */
export function tail<T>(iterator: Iterable<T>): T {
  return reduceIteratorF<T>(prev => prev, void 0, iterator);
}
