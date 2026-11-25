/** @vitest-environment node */
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { InputImageDesign } from '../InputImageDesign'
import type { InputImageProps } from '../props'
import type { InputImageClasses, InputImageComponents, InputImageExpose } from '../types'

const SsrDropzone = defineComponent({
  props: {
    disabled: { type: Boolean, default: false },
    isSkeleton: { type: Boolean, default: false }
  },
  setup(props) {
    return () => h('div', {
      'class': 'd1-dropzone',
      'data-disabled': String(props.disabled),
      'data-skeleton': String(props.isSkeleton)
    })
  }
})

const SsrActions = defineComponent({
  props: { list: { type: Array, default: () => [] } },
  setup() {
    return () => h('div', { class: 'd1-actions' })
  }
})

const SsrImageCrop = defineComponent({
  props: { image: { type: String, default: undefined } },
  setup(props) {
    return () => h('div', { 'class': 'd1-imageCrop', 'data-image': props.image })
  }
})

const SsrFieldLabel = defineComponent({
  props: { label: { type: String, default: undefined } },
  setup(props) {
    return () => h('label', { class: 'd1-fieldLabel' }, props.label)
  }
})

const SsrFieldMessage = defineComponent({
  props: {
    helperMessage: { type: String, default: undefined },
    helperId: { type: String, default: undefined }
  },
  setup(props) {
    return () => h('div', { class: 'd1-fieldMessage', id: props.helperId }, props.helperMessage)
  }
})

describe('InputImage (SSR)', () => {
  it('renders valid SSR HTML with image value, ARIA links, and no browser globals', async () => {
    const SsrComponent = defineComponent({
      props: {
        value: { type: String, default: 'https://example.com/avatar.png' },
        label: { type: String, default: 'Avatar' },
        helperMessage: { type: String, default: 'Select photo' },
        isSkeleton: { type: Boolean, default: true }
      },
      setup(props, { expose }) {
        const design = new InputImageDesign<
          InputImageComponents,
          InputImageExpose,
          InputImageClasses,
          InputImageProps
        >(
          'd1.inputImage',
          props as Readonly<InputImageProps>,
          {
            classes: computed(() => ({
              main: { 'd1-inputImage': true },
              body: 'd1-inputImage__body',
              crop: 'd1-inputImage__crop',
              dropzone: 'd1-inputImage__dropzone',
              actions: 'd1-inputImage__actions'
            })),
            components: {
              actions: SsrActions as never,
              dropzone: SsrDropzone as never,
              fieldLabel: SsrFieldLabel as never,
              fieldMessage: SsrFieldMessage as never,
              imageCrop: SsrImageCrop as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('d1-inputImage')
    expect(html).toContain('d1-inputImage--hasImage')
    expect(html).toContain('aria-describedby="')
    expect(html).toContain('Avatar')
    expect(html).toContain('Select photo')
    expect(html).toContain('data-image="https://example.com/avatar.png"')
    expect(html).toContain('d1-actions')
  })
})
