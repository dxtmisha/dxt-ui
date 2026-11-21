import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isFilled
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { FieldMessage } from './FieldMessage'

import type { FieldMessageSlot } from './basicTypes'
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
 * It manages class lists, style lists, and renders information (helper), warning, or error (validation) messages and character counter.
 *
 * Класс-конструктор для дизайна компонента FieldMessage.
 * Управляет списками классов, стилей, а также выполняет рендеринг информации (вспомогательного сообщения), предупреждения, ошибки (валидации) и счетчика символов.
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
   *
   * Конструктор
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Rendering text.
   *
   * Рендеринг текста.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderInfo = (): VNode[] => {
    if (this.item.isHelper()) {
      return [
        this.renderMessageItem(
          'message',
          this.props.helperId,
          [
            this.classes?.value.info,
            this.item.callInstance('skeleton', item => item.classes, {})
          ],
          'helper',
          this.item.slotHelperData,
          this.props.helperMessage
        )
      ]
    }

    return []
  }

  /**
   * Rendering warning.
   *
   * Рендеринг предупреждения.
   * @returns array of virtual nodes / массив виртуальных нод
   */
  readonly renderWarning = (): VNode[] => {
    if (this.item.isWarning()) {
      return [
        this.renderMessageItem(
          'warning',
          this.props.warningId,
          this.classes?.value.warning,
          'warning',
          this.item.slotWarningData,
          this.props.warningMessage
        )
      ]
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
      return [
        this.renderMessageItem(
          'error',
          this.props.validationId,
          this.classes?.value.error,
          'validation',
          this.item.slotValidationData,
          this.props.validationMessage,
          AriaStaticInclude.role('alert')
        )
      ]
    }

    return []
  }

  /**
   * Renders a single message container (helper, warning, or validation).
   *
   * Рендерит один контейнер сообщения (вспомогательного, предупреждения или валидации).
   * @param key virtual node key / ключ виртуального узла
   * @param id element identifier / идентификатор элемента
   * @param className class name or list / имя класса или список классов
   * @param slotName slot name / имя слота
   * @param slotData slot data / данные слота
   * @param message message text / текст сообщения
   * @param attrs additional attributes / дополнительные атрибуты
   * @returns virtual node / виртуальный узел
   */
  renderMessageItem(
    key: string,
    id: string | undefined,
    className: unknown,
    slotName: keyof FieldMessageSlots,
    slotData: FieldMessageSlot,
    message: string | undefined,
    attrs: Record<string, unknown> = {}
  ): VNode {
    const children: VNode[] = []
    const props: Record<string, unknown> = {
      key,
      id,
      class: className,
      ...attrs
    }

    this.initSlot(slotName, children, slotData)

    if (isFilled(message)) {
      if (
        this.props.hasHtmlCode
        && children.length < 1
      ) {
        props.innerHTML = message
      } else {
        return h('div', props, [...children, message])
      }
    }

    return h('div', props, children)
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
        info: this.naming.getSubClass('info'),
        error: this.naming.getSubClass('error'),
        fieldCounter: this.naming.getSubClass('fieldCounter'),
        warning: this.naming.getSubClass('warning')
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
        mergeProps(
          this.getAttrs(),
          {
            ref: this.element,
            key: 'main',
            class: this.classes?.value.main,
            style: this.styles?.value
          }
        ),
        [
          ...this.renderInfo(),
          ...this.renderWarning(),
          ...this.renderError(),
          ...this.item.callInstance('fieldCounter', item => item.render(), [])
        ]
      )
    }

    return undefined
  }
}
