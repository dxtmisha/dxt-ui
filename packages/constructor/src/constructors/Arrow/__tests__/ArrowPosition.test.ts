// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { effectScope } from 'vue'
import { ArrowPosition } from '../ArrowPosition'
import { ArrowDirection } from '../basicTypes'
import type { ArrowElement } from '../ArrowElement'
import type { ArrowElementTarget } from '../ArrowElementTarget'
import type { ArrowParent } from '../ArrowParent'

describe('ArrowPosition', () => {
  let mockElementItem: {
    width: number
    getRect: () => DOMRect
    getRectBorder: () => DOMRect
    getRectArrowLine: () => DOMRect
  }
  let mockElementTarget: {
    getRect: () => DOMRect | undefined
  }
  let mockParent: {
    borderRadiusNumber: number
  }

  beforeEach(() => {
    mockElementItem = {
      width: 10,
      getRect: () => ({ top: 100, bottom: 120, left: 100, right: 200, width: 100, height: 20 } as DOMRect),
      getRectBorder: () => ({ left: 100, top: 100, width: 100, height: 20 } as DOMRect),
      getRectArrowLine: () => ({ left: 140, width: 20, height: 10, top: 100 } as DOMRect)
    }
    mockElementTarget = {
      getRect: () => ({ top: 80, bottom: 100, left: 120, right: 180, width: 60, height: 20 } as DOMRect)
    }
    mockParent = {
      borderRadiusNumber: 8
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should resolve direction and shift statically if position is not auto', () => {
    const position = new ArrowPosition(
      { position: 'bottom' },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    )

    position.update()

    expect(position.direction.value).toBe(ArrowDirection.BOTTOM)
    expect(position.isX()).toBe(true)
    expect(position.shift.value).toBeDefined()
  })

  it('should resolve undefined direction when position prop is undefined', () => {
    const position = new ArrowPosition(
      { position: undefined },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    )

    position.update()

    expect(position.direction.value).toBeUndefined()
    expect(position.isX()).toBe(false)
  })

  it.each([
    {
      name: 'TOP',
      targetRect: { top: 80, bottom: 100, left: 120, right: 180, width: 60, height: 20 } as DOMRect,
      expected: ArrowDirection.TOP
    },
    {
      name: 'BOTTOM',
      targetRect: { top: 120, bottom: 140, left: 120, right: 180, width: 60, height: 20 } as DOMRect,
      expected: ArrowDirection.BOTTOM
    },
    {
      name: 'LEFT',
      targetRect: { top: 102, bottom: 118, left: 60, right: 100, width: 40, height: 16 } as DOMRect,
      expected: ArrowDirection.LEFT
    },
    {
      name: 'RIGHT',
      targetRect: { top: 102, bottom: 118, left: 200, right: 240, width: 40, height: 16 } as DOMRect,
      expected: ArrowDirection.RIGHT
    }
  ])('should resolve auto direction for $name', ({ targetRect, expected }) => {
    mockElementTarget.getRect = () => targetRect
    const position = new ArrowPosition(
      { position: 'auto' },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    )

    position.update()

    expect(position.direction.value).toBe(expected)
  })

  it('should clamp shift to minimum when target is near edge or element is narrow', () => {
    mockElementTarget.getRect = () => ({ top: 80, bottom: 100, left: 95, right: 105, width: 10, height: 20 } as DOMRect)
    const position = new ArrowPosition(
      { position: 'auto' },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    )

    position.update()

    // min = borderRadiusNumber (8) + width / 2 (5) = 13
    expect(position.shift.value).toBe('13px')
  })

  it('should calculate clip path correctly across all 4 directions', async () => {
    for (const dir of ['top', 'bottom', 'left', 'right'] as const) {
      const position = new ArrowPosition(
        { position: dir },
        () => mockElementItem as unknown as ArrowElement,
        () => mockElementTarget as unknown as ArrowElementTarget,
        () => mockParent as unknown as ArrowParent
      )

      position.update()
      await new Promise(resolve => requestAnimationFrame(resolve))

      expect(position.clipPath.value).toBeDefined()
      expect(position.clipPath.value).toContain('path(')
    }
  })

  it('should resolve left and right directions correctly', () => {
    const positionLeft = new ArrowPosition(
      { position: 'left' },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    )

    positionLeft.update()

    expect(positionLeft.direction.value).toBe(ArrowDirection.LEFT)
    expect(positionLeft.isX()).toBe(false)
    expect(positionLeft.shift.value).toBeDefined()

    const positionRight = new ArrowPosition(
      { position: 'right' },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    )

    positionRight.update()

    expect(positionRight.direction.value).toBe(ArrowDirection.RIGHT)
    expect(positionRight.isX()).toBe(false)
    expect(positionRight.shift.value).toBeDefined()
  })

  it('should evaluate static is() properly', () => {
    expect(ArrowPosition.is({ position: 'top' })).toBe(true)
    expect(ArrowPosition.is({ position: 'auto' })).toBe(true)
    expect(ArrowPosition.is({ position: undefined })).toBe(false)
    expect(ArrowPosition.is(undefined)).toBe(false)
  })

  it('should automatically compute clipPath on onMounted for static position', async () => {
    const scope = effectScope()
    const position = scope.run(() => new ArrowPosition(
      { position: 'bottom' },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    ))!

    position.onMounted()
    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(position.direction.value).toBe(ArrowDirection.BOTTOM)
    expect(position.clipPath.value).toBeDefined()
    expect(position.clipPath.value).toContain('path(')

    position.onUnmounted()
    scope.stop()
  })

  it('should cancel pending animation frame on onUnmounted', () => {
    const scope = effectScope()
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame')
    const position = scope.run(() => new ArrowPosition(
      { position: 'top' },
      () => mockElementItem as unknown as ArrowElement,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockParent as unknown as ArrowParent
    ))!

    position.onMounted()
    position.onUnmounted()

    expect(cancelSpy).toHaveBeenCalled()
    scope.stop()
  })
})
