// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { IconDesign } from '../IconDesign'
import type { IconProps } from '../props'
import type { IconClasses, IconComponents, IconExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Stub Image component for SSR verification.
 *
 * Заглушка компонента Image для проверки SSR.
 */
const StubImage = defineComponent({
  name: 'StubImage',
  props: {
    value: { type: String, default: '' },
    turn: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    hide: { type: Boolean, default: false }
  },
  setup(componentProps) {
    return () => h('span', {
      'data-value': componentProps.value,
      'data-turn': String(componentProps.turn),
      'data-disabled': String(componentProps.disabled),
      'data-hide': String(componentProps.hide)
    }, componentProps.value)
  }
})

/**
 * Renders the IconDesign component in a server-side Node environment without browser globals.
 *
 * Рендерит компонент IconDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slotText optional default slot text / необязательный текст слота по умолчанию
 * @returns rendered HTML string / отрендеренная HTML-строка
 */
async function renderIconSsr(
  properties: IconProps,
  slotText?: string
): Promise<string> {
  const props = reactive<IconProps>({ ...properties })

  const InnerComponent = defineComponent({
    setup() {
      const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
        'd1.icon',
        props,
        {
          components: {
            image: StubImage
          }
        }
      )

      return design.render()
    }
  })

  const RootComponent = defineComponent({
    setup() {
      return () => h(
        InnerComponent,
        null,
        slotText ? { default: () => h('em', { class: 'slot-content' }, slotText) } : undefined
      )
    }
  })

  return renderToString(createSSRApp(RootComponent))
}

describe('Icon (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render a static decorative icon with aria-hidden="true" without accessing browser globals', async () => {
      const html = await renderIconSsr({
        icon: 'home',
        ariaLabel: 'Ignored static label',
        role: 'img'
      })

      expect(typeof document).toBe('undefined')
      expect(html).toContain('<span')
      expect(html).toContain('aria-hidden="true"')
      expect(html).not.toContain('aria-label=')
      expect(html).not.toContain('role=')
      expect(html).not.toContain('tabindex=')
      expect(html).toContain('class="d1-icon__icon"')
      expect(html).toContain('data-value="home"')
      expect(html).toContain('data-hide="false"')
    })

    it('should render both main and active icons and toggle visibility based on active state in SSR', async () => {
      const inactiveHtml = await renderIconSsr({
        icon: 'favorite_border',
        iconActive: 'favorite',
        active: false,
        turn: true
      })

      expect(inactiveHtml).toContain('class="d1-icon__icon"')
      expect(inactiveHtml).toContain('data-value="favorite_border"')
      expect(inactiveHtml).toContain('class="d1-icon__iconActive"')
      expect(inactiveHtml).toContain('data-value="favorite"')
      expect(inactiveHtml).toContain('data-turn="true"')

      const activeHtml = await renderIconSsr({
        icon: 'favorite_border',
        iconActive: 'favorite',
        active: true
      })

      expect(activeHtml).toContain('data-value="favorite_border" data-turn="false" data-disabled="false" data-hide="true"')
      expect(activeHtml).toContain('data-value="favorite" data-turn="false" data-disabled="false" data-hide="false"')
    })

    it('should render interactive ARIA attributes and tabindex when dynamic is true in SSR', async () => {
      const html = await renderIconSsr({
        icon: 'close',
        dynamic: true,
        ariaLabel: 'Close dialog',
        tabindex: 0
      })

      expect(html).toContain('role="button"')
      expect(html).toContain('aria-label="Close dialog"')
      expect(html).toContain('tabindex="0"')
      expect(html).not.toContain('aria-hidden=')
    })

    it('should render aria-disabled="true" and omit tabindex when dynamic and disabled in SSR', async () => {
      const html = await renderIconSsr({
        icon: 'close',
        dynamic: true,
        disabled: true,
        ariaLabel: 'Close dialog'
      })

      expect(html).toContain('role="button"')
      expect(html).toContain('aria-disabled="true"')
      expect(html).not.toContain('tabindex=')
    })

    it('should render default slot content alongside icon nodes in SSR', async () => {
      const html = await renderIconSsr({ icon: 'star' }, 'Badge slot')

      expect(html).toContain('<em class="slot-content">Badge slot</em>')
      expect(html).toContain('data-value="star"')
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

  describe('Invalid arguments, structural mutations, and non-standard types', () => {
    it('should preserve Unicode ariaLabel and icon values safely in SSR', async () => {
      const html = await renderIconSsr({
        icon: 'иконка_дом',
        dynamic: true,
        ariaLabel: 'Biểu tượng trang chủ 🇻🇳'
      })

      expect(html).toContain('aria-label="Biểu tượng trang chủ 🇻🇳"')
      expect(html).toContain('data-value="иконка_дом"')
    })
  })
})
