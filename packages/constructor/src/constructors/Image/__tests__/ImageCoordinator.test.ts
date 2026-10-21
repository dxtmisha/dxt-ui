import './testWarnings'
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { ImageCoordinator } from '../ImageCoordinator'
import type { ImageProps } from '../props'

describe('ImageCoordinator', () => {
  it.each([
    [[10], [10, 10, 10, 10]],
    [[10, 20], [10, 20, 10, 20]],
    [[10, 20, 30], [10, 20, 30, 20]],
    [[10, 20, 30, 40], [10, 20, 30, 40]],
    [[133], [100, 100, 100, 100]],
    [[-44, 133], [0, 100, 0, 100]],
    [[NaN, -44, 133], [0, 0, 100, 0]],
    [[133, -44, NaN, 50.5], [100, 0, 0, 50.5]],
    [[0, 100, 25.5, 42], [0, 100, 25.5, 42]],
    [[undefined, null, 'invalid', {}], [0, 0, 0, 0]],
    [[NaN, Infinity, -Infinity, true], [0, 0, 0, 0]],
    [['133', '-44', '42.5', 'invalid'], [100, 0, 42.5, 0]],
    [Array<unknown>(2), [0, 0, 0, 0]]
  ] satisfies Array<[unknown[], number[]]>)('normalizes %j without mutating the input', (values, expected) => {
    const input = Object.freeze([...values])
    // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
    expect(new ImageCoordinator({ coordinator: input } as ImageProps).coordinator).toEqual(expected)
    expect(input).toEqual(values)
  })

  it.each([undefined, null, [], [1, 2, 3, 4, 5], {}, '10'].map(value => ({ value })))('rejects an invalid shape %j', ({ value }) => {
    // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
    const coordinator = new ImageCoordinator({ coordinator: value } as ImageProps)
    expect(ImageCoordinator.is({ coordinator: value } as ImageProps)).toBe(false)
    expect(coordinator.is()).toBe(false)
    expect(coordinator.coordinator).toEqual([0, 0, 0, 0])
    expect(coordinator.size).toEqual({ width: 100, height: 100 })
    expect(coordinator.backgroundSize).toEqual({ width: '100%', height: '100%' })
  })

  it('computes the remaining area and responds to reactive coordinate changes', () => {
    const props = reactive<ImageProps>({ coordinator: [10, 20, 30, 40] })
    const coordinator = new ImageCoordinator(props)
    expect(coordinator.size).toEqual({ width: 40, height: 60 })
    expect(parseFloat(coordinator.backgroundSize.width)).toBeCloseTo(250)
    expect(parseFloat(coordinator.backgroundSize.height)).toBeCloseTo(166.6666667)
    props.coordinator = [0, 0, 0, 0]
    expect(coordinator.backgroundSize).toEqual({ width: '100%', height: '100%' })
    props.coordinator = [50]
    expect(coordinator.size).toEqual({ width: 0, height: 0 })
    expect(coordinator.backgroundSize).toEqual({ width: '100%', height: '100%' })
  })
})
