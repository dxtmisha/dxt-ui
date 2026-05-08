/**
 * The class checks the values that have been edited.
 *
 * Класс проверяет значения, которые были отредактированы.
 */
export declare class DesignChanged<T extends Record<string, any>> {
    protected readonly props: T;
    protected readonly watch: string[];
    private readonly cache;
    /**
     * Constructor
     * @param props base data/ базовые данные
     * @param watch data for tracking/ данные для слежения
     */
    constructor(props: T, watch?: string[]);
    /**
     * Checks if the value has been updated.
     *
     * Проверяет, обновлено ли значение.
     * @param name property name/ название свойства
     */
    is(name: string | string[]): boolean;
    /**
     * Checks if there are changes in the data.
     *
     * Проверяет, есть ли изменения в данных.
     */
    isChanged(): boolean;
    /**
     * Updates all values.
     *
     * Обновляет все значения.
     */
    update(): void;
    /**
     * Checking additional data.
     *
     * Проверка дополнительных данных.
     * @param name property name/ название свойства
     */
    protected isDifferent(name: string): boolean;
}
