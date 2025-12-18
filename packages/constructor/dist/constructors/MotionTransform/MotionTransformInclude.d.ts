import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal, ConstrEmit } from '@dxtmisha/functional';
import { MotionTransformProps } from './props';
import { MotionTransformEmits, MotionTransformExpose, MotionTransformSlots } from './types';
import { MotionTransformComponentInclude, MotionTransformEmitOptions, MotionTransformExposeInclude, MotionTransformPropsInclude } from './basicTypes';
/**
 * The class returns data for working with the MotionTransform component
 *
 * Класс возвращает данные для работы с компонентом MotionTransform
 */
export declare class MotionTransformInclude<Props extends MotionTransformPropsInclude = MotionTransformPropsInclude, PropsExtra extends ConstrBind<MotionTransformProps> = ConstrBind<MotionTransformProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<MotionTransformComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<MotionTransformEmits> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается при срабатывании события
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<MotionTransformComponentInclude, Props> | undefined, emits?: ConstrEmit<MotionTransformEmits> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Reference to MotionTransform element expose/ Ссылка на expose элемента MotionTransform */
    readonly element: Ref<ConstrBind<MotionTransformExpose> | undefined, ConstrBind<MotionTransformExpose> | undefined>;
    /** Computed bindings for MotionTransform/ Вычисляемые привязки для MotionTransform */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Expose helpers for MotionTransform state and actions/
     * Вспомогательные методы expose для состояния и действий MotionTransform
     */
    readonly expose: MotionTransformExposeInclude;
    /**
     * Emits 'transform' event upward/
     * Поднимает событие 'transform' наверх
     * @param event native event/ нативное событие
     * @param options payload/ параметры события
     */
    readonly onTransform: (event: Event | undefined, options: MotionTransformEmitOptions) => void;
    /**
     * Render the MotionTransform component with slots/
     * Рендер компонента MotionTransform со слотами
     * @param slotsChildren slots passed to the component/ слоты, передаваемые компоненту
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (slotsChildren: MotionTransformSlots, attrs?: ConstrBind<MotionTransformProps>) => VNode[];
}
