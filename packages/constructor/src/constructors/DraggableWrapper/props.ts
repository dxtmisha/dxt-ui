type DraggableWrapperPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type DraggableWrapperPropsBasic = {
  /**
   * Disables the drag-and-drop sorting functionality /
   * Отключает функционал сортировки перетаскиванием
   */
  disabled?: boolean

  /**
   * HTML tag of the wrapper element /
   * HTML-тег элемента обертки
   */
  tag?: string
}

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type DraggableWrapperProps = DraggableWrapperPropsBasic & DraggableWrapperPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsDraggableWrapper = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
