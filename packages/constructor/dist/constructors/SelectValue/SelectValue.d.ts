import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrBind, ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { EnabledInclude } from '../../classes/EnabledInclude';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { IconProps } from '../Icon';
import { WindowClassesInclude } from '../Window';
import { EventClickValue } from '../../types/eventClickTypes';
import { SelectValueComponents, SelectValueEmits, SelectValueSlots } from './types';
import { SelectValueProps } from './props';
/**
 * SelectValue
 */
export declare class SelectValue {
    protected readonly props: SelectValueProps;
    protected readonly refs: ToRefs<SelectValueProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<SelectValueComponents, SelectValueProps> | undefined;
    protected readonly slots?: SelectValueSlots | undefined;
    protected readonly emits?: ConstrEmit<SelectValueEmits> | undefined;
    readonly enabled: EnabledInclude;
    readonly event: EventClickInclude;
    readonly window: WindowClassesInclude;
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
     */
    constructor(props: SelectValueProps, refs: ToRefs<SelectValueProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<SelectValueComponents, SelectValueProps> | undefined, slots?: SelectValueSlots | undefined, emits?: ConstrEmit<SelectValueEmits> | undefined);
    /** Is placeholder/ Является ли плейсхолдером */
    readonly isPlaceholder: ComputedRef<boolean>;
    /** Icon for canceling selection/ Иконка для отмены выбора */
    readonly iconTrailing: ComputedRef<ConstrBind<IconProps> | undefined>;
    /** Returns data for the main style class/ Возвращает данные для главного класса стиля */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Click event handler.
     *
     * Обработчик события клика.
     * @param event event object/ объект события
     * @param options additional event options/ дополнительные опции события
     */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
}
