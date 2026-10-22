// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { computed, reactive, type VNodeChild } from 'vue'
import { DesignName, Icons, type ConstrEmit } from '@dxtmisha/functional'
import { Image } from '../Image'
import { ImageDesign } from '../ImageDesign'
import { ImageInclude } from '../ImageInclude'
import { ImageTypeValue } from '../basicTypes'
import type { ImageClasses, ImageComponents, ImageEmits, ImageExpose } from '../types'
import type { ImageProps } from '../props'
import { browser, flushUpdates, intersect, loadImage, mountHelper, type MountedHelper } from './domFixtures'

/**
 * Mounts the complete Image constructor and renderer with their real dependencies.
 *
 * Монтирует полный конструктор и рендерер Image с реальными зависимостями.
 * @param props reactive component properties / реактивные свойства компонента
 * @param emits event observer / наблюдатель событий
 * @param ItemConstructor custom Image logic constructor / пользовательский логический конструктор Image
 * @returns mounted component / смонтированный компонент
 */
function mountImage(
  props: ImageProps,
  emits?: ConstrEmit<ImageEmits>,
  ItemConstructor?: typeof Image
): MountedHelper<ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImageProps>> {
  Object.assign(props, { lazy: props.lazy ?? false, preloadOffset: props.preloadOffset ?? '1024px' })
  let renderFunction: (() => VNodeChild) | undefined
  return mountHelper(
    () => {
      const design = new ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImageProps>(
        'test.image',
        props,
        {
          emits,
          classes: computed(() => ({ main: 'test-image' }))
        },
        ItemConstructor
      )
      renderFunction = design.render() as () => VNodeChild
      return design
    },
    () => renderFunction?.()
  )
}

