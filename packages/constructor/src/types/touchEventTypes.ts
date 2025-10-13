/**
 * Horizontal direction type for touch/mouse gestures/ Тип горизонтального направления для жестов касания/мыши
 */
export type TouchEventTypeX = 'left' | 'right' | 'none'

/**
 * Vertical direction type for touch/mouse gestures/ Тип вертикального направления для жестов касания/мыши
 */
export type TouchEventTypeY = 'top' | 'bottom' | 'none'

/**
 * Client coordinates for touch/mouse events/ Координаты клиента для событий касания/мыши
 */
export type TouchEventClient = {
  /** Horizontal coordinate/ Горизонтальная координата */
  x: number
  /** Vertical coordinate/ Вертикальная координата */
  y: number
}

/**
 * Callback function for touch/mouse event handling
 *
 * Функция обратного вызова для обработки событий касания/мыши
 * @param typeX horizontal direction type/ тип горизонтального направления
 * @param typeY vertical direction type/ тип вертикального направления
 * @param clientX horizontal offset/ горизонтальное смещение
 * @param clientY vertical offset/ вертикальное смещение
 * @param mouse initial mouse position/ начальная позиция мыши
 * @param mouseMove current mouse position/ текущая позиция мыши
 * @param touche initial touch point/ начальная точка касания
 * @param toucheMove current touch point/ текущая точка касания
 */
export type TouchEventCallback = (
  typeX: TouchEventTypeX,
  typeY: TouchEventTypeY,
  clientX: number,
  clientY: number,
  mouse?: TouchEventClient,
  mouseMove?: TouchEventClient,
  touche?: Touch,
  toucheMove?: Touch
) => Promise<boolean> | boolean
