// md5:7cb0661d2825e4abeb90ef048f4400df true
import { ComputedRef, ToRefs, VNode, Ref } from 'vue';

/** Abstract base class for functional components and design constructors. @keywords design constructor, abstract component, vue */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    /** Creates an instance of DesignConstructorAbstract. @keywords constructor, initialize */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    protected init(): this;
    /** Gets the class name. @keywords get name, class */
    getName(): string;
    /** Gets the design name. @keywords get design, name */
    getDesign(): string;
    /** Gets sub-class names by levels. @keywords sub class, levels */
    getSubClass(name: string | string[]): string;
    /** Gets status class names. @keywords status class, state */
    getStatusClass(name: string | string[]): string;
    /** Gets style property names. @keywords style property, css */
    getStyle(name: string | string[]): string;
    /** Gets additional attributes. @keywords get attributes, attrs */
    getAttrs(): ConstrItem;
    /** Gets key and class attributes for a sub-element. @keywords key class, sub element */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: any;
    };
    /** Exposes available external variables. @keywords expose, public api */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Renders the component setup. @keywords render function, setup */
    render(): () => VNode | (VNode | any)[] | undefined;
    /** Initializes exposed properties. @keywords init expose, abstract */
    protected abstract initExpose(): EXPOSE;
    /** Initializes and improves the list of classes. @keywords init classes, abstract */
    protected abstract initClasses(): Partial<CLASSES>;
    /** Initializes and refines styles. @keywords init styles, abstract */
    protected abstract initStyles(): ConstrStyles;
    /** Renders the component content. @keywords init render, abstract */
    protected abstract initRender(): VNode | (VNode | any)[] | undefined;
    /** Initializes a component slot. @keywords init slot, template */
    protected initSlot<K extends keyof SLOTS>(name: K, children?: any[], props?: ConstrItem): VNode | undefined;
    /** Transforms a class value into an object. @keywords to class, object */
    protected toClass(classes?: ConstrClass): ConstrClassObject;
    /** Converts a class name to the component standard. @keywords to class name, standard */
    protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T;
}