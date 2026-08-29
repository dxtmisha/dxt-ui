// md5:174094434a3deb7f9638c7130f4ae953 true
import { type VNode } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';

/** Renders a component into a VNode with cached, immutable data. @keywords render vnode component vue */
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;