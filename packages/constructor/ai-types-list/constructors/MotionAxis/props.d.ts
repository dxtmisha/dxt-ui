// md5:68f25b5834b314b1f75c140cb446d4ff true
type MotionAxisPropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};
export type MotionAxisPropsBasic = ModelPropsSelected<MotionAxisSelectedValue> & {
    /** Selected element */
    selected?: MotionAxisSelectedValue;
    /** Whether to animate height changes */
    animationHeight?: boolean;
    /** Whether elements are present in DOM */
    inDom?: boolean;
    /** List of slide elements present in DOM */
    inDomSlide?: string[];
};
/** MotionAxis component properties. @keywords motion, axis, props */
export type MotionAxisProps = MotionAxisPropsBasic & MotionAxisPropsToken;
/** Default property values for MotionAxis. @keywords motion, axis, defaults */
export declare const defaultsMotionAxis: {
    axis: string;
    direction: string;
};