import type { ComputedRef, Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import type { AriaList } from '../../types/ariaTypes'
import type { WindowExpose } from './types'
import type { WindowPropsBasic } from './props'

/**
 * Window status items for different states of window lifecycle/
 * Элементы статуса окна для различных состояний жизненного цикла окна
 */
export enum WindowStatusItem {
  /** Display state/ Состояние отображения */
  display = 'display',
  /** Preparation state/ Состояние подготовки */
  preparation = 'preparation',
  /** Flash state/ Состояние вспышки */
  flash = 'flash',
  /** Open state/ Состояние открытия */
  open = 'open',
  /** Hide state/ Состояние скрытия */
  hide = 'hide',
  /** Close state/ Состояние закрытия */
  close = 'close'
}

/**
 * Window status control items for managing window behavior and appearance/
 * Элементы управления статусом окна для управления поведением и внешним видом окна
 */
export enum WindowStatusControlItem {
  /** Block interaction/ Блокировка взаимодействия */
  block = 'block',
  /**
   * Block window closing, class added to elements inside window/
   * Блокировка закрытия окна, класс добавляется к элементам внутри окна
   */
  blockChildren = 'blockChildren',
  /** Block other windows/ Блокировка других окон */
  blockOther = 'blockOther',
  /** Close window/ Закрыть окно */
  close = 'close',
  /** Static positioning/ Статическое позиционирование */
  static = 'static',
  /** Static control/ Статическое управление */
  controlStatic = 'controlStatic',
  /** Control only when open/ Управление только когда открыто */
  controlOpenOnly = 'controlOpenOnly',
  /** Active control/ Активное управление */
  controlActive = 'controlActive',
  /** Persistent window/ Постоянное окно */
  persistent = 'persistent'
}

/**
 * Options for window events/
 * Опции для событий окна
 */
export type WindowEmitOptions = {
  /** Unique window identifier/ Уникальный идентификатор окна */
  id: string
  /** Window DOM element/ DOM элемент окна */
  element: HTMLDivElement
  /** Control DOM element/ DOM элемент управления */
  control: HTMLElement
  /** Window open state/ Состояние открытия окна */
  open: boolean
}

/**
 * List of CSS classes for window styling/
 * Список CSS классов для стилизации окна
 */
export type WindowClassesList = {
  /** Main block class/ Основной класс блока */
  block: string
  /** Block children class/ Класс дочерних элементов блока */
  blockChildren: string
  /** Block other windows class/ Класс блокировки других окон */
  blockOther: string
  /** Close button class/ Класс кнопки закрытия */
  close: string
  /** Static positioning class/ Класс статического позиционирования */
  static: string

  /** Control element class/ Класс элемента управления */
  control: string
  /** Control ID class/ Класс ID управления */
  controlId: string
  /** Static control class/ Класс статического управления */
  controlStatic: string
  /** Open-only control class/ Класс управления только для открытого состояния */
  controlOpenOnly: string
  /** Active control class/ Класс активного управления */
  controlActive: string

  /** Persistent window class/ Класс постоянного окна */
  persistent: string
}

/**
 * Window event click handler/
 * Обработчик события клика окна
 */
export type WindowEventClick = (event: MouseEvent & TouchEvent | KeyboardEvent) => Promise<void>

/**
 * Interface for window classes inclusion/
 * Интерфейс для включения классов окна
 */
export type WindowControlBasic = {
  /** Window CSS classes list/ Список CSS классов окна */
  classesWindow: WindowClassesList
}

/**
 * Control item data for window management/
 * Данные элемента управления для управления окном
 */
export type WindowControlItem
  = WindowControlBasic
    & {
      /** CSS class string/ Строка CSS класса */
      class: string
      /** Reactive open state/ Реактивное состояние открытия */
      open: Ref<boolean>
      /** Click event handler/ Обработчик события клика */
      onclick: WindowEventClick
      /** Keydown event handler/ Обработчик события нажатия клавиши */
      onKeydown: WindowEventClick
      /** Context menu event handler/ Обработчик события контекстного меню */
      oncontextmenu: WindowEventClick
      /** Binding properties/ Свойства привязки */
      binds:
        AriaList
        & {
        /** Binding class/ Класс привязки */
          class: string
          /** Click event handler for binding/ Обработчик события клика для привязки */
          onclick: WindowEventClick
          /** Keydown event handler/ Обработчик события нажатия клавиши */
          onKeydown: WindowEventClick
          /** Context menu event handler for binding/ Обработчик события контекстного меню для привязки */
          oncontextmenu: WindowEventClick
        }
    }

/**
 * Component map for including the Window component/
 * Карта компонентов для подключения компонента Window
 */
export type WindowComponentInclude = {
  window?: object
}

/**
 * Event map for Window include/
 * Карта событий для подключения Window
 */
export type WindowEmitsInclude = {
  window: [options: WindowEmitOptions]
}

/**
 * Interface for window expose inclusion/
 * Интерфейс для включения expose окна
 */
export interface WindowExposeInclude {
  id: ComputedRef<string | undefined>
  open: ComputedRef<boolean>
  control: ComputedRef<WindowControlItem | undefined>

  setOpen: WindowExpose['setOpen']
  toOpen: WindowExpose['toOpen']
  toClose: WindowExpose['toClose']
  toggle: WindowExpose['toggle']

  windowElement: Ref<ConstrBind<WindowExpose> | undefined>
}

/**
 * Props used to include and configure the Window component/
 * Свойства для подключения и настройки компонента Window
 */
export type WindowPropsInclude<
  Window extends WindowPropsBasic = WindowPropsBasic
> = {
  /** Disabled state/ Отключённое состояние */
  disabled?: boolean
  /** Enable auto close on outside click/ Включить авто-закрытие при клике вне */
  autoClose?: boolean
  /** Additional attributes for Window component/ Дополнительные атрибуты для компонента Window */
  windowAttrs?: ConstrBind<Window>
}

/**
 * CSS variable name for MotionTransform body type/
 * Имя CSS‑переменной для типа тела MotionTransform
 */
export const __WINDOW_TYPE_BODY_NAME = '--sys-type-body'
