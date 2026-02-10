import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { EventClickValue } from '../../types/eventClickTypes';
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude';
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude';
import { FieldArrowInclude } from '../../classes/Field/FieldArrowInclude';
import { FieldComponentInclude, FieldPropsInclude } from './basicTypes';
import { FieldArrowProps } from '../../types/fieldTypes';
import { FieldPropsBasic } from './props';
import { FieldSlots } from './types';
/**
 * The class returns data for working with the Field framework.
 *
 * Класс возвращает данные для работы с каркасом поля.
 */
export declare class FieldInclude<Props extends FieldPropsInclude & FieldArrowProps = FieldPropsInclude, PropsExtra extends ConstrBind<FieldPropsBasic> = ConstrBind<FieldPropsBasic>> {
    protected readonly props: Readonly<Props>;
    protected readonly value: FieldValueInclude;
    protected readonly components?: DesignComponents<FieldComponentInclude, Props> | undefined;
    protected readonly event?: FieldEventInclude | undefined;
    protected readonly arrow?: FieldArrowInclude | undefined;
    protected readonly onIcon?: (() => void) | undefined;
    protected readonly onTrailing?: (() => void) | undefined;
    protected readonly onNext?: (() => void) | undefined;
    protected readonly onPrevious?: (() => void) | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param value object for working with values/ объект для работы со значениями
     * @param components object for working with components/ объект для работы с компонентами
     * @param event object for working with events/ объект для работы с событиями
     * @param arrow object for working with arrows/ объект для работы со стрелками
     * @param onIcon Collection icon click handler/ Обработчик клика по иконке коллекции
     * @param onTrailing Trailing icon click handler/ Обработчик клика по иконке трейлинга
     * @param onNext Next arrow click handler/ Обработчик клика по следующей стрелке
     * @param onPrevious Previous arrow click handler/ Обработчик клика по предыдущей стрелке
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, value: FieldValueInclude, components?: DesignComponents<FieldComponentInclude, Props> | undefined, event?: FieldEventInclude | undefined, arrow?: FieldArrowInclude | undefined, onIcon?: (() => void) | undefined, onTrailing?: (() => void) | undefined, onNext?: (() => void) | undefined, onPrevious?: (() => void) | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Returns properties for the field framework/ Возвращает свойства для каркаса поля */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Returns properties for working with the value of the Field framework/
     * Возвращает свойства для работы со значением каркаса поля
     */
    readonly valueBinds: ComputedRef<ConstrBind<PropsExtra>>;
    /**
     * Renders the Field framework.
     *
     * Отрисовывает каркас поля.
     * @param slotsChildren
     * @param attrs
     */
    readonly render: (slotsChildren?: FieldSlots, attrs?: Record<string, any>) => VNode[];
    /**
     * Method for listening to events.
     *
     * Метод для прослушивания событий.
     * @param event event object/ объект события
     * @param type type of the object that was clicked/ тип объекта, который был нажат
     */
    protected readonly on: (event: MouseEvent, { type }: EventClickValue) => void;
    /**
     * Event trigger function when pressing the space bar or enter key.
     *
     * Функция вызова события при нажатии на пробел или клавишу Enter.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    protected readonly onKeydown: (event: KeyboardEvent, options: EventClickValue) => void;
}
