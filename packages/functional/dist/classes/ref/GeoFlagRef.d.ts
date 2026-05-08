import { ComputedRef, Ref } from 'vue';
import { GeoFlag, GeoFlagItem, GeoFlagNational } from '@dxtmisha/functional-basic';
import { RefOrNormal } from '../../types/refTypes';
/**
 * Class for working with Flags.
 *
 * Класс для работы с Флагами.
 */
export declare class GeoFlagRef {
    protected code: Ref<string>;
    protected flag: GeoFlag;
    /**
     * Constructor
     * @param code country and language code/ код страны и языка
     */
    constructor(code?: RefOrNormal<string>);
    /**
     * Obtaining a reactive object with the country code.
     *
     * Получение реактивного объекта с кодом страны.
     */
    getCode(): Ref<string>;
    /**
     * Returns information about the country and its flag.
     *
     * Возвращает информацию о стране и её флаге.
     * @param code country code/ код страны
     */
    get(code?: string): ComputedRef<GeoFlagItem | undefined>;
    /**
     * Getting a link to the flag.
     *
     * Получение ссылки на флаг.
     * @param code country code/ код страны
     */
    getFlag(code?: string): ComputedRef<string | undefined>;
    /**
     * Getting a list of countries by an array of codes.
     *
     * Получение списка стран по массиву с кодами.
     * @param codes country code/ код страны
     */
    getList(codes?: string[]): ComputedRef<GeoFlagItem[]>;
    /**
     * Getting a list of countries by an array of codes in national language.
     *
     * Получение списка стран по массиву с кодами на национальный язык.
     * @param codes country code/ код страны.
     */
    getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>;
}
