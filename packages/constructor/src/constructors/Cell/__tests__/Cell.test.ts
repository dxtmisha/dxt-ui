// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { CellDesign } from '../CellDesign'
import type { CellProps } from '../props'
import type {
  CellClasses,
  CellComponents,
  CellEmits,
  CellExpose,
  CellSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

const stubComponents: CellComponents = {
  icon: defineComponent({
    name: 'StubIcon',
    props: { icon: { type: [String, Object], default: '' } },
    setup(props, { attrs }) {
      return () => h('span', { ...attrs, 'data-stub': 'icon', 'data-icon': String(props.icon) })
    }
  }),
  progress: defineComponent({
    name: 'StubProgress',
    setup(_props, { attrs }) {
      return () => h('span', { ...attrs, 'data-stub': 'progress' })
    }
  }),
  ripple: defineComponent({
    name: 'StubRipple',
    setup(_props, { attrs }) {
      return () => h('span', { ...attrs, 'data-stub': 'ripple' })
    }
  })
}

/**
 * Mounts a CellDesign instance into jsdom for full component integration testing.
 *
 * Монтирует экземпляр CellDesign в jsdom для интеграционного тестирования всего компонента.
 * @param initialProps initial Cell properties / начальные свойства Cell
 * @param slots component slots / слоты компонента
 * @param onEmit event emit handler / обработчик событий
 * @returns mounted test helpers / вспомогательные объекты теста
 */
async function mountCell(
  initialProps: CellProps = {},
  slots?: CellSlots,
  onEmit?: ConstrEmit<CellEmits>
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<CellProps>({ ...initialProps })
  let exposed!: CellExpose

  const Host = defineComponent({
    setup() {
      const design = new CellDesign<
        CellComponents,
        CellExpose,
        CellClasses,
        CellProps
      >('d1.cell', props, {
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

describe('Cell (integration)', () => {
  afterEach(() => {
    mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should render label, caption, description, icons, ripple, and progress subcomponents together', async () => {
    const { container, props, root } = await mountCell({
      label: 'Profile',
      caption: 'Admin',
      description: 'Manage account details',
      icon: 'person',
      iconTrailing: 'chevron_right',
      dynamic: true,
      divider: true,
      value: 'profile-cell'
    })

    expect(root().tagName).toBe('DIV')
    expect(root().getAttribute('role')).toBe('button')
    expect(root().getAttribute('tabindex')).toBe('0')
    expect(root().getAttribute('data-divider')).toBe('active')
    expect(root().getAttribute('data-value')).toBe('profile-cell')
    expect(container.textContent).toContain('Profile')
    expect(container.textContent).toContain('Admin')
    expect(container.textContent).toContain('Manage account details')
    expect(container.querySelectorAll('[data-stub="icon"]').length).toBe(2)
    expect(container.querySelector('[data-stub="ripple"]')).not.toBeNull()
    expect(container.querySelector('[data-stub="progress"]')).toBeNull()

    props.loading = true
    await nextTick()
    expect(container.querySelector('[data-stub="progress"]')).not.toBeNull()
  })

  it('should render trailing and body slots with CellClassesSub and skip undefined slot entries', async () => {
    const { container } = await mountCell(
      { label: 'With Slots' },
      {
        trailing: classesSub => h('span', { 'class': classesSub.trailing, 'data-testid': 'trailing-slot' }, '99+'),
        body: classesSub => h('p', { 'class': classesSub.description, 'data-testid': 'body-slot' }, 'Extra body')
      }
    )

    expect(container.querySelector('[data-testid="trailing-slot"]')?.textContent).toBe('99+')
    expect(container.querySelector('[data-testid="body-slot"]')?.textContent).toBe('Extra body')
    expect(container.querySelector('.d1-cell__contextTrailing')).not.toBeNull()
    expect(container.querySelector('.d1-cell__body')).not.toBeNull()

    const { container: emptySlotContainer } = await mountCell(
      { label: 'No Slots' },
      { trailing: undefined, body: undefined }
    )
    expect(emptySlotContainer.querySelector('.d1-cell__contextTrailing')).toBeNull()
    expect(emptySlotContainer.querySelector('.d1-cell__body')).toBeNull()
  })

  it('should emit click and clickLite on click and Enter keydown, and suppress when disabled', async () => {
    const emitSpy = vi.fn()
    const { root, props, exposed } = await mountCell(
      {
        label: 'Action Item',
        dynamic: true,
        value: 'act-1',
        detail: { source: 'menu' }
      },
      undefined,
      emitSpy as unknown as ConstrEmit<CellEmits>
    )

    expect(exposed.getValue?.()).toBe('act-1')
    expect(exposed.getDetail?.()).toEqual({ source: 'menu' })

    root().click()
    expect(emitSpy).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
      type: 'click',
      value: 'act-1',
      detail: { source: 'menu' }
    })
    expect(emitSpy).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 'act-1',
      detail: { source: 'menu' }
    })

    emitSpy.mockClear()
    root().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(emitSpy).toHaveBeenCalledWith('clickLite', expect.objectContaining({ value: 'act-1' }))

    emitSpy.mockClear()
    props.disabled = true
    await nextTick()
    root().click()
    expect(emitSpy).not.toHaveBeenCalled()
  })

  it('should render anchor element when href is provided and omit button role', async () => {
    const { root } = await mountCell({
      label: 'External Link',
      href: 'https://example.com',
      dynamic: true
    })

    expect(root().tagName).toBe('A')
    expect(root().getAttribute('href')).toBe('https://example.com')
    expect(root().getAttribute('role')).toBeNull()
  })
})
