import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { InputFileDropzone } from './InputFileDropzone'

import type { InputFileDropzonePropsBasic } from './props'
import type {
  InputFileDropzoneClasses,
  InputFileDropzoneComponents,
  InputFileDropzoneEmits,
  InputFileDropzoneExpose,
  InputFileDropzoneSlots
} from './types'

/**
 * Design constructor class representing the visual assembly of the InputFileDropzone component.
 * It manages class lists, style lists, exposure options, and h-rendering.
 *
 * Класс конструктора дизайна, представляющий визуальную сборку компонента InputFileDropzone.
 * Управляет списками классов, стилей, экспортом свойств и рендерингом виртуальных узлов.
 */
export class InputFileDropzoneDesign<
  COMP extends InputFileDropzoneComponents,
  EXPOSE extends InputFileDropzoneExpose,
  CLASSES extends InputFileDropzoneClasses,
  P extends InputFileDropzonePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputFileDropzoneEmits,
    EXPOSE,
    InputFileDropzoneSlots,
    CLASSES,
    P
  > {
  /** Orchestrator item / Элемент оркестратора */
  protected readonly item: InputFileDropzone

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
    options?: ConstrOptions<COMP, InputFileDropzoneEmits, P>,
    ItemConstructor: typeof InputFileDropzone = InputFileDropzone
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
      open: this.item.eventItem.open
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
        body: this.getSubClass('body'),
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
        ...this.item.message.render()
      ]
    )
  }

  /**
   * Rendering method for the main body content.
   *
   * Метод рендеринга для основного содержимого.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderBody = (): VNode[] => {
    return [
      h(
        'div',
        this.getKeyClass('body'),
        this.renderDropzone()
      )
    ]
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
