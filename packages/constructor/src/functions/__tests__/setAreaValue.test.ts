// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { computed, type ComputedRef, createApp, createSSRApp, defineComponent, h, inject, nextTick, ref, type Ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { getRef, type RefOrNormal } from '@dxtmisha/functional'
import { AREA_PROP_NAME } from '../../types/areaTypes'
import { setAreaValue } from '../setAreaValue'
import { getAreaValue } from '../getAreaValue'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []
/** Unexpected console warnings / Неожиданные предупреждения консоли */
let warnings: unknown[][] = []
/** Unexpected console errors / Неожиданные ошибки консоли */
let errors: unknown[][] = []

/**
 * Helper to mount a Vue component tree onto a detached host registered for cleanup.
 *
 * Вспомогательная функция для монтирования компонента Vue с автоматической очисткой.
 * @param rootComponent root Vue component / корневой компонент Vue
 * @returns mounted host element and app instance / смонтированный элемент и экземпляр приложения
 */
function mountTestApp(rootComponent: ReturnType<typeof defineComponent>) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  cleanups.push(() => host.remove())

  const app = createApp(rootComponent)
  app.mount(host)
  cleanups.push(() => app.unmount())

  return { host, app }
}

beforeEach(() => {
  warnings = []
  errors = []
  vi.spyOn(console, 'warn').mockImplementation((...values: unknown[]) => {
    warnings.push(values)
  })
  vi.spyOn(console, 'error').mockImplementation((...values: unknown[]) => {
    errors.push(values)
  })
})

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  try {
    expect(warnings, 'Unexpected Vue warnings').toEqual([])
    expect(errors, 'Unexpected Vue errors').toEqual([])
  } finally {
    vi.restoreAllMocks()
  }
})

