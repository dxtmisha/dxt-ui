// md5:d81034db53a4b500e8cc27e9851f1337 true
import { type CSSProperties, type ReactNode, type RefObject } from 'react';
import { DesignConstructorBasicAbstract } from '@dxtmisha/functional-basic';
/** Base class assembling functional parts, state, and rendering for React design components. @keywords react, design, component, constructor, render */
export declare abstract class DesignConstructorReactAbstract<E extends Element, COMP extends ConstrComponentReact, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> extends DesignConstructorBasicAbstract<COMP, EMITS, EXPOSE, SLOTS, CLASSES, P> {
    /** Initializes the React design component instance. @keywords constructor, init, setup */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptionsReact<COMP, EMITS, P> | undefined);
    /** Returns key and className attributes for a sub-element. @keywords key, className, sub-element */
    getKeyClass<K extends keyof CLASSES>(name: K & string): {
        key: string;
        className: string;
    };
    /** Returns variables and references exposed to parent components via useImperativeHandle. @keywords expose, useImperativeHandle, ref */
    expose(): ConstrExposeReact<E, EXPOSE>;
    /** Renders the component element tree for the React functional component. @keywords render, reactNode, view */
    render(): ReactNode;
}