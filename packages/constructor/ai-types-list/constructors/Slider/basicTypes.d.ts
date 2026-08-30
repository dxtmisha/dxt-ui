// md5:9dfebecd80b0bd8f5a31debe5a354571 true
import type { NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';
/** Slider focus handle type. @keywords slider, focus, handle */
export declare enum SliderFocusType {
    min = "min",
    max = "max"
}
export type SliderValueType = number | [number, number];
export type SliderValueProp = NumberOrString | [NumberOrString, NumberOrString];
export type SliderMarkItemValue = NumberOrStringOrBoolean | undefined;
/** Mark item configuration. @keywords slider, mark, item */
export type SliderMarkItem = {
    mark: number;
    value?: SliderMarkItemValue;
    label: string;
    style?: Record<string, any>;
};
export type SliderMarkList = SliderMarkItem[];
/** Slider thumb label slot data. @keywords slider, thumb, slot */
export type SliderThumbSlot = {
    value: number;
    item: SliderMarkItem;
};
/** Slider mark slot data. @keywords slider, mark, slot */
export type SliderMarkSlot = {
    item: SliderMarkItem;
};
/** Detail data emitted on slider changes. @keywords slider, event, detail */
export type SliderEventDetail = {
    mark: SliderValueType;
    item: SliderMarkItem | [SliderMarkItem, SliderMarkItem];
    value?: SliderMarkItemValue | [SliderMarkItemValue, SliderMarkItemValue];
};
/** Connected component configuration for Slider. @keywords slider, component, include */
export type SliderComponentInclude = {
    slider?: object;
};
/** Properties inclusion interface for Slider. @keywords slider, props, include */
export type SliderPropsInclude<Slider extends SliderPropsBasic = SliderPropsBasic> = SliderPropsBasic & {
    sliderAttrs?: Slider;
};