import { VNode } from 'vue';
import { Dialog } from './Dialog';
import { ModalDesignAbstract } from '../Modal/ModalDesignAbstract';
import { WindowControlItem } from '../Window';
import { DialogPropsBasic } from './props';
import { DialogClasses, DialogComponents, DialogEmits, DialogExpose, DialogSlots } from './types';
/**
 * DialogDesign
 */
export declare class DialogDesign<COMP extends DialogComponents, EXPOSE extends DialogExpose, CLASSES extends DialogClasses, P extends DialogPropsBasic> extends ModalDesignAbstract<COMP, DialogEmits, EXPOSE, DialogSlots, CLASSES, P, Dialog> {
    /**
     * A method for creating an instance of the class.
     *
     * Метод для создания экземпляра класса.
     */
    protected initItem(): Dialog;
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
     * Render for the body layer.
     *
     * Рендер для слоя тела.
     * @param props data for window management/ данные для управления окном
     */
    protected readonly renderContent: (props: WindowControlItem) => VNode[];
    /**
     * Render information block.
     *
     * Рендер информационного блока.
     */
    protected readonly renderInformation: () => VNode[];
}
