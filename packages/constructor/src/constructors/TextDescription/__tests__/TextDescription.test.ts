// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { TextDescription } from '../TextDescription'
import { TextDescriptionDesign } from '../TextDescriptionDesign'
import type { TextDescriptionPropsBasic } from '../props'
import type {
  TextDescriptionClasses,
  TextDescriptionComponents,
  TextDescriptionExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestTextDescription = defineComponent({
  name: 'TestTextDescription',
  inheritAttrs: false,
  props: {
    description: {
      type: [String, Number],
      default: undefined
    },
    descriptionId: {
      type: String,
      default: undefined
    },
    tag: {
      type: String,
      default: 'div'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  setup(props, { expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-textDescription': true,
        [`d1-textDescription--size--${props.size}`]: Boolean(props.size)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-textDescription-colorOpacity': '0.68'
    }))

    const design = new TextDescriptionDesign<
      TextDescriptionComponents,
      TextDescriptionExpose,
      TextDescriptionClasses,
      TextDescriptionPropsBasic
    >(
      'd1.textDescription',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('TextDescription (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render description prop, token classes, styles, custom id, elementHtml ref, and reactively update', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const description = ref<string | number>('Helper text for field')
      const descriptionId = ref<string | undefined>('custom-description-id')
      const tag = ref<string>('p')
      const size = ref<string>('sm')
      const componentRef = ref<{ elementHtml?: HTMLDivElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(TestTextDescription, {
            ref: componentRef,
            description: description.value,
            descriptionId: descriptionId.value,
            tag: tag.value,
            size: size.value,
            class: 'extra-description'
          })
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.firstElementChild as HTMLElement
      expect(element).not.toBeNull()
      expect(element.tagName).toBe('P')
      expect(element.id).toBe('custom-description-id')
      expect(element.textContent).toBe('Helper text for field')
      expect(element.classList.contains('d1-textDescription')).toBe(true)
      expect(element.classList.contains('d1-textDescription__description')).toBe(true)
      expect(element.classList.contains('d1-textDescription--size--sm')).toBe(true)
      expect(element.classList.contains('extra-description')).toBe(true)
      expect(element.style.getPropertyValue('--d1-textDescription-colorOpacity')).toBe('0.68')
      expect(componentRef.value?.elementHtml).toBe(element)

      description.value = 'Updated description'
      tag.value = 'span'
      size.value = 'xs'
      descriptionId.value = undefined
      await nextTick()

      const updated = container.firstElementChild as HTMLElement
      expect(updated.tagName).toBe('SPAN')
      expect(updated.id).toBeTruthy()
      expect(updated.id).not.toBe('custom-description-id')
      expect(updated.textContent).toBe('Updated description')
      expect(updated.classList.contains('d1-textDescription--size--xs')).toBe(true)
      expect(updated.classList.contains('d1-textDescription--size--sm')).toBe(false)
      expect(componentRef.value?.elementHtml).toBe(updated)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should render description slot alone and combined with description prop', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(
              TestTextDescription,
              { 'data-testid': 'slot-only' },
              { description: () => h('em', 'Slot-only description') }
            ),
            h(
              TestTextDescription,
              { 'data-testid': 'combined', 'description': 'Prefix: ' },
              { description: () => h('strong', 'Important note') }
            )
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const slotOnly = container.querySelector('[data-testid="slot-only"]') as HTMLElement
      const combined = container.querySelector('[data-testid="combined"]') as HTMLElement

      expect(slotOnly.querySelector('em')?.textContent).toBe('Slot-only description')
      expect(combined.textContent).toBe('Prefix: Important note')
      expect(combined.querySelector('strong')?.textContent).toBe('Important note')
    })

    it('should merge external DOM, ARIA, style, and click event attributes without clobbering internal classes/styles', () => {
      const onClick = vi.fn()

      const Host = defineComponent({
        setup() {
          return () => h(TestTextDescription, {
            'description': 'Interactive description',
            'role': 'note',
            'aria-live': 'polite',
            'data-testid': 'desc-attrs',
            'style': { maxWidth: '320px' },
            onClick
          })
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.querySelector('[data-testid="desc-attrs"]') as HTMLElement
      expect(element.getAttribute('role')).toBe('note')
      expect(element.getAttribute('aria-live')).toBe('polite')
      expect(element.style.maxWidth).toBe('320px')
      expect(element.style.getPropertyValue('--d1-textDescription-colorOpacity')).toBe('0.68')

      element.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Lazy instantiation, boundaries, security, and multilingual content', () => {
    it('should keep DescriptionInclude unallocated when rendered empty and instantiate lazily on prop update', async () => {
      class TrackedTextDescriptionDesign extends TextDescriptionDesign<
        TextDescriptionComponents,
        TextDescriptionExpose,
        TextDescriptionClasses,
        TextDescriptionPropsBasic
      > {
        getLogicItem(): TextDescription {
          return this.item
        }
      }

      let logicInstance: TextDescription | undefined
      const description = ref<string | undefined>('')
      const TrackedComponent = defineComponent({
        setup() {
          const design = new TrackedTextDescriptionDesign(
            'd1.textDescription',
            {
              get description() {
                return description.value
              }
            }
          )
          logicInstance = design.getLogicItem()

          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(TrackedComponent)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(container.firstElementChild).toBeNull()
      expect(logicInstance?.hasInstance('description')).toBe(false)

      description.value = 'Lazy activated'
      await nextTick()

      expect(logicInstance?.hasInstance('description')).toBe(true)
      expect(container.firstElementChild?.textContent).toBe('Lazy activated')
    })

    it('should render numeric 0 visibly while omitting empty and whitespace-only descriptions', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestTextDescription, { 'data-testid': 'zero', 'description': 0 }),
            h(TestTextDescription, { 'data-testid': 'empty', 'description': '' }),
            h(TestTextDescription, { 'data-testid': 'spaces', 'description': '   ' })
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const zero = container.querySelector('[data-testid="zero"]') as HTMLElement
      expect(zero).not.toBeNull()
      expect(zero.textContent).toBe('0')
      expect(container.querySelector('[data-testid="empty"]')).toBeNull()
      expect(container.querySelector('[data-testid="spaces"]')).toBeNull()
    })

    it('should safely escape HTML/XSS payloads and render multilingual Unicode accurately', () => {
      const payload = '<script>alert("xss")</script><img src=x onerror=alert(1)>'
      const unicode = 'Описание • Học tiếng Việt • 你好 🚀'

      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestTextDescription, { 'data-testid': 'xss', 'description': payload }),
            h(TestTextDescription, { 'data-testid': 'unicode', 'description': unicode })
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const xssElement = container.querySelector('[data-testid="xss"]') as HTMLElement
      expect(xssElement.querySelector('script')).toBeNull()
      expect(xssElement.querySelector('img')).toBeNull()
      expect(xssElement.textContent).toBe(payload)

      const unicodeElement = container.querySelector('[data-testid="unicode"]') as HTMLElement
      expect(unicodeElement.textContent).toBe(unicode)
    })
  })
})
