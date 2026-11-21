import { getElement } from './getElement'
import { isFunction } from './isFunction'
import type { ElementOrString } from '../types/basicTypes'

const AUTOFILL_SELECTORS = [
  ':autofill',
  ':-webkit-autofill',
  ':-moz-ui-autofill'
] as const

/**
 * Checks whether an element matches browser autofill pseudo-classes (`:autofill`, `:-webkit-autofill`, `:-moz-ui-autofill`).
 * Each selector is tested individually because `element.matches()` throws if any vendor pseudo-class is unsupported.
 *
 * Проверяет, соответствует ли элемент псевдоклассам автозаполнения браузера (`:autofill`, `:-webkit-autofill`, `:-moz-ui-autofill`).
 * Каждый селектор проверяется отдельно, так как `element.matches()` выбрасывает исключение при неподдерживаемом префиксе.
 * @param elementSelectors element or selector to check / проверяемый элемент или селектор
 * @returns true if element is in autofill state / true, если элемент находится в состоянии автозаполнения
 */
export function isAutofillElement<E extends Element = HTMLElement>(
  elementSelectors?: ElementOrString<E> | null
): boolean {
  const element = getElement(elementSelectors)

  if (
    !element
    || !('matches' in element)
    || !isFunction(element.matches)
  ) {
    return false
  }

  for (const selector of AUTOFILL_SELECTORS) {
    try {
      if (element.matches(selector)) {
        return true
      }
    } catch {
      // Ignore unsupported pseudo-class
    }
  }

  return false
}
