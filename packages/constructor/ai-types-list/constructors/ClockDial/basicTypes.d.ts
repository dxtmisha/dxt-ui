// md5:37f11871fcec1b6d4a19f2a888938416 true
import { ConstrStyles } from '@dxtmisha/functional';
export type ClockDialMarkItem = {
    name: string;
    rotate: string;
    section: boolean;
    style: ConstrStyles;
    value: number;
    disabled: boolean;
};
export type ClockDialMarkSlot = {
    item: ClockDialMarkItem;
};
export type ClockDialEventItem = {
    clock?: ClockDialProps['type'];
    item?: ClockDialMarkItem;
    value?: number;
};
export type ClockDialComponentInclude = {
    clockDial?: object;
};