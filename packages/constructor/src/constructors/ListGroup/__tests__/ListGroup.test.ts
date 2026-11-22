// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ListGroup, type ListGroupConstructors } from '../ListGroup'
import { ListGroupDesign } from '../ListGroupDesign'
import type { ListGroupProps } from '../props'
import type {
  ListGroupClasses,
  ListGroupComponents,
  ListGroupExpose,
  ListGroupSlots
} from '../types'
import type { MotionTransformEmitOptions } from '../../MotionTransform'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableListGroup extends ListGroup {
  get instantiatedItems(): Partial<Record<keyof ListGroupConstructors, unknown>> {
    return this.instances
  }
}

const MockMotionTransform = defineComponent({
  name: 'MockMotionTransform',
  props: {
    open: Boolean,
    autoClose: Boolean,
    section: Boolean,
    adaptive: String,
    onTransformLite: Function
  },
  setup(props, { slots }) {
    const triggerToggle = () => {
      const nextOpen = !props.open
      const options: MotionTransformEmitOptions = {
        type: 'head',
        open: nextOpen
      }
      props.onTransformLite?.(options)
    }

    return () => h(
      'div',
      {
        'class': 'mock-motion-transform',
        'data-open': props.open ? 'true' : 'false'
      },
      [
        h(
          'button',
          {
            type: 'button',
            class: 'mock-motion-transform-toggle',
            onClick: triggerToggle
          },
          'toggle'
        ),
        slots.head?.({
          isOpen: props.open,
          isShow: props.open,
          classes: {},
          idControl: 'list-group-head',
          idBody: 'list-group-body',
          binds: {
            role: 'button',
            ariaExpanded: props.open ? 'true' : 'false',
            ariaControls: 'list-group-body'
          }
        }),
        slots.body?.()
      ]
    )
  }
})

async function mountListGroup(
  initialProps: ListGroupProps = {},
  customSlots: ListGroupSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<ListGroupProps>(initialProps)
  let logicInstance!: InspectableListGroup
  let exposedApi!: ListGroupExpose

  class TestListGroupDesign extends ListGroupDesign<
    ListGroupComponents,
    ListGroupExpose,
    ListGroupClasses,
    ListGroupProps
  > {
    get logic(): InspectableListGroup {
      return this.item as InspectableListGroup
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-listGroup': true,
          'd1-listGroup--open': props.open,
          'd1-listGroup--divider': props.divider
        }
      }))

      const design = new TestListGroupDesign(
        'd1.listGroup',
        props,
        {
          classes,
          slots,
          components: {
            motionTransform: MockMotionTransform
          }
        } as unknown as ConstructorParameters<typeof ListGroupDesign>[2],
        InspectableListGroup as unknown as typeof ListGroup
      )

      logicInstance = design.logic
      exposedApi = design.expose()
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h(Host, extraAttrs, customSlots as Record<string, () => unknown>)
  })
  app.mount(host)
  mountedCleanups.push(() => app.unmount())

  await nextTick()

  return {
    host,
    props,
    logic: logicInstance,
    expose: exposedApi
  }
}

describe('ListGroup (Integration)', () => {
  it('should render root DOM structure, classes, ARIA role, and slots', async () => {
    const { host, logic, expose } = await mountListGroup(
      { divider: true },
      {
        head: slotProps => h('span', { class: 'head-text' }, `Group (${slotProps.open})`),
        list: () => h('ul', { class: 'items' }, [h('li', 'Item 1')])
      },
      { class: 'extra-class' }
    )

    const root = host.querySelector('.d1-listGroup') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('extra-class')).toBe(true)
    expect(root.classList.contains('d1-listGroup--divider')).toBe(true)
    expect(root.getAttribute('role')).toBe('group')
    expect(root.getAttribute('data-open')).toBe('close')
    expect(root.getAttribute('data-divider')).toBe('divider')

    expect(host.querySelector('.d1-listGroup__head .head-text')?.textContent).toBe('Group (false)')
    expect(host.querySelector('.d1-listGroup__list .items li')?.textContent).toBe('Item 1')
    expect(expose.getOpen()).toBe(false)
    expect(logic.hasInstance('open')).toBe(true)
  })

  it('should synchronize state across DOM, slot props, and expose on user interaction and prop updates', async () => {
    const { host, props, expose } = await mountListGroup(
      { open: false },
      {
        head: slotProps => h('span', { class: 'head-state' }, String(slotProps.open)),
        list: () => h('div', 'Content')
      }
    )

    const root = host.querySelector('.d1-listGroup') as HTMLElement
    const toggleButton = host.querySelector('.mock-motion-transform-toggle') as HTMLButtonElement

    expect(root.getAttribute('data-open')).toBe('close')
    expect(expose.getOpen()).toBe(false)

    toggleButton.click()
    await nextTick()

    expect(root.getAttribute('data-open')).toBe('open')
    expect(host.querySelector('.head-state')?.textContent).toBe('true')
    expect(expose.getOpen()).toBe(true)

    toggleButton.click()
    await nextTick()

    expect(root.getAttribute('data-open')).toBe('close')
    expect(host.querySelector('.head-state')?.textContent).toBe('false')
    expect(expose.getOpen()).toBe(false)

    props.open = true
    props.divider = true
    await nextTick()

    expect(root.getAttribute('data-open')).toBe('open')
    expect(root.getAttribute('data-divider')).toBe('divider')
    expect(expose.getOpen()).toBe(true)
  })

  it('should isolate open state between sibling/nested ListGroup instances', async () => {
    const first = await mountListGroup(
      { open: false },
      {
        head: slotProps => h('span', { class: 'first-head' }, String(slotProps.open)),
        list: () => h('div', 'First list')
      }
    )
    const second = await mountListGroup(
      { open: false, divider: true },
      {
        head: slotProps => h('span', { class: 'second-head' }, String(slotProps.open)),
        list: () => h('div', 'Second list')
      }
    )

    const firstToggle = first.host.querySelector('.mock-motion-transform-toggle') as HTMLButtonElement
    firstToggle.click()
    await nextTick()

    expect(first.expose.getOpen()).toBe(true)
    expect(second.expose.getOpen()).toBe(false)
    expect(first.host.querySelector('.d1-listGroup')?.getAttribute('data-open')).toBe('open')
    expect(second.host.querySelector('.d1-listGroup')?.getAttribute('data-open')).toBe('close')
  })
})
