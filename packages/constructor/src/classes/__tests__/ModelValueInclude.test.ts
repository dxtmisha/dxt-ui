// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, nextTick } from 'vue'
import { ModelValueInclude } from '../ModelValueInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('ModelValueInclude', () => {
  it('should initialize value with inputValue', () => {
    const inputValue = ref('init-val')
    const modelValue = new ModelValueInclude('index-key', undefined, undefined, inputValue)

    expect(modelValue.getValue()).toBe('init-val')
  })

  it('should update value on input value change', async () => {
    const inputValue = ref('first')
    const modelValue = new ModelValueInclude('index-key', undefined, undefined, inputValue)

    expect(modelValue.getValue()).toBe('first')
    inputValue.value = 'second'
    await nextTick()
    expect(modelValue.getValue()).toBe('second')
  })

  it('should update value on onClick and delegate to event click handler', () => {
    const eventMock = { onClick: vi.fn() } as any
    const modelValue = new ModelValueInclude(
      'index-key',
      undefined,
      eventMock,
      ref('old-val'),
      ref(false),
      ref(false)
    )

    const event = {} as MouseEvent
    const options = { type: 'item', value: 'new-val', detail: undefined }

    modelValue.onClick(event, options)

    expect(modelValue.getValue()).toBe('new-val')
    expect(eventMock.onClick).toHaveBeenCalledWith(event, options)
  })

  it('should not update value on onClick if readonly is true', () => {
    const modelValue = new ModelValueInclude(
      'index-key',
      undefined,
      undefined,
      ref('old-val'),
      ref(true)
    )

    modelValue.onClick({} as MouseEvent, { type: 'item', value: 'new-val', detail: undefined })
    expect(modelValue.getValue()).toBe('old-val')
  })

  it('should update directly on onUpdate', () => {
    const modelValue = new ModelValueInclude('index-key')
    modelValue.onUpdate('direct-update')
    expect(modelValue.getValue()).toBe('direct-update')
  })
})
