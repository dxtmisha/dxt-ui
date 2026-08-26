import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { InputImage } from './InputImage'

import type { InputImagePropsBasic } from './props'
import type {
  InputImageClasses,
  InputImageComponents,
  InputImageEmits,
  InputImageExpose,
  InputImageSlots
} from './types'

/**
 * Design constructor class representing the visual assembly of the InputImage component.
 * It manages class lists, style lists, exposure options, and h-rendering.
 *
 * Класс конструктора дизайна, представляющий визуальную сборку компонента InputImage.
 * Управляет списками классов, стилей, экспортом свойств и рендерингом виртуальных узлов.
 */
export class InputImageDesign<
  COMP extends InputImageComponents,
  EXPOSE extends InputImageExpose,
  CLASSES extends InputImageClasses,
  P extends InputImagePropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  InputImageEmits,
  EXPOSE,
  InputImageSlots,
  CLASSES,
  P
> {
  /** Orchestrator item / Элемент оркестратора */
  protected readonly item: InputImage

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputImageEmits, P>,
    ItemConstructor: typeof InputImage = InputImage
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns object of exported properties / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.value.expose(),
      ...this.item.validation.expose(),
      open: this.item.eventItem.open,
      clear: () => this.item.event.onClear()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        crop: this.getSubClass('crop'),
        dropzone: this.getSubClass('dropzone'),
        actions: this.getSubClass('actions')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...AriaStaticInclude.labelledby(this.item.label.id),
        ...AriaStaticInclude.describedby(this.item.message.id)
      },
      [
        ...this.item.label.render(this.slots),
        ...this.renderBody(),
        ...this.renderActions(),
        ...this.item.message.render()
      ]
    )
  }

  /**
   * Rendering method for the action buttons.
   *
   * Метод рендеринга для кнопок действий.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderActions = (): VNode[] => {
    if (
      this.item.files.hasImage()
      && !this.props.disabled
      && !this.props.readonly
    ) {
      return this.item.actions.render(undefined, {
        class: this.classes?.value.actions
      })
    }

    return []
  }

  /**
   * Rendering method for the main body content (crop and dropzone).
   *
   * Метод рендеринга для основного содержимого (кадрирование и область загрузки).
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderBody = (): VNode[] => {
    return [
      h(
        'div',
        {
          class: this.classes?.value.body
        },
        [
          ...this.renderCrop(),
          ...this.renderDropzone()
        ]
      )
    ]
  }

  /**
   * Rendering method for the image cropping component.
   *
   * Метод рендеринга для компонента кадрирования изображения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderCrop = (): VNode[] => {
    if (
      this.item.files.hasImage()
    ) {
      return this.item.imageCrop.render(undefined, {
        class: this.classes?.value.crop
      })
    }

    return []
  }

  /**
   * Rendering method for the dropzone component.
   *
   * Метод рендеринга для компонента области загрузки.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderDropzone = (): VNode[] => {
    return this.item.dropzone.render(undefined, {
      class: this.classes?.value.dropzone
    })
  }
}
