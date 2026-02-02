import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClass, ConstrEmit, DesignComp, ConstrBind } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { ModelInclude } from '../../classes/ModelInclude';
import { BarsAction } from './BarsAction';
import { WindowClassesInclude } from '../Window';
import { MotionTransformClassesInclude } from '../MotionTransform';
import { SkeletonInclude } from '../Skeleton';
import { TextInclude } from '../../classes/TextInclude';
import { BarsComponents, BarsEmits, BarsSlots } from './types';
import { BarsProps } from './props';
import { EventClickValue } from '../../types/eventClickTypes';
import { ButtonPropsBasic } from '../Button';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * Bars
 */
export declare class Bars {
    protected readonly props: BarsProps;
    protected readonly refs: ToRefs<BarsProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<BarsComponents, BarsProps> | undefined;
    protected readonly slots?: BarsSlots | undefined;
    protected readonly emits?: ConstrEmit<BarsEmits> | undefined;
    /** Управление action‑режимом */
    readonly action: BarsAction;
    /** Label object/ Объект метки */
    readonly label: LabelInclude;
    /** Description object/ Объект описания */
    readonly description: DescriptionInclude;
    /** Event object/ Объект события */
    readonly event: EventClickInclude;
    /** Helper for Window CSS classes/ Вспомогательный класс для CSS‑классов Window */
    readonly windowClasses: WindowClassesInclude;
    /** Helper for MotionTransform CSS classes/ Вспомогательный класс для CSS‑классов MotionTransform */
    readonly motionTransformClasses: MotionTransformClassesInclude;
    /** Подключение скелетона для текста/описания */
    readonly skeleton: SkeletonInclude;
    /** Text object/ Объект текста */
    readonly text: TextInclude;
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
     * @param BarsActionConstructor class for managing action mode/ класс для управления action-режимом
     * @param LabelConstructor class for creating a label/ класс для создания метки
     * @param DescriptionConstructor class for creating a description/ класс для создания описания
     * @param EventConstructor class for creating an event/ класс для создания события
     * @param WindowClassesConstructor helper class for Window CSS classes/ вспомогательный класс для CSS-классов Window
     * @param MotionTransformClassesConstructor helper class for MotionTransform CSS classes/ вспомогательный класс для CSS-классов MotionTransform
     * @param SkeletonConstructor class for creating a skeleton/ класс для создания скелета
     * @param TextConstructor class for creating text/ класс для создания текста
     * @param ModelConstructor class for working with models/ класс для работы с моделями
     */
    constructor(props: BarsProps, refs: ToRefs<BarsProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<BarsComponents, BarsProps> | undefined, slots?: BarsSlots | undefined, emits?: ConstrEmit<BarsEmits> | undefined, BarsActionConstructor?: typeof BarsAction, LabelConstructor?: typeof LabelInclude, DescriptionConstructor?: typeof DescriptionInclude, EventConstructor?: typeof EventClickInclude, WindowClassesConstructor?: typeof WindowClassesInclude, MotionTransformClassesConstructor?: typeof MotionTransformClassesInclude, SkeletonConstructor?: typeof SkeletonInclude, TextConstructor?: typeof TextInclude, ModelConstructor?: typeof ModelInclude);
    /** Returns the button data/ Возвращает данные кнопки */
    readonly backBinds: ComputedRef< ConstrBind<ButtonPropsBasic> | undefined>;
    /** Returns the list of control buttons/ Возвращает список кнопок управления */
    readonly barsBinds: ComputedRef< ConstrBind<ButtonPropsBasic>[] | undefined>;
    /**
     * Returns the list of active control buttons/
     * Возвращает список активных кнопок управления
     */
    readonly actionBarsBinds: ComputedRef< ConstrBind<ButtonPropsBasic>[] | undefined>;
    /** Returns the button name/ Возвращает название кнопки */
    readonly backLabel: ComputedRef<string | number | undefined>;
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    readonly classes: ComputedRef<ConstrClass>;
    /**
     * Returns the value for the aria-live property.
     *
     * Возвращает значение для свойства aria-live.
     */
    readonly ariaLive: ComputedRef<"off" | "polite" | undefined>;
    /** Binds for label text/ Привязки для текста метки */
    protected readonly labelBinds: {
        label: NumberOrString | undefined;
        labelId: string | undefined;
    };
    /** Binds for description text/ Привязки для текста описания */
    protected readonly descriptionBinds: {
        description: string | number | undefined;
        descriptionId: string | undefined;
    };
    /**
     * Prepares all parameters for the button.
     *
     * Подготавливает все параметры для кнопки.
     * @param item list of buttons/ список параметры
     * @param key button identifier/ идентификатор кнопки
     * @param isAction is action button/ является ли кнопка действия
     */
    protected initItem(item: BarsProps['buttonAttrs'], key: string | number, isAction?: boolean): BarsProps['buttonAttrs'];
    /**
     * Prepares all parameters for the button.
     *
     * Подготавливает список параметры для кнопки.
     * @param bars list of buttons/ >список кнопок
     * @param isAction is action button/ является ли кнопка действия
     */
    protected initList(bars?: BarsProps['bars'], isAction?: boolean): BarsProps['bars'];
    /**
     * Click handler for the "back" button
     *
     * Обработчик клика по кнопке «назад»: закрывает action‑режим и проксирует событие.
     */
    protected readonly onClickBack: (event: MouseEvent, options?: EventClickValue) => void;
}
