// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ClientOnlyInclude } from '../ClientOnlyInclude'

let mountedCallback: (() => void) | undefined

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => {
      mountedCallback = fn
    }
  }
})

describe('ClientOnlyInclude', () => {
  beforeEach(() => {
    mountedCallback = undefined
  })

  it('should initialize isMounted to false and set to true when onMounted fires', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: true })
    expect(clientOnly.isMounted.value).toBe(false)
    expect(clientOnly.isRender()).toBe(false)

    if (mountedCallback) {
      mountedCallback()
    }

    expect(clientOnly.isMounted.value).toBe(true)
    expect(clientOnly.isRender()).toBe(true)
  })

  it('should render on server/client if clientOnly prop is false', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    expect(clientOnly.isRender()).toBe(true)

    if (mountedCallback) {
      mountedCallback()
    }
    expect(clientOnly.isRender()).toBe(true)
  })

  it('should default clientOnly behavior if no props are provided', () => {
    const clientOnly = new ClientOnlyInclude(undefined)
    expect(clientOnly.isRender()).toBe(false)

    if (mountedCallback) {
      mountedCallback()
    }
    expect(clientOnly.isRender()).toBe(true)
  })
})
