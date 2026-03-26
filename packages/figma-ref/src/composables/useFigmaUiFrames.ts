import { computed, shallowRef } from 'vue'
import { fetchTopLevelFrames, type UiFigmaFramesList } from '@dxtmisha/figma'

/** Cached list of top-level frames / Кэшированный список фреймов верхнего уровня */
const item = shallowRef<UiFigmaFramesList | undefined>()

/**
 * Indicates if a fetch operation is currently in progress /
 * Указывает, выполняется ли в данный момент операция получения
 */
const loading = shallowRef(false)

/**
 * Flag indicating that the first fetch operation has not yet been performed /
 * Флаг, указывающий, что первая операция получения еще не была выполнена
 */
let start: boolean = true

/**
 * Composable for managing and observing the list of top-level frames.
 *
 * Композабл для управления и наблюдения за списком фреймов верхнего уровня.
 * @returns An object containing the list of top-level frames and a loading state /
 * Объект, содержащий список фреймов верхнего уровня и состояние загрузки
 */
export function useFigmaUiFrames() {
  if (start) {
    start = false
    loading.value = true

    fetchTopLevelFrames((frames: UiFigmaFramesList) => {
      item.value = frames
      loading.value = false
    })
  }

  return {
    /** List of top-level frames / Список фреймов верхнего уровня */
    frames: computed<UiFigmaFramesList>(() => item.value ?? []),
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: computed(() => loading.value)
  }
}
