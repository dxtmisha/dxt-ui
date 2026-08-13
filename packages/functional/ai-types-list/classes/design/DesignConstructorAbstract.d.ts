// md5:aab6d6864d240f9e03b65f0f7a34dd68 true
import { ComputedRef, ToRefs, VNode, Ref } from 'vue';
/** Component constructor abstract class. @keywords design constructor abstract component */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    /** Creates instance of design constructor. @keywords constructor design */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    /** Initializes instance properties. @keywords init design */
    protected init(): this;
    /** Gets full class name. @keywords get name class */
    getName(): string;
    /** Gets design prefix/name. @keywords get design */
    getDesign(): string;
    /** Gets sub-class name by levels. @keywords get sub class */
    getSubClass(name: string | string[]): string;
    /** Gets status modifier class name. @keywords get status class */
    getStatusClass(name: string | string[]): string;
    /** Gets CSS custom property name. @keywords get style var */
    getStyle(name: string | string[]): string;
    /** Gets filtered element attributes. @keywords get attrs */
    getAttrs(): ConstrItem;
    /** Exposes public component properties and element. @keywords expose component */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Returns component render function. @keywords render function */
    render(): () => VNode | (VNode | any)[] | undefined;
    /** Initializes exposed context. @keywords init expose */
    protected abstract initExpose(): EXPOSE;
    /** Initializes computed CSS classes. @keywords init classes */
    protected abstract initClasses(): Partial<CLASSES>;
    /** Initializes computed inline styles. @keywords init styles */
    protected abstract initStyles(): ConstrStyles;
    /** Renders component template VNode. @keywords init render */
    protected abstract initRender(): VNode | (VNode | any)[] | undefined;
    /** Initializes slot content and optionally pushes to children. @keywords init slot */
    protected initSlot<K extends keyof SLOTS>(name: K, children?: any[], props?: ConstrItem): VNode | undefined;
    /** Normalizes class definition into class object map. @keywords to class */
    protected toClass(classes?: ConstrClass): ConstrClassObject;
    /** Maps class definition placeholders to component names. @keywords to class name */
    protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T;
}