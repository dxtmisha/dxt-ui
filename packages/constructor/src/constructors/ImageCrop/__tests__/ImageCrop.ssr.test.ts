/** @vitest-environment node */
import { describe, it, expect } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { ImageCropDesign } from '../ImageCropDesign'
import type { ImageCropProps } from '../props'
import type { ImageCropClasses, ImageCropComponents, ImageCropExpose } from '../types'

const SsrMockImage = defineComponent({
  name: 'SsrMockImage',
  props: { alt: { type: String, default: undefined } },
  setup(props) {
    return () => h('img', { alt: props.alt })
  }
})

const SsrMockCropArea = defineComponent({
  name: 'SsrMockCropArea',
  setup() {
    return () => h('div', { class: 'ssr-crop-area' })
  }
})

describe('ImageCrop (SSR)', () => {
  it('should render valid SSR HTML without browser globals', async () => {
    const SsrComponent = defineComponent({
      props: {
        image: { type: String, default: 'photo.jpg' },
        alt: { type: String, default: 'Crop preview' },
        disabled: { type: Boolean, default: true }
      },
      setup(props) {
        const design = new ImageCropDesign<
          ImageCropComponents,
          ImageCropExpose,
          ImageCropClasses,
          ImageCropProps
        >(
          'd1.imageCrop',
          props as Readonly<ImageCropProps>,
          {
            components: {
              image: SsrMockImage,
              cropArea: SsrMockCropArea
            }
          }
        )

        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('aria-disabled="true"')
    expect(html).toContain('class="d1-imageCrop__body"')
    expect(html).toContain('alt="Crop preview"')
    expect(html).toContain('ssr-crop-area')
  })
})
