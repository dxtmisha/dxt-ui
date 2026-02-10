import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, getElementId } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { PrefixInclude } from '../../classes/PrefixInclude'
import { SuffixInclude } from '../../classes/SuffixInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { TextInclude } from '../../classes/TextInclude'

import { IconTrailingInclude } from '../Icon'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { ProgressInclude } from '../Progress'
import { SkeletonInclude } from '../Skeleton'

import { FieldIcons } from './FieldIcons'
import { FieldSize } from './FieldSize'

import type { FieldComponents, FieldEmits, FieldSlots } from './types'
import type { FieldProps } from './props'
import type { FieldControl } from './basicTypes'

/**
 * Field
 */
export class Field {
  /** Text include/ Подключение текста */
  readonly text: TextInclude

  /** Icon trailing include/ Подключение иконки в конце */
  readonly icon: IconTrailingInclude

  /** Caption include/ Подключение подписи */
  readonly caption: CaptionInclude
  /** Prefix include/ Подключение префикса */
  readonly prefix: PrefixInclude
  /** Suffix include/ Подключение суффикса */
  readonly suffix: SuffixInclude

  /** Field label include/ Подключение метки поля */
  readonly fieldLabel: FieldLabelInclude
  /** Field message include/ Подключение сообщения поля */
  readonly fieldMessage: FieldMessageInclude

  /** Progress include/ Подключение прогресса */
  readonly progress: ProgressInclude
  /** Enabled include/ Подключение активности */
  readonly enabled: EnabledInclude
  /** Event click include/ Подключение события клика */
  readonly event: EventClickInclude
  /** Skeleton include/ Подключение скелетона */
  readonly skeleton: SkeletonInclude

  /** Field icons/ Иконки поля */
  readonly icons: FieldIcons
  /** Field size/ Размер поля */
  readonly size: FieldSize

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
   * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.FieldIconsConstructor class for working with field icons/ класс для работы с иконками поля
   * @param constructors.FieldLabelIncludeConstructor class for working with field label/ класс для работы с меткой поля
   * @param constructors.FieldMessageIncludeConstructor class for working with field message/ класс для работы с сообщением поля
   * @param constructors.FieldSizeConstructor class for working with field size/ класс для работы с размером поля
   * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
   * @param constructors.ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   * @param constructors.SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(
    protected readonly props: FieldProps,
    protected readonly refs: ToRefs<FieldProps>,
    protected readonly element: Ref<HTMLLabelElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FieldComponents, FieldProps>,
    protected readonly slots?: FieldSlots,
    protected readonly emits?: ConstrEmit<FieldEmits>,
    constructors?: {
      CaptionIncludeConstructor?: typeof CaptionInclude
      EnabledIncludeConstructor?: typeof EnabledInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      FieldIconsConstructor?: typeof FieldIcons
      FieldLabelIncludeConstructor?: typeof FieldLabelInclude
      FieldMessageIncludeConstructor?: typeof FieldMessageInclude
      FieldSizeConstructor?: typeof FieldSize
      IconTrailingIncludeConstructor?: typeof IconTrailingInclude
      PrefixIncludeConstructor?: typeof PrefixInclude
      ProgressIncludeConstructor?: typeof ProgressInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
      SuffixIncludeConstructor?: typeof SuffixInclude
      TextIncludeConstructor?: typeof TextInclude
    }
  ) {
    const {
      CaptionIncludeConstructor = CaptionInclude,
      EnabledIncludeConstructor = EnabledInclude,
      EventClickIncludeConstructor = EventClickInclude,
      FieldIconsConstructor = FieldIcons,
      FieldLabelIncludeConstructor = FieldLabelInclude,
      FieldMessageIncludeConstructor = FieldMessageInclude,
      FieldSizeConstructor = FieldSize,
      IconTrailingIncludeConstructor = IconTrailingInclude,
      PrefixIncludeConstructor = PrefixInclude,
      ProgressIncludeConstructor = ProgressInclude,
      SkeletonIncludeConstructor = SkeletonInclude,
      SuffixIncludeConstructor = SuffixInclude,
      TextIncludeConstructor = TextInclude
    } = constructors ?? {}

    this.skeleton = new SkeletonIncludeConstructor(
      this.props,
      this.classDesign,
      ['classBackground']
    )
    this.icon = new IconTrailingIncludeConstructor(this.props, this.className, this.components)

    this.text = new TextIncludeConstructor(this.props)

    this.caption = new CaptionIncludeConstructor(this.props, this.className, this.slots)
    this.prefix = new PrefixIncludeConstructor(this.props, this.className, this.slots)
    this.suffix = new SuffixIncludeConstructor(this.props, this.className, this.slots)

    this.fieldLabel = new FieldLabelIncludeConstructor(
      this.props,
      this.className,
      this.components,
      this.slots,
      this.id,
      this.refs.counterTop,
      this.skeleton.binds
    )
    this.fieldMessage = new FieldMessageIncludeConstructor(
      this.props,
      this.className,
      this.components,
      undefined,
      computed(() => !this.props.counterTop),
      this.skeleton.binds
    )

    this.progress = new ProgressIncludeConstructor(
      this.props,
      this.className,
      this.components,
      {
        circular: true,
        position: 'static',
        dense: true
      }
    )

    this.enabled = new EnabledIncludeConstructor(this.props, this.progress)
    this.event = new EventClickIncludeConstructor(this.props, this.enabled, this.emits)

    this.icons = new FieldIconsConstructor(this.props, this.className, this.text)
    this.size = new FieldSizeConstructor(this.element, this.className)
  }

  /** Checks if the field is classic/ Проверяет, является ли поле классическим */
  readonly isClassic = computed<boolean>(
    () => Boolean(
      (this.props as any).classic
      && !(this.props as any).basic
      && !(this.props as any).boxed
      && !(this.props as any).filled
      && !(this.props as any).outlined
      && !(this.props as any).tonal
    )
  )

  /** Checks if an error needs to be displayed/ Проверяет, надо ли выводить ошибку */
  readonly isValidation = computed<boolean>(() => Boolean(
    this.props.validationMessage
    && (
      this.props.forceShowMessage
      || (
        !this.props.readonly
        && !this.props.disabled
      )
    )
  ))

  /** Field identifier/ Идентификатор поля */
  readonly id = computed<string>(() => String(this.props.id || getElementId()))

  /** Values for the class/ Значения для класса */
  readonly classes = computed(() => ({
    [`${this.className}--cancel`]: this.icons.isCancel.value,
    [`${this.className}--suffix`]: this.props.suffix,
    [`${this.className}--validation`]: this.isValidation.value
  }))

  /**
   * Returns data for the slot/ Возвращает данные для слота
   */
  readonly control = computed<FieldControl>(() => {
    const className = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`

    return {
      id: this.id.value,
      className,
      classHidden: `${this.className}__body__hidden`,
      classForFocus: `${this.className}__body__focus`,
      binds: {
        id: this.id.value,
        class: className,
        ...AriaStaticInclude.invalid(this.isValidation.value),
        ...AriaStaticInclude.describedby(this.getDescribedby())
      }
    }
  })

  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   */
  protected getDescribedby(): string {
    const list: string[] = [
      this.prefix.describedby.value,
      this.suffix.describedby.value,
      this.fieldLabel.id.value,
      this.fieldMessage.id.value
    ]

    return list.join(' ').trim()
  }
}
