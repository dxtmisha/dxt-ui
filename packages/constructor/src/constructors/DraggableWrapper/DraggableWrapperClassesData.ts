import { getElementId } from '@dxtmisha/functional'
import type { DraggableWrapperClassesList } from './basicTypes'

export class DraggableWrapperClassesData {
  protected readonly id = `draggable-wrapper--${getElementId()}`
  readonly list: DraggableWrapperClassesList

  constructor(
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
