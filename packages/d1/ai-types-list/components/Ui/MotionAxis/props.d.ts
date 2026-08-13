// md5:54b3223780395924367976e27b9aace8 true
import { MotionAxisPropsBasic } from '@dxtmisha/constructor/MotionAxis';
/** Available motion axis and direction option values @keywords propsValues axis direction */
export declare const propsValues: {
    axis: string[];
    direction: string[];
};
export type PropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};
/** Combined motion axis properties and tokens @keywords MotionAxisProps motion axis */
export type MotionAxisProps = MotionAxisPropsBasic & PropsToken;
/** Default property values configuration @keywords defaults object */
export declare const defaults: object;