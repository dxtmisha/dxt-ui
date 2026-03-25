import { computed, shallowRef } from 'vue'
import { fetchTopLevelFrames, type UiFigmaFramesList } from '@dxtmisha/figma'

/** Cached list of top-level frames / Кэшированный список фреймов верхнего уровня */
const item = shallowRef<UiFigmaFramesList | undefined>()

/**
 * Composable for managing and observing the list of top-level frames.
 *
 * Композабл для управления и наблюдения за списком фреймов верхнего уровня.
 * @returns An object containing the list of top-level frames and a loading state /
 * Объект, содержащий список фреймов верхнего уровня и состояние загрузки
 */
export function useFigmaUiFrames() {
  /** Computed list of top-level frames / Вычисляемый список фреймов верхнего уровня */
  const frames = computed<UiFigmaFramesList>(() => item.value ?? [])

  /**
   * Indicates if a fetch operation is currently in progress /
   * Указывает, выполняется ли в данный момент операция получения
   */
  const loading = shallowRef(false)

  if (!item.value) {
    loading.value = true
    fetchTopLevelFrames((frames: UiFigmaFramesList) => {
      item.value = frames
      loading.value = false
    })
  }

  return {
    frames,
    loading
  }
}
