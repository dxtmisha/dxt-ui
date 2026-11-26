import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CheckboxDesign } from '../Checkbox'
import { Skeleton } from '../Skeleton'

import { Switch } from './Switch'

import {
  type SwitchPropsBasic
} from './props'
import {
  type SwitchClasses,
  type SwitchComponents,
  type SwitchEmits,
  type SwitchExpose
} from './types'

/**
 * Design constructor class for the Switch component.
 * Extends CheckboxDesign to render a sliding track wrapper around the toggle indicator.
 *
 * Класс конструктора дизайна для компонента Switch.
 * Расширяет CheckboxDesign для рендеринга обёртки трека вокруг индикатора переключателя.
 */
export class SwitchDesign<
  COMP extends SwitchComponents,
  EXPOSE extends SwitchExpose,
  CLASSES extends SwitchClasses,
  P extends SwitchPropsBasic
> extends CheckboxDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SwitchEmits, P>,
    ItemConstructor: typeof Switch = Switch
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        input: this.naming.getSubClass('input'),
        body: this.naming.getSubClass('body'),
        item: this.naming.getSubClass('item'),
        icon: this.naming.getSubClass('icon'),
        loading: this.naming.getSubClass('loading'),
        info: this.naming.getSubClass('info'),
        label: this.naming.getSubClass('label'),
        track: this.naming.getSubClass('track')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Rendering of the main switch input element with WAI-ARIA `role="switch"`.
   *
   * Рендеринг главного элемента ввода переключателя с WAI-ARIA `role="switch"`.
   * @returns input VNode / VNode элемента ввода
   */
  readonly renderInput = (): VNode => {
    return h('input', mergeProps(
      this.item.i('attributes').listForCheckbox,
      {
        class: this.classes?.value.input,
        type: this.item.type,
        checked: Boolean(this.item.i('value').item.value),
        onClick: this.item.onClick,
        onInput: this.item.onInput,
        onFocus: this.item.i('event').onFocus,
        onBlur: this.item.i('event').onBlur,
        ...AriaStaticInclude.role('switch'),
        ...AriaStaticInclude.readonly(Boolean(this.props.readonly)),
        ...AriaStaticInclude.invalid(this.item.i('validation').isError())
      }
    ))
  }

  /**
   * Rendering of the switch track and sliding element.
   *
   * Рендеринг трека и ползунка переключателя.
   * @returns array of VNodes / массив VNode
   */
  readonly renderChecked = (): VNode[] => {
    return [
      h('span', {
        class: [
          this.classes?.value.track,
          this.item.callInstance(
            'skeleton',
            item => item.classesSkeleton.classBackground,
            () => Skeleton.getClassesListByDesign(this.naming.getDesign()).classBackground
          )
        ],
        ...AriaStaticInclude.hidden()
      }, this.renderCheckedItem())
    ]
  }
}
