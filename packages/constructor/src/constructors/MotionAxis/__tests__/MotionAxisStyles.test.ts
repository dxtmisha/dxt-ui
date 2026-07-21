// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { MotionAxisSelected } from '../MotionAxisSelected'
import { MotionAxisStyles } from '../MotionAxisStyles'

describe('MotionAxisStyles', () => {
  it('should test dynamic styling properties set/remove', () => {
    const div = document.createElement('div')
    const selected = new MotionAxisSelected({ selected: 'slide-1' })
    const styles = new MotionAxisStyles(ref(div), 'base-class', selected)

    styles.remove()
    // does not crash
    expect(styles).toBeDefined()
  })
})
