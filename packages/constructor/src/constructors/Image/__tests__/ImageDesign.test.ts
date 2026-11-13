// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { computed, reactive, type VNode } from 'vue'
import { Image } from '../Image'
import { ImageDesign } from '../ImageDesign'
import { ImageTypeValue } from '../basicTypes'
import type { ImageProps } from '../props'
import type { ImageClasses, ImageComponents, ImageExpose } from '../types'
import { flushUpdates, mountHelper } from './domFixtures'

/**
 * Exposes the renderer output for isolated design contract checks.
 *
 * Предоставляет результат рендерера для изолированных проверок контракта дизайна.
 */
class ImageDesignFixture extends ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImageProps> {
  /**
   * Creates the current root virtual node without mounting its children.
   *
   * Создаёт текущий корневой виртуальный узел без монтирования дочерних элементов.
   * @returns root virtual node / корневой виртуальный узел
   */
  getRoot(): VNode {
    return this.initRender()
  }
}

describe('ImageDesign', () => {
  it('should combine logic bindings, token classes and computed styles on the span root', () => {
    const props = reactive<ImageProps>({ value: '#123456', alt: 'Accent' })
    const fixture = mountHelper(() => {
      const design = new ImageDesignFixture('test.image', props, {
        classes: computed(() => ({ main: 'token-image' }))
      })
      design.render()
      return design
    })

    const root = fixture.item.getRoot()
    expect(root.type).toBe('span')
    expect(root.key).toBe('image')
    expect(root.props?.ref).toBe(fixture.item.propsImage.value.ref)
    expect(root.props?.class).toContain('token-image')
    expect(root.props?.['aria-label']).toBe('Accent')
    expect(root.props?.style).toMatchObject({ 'background-color': '#123456' })
  })

  it('should assemble native image and picture nodes while preserving source order', async () => {
    const props = reactive<ImageProps>({ value: '/photo.png', tagImg: true, alt: 'Photo' })
    const fixture = mountHelper(() => {
      const design = new ImageDesignFixture('test.image', props)
      design.render()
      return design
    })

    const imageRoot = fixture.item.getRoot()
    expect(imageRoot.type).toBe('span')
    expect(imageRoot.children).toMatchObject([{ type: 'img', props: { alt: 'Photo' } }])

    props.picture = [
      { key: 'desktop', srcset: '/desktop.webp', media: '(width >= 1024px)' },
      { key: 'mobile', srcset: '/mobile.webp', media: '(width >= 0px)' }
    ]
    await flushUpdates()

    const pictureRoot = fixture.item.getRoot()
    expect(pictureRoot.type).toBe('picture')
    expect(pictureRoot.children).toMatchObject([
      { type: 'source', key: 'desktop', props: { srcset: '/desktop.webp' } },
      { type: 'source', key: 'mobile', props: { srcset: '/mobile.webp' } },
      { type: 'img', props: { alt: 'Photo' } }
    ])

    props.value = '#123456'
    await flushUpdates()
    expect(fixture.item.getRoot().type).toBe('span')
    expect(fixture.item.getRoot().children).toBeNull()
  })

  it('should keep exposed helper access lazy and return the current source type', async () => {
    const props = reactive<ImageProps>({ value: '$home' })
    const fixture = mountHelper(() => {
      const design = new ImageDesignFixture('test.image', props)
      design.render()
      return design
    })
    const getInstance = vi.spyOn(Image.prototype, 'getInstance')

    const exposed = fixture.item.expose()
    expect(getInstance).not.toHaveBeenCalled()
    expect(exposed.getType()).toBe(ImageTypeValue.material)
    expect(getInstance).toHaveBeenCalledWith('type')

    props.value = '#123456'
    await flushUpdates()
    expect(exposed.getType()).toBe(ImageTypeValue.color)
    expect(exposed.getData()).toBeUndefined()
    expect(getInstance).toHaveBeenCalledWith('data')
  })

  it('should render compressed flags separately from font icon text', async () => {
    const props = reactive<ImageProps>({ value: 'f-vn' })
    const fixture = mountHelper(() => {
      const design = new ImageDesignFixture('test.image', props)
      design.render()
      return design
    })

    expect(fixture.item.getRoot().children).toMatchObject([{
      type: 'span',
      props: { class: 'ui-sys-flags ui-sys-flags--VN' }
    }])

    props.value = '$home'
    await flushUpdates()
    expect(fixture.item.getRoot().children).toBe('home')
  })
})
