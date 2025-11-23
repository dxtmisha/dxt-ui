import type { ComputedRef, Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import type { MotionTransformEmits, MotionTransformExpose } from './types'
import type { MotionTransformProps } from './props'

/**
 * Options for MotionTransform events/
 * Опции для событий MotionTransform
 */
export type MotionTransformEmitOptions = {
  /** Source area type (head, body, top, script)/ Тип области источника (head, body, top, script) */
  type: 'head' | 'body' | 'top' | 'script'
  /** Open state after transform/ Состояние открытия после трансформации */
  open: boolean
}

/**
 * List of CSS classes for MotionTransform styling/
 * Список CSS классов для стилизации MotionTransform
 */
export type MotionTransformClassList = {
  /** Show state class/ Класс состояния видимости */
  show: string
  /** Open state class/ Класс состояния открытия */
  open: string
  /** Window mode class/ Класс режима окна */
  window: string

  /** Click feedback class/ Класс отклика на клик */
  click: string
  /** Ignore element class/ Класс игнорирования элемента */
  none: string
  /** Global ignore class/ Глобальный класс игнорирования */
  noneGlobal: string
  /** Close trigger class/ Класс триггера закрытия */
  close: string
}

/**
 * Style variable names for MotionTransform layout/
 * Имена стилевых переменных для раскладки MotionTransform
 */
export type MotionTransformStyle = {
  /** Context width CSS var/ CSS‑переменная ширины контекста */
  contextWidth: string
  /** Context height CSS var/ CSS‑переменная высоты контекста */
  contextHeight: string
  /** Head scale CSS var/ CSS‑переменная масштаба заголовка */
  headScale: string
  /** Top position CSS var/ CSS‑переменная верхней позиции */
  top: string
  /** Left position CSS var/ CSS‑переменная левой позиции */
  left: string
  /** Head width CSS var/ CSS‑переменная ширины заголовка */
  headWidth: string
  /** Height CSS var/ CSS‑переменная высоты */
  height: string
  /** Scale CSS var/ CSS‑переменная масштаба */
  scale: string
  /** Head height CSS var/ CSS‑переменная высоты заголовка */
  headHeight: string
  /** Body height CSS var/ CSS‑переменная высоты тела */
  bodyHeight: string
}

/**
 * Slot props passed to head/body slots/
 * Параметры слота, передаваемые в head/body
 */
export type MotionTransformControlItem = {
  /** Reactive open state/ Реактивное состояние открытия */
  isOpen: ComputedRef<boolean>
  /** Visible or preparing to show/ Видим либо готовится к показу */
  isShow: ComputedRef<boolean>
  /** Helper CSS classes/ Вспомогательные CSS‑классы */
  classes: MotionTransformClassList
  /** Helper style variables/ Вспомогательные стилевые переменные */
  idBody: string

  /** Binding attributes for element/ Атрибуты привязки для элемента */
  binds: {
    /** Helper CSS classes/ Вспомогательные CSS‑классы */
    classes: MotionTransformClassList
    /** Helper style variables/ Вспомогательные стилевые переменные */
    idBody: string
  }
}

/**
 * Component map for including MotionTransform/
 * Карта компонентов для подключения MotionTransform
 */
export type MotionTransformComponentInclude = {
  /** MotionTransform component key/ Ключ компонента MotionTransform */
  motionTransform?: object
}

/**
 * Event map for MotionTransform include/
 * Карта событий для подключения MotionTransform
 */
export type MotionTransformEmitsInclude = {
  /** Transform event with native event and options/ Событие трансформации с нативным событием и опциями */
  transform?: MotionTransformEmits['transform']
  /** Lightweight transform event with options only/ Облегчённое событие трансформации только с опциями */
  transformLite?: MotionTransformEmits['transformLite']
}

/**
 * Interface for MotionTransform expose inclusion/
 * Интерфейс для включения expose MotionTransform
 */
export interface MotionTransformExposeInclude extends MotionTransformExpose {
  motionTransformElement: Ref<ConstrBind<MotionTransformExpose> | undefined>
}

/**
 * Props used to include and configure MotionTransform/
 * Свойства для подключения и настройки MotionTransform
 */
export interface MotionTransformPropsInclude<
  MotionTransform extends MotionTransformProps = MotionTransformProps
> {
  /** Open state/ Состояние открытия */
  open?: boolean
  /** Click on head opens component/ Клик по заголовку открывает компонент */
  clickOpen?: boolean
  /** Auto close on outside click/ Авто‑закрытие при клике вне */
  autoClose?: boolean
  /** Additional attributes for MotionTransform/ Дополнительные атрибуты для MotionTransform */
  motionTransformAttrs?: ConstrBind<MotionTransform>
}

/**
 * CSS variable name for MotionTransform body type/
 * Имя CSS‑переменной для типа тела MotionTransform
 */
export const __MOTION_TRANSFORM_TYPE_BODY_NAME = '--sys-type-body'
