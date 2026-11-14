// md5:38b6a7bec58dd669d4dd8e6b1ec215ba true
import { type CarouselItemPropsBasic } from '@dxtmisha/constructor/CarouselItem';
import type { ImageProps } from '../Image';

export declare const propsValues: {
  snap: string[];
};
type PropsToken = {
  selected?: boolean;
  snap?: 'start' | 'center' | 'end' | 'none';
};
/** Properties for the CarouselItem component. @keywords carousel, item, props */
export type CarouselItemProps = CarouselItemPropsBasic<ImageProps> & PropsToken;
/** Default property values for CarouselItem. @keywords defaults, carousel */
export declare const defaults: object;