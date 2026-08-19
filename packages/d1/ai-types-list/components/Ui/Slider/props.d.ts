// md5:ce1093b0bdaf3a56b17ae1545baabcac true
import { SliderPropsBasic } from '@dxtmisha/constructor/Slider';
/** Default values for slider properties @keywords defaults, slider, config */
export declare const propsValues: {
    palette: string[];
};
type PropsToken = {
    selected?: boolean;
    disabled?: boolean;
    vertical?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Slider properties combining basic config and token styles @keywords slider, props, types */
export type SliderProps = SliderPropsBasic & PropsToken;
/** Default object configuration for slider @keywords defaults, object, slider */
export declare const defaults: object;