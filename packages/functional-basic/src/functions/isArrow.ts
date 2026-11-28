import { isString } from './isString'

/**
 * Checks if a key name matches one of the standard directional arrow keys.
 *
 * Проверяет, соответствует ли имя клавиши одной из стандартных клавиш со стрелками.
 * @param key key name string / строка имени клавиши
 * @returns true if arrow key name / true, если имя клавиши со стрелкой
 */
function isArrowKey(key?: string): boolean {
  return key === 'ArrowUp'
    || key === 'ArrowDown'
    || key === 'ArrowLeft'
    || key === 'ArrowRight'
}

/**
 * Checks if the pressed key or key name is a directional arrow key
 * (`ArrowUp`, `ArrowDown`, `ArrowLeft`, or `ArrowRight`).
 *
 * Проверяет, является ли нажатая клавиша или строка имени клавиши клавишей со стрелкой
 * (`ArrowUp`, `ArrowDown`, `ArrowLeft` или `ArrowRight`).
 * @param event keyboard event object or key name string / объект события клавиатуры или строка имени клавиши
 * @returns true if an arrow key is matched / true, если соответствует клавише со стрелкой
 */
export function isArrow(
  event?: KeyboardEvent | Event | string | null
): boolean {
  if (!event) {
    return false
  }

  if (isString(event)) {
    return isArrowKey(event)
  }

  const keyboardEvent = event as KeyboardEvent

  if (keyboardEvent.isComposing) {
    return false
  }

  return isArrowKey(keyboardEvent.key)
    || isArrowKey(keyboardEvent.code)
    || keyboardEvent.keyCode === 37
    || keyboardEvent.keyCode === 38
    || keyboardEvent.keyCode === 39
    || keyboardEvent.keyCode === 40
}
