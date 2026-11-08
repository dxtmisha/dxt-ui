// md5:834c1037c57cf34a6ca6ca8096f5ddf0 true
import { type ElementOrString, type ElementOrWindow, EventItem, type EventListenerDetail, type EventOptions } from '@dxtmisha/functional-basic';

/** Reactive extension of EventItem managing DOM or window event listeners with reactive refs and automatic effect scope cleanup. @keywords event, listener, reactive, vue, dom */
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
    /** Initializes a new EventRef instance with reactive target/control elements, event types, listener, options, and custom detail. @keywords constructor, event-listener, reactive-target */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement> | undefined>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}