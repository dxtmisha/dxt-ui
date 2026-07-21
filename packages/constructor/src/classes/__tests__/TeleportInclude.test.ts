// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { inject, Teleport } from 'vue'
import { TeleportInclude } from '../TeleportInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    inject: vi.fn().mockImplementation((key, defaultValue) => defaultValue)
  }
})

describe('TeleportInclude', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should resolve default to property', () => {
    const teleport = new TeleportInclude()
    expect(teleport.to).toBe('body')
  })

  it('should resolve custom target when provided', () => {
    const teleport = new TeleportInclude('#custom-target')
    expect(teleport.to).toBe('#custom-target')
  })

  it('should resolve injected target when default target is body', () => {
    vi.mocked(inject).mockImplementation((key) => {
      if (key === '__ui-teleport-ssr-body__') {
        return '#ssr-body'
      }
      return 'body'
    })

    const teleport = new TeleportInclude()
    expect(teleport.to).toBe('#ssr-body')
  })

  it('should verify isTeleportElement correctly', () => {
    const targetElement = document.createElement('div')
    targetElement.id = 'my-target'
    document.body.appendChild(targetElement)

    const teleport = new TeleportInclude('#my-target')
    expect(teleport.isTeleportElement(targetElement)).toBe(true)

    const otherElement = document.createElement('div')
    expect(teleport.isTeleportElement(otherElement)).toBe(false)

    document.body.removeChild(targetElement)
  })

  it('should render Teleport wrapper VNode if children are provided', () => {
    const teleport = new TeleportInclude('#my-target')
    const children = ['hello']
    const nodes = teleport.render(children, { disabled: true })

    expect(nodes.length).toBe(1)
    expect(nodes[0].type).toBe(Teleport)
    expect(nodes[0].props).toEqual({
      to: '#my-target',
      disabled: true,
      key: 'teleport'
    })
    expect(nodes[0].children).toEqual(children)
  })

  it('should return empty array if no children are provided to render()', () => {
    const teleport = new TeleportInclude()
    expect(teleport.render()).toEqual([])
  })
})
