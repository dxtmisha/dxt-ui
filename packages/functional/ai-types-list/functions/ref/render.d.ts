// md5:174094434a3deb7f9638c7130f4ae953 true
import { type VNode } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';

/** Renders and caches immutable VNode component structures. @keywords render, vnode, component, cache */
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;