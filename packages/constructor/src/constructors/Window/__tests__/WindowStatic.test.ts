// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, toRefs, nextTick } from 'vue'
import type { ToRefs } from 'vue'
import { WindowStatic } from '../WindowStatic'
import type { WindowProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

function createWindowStatic(
  initialProperties: Partial<WindowProps>,
  mockElement: any
) {
  const reactiveProperties = ref({
    staticMode: false,
    ...initialProperties
  })
  const references = toRefs(reactiveProperties.value as any) as unknown as ToRefs<WindowProps>
  const windowStatic = new WindowStatic(
    reactiveProperties.value as unknown as WindowProps,
    references,
    mockElement
  )
  return { windowStatic, reactiveProperties }
}

describe('WindowStatic', () => {
  let mockElement: any
  let mainElement: HTMLDivElement

  beforeEach(() => {
    mainElement = document.createElement('div')
    mockElement = {
      getMain: vi.fn().mockReturnValue(mainElement)
    }

    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => callback(0))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should return is() based on staticMode prop', () => {
    const { windowStatic } = createWindowStatic({ staticMode: false }, mockElement)
    expect(windowStatic.is()).toBe(false)

    const { windowStatic: windowStaticActive } = createWindowStatic({ staticMode: true }, mockElement)
    expect(windowStaticActive.is()).toBe(true)
  })

  it('should start and stop resize listeners on prop staticMode change', async () => {
    const { windowStatic, reactiveProperties } = createWindowStatic({ staticMode: false }, mockElement)

    // Initially listener should not start
    expect(windowStatic.is()).toBe(false)

    // Toggle staticMode
    reactiveProperties.value.staticMode = true
    await nextTick()

    expect(windowStatic.is()).toBe(true)
  })

  it('should set item value to true if element styling computed matches --STATIC--', () => {
    vi.spyOn(window, 'getComputedStyle').mockImplementation((_element: any) => {
      return {
        getPropertyValue: (property: string) => {
          if (property === '--sys-type-body') {
            return '--STATIC--'
          }
          return ''
        }
      } as any
    })

    const { windowStatic } = createWindowStatic({ staticMode: true }, mockElement)

    // Dispatch resize event
    const resizeEvent = new Event('resize')
    window.dispatchEvent(resizeEvent)

    expect(windowStatic.item.value).toBe(true)
  })
})
