// md5:510d329cdcf0f8e0cf2589b69d92ea4b
import { type ComputedRef, type Ref } from 'vue';
import { GeoUnit, type NumberOrString } from '@dxtmisha/functional-basic';
import type { RefOrNormal } from '../../types/refTypes';
/**
 * Reactive wrapper for `GeoUnit` that formats metric source values using regional units. Locale and numeric refs update saved computed results without recreating the wrapper.
 *
 * Реактивная обёртка `GeoUnit`, форматирующая исходные метрические значения в региональных единицах. Ссылки на локаль и число обновляют сохранённые вычисляемые результаты без пересоздания обёртки.
 */
export declare class GeoUnitRef {
    /** Location reference / Ссылка на локацию */
    protected location: Ref<string | undefined>;
    /** Computed instance of GeoUnit / Вычисляемый экземпляр GeoUnit */
    protected unitInstance: ComputedRef<GeoUnit>;
    /**
     * Initializes GeoUnitRef with the supplied configuration.
     *
     * Инициализирует GeoUnitRef с переданными настройками.
     * @param code Locale, country or language code; a ref is supported where declared. / Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.
     */
    constructor(code?: RefOrNormal<string>);
    /**
     * Returns the resolved standard locale as a computed ref.
     *
     * Возвращает разрешённую стандартную локаль вычисляемой ссылкой.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    getLocation(): ComputedRef<string>;
    /**
     * Formats millimeters; converts to `inch` where regional settings require it.
     *
     * Форматирует миллиметры; преобразует в `inch`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats centimeters; converts to `inch` where regional settings require it.
     *
     * Форматирует сантиметры; преобразует в `inch`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats meters; converts to `foot` where regional settings require it.
     *
     * Форматирует метры; преобразует в `foot`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats kilometers; converts to `mile` where regional settings require it.
     *
     * Форматирует километры; преобразует в `mile`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats square meters; converts to `square-foot` where regional settings require it.
     *
     * Форматирует квадратные метры; преобразует в `square-foot`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats hectares; converts to `acre` where regional settings require it.
     *
     * Форматирует гектары; преобразует в `acre`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats grams; converts to `ounce` where regional settings require it.
     *
     * Форматирует граммы; преобразует в `ounce`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats kilograms; converts to `pound` where regional settings require it.
     *
     * Форматирует килограммы; преобразует в `pound`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats tonnes; converts to `ton` where regional settings require it.
     *
     * Форматирует тонны; преобразует в `ton`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats milliliters; converts to `fluid-ounce` where regional settings require it.
     *
     * Форматирует миллилитры; преобразует в `fluid-ounce`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats liters; converts to `gallon` where regional settings require it.
     *
     * Форматирует литры; преобразует в `gallon`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats degrees Celsius; converts to `fahrenheit` where regional settings require it.
     *
     * Форматирует градусы Цельсия; преобразует в `fahrenheit`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats kilometers per hour; converts to `mile-per-hour` where regional settings require it.
     *
     * Форматирует километры в час; преобразует в `mile-per-hour`, если это задано настройками региона.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Selects the metric source unit reactively and delegates conversion and formatting to `GeoUnit`.
     *
     * Реактивно выбирает исходную метрическую единицу и делегирует преобразование и форматирование `GeoUnit`.
     * @param value Value to format; a ref is supported where declared. / Значение для форматирования; ссылка поддерживается согласно сигнатуре.
     * @param unit Unit identifier. / Идентификатор единицы.
     * @param options Configuration options. / Параметры настройки.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}
