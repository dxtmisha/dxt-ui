import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { TextareaAutosizeValue } from './TextareaAutosizeValue';
import { TextareaAutosizeResize } from './TextareaAutosizeResize';
import { TextareaAutosizeComponents, TextareaAutosizeEmits, TextareaAutosizeSlots } from './types';
import { TextareaAutosizeProps } from './props';
/**
 * TextareaAutosize
 */
export declare class TextareaAutosize {
    protected readonly props: TextareaAutosizeProps;
    protected readonly refs: ToRefs<TextareaAutosizeProps>;
    protected readonly element: Ref<HTMLTextAreaElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<TextareaAutosizeComponents, TextareaAutosizeProps> | undefined;
    protected readonly slots?: TextareaAutosizeSlots | undefined;
    protected readonly emits?: ConstrEmit<TextareaAutosizeEmits> | undefined;
    readonly value: TextareaAutosizeValue;
    readonly resize: TextareaAutosizeResize;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param TextareaAutosizeValueConstructor class for working with value/ класс для работы со значением
     * @param TextareaAutosizeResizeConstructor class for working with resize/ класс для работы с изменением размера
     */
    constructor(props: TextareaAutosizeProps, refs: ToRefs<TextareaAutosizeProps>, element: Ref<HTMLTextAreaElement | undefined>, classDesign: string, className: string, components?: DesignComp<TextareaAutosizeComponents, TextareaAutosizeProps> | undefined, slots?: TextareaAutosizeSlots | undefined, emits?: ConstrEmit<TextareaAutosizeEmits> | undefined, TextareaAutosizeValueConstructor?: typeof TextareaAutosizeValue, TextareaAutosizeResizeConstructor?: typeof TextareaAutosizeResize);
}
