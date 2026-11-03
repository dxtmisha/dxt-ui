// md5:fda10e94faf5ffdc41c6dc2fd6e2d46a true
import { type ItemList } from '@dxtmisha/functional-basic';
/** Builds a render key by concatenating component name, external index, props.index, and props.id. @keywords render key, component key, index for render, identity */
export declare function getIndexForRender<T extends ItemList = ItemList>(name?: unknown, props?: T, index?: string): string | undefined;