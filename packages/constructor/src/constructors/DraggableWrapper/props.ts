/** Type describing token properties / Тип, описывающий свойства токенов */
type DraggableWrapperPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Type describing basic properties / Тип, описывающий базовые свойства */
export type DraggableWrapperPropsBasic = {
  /** Disables the drag-and-drop sorting functionality / Отключает функционал сортировки перетаскиванием */
  disabled?: boolean

  /** HTML tag of the wrapper element / HTML-тег элемента обертки */
  tag?: string
  /** Delay before dragging starts in milliseconds / Задержка перед началом перетаскивания в миллисекундах */
  delay?: number | string
  /** Custom classes for the placeholder square element / Пользовательские классы для элемента-заполнителя */
  classesSquare?: string | string[]
}

/** Type describing incoming properties / Тип, описывающий входящие свойства */
export type DraggableWrapperProps = DraggableWrapperPropsBasic & DraggableWrapperPropsToken

/** Default value for property / Значение по умолчанию для свойства */
export const defaultsDraggableWrapper = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
