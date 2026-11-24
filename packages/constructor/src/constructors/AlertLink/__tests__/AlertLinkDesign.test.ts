// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { AlertLinkDesign } from '../AlertLinkDesign'
import type { AlertLinkProps } from '../props'
import type { AlertLinkClasses, AlertLinkComponents, AlertLinkExpose } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('AlertLinkDesign', () => {
  it('should render an anchor element, bind ref to elementHtml, and expose getValue and getDetail', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposedResult!: AlertLinkExpose & { elementHtml?: Ref<HTMLAnchorElement | undefined> }

    const Component = defineComponent({
      setup() {
        const props: AlertLinkProps = reactive({
          label: 'Documentation',
          href: 'https://example.com/docs',
          value: 'docs-link',
          detail: { target: 'external' }
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-alertLink': true,
            'd1-alertLink--divider': true
          }
        }))

        const design = new AlertLinkDesign<
          AlertLinkComponents,
          AlertLinkExpose,
          AlertLinkClasses,
          AlertLinkProps
        >('d1.alertLink', props, {
          classes: classesToken
        })

        exposedResult = design.expose() as AlertLinkExpose & { elementHtml?: Ref<HTMLAnchorElement | undefined> }
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const anchor = container.querySelector('a.d1-alertLink') as HTMLAnchorElement
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('href')).toBe('https://example.com/docs')
    expect(anchor.textContent).toBe('Documentation')
    expect(exposedResult.elementHtml?.value).toBe(anchor)
    expect(exposedResult.getValue?.()).toBe('docs-link')
    expect(exposedResult.getDetail?.()).toEqual({ target: 'external' })
  })

  it('should initialize label subclass name in initClasses', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<AlertLinkClasses>

    const Component = defineComponent({
      setup() {
        const props: AlertLinkProps = reactive({})
        const design = new AlertLinkDesign<
          AlertLinkComponents,
          AlertLinkExpose,
          AlertLinkClasses,
          AlertLinkProps
        >('d1.alertLink', props)

        designClasses = (design as any).initClasses()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designClasses.label).toBe('d1-alertLink__label')
  })

  it('should merge external attrs class, style, and onClick handlers without overwriting internal bindings', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalClick = vi.fn()
    const emitClick = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props: AlertLinkProps = reactive({
          label: 'Merge Link',
          value: 'merge-val'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-alertLink': true
          }
        }))

        const design = new AlertLinkDesign<
          AlertLinkComponents,
          AlertLinkExpose,
          AlertLinkClasses,
          AlertLinkProps
        >('d1.alertLink', props, {
          classes: classesToken,
          emits: emitClick
        })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          'class': 'custom-alert-link',
          'data-testid': 'merged-link',
          'style': { fontWeight: '600' },
          'onClick': externalClick
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const anchor = container.querySelector('a') as HTMLAnchorElement
    expect(anchor).not.toBeNull()
    expect(anchor.classList.contains('d1-alertLink')).toBe(true)
    expect(anchor.classList.contains('d1-a--static')).toBe(true)
    expect(anchor.classList.contains('custom-alert-link')).toBe(true)
    expect(anchor.getAttribute('data-testid')).toBe('merged-link')
    expect(anchor.style.fontWeight).toBe('600')

    anchor.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(emitClick).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
      type: 'click',
      value: 'merge-val',
      detail: undefined
    })
    expect(emitClick).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 'merge-val',
      detail: undefined
    })
  })
})
