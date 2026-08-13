// md5:4e2107f7d723ddfae03cd20a74316f58 true
import { ElementOrString, ElementOrWindow, EventItem, EventListenerDetail, EventOptions } from '@dxtmisha/functional-basic';

/**
 * Class for working with events using reactive references.
 * @keywords event_ref event_wrapper reactive_event dom_event
 */
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
    /**
     * Creates an instance of EventRef.
     * @keywords constructor event_ref_init
     */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}