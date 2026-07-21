// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ImageInclude } from '../ImageInclude'
import { ImageTypeValue } from '../basicTypes'

describe('ImageInclude', () => {
  it('should check if image should be displayed', () => {
    const f1 = new ImageInclude('base', { image: 'path/to/img.png' })
    expect(f1.is).toBe(true)

    const f2 = new ImageInclude('base', {})
    expect(f2.is).toBe(false)
  })

  it('should trigger emits on onLoad', () => {
    const emit = vi.fn()
    const include = new ImageInclude('base', { image: 'path/to/img.png' }, undefined, undefined, emit)
    const payload = { type: ImageTypeValue.image, image: 'path/to/img.png' }
    include.onLoad(payload)
    expect(emit).toHaveBeenCalledWith('load', payload)
  })
})
