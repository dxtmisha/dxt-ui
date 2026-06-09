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

  getRect(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  findClick(target: HTMLElement): HTMLElement | undefined {
    return target.closest<HTMLElement>(`.${this.id}.${this.list.click}, .${this.id} .${this.list.click}`) || undefined
  }

  findItems(): NodeListOf<HTMLElement> | undefined {
    return this.element.value?.querySelectorAll<HTMLElement>(`.${this.id}`)
  }

  findSelection(): NodeListOf<HTMLElement> | undefined {
    return this.element.value?.querySelectorAll<HTMLElement>(
      `.${this.id}.${this.list.active}, .${this.id}.${this.list.selected}`
    )
  }

  setBlockSelection(status = false): void {
    if (status) {
      document.body.classList.add(this.list.body)
    } else {
      document.body.classList.remove(this.list.body)
    }
  }

  static getClassesList(classDesign: string): DraggableWrapperClassesList {
    const className = `${classDesign}-draggableWrapper`

    return {
      body: `${className}__blockSelection`,

      active: `${className}__item--active`,
      selection: `${className}__item--selection`,
      selectionMore: `${className}__item--selection-more`,
      go: `${className}__item--go`,

      return: `${className}__item--return`,

      click: `${className}__click`,
      drop: `${className}__drop`,
      position: `${className}__position`,
      show: `${className}__square--show`,
      dragged: `${className}__item--dragged`,
      selected: `${className}__item--selected`
    }
  }
}
