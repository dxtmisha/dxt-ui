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
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { RefType } from '@dxtmisha/functional';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldMessage: {};

/**
 * Interface for describing which components need to be connected for FieldCounter work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldCounter
 */
declare type FieldCounterComponentInclude = {
    fieldCounter: object;
};

/**
 * The class returns data for working with the FieldCounter component
 *
 * Класс возвращает данные для работы с компонентом FieldCounter
 */
declare class FieldCounterInclude<Props extends FieldCounterPropsInclude = FieldCounterPropsInclude, PropsExtra extends ConstrBind<FieldCounterProps> = ConstrBind<FieldCounterProps>> {
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

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
declare interface FieldCounterProps extends FieldCounterPropsBasic, FieldCounterPropsToken {
}

declare interface FieldCounterPropsBasic {
    counter?: string | number;
    maxlength?: string | number;
    template?: string;
    id?: string;
}

/**
 * Properties that can be passed to FieldCounterInclude/
 * Свойства, которые можно передать в FieldCounterInclude
 */
declare interface FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> {
    counter?: FieldCounterPropsBasic['counter'];
    counterShow?: boolean;
    counterTemplate?: FieldCounterPropsBasic['template'];
    counterId?: string;
    maxlength?: FieldCounterPropsBasic['maxlength'];
    fieldCounterAttrs?: ConstrBind<FieldCounter>;
}

declare interface FieldCounterPropsToken {
}

/**
 * FieldMessage
 */
export declare class FieldMessage {
    protected readonly props: FieldMessageProps;
    protected readonly refs: ToRefs<FieldMessageProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldMessageComponents, FieldMessageProps> | undefined;
    protected readonly slots?: FieldMessageSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldMessageEmits> | undefined;
    /** Field counter functionality/ Функциональность счетчика поля */
    readonly fieldCounter: FieldCounterInclude<FieldMessageProps>;
    /** Message functionality/ Функциональность сообщений */
    readonly message: FieldMessageMessage;
    /** Skeleton include/ Подключение скелетона */
    readonly skeleton: SkeletonInclude;
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
     */
    constructor(props: FieldMessageProps, refs: ToRefs<FieldMessageProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldMessageComponents, FieldMessageProps> | undefined, slots?: FieldMessageSlots | undefined, emits?: ConstrEmit<FieldMessageEmits> | undefined);
    /**
     * Checks if there are values for outputting the element/ Проверяет, есть ли значения для вывода элемента
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Returns data for the main style class/ Возвращает данные для главного класса стиля
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Data for helper slot/ Данные для слота helper
     */
    readonly slotHelperData: ComputedRef<FieldMessageSlot>;
    /**
     * Data for validation slot/ Данные для слота validation
     */
    readonly slotValidationData: ComputedRef<FieldMessageSlot>;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type FieldMessageClasses = {
    main: ConstrClass;
    info: string;
    error: string;
};

/**
 * Interface for describing which components need to be connected for FieldMessage work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldMessage
 */
export declare type FieldMessageComponentInclude = {
    fieldMessage: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type FieldMessageComponents = FieldCounterComponentInclude;

/**
 * FieldMessageDesign
 */
export declare class FieldMessageDesign<COMP extends FieldMessageComponents, EXPOSE extends FieldMessageExpose, CLASSES extends FieldMessageClasses, P extends FieldMessagePropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, FieldMessageEmits, EXPOSE, FieldMessageSlots, CLASSES, P> {
    protected readonly item: FieldMessage;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, FieldMessageEmits, P>);
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
     * Rendering text.
     *
     * Рендеринг текста.
     */
    protected renderInfo: () => VNode[];
    /**
     * Rendering error.
     *
     * Рендеринг ошибки.
     */
    protected renderError: () => VNode[];
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type FieldMessageEmits = {};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface FieldMessageExpose {
}

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
    protected readonly helperId?: RefOrNormal<string> | undefined;
    protected readonly validationId?: RefOrNormal<string> | undefined;
    protected readonly counterId?: RefOrNormal<string> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /** Field counter include/ Подключение счетчика поля */
    private readonly fieldCounter;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param validationMessage error line/ строка ошибки
     * @param isCounter whether to display the counter/ отображать ли счетчик
     * @param helperId helper message identifier/ идентификатор сообщения помощника
     * @param validationId validation message identifier/ идентификатор сообщения проверки
     * @param counterId counter identifier/ идентификатор счетчика
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<FieldMessageComponentInclude, Props> | undefined, validationMessage?: RefOrNormal<string> | undefined, isCounter?: RefType<boolean | undefined> | undefined, helperId?: RefOrNormal<string> | undefined, validationId?: RefOrNormal<string> | undefined, counterId?: RefOrNormal<string> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Validation message computed/ Вычисляемое сообщение валидации */
    readonly validation: ComputedRef<string | undefined>;
    /** Checks if validation message should be displayed/ Проверяет, надо ли отображать сообщение валидации */
    readonly isValidationMessage: ComputedRef<boolean>;
    /** Computed bindings for FieldMessage/ Вычисляемые привязки для FieldMessage */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the FieldMessage component.
     *
     * Рендер компонента FieldMessage.
     */
    readonly render: () => VNode[];
}

/**
 * Class for working with text
 *
 * Класс для работы с текстом
 */
declare class FieldMessageMessage {
    protected readonly props: Readonly<FieldMessageProps>;
    protected readonly slots?: FieldMessageSlots | undefined;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param slots object for working with slots/ объект для работы со слотами
     */
    constructor(props: Readonly<FieldMessageProps>, slots?: FieldMessageSlots | undefined);
    /** Checks if there is text/ Проверяет, есть ли текст */
    readonly is: ComputedRef<boolean>;
    /** Checks if there is an error/ Проверяет, есть ли ошибка */
    readonly isValidation: ComputedRef<boolean>;
    /** Returns text/ Возвращает текст */
    readonly item: ComputedRef<string>;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface FieldMessageProps extends FieldMessagePropsBasic, FieldMessagePropsToken {
}

export declare interface FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter>, SkeletonPropsInclude {
    forceShow?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    helperId?: string;
    validationId?: string;
}

/**
 * Properties that can be passed to FieldMessageInclude/
 * Свойства, которые можно передать в FieldMessageInclude
 */
export declare interface FieldMessagePropsInclude<FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter> {
    forceShowMessage?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    fieldMessageAttrs?: ConstrBind<FieldMessage>;
    helperId?: string;
    validationId?: string;
}

declare interface FieldMessagePropsToken {
}

/**
 * Type describing available slots/ Тип, описывающий доступные слоты
 */
export declare type FieldMessageSlot = {
    message?: string;
    helperMessage?: string;
    validationMessage?: string;
};

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface FieldMessageSlots {
    /** Slot for helper message/ Слот для вспомогательного сообщения */
    helper?(props: FieldMessageSlot): any;
    /** Slot for validation message/Слот для сообщения об ошибке */
    validation?(props: FieldMessageSlot): any;
}

declare type SkeletonClassesList = {
    classText: string;
    classTextVariant: string;
    classBackground: string;
    classBackgroundAfter: string;
    classBackgroundBefore: string;
    classBackgroundVariant: string;
    classBorder: string;
    classBorderVariant: string;
    classNone: string;
};

/**
 * Класс для подключения и работы с компонентом Skeleton.
 *
 * A class for connecting to and working with the Skeleton component.
 */
declare class SkeletonInclude {
    protected readonly props: SkeletonPropsInclude;
    protected readonly classesList?: (keyof SkeletonClassesList)[] | undefined;
    /**
     * Skeleton display states/ Состояния отображения Skeleton
     */
    protected readonly status: ComputedRef<boolean> | undefined;
    /**
     * A list of available classes for the Skeleton/ Список доступных классов для Skeleton
     */
    readonly classesSkeleton: SkeletonClassesList;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param classDesign design name/ название дизайна
     * @param classesList list of available classes/ список доступных классов
     */
    constructor(props: SkeletonPropsInclude, classDesign: string, classesList?: (keyof SkeletonClassesList)[] | undefined);
    /**
     * Indicates whether the Skeleton status is enabled/ Указывает, включён ли статус Skeleton
     */
    readonly isSkeleton: ComputedRef<boolean>;
    /**
     * Returns the available list for the skeleton/ Возвращает доступный список для скелетона
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /** Values for the skeleton/ Значения для скелетона */
    readonly binds: ComputedRef<{
        isSkeleton: boolean | undefined;
    }>;
}

declare interface SkeletonPropsInclude {
    isSkeleton?: boolean;
}

export { }
