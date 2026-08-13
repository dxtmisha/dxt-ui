// md5:80d4fbab4e298e65fe9d01478eaeb3ff true
import { ConstrClass } from '@dxtmisha/functional';

export type ChipComponents = ButtonComponents;

export type ChipEmits = ButtonEmits;

export interface ChipExpose extends ButtonExpose {
}

export interface ChipSlots extends ButtonSlots {
}

/** Chip CSS classes mapping @keywords chip, classes, styles */
export type ChipClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};