import { ToRefs, Ref } from 'vue';
import { ListSelectedList } from '@dxtmisha/functional';
import { TabsProps } from './props';
/**
 * Class for managing the selected element.
 *
 * Класс для управления выбранным элементом.
 */
export declare class TabsSelected {
    protected readonly props: TabsProps;
    protected readonly refs: ToRefs<TabsProps>;
    readonly item: Ref<ListSelectedList | undefined, ListSelectedList | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     */
    constructor(props: TabsProps, refs: ToRefs<TabsProps>);
    /**
     * Checks if the value is selected.
     *
     * Проверяет, выбрано ли значение.
     * @param selected value to check/ значение для проверки
     */
    is(selected?: string | number): boolean;
    /**
     * Sets the selected value.
     *
     * Устанавливает выбранное значение.
     * @param selected selected value/ выбранное значение
     */
    readonly set: (selected?: ListSelectedList) => void;
    /**
     * Updates the selected value.
     *
     * Обновляет выбранное значение.
     */
    protected update: () => void;
}
