// md5:08b50b53e64221fbce4f3d886350b62e true
export type TextDescriptionPropsBasic = DescriptionProps & {
    /** HTML tag for wrapping the description @keywords tag wrapper html element */
    tag?: string;
};
export type TextDescriptionProps = TextDescriptionPropsBasic & {};
/** Default values for text description properties @keywords defaults configuration */
export declare const defaultsTextDescription: {
    tag: string;
};