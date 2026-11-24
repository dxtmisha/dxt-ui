// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  ref,
  type VNode
} from 'vue'
import { type DesignComponents, DesignName } from '@dxtmisha/functional'

import { ChipInclude } from '../ChipInclude'
import type { ChipPropsInclude } from '../basicTypes'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('ChipInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should determine is based on label (including 0 and empty string), icon, or iconTrailing in binds', () => {
      const props: ChipPropsInclude = reactive({})
      const naming = new DesignName('d1.menuChip')
      const include = new ChipInclude(props, naming)

      expect(include.is).toBe(false)

      props.chipAttrs = { label: 'Selected' }
      expect(include.is).toBe(true)

      props.chipAttrs = { label: 0 }
      expect(include.is).toBe(true)

      props.chipAttrs = { label: '' }
      expect(include.is).toBe(true)

      props.chipAttrs = { label: undefined }
      expect(include.is).toBe(false)

      props.chipAttrs = { icon: 'star' }
      expect(include.is).toBe(true)

      props.chipAttrs = { iconTrailing: 'keyboard_arrow_down' }
      expect(include.is).toBe(true)

      props.chipAttrs = {}
      expect(include.is).toBe(false)
    })

    it('should resolve binds forwarding chipAttrs, applying BEM class, and omitting ref (hasInitElement = false)', () => {
      const props: ChipPropsInclude = reactive({
        chipAttrs: {
          label: 'Active',
          disabled: true
        }
      })
      const naming = new DesignName('d1.tableHeaderItem')
      const include = new ChipInclude(props, naming)

      expect(include.binds.value).toEqual({
        class: 'd1-tableHeaderItem__chip',
        disabled: true,
        label: 'Active'
      })
      expect(include.binds.value.ref).toBeUndefined()
    })

    it('should merge static and reactive extra configurations passed to constructor', () => {
      const dynamicIcon = ref<string | undefined>('sort')
      const props: ChipPropsInclude = reactive({
        chipAttrs: { label: 'Price' }
      })
      const naming = new DesignName('d1.tableHeaderItem')
      const include = new ChipInclude(
        props,
        naming,
        undefined,
        () => ({
          icon: dynamicIcon.value,
          selected: true
        })
      )

      expect(include.is).toBe(true)
      expect(include.binds.value).toEqual({
        class: 'd1-tableHeaderItem__chip',
        icon: 'sort',
        label: 'Price',
        selected: true
      })

      dynamicIcon.value = undefined
      props.chipAttrs = {}
      expect(include.is).toBe(false)
      expect(include.binds.value).toEqual({
        class: 'd1-tableHeaderItem__chip',
        selected: true
      })
    })

    it('should delegate rendering to DesignComponents without overwriting caller ref in attrs', () => {
      const mockedVNode = { type: 'span' } as unknown as VNode
      const renderMock = vi.fn().mockReturnValue([mockedVNode])
      const componentsMock = {
        render: renderMock
      } as unknown as DesignComponents<Record<string, object>, ChipPropsInclude>

      const callerControlRef = ref<HTMLElement>()
      const props: ChipPropsInclude = reactive({
        chipAttrs: { iconTrailing: 'chevron_down' }
      })
      const naming = new DesignName('d1.menuChip')
      const include = new ChipInclude(props, naming, componentsMock, undefined, 'chip-control')

      const slotRenderer = () => [h('span', 'Option A')]
      const rendered = include.render(
        { default: slotRenderer },
        {
          ref: callerControlRef,
          iconTurn: true
        }
      )

      expect(rendered).toEqual([mockedVNode])
      expect(renderMock).toHaveBeenCalledWith(
        'chip',
        expect.objectContaining({
          class: 'd1-menuChip__chip',
          iconTrailing: 'chevron_down',
          iconTurn: true,
          ref: callerControlRef
        }),
        { default: slotRenderer },
        'chip-control'
      )
    })
  })

  describe('Edge cases, guards, and reactivity', () => {
    it('should handle undefined and empty props and return empty array when hidden or components missing', () => {
      const renderMock = vi.fn().mockReturnValue([])
      const componentsMock = {
        render: renderMock
      } as unknown as DesignComponents<Record<string, object>, ChipPropsInclude>

      const naming = new DesignName('d1.menuChip')
      const includeWithoutComponents = new ChipInclude(undefined, naming)

      expect(includeWithoutComponents.is).toBe(false)
      expect(includeWithoutComponents.binds.value).toEqual({
        class: 'd1-menuChip__chip'
      })
      expect(includeWithoutComponents.render()).toEqual([])

      const includeHidden = new ChipInclude({}, naming, componentsMock)
      expect(includeHidden.render()).toEqual([])
      expect(renderMock).not.toHaveBeenCalled()

      const includeForcedHidden = new ChipInclude(
        { chipAttrs: { label: 'Visible' } },
        naming,
        componentsMock
      )
      expect(includeForcedHidden.render(undefined, undefined, () => false)).toEqual([])
      expect(renderMock).not.toHaveBeenCalled()
    })

    it('should support multilingual and unicode labels cleanly in chipAttrs', () => {
      const props: ChipPropsInclude = reactive({
        chipAttrs: {
          label: 'Категория — Tiếng Việt 🏷️'
        }
      })
      const naming = new DesignName('d1.menuChip')
      const include = new ChipInclude(props, naming)

      expect(include.is).toBe(true)
      expect(include.binds.value.label).toBe('Категория — Tiếng Việt 🏷️')
    })

    it('should reactively update when rendered in a Vue component tree', async () => {
      const props: ChipPropsInclude = reactive({})
      const naming = new DesignName('d1.menuChip')
      let includeInstance: ChipInclude | undefined

      const HostComponent = defineComponent({
        setup() {
          const localInstance = new ChipInclude(props, naming)
          includeInstance = localInstance
          return () => h('div', { class: 'host' }, localInstance.render())
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(includeInstance?.is).toBe(false)

      props.chipAttrs = { label: 'Active Filter' }
      await nextTick()

      expect(includeInstance?.is).toBe(true)
      expect(includeInstance?.binds.value.label).toBe('Active Filter')
    })
  })
})
