import { forEach } from '../functions/forEach'

import { Geo } from './Geo'
import { GeoIntl } from './GeoIntl'

import {
  type GeoFlagItem,
  type GeoFlagNational,
  type GeoItemFull
} from '../types/geoTypes'

export const GEO_FLAG_ICON_NAME = 'f'

/**
 * Class for working with flags and geographic information.
 * Provides methods for retrieving country names, languages, and flag icons.
 *
 * Класс для работы с флагами и географической информацией.
 * Предоставляет методы для получения названий стран, языков и иконок флагов.
 */
export class GeoFlag {
  /**
   * Mapping of country codes to flag icon names/
   * Словарь соответствия кодов стран названиям иконок флагов
   */
  static flags: Record<string, string> = {
    // Primary countries (origin of standard languages) /
    // Основные страны (родины стандартных языков)
    RU: `${GEO_FLAG_ICON_NAME}-ru`,
    FR: `${GEO_FLAG_ICON_NAME}-fr`,
    GB: `${GEO_FLAG_ICON_NAME}-gb`,
    US: `${GEO_FLAG_ICON_NAME}-us`,
    DE: `${GEO_FLAG_ICON_NAME}-de`,
    ES: `${GEO_FLAG_ICON_NAME}-es`,
    VN: `${GEO_FLAG_ICON_NAME}-vn`,
    CN: `${GEO_FLAG_ICON_NAME}-cn`,
    IT: `${GEO_FLAG_ICON_NAME}-it`,
    JP: `${GEO_FLAG_ICON_NAME}-jp`,
    KR: `${GEO_FLAG_ICON_NAME}-kr`,
    PT: `${GEO_FLAG_ICON_NAME}-pt`,
    TR: `${GEO_FLAG_ICON_NAME}-tr`,
    PL: `${GEO_FLAG_ICON_NAME}-pl`,
    NL: `${GEO_FLAG_ICON_NAME}-nl`,
    UA: `${GEO_FLAG_ICON_NAME}-ua`,
    BY: `${GEO_FLAG_ICON_NAME}-by`,
    KZ: `${GEO_FLAG_ICON_NAME}-kz`,
    GR: `${GEO_FLAG_ICON_NAME}-gr`,
    CZ: `${GEO_FLAG_ICON_NAME}-cz`,
    HU: `${GEO_FLAG_ICON_NAME}-hu`,
    RO: `${GEO_FLAG_ICON_NAME}-ro`,
    BG: `${GEO_FLAG_ICON_NAME}-bg`,
    HR: `${GEO_FLAG_ICON_NAME}-hr`,
    RS: `${GEO_FLAG_ICON_NAME}-rs`,
    SK: `${GEO_FLAG_ICON_NAME}-sk`,
    SI: `${GEO_FLAG_ICON_NAME}-si`,
    LT: `${GEO_FLAG_ICON_NAME}-lt`,
    LV: `${GEO_FLAG_ICON_NAME}-lv`,
    EE: `${GEO_FLAG_ICON_NAME}-ee`,
    FI: `${GEO_FLAG_ICON_NAME}-fi`,
    SE: `${GEO_FLAG_ICON_NAME}-se`,
    NO: `${GEO_FLAG_ICON_NAME}-no`,
    DK: `${GEO_FLAG_ICON_NAME}-dk`,
    IL: `${GEO_FLAG_ICON_NAME}-il`,
    TH: `${GEO_FLAG_ICON_NAME}-th`,
    ID: `${GEO_FLAG_ICON_NAME}-id`,
    MY: `${GEO_FLAG_ICON_NAME}-my`,
    PH: `${GEO_FLAG_ICON_NAME}-ph`,
    SA: `${GEO_FLAG_ICON_NAME}-sa`,
    IR: `${GEO_FLAG_ICON_NAME}-ir`,
    PK: `${GEO_FLAG_ICON_NAME}-pk`,
    AM: `${GEO_FLAG_ICON_NAME}-am`,
    GE: `${GEO_FLAG_ICON_NAME}-ge`,
    AZ: `${GEO_FLAG_ICON_NAME}-az`,
    TJ: `${GEO_FLAG_ICON_NAME}-tj`,
    KG: `${GEO_FLAG_ICON_NAME}-kg`,
    UZ: `${GEO_FLAG_ICON_NAME}-uz`,
    TM: `${GEO_FLAG_ICON_NAME}-tm`,
    MN: `${GEO_FLAG_ICON_NAME}-mn`,

    // Other countries /
    // Другие страны
    AD: `${GEO_FLAG_ICON_NAME}-ad`,
    AE: `${GEO_FLAG_ICON_NAME}-ae`,
    AF: `${GEO_FLAG_ICON_NAME}-af`,
    AG: `${GEO_FLAG_ICON_NAME}-ag`,
    AI: `${GEO_FLAG_ICON_NAME}-ai`,
    AL: `${GEO_FLAG_ICON_NAME}-al`,
    AN: `${GEO_FLAG_ICON_NAME}-an`,
    AO: `${GEO_FLAG_ICON_NAME}-ao`,
    AQ: `${GEO_FLAG_ICON_NAME}-aq`,
    AR: `${GEO_FLAG_ICON_NAME}-ar`,
    AS: `${GEO_FLAG_ICON_NAME}-as`,
    AT: `${GEO_FLAG_ICON_NAME}-at`,
    AU: `${GEO_FLAG_ICON_NAME}-au`,
    AW: `${GEO_FLAG_ICON_NAME}-aw`,
    BA: `${GEO_FLAG_ICON_NAME}-ba`,
    BB: `${GEO_FLAG_ICON_NAME}-bb`,
    BD: `${GEO_FLAG_ICON_NAME}-bd`,
    BE: `${GEO_FLAG_ICON_NAME}-be`,
    BF: `${GEO_FLAG_ICON_NAME}-bf`,
    BH: `${GEO_FLAG_ICON_NAME}-bh`,
    BI: `${GEO_FLAG_ICON_NAME}-bi`,
    BJ: `${GEO_FLAG_ICON_NAME}-bj`,
    BL: `${GEO_FLAG_ICON_NAME}-bl`,
    BM: `${GEO_FLAG_ICON_NAME}-bm`,
    BN: `${GEO_FLAG_ICON_NAME}-bn`,
    BO: `${GEO_FLAG_ICON_NAME}-bo`,
    BR: `${GEO_FLAG_ICON_NAME}-br`,
    BS: `${GEO_FLAG_ICON_NAME}-bs`,
    BT: `${GEO_FLAG_ICON_NAME}-bt`,
    BW: `${GEO_FLAG_ICON_NAME}-bw`,
    BZ: `${GEO_FLAG_ICON_NAME}-bz`,
    CA: `${GEO_FLAG_ICON_NAME}-ca`,
    CC: `${GEO_FLAG_ICON_NAME}-cc`,
    CD: `${GEO_FLAG_ICON_NAME}-cd`,
    CF: `${GEO_FLAG_ICON_NAME}-cf`,
    CG: `${GEO_FLAG_ICON_NAME}-cg`,
    CH: `${GEO_FLAG_ICON_NAME}-ch`,
    CI: `${GEO_FLAG_ICON_NAME}-ci`,
    CK: `${GEO_FLAG_ICON_NAME}-ck`,
    CL: `${GEO_FLAG_ICON_NAME}-cl`,
    CM: `${GEO_FLAG_ICON_NAME}-cm`,
    CO: `${GEO_FLAG_ICON_NAME}-co`,
    CR: `${GEO_FLAG_ICON_NAME}-cr`,
    CU: `${GEO_FLAG_ICON_NAME}-cu`,
    CV: `${GEO_FLAG_ICON_NAME}-cv`,
    CW: `${GEO_FLAG_ICON_NAME}-cw`,
    CX: `${GEO_FLAG_ICON_NAME}-cx`,
    CY: `${GEO_FLAG_ICON_NAME}-cy`,
    DJ: `${GEO_FLAG_ICON_NAME}-dj`,
    DM: `${GEO_FLAG_ICON_NAME}-dm`,
    DZ: `${GEO_FLAG_ICON_NAME}-dz`,
    EC: `${GEO_FLAG_ICON_NAME}-ec`,
    EG: `${GEO_FLAG_ICON_NAME}-eg`,
    EH: `${GEO_FLAG_ICON_NAME}-eh`,
    ER: `${GEO_FLAG_ICON_NAME}-er`,
    ET: `${GEO_FLAG_ICON_NAME}-et`,
    FJ: `${GEO_FLAG_ICON_NAME}-fj`,
    FK: `${GEO_FLAG_ICON_NAME}-fk`,
    FM: `${GEO_FLAG_ICON_NAME}-fm`,
    FO: `${GEO_FLAG_ICON_NAME}-fo`,
    GA: `${GEO_FLAG_ICON_NAME}-ga`,
    GD: `${GEO_FLAG_ICON_NAME}-gd`,
    GF: `${GEO_FLAG_ICON_NAME}-gf`,
    GG: `${GEO_FLAG_ICON_NAME}-gg`,
    GH: `${GEO_FLAG_ICON_NAME}-gh`,
    GI: `${GEO_FLAG_ICON_NAME}-gi`,
    GL: `${GEO_FLAG_ICON_NAME}-gl`,
    GM: `${GEO_FLAG_ICON_NAME}-gm`,
    GN: `${GEO_FLAG_ICON_NAME}-gn`,
    GQ: `${GEO_FLAG_ICON_NAME}-gq`,
    GT: `${GEO_FLAG_ICON_NAME}-gt`,
    GU: `${GEO_FLAG_ICON_NAME}-gu`,
    GW: `${GEO_FLAG_ICON_NAME}-gw`,
    GY: `${GEO_FLAG_ICON_NAME}-gy`,
    HK: `${GEO_FLAG_ICON_NAME}-hk`,
    HN: `${GEO_FLAG_ICON_NAME}-hn`,
    HT: `${GEO_FLAG_ICON_NAME}-ht`,
    IE: `${GEO_FLAG_ICON_NAME}-ie`,
    IM: `${GEO_FLAG_ICON_NAME}-im`,
    IO: `${GEO_FLAG_ICON_NAME}-io`,
    IQ: `${GEO_FLAG_ICON_NAME}-iq`,
    IS: `${GEO_FLAG_ICON_NAME}-is`,
    JE: `${GEO_FLAG_ICON_NAME}-je`,
    JM: `${GEO_FLAG_ICON_NAME}-jm`,
    JO: `${GEO_FLAG_ICON_NAME}-jo`,
    KE: `${GEO_FLAG_ICON_NAME}-ke`,
    KH: `${GEO_FLAG_ICON_NAME}-kh`,
    KI: `${GEO_FLAG_ICON_NAME}-ki`,
    KM: `${GEO_FLAG_ICON_NAME}-km`,
    KN: `${GEO_FLAG_ICON_NAME}-kn`,
    KP: `${GEO_FLAG_ICON_NAME}-kp`,
    KW: `${GEO_FLAG_ICON_NAME}-kw`,
    KY: `${GEO_FLAG_ICON_NAME}-ky`,
    LA: `${GEO_FLAG_ICON_NAME}-la`,
    LB: `${GEO_FLAG_ICON_NAME}-lb`,
    LC: `${GEO_FLAG_ICON_NAME}-lc`,
    LI: `${GEO_FLAG_ICON_NAME}-li`,
    LK: `${GEO_FLAG_ICON_NAME}-lk`,
    LR: `${GEO_FLAG_ICON_NAME}-lr`,
    LS: `${GEO_FLAG_ICON_NAME}-ls`,
    LU: `${GEO_FLAG_ICON_NAME}-lu`,
    LY: `${GEO_FLAG_ICON_NAME}-ly`,
    MA: `${GEO_FLAG_ICON_NAME}-ma`,
    MC: `${GEO_FLAG_ICON_NAME}-mc`,
    MD: `${GEO_FLAG_ICON_NAME}-md`,
    ME: `${GEO_FLAG_ICON_NAME}-me`,
    MF: `${GEO_FLAG_ICON_NAME}-mf`,
    MG: `${GEO_FLAG_ICON_NAME}-mg`,
    MH: `${GEO_FLAG_ICON_NAME}-mh`,
    MK: `${GEO_FLAG_ICON_NAME}-mk`,
    ML: `${GEO_FLAG_ICON_NAME}-ml`,
    MM: `${GEO_FLAG_ICON_NAME}-mm`,
    MO: `${GEO_FLAG_ICON_NAME}-mo`,
    MP: `${GEO_FLAG_ICON_NAME}-mp`,
    MQ: `${GEO_FLAG_ICON_NAME}-mq`,
    MR: `${GEO_FLAG_ICON_NAME}-mr`,
    MS: `${GEO_FLAG_ICON_NAME}-ms`,
    MT: `${GEO_FLAG_ICON_NAME}-mt`,
    MU: `${GEO_FLAG_ICON_NAME}-mu`,
    MV: `${GEO_FLAG_ICON_NAME}-mv`,
    MW: `${GEO_FLAG_ICON_NAME}-mw`,
    MX: `${GEO_FLAG_ICON_NAME}-mx`,
    MZ: `${GEO_FLAG_ICON_NAME}-mz`,
    NA: `${GEO_FLAG_ICON_NAME}-na`,
    NC: `${GEO_FLAG_ICON_NAME}-nc`,
    NE: `${GEO_FLAG_ICON_NAME}-ne`,
    NF: `${GEO_FLAG_ICON_NAME}-nf`,
    NG: `${GEO_FLAG_ICON_NAME}-ng`,
    NI: `${GEO_FLAG_ICON_NAME}-ni`,
    NP: `${GEO_FLAG_ICON_NAME}-np`,
    NR: `${GEO_FLAG_ICON_NAME}-nr`,
    NU: `${GEO_FLAG_ICON_NAME}-nu`,
    NZ: `${GEO_FLAG_ICON_NAME}-nz`,
    OM: `${GEO_FLAG_ICON_NAME}-om`,
    PA: `${GEO_FLAG_ICON_NAME}-pa`,
    PE: `${GEO_FLAG_ICON_NAME}-pe`,
    PF: `${GEO_FLAG_ICON_NAME}-pf`,
    PG: `${GEO_FLAG_ICON_NAME}-pg`,
    PM: `${GEO_FLAG_ICON_NAME}-pm`,
    PN: `${GEO_FLAG_ICON_NAME}-pn`,
    PR: `${GEO_FLAG_ICON_NAME}-pr`,
    PS: `${GEO_FLAG_ICON_NAME}-ps`,
    PW: `${GEO_FLAG_ICON_NAME}-pw`,
    PY: `${GEO_FLAG_ICON_NAME}-py`,
    QA: `${GEO_FLAG_ICON_NAME}-qa`,
    RE: `${GEO_FLAG_ICON_NAME}-re`,
    RW: `${GEO_FLAG_ICON_NAME}-rw`,
    SB: `${GEO_FLAG_ICON_NAME}-sb`,
    SC: `${GEO_FLAG_ICON_NAME}-sc`,
    SD: `${GEO_FLAG_ICON_NAME}-sd`,
    SG: `${GEO_FLAG_ICON_NAME}-sg`,
    SH: `${GEO_FLAG_ICON_NAME}-sh`,
    SJ: `${GEO_FLAG_ICON_NAME}-sj`,
    SL: `${GEO_FLAG_ICON_NAME}-sl`,
    SM: `${GEO_FLAG_ICON_NAME}-sm`,
    SN: `${GEO_FLAG_ICON_NAME}-sn`,
    SO: `${GEO_FLAG_ICON_NAME}-so`,
    SR: `${GEO_FLAG_ICON_NAME}-sr`,
    SS: `${GEO_FLAG_ICON_NAME}-ss`,
    ST: `${GEO_FLAG_ICON_NAME}-st`,
    SV: `${GEO_FLAG_ICON_NAME}-sv`,
    SX: `${GEO_FLAG_ICON_NAME}-sx`,
    SY: `${GEO_FLAG_ICON_NAME}-sy`,
    SZ: `${GEO_FLAG_ICON_NAME}-sz`,
    TC: `${GEO_FLAG_ICON_NAME}-tc`,
    TD: `${GEO_FLAG_ICON_NAME}-td`,
    TG: `${GEO_FLAG_ICON_NAME}-tg`,
    TK: `${GEO_FLAG_ICON_NAME}-tk`,
    TL: `${GEO_FLAG_ICON_NAME}-tl`,
    TN: `${GEO_FLAG_ICON_NAME}-tn`,
    TO: `${GEO_FLAG_ICON_NAME}-to`,
    TT: `${GEO_FLAG_ICON_NAME}-tt`,
    TV: `${GEO_FLAG_ICON_NAME}-tv`,
    TW: `${GEO_FLAG_ICON_NAME}-tw`,
    TZ: `${GEO_FLAG_ICON_NAME}-tz`,
    UG: `${GEO_FLAG_ICON_NAME}-ug`,
    UY: `${GEO_FLAG_ICON_NAME}-uy`,
    VA: `${GEO_FLAG_ICON_NAME}-va`,
    VC: `${GEO_FLAG_ICON_NAME}-vc`,
    VE: `${GEO_FLAG_ICON_NAME}-ve`,
    VG: `${GEO_FLAG_ICON_NAME}-vg`,
    VI: `${GEO_FLAG_ICON_NAME}-vi`,
    VU: `${GEO_FLAG_ICON_NAME}-vu`,
    WF: `${GEO_FLAG_ICON_NAME}-wf`,
    WS: `${GEO_FLAG_ICON_NAME}-ws`,
    YE: `${GEO_FLAG_ICON_NAME}-ye`,
    YT: `${GEO_FLAG_ICON_NAME}-yt`,
    ZA: `${GEO_FLAG_ICON_NAME}-za`,
    ZM: `${GEO_FLAG_ICON_NAME}-zm`,
    ZW: `${GEO_FLAG_ICON_NAME}-zw`
  }

