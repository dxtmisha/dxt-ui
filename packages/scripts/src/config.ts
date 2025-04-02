/**
 * File location of the design system configuration
 *
 * Файл расположения конфигурации дизайн-системы
 */
export const DESIGN_UI_FILE_CONFIG_NAME = 'design.config.json'

export const DESIGN_DIR_CONSTRUCTOR = 'constructors'
export const DESIGN_DIR_STRUCTURE = 'structure'
export const DESIGN_FILE_CLASSES = 'classes'

/**
 * List available for addition to props.
 *
 * Список доступный для добавления в props.
 */
export const DESIGN_PROPERTY_TO_PROPS: string[] = [
  'disabled',
  'focus',
  'readonly',
  'read-only'
]

/**
 * File name for storing imported data: tokens with all the data needed for the script to work
 *
 * Название файла для хранения импортируемых данных: токены со всеми данными для работы скрипта
 */
export const PROPERTY_CACHE_FILE = 'properties'

/**
 * Folder with all temporary files
 *
 * Папка со всеми временными файлами
 */
export const PROPERTY_CACHE_DIR_READ = 'read'

/**
 * Folder where all the code is stored
 *
 * Папка, где хранится весь код
 */
export const PROPERTY_DIR_IN = 'src'

/**
 * Name of the path to tokens
 *
 * Название пути к токенам
 */
export const PROPERTY_DIR_MAIN = [PROPERTY_DIR_IN, 'media']

/**
 * Name of the main file with tokens
 *
 * Название главного файла с токенами
 */
export const PROPERTY_FILE_MAIN = 'properties.json'

/**
 * Special key for properties with variable values
 *
 * Особый ключ для свойства с переменными значениями
 */
export const PROPERTY_KEY_CUSTOM = 'custom'

/**
 * Name of the base token
 *
 * Название базового токена
 */
export const PROPERTY_CONSTRUCTOR_BASIC_NAME = 'd'

/**
 * Name of the path to styles
 *
 * Название пути к стилям
 */
export const STYLES_DIR_MAIN = [PROPERTY_DIR_IN, 'styles']
export const STYLES_FILE_EXTENSION = 'scss'

/**
 * Directory for storing generated files for working with libraries
 *
 * Директория для хранения сгенерируемых файлов для работы с библиотеками
 */
export const LIBRARY_DIR = [PROPERTY_DIR_IN, 'library']

/**
 * Directory with the list of components
 *
 * Директория со списком компонентов
 */
export const LIBRARY_DIR_COMPONENTS = [PROPERTY_DIR_IN, 'components']

/**
 * File with the list of exportable data
 *
 * Файл со списком экспортируемых данных
 */
export const LIBRARY_FILE_EXPORT = [PROPERTY_DIR_IN, 'library.ts']

/**
 * List of directories available for export
 *
 * Список директорий, доступных для экспорта
 */
export const LIBRARY_EXPORT_LIST = [
  'classes',
  'composables',
  'functions',
  'types'
]
