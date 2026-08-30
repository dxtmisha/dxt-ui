// md5:f1aae2bc7269dd1301efacbc7136d003 true
import { type ClockDialPropsBasic } from '@dxtmisha/constructor/ClockDial';
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
/** ClockDial component incoming properties @keywords clock, dial, props */
export type ClockDialProps = ClockDialPropsBasic & PropsToken;
/** Default property values for ClockDial @keywords clock, dial, defaults */
export declare const defaults: object;