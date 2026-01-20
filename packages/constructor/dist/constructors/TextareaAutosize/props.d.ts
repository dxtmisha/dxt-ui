export type TextareaAutosizePropsToken = {};
export type TextareaAutosizePropsBasic = {
    value?: string;
    autosize?: boolean;
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
