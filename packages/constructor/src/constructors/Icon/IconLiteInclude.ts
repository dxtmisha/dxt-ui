import { type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrClass,
  type DesignComponents,
  executeFunction,
  executeFunctionRef,
  getBind
} from '@dxtmisha/functional'

import type { ComponentIncludeExtra } from '../../types/componentInclude'
import type { IconComponentInclude, IconLitePropsInclude } from './basicTypes'
import type { IconPropsBasic } from './props'

/**
 * Class for simplified integration of the basic icon-handling component (Lite version).
 * It manages properties for the icon component, determines if an icon is specified, and handles the rendering of the icon virtual nodes.
 *
 * Класс для упрощённого внедрения базового компонента для работы с иконками (Lite-версия).
 * Управляет свойствами компонента иконки, определяет, указана ли иконка, и обрабатывает рендеринг виртуальных узлов иконки.
 */
export class IconLiteInclude<Props extends IconLitePropsInclude = IconLitePropsInclude> {
  /**
   * Constructor for initializing the IconLiteInclude helper.
   *
   * Конструктор для инициализации помощника IconLiteInclude.
   * @param props input parameter / входной параметр
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter / дополнительный параметр
   */
  constructor(
    protected readonly props: Readonly<Props> | (() => Readonly<Props>),
    protected readonly className: string,
    protected readonly components?: DesignComponents<IconComponentInclude, Props>,
    protected readonly extra?: ComponentIncludeExtra<IconPropsBasic>
  ) {
  }

  /** List of properties for the icon component / Список свойств для компонента иконки */
  get iconBind(): ConstrBind<IconPropsBasic> {
    return getBind(
      this.getProps().icon,
      {
        ...this.getExtra(),
        ...this.getClasses(),
        ...this.getEventType()
      },
      'icon'
    )
  }

  /**
   * Checks whether an icon is specified for rendering the component.
   *
   * Проверяет, указана ли иконка для отображения компонента.
   * @returns check result / результат проверки
   */
  isIcon(): boolean {
    return Boolean(this.getProps().icon)
  }

  /**
   * Renders the icon component.
   *
   * Рендерит компонент иконки.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderIcon = (): VNode[] => {
    if (
      this.components
      && this.isIcon()
    ) {
      return this.components.render(
        'icon',
        this.iconBind
      )
    }

    return []
  }

  /**
   * Returns the normalized properties.
   *
   * Возвращает нормализованные свойства.
   * @returns resolved properties / разрешенные свойства
   */
  protected getProps(): Props {
    return executeFunction(this.props)
  }

  /**
   * Returns additional properties.
   *
   * Возвращает дополнительные свойства.
   * @returns additional properties / дополнительные свойства
   */
  protected getExtra() {
    return executeFunctionRef(this.extra)
  }

  /**
   * Returns a list of classes.
   *
   * Возвращает список классов.
   * @param classesUser list of additional classes / список дополнительных классов
   * @param name class name / название класса
   * @returns object with classes / объект с классами
   */
  protected getClasses(
    classesUser?: ConstrClass,
    name: string = 'icon'
  ): { class: ConstrClass } {
    const classes: ConstrClass = [`${this.className}__${name}`]
    const classesExtra = this.getExtra()?.class

    if (classesExtra) {
      classes.push(classesExtra)
    }

    if (classesUser) {
      classes.push(classesUser)
    }

    return {
      class: classes
    }
  }

  /**
   * Returns the type used to determine when an event is triggered.
   *
   * Возвращает тип для определения при срабатывании события.
   * @param type event type / тип события
   * @returns event type object / объект типа события
   */
  protected getEventType(type: string = 'icon'): Record<string, string> {
    return {
      'data-event-type': type
    }
  }
}
