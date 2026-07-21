// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { MotionTransformSize } from '../MotionTransformSize'

describe('MotionTransformSize', () => {
  it('should calculate layouts sizing coordinates', () => {
    const elementMock = {
      rect: { top: 0, left: 0, width: 100, height: 100 } as any,
      elementHead: document.createElement('div'),
      elementBody: document.createElement('div'),
      style: { top: '--sys-top' }
    } as any
    const size = new MotionTransformSize(elementMock)
    expect(size).toBeDefined()
  })
})
