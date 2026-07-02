import {
  computed,
  type ComputedRef,
  type Ref
} from 'vue'
import {
  GeoUnit,
  type NumberOrString
} from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { toRefItem } from '../../functions/ref/toRefItem'

import { GeoRef } from './GeoRef'

import type { RefOrNormal } from '../../types/refTypes'

/**
 * Reactive class for managing localized unit formatting and automatic conversions.
 *
 * Реактивный класс для управления локализованным форматированием единиц измерения и автоматической конвертацией.
 */
export class GeoUnitRef {
  /** Location reference / Ссылка на локацию */
  protected location: Ref<string | undefined>

  /** Computed instance of GeoUnit / Вычисляемый экземпляр GeoUnit */
  protected unitInstance: ComputedRef<GeoUnit>

  /**
   * Constructor.
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   */
  constructor(code?: RefOrNormal<string>) {
    this.location = toRefItem(code)
    this.unitInstance = computed(() => new GeoUnit(this.location.value ?? GeoRef.getLocation().value))
  }

  /**
   * Returns the standard location code.
   *
   * Возвращает стандартный код местоположения.
   * @returns standard location code / стандартный код местоположения
   */
  getLocation(): ComputedRef<string> {
    return computed(() => this.unitInstance.value.getLocation())
  }

  /**
   * Formats millimeter value, converting to inches if overridden by locale unit settings.
   *
   * Форматирует значение в миллиметрах, конвертируя в дюймы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  millimeter(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.millimeter(getRef(value), options))
  }

  /**
   * Formats centimeter value, converting to inches if overridden by locale unit settings.
   *
   * Форматирует значение в сантиметрах, конвертируя в дюймы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  centimeter(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.centimeter(getRef(value), options))
  }

  /**
   * Formats meter value, converting to feet if overridden by locale unit settings.
   *
   * Форматирует значение в метрах, конвертируя в футы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  meter(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.meter(getRef(value), options))
  }

  /**
   * Formats kilometer value, converting to miles if overridden by locale unit settings.
   *
   * Форматирует значение в километрах, конвертируя в мили, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  kilometer(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.kilometer(getRef(value), options))
  }

  /**
   * Formats square meter value, converting to square feet if overridden by locale unit settings.
   *
   * Форматирует значение в квадратных метрах, конвертируя в квадратные футы, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  squareMeter(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.squareMeter(getRef(value), options))
  }

  /**
   * Formats hectare value, converting to acres if overridden by locale unit settings.
   *
   * Форматирует значение в гектарах, конвертируя в акры, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  hectare(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.hectare(getRef(value), options))
  }

  /**
   * Formats gram value, converting to ounces if overridden by locale unit settings.
   *
   * Форматирует значение в граммах, конвертируя в унции, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  gram(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.gram(getRef(value), options))
  }

  /**
   * Formats kilogram value, converting to pounds if overridden by locale unit settings.
   *
   * Форматирует значение в килограммах, конвертируя в фунты, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  kilogram(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.kilogram(getRef(value), options))
  }

  /**
   * Formats tonne value, converting to short tons if overridden by locale unit settings.
   *
   * Форматирует значение в тоннах, конвертируя в короткие тонны, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  tonne(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.tonne(getRef(value), options))
  }

  /**
   * Formats milliliter value, converting to fluid ounces if overridden by locale unit settings.
   *
   * Форматирует значение в миллилитрах, конвертируя в жидкие унции, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  milliliter(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.milliliter(getRef(value), options))
  }

  /**
   * Formats liter value, converting to gallons if overridden by locale unit settings.
   *
   * Форматирует значение в литрах, конвертируя в галлоны, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  liter(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.liter(getRef(value), options))
  }

  /**
   * Formats celsius value, converting to fahrenheit if overridden by locale unit settings.
   *
   * Форматирует значение в градусах Цельсия, конвертируя в градусы Фаренгейта, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  celsius(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.celsius(getRef(value), options))
  }

  /**
   * Formats kilometer per hour value, converting to miles per hour if overridden by locale unit settings.
   *
   * Форматирует значение в километрах в час, конвертируя в мили в час, если это переопределено настройками локали.
   * @param value numeric value to format / числовое значение для форматирования
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  kilometerPerHour(
    value: RefOrNormal<NumberOrString>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.kilometerPerHour(getRef(value), options))
  }

  /**
   * Formats the value for the specified unit reactively, converting and formatting it according to the locale.
   *
   * Форматирует значение для указанной единицы измерения реактивно, преобразуя и форматируя его в соответствии с локалью.
   * @param value numeric value to format / числовое значение для форматирования
   * @param unit unit of measurement / единица измерения
   * @param options formatting options / параметры форматирования
   * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
   */
  format(
    value: RefOrNormal<NumberOrString>,
    unit: RefOrNormal<string>,
    options?: Intl.NumberFormatOptions
  ): ComputedRef<string> {
    return computed(() => this.unitInstance.value.format(getRef(value), getRef(unit), options))
  }
}
