// md5:b1e019f5b1b705eda7e372ee72c7126d true
import { type ComputedRef, type Ref, type VNode, type VNodeArrayChildren } from 'vue';

/** Vue reactive reference (Ref or ComputedRef). @keywords vue ref computed */
export type RefType<T> = ComputedRef<T> | Ref<T>;
/** Vue reactive reference that can be undefined. @keywords vue ref undefined */
export type RefUndefined<T> = RefType<T | undefined>;
/** Vue reactive reference or raw unwrapped value. @keywords vue ref value */
export type RefOrNormal<T> = RefType<T> | T;
/** Vue reactive reference, raw value, or getter function. @keywords vue ref getter */
export type RefOrNormalOrFunction<T> = RefOrNormal<T> | (() => RefOrNormal<T>);
/** Vue raw children content (primitives, VNodes, array, or render function). @keywords vue vnode children */
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);
/** Vue raw slots definition with optional stability flag. @keywords vue slots */
export type RawSlots = {
    [name: string]: unknown;
    /** Stability flag for slot optimization. @keywords vue slot stable */
    $stable?: boolean;
};