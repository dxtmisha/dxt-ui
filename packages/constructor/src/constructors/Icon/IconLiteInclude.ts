import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrClass,
  DesignComponents,
  getBind,
  getRef,
  isFilled,
  type RefOrNormal
} from '@dxtmisha/functional'

import type { IconComponentInclude, IconLitePropsInclude } from './basicTypes'
import type { IconPropsBasic } from './props'

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
export class IconLiteInclude<Props extends IconLitePropsInclude = IconLitePropsInclude> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<IconComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>>
  ) {
  }

  /**
   * Checks whether an icon is specified for rendering the component/
   * Проверяет, указана ли иконка для отображения компонента
   */
  readonly isIcon = computed<boolean>(() => Boolean(this.props.icon))

  /**
   * List of properties for the icon component/ Список свойств для компонента иконки
   */
  readonly iconBind = computed(() => getBind(
    this.props.icon,
    {
      ...this.getExtra(),
      ...this.getClasses(),
      ...this.getEventType()
    },
    'icon'
  ))

  /**
   * Render of the Icon component
   *
   * Рендер компонента иконка
   */
  readonly renderIcon = (): VNode[] => {
    if (
      this.components
      && isFilled(this.props.icon)
    ) {
      return this.components.render(
        'icon',
        this.iconBind.value
      )
    }

    return []
  }

  /**
   * Returns an additional property
   *
   * Возвращает дополнительное свойство
   */
  protected getExtra() {
    return getRef(this.extra)
  }

  /**
   * Returns a list of classes
   *
   * Возвращает список классов
   * @param classesUser list of additional classes/ список дополнительных классов
   * @param name class name/ название класса
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
   * Returns the type used to determine when an event is triggered
   *
   * Возвращает тип для определения при срабатывании события
   * @param type event type/ тип события
   */
  protected getEventType(type: string = 'icon'): Record<string, string> {
    return {
      'data-event-type': type
    }
  }
}
