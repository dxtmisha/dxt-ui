import { isDomRuntime } from './isDomRuntime'

/**
 * Cyclically calls requestAnimationFrame while next returns true.
 *
 * Циклически вызывает requestAnimationFrame, пока next возвращает true.
 * @param callback the function to call when it's time to update your animation / функция, которая будет вызвана, когда придёт время обновить вашу анимацию
 * @param next function that determines repetition / функция, которая определяет повторность
 * @param end function that is executed if the animation stops / функция, которая выполняется, если останавливается анимация
 * @returns void / ничего не возвращает
 */
export function frame(
  callback: (timestamp: DOMHighResTimeStamp) => void,
  next?: (timestamp: DOMHighResTimeStamp) => boolean,
  end?: () => void
): void {
  const init = (timestamp: DOMHighResTimeStamp): void => {
    callback(timestamp)

    if (
      isDomRuntime()
      && next?.(timestamp)
    ) {
      frame(callback, next, end)
    } else {
      end?.()
    }
  }

  if (isDomRuntime()) {
    requestAnimationFrame(init)
  } else {
    init(0)
  }
}
