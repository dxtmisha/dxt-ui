import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal, RefType } from '@dxtmisha/functional';
import { FieldLabelComponentInclude, FieldLabelPropsInclude, FieldLabelSlotsInclude } from './basicTypes';
import { FieldLabelPropsBasic } from './props';
/**
 * The class returns data for working with the FieldLabel component
 *
 * Класс возвращает данные для работы с компонентом FieldLabel
 */
export declare class FieldLabelInclude<Props extends FieldLabelPropsInclude = FieldLabelPropsInclude, PropsExtra extends ConstrBind<FieldLabelPropsBasic> = ConstrBind<FieldLabelPropsBasic>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<FieldLabelComponentInclude, Props> | undefined;
    protected readonly slots?: FieldLabelSlotsInclude | undefined;
    protected readonly isCounter?: RefType<boolean | undefined> | undefined;
    protected readonly labelId?: string | undefined;
    protected readonly counterId?: string | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /** Field counter include/ Подключение счетчика поля */
    private readonly fieldCounter;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param isCounter whether to display the counter/ отображать ли счетчик
     * @param labelId label identifier/ идентификатор метки
     * @param counterId counter identifier/ идентификатор счетчика
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<FieldLabelComponentInclude, Props> | undefined, slots?: FieldLabelSlotsInclude | undefined, isCounter?: RefType<boolean | undefined> | undefined, labelId?: string | undefined, counterId?: string | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Checks if label should be displayed/ Проверяет, надо ли отображать метку */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for FieldLabel/ Вычисляемые привязки для FieldLabel */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the FieldLabel component/ Рендер компонента FieldLabel
     */
    readonly render: () => VNode[];
}
