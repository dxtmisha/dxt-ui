import type { PropertiesFilePath } from '../classes/Properties/PropertiesFile'

/** Library component data with design information / Данные компонента библиотеки с информацией о дизайне */
export type LibraryData = {
  /** Design system name / Название дизайн-системы */
  design: string
  /** Component name / Название компонента */
  name: string
  /** Component alias / Псевдоним компонента */
  alias: string
  /** Full component code / Полный код компонента */
  codeFull: string
  /** Component directory / Директория компонента */
  dir: string
}

/** Library item containing name and list of components / Элемент библиотеки содержащий имя и список компонентов */
export type LibraryItem = {
  /** Library name / Название библиотеки */
  name: string
  /** Array of components / Массив компонентов */
  components: LibraryData[]
}

/** List of library items / Список элементов библиотеки */
export type LibraryList = LibraryItem[]

/** Library files item with name, path and file list / Элемент файлов библиотеки с именем, путём и списком файлов */
export type LibraryFilesItem = {
  /** File group name / Название группы файлов */
  name: string
  /** File path / Путь к файлу */
  path: PropertiesFilePath
  /** Array of file names / Массив имён файлов */
  files: string[]
}

/** Collection of library files / Коллекция файлов библиотеки */
export type LibraryFiles = LibraryFilesItem[]

/** Library icon item with name, path and value / Элемент иконки библиотеки с именем, путём и значением */
export type LibraryIconItem = {
  /** Icon name / Название иконки */
  name: string
  /** Icon file path / Путь к файлу иконки */
  path: string
  /** Icon value or content / Значение или содержимое иконки */
  value: string
}

/** Library component item with name and regex / Элемент компонента библиотеки с именем и регулярным выражением */
export type LibraryComponentItem = {
  /** Component name / Название компонента */
  name: string
  /** Regular expression for component search / Регулярное выражение для поиска компонента */
  reg: RegExp
}

/** List of library components by key / Список компонентов библиотеки по ключу */
export type LibraryComponentList = Record<string, LibraryComponentItem>

/** List of library component imports / Список импортов компонентов библиотеки */
export type LibraryComponentImports = LibraryComponentItem[]
