// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { MotionTransformInclude } from '../MotionTransformInclude'

describe('MotionTransformInclude', () => {
  it('should initialize and resolve binds with default parameters', () => {
    const include = new MotionTransformInclude({}, new DesignName('base.class'))
    expect(include.is).toBe(true)
    expect(include.binds.value).toBeDefined()
    expect(typeof include.binds.value.onTransform).toBe('function')
  })

  it('should support emits parameter before extra and index in constructor', () => {
    const emits = vi.fn()
    const extra = () => ({ 'data-custom': 'val' })
    const include = new MotionTransformInclude(
      { open: true, clickOpen: true },
      new DesignName('base.class'),
      undefined,
      emits,
      extra,
      'test-index'
    )

    expect(include.is).toBe(true)
    expect(include.binds.value.clickOpen).toBe(true)
    expect(include.binds.value['data-custom']).toBe('val')

    const mockEvent = new Event('transform')
    const mockOptions = { type: 'head' as const, open: true }
    include.binds.value.onTransform?.(mockEvent, mockOptions)

    expect(emits).toHaveBeenCalledWith('transform', mockEvent, mockOptions)
    expect(emits).toHaveBeenCalledWith('transformLite', mockOptions)
  })
})
