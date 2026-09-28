/**
 * Supported file categories / Поддерживаемые категории файлов
 */
export enum MediaFileCategory {
  /** Archive files / Файлы архивов */
  archive = 'archive',
  /** Audio files / Аудио файлы */
  audio = 'audio',
  /** Source code files / Файлы исходного кода */
  code = 'code',
  /** Configuration files / Файлы конфигурации */
  config = 'config',
  /** Database files / Файлы баз данных */
  database = 'database',
  /** Text document files / Текстовые документы */
  document = 'document',
  /** Executable and installer files / Исполняемые файлы и установщики */
  executable = 'executable',
  /** Folder items / Папки */
  folder = 'folder',
  /** Font files / Файлы шрифтов */
  font = 'font',
  /** Raster image files / Растровые изображения */
  image = 'image',
  /** Presentation files / Файлы презентаций */
  presentation = 'presentation',
  /** System and generic files / Системные и общие файлы */
  system = 'system',
  /** Table and spreadsheet files / Таблицы и электронные таблицы */
  table = 'table',
  /** Plain text and markdown files / Простой текст и markdown */
  text = 'text',
  /** Vector graphics files / Векторная графика */
  vector = 'vector',
  /** Video files / Видео файлы */
  video = 'video'
}

/** Type of file category value / Тип значения категории файла */
export type MediaFileCategoryValue = `${MediaFileCategory}` | MediaFileCategory

/**
 * Interface describing a file icon item /
 * Интерфейс, описывающий элемент иконки файла
 */
export type MediaFileItem = {
  /** File type code / Код типа файла */
  code: string
  /** Display label / Отображаемое название */
  name: string
  /** Imported SVG icon URL or content / Импортированный URL или содержимое SVG иконки */
  icon: string
  /** Category grouping / Группировка по категории */
  category?: MediaFileCategoryValue
}

/** List of file configurations / Список конфигураций файлов */
export type MediaFileList = MediaFileItem[]

/**
 * Dictionary mapping file codes and extensions to their SVG icons /
 * Словарь сопоставления кодов и расширений файлов с их SVG иконками
 */
export type MediaFileIcons = Record<string, string>
