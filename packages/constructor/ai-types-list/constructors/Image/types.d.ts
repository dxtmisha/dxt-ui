// md5:0aa2d28c3f357b6f06a05b936b81b031 true
import { ConstrClass } from '@dxtmisha/functional';

export type ImageComponents = {};

export type ImageEmits = {
    load: [image: ImageEventData];
};

export type ImageExpose = {
    /** Gets current image type @keywords getType image type */
    getType: () => ImageTypeItem;
    /** Gets current image data @keywords getData image data */
    getData: () => ImageEventItem;
};

export interface ImageSlots {
}

export type ImageClasses = {
    main: ConstrClass;
};