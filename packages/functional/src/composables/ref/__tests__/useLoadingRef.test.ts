/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useLoadingRef } from '../useLoadingRef'

// Mock Loading from functional-basic
const loadingMocks = {
  is: vi.fn(),
  registrationEvent: vi.fn()
}

vi.mock('@dxtmisha/functional-basic', () => ({
  Loading: {
    is: () => loadingMocks.is(),
    registrationEvent: (cb: any) => loadingMocks.registrationEvent(cb)
  },
  isDomRuntime: vi.fn(() => true)
}))

describe('useLoadingRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    loadingMocks.is.mockReturnValue(false)
  })

  it('should initialize with current loading status', () => {
    loadingMocks.is.mockReturnValue(true)
    const loading = useLoadingRef()

    expect(loading.value).toBe(true)
    expect(loadingMocks.registrationEvent).toHaveBeenCalled()
  })

  it('should update value when event is triggered', () => {
    let capturedCallback: any
    loadingMocks.registrationEvent.mockImplementation((cb) => {
      capturedCallback = cb
    })

    const loading = useLoadingRef()
    expect(loading.value).toBe(false)

    // Simulate event
    capturedCallback({ detail: { loading: true } })
    expect(loading.value).toBe(true)

    capturedCallback({ detail: { loading: false } })
    expect(loading.value).toBe(false)
  })
})
