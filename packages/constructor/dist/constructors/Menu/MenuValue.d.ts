import { ToRefs, Ref, ComputedRef } from 'vue';
import { ConstrEmit, ListSelectedList } from '@dxtmisha/functional';
import { MenuEmits } from './types';
import { MenuProps } from './props';
/**
 * Value manager for Menu
 *
 * Менеджер значения для Menu
 */
export declare class MenuValue {
    protected readonly props: MenuProps;
    protected readonly refs: ToRefs<MenuProps>;
    protected readonly emits?: ConstrEmit<MenuEmits> | undefined;
    readonly value: Ref<ListSelectedList | undefined, ListSelectedList | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: MenuProps, refs: ToRefs<MenuProps>, emits?: ConstrEmit<MenuEmits> | undefined);
    /**
     * Computed selected value
     *
     * Вычисляемое выбранное значение
     */
    readonly selected: ComputedRef<ListSelectedList | undefined>;
    /**
     * Sets a new selected value if it has changed and returns the instance for chaining.
     *
     * Устанавливает новое выбранное значение, если оно изменилось, и возвращает экземпляр для чейнинга.
     * @param value selected list value/ выбранное значение списка
     * @param isEmit whether to emit the update event/ нужно ли вызвать событие обновления
     */
    setValue(value: ListSelectedList, isEmit?: boolean): this;
}
