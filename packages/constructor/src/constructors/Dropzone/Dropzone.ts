import { type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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
import type { DropzoneComponents, DropzoneEmits, DropzoneSlots } from './types'
import type { DropzoneProps } from './props'

/**
 * Class for managing file dropzone logic.
 *
 * Класс для управления логикой области сброса файлов.
 */
export class Dropzone {
  /** Description controller / Контроллер описания */
  readonly description: DescriptionInclude

  /** Drag-and-drop events helper instance / Вспомогательный класс для управления событиями */
  readonly events: DropzoneEvents

  /** File manager helper instance / Вспомогательный класс для управления файлами */
  readonly files: DropzoneFiles

  /** Icon controller / Контроллер иконки */
  readonly icon: IconInclude

  /** Input element helper instance / Вспомогательный класс для работы с инпутом */
  readonly input: DropzoneInput

  /** Label controller / Контроллер метки */
  readonly label: LabelInclude

  /** Skeleton controller / Контроллер скелетона */
  readonly skeleton: SkeletonInclude

  /** Text controller / Контроллер текста */
  readonly text: TextInclude

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.DescriptionIncludeConstructor class for working with description / класс для работы с описанием
   * @param constructors.DropzoneEventsConstructor class for working with events / класс для работы с событиями
   * @param constructors.DropzoneFilesConstructor class for working with files / класс для работы с файлами
   * @param constructors.DropzoneInputConstructor class for working with input / класс для работы с инпутом
   * @param constructors.IconIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label / класс для работы с меткой
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton / класс для работы со скелетоном
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   */
  constructor(
    protected readonly props: DropzoneProps,
    protected readonly refs: ToRefs<DropzoneProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<DropzoneComponents, DropzoneProps>,
    protected readonly slots?: DropzoneSlots,
    protected readonly emits?: ConstrEmit<DropzoneEmits>,
    constructors: {
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      DropzoneEventsConstructor?: typeof DropzoneEvents
      DropzoneFilesConstructor?: typeof DropzoneFiles
      DropzoneInputConstructor?: typeof DropzoneInput
      IconIncludeConstructor?: typeof IconInclude
      LabelIncludeConstructor?: typeof LabelInclude
      ModelIncludeConstructor?: typeof ModelInclude<FileList | undefined>
      SkeletonIncludeConstructor?: typeof SkeletonInclude
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      DescriptionIncludeConstructor = DescriptionInclude,
      DropzoneEventsConstructor = DropzoneEvents,
      DropzoneFilesConstructor = DropzoneFiles,
      DropzoneInputConstructor = DropzoneInput,
      IconIncludeConstructor = IconInclude,
      LabelIncludeConstructor = LabelInclude,
      ModelIncludeConstructor = ModelInclude,
      SkeletonIncludeConstructor = SkeletonInclude,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.skeleton = new SkeletonIncludeConstructor(
      this.props,
      this.classDesign,
      ['classBackground']
    )
    this.text = new TextIncludeConstructor(this.props)

    this.icon = new IconIncludeConstructor(
      this.props,
      this.className,
      this.components
    )
    this.label = new LabelIncludeConstructor(
      () => ({
        ...this.props,
        label: this.props.label || this.text.dropzone
      }),
      this.className,
      undefined,
      this.slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.description = new DescriptionIncludeConstructor(
      this.props,
      this.className,
      this.slots
    )

    this.files = new DropzoneFilesConstructor(this.props, this.emits)
    this.events = new DropzoneEventsConstructor(this.props, this.files)
    this.input = new DropzoneInputConstructor(this.props, this.files)

    new ModelIncludeConstructor('files', this.emits, this.files.item)
  }

  /**
   * Computed list of classes for main element.
   *
   * Вычисляемый список классов для главного элемента.
   * @returns computed classes / вычисленные классы
   */
  get classes(): ConstrClass {
    return {
      [`${this.className}--enter`]: this.events.enter.value && !this.props.disabled,
      ...this.skeleton.classes
    }
  }

  /**
   * Computed bindings for the main element.
   *
   * Вычисляемые привязки для главного элемента.
   * @returns bindings object / объект привязок
   */
  get binds(): Record<string, any> {
    return {
      ...this.aria,
      ...this.events.binds
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
      ...AriaStaticInclude.disabled(this.props.disabled)
    }

    if (this.label.is) {
      Object.assign(
        aria,
        AriaStaticInclude.labelledby(this.label.id)
      )
    }

    if (this.description.is) {
      Object.assign(
        aria,
        AriaStaticInclude.describedby(this.description.id)
      )
    }

    return aria
  }

  /**
   * Clears selected files and file input element.
   *
   * Очищает выбранные файлы и элемент ввода файла.
   */
  readonly clear = (): void => {
    this.input.clear()
    this.files.clear()
  }
}
