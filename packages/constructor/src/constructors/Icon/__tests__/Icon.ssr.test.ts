// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive, type VNodeChild } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  DesignComponents,
  DesignName,
  inArray,
  ServerStorage
} from '@dxtmisha/functional'

import { IconDesign } from '../IconDesign'
import { IconLiteInclude } from '../IconLiteInclude'
import { IconInclude } from '../IconInclude'
import { IconTrailingInclude } from '../IconTrailingInclude'
import { defaultsIcon, type IconProps } from '../props'
import type {
  IconComponentInclude,
  IconTrailingPropsInclude
} from '../basicTypes'
import type { IconClasses, IconComponents, IconExpose } from '../types'
import {
  ImageDesign,
  type ImageClasses,
  type ImageComponents,
  type ImageExpose,
  type ImageProps
} from '../../Image'
import {
  SkeletonDesign,
  defaultsSkeleton,
  type SkeletonClasses,
  type SkeletonComponents,
  type SkeletonExpose,
  type SkeletonProps
} from '../../Skeleton'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Real SSR Image component powered by ImageDesign for authentic server-side Icon rendering.
 *
 * Реальный SSR-компонент Image на базе ImageDesign для аутентичного серверного рендеринга Icon.
 */
const RealSsrImage = defineComponent({
  name: 'RealSsrImage',
  props: [
    'value',
    'turn',
    'disabled',
    'hide',
    'alt',
    'lazy',
    'adaptive',
    'tagImg'
  ],
  setup(componentProps) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-image': true,
        'd1-image--turn': Boolean(componentProps.turn),
        'd1-image--disabled': Boolean(componentProps.disabled),
        'd1-image--hide': Boolean(componentProps.hide)
      }
    }))

    const design = new ImageDesign<
      ImageComponents,
      ImageExpose,
      ImageClasses,
      ImageProps
    >(
      'd1.image',
      componentProps as ImageProps,
      {
        classes: classesToken
      }
    )

    return design.render()
  }
})

/**
 * Renders the complete IconDesign component in a server-side Node environment without browser globals.
 *
 * Рендерит полный компонент IconDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slotBuilder optional default slot builder / необязательный построитель слота по умолчанию
 * @param rootAttrs optional fallthrough attributes / необязательные пробрасываемые атрибуты
 * @returns rendered HTML string / отрендеренная HTML-строка
 */
async function renderIconSsr(
  properties: IconProps,
  slotBuilder?: () => VNodeChild,
  rootAttrs?: Record<string, unknown>
): Promise<string> {
  const props = reactive<Record<string, unknown>>({
    ...(defaultsIcon as IconProps),
    ...properties
  }) as IconProps

  const InnerComponent = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-icon': true,
          'd1-icon--turn': Boolean(props.turn),
          'd1-icon--disabled': Boolean(props.disabled),
          'd1-icon--hide': Boolean(props.hide),
          'd1-icon--asPalette': Boolean(props.asPalette),
          'd1-icon--dir': Boolean(props.dir),
          'd1-icon--overlay': Boolean(props.overlay),
          'd1-icon--dynamic': Boolean(props.dynamic),
          'd1-icon--start': Boolean(props.start),
          'd1-icon--end': Boolean(props.end),
          'd1-icon--high': Boolean(props.high),
          [`d1-icon--animationType--${props.animationType}`]: inArray(
            ['type1', 'type2'],
            props.animationType
          ),
          'd1-icon--animationShow': Boolean(props.animationShow)
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--d1-icon-ssr': '1'
      }))

      const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
        'd1.icon',
        props,
        {
          components: {
            image: RealSsrImage
          },
          classes: classesToken,
          styles: stylesToken
        }
      )

      return design.render()
    }
  })

  const RootComponent = defineComponent({
    setup() {
      return () => h(
        InnerComponent,
        rootAttrs ?? null,
        slotBuilder ? { default: slotBuilder } : undefined
      )
    }
  })

  return renderToString(createSSRApp(RootComponent))
}

