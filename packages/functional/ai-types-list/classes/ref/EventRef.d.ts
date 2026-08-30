// md5:2efb7bbf61c393d1ee4f8f5689979d05 true
import { type ElementOrString, type ElementOrWindow, EventItem, type EventListenerDetail, type EventOptions } from '@dxtmisha/functional-basic';

/** Class for managing DOM event listeners with reactive reference targets. @keywords event, listener, ref, dom, reactive */
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
    /** Creates an instance of EventRef. @keywords constructor, event, ref */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}