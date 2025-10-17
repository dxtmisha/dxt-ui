import { ModalDesignAbstract } from './ModalDesignAbstract'
import { Modal } from './Modal'

import type { ModalAbstract } from './ModalAbstract.ts'
import {
  type ModalPropsBasic
} from './props'
import {
  type ModalClasses,
  type ModalComponents,
  type ModalExpose
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
    EXPOSE,
    CLASSES,
    P
  > {
  protected initItem(): ModalAbstract {
    return new Modal(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
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
        title: this.getSubClass('title'),
        header: this.getSubClass('header'),
        body: this.getSubClass('body'),
        footer: this.getSubClass('footer')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
