export type Func<A = any, B = any> = (a: A) => B;

export type CallbackType<T = any> = (...args: any[]) => T;
export interface EventParamterType {
  [name: string]: CallbackType | CallbackType[];
}
export type EachArrayCalllbackType<T, U = any> =
   (value?: T, key?: number, iterator?: T[]) => U;
export type EachObjectCalllbackType<T, U = any> =
   (value?: T, key?: string, iterator?: ObjectInterface<T>) => U;
export type EachIteratorCalllbackType<T, U = any> = (value?: T, iterator?: Iterable<T>) => U;

export type EachAsyncArrayCalllbackType<T, U = any> =
   (value?: T, key?: number, iterator?: Array<T | Promise<T>>) => U;
export type EachAsyncObjectCalllbackType<T, U = any> =
   (value?: T, key?: string, iterator?: ObjectInterface<T | Promise<T>>) => U;
export type EachAsyncIteratorCalllbackType<T, U = any> = (value?: T, iterator?: Iterable<T | Promise<T>>) => U;

export type ReduceArrayCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: number, arr?: U[]) => T;
export type ReduceObjectCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: string, arr?: ObjectInterface<U>) => T;
export type ReduceIteratorCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, iterator?: Iterable<U>) => T;

export type ReduceArrayAsyncCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: number, arr?: Array<U | Promise<U>>) => T | Promise<T>;
export type ReduceObjectAsyncCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: string, arr?: ObjectInterface<U| Promise<U>>) => T | Promise<T>;
export type ReduceIteratorAsyncCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, iterator?: Iterable<U | Promise<U>>) => T | Promise<T>;

export interface EachInterface<T, U> {
  each: (callbackFn: EachArrayCalllbackType<T, U> | EachObjectCalllbackType<T, U>) => this;
}
export interface ForEachInterface<T, U> {
  forEach: (callbackFn: EachArrayCalllbackType<T, U> | EachObjectCalllbackType<T, U>) => this;
}
export interface ObjectInterface<T> {
  [key: string]: T;
}

export interface EventInterface {
  on(name: string | EventParamterType, callback?: CallbackType | CallbackType[]): this;
  once(name: string | EventParamterType, callback?: CallbackType | CallbackType[]): this;
  off(name?: string, callback?: CallbackType): this;
}

// Curry 4
export type Curry4CallbackType<A, B, C, D, E> = (...args: [A, B, C, D]) => E;
export interface Curry4<A, B, C, D, E> extends Curry4CallbackType<A, B, C, D, E> {
  (...args: [A, B, C]): Curry1<D, E>;
  (...args: [A, B]): Curry2<C, D, E>;
  (...args: [A]): Curry3<B, C, D, E>;
}
// Curry 3
export type Curry3CallbackType<A, B, C, D> = (a?: A, b?: B, c?: C) => D;
export interface Curry3<A, B, C, D> extends Curry3CallbackType<A, B, C, D> {
  (value: A, value2: B): Curry1<C, D>;
  (value: A): Curry2<B, C, D>;
}
// Curry 2
export type Curry2CallbackType<A, B, C> = (a?: A, b?: B) => C;
export interface Curry2<A = any, B = any, C = any> extends Curry2CallbackType<A, B, C> {
  (value: A): Curry1<B, C>;
}
// Curry 1
export type Curry1<A, B> = (value: A) => B;
export type Curry1CallbackType<A, B> = (a?: A) => B;
