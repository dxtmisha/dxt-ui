import { computed, shallowRef } from 'vue'
import { fetchFrameSelection, sendFrameSelection, type UiFigmaFramesList } from '@dxtmisha/figma'

/** Cached list of selected frames / Кэшированный список выбранных фреймов */
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
 * Composable for managing and observing the list of selected frames in Figma.
 *
 * Композабл для управления и наблюдения за списком выбранных фреймов в Figma.
 * @returns An object containing the list of selected frames and a loading state /
 * Объект, содержащий список выбранных фреймов и состояние загрузки
 */
export function useFigmaFrameSelection() {
  if (start) {
    start = false
    loading.value = true

    fetchFrameSelection((frames: UiFigmaFramesList) => {
      item.value = frames
      loading.value = false
    })
  }

  return {
    /** List of selected frames / Список выбранных фреймов */
    selection: computed<UiFigmaFramesList>(() => item.value ?? []),
    /**
     * Set the current selection in Figma / Установить текущее выделение в Figma
     * @param id Frame ID / ID фрейма
     */
    setSelection(id: string) {
      sendFrameSelection(id)
    },
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: computed(() => loading.value)
  }
}
