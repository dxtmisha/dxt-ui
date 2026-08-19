// md5:e08a93994470ec98da4e5f699534c517 true
import { ConstrClass } from '@dxtmisha/functional';

export type CropAreaComponents = {};

export type CropAreaEmits = ModelEmits<CropAreaCoordinator> & {
    /** Event emitted during resizing or moving @keywords resize move crop_event */
    resize: [parameters: CropAreaEventParameters];
};

export interface CropAreaExpose {
    /** Get current coordinator array [top, right, bottom, left] @keywords get coordinator bounds */
    get: () => CropAreaCoordinator;
    /** Sets coordinator values @keywords set coordinator bounds */
    set: (coordinator: CropAreaCoordinator) => void;
    /** Resets coordinator values to defaults @keywords reset coordinator defaults */
    reset: () => void;
}

export interface CropAreaSlots {
}

export type CropAreaClasses = {
    /** Main root CSS class @keywords css class main root */
    main: ConstrClass;
    left: string;
    center: string;
    right: string;
    crop: string;
    move: string;
};