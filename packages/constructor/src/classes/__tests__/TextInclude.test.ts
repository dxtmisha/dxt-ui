import { describe, it, expect, vi } from 'vitest'
import { TextInclude } from '../TextInclude'
import { TextIncludeInstance } from '../TextIncludeInstance'

const testInstance = new TextIncludeInstance()

vi.mock('@dxtmisha/functional-basic', async () => {
  const actual = await vi.importActual('@dxtmisha/functional-basic') as any
  return {
    ...actual,
    ServerStorage: {
      ...actual.ServerStorage,
      get: (key: string, factory: () => any) => {
        if (key === '__ui:text-include-instance__') {
          return testInstance
        }
        return factory()
      }
    }
  }
})

describe('TextInclude', () => {
  it('should resolve local property values first', () => {
    const textInclude = new TextInclude({ textCancel: 'Local Cancel' })
    expect(textInclude.cancel).toBe('Local Cancel')
  })

  it('should resolve function properties dynamically', () => {
    const textInclude = new TextInclude({ textOk: () => 'Dynamic Local OK' })
    expect(textInclude.ok).toBe('Dynamic Local OK')
  })

  it('should resolve global fallback values if local property is undefined', () => {
    const textInclude = new TextInclude({})
    expect(textInclude.cancel).toBe('Cancel')
  })

  it('should cache resolved getter functions', () => {
    const textInclude = new TextInclude({ textClose: 'Close Me' })
    expect(textInclude.close).toBe('Close Me')

    expect(textInclude.texts['textClose']).toBeDefined()
    expect(textInclude.texts['textClose']()).toBe('Close Me')
  })

  it('should allow modifying global texts statically', () => {
    TextInclude.initText({ ok: 'Globalized OK' } as any)
    const textInclude = new TextInclude({})
    expect(textInclude.ok).toBe('Globalized OK')

    // Reset back
    TextInclude.initText({ ok: 'OK' } as any)
  })
})
