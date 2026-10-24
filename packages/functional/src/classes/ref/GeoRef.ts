import {
  computed,
  type ComputedRef,
  type Ref,
  shallowRef
} from 'vue'
import {
  Geo,
  type GeoItemFull,
  ServerStorage
} from '@dxtmisha/functional-basic'

/**
 * Static reactive facade for the current geographic context. It caches a shallow ref to `Geo.getItem()` and computed projections through `ServerStorage`.
 *
 * Статический реактивный фасад текущего географического контекста. Кэширует поверхностную ссылку на `Geo.getItem()` и вычисляемые проекции через `ServerStorage`.
 */
export class GeoRef {
  /**
   * Returns the cached geographic item ref.
   *
   * Возвращает кэшированную ссылку на географические данные.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  static get(): Ref<GeoItemFull> {
    return ServerStorage.get(
      '__ui:geo-ref__',
      () => shallowRef(Geo.getItem())
    )
  }

  /**
   * Returns the country code.
   *
   * Возвращает код страны.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  static getCountry(): ComputedRef<string> {
    return ServerStorage.get(
      '__ui:geo-ref-country__',
      () => computed<string>(() => this.get().value.country)
    )
  }

  /**
   * Returns the country metadata language.
   *
   * Возвращает язык из данных страны.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  static getLanguage(): ComputedRef<string> {
    return ServerStorage.get(
      '__ui:geo-ref-language__',
      () => computed<string>(() => this.get().value.language)
    )
  }

  /**
   * Returns the standard locale code.
   *
   * Возвращает стандартный код локали.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  static getStandard(): ComputedRef<string> {
    return ServerStorage.get(
      '__ui:geo-ref-standard__',
      () => computed<string>(() => this.get().value.standard)
    )
  }

  /**
   * Returns the first-weekday token from country metadata.
   *
   * Возвращает обозначение первого дня недели из данных страны.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  static getFirstDay(): ComputedRef<string> {
    return ServerStorage.get(
      '__ui:geo-ref-first-day__',
      () => computed<string>(() => this.get().value.firstDay)
    )
  }

  /**
   * Returns the current location locale.
   *
   * Возвращает текущую локаль местоположения.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  static getLocation(): ComputedRef<string> {
    return ServerStorage.get(
      '__ui:geo-ref-location__',
      () => computed<string>(() => this.get().value.location)
    )
  }

  /**
   * Returns the country segment of the requested location.
   *
   * Возвращает сегмент страны запрошенного местоположения.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  static getLocationCountry(): ComputedRef<string> {
    return ServerStorage.get(
      '__ui:geo-ref-location-country__',
      () => computed<string>(() => this.get().value.locationCountry)
    )
  }

  /**
   * Returns the language segment of the requested location.
   *
   * Возвращает языковой сегмент запрошенного местоположения.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  static getLocationLanguage(): ComputedRef<string> {
    return ServerStorage.get(
      '__ui:geo-ref-location-language__',
      () => computed<string>(() => this.get().value.locationLanguage)
    )
  }

  /**
   * Sets the current Geo locale with persistence enabled and replaces the reactive item.
   *
   * Устанавливает текущую локаль Geo с сохранением и заменяет реактивные данные.
   * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
   * @returns No return value. / Нет возвращаемого значения.
   */
  static set(code: string): void {
    Geo.set(code, true)
    this.get().value = Geo.getItem()
  }

  /**
   * Sets the Geo fallback code or factory and refreshes the reactive item from Geo.
   *
   * Устанавливает резервный код Geo либо фабрику и обновляет реактивные данные из Geo.
   * @param code Fallback locale code or factory. / Резервный код локали либо фабрика.
   * @returns No return value. / Нет возвращаемого значения.
   */
  static setValueDefault(code?: string | (() => string)): void {
    Geo.setValueDefault(code)
    this.get().value = Geo.getItem()
  }
}
