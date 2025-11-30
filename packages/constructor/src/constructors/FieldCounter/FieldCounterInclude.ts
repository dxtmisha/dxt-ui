import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  DesignComponents,
  getElementId,
  getRef,
  isFilled,
  isNull,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type {
  FieldCounterComponentInclude,
  FieldCounterExposeInclude,
  FieldCounterPropsInclude
} from './basicTypes'
import type { FieldCounterProps } from './props'

/**
 * The class returns data for working with the FieldCounter component
 *
 * Класс возвращает данные для работы с компонентом FieldCounter
 */
export class FieldCounterInclude<
  Props extends FieldCounterPropsInclude = FieldCounterPropsInclude,
  PropsExtra extends ConstrBind<FieldCounterProps> = ConstrBind<FieldCounterProps>
> {
  /** Unique identifier/ Уникальный идентификатор */
  readonly id: string = getElementId()

  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<FieldCounterComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /** Checks if counter should be displayed/ Проверяет, надо ли отображать счетчик */
  readonly isCounter = computed<boolean>(() =>
    Boolean(
      this.props.counterShow && (
        !isNull(this.props.counter)
        || isFilled(this.props.maxlength)
      )
    )
  )

  /** Exposed properties for FieldCounter/ Экспортируемые свойства для FieldCounter */
  readonly expose: FieldCounterExposeInclude = {
    fieldCounterId: this.id
  }

  /** Computed bindings for FieldCounter/ Вычисляемые привязки для FieldCounter */
  readonly binds = computed<PropsExtra>(() => {
    return toBinds<PropsExtra>(
      getRef(this.extra),
      {
        counter: this.props.counter,
        maxlength: this.props.maxlength,
        template: this.props.counterTemplate
      },
      this.props.fieldCounterAttrs
    )
  })

  /** Intermediate bindings for FieldCounter/ Промежуточные привязки для FieldCounter */
  readonly bindsIntermediary = computed<FieldCounterPropsInclude>(() => {
    return {
      counter: this.props.counter,
      counterShow: this.props.counterShow,
      counterTemplate: this.props.counterTemplate,
      maxlength: this.props.maxlength,
      fieldCounterAttrs: this.props.fieldCounterAttrs
    }
  })

  /**
   * Render the FieldCounter component/
   * Рендер компонента FieldCounter
   */
  readonly render = (): VNode[] => {
    if (this.components && this.isCounter.value) {
      return this.components.render(
        'fieldCounter',
        {
          ...toBinds(
            this.binds.value,
            { class: `${this.className}__fieldCounter` }
          )
        },
        undefined,
        this.index
      )
    }

    return []
  }
}
