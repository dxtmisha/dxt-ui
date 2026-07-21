// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { MotionAxisSelected } from '../MotionAxisSelected'

describe('MotionAxisSelected', () => {
  it('should test active selected slide status tracking', () => {
    const selected = new MotionAxisSelected({ selected: 'slide-1' })
    expect(selected.is('slide-1')).toBe(true)
    selected.set('slide-2')
    expect(selected.item.value).toBe('slide-2')
  })
})
