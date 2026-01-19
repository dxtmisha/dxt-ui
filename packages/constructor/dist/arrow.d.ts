import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrClassObject } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { EventItem } from '@dxtmisha/functional';
import { EventRef } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Arrow
 */
export declare class Arrow {
    protected readonly props: ArrowProps;
    protected readonly refs: ToRefs<ArrowProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ArrowComponents, ArrowProps> | undefined;
    protected readonly slots?: ArrowSlots | undefined;
    protected readonly emits?: ConstrEmit<ArrowEmits> | undefined;
    protected readonly ArrowElementConstructor: typeof ArrowElement;
    protected readonly ArrowElementTargetConstructor: typeof ArrowElementTarget;
    protected readonly ArrowParentConstructor: typeof ArrowParent;
    protected readonly ArrowPositionConstructor: typeof ArrowPosition;
    protected readonly ArrowEventConstructor: typeof ArrowEvent;
    readonly elementItem: ArrowElement;
    readonly elementTarget: ArrowElementTarget;
    readonly parent: ArrowParent;
    readonly position: ArrowPosition;
    readonly event: ArrowEvent;
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
     * @param ArrowElementConstructor class for working with the arrow element/ класс для работы с элементом стрелки
     * @param ArrowElementTargetConstructor class for working with the target element of the arrow/ класс для работы с целевым элементом стрелки
     * @param ArrowParentConstructor class for working with the parent element of the arrow/ класс для работы с родительским элементом стрелки
     * @param ArrowPositionConstructor class for working with the position of the arrow/ класс для работы с позицией стрелки
     * @param ArrowEventConstructor class for working with arrow events/ класс для работы с событиями стрелки
     */
    constructor(props: ArrowProps, refs: ToRefs<ArrowProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ArrowComponents, ArrowProps> | undefined, slots?: ArrowSlots | undefined, emits?: ConstrEmit<ArrowEmits> | undefined, ArrowElementConstructor?: typeof ArrowElement, ArrowElementTargetConstructor?: typeof ArrowElementTarget, ArrowParentConstructor?: typeof ArrowParent, ArrowPositionConstructor?: typeof ArrowPosition, ArrowEventConstructor?: typeof ArrowEvent);
    /** Direction of the arrow/ Направление стрелки */
    readonly direction: ComputedRef<ArrowDirection>;
    /** Classes for the component/ Классы для компонента */
    readonly classes: ComputedRef<ConstrClassObject>;
    /** Styles for the component/ Стили для компонента */
    readonly styles: ComputedRef<ConstrStyles>;
}

export declare type ArrowBorder = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};

export declare type ArrowCenter = {
    x: number;
    y: number;
};

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type ArrowClasses = {
    main: ConstrClass;
    mask: string;
    arrow: string;
    arrowLine: string;
    arrowArea: string;
    border: string;
    borderHidden: string;
};

/**
 * Component map for including the Arrow component/
 * Карта компонентов для подключения компонента Arrow
 */
export declare type ArrowComponentInclude = {
    arrow?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type ArrowComponents = {};

/**
 * ArrowDesign
 */
export declare class ArrowDesign<COMP extends ArrowComponents, EXPOSE extends ArrowExpose, CLASSES extends ArrowClasses, P extends ArrowPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ArrowEmits, EXPOSE, ArrowSlots, CLASSES, P> {
    protected readonly item: Arrow;
    protected readonly points: Ref<string, string>;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor arrow item class/ класс элемента стрелки
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ArrowEmits, P>, ItemConstructor?: typeof Arrow);
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode | undefined;
    /**
     * Method for rendering an arrow.
     *
     * Метод для рендеринга стрелки.
     */
    protected renderArrow(): VNode[];
    /**
     * Method for rendering a border.
     *
     * Метод для рендеринга границы.
     */
    protected renderBorder(): VNode[];
    /**
     * Gets the points for the arrow.
     *
     * Получает точки для стрелки.
     */
    protected readonly getRePoints: () => string;
}

/** Arrow direction enum / Направление стрелки перечисление */
export declare enum ArrowDirection {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    HIDE = "hide"
}

/**
 * Class for working with the arrow element.
 *
 * Класс для работы с элементом стрелки.
 */
