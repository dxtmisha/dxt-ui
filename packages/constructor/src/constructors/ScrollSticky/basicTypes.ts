import { type Ref } from 'vue'

/**
 * Type describing the scroll and context properties. /
 * Тип, описывающий свойства прокрутки и контекста.
 */
export type ScrollStickyBind = {
  /** Element reference / Ссылка на элемент */
  ref: Ref<HTMLElement | undefined>
  /** Class name / Название класса */
  class: string | undefined
}

/**
 * Type describing the element structure for slots. /
 * Тип, описывающий структуру элемента для слотов.
 */
export type ScrollStickyBindItem = ScrollStickyBind & {
  /** Binding properties / Свойства привязки */
  binds: ScrollStickyBind
}

/**
 * Type describing the component inclusion structure. /
 * Тип, описывающий структуру включения компонента.
 */
export type ScrollStickyComponentInclude = {
  /** Scroll sticky component instance / Экземпляр компонента липкой прокрутки */
  scrollSticky?: object
}
