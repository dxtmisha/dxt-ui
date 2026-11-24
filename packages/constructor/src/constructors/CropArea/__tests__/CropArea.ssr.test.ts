// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'
import { renderToString } from '@vue/server-renderer'

import { CropAreaDesign } from '../CropAreaDesign'
import { defaultsCropArea, type CropAreaProps } from '../props'
import type {
  CropAreaClasses,
  CropAreaComponents,
  CropAreaExpose
} from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const createSsrCropArea = (props: CropAreaProps = {}) => {
  const Host = defineComponent({
    setup() {
      const mergedProps: CropAreaProps = {
        ...defaultsCropArea,
        ...props
      }
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-cropArea': true,
          'd1-cropArea--readonly': Boolean(mergedProps.readonly),
          'd1-cropArea--disabled': Boolean(mergedProps.disabled)
        }
      }))
      const design = new CropAreaDesign<
        CropAreaComponents,
        CropAreaExpose,
        CropAreaClasses,
        CropAreaProps
      >(
        'd1.cropArea',
        mergedProps,
        { classes }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(Host)
  })
}

describe('CropArea (SSR)', () => {
  it('should render CropArea DOM tree cleanly in Node SSR without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrCropArea({
      value: [10, 15, 20, 25]
    }))

    expect(html).toContain('d1-cropArea')
    expect(html).toContain('tabindex="0"')
    expect(html).toContain('d1-cropArea__left')
    expect(html).toContain('d1-cropArea__center')
    expect(html).toContain('d1-cropArea__right')
    expect(html).toContain('d1-cropArea__crop')
    expect(html).toContain('data-value="center"')
    expect(html).toContain('data-value="left-top"')
    expect(html).toContain('data-value="right-bottom"')
  })

  it('should render disabled attributes, custom tag, and empty output when readonly in SSR', async () => {
    const disabledHtml = await renderToString(createSsrCropArea({
      disabled: true,
      tag: 'section'
    }))

    expect(disabledHtml).toContain('<section')
    expect(disabledHtml).toContain('d1-cropArea--disabled')
    expect(disabledHtml).toContain('aria-disabled="true"')
    expect(disabledHtml).not.toContain('tabindex=')

    const readonlyHtml = await renderToString(createSsrCropArea({
      readonly: true
    }))

    expect(readonlyHtml).toBe('<!---->')
  })

  it('should produce isolated deterministic SSR output across concurrent requests', async () => {
    const [firstHtml, secondHtml] = await Promise.all([
      renderToString(createSsrCropArea({
        tag: 'section',
        tabindex: 1
      })),
      renderToString(createSsrCropArea({
        tag: 'article',
        disabled: true
      }))
    ])

    expect(firstHtml).toContain('<section')
    expect(firstHtml).toContain('tabindex="1"')
    expect(firstHtml).not.toContain('aria-disabled')

    expect(secondHtml).toContain('<article')
    expect(secondHtml).toContain('aria-disabled="true"')
    expect(secondHtml).not.toContain('tabindex=')
  })
})
