import {
  computed,
  type ComputedRef
} from 'vue'
import {
  Geo,
  GeoFlag,
  type GeoFlagItem,
  type GeoFlagNational
} from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'

import type { RefOrNormal } from '../../types/refTypes'

/**
 * Class for working with Flags.
 *
 * Класс для работы с Флагами.
 */
export class GeoFlagRef {
  /** Instance for working with flags / Экземпляр для работы с флагами */
  protected flag: ComputedRef<GeoFlag>

  /**
   * Constructor.
   *
   * Конструктор.
   * @param code country and language code / код страны и языка
   */
  constructor(
    code: RefOrNormal<string | undefined> = Geo.getLocation()
  ) {
    this.flag = computed(() => new GeoFlag(getRef(code)))
  }

  /**
   * Getting the country code.
   *
   * Получение кода страны.
   * @returns country code / код страны
   */
  getCode(): string {
    return this.flag.value.getCode()
  }

  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code / код страны
   * @returns reactive object with country information / реактивный объект с информацией о стране
   */
  get(code: RefOrNormal<string> = this.getCode()): ComputedRef<GeoFlagItem | undefined> {
    return computed(() => this.flag.value.get(getRef(code)))
  }

  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code / код страны
   * @returns reactive link to the flag / реактивная ссылка на флаг
   */
  getFlag(code: RefOrNormal<string> = this.getCode()): ComputedRef<string | undefined> {
    return computed(() => this.flag.value.getFlag(getRef(code)))
  }

  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes list of country codes / список кодов стран
   * @returns reactive list of country flag items / реактивный список элементов флагов стран
   */
  getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]> {
    return computed(() => this.flag.value.getList(getRef(codes)))
  }

  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальном языке.
   * @param codes list of country codes / список кодов стран
   * @returns reactive list of country flag items in national language / реактивный список элементов флагов стран на национальном языке
   */
  getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]> {
    return computed(() => this.flag.value.getNational(getRef(codes)))
  }
}
