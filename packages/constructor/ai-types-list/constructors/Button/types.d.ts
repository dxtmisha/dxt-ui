// md5:c66a7c5bc685245511b9315fea64b16b true
import { ConstrClass } from '@dxtmisha/functional';

export type ButtonComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;

export type ButtonEmits = EventClickEmits;

export interface ButtonExpose extends EventClickExpose {
}

export interface ButtonSlots extends LabelSlots {
}

export type ButtonClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};