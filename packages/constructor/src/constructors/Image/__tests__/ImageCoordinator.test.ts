import { describe, it, expect } from 'vitest'
import { ImageCoordinator } from '../ImageCoordinator'

describe('ImageCoordinator', () => {
  it('should normalize coordinates', () => {
    const c1 = new ImageCoordinator({ coordinator: [10] })
    expect(c1.coordinator).toEqual([10, 10, 10, 10])

    const c2 = new ImageCoordinator({ coordinator: [10, 20] })
    expect(c2.coordinator).toEqual([10, 20, 10, 20])

    const c3 = new ImageCoordinator({ coordinator: [10, 20, 30] })
    expect(c3.coordinator).toEqual([10, 20, 30, 20])

    const c4 = new ImageCoordinator({ coordinator: [10, 20, 30, 40] })
    expect(c4.coordinator).toEqual([10, 20, 30, 40])
  })

  it('should calculate size and backgroundSize', () => {
    const c = new ImageCoordinator({ coordinator: [10, 20, 30, 40] })
    expect(c.size).toEqual({ width: 40, height: 60 })
    expect(c.backgroundSize).toEqual({ width: '250%', height: '166.66666666666669%' })
  })

  it('should validate coordinator presence', () => {
    const cEmpty = new ImageCoordinator({})
    expect(cEmpty.is()).toBe(false)

    const cValid = new ImageCoordinator({ coordinator: [10] })
    expect(cValid.is()).toBe(true)
  })
})
