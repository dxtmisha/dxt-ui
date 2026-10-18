// md5:a6467e0b9f2fa18f3b2572ab8b5488fc true
import { type ConstrClass } from '@dxtmisha/functional';
export type ImageComponents = {};
export type ImageEmits = {
  /** Triggered when image finishes loading. @keywords load, event */
  load: [image: ImageEventData];
};
export type ImageExpose = {
  /** Returns the current image type. @keywords type, image */
  getType: () => ImageTypeItem;
  /** Returns the current image data. @keywords data, image */
  getData: () => ImageEventItem;
};
export interface ImageSlots {}
export type ImageClasses = {
  /** Root element class names. @keywords classes, main */
  main: ConstrClass;
};