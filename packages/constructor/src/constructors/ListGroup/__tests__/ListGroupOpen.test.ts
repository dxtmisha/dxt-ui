// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ListGroupOpen } from '../ListGroupOpen'

describe('ListGroupOpen', () => {
  it('should initialize and check open/closed status', () => {
    const groupOpen = new ListGroupOpen({ open: false })
    expect(groupOpen.is()).toBe(false)

    groupOpen.onOpen({ open: true } as any)
    expect(groupOpen.is()).toBe(true)
  })

  it('should fall back to props open status', () => {
    const groupOpen = new ListGroupOpen({ open: true })
    expect(groupOpen.is()).toBe(true)
  })
})
