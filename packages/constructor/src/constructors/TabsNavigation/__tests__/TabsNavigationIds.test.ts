// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { TabsNavigationIds } from '../TabsNavigationIds'

describe('TabsNavigationIds', () => {
  it('should initialize and map generated ids correctly', () => {
    const props = {} as any
    const mockData = {
      fullData: ref([
        { value: 'tab-1' },
        { value: 'tab-2' }
      ])
    } as any

    const idManager = new TabsNavigationIds(props, mockData)

    expect(idManager.idDefault).toBeTypeOf('string')

    const mappedIds = idManager.ids.value
    expect(mappedIds['tab-1']).toBe(`${idManager.idDefault}-1-tab-1`)
    expect(mappedIds['tab-2']).toBe(`${idManager.idDefault}-2-tab-2`)

    expect(idManager.getIdByValue('tab-1')).toBe(`${idManager.idDefault}-1-tab-1`)
    expect(idManager.getIdByValue('non-existent')).toBe('non-existent')
  })
})
