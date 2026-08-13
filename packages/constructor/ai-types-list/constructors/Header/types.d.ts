// md5:317a18a73daa1acbf5c4cc4366a13cce true
import { ConstrClass } from '@dxtmisha/functional';

export type HeaderComponents = IconComponentInclude;

export type HeaderEmits = {};

export interface HeaderExpose {
}

export interface HeaderSlots extends LabelSlots, CaptionSlots {
    /** Slot for trailing content @keywords trailing, slot */
    trailing?(props: any): any;
}

export type HeaderClasses = {
    main: ConstrClass;
    label: string;
    caption: string;
    icon: string;
    space: string;
};