import { ListSelectedList } from '@dxtmisha/functional';
import { TabsNavigationProps } from './props';
import { Ref } from 'vue';
/**
 * Selection management class.
 *
 * Класс управления выделением.
 */
export declare class TabsNavigationSelected {
    protected readonly props: TabsNavigationProps;
    readonly item: Ref<ListSelectedList | undefined, ListSelectedList | undefined>;
    readonly actualItem: Ref<ListSelectedList | undefined, ListSelectedList | undefined>;
    /**
     * Constructor
     * @param props input data / входные данные
     */
    constructor(props: TabsNavigationProps);
    /**
     * Checks if the value is selected.
     *
     * Проверяет, выбрано ли значение.
     * @param selected value to check/ значение для проверки
     */
    isSelected(selected?: string): boolean;
    /**
     * Sets the selected value.
     *
     * Устанавливает выбранное значение.
     * @param selected selected value/ выбранное значение
     */
    set(selected?: ListSelectedList): this;
    /**
     * Sets the actual selected value.
     *
     * Устанавливает актуальное выбранное значение.
     * @param selected selected value/ выбранное значение
     */
    setActual(selected?: ListSelectedList): this;
}
