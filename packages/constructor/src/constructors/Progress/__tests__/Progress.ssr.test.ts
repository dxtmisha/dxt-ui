// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { ProgressDesign } from '../ProgressDesign'
import { defaultsProgress, type ProgressProps } from '../props'
import type { ProgressClasses, ProgressComponents, ProgressExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders the ProgressDesign component in a server-side Node environment without browser globals.
 *
 * Рендерит компонент ProgressDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderProgressSsr(properties: ProgressProps = {}): Promise<string> {
  const props = reactive<ProgressProps>({
    ...(defaultsProgress as ProgressProps),
    ...properties
  })

  const ProgressComponent = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-progress': true,
          'd1-progress--linear': Boolean(props.linear && !props.circular),
          'd1-progress--circular': Boolean(props.circular)
        }
      }))

      const design = new ProgressDesign<
        ProgressComponents,
        ProgressExpose,
        ProgressClasses,
        ProgressProps
      >('d1.progress', props, {
        classes: classesToken
      })

      return design.render()
    }
  })

  return renderToString(createSSRApp(ProgressComponent))
}

describe('Progress (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should not render client-only indeterminate progress in SSR', async () => {
      const html = await renderProgressSsr({
        clientOnly: true,
        visible: true
      })

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toBe('<!---->')
    })

    it('should render determinate linear progress in SSR even with clientOnly true', async () => {
      const html = await renderProgressSsr({
        value: 40,
        max: 100
      })

      expect(html).toContain('d1-progress')
      expect(html).toContain('d1-progress--linear')
      expect(html).toContain('role="progressbar"')
      expect(html).toContain('aria-valuenow="40"')
      expect(html).toContain('aria-valuemin="0"')
      expect(html).toContain('aria-valuemax="100"')
      expect(html).toContain('sys-value:60%')
    })

    it('should render determinate circular progress as SVG in SSR', async () => {
      const html = await renderProgressSsr({
        circular: true,
        value: 75,
        max: 100
      })

      expect(html).toContain('<svg')
      expect(html).toContain('d1-progress')
      expect(html).toContain('d1-progress--circular')
      expect(html).toContain('viewBox="0 0 48 48"')
      expect(html).toContain('role="progressbar"')
      expect(html).toContain('aria-valuenow="75"')
      expect(html).toContain('<circle')
    })

    it('should render indeterminate progress in SSR when clientOnly is false', async () => {
      const html = await renderProgressSsr({
        clientOnly: false,
        visible: true
      })

      expect(html).toContain('d1-progress')
      expect(html).toContain('d1-progress--linear')
      expect(html).toContain('role="status"')
    })
  })
})
