// md5:841c7f01a0ef340dc8724eee5ed4a540 true
export type MotionAxisPropsBasic = ModelPropsSelected<MotionAxisSelectedValue> & {
    /** Selected element @keywords selected element */
    selected?: MotionAxisSelectedValue;
    /** Whether to animate height change @keywords animation height */
    animationHeight?: boolean;
    /** Whether the elements are in the DOM @keywords inDom dom status */
    inDom?: boolean;
    /** List of elements in the DOM for slide @keywords inDomSlide slide elements */
    inDomSlide?: string[];
};

/** Type describing incoming properties @keywords motion axis props properties */
export type MotionAxisProps = MotionAxisPropsBasic & {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};

/** Default value for property @keywords defaults motion axis default values */
export declare const defaultsMotionAxis: {
    axis: string;
    direction: string;
};