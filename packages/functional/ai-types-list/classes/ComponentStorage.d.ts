// md5:22ce44ef0b0905ab5f8f4360880a151d true
import type { Component } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';
import { ComponentStorageInstance } from './ComponentStorageInstance';
import type { ComponentStorageList, ComponentStorageReturn } from '../types/componentStorageTypes';
/** Static facade for storing and resolving Vue components with default properties. @keywords vue component storage registry facade */
export declare class ComponentStorage {
    /** Retrieves a registered component by name and merges default properties with provided props. @keywords get resolve component props merge */
    static get<C extends Component = Component, P extends ItemList = ItemList>(name: string, props?: P): ComponentStorageReturn<C, P> | undefined;
    /** Checks if a component is registered in the storage. @keywords has check exists component */
    static has(name: string): boolean;
    /** Returns the shared ComponentStorageInstance instance. @keywords get item instance storage */
    static getItem(): ComponentStorageInstance;
    /** Registers a Vue component with optional default properties. @keywords add register component props */
    static add<C extends Component = Component, P extends ItemList = ItemList>(name: string, component: C, props?: P): void;
    /** Registers a list of Vue components with default properties. @keywords add list batch register components */
    static addList(list: ComponentStorageList): void;
}