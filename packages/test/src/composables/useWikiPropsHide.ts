import { executeUseLocal, useSessionRef } from '@dxtmisha/functional'

/**
 * Logic for managing the visibility of wiki properties.
 *
 * Логика управления видимостью свойств вики.
 */
const item = executeUseLocal(() => {
  /** Visibility state/ Состояние видимости */
  const hide = useSessionRef<boolean>('--dxt-text-wiki-page-hide', true)

  return {
    /** Visibility state/ Состояние видимости */
    hide,

    /**
     * Set the visibility state.
     *
     * Установить состояние видимости.
     * @param value hide value/ значение скрытия
     */
    setHide: (value: boolean) => {
      hide.value = value
    },

    /**
     * Toggle the visibility state.
     *
     * Переключить состояние видимости.
     */
    toggleHide: () => {
      hide.value = !hide.value
    }
  }
})

/**
 * Composable for managing the visibility of wiki properties.
 *
 * Композиция для управления видимостью свойств вики.
 */
export const useWikiPropsHide = () => item()
