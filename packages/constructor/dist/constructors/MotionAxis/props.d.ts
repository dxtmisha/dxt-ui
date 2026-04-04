import { ModelPropsSelected } from '../../types/modelTypes';
import { MotionAxisSelectedValue } from './basicTypes';
type MotionAxisPropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};
export type MotionAxisPropsBasic = ModelPropsSelected<MotionAxisSelectedValue> & {
    /** Status/ Статус */
    /** Selected element/ Выбранный элемент */
    selected?: MotionAxisSelectedValue;
    /** Style/ Стили */
    /** Whether to animate height change/ Анимировать ли изменение высоты */
    animationHeight?: boolean;
    /** Options/ Опции */
    /** Whether the elements are in the DOM/ Находятся ли элементы в DOM */
    inDom?: boolean;
    /** List of elements in the DOM for slide/ Список элементов в DOM для слайда */
    inDomSlide?: string[];
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionAxisProps = MotionAxisPropsBasic & MotionAxisPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMotionAxis: {
    axis: string;
    direction: string;
};
export {};
