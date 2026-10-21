import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { ImagePosition } from '../ImagePosition'
import { ImageCoordinator } from '../ImageCoordinator'
import type { ImageProps } from '../props'

describe('ImagePosition', () => {
  it.each([
    [{}, 'center', 'center'],
    [{ x: 'left', y: 'top' }, 'left', 'top'],
    [{ x: 0, y: 0 }, '0', '0'],
    [{ x: '25%', y: '80%' }, '25%', '80%'],
    [{ x: '', y: '' }, 'center', 'center']
  ])('resolves explicit or default positions for %j', (props, expectedX, expectedY) => {
    const coordinatorGetter = vi.fn(() => new ImageCoordinator(props))
    const position = new ImagePosition(props, coordinatorGetter)
    expect([position.x, position.y]).toEqual([expectedX, expectedY])
    expect(coordinatorGetter).not.toHaveBeenCalled()
  })

  it('gives crop coordinates priority and updates after in-place changes', () => {
    const props = reactive<ImageProps>({ coordinator: [10, 20, 30, 40], x: 'left', y: 'top' })
    const coordinator = new ImageCoordinator(props)
    const position = new ImagePosition(props, () => coordinator)
    expect([position.x, position.y]).toEqual(['60%', '40%'])
    props.coordinator = [0, 10]
    expect([position.x, position.y]).toEqual(['50%', '50%'])
    props.coordinator = undefined
    expect([position.x, position.y]).toEqual(['left', 'top'])
    props.x = 'right'
    expect(position.x).toBe('right')
  })
})
