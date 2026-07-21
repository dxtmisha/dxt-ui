// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, toRefs, nextTick } from 'vue'
import type { Ref, ToRefs } from 'vue'
import { TextareaAutosizeValue } from '../TextareaAutosizeValue'
import { TextareaAutosizeResize } from '../TextareaAutosizeResize'
import type { TextareaAutosizeProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

function createTextareaAutosizeResize(
  initialProperties: Partial<TextareaAutosizeProps>,
  element: Ref<HTMLTextAreaElement | undefined>
) {
  const reactiveProperties = ref({
    value: undefined,
    autosize: true,
    ...initialProperties
  })
  const references = toRefs(reactiveProperties.value as any) as unknown as ToRefs<TextareaAutosizeProps>
  const textareaAutosizeValue = new TextareaAutosizeValue(
    reactiveProperties.value as unknown as TextareaAutosizeProps,
    references
  )
  const textareaAutosizeResize = new TextareaAutosizeResize(
    reactiveProperties.value as unknown as TextareaAutosizeProps,
    element,
    textareaAutosizeValue
  )
  return { textareaAutosizeResize, textareaAutosizeValue, reactiveProperties }
}

describe('TextareaAutosizeResize', () => {
  let mockGetComputedStyle: any

  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => callback(0))
    mockGetComputedStyle = vi.spyOn(window, 'getComputedStyle').mockImplementation((_element: any) => {
      return {
        paddingTop: '10px',
        paddingRight: '12px',
        paddingBottom: '14px',
        paddingLeft: '16px',
        getPropertyValue: (property: string) => {
          if (property === '--sys-field-sizing-none') {
            return '"--YES--"'
          }
          return ''
        }
      } as any
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should initialize watch and run on() on mounted and set elements correctly', async () => {
    const textareaElement = document.createElement('textarea')
    const cloneElement = document.createElement('div')
    Object.defineProperty(textareaElement, 'offsetWidth', { value: 150 })
    Object.defineProperty(cloneElement, 'offsetHeight', { value: 80 })

    const elementReference = ref(textareaElement)
    const { textareaAutosizeResize } = createTextareaAutosizeResize({ autosize: true }, elementReference)

    textareaAutosizeResize.clone.value = cloneElement

    // Trigger mounted behavior
    textareaAutosizeResize.on()

    expect(cloneElement.style.paddingTop).toBe('10px')
    expect(cloneElement.style.paddingRight).toBe('12px')
    expect(cloneElement.style.paddingBottom).toBe('14px')
    expect(cloneElement.style.paddingLeft).toBe('16px')
    expect(cloneElement.style.width).toBe('150px')
    expect(cloneElement.innerText).toBe(' --')
    expect(textareaElement.style.height).toBe('80px')
  })

  it('should not update sizes and heights when autosize is false', () => {
    const textareaElement = document.createElement('textarea')
    const cloneElement = document.createElement('div')

    const elementReference = ref(textareaElement)
    const { textareaAutosizeResize } = createTextareaAutosizeResize({ autosize: false }, elementReference)

    textareaAutosizeResize.clone.value = cloneElement
    textareaAutosizeResize.on()

    expect(cloneElement.style.paddingTop).toBe('')
    expect(textareaElement.style.height).toBe('')
  })

  it('should not update sizes and heights when --sys-field-sizing-none is not --YES--', () => {
    mockGetComputedStyle.mockImplementation(() => {
      return {
        getPropertyValue: () => '"--NO--"'
      } as any
    })

    const textareaElement = document.createElement('textarea')
    const cloneElement = document.createElement('div')

    const elementReference = ref(textareaElement)
    const { textareaAutosizeResize } = createTextareaAutosizeResize({ autosize: true }, elementReference)

    textareaAutosizeResize.clone.value = cloneElement
    textareaAutosizeResize.on()

    expect(cloneElement.style.paddingTop).toBe('')
    expect(textareaElement.style.height).toBe('')
  })

  it('should trigger updateSize and updateValue when value changes', async () => {
    const textareaElement = document.createElement('textarea')
    const cloneElement = document.createElement('div')
    Object.defineProperty(textareaElement, 'offsetWidth', { value: 150 })
    Object.defineProperty(cloneElement, 'offsetHeight', { value: 95 })

    const elementReference = ref(textareaElement)
    const { textareaAutosizeResize, textareaAutosizeValue } = createTextareaAutosizeResize({ autosize: true }, elementReference)

    textareaAutosizeResize.clone.value = cloneElement

    textareaAutosizeValue.set('new value')
    await nextTick()

    expect(cloneElement.innerText).toBe('new value --')
    expect(textareaElement.style.height).toBe('95px')
  })

  it('should trigger updateSize and updateValue on input event via onInput', () => {
    const textareaElement = document.createElement('textarea')
    const cloneElement = document.createElement('div')
    Object.defineProperty(textareaElement, 'offsetWidth', { value: 150 })
    Object.defineProperty(cloneElement, 'offsetHeight', { value: 110 })

    const elementReference = ref(textareaElement)
    const { textareaAutosizeResize, textareaAutosizeValue } = createTextareaAutosizeResize({ autosize: true }, elementReference)

    textareaAutosizeResize.clone.value = cloneElement

    const mockEvent = {
      target: { value: 'input value' }
    } as unknown as InputEvent

    textareaAutosizeResize.onInput(mockEvent)

    expect(textareaAutosizeValue.item.value).toBe('input value')
    expect(cloneElement.innerText).toBe('input value --')
    expect(textareaElement.style.height).toBe('110px')
  })
})
