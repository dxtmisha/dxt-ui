// md5:e3ccda16d10e7cd8a45807727724c003 true
import type { ConstrClass } from '@dxtmisha/functional';

export type CropAreaComponents = {};

export type CropAreaEmits = ModelEmits<any> & {
    /** Event emitted during resizing or moving. @keywords resize, move, event */
    resize: [parameters: CropAreaEventParameters];
};

export interface CropAreaExpose {
    /** Gets current coordinator array [top, right, bottom, left]. @keywords coordinator, get */
    get: () => CropAreaCoordinator;
    /** Sets coordinator values. @keywords coordinator, set */
    set: (coordinator: CropAreaCoordinator) => void;
    /** Resets coordinator values to defaults. @keywords reset, default */
    reset: () => void;
}

export interface CropAreaSlots {}

export type CropAreaClasses = {
    main: ConstrClass;
    left: string;
    center: string;
    right: string;
    crop: string;
    move: string;
};