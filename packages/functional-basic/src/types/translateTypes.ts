/**
 * Interface for the functional plugin options /
 * Интерфейс для опций функционального плагина
 */
export type TranslateConfig = {
  /** URL to the translations script / URL к скрипту переводов */
  url?: string
  /** Property name for translations / Имя свойства для переводов */
  propsName?: string
  /** Read translations from API / Читать переводы из API */
  readApi?: boolean
}

/**
 * Translation code or a list of translation codes for template replacement/
 * Код перевода или список кодов для замены шаблона
 */
export type TranslateCode = string | string[]

/**
 * Object with translated strings, where the keys are the names of the translation codes/
 * Объект с переведенными строками, где ключи — имена кодов переводов
 */
export type TranslateList<T extends TranslateCode[]> = {
  [K in T[number]as K extends readonly string[] ? K[0] : K]: string
}

/**
 * Return type for translation retrieval: an object if a list was requested, or a string for a single key/
 * Тип возвращаемого значения для получения перевода: объект, если был запрошен список, или строка для одного ключа
 */
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string

/**
 * A simple key-value record of translations from a file/
 * Простой рекорд «ключ-значение» с переводами из файла
 */
export type TranslateDataFileList = Record<string, string>

/**
 * Asynchronous loader function for a translation file/
 * Асинхронная функция-загрузчик для файла перевода
 */
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>

/**
 * A mapping of locale strings to their respective translation file loaders/
 * Сопоставление строк локалей и соответствующих им загрузчиков файлов перевода
 */
export type TranslateDataFile = Record<string, TranslateDataFileItem>

/**
 * Prefix for global translations/
 * Префикс для глобальных переводов
 */
export const TRANSLATE_GLOBAL_PREFIX = 'global'

/**
 * Request timeout for batch loading (ms)/
 * Таймаут запроса для пакетной загрузки (мс)
 */
export const TRANSLATE_TIME_OUT = 160
