import {
  type Ref,
  shallowRef,
  type ShallowRef,
  watch
} from 'vue'
import { getElementId, isDomRuntime } from '@dxtmisha/functional-basic'

/** Lazy tracking item state / Состояние отслеживаемого ленивого элемента */
export type LazyItem = {
  /** Visibility status / Статус видимости */
  status: ShallowRef<boolean>
  /** Intersection ratio / Коэффициент пересечения */
  ratio: ShallowRef<number>
  /** Observer entry / Запись наблюдателя */
  entry: ShallowRef<IntersectionObserverEntry | undefined>
  /** Watcher stop function / Функция остановки наблюдателя */
  stopWatch: () => void
}

/** Dictionary of lazy items / Словарь ленивых элементов */
export type LazyList = Record<string, LazyItem>

/** Lazy tracking controller / Контроллер ленивого отслеживания */
export type UseLazyRef = {
  /** Native IntersectionObserver instance / Нативный экземпляр IntersectionObserver */
  intersectionObserver: IntersectionObserver | undefined

  /**
   * Gets a registration for an element, optionally selected by its status ref.
   *
   * Получает регистрацию элемента, при необходимости выбранную по её ref статуса.
   * @param element tracked element / отслеживаемый элемент
   * @param status status ref returned by addLazyItem / ref статуса, возвращённый addLazyItem
   * @returns matching registration or the first active one / нужная регистрация или первая активная
   */
  getItem(element?: HTMLElement, status?: ShallowRef<boolean>): LazyItem | undefined

  /**
   * Adding an element for tracking.
   *
   * Добавление элемента для отслеживания.
   * @param element element for tracking / элемент для отслеживания
   * @returns independent visibility status / независимый статус видимости
   */
  addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>

  /**
   * Removes all registrations of an element from tracking.
   *
   * Удаляет все регистрации элемента из отслеживания.
   * @param element tracked element / отслеживаемый элемент
   */
  removeLazyItem: (element?: HTMLElement) => void

  /**
   * Removing all elements from tracking.
   *
   * Удаление всех элементов из отслеживания.
   */
  disconnectLazy: () => void
}

/**
 * Hook for initializing the tracking of an element's appearance on the screen.
 * Registrations of the same element share observation and keep independent state and cleanup.
 *
 * Хук для инициализации отслеживания появления элемента на экране.
 * Регистрации одного элемента разделяют наблюдение, сохраняя независимое состояние и очистку.
 * @param options IntersectionObserver options / настройки IntersectionObserver
 * @returns lazy tracking controller / контроллер ленивого отслеживания
 */
export const useLazyRef = (
  options: IntersectionObserverInit = {
    rootMargin: '128px 0px'
  }
): UseLazyRef => {
  const list: Record<string, Set<LazyItem>> = {}
  const intersectionObserver = isDomRuntime() && 'IntersectionObserver' in window
    ? (
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = getElementId(entry.target as HTMLElement)

              list[id]?.forEach((item) => {
                item.status.value = entry.isIntersecting
                item.ratio.value = entry.intersectionRatio
                item.entry.value = entry
              })
            })
          },
          options
        )
      )
    : undefined

  /**
   * Removes all registrations of an element from tracking.
   *
   * Удаляет все регистрации элемента из отслеживания.
   * @param element tracked element / отслеживаемый элемент
   */
  const remove = (element?: HTMLElement): void => {
    if (element) {
      const id = getElementId(element)

      if (id in list) {
        list[id]?.forEach(item => item.stopWatch())
      }
    }
  }

  return {
    /** Native IntersectionObserver instance / Нативный экземпляр IntersectionObserver */
    intersectionObserver,

    /**
     * Gets a registration for an element, optionally selected by its status ref.
     *
     * Получает регистрацию элемента, при необходимости выбранную по её ref статуса.
     * @param element tracked element / отслеживаемый элемент
     * @param status status ref returned by addLazyItem / ref статуса, возвращённый addLazyItem
     * @returns matching registration or the first active one / нужная регистрация или первая активная
     */
    getItem(element?: HTMLElement, status?: ShallowRef<boolean>): LazyItem | undefined {
      if (!element) {
        return undefined
      }

      const id = getElementId(element)

      for (const item of list[id] ?? []) {
        if (!status || item.status === status) {
          return item
        }
      }

      return undefined
    },

    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking / элемент для отслеживания
     * @returns independent visibility status / независимый статус видимости
     */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean> {
      const status = shallowRef<boolean>(!intersectionObserver)

      if (intersectionObserver) {
        let stopWatch: (() => void) | undefined = undefined
        stopWatch = watch(element, (newElement, _, onCleanup) => {
          if (newElement) {
            const id = getElementId(newElement)
            const registrations = list[id] ?? new Set<LazyItem>()
            const previousRegistration = registrations.values().next().value

            const item: LazyItem = {
              status,
              ratio: shallowRef<number>(previousRegistration?.ratio.value ?? 0),
              entry: shallowRef(previousRegistration?.entry.value),
              stopWatch: () => stopWatch?.()
            }
            list[id] = registrations
            registrations.add(item)

            if (previousRegistration) {
              status.value = previousRegistration.status.value
            }

            if (registrations.size === 1) {
              intersectionObserver.observe(newElement)
            }

            onCleanup(() => {
              registrations.delete(item)

              if (registrations.size === 0) {
                intersectionObserver.unobserve(newElement)
                delete list[id]
              }
            })
          }
        }, { immediate: true })
      }

      return status
    },

    /**
     * Removes all registrations of an element from tracking.
     *
     * Удаляет все регистрации элемента из отслеживания.
     * @param element tracked element / отслеживаемый элемент
     */
    removeLazyItem: remove,

    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: (): void => intersectionObserver?.disconnect()
  }
}
