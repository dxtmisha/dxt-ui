import type { PropertiesFilePath } from '../classes/Properties/PropertiesFile'

/**
 * Library component data with design and path information.
 *
 * Данные компонента библиотеки с информацией о дизайне и путях.
 */
export type LibraryData = {
  /** Design system name / Название дизайн-системы */
  design: string

  /** Component name / Название компонента */
  name: string

  /** Component alias / Псевдоним компонента */
  alias: string

  /** Full component code or identifier / Полный код или идентификатор компонента */
  codeFull: string

  /** Component directory / Директория компонента */
  dir: string
}

/**
 * Library item containing library name and its associated component collection.
 *
 * Элемент библиотеки, содержащий имя библиотеки и связанную коллекцию компонентов.
 */
export type LibraryItem = {
  /** Library name / Название библиотеки */
  name: string

  /** Array of components / Массив компонентов */
  components: LibraryData[]
}

/**
 * List of all library items across the design system.
 *
 * Список всех элементов библиотек дизайн-системы.
 */
export type LibraryAll = LibraryItem[]

/**
 * Library files group containing name, directory path, and list of files.
 *
 * Группа файлов библиотеки, содержащая имя, путь к директории и список файлов.
 */
export type LibraryFilesItem = {
  /** File group name / Название группы файлов */
  name: string

  /** File directory path / Путь к директории файлов */
  path: PropertiesFilePath

  /** Array of file names / Массив имён файлов */
  files: string[]
}

/**
 * Collection of library file groups.
 *
 * Коллекция групп файлов библиотеки.
 */
export type LibraryFiles = LibraryFilesItem[]

/**
 * Library icon item containing name, filesystem path, and SVG value/content.
 *
 * Элемент иконки библиотеки, содержащий имя, путь к файлу и SVG-содержимое/значение.
 */
export type LibraryIconItem = {
  /** Icon name / Название иконки */
  name: string

  /** Icon file path / Путь к файлу иконки */
  path: string

  /** Icon value or SVG content / Значение или SVG-содержимое иконки */
  value: string
}
