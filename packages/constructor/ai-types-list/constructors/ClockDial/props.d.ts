// md5:ace3f86b380e488be635d2782cbec399 true
export type ClockDialPropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    type?: '12' | '24' | 'minute' | 'second';
};
export type ClockDialPropsBasic = ModelProps<number> & EnabledProps & FieldStepProps & {
    value?: number;
    hour?: number;
    minute?: number;
    second?: number;
    clock?: boolean;
    showTime?: boolean;
};
export type ClockDialProps = ClockDialPropsBasic & ClockDialPropsToken;
/** Default properties configuration for ClockDial. @keywords clock, dial, defaults */
export declare const defaultsClockDial: ClockDialProps;