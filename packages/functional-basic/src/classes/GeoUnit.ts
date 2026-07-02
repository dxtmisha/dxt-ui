import { toNumber } from '../functions/toNumber'
import { type NumberOrString } from '../types/basicTypes'
import { type GeoItemFull } from '../types/geoTypes'
import { Geo } from './Geo'
import { GeoIntl } from './GeoIntl'

/** Cache storage for GeoUnit instances / Хранилище кэша для экземпляров GeoUnit */
const instances: Record<string, GeoUnit> = {}

/** Conversion multipliers between metric and non-metric units / Коэффициенты перевода между метрическими и неметрическими единицами */
const UNIT_MULTIPLIERS: Record<string, number> = {
  'millimeter->inch': 0.03937007874,
  'centimeter->inch': 0.3937007874,
  'meter->foot': 3.280839895,
  'kilometer->mile': 0.621371192,
  'square-meter->square-foot': 10.763910417,
  'hectare->acre': 2.4710538147,
  'gram->ounce': 0.03527396195,
  'kilogram->pound': 2.2046226218,
  'tonne->ton': 1.1023113109,
  'milliliter->fluid-ounce': 0.0338140227,
  'liter->gallon': 0.2641720524,
  'kilometer-per-hour->mile-per-hour': 0.621371192
}

/**
 * Class for localized unit formatting and automatic conversions.
 * Automatically translates metric units (like gram, meter) to local equivalents
 * (like ounce, foot) for non-metric regions (US, MM, LR) and formats them.
 *
 * Класс для локализованного форматирования единиц измерения и автоматической конвертации.
 * Автоматически преобразует метрические единицы (такие как грамм, метр) в локальные аналоги
 * (такие как унция, фут) для неметрических регионов (США, Мьянма, Либерия) и форматирует их.
 */
export class GeoUnit {
  /** Detailed data about the current country / Детальные данные о текущей стране */
  protected readonly geo: GeoItemFull

  /**
   * Returns a request-isolated instance of GeoUnit or cached instance.
   *
   * Возвращает изолированный в рамках запроса экземпляр GeoUnit или кэшированный экземпляр.
   * @param code country or language code / код страны или языка
   * @returns GeoUnit instance / экземпляр GeoUnit
   */
  static getInstance(code: string = Geo.getLocation()): GeoUnit {
    const location = Geo.find(code).standard

    if (location in instances) {
      return instances[location]
    }

    return new GeoUnit(code)
  }

  /**
   * Constructor.
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   */
  constructor(code: string = Geo.getLocation()) {
    this.geo = Geo.find(code)
    const location = this.getLocation()

    if (location in instances) {
      return instances[location]
    }

    instances[location] = this
  }

  /**
   * Returns the standard location code.
   *
   * Возвращает стандартный код местоположения.
   * @returns standard location code / стандартный код местоположения
   */
  getLocation(): string {
    return this.geo.standard
  }

