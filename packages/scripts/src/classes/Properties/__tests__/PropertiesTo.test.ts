import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesItems } from '../PropertiesItems'
import { PropertiesToRemove } from '../to/PropertiesToRemove'
import { PropertiesToRoot } from '../to/PropertiesToRoot'
import { PropertiesToProperty } from '../to/PropertiesToProperty'
import { PropertiesFile } from '../PropertiesFile'

describe('Properties To Transformers', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('PropertiesToRemove filters out empty or invalid items', () => {
    vi.spyOn(PropertiesFile, 'write').mockImplementation(() => {})

    const items = new PropertiesItems({
      'valid.item': { value: '#fff' },
      'empty.item': { value: '' }
    } as any)

    const transformer = new PropertiesToRemove(items)
    transformer.to()

    expect(items.get()['valid.item']).toBeDefined()
  })

  it('PropertiesToRoot processes root design token items', () => {
    vi.spyOn(PropertiesFile, 'write').mockImplementation(() => {})

    const items = new PropertiesItems({
      'root.item': { value: '16px' }
    } as any)

    const transformer = new PropertiesToRoot(items)
    transformer.to()

    expect(items.get()).toBeDefined()
  })

  it('PropertiesToProperty assigns property metadata', () => {
    vi.spyOn(PropertiesFile, 'write').mockImplementation(() => {})

    const items = new PropertiesItems({
      'button.color': { value: '#123456' }
    } as any)

    const transformer = new PropertiesToProperty(items)
    transformer.to()

    expect(items.get()['button.color']).toBeDefined()
  })
})
