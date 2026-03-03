import {
  computedByLanguage,
  executeUse,
  type ListDataBasic,
  useRouterList,
  useTranslateRef
} from '@dxtmisha/functional'

const item = executeUse(() => {
  const translate = useTranslateRef([
    'translate-key_creation',
    'translate-localization'
  ] as const)

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

export const usePage = () => item()
