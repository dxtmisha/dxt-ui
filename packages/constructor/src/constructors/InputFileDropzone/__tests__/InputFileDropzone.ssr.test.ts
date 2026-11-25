/** @vitest-environment node */
import { describe, it, expect } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { InputFileDropzoneDesign } from '../InputFileDropzoneDesign'
import type { InputFileDropzoneProps } from '../props'
import type {
  InputFileDropzoneClasses,
  InputFileDropzoneComponents,
  InputFileDropzoneExpose
} from '../types'

const SsrDropzone = defineComponent({
  props: {
    accept: { type: String, default: undefined },
    disabled: { type: Boolean, default: false }
  },
  setup(props) {
    return () => h('div', { 'class': 'd1-dropzone', 'data-accept': props.accept })
  }
})

const SsrLabel = defineComponent({
  props: { label: { type: String, default: undefined } },
  setup(props) {
    return () => h('label', { class: 'd1-fieldLabel' }, props.label)
  }
})

const SsrMessage = defineComponent({
  props: {
    helperMessage: { type: String, default: undefined },
    helperId: { type: String, default: undefined }
  },
  setup(props) {
    return () => h('div', { class: 'd1-fieldMessage', id: props.helperId }, props.helperMessage)
  }
})

describe('InputFileDropzone (SSR)', () => {
  it('should render valid SSR HTML with label, body, dropzone, and aria-describedby', async () => {
    const SsrComponent = defineComponent({
      props: {
        accept: { type: String, default: 'image/*' },
        label: { type: String, default: 'Drop files' },
        helperMessage: { type: String, default: 'PNG or JPG' }
      },
      setup(props, { expose }) {
        const design = new InputFileDropzoneDesign<
          InputFileDropzoneComponents,
          InputFileDropzoneExpose,
          InputFileDropzoneClasses,
          InputFileDropzoneProps
        >(
          'd1.inputFileDropzone',
          props as Readonly<InputFileDropzoneProps>,
          {
            classes: computed(() => ({
              main: { 'd1-inputFileDropzone': true },
              body: 'd1-inputFileDropzone__body',
              dropzone: 'd1-inputFileDropzone__dropzone'
            })),
            components: {
              dropzone: SsrDropzone as never,
              fieldLabel: SsrLabel as never,
              fieldMessage: SsrMessage as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('d1-inputFileDropzone')
    expect(html).toContain('aria-describedby="')
    expect(html).toContain('Drop files')
    expect(html).toContain('PNG or JPG')
    expect(html).toContain('data-accept="image/*"')
  })
})
