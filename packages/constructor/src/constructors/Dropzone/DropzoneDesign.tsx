import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Dropzone } from './Dropzone'

import {
  type DropzonePropsBasic
} from './props'
import {
  type DropzoneClasses,
  type DropzoneComponents,
  type DropzoneEmits,
  type DropzoneExpose,
  type DropzoneSlots
} from './types'

/**
 * DropzoneDesign
 */
export class DropzoneDesign<
  COMP extends DropzoneComponents,
  EXPOSE extends DropzoneExpose,
  CLASSES extends DropzoneClasses,
  P extends DropzonePropsBasic
> extends DesignConstructorAbstract<
    HTMLLabelElement,
    COMP,
    DropzoneEmits,
    EXPOSE,
    DropzoneSlots,
    CLASSES,
    P
  > {
  protected readonly item: Dropzone

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, DropzoneEmits, P>,
    ItemConstructor: typeof Dropzone = Dropzone
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns expose object / объект экспонирования
   */
  protected initExpose(): EXPOSE {
    return {
      open: this.item.input.open,
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
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        input: this.getSubClass('input')
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
   * @returns rendered virtual node / сгенерированный виртуальный узел
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.renderInput(),
      ...this.item.icon.renderIcon(),
      ...this.item.label.render(),
      ...this.item.description.render()
    ]

    this.initSlot('default', children)

    return h('label', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      ...this.item.binds
    }, children)
  }

  /**
   * Rendering method for the file input element.
   *
   * Метод рендеринга для элемента ввода файла.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  protected renderInput(): VNode[] {
    return [
      h('input', {
        ...this.item.input.binds,
        class: this.classes?.value.input
      })
    ]
  }
}
