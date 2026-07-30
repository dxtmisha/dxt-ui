/**
 * Callback function executed during layout change update.
 */
export type MotionFlipCallback = () => Promise<void> | void

/**
 * Exposed interface signature for MotionFlip.
 */
export type MotionFlipExposeInclude = {
  update: (callback: MotionFlipCallback) => Promise<void>
}

/**
 * Base properties for MotionFlip inclusion.
 */
export type MotionFlipPropsInclude = {
  disabled?: boolean
}
