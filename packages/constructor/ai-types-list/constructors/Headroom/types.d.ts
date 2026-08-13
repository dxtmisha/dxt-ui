// md5:7bef7e5f28d5a66744d5d6b68355ebf8 true
import { ConstrClass } from '@dxtmisha/functional';

/** Interface describing required components for work. @keywords headroom, components, connect */
export type HeadroomComponents = {};

/** Type describing available events. @keywords headroom, emits, events */
export type HeadroomEmits = HeadroomEmitsInclude;

/** Type describing available properties. @keywords headroom, expose, properties */
export type HeadroomExpose = HeadroomExposeInclude;

/** Type describing available slots. @keywords headroom, slots, default */
export interface HeadroomSlots {
    default?(props: any): any;
}

/** Type describing subclasses. @keywords headroom, classes, main */
export type HeadroomClasses = {
    main: ConstrClass;
};