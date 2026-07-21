// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { MotionTransformInclude } from '../MotionTransformInclude'

describe('MotionTransformInclude', () => {
  it('should test inclusion getters', () => {
    const include = new MotionTransformInclude('base-class', {})
    expect(include.is).toBe(true)
  })
})
