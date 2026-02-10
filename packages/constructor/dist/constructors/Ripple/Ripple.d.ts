import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { RippleItem } from './RippleItem';
import { RippleComponents, RippleEmits, RippleSlots } from './types';
import { RippleProps } from './props';
/**
 * Base Ripple class for working in Vue.
 *
 * Базовый класс Ripple для работы во Vue.
 */
export declare class Ripple {
    protected readonly props: RippleProps;
    protected readonly refs: ToRefs<RippleProps>;
    protected readonly element: Ref<HTMLSpanElement | undefined>;
    protected readonly className: string;
    protected readonly components?: DesignComp<RippleComponents, RippleProps> | undefined;
    protected readonly slots?: RippleSlots | undefined;
    protected readonly emits?: ConstrEmit<RippleEmits> | undefined;
    protected readonly item: RippleItem;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param constructors object with classes/ объект с классами
     * @param constructors.RippleItemConstructor class for working with ripple item/ класс для работы с элементом волны
     */
    constructor(props: RippleProps, refs: ToRefs<RippleProps>, element: Ref<HTMLSpanElement | undefined>, className: string, components?: DesignComp<RippleComponents, RippleProps> | undefined, slots?: RippleSlots | undefined, emits?: ConstrEmit<RippleEmits> | undefined, constructors?: {
        RippleItemConstructor?: typeof RippleItem;
    });
    /**
     * The click event adds a wave effect element.
     *
     * Событие клика добавляет элемент эффекта волна.
     * @param event click event/ событие клика
     */
    readonly onClick: (event: MouseEvent) => void;
}
