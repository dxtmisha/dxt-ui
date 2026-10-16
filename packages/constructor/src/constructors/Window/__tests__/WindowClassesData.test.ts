// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { WindowClassesData } from '../WindowClassesData'
import { WindowStatusItem } from '../basicTypes'

describe('WindowClassesData', () => {
  let classesData: WindowClassesData
  const naming = new DesignName('d1.window')

  beforeEach(() => {
    classesData = new WindowClassesData(naming)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should generate unique id and controlId', () => {
    const id = classesData.getId()
    const controlId = classesData.getControlId()

    expect(id.startsWith('window--')).toBe(true)
    expect(controlId).toBe(`${id}-control`)

    const otherClassesData = new WindowClassesData(naming)
    expect(otherClassesData.getId()).not.toBe(id)
  })

  it('should identify window elements correctly', () => {
    const windowElement = document.createElement('div')
    windowElement.className = naming.getName()

    const otherElement = document.createElement('div')
    otherElement.className = 'other'

    expect(classesData.isWindow(windowElement)).toBe(true)
    expect(classesData.isWindow(otherElement)).toBe(false)
    expect(classesData.isWindow(undefined)).toBe(false)
  })

  it('should identify window teleport elements correctly', () => {
    const teleportElement = document.createElement('div')
    teleportElement.className = `${naming.getName()}__teleport`

    const otherElement = document.createElement('div')
    otherElement.className = 'other'

    expect(classesData.isWindowTeleport(teleportElement)).toBe(true)
    expect(classesData.isWindowTeleport(otherElement)).toBe(false)
    expect(classesData.isWindowTeleport(undefined)).toBe(false)
  })

  it('should identify window or teleport elements correctly', () => {
    const windowElement = document.createElement('div')
    windowElement.className = naming.getName()

    const teleportElement = document.createElement('div')
    teleportElement.className = `${naming.getName()}__teleport`

    const otherElement = document.createElement('div')

    expect(classesData.isWindowOrTeleport(windowElement)).toBe(true)
    expect(classesData.isWindowOrTeleport(teleportElement)).toBe(true)
    expect(classesData.isWindowOrTeleport(otherElement)).toBe(false)
  })

  it('should return correct status class selector', () => {
    const statusClass = classesData.getClassStatus(WindowStatusItem.open)
    expect(statusClass).toBe(`${naming.getName()}[data-status="open"]`)
  })

  it('should return correct selector for control element', () => {
    const id = classesData.getId()
    expect(classesData.getSelectorControl()).toBe(`.${naming.getName()}__control.${id}`)
  })

  it('should find closest window element using findMain', () => {
    const windowElement = document.createElement('div')
    windowElement.className = naming.getName()

    const childElement = document.createElement('span')
    windowElement.appendChild(childElement)

    expect(classesData.findMain(childElement)).toBe(windowElement)
  })

  it('should find control element in the DOM', () => {
    const controlElement = document.createElement('button')
    controlElement.className = `${naming.getName()}__control ${classesData.getId()}`
    document.body.appendChild(controlElement)

    expect(classesData.findControl()).toBe(controlElement)
  })

  it('should find control by referencing an element dataset window', () => {
    const controlElement = document.createElement('button')
    controlElement.className = `${naming.getName()}__control target-window-id`
    document.body.appendChild(controlElement)

    const referencedElement = document.createElement('div')
    referencedElement.dataset.window = 'target-window-id'

    expect(classesData.findControlByElement(referencedElement)).toBe(controlElement)
    expect(classesData.findControlByElement(undefined)).toBeUndefined()
  })

  it('should find body element in the DOM', () => {
    const mainElement = document.createElement('div')
    mainElement.className = `${naming.getName()} ${classesData.getId()}`

    const bodyElement = document.createElement('div')
    bodyElement.className = `${naming.getName()}__body`

    mainElement.appendChild(bodyElement)
    document.body.appendChild(mainElement)

    expect(classesData.findBody()).toBe(bodyElement)
  })

  it('should find body context element in the DOM', () => {
    const mainElement = document.createElement('div')
    mainElement.className = `${naming.getName()} ${classesData.getId()}`

    const contextElement = document.createElement('div')
    contextElement.className = `${naming.getName()}__body__context`

    mainElement.appendChild(contextElement)
    document.body.appendChild(mainElement)

    expect(classesData.findBodyContext()).toBe(contextElement)
  })

  it('should find body other elements based on status and selector query', () => {
    const mainElement = document.createElement('div')
    mainElement.className = `${naming.getName()} other-window-id`
    mainElement.dataset.status = 'open'

    const bodyElement = document.createElement('div')
    bodyElement.className = `${naming.getName()}__body`

    const targetElement = document.createElement('span')
    targetElement.className = 'target-class'

    bodyElement.appendChild(targetElement)
    mainElement.appendChild(bodyElement)
    document.body.appendChild(mainElement)

    const foundElement = classesData.findBodyOther('.target-class', WindowStatusItem.open)
    expect(foundElement).toBe(targetElement)
  })

  it('should return correct static classes list', () => {
    const list = WindowClassesData.getClassesList(naming.getName(), 'test-id')
    expect(list.control).toBe(`${naming.getName()}__control`)
    expect(list.controlId).toBe(`${naming.getName()}__control window__control test-id`)
    expect(list.block).toBe(`${naming.getName()}--block`)
  })

  it('should return correct classes list by design name', () => {
    const list = WindowClassesData.getClassesListByDesign('modal')
    expect(list.control).toBe('modal-window__control')
  })
})
