import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Avatar } from './Avatar'

import type { AvatarPropsBasic } from './props'
import type {
  AvatarClasses,
  AvatarComponents,
  AvatarEmits,
  AvatarExpose,
  AvatarSlots
} from './types'

/**
 * Design constructor class representing the visual assembly of the Avatar component.
 * It manages class lists, style lists, exposure options, and h-rendering.
 *
 * Класс конструктора дизайна, представляющий визуальную сборку компонента аватара.
 * Управляет списками классов, стилей, экспортом свойств и рендерингом виртуальных узлов.
 */
export class AvatarDesign<
  COMP extends AvatarComponents,
  EXPOSE extends AvatarExpose,
  CLASSES extends AvatarClasses,
  P extends AvatarPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    AvatarEmits,
    EXPOSE,
    AvatarSlots,
    CLASSES,
    P
  > {
  /** Avatar logical instance / Логический экземпляр аватара */
  protected readonly item: Avatar

  /**
   * Constructor for AvatarDesign.
   *
   * Конструктор для AvatarDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AvatarEmits, P>,
    ItemConstructor: typeof Avatar = Avatar
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
        label: this.getSubClass('label')
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
    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, [
      ...this.item.label.render(),
      ...this.item.image.render(),
      ...this.item.badge.render()
    ])
  }
}
