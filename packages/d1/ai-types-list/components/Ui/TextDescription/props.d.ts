// md5:40752989074108f31bb7a9a0229dd674 true
import { TextDescriptionPropsBasic } from '@dxtmisha/constructor/TextDescription';
/** Available values for properties @keywords props_values, size */
export declare const propsValues: {
    size: string[];
};
/** Size token options for text description @keywords props_token, size */
type PropsToken = {
    size?: 'xs' | 'sm' | 'md';
};
/** Properties for text description component @keywords text_description_props, properties */
export type TextDescriptionProps = TextDescriptionPropsBasic & PropsToken;
/** Default values for text description properties @keywords defaults, object */
export declare const defaults: object;