// md5:eafb40672d33ec0655b94300383d93b3 true
import { type ComputedRef, type Ref } from 'vue';
import { type NumberOrString } from '@dxtmisha/functional-basic';

/** Manages a list of navigation links and active selection state for routing. @keywords router, navigation, route list, router link */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    item: ComputedRef<T | undefined>;
    /** Selected item identifier. @keywords selected item, active route */
    selected: Ref<string, string>;
    label: ComputedRef<NumberOrString>;
    /** List of route elements. @keywords route list, navigation items */
    list: ComputedRef<ConstrBind<T>[]>;
    /** Navigates to the target route element by name. @keywords navigate, route to, redirect */
    to: (name?: string) => void;
    /** Navigates to the main/default route element. @keywords navigate main, home route */
    toMain(): void;
};