import {
  isFilled,
  isNull
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { FieldCounterPropsInclude } from './basicTypes'
import type { FieldCounterProps } from './props'

/**
 * FieldCounterInclude class provides functionality for conditionally rendering field counter components
 * within other components. It manages the logic for determining when to display a field counter
 * and configures the appropriate properties.
 *
 * Класс FieldCounterInclude предоставляет функциональность для условного рендеринга компонентов
 * счетчика поля внутри других компонентов. Он управляет логикой определения необходимости
 * отображения счетчика поля и настраивает соответствующие свойства.
 */
export class FieldCounterInclude extends ComponentIncludeAbstract<
  FieldCounterPropsInclude,
  FieldCounterProps
> {
  /** Component sub-name or code identifier / Дополнительное имя компонента или идентификатор кода */
  protected readonly name = 'fieldCounter'
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected readonly propsAttrsName = 'fieldCounterAttrs'

  /**
   * Checks whether the field counter should be displayed.
   *
   * Проверяет, нужно ли отображать счетчик поля.
   * @returns true if the counter should be displayed / true, если счетчик должен быть отображен
   */
  override get is(): boolean {
    const props = this.getProps()

    return Boolean(
      props.counterShow && (
        !isNull(props.counter)
        || isFilled(props.maxlength)
      )
    )
  }

  /**
   * Returns the intermediate bindings for the field counter.
   *
   * Возвращает промежуточные привязки для счетчика поля.
   * @returns intermediate counter properties / промежуточные свойства счетчика
   */
  get bindsIntermediary(): FieldCounterPropsInclude {
    const props = this.getProps()

    return {
      counter: props.counter,
      counterShow: props.counterShow,
      counterTemplate: props.counterTemplate,
      counterId: props.counterId,
      maxlength: props.maxlength,
      fieldCounterAttrs: props.fieldCounterAttrs
    }
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      ...binds,

      id: props.counterId,
      counter: props.counter,
      maxlength: props.maxlength,
      template: props.counterTemplate
    }
  }
}
