// md5:3b395963e6c2eb7d0c00edd641ea5f68 true
import type { ConstrClass } from '@dxtmisha/functional';

/** Components required for ImageCrop sub-components integration. @keywords image-crop, components */
export type ImageCropComponents = ImageComponentInclude & CropAreaComponentInclude & ProgressComponentInclude;

/** Events emitted by ImageCrop component. @keywords image-crop, emits, events */
export type ImageCropEmits = CropAreaEmitsInclude & ImageEmitsInclude & ModelEmits<any>;

/** Exposed methods and properties for ImageCrop. @keywords image-crop, expose */
export interface ImageCropExpose {}

/** Available slot renderers for ImageCrop. @keywords image-crop, slots */
export interface ImageCropSlots {
  default?: (props: any) => any;
}

/** Class names structure for ImageCrop component elements. @keywords image-crop, classes, styles */
export type ImageCropClasses = {
  main: ConstrClass;
  body: string;
  image: string;
  cropArea: string;
  loading: string;
};