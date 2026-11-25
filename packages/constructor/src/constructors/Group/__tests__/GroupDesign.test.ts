// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { BlockDesign } from '../../Block/BlockDesign'
import { Group } from '../Group'
import { GroupDesign } from '../GroupDesign'
import { defaultsGroup, type GroupProps, type GroupPropsBasic } from '../props'
import type { GroupClasses, GroupComponents, GroupExpose, GroupSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockHeader = defineComponent({
  name: 'MockHeader',
  props: {
    label: [String, Number],
    caption: [String, Number],
    icon: [String, Object],
    tag: String,
    labelId: String
  },
  setup(props, { attrs, slots }) {
    return () => h('div', {
      'class': ['mock-header', attrs.class],
      'data-tag': props.tag
    }, [
      (slots.default || props.label !== undefined)
        ? h(props.tag ?? 'h4', { id: props.labelId, class: 'mock-header__label' }, slots.default ? slots.default() : String(props.label))
        : null,
      (slots.caption || props.caption !== undefined)
        ? h('span', { class: 'mock-header__caption' }, slots.caption ? slots.caption() : String(props.caption))
        : null,
      slots.trailing ? h('div', { class: 'mock-header__trailing' }, slots.trailing()) : null
    ])
  }
})

function mountGroupDesign(
  initialProps: GroupProps = {},
  slots?: GroupSlots,
  extraAttrs: Record<string, unknown> = {},
  ItemConstructor: typeof Group = Group
) {
  const state = reactive<GroupProps>({ ...defaultsGroup, ...initialProps })
  let exposed: (GroupExpose & { elementHtml?: unknown }) | undefined
  let designInstance!: GroupDesign<GroupComponents, GroupExpose, GroupClasses, GroupPropsBasic>

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-group': true }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--group-token': '12px'
      }))

      designInstance = new GroupDesign<GroupComponents, GroupExpose, GroupClasses, GroupPropsBasic>(
        'd1.group',
        state,
        {
          classes,
          styles,
          components: {
            header: MockHeader
          }
        },
        ItemConstructor
      )
      exposed = designInstance.expose() as GroupExpose & { elementHtml?: unknown }
      return designInstance.render()
    }
  })

  const container = document.createElement('div')
  const app = createApp({
    render: () => h(Host, extraAttrs, slots as Record<string, () => unknown>)
  })
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    container,
    state,
    designInstance,
    getExposed: () => exposed!
  }
}

describe('GroupDesign (isolated class)', () => {
  it('should inherit from BlockDesign, render default div and h4 tagHeader, bind elementHtml ref, merge attrs, and wire ARIA', async () => {
    const onClick = vi.fn()
    const { container, state, designInstance, getExposed } = mountGroupDesign(
      {
        headline: 'SETTINGS',
        label: 'Account Security',
        description: 'Configure authentication options'
      },
      {
        default: () => [h('p', { class: 'group-content' }, 'Group body content')]
      },
      {
        'class': 'external-group',
        'style': { padding: '8px' },
        'data-testid': 'grp',
        onClick
      }
    )

    expect(designInstance).toBeInstanceOf(GroupDesign)
    expect(designInstance).toBeInstanceOf(BlockDesign)

    const root = container.querySelector('[data-testid="grp"]') as HTMLElement | null
    expect(root).not.toBeNull()
    expect(root?.tagName).toBe('DIV')
    expect(root?.classList.contains('d1-group')).toBe(true)
    expect(root?.classList.contains('external-group')).toBe(true)
    expect(root?.style.getPropertyValue('--group-token')).toBe('12px')
    expect(root?.style.padding).toBe('8px')

    const labelledBy = root?.getAttribute('aria-labelledby')
    const describedBy = root?.getAttribute('aria-describedby')
    expect(labelledBy).toBeTruthy()
    expect(describedBy).toBeTruthy()
    expect(root?.querySelector(`#${labelledBy}`)?.tagName).toBe('H4')
    expect(root?.querySelector(`#${describedBy}`)?.textContent).toBe('Configure authentication options')

    expect(root?.querySelector('.d1-group__body')).not.toBeNull()
    expect(root?.querySelector('.d1-group__headline')?.textContent).toBe('SETTINGS')
    expect(root?.querySelector('.group-content')?.textContent).toBe('Group body content')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    root?.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    state.tag = 'section'
    state.tagHeader = 'h2'
    await nextTick()
    const updatedRoot = container.querySelector('[data-testid="grp"]')
    expect(updatedRoot?.tagName).toBe('SECTION')
    expect(updatedRoot?.querySelector(`#${labelledBy}`)?.tagName).toBe('H2')
  })

  it('should omit .d1-group__body wrapper when headline, header, and description are all absent', () => {
    const { container } = mountGroupDesign(
      {},
      {
        default: () => [h('div', { class: 'only-default' }, 'Group default only')]
      }
    )

    const root = container.querySelector('.d1-group')!
    expect(root.querySelector('.d1-group__body')).toBeNull()
    expect(root.querySelector('.only-default')?.textContent).toBe('Group default only')
    expect(root.hasAttribute('aria-labelledby')).toBe(false)
    expect(root.hasAttribute('aria-describedby')).toBe(false)
  })

  it('should render all slots (#headline, #label, #caption, #trailing, #description, #default) inside .d1-group', () => {
    const { container } = mountGroupDesign(
      {},
      {
        headline: () => [h('span', 'Slot Headline')],
        label: () => [h('span', 'Slot Label')],
        caption: () => [h('span', 'Slot Caption')],
        trailing: () => [h('button', 'Action')],
        description: () => [h('span', 'Slot Description')],
        default: () => [h('div', { class: 'slot-default' }, 'Slot Default')]
      }
    )

    const root = container.querySelector('.d1-group')!
    expect(root.querySelector('.d1-group__body')).not.toBeNull()
    expect(root.querySelector('.d1-group__headline')?.textContent).toBe('Slot Headline')
    expect(root.querySelector('.mock-header__label')?.textContent).toBe('Slot Label')
    expect(root.querySelector('.mock-header__caption')?.textContent).toBe('Slot Caption')
    expect(root.querySelector('.mock-header__trailing')?.textContent).toBe('Action')
    expect(root.querySelector('.d1-group__description')?.textContent).toBe('Slot Description')
    expect(root.querySelector('.slot-default')?.textContent).toBe('Slot Default')
    expect(root.getAttribute('aria-labelledby')).toBeTruthy()
    expect(root.getAttribute('aria-describedby')).toBeTruthy()
  })

  it('should support injecting a custom Group subclass via ItemConstructor', () => {
    const customTagSpy = vi.fn(() => 'article')
    class CustomGroup extends Group {
      override get tag(): string {
        return customTagSpy()
      }
    }

    const { container } = mountGroupDesign(
      { label: 'Injected Group' },
      undefined,
      { 'data-testid': 'di-group' },
      CustomGroup
    )

    const root = container.querySelector('[data-testid="di-group"]')
    expect(root?.tagName).toBe('ARTICLE')
    expect(customTagSpy).toHaveBeenCalled()
  })
})
