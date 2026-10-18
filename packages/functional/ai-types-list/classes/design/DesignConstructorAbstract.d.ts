// md5:cee8d6893ce837c4ad56c5186806333b true
import { type VNode } from 'vue';
/** Base abstract constructor for assembling functional components and managing reactive state in Vue. @keywords component, constructor, reactive, design */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    /** Retrieves additional component attributes. @keywords attributes, attrs, props */
    getAttrs(): ConstrItem;
    /** Retrieves key and class attributes for a sub-element. @keywords key, class, sub-element, styling */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: any;
    };
    /** Returns the component naming helper instance. @keywords naming, helper, BEM, prefix */
    getNaming(): DesignName;
    /** Returns exposed external variables and elements. @keywords expose, public API, ref */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Returns the render function for Vue setup. @keywords render, setup, VNode */
    render(): () => VNode | VNode[] | undefined;
}