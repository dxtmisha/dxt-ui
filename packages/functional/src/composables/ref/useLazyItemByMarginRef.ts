import { effectScope } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { useLazyRef, type LazyItem } from './useLazyRef'
import type { RefType } from '../../types/refTypes'

export type LazyItemByMargin = {
  rootMargin: string
  item: ReturnType<typeof useLazyRef>
}

/**
 * Returns a list of lazy items by margin for the current request context.
 *
 * Возвращает список ленивых элементов по отступу для контекста текущего запроса.
 */
const getItems = (): LazyItemByMargin[] => {
  return ServerStorage.get<LazyItemByMargin[]>(
    '__ui:lazy-item-by-margin-ref__',
    () => []
  )
}

/**
 * Getting a lazy item by root margin.
 *
 * Получение ленивого элемента по отступу.
 * @param rootMargin root margin for IntersectionObserver/ отступ для IntersectionObserver
 */
const getItemByMargin = (rootMargin: string): ReturnType<typeof useLazyRef> => {
  const items = getItems()
  const item = items.find(item => item.rootMargin === rootMargin)

  if (item) {
    return item.item
  }

  const newItem = useLazyRef({ rootMargin })
  items.push({ rootMargin, item: newItem })

  return newItem
}

/**
 * Hook for initializing the tracking of an element's appearance on the screen by margin.
 * Multiple registrations of the same element share the observer and are released independently.
 *
 * Хук для инициализации отслеживания появления элемента на экране по отступу.
 * Несколько регистраций одного элемента используют общий observer и освобождаются независимо.
 * @param element element for tracking / элемент для отслеживания
 * @param rootMargin root margin for IntersectionObserver / отступ для IntersectionObserver
 */
export const useLazyItemByMarginRef = (
  element: RefType<HTMLElement | undefined>,
  rootMargin: string = '128px 0px'
) => {
  const observer = getItemByMargin(rootMargin)
  const scope = effectScope()
  const status = scope.run(() => observer.addLazyItem(element))!

  /**
   * Releases only this registration from tracking.
   *
   * Освобождает только текущую регистрацию из отслеживания.
   */
  const removeLazyItem = (): void => {
    scope.stop()
  }

  return {
    /** Lazy item status / Статус ленивого элемента */
    lazyItemStatus: status,

    /**
     * Gets the tracking state owned by this registration.
     *
     * Получает состояние отслеживания текущей регистрации.
     * @returns owned active registration / собственная активная регистрация
     */
    get lazyItem(): LazyItem | undefined {
      return observer.getItem(element.value, status)
    },

    /**
     * Releases only this registration from tracking.
     *
     * Освобождает только текущую регистрацию из отслеживания.
     */
    removeLazyItem
  }
}
