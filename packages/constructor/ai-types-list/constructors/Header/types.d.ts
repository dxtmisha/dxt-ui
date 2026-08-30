// md5:ce41915f795eae3fa5bdd8b3035536d4 true
import type { ConstrClass } from '@dxtmisha/functional';

export type HeaderComponents = IconComponentInclude;
export type HeaderEmits = {};
export interface HeaderExpose {}
export interface HeaderSlots extends LabelSlots, CaptionSlots {
    /** Trailing content slot @keywords slot, trailing */
    trailing?(props: any): any;
}
export type HeaderClasses = {
    main: ConstrClass;
    label: string;
    caption: string;
    icon: string;
    space: string;
};