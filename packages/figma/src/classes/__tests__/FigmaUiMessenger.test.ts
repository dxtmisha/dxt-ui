import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaUiMessenger } from '../FigmaUiMessenger'
import { FigmaPostCode } from '../FigmaPostCode'

describe('FigmaUiMessenger', () => {
  beforeEach(() => {
    // Mock window and parent
    vi.stubGlobal('window', {
      addEventListener: vi.fn()
    })
    vi.stubGlobal('parent', {
      postMessage: vi.fn()
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('getInstance() should return a singleton and initialize it', () => {
    const instance1 = FigmaUiMessenger.getInstance()
    const instance2 = FigmaUiMessenger.getInstance()

    expect(instance1).toBe(instance2)
    expect(window.addEventListener).toHaveBeenCalledWith('message', expect.any(Function))
  })

  it('post() should send message to parent with correct structure', () => {
    const messenger = FigmaUiMessenger.getInstance()
    const type = 'test-type'
    const message = { foo: 'bar' }

    messenger.post(type, message)

    expect(parent.postMessage).toHaveBeenCalledWith({
      pluginMessage: {
        code: FigmaPostCode.get(),
        type,
        message
      }
    }, '*')
  })

  it('prepare() should setup window event listener', () => {
    const messenger = new (FigmaUiMessenger as any)() // Accessing constructor for testing
    messenger.prepare()

    expect(window.addEventListener).toHaveBeenCalledWith('message', expect.any(Function))
  })
})
