import type { ConstrBind } from '@dxtmisha/functional'
import type { ChipPropsBasic } from './props'

/**
 * Interface describing the set of components required for the Chip include.
 *
 * Интерфейс, описывающий набор компонентов, необходимых для подключения чипа.
 */
export type ChipComponentInclude = {
  /** Chip component configuration / Конфигурация компонента чипа */
  chip?: object
}

/**
 * Type describing properties for embedding a Chip component inside another component.
 * Allows passing additional bound attributes to the chip via `chipAttrs`.
 *
 * Тип, описывающий свойства для встраивания компонента Chip внутри другого компонента.
 * Позволяет передавать дополнительные привязанные атрибуты чипу через `chipAttrs`.
 *
 * @template Chip - The chip props type used for typed attribute binding /
 *   Тип пропсов чипа, используемый для типизированной привязки атрибутов
 */
export type ChipPropsInclude<
  Chip extends ChipPropsBasic = ChipPropsBasic
> = {
  /** Bound attributes passed directly to the chip component / Привязанные атрибуты, передаваемые напрямую в компонент чипа */
  chipAttrs?: ConstrBind<Chip>
}
