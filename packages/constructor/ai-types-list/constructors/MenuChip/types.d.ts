// md5:7dc06614cb973b3cb8db678d7094a4bd true
import { ConstrClass } from '@dxtmisha/functional';
export type MenuChipComponents = MenuComponentInclude & ChipComponentInclude;
export type MenuChipEmits = FieldBasicEmits;
export interface MenuChipExpose extends FieldBasicExpose, MenuExposeInclude {
}
export interface MenuChipSlots extends MenuSlotInclude {
    default?(props: any): any;
}
export type MenuChipClasses = {
    main: ConstrClass;
    label: string;
    separator: string;
    selected: string;
};