import { IS_PROMISE, IS_SYMBOL } from "./consts";
import {
  Curry1CallbackType, Curry1,
  Curry2CallbackType, Curry2,
  Curry3CallbackType, Curry3,
  Curry4CallbackType, Curry4, CallbackType, Func
} from "./types";
import { reduceArrayF } from "./function";
import { isFunction } from "@daybrush/utils";

/**
 * @namespace utils
 */

/**
 * @memberof utils
 */
export function isPromise<T = any>(value: any): value is Promise<T> {
  return IS_PROMISE && (value instanceof Promise);
}
/**
 * @memberof utils
 */
export function isIterable<T = any>(iter: any): iter is Iterable<T> | AsyncIterable<T> {
  return IS_SYMBOL && !!(iter && (iter[Symbol.iterator] || iter[Symbol.asyncIterator]));
}
/**
 * @memberof utils
 */
export function isIterator<T = any>(iter: any): iter is Iterator<T> {
  return iter && isFunction(iter.next);
}

export function curry<A>(f: () => A): () => A;
export function curry<A, B>(f: Curry1CallbackType<A, B>): Curry1<A, B>;
export function curry<A, B, C>(f: Curry2CallbackType<A, B, C>): Curry2<A, B, C>;
export function curry<A, B, C, D>(f: Curry3CallbackType<A, B, C, D>): Curry3<A, B, C, D>;
export function curry<A, B, C, D, E>(f: Curry4CallbackType<A, B, C, D, E>): Curry4<A, B, C, D, E>;
/**
 * @memberof utils
 */
export function curry(f: CallbackType): any {
  const length = f.length;

  if (length === 0) {
    return f;
  }
  function nest(i: number, args: any[]) {
    return (...args2: any[]) => {
      const length2 = i - args2.length;

      return length2 <= 0 ? f(...args, ...args2) : nest(length2, args.concat(args2));
    };
  }

  return nest(length, []);
}

export function _pipe(args: Func[]): Func {
  return (a: any) => {
    return reduceArrayF((prev, cur) => cur(prev), a, args);
  };
}

export function pipe<A, B, C, D, E>(a: Func<A, B>, b: Func<B, C>, c: Func<C, D>, d: Func<D, E>): Func<A, E>;
export function pipe<A, B, C, D>(a: Func<A, B>, b: Func<B, C>, c: Func<C, D>): Func<A, D>;
export function pipe<A, B, C>(a: Func<A, B>, b: Func<B, C>): Func<A, C>;
/**
 * @memberof utils
 */
export function pipe(...args: Func[]): Func {
  return _pipe(args);
}

export function compose<A, B, C, D, E>(a: Func<D, E>, b: Func<C, D>, c: Func<B, C>, d: Func<A, B>): Func<A, E>;
export function compose<A, B, C, D>(a: Func<C, D>, b: Func<B, C>, c: Func<A, B>): Func<A, D>;
export function compose<A, B, C>(a: Func<B, C>, b: Func<A, B>): Func<A, C>;
/**
 * @memberof utils
 */
export function compose(...args: Func[]): Func {
  return _pipe(args.reverse());
}
