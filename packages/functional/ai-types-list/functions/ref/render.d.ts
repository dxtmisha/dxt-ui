// md5:6b3334f7538c193cb03f603585818467 true
import { VNode } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';

/** Render virtual node with cached properties. @keywords render, vnode, components */
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;