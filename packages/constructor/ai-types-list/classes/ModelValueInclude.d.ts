// md5:6ef1c72c3caf415c1bc9c9fec12cc1a1 true
import { RefType } from '@dxtmisha/functional';
export declare class ModelValueInclude<Value = any> {
    /** Creates a model value manager instance. @keywords model value constructor init */
    constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined, multiple?: RefType<boolean | undefined> | undefined);
    /** Returns current model value. @keywords get value current */
    getValue(): Value | undefined;
    /** Sets model value. @keywords set value update */
    set(value?: Value): void;
    /** Handles click events to update model value. @keywords click handler event */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    /** Directly updates model value. @keywords update model value */
    readonly onUpdate: (value: Value) => void;
}