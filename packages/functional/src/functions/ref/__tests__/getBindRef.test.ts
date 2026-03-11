import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { getBindRef } from '../getBindRef'

describe('getBindRef', () => {
  it('should work with a static value', () => {
    const bind = getBindRef('hello')
    expect(bind.value).toEqual({ value: 'hello' })
  })

  it('should unwrap a Ref value', () => {
    const source = ref('initial')
    const bind = getBindRef(source)
    expect(bind.value).toEqual({ value: 'initial' })
  })

  it('should NOT unwrap a getter function (current getRef behavior)', () => {
    const getter = () => 'from-getter'
    const bind = getBindRef(getter)
    expect(bind.value).toEqual({ value: getter })
  })

  it('should be reactive when the source Ref changes', () => {
    const source = ref(10)
    const bind = getBindRef(source)
    expect(bind.value).toEqual({ value: 10 })

    source.value = 20
    expect(bind.value).toEqual({ value: 20 })
  })

  it('should pass custom property names to getBind', () => {
    const source = ref('text')
    const bind = getBindRef(source, 'label')
    expect(bind.value).toEqual({ label: 'text' })
  })

  it('should handle Ref for nameExtra', () => {
    const source = ref('val')
    const extra = ref({ id: 'my-id' } as any)
    const bind = getBindRef(source, extra)
    expect(bind.value).toEqual({ value: 'val', id: 'my-id' })

    extra.value = { id: 'new-id', class: 'btn' }
    expect(bind.value).toEqual({ value: 'val', id: 'new-id', class: 'btn' })
  })

  it('should react to nested object changes in Ref', () => {
    const source = ref({ id: 'item-1', name: 'Original' })
    const bind = getBindRef(source)
    // getBind treats an object with 'value' key or primitives specially.
    // If a key is missing ('value'), it wraps it.
    expect(bind.value).toEqual({ value: { id: 'item-1', name: 'Original' } })

    source.value = { id: 'item-1', name: 'Updated' }
    expect(bind.value).toEqual({ value: { id: 'item-1', name: 'Updated' } })
  })
})
