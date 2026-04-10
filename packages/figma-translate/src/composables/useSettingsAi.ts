import { executeUseLocal } from '@dxtmisha/functional'
import { useFigmaClientStorage } from '@dxtmisha/figma-ref'
import { getKey } from '../functions/getKey'

const item = executeUseLocal(() => {
  /** AI key / Ключ ИИ */
  const key = useFigmaClientStorage(getKey('ai-key'))

  return {
    key
  }
})

/**
 * Composable for working with AI configuration.
 *
 * Композиция для работы с конфигурацией ИИ.
 */
export const useSettingsAi = () => item()
