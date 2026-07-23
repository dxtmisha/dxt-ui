/**
 * Union type for date format options in geographic context /
 * Объединенный тип для опций формата даты в географическом контексте
 */
export type GeoDate
  = 'full'
    | 'datetime'
    | 'date'
    | 'year-month'
    | 'year'
    | 'month'
    | 'day'
    | 'day-month'
    | 'time'
    | 'hour-minute'
    | 'hour'
    | 'minute'
    | 'second'

/** First day of week code (0 = Sunday, 1 = Monday, 6 = Saturday) / Код первого дня недели (0 = воскресенье, 1 = понедельник, 6 = суббота) */
export type GeoFirstDay = 1 | 6 | 0

/** Hour format type (12-hour or 24-hour) / Тип формата часов (12-часовой или 24-часовой) */
export type GeoHours = '12' | '24'

/** Timezone display style options / Опции стиля отображения часового пояса */
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC'

/** Geographic item interface for country and language data / Интерфейс географического элемента для данных страны и языка */
export interface GeoItem {
  /** Country code / Код страны */
  country: string
  /** Alternative country codes / Альтернативные коды стран */
  countryAlternative?: string[]
  /** Language code / Код языка */
  language: string
  /** Alternative language codes / Альтернативные коды языков */
  languageAlternative?: string[]
  /** First day of week / Первый день недели */
  firstDay?: string | null
  /** Timezone / Часовой пояс */
  zone?: string | null
  /** Phone country code / Телефонный код страны */
  phoneCode?: string
  /** Phone code for domestic calls / Телефонный код для внутренних звонков */
  phoneWithin?: string
  /** Phone number mask / Маска телефонного номера */
  phoneMask?: string | string[]
  /** Name format pattern / Шаблон формата имени */
  nameFormat?: 'fl' | 'fsl' | 'lf' | 'lsf' | string

  /** Units of measurement configuration / Конфигурация единиц измерения */
  unit?: {
    /** Millimeter unit format or symbol / Формат или символ единицы измерения миллиметра */
    'millimeter'?: string
    /** Centimeter unit format or symbol / Формат или символ единицы измерения сантиметра */
    'centimeter'?: string
    /** Meter unit format or symbol / Формат или символ единицы измерения метра */
    'meter'?: string
    /** Kilometer unit format or symbol / Формат или символ единицы измерения километра */
    'kilometer'?: string

    /** Square meter unit format or symbol / Формат или символ единицы измерения квадратного метра */
    'square-meter'?: string
    /** Hectare unit format or symbol / Формат или символ единицы измерения гектара */
    'hectare'?: string

    /** Gram unit format or symbol / Формат или символ единицы измерения грамма */
    'gram'?: string
    /** Kilogram unit format or symbol / Формат или символ единицы измерения килограмма */
    'kilogram'?: string
    /** Tonne unit format or symbol / Формат или символ единицы измерения тонны */
    'tonne'?: string

    /** Milliliter unit format or symbol / Формат или символ единицы измерения миллилитра */
    'milliliter'?: string
    /** Liter unit format or symbol / Формат или символ единицы измерения литра */
    'liter'?: string

    /** Celsius unit format or symbol / Формат или символ единицы измерения градуса Цельсия */
    'celsius'?: string

    /** Kilometer per hour unit format or symbol / Формат или символ единицы измерения километра в час */
    'kilometer-per-hour'?: string
  }
}

/** Extended geographic item with required fields / Расширенный географический элемент с обязательными полями */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
  /** Standard locale code / Стандартный код локали */
  standard: string
  /** First day of week (required) / Первый день недели (обязательный) */
  firstDay: string

  /** Current location string / Строка текущего местоположения */
  location: string
  /** Current country code from location / Текущий код страны из местоположения */
  locationCountry: string
  /** Current language code from location / Текущий код языка из местоположения */
  locationLanguage: string
}

/** Geographic flag item for country flag display / Элемент географического флага для отображения флага страны */
export interface GeoFlagItem {
  /** Language name / Название языка */
  language: string
  /** Language code / Код языка */
  languageCode: string
  /** Country name / Название страны */
  country: string
  /** Country code / Код страны */
  countryCode: string
  /** Standard locale code / Стандартный код локали */
  standard: string
  /** Flag icon identifier / Идентификатор иконки флага */
  icon?: string
  /** Display label / Отображаемая метка */
  label: string
  /** Value for selection / Значение для выбора */
  value: string
  /** Phone country code / Телефонный код страны */
  phoneCode?: string
}

/**
 * Extended geographic flag item with national language information /
 * Расширенный элемент географического флага с информацией о национальном языке
 */
export interface GeoFlagNational extends GeoFlagItem {
  /** Description in national language / Описание на национальном языке */
  description: string
  /** Language name in national language / Название языка на национальном языке */
  nationalLanguage: string
  /** Country name in national language / Название страны на национальном языке */
  nationalCountry: string
}

/** Phone configuration metadata for a country / Структура метаданных для конфигурации телефона страны */
export interface GeoPhoneValue {
  /** Phone country code (e.g., 7) / Телефонный код страны (например, 7) */
  phone: number
  /** Internal dialing rule code / Код внутреннего правила набора */
  within: number
  /** Array of mask patterns assigned to the country / Массив паттернов масок, закрепленных за страной */
  mask: string[]
  /** Country identifier (ISO 3166) / Идентификатор страны (ISO 3166) */
  value: string
}

/** Node in the internal phone prefix tree (Trie) / Узел внутреннего префиксного дерева телефонов (Trie) */
export interface GeoPhoneMap {
  /** List of all items available in this branch of the tree / Список всех элементов, доступных в данной ветви дерева */
  items: GeoPhoneValue[]
  /** Phone metadata if the current node is a complete code / Метаданные телефона, если текущий узел является завершенным кодом */
  info: GeoPhoneValue | undefined
  /** Country identifier for this node / Идентификатор страны для данного узла */
  value: string | undefined
  /** Array of masks with substituted internal symbols / Массив масок с подставленными спецсимволами */
  mask: string[]
  /** Full masks including the international code / Полные маски, включая международный код */
  maskFull: string[]
  /** Pointers to the next digits in the search tree / Указатели на следующие цифры номера в дереве поиска */
  next: Record<string, GeoPhoneMap>
}

/** Result of searching a country by phone number / Результат поиска страны по номеру телефона */
export interface GeoPhoneMapInfo {
  /** The found tree node with country and mask information / Найденный узел дерева с информацией о стране и масках */
  item?: GeoPhoneMap
  /** The remaining part of the number after separating the country code / Оставшаяся часть номера после отделения кода страны */
  phone?: string
}
