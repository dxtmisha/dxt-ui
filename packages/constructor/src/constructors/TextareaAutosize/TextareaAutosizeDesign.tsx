import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TextareaAutosize } from './TextareaAutosize'

import {
  type TextareaAutosizePropsBasic
} from './props'
import {
  type TextareaAutosizeClasses,
  type TextareaAutosizeComponents,
  type TextareaAutosizeEmits,
  type TextareaAutosizeExpose,
  type TextareaAutosizeSlots
} from './types'

/**
 * Rendering class for the TextareaAutosize component.
 * Creates the logic orchestrator instance, configures element classes, and renders
 * the hidden measurement clone alongside the textarea element.
 *
 * Класс рендеринга компонента TextareaAutosize.
 * Создаёт экземпляр оркестратора логики, настраивает классы элементов и рендерит
 * скрытый элемент-клон для расчёта высоты вместе с элементом textarea.
 */
export class TextareaAutosizeDesign<
  COMP extends TextareaAutosizeComponents,
  EXPOSE extends TextareaAutosizeExpose,
  CLASSES extends TextareaAutosizeClasses,
  P extends TextareaAutosizePropsBasic
> extends DesignConstructorAbstract<
    HTMLTextAreaElement,
    COMP,
    TextareaAutosizeEmits,
    EXPOSE,
    TextareaAutosizeSlots,
    CLASSES,
    P
  > {
  /** TextareaAutosize logic orchestrator instance / Экземпляр оркестратора логики TextareaAutosize */
  protected readonly item: TextareaAutosize

  /**
   * Constructor for creating a TextareaAutosize design instance.
   *
   * Конструктор для создания экземпляра дизайна TextareaAutosize.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor logic orchestrator class / класс оркестратора логики
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TextareaAutosizeEmits, P>,
    ItemConstructor: typeof TextareaAutosize = TextareaAutosize
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the hidden clone element used to measure textarea height.
   *
   * Рендерит скрытый элемент-клон для измерения высоты textarea.
   * @returns rendered clone VNode / отрендеренный VNode элемента-клона
   */
  readonly renderClone = (): VNode => {
    const cloneRef = this.item.callInstance('resize', item => item.clone)

    return h(
      'div',
      mergeProps(
        AriaStaticInclude.hidden(),
        {
          ref: cloneRef,
          class: this.classes?.value.clone
        }
      )
    )
  }

  /**
   * Renders the textarea element.
   *
   * Рендерит элемент textarea.
   * @returns rendered textarea VNode / отрендеренный VNode элемента textarea
   */
  readonly renderTextarea = (): VNode => {
    const props = mergeProps(
      this.getAttrs(),
      this.props.inputAttrs ?? {},
      this.item.binds,
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      }
    )

    return h('textarea', props)
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / открытые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      getValue: () => this.item.getValue()
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
        clone: this.naming.getSubClass('clone')
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
   * @returns rendered virtual nodes / отрендеренные виртуальные узлы
   */
  protected initRender(): VNode[] {
    return [
      this.renderClone(),
      this.renderTextarea()
    ]
  }
}
