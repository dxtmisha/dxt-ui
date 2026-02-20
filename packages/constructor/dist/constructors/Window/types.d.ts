import { ComputedRef, Ref } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { ScrollbarComponentsInclude, ScrollbarEmitsInclude } from '../Scrollbar';
import { ButtonComponentInclude } from '../Button';
import { ImageComponentsInclude, ImageEmitsInclude } from '../Image';
import { ModelEmitsOpen } from '../../types/modelTypes';
import { WindowControlItem, WindowEmitOptions } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type WindowComponents = ScrollbarComponentsInclude & ButtonComponentInclude & ImageComponentsInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type WindowEmits = ScrollbarEmitsInclude & ImageEmitsInclude & ModelEmitsOpen & {
    window: [options: WindowEmitOptions];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface WindowExpose {
    /**
     * Unique identifier of the window/
     * Уникальный идентификатор окна
     */
    id: string;
    /**
     * Reactive state of window visibility/
     * Реактивное состояние видимости окна
     */
    open: Ref<boolean>;
    /**
     * Control item data for window management/
     * Данные элемента управления для управления окном
     */
    control: ComputedRef<WindowControlItem>;
    /**
     * Sets window open state/
     * Устанавливает состояние открытия окна
     */
    setOpen(open: boolean): Promise<void>;
    /** Transition to opening state/ Переход в состояние открытия */
    toOpen(): Promise<void>;
    /** Transition to closing state/ Переход в состояние закрытия */
    toClose(): Promise<void>;
    /**
     * Toggles window visibility/
     * Переключает видимость окна
     */
    toggle(): Promise<void>;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface WindowSlots {
    /**
     * Control slot for window management/
     * Слот управления для управления окном
     */
    control?(props: WindowControlItem): any;
    /**
     * Title slot for window header/
     * Слот заголовка для шапки окна
     */
    title?(props: WindowControlItem): any;
    /**
     * Footer slot for window bottom/
     * Слот подвала для низа окна
     */
    footer?(props: WindowControlItem): any;
    /**
     * Default slot for main content/
     * Основной слот для главного содержимого
     */
    default?(props: WindowControlItem): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type WindowClasses = {
    main: ConstrClass;
    body: string;
    bodyGroup: string;
    bodyContext: string;
    control: string;
    image: string;
    close: string;
    teleport: string;
};
