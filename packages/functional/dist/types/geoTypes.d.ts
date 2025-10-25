/**
 * Union type for date format options in geographic context/
 * Объединенный тип для опций формата даты в географическом контексте
 */
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
/** First day of week code (0=Sunday, 1=Monday, 6=Saturday)/ Код первого дня недели (0=воскресенье, 1=понедельник, 6=суббота) */
export type GeoFirstDay = 1 | 6 | 0;
/** Hour format type (12-hour or 24-hour)/ Тип формата часов (12-часовой или 24-часовой) */
export type GeoHours = '12' | '24';
/** Timezone display style options/ Опции стиля отображения часового пояса */
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';
/** Geographic item interface for country and language data/ Интерфейс географического элемента для данных страны и языка */
export interface GeoItem {
    /** Country code/ Код страны */
    country: string;
    /** Alternative country codes/ Альтернативные коды стран */
    countryAlternative?: string[];
    /** Language code/ Код языка */
    language: string;
    /** Alternative language codes/ Альтернативные коды языков */
    languageAlternative?: string[];
    /** First day of week/ Первый день недели */
    firstDay?: string | null;
    /** Timezone/ Часовой пояс */
    zone?: string | null;
    /** Phone country code/ Телефонный код страны */
    phoneCode?: string;
    /** Phone code for domestic calls/ Телефонный код для внутренних звонков */
    phoneWithin?: string;
    /** Phone number mask/ Маска телефонного номера */
    phoneMask?: string | string[];
    /** Name format pattern/ Шаблон формата имени */
    nameFormat?: 'fl' | 'fsl' | 'lf' | 'lsf' | string;
}
/** Extended geographic item with required fields/ Расширенный географический элемент с обязательными полями */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
    /** Standard locale code/ Стандартный код локали */
    standard: string;
    /** First day of week (required)/ Первый день недели (обязательный) */
    firstDay: string;
}
/** Geographic flag item for country flag display/ Элемент географического флага для отображения флага страны */
export interface GeoFlagItem {
    /** Language name/ Название языка */
    language: string;
    /** Country name/ Название страны */
    country: string;
    /** Standard locale code/ Стандартный код локали */
    standard: string;
    /** Flag icon identifier/ Идентификатор иконки флага */
    icon?: string;
    /** Display label/ Отображаемая метка */
    label: string;
    /** Value for selection/ Значение для выбора */
    value: string;
}
/**
 * Extended geographic flag item with national language information/
 * Расширенный элемент географического флага с информацией о национальном языке
 */
export interface GeoFlagNational extends GeoFlagItem {
    /** Description in national language/ Описание на национальном языке */
    description: string;
    /** Language name in national language/ Название языка на национальном языке */
    nationalLanguage: string;
    /** Country name in national language/ Название страны на национальном языке */
    nationalCountry: string;
}
export interface GeoPhoneValue {
    phone: number;
    within: number;
    mask: string[];
    value: string;
}
export interface GeoPhoneMap {
    items: GeoPhoneValue[];
    info: GeoPhoneValue | undefined;
    value: string | undefined;
    mask: string[];
    maskFull: string[];
    next: Record<string, GeoPhoneMap>;
}
export interface GeoPhoneMapInfo {
    item?: GeoPhoneMap;
    phone?: string;
}
