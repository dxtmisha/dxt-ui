// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { computed, createApp, createSSRApp, defineComponent, h, type InjectionKey, nextTick, provide, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { AREA_PROP_NAME } from '../../types/areaTypes'
import { getAreaValue } from '../getAreaValue'
import { setAreaValue } from '../setAreaValue'

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

describe('getAreaValue', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should preserve exact return type contract', () => {
      expectTypeOf(getAreaValue).returns.toEqualTypeOf<string | undefined>()
      expectTypeOf(getAreaValue()).toEqualTypeOf<string | undefined>()
    })

    it('should return undefined when no ancestor provides an area value', () => {
      let resolved: string | undefined = 'preset'

      const Leaf = defineComponent({
        setup() {
          resolved = getAreaValue()
          return () => h('div', resolved ?? 'none')
        }
      })

      const { host } = mountTestApp(Leaf)

      expect(resolved).toBeUndefined()
      expect(host.textContent).toBe('none')
    })

    it('should return a plain string provided by an ancestor component', () => {
      let resolved: string | undefined

      const Child = defineComponent({
        setup() {
          resolved = getAreaValue()
          return () => h('div', resolved)
        }
      })

      const Parent = defineComponent({
        setup() {
          setAreaValue('header')
          return () => h(Child)
        }
      })

      const { host } = mountTestApp(Parent)

      expect(resolved).toBe('header')
      expect(host.textContent).toBe('header')
    })

    it('should resolve an area value provided at the application level', () => {
      let resolved: string | undefined

      const Leaf = defineComponent({
        setup() {
          resolved = getAreaValue()
          return () => h('div', resolved)
        }
      })

      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const app = createApp(Leaf)
      app.provide(AREA_PROP_NAME, 'app-level-area')
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(resolved).toBe('app-level-area')
      expect(host.textContent).toBe('app-level-area')
    })

    it('should unwrap reactive Ref and ComputedRef values and reflect updates', async () => {
      const source = ref<string | undefined>('initial')

      const Child = defineComponent({
        setup() {
          return () => h('span', getAreaValue() ?? 'empty')
        }
      })

      const Parent = defineComponent({
        setup() {
          setAreaValue(computed(() => source.value))
          return () => h(Child)
        }
      })

      const { host } = mountTestApp(Parent)
      expect(host.textContent).toBe('initial')

      source.value = 'sidebar'
      await nextTick()
      expect(host.textContent).toBe('sidebar')

      source.value = undefined
      await nextTick()
      expect(host.textContent).toBe('empty')
    })
  })

  describe('Nearest ancestor lookup, zero/falsy traps, and nullish fallbacks', () => {
    it('should treat empty string and whitespace-only strings as valid area values without falling back', () => {
      let resolvedEmpty: string | undefined
      let resolvedSpaces: string | undefined

      const ChildEmpty = defineComponent({
        setup() {
          resolvedEmpty = getAreaValue()
          return () => h('span')
        }
      })

      const ChildSpaces = defineComponent({
        setup() {
          resolvedSpaces = getAreaValue()
          return () => h('span')
        }
      })

      const EmptyProvider = defineComponent({
        setup() {
          setAreaValue('')
          return () => h(ChildEmpty)
        }
      })

      const SpacesProvider = defineComponent({
        setup() {
          setAreaValue('   ')
          return () => h(ChildSpaces)
        }
      })

      const Root = defineComponent({
        setup() {
          setAreaValue('outer-fallback')
          return () => [h(EmptyProvider), h(SpacesProvider)]
        }
      })

      mountTestApp(Root)

      expect(resolvedEmpty).toBe('')
      expect(resolvedSpaces).toBe('   ')
    })

    it('should skip closer undefined, ref(undefined), and null providers to resolve from higher ancestors', () => {
      let fromUndefined: string | undefined
      let fromRefUndefined: string | undefined
      let fromNull: string | undefined

      const LeafUndefined = defineComponent({
        setup() {
          fromUndefined = getAreaValue()
          return () => h('div')
        }
      })

      const LeafRefUndefined = defineComponent({
        setup() {
          fromRefUndefined = getAreaValue()
          return () => h('div')
        }
      })

      const LeafNull = defineComponent({
        setup() {
          fromNull = getAreaValue()
          return () => h('div')
        }
      })

      const MidUndefined = defineComponent({
        setup() {
          setAreaValue(undefined)
          return () => h(LeafUndefined)
        }
      })

      const MidRefUndefined = defineComponent({
        setup() {
          setAreaValue(ref(undefined))
          return () => h(LeafRefUndefined)
        }
      })

      const MidNull = defineComponent({
        setup() {
          provide(AREA_PROP_NAME as InjectionKey<null>, null)
          return () => h(LeafNull)
        }
      })

      const Root = defineComponent({
        setup() {
          setAreaValue('root-area')
          return () => [h(MidUndefined), h(MidRefUndefined), h(MidNull)]
        }
      })

      mountTestApp(Root)

      expect(fromUndefined).toBe('root-area')
      expect(fromRefUndefined).toBe('root-area')
      expect(fromNull).toBe('root-area')
    })

    it('should return undefined when all ancestor providers supply nullish values', () => {
      let resolved: string | undefined = 'preset'

      const Leaf = defineComponent({
        setup() {
          resolved = getAreaValue()
          return () => h('div')
        }
      })

      const Mid = defineComponent({
        setup() {
          setAreaValue(ref(undefined))
          return () => h(Leaf)
        }
      })

      const Root = defineComponent({
        setup() {
          setAreaValue(undefined)
          return () => h(Mid)
        }
      })

      mountTestApp(Root)

      expect(resolved).toBeUndefined()
    })

    it('should dynamically fall back to outer ancestor and re-override when intermediate ref changes', async () => {
      const innerArea = ref<string | undefined>('inner')

      const Leaf = defineComponent({
        setup() {
          return () => h('span', getAreaValue() ?? 'none')
        }
      })

      const Mid = defineComponent({
        setup() {
          setAreaValue(innerArea)
          return () => h(Leaf)
        }
      })

      const Root = defineComponent({
        setup() {
          setAreaValue('outer')
          return () => h(Mid)
        }
      })

      const { host } = mountTestApp(Root)
      expect(host.textContent).toBe('inner')

      innerArea.value = undefined
      await nextTick()
      expect(host.textContent).toBe('outer')

      innerArea.value = 'inner-updated'
      await nextTick()
      expect(host.textContent).toBe('inner-updated')
    })
  })

  describe('Multilingual, Unicode, and special string values', () => {
    it.each([
      'Панель_действий',
      'Khu_vực_chính',
      '操作区域',
      '🔥_header',
      'area.v1+$[0]'
    ])('should return provided area value %s without alteration', (expectedArea) => {
      let resolved: string | undefined

      const Child = defineComponent({
        setup() {
          resolved = getAreaValue()
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          setAreaValue(expectedArea)
          return () => h(Child)
        }
      })

      mountTestApp(Parent)
      expect(resolved).toBe(expectedArea)
    })
  })

  describe('SSR safety, outside-context resilience, and request isolation', () => {
    it('should return undefined safely when called outside a Vue injection context', () => {
      expect(getAreaValue()).toBeUndefined()
    })

    it('should isolate injected area values across concurrent SSR app renders', async () => {
      const createBranch = (label: string) => defineComponent({
        setup() {
          setAreaValue(label)
          return () => h(defineComponent({
            setup() {
              const area = getAreaValue()
              return () => h('p', area ?? 'missing')
            }
          }))
        }
      })

      const appA = createSSRApp(createBranch('ssr-request-a'))
      const appB = createSSRApp(createBranch('ssr-request-b'))

      const [htmlA, htmlB] = await Promise.all([
        renderToString(appA),
        renderToString(appB)
      ])

      expect(htmlA).toBe('<p>ssr-request-a</p>')
      expect(htmlB).toBe('<p>ssr-request-b</p>')
    })
  })
})
