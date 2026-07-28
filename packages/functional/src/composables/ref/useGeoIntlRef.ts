import { GeoIntlRef } from '../../classes/ref/GeoIntlRef'

/**
 * Returns a class object for working with data formatting.
 *
 * Возвращает объект класса для работы с форматированием данных.
 *
 * @remarks
 * Avoid using this reactive composable if reactive updates are not required.
 * For non-reactive formatting, use the standard `GeoIntl` class from `@dxtmisha/functional-basic`.
 *
 * Старайтесь избегать этого хука, если не требуется реактивная переменная.
 * Для нереактивного форматирования используйте обычный `GeoIntl` из `@dxtmisha/functional-basic`.
 */
export function useGeoIntlRef(): GeoIntlRef {
  return new GeoIntlRef()
}
