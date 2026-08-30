// md5:c6fa1a932479be1bddb14a38876968ff true
import { type ItemList } from '@dxtmisha/functional-basic';
/** Resolves or generates a unique key index for rendering a component item. @keywords render index, component key, unique key */
export declare function getIndexForRender<T extends ItemList>(name: string | any, props?: T, index?: string): string | undefined;