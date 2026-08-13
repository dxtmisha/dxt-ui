// md5:a227204d943189371780e9afd8c28b50 true
import { ConstrClass } from '@dxtmisha/functional';
export type BlockComponents = HeaderComponentInclude;
export type BlockEmits = {};
export interface BlockExpose {
}
export interface BlockSlots extends HeaderSlotsInclude, DescriptionSlots {
    /** @keywords headline slot */
    headline?(props: any): any;
    /** @keywords default slot */
    default?(props: any): any;
}
export type BlockClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    description: string;
    body: string;
};