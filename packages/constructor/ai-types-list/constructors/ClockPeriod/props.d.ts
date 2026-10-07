// md5:86398e928ee5f11c9c3a62de4e19aabd true
type ClockPeriodPropsToken = {
    readonly?: boolean;
    disabled?: boolean;
    orientation?: 'vertical' | 'horizontal';
};
/** Basic properties for ClockPeriod component @keywords clock period props basic */
export type ClockPeriodPropsBasic = ModelProps<ClockPeriodType> & EnabledProps & TextAmPropsInclude & TextPmPropsInclude & {
    value?: ClockPeriodType;
};
/** ClockPeriod component properties @keywords clock period props */
export type ClockPeriodProps = ClockPeriodPropsBasic & ClockPeriodPropsToken;
/** Default property values for ClockPeriod component @keywords clock period defaults */
export declare const defaultsClockPeriod: ClockPeriodProps;