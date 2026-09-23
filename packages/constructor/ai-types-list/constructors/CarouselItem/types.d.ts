// md5:4c3dc19d71596b46fb58e96fe8848975 true
import type { ConstrClass } from '@dxtmisha/functional';

export type CarouselItemComponents = ImageComponentInclude;
export type CarouselItemEmits = ImageEmitsInclude & EventClickEmits;

export interface CarouselItemExpose extends EventClickExpose {
    /** Checks if the slide is currently selected. @keywords isSelected, active, slide */
    isSelected(): boolean;
    /** Returns the current slide data. @keywords getSlide, slide, item */
    getSlide(): any;
}

export interface CarouselItemSlots {
    /** Default slot for slide content. @keywords default, slot, content */
    default?(props: CarouselItemSlotDefault): any;
}

export type CarouselItemClasses = {
    main: ConstrClass;
    body: string;
    image: string;
};