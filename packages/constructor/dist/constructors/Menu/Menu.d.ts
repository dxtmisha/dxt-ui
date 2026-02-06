import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp, ListDataRef } from '@dxtmisha/functional';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { BarsInclude } from '../Bars';
import { WindowInclude } from '../Window';
import { MenuRequest } from './MenuRequest';
import { MenuSearch } from './MenuSearch';
import { MenuWindow } from './MenuWindow';
import { MenuValue } from './MenuValue';
import { MenuGo } from './MenuGo';
import { MenuComponents, MenuEmits, MenuSlots } from './types';
import { MenuProps } from './props';
import { MenuControlBasic } from './basicTypes';
import { ListPropsBasic } from '../List';
import { EventClickValue } from '../../types/eventClickTypes';
/**
 * Menu
 */
export declare class Menu {
    protected readonly props: MenuProps;
    protected readonly refs: ToRefs<MenuProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<MenuComponents, MenuProps> | undefined;
    protected readonly slots?: MenuSlots | undefined;
    protected readonly emits?: ConstrEmit<MenuEmits> | undefined;
    /** Request handler for list data/ Обработчик запросов данных списка */
    readonly request: MenuRequest;
    /** Search helper for menu filtering/ Вспомогательный класс поиска для фильтрации меню */
    readonly search: MenuSearch;
    /** Value manager for selected handling/ Менеджер выбранного значения */
    readonly value: MenuValue;
    /** Data manager for list selection and mapping/ Менеджер данных списка для выбора и сопоставления */
    readonly data: ListDataRef;
    readonly go: MenuGo;
    /** Include for working with the Bars component/ Подключение для работы с компонентом Bars */
    readonly bars: BarsInclude;
    /** Include for working with the Window component/ Подключение для работы с компонентом Window */
    readonly window: WindowInclude;
    /** Window manager for Menu/ Класс управления окном Menu */
    readonly menuWindow: MenuWindow;
    /** Click event helper to unify click emissions/ Вспомогательный класс кликов для унифицированной отправки событий */
    readonly event: EventClickInclude;
    /** Data for binding to controls/ Данные для привязки к контролам */
    readonly slotData: MenuControlBasic;
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
     * @param MenuRequestConstructor class for working with request/ класс для работы с запросом
     * @param MenuSearchConstructor class for working with search/ класс для работы с поиском
     * @param MenuValueConstructor class for working with value/ класс для работы со значением
     * @param ListDataRefConstructor class for working with list data/ класс для работы с данными списка
     * @param MenuGoConstructor class for working with navigation/ класс для работы с навигацией
     * @param BarsIncludeConstructor class for working with bars/ класс для работы с барами
     * @param MenuWindowConstructor class for working with menu window/ класс для работы с окном меню
     * @param WindowIncludeConstructor class for working with window/ класс для работы с окном
     * @param EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
     */
    constructor(props: MenuProps, refs: ToRefs<MenuProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<MenuComponents, MenuProps> | undefined, slots?: MenuSlots | undefined, emits?: ConstrEmit<MenuEmits> | undefined, MenuRequestConstructor?: typeof MenuRequest, MenuSearchConstructor?: typeof MenuSearch, MenuValueConstructor?: typeof MenuValue, ListDataRefConstructor?: typeof ListDataRef, MenuGoConstructor?: typeof MenuGo, BarsIncludeConstructor?: typeof BarsInclude, MenuWindowConstructor?: typeof MenuWindow, WindowIncludeConstructor?: typeof WindowInclude, EventClickIncludeConstructor?: typeof EventClickInclude);
    /**
     * Getting data for binding to the List component.
     *
     * Получение данных для привязки к компоненту List.
     */
    readonly binds: ComputedRef<ListPropsBasic>;
    /**
     * Getting data for binding to controls.
     *
     * Получение данных для привязки к контролам.
     * @returns data for binding to controls/ данные для привязки к контролам
     */
    getControlBinds(): MenuControlBasic;
    /**
     * Click handler.
     *
     * Обработчик клика.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    /**
     * Click on the slot handler.
     *
     * Обработчик клика по слоту.
     * @param event event object/ объект события
     */
    readonly onClickSlot: (event: Event) => void;
}
