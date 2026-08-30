// md5:e45cc3495268f60522d5c5b93568d750 true
import type { ConstrClass } from '@dxtmisha/functional';

export type BlockComponents = HeaderComponentInclude;
export type BlockEmits = {};
export interface BlockExpose {}
export interface BlockSlots extends HeaderSlotsInclude, DescriptionSlots {
    /** Headline slot. @keywords headline, title */
    headline?(props: any): any;
    /** Default content slot. @keywords default, body */
    default?(props: any): any;
}
export type BlockClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    description: string;
    body: string;
};