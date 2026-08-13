// md5:4b5bd203cd439bfe107fae8882356b75 true
import { Ref, ComputedRef } from 'vue';
import { NumberOrString } from '@dxtmisha/functional-basic';

/**
 * Managing a list of links for the router.
 * @keywords useRouterList router links navigation
 */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    /** Active router item / Активный элемент роутера */
    item: ComputedRef<T | undefined>;
    /** Selected element / Выбранный элемент */
    selected: Ref<string, string>;
    /** Label of selected element / Метка выбранного элемента */
    label: ComputedRef<NumberOrString>;
    /** List of elements / Список элементов */
    list: ComputedRef<ConstrBind<T>[]>;
    /** Navigate by name / Переход по имени */
    to: (name?: string) => void;
    /** Transition to the main element / Переход к главному элементу */
    toMain(): void;
};