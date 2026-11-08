// md5:779c3f7ca7d0c8be9769be6367588c6d true
import { type ConstrClass } from '@dxtmisha/functional';

export type ImageComponents = {};

export type ImageEmits = {
  /** Triggered when the image has loaded. @keywords image, load, event */
  load: [image: ImageEventData];
};

export type ImageExpose = {
  /** Returns the current image type. @keywords image, type */
  getType: () => ImageTypeItem;
  /** Returns the current image data. @keywords image, data */
  getData: () => ImageEventItem;
};

export interface ImageSlots {}

export type ImageClasses = {
  /** Root element classes. @keywords root, element, classes */
  main: ConstrClass;
};