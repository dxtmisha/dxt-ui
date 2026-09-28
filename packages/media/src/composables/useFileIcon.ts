import { computed, toValue, type ComputedRef, type MaybeRefOrGetter } from 'vue'
import { MediaFile } from '../classes/MediaFile'

/**
 * Reactive composable to resolve the SVG icon for a file, path, or extension.
 *
 * Реактивный композабл для определения SVG иконки для файла, пути или расширения.
 * @param fileOrName reactive or static File object, path, URL, name, or extension / реактивный или статический объект File, путь, URL, имя или расширение
 * @param fallback default SVG icon string if not found / SVG иконка по умолчанию, если не найдена
 * @returns reactive SVG icon string / реактивная строка SVG иконки
 */
export function useFileIcon(
  fileOrName: MaybeRefOrGetter<File | string | undefined>,
  fallback?: string
): ComputedRef<string> {
  return computed(() => {
    const target = toValue(fileOrName)

    if (!target) {
      return fallback ?? new MediaFile('').icon
    }

    const pathOrName = typeof target !== 'string' ? (target.name || '') : target
    const mediaFile = new MediaFile(pathOrName)

    if (fallback && !mediaFile.item) {
      return fallback
    }

    return mediaFile.icon
  })
}
