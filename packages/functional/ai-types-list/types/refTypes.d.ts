// md5:7c633e57fa37c04854c1ee175b8a11ef true
import { ComputedRef, Ref, VNode, VNodeArrayChildren } from 'vue';

/**
 * Union type for Vue reactive references (computed or ref)
 * @keywords ref type computed reactive
 */
export type RefType<T> = ComputedRef<T> | Ref<T>;

/**
 * Union type for Vue reactive references that can be undefined
 * @keywords ref undefined computed reactive
 */
export type RefUndefined<T> = RefType<T | undefined>;

/**
 * Union type that can be either a Vue reactive reference or a normal value
 * @keywords ref normal value reactive
 */
export type RefOrNormal<T> = RefType<T> | T;

/**
 * Union type that can be a Vue reactive reference, normal value, or function returning them
 * @keywords ref normal function reactive
 */
export type RefOrNormalOrFunction<T> = RefOrNormal<T> | (() => RefOrNormal<T>);

/**
 * Union type for Vue raw children content
 * @keywords raw children vnode array
 */
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);

/**
 * Type for Vue raw slots with optional stability flag
 * @keywords raw slots stable vue
 */
export type RawSlots = {
    [name: string]: unknown;
    $stable?: boolean;
};