import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract,
  isFilled,
  isNumber,
  type NumberOrString
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { IconInclude } from '../Icon'
import { SkeletonInclude } from '../Skeleton'

import { DropzoneEvents } from './DropzoneEvents'
import { DropzoneFiles } from './DropzoneFiles'
import { DropzoneInput } from './DropzoneInput'

import type { AriaList } from '../../types/ariaTypes'
import type { DropzoneProps } from './props'
import type { DropzoneComponents, DropzoneEmits, DropzoneSlots } from './types'

/** Dropzone dependency constructors type / Тип конструкторов зависимостей Dropzone */
export type DropzoneConstructors = {
  /** Description controller constructor / Конструктор контроллера описания */
  description: typeof DescriptionInclude
  /** Drag-and-drop events helper constructor / Конструктор помощника событий перетаскивания */
  events: typeof DropzoneEvents
  /** File manager helper constructor / Конструктор помощника управления файлами */
  files: typeof DropzoneFiles
  /** Icon controller constructor / Конструктор контроллера иконки */
  icon: typeof IconInclude
  /** Input element helper constructor / Конструктор помощника элемента ввода */
  input: typeof DropzoneInput
  /** Label controller constructor / Конструктор контроллера метки */
  label: typeof LabelInclude
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<FileList | undefined>
  /** Skeleton controller constructor / Конструктор контроллера скелетона */
  skeleton: typeof SkeletonInclude
  /** Text controller constructor / Конструктор контроллера текста */
  text: typeof TextInclude
}

/**
 * Orchestrator class for managing file dropzone logic, drag-and-drop state, file selection,
 * model synchronization, accessibility attributes, and optional visual inclusions.
 *
 * Класс-оркестратор для управления логикой области сброса файлов, состоянием перетаскивания,
 * выбором файлов, синхронизацией модели, атрибутами доступности и опциональными визуальными включениями.
 */
export class Dropzone extends DesignLogicAbstract<
  HTMLLabelElement,
  DropzoneComponents,
  DropzoneEmits,
  DropzoneSlots,
  DropzoneProps,
  DropzoneConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<DropzoneConstructors> = {
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    events: {
      item: DropzoneEvents,
      parameters: () => [
        this.props
      ]
    },
    files: {
      item: DropzoneFiles,
      parameters: () => [
        () => this.i('model'),
        this.emits
      ]
    },
    icon: {
      item: IconInclude,
      canCreate: () => IconInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    input: {
      item: DropzoneInput,
      parameters: () => [
        this.props,
        () => this.i('events'),
        () => this.i('files'),
        this.emits
      ]
    },
    label: {
      item: LabelInclude,
      parameters: () => [
        () => ({
          ...this.props,
          label: this.getLabel()
        }),
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    model: {
      item: ModelInclude<FileList | undefined>,
      parameters: () => [
        'files',
        this.emits
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
    text: {
      item: TextInclude,
      parameters: () => [
        this.props
      ]
    }
  }

  /**
   * Computed accessibility ARIA attributes.
   *
   * Вычисляемые атрибуты доступности ARIA.
   * @returns object with ARIA attributes / объект с ARIA-атрибутами
   */
  get aria(): AriaList {
    const aria: AriaList = {
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled)),
      ...AriaStaticInclude.readonly(Boolean(this.props.readonly))
    }

    const label = this.i('label')

    if (label.is) {
      Object.assign(
        aria,
        AriaStaticInclude.labelledby(label.id)
      )
    }

    const descriptionId = this.callInstance(
      'description',
      item => item.is ? item.id : undefined
    )

    if (descriptionId) {
      Object.assign(
        aria,
        AriaStaticInclude.describedby(descriptionId)
      )
    }

    return aria
  }

  /**
   * Computed bindings for the main element.
   *
   * Вычисляемые привязки для главного элемента.
   * @returns bindings object / объект привязок
   */
  get binds(): ConstrBind {
    return this.aria
  }

  /**
   * Computed list of classes for main element.
   *
   * Вычисляемый список классов для главного элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClassObject {
    const skeletonClasses = this.callInstance('skeleton', item => item.classes)
    const classes: ConstrClassObject = {
      [this.naming.getStatusClass('enter')]: !this.props.disabled
        && !this.props.readonly
        && this.i('events').enter.value
    }

    if (skeletonClasses) {
      Object.assign(classes, skeletonClasses)
    }

    return classes
  }

  /**
   * Clears selected files and resets the file input element.
   *
   * Очищает выбранные файлы и сбрасывает элемент ввода файла.
   */
  readonly clear = (): void => {
    this.i('input').clear()
    this.i('files').clear()
  }

  /**
   * Opens the native file selection dialog.
   *
   * Открывает нативный диалог выбора файлов.
   */
  readonly open = (): void => {
    this.i('input').open()
  }

  /**
   * Resolves the effective label text with fallback to localized dropzone text when no custom label or default slot is provided.
   *
   * Разрешает итоговый текст метки с резервным локализованным текстом dropzone, если не переданы пользовательская метка или слот по умолчанию.
   * @returns resolved label value / разрешенное значение метки
   */
  protected getLabel(): NumberOrString | undefined {
    if (
      isFilled(this.props.label, true)
      || isNumber(this.props.label)
    ) {
      return this.props.label
    }

    if (this.slots?.default) {
      return undefined
    }

    return this.i('text').dropzone
  }
}
