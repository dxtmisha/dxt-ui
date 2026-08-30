// md5:373a377843eda064eb09801b07dcf1f1 true
import type { ConstrClass } from '@dxtmisha/functional';

export type MenuChipComponents = MenuComponentInclude & ChipComponentInclude;
export type MenuChipEmits = FieldBasicEmits;
export interface MenuChipExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface MenuChipSlots extends MenuSlotInclude {
  default?(props: any): any;
}
export type MenuChipClasses = {
  main: ConstrClass;
  label: string;
  separator: string;
  selected: string;
};