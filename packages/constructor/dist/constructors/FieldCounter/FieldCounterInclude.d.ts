import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { FieldCounterComponentInclude, FieldCounterPropsInclude } from './basicTypes';
import { FieldCounterProps, FieldCounterPropsBasic } from './props';
/**
 * The class returns data for working with the FieldCounter component
 *
 * Класс возвращает данные для работы с компонентом FieldCounter
 */
export declare class FieldCounterInclude<Props extends FieldCounterPropsInclude = FieldCounterPropsInclude, PropsExtra extends ConstrBind<FieldCounterProps> = ConstrBind<FieldCounterProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<FieldCounterComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<FieldCounterComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Checks if counter should be displayed/ Проверяет, надо ли отображать счетчик */
    readonly isCounter: ComputedRef<boolean>;
    /** Computed bindings for FieldCounter/ Вычисляемые привязки для FieldCounter */
    readonly binds: ComputedRef<PropsExtra>;
    /** Intermediate bindings for FieldCounter/ Промежуточные привязки для FieldCounter */
    readonly bindsIntermediary: ComputedRef<FieldCounterPropsInclude< FieldCounterPropsBasic>>;
    /**
     * Render the FieldCounter component/
     * Рендер компонента FieldCounter
     */
    readonly render: () => VNode[];
}
