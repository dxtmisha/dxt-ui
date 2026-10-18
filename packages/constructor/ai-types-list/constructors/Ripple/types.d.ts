// md5:4bba02ac7af17cf6471625a3de6b762b true
import type { ConstrClass } from '@dxtmisha/functional';
import type { ImageCoordinator } from '@dxtmisha/functional-basic';

export type RippleComponents = {};
export type RippleEmits = {};
export interface RippleExpose {
    /** Adds a ripple element at specified coordinates or at the center. @keywords ripple, add, coordinate */
    add(coordinator?: ImageCoordinator): void;
    /** Adds a ripple element at the center. @keywords ripple, add center */
    addCenter(): void;
}
export interface RippleSlots {}
export type RippleClasses = {
    main: ConstrClass;
    item: string;
};