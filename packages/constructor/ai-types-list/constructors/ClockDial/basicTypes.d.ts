// md5:c0debe438522fbfa9634561518cff460 true
import type { ConstrStyles } from '@dxtmisha/functional';

/** Clock dial tick mark item data @keywords clock, dial, mark, item */
export type ClockDialMarkItem = {
    /** Display label */
    name: string;
    /** Rotation angle CSS string */
    rotate: string;
    /** Inner section indicator for 24-hour mode */
    section: boolean;
    /** Inline custom CSS styles */
    style: ConstrStyles;
    /** Numeric value */
    value: number;
    /** Disabled state */
    disabled: boolean;
};

/** Clock dial mark slot payload data @keywords clock, dial, slot */
export type ClockDialMarkSlot = {
    item: ClockDialMarkItem;
};

/** Event payload item for ClockDial @keywords clock, dial, event */
export type ClockDialEventItem = {
    clock?: ClockDialProps['type'];
    item?: ClockDialMarkItem;
    value?: number;
};

/** ClockDial component inclusion type @keywords clock, dial, component */
export type ClockDialComponentInclude = {
    clockDial?: object;
};