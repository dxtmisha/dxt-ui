// md5:af5d62fc8fc7db899166fa0717d435cf true
import { type VNode } from 'vue';
/** Abstract Vue rendering constructor managing naming, element refs, attributes, slots, and styles. @keywords vue, component, constructor, render, setup */
export declare abstract class DesignConstructorAbstract<E extends Element = Element, COMP extends ConstrComponent = ConstrComponent, EMITS extends ConstrItem = ConstrItem, EXPOSE extends ConstrItem = ConstrItem, SLOTS extends ConstrItem = ConstrItem, CLASSES extends ConstrClasses = ConstrClasses, P extends ConstrItem = ConstrItem> {
    /** Initializes the design constructor instance with name, props, and options. @keywords constructor, init, setup, options */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    /** Returns component attributes excluding class and style. @keywords attributes, attrs, filter */
    getAttrs(): ConstrItem;
    /** Returns a sub-element key and its computed class entry. @keywords class, style, sub-element, key */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: CLASSES[K & string] | undefined;
    };
    /** Returns the component naming controller instance. @keywords naming, bem, design-name */
    getNaming(): DesignName;
    /** Combines exposed component data with the root HTML element ref. @keywords expose, elementHtml, ref */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Tracks slot changes and returns the component render function. @keywords render, slots, vnode */
    render(): () => VNode | VNode[] | undefined;
}