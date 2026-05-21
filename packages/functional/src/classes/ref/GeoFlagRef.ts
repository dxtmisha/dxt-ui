import {
  computed,
  type ComputedRef,
  type Ref,
  watch
} from 'vue'
import { Geo, GeoFlag, type GeoFlagItem, type GeoFlagNational } from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { toRefItem } from '../../functions/ref/toRefItem'

import type { RefOrNormal } from '../../types/refTypes'

/**
 * Class for working with Flags.
 *
 * Класс для работы с Флагами.
 */
export class GeoFlagRef {
  protected code: Ref<string>
  protected flag: GeoFlag

  /**
   * Constructor
   * @param code country and language code/ код страны и языка
   */
  constructor(
    code: RefOrNormal<string> = Geo.getLocation()
  ) {
    this.code = toRefItem(code)
    this.flag = new GeoFlag(this.code.value)

    watch(this.code, value => this.flag.setCode(value))
  }

  /**
   * Obtaining a reactive object with the country code.
   *
   * Получение реактивного объекта с кодом страны.
   */
  getCode(): Ref<string> {
    return this.code
  }

  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code/ код страны
   */
  get(code: RefOrNormal<string> = this.code.value): ComputedRef<GeoFlagItem | undefined> {
    return computed(() => this.flag.get(getRef(code)))
  }

  /**
   * Getting a link to the flag.
   *
   * Получение ссылки на флаг.
   * @param code country code/ код страны
   */
  getFlag(code: RefOrNormal<string> = this.code.value): ComputedRef<string | undefined> {
    return computed(() => this.flag.get(getRef(code))?.icon)
  }

  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes country code/ код страны
   */
  getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]> {
    return computed(() => this.flag.getList(getRef(codes)))
  }

  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальный язык.
   * @param codes country code/ код страны.
   */
  getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]> {
    return computed(() => this.flag.getNational(getRef(codes)))
  }
}