describe('setAreaValue', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should satisfy the parameter and return type contract', () => {
      expectTypeOf(setAreaValue).parameter(0).toEqualTypeOf<RefOrNormal<string | undefined>>()
      expectTypeOf(setAreaValue).returns.toEqualTypeOf<void>()
      expectTypeOf<Parameters<typeof setAreaValue>>().toEqualTypeOf<[RefOrNormal<string | undefined>]>()
      expectTypeOf<Ref<string | undefined>>().toMatchTypeOf<Parameters<typeof setAreaValue>[0]>()
      expectTypeOf<ComputedRef<string | undefined>>().toMatchTypeOf<Parameters<typeof setAreaValue>[0]>()
    })

    it('should provide a plain string area value to descendant components', () => {
      let injectedArea: string | undefined

      const ChildComponent = defineComponent({
        setup() {
          injectedArea = getAreaValue()
          return () => h('div', injectedArea)
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          setAreaValue('actions')
          return () => h(ChildComponent)
        }
      })

      const { host } = mountTestApp(ParentComponent)

      expect(injectedArea).toBe('actions')
      expect(host.textContent).toBe('actions')
    })

    it('should provide a reactive Ref area value and reflect updates in descendants', async () => {
      const areaRef = ref<string>('header')

      const ChildComponent = defineComponent({
        setup() {
          const injected = inject<RefOrNormal<string | undefined>>(AREA_PROP_NAME, undefined)
          const areaText = computed(() => getRef(injected) ?? 'empty')
          return () => h('div', areaText.value)
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          setAreaValue(areaRef)
          return () => h(ChildComponent)
        }
      })

      const { host } = mountTestApp(ParentComponent)

      expect(host.textContent).toBe('header')

      areaRef.value = 'footer'
      await nextTick()
      expect(host.textContent).toBe('footer')
    })

    it('should provide a ComputedRef area value that tracks reactive sources', async () => {
      const source = ref<string | undefined>('initial')

      const ChildComponent = defineComponent({
        setup() {
          const injected = inject<RefOrNormal<string | undefined>>(AREA_PROP_NAME, undefined)
          const areaText = computed(() => getRef(injected) ?? 'none')
          return () => h('div', areaText.value)
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          setAreaValue(computed(() => source.value))
          return () => h(ChildComponent)
        }
      })

      const { host } = mountTestApp(ParentComponent)

      expect(host.textContent).toBe('initial')

      source.value = undefined
      await nextTick()
      expect(host.textContent).toBe('none')

      source.value = 'updated'
      await nextTick()
      expect(host.textContent).toBe('updated')
    })
  })

  describe('Boundary values, isolation, and ancestor override', () => {
    it('should override ancestor area value in nested providers', () => {
      let outerArea: string | undefined
      let innerArea: string | undefined

      const DeepChild = defineComponent({
        setup() {
          innerArea = getAreaValue()
          return () => h('span', innerArea)
        }
      })

      const MiddleProvider = defineComponent({
        setup() {
          outerArea = getAreaValue()
          setAreaValue('inner-area')
          return () => h(DeepChild)
        }
      })

      const RootProvider = defineComponent({
        setup() {
          setAreaValue('outer-area')
          return () => h(MiddleProvider)
        }
      })

      mountTestApp(RootProvider)

      expect(outerArea).toBe('outer-area')
      expect(innerArea).toBe('inner-area')
    })

    it('should fall back to a higher ancestor when a closer provider supplies ref(undefined)', () => {
      let resolvedArea: string | undefined

      const DeepChild = defineComponent({
        setup() {
          resolvedArea = getAreaValue()
          return () => h('span', resolvedArea)
        }
      })

      const MiddleProvider = defineComponent({
        setup() {
          setAreaValue(ref(undefined))
          return () => h(DeepChild)
        }
      })

      const RootProvider = defineComponent({
        setup() {
          setAreaValue('root-area')
          return () => h(MiddleProvider)
        }
      })

      mountTestApp(RootProvider)

      expect(resolvedArea).toBe('root-area')
    })

    it('should isolate provided area values across sibling branches', () => {
      let leftArea: string | undefined
      let rightArea: string | undefined
      let neutralArea: string | undefined

      const makeLeaf = (assign: (value: string | undefined) => void) => defineComponent({
        setup() {
          assign(getAreaValue())
          return () => h('div')
        }
      })

      const LeftBranch = defineComponent({
        setup() {
          setAreaValue('left-branch')
          return () => h(makeLeaf((value) => {
            leftArea = value
          }))
        }
      })

      const RightBranch = defineComponent({
        setup() {
          setAreaValue('right-branch')
          return () => h(makeLeaf((value) => {
            rightArea = value
          }))
        }
      })

      const NeutralBranch = makeLeaf((value) => {
        neutralArea = value
      })

      const Root = defineComponent({
        setup() {
          return () => [h(LeftBranch), h(RightBranch), h(NeutralBranch)]
        }
      })

      mountTestApp(Root)

      expect(leftArea).toBe('left-branch')
      expect(rightArea).toBe('right-branch')
      expect(neutralArea).toBeUndefined()
    })

    it('should handle empty string and undefined values without throwing', () => {
      let injectedEmpty: string | undefined = 'preset'
      let injectedUndefined: string | undefined = 'preset'

      const ChildEmpty = defineComponent({
        setup() {
          injectedEmpty = inject<string | undefined>(AREA_PROP_NAME, 'fallback')
          return () => h('div')
        }
      })

      const ChildUndefined = defineComponent({
        setup() {
          injectedUndefined = inject<string | undefined>(AREA_PROP_NAME, 'fallback')
          return () => h('div')
        }
      })

      const EmptyProvider = defineComponent({
        setup() {
          setAreaValue('')
          return () => h(ChildEmpty)
        }
      })

      const UndefinedProvider = defineComponent({
        setup() {
          setAreaValue(undefined)
          return () => h(ChildUndefined)
        }
      })

      const Root = defineComponent({
        setup() {
          return () => [
            h(EmptyProvider),
            h(UndefinedProvider)
          ]
        }
      })

      mountTestApp(Root)

      expect(injectedEmpty).toBe('')
      expect(injectedUndefined).toBeUndefined()
    })
  })

  describe('Multilingual and Unicode values', () => {
    it.each([
      'область',
      'Khu vực',
      '区域',
      '🚀'
    ])('should provide and resolve Unicode area value %s', (areaValue) => {
      let resolved: string | undefined

      const Child = defineComponent({
        setup() {
          resolved = getAreaValue()
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          setAreaValue(areaValue)
          return () => h(Child)
        }
      })

      mountTestApp(Parent)
      expect(resolved).toBe(areaValue)
    })
  })

  describe('SSR safety, outside-setup resilience, and request isolation', () => {
    it('should not throw when called outside setup() while emitting Vue context warning', () => {
      expect(() => setAreaValue('outside')).not.toThrow()
      expect(warnings.length).toBeGreaterThan(0)
      warnings = []
    })

    it('should isolate provided area values across independent SSR renders', async () => {
      const makeSsrRoot = (area: string) => defineComponent({
        setup() {
          setAreaValue(area)
          return () => h(defineComponent({
            setup() {
              return () => h('span', getAreaValue() ?? 'none')
            }
          }))
        }
      })

      const [htmlOne, htmlTwo] = await Promise.all([
        renderToString(createSSRApp(makeSsrRoot('ssr-one'))),
        renderToString(createSSRApp(makeSsrRoot('ssr-two')))
      ])

      expect(htmlOne).toBe('<span>ssr-one</span>')
      expect(htmlTwo).toBe('<span>ssr-two</span>')
    })
  })
})
