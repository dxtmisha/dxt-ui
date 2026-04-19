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
 * Reactive class for working with geographic data.
 *
 * Реактивный класс для работы с географическими данными.
 */
export class GeoRef {
  private static readonly country = computed<string>(() => this.get().value.country)
  private static readonly language = computed<string>(() => this.get().value.language)
  private static readonly standard = computed<string>(() => this.get().value.standard)
  private static readonly firstDay = computed<string>(() => this.get().value.firstDay)

  /**
   * Information about the current country.
   *
   * Информация об текущей стране.
   * @returns reactive object with full geographic information/ реактивный объект с полной географической информацией
   */
  static get(): Ref<GeoItemFull> {
    return ServerStorage.get(
      '__ui:geo-ref__',
      () => shallowRef(Geo.getItem())
    )
  }

  /**
   * Current country.
   *
   * Текущая страна.
   * @returns reactive string with the current country code/ реактивная строка с кодом текущей страны
   */
  static getCountry(): ComputedRef<string> {
    return this.country
  }

  /**
   * Current language.
   *
   * Текущий язык.
   * @returns reactive string with the current language code/ реактивная строка с кодом текущего языка
   */
  static getLanguage(): ComputedRef<string> {
    return this.language
  }

  /**
   * Full format according to the standard.
   *
   * Полный формат согласно стандарту.
   * @returns reactive string with the full standard locale format/
   * реактивная строка с полным форматом стандарта локали
   */
  static getStandard(): ComputedRef<string> {
    return this.standard
  }

  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   * @returns reactive string representing the first day of the week/
   * реактивная строка, представляющая первый день недели
   */
  static getFirstDay(): ComputedRef<string> {
    return this.firstDay
  }

  /**
   * Changes the data by the full code.
   *
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static set(code: string): void {
    Geo.set(code, true)
    this.get().value = Geo.getItem()
  }
}
