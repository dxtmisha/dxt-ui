import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignComponents } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldCounter: {};

/**
 * FieldCounter
 */
export declare class FieldCounter {
    protected readonly props: FieldCounterProps;
    protected readonly refs: ToRefs<FieldCounterProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldCounterComponents, FieldCounterProps> | undefined;
    protected readonly slots?: FieldCounterSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldCounterEmits> | undefined;
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
    constructor(props: FieldCounterProps, refs: ToRefs<FieldCounterProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldCounterComponents, FieldCounterProps> | undefined, slots?: FieldCounterSlots | undefined, emits?: ConstrEmit<FieldCounterEmits> | undefined);
    /** Checks if it is necessary to display the number of input characters/ Проверяет, надо ли выводить количество вводимых символов */
    readonly is: ComputedRef<boolean>;
    /** Checks if it is necessary to display the maximum available number of characters/ Проверяет, надо ли выводить максимальное доступное количество символов */
    readonly isMax: ComputedRef<boolean>;
    /** Returns text for output/ Возвращает текст для вывода */
    readonly item: ComputedRef<string>;
    /**
     * Returns the number of input characters.
     *
     * Возвращает количество вводимых символов.
     */
    getCounter(): number;
    /**
     * Returns the maximum available input number.
     *
     * Возвращает максимально доступное вводимое число.
     */
    getMax(): number;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type FieldCounterClasses = {
    main: ConstrClass;
};

/**
 * Interface for describing which components need to be connected for FieldCounter work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldCounter
 */
export declare type FieldCounterComponentInclude = {
    fieldCounter: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type FieldCounterComponents = {};

/**
 * FieldCounterDesign
 */
export declare class FieldCounterDesign<COMP extends FieldCounterComponents, EXPOSE extends FieldCounterExpose, CLASSES extends FieldCounterClasses, P extends FieldCounterPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, FieldCounterEmits, EXPOSE, FieldCounterSlots, CLASSES, P> {
    protected readonly item: FieldCounter;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, FieldCounterEmits, P>);
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
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type FieldCounterEmits = {};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface FieldCounterExpose {
}

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

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface FieldCounterProps extends FieldCounterPropsBasic, FieldCounterPropsToken {
}

export declare interface FieldCounterPropsBasic {
    counter?: string | number;
    maxlength?: string | number;
    template?: string;
    id?: string;
}

/**
 * Properties that can be passed to FieldCounterInclude/
 * Свойства, которые можно передать в FieldCounterInclude
 */
export declare interface FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> {
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
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface FieldCounterSlots {
}

export { }
