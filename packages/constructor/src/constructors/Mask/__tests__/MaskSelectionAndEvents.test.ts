// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MaskSelection } from '../MaskSelection'
import { MaskEmit } from '../MaskEmit'
import { MaskValidation } from '../MaskValidation'
import { MaskInclude } from '../MaskInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('MaskSelectionAndEvents (Selection, Emit, Validation, Include)', () => {
  it('should test MaskSelection', () => {
    const mockMask = {
      info: ref([
        { key: 10, index: 0 },
        { key: 20, index: 1 }
      ]),
      getLength: () => 30,
      getLengthBySpecial: () => 2
    } as any

    const sel = new MaskSelection({} as any, mockMask)
    expect(sel.get()).toBe(0)
    expect(sel.getFirst()).toBe(10)
    expect(sel.getFocus()).toBe(10)
    expect(sel.getNext()).toBe(20)

    sel.set(1)
    expect(sel.get()).toBe(1)
    expect(sel.getFocus()).toBe(20)

    sel.setShift(true)
    expect(sel.getShift()).toBe(11) // 10 + 1

    sel.resetImmediate()
    expect(sel.getImmediate()).toBe(10)

    sel.goNext()
    expect(sel.get()).toBe(2)
    sel.goBack()
    expect(sel.get()).toBe(1)
  })

  it('should test MaskEmit', () => {
    const mockValidation = {
      item: ref({ value: 'val' })
    } as any
    const emitsSpy = vi.fn()
    const emit = new MaskEmit(mockValidation, emitsSpy)

    expect(emit.isValue()).toBe(false)
    emit.setType('input')
    expect(emit.isValue()).toBe(true)

    emit.setEvent(new Event('input'))
    emit.go()
    expect(emitsSpy).toHaveBeenCalled()

    emit.reset()
    expect(emit.isValue()).toBe(false)
  })

  it('should test MaskValidation', () => {
    const mockPattern = {
      item: ref({}),
      isCheck: () => false
    } as any
    const mockValue = {
      isFull: ref(false),
      item: ref({ value: 'test' }),
      getInfoItem: vi.fn()
    } as any

    const validation = new MaskValidation(mockPattern, mockValue)
    expect(validation.checkValidity()).toBe(true)
    expect(validation.isError('group1')).toBe(false)
  })

  it('should test MaskInclude', () => {
    const mockType = {
      get: () => 'number'
    } as any
    const include = new MaskInclude('parent', {}, undefined, undefined, undefined, undefined, '', mockType)
    expect(include.active.value).toBe(true)
    expect(include.is).toBe(true)
  })
})
