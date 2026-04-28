import { AriaLabelPropsInclude } from '../../types/ariaTypes';
import { TextLoadingPropsInclude } from '../../types/textTypes';
export type ProgressPropsToken = {
    point?: boolean;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
};
export type ProgressPropsBasic = AriaLabelPropsInclude & TextLoadingPropsInclude & {
    /** Status/ Статус */
    /** Whether the progress is visible/ Видим ли прогресс */
    visible?: boolean;
    /** Value/ Значения */
    /** Current progress value/ Текущее значение прогресса */
    value?: number | string;
    /** Maximum progress value/ Максимальное значение прогресса */
    max?: number | string;
    /** Style/ Стили */
    /** Whether to use linear progress/ Использовать ли линейный прогресс */
    linear?: boolean;
    /** Whether to use circular progress/ Использовать ли круговой прогресс */
    circular?: boolean;
    /** Whether to use point progress/ Использовать ли точечный прогресс */
    point?: boolean;
    /** Delay before showing/ Задержка перед показом */
    delay?: number | string;
    /** Delay before hiding/ Задержка перед скрытием */
    delayHide?: number | string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsProgress: {
    linear: boolean;
    indeterminate: string;
    position: string;
    max: number;
    delay: number;
    delayHide: number;
};
