// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { CollageBarInclude } from '../CollageBarInclude'
import type { CollageBarComponentInclude, CollageBarPropsInclude } from '../basicTypes'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

/** Stub CollageBar component for render verification / Заглушка компонента CollageBar для проверки рендеринга */
const StubCollageBar = defineComponent({
  name: 'StubCollageBar',
  inheritAttrs: false,
  setup(_props, { attrs, slots }) {
    return () => h(
      'div',
      {
        'data-stub': 'collageBar',
        'data-label': attrs.label !== undefined ? String(attrs.label) : undefined,
        'data-position': attrs.position !== undefined ? String(attrs.position) : undefined,
        'data-selected': attrs.selected !== undefined ? String(attrs.selected) : undefined,
        'class': attrs.class
      },
      [
        slots.body?.({}),
        slots.trailing?.({})
      ]
    )
  }
})

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('CollageBarInclude (unit)', () => {
  describe('Static is() predicate', () => {
    it('should return false for empty or undefined props and slots', () => {
      expect(CollageBarInclude.is()).toBe(false)
      expect(CollageBarInclude.is({})).toBe(false)
      expect(CollageBarInclude.is({ label: '', description: '', href: '' })).toBe(false)
      expect(CollageBarInclude.is({}, { body: undefined, trailing: undefined })).toBe(false)
      expect(CollageBarInclude.is({}, { barBody: undefined, barTrailing: undefined })).toBe(false)
    })

    it('should detect direct props including numeric 0 and string "0"', () => {
      expect(CollageBarInclude.is({ label: 'Title' })).toBe(true)
      expect(CollageBarInclude.is({ label: 0 })).toBe(true)
      expect(CollageBarInclude.is({ label: '0' })).toBe(true)
      expect(CollageBarInclude.is({ description: 'Desc' })).toBe(true)
      expect(CollageBarInclude.is({ description: 0 })).toBe(true)
      expect(CollageBarInclude.is({ href: '/gallery' })).toBe(true)
      expect(CollageBarInclude.is({ to: '/gallery' })).toBe(true)
    })

    it('should detect content configured via collageBarAttrs including button and icon', () => {
      expect(CollageBarInclude.is({ collageBarAttrs: { label: 'Inner' } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { label: 0 } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { description: 0 } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { button: 'Action' } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { button: 0 } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { icon: 'star' } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { buttonAttrs: { label: 'Go' } } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { href: '/item' } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: { to: { name: 'home' } } })).toBe(true)
      expect(CollageBarInclude.is({ collageBarAttrs: {} })).toBe(false)
    })

    it('should detect CollageBarSlots and CollageBarSlotsInclude slots', () => {
      expect(CollageBarInclude.is({}, { default: () => [] })).toBe(true)
      expect(CollageBarInclude.is({}, { description: () => [] })).toBe(true)
      expect(CollageBarInclude.is({}, { body: () => [] })).toBe(true)
      expect(CollageBarInclude.is({}, { trailing: () => [] })).toBe(true)
      expect(CollageBarInclude.is({}, { barBody: () => [] })).toBe(true)
      expect(CollageBarInclude.is({}, { barTrailing: () => [] })).toBe(true)
    })
  })

  describe('Instance is getter and binds resolution', () => {
    it('should forward parent props to binds and omit ref since hasInitElement is false', () => {
      const props: CollageBarPropsInclude = reactive({
        collageBarPosition: 'bottom',
        selected: true,
        label: 'Sunset',
        labelId: 'lbl-1',
        description: 'Beach view',
        descriptionId: 'desc-1',
        to: '/sunset',
        href: 'https://example.com/sunset',
        value: 0,
        detail: { id: 7 }
      })
      const naming = new DesignName('d1.collageItem')
      const include = new CollageBarInclude(props, naming)

      expect(include.is).toBe(true)
      expect(include.binds.value).toEqual({
        class: 'd1-collageItem__collageBar',
        position: 'bottom',
        selected: true,
        label: 'Sunset',
        labelId: 'lbl-1',
        description: 'Beach view',
        descriptionId: 'desc-1',
        to: '/sunset',
        href: 'https://example.com/sunset',
        value: 0,
        detail: { id: 7 }
      })
      expect('ref' in include.binds.value).toBe(false)
    })

    it('should preserve all collageBarAttrs values when parent props are undefined or Vue default selected=false', () => {
      const props: CollageBarPropsInclude = reactive({
        selected: false,
        collageBarAttrs: {
          position: 'top',
          selected: true,
          label: 'From Attrs',
          labelId: 'attr-label-id',
          description: 'Attrs Desc',
          descriptionId: 'attr-desc-id',
          button: 'Open',
          href: 'https://example.com/attr',
          value: 'attr-val',
          detail: { from: 'attrs' },
          class: 'extra-bar'
        }
      })
      const naming = new DesignName('d1.collageItem')
      const include = new CollageBarInclude(props, naming)

      expect(include.is).toBe(true)
      expect(include.binds.value).toEqual({
        class: 'extra-bar d1-collageItem__collageBar',
        position: 'top',
        selected: true,
        label: 'From Attrs',
        labelId: 'attr-label-id',
        description: 'Attrs Desc',
        descriptionId: 'attr-desc-id',
        button: 'Open',
        href: 'https://example.com/attr',
        value: 'attr-val',
        detail: { from: 'attrs' }
      })
    })

    it('should evaluate is as true for button prop and numeric 0 values in binds', () => {
      const props: CollageBarPropsInclude = reactive({})
      const naming = new DesignName('d1.collageItem')
      const include = new CollageBarInclude(props, naming)

      expect(include.is).toBe(false)

      props.collageBarAttrs = { button: 'Action' }
      expect(include.is).toBe(true)

      props.collageBarAttrs = { button: 0 }
      expect(include.is).toBe(true)

      props.collageBarAttrs = { label: 0 }
      expect(include.is).toBe(true)

      props.collageBarAttrs = { description: 0 }
      expect(include.is).toBe(true)

      props.collageBarAttrs = {}
      expect(include.is).toBe(false)
    })

    it('should support getter function props and extra overrides', () => {
      const state = reactive<CollageBarPropsInclude>({
        label: 'Dynamic Getter'
      })
      const naming = new DesignName('d1.collageItem')
      const include = new CollageBarInclude(
        () => state,
        naming,
        undefined,
        { position: 'bottom' }
      )

      expect(include.is).toBe(true)
      expect(include.binds.value.label).toBe('Dynamic Getter')
      expect(include.binds.value.position).toBe('bottom')

      state.label = undefined
      expect(include.is).toBe(false)
    })
  })

  describe('Rendering and reactivity', () => {
    it('should render when slotsChildren has body or trailing even without props, and skip empty slots', async () => {
      const props = reactive<CollageBarPropsInclude>({})
      const naming = new DesignName('d1.collageItem')
      const components = new DesignComponents<CollageBarComponentInclude, CollageBarPropsInclude>({
        collageBar: StubCollageBar
      })

      const include = new CollageBarInclude(props, naming, components)

      expect(include.render({ body: undefined, trailing: undefined })).toEqual([])

      const renderedWithBody = include.render({
        body: () => h('span', 'Body only')
      })
      expect(renderedWithBody.length).toBe(1)

      const renderedSuppressed = include.render(
        { body: () => h('span', 'Hidden') },
        undefined,
        () => false
      )
      expect(renderedSuppressed).toEqual([])
    })

    it('should reactively mount and unmount CollageBar inside a Vue host component', async () => {
      const props = reactive<CollageBarPropsInclude>({})
      const naming = new DesignName('d1.collageItem')
      const components = new DesignComponents<CollageBarComponentInclude, CollageBarPropsInclude>({
        collageBar: StubCollageBar
      })

      const Host = defineComponent({
        setup() {
          const include = new CollageBarInclude(props, naming, components)
          return () => h('div', { class: 'host' }, include.render({
            trailing: undefined
          }))
        }
      })

      const container = document.createElement('div')
      document.body.appendChild(container)
      const app = createApp(Host)
      app.mount(container)
      mountedCleanups.push(() => {
        app.unmount()
        container.remove()
      })

      await nextTick()
      expect(container.querySelector('[data-stub="collageBar"]')).toBeNull()

      props.collageBarAttrs = {
        label: 'Appeared',
        position: 'bottom',
        selected: true
      }
      await nextTick()

      const bar = container.querySelector('[data-stub="collageBar"]')
      expect(bar).not.toBeNull()
      expect(bar?.getAttribute('data-label')).toBe('Appeared')
      expect(bar?.getAttribute('data-position')).toBe('bottom')
      expect(bar?.getAttribute('data-selected')).toBe('true')
      expect(bar?.classList.contains('d1-collageItem__collageBar')).toBe(true)
    })

    it('should return empty array from render when components registry is absent', () => {
      const naming = new DesignName('d1.collageItem')
      const include = new CollageBarInclude({ label: 'Visible' }, naming)

      expect(include.is).toBe(true)
      expect(include.render()).toEqual([])
    })
  })
})
