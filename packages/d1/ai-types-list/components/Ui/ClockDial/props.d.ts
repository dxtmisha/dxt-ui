// md5:24e60b063542b9d7d34d068651c31c3b true
import { ClockDialPropsBasic } from '@dxtmisha/constructor/ClockDial';
/** Allowed values for props configuration. @keywords propsValues, config */
export declare const propsValues: {
    type: string[];
    palette: string[];
};
type PropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    type?: '12' | '24' | 'minute' | 'second';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Clock dial component properties. @keywords ClockDialProps, properties */
export type ClockDialProps = ClockDialPropsBasic & PropsToken;
/** Default property values. @keywords defaults, object */
export declare const defaults: object;
export {};