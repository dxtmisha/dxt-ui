// md5:1f808dbf164f7f02bd7e0c4f17008339
import { NumberOrString } from '@dxtmisha/functional';
import { TextSymbolPropsInclude } from '../../types/textTypes';
import { SkeletonPropsInclude } from '../Skeleton';
type InputCodeItemPropsToken = {
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hide?: boolean;
};
export type InputCodeItemPropsBasic = TextSymbolPropsInclude & SkeletonPropsInclude & {
    /** Focus movement enabled / Разрешено ли перемещение фокуса */
    move?: boolean;
    /** Input name / Название поля ввода */
    name?: string;
    /** Item index / Индекс элемента */
    index?: NumberOrString;
    /** RegExp for input verification / Регулярное выражение для проверки ввода */
    match?: RegExp;
    /** Mode of virtual keyboard / Режим виртуальной клавиатуры */
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    /** Placeholder text / Текст-заполнитель */
    placeholder?: string;
    /** Tab index for keyboard navigation / Индекс табуляции для навигации с клавиатуры */
    tabindex?: number | string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputCodeItemProps = InputCodeItemPropsBasic & InputCodeItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsInputCodeItem: {
    move: boolean;
    name: string;
    match: RegExp;
    inputMode: string;
    placeholder: string;
};
export {};
