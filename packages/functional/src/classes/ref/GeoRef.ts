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

import { EffectScopeGlobal } from './EffectScopeGlobal'

/**
 * Static reactive facade for the current geographic context. It caches a shallow ref to `Geo.get()` and computed projections through `ServerStorage`.
 *
 * Статический реактивный фасад текущего географического контекста. Кэширует поверхностную ссылку на `Geo.get()` и вычисляемые проекции через `ServerStorage`.
 */
export class GeoRef {
  /**
   * Returns the cached geographic item ref.
   *
   * Возвращает кэшированную ссылку на географические данные.
   * @returns Reactive reference to full geographic metadata. / Реактивная ссылка на полные географические метаданные.
   */
  static get(): Ref<GeoItemFull> {
    return ServerStorage.get(
      '__ui:geo-ref__',
      () => shallowRef(Geo.get())
    )
  }

  /**
   * Sets the current Geo locale with persistence enabled and replaces the reactive item.
   *
   * Устанавливает текущую локаль Geo с сохранением и заменяет реактивные данные.
   * @param code Locale, country or language code. / Код локали, страны или языка.
   * @returns No return value. / Нет возвращаемого значения.
   */
  static set(code: string): void {
    Geo.set(code, true)
    this.get().value = Geo.get()
  }

  /**
   * Returns the country code.
   *
   * Возвращает код страны.
   * @returns Computed reference to the country code. / Вычисляемая ссылка на код страны.
   */
  static getCountry(): ComputedRef<string> {
    return this.getProjection('__ui:geo-ref-country__', 'country')
  }

  /**
   * Returns the first-weekday token from country metadata.
   *
   * Возвращает обозначение первого дня недели из данных страны.
   * @returns Computed reference to the first day of the week token. / Вычисляемая ссылка на обозначение первого дня недели.
   */
  static getFirstDay(): ComputedRef<string> {
    return this.getProjection('__ui:geo-ref-first-day__', 'firstDay')
  }

  /**
   * Returns the country metadata language.
   *
   * Возвращает язык из данных страны.
   * @returns Computed reference to the country language code. / Вычисляемая ссылка на код языка страны.
   */
  static getLanguage(): ComputedRef<string> {
    return this.getProjection('__ui:geo-ref-language__', 'language')
  }

  /**
   * Returns the current location locale.
   *
   * Возвращает текущую локаль местоположения.
   * @returns Computed reference to the active location string. / Вычисляемая ссылка на строку текущего местоположения.
   */
  static getLocation(): ComputedRef<string> {
    return this.getProjection('__ui:geo-ref-location__', 'location')
  }

  /**
   * Returns the country segment of the requested location.
   *
   * Возвращает сегмент страны запрошенного местоположения.
   * @returns Computed reference to the location country segment. / Вычисляемая ссылка на сегмент страны местоположения.
   */
  static getLocationCountry(): ComputedRef<string> {
    return this.getProjection('__ui:geo-ref-location-country__', 'locationCountry')
  }

  /**
   * Returns the language segment of the requested location.
   *
   * Возвращает языковой сегмент запрошенного местоположения.
   * @returns Computed reference to the location language segment. / Вычисляемая ссылка на языковой сегмент местоположения.
   */
  static getLocationLanguage(): ComputedRef<string> {
    return this.getProjection('__ui:geo-ref-location-language__', 'locationLanguage')
  }

  /**
   * Returns the standard locale code.
   *
   * Возвращает стандартный код локали.
   * @returns Computed reference to the standard locale code. / Вычисляемая ссылка на стандартный код локали.
   */
  static getStandard(): ComputedRef<string> {
    return this.getProjection('__ui:geo-ref-standard__', 'standard')
  }

  /**
   * Sets the Geo fallback code or factory and refreshes the reactive item from Geo.
   *
   * Устанавливает резервный код Geo либо фабрику и обновляет реактивные данные из Geo.
   * @param code Fallback locale code or factory. / Резервный код локали либо фабрика.
   * @returns No return value. / Нет возвращаемого значения.
   */
  static setValueDefault(code?: string | (() => string | undefined)): void {
    Geo.setValueDefault(code)
    this.get().value = Geo.get()
  }

  /**
   * Returns a cached computed projection for the specified geographic property.
   *
   * Возвращает кэшированную вычисляемую проекцию для указанного географического свойства.
   * @template K Property key type in GeoItemFull / Тип ключа свойства в GeoItemFull
   * @param key Storage key for caching. / Ключ хранилища для кэширования.
   * @param property Property name in GeoItemFull. / Имя свойства в GeoItemFull.
   * @returns Computed reference to the projected property. / Вычисляемая ссылка на спроецированное свойство.
   */
  private static getProjection<K extends keyof GeoItemFull>(
    key: string,
    property: K
  ): ComputedRef<GeoItemFull[K]> {
    return ServerStorage.get(
      key,
      () => EffectScopeGlobal.run(() => computed(() => this.get().value[property]))!
    )
  }
}
