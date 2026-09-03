// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { ArrowPosition } from '../ArrowPosition'
import { ArrowDirection } from '../basicTypes'

describe('ArrowPosition', () => {
  let mockElementItem: any
  let mockElementTarget: any
  let mockParent: any

  beforeEach(() => {
    mockElementItem = {
      width: 10,
      getRect: () => ({ top: 100, bottom: 120, left: 100, right: 200, width: 100, height: 20 }),
      getRectBorder: () => ({ width: 100, height: 20 }),
      getRectArrowLine: () => ({ left: 140, width: 20, height: 10, top: 100 })
    }
    mockElementTarget = {
      getRect: () => ({ top: 80, bottom: 100, left: 120, right: 180, width: 60, height: 20 })
    }
    mockParent = {
      borderRadiusNumber: 8
    }
  })

  it('should resolve direction and shift statically if position is not auto', () => {
    const position = new ArrowPosition(
      { position: 'bottom' },
      mockElementItem,
      mockElementTarget,
      mockParent
    )

    position.update()

    expect(position.direction.value).toBe(ArrowDirection.BOTTOM)
    expect(position.isX()).toBe(true)
    expect(position.shift.value).toBeDefined()
  })

  it('should resolve position auto direction correctly', () => {
    const position = new ArrowPosition(
      { position: 'auto' },
      mockElementItem,
      mockElementTarget,
      mockParent
    )

    position.update()

    expect(position.direction.value).toBe(ArrowDirection.TOP)
  })

  it('should calculate clip path correctly', async () => {
    const position = new ArrowPosition(
      { position: 'top' },
      mockElementItem,
      mockElementTarget,
      mockParent
    )

    position.update()

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(position.clipPath.value).toBeDefined()
    expect(position.clipPath.value).toContain('path(')
  })

  it('should resolve left and right directions correctly', () => {
    const positionLeft = new ArrowPosition(
      { position: 'left' },
      mockElementItem,
      mockElementTarget,
      mockParent
    )

    positionLeft.update()

    expect(positionLeft.direction.value).toBe(ArrowDirection.LEFT)
    expect(positionLeft.isX()).toBe(false)
    expect(positionLeft.shift.value).toBeDefined()

    const positionRight = new ArrowPosition(
      { position: 'right' },
      mockElementItem,
      mockElementTarget,
      mockParent
    )

    positionRight.update()

    expect(positionRight.direction.value).toBe(ArrowDirection.RIGHT)
    expect(positionRight.isX()).toBe(false)
    expect(positionRight.shift.value).toBeDefined()
  })

  it('should calculate clip path correctly for left and right directions', async () => {
    const positionLeft = new ArrowPosition(
      { position: 'left' },
      mockElementItem,
      mockElementTarget,
      mockParent
    )

    positionLeft.update()

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(positionLeft.clipPath.value).toBeDefined()
    expect(positionLeft.clipPath.value).toContain('path(')

    const positionRight = new ArrowPosition(
      { position: 'right' },
      mockElementItem,
      mockElementTarget,
      mockParent
    )

    positionRight.update()

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(positionRight.clipPath.value).toBeDefined()
    expect(positionRight.clipPath.value).toContain('path(')
  })
})
