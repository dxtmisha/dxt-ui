import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { FieldValueInclude } from '../../classes/field/FieldValueInclude';
import { FieldTypeInclude } from '../../classes/field/FieldTypeInclude';
import { FieldValueProps } from '../../types/fieldTypes';
import { MaskComponentInclude, MaskPropsInclude } from './basicTypes';
import { MaskProps } from './props';
type MaskPropsFullInclude = MaskPropsInclude & FieldValueProps;
/**
 * Mask management class.
 *
 * Класс управления маской.
 */
export declare class MaskInclude<Props extends MaskPropsFullInclude = MaskPropsFullInclude, PropsExtra extends ConstrBind<MaskProps> = ConstrBind<MaskProps>> {
    protected readonly props: Props;
    protected readonly className: string;
    protected readonly value: FieldValueInclude;
    protected readonly valueDefault?: RefOrNormal<any> | undefined;
    protected readonly components?: DesignComponents<MaskComponentInclude, Props> | undefined;
    protected readonly type?: FieldTypeInclude | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param className class name/ название класса
     * @param value object for working with values/ объект для работы со значениями
     * @param valueDefault default value/ значение по умолчанию
     * @param components object for working with components/ объект для работы с компонентами
     * @param type object for working with the input type/ объект для работы с типом ввода
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Props, className: string, value: FieldValueInclude, valueDefault?: RefOrNormal<any> | undefined, components?: DesignComponents<MaskComponentInclude, Props> | undefined, type?: FieldTypeInclude | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks if the mask is active.
     *
     * Проверяет, активна ли маска.
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Returns the basic properties for working with a mask.
     *
     * Возвращает базовые свойства для работы с маской.
     */
    readonly bindsStatic: ComputedRef<PropsExtra>;
    /**
     * Returns all properties for working with the mask.
     *
     * Возвращает все свойства для работы с маской.
     */
    readonly binds: ComputedRef<ConstrBind<MaskProps>>;
    /**
     * Returns the rendered mask component.
     *
     * Возвращает отрендеренный компонент маски.
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (attrs?: Record<string, any>) => VNode[];
    /**
     * Checks if the mask is active.
     *
     * Проверяет, активна ли маска.
     */
    isActive(): boolean;
}
export {};
