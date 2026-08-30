// md5:fe30ba1501f5b8f11285cf3457d075af true
type TextDescriptionPropsToken = {};
export type TextDescriptionPropsBasic = DescriptionProps & {
    /** HTML tag for wrapping the description @keywords tag, wrapper */
    tag?: string;
};
/** Incoming properties for the text description component. @keywords text, description, props */
export type TextDescriptionProps = TextDescriptionPropsBasic & TextDescriptionPropsToken;
/** Default properties for text description. @keywords defaults, text, description */
export declare const defaultsTextDescription: {
    tag: string;
};