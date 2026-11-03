// md5:b46960d70805dd80a77624cf53ff94d5 true
import { type ItemList } from '@dxtmisha/functional-basic';

/** Returns the normalized class name from component properties. @keywords class name, normalize class, props, component class */
export declare function getClassName<T extends ItemList = ItemList>(props?: T | unknown): string | undefined;