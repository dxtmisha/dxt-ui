import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, ConstrEmit, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { MotionAxisComponentInclude, MotionAxisEmitOptions, MotionAxisEmitsInclude, MotionAxisPropsInclude, MotionAxisSelectedValue } from './basicTypes';
import { MotionAxisExpose, MotionAxisSlots } from './types';
import { MotionAxisProps } from './props';
/**
 * The class returns data for working with the MotionAxis component
 *
 * Класс возвращает данные для работы с компонентом MotionAxis
 */
export declare class MotionAxisInclude<Props extends MotionAxisPropsInclude = MotionAxisPropsInclude, PropsExtra extends ConstrBind<MotionAxisProps> = ConstrBind<MotionAxisProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<MotionAxisComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<MotionAxisEmitsInclude> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly selected?: RefOrNormal<MotionAxisSelectedValue>;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param selected selected element/ выбранный элемент
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<MotionAxisComponentInclude, Props> | undefined, emits?: ConstrEmit<MotionAxisEmitsInclude> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, selected?: RefOrNormal<MotionAxisSelectedValue>, index?: string | undefined);
    /** Reference to motionAxis element expose/ Ссылка на expose элемента motionAxis */
    readonly element: Ref<ConstrBind<MotionAxisExpose> | undefined, ConstrBind<MotionAxisExpose> | undefined>;
    /** Computed selected element/ Вычисляемый выбранный элемент */
    readonly selectedItem: ComputedRef<string | Props["selected"] | undefined>;
    /** Computed bindings for the motionAxis/ Вычисляемые привязки для motionAxis */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the MotionAxis component with slots/
     * Рендер компонента MotionAxis со слотами
     * @param slotsChildren slots passed to the motionAxis/ слоты, передаваемые motionAxis
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (slotsChildren?: MotionAxisSlots, attrs?: Record<string, any>) => VNode[];
    /**
     * Emits 'motionAxis' event upward/
     * Поднимает событие 'motionAxis' наверх
     * @param options event payload/ параметры события
     */
    protected readonly onMotionAxis: (options: MotionAxisEmitOptions) => void;
}
