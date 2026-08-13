// md5:1498b66f8922f3e6b9b6f256349fd838 true
import { ConstrClass } from '@dxtmisha/functional';
export type SliderComponents = RippleComponentInclude;
export type SliderEmits = ModelEmits<SliderValueType> & {
    input: [detail: SliderEventDetail];
    inputLite: [value: SliderValueType];
    change: [detail: SliderEventDetail];
    changeLite: [value: SliderValueType];
};
export interface SliderExpose {
    /** Gets current slider value @keywords slider get value */
    getValue: () => SliderValueType;
    /** Sets slider value programmatically @keywords slider set value */
    setValue: (value: SliderValueType) => void;
    /** Increases current value by step @keywords slider increase step */
    increase: () => void;
    /** Decreases current value by step @keywords slider decrease step */
    decrease: () => void;
}
export interface SliderSlots {
    mark?: (props: SliderMarkSlot) => any;
    minLabel?: (props: SliderThumbSlot) => any;
    maxLabel?: (props: SliderThumbSlot) => any;
}
export type SliderClasses = {
    main: ConstrClass;
    rail: string;
    thumb: string;
    thumbMin: string;
    thumbMax: string;
    track: string;
    marks: string;
    mark: string;
    label: string;
    select: string;
};