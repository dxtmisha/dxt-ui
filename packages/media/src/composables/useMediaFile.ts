import { computed, toValue, type ComputedRef, type MaybeRefOrGetter } from 'vue'
import { MediaFile } from '../classes/MediaFile'
import type { MediaFileCategory, MediaFileItem } from '../types/fileTypes'

/**
 * Options for the useMediaFile composable /
 * Параметры для композабла useMediaFile
 */
export type UseMediaFileOptions = {
  /** Default fallback icon if not found / Иконка по умолчанию, если не найдена */
  fallbackIcon?: string
}

/**
 * Return type of the useMediaFile composable /
 * Тип возвращаемого значения композабла useMediaFile
 */
export type UseMediaFileReturn = {
  /** Reactive file instance or undefined / Реактивный экземпляр файла или undefined */
  file: ComputedRef<File | undefined>
  /** Full file name / Полное имя файла */
  name: ComputedRef<string>
  /** Base file name without extension / Базовое имя файла без расширения */
  baseName: ComputedRef<string>
  /** File extension in lowercase / Расширение файла в нижнем регистре */
  extension: ComputedRef<string>
  /** Resolved SVG icon string / Разрешенная строка SVG иконки */
  icon: ComputedRef<string>
  /** File category / Категория файла */
  category: ComputedRef<MediaFileCategory | undefined>
  /** File metadata item / Элемент метаданных файла */
  item: ComputedRef<MediaFileItem | undefined>
  /** True if the file is an image / True, если файл является изображением */
  isImage: ComputedRef<boolean>
  /** True if the file is a video / True, если файл является видео */
  isVideo: ComputedRef<boolean>
  /** True if the file is audio / True, если файл является аудио */
  isAudio: ComputedRef<boolean>
  /** True if the file is a document / True, если файл является документом */
  isDocument: ComputedRef<boolean>
  /** True if the file is an archive / True, если файл является архивом */
  isArchive: ComputedRef<boolean>
  /** True if the file is source code / True, если файл является исходным кодом */
  isCode: ComputedRef<boolean>
  /** True if the file is a table / True, если файл является таблицей */
  isTable: ComputedRef<boolean>
  /** True if the file is a presentation / True, если файл является презентацией */
  isPresentation: ComputedRef<boolean>
}

/**
 * Reactive composable for extracting file name, extension, category, and resolving SVG icon.
 *
 * Реактивный композабл для извлечения имени файла, расширения, категории и определения SVG иконки.
 * @param fileOrName reactive or static File object, path, URL, or name / реактивный или статический объект File, путь, URL или имя
 * @param options optional parameters / дополнительные параметры
 * @returns reactive file attributes and icon / реактивные атрибуты файла и иконка
 */
export function useMediaFile(
  fileOrName: MaybeRefOrGetter<File | string | undefined>,
  options?: UseMediaFileOptions
): UseMediaFileReturn {
  const resolvedTarget = computed(() => toValue(fileOrName))

  const file = computed<File | undefined>(() => {
    const target = resolvedTarget.value

    return typeof target !== 'string' ? target : undefined
  })

  const mediaFile = computed(() => {
    const target = resolvedTarget.value

    if (!target) {
      return new MediaFile('')
    }

    const pathOrName = typeof target !== 'string' ? (target.name || '') : target

    return new MediaFile(pathOrName)
  })

  const name = computed<string>(() => mediaFile.value.name)
  const baseName = computed<string>(() => mediaFile.value.baseName)
  const extension = computed<string>(() => mediaFile.value.extension)
  const icon = computed<string>(() => {
    if (options?.fallbackIcon && !mediaFile.value.item) {
      return options.fallbackIcon
    }

    return mediaFile.value.icon
  })
  const category = computed<MediaFileCategory | undefined>(() => mediaFile.value.category)
  const item = computed<MediaFileItem | undefined>(() => mediaFile.value.item)
  const isImage = computed<boolean>(() => mediaFile.value.isImage)
  const isVideo = computed<boolean>(() => mediaFile.value.isVideo)
  const isAudio = computed<boolean>(() => mediaFile.value.isAudio)
  const isDocument = computed<boolean>(() => mediaFile.value.isDocument)
  const isArchive = computed<boolean>(() => mediaFile.value.isArchive)
  const isCode = computed<boolean>(() => mediaFile.value.isCode)
  const isTable = computed<boolean>(() => mediaFile.value.isTable)
  const isPresentation = computed<boolean>(() => mediaFile.value.isPresentation)

  return {
    file,
    name,
    baseName,
    extension,
    icon,
    category,
    item,
    isImage,
    isVideo,
    isAudio,
    isDocument,
    isArchive,
    isCode,
    isTable,
    isPresentation
  }
}

