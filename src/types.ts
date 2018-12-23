export type CallbackType = (...args: any[]) => any;
export interface EventParamterType {
  [name: string]: CallbackType | CallbackType[];
}
export type EachCalllbackType<T, U = number, R = any> =
   (value?: T, key?: U, iterator?: T[] | {[key: string]: T}) => R;
export type IteratorCalllbackType<T, U = any> = (value?: T, iterator?: Iterable<T>) => U;

export type ReduceArrayCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: number, arr?: U[]) => T;
export type ReduceObjectCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, currentIndex?: string, arr?: ObjectInterface<U>) => T;
export type ReduceIteratorCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, iterator?: Iterable<U>) => T;
export type ReduceIteratorAsyncCallbackType<T, U = T> =
  (previousValue?: T, currentValue?: U, iterator?: Iterable<U | Promise<U>>) => T | Promise<T>;

export interface EachInterface<T, U> {
  each: (callbackFn: EachCalllbackType<T, U>) => this;
}
export interface ObjectInterface<T> {
  [key: string]: T;
}

export interface EventInterface {
  on(name: string, callback: CallbackType | CallbackType[]): this;
  on(name: EventParamterType): this;
  once(name: string, callback: CallbackType | CallbackType[]): this;
  once(name: EventParamterType): this;
  off(name?: string, callback?: CallbackType): this;
}
