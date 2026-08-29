// export:none

import { strFill } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'

import { UI_DIRS_STYLES } from '../../config'

/** Default 2-space indentation string / Строка отступа по умолчанию из двух пробелов */
const SPACE = '  '

/**
 * Utility helper class providing static formatting, path resolution, and SCSS directive generators.
 *
 * Вспомогательный класс с набором статических методов для форматирования, разрешения путей и генерации директив SCSS.
 */
export class StylesTool {
  /**
   * Resolves the target directory path array for storing style files.
   *
   * Получение массива сегментов директории для хранения файлов стилей.
   * @returns array of directory path segments / массив сегментов пути к директории
   */
  static getDir(): string[] {
    return [...UI_DIRS_STYLES, PropertiesConfig.getProjectName()]
  }

  /**
   * Returns the base indentation string.
   *
   * Возвращает базовую строку отступа.
   * @returns space string / строка пробелов
   */
  static getSpace(): string {
    return SPACE
  }

  /**
   * Generates indentation string corresponding to the given nesting level.
   *
   * Генерирует строку отступа, соответствующую заданному уровню вложенности.
   * @param level indentation level / уровень отступа
   * @returns indented string / строка с отступом
   */
  static addSpace(level: number): string {
    return strFill(SPACE, level)
  }

  /**
   * Generates an `@import` SCSS directive for the given path.
   *
   * Генерирует директиву `@import` SCSS для указанного пути.
   * @param path target file path / путь к целевому файлу
   * @returns formatted import directive string / форматированная строка директивы импорта
   */
  static addImport(path: string): string {
    return `@import "${path}";`
  }

  /**
   * Generates a `@use` SCSS directive for the given path.
   *
   * Генерирует директиву `@use` SCSS для указанного пути.
   * @param path target file path / путь к целевому файлу
   * @returns formatted use directive string / форматированная строка директивы use
   */
  static addUse(path: string): string {
    return `@use "${path}";`
  }

  /**
   * Generates a `@forward` SCSS directive for the given path.
   *
   * Генерирует директиву `@forward` SCSS для указанного пути.
   * @param path target file path / путь к целевому файлу
   * @returns formatted forward directive string / форматированная строка директивы forward
   */
  static addForward(path: string): string {
    return `@forward "${path}";`
  }

  /**
   * Generates a standardized `@use` import for the `@dxtmisha/styles` package namespace.
   *
   * Генерирует стандартизированный импорт `@use` для пространства имен пакета `@dxtmisha/styles`.
   * @returns formatted SCSS use declaration / форматированное объявление SCSS use
   */
  static addImportProperties(): string {
    return '@use "@dxtmisha/styles" as ui;'
  }

  /**
   * Joins an array of code lines into a single multiline string with Windows/standard line breaks (`\r\n`).
   *
   * Объединяет массив строк кода в единую многострочную строку с переносами строк (`\r\n`).
   * @param data array of code lines / массив строк кода
   * @returns joined multiline string / объединенная многострочная строка
   */
  static join(data: string[]): string {
    return data.join('\r\n')
  }

  /**
   * Increases the given indentation string by one level of space.
   *
   * Увеличивает переданную строку отступа на один дополнительный уровень пробелов.
   * @param space current indentation string / текущая строка отступа
   * @returns incremented indentation string / увеличенная строка отступа
   */
  static increaseSpace(space: string): string {
    return `${space}${SPACE}`
  }

  /**
   * Formats function call expressions in CSS values into SCSS interpolation syntax (`#{$1}`).
   *
   * Форматирует вызовы функций в CSS-значениях в синтаксис SCSS-интерполяции (`#{$1}`).
   * @param value raw CSS/SCSS value / исходное значение CSS/SCSS
   * @returns formatted CSS value string / форматированная строка значения CSS
   */
  static toFunctionCss(value: string): string {
    if (value.match(/@[a-zA-Z0-9.]+\(.*?\)( |,|$)/)) {
      return value
        .replace(/@([a-zA-Z0-9.]+\(.*?\))( |,|$)/g, '#{$1}$2')
    }

    return value
  }
}
