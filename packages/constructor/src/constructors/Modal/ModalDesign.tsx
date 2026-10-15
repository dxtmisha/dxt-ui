import { ModalDesignAbstract } from './ModalDesignAbstract'
import { Modal } from './Modal'

import {
  type ModalPropsBasic
} from './props'
import {
  type ModalClasses,
  type ModalComponents,
  type ModalEmits,
  type ModalExpose,
  type ModalSlots
} from './types'

/**
 * ModalDesign
 */
export class ModalDesign<
  COMP extends ModalComponents,
  EXPOSE extends ModalExpose,
  CLASSES extends ModalClasses,
  P extends ModalPropsBasic
> extends ModalDesignAbstract<
    COMP,
    ModalEmits,
    EXPOSE,
    ModalSlots,
    CLASSES,
    P,
    Modal
  > {
  protected initItem(Item?: typeof Modal): Modal {
    return new (Item ?? Modal)(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        title: this.naming.getSubClass('title'),
        header: this.naming.getSubClass('header'),
        body: this.naming.getSubClass('body'),
        footer: this.naming.getSubClass('footer')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
