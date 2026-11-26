// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ActionsDesign } from '../../Actions/ActionsDesign'
import { defaultsActions, type ActionsProps, type ActionsPropsBasic } from '../../Actions/props'
import type { ActionsClasses, ActionsComponents, ActionsExpose } from '../../Actions/types'
import { ImageDesign } from '../../Image/ImageDesign'
import { defaultsImage, type ImageProps, type ImagePropsBasic } from '../../Image/props'
import type { ImageClasses, ImageComponents, ImageExpose } from '../../Image/types'
import { PlaceholderDesign } from '../PlaceholderDesign'
import type { PlaceholderProps, PlaceholderPropsBasic } from '../props'
import type { PlaceholderClasses, PlaceholderComponents, PlaceholderExpose, PlaceholderSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const RealImageComponent = defineComponent({
  name: 'RealImageComponent',
  props: {
    value: [String, Object],
    alt: String
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-image': true } }))
    const design = new ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImagePropsBasic>(
      'd1.image',
      { ...defaultsImage, ...props } as Readonly<ImageProps>,
      { classes }
    )
    return design.render()
  }
})

const MockButton = defineComponent({
  name: 'MockButton',
  props: { label: [String, Number] },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      'button',
      {
        ...attrs,
        type: 'button',
        onClick: (event: MouseEvent) => emit('click', event, { value: props.label, type: 'click' })
      },
      String(props.label ?? '')
    )
  }
})

const RealActionsComponent = defineComponent({
  name: 'RealActionsComponent',
  props: {
    list: Array,
    listSecondary: Array,
    align: { type: String, default: defaultsActions.align }
  },
  emits: ['click', 'clickLite'],
  setup(props, { emit }) {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-actions': true } }))
    const design = new ActionsDesign<ActionsComponents, ActionsExpose, ActionsClasses, ActionsPropsBasic>(
      'd1.actions',
      props as Readonly<ActionsProps>,
      {
        emits: ((event: string, ...args: unknown[]) => emit(event as 'click', ...args)) as never,
        classes,
        components: { button: MockButton }
      }
    )
    return design.render()
  }
})

describe('Placeholder (integrated component)', () => {
  it('integrates PlaceholderDesign, Placeholder, ImageDesign, ActionsDesign, LabelInclude, and DescriptionInclude', async () => {
    const state = reactive<PlaceholderProps>({
      image: '#4f46e5',
      label: 'Empty Inbox',
      description: 'You have read all incoming notifications.',
      actionsList: [{ label: 'Reload' }]
    })
    const onActions = vi.fn()
    const onActionsLite = vi.fn()

    const InnerPlaceholder = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-placeholder': true } }))
        const design = new PlaceholderDesign<
          PlaceholderComponents,
          PlaceholderExpose,
          PlaceholderClasses,
          PlaceholderPropsBasic
        >(
          'd1.placeholder',
          state,
          {
            emits: ((event: string, ...args: unknown[]) => {
              if (event === 'actions') {
                onActions(...args)
              } else if (event === 'actionsLite') {
                onActionsLite(...args)
              }
            }) as never,
            classes,
            components: {
              image: RealImageComponent,
              actions: RealActionsComponent
            }
          }
        )
        return design.render()
      }
    })

    const slots: PlaceholderSlots = {
      context: () => [h('p', { class: 'ph-extra' }, 'Context area')]
    }

    const container = document.createElement('div')
    const app = createApp({
      render: () => h(InnerPlaceholder, null, slots as Record<string, () => unknown>)
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-placeholder')!
    expect(root.querySelector('.d1-image')).not.toBeNull()
    expect(root.querySelector('.d1-placeholder__label')?.textContent).toBe('Empty Inbox')
    expect(root.querySelector('.d1-placeholder__description')?.textContent).toBe('You have read all incoming notifications.')
    expect(root.querySelector('.ph-extra')?.textContent).toBe('Context area')

    const actionButton = root.querySelector('.d1-actions button') as HTMLButtonElement
    expect(actionButton.textContent).toBe('Reload')
    actionButton.click()
    expect(onActions).toHaveBeenCalledTimes(1)
    expect(onActionsLite).toHaveBeenCalledWith({ value: 'Reload', type: 'click' })

    state.label = 0
    state.description = '<script>alert(1)</script>'
    await nextTick()

    expect(root.querySelector('.d1-placeholder__label')?.textContent).toBe('0')
    expect(root.querySelector('.d1-placeholder__description')?.textContent).toBe('<script>alert(1)</script>')
    expect(root.querySelector('script')).toBeNull()
  })
})
