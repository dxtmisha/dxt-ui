// md5:14ecf28d8b2e4a244691b57a3cb1b11a true
import { TextareaAutosizePropsBasic } from '@dxtmisha/constructor/TextareaAutosize';
export declare const propsValues: {
    height: string[];
};
type PropsToken = {
    autosize?: boolean;
    height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
/** Component properties extending basic textarea autosize props @keywords TextareaAutosizeProps, properties */
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & PropsToken;
/** Default configuration object @keywords defaults, object */
export declare const defaults: object;