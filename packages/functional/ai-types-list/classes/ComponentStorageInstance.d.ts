// md5:38f7e4cbf63ea5a06c979b23b8834821 true
import type { Component } from 'vue';
import { type ItemList } from '@dxtmisha/functional-basic';
import type { ComponentStorageData, ComponentStorageList, ComponentStorageReturn } from '../types/componentStorageTypes';
/** Stores and resolves Vue components with default properties. @keywords vue component storage registry resolve */
export declare class ComponentStorageInstance {
    /** Initializes storage with an optional component list. @keywords constructor init component storage */
    constructor(list?: ComponentStorageList);
    /** Retrieves registered component by name, merging default properties with passed props. @keywords get resolve component props bind */
    get<C extends Component = Component, P extends ItemList = ItemList>(name: string, props?: P): ComponentStorageReturn<C, P> | undefined;
    /** Checks whether a component is registered by name. @keywords has check exists component */
    has(name: string): boolean;
    /** Registers a Vue component with optional default props. @keywords add register component props */
    add<C extends Component = Component, P extends ItemList = ItemList>(name: string, component: C, props?: P): this;
    /** Registers multiple Vue components with default props. @keywords addList register batch components */
    addList(list: ComponentStorageList): this;
}