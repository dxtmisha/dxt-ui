import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal, RefType } from '@dxtmisha/functional';
import { FieldMessageComponentInclude, FieldMessagePropsInclude } from './basicTypes';
import { FieldMessagePropsBasic } from './props';
/**
 * The class returns data for working with the FieldMessage component
 *
 * Класс возвращает данные для работы с компонентом FieldMessage
 */
export declare class FieldMessageInclude<Props extends FieldMessagePropsInclude = FieldMessagePropsInclude, PropsExtra extends ConstrBind<FieldMessagePropsBasic> = ConstrBind<FieldMessagePropsBasic>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<FieldMessageComponentInclude, Props> | undefined;
    protected readonly validationMessage?: RefOrNormal<string> | undefined;
    protected readonly isCounter?: RefType<boolean | undefined> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    readonly helperId: string;
    readonly validationId: string;
    readonly counterId: string;
    /** Field counter include/ Подключение счетчика поля */
    private readonly fieldCounter;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param validationMessage error line/ строка ошибки
     * @param isCounter whether to display the counter/ отображать ли счетчик
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<FieldMessageComponentInclude, Props> | undefined, validationMessage?: RefOrNormal<string> | undefined, isCounter?: RefType<boolean | undefined> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Checks if validation message should be displayed/ Проверяет, надо ли отображать сообщение валидации */
    readonly isValidationMessage: ComputedRef<boolean>;
    /**
     * Returns the identifier.
     *
     * Возвращает идентификатор.
     */
    readonly id: ComputedRef<string>;
    /** Validation message computed/ Вычисляемое сообщение валидации */
    readonly validation: ComputedRef<string | undefined>;
    /** Computed bindings for FieldMessage/ Вычисляемые привязки для FieldMessage */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the FieldMessage component.
     *
     * Рендер компонента FieldMessage.
     */
    readonly render: () => VNode[];
}
