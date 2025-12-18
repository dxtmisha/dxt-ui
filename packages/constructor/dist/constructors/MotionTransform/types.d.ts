import { ComputedRef, Ref } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { MotionTransformControlItem, MotionTransformEmitOptions } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MotionTransformComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MotionTransformEmits = {
    'transform': [
        event: Event | undefined,
        options: MotionTransformEmitOptions
    ];
    'transformLite': [
        options: MotionTransformEmitOptions
    ];
    'update:open': [value: boolean];
    'update:modelOpen': [value: boolean];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MotionTransformExpose {
    /** Reactive state of window visibility/ Реактивное состояние видимости окна */
    open: Ref<boolean>;
    /**
     * Computed state indicating if component is shown or being prepared for display/
     * Вычисляемое состояние, указывающее отображается ли компонент или готовится к отображению
     */
    isShow: ComputedRef<boolean>;
    /** Sets open state/ Устанавливает состояние открытия */
    setOpen(open: boolean): void;
    /** Transition to opening state/ Переход в состояние открытия */
    toOpen(): void;
    /** Transition to closing state/ Переход в состояние закрытия */
    toClose(): void;
    /** Toggles open state/ Переключает состояние открытия */
    toggle(): void;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MotionTransformSlots {
    /** Head slot for controls/ Слот шапки для элементов управления */
    head?(props: MotionTransformControlItem): any;
    /** Body slot for content/ Слот тела для содержимого */
    body?(props: MotionTransformControlItem): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MotionTransformClasses = {
    main: ConstrClass;
    context: string;
    head: string;
    body: string;
    backdrop: string;
    scrim: string;
    clickNone: string;
};
