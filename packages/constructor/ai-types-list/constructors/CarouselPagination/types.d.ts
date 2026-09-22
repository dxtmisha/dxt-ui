// md5:3fc445381904a506114c90616274b271 true
import type { ConstrClass } from '@dxtmisha/functional';

export type CarouselPaginationComponents = {};

/** Carousel pagination event definitions. @keywords events, emits */
export type CarouselPaginationEmits = ModelEmitsSelected<number> & {
    /** Slide change event. @keywords change, slide */
    change: [selected: number];
    /** Indicator click event. @keywords click, indicator */
    click: [event: MouseEvent, selected: number];
    /** Lightweight indicator click event. @keywords clickLite, lite */
    clickLite: [selected: number];
};

/** Exposed instance methods for carousel pagination. @keywords expose, methods */
export interface CarouselPaginationExpose {
    /** Returns the current active slide index. @keywords getSelected, current, active */
    getSelected(): number;
    /** Returns the total number of items. @keywords getCount, total, length */
    getCount(): number;
    /** Sets the active slide index. @keywords set, select */
    set(selected: number): void;
    /** Advances to the next slide. @keywords next, forward */
    next(): void;
    /** Moves to the previous slide. @keywords previous, back */
    previous(): void;
}

/** Slot definitions for carousel pagination. @keywords slots, template */
export interface CarouselPaginationSlots {
    /** Custom rendering for an individual pagination item. @keywords slot, item, bullet */
    item?(props: {
        binds: CarouselPaginationItemBinds;
        item: CarouselPaginationItem;
        index: number;
    }): any;
    /** Custom rendering for fraction display. @keywords slot, fraction */
    fraction?(props: {
        binds: CarouselPaginationFractionBinds;
        active: number;
        total: number;
        text: string;
    }): any;
    /** Custom rendering for progress bar. @keywords slot, progress */
    progress?(props: {
        binds: CarouselPaginationProgressBinds;
        active: number;
        total: number;
        percent: number;
    }): any;
}

export type CarouselPaginationClasses = {
    main: ConstrClass;
    item: string;
    fraction: string;
    progress: string;
    progressBar: string;
};