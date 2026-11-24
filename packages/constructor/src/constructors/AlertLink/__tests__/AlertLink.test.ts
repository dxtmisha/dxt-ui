// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { type ConstrClasses, type ConstrStyles, RouterItemRef } from '@dxtmisha/functional'

import { AlertLink } from '../AlertLink'
import { AlertLinkDesign } from '../AlertLinkDesign'
import type { AlertLinkProps } from '../props'
import type {
  AlertLinkClasses,
  AlertLinkComponents,
  AlertLinkExpose,
  AlertLinkSlots
} from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/**
 * Inspectable AlertLink class tracking lazy instance creation during integration tests.
 *
 * Проверяемый класс AlertLink, отслеживающий ленивое создание экземпляров.
 */
class TrackedAlertLink extends AlertLink {
  /** Tracks created instances map / Карта созданных экземпляров */
  get instantiatedItems() {
    return this.instances
  }
}

/**
 * Mounts full AlertLinkDesign component in jsdom with optional attrs, props, and slots.
 *
 * Монтирует полный компонент AlertLinkDesign в jsdom с опциональными атрибутами, свойствами и слотами.
 */
function mountAlertLinkComponent(options: {
  attrs?: Record<string, unknown>
  initialProps?: AlertLinkProps
  slots?: AlertLinkSlots
} = {}) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  cleanups.push(() => host.remove())

  const props = reactive<AlertLinkProps>({ divider: true, ...options.initialProps })
  const onClick = vi.fn()
  const onClickLite = vi.fn()
  let exposeApi!: AlertLinkExpose

  const AlertLinkComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-alertLink': true,
          'd1-alertLink--divider': props.divider
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--d1-alertLink-linkGap': '4px'
      }))

      const design = new AlertLinkDesign<
        AlertLinkComponents,
        AlertLinkExpose,
        AlertLinkClasses,
        AlertLinkProps
      >(
        'd1.alertLink',
        props,
        {
          classes: classesToken,
          emits: (type: string, ...args: any[]) => {
            if (type === 'click') onClick(...args)
            if (type === 'clickLite') onClickLite(...args)
          },
          styles: stylesToken
        }
      )

      exposeApi = design.expose()
      return design.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      return () => h(AlertLinkComponent, options.attrs ?? {}, options.slots as any)
    }
  })

  const app = createApp(Wrapper)
  app.mount(host)
  cleanups.push(() => app.unmount())

  return { exposeApi, host, onClick, onClickLite, props }
}

