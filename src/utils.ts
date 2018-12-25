import { IS_PROMISE, IS_SYMBOL } from "./consts";

export function isPromise<T = any>(value: any): value is Promise<T> {
  return IS_PROMISE && (value instanceof Promise);
}
export function isIterable<T = any>(iter: any): iter is Iterable<T> {
  return IS_SYMBOL && !!(iter && iter[Symbol.iterator]);
}
