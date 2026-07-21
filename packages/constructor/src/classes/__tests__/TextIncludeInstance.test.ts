import { describe, it, expect } from 'vitest'
import { TextIncludeInstance } from '../TextIncludeInstance'

describe('TextIncludeInstance', () => {
  it('should initialize with default list', () => {
    const instance = new TextIncludeInstance()
    expect(instance.getGlobalText('cancel')).toBe('Cancel')
    expect(instance.getGlobalText('ok')).toBe('OK')
  })

  it('should update list with initText', () => {
    const instance = new TextIncludeInstance()
    instance.initText({ cancel: 'Abort', customKey: 'custom' } as any)

    expect(instance.getGlobalText('cancel')).toBe('Abort')
    expect(instance.getGlobalText('customKey' as any)).toBe('custom')
  })

  it('should evaluate function values dynamically', () => {
    const instance = new TextIncludeInstance()
    instance.initText({ ok: () => 'Dynamic OK' } as any)

    expect(instance.getGlobalText('ok')).toBe('Dynamic OK')
  })
})
