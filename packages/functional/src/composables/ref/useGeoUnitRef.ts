import { GeoUnitRef } from '../../classes/ref/GeoUnitRef'

/**
 * Returns a class object for working with unit formatting and automatic conversions.
 *
 * Возвращает объект класса для работы с форматированием единиц измерения и автоматической конвертацией.
 */
export function useGeoUnitRef(): GeoUnitRef {
  return new GeoUnitRef()
}
