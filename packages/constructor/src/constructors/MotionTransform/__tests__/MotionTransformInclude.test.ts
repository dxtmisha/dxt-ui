// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
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

  it('should preserve motionTransformAttrs values when parent props are undefined and expose proxy methods', () => {
    const include = new MotionTransformInclude(
      {
        motionTransformAttrs: {
          open: true,
          clickOpen: false,
          autoClose: false
        }
      },
      new DesignName('base.class')
    )

    expect(include.binds.value.open).toBe(true)
    expect(include.binds.value.clickOpen).toBe(false)
    expect(include.binds.value.autoClose).toBe(false)

    const exposed = include.expose
    expect(typeof exposed.isShow).toBe('function')
    expect(typeof exposed.getOpen).toBe('function')
    expect(typeof exposed.setOpen).toBe('function')
    expect(typeof exposed.toOpen).toBe('function')
    expect(typeof exposed.toClose).toBe('function')
    expect(typeof exposed.toggle).toBe('function')
    expect(exposed.getMotionTransformElement()).toBeUndefined()
  })

  it('should accept a reactive factory function for props like ComponentIncludeAbstract', () => {
    const isDisabled = ref(false)
    const isAutoClose = ref(true)

    const include = new MotionTransformInclude(
      () => ({
        open: isDisabled.value,
        clickOpen: !isDisabled.value,
        autoClose: isAutoClose.value,
        motionTransformAttrs: {
          tagBody: isDisabled.value ? 'section' : 'div'
        }
      }),
      new DesignName('base.class')
    )

    expect(include.binds.value.clickOpen).toBe(true)
    expect(include.binds.value.autoClose).toBe(true)
    expect(include.binds.value.tagBody).toBe('div')

    isDisabled.value = true
    isAutoClose.value = false

    expect(include.binds.value.clickOpen).toBe(false)
    expect(include.binds.value.autoClose).toBe(false)
    expect(include.binds.value.tagBody).toBe('section')
  })

  it('should compose external onTransform handlers with internal emit via mergeProps', () => {
    const emits = vi.fn()
    const externalOnTransform = vi.fn()
    const include = new MotionTransformInclude(
      {
        motionTransformAttrs: {
          onTransform: externalOnTransform
        }
      },
      new DesignName('base.class'),
      undefined,
      emits
    )

    const onTransform = include.binds.value.onTransform
    const mockEvent = new Event('transform')
    const mockOptions = { type: 'head' as const, open: true }

    if (Array.isArray(onTransform)) {
      onTransform.forEach(handler => handler(mockEvent, mockOptions))
    } else {
      onTransform?.(mockEvent, mockOptions)
    }

    expect(externalOnTransform).toHaveBeenCalledWith(mockEvent, mockOptions)
    expect(emits).toHaveBeenCalledWith('transform', mockEvent, mockOptions)
    expect(emits).toHaveBeenCalledWith('transformLite', mockOptions)
  })
})
