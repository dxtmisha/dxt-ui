import { computed, isRef, type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import { forEach, type NumberOrString } from '@dxtmisha/functional-basic'

import type { ConstrBind } from '../../types/constructorTypes'
import type { ListDataBasic } from '../../types/listTypes'
import type { RefType } from '../../types/refTypes'

/**
 * Managing a list of links for the router.
 *
 * Управление списком ссылок для роутера.
 * @param list list of items / список элементов
 * @param selected selected item / выбранный элемент
 */
export const useRouterList = <T extends ListDataBasic>(
  list: RefType<ConstrBind<T>[] | undefined>,
  selected?: Ref<string> | string
) => {
  const router = useRouter()

  const index = isRef(selected)
    ? selected
    : ref<string>(selected || list.value?.[0]?.value || '')

  const item = computed(
    () => list.value?.find(item => item.value === index.value)
  )

  return {
    /** Current element/ Текущий элемент */
    item,

    /** Selected element / Выбранный элемент */
    selected: index,

    /** Label / Метка */
    label: computed<NumberOrString>(() => item.value?.label || ''),

    /** List of elements / Список элементов */
    list: computed<ConstrBind<T>[]>(() => {
      if (list.value) {
        return forEach(
          list.value,
          (item) => {
            if (!item.to) {
              return {
                ...item,
                to: { name: item.value }
              }
            }

            return item
          }
        )
      }

      return []
    }),

    /**
     * Transition to the element.
     *
     * Переход к элементу.
     * @param name element name / имя элемента
     */
    to(name: string) {
      index.value = name
      router.push({ name }).then()
    },

    /**
     * Transition to the main element.
     *
     * Переход к главному элементу.
     */
    toMain() {
      const name = list.value?.[0]?.value

      if (name) {
        router.push({ name }).then()
      }
    }
  }
}
