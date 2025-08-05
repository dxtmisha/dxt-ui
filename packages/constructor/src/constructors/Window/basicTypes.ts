import type { Ref } from 'vue'

/**
 * Options for window events/
 * Опции для событий окна
 */
export type WindowEmitOptions = {
  /**
   * Unique window identifier/
   * Уникальный идентификатор окна
   */
  id: string
  /**
   * Window DOM element/
   * DOM элемент окна
   */
  element: HTMLDivElement
  /**
   * Control DOM element/
   * DOM элемент управления
   */
  control: HTMLElement
  /**
   * Window open state/
   * Состояние открытия окна
   */
  open: boolean
}

/**
 * List of CSS classes for window styling/
 * Список CSS классов для стилизации окна
 */
export type WindowClassesList = {
  /**
   * Main block class/
   * Основной класс блока
   */
  block: string
  /**
   * Block children class/
   * Класс дочерних элементов блока
   */
  blockChildren: string
  /**
   * Close button class/
   * Класс кнопки закрытия
   */
  close: string
  /**
   * Static positioning class/
   * Класс статического позиционирования
   */
  static: string

  /**
   * Control element class/
   * Класс элемента управления
   */
  control: string
  /**
   * Control ID class/
   * Класс ID управления
   */
  controlId: string
  /**
   * Static control class/
   * Класс статического управления
   */
  controlStatic: string
  /**
   * Open-only control class/
   * Класс управления только для открытого состояния
   */
  controlOpenOnly: string
  /**
   * Active control class/
   * Класс активного управления
   */
  controlActive: string

  /**
   * Persistent window class/
   * Класс постоянного окна
   */
  persistent: string
}

/**
 * Window event click handler/
 * Обработчик события клика окна
 */
export type WindowEventClick = (event: MouseEvent & TouchEvent) => Promise<void>

/**
 * Interface for window classes inclusion/
 * Интерфейс для включения классов окна
 */
export type WindowClassesInclude = {
  /**
   * Window CSS classes list/
   * Список CSS классов окна
   */
  classesWindow: WindowClassesList
}

/**
 * Control item data for window management/
 * Данные элемента управления для управления окном
 */
export type WindowControlItem
  = WindowClassesInclude
    & {
      /**
       * CSS class string/
       * Строка CSS класса
       */
      class: string
      /**
       * Reactive open state/
       * Реактивное состояние открытия
       */
      open: Ref<boolean>
      /**
       * Click event handler/
       * Обработчик события клика
       */
      onclick: WindowEventClick
      /**
       * Context menu event handler/
       * Обработчик события контекстного меню
       */
      oncontextmenu: WindowEventClick
      /**
       * Binding properties/
       * Свойства привязки
       */
      binds: {
        /**
         * Binding class/
         * Класс привязки
         */
        class: string
        /**
         * Click event handler for binding/
         * Обработчик события клика для привязки
         */
        onclick: WindowEventClick
        /**
         * Context menu event handler for binding/
         * Обработчик события контекстного меню для привязки
         */
        oncontextmenu: WindowEventClick
      }
    }
