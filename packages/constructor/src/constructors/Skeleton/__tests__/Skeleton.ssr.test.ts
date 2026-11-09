// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive, type VNodeChild } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { IconDesign, type IconClasses, type IconComponents, type IconExpose, type IconProps } from '../../Icon'
import { SkeletonDesign } from '../SkeletonDesign'
import { SkeletonInclude } from '../SkeletonInclude'
import { defaultsSkeleton, type SkeletonProps } from '../props'
import type { SkeletonClassesList } from '../basicTypes'
import type { SkeletonClasses, SkeletonComponents, SkeletonExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders the complete SkeletonDesign component in a server-side Node environment without browser globals.
 *
 * Рендерит полный компонент SkeletonDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slotBuilder optional default slot builder / необязательный построитель слота по умолчанию
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderSkeletonSsr(
  properties: SkeletonProps = {},
  slotBuilder?: (slotProps: SkeletonClassesList) => VNodeChild
): Promise<string> {
  const props = reactive<SkeletonProps>({
    ...defaultsSkeleton,
    ...properties
  })

  const SkeletonComponent = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-skeleton': true,
          'd1-skeleton--active': Boolean(props.active)
        }
      }))

      const design = new SkeletonDesign<
        SkeletonComponents,
        SkeletonExpose,
        SkeletonClasses,
        SkeletonProps
      >('d1.skeleton', props, {
        classes: classesToken
      })

      return design.render()
    }
  })

  const RootComponent = defineComponent({
    setup() {
      return () => h(
        SkeletonComponent,
        null,
        slotBuilder ? { default: slotBuilder } : undefined
      )
    }
  })

  return renderToString(createSSRApp(RootComponent))
}

