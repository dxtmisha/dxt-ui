// md5:ca6a2d65566e1fa53fb1dec061ec2dfd true
import { h, type VNode } from 'vue';
import type { ItemList } from '@dxtmisha/functional-basic';
/** Creates a VNode with an automatic key when omitted, preserving explicit keys. @keywords vue, render, vnode, auto key, h */
export declare function render<T extends ItemList = ItemList>(name: Parameters<typeof h>[0], props?: T, children?: RawChildren | RawSlots, index?: string): VNode;