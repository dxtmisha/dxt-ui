import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FigmaItem } from '../FigmaItem'

describe('FigmaItem', () => {
  let mockNode: any

  beforeEach(() => {
    mockNode = {
      id: 'node-1',
      name: 'Node Name',
      type: 'FRAME',
      children: [],
      getCSSAsync: vi.fn().mockResolvedValue({ color: 'red' }),
      exportAsync: vi.fn().mockResolvedValue(new Uint8Array())
    }
  })

  it('getType() and getId() should return node properties', () => {
    const item = new FigmaItem(mockNode)
    expect(item.getType()).toBe('FRAME')
    expect(item.getId()).toBe('node-1')
    expect(item.getName()).toBe('Node Name')
  })

  it('isFrame() should return true for FRAME type', () => {
    const item = new FigmaItem(mockNode)
    expect(item.isFrame()).toBe(true)
    expect(item.isText()).toBe(false)
  })

  it('getCss() should call getCSSAsync', async () => {
    const item = new FigmaItem(mockNode)
    const css = await item.getCss()
    expect(css).toEqual({ color: 'red' })
    expect(mockNode.getCSSAsync).toHaveBeenCalled()
  })

  it('getChildrenItems() should wrap children', () => {
    mockNode.children = [{ id: 'child-1', type: 'RECTANGLE' }]
    const item = new FigmaItem(mockNode)
    const children = item.getChildrenItems()
    expect(children).toHaveLength(1)
    expect(children[0]).toBeInstanceOf(FigmaItem)
    expect(children[0].getId()).toBe('child-1')
  })
})
