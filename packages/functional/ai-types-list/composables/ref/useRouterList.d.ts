// md5:dc8aadec05d3d3befb51f03ec0eebe71 true
import { type ComputedRef, type Ref } from 'vue';
import { type NumberOrString } from '@dxtmisha/functional-basic';
/** Router list state and navigation methods @keywords router list state navigation */
export type UseRouterList<T extends ListDataBasic> = {
    item: ComputedRef<T | undefined>;
    selected: Ref<string>;
    label: ComputedRef<NumberOrString>;
    list: ComputedRef<ConstrBind<T>[]>;
    /** Navigates to an element by name @keywords router navigate to */
    to: (name?: string) => void;
    /** Navigates to the main element @keywords router navigate main */
    toMain(): void;
};
/** Manages a list of links and selection state for router navigation @keywords router list navigation links */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => UseRouterList<T>;