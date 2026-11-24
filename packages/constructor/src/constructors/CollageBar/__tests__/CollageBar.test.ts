// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { CollageBarDesign } from '../CollageBarDesign'
import type { CollageBarProps } from '../props'
import type {
  CollageBarClasses,
  CollageBarComponents,
  CollageBarEmits,
  CollageBarExpose,
  CollageBarSlots
} from '../types'

/** Cleanup callbacks for mounted test apps / Обработчики очистки смонтированных тестовых приложений */
const mountedCleanups: Array<() => void> = []

/** Stub button component mirroring D1Button props and event forwarding / Заглушка кнопки, имитирующая свойства и события D1Button */
const stubComponents: CollageBarComponents = {
  button: defineComponent({
    name: 'StubButton',
    props: {
      label: { type: [String, Number], default: undefined },
      icon: { type: [String, Object], default: undefined },
      iconTrailing: { type: [String, Object], default: undefined },
      href: { type: String, default: undefined },
      disabled: { type: Boolean, default: false }
    },
    setup(props, { attrs }) {
      return () => h(
        props.href ? 'a' : 'button',
        {
          ...attrs,
          'href': props.href,
          'disabled': props.href ? undefined : props.disabled,
          'data-stub': 'button',
          'data-icon': props.icon ? String(props.icon) : undefined,
          'data-icon-trailing': props.iconTrailing ? String(props.iconTrailing) : undefined
        },
        props.label !== undefined ? String(props.label) : undefined
      )
    }
  })
}

/**
 * Mounts a full CollageBarDesign component tree into jsdom for integration testing.
 *
 * Монтирует полное дерево компонента CollageBarDesign в jsdom для интеграционного тестирования.
 * @param initialProps initial CollageBar properties / начальные свойства CollageBar
 * @param slots component slots / слоты компонента
 * @param onEmit event emit handler / обработчик событий
 * @returns mounted helpers and DOM root accessor / вспомогательные объекты и доступ к корневому DOM-элементу
 */
