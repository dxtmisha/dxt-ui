// md5:3454b3c43530bd81634e1076154a09b5 true
import { NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';
/** Focus handle type enum for Slider @keywords slider focus type min max */
export declare enum SliderFocusType {
    min = "min",
    max = "max"
}
export type SliderValueType = number | [number, number];
export type SliderValueProp = NumberOrString | [NumberOrString, NumberOrString];
export type SliderMarkItemValue = NumberOrStringOrBoolean | undefined;
export type SliderMarkItem = {
    mark: number;
    value?: SliderMarkItemValue;
    label: string;
    style?: Record<string, any>;
};
export type SliderMarkList = SliderMarkItem[];
export type SliderThumbSlot = {
    value: number;
    item: SliderMarkItem;
};
export type SliderMarkSlot = {
    item: SliderMarkItem;
};
export type SliderEventDetail = {
    mark: SliderValueType;
    item: SliderMarkItem | [SliderMarkItem, SliderMarkItem];
    value?: SliderMarkItemValue | [SliderMarkItemValue, SliderMarkItemValue];
};
export type SliderComponentInclude = {
    slider?: object;
};
export type SliderPropsInclude<Slider extends SliderPropsBasic = SliderPropsBasic> = SliderPropsBasic & {
    sliderAttrs?: Slider;
};