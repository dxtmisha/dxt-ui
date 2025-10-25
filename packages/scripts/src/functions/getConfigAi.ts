import { PropertiesConfig } from '../classes/Properties/PropertiesConfig'

/**
 * Returns AI configuration: API key and model.
 *
 * Возвращает конфигурацию ИИ: API ключ и модель.
 */
export function getConfigAi(): [string, string] {
  return [
    PropertiesConfig.getAiKey(),
    PropertiesConfig.getAiModel()
  ]
}
