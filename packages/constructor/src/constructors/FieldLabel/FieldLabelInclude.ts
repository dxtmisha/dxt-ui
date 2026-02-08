import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  getElementId,
  getRef,
  isFilled,
  type RawSlots,
  type RefOrNormal,
  type RefType,
  toBinds
} from '@dxtmisha/functional'

import { FieldCounterInclude } from '../FieldCounter'

import type { FieldLabelComponentInclude, FieldLabelPropsInclude, FieldLabelSlotsInclude } from './basicTypes'
import type { FieldLabelPropsBasic } from './props'

/**
 * The class returns data for working with the FieldLabel component
 *
 * Класс возвращает данные для работы с компонентом FieldLabel
 */
export class FieldLabelInclude<
  Props extends FieldLabelPropsInclude = FieldLabelPropsInclude,
  PropsExtra extends ConstrBind<FieldLabelPropsBasic> = ConstrBind<FieldLabelPropsBasic>
> {
  protected readonly labelId: string = getElementId()
  protected readonly counterId: string = getElementId()

  /** Field counter include/ Подключение счетчика поля */
  private readonly fieldCounter: FieldCounterInclude

  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param forId element ID/ идентификатор элемента
   * @param isCounter whether to display the counter/ отображать ли счетчик
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<FieldLabelComponentInclude, Props>,
    protected readonly slots?: FieldLabelSlotsInclude,
    protected readonly forId?: RefOrNormal<string>,
    protected readonly isCounter?: RefType<boolean | undefined>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
    this.fieldCounter = new FieldCounterInclude(this.props, this.className)
  }

  /** Checks if label should be displayed/ Проверяет, надо ли отображать метку */
  readonly is = computed<boolean>(() => isFilled(this.props.label) || Boolean(this.isCounter?.value))

  /** Returns the identifier/ Возвращает идентификатор */
  readonly id = computed<string>(() => {
    const ids: string[] = []

    if (this.props.label) {
      ids.push(this.labelId)
    }

    if (
      this.isCounter?.value
      && this.props.counterShow
    ) {
      ids.push(this.counterId)
    }

    return ids.join(' ')
  })

  /** Computed bindings for FieldLabel/ Вычисляемые привязки для FieldLabel */
  readonly binds = computed<PropsExtra>(() =>
    toBinds<PropsExtra>(
      getRef(this.extra),
      this.isCounter?.value
        ? this.fieldCounter.bindsIntermediary.value
        : {},
      {
        for: getRef(this.forId),
        label: this.props.label,
        required: this.props.required,

        labelId: this.labelId,
        counterId: this.counterId
      },
      this.props.fieldLabelAttrs
    )
  )

  /**
   * Render the FieldLabel component/ Рендер компонента FieldLabel
   */
  readonly render = (): VNode[] => {
    if (
      this.components
      && this.is.value
    ) {
      return this.components.render(
        'fieldLabel',
        {
          ...toBinds(
            this.binds.value,
            { class: `${this.className}__fieldLabel` }
          )
        },
        this.slots as RawSlots,
        this.index
      )
    }

    return []
  }
}
