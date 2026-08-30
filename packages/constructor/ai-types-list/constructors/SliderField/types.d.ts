// md5:aa703128404566d3739c3c1a59a2ce78 true
import type { ConstrClass } from '@dxtmisha/functional';

export type SliderFieldComponents = SliderComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & IconComponentInclude;
export type SliderFieldEmits = FieldBasicEmits<SliderValueType>;
export interface SliderFieldExpose extends FieldBasicExpose<SliderValueType> {}

export interface SliderFieldSlots extends FieldLabelSlotsInclude, SliderSlots {
    leading?: (props: any) => any;
    trailing?: (props: any) => any;
}

export type SliderFieldClasses = {
    main: ConstrClass;
    body: string;
    hidden: string;
    labelSlider: string;
    labelLeading: string;
    labelTrailing: string;
    input: string;
    inputMin: string;
    inputMax: string;
    value: string;
    valueMin: string;
    valueMax: string;
    slider: string;
};