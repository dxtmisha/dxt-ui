// md5:7eb328ca8ff2701bae66702957745234 true
import { ConstrClass } from '@dxtmisha/functional';
export type MenuButtonComponents = MenuComponentInclude & ButtonComponentInclude;
export type MenuButtonEmits = FieldBasicEmits;
export interface MenuButtonExpose extends FieldBasicExpose, MenuExposeInclude {
}
export interface MenuButtonSlots extends MenuSlotInclude {
    default?(props: any): any;
}
export type MenuButtonClasses = {
    main: ConstrClass;
    label: string;
    separator: string;
    selected: string;
};