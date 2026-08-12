// md5:4bc0ade004886073f42315b50b470612
import { NumberOrString } from '../types/basicTypes';
import { GeoItemFull } from '../types/geoTypes';
/**
 * Class for localized unit formatting and automatic conversions.
 * Automatically translates metric units (like gram, meter) to local equivalents
 * (like ounce, foot) for non-metric regions (US, MM, LR) and formats them.
 *
 * Класс для локализованного форматирования единиц измерения и автоматической конвертации.
 * Автоматически преобразует метрические единицы (такие как грамм, метр) в локальные аналоги
 * (такие как унция, фут) для неметрических регионов (США, Мьянма, Либерия) и форматирует их.
 */
export declare class GeoUnit {
    /** Detailed data about the current country / Детальные данные о текущей стране */
    protected readonly geo: GeoItemFull;
    /**
     * Returns a request-isolated instance of GeoUnit or cached instance.
     *
     * Возвращает изолированный в рамках запроса экземпляр GeoUnit или кэшированный экземпляр.
     * @param code country or language code / код страны или языка
     * @returns GeoUnit instance / экземпляр GeoUnit
     */
    static getInstance(code?: string): GeoUnit;
    /**
     * Constructor.
     * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
     */
    constructor(code?: string);
    /**
     * Returns the standard location code.
     *
     * Возвращает стандартный код местоположения.
     * @returns standard location code / стандартный код местоположения
     */
    getLocation(): string;
    /**
     * Formats millimeter value, converting to inches if overridden by locale unit settings.
     *
     * Форматирует значение в миллиметрах, конвертируя в дюймы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats centimeter value, converting to inches if overridden by locale unit settings.
     *
     * Форматирует значение в сантиметрах, конвертируя в дюймы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats meter value, converting to feet if overridden by locale unit settings.
     *
     * Форматирует значение в метрах, конвертируя в футы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats kilometer value, converting to miles if overridden by locale unit settings.
     *
     * Форматирует значение в километрах, конвертируя в мили, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats square meter value, converting to square feet if overridden by locale unit settings.
     *
     * Форматирует значение в квадратных метрах, конвертируя в квадратные футы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats hectare value, converting to acres if overridden by locale unit settings.
     *
     * Форматирует значение в гектарах, конвертируя в акры, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats gram value, converting to ounces if overridden by locale unit settings.
     *
     * Форматирует значение в граммах, конвертируя в унции, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats kilogram value, converting to pounds if overridden by locale unit settings.
     *
     * Форматирует значение в килограммах, конвертируя в фунты, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats tonne value, converting to short tons if overridden by locale unit settings.
     *
     * Форматирует значение в тоннах, конвертируя в короткие тонны, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats milliliter value, converting to fluid ounces if overridden by locale unit settings.
     *
     * Форматирует значение в миллилитрах, конвертируя в жидкие унции, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats liter value, converting to gallons if overridden by locale unit settings.
     *
     * Форматирует значение в литрах, конвертируя в галлоны, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats celsius value, converting to fahrenheit if overridden by locale unit settings.
     *
     * Форматирует значение в градусах Цельсия, конвертируя в градусы Фаренгейта, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats kilometer per hour value, converting to miles per hour if overridden by locale unit settings.
     *
     * Форматирует значение в километрах в час, конвертируя в мили в час, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Formats the value for the specified unit, converting and formatting it according to the locale.
     *
     * Форматирует значение для указанной единицы измерения, преобразуя и форматируя его в соответствии с локалью.
     * @param value numeric value to format / числовое значение для форматирования
     * @param unit unit of measurement / единица измерения
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string or original value / отформатированная строка или исходное значение
     */
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
    /**
     * Checks if the conversion is from Celsius to Fahrenheit.
     *
     * Проверяет, является ли конвертация переходом из градусов Цельсия в градусы Фаренгейта.
     * @param from source unit identifier / исходный идентификатор единицы измерения
     * @param to target unit identifier / целевой идентификатор единицы измерения
     * @returns true if conversion is Celsius to Fahrenheit / true, если конвертация из Цельсия в Фаренгейт
     */
    protected isCelsiusToFahrenheit(from: string, to: string): boolean;
    /**
     * Retrieves the target unit configured for the given source unit.
     *
     * Получает целевую единицу измерения, настроенную для заданной исходной единицы измерения.
     * @param sourceUnit metric unit identifier / метрический идентификатор единицы измерения
     * @returns target unit identifier / целевой идентификатор единицы измерения
     */
    protected getTargetUnit(sourceUnit: string): string;
    /**
     * Internal helper method to perform unit conversion and formatting.
     *
     * Внутренний вспомогательный метод для выполнения конвертации и форматирования единиц измерения.
     * @param value value to format / значение для форматирования
     * @param sourceUnit metric unit identifier / метрический идентификатор единицы измерения
     * @param options formatting options / параметры форматирования
     * @returns formatted unit string / отформатированная строка единицы измерения
     */
    protected formatUnit(value: NumberOrString, sourceUnit: string, options?: Intl.NumberFormatOptions): string;
    /**
     * Performs conversion between units.
     *
     * Выполняет конвертацию между единицами измерения.
     * @param value value to convert / значение для конвертации
     * @param from source unit identifier / исходный идентификатор единицы измерения
     * @param to target unit identifier / целевой идентификатор единицы измерения
     * @returns converted value / сконвертированное значение
     */
    protected convert(value: number, from: string, to: string): number;
    /**
     * Converts temperature value from Celsius to Fahrenheit.
     *
     * Конвертирует значение температуры из градусов Цельсия в градусы Фаренгейта.
     * @param value temperature value in Celsius / значение температуры в градусах Цельсия
     * @returns temperature value in Fahrenheit / значение температуры в градусах Фаренгейта
     */
    protected celsiusToFahrenheit(value: number): number;
}
