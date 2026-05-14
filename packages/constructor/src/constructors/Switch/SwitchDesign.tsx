import { h, type VNode } from 'vue'
import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { Switch } from './Switch'
import { CheckboxDesign } from '../Checkbox'

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
 * SwitchDesign
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
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
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
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        input: this.getSubClass('input'),
        body: this.getSubClass('body'),
        item: this.getSubClass('item'),
        icon: this.getSubClass('icon'),
        loading: this.getSubClass('loading'),
        info: this.getSubClass('info'),
        label: this.getSubClass('label'),
        track: this.getSubClass('track')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Rendering of the checkbox element.
   *
   * Рендеринг элемента checkbox.
   */
  readonly renderChecked = (): VNode[] => {
    return [
      h('span', {
        class: [
          this.classes?.value.track,
          this.item.skeleton.classesSkeleton.classBackground
        ]
      }, this.renderCheckedItem())
    ]
  }
}
