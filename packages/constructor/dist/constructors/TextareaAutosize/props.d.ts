interface TextareaAutosizePropsToken {
}
export interface TextareaAutosizePropsBasic {
    value?: string;
    autosize?: boolean;
    inputAttrs?: Record<string, any>;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface TextareaAutosizeProps extends TextareaAutosizePropsBasic, TextareaAutosizePropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTextareaAutosize: {
    autosize: boolean;
};
export {};
