// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { MotionAxisInclude } from '../MotionAxisInclude'

describe('MotionAxisInclude', () => {
  it('should test inclusion props', () => {
    const include = new MotionAxisInclude({ selected: 'slide-1' }, new DesignName('class.base'))
    expect(include.selectedItem).toBe('slide-1')
  })
})
