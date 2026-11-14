// md5:9c0172efa9e295cb797cb635e0fc779a true
import type { Component } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';
import type { ConstrBind } from './constructorTypes';
/** Stored component definition and default properties. @keywords component, storage, props */
export type ComponentStorageData<C extends Component = Component, P extends ItemList = ItemList> = {
    /** Vue component definition. */
    component: C;
    /** Default component properties. */
    props?: P;
};
/** Component registration item with identifier. @keywords component, registry, name */
export type ComponentStorageItem<C extends Component = Component, P extends ItemList = ItemList> = ComponentStorageData<C, P> & {
    /** Component name identifier. */
    name: string;
};
export type ComponentStorageList = ComponentStorageItem[];
/** Component with merged and bound properties retrieved from storage. @keywords component, return, props */
export type ComponentStorageReturn<C extends Component = Component, P extends ItemList = ItemList> = {
    /** Vue component definition. */
    component: C;
    /** Merged component properties. */
    props: ConstrBind<P>;
};