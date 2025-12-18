import { ModalDesignAbstract } from './ModalDesignAbstract';
import { Modal } from './Modal';
import { ModalPropsBasic } from './props';
import { ModalClasses, ModalComponents, ModalEmits, ModalExpose, ModalSlots } from './types';
/**
 * ModalDesign
 */
export declare class ModalDesign<COMP extends ModalComponents, EXPOSE extends ModalExpose, CLASSES extends ModalClasses, P extends ModalPropsBasic> extends ModalDesignAbstract<COMP, ModalEmits, EXPOSE, ModalSlots, CLASSES, P, Modal> {
    protected initItem(): Modal;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
}
