import { TextareaAutosizePropsBasic } from '@dxtmisha/constructor/TextareaAutosize';
export declare const propsValues: {
    height: string[];
};
export type PropsToken = {
    height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
