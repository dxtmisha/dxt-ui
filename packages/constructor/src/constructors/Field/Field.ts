import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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

import { FieldElement } from './FieldElement'
import { FieldIcons } from './FieldIcons'
import { FieldSize } from './FieldSize'
import { FieldSpace } from './FieldSpace'

import type { FieldComponents, FieldEmits, FieldSlots } from './types'
import type { FieldProps } from './props'
import type { FieldControl } from './basicTypes'

/**
 * Class representing the core logic and dependencies of a Form Field.
 * It manages layout states, labels, validation messages, and accessory elements.
 *
 * Класс, представляющий основную логику и зависимости поля формы.
 * Управляет состояниями разметки, метками, валидационными сообщениями и вспомогательными элементами.
 */
export class Field {
  /** Text include / Подключение текста */
  readonly text: TextInclude

  /** Skeleton include / Подключение скелетона */
  readonly skeleton: SkeletonInclude

  /** Icon trailing include / Подключение иконки в конце */
  readonly icon: IconTrailingInclude

  /** Caption include / Подключение подписи */
  readonly caption: CaptionInclude

  /** Prefix include / Подключение префикса */
  readonly prefix: PrefixInclude

  /** Suffix include / Подключение суффикса */
  readonly suffix: SuffixInclude

  /** Progress include / Подключение прогресса */
  readonly progress: ProgressInclude

  /** Enabled include / Подключение активности */
  readonly enabled: EnabledInclude

  /** Event click include / Подключение события клика */
  readonly event: EventClickInclude

  /** Field icons / Иконки поля */
  readonly icons: FieldIcons

  /** Field size / Размер поля */
  readonly size: FieldSize

  /** Field element / Элемент поля */
  readonly fieldElement: FieldElement

  /** Field label include / Подключение метки поля */
  readonly fieldLabel: FieldLabelInclude

  /** Field message include / Подключение сообщения поля */
  readonly fieldMessage: FieldMessageInclude

  /** Field space / Пространство поля */
  readonly space: FieldSpace

  /**
   * Constructor for initializing all field sub-modules and state management utilities.
   *
   * Конструктор для инициализации всех подмодулей поля и утилит управления состоянием.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.CaptionIncludeConstructor class for working with caption / класс для работы с подписью
   * @param constructors.EnabledIncludeConstructor class for working with enabled / класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы с событием клика
   * @param constructors.FieldIconsConstructor class for working with field icons / класс для работы с иконками поля
   * @param constructors.FieldLabelIncludeConstructor class for working with field label / класс для работы с меткой поля
   * @param constructors.FieldMessageIncludeConstructor class for working with field message / класс для работы с сообщением поля
   * @param constructors.FieldSizeConstructor class for working with field size / класс для работы с размером поля
   * @param constructors.IconTrailingIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.PrefixIncludeConstructor class for working with prefix / класс для работы с префиксом
   * @param constructors.ProgressIncludeConstructor class for working with progress / класс для работы с прогрессом
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton / класс для работы со скелетоном
   * @param constructors.SuffixIncludeConstructor class for working with suffix / класс для работы с суффиксом
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
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
    constructors: {
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
    } = {}
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
    } = constructors

    this.text = new TextIncludeConstructor(props)
    this.skeleton = new SkeletonIncludeConstructor(
      props,
      this.classDesign,
      ['classBackground']
    )

    this.icon = new IconTrailingIncludeConstructor(props, className, components)
    this.caption = new CaptionIncludeConstructor(props, className, slots)
    this.prefix = new PrefixIncludeConstructor(props, className, slots)
    this.suffix = new SuffixIncludeConstructor(props, className, slots)

    this.progress = new ProgressIncludeConstructor(
      className,
      props,
      components,
      {
        circular: true,
        position: 'static',
        dense: true
      }
    )

    this.enabled = new EnabledIncludeConstructor(props, this.progress)
    this.event = new EventClickIncludeConstructor(props, this.enabled, emits)

    this.icons = new FieldIconsConstructor(props, className, this.text)
    this.size = new FieldSizeConstructor(element, className)

    this.fieldElement = new FieldElement(props, element)
    this.fieldLabel = new FieldLabelIncludeConstructor(
      className,
      props,
      components,
      () => this.skeleton.binds,
      undefined,
      () => this.fieldElement.id,
      () => props.counterTop
    )
    this.fieldMessage = new FieldMessageIncludeConstructor(
      className,
      props,
      components,
      () => this.skeleton.binds,
      undefined,
      undefined,
      () => !props.counterTop
    )
    this.space = new FieldSpace(props, this.fieldElement)
  }

  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   * @returns describedby string / строка describedby
   */
  get describedby(): string {
    const list: string[] = [
      this.prefix.describedby,
      this.suffix.describedby,
      this.fieldLabel.id,
      this.fieldMessage.id
    ]

    return list.filter(Boolean).join(' ')
  }

  /**
   * Returns control data for standard slot binding.
   *
   * Возвращает данные управления для стандартной привязки слотов.
   * @returns control bindings and classes / привязки и классы управления
   */
  get control(): FieldControl {
    const id = this.fieldElement.id
    const className = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`

    return {
      id,
      className,
      classHidden: `${this.className}__body__hidden`,
      classForFocus: `${this.className}__body__focus`,
      binds: {
        'id': id,
        'class': className,
        'disabled': this.props.disabled,
        'readonly': this.props.readonly,
        'data-input': id,
        ...AriaStaticInclude.invalid(this.fieldElement.isValidation()),
        ...AriaStaticInclude.describedby(this.describedby)
      }
    }
  }

  /**
   * Values for the CSS classes.
   *
   * Значения для CSS-классов.
   * @returns object with CSS classes / объект с CSS-классами
   */
  get classes() {
    return {
      [`${this.className}--cancel`]: this.icons.isCancel(),
      [`${this.className}--suffix`]: this.props.suffix,
      [`${this.className}--validation`]: this.fieldElement.isValidation()
    }
  }
}
