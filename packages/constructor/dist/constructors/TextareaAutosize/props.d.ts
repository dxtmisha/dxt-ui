export type TextareaAutosizePropsToken = {
    autosize?: boolean;
};
export type TextareaAutosizePropsBasic = {
    /** Value/ Значения */
    /** Current text value/ Текущее текстовое значение */
    value?: string;
    /** Style/ Стили */
    /** Additional attributes for the textarea element/ Дополнительные атрибуты для элемента textarea */
    inputAttrs?: Record<string, any>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & TextareaAutosizePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTextareaAutosize: {
    autosize: boolean;
};
