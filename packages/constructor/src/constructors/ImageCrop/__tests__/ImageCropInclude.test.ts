// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { h } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { ImageCropInclude } from '../ImageCropInclude'

describe('ImageCropInclude', () => {
  it('should resolve binds from imageCropAttrs and render component', () => {
    const mockComp = vi.fn(() => h('div', { class: 'mock-image-crop' }))
    const include = new ImageCropInclude(
      {
        imageCropAttrs: {
          alt: 'Avatar crop',
          disabled: true
        }
      },
      new DesignName('parent.class'),
      {
        is: () => true,
        get: () => mockComp,
        render: (_name: string, props: Record<string, unknown>, children: unknown, index?: string) => [
          h(mockComp, { ...props, key: index }, children as never)
        ]
      } as never
    )

    expect(include.binds.value.alt).toBe('Avatar crop')
    expect(include.binds.value.disabled).toBe(true)

    const rendered = include.render()
    expect(rendered).toHaveLength(1)
  })
})
