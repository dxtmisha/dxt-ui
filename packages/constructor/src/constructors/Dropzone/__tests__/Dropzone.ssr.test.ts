// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { TextInclude } from '../../../classes/TextInclude'
import { DropzoneDesign } from '../DropzoneDesign'
import type { DropzoneProps } from '../props'
import type {
  DropzoneClasses,
  DropzoneComponents,
  DropzoneExpose
} from '../types'

describe('Dropzone (SSR)', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    ServerStorage.reset()
    expect(warnSpy).not.toHaveBeenCalled()
    vi.restoreAllMocks()
  })

  const MockIcon = defineComponent({
    name: 'MockIcon',
    props: {
      icon: { type: [String, Object], default: undefined }
    },
    setup(props) {
      return () => h('span', { 'class': 'mock-icon', 'data-icon': String(props.icon ?? '') })
    }
  })

  const renderSsrDropzone = async (
    props: DropzoneProps = {},
    slots: Record<string, () => unknown> = {},
    initStorage?: () => void
  ): Promise<string> => {
    const storage: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => storage)
    initStorage?.()

    let exposed: DropzoneExpose | undefined

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-dropzone': true,
            'd1-dropzone--disabled': Boolean(props.disabled),
            'd1-dropzone--readonly': Boolean(props.readonly)
          }
        }))
        const design = new DropzoneDesign<
          DropzoneComponents,
          DropzoneExpose,
          DropzoneClasses,
          DropzoneProps
        >(
          'd1.dropzone',
          props,
          {
            classes,
            components: {
              icon: MockIcon
            }
          }
        )
        exposed = design.expose()
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, null, slots)
      }
    })

    const app = createSSRApp(Host)
    const html = await renderToString(app)

    // Calling exposed methods in Node SSR must be safe no-ops
    expect(() => exposed?.open()).not.toThrow()
    expect(() => exposed?.clear()).not.toThrow()

    return html
  }

  it('should render full Dropzone markup to HTML string in Node SSR without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderSsrDropzone({
      accept: 'image/*',
      multiple: true,
      icon: 'upload',
      label: 'Upload images',
      labelId: 'ssr-label',
      description: 'PNG, JPG up to 5MB',
      descriptionId: 'ssr-desc'
    })

    expect(html).toContain('<label')
    expect(html).toContain('d1-dropzone')
    expect(html).toContain('aria-labelledby="ssr-label"')
    expect(html).toContain('aria-describedby="ssr-desc"')
    expect(html).toContain('<input')
    expect(html).toContain('type="file"')
    expect(html).toContain('accept="image/*"')
    expect(html).toContain('multiple')
    expect(html).toContain('data-icon="upload"')
    expect(html).toContain('Upload images')
    expect(html).toContain('PNG, JPG up to 5MB')
  })

  it('should render default text, numeric zero label, disabled, readonly, and skeleton variants cleanly', async () => {
    const defaultHtml = await renderSsrDropzone()
    expect(defaultHtml).toContain('Drop files here or click to upload')
    expect(defaultHtml).not.toContain('aria-describedby')

    const zeroHtml = await renderSsrDropzone({ label: 0, description: 0 })
    expect(zeroHtml).toContain('>0<')
    expect(zeroHtml).toContain('aria-describedby=')

    const disabledHtml = await renderSsrDropzone({ disabled: true, readonly: true, isSkeleton: true })
    expect(disabledHtml).toContain('aria-disabled="true"')
    expect(disabledHtml).toContain('aria-readonly="true"')
    expect(disabledHtml).toContain('disabled')
    expect(disabledHtml).toContain('d1-skeleton__background')
  })

  it('should render default and description slots once without duplicate markup in SSR', async () => {
    const html = await renderSsrDropzone(
      {},
      {
        default: () => h('strong', 'SSR Custom Title'),
        description: () => h('em', 'SSR Custom Hint')
      }
    )

    expect(html.match(/SSR Custom Title/g)).toHaveLength(1)
    expect(html.match(/SSR Custom Hint/g)).toHaveLength(1)
    expect(html).not.toContain('Drop files here or click to upload')
  })

  it('should isolate custom TextInclude translations across separate SSR requests', async () => {
    const firstHtml = await renderSsrDropzone(
      {},
      {},
      () => {
        TextInclude.initText({ dropzone: 'Request A Dropzone' })
      }
    )

    const secondHtml = await renderSsrDropzone()

    expect(firstHtml).toContain('Request A Dropzone')
    expect(secondHtml).toContain('Drop files here or click to upload')
    expect(secondHtml).not.toContain('Request A Dropzone')
  })
})
