// md5:009a7b1fc6f6ae2a866d95fcfbd52d54 true
import type { ConstrClass } from '@dxtmisha/functional';

export type ClockDialComponents = {};

export type ClockDialEmits = ModelEmits<number> & {
    /** Triggered on selection change. @keywords event, input */
    input: [
        event: ClockDialEventItem,
        value: number
    ];
    /** Simplified input event with value only. @keywords event, input, lite */
    inputLite: [
        value: number
    ];
    /** Triggered when interaction ends. @keywords event, change */
    change: [
        event: ClockDialEventItem,
        value: number
    ];
    /** Simplified change event with value only. @keywords event, change, lite */
    changeLite: [
        value: number
    ];
};

export interface ClockDialExpose {
    /** Gets current selected value. @keywords value, getter, clock */
    getValue(): number | undefined;
    /** Sets new value. @keywords value, setter, clock */
    setValue(value?: number): void;
    /** Selects mark item by client coordinates. @keywords select, coordinates, mark */
    selectByCoordinates(clientX: number, clientY: number): ClockDialMarkItem | null;
}

export interface ClockDialSlots {
    /** Default center dial slot. @keywords slot, default, dial */
    default?(props: any): any;
    /** Custom clock item slot. @keywords slot, item, mark */
    item?(props: ClockDialMarkSlot): any;
}

export type ClockDialClasses = {
    main: ConstrClass;
    list: string;
    value: string;
    name: string;
    info: string;
    arrow: string;
    arrowHour: string;
    arrowMinute: string;
    arrowSecond: string;
    arrowSelect: string;
    point: string;
    dial: string;
    censor: string;
};