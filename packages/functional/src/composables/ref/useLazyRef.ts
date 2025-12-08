import {
  type Ref,
  shallowRef,
  type ShallowRef,
  watch
} from 'vue'
import { getElementId, isDomRuntime } from '@dxtmisha/functional-basic'

export type LazyItem = {
  status: ShallowRef<boolean>
  ratio: ShallowRef<number>
  entry: ShallowRef<IntersectionObserverEntry | undefined>
  stopWatch: () => void
}
export type LazyList = Record<string, LazyItem>

/**
 * Hook for initializing the tracking of an element's appearance on the screen.
 *
 * Хук для инициализации отслеживания появления элемента на экране.
 */
export const useLazyRef = (
  options: IntersectionObserverInit = {
    rootMargin: '128px 0px'
  }
) => {
  const list: LazyList = {}
  const intersectionObserver = isDomRuntime() && 'IntersectionObserver' in window
    ? (
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = getElementId(entry.target as HTMLElement)

              if (id in list) {
                const item: LazyItem = list[id] as LazyItem

                item.status.value = entry.isIntersecting
                item.ratio.value = entry.intersectionRatio
                item.entry.value = entry
              }
            })
          },
          options
        )
      )
    : undefined

  const remove = (element?: HTMLElement) => {
    if (element) {
      const id = getElementId(element)

      if (id in list) {
        intersectionObserver?.unobserve(element)
        list[id]?.stopWatch()

        delete list[id]
      }
    }
  }

  return {
    intersectionObserver,

    /**
     * Getting a tracked element.
     *
     * Получение отслеживаемого элемента.
     * @param element tracked element/ отслеживаемый элемент
     */
    getItem(element: HTMLElement) {
      const id = getElementId(element)

      return list[id]
    },

    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(element: Ref<HTMLElement | undefined>) {
      const status = shallowRef<boolean>(!intersectionObserver)

      if (intersectionObserver) {
        let stopWatch: (() => void) | undefined = undefined
        stopWatch = watch(element, (_, oldElement) => {
          if (oldElement) {
            remove(oldElement)
          }

          if (element.value) {
            const id = getElementId(element.value)

            list[id] = {
              status,
              ratio: shallowRef<number>(0),
              entry: shallowRef(undefined),
              stopWatch: () => stopWatch?.()
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
