// md5:8d55dac77f01b3c3e5d949f862c612d6 true
import { type ComputedRef, type VNode } from 'vue';
/** Abstract Vue component constructor managing naming, element refs, attributes, slots, exposed data, and styles. @keywords vue, component, constructor, render, setup */
export declare abstract class DesignConstructorAbstract<E extends Element = Element, COMP extends ConstrComponent = ConstrComponent, EMITS extends ConstrItem = ConstrItem, EXPOSE extends ConstrItem = ConstrItem, SLOTS extends ConstrItem = ConstrItem, CLASSES extends ConstrClasses = ConstrClasses, P extends ConstrItem = ConstrItem> {
    /** Initializes the design constructor instance with name, props, and options. @keywords constructor, init, props, options */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    /** Returns component attributes excluding class and style. @keywords attributes, attrs */
    getAttrs(): ConstrItem;
    /** Returns a sub-element key and its computed class entry. @keywords class, sub-element, styles, class-map */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: CLASSES[K & string] | undefined;
    };
    /** Returns the component DesignName instance. @keywords naming, design-name, bem */
    getNaming(): DesignName;
    /** Combines exposed component data with the root HTML element reference. @keywords expose, root-element, elementHtml */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Registers slot-change tracking and returns the render function. @keywords render, slots, vnode */
    render(): () => VNode | VNode[] | undefined;
}