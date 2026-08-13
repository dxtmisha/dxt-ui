// md5:20790f0a8b3207b3b68bba49b2042543 true
import { ListSelectedList } from '@dxtmisha/functional';
type MenuCountryPropsToken = {};
export type MenuCountryPropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuPropsInclude<Menu> & ModelPropsSelected<ListSelectedList> & {
    selected?: ListSelectedList;
    list?: string[];
    showPhoneCode?: boolean;
    isSelectedByValue?: boolean;
    language?: string;
};
/** Type describing incoming properties. @keywords menu country props incoming */
export type MenuCountryProps = MenuCountryPropsBasic & MenuCountryPropsToken;
/** Default value for property. @keywords defaults menu country property */
export declare const defaultsMenuCountry: {
    isSelectedByValue: boolean;
};
export {};