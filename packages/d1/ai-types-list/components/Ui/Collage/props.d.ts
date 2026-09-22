// md5:8b35e0f917ba676ce2893706ad98e59d true
import { type CollagePropsBasic } from '@dxtmisha/constructor/Collage';

export declare const propsValues: {
  columns: string[];
  variant: string[];
};

type PropsToken = {
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  variant?: 'standard' | 'quilted' | 'woven' | 'masonryHorizontal' | 'masonryVertical';
};

/** Collage component properties. @keywords collage, props */
export type CollageProps = CollagePropsBasic<CollageItemProps> & PropsToken;

/** Default property values. @keywords collage, defaults */
export declare const defaults: object;