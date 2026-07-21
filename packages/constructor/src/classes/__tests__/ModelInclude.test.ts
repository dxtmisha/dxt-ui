// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readonly, ref, nextTick } from 'vue'
import { ModelInclude } from '../ModelInclude'

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

describe('ModelInclude', () => {
  beforeEach(() => {
    mountedCallback = undefined
  })

  it('should sync changes from syncValue to emits on mount', async () => {
    const emits = vi.fn()
    const syncValue = ref('initial')
    new ModelInclude('user-name', emits, syncValue)

    expect(mountedCallback).toBeDefined()
    if (mountedCallback) {
      mountedCallback()
    }

    syncValue.value = 'updated'
    await nextTick()
    expect(emits).toHaveBeenCalledWith('update:userName', 'updated')
    expect(emits).toHaveBeenCalledWith('update:modelUserName', 'updated')
  })

  it('should return correct binds for v-model', () => {
    const syncValue = ref('some-value')
    const model = new ModelInclude('user-name', undefined, syncValue)

    expect(model.getBinds()).toEqual({
      'modelUserName': 'some-value',
      'onUpdate:userName': model.update,
      'onUpdate:modelUserName': model.update
    })
  })

  it('should update syncValue value when update is called', () => {
    const syncValue = ref('old')
    const model = new ModelInclude('user-name', undefined, syncValue)

    model.update('new')
    expect(syncValue.value).toBe('new')
  })

  it('should return empty binds if syncValue is readonly', () => {
    const readonlyVal = readonly(ref('val'))
    const modelReadonly = new ModelInclude('user-name', undefined, readonlyVal as any)

    expect(modelReadonly.getBinds()).toEqual({})
  })
})
