import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract, toBinds
} from '@dxtmisha/functional'

import { Dialog } from './Dialog'

import {
  type DialogPropsBasic
} from './props'
import {
  type DialogClasses,
  type DialogComponents,
  type DialogEmits,
  type DialogExpose,
  type DialogSlots
} from './types'
import { ModalDesignAbstract } from '../Modal/ModalDesignAbstract.tsx'
import type { ModalAbstract } from '../Modal/ModalAbstract.ts'

/**
 * DialogDesign
 */
export class DialogDesign<
  COMP extends DialogComponents,
  EXPOSE extends DialogExpose,
  CLASSES extends DialogClasses,
  P extends DialogPropsBasic
> extends ModalDesignAbstract<
    COMP,
    EXPOSE,
    CLASSES,
    P,
    Dialog
  > {
  protected initItem(): Dialog {
    return new Dialog(
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
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode[] {
    return this.item.window.render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        default: this.renderDefault,
        footer: this.renderFooter
      },
      toBinds(
        {
          'class': this.classes?.value.main,
          'data-touch': 'touch'
        },
        this.getAttrs()
      )
    )
  }
}
