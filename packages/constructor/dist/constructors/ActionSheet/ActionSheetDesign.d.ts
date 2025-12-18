import { VNode } from 'vue';
import { ModalDesignAbstract } from '../Modal/ModalDesignAbstract';
import { ActionSheet } from './ActionSheet';
import { WindowControlItem } from '../Window';
import { ActionSheetPropsBasic } from './props';
import { ActionSheetClasses, ActionSheetComponents, ActionSheetEmits, ActionSheetExpose, ActionSheetSlots } from './types';
/**
 * ActionSheetDesign
 */
export declare class ActionSheetDesign<COMP extends ActionSheetComponents, EXPOSE extends ActionSheetExpose, CLASSES extends ActionSheetClasses, P extends ActionSheetPropsBasic> extends ModalDesignAbstract<COMP, ActionSheetEmits, EXPOSE, ActionSheetSlots, CLASSES, P, ActionSheet> {
    /**
     * Creates an instance of the item class.
     *
     * Создает экземпляр класса элемента.
     */
    protected initItem(): ActionSheet;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode[];
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderTitleTouch: (props: WindowControlItem) => VNode[];
}
