// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { MenuRequest } from '../MenuRequest'

describe('MenuRequest', () => {
  it('should get request items list', () => {
    const list = [{ value: 1 }]
    const req = new MenuRequest({ list } as any)
    expect(req.item.value).toBe(list)
    expect(req.is()).toBe(false)
  })
})
