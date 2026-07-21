// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { SnackbarData } from '../SnackbarData'

vi.mock('@dxtmisha/functional-basic', async () => {
  const actual = await vi.importActual('@dxtmisha/functional-basic') as any
  return {
    ...actual,
    isElementVisible: () => true
  }
})

describe('SnackbarData', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => cb(0))
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  it('should initialize correctly and verify isItem and isPriority', () => {
    const props = { delay: 5000 } as any
    const container = document.createElement('div')
    const elementRef = ref(container)

    const data = new SnackbarData(props, elementRef, 'd1-snackbar')

    expect(data.isItem()).toBe(false)
    expect(data.isPriority()).toBe(false)

    // Add item
    data.item.value = [{ value: 'item-1', highPriority: false }]
    expect(data.isItem()).toBe(true)
    expect(data.isPriority()).toBe(false)

    // Add high priority item
    data.item.value = [
      { value: 'item-1', highPriority: false },
      { value: 'item-2', highPriority: true }
    ]
    expect(data.isItem()).toBe(true)
    expect(data.isPriority()).toBe(true)
  })

  it('should add message with default/custom value and delays', () => {
    const props = { delay: 5000 } as any
    const container = document.createElement('div')
    const elementRef = ref(container)

    const mockEvent = {
      show: vi.fn(),
      hide: vi.fn()
    } as any

    const data = new SnackbarData(props, elementRef, 'd1-snackbar', mockEvent)

    // Case 1: Custom value and custom delay
    data.add({ data: { label: 'Message 1' }, value: 'my-id', delay: 2000 })
    expect(data.item.value.length).toBe(1)
    expect(data.item.value[0].value).toBe('my-id')
    expect(data.item.value[0].delay).toBe(2000)

    // Case 2: Default value and default delay
    data.add({ data: { label: 'Message 2' } })
    expect(data.item.value.length).toBe(2)
    expect(data.item.value[1].value).toContain('snackbar-item-')
    expect(data.item.value[1].delay).toBe(5000)
  })

  it('should retrieve item by value', () => {
    const props = {} as any
    const data = new SnackbarData(props, ref(undefined), 'd1-snackbar')
    const testItem = { value: 'target-id', text: 'Hello' } as any
    data.item.value = [testItem]

    expect(data.getItemByValue('target-id')).toBe(testItem)
    expect(data.getItemByValue('non-existent')).toBeUndefined()
  })

  it('should remove items correctly', () => {
    const props = {} as any
    const container = document.createElement('div')
    const elementRef = ref(container)

    const mockEvent = {
      show: vi.fn(),
      hide: vi.fn()
    } as any

    const data = new SnackbarData(props, elementRef, 'd1-snackbar', mockEvent)

    const testItem = { value: 'item-1', text: 'Hello' } as any
    data.item.value = [testItem]

    // Mock querySelector so that element is not found (synchronous remove path)
    container.querySelector = vi.fn().mockReturnValue(null)

    data.remove('item-1')
    expect(data.item.value.length).toBe(0)
    expect(mockEvent.hide).toHaveBeenCalledWith('item-1', testItem)
  })

  it('should remove items with transition if element is present in DOM', () => {
    const props = {} as any
    const container = document.createElement('div')
    const elementRef = ref(container)

    const mockEvent = {
      show: vi.fn(),
      hide: vi.fn()
    } as any

    const data = new SnackbarData(props, elementRef, 'd1-snackbar', mockEvent)

    const testItem = { value: 'item-1', text: 'Hello' } as any
    data.item.value = [testItem]

    const itemElement = document.createElement('div')
    itemElement.setAttribute('data-snackbar-item', 'item-1')
    container.appendChild(itemElement)

    data.remove('item-1')

    // Expect class '--hide' to have been added
    expect(itemElement.classList.contains('d1-snackbar--hide')).toBe(true)

    // Trigger transitionend event
    itemElement.dispatchEvent(new Event('transitionend'))

    // Verify it was hidden/removed
    expect(data.item.value.length).toBe(0)
    expect(mockEvent.hide).toHaveBeenCalledWith('item-1', testItem)
  })

  it('should pause and resume timers', () => {
    const props = {} as any
    const data = new SnackbarData(props, ref(undefined), 'd1-snackbar')

    const timerMock1 = { pause: vi.fn(), resume: vi.fn() } as any
    const timerMock2 = { pause: vi.fn(), resume: vi.fn() } as any

    data.item.value = [
      { value: '1', resumableTimer: timerMock1 },
      { value: '2', resumableTimer: timerMock2 }
    ] as any

    data.pause()
    expect(timerMock1.pause).toHaveBeenCalled()
    expect(timerMock2.pause).toHaveBeenCalled()

    data.resume()
    expect(timerMock1.resume).toHaveBeenCalled()
    expect(timerMock2.resume).toHaveBeenCalled()
  })

  it('should clear all items', () => {
    const props = {} as any
    const data = new SnackbarData(props, ref(undefined), 'd1-snackbar')
    const spyRemove = vi.spyOn(data, 'remove')

    data.item.value = [
      { value: '1' },
      { value: '2' }
    ] as any

    data.clear()
    expect(spyRemove).toHaveBeenCalledWith('1')
    expect(spyRemove).toHaveBeenCalledWith('2')
  })
})
