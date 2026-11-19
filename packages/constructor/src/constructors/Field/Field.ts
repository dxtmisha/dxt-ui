import { getCurrentInstance, onUpdated, type Ref } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { PrefixInclude } from '../../classes/PrefixInclude'
import { SuffixInclude } from '../../classes/SuffixInclude'
import { TextInclude } from '../../classes/TextInclude'

import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { Skeleton, SkeletonInclude } from '../Skeleton'

import { FieldElement } from './FieldElement'
import { FieldIcons } from './FieldIcons'
import { FieldSize } from './FieldSize'
import { FieldSpace } from './FieldSpace'

import type { FieldControl } from './basicTypes'
import type { FieldProps } from './props'
import type { FieldComponents, FieldEmits, FieldSlots } from './types'

/** Field dependency constructors type / Тип конструкторов зависимостей Field */
export type FieldConstructors = {
  /** Caption constructor / Конструктор подписи */
  caption: typeof CaptionInclude
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Field element constructor / Конструктор элемента поля */
  fieldElement: typeof FieldElement
  /** Field label constructor / Конструктор метки поля */
  fieldLabel: typeof FieldLabelInclude
  /** Field message constructor / Конструктор сообщения поля */
  fieldMessage: typeof FieldMessageInclude
  /** Icon trailing constructor / Конструктор иконки и завершающей иконки */
  icon: typeof IconTrailingInclude
  /** Field icons constructor / Конструктор иконок действий поля */
  icons: typeof FieldIcons
  /** Prefix constructor / Конструктор префикса */
  prefix: typeof PrefixInclude
  /** Progress constructor / Конструктор индикатора прогресса */
  progress: typeof ProgressInclude
  /** Field size constructor / Конструктор размера поля */
  size: typeof FieldSize
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
  /** Field space constructor / Конструктор пространства поля */
  space: typeof FieldSpace
  /** Suffix constructor / Конструктор суффикса */
  suffix: typeof SuffixInclude
  /** Text localization constructor / Конструктор локализации текста */
  text: typeof TextInclude
}

/**
 * Class representing the core logic and dependencies of a Form Field.
 * It manages layout states, labels, validation messages, and accessory elements.
 *
 * Класс, представляющий основную логику и зависимости поля формы.
 * Управляет состояниями разметки, метками, валидационными сообщениями и вспомогательными элементами.
 */
export class Field extends DesignLogicAbstract<
  HTMLLabelElement,
  FieldComponents,
  FieldEmits,
  FieldSlots,
  FieldProps,
  FieldConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<FieldConstructors> = {
    caption: {
      item: CaptionInclude,
      canCreate: () => CaptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [
        this.props,
        () => this.callInstance('progress', item => item)
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        this.emits
      ]
    },
    fieldElement: {
      item: FieldElement,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    fieldLabel: {
      item: FieldLabelInclude,
      canCreate: () => FieldElement.isClassic(this.props)
        && FieldLabelInclude.is(this.props, Boolean(this.props.counterTop)),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.callInstance('skeleton', item => item.binds),
        undefined,
        () => this.i('fieldElement').id,
        () => this.props.counterTop
      ]
    },
    fieldMessage: {
      item: FieldMessageInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.callInstance('skeleton', item => item.binds),
        undefined,
        undefined,
        () => !this.props.counterTop
      ]
    },
    icon: {
      item: IconTrailingInclude,
      canCreate: () => IconTrailingInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    icons: {
      item: FieldIcons,
      canCreate: () => FieldIcons.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        () => this.i('text')
      ]
    },
    prefix: {
      item: PrefixInclude,
      canCreate: () => PrefixInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    progress: {
      item: ProgressInclude,
      canCreate: () => ProgressInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        {
          circular: true,
          position: 'static',
          dense: true
        }
      ]
    },
    size: {
      item: FieldSize,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classBackground']
      ]
    },
    space: {
      item: FieldSpace,
      canCreate: () => CaptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        () => this.i('fieldElement')
      ]
    },
    suffix: {
      item: SuffixInclude,
      canCreate: () => SuffixInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Constructor for initializing all field sub-modules and state management utilities.
   *
   * Конструктор для инициализации всех подмодулей поля и утилит управления состоянием.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<FieldProps>,
    element: Ref<HTMLLabelElement | undefined>,
    naming: DesignName,
    components?: DesignComp<FieldComponents, FieldProps>,
    slots?: FieldSlots,
    emits?: ConstrEmit<FieldEmits>,
    constructors?: Partial<FieldConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('size')

    if (getCurrentInstance()) {
      onUpdated(() => this.i('size').update())
    }
  }

  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   * @returns describedby string / строка describedby
   */
  get describedby(): string {
    const list: string[] = [
      this.callInstance('prefix', item => item.describedby, ''),
      this.callInstance('suffix', item => item.describedby, ''),
      this.callInstance('fieldLabel', item => item.id, ''),
      this.i('fieldMessage').id
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
    const fieldElement = this.i('fieldElement')
    const id = fieldElement.id
    const classText = this.callInstance(
      'skeleton',
      item => item.classesSkeleton.classText,
      Skeleton.getClassesListByDesign(this.naming.getDesign()).classText
    )
    const className = `${this.naming.getSubClass('body', 'input')} ${classText}`

    return {
      id,
      className,
      classHidden: this.naming.getSubClass('body', 'hidden'),
      classForFocus: this.naming.getSubClass('body', 'focus'),
      binds: {
        'id': id,
        'class': className,
        'disabled': this.props.disabled,
        'readonly': this.props.readonly,
        'data-input': id,
        ...AriaStaticInclude.invalid(fieldElement.isValidation()),
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
  get classes(): ConstrClassObject {
    const fieldElement = this.i('fieldElement')

    return {
      [this.naming.getStatusClass('cancel')]: FieldIcons.isCancel(this.props),
      [this.naming.getStatusClass('suffix')]: SuffixInclude.is(this.props, this.slots),
      [this.naming.getStatusClass('warning')]: fieldElement.isWarning(),
      [this.naming.getStatusClass('validation')]: fieldElement.isValidation()
    }
  }
}
