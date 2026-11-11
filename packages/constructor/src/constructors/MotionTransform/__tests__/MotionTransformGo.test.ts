// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MotionTransformGo } from '../MotionTransformGo'

describe('MotionTransformGo', () => {
  it('should toggle transition states', () => {
    const stateMock = {
      open: ref(false),
      toggle: vi.fn(),
      set: vi.fn()
    } as any
    const go = new MotionTransformGo(() => stateMock)
    go.open()
    expect(stateMock.set).toHaveBeenCalledWith(true)
    go.close()
    expect(stateMock.set).toHaveBeenCalledWith(false)
    go.toggle()
    expect(stateMock.toggle).toHaveBeenCalled()
    go.to(true)
    expect(stateMock.set).toHaveBeenCalledWith(true)
  })
})
