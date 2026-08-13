// md5:ac5707b41ebaba90611db22f8c96c6f7 true
import { Ref } from 'vue';
import { RefType } from '@dxtmisha/functional';

/** Model synchronization and two-way data binding manager. @keywords ModelInclude sync v-model data-binding */
export declare class ModelInclude<Value = string> {
    /** Creates model include instance. @keywords constructor ModelInclude */
    constructor(index: string, emits?: any | undefined, syncValue?: RefType<Value> | undefined);
    /** Checks if syncValue is a mutable reference. @keywords isValue type-guard ref mutable */
    isValue(): this is {
        syncValue: Ref<Value>;
    };
    /** Generates v-model binding object. @keywords getBinds v-model binding */
    getBinds(): {
        [x: string]: Value | ((value: Value) => void);
    };
    /** Updates the synchronized value. @keywords update set-value */
    readonly update: (value: Value) => void;
    /** Emits model update event. @keywords emit event */
    emit(value: Value): void;
}