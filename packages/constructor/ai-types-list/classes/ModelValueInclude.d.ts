// md5:42d19419535c0b8da27a00503740937a true
import { RefType } from '@dxtmisha/functional';
/** Manages model value with reactive reference, click handling, and selection modes. @keywords ModelValueInclude model reactive value */
export declare class ModelValueInclude<Value = any> {
    /** Creates model value manager instance. @keywords constructor ModelValueInclude */
    constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined, multiple?: RefType<boolean | undefined> | undefined);
    /** Gets current model value. @keywords getValue model value */
    readonly getValue: () => Value | undefined;
    /** Sets model value. @keywords set model value */
    readonly set: (value?: Value) => void;
    /** Handles click event and updates model value. @keywords onClick click event */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    /** Updates model value directly. @keywords onUpdate update model */
    readonly onUpdate: (value: Value) => void;
}