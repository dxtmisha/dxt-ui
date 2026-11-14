// @vitest-environment jsdom
import { afterEach, describe, it, expect, vi } from 'vitest'
import { MotionTransformSize } from '../MotionTransformSize'

describe('MotionTransformSize', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should calculate layouts sizing coordinates', () => {
    const head = document.createElement('div')
    const body = document.createElement('div')
    Object.defineProperty(head, 'offsetHeight', { value: 40 })
    Object.defineProperty(body, 'offsetHeight', { value: 120 })

    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1000)
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800)

    const elementMock = {
      rect: { top: 20, left: 10, width: 100, height: 100 } as DOMRect,
      elementHead: head,
      elementBody: body,
      isSection: () => false,
      style: { top: '--sys-top' }
    } as any

    const size = new MotionTransformSize(() => elementMock)
    size.update()

    expect(size.contextWidth).toBe('100px')
    expect(size.contextHeight).toBe('100px')
    expect(size.headWidth).toBe('100px')
    expect(size.headHeight).toBe('40px')
    expect(size.bodyHeight).toBe('120px')

    size.reset()
    expect(size.contextWidth).toBeNull()
    expect(size.headHeight).toBeNull()
    expect(size.bodyHeight).toBeNull()
  })

  it('should include head height in bodyHeight when section mode is active', () => {
    const head = document.createElement('div')
    const body = document.createElement('div')
    Object.defineProperty(head, 'offsetHeight', { value: 40 })
    Object.defineProperty(body, 'offsetHeight', { value: 120 })

    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1000)
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800)

    const elementMock = {
      rect: { top: 0, left: 0, width: 200, height: 40 } as DOMRect,
      elementHead: head,
      elementBody: body,
      isSection: () => true
    } as any

    const size = new MotionTransformSize(() => elementMock)
    size.update()

    expect(size.bodyHeight).toBe('160px')
  })

  it('should guard against division by zero when rect width equals viewport width (scale === 1)', () => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(500)
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800)

    const elementMock = {
      rect: { top: 10, left: 20, width: 500, height: 100 } as DOMRect,
      elementHead: undefined,
      elementBody: undefined,
      isSection: () => false
    } as any

    const size = new MotionTransformSize(() => elementMock)
    size.update()

    expect(size.top).toBe('0px')
    expect(size.left).toBe('0px')
    expect(size.scale).toBe('1')
  })

  it('should skip calculations when viewport dimensions are zero', () => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(0)
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(0)

    const elementMock = {
      rect: { top: 10, left: 20, width: 100, height: 100 } as DOMRect,
      isSection: () => false
    } as any

    const size = new MotionTransformSize(() => elementMock)
    size.update()

    expect(size.top).toBeNull()
    expect(size.contextWidth).toBeNull()
  })
})