declare class ArrowElement {
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    /**
     * Constructor
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     */
    constructor(element: Ref<HTMLElement | undefined>, className: string);
    /**
     * Checks that the element exists.
     *
     * Проверяет, что элемент существует.
     */
    is(): this is {
        element: Ref<HTMLElement>;
    };
    /**
     * Gets the width of the arrow.
     *
     * Получает ширину стрелки.
     */
    getWidth(): number;
    /**
     * Gets the height of the arrow.
     *
     * Получает высоту стрелки.
     */
    getHeight(): number;
    /**
     * Gets the element's bounding rectangle.
     *
     * Получает ограничивающий прямоугольник элемента.
     */
    getRect(): DOMRect | undefined;
    /**
     * Gets the bounding rectangle of the border element.
     *
     * Получает ограничивающий прямоугольник элемента границы.
     */
    getRectBorder(): DOMRect | undefined;
    /**
     * Gets the bounding rectangle of the border element.
     *
     * Получает ограничивающий прямоугольник элемента границы.
     */
    getRectArrowLine(): DOMRect | undefined;
    /**
     * Gets the name of the arrow width variable.
     *
     * Получает имя переменной ширины стрелки.
     */
    protected getNameArrowWidth(): string;
    /**
     * Gets the name of the arrow height variable.
     *
     * Получает имя переменной высоты стрелки.
     */
    protected getNameArrowHeight(): string;
    /**
     * Gets the width of the arrow from styles.
     *
     * Получает ширину стрелки из стилей.
     */
    protected getStyleArrowWidth(): string | undefined;
    /**
     * Gets the size of the arrow from styles.
     *
     * Получает размер стрелки из стилей.
     */
    protected getStyleArrowHeight(): string | undefined;
}

/**
 * Class for working with the target element.
 *
 * Класс для работы с целевым элементом.
 */
