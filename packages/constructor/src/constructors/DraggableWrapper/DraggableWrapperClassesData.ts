import type { Ref } from 'vue'
import { getElementId } from '@dxtmisha/functional'

import type { DraggableWrapperClassesList } from './basicTypes'

export class DraggableWrapperClassesData {
  readonly list: DraggableWrapperClassesList

  protected readonly id = `draggable-wrapper--${getElementId()}`

  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string
  ) {
    this.list = DraggableWrapperClassesData.getClassesList(classDesign)
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.className
  }

  getElement(): HTMLElement | undefined {
    return this.element.value
  }

  findClick(target: HTMLElement): HTMLElement | undefined {
    return target.closest<HTMLElement>(`.${this.id}.${this.list.click}, .${this.id} .${this.list.click}`) || undefined
  }

  findItems(): NodeListOf<HTMLElement> | undefined {
    return this.element.value?.querySelectorAll<HTMLElement>(`.${this.id}`)
  }

  setBlockSelection(status = false): void {
    if (status) {
      document.body.classList.add(this.list.body)
    } else {
      document.body.classList.remove(this.list.body)
    }
  }

  static getClassesList(classDesign: string): DraggableWrapperClassesList {
    return {
      body: `${classDesign}__blockSelection`,

      return: `${classDesign}__item--return`,

      click: `${classDesign}__click`,
      drop: `${classDesign}__drop`,
      position: `${classDesign}__position`,
      active: `${classDesign}__item--active`,
      go: `${classDesign}__item--go`,
      selection: `${classDesign}__item--selection`,
      selectionMore: `${classDesign}__item--selection-more`,
      show: `${classDesign}__square--show`,
      dragged: `${classDesign}__item--dragged`,
      selected: `${classDesign}__item--selected`
    }
  }
}
