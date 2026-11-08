import { computed, type ComputedRef, isRef, type Ref, ref } from 'vue'
import { forEach, type NumberOrString } from '@dxtmisha/functional-basic'

import { RouterItemRef } from '../../classes/ref/RouterItemRef'

import type { ConstrBind } from '../../types/constructorTypes'
import type { ListDataBasic } from '../../types/listTypes'
import type { RefType } from '../../types/refTypes'

/** Router list state and navigation methods / Состояние списка роутера и методы навигации */
export type UseRouterList<T extends ListDataBasic> = {
  /** Current element / Текущий элемент */
  item: ComputedRef<T | undefined>
  /** Selected element / Выбранный элемент */
  selected: Ref<string>
  /** Label / Метка */
  label: ComputedRef<NumberOrString>
  /** List of elements / Список элементов */
  list: ComputedRef<ConstrBind<T>[]>
  /**
   * Transition to the element.
   *
   * Переход к элементу.
   * @param name element name / имя элемента
   */
  to: (name?: string) => void
  /**
   * Transition to the main element.
   *
   * Переход к главному элементу.
   */
  toMain(): void
}

/**
 * Managing a list of links for the router.
 *
 * Управление списком ссылок для роутера.
 * @param list list of items / список элементов
 * @param selected selected item / выбранный элемент
 * @param hasTo has to / имеет to
 * @returns router list state and navigation methods / состояние списка роутера и методы навигации
 */
export const useRouterList = <T extends ListDataBasic>(
  list: RefType<ConstrBind<T>[] | undefined>,
  selected?: Ref<string> | string,
  hasTo: boolean = true
): UseRouterList<T> => {
  /** Selected index / Выбранный индекс */
  const index = isRef(selected)
    ? selected
    : ref<string>(selected || list.value?.[0]?.value || '')

  /**
   * Returns the current item.
   *
   * Возвращает текущий элемент.
   * @returns current active item or undefined / текущий активный элемент или undefined
   */
  const getItem = (): T | undefined => find(index.value)

  /**
   * Find item by index.
   *
   * Поиск элемента по индексу.
   * @param index index / индекс
   * @returns matching item or undefined / найденный элемент или undefined
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

  /** Current element / Текущий элемент */
  const item = computed<T | undefined>(() => getItem())

  /** Label / Метка */
  const label = computed<NumberOrString>(() => item.value?.label ?? '')

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
    toMain(): void {
      to(list.value?.[0]?.value)
    }
  }
}
