import { FieldAllProps } from '../../types/fieldTypes';
/**
 * Class for processing standard error text
 *
 * Класс для обработки стандартного текста ошибки
 */
export declare class FieldCodeInclude {
    protected readonly props: FieldAllProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: FieldAllProps);
    /**
     * Returns error text
     *
     * Возвращает текст ошибки
     * @param state object with validity state/ объект с данными валидности
     */
    get(state?: ValidityState): string | undefined;
    /**
     * Returns error key (first matched)
     *
     * Возвращает ключ ошибки (первый найденный)
     * @param state object with validity state/ объект с данными валидности
     */
    protected getIndex(state: ValidityState): keyof ValidityState | undefined;
}
