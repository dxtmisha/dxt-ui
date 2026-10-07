// md5:6a98253e95f6790bf39b220558d27c36 true
import type { ConstrClass } from '@dxtmisha/functional';

export type ClockPeriodComponents = {};
export type ClockPeriodEmits = ModelEmits<ClockPeriodType> & EventClickEmits;

export interface ClockPeriodExpose {
    /** Gets the currently selected period value. @keywords period, get, value */
    get(): ClockPeriodType | undefined;
    /** Sets a new period value. @keywords period, set, value */
    set(value?: ClockPeriodType): void;
    /** Sets the period value corresponding to a given hour. @keywords period, set, hour */
    setByHour(hour?: number): void;
}

export interface ClockPeriodSlots {}

export type ClockPeriodClasses = {
    main: ConstrClass;
    item: string;
    am: string;
    pm: string;
};