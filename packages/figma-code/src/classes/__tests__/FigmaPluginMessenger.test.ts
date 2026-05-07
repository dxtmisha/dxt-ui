import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaPluginMessenger } from '../FigmaPluginMessenger'
import { FigmaPostCode } from '@dxtmisha/figma'

describe('FigmaPluginMessenger', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      ui: {
        postMessage: vi.fn(),
        onmessage: null
      }
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('getInstance() should return a singleton and initialize it', () => {
    const instance1 = FigmaPluginMessenger.getInstance()
    const instance2 = FigmaPluginMessenger.getInstance()

    expect(instance1).toBe(instance2)
    expect(figma.ui.onmessage).toBeTypeOf('function')
  })

  it('post() should send message to UI with correct structure', () => {
    const messenger = FigmaPluginMessenger.getInstance()
    const type = 'test-type'
    const message = { foo: 'bar' }

    messenger.post(type, message)

    expect(figma.ui.postMessage).toHaveBeenCalledWith({
      code: FigmaPostCode.get(),
      type,
      message
    })
  })
})
