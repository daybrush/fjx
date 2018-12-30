import { ObjectInterface } from "@daybrush/utils";

/**
* @typedef
*/
export type Func<A = any, B = any> = (a: A) => B;
/**
* @typedef
*/
export type CallbackType<T = any> = (...args: any[]) => T;
/**
* @typedef
*/
export interface EventParamterInterface {
  [name: string]: CallbackType | CallbackType[];
}
/**
* @typedef
*/
export type EachArrayCalllbackType<T, U = any> =
   (value?: T, key?: number, iterator?: T[]) => U;
/**
* @typedef
*/
export type EachObjectCalllbackType<T, U = any> =
   (value?: T, key?: string, iterator?: ObjectInterface<T>) => U;

/**
* @typedef
*/
export type EachIteratorCalllbackType<T, U = any> = (value?: T, iterator?: Iterable<T>) => U;
/**
* @typedef
*/
export type EachAsyncArrayCalllbackType<T, U = any> =
   (value?: T, key?: number, iterator?: Array<T | Promise<T>>) => U;
/**
* @typedef
*/
export type EachAsyncObjectCalllbackType<T, U = any> =
   (value?: T, key?: string, iterator?: ObjectInterface<T | Promise<T>>) => U;
/**
* @typedef
*/
export type EachAsyncIteratorCalllbackType<T, U = any> = (value?: T, iterator?: Iterable<T | Promise<T>>) => U;

/**
* @typedef
*/
export type ReduceArrayCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: number, arr?: U[]) => T;
/**
* @typedef
*/
export type ReduceObjectCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: string, arr?: ObjectInterface<U>) => T;
/**
* @typedef
*/
export type ReduceIteratorCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, iterator?: Iterable<U>) => T;
/**
* @typedef
*/
export type ReduceArrayAsyncCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: number, arr?: Array<U | Promise<U>>) => T | Promise<T>;
/**
* @typedef
*/
export type ReduceObjectAsyncCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: string, arr?: ObjectInterface<U | Promise<U>>) => T | Promise<T>;
/**
* @typedef
*/
export type ReduceIteratorAsyncCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, iterator?: Iterable<U | Promise<U>>) => T | Promise<T>;

/**
* @typedef
*/
export interface EachInterface<T> {
  each: (callbackFn: EachArrayCalllbackType<T, void> | EachObjectCalllbackType<T, void>) => this;
}
/**
* @typedef
*/
export interface ForEachInterface<T> {
  forEach: (callbackFn: EachArrayCalllbackType<T, void> | EachObjectCalllbackType<T, void>) => this;
}

/**
* @typedef
*/
export interface EventInterface {
  on(name: string | EventParamterInterface, callback?: CallbackType | CallbackType[]): this;
  once(name: string | EventParamterInterface, callback?: CallbackType | CallbackType[]): this;
  off(name?: string, callback?: CallbackType): this;
}

// Curry 4
/**
* @typedef
*/
export type Curry4CallbackType<A, B, C, D, E> = (...args: [A, B, C, D]) => E;
/**
* @typedef
*/
export interface Curry4<A, B, C, D, E> extends Curry4CallbackType<A, B, C, D, E> {
  (...args: [A, B, C]): Curry1<D, E>;
  (...args: [A, B]): Curry2<C, D, E>;
  (...args: [A]): Curry3<B, C, D, E>;
}
// Curry 3
/**
* @typedef
*/
export type Curry3CallbackType<A, B, C, D> = (a?: A, b?: B, c?: C) => D;
/**
* @typedef
* @extends Curry3CallbackType
*/
export interface Curry3<A, B, C, D> extends Curry3CallbackType<A, B, C, D> {
  (value: A, value2: B): Curry1<C, D>;
  (value: A): Curry2<B, C, D>;
}
// Curry 2
export type Curry2CallbackType<A, B, C> = (a?: A, b?: B) => C;
/**
* @typedef
*/
export interface Curry2<A = any, B = any, C = any> extends Curry2CallbackType<A, B, C> {
  (value: A): Curry1<B, C>;
}
// Curry 1
/**
* @typedef
*/
export type Curry1<A, B> = (value: A) => B;
/**
* @typedef
*/
export type Curry1CallbackType<A, B> = (a?: A) => B;
