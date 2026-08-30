// md5:3e44586cb23f33203a3eda410ed0e15a true
import { type ComputedRef, type ToRefs, type VNode } from 'vue';
/** Abstract base constructor for collecting and managing functional design components. @keywords design constructor, abstract component */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    /** Gets the component class name. @keywords component name, class name */
    getName(): string;
    /** Gets the design name. @keywords design name */
    getDesign(): string;
    /** Gets the sub-element class name by hierarchical level. @keywords sub class, class name */
    getSubClass(name: string | string[]): string;
    /** Gets the status modifier class name. @keywords status class, state */
    getStatusClass(name: string | string[]): string;
    /** Gets the style property name. @keywords style property */
    getStyle(name: string | string[]): string;
    /** Gets additional component attributes. @keywords attributes, attrs */
    getAttrs(): ConstrItem;
    /** Gets key and class attributes for a sub-element. @keywords key class, sub element */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: any;
    };
    /** Exposes public properties and methods to the component instance. @keywords expose, public api */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Render function generator for the setup execution context. @keywords render, setup */
    render(): () => VNode | (VNode | any)[] | undefined;
}