import { ref, type Ref } from 'vue'
import { type ConstrBind, getElementId, toBinds } from '@dxtmisha/functional'

import type { EventClickInclude } from '../../classes/EventClickInclude'
import type { CellExpose } from '../Cell'
import type { AccordionProps } from './props'

/**
 * Class representing the header element logic of the Accordion component.
 * It manages cell element bindings, ARIA accessibility identifiers, and interaction events.
 *
 * Класс, представляющий логику головного элемента компонента Accordion.
 * Управляет привязками элемента ячейки, идентификаторами доступности ARIA и событиями взаимодействия.
 */
export class AccordionHead {
  /** Reference to the head cell component / Ссылка на компонент ячейки заголовка */
  readonly element: Ref<CellExpose | undefined> = ref<CellExpose>()

  /** Unique element identifier for label ARIA binding / Уникальный идентификатор элемента для ARIA-привязки метки */
  readonly labelId: string = getElementId()

  /** Unique element identifier for description ARIA binding / Уникальный идентификатор элемента для ARIA-привязки описания */
  readonly descriptionId: string = getElementId()

  /**
   * Constructor for initializing AccordionHead properties and event bindings.
   *
   * Конструктор для инициализации свойств AccordionHead и привязок событий.
   * @param props component properties / свойства компонента
   * @param event event click instance getter / геттер экземпляра события клика
   */
  constructor(
    protected readonly props: Readonly<AccordionProps>,
    protected readonly event: () => EventClickInclude
  ) {}

  /**
   * Returns bindings for the header cell.
   *
   * Возвращает привязки для ячейки заголовка.
   * @returns bindings object / объект привязок
   */
  get binds(): ConstrBind {
    const event = this.event()

    return toBinds(
      this.props.cellAttrs,
      {
        ref: this.element,

        description: this.props.description,
        label: this.props.label,

        icon: this.props.icon,
        iconTrailing: this.props.iconArrowDown,

        dynamic: true,

        descriptionId: this.descriptionId,
        labelId: this.labelId,

        onClick: event.onClick,
        onKeydown: event.onKeydown
      }
    )
  }
}
