// md5:8035ae310dc4fd19d99d5f79d18b340c true
import { ConstrClass } from '@dxtmisha/functional';

export type DraggableWrapperComponents = {};

export type DraggableWrapperEmits = {
    /** Drop event triggered on target drop element @keywords drop event target */
    drop: [parameters: DraggableWrapperEventParameters];
    /** Position event triggered on sorting position @keywords position event sort */
    position: [parameters: DraggableWrapperEventParameters];
};

export interface DraggableWrapperExpose {
    /** Calculates reordered array after drop @keywords reorder array drop helper */
    toNewPosition<T extends {
        value?: any;
    }>(values: T[], parameters: DraggableWrapperEventParameters): T[];
}

export interface DraggableWrapperSlots {
    /** Default slot for draggable children @keywords default slot children */
    default?(props: DraggableWrapperControl): any;
}

export type DraggableWrapperClasses = {
    main: ConstrClass;
    square: string;
};