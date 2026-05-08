import { Ref, ComputedRef } from 'vue';
import { NumberOrString } from '@dxtmisha/functional-basic';
import { ConstrBind } from '../../types/constructorTypes';
import { ListDataBasic } from '../../types/listTypes';
import { RefType } from '../../types/refTypes';
/**
 * Managing a list of links for the router.
 *
 * Управление списком ссылок для роутера.
 * @param list list of items / список элементов
 * @param selected selected item / выбранный элемент
 * @param hasTo has to / имеет to
 */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    item: ComputedRef<T | undefined>;
    /** Selected element / Выбранный элемент */
    selected: Ref<string, string>;
    label: ComputedRef<NumberOrString>;
    /** List of elements / Список элементов */
    list: ComputedRef<ConstrBind<T>[]>;
    to: (name?: string) => void;
    /**
     * Transition to the main element.
     *
     * Переход к главному элементу.
     */
    toMain(): void;
};
