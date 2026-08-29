// export:none

import { PropertiesConfig } from '../classes/Properties/PropertiesConfig'

/**
 * Retrieves AI client configuration parameters including API key, model name, and extra options.
 *
 * Возвращает параметры конфигурации клиента AI, включая API-ключ, имя модели и дополнительные опции.
 * @returns tuple with API key, model name, and options record / кортеж с API-ключом, именем модели и объектом параметров
 */
export function getConfigAi(): [string, string, Record<string, any>] {
  return [
    PropertiesConfig.getAiKey(),
    PropertiesConfig.getAiModel(),
    PropertiesConfig.getAiConfig()
  ]
}