  /**
   * Constructor
   *
   * Конструктор
   * @param code country and language code / код страны и языка
   */
  constructor(
    protected code: string = Geo.getLocation()
  ) {
  }

  /**
   * Returns information about the country and its flag.
   *
   * Возвращает информацию о стране и её флаге.
   * @param code country code / код страны
   * @returns country information / информация о стране
   */
  get(code: string = this.getCode()): GeoFlagItem | undefined {
    const data = Geo.find(code)

    if (data) {
      const country = this.getCountry(data)

      return {
        language: this.getLanguageName(data),
        languageCode: data.language,
        country,
        countryCode: data.country,
        standard: data.standard,
        icon: GeoFlag.flags?.[data.country],
        label: country,
        value: data.country,
        phoneCode: data.phoneCode
      }
    }

    return undefined
  }

  /**
   * Returns information about the language and its flag.
   *
   * Возвращает информацию о языке и его флаге.
   * @param code country code / код страны
   * @returns language information / информация о языке
   */
  getLanguage(code: string = this.getCode()): GeoFlagItem | undefined {
    const item = this.get(code)

    if (item) {
      return {
        ...item,
        label: item.language,
        value: item.languageCode
      }
    }

    return undefined
  }

  /**
   * Returns the country code.
   *
   * Возвращает код страны.
   * @returns country code / код страны
   */
  getCode(): string {
    return this.code || Geo.getLocation()
  }

