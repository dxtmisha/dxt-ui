// md5:26996471f0298427abbfad5135e97c4d true
import { ConstrClass } from '@dxtmisha/functional';

export type SliderFieldComponents = SliderComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & IconComponentInclude;

export type SliderFieldEmits = FieldBasicEmits<SliderValueType>;

export interface SliderFieldExpose extends FieldBasicExpose<SliderValueType> {
}

/** Slider field slots definition @keywords slider field slots */
export interface SliderFieldSlots extends FieldLabelSlotsInclude, SliderSlots {
    /** Slot for leading content @keywords leading slot */
    leading?: (props: any) => any;
    /** Slot for trailing content @keywords trailing slot */
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