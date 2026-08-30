// md5:12373b695bf8382f62f890f2418cf5c9 true
import type { ConstrClass } from '@dxtmisha/functional';

export type SliderComponents = RippleComponentInclude;

export type SliderEmits = ModelEmits<SliderValueType> & {
    /** Emitted on slider value input @keywords slider, input, event */
    input: [detail: SliderEventDetail];
    /** Emitted on slider value input lite version @keywords slider, input, lite */
    inputLite: [value: SliderValueType];
    /** Emitted on slider value change commit @keywords slider, change, event */
    change: [detail: SliderEventDetail];
    /** Emitted on slider value change commit lite version @keywords slider, change, lite */
    changeLite: [value: SliderValueType];
};

export interface SliderExpose {
    /** Gets current slider value @keywords slider, get, value */
    getValue: () => SliderValueType;
    /** Sets slider value programmatically @keywords slider, set, value */
    setValue: (value: SliderValueType) => void;
    /** Increases current value by step @keywords slider, increase, step */
    increase: () => void;
    /** Decreases current value by step @keywords slider, decrease, step */
    decrease: () => void;
}

export interface SliderSlots {
    /** Custom mark rendering slot @keywords slider, slot, mark */
    mark?: (props: SliderMarkSlot) => any;
    /** Min thumb label slot @keywords slider, slot, min-label */
    minLabel?: (props: SliderThumbSlot) => any;
    /** Max thumb label slot @keywords slider, slot, max-label */
    maxLabel?: (props: SliderThumbSlot) => any;
}

export type SliderClasses = {
    /** Main CSS class @keywords slider, class, main */
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