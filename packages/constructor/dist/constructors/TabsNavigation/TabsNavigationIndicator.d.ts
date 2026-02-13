import { Ref, ToRefs } from 'vue';
import { ListSelectedList } from '@dxtmisha/functional';
import { TabsNavigationSelected } from './TabsNavigationSelected';
import { TabsNavigationProps } from './props';
/**
 * Class for managing selection changes and its animation.
 *
 * Класс для управления изменением выделения и его анимацией.
 */
export declare class TabsNavigationIndicator {
    protected readonly props: TabsNavigationProps;
    protected readonly refs: ToRefs<TabsNavigationProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly selected: TabsNavigationSelected;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element main element/ главный элемент
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param selected selection value object/ объект значения выделения
     */
    constructor(props: TabsNavigationProps, refs: ToRefs<TabsNavigationProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, selected: TabsNavigationSelected);
    /**
     * Changes the selection state.
     *
     * Изменяет состояние выделения.
     * @param newSelected new selection/ новое выделение
     * @param oldSelected old selection/ старое выделение
     */
    readonly go: (newSelected: ListSelectedList | undefined, oldSelected: ListSelectedList | undefined) => Promise<void>;
    /**
     * Resets the given styles.
     *
     * Сбрасывает данные стили.
     * @param item element/ элемент
     */
    readonly reset: (item: HTMLElement) => void;
    /**
     * Returns the class name of the item.
     *
     * Возвращает имя класса элемента.
     */
    protected getItemClassName(): string;
    /**
     * Returns the selected element.
     *
     * Возвращает выделенный элемент.
     * @param selected selection number/ номер выделения
     */
    protected getItem(selected?: ListSelectedList): HTMLElement | undefined;
}
