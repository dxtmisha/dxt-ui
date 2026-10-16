// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { TooltipClassesData } from '../TooltipClassesData'

describe('TooltipClassesData', () => {
  let classesData: TooltipClassesData
  const naming = new DesignName('d1.tooltip')

  beforeEach(() => {
    classesData = new TooltipClassesData(naming)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should generate unique id and idItem values', () => {
    const id = classesData.getId()
    const idItem = classesData.getIdItem()

    expect(id.startsWith('tooltip--')).toBe(true)
    expect(idItem.startsWith('tooltip--')).toBe(true)
    expect(idItem.endsWith('-item')).toBe(true)

    const otherClassesData = new TooltipClassesData(naming)
    expect(otherClassesData.getId()).not.toBe(id)
  })

  it('should return correct control class name', () => {
    expect(classesData.getClassControl()).toBe(`${naming.getName()}__control`)
  })

  it('should return correct control class value with id', () => {
    expect(classesData.getControl()).toBe(`${naming.getName()}__control ${classesData.getId()}`)
  })

  it('should return correct CSS selector for control element', () => {
    expect(classesData.getSelectorControl()).toBe(`.${naming.getName()}__control.${classesData.getId()}`)
  })

  it('should find control element in the document', () => {
    const controlElement = document.createElement('div')
    controlElement.className = `${naming.getName()}__control ${classesData.getId()}`
    document.body.appendChild(controlElement)

    const foundElement = classesData.findControl()
    expect(foundElement).toBe(controlElement)
  })

  it('should return undefined if control element is not in the document', () => {
    const foundElement = classesData.findControl()
    expect(foundElement).toBeUndefined()
  })

  it('should find control by target using closest ancestor search', () => {
    const controlElement = document.createElement('div')
    controlElement.className = `${naming.getName()}__control ${classesData.getId()}`

    const nestedChild = document.createElement('span')
    controlElement.appendChild(nestedChild)
    document.body.appendChild(controlElement)

    const foundElement = classesData.findControlByTarget(nestedChild)
    expect(foundElement).toBe(controlElement)
  })

  it('should return undefined when finding control by target if ancestor does not match selector', () => {
    const regularContainer = document.createElement('div')
    const nestedChild = document.createElement('span')
    regularContainer.appendChild(nestedChild)
    document.body.appendChild(regularContainer)

    const foundElement = classesData.findControlByTarget(nestedChild)
    expect(foundElement).toBeUndefined()
  })
})
