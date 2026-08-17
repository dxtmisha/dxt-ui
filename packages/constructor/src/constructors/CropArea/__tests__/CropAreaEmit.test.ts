import { describe, it, expect, vi } from 'vitest'
import { CropAreaEmit } from '../CropAreaEmit'

describe('CropAreaEmit', () => {
  it('should emit resize event with structured parameters', () => {
    const emits = vi.fn()
    const emitManager = new CropAreaEmit(emits)

    emitManager.onResize('top', 15, [15, 10, 10, 10])

    expect(emits).toHaveBeenCalledWith('resize', {
      direction: 'top',
      value: 15,
      coordinator: [15, 10, 10, 10]
    })
  })
})
