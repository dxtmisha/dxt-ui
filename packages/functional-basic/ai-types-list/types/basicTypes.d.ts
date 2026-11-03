// md5:e844dc52bc6faa79685cddf400f9734f true
export type Undefined = undefined | null;
/** Union representing falsy, nullish, or string-serialized empty values @keywords empty, nullish, falsy */
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]';
export type NumberOrString = number | string;
export type NumberOrStringOrBoolean = number | string | boolean;
export type NumberOrStringOrDate = NumberOrString | Date;
export type NormalOrArray<T = NumberOrString> = T | T[];
export type NormalOrPromise<T> = T | Promise<T>;
export type ObjectItem<T = any> = Record<string, T>;
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>;
/** Unwraps an array type to its element type @keywords array, unwrap, extract */
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
export type ElementOrWindow = HTMLElement | SVGElement | Element | Window;
/** Resolves ElementOrWindow types, substituting Window with HTMLElement @keywords element, dom, window */
export type ElementResolved<E extends ElementOrWindow = HTMLElement> = E extends Window ? HTMLElement : Exclude<E, Window>;
export type ElementOrString<E extends ElementOrWindow> = E | string;
export type EventOptions = AddEventListenerOptions | boolean | undefined;
/** Event listener accepting an event and an optional custom detail payload @keywords event, listener, detail */
export type EventListenerDetail<O extends Event, D extends Record<string, any>> = (event: O, detail?: D) => void;
/** Tracks an active event listener or observer registration @keywords event, listener, observer, activity */
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