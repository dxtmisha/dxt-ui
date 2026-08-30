// md5:c64742fba2100cf0b9e5f8d4b2345003 true
import type { ConstrClass } from '@dxtmisha/functional';

export type DraggableWrapperComponents = {};

export type DraggableWrapperEmits = {
    drop: [parameters: DraggableWrapperEventParameters];
    position: [parameters: DraggableWrapperEventParameters];
};

export interface DraggableWrapperExpose {
    /** Calculates reordered array after a drop event @keywords reorder, array, drop, sort */
    toNewPosition<T extends { value?: any }>(values: T[], parameters: DraggableWrapperEventParameters): T[];
}

export interface DraggableWrapperSlots {
    default?(props: DraggableWrapperControl): any;
}

export type DraggableWrapperClasses = {
    main: ConstrClass;
    square: string;
};