describe('Image (complete component)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render an uploaded File after reading and decoding, with the same exposed data and load payload', async () => {
      const file = new File(['image'], 'photo.png', { type: 'image/png' })
      const emits = vi.fn()
      const fixture = mountImage(reactive({ value: file, tagImg: true, alt: 'Upload' }), emits)
      expect(emits).not.toHaveBeenCalled()
      await vi.waitFor(() => expect(browser.images).toHaveLength(1))
      const image = browser.images[0]!
      loadImage(image, 120, 80)
      await flushUpdates()
      const data = { image, src: image.src, width: 120, height: 80 }
      expect(fixture.host.querySelector('img')?.getAttribute('src')).toBe(image.src)
      expect(fixture.item.expose().getData()).toEqual(data)
      expect(emits).toHaveBeenCalledExactlyOnceWith('load', { type: ImageTypeValue.file, image: data })
    })

    it('should render a decoded background and expose the same image data as the load event', async () => {
      const emits = vi.fn()
      const fixture = mountImage(reactive({ value: '/photo.png', alt: 'Photo' }), emits)
      await flushUpdates()
      const image = browser.images[0]!
      loadImage(image, 640, 480)
      await flushUpdates()
      const data = { image, src: image.src, width: 640, height: 480 }
      expect(fixture.host.querySelector<HTMLElement>('.test-image')?.style.backgroundImage).toContain(image.src)
      expect(fixture.item.expose().getData()).toEqual(data)
      expect(emits).toHaveBeenCalledExactlyOnceWith('load', { type: ImageTypeValue.image, image: data })
    })

    it('should apply crop positions and sizing to the rendered background', async () => {
      const fixture = mountImage(reactive({ value: '/photo.png', coordinator: [10, 20, 30, 40] }))
      await flushUpdates()
      loadImage(browser.images[0]!, 400, 200)
      await flushUpdates()
      const root = fixture.host.querySelector<HTMLElement>('.test-image')!
      expect(root.style.getPropertyValue('background-position-x')).toBe('60%')
      expect(root.style.getPropertyValue('background-position-y')).toBe('40%')
      expect(root.style.backgroundSize).toBe('auto 166.66666666666669%')
    })

    it.each([
      ['filled-home', 'home', 'material-icons', ImageTypeValue.filled],
      ['two-tone-home', 'home', 'material-icons-two-tone', ImageTypeValue.twoTone],
      ['$home', 'home', 'material-icons', ImageTypeValue.material],
      ['material-account_circle', 'account_circle', 'material-icons', ImageTypeValue.material],
      ['outlined-home', 'home', 'material-symbols-outlined', ImageTypeValue.outlined],
      ['round-home', 'home', 'material-symbols-rounded', ImageTypeValue.round],
      ['sharp-home', 'home', 'material-symbols-sharp', ImageTypeValue.sharp]
    ] as const)('should render %s with the matching text, font and exposed type', (value, text, font, type) => {
      const fixture = mountImage(reactive({ value, alt: 'Home' }))
      const root = fixture.host.querySelector('.test-image')!
      expect(root.textContent).toBe(text)
      expect(root.classList.contains(font)).toBe(true)
      expect(root.getAttribute('role')).toBe('img')
      expect(root.getAttribute('aria-label')).toBe('Home')
      expect(root.hasAttribute('aria-hidden')).toBe(false)
      expect(fixture.item.expose().getType()).toBe(type)
    })

    it('should update the icon font when switching between filled, two-tone and outlined values', async () => {
      const props = reactive<ImageProps>({ value: 'filled-home' })
      const fixture = mountImage(props)
      const root = fixture.host.querySelector('.test-image')!

      expect(root.classList.contains('material-icons')).toBe(true)
      expect(root.textContent).toBe('home')

      props.value = 'two-tone-account_circle'
      await flushUpdates()

      expect(root.classList.contains('material-icons')).toBe(false)
      expect(root.classList.contains('material-icons-two-tone')).toBe(true)
      expect(root.textContent).toBe('account_circle')
      expect(fixture.item.expose().getType()).toBe(ImageTypeValue.twoTone)

      props.value = 'outlined-search'
      await flushUpdates()

      expect(root.classList.contains('material-icons-two-tone')).toBe(false)
      expect(root.classList.contains('material-symbols-outlined')).toBe(true)
      expect(root.textContent).toBe('search')
      expect(fixture.item.expose().getType()).toBe(ImageTypeValue.outlined)
    })

    it('should render eager native attributes and reactive srcset through the real renderer', async () => {
      const props = reactive<ImageProps>({
        value: 'image:photo.png', tagImg: true, alt: 'Photo',
        fetchPriority: 'high', srcset: { '2x': '/retina.png' }
      })
      const fixture = mountImage(props)
      const image = fixture.host.querySelector('img')!
      expect(image.getAttribute('src')).toBe('photo.png')
      expect(image.getAttribute('alt')).toBe('Photo')
      expect(image.getAttribute('fetchpriority')).toBe('high')
      expect(image.hasAttribute('loading')).toBe(false)
      expect(image.getAttribute('srcset')).toBe('/retina.png 2x')
      props.srcset = '/large.png 800w'
      props.fetchPriority = 'low'
      await flushUpdates()
      expect(image.getAttribute('srcset')).toBe('/large.png 800w')
      expect(image.getAttribute('fetchpriority')).toBe('low')
    })

    it('should render ordered picture sources and switch back to a plain native image', async () => {
      const props = reactive<ImageProps>({
        value: '/photo.png', tagImg: true,
        picture: [
          { srcset: '/mobile.webp', media: '(max-width: 600px)', type: 'image/webp' },
          { srcset: '/wide.png', media: '(min-width: 601px)' }
        ]
      })
      const fixture = mountImage(props)
      expect(fixture.host.querySelector('picture > img')).not.toBeNull()
      const sources = [...fixture.host.querySelectorAll('source')]
      expect(sources.map(source => [source.srcset, source.media, source.type])).toEqual([
        ['/mobile.webp', '(max-width: 600px)', 'image/webp'],
        ['/wide.png', '(min-width: 601px)', '']
      ])
      props.picture = undefined
      await flushUpdates()
      expect(fixture.host.querySelector('picture')).toBeNull()
      expect(fixture.host.querySelector('img')).not.toBeNull()
    })

    it.each([
      [768, '(width >= 768px)'],
      ['1024', '(width >= 1024px)'],
      [767.5, '(width >= 767.5px)'],
      [0, '(width >= 0px)'],
      ['600px', '(width >= 600px)'],
      ['48rem', '(width >= 48rem)']
    ] as const)('should render the picture breakpoint %s with valid length units', (breakpoint, media) => {
      const fixture = mountImage(reactive({
        value: '/photo.png',
        tagImg: true,
        picture: { [breakpoint]: '/wide.png' }
      }))
      const source = fixture.host.querySelector('picture > source')!

      expect(source.getAttribute('media')).toBe(media)
      expect(source.getAttribute('srcset')).toBe('/wide.png')
    })

    it('should render a PDF object with preserved viewer parameters and expose its prepared source', async () => {
      const fixture = mountImage(reactive({ value: '/document.pdf#page=3&zoom=150' }))
      await flushUpdates()
      const source = '/document.pdf#page=3&zoom=150&toolbar=0&scrollbar=1'
      expect(fixture.host.querySelector('object')?.getAttribute('data')).toBe(source)
      expect(fixture.item.expose().getType()).toBe(ImageTypeValue.pdf)
      expect(fixture.item.expose().getData()).toBe(source)
    })

    it('should activate adaptive background scaling through the full Image lifecycle', async () => {
      const props = reactive<ImageProps>({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 100
      })
      const fixture = mountImage(props)
      const root = fixture.host.querySelector<HTMLElement>('.test-image')!
      Object.defineProperties(root, {
        offsetWidth: { configurable: true, value: 100 },
        offsetHeight: { configurable: true, value: 100 }
      })
      await flushUpdates()
      loadImage(browser.images[0]!, 400, 200)
      await flushUpdates()

      expect(root.style.backgroundSize).toBe('100%')
    })

    it('should apply mask-image for public icons and contain background for SVG flags', async () => {
      vi.spyOn(Icons, 'getAsync').mockReturnValue('/icon.svg')
      vi.spyOn(Icons, 'get').mockResolvedValue('/icon.svg')

      const props = reactive<ImageProps>({ value: '@home' })
      const fixture = mountImage(props)
      await flushUpdates()
      const root = fixture.host.querySelector<HTMLElement>('.test-image')!

      expect(fixture.item.expose().getType()).toBe(ImageTypeValue.public)
      expect(root.style.getPropertyValue('mask-image')).toContain('/icon.svg')

      props.value = 'flag-vn'
      await flushUpdates()
      expect(fixture.item.expose().getType()).toBe(ImageTypeValue.flag)
      expect(root.style.backgroundImage).toContain('/icon.svg')
      expect(root.style.backgroundSize).toBe('contain')
    })

    it('should bind onLoad in ImageInclude and forward load events via emits', () => {
      const emits = vi.fn()
      const include = new ImageInclude(
        new DesignName('test.image'),
        { image: '/photo.png' },
        undefined,
        undefined,
        emits
      )

      expect(include.binds.value.onLoad).toBe(include.onLoad)

      const payload = { type: ImageTypeValue.image, image: '/photo.png' }
      include.binds.value.onLoad(payload)
      expect(emits).toHaveBeenCalledExactlyOnceWith('load', payload)
    })

    it('should support injecting a custom ItemConstructor into ImageDesign', () => {
      class CustomImage extends Image {}
      const fixture = mountImage(reactive({ value: 'home' }), undefined, CustomImage)
      expect(fixture.host.querySelector('.test-image')?.textContent).toBe('home')
    })
  })

  describe('Boundary values, thresholds, and numeric edge cases', () => {
    it('should fall back to span rendering when tagImg is true for non-img types such as icons or colors', () => {
      const fixture = mountImage(reactive({ value: 'home', tagImg: true }))
      expect(fixture.host.querySelector('img')).toBeNull()
      expect(fixture.host.querySelector('span.test-image')?.textContent).toBe('home')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it.each([undefined, null, '', 'image:'])('should render empty input %j without image resources or text', async (value) => {
      const fixture = mountImage(reactive({ value }))
      await flushUpdates()
      expect(fixture.host.querySelector('img, picture, object')).toBeNull()
      expect(fixture.host.textContent).toBe('')
      expect(fixture.item.expose().getData()).toBeUndefined()
      expect(browser.images).toHaveLength(0)
    })
  })

  describe('Invalid arguments, structural mutations, and non-standard types', () => {
    it('should clear a failed source and recover without emitting a successful load for the failure', async () => {
      const props = reactive<ImageProps>({ value: '/broken.png' })
      const emits = vi.fn()
      const fixture = mountImage(props, emits)
      await flushUpdates()
      browser.images[0]!.dispatchEvent(new Event('error'))
      await flushUpdates()
      expect(fixture.item.expose().getData()).toBeUndefined()
      expect(fixture.host.querySelector<HTMLElement>('.test-image')?.style.backgroundImage).toBe('')
      expect(emits).not.toHaveBeenCalled()
      props.value = '/valid.png'
      await flushUpdates()
      loadImage(browser.images[1]!)
      await flushUpdates()
      expect(fixture.host.querySelector<HTMLElement>('.test-image')?.style.backgroundImage).toContain(browser.images[1]!.src)
      expect(emits).toHaveBeenCalledTimes(1)
    })

    it('should render Unicode icon names and multilingual alt labels accurately', () => {
      const fixture = mountImage(reactive({ value: '$дом_圖標', alt: 'Ảnh đại diện 🇻🇳' }))
      const root = fixture.host.querySelector('.test-image')!
      expect(root.textContent).toBe('дом_圖標')
      expect(root.getAttribute('aria-label')).toBe('Ảnh đại diện 🇻🇳')
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('should switch between background and native rendering without decoding an unchanged source again', async () => {
      const props = reactive<ImageProps>({ value: '/photo.png', tagImg: false })
      const fixture = mountImage(props)
      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()
      const data = fixture.item.expose().getData()
      props.tagImg = true
      await flushUpdates()
      expect(fixture.host.querySelector('img')?.getAttribute('src')).toBe(browser.images[0]!.src)
      expect(fixture.item.expose().getData()).toBe(data)
      props.tagImg = false
      await flushUpdates()
      expect(fixture.host.querySelector('img')).toBeNull()
      expect(fixture.host.querySelector<HTMLElement>('.test-image')?.style.backgroundImage).toContain(browser.images[0]!.src)
      expect(browser.images).toHaveLength(1)
    })

    it('should update accessible names and decorative state when alt changes', async () => {
      const props = reactive<ImageProps>({ value: 'home', alt: '' })
      const fixture = mountImage(props)
      const root = fixture.host.querySelector('.test-image')!
      expect(root.getAttribute('aria-hidden')).toBe('true')
      props.alt = 'Home'
      await flushUpdates()
      expect(root.getAttribute('aria-label')).toBe('Home')
      expect(root.hasAttribute('aria-hidden')).toBe(false)
      props.alt = undefined
      await flushUpdates()
      expect(root.getAttribute('aria-hidden')).toBe('true')
      expect(root.hasAttribute('aria-label')).toBe(false)
    })

    it('should render compressed flags and switch to a decorative color without stale text', async () => {
      const props = reactive<ImageProps>({ value: 'f-vn' })
      const fixture = mountImage(props)
      expect(fixture.host.querySelector('.ui-sys-flags--VN')).not.toBeNull()
      props.value = '#ff0000'
      await flushUpdates()
      const root = fixture.host.querySelector<HTMLElement>('.test-image')!
      expect(root.querySelector('.ui-sys-flags')).toBeNull()
      expect(root.textContent).toBe('')
      expect(root.style.backgroundColor).toBe('rgb(255, 0, 0)')
      expect(root.getAttribute('aria-hidden')).toBe('true')
      expect(fixture.item.expose().getType()).toBe(ImageTypeValue.color)
    })

    it('should not publish a lazy background before visibility and should stop observing after loading', async () => {
      const fixture = mountImage(reactive({ value: '/photo.png', lazy: true }))
      await flushUpdates()
      const root = fixture.host.querySelector<HTMLElement>('.test-image')!
      expect(root.style.backgroundImage).toBe('')
      expect(browser.images).toHaveLength(0)
      intersect(root)
      await flushUpdates()
      expect(browser.images).toHaveLength(1)
      loadImage(browser.images[0]!)
      await flushUpdates()
      expect(root.style.backgroundImage).toContain(browser.images[0]!.src)
      expect(browser.intersections.every(item => item.targets.size === 0)).toBe(true)
    })

    it.each(['array', 'buffer'] as const)('should render a binary %s and release its URL on unmount', async (kind) => {
      const value = kind === 'array' ? new Uint8Array([1]) : new Uint8Array([1]).buffer
      const fixture = mountImage(reactive({ value, tagImg: true }))
      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()
      expect(fixture.host.querySelector('img')?.getAttribute('src')).toBe('blob:image-1')
      expect(fixture.item.expose().getType()).toBe(ImageTypeValue.array)
      fixture.unmount()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
      expect(fixture.host.isConnected).toBe(false)
    })

    it('should ignore late decoding after unmount and remove lazy platform subscriptions', async () => {
      const emits = vi.fn()
      const fixture = mountImage(reactive({ value: '/photo.png', lazy: true }), emits)
      await flushUpdates()
      const root = fixture.host.querySelector('.test-image')!
      intersect(root)
      await flushUpdates()
      const image = browser.images[0]!
      fixture.unmount()
      loadImage(image)
      await flushUpdates()
      expect(emits).not.toHaveBeenCalled()
      expect(browser.intersections.every(item => item.targets.size === 0)).toBe(true)
    })

    it('should not initialize ImageImg unless tagImg is enabled', async () => {
      const props = reactive<ImageProps>({ value: '/photo.png', tagImg: false })
      const fixture = mountImage(props)
      const getInstances = (): Record<string, unknown> =>
        (fixture.item as unknown as { item: { instances: Record<string, unknown> } }).item.instances

      expect(getInstances()).not.toHaveProperty('img')

      props.tagImg = true
      await flushUpdates()

      expect(getInstances()).toHaveProperty('img')
    })

    it('should not initialize ImageBackground or ImageData for icons, colors, compressed flags or empty values', async () => {
      const props = reactive<ImageProps>({ value: undefined })
      const fixture = mountImage(props)
      const getInstances = (): Record<string, unknown> =>
        (fixture.item as unknown as { item: { instances: Record<string, unknown> } }).item.instances

      for (const value of [undefined, 'home', '$home', 'f-vn', '#ff0000']) {
        props.value = value
        await flushUpdates()
        expect(getInstances()).not.toHaveProperty('background')
        expect(getInstances()).not.toHaveProperty('data')
      }

      props.value = '/document.pdf'
      await flushUpdates()
      expect(getInstances()).not.toHaveProperty('background')
      expect(getInstances()).toHaveProperty('data')

      props.value = '/photo.png'
      await flushUpdates()
      expect(getInstances()).toHaveProperty('background')
      expect(getInstances()).toHaveProperty('data')
    })

    it('should not initialize ImageLazy for eager images unless lazy is enabled', async () => {
      const props = reactive<ImageProps>({ value: '/photo.png', lazy: false })
      const fixture = mountImage(props)
      const getInstances = (): Record<string, unknown> =>
        (fixture.item as unknown as { item: { instances: Record<string, unknown> } }).item.instances

      await flushUpdates()
      expect(getInstances()).not.toHaveProperty('lazy')

      props.lazy = true
      await flushUpdates()
      expect(getInstances()).toHaveProperty('lazy')
    })

    it('should not initialize ImageText for background images, masks, colors or empty values', async () => {
      vi.spyOn(Icons, 'getAsync').mockReturnValue('/icon.svg')
      vi.spyOn(Icons, 'get').mockResolvedValue('/icon.svg')

      const props = reactive<ImageProps>({ value: undefined })
      const fixture = mountImage(props)
      const getInstances = (): Record<string, unknown> =>
        (fixture.item as unknown as { item: { instances: Record<string, unknown> } }).item.instances

      for (const value of [undefined, '/photo.png', '@home', 'flag-vn', '#ff0000']) {
        props.value = value
        await flushUpdates()
        expect(getInstances()).not.toHaveProperty('text')
      }

      props.value = 'home'
      await flushUpdates()
      expect(getInstances()).toHaveProperty('text')
    })
  })
})
