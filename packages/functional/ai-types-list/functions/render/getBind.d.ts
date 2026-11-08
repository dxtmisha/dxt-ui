// md5:a115e3275df510148828c658e5fee4a8 true
import { type ItemList } from '@dxtmisha/functional-basic';

/** Generates a properties object for a subcomponent. @keywords getBind, bind, properties, props, subcomponent */
export declare function getBind<T = unknown, R extends ItemList = ItemList>(value?: T | R | undefined | null, nameExtra?: ItemList | string | undefined, name?: string, except?: boolean): ConstrBind<R>;