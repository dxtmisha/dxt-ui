// md5:ac995b28302eb73322e51587d239328b
import { SkeletonPropsInclude } from '../Skeleton';
import { ProgressBarItem, ProgressBarList } from './basicTypes';
type ProgressBarPropsToken = {
    overlay?: boolean;
};
export type ProgressBarPropsBasic = SkeletonPropsInclude & {
    /** Focus item index / Фокусируемый индекс элемента */
    focus?: string;
    /** Data value / Значение данных */
    value?: string | number | ProgressBarItem | ProgressBarList;
    /** Maximum value / Максимальное значение */
    max?: string | number;
    /** Active color / Активный цвет */
    color?: string;
    /** Palette name / Название палитры */
    palette?: string;
    /** Show label status / Статус отображения метки */
    showLabel?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ProgressBarProps = ProgressBarPropsBasic & ProgressBarPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsProgressBar: {};
export {};
