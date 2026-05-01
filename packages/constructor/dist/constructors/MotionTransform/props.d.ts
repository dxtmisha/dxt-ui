import { AriaByPropsInclude } from '../../types/ariaTypes';
import { ModelPropsOpen } from '../../types/modelTypes';
export type MotionTransformPropsToken = {
    section?: boolean;
    animationHeadPosition?: string | 'top' | 'toBottom';
    adaptive?: string | 'planeAlways';
};
export type MotionTransformPropsBasic = AriaByPropsInclude & ModelPropsOpen & {
    /** Current transformation state (v-model:open)/ Текущее состояние трансформации (v-model:open) */
    open?: boolean;
    /** If true, ensures the body content is rendered in the DOM regardless of the open state/ Если true, гарантирует, что содержимое тела рендерится в DOM независимо от состояния открытия */
    inDom?: boolean;
    /** Element or identifier to be excluded from the auto-close logic/ Элемент или идентификатор, который следует исключить из логики автозакрытия */
    ignore?: HTMLElement | string;
    /** CSS selector for elements that should be ignored by the auto-close triggers/ CSS‑селектор для элементов, которые должны игнорироваться триггерами автозакрытия */
    ignoreSelector?: string;
    /** Enables toggling the transformation state by clicking on the head element/ Включает переключение состояния трансформации при клике по элементу заголовка */
    clickOpen?: boolean;
    /** Enables automatic state reset when clicking outside the component or pressing Escape/ Включает автоматический сброс состояния при клике вне компонента или нажатии Escape */
    autoClose?: boolean;
    /** Enables transition animations for smooth transformation state changes/ Включает анимацию перехода для плавного изменения состояния трансформации */
    animationShow?: boolean;
    /** The HTML tag for the body element/ HTML‑тег для элемента тела */
    tagBody?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionTransformProps = MotionTransformPropsBasic & MotionTransformPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMotionTransform: {
    animationHeadPosition: string;
    clickOpen: boolean;
    autoClose: boolean;
    animationShow: boolean;
    tagBody: string;
};
