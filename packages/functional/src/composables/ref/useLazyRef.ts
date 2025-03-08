import {
  type Ref,
  shallowRef,
  type ShallowRef,
  watch
} from 'vue'

import { getElementId } from '../../functions/getElementId'

export type LazyItem = {
  status: ShallowRef<boolean>
  stopWatch: () => void
}
export type LazyList = Record<string, LazyItem>

/**
 * Hook for initializing the tracking of an element's appearance on the screen.
 *
 * Хук для инициализации отслеживания появления элемента на экране.
 */
export const useLazyRef = () => {
  const list: LazyList = {}
  const intersectionObserver = 'IntersectionObserver' in window
    ? (
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = getElementId(entry.target as HTMLElement)

              if (id in list) {
                list[id].status.value = entry.isIntersecting
              }
            })
          },
          {
            rootMargin: '128px 0px'
          }
        )
      )
    : undefined

  const remove = (element?: HTMLElement) => {
    if (element) {
      const id = getElementId(element)

      if (id in list) {
        intersectionObserver?.unobserve(element)
        list[id].stopWatch()

        delete list[id]
      }
    }
  }

  return {
    intersectionObserver,

    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(element: Ref<HTMLElement>) {
      const status = shallowRef<boolean>(!intersectionObserver)

      if (intersectionObserver) {
        const stopWatch = watch(element, (_, oldElement) => {
          if (oldElement) {
            intersectionObserver.unobserve(oldElement)
          }

          if (element.value) {
            const id = getElementId(element.value)

            list[id] = {
              status,
              stopWatch
            }
            intersectionObserver.observe(element.value)
          } else {
            remove(element.value)
          }
        }, { immediate: true })
      }

      return status
    },

    /**
     * Removing an element from tracking.
     *
     * Удаление элемента из отслеживания.
     */
    removeLazyItem: remove,

    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => intersectionObserver?.disconnect()
  }
}
