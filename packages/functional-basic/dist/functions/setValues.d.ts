/**
 * Modifies data according to its type and settings.
 *
 * Изменяет данные в соответствии с их типом и настройками.
 * @param selected base values/ базовые значения
 * @param value new values/ новые значения
 * @param multiple support for multiple values/ поддержка нескольких значений
 * @param maxlength maximum values/ максимальные значения
 * @param alwaysChange updating values in any case/ обновление значений при любом случае
 * @param notEmpty do not make the values empty/ не делать значения пустыми
 */
export declare function setValues<T>(selected: T | T[] | undefined, value: any, { multiple, maxlength, alwaysChange, notEmpty }: {
    multiple?: boolean | undefined;
    maxlength?: number | undefined;
    alwaysChange?: boolean | undefined;
    notEmpty?: boolean | undefined;
}): T | T[] | undefined;