  /**
   * Returns the identifier of the flag icon.
   *
   * Возвращает идентификатор иконки флага.
   * @param code country code / код страны
   * @returns flag icon identifier / идентификатор иконки флага
   */
  getFlag(code: string = this.getCode()): string | undefined {
    return this.get(code)?.icon
  }

  /**
   * Returns a list of countries based on the provided codes.
   * If no codes are provided, returns all available countries.
   *
   * Возвращает список стран на основе предоставленных кодов.
   * Если коды не переданы, возвращает все доступные страны.
   * @param codes array of country codes / массив кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of countries / список стран
   */
  getList(codes?: string[], sort: boolean = true): GeoFlagItem[] {
    const list = forEach(this.getCodes(codes), code => this.get(code)) as GeoFlagItem[]

    if (sort) {
      return new GeoIntl().sort(list, (a: any, b: any) => [a.label, b.label])
    }

    return list
  }

  /**
   * Returns a list of languages based on the provided codes.
   * If no codes are provided, returns all available languages.
   *
   * Возвращает список языков на основе предоставленных кодов.
   * Если коды не переданы, возвращает все доступные языки.
   * @param codes array of country codes / массив кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of languages / список языков
   */
  getListLanguage(codes?: string[], sort: boolean = true): GeoFlagItem[] {
    const list: GeoFlagItem[] = []
    const cache = new Set<string>()

    forEach(this.getCodes(codes), (code) => {
      const item = this.getLanguage(code)

      if (
        item
        && !cache.has(item.value)
      ) {
        list.push(item)
        cache.add(item.value)
      }
    })

    if (sort) {
      return new GeoIntl().sort(list, (a: any, b: any) => [a.label, b.label])
    }

    return list
  }

