// md5:1d6b882c4cc07edac5232aa8c801f408 true
type MotionFlipPropsToken = {};

export type MotionFlipPropsBasic = {
  /** Enables automatic DOM change detection. */
  auto?: boolean;
  /** Disables the FLIP animation. */
  disabled?: boolean;
};

export type MotionFlipProps = MotionFlipPropsBasic & MotionFlipPropsToken;

export declare const defaultsMotionFlip: MotionFlipPropsBasic;