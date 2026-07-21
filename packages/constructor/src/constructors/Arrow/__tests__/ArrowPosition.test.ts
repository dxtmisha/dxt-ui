// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
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
})
