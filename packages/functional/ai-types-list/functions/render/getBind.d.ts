// md5:f7adb21af33996aa008f6cc20c56b177 true
import { type ItemList } from '@dxtmisha/functional-basic';
/** Generates binding properties for a subcomponent. @keywords bind, props, subcomponent, generate */
export declare function getBind<T, R extends ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string, name?: string, except?: boolean): ConstrBind<R>;