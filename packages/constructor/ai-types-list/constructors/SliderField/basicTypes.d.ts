// md5:de76594537667e4914ca1bcfeeef2dd9 true
import { ConstrBind } from '@dxtmisha/functional';

export type SliderFieldComponentInclude = {
    sliderField?: object;
};

export type SliderFieldPropsInclude<SliderField extends SliderFieldPropsBasic = SliderFieldPropsBasic> = {
    sliderField?: ConstrBind<SliderField>;
};