  /**
   * Returns a list of countries in their national languages.
   *
   * Возвращает список стран на их национальных языках.
   * @param codes array of country codes / массив кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of countries with national names / список стран с национальными названиями
   */
  getNational(codes?: string[], sort: boolean = true): GeoFlagNational[] {
    const list = forEach(this.getList(codes, false), (item) => {
      const geo = new GeoFlag(item.standard).get(item.standard)

      return {
        ...item,
        description: geo?.country,
        nationalLanguage: geo?.language,
        nationalCountry: geo?.country
      }
    }) as GeoFlagNational[]

    if (sort) {
      return new GeoIntl().sort(list, (a: any, b: any) => [a.label, b.label])
    }

    return list
  }

  /**
   * Returns a list of languages in their national names.
   *
   * Возвращает список языков на их национальных названиях.
   * @param codes array of country codes / массив кодов стран
   * @param sort whether to sort the list / сортировать ли список
   * @returns list of languages with national names / список языков с национальными названиями
   */
  getNationalLanguage(codes?: string[], sort: boolean = true): GeoFlagNational[] {
    const list = forEach(this.getListLanguage(codes, false), (item) => {
      const geo = new GeoFlag(item.standard).getLanguage(item.standard)

      return {
        ...item,
        description: geo?.language,
        nationalLanguage: geo?.language,
        nationalCountry: geo?.country
      }
    }) as GeoFlagNational[]

    if (sort) {
      return new GeoIntl().sort(list, (a: any, b: any) => [a.label, b.label])
    }

    return list
  }

