// md5:c5496fc1c6a07ce543c0d23ec9376d0d true
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
};

export type ClockDialProps = ClockDialPropsBasic & ClockDialPropsToken;

/** Default value for ClockDial properties. @keywords defaults clock dial properties */
export declare const defaultsClockDial: ClockDialProps;