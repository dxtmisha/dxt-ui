// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import * as functional from '@dxtmisha/functional'
import { DesignName } from '@dxtmisha/functional'
import { resetGetElementId } from '../../../../../functional-basic/src/functions/getElementId'
import { MotionTransformElement } from '../MotionTransformElement'

vi.mock('@dxtmisha/functional', async (importOriginal) => {
  const original = await importOriginal<typeof import('@dxtmisha/functional')>()
  const { getElementId } = await import('../../../../../functional-basic/src/functions/getElementId')
  return { ...original, getElementId }
})

describe('MotionTransformElement', () => {
  beforeEach(() => {
    resetGetElementId()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
    resetGetElementId()
  })

  it('should test element selectors and states', () => {
    const element = document.createElement('div')
    const context = document.createElement('div')
    const item = new MotionTransformElement(
      { animationShow: true }, ref(element), ref(context), new DesignName('test-motion')
    )

    expect(item.getElement()).toBe(element)
    expect(item.isAnimation()).toBe(true)
    expect(item.isSection()).toBe(false)
  })

  it.each([':r0:', '101', 'row:1', 'panel:content', 'field.name'])(
    'should handle the root HTML ID %s in closest selectors', (id) => {
      const element = document.createElement('div')
      element.id = id
      const child = document.createElement('span')
      const close = document.createElement('button')
      const item = new MotionTransformElement(
        {}, ref(element), ref(document.createElement('div')), new DesignName('test-motion')
      )
      close.className = item.classes.close
      element.append(child, close)

      expect(item.idSelector).toBe(`#${CSS.escape(id)}`)
      expect(item.isOutside(child)).toBe(false)
      expect(item.isOutside(document.createElement('span'))).toBe(true)
      expect(item.isClose(close)).toBe(true)
    }
  )

  it.each([':r0:', '101', 'row:1', 'panel:content', 'field.name'])(
    'should handle the ignored element HTML ID %s', (id) => {
      const ignored = document.createElement('div')
      ignored.id = id
      const child = document.createElement('span')
      ignored.appendChild(child)
      const item = new MotionTransformElement(
        { ignore: ignored }, ref(document.createElement('div')),
        ref(document.createElement('div')), new DesignName('test-motion')
      )

      expect(item.isIgnore(child)).toBe(false)
      expect(item.isIgnore(document.createElement('span'))).toBe(true)
    }
  )

  it('should keep selector access safe when the DOM runtime and CSS API are absent', () => {
    const element = document.createElement('div')
    element.id = 'server-id'
    const item = new MotionTransformElement(
      {}, ref(element), ref(document.createElement('div')), new DesignName('test-motion')
    )
    vi.spyOn(functional, 'isDomRuntime').mockReturnValue(false)
    vi.stubGlobal('CSS', undefined)

    expect(item.idSelector).toBe('#server-id')
  })
})
