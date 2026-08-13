// md5:a126f0f3969c7b010f5d5d4ce1ece480 true
import { ConstrEmit } from '@dxtmisha/functional';

/** @keywords field event handler input change */
export declare class FieldEventInclude {
    /** @keywords constructor init */
    constructor(props: FieldAllProps, change: FieldChangeInclude, value: FieldValueInclude, validation?: FieldValidationInclude | undefined, emits?: ConstrEmit<FieldBasicEmits> | undefined);
    /** @keywords check enabled status */
    isEnabled(): boolean;
    readonly onBlur: () => void;
    readonly onInput: (event: InputEvent, data?: Record<string, any>) => void;
    readonly onChange: (event?: InputEvent | Event) => void;
    readonly onSelect: (event: Event, data?: Record<string, any>) => void;
    readonly onChecked: (event: Event) => void;
    readonly onRadio: (event: Event) => void;
    readonly onClear: (event: MouseEvent) => void;
    readonly onValue: (value: any) => void;
    readonly on: <E>(event?: E, type?: string & keyof FieldBasicEmits) => this;
}