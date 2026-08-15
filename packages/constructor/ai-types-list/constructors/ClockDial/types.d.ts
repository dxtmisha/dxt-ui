// md5:ea36d02b5c1388f35ea0e4ddb27db3a7 true
import { ConstrClass } from '@dxtmisha/functional';

export type ClockDialComponents = {};

export type ClockDialEmits = ModelEmits<number> & {
    /** Input event triggered on selection change @keywords input selection change */
    input: [event: ClockDialEventItem, value: number];
    /** Input event lite version @keywords input lite value */
    inputLite: [value: number];
    /** Change event triggered on interaction end @keywords change interaction end */
    change: [event: ClockDialEventItem, value: number];
    /** Change event lite version @keywords change lite value */
    changeLite: [value: number];
};

export interface ClockDialExpose {
    /** Get current selected value @keywords get value selected */
    getValue(): number | undefined;
    /** Set new value @keywords set value */
    setValue(value?: number): void;
    /** Select mark item by client coordinates @keywords select coordinates client mark */
    selectByCoordinates(clientX: number, clientY: number): ClockDialMarkItem | null;
}

export interface ClockDialSlots {
    /** Default center dial slot @keywords default center dial slot */
    default?(props: any): any;
    /** Custom clock item slot @keywords custom clock item slot */
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