import { FigmaStorageData, FigmaStorageDataValue } from './FigmaStorageData';
/**
 * Class for working with Figma client storage (clientStorage).
 *
 * Класс для работы с клиентским хранилищем Figma (clientStorage).
 */
export declare class FigmaClientStorage<T> {
    protected readonly name: string;
    protected readonly cache?: number | undefined;
    /**
     * Getting an instance of the class for working with Figma client storage (clientStorage).
     *
     * Получение экземпляра класса для работы с клиентским хранилищем Figma (clientStorage).
     * @param name value name/ название значения
     * @returns current instance/ текущий экземпляр
     */
    static getInstance<T>(name: string): FigmaClientStorage<T>;
    protected data: FigmaStorageData<T>;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param cache cache time/ время кэширования
     */
    constructor(name: string, cache?: number | undefined);
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @param defaultValue default value/ значение по умолчанию
     */
    get(defaultValue?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /**
     * Changing data in storage.
     *
     * Изменение данных в хранилище.
     * @param value new values/ новые значения
     * @returns current value/ текущее значение
     */
    set(value?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /**
     * Removing data from storage.
     *
     * Удаление данных из хранилища.
     * @returns current instance/ текущий экземпляр
     */
    remove(): Promise<this>;
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @returns data from storage/ данные из хранилища
     */
    protected getValue(): Promise<FigmaStorageDataValue<T> | undefined>;
    /**
     * Making an instance from storage data.
     *
     * Создание экземпляра из данных хранилища.
     * @returns current instance/ текущий экземпляр
     */
    protected make(): Promise<this>;
}
