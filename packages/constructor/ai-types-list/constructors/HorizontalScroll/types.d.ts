// md5:e911b78c0cb33ff6520af5f158bbe99d true
import { ConstrClass } from '@dxtmisha/functional';

export type HorizontalScrollComponents = {};

export type HorizontalScrollEmits = {};

export interface HorizontalScrollExpose {
    /** Returns main HTML element @keywords getElement main HTMLDivElement */
    getElement(): HTMLDivElement | undefined;
    /** Scrolls area to selected element @keywords toSelected scroll */
    toSelected(): void;
}

export interface HorizontalScrollSlots {
    default?(props: any): any;
}

export type HorizontalScrollClasses = {
    main: ConstrClass;
};