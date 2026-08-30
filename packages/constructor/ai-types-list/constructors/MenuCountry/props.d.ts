// md5:b2b3d62e0cb36c061c415ce5f8753d2b true
import type { ListSelectedList } from '@dxtmisha/functional';
type MenuCountryPropsToken = {};
export type MenuCountryPropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuPropsInclude<Menu> & ModelPropsSelected<ListSelectedList> & {
    /** List of selected items. @keywords selected, list */
    selected?: ListSelectedList;
    /** Filter countries by ISO 3166-1 alpha-2 codes. @keywords country filter, iso codes */
    list?: string[];
    /** Whether to display the international phone calling code. @keywords phone code, dial code */
    showPhoneCode?: boolean;
    /** Whether selection state is determined by value. @keywords selection, value matching */
    isSelectedByValue?: boolean;
    /** Language code for localized country names. @keywords localization, language */
    language?: string;
};
/** Menu country component properties. @keywords menu country, props */
export type MenuCountryProps = MenuCountryPropsBasic & MenuCountryPropsToken;
/** Default properties for the country menu component. @keywords defaults, menu country */
export declare const defaultsMenuCountry: {
    isSelectedByValue: boolean;
};