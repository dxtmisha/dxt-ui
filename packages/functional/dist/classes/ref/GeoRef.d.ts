import { ComputedRef, Ref } from 'vue';
import { GeoItemFull } from '@dxtmisha/functional-basic';
/**
 * Reactive class for working with geographic data.
 *
 * Реактивный класс для работы с географическими данными.
 */
export declare class GeoRef {
    private static readonly country;
    private static readonly language;
    private static readonly standard;
    private static readonly firstDay;
    /**
     * Information about the current country.
     *
     * Информация об текущей стране.
     * @returns reactive object with full geographic information/ реактивный объект с полной географической информацией
     */
    static get(): Ref<GeoItemFull>;
    /**
     * Current country.
     *
     * Текущая страна.
     * @returns reactive string with the current country code/ реактивная строка с кодом текущей страны
     */
    static getCountry(): ComputedRef<string>;
    /**
     * Current language.
     *
     * Текущий язык.
     * @returns reactive string with the current language code/ реактивная строка с кодом текущего языка
     */
    static getLanguage(): ComputedRef<string>;
    /**
     * Full format according to the standard.
     *
     * Полный формат согласно стандарту.
     * @returns reactive string with the full standard locale format/
     * реактивная строка с полным форматом стандарта локали
     */
    static getStandard(): ComputedRef<string>;
    /**
     * Returns the first day of the week.
     *
     * Возвращает первый день недели.
     * @returns reactive string representing the first day of the week/
     * реактивная строка, представляющая первый день недели
     */
    static getFirstDay(): ComputedRef<string>;
    /**
     * Changes the data by the full code.
     *
     * Изменяет данные по полному коду.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static set(code: string): void;
}
