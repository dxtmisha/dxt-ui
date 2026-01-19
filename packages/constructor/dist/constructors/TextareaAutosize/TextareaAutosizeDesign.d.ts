import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { TextareaAutosize } from './TextareaAutosize';
import { TextareaAutosizePropsBasic } from './props';
import { TextareaAutosizeClasses, TextareaAutosizeComponents, TextareaAutosizeEmits, TextareaAutosizeExpose, TextareaAutosizeSlots } from './types';
/**
 * TextareaAutosizeDesign
 */
export declare class TextareaAutosizeDesign<COMP extends TextareaAutosizeComponents, EXPOSE extends TextareaAutosizeExpose, CLASSES extends TextareaAutosizeClasses, P extends TextareaAutosizePropsBasic> extends DesignConstructorAbstract<HTMLTextAreaElement, COMP, TextareaAutosizeEmits, EXPOSE, TextareaAutosizeSlots, CLASSES, P> {
    protected readonly item: TextareaAutosize;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, TextareaAutosizeEmits, P>);
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode[];
    /**
     * Renders a textarea element.
     *
     * Рендерит элемент textarea.
     */
    protected readonly renderTextarea: () => VNode;
    /**
     * Renders a clone element.
     *
     * Рендерит элемент-клон.
     */
    protected readonly renderClone: () => VNode;
}
