// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, createSSRApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { AreaInclude } from '../AreaInclude'
import { getAreaValue } from '../../functions/getAreaValue'
import { setAreaValue } from '../../functions/setAreaValue'
import type { AreaPropsInclude } from '../../types/areaTypes'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []
/** Unexpected console warnings / Неожиданные предупреждения консоли */
let warnings: unknown[][] = []
/** Unexpected console errors / Неожиданные ошибки консоли */
let errors: unknown[][] = []

/**
 * Helper to mount a Vue component tree onto a detached host registered for cleanup.
 *
 * Вспомогательная функция для монтирования дерева компонентов Vue с автоматической очисткой.
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

describe('AreaInclude', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should satisfy constructor parameter and instance type contracts', () => {
      expectTypeOf<ConstructorParameters<typeof AreaInclude>>().toEqualTypeOf<[Readonly<AreaPropsInclude>]>()
      expectTypeOf<InstanceType<typeof AreaInclude>>().toEqualTypeOf<AreaInclude>()
    })

    it('should provide initial props.area value to descendant components during setup', () => {
      let resolvedArea: string | undefined

      const ChildComponent = defineComponent({
        setup() {
          resolvedArea = getAreaValue()
          return () => h('div', resolvedArea)
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          const props = reactive<AreaPropsInclude>({ area: 'header' })
          new AreaInclude(props)
          return () => h(ChildComponent)
        }
      })

      const { host } = mountTestApp(ParentComponent)

      expect(resolvedArea).toBe('header')
      expect(host.textContent).toBe('header')
    })

    it('should reactively update provided area value across the full lifecycle', async () => {
      const props = reactive<AreaPropsInclude>({ area: 'initial-area' })

      const ChildComponent = defineComponent({
        setup() {
          return () => h('span', getAreaValue() ?? 'none')
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          new AreaInclude(props)
          return () => h(ChildComponent)
        }
      })

      const { host } = mountTestApp(ParentComponent)
      expect(host.textContent).toBe('initial-area')

      props.area = 'updated-area'
      await nextTick()
      expect(host.textContent).toBe('updated-area')

      props.area = undefined
      await nextTick()
      expect(host.textContent).toBe('none')

      props.area = 'restored-area'
      await nextTick()
      expect(host.textContent).toBe('restored-area')
    })

    it('should provide reactive updates when props.area starts undefined and is assigned later', async () => {
      const props = reactive<AreaPropsInclude>({})

      const ChildComponent = defineComponent({
        setup() {
          return () => h('div', getAreaValue() ?? 'unset')
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          new AreaInclude(props)
          return () => h(ChildComponent)
        }
      })

      const { host } = mountTestApp(ParentComponent)
      expect(host.textContent).toBe('unset')

      props.area = 'late-area'
      await nextTick()
      expect(host.textContent).toBe('late-area')
    })
  })

  describe('Boundary values, ancestor fallback, and instance isolation', () => {
    it('should preserve ancestor fallback when nested props.area is undefined and override once defined', async () => {
      const innerProps = reactive<AreaPropsInclude>({})

      const DeepChild = defineComponent({
        setup() {
          return () => h('span', getAreaValue() ?? 'none')
        }
      })

      const MiddleComponent = defineComponent({
        setup() {
          new AreaInclude(innerProps)
          return () => h(DeepChild)
        }
      })

      const RootComponent = defineComponent({
        setup() {
          setAreaValue(ref('outer-area'))
          return () => h(MiddleComponent)
        }
      })

      const { host } = mountTestApp(RootComponent)
      expect(host.textContent).toBe('outer-area')

      innerProps.area = 'inner-area'
      await nextTick()
      expect(host.textContent).toBe('inner-area')

      innerProps.area = undefined
      await nextTick()
      expect(host.textContent).toBe('outer-area')
    })

    it('should handle empty string and plain minimal object with omitted area key', () => {
      let emptyResolved: string | undefined = 'preset'
      let omittedResolved: string | undefined = 'preset'

      const makeChild = (assign: (value: string | undefined) => void) => defineComponent({
        setup() {
          assign(getAreaValue())
          return () => h('div')
        }
      })

      const EmptyBranch = defineComponent({
        setup() {
          new AreaInclude({ area: '' })
          return () => h(makeChild((value) => {
            emptyResolved = value
          }))
        }
      })

      const OmittedBranch = defineComponent({
        setup() {
          new AreaInclude({})
          return () => h(makeChild((value) => {
            omittedResolved = value
          }))
        }
      })

      const Root = defineComponent({
        setup() {
          return () => [h(EmptyBranch), h(OmittedBranch)]
        }
      })

      mountTestApp(Root)

      expect(emptyResolved).toBe('')
      expect(omittedResolved).toBeUndefined()
    })

    it('should isolate state across separate AreaInclude instances in sibling branches', async () => {
      const leftProps = reactive<AreaPropsInclude>({ area: 'left' })
      const rightProps = reactive<AreaPropsInclude>({ area: 'right' })

      const ChildViewer = (props: AreaPropsInclude, testId: string) => defineComponent({
        setup() {
          new AreaInclude(props)
          return () => h(defineComponent({
            setup() {
              return () => h('div', { 'data-branch': testId }, getAreaValue() ?? 'none')
            }
          }))
        }
      })

      const Root = defineComponent({
        setup() {
          return () => [
            h(ChildViewer(leftProps, 'left')),
            h(ChildViewer(rightProps, 'right'))
          ]
        }
      })

      const { host } = mountTestApp(Root)

      expect(host.querySelector('[data-branch="left"]')?.textContent).toBe('left')
      expect(host.querySelector('[data-branch="right"]')?.textContent).toBe('right')

      leftProps.area = 'left-updated'
      await nextTick()

      expect(host.querySelector('[data-branch="left"]')?.textContent).toBe('left-updated')
      expect(host.querySelector('[data-branch="right"]')?.textContent).toBe('right')
    })
  })

  describe('Multilingual and Unicode values', () => {
    it.each([
      'область',
      'Khu vực',
      '区域',
      '🚀'
    ])('should propagate Unicode area value %s cleanly', (areaValue) => {
      let resolved: string | undefined

      const ChildComponent = defineComponent({
        setup() {
          resolved = getAreaValue()
          return () => h('div')
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          new AreaInclude({ area: areaValue })
          return () => h(ChildComponent)
        }
      })

      mountTestApp(ParentComponent)
      expect(resolved).toBe(areaValue)
    })
  })

  describe('Lifecycle, outside-setup resilience, and SSR isomorphism', () => {
    it('should not throw when instantiated outside setup() while emitting Vue context warning', () => {
      const props = reactive<AreaPropsInclude>({ area: 'outside' })
      let instance: AreaInclude | undefined
      expect(() => {
        instance = new AreaInclude(props)
      }).not.toThrow()
      expect(warnings.length).toBeGreaterThan(0)
      warnings = []
      instance?.destroy()
    })

    it('should stop reacting to props.area updates when destroy() is called manually', async () => {
      const props = reactive<AreaPropsInclude>({ area: 'initial' })
      let areaInstance: AreaInclude | undefined

      const ChildComponent = defineComponent({
        setup() {
          return () => h('span', getAreaValue() ?? 'none')
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          areaInstance = new AreaInclude(props)
          return () => h(ChildComponent)
        }
      })

      const { host } = mountTestApp(ParentComponent)
      expect(host.textContent).toBe('initial')

      areaInstance?.destroy()
      expect(() => areaInstance?.destroy()).not.toThrow()

      props.area = 'after-destroy'
      await nextTick()

      expect(host.textContent).toBe('initial')
    })

    it('should stop reacting to props.area updates after component unmount', async () => {
      const props = reactive<AreaPropsInclude>({ area: 'mounted' })
      let renderCount = 0

      const ChildComponent = defineComponent({
        setup() {
          return () => {
            renderCount += 1
            return h('span', getAreaValue() ?? 'none')
          }
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          new AreaInclude(props)
          return () => h(ChildComponent)
        }
      })

      const { app } = mountTestApp(ParentComponent)
      expect(renderCount).toBe(1)

      app.unmount()
      props.area = 'after-unmount'
      await nextTick()

      expect(renderCount).toBe(1)
    })

    it('should isolate AreaInclude context across concurrent SSR renders', async () => {
      const makeSsrRoot = (area: string) => defineComponent({
        setup() {
          new AreaInclude({ area })
          return () => h(defineComponent({
            setup() {
              return () => h('section', getAreaValue() ?? 'none')
            }
          }))
        }
      })

      const [htmlOne, htmlTwo] = await Promise.all([
        renderToString(createSSRApp(makeSsrRoot('ssr-alpha'))),
        renderToString(createSSRApp(makeSsrRoot('ssr-beta')))
      ])

      expect(htmlOne).toBe('<section>ssr-alpha</section>')
      expect(htmlTwo).toBe('<section>ssr-beta</section>')
    })
  })
})
