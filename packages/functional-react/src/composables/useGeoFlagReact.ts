import {
  useCallback,
  useMemo
} from 'react'
import {
  Geo,
  GeoFlag,
  type GeoFlagItem,
  type GeoFlagNational
} from '@dxtmisha/functional-basic'

import { getReact } from '../functions/ref/getReact'
import type { RefOrNormalReact } from '../types/refTypes'
import { useItemReact } from './useItemReact'

/**
 * React hook for working with geographic flag information and country metadata.
 * Integrates the GeoFlag class with React state and memoization for automatic re-renders on change.
 *
 * React-хук для работы с флагами стран и географической информацией.
 * Интегрирует класс GeoFlag с состоянием React и мемоизацией для автоматических перерендеров при изменении.
 * @param code country and language code / код страны и языка
 * @returns object with flag metadata, country information, and helper methods /
 * объект с метаданными флагов, информацией о стране и вспомогательными методами
 */
export function useGeoFlagReact(
  code?: RefOrNormalReact<string>
) {
  /** Reactive country and language code / Реактивный код страны и языка */
  const [currentCode] = useItemReact(code, value => value ?? Geo.getLocation())

  /** Memoized instance of the GeoFlag class / Мемоизированный экземпляр класса GeoFlag */
  const flag = useMemo(
    () => new GeoFlag(currentCode),
    [currentCode]
  )

  /** Current country code / Текущий код страны */
  const countryCode = useMemo(() => flag.getCode(), [flag])

  /** Current country flag item / Текущий элемент флага страны */
  const item = useMemo(() => flag.get(), [flag])

  /** Current language flag item / Текущий элемент флага языка */
  const language = useMemo(() => flag.getLanguage(), [flag])

  /** Current flag icon identifier / Текущий идентификатор иконки флага */
  const flagIcon = useMemo(() => flag.getFlag(), [flag])

  /**
   * Getting the country code.
   *
   * Получение кода страны.
   * @returns country code / код страны
   */
  const getCode = useCallback((): string => {
    return flag.getCode()
  }, [flag])

  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param targetCode country code / код страны
   * @returns country flag item or undefined / элемент флага страны или undefined
   */
  const get = useCallback((targetCode?: RefOrNormalReact<string>): GeoFlagItem | undefined => {
    const resolvedCode = targetCode !== undefined ? getReact(targetCode) : flag.getCode()
    return flag.get(resolvedCode)
  }, [flag])

  /**
   * Returns information about the language and its flag.
   *
   * Возвращает информацию о языке и его флаге.
   * @param targetCode country code / код страны
   * @returns language flag item or undefined / элемент флага языка или undefined
   */
  const getLanguage = useCallback((targetCode?: RefOrNormalReact<string>): GeoFlagItem | undefined => {
    const resolvedCode = targetCode !== undefined ? getReact(targetCode) : flag.getCode()
    return flag.getLanguage(resolvedCode)
  }, [flag])

  /**
   * Getting an identifier or link to the flag.
   *
   * Получение идентификатора или ссылки на флаг.
   * @param targetCode country code / код страны
   * @returns flag icon identifier or undefined / идентификатор иконки флага или undefined
   */
  const getFlag = useCallback((targetCode?: RefOrNormalReact<string>): string | undefined => {
    const resolvedCode = targetCode !== undefined ? getReact(targetCode) : flag.getCode()
    return flag.getFlag(resolvedCode)
  }, [flag])

  /**
   * Getting a list of countries by an array of codes.
   *
   * Получение списка стран по массиву с кодами.
   * @param codes list of country codes / список кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of country flag items / список элементов флагов стран
   */
  const getList = useCallback((
    codes?: RefOrNormalReact<string[] | undefined>,
    sort: boolean = true
  ): GeoFlagItem[] => {
    return flag.getList(getReact(codes), sort)
  }, [flag])

  /**
   * Getting a list of languages by an array of codes.
   *
   * Получение списка языков по массиву с кодами.
   * @param codes list of country codes / список кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of language flag items / список элементов флагов языков
   */
  const getListLanguage = useCallback((
    codes?: RefOrNormalReact<string[] | undefined>,
    sort: boolean = true
  ): GeoFlagItem[] => {
    return flag.getListLanguage(getReact(codes), sort)
  }, [flag])

  /**
   * Getting a list of countries by an array of codes in national language.
   *
   * Получение списка стран по массиву с кодами на национальном языке.
   * @param codes list of country codes / список кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of country flag items in national language / список элементов флагов стран на национальном языке
   */
  const getNational = useCallback((
    codes?: RefOrNormalReact<string[] | undefined>,
    sort: boolean = true
  ): GeoFlagNational[] => {
    return flag.getNational(getReact(codes), sort)
  }, [flag])

  /**
   * Getting a list of languages by an array of codes in national language.
   *
   * Получение списка языков по массиву с кодами на национальном языке.
   * @param codes list of country codes / список кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of language flag items in national language / список элементов флагов языков на национальном языке
   */
  const getNationalLanguage = useCallback((
    codes?: RefOrNormalReact<string[] | undefined>,
    sort: boolean = true
  ): GeoFlagNational[] => {
    return flag.getNationalLanguage(getReact(codes), sort)
  }, [flag])

  return {
    code: currentCode,
    flag,
    countryCode,
    item,
    language,
    flagIcon,
    getCode,
    get,
    getLanguage,
    getFlag,
    getList,
    getListLanguage,
    getNational,
    getNationalLanguage
  }
}
