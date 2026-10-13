// md5:08e1cf87a5c26c1ed27302e8e201142f true
import { type VNode } from 'vue';
import { DesignConstructorBasicAbstract } from '@dxtmisha/functional-basic';
/** Base class for functional components and reactive state management in Vue. @keywords vue component constructor reactive state render */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> extends DesignConstructorBasicAbstract<COMP, EMITS, EXPOSE, SLOTS, CLASSES, P> {
    /** Retrieves key and class attributes for a sub-element. @keywords element key class attributes */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: K & string;
        class: any;
    };
    /** Exposes external variables and instance references. @keywords expose public api context */
    expose(): ConstrExpose<E, EXPOSE>;
    /** Generates the render function for component setup. @keywords render vnode setup dom */
    render(): () => VNode | (VNode | any)[] | undefined;
}