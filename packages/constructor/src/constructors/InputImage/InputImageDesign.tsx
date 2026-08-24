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
      open: this.item.open,
      clear: this.item.clear
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        input: this.getSubClass('input'),
        body: this.getSubClass('body'),
        crop: this.getSubClass('crop'),
        dropzone: this.getSubClass('dropzone')
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
      'label',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...AriaStaticInclude.labelledby(this.item.label.id),
        ...AriaStaticInclude.describedby(this.item.message.id),
        ...this.item.events.binds
      },
      [
        this.renderInput(),
        this.renderBody(),
        ...this.item.message.render()
      ]
    )
  }

  /**
   * Rendering method for the hidden file input element.
   *
   * Метод рендеринга для скрытого элемента ввода файла.
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected renderInput(): VNode {
    return h('input', {
      ...this.item.input.binds,
      class: this.classes?.value.input
    })
  }

  /**
   * Rendering method for the main body content (crop or dropzone).
   *
   * Метод рендеринга для основного содержимого (кадрирование или область загрузки).
   * @returns rendered virtual node / отрендеренная виртуальная нода
   */
  protected renderBody(): VNode {
    const children: VNode[] = []

    if (this.item.hasImage()) {
      const cropChildren: VNode[] = [
        ...this.item.imageCrop.render()
      ]

      this.initSlot('crop', cropChildren)
      children.push(...cropChildren)
    } else {
      const dropzoneChildren: VNode[] = [
        ...this.item.label.render()
      ]

      this.initSlot('dropzone', dropzoneChildren)
      children.push(...dropzoneChildren)
    }

    return h('div', { class: this.classes?.value.body }, children)
  }
}
