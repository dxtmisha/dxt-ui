// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { TextLabel } from '../TextLabel'
import { TextLabelDesign } from '../TextLabelDesign'
import type { TextLabelPropsBasic } from '../props'
import type {
  TextLabelClasses,
  TextLabelComponents,
  TextLabelExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestTextLabel = defineComponent({
  name: 'TestTextLabel',
  inheritAttrs: false,
  props: {
    label: {
      type: [String, Number],
      default: undefined
    },
    labelId: {
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
        'd1-textLabel': true,
        [`d1-textLabel--size--${props.size}`]: Boolean(props.size)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-textLabel-fontWeight': '500'
    }))

    const design = new TextLabelDesign<
      TextLabelComponents,
      TextLabelExpose,
      TextLabelClasses,
      TextLabelPropsBasic
    >(
      'd1.textLabel',
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

describe('TextLabel (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render label prop, token classes, styles, custom labelId, elementHtml ref, and reactively update', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const label = ref<string | number>('Account Settings')
      const labelId = ref<string | undefined>('custom-label-id')
      const tag = ref<string>('h2')
      const size = ref<string>('lg')
      const componentRef = ref<{ elementHtml?: HTMLDivElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(TestTextLabel, {
            ref: componentRef,
            label: label.value,
            labelId: labelId.value,
            tag: tag.value,
            size: size.value,
            class: 'extra-label'
          })
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.firstElementChild as HTMLElement
      expect(element).not.toBeNull()
      expect(element.tagName).toBe('H2')
      expect(element.id).toBe('custom-label-id')
      expect(element.textContent).toBe('Account Settings')
      expect(element.classList.contains('d1-textLabel')).toBe(true)
      expect(element.classList.contains('d1-textLabel__label')).toBe(true)
      expect(element.classList.contains('d1-textLabel--size--lg')).toBe(true)
      expect(element.classList.contains('extra-label')).toBe(true)
      expect(element.style.getPropertyValue('--d1-textLabel-fontWeight')).toBe('500')
      expect(componentRef.value?.elementHtml).toBe(element)

      label.value = 'Profile Title'
      tag.value = 'span'
      size.value = 'xs'
      labelId.value = undefined
      await nextTick()

      const updated = container.firstElementChild as HTMLElement
      expect(updated.tagName).toBe('SPAN')
      expect(updated.id).toBeTruthy()
      expect(updated.id).not.toBe('custom-label-id')
      expect(updated.textContent).toBe('Profile Title')
      expect(updated.classList.contains('d1-textLabel--size--xs')).toBe(true)
      expect(updated.classList.contains('d1-textLabel--size--lg')).toBe(false)
      expect(componentRef.value?.elementHtml).toBe(updated)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should render default slot alone and combined with label prop', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(
              TestTextLabel,
              { 'data-testid': 'slot-only' },
              { default: () => h('strong', 'Slot-only label') }
            ),
            h(
              TestTextLabel,
              { 'data-testid': 'combined', 'label': 'Section: ' },
              { default: () => h('em', 'Overview') }
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

      expect(slotOnly.querySelector('strong')?.textContent).toBe('Slot-only label')
      expect(combined.textContent).toBe('Section: Overview')
      expect(combined.querySelector('em')?.textContent).toBe('Overview')
    })

    it('should merge external DOM, ARIA, for, style, and click event attributes cleanly', () => {
      const onClick = vi.fn()

      const Host = defineComponent({
        setup() {
          return () => h(TestTextLabel, {
            'label': 'Email address',
            'tag': 'label',
            'for': 'email-input',
            'aria-label': 'Email field label',
            'data-testid': 'label-attrs',
            'style': { letterSpacing: '0.02em' },
            onClick
          })
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.querySelector('[data-testid="label-attrs"]') as HTMLElement
      expect(element.tagName).toBe('LABEL')
      expect(element.getAttribute('for')).toBe('email-input')
      expect(element.getAttribute('aria-label')).toBe('Email field label')
      expect(element.style.letterSpacing).toBe('0.02em')
      expect(element.style.getPropertyValue('--d1-textLabel-fontWeight')).toBe('500')

      element.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Lazy instantiation, boundaries, security, and multilingual content', () => {
    it('should keep LabelInclude unallocated when rendered empty and instantiate lazily on prop update', async () => {
      class TrackedTextLabelDesign extends TextLabelDesign<
        TextLabelComponents,
        TextLabelExpose,
        TextLabelClasses,
        TextLabelPropsBasic
      > {
        getLogicItem(): TextLabel {
          return this.item
        }
      }

      let logicInstance: TextLabel | undefined
      const label = ref<string | undefined>('')
      const TrackedComponent = defineComponent({
        setup() {
          const design = new TrackedTextLabelDesign(
            'd1.textLabel',
            {
              get label() {
                return label.value
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
      expect(logicInstance?.hasInstance('label')).toBe(false)

      label.value = 'Lazy activated'
      await nextTick()

      expect(logicInstance?.hasInstance('label')).toBe(true)
      expect(container.firstElementChild?.tagName).toBe('SPAN')
      expect(container.firstElementChild?.textContent).toBe('Lazy activated')
    })

    it('should render numeric 0 visibly while omitting empty and whitespace-only labels', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestTextLabel, { 'data-testid': 'zero', 'label': 0 }),
            h(TestTextLabel, { 'data-testid': 'empty', 'label': '' }),
            h(TestTextLabel, { 'data-testid': 'spaces', 'label': '   ' })
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
      const unicode = 'Заголовок • Học tiếng Việt • 你好 🚀'

      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestTextLabel, { 'data-testid': 'xss', 'label': payload }),
            h(TestTextLabel, { 'data-testid': 'unicode', 'label': unicode })
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
