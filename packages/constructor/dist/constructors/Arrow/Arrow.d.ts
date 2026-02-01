import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, ConstrStyles, DesignComp } from '@dxtmisha/functional';
import { ArrowElement } from './ArrowElement';
import { ArrowElementTarget } from './ArrowElementTarget';
import { ArrowParent } from './ArrowParent';
import { ArrowPosition } from './ArrowPosition';
import { ArrowEvent } from './ArrowEvent';
import { ArrowDirection } from './basicTypes';
import { ArrowComponents, ArrowEmits, ArrowSlots } from './types';
import { ArrowProps } from './props';
/**
 * Arrow
 */
export declare class Arrow {
    protected readonly props: ArrowProps;
    protected readonly refs: ToRefs<ArrowProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ArrowComponents, ArrowProps> | undefined;
    protected readonly slots?: ArrowSlots | undefined;
    protected readonly emits?: ConstrEmit<ArrowEmits> | undefined;
    readonly elementItem: ArrowElement;
    readonly elementTarget: ArrowElementTarget;
    readonly parent: ArrowParent;
    readonly position: ArrowPosition;
    readonly event: ArrowEvent;
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
     * @param ArrowElementConstructor class for working with the arrow element/ класс для работы с элементом стрелки
     * @param ArrowElementTargetConstructor class for working with the target element of the arrow/ класс для работы с целевым элементом стрелки
     * @param ArrowParentConstructor class for working with the parent element of the arrow/ класс для работы с родительским элементом стрелки
     * @param ArrowPositionConstructor class for working with the position of the arrow/ класс для работы с позицией стрелки
     * @param ArrowEventConstructor class for working with arrow events/ класс для работы с событиями стрелки
     */
    constructor(props: ArrowProps, refs: ToRefs<ArrowProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ArrowComponents, ArrowProps> | undefined, slots?: ArrowSlots | undefined, emits?: ConstrEmit<ArrowEmits> | undefined, ArrowElementConstructor?: typeof ArrowElement, ArrowElementTargetConstructor?: typeof ArrowElementTarget, ArrowParentConstructor?: typeof ArrowParent, ArrowPositionConstructor?: typeof ArrowPosition, ArrowEventConstructor?: typeof ArrowEvent);
    /** Direction of the arrow/ Направление стрелки */
    readonly direction: ComputedRef<ArrowDirection>;
    /** Classes for the component/ Классы для компонента */
    readonly classes: ComputedRef<ConstrClassObject>;
    /** Styles for the component/ Стили для компонента */
    readonly styles: ComputedRef<ConstrStyles>;
}
