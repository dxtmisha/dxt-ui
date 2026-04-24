import { Api, ServerStorage } from '@dxtmisha/functional-basic'

/**
 * Generate JSON scripts for hydration.
 *
 * Генерирует JSON-скрипты для гидратации.
 */
export function initScriptsJson(): string {
  return [
    ServerStorage.toString(),
    Api.getHydration().toString()
  ].join('')
}
