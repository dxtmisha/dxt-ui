// md5:ac72106ae4e0c96fcaef3ce610d9ddd9 true
import { type TextareaAutosizePropsBasic } from '@dxtmisha/constructor/TextareaAutosize';
export declare const propsValues: {
  height: string[];
};
type PropsToken = {
  autosize?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
};
/** TextareaAutosize component properties. @keywords textarea, autosize, props */
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & PropsToken;
/** Default property values for TextareaAutosize. @keywords defaults, textarea, autosize */
export declare const defaults: object;