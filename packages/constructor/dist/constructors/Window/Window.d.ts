import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ScrollbarInclude } from '../Scrollbar/ScrollbarInclude';
import { ImageInclude } from '../Image/ImageInclude';
import { ModelInclude } from '../../classes/ModelInclude';
import { TabIndexInclude } from '../../classes/TabIndexInclude';
import { TextInclude } from '../../classes/TextInclude';
import { WindowClient } from './WindowClient';
import { WindowHook } from './WindowHook';
import { WindowClasses } from './WindowClasses';
import { WindowElement } from './WindowElement';
import { WindowStatus } from './WindowStatus';
import { WindowPersistent } from './WindowPersistent';
import { WindowFlash } from './WindowFlash';
import { WindowCoordinates } from './WindowCoordinates';
import { WindowPosition } from './WindowPosition';
import { WindowOrigin } from './WindowOrigin';
import { WindowStatic } from './WindowStatic';
import { WindowEmit } from './WindowEmit';
import { WindowStyles } from './WindowStyles';
import { WindowOpen } from './WindowOpen';
import { WindowVerification } from './WindowVerification';
import { WindowEvent } from './WindowEvent';
import { WindowEsc } from './WindowEsc';
import { WindowHidden } from './WindowHidden';
import { WindowControlItem } from './basicTypes';
import { WindowComponents, WindowEmits, WindowSlots } from './types';
import { WindowPropsBasic } from './props';
/**
 * Main Window class that manages all window-related functionality including positioning,
 * events, styles, animations, and component integrations. This class serves as the central
 * coordinator for window operations in the design system.
 *
 * Основной класс Window, который управляет всей функциональностью окон, включая позиционирование,
 * события, стили, анимации и интеграции компонентов. Этот класс служит центральным координатором
 * для операций с окнами в дизайн-системе.
 */
