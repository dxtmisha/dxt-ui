import { ServerStorage } from '@dxtmisha/functional-basic'
import { useLazyRef } from './useLazyRef'
import type { RefType } from '../../types/refTypes'

export type LazyItemByMargin = {
  rootMargin: string
  item: any
}

/**
 * Returns a list of lazy items by margin for the current request context.
 *
 * Возвращает список ленивых элементов по отступу для контекста текущего запроса.
 */
const getItems = () => {
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
const getItemByMargin = (rootMargin: string) => {
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
 *
 * Хук для инициализации отслеживания появления элемента на экране по отступу.
 * @param element element for tracking/ элемента для отслеживания
 * @param rootMargin root margin for IntersectionObserver/ отступ для IntersectionObserver
 */
export const useLazyItemByMarginRef = (
  element: RefType<HTMLElement | undefined>,
  rootMargin: string
) => {
  const observer = getItemByMargin(rootMargin)
  const status = observer.addLazyItem(element)

  return {
    /** Lazy item status/ Статус ленивого элемента */
    lazyItemStatus: status,

    /**
     * Getting a tracked lazy item.
     *
     * Получение отслеживаемого ленивого элемента.
     */
    get lazyItem() {
      return observer.getItem(element.value)
    }
  }
}
