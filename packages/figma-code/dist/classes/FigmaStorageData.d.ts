/** Type for storing data in Figma Storage/ Тип для хранения данных в Figma Storage */
export type FigmaStorageDataValue<T> = {
    /** Value/ Значение */
    value: T;
    /** Age/ Возраст */
    age: number;
};
/**
 * Class for managing Figma storage data.
 *
 * Класс для управления данными хранилища Figma.
 * @template T type of data/ тип данных
 */
export declare class FigmaStorageData<T> {
    protected readonly name: string;
    protected readonly cache?: number | undefined;
    /** Current value in the instance/ Текущее значение в экземпляре */
    protected value?: T;
    /** Value update time/ Время обновления значения */
    protected age?: number;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param cache cache time/ время кэширования
     */
    constructor(name: string, cache?: number | undefined);
    /**
     * Checks if the value is null or undefined.
     *
     * Проверяет, является ли значение null или undefined.
     */
    isNull(): boolean;
    /**
     * Checks for storage time limit.
     *
     * Проверяет на лимит времени хранения.
     */
    isCache(): boolean;
    /**
     * Checks if the value is defined and within the cache limit.
     *
     * Проверяет, определено ли значение и находится ли оно в пределах лимита кэша.
     */
    isValue(): boolean;
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     */
    get(): T | undefined;
    /**
     * Returns the update time of the value.
     *
     * Возвращает время обновления значения.
     */
    getAge(): number | undefined;
    /**
     * Returns the storage key name.
     *
     * Возвращает имя ключа в хранилище.
     */
    getName(): string;
    /**
     * Returns the cache time.
     *
     * Возвращает время кэширования.
     */
    getCache(): number | undefined;
    /**
     * Sets the value and age.
     *
     * Устанавливает значение и время.
     * @param value new value/ новое значение
     * @param age update time/ время обновления
     */
    set(value?: T, age?: number): this;
    /**
     * Sets data from a FigmaStorageDataValue object.
     *
     * Устанавливает данные из объекта FigmaStorageDataValue.
     * @param value data object/ объект данных
     */
    setByObject(value?: FigmaStorageDataValue<T>): this;
    /**
     * Sets the value.
     *
     * Устанавливает значение.
     * @param value new value/ новое значение
     */
    setValue(value?: T): this;
    /**
     * Sets the update time.
     *
     * Устанавливает время обновления.
     * @param age update time/ время обновления
     */
    setAge(age?: number): this;
    /**
     * Updates the value and sets the current time as age.
     *
     * Обновляет значение и устанавливает текущее время.
     * @param value new value/ новое значение
     */
    update(value?: T): this;
    /**
     * Removes the data.
     *
     * Удаляет данные.
     */
    remove(): this;
    /**
     * Converts data to a FigmaStorageDataValue object for storage.
     *
     * Преобразует данные в объект FigmaStorageDataValue для хранения.
     */
    toValue(): FigmaStorageDataValue<T>;
}
