// ai-none

import { isString } from '@dxtmisha/functional'
import { ImageTypeValue } from './basicTypes'

/** Regular expression for the explicit image prefix / Регулярное выражение явного префикса изображения */
const REGEX_IMAGE_PREFIX = /^image:/
/** Regular expression for an explicit image source with a nonblank name / Регулярное выражение явного источника изображения с непустым именем */
const REGEX_IMAGE_SOURCE = /^image:\s*\S.*$/s

/**
 * Checks an explicitly marked image source and provides its type and unprefixed name separately.
 * Keeps an empty marked source distinct from an unrecognized value to prevent icon fallback.
 *
 * Проверяет явно обозначенный источник изображения и отдельно предоставляет его тип и имя без префикса.
 * Отличает пустой обозначенный источник от нераспознанного значения, чтобы исключить переход к иконке.
 */
export class ImageSource {
  /**
   * Checks whether a string has the explicit image source marker.
   *
   * Проверяет, содержит ли строка явный маркер источника изображения.
   * @param value source value / значение источника
   * @returns true when the image marker matches / true, если маркер изображения подходит
   */
  static is(value: unknown): value is string {
    return isString(value) && REGEX_IMAGE_PREFIX.test(value)
  }

  /**
   * Checks both the explicit marker and a nonblank image name.
   *
   * Проверяет явный маркер и непустое имя изображения.
   * @param value source value / значение источника
   * @returns true for a complete image source / true для полного источника изображения
   */
  static isValid(value: unknown): value is string {
    return isString(value) && REGEX_IMAGE_SOURCE.test(value)
  }

  /**
   * Returns the image name without its explicit marker.
   *
   * Возвращает имя изображения без явного маркера.
   * @param value source value / значение источника
   * @returns unprefixed name or undefined when the marker does not match / имя без префикса или undefined, если маркер не подходит
   */
  static getName(value: unknown): string | undefined {
    return this.is(value) ? value.replace(REGEX_IMAGE_PREFIX, '') : undefined
  }

  /**
   * Returns the type of a complete explicit image source.
   *
   * Возвращает тип полного явного источника изображения.
   * @param value source value / значение источника
   * @returns image type or undefined for an invalid source / тип изображения или undefined для неподходящего источника
   */
  static getType(value: unknown): ImageTypeValue.image | undefined {
    return this.isValid(value) ? ImageTypeValue.image : undefined
  }
}
