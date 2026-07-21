// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { WindowElement } from '../WindowElement'
import type { WindowClassesData } from '../WindowClassesData'

describe('WindowElement', () => {
  it('should delegate queries to classes data helper and element ref', () => {
    const mainElement = document.createElement('div')
    const controlElement = document.createElement('button')
    const bodyElement = document.createElement('div')
    const contextElement = document.createElement('div')

    vi.spyOn(controlElement, 'getBoundingClientRect').mockReturnValue({
      width: 100
    } as DOMRect)
    vi.spyOn(bodyElement, 'getBoundingClientRect').mockReturnValue({
      height: 200
    } as DOMRect)

    const mockClasses = {
      findControl: vi.fn().mockReturnValue(controlElement),
      findBody: vi.fn().mockReturnValue(bodyElement),
      findBodyContext: vi.fn().mockReturnValue(contextElement)
    } as unknown as WindowClassesData

    const elementRef = ref<HTMLDivElement | undefined>(undefined)
    const windowElement = new WindowElement(mockClasses, elementRef)

    // Initially undefined element ref
    expect(windowElement.isMain()).toBe(false)
    expect(windowElement.getMain()).toBeUndefined()

    // Assign main element
    elementRef.value = mainElement

    expect(windowElement.isMain()).toBe(true)
    expect(windowElement.getMain()).toBe(mainElement)
    expect(windowElement.getControl()).toBe(controlElement)
    expect(windowElement.getControlRect()?.width).toBe(100)
    expect(windowElement.getBody()).toBe(bodyElement)
    expect(windowElement.getBodyRect()?.height).toBe(200)
    expect(windowElement.getBodyContext()).toBe(contextElement)
  })

  it('should return undefined rects if elements are missing', () => {
    const mockClasses = {
      findControl: vi.fn().mockReturnValue(undefined),
      findBody: vi.fn().mockReturnValue(undefined)
    } as unknown as WindowClassesData

    const windowElement = new WindowElement(mockClasses, ref(undefined))

    expect(windowElement.getControlRect()).toBeUndefined()
    expect(windowElement.getBodyRect()).toBeUndefined()
  })
})
