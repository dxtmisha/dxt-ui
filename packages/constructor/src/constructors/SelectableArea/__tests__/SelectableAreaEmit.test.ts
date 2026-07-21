// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { SelectableAreaEmit } from '../SelectableAreaEmit'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    watch: (_src: any, cb: any) => {
      cb()
    }
  }
})

describe('SelectableAreaEmit', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => cb(0))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should emit correct selected payload on triggering on()', () => {
    const mockClasses = {
      findItems: vi.fn().mockReturnValue(['item1', 'item2']),
      findSelection: vi.fn().mockReturnValue(['item2'])
    } as any

    const mockItem = {
      item: ref(['2']),
      getNewArray: vi.fn().mockReturnValue(['2'])
    } as any

    const emits = vi.fn()

    const emitManager = new SelectableAreaEmit(mockClasses, mockItem, emits)

    emitManager.on()

    expect(mockItem.getNewArray).toHaveBeenCalled()
    expect(mockClasses.findItems).toHaveBeenCalled()
    expect(mockClasses.findSelection).toHaveBeenCalled()

    expect(emits).toHaveBeenCalledWith('selected', {
      items: ['item1', 'item2'],
      itemsSelected: ['item2'],
      selected: ['2'],
      focus: '2'
    })
  })

  it('should set focus to undefined if no items selected', () => {
    const mockClasses = {
      findItems: vi.fn().mockReturnValue([]),
      findSelection: vi.fn().mockReturnValue([])
    } as any

    const mockItem = {
      item: ref([]),
      getNewArray: vi.fn().mockReturnValue([])
    } as any

    const emits = vi.fn()

    const emitManager = new SelectableAreaEmit(mockClasses, mockItem, emits)

    emitManager.on()

    expect(emits).toHaveBeenCalledWith('selected', {
      items: [],
      itemsSelected: [],
      selected: [],
      focus: undefined
    })
  })
})
