// md5:e8355c70d686477259a3c6b0655cd056 true
type MotionStickyPropsToken = {};

export type MotionStickyPropsBasic = {
  /** Scroll container element or selector */
  elementScroll?: string | HTMLElement | Window;
  /** CSS class to apply when the element becomes sticky */
  classActivity?: string;
  /** HTML tag for the element */
  tag?: string;
};

export type MotionStickyProps = MotionStickyPropsBasic & MotionStickyPropsToken;

/** Default property values for MotionSticky @keywords motion, sticky, defaults */
export declare const defaultsMotionSticky: {
  tag: string;
};