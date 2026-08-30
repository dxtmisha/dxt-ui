// md5:00500c1c366665faaf55c93d02d4f275 true
type ClockDialPropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    type?: '12' | '24' | 'minute' | 'second';
};
/** Clock dial basic component properties. @keywords clock, dial, time, picker, properties */
export type ClockDialPropsBasic = ModelProps<number> & EnabledProps & FieldStepProps & {
    /** Current value */
    value?: number;
    /** Current hour value */
    hour?: number;
    /** Current minute value */
    minute?: number;
    /** Current second value */
    second?: number;
    /** Clock display mode without selection */
    clock?: boolean;
    /** Display time text in clock mode */
    showTime?: boolean;
};
/** Clock dial component properties. @keywords clock, dial, time, picker */
export type ClockDialProps = ClockDialPropsBasic & ClockDialPropsToken;
/** Default properties for ClockDial component. @keywords clock, dial, defaults */
export declare const defaultsClockDial: ClockDialProps;