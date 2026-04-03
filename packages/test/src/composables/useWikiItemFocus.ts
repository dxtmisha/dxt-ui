import { executeUseLocal, useSessionRef } from '@dxtmisha/functional'

/**
 * Logic for managing the focus state of wiki items.
 *
 * Логика управления состоянием фокуса элементов вики.
 */
const item = executeUseLocal(() => {
  /** Focus state/ Состояние фокуса */
  const focus = useSessionRef('--dxt-text-wiki-page-focus', 'all')

  return {
    /** Focus state/ Состояние фокуса */
    focus,

    /**
     * Set the focus state.
     *
     * Установить состояние фокуса.
     * @param value focus value/ значение фокуса
     */
    setFocus: (value: string) => {
      focus.value = value
    },

    /**
     * Reset the focus state.
     *
     * Сбросить состояние фокуса.
     */
    resetFocus: () => {
      focus.value = 'all'
    }
  }
})

/**
 * Composable for managing the focus state of wiki items.
 *
 * Композиция для управления состоянием фокуса элементов вики.
 */
export const useWikiItemFocus = () => item()