  /**
   * Changes the current locale/location.
   *
   * Изменяет текущую локаль/местоположение.
   * @param code country and language code / код страны и языка
   * @returns this
   */
  setCode(code: string): this {
    this.code = code
    return this
  }

  /**
   * Returns a special object for formatting and translations.
   *
   * Возвращает специальный объект для работы с форматированием и переводами.
   * @protected
   * @returns GeoIntl instance / экземпляр GeoIntl
   */
  protected getLocation() {
    return new GeoIntl(this.code)
  }

  /**
   * Returns a list of country codes to retrieve data from.
   *
   * Возвращает список кодов стран для получения данных.
   * @param codes optional array of codes / опциональный массив кодов
   * @protected
   * @returns array of codes / массив кодов
   */
  protected getCodes(codes?: string[]): string[] {
    return codes ?? Object.keys(GeoFlag.flags)
  }

  /**
   * Getting the name of the language.
   *
   * Получение названия языка.
   * @param data object with information of data/ объект с информацией данных
   */
  protected getLanguageName(data: GeoItemFull): string {
    return this.getLocation().languageName(data.language)
  }

  /**
   * Getting the name of the country.
   *
   * Получение названия страны.
   * @param data object with information of data/ объект с информацией данных
   */
  protected getCountry(data: GeoItemFull): string {
    return this.getLocation().countryName(data.country)
  }
}
