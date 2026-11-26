// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { MotionAxisSelected } from '../MotionAxisSelected'
import { MotionAxisStyles } from '../MotionAxisStyles'

describe('MotionAxisStyles', () => {
  const naming = new DesignName('base.class')

  it('should lazily resolve selected getter only when addNext() is called', () => {
    const selected = new MotionAxisSelected({ selected: 'slide-1' })
    const selectedGetter = vi.fn(() => selected)
    const container = document.createElement('div')

    const styles = new MotionAxisStyles(ref(container), naming, selectedGetter)
    expect(selectedGetter).not.toHaveBeenCalled()

    const slideElement = document.createElement('div')
    slideElement.setAttribute('data-key', 'slide-1')
    container.appendChild(slideElement)

    vi.spyOn(slideElement, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      left: 0,
      width: 100,
      height: 240,
      right: 100,
      bottom: 240,
      x: 0,
      y: 0,
      toJSON: () => ({})
    })

    styles.addNext()
    expect(selectedGetter).toHaveBeenCalledTimes(1)
    expect(container.style.getPropertyValue('--base-class-sys-next-height')).toBe('240px')
  })

  it('should compute and apply position/size CSS variables on add() and clear on remove()', () => {
    const container = document.createElement('div')
    const slideElement = document.createElement('div')
    slideElement.setAttribute('data-key', 'slide-"quoted"')
    container.appendChild(slideElement)

    vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
      top: 10,
      left: 20,
      width: 300,
      height: 200,
      right: 320,
      bottom: 210,
      x: 20,
      y: 10,
      toJSON: () => ({})
    })
    vi.spyOn(slideElement, 'getBoundingClientRect').mockReturnValue({
      top: 25,
      left: 55,
      width: 150,
      height: 80,
      right: 205,
      bottom: 105,
      x: 55,
      y: 25,
      toJSON: () => ({})
    })

    const selected = new MotionAxisSelected({ selected: 'slide-"quoted"' })
    const styles = new MotionAxisStyles(ref(container), naming, () => selected)

    styles.add('slide-"quoted"')
    expect(container.style.getPropertyValue('--base-class-sys-top')).toBe('15px')
    expect(container.style.getPropertyValue('--base-class-sys-left')).toBe('35px')
    expect(container.style.getPropertyValue('--base-class-sys-width')).toBe('150px')
    expect(container.style.getPropertyValue('--base-class-sys-height')).toBe('80px')

    styles.addNext()
    expect(container.style.getPropertyValue('--base-class-sys-next-height')).toBe('80px')

    styles.remove()
    expect(container.style.getPropertyValue('--base-class-sys-top')).toBe('')
    expect(container.style.getPropertyValue('--base-class-sys-left')).toBe('')
    expect(container.style.getPropertyValue('--base-class-sys-width')).toBe('')
    expect(container.style.getPropertyValue('--base-class-sys-height')).toBe('')
    expect(container.style.getPropertyValue('--base-class-sys-next-height')).toBe('')
  })

  it('should handle undefined container, missing slide, or undefined selected safely', () => {
    const selected = new MotionAxisSelected({})
    const styles = new MotionAxisStyles(ref(undefined), naming, () => selected)

    expect(() => styles.add('slide-1')).not.toThrow()
    expect(() => styles.add(undefined)).not.toThrow()
    expect(() => styles.addNext()).not.toThrow()
    expect(() => styles.remove()).not.toThrow()
  })
})
