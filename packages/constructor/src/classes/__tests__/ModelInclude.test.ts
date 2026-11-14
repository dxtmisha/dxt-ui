// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { effectScope, readonly, ref, nextTick } from 'vue'
import { ModelInclude } from '../ModelInclude'

describe('ModelInclude', () => {
  it('should sync changes from syncValue to emits and stop on scope dispose', async () => {
    const emits = vi.fn()
    const syncValue = ref('initial')
    const scope = effectScope()

    scope.run(() => {
      new ModelInclude('user-name', emits, syncValue)
    })

    syncValue.value = 'updated'
    await nextTick()
    expect(emits).toHaveBeenCalledWith('update:userName', 'updated')
    expect(emits).toHaveBeenCalledWith('update:modelUserName', 'updated')

    emits.mockClear()
    scope.stop()

    syncValue.value = 'after-stop'
    await nextTick()
    expect(emits).not.toHaveBeenCalled()
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

  it('should return empty binds and ignore update() if syncValue is readonly or undefined', () => {
    const readonlyValue = readonly(ref('val'))
    const modelReadonly = new ModelInclude('user-name', undefined, readonlyValue as unknown as ReturnType<typeof ref<string>>)

    expect(modelReadonly.getBinds()).toEqual({})
    modelReadonly.update('ignored')
    expect(readonlyValue.value).toBe('val')

    const modelWithoutSync = new ModelInclude('user-name')
    expect(modelWithoutSync.getBinds()).toEqual({})
  })

  it('should safely handle emit() when emits callback is not a function', () => {
    const model = new ModelInclude('value')
    expect(() => model.emit('test')).not.toThrow()
  })
})
