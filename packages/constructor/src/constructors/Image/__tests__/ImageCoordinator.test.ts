import './testWarnings'
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { ImageCoordinator } from '../ImageCoordinator'
import type { ImageProps } from '../props'

describe('ImageCoordinator', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      [[10], [10, 10, 10, 10]],
      [[10, 20], [10, 20, 10, 20]],
      [[10, 20, 30], [10, 20, 30, 20]],
      [[10, 20, 30, 40], [10, 20, 30, 40]],
      [[0, 100, 25.5, 42], [0, 100, 25.5, 42]]
    ] satisfies Array<[number[], number[]]>)('should normalize valid tuple %j to [top, right, bottom, left] without mutating input', (values, expected) => {
      const input = Object.freeze([...values]) as unknown as ImageProps['coordinator']
      const coordinator = new ImageCoordinator({ coordinator: input })

      expect(ImageCoordinator.is({ coordinator: input })).toBe(true)
      expect(coordinator.is()).toBe(true)
      expect(coordinator.coordinator).toEqual(expected)
      expect(input).toEqual(values)
    })
  })

  describe('Boundary values, clamping, and limit thresholds', () => {
    it.each([
      [[133], [100, 100, 100, 100]],
      [[-44, 133], [0, 100, 0, 100]],
      [[NaN, -44, 133], [0, 0, 100, 0]],
      [[133, -44, NaN, 50.5], [100, 0, 0, 50.5]],
      [[undefined, null, 'invalid', {}], [0, 0, 0, 0]],
      [[NaN, Infinity, -Infinity, true], [0, 0, 0, 0]],
      [['133', '-44', '42.5', 'invalid'], [100, 0, 42.5, 0]],
      [Array<unknown>(2), [0, 0, 0, 0]]
    ] satisfies Array<[unknown[], number[]]>)('should clamp out-of-range numbers to [0, 100] and replace invalid entries with 0 for %j', (values, expected) => {
      const input = Object.freeze([...values])
      // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
      expect(new ImageCoordinator({ coordinator: input } as ImageProps).coordinator).toEqual(expected)
      expect(input).toEqual(values)
    })

    it('should fall back to 100% backgroundSize when remaining width or height is 0', () => {
      const coordinator = new ImageCoordinator({ coordinator: [50] })

      expect(coordinator.coordinator).toEqual([50, 50, 50, 50])
      expect(coordinator.size).toEqual({ width: 0, height: 0 })
      expect(coordinator.backgroundSize).toEqual({ width: '100%', height: '100%' })
    })
  })

  describe('Empty, nullish, and invalid tuple shapes', () => {
    it.each([
      undefined,
      null,
      [],
      [1, 2, 3, 4, 5],
      {},
      '10',
      0,
      false
    ].map(value => ({ value })))('should reject invalid coordinator shape %j', ({ value }) => {
      // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
      const props = { coordinator: value } as ImageProps
      const coordinator = new ImageCoordinator(props)

      expect(ImageCoordinator.is(props)).toBe(false)
      expect(ImageCoordinator.is(undefined)).toBe(false)
      expect(coordinator.is()).toBe(false)
      expect(coordinator.coordinator).toEqual([0, 0, 0, 0])
      expect(coordinator.size).toEqual({ width: 100, height: 100 })
      expect(coordinator.backgroundSize).toEqual({ width: '100%', height: '100%' })
    })
  })

  describe('Statefulness and Vue reactivity', () => {
    it('should compute remaining area and update reactively when coordinator prop changes', () => {
      const props = reactive<ImageProps>({ coordinator: [10, 20, 30, 40] })
      const coordinator = new ImageCoordinator(props)

      expect(coordinator.size).toEqual({ width: 40, height: 60 })
      expect(parseFloat(coordinator.backgroundSize.width)).toBeCloseTo(250)
      expect(parseFloat(coordinator.backgroundSize.height)).toBeCloseTo(166.6666667)

      props.coordinator = [0, 0, 0, 0]
      expect(coordinator.backgroundSize).toEqual({ width: '100%', height: '100%' })

      props.coordinator = undefined
      expect(coordinator.is()).toBe(false)
      expect(coordinator.coordinator).toEqual([0, 0, 0, 0])
    })
  })
})
