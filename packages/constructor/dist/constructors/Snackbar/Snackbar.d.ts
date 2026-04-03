import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { SnackbarData } from './SnackbarData';
import { SnackbarEvent } from './SnackbarEvent';
import { SnackbarComponents, SnackbarEmits, SnackbarSlots } from './types';
import { SnackbarProps } from './props';
/**
 * Snackbar
 */
export declare class Snackbar {
    protected readonly props: SnackbarProps;
    protected readonly refs: ToRefs<SnackbarProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<SnackbarComponents, SnackbarProps> | undefined;
    protected readonly slots?: SnackbarSlots | undefined;
    protected readonly emits?: ConstrEmit<SnackbarEmits> | undefined;
    /** Data manager for snackbar / Менеджер данных для снекбара */
    readonly data: SnackbarData;
    /** Event manager for snackbar / Менеджер событий для снекбара */
    readonly event: SnackbarEvent;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
     * @param element input element / элемент ввода
     * @param classDesign design name / название дизайна
     * @param className class name / название класса
     * @param components object for working with components / объект для работы с компонентами
     * @param slots object for working with slots / объект для работы со слотами
     * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
     * @param constructors object with classes / объект с классами
     * @param constructors.DataConstructor class for creating data / класс для создания данных
     */
    constructor(props: SnackbarProps, refs: ToRefs<SnackbarProps>, element: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<SnackbarComponents, SnackbarProps> | undefined, slots?: SnackbarSlots | undefined, emits?: ConstrEmit<SnackbarEmits> | undefined, constructors?: {
        DataConstructor?: typeof SnackbarData;
        EventConstructor?: typeof SnackbarEvent;
    });
    /**
     * Event for hiding the message.
     *
     * Событие для скрытия сообщения.
     * @param value element identification / идентификация элемента
     */
    readonly onClose: (value: string) => void;
}
