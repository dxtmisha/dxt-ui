/**
 * Type describing the coordinates of the sticky element position /
 * Тип, описывающий координаты положения липкого элемента.
 */
export type MotionStickyPosition = {
  /** Top position coordinate / Координата верхней позиции */
  top: number
  /** Bottom position coordinate / Координата нижней позиции */
  bottom: number
}

/**
 * Type describing computed CSS sticky offset positions /
 * Тип, описывающий вычисленные CSS-смещения положения липкого элемента.
 */
export type MotionStickyStylePosition = {
  /** Top offset coordinate / Координата верхнего смещения */
  top?: number
  /** Bottom offset coordinate / Координата нижнего смещения */
  bottom?: number
}
