// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { MotionTransformInclude } from '../MotionTransformInclude'

describe('MotionTransformInclude', () => {
  it('should test inclusion getters', () => {
    const include = new MotionTransformInclude(new DesignName('base.class'), {})
    expect(include.is).toBe(true)
  })
})