  /**
   * Formats millimeter value, converting to inches if overridden by locale unit settings.
   *
   * Форматирует значение в миллиметрах, конвертируя в дюймы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'millimeter', options)
  }

  /**
   * Formats centimeter value, converting to inches if overridden by locale unit settings.
   *
   * Форматирует значение в сантиметрах, конвертируя в дюймы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'centimeter', options)
  }

  /**
   * Formats meter value, converting to feet if overridden by locale unit settings.
   *
   * Форматирует значение в метрах, конвертируя в футы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'meter', options)
  }

  /**
   * Formats kilometer value, converting to miles if overridden by locale unit settings.
   *
   * Форматирует значение в километрах, конвертируя в мили, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'kilometer', options)
  }

  /**
   * Formats square meter value, converting to square feet if overridden by locale unit settings.
   *
   * Форматирует значение в квадратных метрах, конвертируя в квадратные футы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'square-meter', options)
  }

  /**
   * Formats hectare value, converting to acres if overridden by locale unit settings.
   *
   * Форматирует значение в гектарах, конвертируя в акры, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'hectare', options)
  }

  /**
   * Formats gram value, converting to ounces if overridden by locale unit settings.
   *
   * Форматирует значение в граммах, конвертируя в унции, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'gram', options)
  }

  /**
   * Formats kilogram value, converting to pounds if overridden by locale unit settings.
   *
   * Форматирует значение в килограммах, конвертируя в фунты, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'kilogram', options)
  }

  /**
   * Formats tonne value, converting to short tons if overridden by locale unit settings.
   *
   * Форматирует значение в тоннах, конвертируя в короткие тонны, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'tonne', options)
  }

  /**
   * Formats milliliter value, converting to fluid ounces if overridden by locale unit settings.
   *
   * Форматирует значение в миллилитрах, конвертируя в жидкие унции, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'milliliter', options)
  }

  /**
   * Formats liter value, converting to gallons if overridden by locale unit settings.
   *
   * Форматирует значение в литрах, конвертируя в галлоны, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'liter', options)
  }

  /**
   * Formats celsius value, converting to fahrenheit if overridden by locale unit settings.
   *
   * Форматирует значение в градусах Цельсия, конвертируя в градусы Фаренгейта, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'celsius', options)
  }

  /**
   * Formats kilometer per hour value, converting to miles per hour if overridden by locale unit settings.
   *
   * Форматирует значение в километрах в час, конвертируя в мили в час, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string {
    return this.formatUnit(value, 'kilometer-per-hour', options)
  }

  /**
   * Checks if the conversion is from Celsius to Fahrenheit.
   *
   * Проверяет, является ли конвертация переходом из градусов Цельсия в градусы Фаренгейта.
   * @param from source unit identifier / исходный идентификатор единицы измерения
   * @param to target unit identifier / целевой идентификатор единицы измерения
   * @returns true if conversion is Celsius to Fahrenheit / true, если конвертация из Цельсия в Фаренгейт
   */
  protected isCelsiusToFahrenheit(from: string, to: string): boolean {
    return from === 'celsius' && to === 'fahrenheit'
  }

  /**
   * Retrieves the target unit configured for the given source unit.
   *
   * Получает целевую единицу измерения, настроенную для заданной исходной единицы измерения.
   * @param sourceUnit metric unit identifier / метрический идентификатор единицы измерения
   * @returns target unit identifier / целевой идентификатор единицы измерения
   */
  protected getTargetUnit(sourceUnit: string): string {
    return this.geo.unit?.[sourceUnit as keyof NonNullable<GeoItemFull['unit']>] || sourceUnit
  }

  /**
   * Internal helper method to perform unit conversion and formatting.
   *
   * Внутренний вспомогательный метод для выполнения конвертации и форматирования единиц измерения.
   * @param value value to format / значение для форматирования
   * @param sourceUnit metric unit identifier / метрический идентификатор единицы измерения
   * @param options formatting options / параметры форматирования
   * @returns formatted unit string / отформатированная строка единицы измерения
   */
  protected formatUnit(
    value: NumberOrString,
    sourceUnit: string,
    options?: Intl.NumberFormatOptions
  ): string {
    const numericValue = toNumber(value)
    const targetUnit = this.getTargetUnit(sourceUnit)
    const convertedValue = this.convert(numericValue, sourceUnit, targetUnit)

    return GeoIntl.getInstance(this.getLocation())
      .unit(convertedValue, {
        unit: targetUnit,
        ...options
      })
  }

  /**
   * Performs conversion between units.
   *
   * Выполняет конвертацию между единицами измерения.
   * @param value value to convert / значение для конвертации
   * @param from source unit identifier / исходный идентификатор единицы измерения
   * @param to target unit identifier / целевой идентификатор единицы измерения
   * @returns converted value / сконвертированное значение
   */
  protected convert(
    value: number,
    from: string,
    to: string
  ): number {
    if (from !== to) {
      if (this.isCelsiusToFahrenheit(from, to)) {
        return this.celsiusToFahrenheit(value)
      }

      const conversionKey = `${from}->${to}`

      if (conversionKey in UNIT_MULTIPLIERS) {
        return value * UNIT_MULTIPLIERS[conversionKey]
      }
    }

    return value
  }

  /**
   * Converts temperature value from Celsius to Fahrenheit.
   *
   * Конвертирует значение температуры из градусов Цельсия в градусы Фаренгейта.
   * @param value temperature value in Celsius / значение температуры в градусах Цельсия
   * @returns temperature value in Fahrenheit / значение температуры в градусах Фаренгейта
   */
  protected celsiusToFahrenheit(value: number): number {
    return value * 1.8 + 32
  }
}
