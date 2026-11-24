import { describe, expect, it, vi } from 'vitest'

import { CropAreaEmit } from '../CropAreaEmit'
import type { CropAreaPosition } from '../CropAreaPosition'

describe('CropAreaEmit', () => {
  it('should lazily resolve position and emit resize event with structured parameters', () => {
    const emits = vi.fn()
    const getPosition = vi.fn().mockReturnValue([15, 10, 10, 10])
    const positionGetter = vi.fn(() => ({
      get: getPosition
    } as unknown as CropAreaPosition))

    const emitManager = new CropAreaEmit(positionGetter, emits)

    // Lazy: position getter is not called during construction
    expect(positionGetter).not.toHaveBeenCalled()

    emitManager.resize('top', 15)

    expect(positionGetter).toHaveBeenCalledTimes(1)
    expect(getPosition).toHaveBeenCalledTimes(1)
    expect(emits).toHaveBeenCalledWith('resize', {
      direction: 'top',
      value: 15,
      coordinator: [15, 10, 10, 10]
    })
  })

  it('should default value to 0 when omitted', () => {
    const emits = vi.fn()
    const mockPosition = {
      get: vi.fn().mockReturnValue([0, 0, 0, 0])
    } as unknown as CropAreaPosition

    const emitManager = new CropAreaEmit(() => mockPosition, emits)
    emitManager.resize('center')

    expect(emits).toHaveBeenCalledWith('resize', {
      direction: 'center',
      value: 0,
      coordinator: [0, 0, 0, 0]
    })
  })

  it('should safely no-op and avoid invoking position getter when emits is undefined', () => {
    const positionGetter = vi.fn()
    const emitManager = new CropAreaEmit(positionGetter)

    expect(() => emitManager.resize('left', 10)).not.toThrow()
    expect(positionGetter).not.toHaveBeenCalled()
  })
})
