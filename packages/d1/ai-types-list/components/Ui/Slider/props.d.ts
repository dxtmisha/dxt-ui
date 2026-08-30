// md5:bcda483bc611391111acc0262961106d true
import { type SliderPropsBasic } from '@dxtmisha/constructor/Slider';
export declare const propsValues: {
    palette: string[];
};
type PropsToken = {
    selected?: boolean;
    disabled?: boolean;
    vertical?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Slider component incoming properties. @keywords slider, properties, props */
export type SliderProps = SliderPropsBasic & PropsToken;
/** Default property values for the Slider component. @keywords slider, defaults */
export declare const defaults: object;