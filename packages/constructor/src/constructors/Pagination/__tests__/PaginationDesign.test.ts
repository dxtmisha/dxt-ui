// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref, type VNode } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import type { MenuControlItem } from '../../Menu'
import { Pagination } from '../Pagination'
import { PaginationDesign } from '../PaginationDesign'
import { defaultsPagination, type PaginationProps } from '../props'
import type {
  PaginationClasses,
  PaginationComponents,
  PaginationEmits,
  PaginationExpose
} from '../types'

const cleanups: Array<() => void> = []

const stubButton = defineComponent({
  name: 'StubButton',
  props: {
    label: { type: String, default: undefined },
    value: { type: [Number, String], default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    icon: { type: [String, Object], default: undefined },
    iconTrailing: { type: [String, Object], default: undefined },
    iconTurn: { type: Boolean, default: false }
  },
  setup(props, { attrs }) {
    return () => h('button', { ...attrs, disabled: props.disabled }, props.label ?? '')
  }
})

const stubMenu = defineComponent({
  name: 'StubMenu',
  props: {
    selected: { type: [Number, String], default: undefined },
    list: { type: Array, default: undefined }
  },
  setup(_, { slots }) {
    return () => h('div', { class: 'stub-menu' }, slots.control?.({
      open: ref(false),
      binds: { 'aria-expanded': 'false' }
    }))
  }
})

describe('PaginationDesign (unit)', () => {
  const createDesign = (
    initialProps: Partial<PaginationProps> = {},
    ItemConstructor: typeof Pagination = Pagination
  ) => {
    const props = reactive<PaginationProps>({
      ...defaultsPagination,
      value: 1,
      rows: 10,
      count: 100,
      ...initialProps
    })
    const emits = vi.fn() as unknown as ConstrEmit<PaginationEmits>

    let design!: PaginationDesign<
      PaginationComponents,
      PaginationExpose,
      PaginationClasses,
      PaginationProps
    >
    let renderFn!: ReturnType<typeof design.render>

    const Host = defineComponent({
      name: 'PaginationDesignUnitHost',
      setup() {
        design = new PaginationDesign<
          PaginationComponents,
          PaginationExpose,
          PaginationClasses,
          PaginationProps
        >(
          'd1.pagination',
          props,
          {
            emits,
            components: {
              button: stubButton,
              menu: stubMenu
            }
          },
          ItemConstructor
        )

        renderFn = design.render()

        return () => h('div')
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    return { props, emits, design, renderFn }
  }

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(cleanup => cleanup())
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  describe('Core design setup & render helpers', () => {
    it('should return undefined from render when hideIfOne is true and pagesCount <= 1', () => {
      const { renderFn } = createDesign({ hideIfOne: true, count: 10, rows: 10 })

      expect(renderFn()).toBeUndefined()
    })

    it('should render root div with navigation role, aria-label, and spacer when visible', () => {
      const { renderFn } = createDesign({
        hideIfOne: true,
        count: 30,
        rows: 10,
        textPagination: 'Main pagination'
      })
      const vnode = renderFn() as VNode

      expect(vnode.type).toBe('div')
      expect(vnode.props?.role).toBe('navigation')
      expect(vnode.props?.['aria-label']).toBe('Main pagination')
      expect(vnode.props?.tabindex).toBe(0)
    })

    it('should render unique keys and aria-hidden=true on first and last ellipses', () => {
      const { design } = createDesign({
        value: 5,
        rows: 10,
        count: 100,
        visible: 3,
        ends: 1,
        showEnds: true,
        ellipsis: '…'
      })

      const firstEllipsis = design.renderFirstEllipsis()
      const lastEllipsis = design.renderLastEllipsis()

      expect(firstEllipsis).toHaveLength(1)
      expect(lastEllipsis).toHaveLength(1)
      expect(firstEllipsis[0]?.key).toBe('ellipsisFirst')
      expect(lastEllipsis[0]?.key).toBe('ellipsisLast')
      expect(firstEllipsis[0]?.props?.['aria-hidden']).toBe('true')
      expect(lastEllipsis[0]?.props?.['aria-hidden']).toBe('true')
      expect(firstEllipsis[0]?.children).toBe('…')
      expect(lastEllipsis[0]?.children).toBe('…')
    })

    it('should render info, more, morePrev, navigation arrows, and first/last buttons according to flags', () => {
      const { design } = createDesign({
        value: 5,
        rows: 10,
        count: 100,
        showInfo: true,
        showMore: true,
        showMorePrev: true,
        showArrows: true,
        showFirstLast: true,
        textInfo: '[item] of [count]'
      })

      const infoNodes = design.renderInfo()
      expect(infoNodes).toHaveLength(1)
      expect(infoNodes[0]?.children).toBe('41-50 of 100')

      expect(design.renderMore()).toHaveLength(1)
      expect(design.renderMorePrev()).toHaveLength(1)
      expect(design.renderFirst()).toHaveLength(1)
      expect(design.renderBack()).toHaveLength(1)
      expect(design.renderNext()).toHaveLength(1)
      expect(design.renderLast()).toHaveLength(1)
      expect(design.renderSpacer()).toHaveLength(1)
    })

    it('should omit optional sections when flags are false', () => {
      const { design } = createDesign({
        value: 5,
        rows: 10,
        count: 100,
        showInfo: false,
        showMore: false,
        showMorePrev: false,
        showArrows: false,
        showFirstLast: false,
        showPagination: false,
        menuRows: undefined
      })

      expect(design.renderInfo()).toEqual([])
      expect(design.renderMore()).toEqual([])
      expect(design.renderMorePrev()).toEqual([])
      expect(design.renderFirst()).toEqual([])
      expect(design.renderBack()).toEqual([])
      expect(design.renderNext()).toEqual([])
      expect(design.renderLast()).toEqual([])
      expect(design.renderNavigation()).toEqual([])
      expect(design.renderMenu()).toEqual([])
    })

    it('should render menu section lazily and merge menuProps into renderMenuButton', () => {
      const { design, props } = createDesign({
        rows: 20,
        count: 100,
        menuRows: [10, 20, 50],
        showRowsPerPageLabel: true,
        textRowsPerPage: 'Per page'
      })

      const menuNodes = design.renderMenu()
      expect(menuNodes).toHaveLength(1)
      expect(menuNodes[0]?.props?.class).toBe('d1-pagination__menuRows')

      const menuControlProps: MenuControlItem = {
        open: ref(true),
        binds: {
          'aria-expanded': 'true',
          'data-trigger': 'menu'
        }
      } as unknown as MenuControlItem

      const menuButtonNode = design.renderMenuButton(menuControlProps)
      expect(menuButtonNode).toBeDefined()
      expect(menuButtonNode?.props?.iconTurn).toBe(true)
      expect(menuButtonNode?.props?.['aria-expanded']).toBe('true')
      expect(menuButtonNode?.props?.['data-trigger']).toBe('menu')
      expect(menuButtonNode?.props?.label).toBe('20')

      // When menuRows dynamically empties after creation, renderMenu hides cleanly
      props.menuRows = []
      expect(design.renderMenu()).toEqual([])
    })

    it('should support custom ItemConstructor dependency injection and return expose object', () => {
      const customCtorSpy = vi.fn()

      class CustomPagination extends Pagination {
        constructor(...args: ConstructorParameters<typeof Pagination>) {
          super(...args)
          customCtorSpy()
        }
      }

      const { design } = createDesign({}, CustomPagination)

      expect(customCtorSpy).toHaveBeenCalledTimes(1)
      expect(design.expose()).toBeDefined()
    })
  })
})
