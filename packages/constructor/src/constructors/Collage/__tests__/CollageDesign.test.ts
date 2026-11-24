// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, type VNode } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { Collage } from '../Collage'
import { CollageDesign } from '../CollageDesign'
import type { CollageProps } from '../props'
import type {
  CollageClasses,
  CollageComponents,
  CollageEmits,
  CollageExpose,
  CollageSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

const stubCollageItem = defineComponent({
  name: 'StubDesignCollageItem',
  props: {
    value: { type: [String, Number], default: undefined },
    label: { type: String, default: undefined },
    selected: { type: Boolean, default: false },
    tabindex: { type: Number, default: undefined }
  },
  setup(props, { attrs }) {
    return () => h('figure', {
      ...attrs,
      'data-value': props.value !== undefined ? String(props.value) : undefined,
      'data-selected': String(props.selected),
      'tabindex': props.tabindex
    }, props.label)
  }
})

class TestCollageDesign extends CollageDesign<
  CollageComponents,
  CollageExpose,
  CollageClasses,
  CollageProps
> {
  getLogic(): Collage {
    return this.item
  }
}

/**
 * Mounts CollageDesign inside a real component setup context and captures render VNodes.
 *
 * Монтирует CollageDesign внутри реального контекста setup компонента и захватывает VNode рендера.
 */
function setupCollageDesign(
  initialProps: CollageProps = {},
  options: {
    components?: CollageComponents
    emits?: ConstrEmit<CollageEmits>
    slots?: CollageSlots
    attrs?: Record<string, unknown>
  } = {}
) {
  const props = reactive<CollageProps>({ ...initialProps })
  let design!: TestCollageDesign
  let exposed!: CollageExpose
  let capturedRoot!: VNode
  let capturedBody!: VNode
  let capturedList!: VNode[]

  const Host = defineComponent({
    name: 'TestCollageDesignHost',
    setup() {
      design = new TestCollageDesign(
        'd1.collage',
        props,
        {
          emits: options.emits,
          components: options.components
        }
      )

      exposed = design.expose()
      const render = design.render()

      return () => {
        capturedBody = design.renderBody()
        capturedList = design.renderList()
        capturedRoot = render() as VNode
        return capturedRoot
      }
    }
  })

  const Wrapper = defineComponent({
    name: 'TestCollageDesignWrapper',
    setup() {
      return () => h(Host, options.attrs ?? {}, options.slots ? { ...options.slots } as Record<string, unknown> : undefined)
    }
  })

  const container = document.createElement('div')
  const app = createApp(Wrapper)
  app.mount(container)

  const cleanup = () => {
    app.unmount()
  }
  mountedCleanups.push(cleanup)

  return {
    design,
    exposed,
    logic: design.getLogic(),
    props,
    container,
    rootNode: capturedRoot,
    bodyNode: capturedBody,
    listNodes: capturedList,
    cleanup
  }
}

describe('CollageDesign', () => {
  afterEach(() => {
    while (mountedCleanups.length > 0) {
      mountedCleanups.pop()?.()
    }
    vi.restoreAllMocks()
  })

  it('should expose lazy event methods and update handler without eagerly instantiating event or variant', () => {
    const { exposed, logic } = setupCollageDesign(
      { variant: 'standard' },
      { components: { collageItem: stubCollageItem } }
    )

    expect(typeof exposed.update).toBe('function')
    expect(typeof exposed.getValue).toBe('function')
    expect(typeof exposed.getDetail).toBe('function')
    expect(logic.hasInstance('event')).toBe(false)
    expect(logic.hasInstance('variant')).toBe(false)

    expect(exposed.getValue?.()).toBeUndefined()
    expect(exposed.getDetail?.()).toBeUndefined()
    expect(logic.hasInstance('event')).toBe(true)

    expect(() => exposed.update()).not.toThrow()
    expect(logic.hasInstance('variant')).toBe(false)
  })

  it('should assemble root, body, items, and default slot VNodes with merged attrs and styles', () => {
    const itemClickSpy = vi.fn()
    const attrsClickSpy = vi.fn()
    const emits = vi.fn() as unknown as ConstrEmit<CollageEmits>

    const { rootNode, bodyNode, listNodes, container } = setupCollageDesign(
      {
        cellSize: 180,
        control: true,
        collageItemAttrs: {
          'data-shared': 'yes',
          'onClick': attrsClickSpy
        } as Record<string, unknown>,
        images: [
          { value: 0, label: 'Zero Item', onClick: itemClickSpy } as Record<string, unknown>,
          { value: 'second', label: 'Second Item' }
        ]
      },
      {
        emits,
        components: { collageItem: stubCollageItem },
        slots: {
          default: () => [h('div', { class: 'slot-child' }, 'Custom Slot')]
        }
      }
    )

    expect(rootNode.type).toBe('div')
    expect(rootNode.props?.tabindex).toBe(0)
    expect(rootNode.props?.style).toMatchObject({ '--d1-collage-cell-size': '180px' })

    expect(bodyNode.type).toBe('div')
    expect(bodyNode.props?.class).toBe('d1-collage__body')

    expect(listNodes).toHaveLength(3)

    // Verify key preserves falsy numeric value 0 and remains distinct across items
    expect(listNodes[0].key).toBe('.0')
    expect(String(listNodes[1].key)).toContain('second')
    expect(listNodes[0].key).not.toBe(listNodes[1].key)
    expect(listNodes[0].props?.['data-shared']).toBe('yes')
    expect(listNodes[0].props?.tabindex).toBe(-1)

    // Verify mergeProps composed onClick handlers instead of overwriting
    const clickHandlers = listNodes[0].props?.onClick as Array<(event: MouseEvent, options?: Record<string, unknown>) => void>
    expect(Array.isArray(clickHandlers)).toBe(true)

    const mouseEvent = new MouseEvent('click')
    clickHandlers.forEach(handler => handler(mouseEvent, { type: 'click', value: 0, detail: undefined }))

    expect(attrsClickSpy).toHaveBeenCalledTimes(1)
    expect(itemClickSpy).toHaveBeenCalledTimes(1)
    expect(emits).toHaveBeenCalledWith('click', mouseEvent, { type: 'click', value: 0, detail: undefined })

    // Verify default slot projection in DOM
    expect(container.querySelector('.slot-child')?.textContent).toBe('Custom Slot')
  })

  it('should render body with only slot children when components registry is absent', () => {
    const { listNodes, container } = setupCollageDesign(
      {
        images: [{ value: 'a', label: 'A' }]
      },
      {
        slots: {
          default: () => [h('span', { class: 'fallback-slot' }, 'Fallback')]
        }
      }
    )

    expect(listNodes).toHaveLength(1)
    expect(container.querySelector('.fallback-slot')?.textContent).toBe('Fallback')
  })
})
