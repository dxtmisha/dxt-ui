import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { MotionFlip } from './MotionFlip'
import type { MotionFlipCallback } from './basicTypes'
import type { MotionFlipPropsBasic } from './props'
import type {
  MotionFlipClasses,
  MotionFlipComponents,
  MotionFlipEmits,
  MotionFlipExpose,
  MotionFlipSlots
} from './types'

/**
 * MotionFlipDesign class for managing FLIP animation logic and component state in Vue templates.
 *
 * Класс MotionFlipDesign для управления логикой FLIP анимации и состоянием компонента в шаблонах Vue.
 */
export class MotionFlipDesign<
  COMP extends MotionFlipComponents,
  EXPOSE extends MotionFlipExpose,
  CLASSES extends MotionFlipClasses,
  P extends MotionFlipPropsBasic,
  SLOTS extends MotionFlipSlots = MotionFlipSlots
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  MotionFlipEmits,
  EXPOSE,
  SLOTS,
  CLASSES,
  P
> {
  /** FLIP animation instance controller / Контроллер экземпляра FLIP анимации */
  protected readonly item: MotionFlip

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MotionFlipEmits, P>,
    ItemConstructor: typeof MotionFlip = MotionFlip
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
   * Exposed method properties.
   *
   * Публичные методы компонента.
   * @returns object containing exposed methods / объект, содержащий публичные методы
   */
  protected initExpose(): EXPOSE {
    return {
      update: (callback: MotionFlipCallback) => this.item.update(callback)
    } as EXPOSE
  }

  /**
   * Class list preparation.
   *
   * Подготовка списка классов.
   * @returns object containing component classes / объект, содержащий классы компонента
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Style list preparation.
   *
   * Подготовка списка стилей.
   * @returns object containing component inline styles / объект, содержащий встроенные стили компонента
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Render function.
   *
   * Функция рендеринга.
   * @returns VNode element / VNode элемент
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main,
        onTransitionend: this.item.onTransition
      },
      this.initSlot('default')
    )
  }
}
