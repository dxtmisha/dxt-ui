// md5:7580a17b596cbc4f5b1c00c632246781 true
import { type ComputedRef, type VNode } from 'vue';
import { DesignComponents } from './DesignComponents';
import { DesignName } from './DesignName';
import type { ConstrClasses, ConstrComponent, ConstrEmit, ConstrExpose, ConstrItem, ConstrOptions, ConstrStyles } from '../../types/constructorTypes';
/** Abstract Vue rendering constructor combining naming, root element ref, attributes, slots, exposed data, and class/style composition. @keywords vue, constructor, render, abstract, composition */
export declare abstract class DesignConstructorAbstract<E extends Element = Element, COMP extends ConstrComponent = ConstrComponent, EMITS extends ConstrItem = ConstrItem, EXPOSE extends ConstrItem = ConstrItem, SLOTS extends ConstrItem = ConstrItem, CLASSES extends ConstrClasses = ConstrClasses, P extends ConstrItem = ConstrItem> {
    /** Returns attribute object excluding class and style. @keywords attrs, attributes, filter */
    getAttrs(): ConstrItem;
    /** Returns sub-element key and its computed class entry. @keywords class, subelement, key, styles */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: CLASSES[K & string] | undefined;
    };
    /** Returns the DesignName naming helper instance. @keywords naming, design-name, bem */
    getNaming(): DesignName;
    /** Combines exposed component data with the root element ref under elementHtml. @keywords expose, ref, elementHtml */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Disables inheritAttrs, tracks slot changes, and returns the render delegate function. @keywords render, slots, inheritAttrs, vnode */
    render(): () => VNode | VNode[] | undefined;
}