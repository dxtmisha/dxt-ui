// md5:178315ba30fbf80dfc09afbc86036881 true
import type { ElementType } from 'react';
import type { ItemList } from '@dxtmisha/functional-basic';
/** Generates or retrieves a unique key for a rendered component element. @keywords render key, element key, react key, component index */
export declare function getIndexForRender<T extends ItemList>(name: ElementType, props?: T, index?: string): string | undefined;