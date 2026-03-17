import { computed, isRef, type Ref, ref } from 'vue'
import { forEach, type NumberOrString } from '@dxtmisha/functional-basic'

import { RouterItemRef } from '../../classes/ref/RouterItemRef'

import type { ConstrBind } from '../../types/constructorTypes'
import type { ListDataBasic } from '../../types/listTypes'
import type { RefType } from '../../types/refTypes'

/**
 * Managing a list of links for the router.
 *
 * Управление списком ссылок для роутера.
 * @param list list of items / список элементов
 * @param selected selected item / выбранный элемент
 * @param hasTo has to / имеет to
 */
export const useRouterList = <T extends ListDataBasic>(
  list: RefType<ConstrBind<T>[] | undefined>,
  selected?: Ref<string> | string,
  hasTo: boolean = true
) => {
  /** Selected index / Выбранный индекс */
  const index = isRef(selected)
    ? selected
    : ref<string>(selected || list.value?.[0]?.value || '')

  /**
   * Returns the current item.
   *
   * Возвращает текущий элемент.
   */
  const getItem = (): T | undefined => find(index.value)

  /**
   * Find item by index.
   *
   * Поиск элемента по индексу.
   * @param index index / индекс
   */
  const find = (index: string): T | undefined => {
    return list.value?.find(item => item.value === index)
  }

  /**
   * Transition to the element.
   *
   * Переход к элементу.
   * @param name element name / имя элемента
   */
  const to = (name?: string): void => {
    if (
      name
      && name !== index.value
      && find(name)
    ) {
      index.value = name
      RouterItemRef.push({ name })
    }
  }

  /** Current element/ Текущий элемент */
  const item = computed<T | undefined>(() => getItem())

  /** Label / Метка */
  const label = computed<NumberOrString>(() => getItem()?.label || '')

  /** List of elements / Список элементов */
  const listComputed = computed<ConstrBind<T>[]>(() => {
    if (list.value) {
      return forEach(
        list.value,
        (item) => {
          if (
            hasTo
            && !('to' in item)
          ) {
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
  })

  return {
    item,

    /** Selected element / Выбранный элемент */
    selected: index,

    label,

    /** List of elements / Список элементов */
    list: listComputed,

    to,

    /**
     * Transition to the main element.
     *
     * Переход к главному элементу.
     */
    toMain() {
      to(list.value?.[0]?.value)
    }
  }
}
