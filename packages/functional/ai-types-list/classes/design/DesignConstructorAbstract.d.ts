// md5:de73a9df33fabb24892d582994e147c1 true
import { type VNode } from 'vue';
/** Base abstract class managing component lifecycle, reactive state, slots, and rendering in Vue. @keywords vue, component, constructor, abstract, state */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    /** Retrieves additional element attributes. @keywords attributes, attrs, props */
    getAttrs(): ConstrItem;
    /** Retrieves key and class attributes for a specified sub-element. @keywords key, class, sub-element */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: any;
    };
    /** Returns the component naming helper instance. @keywords naming, helper, bem */
    getNaming(): DesignName;
    /** Returns exposed external variables and component instance references. @keywords expose, public-api, ref */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Generates a reactive render function for the component. @keywords render, vnode, view */
    render(): () => VNode | VNode[] | undefined;
}