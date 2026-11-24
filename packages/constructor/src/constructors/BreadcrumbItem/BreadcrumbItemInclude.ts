// ai-none

import { mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents,
  type DesignName,
  getObjectNoUndefined,
  isFilled
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeProps } from '../../types/componentInclude'
import type { EventClickValue } from '../../types/eventClickTypes'
import type { SkeletonPropsInclude } from '../Skeleton'
import type {
  BreadcrumbItemComponentInclude,
  BreadcrumbItemEmitsInclude,
  BreadcrumbItemPropsInclude
} from './basicTypes'
import type { BreadcrumbItemProps } from './props'
import type { BreadcrumbItemExpose, BreadcrumbItemSlots } from './types'

/**
 * BreadcrumbItemInclude class provides functionality for conditionally rendering a list
 * of BreadcrumbItem components inside parent navigation trails (such as Breadcrumbs).
 *
 * Класс BreadcrumbItemInclude предоставляет функциональность для условного рендеринга списка
 * компонентов BreadcrumbItem внутри родительских навигационных цепочек (например, Breadcrumbs).
 */
export class BreadcrumbItemInclude<
  Props extends BreadcrumbItemPropsInclude & SkeletonPropsInclude = BreadcrumbItemPropsInclude & SkeletonPropsInclude,
  PropsExtra extends BreadcrumbItemProps = BreadcrumbItemProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    BreadcrumbItemExpose,
    BreadcrumbItemSlots
  > {
  /**
   * Checks whether breadcrumb items are configured.
   *
   * Проверяет, заданы ли элементы хлебных крошек.
   * @param props input properties / входные свойства
   * @returns true if list is non-empty / true, если список не пуст
   */
  static is(props?: BreadcrumbItemPropsInclude): boolean {
    return isFilled(props?.list)
  }

  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'breadcrumbItem'
  /** Name of the property containing shared item attributes / Название свойства с общими атрибутами элементов */
  protected override readonly propsAttrsName = 'itemAttrs'

  /**
   * Constructor for initializing BreadcrumbItemInclude.
   *
   * Конструктор для инициализации BreadcrumbItemInclude.
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param emits callback function triggered on item click events / функция обратного вызова при клике на элемент
   */
  constructor(
    props: ComponentIncludeProps<Props>,
    naming: DesignName,
    components?: DesignComponents<BreadcrumbItemComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<BreadcrumbItemEmitsInclude>
  ) {
    super(props, naming, components)
  }

  /**
   * Checks whether items should be displayed.
   *
   * Проверяет, нужно ли отображать элементы.
   * @returns visibility status / статус видимости
   */
  override get is(): boolean {
    return BreadcrumbItemInclude.is(this.getProps())
  }

  /**
   * Forwards item click events (`click` and `clickLite`) to the parent emitter.
   *
   * Перенаправляет события клика по элементу (`click` и `clickLite`) в родительский эмиттер.
   * @param event native mouse event / нативное событие мыши
   * @param value click payload / данные события клика
   */
  readonly onClick = (event: MouseEvent, value: EventClickValue): void => {
    this.emits?.('click', event, value)
    this.emits?.('clickLite', value)
  }

  /**
   * Renders the list of BreadcrumbItem VNodes, defaulting the final item to readonly.
   *
   * Рендерит список VNode компонентов BreadcrumbItem, по умолчанию делая последний элемент readonly.
   * @param _slotsChildren unused child slots / неиспользуемые слоты
   * @param attrs optional override attributes / необязательные переопределяющие атрибуты
   * @param isShow function returning visibility state / функция, возвращающая состояние видимости
   * @returns rendered virtual node list / список отрендеренных виртуальных узлов
   */
  protected override initRender(
    _slotsChildren?: BreadcrumbItemSlots,
    attrs?: Partial<ConstrBind<PropsExtra>>,
    isShow: () => boolean = () => this.is
  ): VNode[] {
    if (
      this.components
      && isShow()
    ) {
      const props = this.getProps()
      const list = props.list
      const length = list?.length ?? 0

      if (length === 0) {
        return []
      }

      const lastIndex = length - 1
      const listElements: VNode[] = []
      const propsAttrs = getObjectNoUndefined((this.getPropsAttrs() ?? {}) as Record<string, unknown>)
      const extraAttrs = getObjectNoUndefined((attrs ?? {}) as Record<string, unknown>)

      for (let index = 0; index < length; index++) {
        const item = list![index]
        const itemObject = getObjectNoUndefined((item ?? {}) as Record<string, unknown>)
        const keySlot = `breadcrumbItem-${index}-${String(item?.value ?? item?.label ?? index)}`

        this.components.renderAdd(
          listElements,
          this.name,
          mergeProps(
            getObjectNoUndefined({
              index,
              readonly: index === lastIndex,
              isSkeleton: props.isSkeleton,
              class: this.naming.getSubClass('item'),
              onClick: this.onClick
            }),
            propsAttrs,
            extraAttrs,
            itemObject
          ),
          undefined,
          keySlot
        )
      }

      return listElements
    }

    return []
  }
}
