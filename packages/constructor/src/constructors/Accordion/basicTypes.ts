import type { ConstrBind } from '@dxtmisha/functional'
import type { AccordionPropsBasic } from './props'

/**
 * Component map for including Accordion.
 *
 * Карта компонентов для подключения Accordion.
 */
export type AccordionComponentInclude = {
  /** Accordion component key / Ключ компонента Accordion */
  accordion?: object
}

/**
 * Props for embedding Accordion attributes inside another component.
 *
 * Свойства для встраивания атрибутов Accordion внутри другого компонента.
 */
export type AccordionPropsInclude<
  Accordion extends AccordionPropsBasic = AccordionPropsBasic
> = {
  /** Bound attributes passed directly to the accordion component / Привязанные атрибуты, передаваемые напрямую в компонент аккордеона */
  accordionAttrs?: ConstrBind<Accordion>
}
