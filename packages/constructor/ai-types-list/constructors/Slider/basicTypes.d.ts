// md5:3454b3c43530bd81634e1076154a09b5
import { NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { SliderPropsBasic } from './props';
/** Focus handle type enum for Slider / Перечисление типов фокуса ползунка слайдера */
export declare enum SliderFocusType {
    /** Minimum slider handle / Минимальный ползунок слайдера */
    min = "min",
    /** Maximum slider handle / Максимальный ползунок слайдера */
    max = "max"
}
/** Slider value type (single number or min-max pair) / Тип значения слайдера (одно число или пара мин-макс) */
export type SliderValueType = number | [number, number];
/** Slider value prop type (single number or min-max pair) / Тип проп значения слайдера (одно число или пара мин-макс) */
export type SliderValueProp = NumberOrString | [NumberOrString, NumberOrString];
/** Slider mark item value payload type / Тип значения элемента метки слайдера */
export type SliderMarkItemValue = NumberOrStringOrBoolean | undefined;
/** Single mark item configuration / Конфигурация отдельного деления/метки */
export type SliderMarkItem = {
    /** Numeric mark position value / Числовое значение деления/метки */
    mark: number;
    /** Associated value payload / Связанное значение данных */
    value?: SliderMarkItemValue;
    /** Display label text / Отображаемый текст метки */
    label: string;
    /** Custom CSS style properties / Пользовательские свойства CSS стилей */
    style?: Record<string, any>;
};
/** List of slider mark items / Список элементов меток слайдера */
export type SliderMarkList = SliderMarkItem[];
/** Slider thumb label slot payload data / Данные для слота метки ползунка слайдера */
export type SliderThumbSlot = {
    /** Current numeric value for thumb / Текущее числовое значение ползунка */
    value: number;
    /** Mark item configuration object / Объект конфигурации элемента метки */
    item: SliderMarkItem;
};
/** Slider mark slot payload data / Данные для слота деления/метки слайдера */
export type SliderMarkSlot = {
    /** Mark item configuration object / Объект конфигурации элемента метки */
    item: SliderMarkItem;
};
/** Detail data emitted on slider changes / Детальные данные, испускаемые при изменении слайдера */
export type SliderEventDetail = {
    /** Current mark value or range pair / Текущее значение метки или пара диапазона */
    mark: SliderValueType;
    /** Mark item object or pair of mark items / Объект элемента метки или пара элементов меток */
    item: SliderMarkItem | [SliderMarkItem, SliderMarkItem];
    /** Target value payload / Целевое значение данных */
    value?: SliderMarkItemValue | [SliderMarkItemValue, SliderMarkItemValue];
};
/**
 * Interface for describing which components need to be connected for Slider work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы Slider.
 */
export type SliderComponentInclude = {
    /** Slider component configuration / Конфигурация компонента слайдера */
    slider?: object;
};
/**
 * Interface for including Slider properties.
 *
 * Интерфейс для включения свойств слайдера.
 */
export type SliderPropsInclude<Slider extends SliderPropsBasic = SliderPropsBasic> = SliderPropsBasic & {
    /** Additional attributes for slider component / Дополнительные атрибуты для компонента слайдера */
    sliderAttrs?: Slider;
};
