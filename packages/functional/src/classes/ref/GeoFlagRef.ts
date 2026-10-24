import {
  computed,
  type ComputedRef
} from 'vue'
import {
  GeoFlag,
  type GeoFlagItem,
  type GeoFlagNational
} from '@dxtmisha/functional-basic'

import { GeoRef } from './GeoRef'
import { getRef } from '../../functions/ref/getRef'

import type { RefOrNormal } from '../../types/refTypes'

/**
 * Reactive wrapper around `GeoFlag` for country and language metadata and flag icon identifiers. The internal base instance follows the supplied code ref or the current `GeoRef` location.
 *
 * Реактивная обёртка над `GeoFlag` для данных стран, языков и идентификаторов иконок флагов. Базовый экземпляр следует переданной ссылке на код либо текущему местоположению `GeoRef`.
 */
export class GeoFlagRef {
  /** Instance for working with flags / Экземпляр для работы с флагами */
  protected flag: ComputedRef<GeoFlag>

  /**
   * Initializes GeoFlagRef with the supplied configuration.
   *
   * Инициализирует GeoFlagRef с переданными настройками.
   * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
   */
  constructor(
    code?: RefOrNormal<string | undefined>
  ) {
    this.flag = computed(() => new GeoFlag(getRef(code) ?? GeoRef.getLocation().value))
  }

  /**
   * Returns the current base code as a string.
   *
   * Возвращает текущий базовый код строкой.
   * @returns Requested name or identifier. / Запрошенное имя либо идентификатор.
   */
  getCode(): string {
    return this.flag.value.getCode()
  }

  /**
   * Returns the country metadata for the explicit code or current base code.
   *
   * Возвращает данные страны по явному либо текущему базовому коду.
   * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined> {
    return computed(() => this.flag.value.get(getRef(code)))
  }

  /**
   * Returns language metadata for the explicit code or current base code.
   *
   * Возвращает данные языка по явному либо текущему базовому коду.
   * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined> {
    return computed(() => this.flag.value.getLanguage(getRef(code)))
  }

  /**
   * Returns the flag icon identifier for the explicit code or current base code.
   *
   * Возвращает идентификатор флага по явному либо текущему базовому коду.
   * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined> {
    return computed(() => this.flag.value.getFlag(getRef(code)))
  }

  /**
   * Returns country flag items, optionally filtered by reactive codes.
   *
   * Возвращает флаги стран с необязательной фильтрацией реактивным списком кодов.
   * @param codes Optional list of country/language codes. / Необязательный список кодов стран/языков.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]> {
    return computed(() => this.flag.value.getList(getRef(codes)))
  }

  /**
   * Returns language flag items, optionally filtered by reactive codes.
   *
   * Возвращает флаги языков с необязательной фильтрацией реактивным списком кодов.
   * @param codes Optional list of country/language codes. / Необязательный список кодов стран/языков.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]> {
    return computed(() => this.flag.value.getListLanguage(getRef(codes)))
  }

  /**
   * Returns country names in national languages.
   *
   * Возвращает названия стран на национальных языках.
   * @param codes Optional list of country/language codes. / Необязательный список кодов стран/языков.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]> {
    return computed(() => this.flag.value.getNational(getRef(codes)))
  }

  /**
   * Returns language names in national languages.
   *
   * Возвращает названия языков на национальных языках.
   * @param codes Optional list of country/language codes. / Необязательный список кодов стран/языков.
   * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
   */
  getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]> {
    return computed(() => this.flag.value.getNationalLanguage(getRef(codes)))
  }
}
