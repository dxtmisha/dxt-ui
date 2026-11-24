// ai-none

import { isFilled } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { CollagePropsInclude } from './basicTypes'
import type { CollageProps } from './props'
import type { CollageExpose, CollageSlots } from './types'

/**
 * CollageInclude class provides functionality for embedding and conditionally rendering Collage components
 * within parent components.
 *
 * Класс CollageInclude предоставляет функциональность для внедрения и условного рендеринга компонентов
 * Collage внутри родительских компонентов.
 */
export class CollageInclude<
  Props extends CollagePropsInclude = CollagePropsInclude,
  PropsExtra extends CollageProps = CollageProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    CollageExpose,
    CollageSlots
  > {
  /**
   * Checks whether collage content or variant configuration is present in properties.
   *
   * Проверяет наличие содержимого или конфигурации варианта коллажа в свойствах.
   * @param props input properties / входные свойства
   * @returns true if collage should be created or displayed / true, если коллаж должен создаваться или отображаться
   */
  static is(props?: Readonly<CollagePropsInclude>): boolean {
    const attrs = props?.collageAttrs

    return Boolean(
      isFilled(attrs?.images)
      || isFilled(attrs?.variant)
    )
  }

  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'collage'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'collageAttrs'

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false

  /**
   * Checks whether the collage should be displayed.
   *
   * Проверяет, нужно ли отображать коллаж.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    return Boolean(
      isFilled(this.binds.value.images)
      || isFilled(this.binds.value.variant)
    )
  }
}
