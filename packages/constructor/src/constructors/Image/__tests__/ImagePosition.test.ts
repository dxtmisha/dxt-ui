import { describe, it, expect } from 'vitest'
import { ImagePosition } from '../ImagePosition'
import { ImageCoordinator } from '../ImageCoordinator'

describe('ImagePosition', () => {
  it('should calculate position with coordinator', () => {
    const coordinator = new ImageCoordinator({ coordinator: [10, 20, 30, 40] })
    const pos = new ImagePosition({}, coordinator)
    expect(pos.x).toBe('60%')
    expect(pos.y).toBe('40%')
  })

  it('should fall back to props positions', () => {
    const coordinator = new ImageCoordinator({})
    const pos = new ImagePosition({ x: 'left', y: 'top' }, coordinator)
    expect(pos.x).toBe('left')
    expect(pos.y).toBe('top')

    const posDefault = new ImagePosition({}, coordinator)
    expect(posDefault.x).toBe('center')
    expect(posDefault.y).toBe('center')
  })
})
