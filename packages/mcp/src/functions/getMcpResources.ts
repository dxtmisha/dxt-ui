import { McpResourcesLoader } from '../classes/McpResourcesLoader'
import type {
  McpGetResourcesOptions,
  McpResourceItem,
  McpResourceRawItem
} from '../types/McpTypes'

/**
 * Initializes and returns standard McpResourceItem array from source data using McpResourcesLoader.
 *
 * Инициализирует и возвращает массив стандартных элементов McpResourceItem из исходных данных с помощью McpResourcesLoader.
 * @param source Data array, raw JSON string, or file path to resources JSON / Массив данных, строка JSON или путь к JSON-файлу ресурсов
 * @param options Options including base search path / Параметры, включая базовый путь поиска
 * @returns Array of initialized McpResourceItem elements / Массив инициализированных элементов McpResourceItem
 */
export const getMcpResources = (
  source: string | McpResourceRawItem[] | Record<string, unknown>[],
  options?: McpGetResourcesOptions
): McpResourceItem[] => {
  return new McpResourcesLoader(source, options).get()
}
