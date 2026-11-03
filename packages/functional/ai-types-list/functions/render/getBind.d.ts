// md5:92fd9f6e07b86463aee9309175234900 true
import { type ItemList } from '@dxtmisha/functional-basic';
/** Generates properties for a subcomponent binding. @keywords subcomponent, properties, binding, bind */
export declare function getBind<T = unknown, R extends ItemList = ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string | undefined, name?: string, except?: boolean): ConstrBind<R>;