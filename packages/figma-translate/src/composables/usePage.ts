import { ref } from 'vue'
import { computedByLanguage, executeUse, type ListDataBasic, useTranslateRef } from '@dxtmisha/functional'

const item = executeUse(() => {
  const translate = useTranslateRef([
    'translate-key_creation',
    'translate-localization'
  ] as const)

  const selected = ref<string>('genKey')
  const list = computedByLanguage<ListDataBasic>(() => {
    return [
      {
        label: translate.value['translate-key_creation'],
        value: 'genKey'
      },
      {
        label: translate.value['translate-localization'],
        value: 'genKey'
      }
    ]
  })

  return {
    pageSelected: selected,
    pageList: list
  }
})

export const usePage = () => item()
