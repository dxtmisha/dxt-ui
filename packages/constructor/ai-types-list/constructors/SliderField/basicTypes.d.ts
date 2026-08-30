// md5:949fe5dd6bf91f7cdd8cfdad6021d5f4 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Configuration interface specifying components required for SliderField. @keywords slider field, component include */
export type SliderFieldComponentInclude = {
    /** SliderField component configuration */
    sliderField?: object;
};

/** Configuration interface for including SliderField properties. @keywords slider field, props include, binding */
export type SliderFieldPropsInclude<SliderField extends SliderFieldPropsBasic = SliderFieldPropsBasic> = {
    /** SliderField configuration */
    sliderField?: ConstrBind<SliderField>;
};