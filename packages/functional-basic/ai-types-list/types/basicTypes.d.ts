// md5:f714e1c5517657f238dfc73251f91f0a true
export type Undefined = undefined | null;
/** Union of empty or falsy values and their string equivalents @keywords empty, falsy, nullish, blank */
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]';
export type NumberOrString = number | string;
export type NumberOrStringOrBoolean = number | string | boolean;
export type NumberOrStringOrDate = NumberOrString | Date;
export type NormalOrArray<T = NumberOrString> = T | T[];
export type NormalOrPromise<T> = T | Promise<T>;
export type ObjectItem<T = any> = Record<string, T>;
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>;
/** Extracts the element type from an array type @keywords array, unwrap, element, infer */
export type ArrayToItem<T> = T extends any[] ? T[number] : T;
export type FunctionOr<T = any> = T | FunctionReturn<T>;
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
/** Event listener callback with optional custom detail payload @keywords event, listener, detail, callback */
export type EventListenerDetail<O extends Event, D extends Record<string, any>> = (event: O, detail?: D) => void;
/** Active event listener or observer tracking entry @keywords event, listener, observer, activity */
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