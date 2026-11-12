// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  ServerStorage
} from '@dxtmisha/functional'

import { ActionsDesign } from '../ActionsDesign'
import type { ActionsComponents, ActionsProps, ActionsPropsBasic } from '../index'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const ButtonMock = defineComponent({
  name: 'ButtonMock',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    class: [String, Array, Object],
    disabled: Boolean,
    palette: String,
    size: String,
    onClick: Function
  },
  setup(props, { attrs }) {
    return () => h('button', {
      ...attrs,
      'class': props.class,
      'disabled': props.disabled ? 'true' : undefined,
      'data-palette': props.palette,
      'data-size': props.size
    }, props.label)
  }
})

describe('Actions SSR (Server-Side Rendering)', () => {
  it('should render primary list, spacer, and secondary list in SSR mode', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({
          buttonAttrs: { palette: 'primary' },
          buttonSecondaryAttrs: { palette: 'neutral' },
          list: [
            { label: 'SSR Confirm', value: 'confirm' },
            { label: 'SSR Apply', value: 'apply' }
          ],
          listSecondary: [
            { label: 'SSR Cancel', value: 'cancel' }
          ]
        })

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            components: {
              button: ButtonMock
            } as ActionsComponents
          }
        )

        return design.render()
      }
    })

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    expect(html).toContain('SSR Confirm')
    expect(html).toContain('SSR Apply')
    expect(html).toContain('SSR Cancel')
    expect(html).toContain('d1-actions__list')
    expect(html).toContain('d1-actions__secondary')
    expect(html).toContain('d1-actions__spacer')
    expect(html).toContain('aria-label="Actions"')
    expect(html).toContain('data-palette="primary"')
    expect(html).toContain('data-palette="neutral"')
  })

  it('should render default and secondary slots in SSR mode', async () => {
    const ActionsWrapper = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({
          list: [{ label: 'SSR Base Primary' }]
        })

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            components: {
              button: ButtonMock
            } as ActionsComponents
          }
        )

        return design.render()
      }
    })

    const HostComponent = defineComponent({
      setup() {
        return () => h(ActionsWrapper, null, {
          default: () => [h('span', { class: 'ssr-custom-default' }, 'SSR Default Slot Text')],
          secondary: () => [h('span', { class: 'ssr-custom-secondary' }, 'SSR Secondary Slot Text')]
        })
      }
    })

    const app = createSSRApp(HostComponent)
    const html = await renderToString(app)

    expect(html).toContain('SSR Base Primary')
    expect(html).toContain('ssr-custom-default')
    expect(html).toContain('SSR Default Slot Text')
    expect(html).toContain('ssr-custom-secondary')
    expect(html).toContain('SSR Secondary Slot Text')
  })

  it('should render empty layout with only spacer when no lists or slots are provided in SSR', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({})

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            components: {
              button: ButtonMock
            } as ActionsComponents
          }
        )

        return design.render()
      }
    })

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    expect(html).toContain('d1-actions__spacer')
    expect(html).not.toContain('d1-actions__list')
    expect(html).not.toContain('d1-actions__secondary')
  })

  it('should apply SSR token classes and style variables to root container', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({})

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-actions': true,
            'd1-actions--align--center': true
          }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--sys-actions-gap': '16px'
        }))

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            classes: classesToken,
            styles: stylesToken,
            components: {
              button: ButtonMock
            } as ActionsComponents
          }
        )

        return design.render()
      }
    })

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    expect(html).toContain('d1-actions')
    expect(html).toContain('d1-actions--align--center')
    expect(html).toContain('--sys-actions-gap:16px')
  })

  it('should escape HTML and render multilingual text safely in SSR', async () => {
    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({
          list: [
            { label: '<script>alert("xss")</script>' },
            { label: 'tiếng Việt & diacritics' },
            { label: 'Подтвердить действие' }
          ]
        })

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            components: {
              button: ButtonMock
            } as ActionsComponents
          }
        )

        return design.render()
      }
    })

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    // Script tags must be safely escaped by SSR renderer
    expect(html).not.toContain('<script>alert("xss")</script>')
    expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
    expect(html).toContain('tiếng Việt &amp; diacritics')
    expect(html).toContain('Подтвердить действие')
  })

  it('should render items in correct layout order based on isLeft() in SSR mode', async () => {
    // Left-aligned: list -> spacer -> secondary
    const LeftComponent = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
          reactive<ActionsProps>({
            align: 'left',
            list: [{ label: 'Left Primary' }],
            listSecondary: [{ label: 'Left Secondary' }]
          }),
          { components: { button: ButtonMock } as ActionsComponents }
        )
        return design.render()
      }
    })
    const leftHtml = await renderToString(createSSRApp(LeftComponent))
    const leftPrimaryIndex = leftHtml.indexOf('Left Primary')
    const leftSecondaryIndex = leftHtml.indexOf('Left Secondary')
    expect(leftPrimaryIndex).toBeLessThan(leftSecondaryIndex)

    // Right-aligned: secondary -> spacer -> list
    const RightComponent = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
          reactive<ActionsProps>({
            align: 'right',
            list: [{ label: 'Right Primary' }],
            listSecondary: [{ label: 'Right Secondary' }]
          }),
          { components: { button: ButtonMock } as ActionsComponents }
        )
        return design.render()
      }
    })
    const rightHtml = await renderToString(createSSRApp(RightComponent))
    const rightPrimaryIndex = rightHtml.indexOf('Right Primary')
    const rightSecondaryIndex = rightHtml.indexOf('Right Secondary')
    expect(rightSecondaryIndex).toBeLessThan(rightPrimaryIndex)
  })

  it('should maintain strict SSR request isolation across consecutive requests', async () => {
    // Request 1
    const request1: Record<string, unknown> = { id: 'req-1' }
    ServerStorage.init(() => request1)

    const App1 = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
          reactive<ActionsPropsBasic>({ list: [{ label: 'Request 1 Button' }] }),
          { components: { button: ButtonMock } as ActionsComponents }
        )
        return design.render()
      }
    })
    const html1 = await renderToString(createSSRApp(App1))

    // Request 2
    ServerStorage.reset()
    const request2: Record<string, unknown> = { id: 'req-2' }
    ServerStorage.init(() => request2)

    const App2 = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
          reactive<ActionsPropsBasic>({ list: [{ label: 'Request 2 Button' }] }),
          { components: { button: ButtonMock } as ActionsComponents }
        )
        return design.render()
      }
    })
    const html2 = await renderToString(createSSRApp(App2))

    expect(html1).toContain('Request 1 Button')
    expect(html1).not.toContain('Request 2 Button')

    expect(html2).toContain('Request 2 Button')
    expect(html2).not.toContain('Request 1 Button')
  })
})
