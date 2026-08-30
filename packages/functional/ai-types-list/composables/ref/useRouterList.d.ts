// md5:eafb40672d33ec0655b94300383d93b3 true
import { type ComputedRef, type Ref } from 'vue';
import { type NumberOrString } from '@dxtmisha/functional-basic';

/** Manages a list of router navigation links and selection state. @keywords router list navigation route */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    item: ComputedRef<T | undefined>;
    /** Selected item identifier. */
    selected: Ref<string, string>;
    label: ComputedRef<NumberOrString>;
    /** Processed router link elements list. */
    list: ComputedRef<ConstrBind<T>[]>;
    /** Navigates to the target route item by name. @keywords navigate route to */
    to: (name?: string) => void;
    /** Navigates to the main root element. @keywords navigate main home route */
    toMain(): void;
};