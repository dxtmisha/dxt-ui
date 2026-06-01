import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { FieldMessage } from './FieldMessage'

import {
  type FieldMessagePropsBasic
} from './props'
import {
  type FieldMessageClasses,
  type FieldMessageComponents,
  type FieldMessageEmits,
  type FieldMessageExpose,
  type FieldMessageSlots
} from './types'

/**
 * Constructor class for the FieldMessage component design.
 * It manages class lists, style lists, and renders information (helper) or error (validation) and character counter.
 *
 * Класс-конструктор для дизайна компонента FieldMessage.
 * Управляет списками классов, стилей, а также выполняет рендеринг информации (вспомогательного сообщения), ошибки (валидации) и счетчика символов.
 */
export class FieldMessageDesign<
  COMP extends FieldMessageComponents,
  EXPOSE extends FieldMessageExpose,
  CLASSES extends FieldMessageClasses,
  P extends FieldMessagePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    FieldMessageEmits,
    EXPOSE,
    FieldMessageSlots,
    CLASSES,
    P
  > {
  /** Main component instance / Основной экземпляр компонента */
  protected readonly item: FieldMessage

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the element / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FieldMessageEmits, P>,
    ItemConstructor: typeof FieldMessage = FieldMessage
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
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
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
        info: this.getSubClass('info'),
        error: this.getSubClass('error'),
        fieldCounter: this.getSubClass('fieldCounter')
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
   * @returns rendered virtual node or undefined / отрендеренная виртуальная нода или undefined
   */
  protected initRender(): VNode | undefined {
    if (this.item.is()) {
      return h(
        'div',
        {
          ...this.getAttrs(),
          key: 'main',
          class: this.classes?.value.main
        },
        [
          ...this.renderInfo(),
          ...this.renderError(),
          ...this.item.fieldCounter.render()
        ]
      )
    }

    return undefined
  }

  /**
   * Rendering text.
   *
   * Рендеринг текста.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderInfo = (): VNode[] => {
    if (this.item.isHelper()) {
      const children: any[] = []
      const props: Record<string, any> = {
        key: 'message',
        id: this.props.helperId,
        class: [
          this.classes?.value.info,
          this.item.skeleton.classes
        ]
      }

      this.initSlot('helper', children, this.item.slotHelperData)

      if (this.props.helperMessage) {
        if (
          this.props.hasHtmlCode
          && children.length < 1
        ) {
          props.innerHTML = this.props.helperMessage
        } else {
          children.push(this.props.helperMessage)
        }
      }

      return [h('div', props, children)]
    }

    return []
  }

  /**
   * Rendering error.
   *
   * Рендеринг ошибки.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderError = (): VNode[] => {
    if (this.item.isValidation()) {
      const children: any[] = []
      const props: Record<string, any> = {
        key: 'error',
        id: this.props.validationId,
        class: this.classes?.value.error,
        ...AriaStaticInclude.role('alert')
      }

      this.initSlot('validation', children, this.item.slotValidationData)

      if (this.props.validationMessage) {
        if (
          this.props.hasHtmlCode
          && children.length < 1
        ) {
          props.innerHTML = this.props.validationMessage
        } else {
          children.push(this.props.validationMessage)
        }
      }

      return [h('div', props, children)]
    }

    return []
  }
}
