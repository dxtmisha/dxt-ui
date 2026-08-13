// md5:b333b61ebeecf40dbb560a75ec154095 true
import { ToRefs, Ref, ComputedRef } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';

/** Manages input reactive value state, conversions, and Vue props synchronization. @keywords field value input state */
export declare class FieldValueInclude<Value = any> {
    /** Creates FieldValueInclude instance. @keywords constructor initialize */
    constructor(props: FieldValueProps<Value>, refs: ToRefs<FieldValueProps<Value>>, element?: FieldElementInclude | undefined, original?: RefOrNormal<Value> | undefined, isMultiple?: boolean);
    /** Returns current value if isFull is true. @keywords computed item full */
    readonly itemByFull: ComputedRef<Value | undefined>;
    /** Returns value converted to a number. @keywords number getter */
    get number(): number;
    /** Returns value of type string. @keywords string getter */
    get string(): string;
    /** Returns value of type boolean. @keywords boolean getter */
    get boolean(): boolean;
    /** Returns length of the entered value. @keywords length getter */
    get length(): number;
    /** Checks if there are values or temporary values. @keywords has values */
    is(): boolean;
    /** Checks if there are any values. @keywords is value */
    isValue(): boolean;
    /** Returns the current value. @keywords get value */
    get(): Value | undefined;
    /** Returns current value as an array. @keywords array values */
    getToArray(): Value[];
    /** Returns value properties for component exposure. @keywords expose value */
    readonly expose: () => {
        value: Ref<Value | undefined, Value | undefined>;
        getValue: () => Value | undefined;
    };
    /** Changes the value. @keywords set value */
    set(value: any): this;
    /** Changes values by the selected element or event. @keywords set by event */
    setByEvent(eventValue: Event | Record<string, any> | any): this;
    /** Changes values by the selected element. @keywords set by target */
    setByTarget(target: HTMLInputElement): this;
    /** Changes value by the checked property. @keywords set by checked */
    setByChecked(event: Event): this;
    /** Changes value for radio type. @keywords set by radio */
    setByRadio(event: Event): this;
    /** Sets the isFull value. @keywords set full */
    setFull(isFull: boolean): void;
    /** Sets the hasEdit value. @keywords set has edit */
    setHasEdit(hasEdit: boolean): void;
    /** Sets the value to the original one. @keywords set to original */
    setToOriginal(): this;
    /** Clear all values to the original ones. @keywords clear reset */
    clear(): this;
}