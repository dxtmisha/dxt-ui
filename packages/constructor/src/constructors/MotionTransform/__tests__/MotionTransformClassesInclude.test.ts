// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { MotionTransformClassesInclude } from '../MotionTransformClassesInclude'

describe('MotionTransformClassesInclude', () => {
  it('should test design css class resolver', () => {
    const classes = new MotionTransformClassesInclude('base-class')
    expect(classes.get().show).toBe('base-class-motionTransform--show')
  })
})