async function mountCollageBar(
  initialProps: CollageBarProps = {},
  slots?: CollageBarSlots,
  onEmit?: ConstrEmit<CollageBarEmits>
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<CollageBarProps>({ ...initialProps })
  let exposed!: CollageBarExpose & { elementHtml?: { value?: HTMLElement } }

  const Host = defineComponent({
    setup() {
      const design = new CollageBarDesign<
        CollageBarComponents,
        CollageBarExpose,
        CollageBarClasses,
        CollageBarProps
      >('d1.collageBar', props, {
        components: stubComponents,
        emits: onEmit
      })

      exposed = design.expose()
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(Host, null, slots ? (slots as Record<string, unknown>) : undefined)
    }
  })

  const app = createApp(Root)
  app.mount(container)
  mountedCleanups.push(() => {
    app.unmount()
    container.remove()
  })

  await nextTick()

  return {
    container,
    props,
    exposed,
    root: () => container.firstElementChild as HTMLElement
  }
}

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('CollageBar (integration)', () => {
  it('should render full DOM hierarchy with label, description, button, and single BEM button class', async () => {
    const { container, root } = await mountCollageBar({
      label: 'Hội An Ancient Town',
      description: 'Evening lanterns along Thu Bồn River 🏮',
      button: 'Explore',
      icon: 'arrow_forward'
    })

    expect(root().tagName).toBe('FIGCAPTION')
    expect(container.querySelector('.d1-collageBar__context')).not.toBeNull()
    expect(container.querySelector('.d1-collageBar__label')?.textContent).toBe('Hội An Ancient Town')
    expect(container.querySelector('.d1-collageBar__description')?.textContent).toBe('Evening lanterns along Thu Bồn River 🏮')

    const button = container.querySelector('[data-stub="button"]') as HTMLElement
    expect(button).not.toBeNull()
    expect(button.textContent).toBe('Explore')
    expect(button.getAttribute('data-icon')).toBe('arrow_forward')
    expect(button.className.split(/\s+/).filter(name => name === 'd1-collageBar__button')).toHaveLength(1)
  })

  it('should render numeric 0 values for label, description, and button', async () => {
    const { container } = await mountCollageBar({
      label: 0,
      description: 0,
      button: 0
    })

    expect(container.querySelector('.d1-collageBar__label')?.textContent).toBe('0')
    expect(container.querySelector('.d1-collageBar__description')?.textContent).toBe('0')
    expect(container.querySelector('[data-stub="button"]')?.textContent).toBe('0')
  })

  it('should project default, description, body, and trailing slots into correct containers', async () => {
    const { root } = await mountCollageBar(
      {},
      {
        default: () => h('strong', { 'data-testid': 'slot-default' }, 'Default Label'),
        description: () => h('em', { 'data-testid': 'slot-description' }, 'Slot Description'),
        body: () => h('div', { 'data-testid': 'slot-body' }, 'Body Content'),
        trailing: () => h('span', { 'data-testid': 'slot-trailing' }, 'Trailing Badge')
      }
    )

    const context = root().querySelector('.d1-collageBar__context')
    expect(context).not.toBeNull()
    expect(context?.querySelector('[data-testid="slot-default"]')?.textContent).toBe('Default Label')
    expect(context?.querySelector('[data-testid="slot-description"]')?.textContent).toBe('Slot Description')
    expect(context?.querySelector('[data-testid="slot-body"]')?.textContent).toBe('Body Content')
    expect(context?.querySelector('[data-testid="slot-trailing"]')).toBeNull()
    expect(root().querySelector('[data-testid="slot-trailing"]')?.textContent).toBe('Trailing Badge')
  })

  it('should emit click and clickLite on button click and Enter keydown, and run custom button onClick', async () => {
    const emitSpy = vi.fn()
    const customClick = vi.fn()

    const { container, exposed } = await mountCollageBar(
      {
        label: 'Photo Card',
        value: 'photo-99',
        detail: { album: 'trip' },
        button: {
          label: 'View',
          onClick: customClick
        }
      },
      undefined,
      emitSpy as unknown as ConstrEmit<CollageBarEmits>
    )

    expect(exposed.getValue?.()).toBe('photo-99')
    expect(exposed.getDetail?.()).toEqual({ album: 'trip' })
    expect(exposed.elementHtml?.value).toBeInstanceOf(HTMLElement)

    const button = container.querySelector('[data-stub="button"]') as HTMLButtonElement
    expect(button).not.toBeNull()

    button.click()
    expect(customClick).toHaveBeenCalledTimes(1)
    expect(emitSpy).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
      type: 'click',
      value: 'photo-99',
      detail: { album: 'trip' }
    })
    expect(emitSpy).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 'photo-99',
      detail: { album: 'trip' }
    })

    emitSpy.mockClear()
    button.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(emitSpy).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 'photo-99',
      detail: { album: 'trip' }
    })
  })

  it('should reactively add and remove label, description, button, and root tag', async () => {
    const { container, props, root } = await mountCollageBar({})

    expect(root().tagName).toBe('FIGCAPTION')
    expect(container.querySelector('.d1-collageBar__context')).toBeNull()
    expect(container.querySelector('[data-stub="button"]')).toBeNull()

    props.label = 'Привет Мир'
    props.button = 'Открыть'
    props.tag = 'div'
    await nextTick()

    expect(root().tagName).toBe('DIV')
    expect(container.querySelector('.d1-collageBar__label')?.textContent).toBe('Привет Мир')
    expect(container.querySelector('[data-stub="button"]')?.textContent).toBe('Открыть')

    props.label = ''
    props.button = ''
    await nextTick()

    expect(container.querySelector('.d1-collageBar__context')).toBeNull()
    expect(container.querySelector('[data-stub="button"]')).toBeNull()
  })
})
