// md5:39f950279e55aa82367ae4c1d241bd80 true
import { ConstrClass } from '@dxtmisha/functional';

export type SectionComponents = BlockComponents;

export type SectionEmits = BlockEmits;

export interface SectionExpose extends BlockExpose {
}

export interface SectionSlots extends BlockSlots {
}

/** Section subclasses mapping @keywords classes, styling, section */
export type SectionClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    description: string;
    body: string;
};