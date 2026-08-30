// md5:24671a521f7d28510ddc5187ad66cee4 true
import { type PlaceholderPropsBasic } from '@dxtmisha/constructor/Placeholder';

export declare const propsValues: {
  size: string[];
};
type PropsToken = {
  size?: 'sm' | 'md' | 'lg';
};
/** Placeholder component properties. @keywords placeholder, props */
export type PlaceholderProps = PlaceholderPropsBasic<ImageProps, ActionsProps> & PropsToken;
export declare const defaults: object;