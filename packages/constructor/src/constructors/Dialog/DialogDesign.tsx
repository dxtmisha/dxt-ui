import { h, mergeProps, type VNode } from 'vue'

import { Dialog } from './Dialog'
import { ModalDesignAbstract } from '../Modal'

import type { WindowControlItem } from '../Window'
import type { DialogPropsBasic } from './props'
import type {
  DialogClasses,
  DialogComponents,
  DialogEmits,
  DialogExpose,
  DialogSlots
} from './types'

/**
 * DialogDesign
 *
 * Design constructor class for the Dialog component.
 * Extends ModalDesignAbstract with an information block displaying icon, label, and description.
 *
 * Класс конструктора дизайна для компонента Dialog.
 * Расширяет ModalDesignAbstract информационным блоком с отображением иконки, заголовка и описания.
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
    Dialog,
    typeof Dialog
  > {
  /**
   * Creates an instance of the dialog logic class.
   *
   * Создаёт экземпляр класса логики диалогового окна.
   * @param ItemConstructor dialog logic class / класс логики диалогового окна
   * @returns Dialog instance / экземпляр Dialog
   */
  protected initItem(ItemConstructor: typeof Dialog = Dialog): Dialog {
    return new ItemConstructor(
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
   * @returns class object / объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        title: this.naming.getSubClass('title'),
        header: this.naming.getSubClass('header'),
        information: this.naming.getSubClass('information'),
        icon: this.naming.getSubClass('icon'),
        label: this.naming.getSubClass('label'),
        description: this.naming.getSubClass('description'),
        body: this.naming.getSubClass('body'),
        footer: this.naming.getSubClass('footer')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns array of VNodes / массив VNode
   */
  protected initRender(): VNode[] {
    return this.item.i('window').render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        default: this.renderContent,
        footer: this.renderFooter
      },
      mergeProps(
        this.getAttrs(),
        {
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      )
    )
  }

  /**
   * Render for the body layer.
   *
   * Рендер для слоя тела.
   * @param props data for window management / данные для управления окном
   * @returns array of VNodes / массив VNode
   */
  readonly renderContent = (
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
   * @returns array of VNodes / массив VNode
   */
  readonly renderInformation = (): VNode[] => {
    const children: VNode[] = [
      ...this.item.renderIcon(),
      ...this.item.renderLabel(),
      ...this.item.renderDescription()
    ]

    if (children.length > 0) {
      return [
        h(
          'div',
          this.getKeyClass('information'),
          children
        )
      ]
    }

    return []
  }
}
