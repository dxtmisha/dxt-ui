// md5:bfeed389fb229d6c7e7c05a494813850 true
import { ItemList } from '@dxtmisha/functional-basic';

/**
 * Returns or generates a render index string.
 * @keywords render, index, key, generator
 */
export declare function getIndexForRender<T extends ItemList>(name: string | any, props?: T, index?: string): string | undefined;