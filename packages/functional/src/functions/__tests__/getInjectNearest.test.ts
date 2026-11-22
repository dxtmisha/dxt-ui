/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import {
  computed,
  createApp,
  createSSRApp,
  defineComponent,
  h,
  nextTick,
  provide,
  ref,
  type InjectionKey,
  type Ref
} from 'vue'
import { renderToString } from 'vue/server-renderer'

import { getInjectNearest } from '../getInjectNearest'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []
/** Unexpected console warnings / Неожиданные предупреждения консоли */
let warnings: unknown[][] = []
/** Unexpected console errors / Неожиданные ошибки консоли */
let errors: unknown[][] = []

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

describe('getInjectNearest', () => {
  describe('Ancestor chain lookup', () => {
    it('finds nearest non-nullish value above closer providers with undefined or null', () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const emptyRef = ref<string | undefined>(undefined)

      const Child = defineComponent({
        setup() {
          return () => h('div', getInjectNearest<string>('area'))
        }
      })

      const NullMiddle = defineComponent({
        setup() {
          provide('area', null)
          return () => h(Child)
        }
      })

      const RefUndefinedMiddle = defineComponent({
        setup() {
          provide('area', emptyRef)
          return () => h(NullMiddle)
        }
      })

      const Outer = defineComponent({
        setup() {
          provide('area', 'outer-area')
          return () => h(RefUndefinedMiddle)
        }
      })

      const app = createApp(Outer)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(host.textContent).toBe('outer-area')
    })

    it('reactively switches between parent and higher ancestor when closer ref toggles', async () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const outerArea = ref<string | undefined>('outer-1')
      const middleArea = ref<string | undefined>(undefined)

      const Child = defineComponent({
        setup() {
          return () => h('div', getInjectNearest<string>('area') ?? 'none')
        }
      })

      const Middle = defineComponent({
        setup() {
          provide('area', middleArea)
          return () => h(Child)
        }
      })

      const Outer = defineComponent({
        setup() {
          provide('area', outerArea)
          return () => h(Middle)
        }
      })

      const app = createApp(Outer)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(host.textContent).toBe('outer-1')

      outerArea.value = 'outer-2'
      await nextTick()
      expect(host.textContent).toBe('outer-2')

      middleArea.value = 'middle'
      await nextTick()
      expect(host.textContent).toBe('middle')

      middleArea.value = undefined
      await nextTick()
      expect(host.textContent).toBe('outer-2')
    })

    it('falls back to app-level provide when intermediate components provide nullish refs', () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const Child = defineComponent({
        setup() {
          return () => h('div', getInjectNearest<string>('area'))
        }
      })

      const Root = defineComponent({
        setup() {
          provide('area', ref<string | undefined>(undefined))
          return () => h(Child)
        }
      })

      const app = createApp(Root)
      app.provide('area', 'app-area')
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(host.textContent).toBe('app-area')
    })

    it('ignores provides registered on the current component itself', () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      let beforeProvide: string | undefined
      let afterProvide: string | undefined

      const Child = defineComponent({
        setup() {
          beforeProvide = getInjectNearest<string>('area')
          provide('area', 'self-area')
          afterProvide = getInjectNearest<string>('area')
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          provide('area', 'parent-area')
          return () => h(Child)
        }
      })

      const app = createApp(Parent)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(beforeProvide).toBe('parent-area')
      expect(afterProvide).toBe('parent-area')
    })
  })

  describe('Falsy values, refs, and defaults', () => {
    it.each([
      { label: 'zero', value: 0 },
      { label: 'false', value: false },
      { label: 'empty string', value: '' },
      { label: 'NaN', value: NaN }
    ])('stops at nearest falsy $label instead of falling through to outer value', ({ value }) => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      let resolved: unknown

      const Child = defineComponent({
        setup() {
          resolved = getInjectNearest('key', 'fallback')
          return () => h('div')
        }
      })

      const Middle = defineComponent({
        setup() {
          provide('key', ref(value))
          return () => h(Child)
        }
      })

      const Outer = defineComponent({
        setup() {
          provide('key', 'outer')
          return () => h(Middle)
        }
      })

      const app = createApp(Outer)
      app.mount(host)
      cleanups.push(() => app.unmount())

      if (Number.isNaN(value)) {
        expect(Number.isNaN(resolved)).toBe(true)
      } else {
        expect(resolved).toBe(value)
      }
    })

    it('unwraps ComputedRef values', async () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const source = ref<string | undefined>('initial')

      const Child = defineComponent({
        setup() {
          return () => h('div', getInjectNearest<string>('area') ?? 'default')
        }
      })

      const Middle = defineComponent({
        setup() {
          provide('area', computed(() => source.value))
          return () => h(Child)
        }
      })

      const Outer = defineComponent({
        setup() {
          provide('area', 'fallback-outer')
          return () => h(Middle)
        }
      })

      const app = createApp(Outer)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(host.textContent).toBe('initial')

      source.value = undefined
      await nextTick()
      expect(host.textContent).toBe('fallback-outer')
    })

    it('supports app.runWithContext and fallback defaultValue', () => {
      const app = createApp({})
      app.provide('theme', ref('light'))

      expect(app.runWithContext(() => getInjectNearest<string>('theme'))).toBe('light')
      expect(app.runWithContext(() => getInjectNearest('missing', 'dark'))).toBe('dark')
      expect(app.runWithContext(() => getInjectNearest('missing-fn', () => 42))).toBe(42)
    })

    it('returns defaultValue outside injection context without warning', () => {
      expect(getInjectNearest('missing')).toBeUndefined()
      expect(getInjectNearest('missing', 'fallback')).toBe('fallback')
      expect(getInjectNearest('missing-fn', () => 99)).toBe(99)
    })
  })

  describe('InjectionKey typing', () => {
    const plainKey: InjectionKey<string> = Symbol('plain')
    const refKey: InjectionKey<Ref<string | undefined>> = Symbol('ref')

    it('infers unwrapped types for InjectionKey<T> and InjectionKey<Ref<T>>', () => {
      const app = createApp({})
      app.provide(plainKey, 'hello')
      app.provide(refKey, ref('world'))

      const plainResult = app.runWithContext(() => getInjectNearest(plainKey))
      const refResult = app.runWithContext(() => getInjectNearest(refKey, 'fallback'))

      expectTypeOf(plainResult).toEqualTypeOf<string | undefined>()
      expectTypeOf(refResult).toEqualTypeOf<string>()
      expect(plainResult).toBe('hello')
      expect(refResult).toBe('world')
    })

    it('walks multi-level component ancestors for Symbol InjectionKey and renders identically in SSR', async () => {
      const symbolKey: InjectionKey<Ref<string | undefined>> = Symbol('nearest-area')

      const Child = defineComponent({
        setup() {
          return () => h('span', getInjectNearest(symbolKey, 'fallback'))
        }
      })

      const Middle = defineComponent({
        setup() {
          provide(symbolKey, ref<string | undefined>(undefined))
          return () => h(Child)
        }
      })

      const Outer = defineComponent({
        setup() {
          provide(symbolKey, ref('ssr-outer'))
          return () => h(Middle)
        }
      })

      const markup = await renderToString(createSSRApp(Outer))
      expect(markup).toBe('<span>ssr-outer</span>')
    })
  })
})
