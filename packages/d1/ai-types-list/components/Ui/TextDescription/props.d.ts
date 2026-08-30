// md5:3e2e5d1661d9209d69f1eab9b8735fea true
import { type TextDescriptionPropsBasic } from '@dxtmisha/constructor/TextDescription';

export declare const propsValues: {
  size: string[];
};

type PropsToken = {
  size?: 'xs' | 'sm' | 'md';
};

/** Text description component properties. @keywords text, description, props */
export type TextDescriptionProps = TextDescriptionPropsBasic & PropsToken;

/** Default property values. @keywords text, description, defaults */
export declare const defaults: object;