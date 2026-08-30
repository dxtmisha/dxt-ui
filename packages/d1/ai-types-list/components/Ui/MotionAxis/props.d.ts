// md5:22b2f6e6f6985ef612957206dffd64dc true
import { type MotionAxisPropsBasic } from '@dxtmisha/constructor/MotionAxis';

/** Allowed property values for axis and direction. @keywords axis, direction, motion, values */
export declare const propsValues: {
    axis: string[];
    direction: string[];
};

type PropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};

/** Motion axis component properties. @keywords motion, axis, props */
export type MotionAxisProps = MotionAxisPropsBasic & PropsToken;

/** Default property values. @keywords defaults, motion */
export declare const defaults: object;