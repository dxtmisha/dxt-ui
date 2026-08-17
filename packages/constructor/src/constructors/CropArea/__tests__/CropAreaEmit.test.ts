import { describe, it, expect, vi } from 'vitest'
import { CropAreaEmit } from '../CropAreaEmit'
import type { CropAreaPosition } from '../CropAreaPosition'

describe('CropAreaEmit', () => {
  it('should emit resize event with structured parameters obtained from position', () => {
    const emits = vi.fn()
    const mockPosition = {
      get: vi.fn().mockReturnValue([15, 10, 10, 10])
    } as unknown as CropAreaPosition

    const emitManager = new CropAreaEmit(mockPosition, emits)

    emitManager.resize('top', 15)

    expect(mockPosition.get).toHaveBeenCalled()
    expect(emits).toHaveBeenCalledWith('resize', {
      direction: 'top',
      value: 15,
      coordinator: [15, 10, 10, 10]
    })
  })
})
