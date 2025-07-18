/**
 * File location of the design system configuration/
 * Файл расположения конфигурации дизайн-системы
 */
export const UI_CONFIG_FILE = 'design.config.json'

export const UI_PROJECT_NAME = '@dxt-ui'
export const UI_PROJECT_CONSTRUCTOR_NAME = 'constructor'
export const UI_PROJECT_CONSTRUCTOR_FULL_NAME = `${UI_PROJECT_NAME}/${UI_PROJECT_CONSTRUCTOR_NAME}`

export const UI_MODULES = 'node_modules'

/**
 * Name of the base token/ Название базового токена
 */
export const UI_KEY_CONSTRUCTOR = 'd'
/**
 * Special key for properties with variable values/
 * Особый ключ для свойства с переменными значениями
 */
export const UI_KEY_CUSTOM = 'custom'

/**
 * Признак того, что не нужно экспортировать этот файл/
 * An indicator that this file should not be exported
 */
export const UI_FLAG_NOT_EXPORT = /\/\/ *export:none/

/**
 * Folder where all the code is stored/ Папка, где хранится весь код
 */
export const UI_DIR_IN = 'src'
export const UI_DIR_COMPONENTS = 'components'
export const UI_DIR_CONSTRUCTOR = 'constructors'
export const UI_DIR_STRUCTURE = 'structure'

/**
 * Name of the path to tokens/ Название пути к токенам
 */
export const UI_DIRS_TOKENS = [UI_DIR_IN, 'media']
/**
 * Directory containing the list of icons/ Директория со списком иконок
 */
export const UI_DIRS_ICONS = [...UI_DIRS_TOKENS, 'icons']
/**
 * Directory with the list of components/ Директория со списком компонентов
 */
export const UI_DIRS_COMPONENTS = [UI_DIR_IN, UI_DIR_COMPONENTS]
export const UI_DIRS_CONSTRUCTOR = [UI_DIR_IN, UI_DIR_CONSTRUCTOR]
/**
 * Name of the path to styles/ Название пути к стилям
 */
export const UI_DIRS_STYLES = [UI_DIR_IN, 'styles']
/**
 * Directory for storing generated files for working with libraries/
 * Директория для хранения сгенерируемых файлов для работы с библиотеками
 */
export const UI_DIRS_LIBRARY = [UI_DIR_IN, 'library']

/**
 * Directory for storing component structure descriptions/
 * Директория для хранения описания структуры компонентов
 */
export const UI_DIRS_WIKI = [UI_DIR_IN, 'wiki']

/**
 * File with the list of exportable data/ Файл со списком экспортируемых данных
 */
export const UI_DIRS_FILE_EXPORT = [UI_DIR_IN, 'library.ts']

/**
 * List of directories available for export/ Список директорий, доступных для экспорта
 */
export const UI_DIRS_LIST_EXPORT = [
  'classes',
  'components',
  'composables',
  'functions',
  'types'
]

export const UI_FILE_PACKAGE = 'package.json'
/**
 * Name of the main file with tokens/ Название главного файла с токенами
 */
export const UI_FILE_PROPERTY = 'properties.json'

/**
 * File name for storing the list of flags/ Название файла для хранения списка флагов
 */
export const UI_FILE_NAME_FLAGS = 'flags'

/**
 * File name for storing media data and icons/ Название файла для хранения медиа-данных и иконок
 */
export const UI_FILE_NAME_MEDIA = 'media'

/**
 * File name for the list of component descriptions for the wiki/
 * Название файла для список описаний компонентов для wiki
 */
export const UI_FILE_NAME_WIKI = 'wiki'

export const UI_EXTENSION_STYLE = 'scss'

/**
 * File name with class names for the component structure/
 * Название файла с классами для структуры компонента
 */
export const UI_STRUCTURE_CLASSES = 'classes'

/**
 * List available for addition to props/ Список доступный для добавления в props
 */
export const UI_PROPERTY_FOR_PROPS: string[] = [
  'disabled',
  'focus',
  'readonly',
  'read-only'
]
