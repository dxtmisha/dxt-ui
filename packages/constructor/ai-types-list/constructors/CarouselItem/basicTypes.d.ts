// md5:48433cbaf22e9873bbb0bf97feb11fe8 true
import type { ConstrBind } from '@dxtmisha/functional';
/** Default slot properties for carousel item. @keywords carousel, item, slot */
export type CarouselItemSlotDefault = {
  /** Slide selection state. */
  selected: boolean;
  /** Slide number or identifier. */
  slide?: number | string;
};
/** Component inclusion configuration for carousel item. @keywords carousel, item, component */
export type CarouselItemComponentInclude = {
  carouselItem?: object;
};
/** Embedding attributes for carousel item. @keywords carousel, item, props, attributes */
export type CarouselItemPropsInclude<CarouselItem extends CarouselItemPropsBasic = CarouselItemPropsBasic> = {
  carouselItemAttrs?: ConstrBind<CarouselItem>;
};