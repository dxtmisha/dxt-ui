import { h, mergeProps, type VNode } from 'vue'

import { ActionSheet } from './ActionSheet'
import { ModalDesignAbstract } from '../Modal'

import type { WindowControlItem } from '../Window'
import type { ActionSheetPropsBasic } from './props'
import type {
  ActionSheetClasses,
  ActionSheetComponents,
  ActionSheetEmits,
  ActionSheetExpose,
  ActionSheetSlots
} from './types'

/**
 * ActionSheetDesign
 *
 * Design constructor class for the ActionSheet component.
 * Extends ModalDesignAbstract with touch swipe handle rendering for bottom sheet dismissal.
 *
 * Класс конструктора дизайна для компонента ActionSheet.
 * Расширяет ModalDesignAbstract рендерингом области свайпа для закрытия нижней панели.
 */
export class ActionSheetDesign<
  COMP extends ActionSheetComponents,
  EXPOSE extends ActionSheetExpose,
  CLASSES extends ActionSheetClasses,
  P extends ActionSheetPropsBasic
> extends ModalDesignAbstract<
    COMP,
    ActionSheetEmits,
    EXPOSE,
    ActionSheetSlots,
    CLASSES,
    P,
    ActionSheet,
    typeof ActionSheet
  > {
  /**
   * Creates an instance of the action sheet logic class.
   *
   * Создаёт экземпляр класса логики листа действий.
   * @param ItemConstructor action sheet logic class / класс логики листа действий
   * @returns ActionSheet instance / экземпляр ActionSheet
   */
  protected initItem(ItemConstructor: typeof ActionSheet = ActionSheet): ActionSheet {
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
        body: this.naming.getSubClass('body'),
        footer: this.naming.getSubClass('footer'),
        touch: this.naming.getSubClass('touch'),
        tab: this.naming.getSubClass('tab')
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
        title: this.renderTitleTouch,
        default: this.renderDefault,
        footer: this.renderFooter
      },
      mergeProps(
        this.getAttrs(),
        {
          'class': this.classes?.value.main,
          'style': this.styles?.value,
          'data-touch': 'touch'
        }
      )
    )
  }

  /**
   * Generates data for the header wrapped with a touch swipe container when touchClose is enabled.
   *
   * Генерирует данные для заголовка, обёрнутого в контейнер свайпа при включённом touchClose.
   * @param props data for the transferable property / данные для передаваемого свойства
   * @returns array of VNodes / массив VNode
   */
  readonly renderTitleTouch = (
    props: WindowControlItem
  ): VNode[] => {
    const children: VNode[] = this.renderTitle(props)

    if (this.props.touchClose) {
      return [h(
        'div',
        {
          key: 'touch',
          class: this.classes?.value.touch,
          ...this.item.touchBinds
        },
        [
          h('div', {
            'key': 'tab',
            'class': this.classes?.value.tab,
            'aria-hidden': 'true'
          }),
          ...children
        ]
      )]
    }

    return children
  }
}
