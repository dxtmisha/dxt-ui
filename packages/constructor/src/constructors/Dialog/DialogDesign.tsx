import { h, type VNode } from 'vue'
import {
  toBinds
} from '@dxtmisha/functional'

import { Dialog } from './Dialog'
import { ModalDesignAbstract } from '../Modal/ModalDesignAbstract'

import type { WindowControlItem } from '../Window'
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
    DialogEmits,
    EXPOSE,
    DialogSlots,
    CLASSES,
    P,
    Dialog
  > {
  /**
   * A method for creating an instance of the class.
   *
   * Метод для создания экземпляра класса.
   */
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
        information: this.getSubClass('information'),
        icon: this.getSubClass('icon'),
        label: this.getSubClass('label'),
        description: this.getSubClass('description'),
        body: this.getSubClass('body'),
        footer: this.getSubClass('footer')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
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
        default: this.renderContent,
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

  /**
   * Render for the body layer.
   *
   * Рендер для слоя тела.
   * @param props data for window management/ данные для управления окном
   */
  protected readonly renderContent = (
    props: WindowControlItem
  ): VNode[] => {
    return [
      ...this.renderInformation(),
      ...this.renderDefault(props)
    ]
  }

  /**
   * Render information block.
   *
   * Рендер информационного блока.
   */
  protected readonly renderInformation = (): VNode[] => {
    return [
      h(
        'div',
        { class: this.classes?.value.information },
        [
          ...this.item.icon.renderIcon(),
          ...this.item.label.render(),
          ...this.item.description.render()
        ]
      )
    ]
  }
}