export declare class Window {
    protected readonly props: WindowPropsBasic;
    protected readonly refs: ToRefs<WindowPropsBasic>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<WindowComponents, WindowPropsBasic> | undefined;
    protected readonly slots?: WindowSlots | undefined;
    protected readonly emits?: ConstrEmit<WindowEmits> | undefined;
    /** Client instance for window management/ Экземпляр клиента для управления окном */
    readonly client: WindowClient;
    /** Hook instance for window events/ Экземпляр хука для событий окна */
    readonly hook: WindowHook;
    /** Class manager for window styles/ Менеджер классов для стилей окна */
    readonly classes: WindowClasses;
    /** Element manager for window DOM element/ Менеджер элементов для DOM элемента окна */
    readonly element: WindowElement;
    readonly tabIndex: TabIndexInclude;
    /** Status manager for window state/ Менеджер статуса для состояния окна */
    readonly status: WindowStatus;
    /** Persistent manager for window data/ Менеджер постоянных данных для окна */
    readonly persistent: WindowPersistent;
    /** Flash manager for window animations/ Менеджер анимаций для окна */
    readonly flash: WindowFlash;
    /** Coordinates manager for window positioning/ Менеджер координат для позиционирования окна */
    readonly coordinates: WindowCoordinates;
    /** Position manager for window placement/ Менеджер позиции для размещения окна */
    readonly position: WindowPosition;
    /** Origin manager for window transformations/ Менеджер начальной точки для трансформаций окна */
    readonly origin: WindowOrigin;
    /** Static mode manager for window behavior/ Менеджер статического режима для поведения окна */
    readonly staticMode: WindowStatic;
    /** Emit manager for window events/ Менеджер событий для окна */
    readonly emit: WindowEmit;
    /** Styles manager for window appearance/ Менеджер стилей для внешнего вида окна */
    readonly styles: WindowStyles;
    /** Open manager for window visibility/ Менеджер открытия для видимости окна */
    readonly open: WindowOpen;
    /** Verification manager for window state validation/ Менеджер проверки для валидации состояния окна */
    readonly verification: WindowVerification;
    /** Event manager for window interactions/ Менеджер событий для взаимодействий с окном */
    readonly event: WindowEvent;
    /** Scrollbar manager for window content/ Менеджер скроллбара для содержимого окна */
    readonly scrollbar: ScrollbarInclude;
    /** Image manager for window content/ Менеджер изображений для содержимого окна */
    readonly image: ImageInclude;
    /** Escape key manager for window closing/ Менеджер клавиши Escape для закрытия окна */
    readonly esc: WindowEsc;
    readonly text: TextInclude;
    /** Hidden manager for hiding elements outside the window when open/ Менеджер скрытия элементов вне окна при открытии */
    readonly hidden: WindowHidden;
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
     * @param constructors object with classes/ объект с классами
     * @param constructors.ImageConstructor class for working with image/ класс для работы с изображением
     * @param constructors.ModelConstructor class for working with model/ класс для работы с моделью
     * @param constructors.ScrollbarConstructor class for working with scrollbar/ класс для работы со скроллбаром
     * @param constructors.TabIndexConstructor class for working with tab index/ класс для работы с индексом табуляции
     * @param constructors.TextConstructor class for working with text/ класс для работы с текстом
     * @param constructors.WindowClassesConstructor class for working with window classes/ класс для работы с классами окна
     * @param constructors.WindowClientConstructor class for working with window client/ класс для работы с клиентом окна
     * @param constructors.WindowCoordinatesConstructor class for working with coordinates/ класс для работы с координатами
     * @param constructors.WindowElementConstructor class for working with window elements/ класс для работы с элементами окна
     * @param constructors.WindowEmitConstructor class for working with emits/ класс для работы с событиями
     * @param constructors.WindowEscConstructor class for working with escape key/ класс для работы с клавишей Escape
     * @param constructors.WindowEventConstructor class for working with events/ класс для работы с событиями
     * @param constructors.WindowFlashConstructor class for working with flash animation/ класс для работы с анимацией вспышки
     * @param constructors.WindowHiddenConstructor class for working with hidden elements/ класс для работы со скрытыми элементами
     * @param constructors.WindowHookConstructor class for working with window hooks/ класс для работы с хуками окна
     * @param constructors.WindowOpenConstructor class for working with open state/ класс для работы с состоянием открытия
     * @param constructors.WindowOriginConstructor class for working with origin/ класс для работы с точкой начала
     * @param constructors.WindowPersistentConstructor class for working with persistent state/ класс для работы с постоянным состоянием
     * @param constructors.WindowPositionConstructor class for working with position/ класс для работы с позицией
     * @param constructors.WindowStaticConstructor class for working with static mode/ класс для работы со статическим режимом
     * @param constructors.WindowStatusConstructor class for working with window status/ класс для работы со статусом окна
     * @param constructors.WindowStylesConstructor class for working with styles/ класс для работы со стилями
     * @param constructors.WindowVerificationConstructor class for working with verification/ класс для работы с проверкой
     */
    constructor(props: WindowPropsBasic, refs: ToRefs<WindowPropsBasic>, element: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<WindowComponents, WindowPropsBasic> | undefined, slots?: WindowSlots | undefined, emits?: ConstrEmit<WindowEmits> | undefined, constructors?: {
        ImageConstructor?: typeof ImageInclude;
        ModelConstructor?: typeof ModelInclude;
        ScrollbarConstructor?: typeof ScrollbarInclude;
        TabIndexConstructor?: typeof TabIndexInclude;
        TextConstructor?: typeof TextInclude;
        WindowClassesConstructor?: typeof WindowClasses;
        WindowClientConstructor?: typeof WindowClient;
        WindowCoordinatesConstructor?: typeof WindowCoordinates;
        WindowElementConstructor?: typeof WindowElement;
        WindowEmitConstructor?: typeof WindowEmit;
        WindowEscConstructor?: typeof WindowEsc;
        WindowEventConstructor?: typeof WindowEvent;
        WindowFlashConstructor?: typeof WindowFlash;
        WindowHiddenConstructor?: typeof WindowHidden;
        WindowHookConstructor?: typeof WindowHook;
        WindowOpenConstructor?: typeof WindowOpen;
        WindowOriginConstructor?: typeof WindowOrigin;
        WindowPersistentConstructor?: typeof WindowPersistent;
        WindowPositionConstructor?: typeof WindowPosition;
        WindowStaticConstructor?: typeof WindowStatic;
        WindowStatusConstructor?: typeof WindowStatus;
        WindowStylesConstructor?: typeof WindowStyles;
        WindowVerificationConstructor?: typeof WindowVerification;
    });
    /** Checks if the role is a menu/ Проверяет, является ли роль меню */
    isMenu(): boolean;
    /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
    readonly slotData: ComputedRef<WindowControlItem>;
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов.
     */
    readonly classesList: ComputedRef<ConstrClassObject>;
    /**
     * Restores the data to its previous state.
     *
     * Восстанавливает данные в прежнее состояние.
     */
    protected readonly stop: () => void;
}
