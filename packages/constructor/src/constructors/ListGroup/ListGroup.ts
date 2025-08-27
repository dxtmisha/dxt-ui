import { toRef, type Ref, type ToRefs, computed } from 'vue'
import { type ConstrBind, type ConstrEmit, DesignComp, ListData, toBinds } from '@dxt-ui/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import { WindowClassesInclude } from '../Window'
import { ListGroupOpen } from './ListGroupOpen'

import type { MotionTransformProps } from '../MotionTransform'
import type { ListProps } from '../List/props'
import type { ListGroupComponents, ListGroupEmits, ListGroupSlots } from './types'
import type { ListGroupPropsBasic } from './props'

/**
 * ListGroup
 */
export class ListGroup {
  readonly data: ListData
  readonly open: ListGroupOpen

  readonly event: EventClickInclude
  readonly windowClasses: WindowClassesInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ListGroupPropsBasic,
    protected readonly refs: ToRefs<ListGroupPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListGroupComponents, ListGroupPropsBasic>,
    protected readonly slots?: ListGroupSlots,
    protected readonly emits?: ConstrEmit<ListGroupEmits>
  ) {
    this.data = new ListData(
      toRef(this.props, 'list') as any,
      this.refs.focus,
      this.refs.highlight,
      this.refs.highlightLengthStart,
      this.refs.selected as any,
      this.refs.keyValue,
      this.refs.keyLabel,
      this.refs.lite
    )
    this.open = new ListGroupOpen(this.data)

    this.event = new EventClickInclude(undefined, undefined, emits)
    this.windowClasses = new WindowClassesInclude(classDesign)
  }

  /**
   * Returns the property for the title.
   *
   * Возвращает свойство для заголовка.
   */
  readonly headBinds = computed<ListGroupPropsBasic['head']>(() => {
    const open = this.open.is.value

    return {
      divider: this.props.divider,
      ...toBinds(
        this.props.itemAttrs,
        this.props.head,
        {
          class: [
            `${this.className}__head`,
            this.windowClasses.get().static
          ]
        }
      ),
      focus: this.props.focus === this.props.head?.index,
      open,
      iconTurn: open,
      iconTrailing: this.props.iconArrowDown,
      iconTrailingTurnOnly: true
    }
  })

  /**
   * Returns the property for the list.
   *
   * Возвращает свойство для списка.
   */
  readonly listBind = computed<ConstrBind<ListProps>>(() => ({
    ...this.props,
    itemAttrs: this.props.groupItemAttrs ?? this.props.itemAttrs,
    head: undefined,
    class: `${this.className}__list`
  }))

  /**
   * Returns the property for the transformation component.
   *
   * Возвращает свойство для компонента трансформации.
   */
  readonly transformBinds = (): ConstrBind<MotionTransformProps> => {
    return {
      autoClose: false,
      section: true,
      adaptive: 'planeAlways',
      onTransformLite: this.open.onOpen
    }
  }
}