describe('Icon (SSR)', () => {
  it.each([
    { href: 'https://example.com' },
    { to: '/settings' },
    { to: { name: 'settings' } }
  ])('should render an anchor for navigation properties %j on the server', async (properties) => {
    const html = await renderIconSsr({ icon: 'settings', ...properties })

    expect(html).toMatch(/^<a[\s>]/)
    expect(html).toMatch(/<\/a>$/)
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should render a static decorative icon with aria-hidden="true", token classes, and real Image output without accessing browser globals', async () => {
      const html = await renderIconSsr(
        {
          icon: 'filled-home',
          ariaLabel: 'Ignored static label',
          role: 'img',
          asPalette: true,
          dir: true,
          overlay: true
        },
        undefined,
        {
          'id': 'ssr-home-icon',
          'data-testid': 'ssr-icon'
        }
      )

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      const rootOpeningTag = html.match(/^<span[^>]*>/)?.[0] ?? ''
      expect(rootOpeningTag).toContain('id="ssr-home-icon"')
      expect(rootOpeningTag).toContain('data-testid="ssr-icon"')
      expect(rootOpeningTag).toContain('aria-hidden="true"')
      expect(rootOpeningTag).not.toContain('aria-label=')
      expect(rootOpeningTag).not.toContain('role=')
      expect(rootOpeningTag).not.toContain('tabindex=')
      expect(rootOpeningTag).toContain('d1-icon')
      expect(rootOpeningTag).toContain('d1-icon--asPalette')
      expect(rootOpeningTag).toContain('d1-icon--dir')
      expect(rootOpeningTag).toContain('d1-icon--overlay')
      expect(rootOpeningTag).toContain('d1-icon--animationType--type1')
      expect(rootOpeningTag).toContain('--d1-icon-ssr:1')
      expect(html).toContain('d1-icon__icon')
      expect(html).toContain('material-icons')
      expect(html).toContain('>home</span>')
    })

    it('should render both main and active icons and toggle d1-image--hide based on active state in SSR', async () => {
      const inactiveHtml = await renderIconSsr({
        icon: 'filled-favorite_border',
        iconActive: 'outlined-favorite',
        active: false,
        turn: true
      })

      expect(inactiveHtml).toContain('d1-icon--turn')
      expect(inactiveHtml).toContain('d1-image d1-image--turn d1-icon__icon')
      expect(inactiveHtml).toContain('>favorite_border</span>')
      expect(inactiveHtml).toContain('d1-image d1-image--turn d1-image--hide d1-icon__iconActive')
      expect(inactiveHtml).toContain('>favorite</span>')

      const activeHtml = await renderIconSsr({
        icon: 'filled-favorite_border',
        iconActive: 'outlined-favorite',
        active: true
      })

      expect(activeHtml).toContain('d1-image d1-image--hide d1-icon__icon')
      expect(activeHtml).toContain('d1-image d1-icon__iconActive')
    })

    it('should support object ImageProps bindings for icon and iconActive (including native img tagImg and compressed flags) in SSR', async () => {
      const html = await renderIconSsr({
        icon: {
          value: 'image:/icons/logo.svg',
          tagImg: true,
          alt: 'Brand Logo'
        },
        iconActive: 'f-vn',
        active: true
      })

      expect(html).toContain('<img src="/icons/logo.svg" alt="Brand Logo"')
      expect(html).toContain('d1-icon__icon')
      expect(html).toContain('d1-image--hide')
      expect(html).toContain('ui-sys-flags--VN')
    })

    it('should render interactive ARIA attributes, role, tabindex, and href when dynamic is true in SSR', async () => {
      const html = await renderIconSsr({
        icon: 'close',
        dynamic: true,
        ariaLabel: 'Close dialog',
        tabindex: 0,
        href: 'https://example.com/help'
      })

      const rootOpeningTag = html.match(/^<a[^>]*>/)?.[0] ?? ''
      expect(rootOpeningTag).toContain('d1-icon--dynamic')
      expect(rootOpeningTag).toContain('role="button"')
      expect(rootOpeningTag).toContain('aria-label="Close dialog"')
      expect(rootOpeningTag).toContain('tabindex="0"')
      expect(rootOpeningTag).toContain('href="https://example.com/help"')
      expect(rootOpeningTag).not.toContain('aria-hidden=')
    })

    it.each([
      [0, 'tabindex="0"'],
      [-1, 'tabindex="-1"'],
      ['-1', 'tabindex="-1"'],
      [3, 'tabindex="3"']
    ])('should preserve explicit tabindex=%j in dynamic SSR mode', async (tabindex, expectedAttr) => {
      const html = await renderIconSsr({
        icon: 'search',
        dynamic: true,
        tabindex
      })

      expect(html).toContain(expectedAttr)
    })

    it('should render aria-disabled="true" and omit tabindex when dynamic and disabled in SSR', async () => {
      const html = await renderIconSsr({
        icon: 'close',
        dynamic: true,
        disabled: true,
        ariaLabel: 'Close dialog',
        tabindex: 2
      })

      expect(html).toContain('d1-icon--disabled')
      expect(html).toContain('role="button"')
      expect(html).toContain('aria-disabled="true"')
      expect(html).not.toContain('tabindex=')
    })

    it('should render default slot content alongside icon nodes in SSR', async () => {
      const html = await renderIconSsr(
        { icon: 'star' },
        () => h('em', { class: 'slot-content' }, 'Badge slot')
      )

      expect(html).toContain('<em class="slot-content">Badge slot</em>')
      expect(html).toContain('>star</span>')
    })
  })

  describe('Skeleton integration and Include helpers in SSR', () => {
    it('should apply d1-skeleton__backgroundVariant in SSR when isSkeleton is true inside an active SkeletonDesign', async () => {
      const ChildIcon = defineComponent({
        setup() {
          const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
            'd1.icon',
            {
              icon: 'star',
              isSkeleton: true
            },
            {
              components: { image: RealSsrImage },
              classes: computed(() => ({ main: { 'd1-icon': true } }))
            }
          )
          return design.render()
        }
      })

      const RootSkeleton = defineComponent({
        setup() {
          const skeletonProps = reactive<SkeletonProps>({
            ...defaultsSkeleton,
            active: true,
            delay: 0
          })
          const design = new SkeletonDesign<
            SkeletonComponents,
            SkeletonExpose,
            SkeletonClasses,
            SkeletonProps
          >('d1.skeleton', skeletonProps, {
            classes: computed(() => ({ main: { 'd1-skeleton': true } }))
          })
          return design.render()
        }
      })

      const html = await renderToString(createSSRApp({
        setup() {
          return () => h(RootSkeleton, null, {
            default: () => [h(ChildIcon)]
          })
        }
      }))

      expect(html).toContain('d1-skeleton--visible')
      expect(html).toContain('class="d1-skeleton__backgroundVariant d1-icon"')
    })

    it('should render embedded icons via IconLiteInclude, IconInclude, and IconTrailingInclude in SSR', async () => {
      const EmbeddedSsrIcon = defineComponent({
        props: ['icon', 'turn', 'dir', 'start', 'end', 'high', 'asPalette', 'animationType'],
        setup(componentProps) {
          const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
            'd1.icon',
            componentProps as IconProps,
            {
              components: { image: RealSsrImage },
              classes: computed(() => ({
                main: {
                  'd1-icon': true,
                  'd1-icon--turn': Boolean(componentProps.turn),
                  'd1-icon--dir': Boolean(componentProps.dir),
                  'd1-icon--start': Boolean(componentProps.start),
                  'd1-icon--end': Boolean(componentProps.end),
                  'd1-icon--high': Boolean(componentProps.high)
                }
              }))
            }
          )
          return design.render()
        }
      })

      const HostButtonSsr = defineComponent({
        setup() {
          const props = reactive<Record<string, unknown>>({
            icon: 'person',
            iconTrailing: 'expand_more',
            iconTurn: true,
            iconDir: true
          }) as IconTrailingPropsInclude
          const components = new DesignComponents<IconComponentInclude, IconTrailingPropsInclude>(
            { icon: EmbeddedSsrIcon },
            props
          )
          const trailingInclude = new IconTrailingInclude(
            props,
            new DesignName('d1.button'),
            components
          )
          const liteInclude = new IconLiteInclude(
            { icon: 'info' },
            new DesignName('d1.alert'),
            components
          )
          const standardInclude = new IconInclude(
            { icon: 'check', iconTurn: true },
            new DesignName('d1.chip'),
            components
          )

          return () => h('div', { class: 'ssr-button-host' }, [
            ...trailingInclude.render(),
            ...liteInclude.renderIcon(),
            ...standardInclude.renderIcon()
          ])
        }
      })

      const html = await renderToString(createSSRApp(HostButtonSsr))

      expect(html).toContain('d1-button__icon')
      expect(html).toContain('data-event-type="icon"')
      expect(html).toContain('d1-button__trailing')
      expect(html).toContain('data-event-type="icon-trailing"')
      expect(html).toContain('d1-alert__icon')
      expect(html).toContain('d1-chip__icon')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it.each([undefined, null, ''])('should render empty server markup for icon=%j without throwing', async (icon) => {
      const html = await renderIconSsr({ icon })

      expect(html).toContain('<span')
      expect(html).toContain('aria-hidden="true"')
      expect(html).not.toContain('d1-icon__icon')
    })
  })

  describe('Metacharacters, escaping, Unicode, and concurrent SSR isolation', () => {
    it('should preserve Unicode ariaLabel and icon values and escape HTML/XSS payloads safely in SSR', async () => {
      const html = await renderIconSsr({
        icon: '$иконка_дом',
        dynamic: true,
        ariaLabel: 'Biểu tượng 🇻🇳 "><script>alert(1)</script>'
      })

      expect(html).toContain('иконка_дом')
      expect(html).toContain('aria-label="Biểu tượng 🇻🇳 &quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;"')
      expect(html).not.toContain('<script>alert(1)</script>')
    })

    it('should isolate state across concurrent SSR requests without cross-request leakage', async () => {
      const [staticHtml, dynamicHtml] = await Promise.all([
        renderIconSsr({
          icon: 'home',
          dynamic: false
        }),
        renderIconSsr({
          icon: 'settings',
          dynamic: true,
          ariaLabel: 'Open settings',
          disabled: true
        })
      ])

      const staticRootTag = staticHtml.match(/^<span[^>]*>/)?.[0] ?? ''
      expect(staticRootTag).toContain('aria-hidden="true"')
      expect(staticRootTag).not.toContain('role="button"')
      expect(staticHtml).toContain('>home</span>')

      const dynamicRootTag = dynamicHtml.match(/^<span[^>]*>/)?.[0] ?? ''
      expect(dynamicRootTag).toContain('role="button"')
      expect(dynamicRootTag).toContain('aria-label="Open settings"')
      expect(dynamicRootTag).toContain('aria-disabled="true"')
      expect(dynamicRootTag).not.toContain('aria-hidden=')
      expect(dynamicHtml).toContain('>settings</span>')
    })
  })
})
