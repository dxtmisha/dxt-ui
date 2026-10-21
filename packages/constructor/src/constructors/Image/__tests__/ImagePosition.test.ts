import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { ImagePosition } from '../ImagePosition'
import { ImageCoordinator } from '../ImageCoordinator'
import type { ImageProps } from '../props'

describe('ImagePosition', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      [{}, 'center', 'center'],
      [{ x: 'left', y: 'top' }, 'left', 'top'],
      [{ x: 'right', y: 'bottom' }, 'right', 'bottom'],
      [{ x: '25%', y: '80%' }, '25%', '80%'],
      [{ x: '16px', y: '32px' }, '16px', '32px']
    ] satisfies Array<[ImageProps, string, string]>)('should resolve explicit or default positions for %j without instantiating coordinator', (props, expectedX, expectedY) => {
      const coordinatorGetter = vi.fn(() => new ImageCoordinator(props))
      const position = new ImagePosition(props, coordinatorGetter)

      expect([position.x, position.y]).toEqual([expectedX, expectedY])
      expect(coordinatorGetter).not.toHaveBeenCalled()
    })

    it('should calculate center position percentages from crop coordinates', () => {
      const props: ImageProps = { coordinator: [10, 20, 30, 40] }
      const coordinator = new ImageCoordinator(props)
      const position = new ImagePosition(props, () => coordinator)

      // x: left (40) + width (100 - 20 - 40 = 40) / 2 = 60%
      // y: top (10) + height (100 - 30 - 10 = 60) / 2 = 40%
      expect([position.x, position.y]).toEqual(['60%', '40%'])
    })
  })

  describe('Boundary values, numeric inputs, and priority rules', () => {
    it.each([
      [{ x: 0, y: 0 }, '0', '0'],
      [{ x: -15, y: -25 }, '-15', '-25'],
      [{ x: 33.5, y: 66.25 }, '33.5', '66.25']
    ] satisfies Array<[ImageProps, string, string]>)('should convert numeric positions %j to strings without falling back to center', (props, expectedX, expectedY) => {
      const position = new ImagePosition(props, () => new ImageCoordinator(props))
      expect([position.x, position.y]).toEqual([expectedX, expectedY])
    })

    it.each([
      [[0, 0, 0, 0], '50%', '50%'],
      [[50], '50%', '50%'],
      [[0, 100, 100, 0], '0%', '0%'],
      [[100, 0, 0, 100], '100%', '100%']
    ] satisfies Array<[ImageProps['coordinator'], string, string]>)('should compute boundary coordinate positions for %j', (coordinatorTuple, expectedX, expectedY) => {
      const props: ImageProps = { coordinator: coordinatorTuple }
      const coordinator = new ImageCoordinator(props)
      const position = new ImagePosition(props, () => coordinator)

      expect([position.x, position.y]).toEqual([expectedX, expectedY])
    })

    it('should give crop coordinates priority over explicit x and y props and update reactively', () => {
      const props = reactive<ImageProps>({ coordinator: [10, 20, 30, 40], x: 'left', y: 'top' })
      const coordinator = new ImageCoordinator(props)
      const position = new ImagePosition(props, () => coordinator)

      expect([position.x, position.y]).toEqual(['60%', '40%'])

      props.coordinator = [0, 10]
      expect([position.x, position.y]).toEqual(['50%', '50%'])

      props.coordinator = undefined
      expect([position.x, position.y]).toEqual(['left', 'top'])

      props.x = 'right'
      props.y = 'bottom'
      expect([position.x, position.y]).toEqual(['right', 'bottom'])
    })
  })

  describe('Empty and nullish inputs', () => {
    it.each([
      [{ x: undefined, y: undefined }, 'center', 'center'],
      [{ x: '', y: '' }, 'center', 'center'],
      [{ x: '10%', y: '' }, '10%', 'center'],
      [{ x: '', y: '90%' }, 'center', '90%']
    ] satisfies Array<[ImageProps, string, string]>)('should fall back to "center" for empty or undefined axis in %j', (props, expectedX, expectedY) => {
      const position = new ImagePosition(props, () => new ImageCoordinator(props))
      expect([position.x, position.y]).toEqual([expectedX, expectedY])
    })
  })
})
