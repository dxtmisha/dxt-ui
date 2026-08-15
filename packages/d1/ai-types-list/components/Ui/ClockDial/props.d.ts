// md5:2af277285f5a7e7ce98fd51dcd16458a true
import { ClockDialPropsBasic } from '@dxtmisha/constructor/ClockDial';
/** Allowed property types for the clock dial. @keywords propsValues, types */
export declare const propsValues: {
    type: string[];
};
type PropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    type?: '12' | '24' | 'minute' | 'second';
};
/** Combined properties for the clock dial component. @keywords ClockDialProps, properties */
export type ClockDialProps = ClockDialPropsBasic & PropsToken;
/** Default values for clock dial properties. @keywords defaults, configuration */
export declare const defaults: object;
export {};