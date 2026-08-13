// md5:dbdc3e4987dfe96a9b4f981b7ae7e1a6 true
import { ListRecord, NumberOrString } from '@dxtmisha/functional';
type SliderPropsToken = {
    selected?: boolean;
    disabled?: boolean;
    vertical?: boolean;
};
/** Slider component basic properties @keywords slider props basic configuration */
export type SliderPropsBasic = ModelProps & FieldStepProps & EnabledProps & SkeletonPropsInclude & {
    name?: string;
    value?: SliderValueProp;
    marks?: ListRecord<SliderMarkItem> | number[];
    magnet?: boolean;
    keyLabel?: string;
    keyValue?: string;
    required?: boolean;
    multiple?: boolean;
    minimumDistance?: NumberOrString;
    vertical?: boolean;
    showThumbLabel?: boolean;
    inputAttrs?: Partial<HTMLInputElement>;
};
/** Incoming slider properties @keywords slider props configuration */
export type SliderProps = SliderPropsBasic & SliderPropsToken;
/** Default slider configuration values @keywords slider defaults config */
export declare const defaultsSlider: {
    keyLabel: string;
    keyValue: string;
    step: number;
    max: number;
    min: number;
    minimumDistance: number;
    showThumbLabel: boolean;
};
export {};