// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { nextTick, ref } from 'vue'
import { InputPhoneData } from '../InputPhoneData'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('InputPhoneData', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should initialize and resolve defaults', () => {
    const mockValue = {
      item: ref(''),
      set: vi.fn()
    } as any

    const data = new InputPhoneData({ countryDefault: 'US' }, () => mockValue)
    data.onMounted()
    expect(data.country.value).toBe('US')
  })

  it('should update country and value via onCountry without altering focus', () => {
    const button = document.createElement('button')
    const input = document.createElement('input')
    document.body.append(button, input)
    button.focus()

    const mockValue = {
      item: ref(''),
      set: vi.fn()
    } as any
    const mockEvent = {
      onValue: vi.fn()
    } as any
    const mockElement = {
      get: () => input
    } as any

    const data = new InputPhoneData(
      { countryDefault: 'RU' },
      () => mockValue,
      () => mockEvent,
      () => mockElement
    )

    data.onCountry(new MouseEvent('click'), { type: 'click', value: 'US', detail: undefined })

    expect(data.country.value).toBe('US')
    expect(mockEvent.onValue).toHaveBeenCalled()
    expect(document.activeElement).toBe(button)
  })

  it('should focus input element after nextTick when window closes via onWindow', async () => {
    const button = document.createElement('button')
    const input = document.createElement('input')
    document.body.append(button, input)
    button.focus()

    const mockValue = {
      item: ref(''),
      set: vi.fn()
    } as any
    const mockEvent = {
      onValue: vi.fn()
    } as any
    const mockElement = {
      get: () => input
    } as any

    const data = new InputPhoneData(
      { countryDefault: 'US' },
      () => mockValue,
      () => mockEvent,
      () => mockElement
    )

    data.onWindow({
      id: 'window-1',
      element: document.createElement('div'),
      control: button,
      open: false
    })

    expect(document.activeElement).toBe(button)
    await nextTick()
    expect(document.activeElement).toBe(input)
  })

  it('should not focus input element when window opens via onWindow', async () => {
    const button = document.createElement('button')
    const input = document.createElement('input')
    document.body.append(button, input)
    button.focus()

    const mockValue = {
      item: ref(''),
      set: vi.fn()
    } as any
    const mockElement = {
      get: () => input
    } as any

    const data = new InputPhoneData(
      { countryDefault: 'US' },
      () => mockValue,
      undefined,
      () => mockElement
    )

    data.onWindow({
      id: 'window-1',
      element: document.createElement('div'),
      control: button,
      open: true
    })

    await nextTick()
    expect(document.activeElement).toBe(button)
  })

  it('should safely ignore focus when element is missing', () => {
    const mockValue = {
      item: ref(''),
      set: vi.fn()
    } as any

    const data = new InputPhoneData({ countryDefault: 'US' }, () => mockValue)
    expect(() => data.focus()).not.toThrow()
  })
})
