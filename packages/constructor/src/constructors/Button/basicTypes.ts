import type { ConstrBind } from '@dxtmisha/functional'
import type { ButtonPropsBasic } from './props'

/**
 * Interface describing the set of components required for the Button include.
 *
 * Интерфейс, описывающий набор компонентов, необходимых для подключения кнопки.
 */
export type ButtonComponentInclude = {
  /** Button component configuration/ Конфигурация компонента кнопки */
  button?: object
}

/**
 * Type describing properties for embedding a Button component inside another component.
 * Allows passing additional bound attributes to the button via `buttonAttrs`.
 *
 * Тип, описывающий свойства для встраивания компонента Button внутри другого компонента.
 * Позволяет передавать дополнительные привязанные атрибуты кнопке через `buttonAttrs`.
 *
 * @template Button - The button props type used for typed attribute binding /
 *   Тип пропсов кнопки, используемый для типизированной привязки атрибутов
 */
export type ButtonPropsInclude<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = {
  /** Bound attributes passed directly to the button component / Привязанные атрибуты, передаваемые напрямую в компонент кнопки */
  buttonAttrs?: ConstrBind<Button>
}
