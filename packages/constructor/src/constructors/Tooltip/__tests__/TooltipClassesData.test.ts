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

  it('should return correct control class name, full control value, and selector', () => {
    expect(classesData.getClassControl()).toBe(`${naming.getName()}__control`)
    expect(classesData.getControl()).toBe(`${naming.getName()}__control ${classesData.getId()}`)
    expect(classesData.getSelectorControl()).toBe(`.${naming.getName()}__control.${classesData.getId()}`)
  })

  it('should find control element in the document or return undefined when missing', () => {
    expect(classesData.findControl()).toBeUndefined()

    const controlElement = document.createElement('div')
    controlElement.className = classesData.getControl()
    document.body.appendChild(controlElement)

    expect(classesData.findControl()).toBe(controlElement)
  })

  it('should find control by target using closest ancestor search and safely ignore non-Element targets', () => {
    const controlElement = document.createElement('div')
    controlElement.className = classesData.getControl()

    const nestedChild = document.createElement('span')
    controlElement.appendChild(nestedChild)
    document.body.appendChild(controlElement)

    expect(classesData.findControlByTarget(nestedChild)).toBe(controlElement)
    expect(classesData.findControlByTarget(null)).toBeUndefined()
    expect(classesData.findControlByTarget(undefined)).toBeUndefined()
    expect(classesData.findControlByTarget(window)).toBeUndefined()
    expect(classesData.findControlByTarget(document.createTextNode('text'))).toBeUndefined()

    const unrelated = document.createElement('div')
    document.body.appendChild(unrelated)
    expect(classesData.findControlByTarget(unrelated)).toBeUndefined()
  })
})
