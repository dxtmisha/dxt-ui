// md5:cbe106d57dfa31a91ac4b36cdf42d80b true
import { ConstrClass } from '@dxtmisha/functional';
export type MotionFlipComponents = {};
export type MotionFlipEmits = {};
/** Interface describing exposed methods for MotionFlip. @keywords MotionFlip expose methods */
export interface MotionFlipExpose {
    /** Stops active FLIP animation and clears state. @keywords stop animation */
    stop: () => void;
    /** FLIP update animation handler. @keywords update animation callback @param callback Function performing DOM updates */
    update: (callback: MotionFlipCallback) => Promise<void>;
}
export interface MotionFlipSlots {
    /** Default slot for content elements */
    default?(props: any): any;
}
export type MotionFlipClasses = {
    main: ConstrClass;
    item: string;
};