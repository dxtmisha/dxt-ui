import { executeUseLocal } from '@dxtmisha/functional'
import { useFigmaStorageMulti } from '@dxtmisha/figma-ref'
import { getKey } from '../functions/getKey'
import { useConfigurationStorage } from './useConfigurationStorage'

const item = executeUseLocal(() => {
  const { inDocument, inLocal } = useConfigurationStorage()

  /** AI key / Ключ ИИ */
  const { item: key } = useFigmaStorageMulti<string>(
    getKey('ai-key'),
    inDocument,
    inLocal,
    ''
  )

  return {
    key
  }
})

/**
 * Composable for working with AI configuration.
 *
 * Композиция для работы с конфигурацией ИИ.
 */
export const useConfigurationAi = () => item()
