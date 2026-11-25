// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { effectScope, nextTick, reactive } from 'vue'
import { InputCodeItemTabIndex } from '../InputCodeItemTabIndex'

describe('InputCodeItemTabIndex', () => {
  it('should initialize, set, reset, and sync props.tabindex on mount', async () => {
    const props = reactive<{ tabindex?: number | string }>({ tabindex: 1 })
    const scope = effectScope()
    let tabIndex!: InputCodeItemTabIndex

    scope.run(() => {
      tabIndex = new InputCodeItemTabIndex(props)
      expect(tabIndex.get()).toBe(1)

      tabIndex.onMounted()
    })

    tabIndex.set(2)
    expect(tabIndex.get()).toBe(2)

    tabIndex.reset()
    expect(tabIndex.get()).toBe(1)

    props.tabindex = -1
    await nextTick()
    expect(tabIndex.get()).toBe(-1)

    scope.stop()
  })
})
