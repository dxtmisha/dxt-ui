// md5:0093e2e1f5b23fcb35df127ecb42bdc9 true
import type { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';

export type MenuCountryComponents = MenuComponentInclude;

export type MenuCountryEmits = ModelEmitsSelected & EventClickEmits & {
  /** Event triggered when the selected value updates. */
  updateValue: [value?: NumberOrStringOrBoolean];
};

export interface MenuCountryExpose extends MenuExposeInclude {}

export interface MenuCountrySlots extends MenuSlotInclude {
  /** Control slot for menu trigger and window management. */
  control?(props: MenuControlItem): any;
}

export type MenuCountryClasses = {
  main: ConstrClass;
};