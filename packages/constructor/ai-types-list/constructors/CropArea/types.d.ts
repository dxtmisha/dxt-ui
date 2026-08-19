// md5:c1750d3cb719eefb81efe63bf9bd5bbd true
import { ConstrClass } from '@dxtmisha/functional';

export type CropAreaComponents = {};

export type CropAreaEmits = ModelEmits<any> & {
    /** Resize event @keywords resize move crop_area */
    resize: [parameters: CropAreaEventParameters];
};

export interface CropAreaExpose {
    /** Get current coordinates [top, right, bottom, left] @keywords get coordinator crop_area */
    get: () => CropAreaCoordinator;
    /** Set coordinate values @keywords set coordinator crop_area */
    set: (coordinator: CropAreaCoordinator) => void;
    /** Reset coordinates to defaults @keywords reset coordinator crop_area */
    reset: () => void;
}

export interface CropAreaSlots {
}

export type CropAreaClasses = {
    /** Main root CSS class @keywords main class crop_area */
    main: ConstrClass;
    left: string;
    center: string;
    right: string;
    crop: string;
    move: string;
};