// md5:f74cb13661bc4f5fe2b74db5c18d5959 true
import type { ConstrClass } from '@dxtmisha/functional';

export type MenuButtonComponents = MenuComponentInclude & ButtonComponentInclude;

export type MenuButtonEmits = FieldBasicEmits;

export interface MenuButtonExpose extends FieldBasicExpose, MenuExposeInclude {}

export interface MenuButtonSlots extends MenuSlotInclude {
  default?(props: any): any;
}

export type MenuButtonClasses = {
  main: ConstrClass;
  label: string;
  separator: string;
  selected: string;
};