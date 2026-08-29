// md5:3e44586cb23f33203a3eda410ed0e15a true
import { type VNode } from 'vue';

/** Abstract class for functional component constructors and design systems. @keywords constructor, design, component */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    /** Gets component class name. @keywords name, class */
    getName(): string;
    /** Gets design system name. @keywords design */
    getDesign(): string;
    /** Gets sub-class name by hierarchy levels. @keywords sub-class, bem */
    getSubClass(name: string | string[]): string;
    /** Gets status class name. @keywords status, class */
    getStatusClass(name: string | string[]): string;
    /** Gets style property name. @keywords style, css */
    getStyle(name: string | string[]): string;
    /** Gets additional attributes. @keywords attrs, attributes */
    getAttrs(): ConstrItem;
    /** Gets key and class attributes for sub-element. @keywords key, class, element */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: any;
    };
    /** Exposes component instance properties and methods. @keywords expose, ref */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Creates render function for component setup. @keywords render, vnode */
    render(): () => VNode | (VNode | any)[] | undefined;
}