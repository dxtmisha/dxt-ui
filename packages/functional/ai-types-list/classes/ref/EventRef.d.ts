// md5:65bf31563bce9f2dcf50cd9f03758c0a true
import { type ElementOrString, type ElementOrWindow, EventItem, type EventListenerDetail, type EventOptions } from '@dxtmisha/functional-basic';

/** Reactive DOM and window event listener that watches target and control refs and cleans up with Vue effect scope. @keywords reactive, event listener, dom, vue, effect scope, event ref */
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
    /** Initializes the reactive event listener with element references, event types, handler callback, and options. @keywords constructor, event listener, reactive ref, dom */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}