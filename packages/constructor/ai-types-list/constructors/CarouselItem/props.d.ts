// md5:00660321d10620124cd5cab59556f27d true
type CarouselItemPropsToken = {
    selected?: boolean;
    snap?: 'start' | 'center' | 'end' | 'none';
};
/** Base properties for carousel item component. @keywords carousel, item, props, basic */
export type CarouselItemPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> = ImagePropsInclude<Image> & EventClickProps & SkeletonPropsInclude & AriaLabelPropsInclude & AriaRolePropsInclude & {
    /** Current slide number or identifier for accessibility. @keywords slide, index, accessibility */
    slide?: number | string;
    /** Total slides count for accessibility. @keywords total, count, accessibility */
    total?: number | string;
    /** HTML tag for the container. @keywords tag, element */
    tag?: string;
};
/** Carousel item component properties. @keywords carousel, item, props */
export type CarouselItemProps = CarouselItemPropsBasic & CarouselItemPropsToken;
/** Default property values for carousel item. @keywords carousel, item, defaults */
export declare const defaultsCarouselItem: {
    snap: string;
    role: string;
};