describe('AlertLink (Component Integration)', () => {
  it('should render anchor with BEM classes, href, label, labelId, and reactive updates', async () => {
    const { host, props } = mountAlertLinkComponent({
      initialProps: {
        label: 'Learn more',
        labelId: 'custom-link-label',
        href: 'https://example.com/help'
      }
    })

    await nextTick()

    const anchor = host.querySelector('a.d1-alertLink') as HTMLAnchorElement
    const labelSpan = anchor.querySelector('span.d1-alertLink__label') as HTMLSpanElement

    expect(anchor).not.toBeNull()
    expect(anchor.classList.contains('d1-alertLink--divider')).toBe(true)
    expect(anchor.classList.contains('d1-a--static')).toBe(true)
    expect(anchor.getAttribute('href')).toBe('https://example.com/help')
    expect(anchor.style.getPropertyValue('--d1-alertLink-linkGap')).toBe('4px')
    expect(labelSpan).not.toBeNull()
    expect(labelSpan.getAttribute('id')).toBe('custom-link-label')
    expect(labelSpan.textContent).toBe('Learn more')

    props.divider = false
    props.label = 0
    await nextTick()

    expect(anchor.classList.contains('d1-alertLink--divider')).toBe(false)
    expect(anchor.querySelector('span.d1-alertLink__label')?.textContent).toBe('0')
  })

  it('should render default slot alongside label and support slot-only links', async () => {
    const { host } = mountAlertLinkComponent({
      slots: {
        default: () => [h('strong', { class: 'slot-emphasis' }, 'Slotted Link')]
      }
    })

    await nextTick()

    const labelSpan = host.querySelector('span.d1-alertLink__label')
    expect(labelSpan).not.toBeNull()
    expect(labelSpan?.querySelector('.slot-emphasis')?.textContent).toBe('Slotted Link')
  })

  it('should handle click, Enter keydown without href, expose value/detail, and index fallback', async () => {
    const { exposeApi, host, onClick, onClickLite, props } = mountAlertLinkComponent({
      initialProps: {
        label: 'Action Link',
        index: 'idx-1',
        detail: { source: 'banner' }
      }
    })

    await nextTick()

    expect(exposeApi.getValue?.()).toBe('idx-1')
    expect(exposeApi.getDetail?.()).toEqual({ source: 'banner' })

    const anchor = host.querySelector('a') as HTMLAnchorElement
    expect(anchor.getAttribute('tabindex')).toBe('0')
    expect(anchor.getAttribute('role')).toBe('button')
    anchor.click()

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClickLite).toHaveBeenCalledWith({
      type: 'click',
      value: 'idx-1',
      detail: { source: 'banner' }
    })

    props.value = 'explicit-value'
    await nextTick()

    expect(exposeApi.getValue?.()).toBe('explicit-value')

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
    anchor.dispatchEvent(enterEvent)

    expect(onClick).toHaveBeenLastCalledWith(expect.any(KeyboardEvent), {
      type: 'click',
      value: 'explicit-value',
      detail: { source: 'banner' }
    })
    expect(onClickLite).toHaveBeenLastCalledWith({
      type: 'click',
      value: 'explicit-value',
      detail: { source: 'banner' }
    })
    expect(enterEvent.defaultPrevented).toBe(true)
  })

  it('should allow native navigation and suppress custom click emit when href is set without to', async () => {
    const { host, onClick, onClickLite } = mountAlertLinkComponent({
      initialProps: {
        label: 'Native Link',
        href: '#section',
        value: 'native-val'
      }
    })

    await nextTick()

    const anchor = host.querySelector('a') as HTMLAnchorElement
    const clickEvent = new MouseEvent('click', { cancelable: true, bubbles: true })
    anchor.dispatchEvent(clickEvent)

    expect(clickEvent.defaultPrevented).toBe(false)
    expect(onClick).not.toHaveBeenCalled()
    expect(onClickLite).not.toHaveBeenCalled()
  })

  it('should integrate with RouterItemRef for "to" route navigation and href generation', async () => {
    const rawToHrefSpy = vi.spyOn(RouterItemRef, 'rawToHref').mockReturnValue({ href: '/resolved-route' })
    const pushSpy = vi.spyOn(RouterItemRef, 'push').mockImplementation(() => undefined)

    const { host, onClick } = mountAlertLinkComponent({
      initialProps: {
        label: 'Go to Settings',
        to: { name: 'settings' } as any
      }
    })

    await nextTick()

    const anchor = host.querySelector('a') as HTMLAnchorElement
    expect(rawToHrefSpy).toHaveBeenCalled()
    expect(anchor.getAttribute('href')).toBe('/resolved-route')

    const clickEvent = new MouseEvent('click', { cancelable: true })
    anchor.dispatchEvent(clickEvent)

    expect(pushSpy).toHaveBeenCalledWith({ name: 'settings' })
    expect(clickEvent.defaultPrevented).toBe(true)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('should keep LabelInclude lazy when neither label nor default slot is provided', async () => {
    let trackedInstance!: TrackedAlertLink

    class InspectedDesign extends AlertLinkDesign<
      AlertLinkComponents,
      AlertLinkExpose,
      AlertLinkClasses,
      AlertLinkProps
    > {
      constructor(name: string, props: Readonly<AlertLinkProps>) {
        super(name, props, undefined, TrackedAlertLink)
        trackedInstance = this.item as TrackedAlertLink
      }
    }

    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<AlertLinkProps>({})
    const app = createApp({
      setup() {
        const design = new InspectedDesign('d1.alertLink', props)
        return design.render()
      }
    })

    app.mount(host)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(host.querySelector('span')).toBeNull()
    expect(trackedInstance.hasInstance('label')).toBe(false)

    props.label = 'Lazy Activated'
    await nextTick()

    expect(trackedInstance.hasInstance('label')).toBe(true)
    expect(host.querySelector('span')?.textContent).toBe('Lazy Activated')
  })
})
