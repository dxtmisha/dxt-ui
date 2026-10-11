// md5:4a3f0f991802bb403ddf9a281d997f16 true
import type { ReactElement, ReactNode } from 'react';
import { DesignComponentsAbstract } from '@dxtmisha/functional-basic';

/** Manages connected React design system components, applies prop modifications, and renders elements. @keywords react, components, design-system, renderer */
export declare class DesignCompReact<COMP extends ConstrComponentReact, P extends ConstrItem> extends DesignComponentsAbstract<COMP, P, ReactElement, ReactNode> {
    /** Initializes connected components map and modification rules. @keywords constructor, init */
    constructor(components?: COMP, modification?: ConstrComponentModReact<P>);
    /** Returns modified properties for a connected component. @keywords modification, props, transform */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | ConstrItem): ConstrItem | undefined;
    /** Renders a connected React component by name with applied modifications and children. @keywords render, component, react-element */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: ReactNode, index?: PK & string | string): ReactElement | undefined;
}