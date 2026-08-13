// md5:0d58bcf8e6b507a7bbf41442f85b1fc2 true
import { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';
export type MenuCountryComponents = MenuComponentInclude;
export type MenuCountryEmits = ModelEmitsSelected & EventClickEmits & {
    /** Event for updating the value @keywords updateValue value */
    updateValue: [value?: NumberOrStringOrBoolean];
};
export interface MenuCountryExpose extends MenuExposeInclude {
}
export interface MenuCountrySlots extends MenuSlotInclude {
    /** Control slot for window management @keywords control window slot */
    control?(props: MenuControlItem): any;
}
export type MenuCountryClasses = {
    main: ConstrClass;
};