describe('Skeleton (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render inactive Skeleton in SSR without accessing browser globals', async () => {
      const html = await renderSkeletonSsr(
        { active: false },
        slotProps => [
          h('h2', { class: slotProps.classText }, 'Server Title'),
          h('p', { class: slotProps.classTextVariant }, 'Server Description'),
          h('div', { class: slotProps.classBackground }, 'Avatar')
        ]
      )

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toContain('class="d1-skeleton"')
      expect(html).toContain('aria-busy="false"')
      expect(html).toContain('aria-live="polite"')
      expect(html).not.toContain('d1-skeleton--active')
      expect(html).not.toContain('d1-skeleton--visible')
      expect(html).not.toContain('d1-skeleton--invisible')
      expect(html).toContain('<h2 class="d1-skeleton__text">Server Title</h2>')
      expect(html).toContain('<p class="d1-skeleton__textVariant">Server Description</p>')
      expect(html).toContain('<div class="d1-skeleton__background">Avatar</div>')
    })

    it('should render active Skeleton with visible and invisible classes in SSR when delay is 0', async () => {
      const html = await renderSkeletonSsr(
        { active: true, delay: 0, invisible: true },
        slotProps => h('span', { class: slotProps.classBorder }, 'Bordered Content')
      )

      expect(html).toContain('d1-skeleton')
      expect(html).toContain('d1-skeleton--active')
      expect(html).toContain('d1-skeleton--visible')
      expect(html).toContain('d1-skeleton--invisible')
      expect(html).toContain('aria-busy="true"')
      expect(html).toContain('aria-live="polite"')
      expect(html).toContain('<span class="d1-skeleton__border">Bordered Content</span>')
    })

    it('should omit d1-skeleton--invisible in SSR when active is true and invisible is false', async () => {
      const html = await renderSkeletonSsr({
        active: true,
        delay: 0,
        invisible: false
      })

      expect(html).toContain('d1-skeleton--active')
      expect(html).toContain('d1-skeleton--visible')
      expect(html).not.toContain('d1-skeleton--invisible')
      expect(html).toContain('aria-busy="true"')
    })

    it('should defer d1-skeleton--visible in SSR when active is true and delay > 0 without starting server timers', async () => {
      const html = await renderSkeletonSsr({
        active: true,
        delay: 300,
        invisible: true
      })

      expect(html).toContain('d1-skeleton--active')
      expect(html).toContain('d1-skeleton--invisible')
      expect(html).not.toContain('d1-skeleton--visible')
      expect(html).toContain('aria-busy="true"')
    })
  })

  describe('Cascading provide/inject and child SkeletonInclude in SSR', () => {
    it('should propagate active visible status to nested SkeletonDesign and child SkeletonInclude / IconDesign during SSR', async () => {
      let ssrIncludeStatus: boolean | undefined

      const ChildIcon = defineComponent({
        setup() {
          const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
            'd1.icon',
            { icon: 'home', isSkeleton: true }
          )
          return design.render()
        }
      })

      const ChildCustomItem = defineComponent({
        setup() {
          const include = new SkeletonInclude(
            { isSkeleton: true },
            new DesignName('d1.button'),
            ['classText', 'classBackground']
          )
          ssrIncludeStatus = include.isSkeleton()

          return () => h(
            'button',
            {
              'class': include.classes,
              'data-ssr-skeleton': String(include.isSkeleton())
            },
            'Action'
          )
        }
      })

      const NestedSkeleton = defineComponent({
        setup() {
          const nestedProps = reactive<SkeletonProps>({
            ...defaultsSkeleton,
            active: false,
            delay: 0
          })
          const design = new SkeletonDesign<
            SkeletonComponents,
            SkeletonExpose,
            SkeletonClasses,
            SkeletonProps
          >('d1.skeleton', nestedProps, {
            classes: computed(() => ({ main: { 'nested-skeleton': true } }))
          })
          return design.render()
        }
      })

      const html = await renderSkeletonSsr(
        { active: true, delay: 0 },
        () => [
          h(NestedSkeleton, null, {
            default: () => [
              h(ChildIcon),
              h(ChildCustomItem)
            ]
          })
        ]
      )

      expect(ssrIncludeStatus).toBe(true)
      expect(html).toContain('class="d1-skeleton--active d1-skeleton--visible d1-skeleton--invisible nested-skeleton" style="" inert aria-busy="true" aria-live="polite"')
      expect(html).toContain('class="d1-skeleton__backgroundVariant"')
      expect(html).toContain('class="d1-skeleton__text d1-skeleton__background"')
      expect(html).toContain('data-ssr-skeleton="true"')
    })

    it('should keep nested Skeleton and child SkeletonInclude inactive in SSR when parent delay > 0', async () => {
      let ssrIncludeStatus: boolean | undefined

      const ChildCustomItem = defineComponent({
        setup() {
          const include = new SkeletonInclude(
            { isSkeleton: true },
            new DesignName('d1.button'),
            ['classBackground']
          )
          ssrIncludeStatus = include.isSkeleton()

          return () => h('button', { 'data-ssr-skeleton': String(include.isSkeleton()) }, 'Action')
        }
      })

      const html = await renderSkeletonSsr(
        { active: true, delay: 250 },
        () => [h(ChildCustomItem)]
      )

      expect(ssrIncludeStatus).toBe(false)
      expect(html).toContain('data-ssr-skeleton="false"')
    })
  })

  describe('Empty, multilingual, and concurrent SSR request isolation', () => {
    it('should render empty server markup when default slot is omitted', async () => {
      const html = await renderSkeletonSsr({})

      expect(html).toBe('<div class="d1-skeleton" style="" aria-busy="false" aria-live="polite"></div>')
    })

    it('should preserve Unicode and multilingual content in SSR', async () => {
      const html = await renderSkeletonSsr(
        { active: true },
        slotProps => [
          h('h3', { class: slotProps.classText }, 'Привет Мир'),
          h('p', { class: slotProps.classTextVariant }, 'Học tiếng Việt 🇻🇳 — 你好 世界 🚀')
        ]
      )

      expect(html).toContain('<h3 class="d1-skeleton__text">Привет Мир</h3>')
      expect(html).toContain('<p class="d1-skeleton__textVariant">Học tiếng Việt 🇻🇳 — 你好 世界 🚀</p>')
    })

    it('should isolate state across concurrent SSR requests without cross-request leakage', async () => {
      const [activeHtml, inactiveHtml] = await Promise.all([
        renderSkeletonSsr(
          { active: true, delay: 0 },
          slotProps => h('span', { class: slotProps.classText }, 'Active Request')
        ),
        renderSkeletonSsr(
          { active: false, delay: 0 },
          slotProps => h('span', { class: slotProps.classText }, 'Inactive Request')
        )
      ])

      expect(activeHtml).toContain('d1-skeleton--visible')
      expect(activeHtml).toContain('aria-busy="true"')
      expect(activeHtml).toContain('Active Request')

      expect(inactiveHtml).not.toContain('d1-skeleton--visible')
      expect(inactiveHtml).toContain('aria-busy="false"')
      expect(inactiveHtml).toContain('Inactive Request')
    })
  })
})
