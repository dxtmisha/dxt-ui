// md5:a78691aa49d2e79d7a13c30f28a30930 true
import type { ListRecord, NumberOrString } from '@dxtmisha/functional';
type SliderPropsToken = {
    selected?: boolean;
    disabled?: boolean;
    vertical?: boolean;
};
/** Basic properties for the Slider component. @keywords slider, props, basic */
export type SliderPropsBasic = ModelProps & FieldStepProps & EnabledProps & SkeletonPropsInclude & {
    /** Input field name. */
    name?: string;
    /** Current value or range. */
    value?: SliderValueProp;
    /** List of marks or tick values. */
    marks?: ListRecord<SliderMarkItem> | number[];
    /** Magnetize thumb position to nearest mark. */
    magnet?: boolean;
    /** Property key for text label. */
    keyLabel?: string;
    /** Property key for value. */
    keyValue?: string;
    /** Required input state. */
    required?: boolean;
    /** Dual-thumb range selection mode. */
    multiple?: boolean;
    /** Minimum distance between thumbs in range mode. */
    minimumDistance?: NumberOrString;
    /** Vertical layout orientation. */
    vertical?: boolean;
    /** Show thumb value label element. */
    showThumbLabel?: boolean;
    /** Additional attributes for the input element. */
    inputAttrs?: Partial<HTMLInputElement>;
};
/** Incoming properties for the Slider component. @keywords slider, props */
export type SliderProps = SliderPropsBasic & SliderPropsToken;
/** Default property values for the Slider component. @keywords slider, defaults */
export declare const defaultsSlider: {
    keyLabel: string;
    keyValue: string;
    step: number;
    max: number;
    min: number;
    minimumDistance: number;
    showThumbLabel: boolean;
};