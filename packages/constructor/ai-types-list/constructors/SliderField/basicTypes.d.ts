// md5:de76594537667e4914ca1bcfeeef2dd9
import { ConstrBind } from '@dxtmisha/functional';
import { SliderFieldPropsBasic } from './props';
/**
 * Interface for describing which components need to be connected for SliderField work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы SliderField.
 */
export type SliderFieldComponentInclude = {
    /** SliderField component configuration / Конфигурация компонента SliderField */
    sliderField?: object;
};
/**
 * Interface for including SliderField properties.
 *
 * Интерфейс для включения свойств SliderField.
 */
export type SliderFieldPropsInclude<SliderField extends SliderFieldPropsBasic = SliderFieldPropsBasic> = {
    /** SliderField configuration / Конфигурация SliderField */
    sliderField?: ConstrBind<SliderField>;
};
