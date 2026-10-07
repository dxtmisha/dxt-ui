// md5:67b08edad56c2fcf86a4d42ea2366f93 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Clock period types (AM / PM). @keywords clock, period, am, pm */
export declare enum ClockPeriodType {
    am = "am",
    pm = "pm"
}

export type ClockPeriodItem = {
    value: ClockPeriodType;
    label: string;
    selected: boolean;
    disabled: boolean;
};

export type ClockPeriodSlotData = {
    item: ClockPeriodItem;
};

export type ClockPeriodComponentInclude = {
    clockPeriod?: object;
};

export type ClockPeriodPropsInclude<ClockPeriod extends ClockPeriodPropsBasic = ClockPeriodPropsBasic> = {
    disabled?: boolean;
    clockPeriodAttrs?: ConstrBind<ClockPeriod>;
};