import { h, type VNode } from 'vue'
import { toBinds } from '@dxtmisha/functional'

import { ModalDesignAbstract } from '../Modal/ModalDesignAbstract'
import { ActionSheet } from './ActionSheet'

import type { ModalAbstract } from '../Modal/ModalAbstract'
import { type WindowControlItem } from '../Window'
import {
  type ActionSheetPropsBasic
} from './props'
import {
  type ActionSheetClasses,
  type ActionSheetComponents,
  type ActionSheetExpose
} from './types'

/**
 * ActionSheetDesign
 */
export class ActionSheetDesign<
  COMP extends ActionSheetComponents,
  EXPOSE extends ActionSheetExpose,
  CLASSES extends ActionSheetClasses,
  P extends ActionSheetPropsBasic
> extends ModalDesignAbstract<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Creates an instance of the item class.
   *
   * Создает экземпляр класса элемента.
   */
  protected initItem(): ModalAbstract {
    return new ActionSheet(
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
        footer: this.getSubClass('footer'),
        touch: this.getSubClass('touch'),
        tab: this.getSubClass('tab')
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
        title: this.renderTitleTouch,
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

  /**
   * Generates data for the header.
   *
   * Генерирует данные для заголовка.
   * @param props data for the transferable property/ данные для передаваемого свойства
   */
  protected readonly renderTitleTouch = (
    props: WindowControlItem
  ): VNode[] => {
    const children: any[] = this.renderTitle(props)

    if (this.props.touchClose) {
      console.log(
        {
          class: this.classes?.value.touch,
          ...this.item.touchEvent.onTouch
        }
      )
      return [h(
        'div',
        {
          class: this.classes?.value.touch,
          ...this.item.touchEvent.onTouch
        },
        [
          h('div', { class: this.classes?.value.tab }),
          ...children
        ]
      )]
    }

    return children
  }
}
