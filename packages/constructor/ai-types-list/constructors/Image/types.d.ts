// md5:3e6198993cbf28355bc474c3e55982b0 true
import { type ConstrClass } from '@dxtmisha/functional';

export type ImageComponents = {};

export type ImageEmits = {
  /** Event triggered when the image is loaded @keywords image, load, event */
  load: [image: ImageEventData];
};

export type ImageExpose = {
  /** Get current image type @keywords image, type */
  getType: () => ImageTypeItem;
  /** Get current image data @keywords image, data */
  getData: () => ImageEventItem;
};

export interface ImageSlots {}

export type ImageClasses = {
  main: ConstrClass;
};