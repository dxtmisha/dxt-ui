// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { MotionAxisInclude } from '../MotionAxisInclude'

describe('MotionAxisInclude', () => {
  it('should test inclusion props', () => {
    const include = new MotionAxisInclude('class-base', { selected: 'slide-1' })
    expect(include.selectedItem).toBe('slide-1')
  })
})
