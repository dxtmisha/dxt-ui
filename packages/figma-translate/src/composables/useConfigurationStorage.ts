import { ref } from 'vue'
import { executeUseLocal } from '@dxtmisha/functional'

const item = executeUseLocal(() => {
  /** Save in document / Хранить в макете */
  const inDocument = ref(false)

  /** Save locally / Хранить локально у пользователя */
  const inLocal = ref(true)

  return {
    inDocument,
    inLocal
  }
})

/**
 * Composable for working with storage configuration.
 *
 * Композиция для работы с конфигурацией хранилища.
 */
export const useConfigurationStorage = () => item()
