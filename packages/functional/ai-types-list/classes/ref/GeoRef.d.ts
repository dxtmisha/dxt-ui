// md5:6c3c49d3a4c710f505bdc10143312a3e
import { type ComputedRef, type Ref } from 'vue';
import { type GeoItemFull } from '@dxtmisha/functional-basic';
/**
 * Static reactive facade for the current geographic context. It caches a shallow ref to `Geo.getItem()` and computed projections through `ServerStorage`.
 *
 * Статический реактивный фасад текущего географического контекста. Кэширует поверхностную ссылку на `Geo.getItem()` и вычисляемые проекции через `ServerStorage`.
 */
export declare class GeoRef {
    /**
     * Returns the cached geographic item ref.
     *
     * Возвращает кэшированную ссылку на географические данные.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    static get(): Ref<GeoItemFull>;
    /**
     * Sets the current Geo locale with persistence enabled and replaces the reactive item.
     *
     * Устанавливает текущую локаль Geo с сохранением и заменяет реактивные данные.
     * @param code Locale, country or language code. / Код локали, страны или языка.
     * @returns No return value. / Нет возвращаемого значения.
     */
    static set(code: string): void;
    /**
     * Returns the country code.
     *
     * Возвращает код страны.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    static getCountry(): ComputedRef<string>;
    /**
     * Returns the first-weekday token from country metadata.
     *
     * Возвращает обозначение первого дня недели из данных страны.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    static getFirstDay(): ComputedRef<string>;
    /**
     * Returns the country metadata language.
     *
     * Возвращает язык из данных страны.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    static getLanguage(): ComputedRef<string>;
    /**
     * Returns the current location locale.
     *
     * Возвращает текущую локаль местоположения.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    static getLocation(): ComputedRef<string>;
    /**
     * Returns the country segment of the requested location.
     *
     * Возвращает сегмент страны запрошенного местоположения.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    static getLocationCountry(): ComputedRef<string>;
    /**
     * Returns the language segment of the requested location.
     *
     * Возвращает языковой сегмент запрошенного местоположения.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    static getLocationLanguage(): ComputedRef<string>;
    /**
     * Returns the standard locale code.
     *
     * Возвращает стандартный код локали.
     * @returns Computed result; read it through .value. / Вычисляемый результат; читайте через .value.
     */
    static getStandard(): ComputedRef<string>;
    /**
     * Sets the Geo fallback code or factory and refreshes the reactive item from Geo.
     *
     * Устанавливает резервный код Geo либо фабрику и обновляет реактивные данные из Geo.
     * @param code Fallback locale code or factory. / Резервный код локали либо фабрика.
     * @returns No return value. / Нет возвращаемого значения.
     */
    static setValueDefault(code?: string | (() => string)): void;
}
