// md5:71e2178694d78128f7b32aa3f7e45400 true
export type Undefined = undefined | null;

/** Union type representing empty and falsy primitive values or their string representations @keywords empty, falsy */
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]';

export type NumberOrString = number | string;
export type NumberOrStringOrBoolean = number | string | boolean;
export type NumberOrStringOrDate = NumberOrString | Date;
export type NormalOrArray<T = NumberOrString> = T | T[];
export type NormalOrPromise<T> = T | Promise<T>;
export type ObjectItem<T = any> = Record<string, T>;
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>;

/** Extracts item type from an array or returns the type itself @keywords array, infer, extract */
export type ArrayToItem<T> = T extends any[] ? T[number] : T;

export type FunctionReturn<R = any> = () => R;
export type FunctionVoid = () => void;
export type FunctionArgs<T, R> = (...args: T[]) => R;
export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R;
export type ItemList<T = any> = Record<string, T>;

export type Item<V> = {
  index: string;
  value: V;
};

export type ItemValue<V> = {
  label: string;
  value: V;
};

export type ItemName<V> = {
  name: string | number;
  value: V;
};

export type ElementOrWindow = HTMLElement | Window;
export type ElementOrString<E extends ElementOrWindow> = E | string;
export type EventOptions = AddEventListenerOptions | boolean | undefined;

/** Event listener with optional custom detail payload @keywords event, listener, detail */
export type EventListenerDetail<O extends Event, D extends Record<string, any>> = (event: O, detail?: D) => void;

/** Record tracking an active event listener or observer registration @keywords event, observer, listener */
export type EventActivityItem<E extends ElementOrWindow> = {
  element: E | undefined;
  type: string;
  listener?: (event: any | Event) => void;
  observer?: ResizeObserver;
};

export type ImageCoordinator = {
  x: number;
  y: number;
};