// md5:4071481fd91e9e55f2d7992f1653f1ac true
import type { ConstrClass } from '@dxtmisha/functional';

export type NavigationRailComponents = NavigationItemComponentInclude & NavigationRailItemComponentInclude & ListMenuComponentInclude;

export type NavigationRailEmits = EventClickEmits & {
  /** Event emitted on list close. */
  close: [];
};

export interface NavigationRailExpose extends ListExpose {}

export type NavigationRailSlots = ListSlots;

export type NavigationRailClasses = {
  main: ConstrClass;
  space: string;
  line: string;
  html: string;
  management: string;
  menu: string;
};