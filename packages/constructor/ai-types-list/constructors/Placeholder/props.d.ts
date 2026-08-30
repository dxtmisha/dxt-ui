// md5:978b01324a9d6e3441df26ce03f4e3d6 true
type PlaceholderPropsToken = {};
export type PlaceholderPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = ImagePropsInclude<Image> & LabelProps & DescriptionProps & ActionsPropsInclude<Actions>;
/** Placeholder component properties. @keywords placeholder, props */
export type PlaceholderProps = PlaceholderPropsBasic & PlaceholderPropsToken;
/** Default properties for Placeholder component. @keywords placeholder, defaults */
export declare const defaultsPlaceholder: {};