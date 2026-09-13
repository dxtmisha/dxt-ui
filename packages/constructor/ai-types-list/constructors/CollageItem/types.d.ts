// md5:842f5cf0d60f3b2faaa84023c00f1462 true
import type { ConstrClass } from '@dxtmisha/functional';

export type CollageItemComponents = ImageComponentInclude & IconComponentInclude & CollageBarComponentInclude;

export type CollageItemEmits = EventClickEmits & {
  /** Triggered when the image is loaded. @keywords collage item load */
  load: [image: ImageEventData];
};

export interface CollageItemExpose extends EventClickExpose {
  /** Gets computed height factor. @keywords collage item height */
  getHeight?(): number | undefined;
  /** Gets computed width factor. @keywords collage item width */
  getWidth?(): number | undefined;
}

export interface CollageItemSlots extends CollageBarSlotsInclude {}

export type CollageItemClasses = {
  main: ConstrClass;
  body: string;
  image: string;
  icon: string;
  collageBar: string;
};