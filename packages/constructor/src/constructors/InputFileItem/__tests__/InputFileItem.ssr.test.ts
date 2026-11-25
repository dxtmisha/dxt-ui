/** @vitest-environment node */
import { describe, it, expect } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { InputFileItemDesign } from '../InputFileItemDesign'
import type { InputFileItemProps } from '../props'
import type {
  InputFileItemClasses,
  InputFileItemComponents,
  InputFileItemExpose
} from '../types'

const SsrButton = defineComponent({
  props: { title: { type: String, default: undefined } },
  setup(props) {
    return () => h('button', { type: 'button' }, props.title)
  }
})

const SsrDialog = defineComponent({
  setup(_props, { slots }) {
    return () => h('div', { class: 'd1-dialog' }, slots.control?.({ binds: {} }))
  }
})

const SsrIcon = defineComponent({
  setup() {
    return () => h('span', { class: 'd1-icon' })
  }
})

const SsrImage = defineComponent({
  props: { alt: { type: String, default: undefined } },
  setup(props) {
    return () => h('img', { class: 'd1-image', alt: props.alt })
  }
})

const SsrImageCrop = defineComponent({
  setup() {
    return () => h('div', { class: 'd1-imageCrop' })
  }
})

const SsrProgress = defineComponent({
  setup() {
    return () => h('div', { class: 'd1-progress' })
  }
})

describe('InputFileItem (SSR)', () => {
  it('should render valid SSR HTML across list appearance, skeleton, and uploading status', async () => {
    const SsrComponent = defineComponent({
      props: {
        appearance: { type: String, default: 'list' },
        status: { type: String, default: 'uploading' },
        isSkeleton: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
        value: { type: Object, default: () => ({ name: 'archive.zip', size: 1048576 }) }
      },
      setup(props, { expose }) {
        const design = new InputFileItemDesign<
          InputFileItemComponents,
          InputFileItemExpose,
          InputFileItemClasses,
          InputFileItemProps
        >(
          'd1.inputFileItem',
          props as Readonly<InputFileItemProps>,
          {
            classes: computed(() => ({
              main: { 'd1-inputFileItem': true },
              thumbnail: 'd1-inputFileItem__thumbnail',
              body: 'd1-inputFileItem__body',
              label: 'd1-inputFileItem__label',
              caption: 'd1-inputFileItem__caption',
              progress: 'd1-inputFileItem__progress',
              actions: 'd1-inputFileItem__actions',
              buttonCrop: 'd1-inputFileItem__buttonCrop',
              buttonDelete: 'd1-inputFileItem__buttonDelete',
              buttonRetry: 'd1-inputFileItem__buttonRetry'
            })),
            components: {
              button: SsrButton as never,
              dialog: SsrDialog as never,
              icon: SsrIcon as never,
              image: SsrImage as never,
              imageCrop: SsrImageCrop as never,
              progress: SsrProgress as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('d1-inputFileItem')
    expect(html).toContain('d1-skeleton__background')
    expect(html).toContain('aria-busy="true"')
    expect(html).not.toContain('aria-disabled="true"')
    expect(html).toContain('archive.zip')
    expect(html).toContain('d1-progress')
  })
})
