import { computed, shallowRef } from 'vue'
import { fetchFramesSelected } from '@dxtmisha/figma'

/** Cached list of selected frames / Кэшированный список выбранных фреймов */
const item = shallowRef<string[] | undefined>()

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
 * Composable for managing and observing the list of selected frames in the Figma UI.
 *
 * Композабл для управления и наблюдения за списком выбранных фреймов в интерфейсе Figma.
 * @returns An object containing the list of selected frame IDs, a loading state, and utility functions /
 * Объект, содержащий список ID выбранных фреймов, состояние загрузки и вспомогательные функции
 */
export function useFigmaUiSelected() {
  if (start) {
    start = false
    loading.value = true

    fetchFramesSelected((selected: string[]) => {
      item.value = selected
      loading.value = false
    })
  }

  return {
    /** List of selected frame IDs / Список ID выбранных фреймов */
    selected: computed<string[]>(() => item.value ?? []),
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading,

    /**
     * Checks if a frame with the given ID is selected /
     * Проверяет, выбран ли фрейм с указанным ID
     * @param id Frame ID / ID фрейма
     * @returns Computed boolean value / Вычисляемое логическое значение
     */
    isSelected(id: string) {
      return computed(() => item.value?.includes(id))
    }
  }
}
