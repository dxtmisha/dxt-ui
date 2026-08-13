// md5:ed56031e29e074df19ac1198ffec89ad true
export type PlaceholderPropsToken = {};
export type PlaceholderPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = ImagePropsInclude<Image> & LabelProps & DescriptionProps & ActionsPropsInclude<Actions>;
/** Type describing incoming properties. @keywords placeholder props properties */
export type PlaceholderProps = PlaceholderPropsBasic & PlaceholderPropsToken;
/** Default value for property. @keywords defaults placeholder default */
export declare const defaultsPlaceholder: {};
export {};