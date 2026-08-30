// md5:c5017b95f2cff4c2782dde5f294074ce true
/** Callback executed during layout update. @keywords flip, callback, layout */
export type MotionFlipCallback = () => Promise<void> | void;
/** Element dimensions and position rectangle. @keywords flip, rect, bounds, layout */
export type MotionFlipElementSizeRect = {
    top: number;
    left: number;
    width: number;
    height: number;
};