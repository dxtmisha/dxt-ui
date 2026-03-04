import {
  computedByLanguage,
  executeUse,
  type ListDataBasic,
  useRouterList,
  useTranslateRef
} from '@dxtmisha/functional'

/** Page management cache / Кэш управления страницами */
const item = executeUse(() => {
  /** Translations / Переводы */
  const translate = useTranslateRef([
    'translate-key_creation',
    'translate-localization'
  ] as const)

  /** List of pages / Список страниц */
  const list = computedByLanguage<ListDataBasic[]>(
    () => {
      return [
        {
          label: translate.value['translate-key_creation'],
          value: 'key-creation'
        },
        {
          label: translate.value['translate-localization'],
          value: 'localization'
        }
      ]
    },
    () => []
  )

  return useRouterList(list, undefined, false)
})

/**
 * Managing pages for the plugin.
 *
 * Управление страницами для плагина.
 */
export const usePage = () => item()
