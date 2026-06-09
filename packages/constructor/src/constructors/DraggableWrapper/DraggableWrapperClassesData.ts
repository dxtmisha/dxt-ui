import { getElementId } from '@dxtmisha/functional'
import type { DraggableWrapperClassesList } from './basicTypes'
import type { Ref } from 'vue'

export class DraggableWrapperClassesData {
  protected readonly id = `draggable-wrapper--${getElementId()}`
  readonly list: DraggableWrapperClassesList

  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string
  ) {
    this.list = DraggableWrapperClassesData.getClassesList(classDesign)
  }

  getId(): string {
    return this.id
  }

  getClassName(name: keyof DraggableWrapperClassesList): string {
    return this.list[name]
  }

  findClick(target: HTMLElement): HTMLElement | null {
    return target.closest<HTMLElement>(`.${this.id}.${this.list.click}, .${this.id} .${this.list.click}`)
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
      click: `${classDesign}__click`,
      drop: `${classDesign}__drop`,
      position: `${classDesign}__position`,
      active: `${classDesign}__item--active`,
      go: `${classDesign}__item--go`,
      selection: `${classDesign}__item--selection`,
      selectionMore: `${classDesign}__item--selection-more`,
      return: `${classDesign}__item--return`,
      show: `${classDesign}__square--show`,
      dragged: `${classDesign}__item--dragged`,
      selected: `${classDesign}__item--selected`,
      body: `${classDesign}__body`
    }
  }
}
