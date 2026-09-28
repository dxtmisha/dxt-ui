import { computed, toValue, type ComputedRef, type MaybeRefOrGetter } from 'vue'
import { MediaFile } from '../classes/MediaFile'

/**
 * Return type of the useFileName composable /
 * Тип возвращаемого значения композабла useFileName
 */
export type UseFileNameReturn = {
  /** Full file name / Полное имя файла */
  name: ComputedRef<string>
  /** Base file name without extension / Базовое имя файла без расширения */
  baseName: ComputedRef<string>
  /** File extension in lowercase / Расширение файла в нижнем регистре */
  extension: ComputedRef<string>
}

/**
 * Reactive composable to extract file name, base name without extension, and extension.
 *
 * Реактивный композабл для извлечения имени файла, базового имени без расширения и расширения.
 * @param fileOrName reactive or static File object, path, URL, or name / реактивный или статический объект File, путь, URL или имя
 * @returns reactive name, baseName, and extension / реактивные name, baseName и extension
 */
export function useFileName(
  fileOrName: MaybeRefOrGetter<File | string | undefined>
): UseFileNameReturn {
  const mediaFile = computed(() => {
    const target = toValue(fileOrName)

    if (!target) {
      return new MediaFile('')
    }

    const pathOrName = typeof target !== 'string' ? (target.name || '') : target

    return new MediaFile(pathOrName)
  })

  const name = computed<string>(() => mediaFile.value.name)
  const baseName = computed<string>(() => mediaFile.value.baseName)
  const extension = computed<string>(() => mediaFile.value.extension)

  return {
    name,
    baseName,
    extension
  }
}
