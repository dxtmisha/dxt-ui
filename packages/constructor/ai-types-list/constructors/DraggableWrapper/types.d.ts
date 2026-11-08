// md5:fbca37118f756141e40cfd8f59653636 true
import type { ConstrClass } from '@dxtmisha/functional';

export type DraggableWrapperComponents = {};

export type DraggableWrapperEmits = {
    drop: [parameters: DraggableWrapperEventParameters];
    position: [parameters: DraggableWrapperEventParameters];
};

export interface DraggableWrapperExpose {
    /** Calculates the reordered array after a drag-and-drop operation. @keywords draggable reorder drop array position */
    toNewPosition<T extends {
        value?: any;
    }>(values: T[], parameters: DraggableWrapperEventParameters): T[];
}

export interface DraggableWrapperSlots {
    default?(props: DraggableWrapperControl): any;
}

export type DraggableWrapperClasses = {
    main: ConstrClass;
    item: string;
    square: string;
};