import { ComputedRef, Ref } from 'vue';
import { GeoItemFull } from '@dxtmisha/functional-basic';
/**
 * Reactive class for working with geographic data.
 *
 * Реактивный класс для работы с географическими данными.
 */
export declare class GeoRef {
    private static readonly item;
    private static readonly country;
    private static readonly language;
    private static readonly standard;
    private static readonly firstDay;
    /**
     * Information about the current country.
   *
     * Информация об текущей стране.
     */
    static get(): Ref<GeoItemFull>;
    /**
     * Current country.
   *
     * Текущая страна.
     */
    static getCountry(): ComputedRef<string>;
    /**
     * Current language.
   *
     * Текущий язык.
     */
    static getLanguage(): ComputedRef<string>;
    /**
     * Full format according to the standard.
   *
     * Полный формат согласно стандарту.
     */
    static getStandard(): ComputedRef<string>;
    /**
     * Returns the first day of the week.
   *
     * Возвращает первый день недели.
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
