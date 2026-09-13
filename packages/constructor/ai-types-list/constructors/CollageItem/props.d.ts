// md5:3f3b29d231f5a2af03c84c54b123538a true
type CollageItemPropsToken = {
  selected?: boolean;
  span?: 'banner' | 'huge' | 'large' | 'tall' | 'wide';
};
export type CollageItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic> = ImagePropsInclude<Image> & CollageBarPropsInclude<CollageBar> & EventClickProps & {
  /** Image coordinates for cropping or positioning. */
  coordinator?: number[] | any;
  /** Image X position. */
  x?: string | number;
  /** Image Y position. */
  y?: string | number;
  /** HTML tag for the body element. */
  tag?: string;
  /** Icon for the check indicator. */
  iconCheck?: IconValue<Icon>;
};
/** Properties for the collage item component. @keywords collage, item, props */
export type CollageItemProps = CollageItemPropsBasic & CollageItemPropsToken;
/** Default values for collage item properties. @keywords collage, item, defaults */
export declare const defaultsCollageItem: {
  tag: string;
};