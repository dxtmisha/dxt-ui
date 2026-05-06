import { FigmaStorageData, FigmaStorageDataValue } from './FigmaStorageData';
import { UiFigmaNode } from '../types/figmaTypes';
/**
 * Class for working with Figma storage (PluginData).
 *
 * Класс для работы с хранилищем Figma (PluginData).
 */
export declare class FigmaStorage<T> {
    protected readonly name: string;
    protected readonly item: PluginDataMixin;
    protected readonly cache?: number | undefined;
    /**
     * Getting an instance of the class for working with Figma storage (PluginData).
     *
     * Получение экземпляра класса для работы с хранилищем Figma (PluginData).
     * @param name value name/ название значения
     * @param item object for storing data/ объект для хранения данных
     * @returns current instance/ текущий экземпляр
     */
    static getInstance<T>(name: string, item?: UiFigmaNode): FigmaStorage<T>;
    /**
     * Getting an instance of the class for working with Figma storage (PluginData).
     *
     * Получение экземпляра класса для работы с хранилищем Figma (PluginData).
     * @param name value name/ название значения
     * @param id object id/ id объекта
     * @returns current instance/ текущий экземпляр
     */
    static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>;
    protected data: FigmaStorageData<T>;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param item object for storing data/ объект для хранения данных
     * @param cache cache time/ время кэширования
     */
    constructor(name: string, item?: PluginDataMixin, cache?: number | undefined);
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @param defaultValue default value/ значение по умолчанию
     */
    get(defaultValue?: T | (() => T)): T | undefined;
    /**
     * Changing data in storage.
     *
     * Изменение данных в хранилище.
     * @param value new values/ новые значения
     * @returns current value/ текущее значение
     */
    set(value?: T | (() => T)): T | undefined;
    /**
     * Removing data from storage.
     *
     * Удаление данных из хранилища.
     * @returns current instance/ текущий экземпляр
     */
    remove(): this;
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @returns data from storage/ данные из хранилища
     */
    protected getValue(): FigmaStorageDataValue<T> | undefined;
    /**
     * Making an instance from storage data.
     *
     * Создание экземпляра из данных хранилища.
     * @returns current instance/ текущий экземпляр
     */
    protected make(): this;
}