declare class ArrowElementTarget {
    protected readonly props: ArrowProps;
    readonly element: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    /**
     * Constructor
     * @param props input properties/ входящие свойства
     */
    constructor(props: ArrowProps);
    /**
     * Checks that the element exists.
     *
     * Проверяет, что элемент существует.
     */
    is(): boolean;
    /**
     * Gets the element's bounding rectangle.
     *
     * Получает ограничивающий прямоугольник элемента.
     */
    getRect(): DOMRect | undefined;
    /**
     * Updates the target element.
     *
     * Обновляет целевой элемент.
     */
    update(): void;
    /**
     * Initializes the target element.
     *
     * Инициализирует целевой элемент.
     */
    protected initElement(): HTMLElement | undefined;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type ArrowEmits = {};

/**
 * Class for managing arrow events.
 *
 * Класс для управления событиями стрелки.
 */
declare class ArrowEvent {
    protected readonly props: ArrowProps;
    protected readonly refs: ToRefs<ArrowProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly elementTarget: ArrowElementTarget;
    protected readonly parent: ArrowParent;
    protected readonly position: ArrowPosition;
    protected eventItem?: EventRef<HTMLElement, any>;
    protected eventTarget?: EventRef<HTMLElement, any>;
    protected eventBody?: EventItem<any, any>;
    /**
     * Constructor
     * @param props input properties / входные свойства
     * @param refs input properties as refs / входные свойства как ссылки
     * @param element arrow element / элемент стрелки
     * @param elementTarget target element / целевой элемент
     * @param parent parent object / объект родителя
     * @param position position object / объект позиции
     */
    constructor(props: ArrowProps, refs: ToRefs<ArrowProps>, element: Ref<HTMLElement | undefined>, elementTarget: ArrowElementTarget, parent: ArrowParent, position: ArrowPosition);
    /**
     * Update all reactive elements.
     *
     * Обновить все реактивные элементы.
     */
    readonly update: () => void;
    /**
     * Start events.
     *
     * Запустить события.
     */
    protected startEvents(): this;
    /**
     * Stop events.
     *
     * Остановить события.
     */
    protected stopEvents(): this;
    /**
     * Initialize events.
     *
     * Инициализировать события.
     */
    protected initEvents(): this;
    /**
     * Create events.
     *
     * Создать события.
     */
    protected makeEvents: () => void;
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface ArrowExpose {
    update: () => void;
}

/**
 * ArrowInclude class provides functionality for conditionally rendering arrow components
 * within other components. It manages the logic for determining when to display arrow
 * and configures the appropriate properties.
 *
 * Класс ArrowInclude предоставляет функциональность для условного рендеринга компонентов
 * стрелки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения стрелки и настраивает соответствующие свойства.
 */
export declare class ArrowInclude<Props extends ArrowPropsInclude = ArrowPropsInclude, PropsExtra extends ConstrBind<ArrowProps> = ConstrBind<ArrowProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ArrowComponentInclude, Props> | undefined;
    protected readonly elementTarget?: (HTMLElement | string) | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param elementTarget target element or selector/ целевой элемент или селектор
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<ArrowComponentInclude, Props> | undefined, elementTarget?: (HTMLElement | string) | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether arrow should be displayed/
     * Проверяет, нужно ли отображать стрелку
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the arrow/ Вычисляемые привязки для стрелки */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Arrow component
     *
     * Рендер компонента стрелки
     */
    readonly render: () => VNode[];
}

/**
 * Class for working with the parent element.
 *
 * Класс для работы с родительским элементом.
 */
declare class ArrowParent {
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    protected readonly elementItem: ArrowElement;
    /**
     * Constructor
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     * @param elementItem arrow element/ элемент стрелки
     */
    constructor(element: Ref<HTMLElement | undefined>, className: string, elementItem: ArrowElement);
    /** Checks if the parent element has a border/ Проверяет, есть ли у родительского элемента граница */
    readonly isBorder: ComputedRef<boolean>;
    /** Parent element/ Родительский элемент **/
    readonly elementParent: ComputedRef<HTMLElement | undefined>;
    /** Background color of the parent element/ Цвет фона родительского элемента **/
    readonly background: ComputedRef<string>;
    /** Border color of the parent element/ Цвет границы родительского элемента **/
    readonly borderWidth: ComputedRef<string>;
    /** Border color of the parent element/ Цвет границы родительского элемента **/
    readonly borderColor: ComputedRef<string>;
    /** Border radius of the parent element/ Радиус границы родительского элемента **/
    readonly borderRadius: ComputedRef<string>;
    /**
     * Get border width as number.
     *
     * Получить ширину границы в виде числа.
     */
    getBorderRadius(): number;
    /**
     * Get computed styles of the parent element.
     *
     * Получить вычисленные стили родительского элемента.
     */
    protected getStyles(): CSSStyleDeclaration | undefined;
    /**
     * Method for creating styles for the parent element.
     *
     * Метод для создания стилей для родительского элемента.
     */
    protected readonly make: () => void;
}

/**
 * Class for calculating the position of the arrow element relative to the target element.
 *
 * Класс для вычисления позиции элемента стрелки относительно целевого элемента.
 */
declare class ArrowPosition {
    protected readonly props: ArrowProps;
    protected readonly elementItem: ArrowElement;
    protected readonly elementTarget: ArrowElementTarget;
    protected readonly parent: ArrowParent;
    /** Border between item and target elements / Граница между элементами item и target */
    readonly border: Ref<ArrowBorder | undefined, ArrowBorder | undefined>;
    /** Direction of the arrow / Направление стрелки */
    readonly direction: Ref<ArrowDirection | undefined, ArrowDirection | undefined>;
    /** Shift of the arrow / Смещение стрелки */
    readonly shift: Ref<string | undefined, string | undefined>;
    /** Clip path for the arrow / Область обрезки для стрелки */
    readonly clipPath: Ref<string | undefined, string | undefined>;
    /**
     * Constructor
     * @param props input properties / входные свойства
     * @param elementItem arrow element / элемент стрелки
     * @param elementTarget target element / целевой элемент
     * @param parent parent element / родительский элемент
     */
    constructor(props: ArrowProps, elementItem: ArrowElement, elementTarget: ArrowElementTarget, parent: ArrowParent);
    /**
     * Updates the position of the arrow.
     *
     * Обновляет позицию стрелки.
     */
    readonly update: () => void;
    /**
     * Checks if the arrow is in the X direction.
     *
     * Проверяет, находится ли стрелка в направлении X.
     */
    isX(): boolean;
    /**
     * Gets the minimum value for the arrow position.
     *
     * Получает минимальное значение для позиции стрелки.
     */
    protected getMinValue(): number;
    /**
     * Initializes the border between the item and target elements.
     *
     * Инициализирует границу между элементами item и target.
     */
    protected initBorder(): ArrowBorder | undefined;
    /**
     * Initializes the direction of the arrow.
     *
     * Инициализирует направление стрелки.
     */
    protected initDirection(): ArrowDirection | undefined;
    /**
     * Initializes the shift of the arrow.
     *
     * Инициализирует смещение стрелки.
     */
    protected initShift(): string | undefined;
    /**
     * Initializes the clip path for the arrow.
     *
     * Инициализирует область обрезки для стрелки.
     */
    protected initClipPath(): string | undefined;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface ArrowProps extends ArrowPropsBasic, ArrowPropsToken {
}

export declare interface ArrowPropsBasic {
    elementTarget?: HTMLElement | string;
}

/**
 * Props used to include and configure the Arrow component/
 * Свойства для подключения и настройки компонента Arrow
 */
export declare interface ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> {
    /** Show arrow/ Показать стрелку */
    arrowShow?: boolean;
    /** Arrow position/ Позиция стрелки */
    arrowPosition?: ArrowProps['position'];
    /** Additional attributes for Arrow component/ Дополнительные атрибуты для компонента Arrow */
    arrowAttrs?: ConstrBind<Arrow>;
}

declare interface ArrowPropsToken {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    inverse?: boolean;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface ArrowSlots {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsArrow: {
    position: string;
};

export { }
