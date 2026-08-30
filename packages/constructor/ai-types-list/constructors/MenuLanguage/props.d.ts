// md5:52f4cd4c053295032b44a05e07da7caf true
type MenuLanguagePropsToken = {};
export type MenuLanguagePropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuCountryPropsBasic<Menu>;
/** Language menu component properties. @keywords menu, language, props */
export type MenuLanguageProps = MenuLanguagePropsBasic & MenuLanguagePropsToken;
/** Default properties for the language menu component. @keywords menu, language, defaults */
export declare const defaultsMenuLanguage: {
    isSelectedByValue: boolean;
};