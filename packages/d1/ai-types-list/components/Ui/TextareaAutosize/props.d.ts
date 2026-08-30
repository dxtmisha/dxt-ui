// md5:1f72b7b38e5c2fa176e19d1d0f749f35 true
import { type TextareaAutosizePropsBasic } from '@dxtmisha/constructor/TextareaAutosize';
export declare const propsValues: {
    height: string[];
};
type PropsToken = {
    autosize?: boolean;
    height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & PropsToken;
export declare const defaults: object;