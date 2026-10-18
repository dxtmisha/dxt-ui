// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, createSSRApp, defineComponent, h, isVNode, nextTick, onUnmounted, ref, shallowRef, type App, type Slots, type StyleValue, type VNode } from 'vue'
import { renderToString } from 'vue/server-renderer'

import { DesignConstructorAbstract } from '../DesignConstructorAbstract'
import type { ConstrClasses, ConstrItem, ConstrOptions, ConstrStyles } from '../../../types/constructorTypes'

/** Slot fixture properties / Свойства тестового компонента со слотами */
interface SlotProps {
  value?: string
}

/**
 * Design fixture exposing slot rendering inside a real Vue render context.
 *
 * Тестовый дизайн, открывающий рендеринг слотов в настоящем контексте рендеринга Vue.
 */
class SlotDesign extends DesignConstructorAbstract<
  HTMLElement,
  Record<string, object>,
  Record<string, never>,
  Record<string, never>,
  Slots,
  ConstrClasses,
  SlotProps
> {
  /**
   * Initializes the slot fixture.
   *
   * Инициализирует тестовый дизайн со слотами.
   * @param props reactive component properties / реактивные свойства компонента
   * @param options design configuration / конфигурация дизайна
   */
  constructor(
    props: Readonly<SlotProps> = {},
    options?: ConstrOptions<Record<string, object>, Record<string, never>, SlotProps>
  ) {
    super('d1.slot-test', props, options)
  }

  /**
   * Renders a named slot for contract assertions during rendering.
   *
   * Рендерит именованный слот для проверки контракта во время рендеринга.
   * @param name slot name / имя слота
   * @param children optional child accumulator / необязательный массив дочерних элементов
   * @param props slot properties / свойства слота
   * @returns slot fragment or undefined / фрагмент слота или undefined
   */
  getSlot(name: string, children?: VNode[], props?: ConstrItem): VNode | undefined {
    return this.initSlot(name, children, props)
  }

  /**
   * Returns no additional exposed data.
   *
   * Возвращает пустой набор дополнительных экспортируемых данных.
   * @returns exposed data / экспортируемые данные
   */
  protected override initExpose(): Record<string, never> {
    return {}
  }

  /**
   * Returns the fixture classes.
   *
   * Возвращает классы тестового компонента.
   * @returns class map / карта классов
   */
  protected override initClasses(): Partial<ConstrClasses> {
    return { main: {} }
  }

  /**
   * Returns no additional styles.
   *
   * Возвращает пустой набор дополнительных стилей.
   * @returns styles / стили
   */
  protected override initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Renders adjacent named slots using the same accumulator as FormDesign.
   *
   * Рендерит соседние именованные слоты через такой же массив, как FormDesign.
   * @returns fixture root / корень тестового компонента
   */
  protected override initRender(): VNode {
    const children: VNode[] = []
    this.initSlot('header', children)
    this.initSlot('default', children, { value: this.props.value })
    this.initSlot('footer', children)
    return h('main', { ref: this.element }, children)
  }
}

/**
 * Applies computed styles to a nested element to exclude automatic attribute inheritance.
 *
 * Применяет вычисленные стили к вложенному элементу, исключая автоматическое наследование атрибутов.
 */
class StyleDesign extends SlotDesign {
  /**
   * Returns styles from the design logic.
   *
   * Возвращает стили логики дизайна.
   * @returns logic styles / стили логики
   */
  protected override initStyles(): ConstrStyles {
    return { color: 'red', padding: '1px', display: 'block' }
  }

  /**
   * Renders computed styles inside a separate root wrapper.
   *
   * Рендерит вычисленные стили внутри отдельной корневой обёртки.
   * @returns fixture root / корень тестового компонента
   */
  protected override initRender(): VNode {
    return h('main', [h('span', { style: this.styles?.value })])
  }
}

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const applications: App[] = []

/**
 * Mounts and tracks a Vue application for cleanup.
 *
 * Монтирует приложение Vue и регистрирует его для очистки.
 * @param application application instance / экземпляр приложения
 * @returns application container / контейнер приложения
 */
function mountApplication(application: App): HTMLDivElement {
  const container = document.createElement('div')
  applications.push(application)
  application.mount(container)
  return container
}

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
})

describe('DesignConstructorAbstract external styles', () => {
  it.each<{ name: string, initial: StyleValue, updated: StyleValue }>([
    {
      name: 'object',
      initial: { 'color': 'green', '--external-style': 'first' },
      updated: { 'color': 'blue', 'padding': '4px', '--external-style': 'second' }
    },
    {
      name: 'string',
      initial: 'color: green; --external-style: first',
      updated: 'color: blue; padding: 4px; --external-style: second'
    },
    {
      name: 'nested array',
      initial: [{ color: 'green' }, ['--external-style: first']],
      updated: [{ color: 'blue' }, ['padding: 4px; --external-style: second']]
    }
  ])('merges, updates and removes external $name styles after logic and token styles', async ({ initial, updated }) => {
    const externalStyle = shallowRef<StyleValue>(initial)
    const stylesToken = shallowRef<ConstrStyles>({ color: 'orange', padding: '2px' })
    const host = defineComponent({
      setup() {
        const render = new StyleDesign({}, { styles: stylesToken }).render()
        return (): VNode => h(render)
      }
    })
    const container = mountApplication(createApp({
      setup: () => () => h(host, { style: externalStyle.value })
    }))
    const element = container.querySelector('span')
    if (!element) throw new Error('The styled fixture element was not mounted')

    expect(element.style.color).toBe('green')
    expect(element.style.padding).toBe('2px')
    expect(element.style.display).toBe('block')
    expect(element.style.getPropertyValue('--external-style')).toBe('first')

    externalStyle.value = updated
    await nextTick()
    expect(element.style.color).toBe('blue')
    expect(element.style.padding).toBe('4px')
    expect(element.style.getPropertyValue('--external-style')).toBe('second')

    externalStyle.value = undefined
    await nextTick()
    expect(element.style.color).toBe('orange')
    expect(element.style.padding).toBe('2px')
    expect(element.style.display).toBe('block')
    expect(element.style.getPropertyValue('--external-style')).toBe('')
  })
})

describe('DesignConstructorAbstract slot rendering', () => {
  it('returns one VNode for every slot group while preserving all child nodes and their order', () => {
    const host = defineComponent({
      setup() {
        const design = new SlotDesign()
        return (): VNode => {
          const children = [h('span', 'before')]
          const slot = design.getSlot('default', children)
          expect(isVNode(slot)).toBe(true)
          expect(children).toHaveLength(2)
          expect(children[1]).toBe(slot)
          children.push(h('span', 'after'))
          return h('main', children)
        }
      }
    })
    const container = mountApplication(createApp({
      setup: () => () => h(host, {}, { default: () => [h('b', 'first'), h('i', 'second')] })
    }))

    expect(Array.from(container.querySelector('main')?.children ?? [], element => element.textContent))
      .toEqual(['before', 'first', 'second', 'after'])
  })

  it('returns undefined and leaves accumulated children unchanged when a slot is absent', () => {
    const container = mountApplication(createApp({
      setup() {
        const design = new SlotDesign()
        return (): VNode => {
          const child = h('span', 'retained')
          const children = [child]
          expect(design.getSlot('missing', children)).toBeUndefined()
          expect(design.getSlot('missing')).toBeUndefined()
          expect(children).toEqual([child])
          return h('main', children)
        }
      }
    }))

    expect(container.textContent).toBe('retained')
  })

  it('handles empty slot content without removing adjacent slots', () => {
    const host = defineComponent({
      setup() {
        return new SlotDesign().render()
      }
    })
    const container = mountApplication(createApp({
      setup: () => () => h(host, {}, {
        header: () => [h('b', 'header')],
        default: () => [],
        footer: () => [h('i', 'footer')]
      })
    }))

    expect(container.textContent).toBe('headerfooter')
  })

  it('passes default and scoped slot properties and updates reactive values', async () => {
    const value = ref('first')
    const header = vi.fn(() => [h('b', 'header')])
    const body = vi.fn((props: SlotProps) => [h('span', props.value)])
    const host = defineComponent({
      props: { value: String },
      setup(props) {
        return new SlotDesign(props).render()
      }
    })
    const container = mountApplication(createApp({
      setup: () => () => h(host, { value: value.value }, { header, default: body })
    }))

    expect(header).toHaveBeenCalledWith({})
    expect(body).toHaveBeenCalledWith({ value: 'first' })
    value.value = 'second'
    await nextTick()
    expect(body).toHaveBeenLastCalledWith({ value: 'second' })
    expect(container.querySelector('span')?.textContent).toBe('second')
  })

  it('updates slots through an inner render component while preserving child instances and local state', async () => {
    const showHeader = ref(false)
    const initialized = vi.fn()
    const unmounted = vi.fn()
    const statefulChild = defineComponent({
      setup() {
        const value = ref('unsaved')
        initialized()
        onUnmounted(unmounted)
        return (): VNode => h('input', {
          value: value.value,
          onInput: (event: Event): void => {
            const target = event.target
            if (target instanceof HTMLInputElement) value.value = target.value
          }
        })
      }
    })
    const host = defineComponent({
      setup() {
        const render = new SlotDesign().render()
        return (): VNode => h(render)
      }
    })
    const container = mountApplication(createApp({
      setup: () => () => h(host, {}, {
        ...(showHeader.value ? { header: () => [h('b', 'header')] } : {}),
        default: () => [h(statefulChild)],
        footer: () => [h('i', 'footer')]
      })
    }))
    const input = container.querySelector('input')
    expect(input).not.toBeNull()
    if (!input) throw new Error('The stateful slot input was not mounted')
    input.value = 'edited'
    input.dispatchEvent(new Event('input'))
    await nextTick()

    for (const visible of [true, false, true]) {
      showHeader.value = visible
      await nextTick()
      expect(Boolean(container.querySelector('b'))).toBe(visible)
      expect(container.querySelector('input')).toBe(input)
      expect(input.value).toBe('edited')
      expect(container.querySelector('i')?.textContent).toBe('footer')
    }

    expect(initialized).toHaveBeenCalledTimes(1)
    expect(unmounted).not.toHaveBeenCalled()
  })

  it('updates the inner render component when a slot function changes under the same name', async () => {
    const replacement = ref(false)
    const first = (): VNode[] => [h('span', 'first')]
    const second = (): VNode[] => [h('span', 'second')]
    const host = defineComponent({
      setup() {
        const render = new SlotDesign().render()
        return (): VNode => h(render)
      }
    })
    const container = mountApplication(createApp({
      setup: () => () => h(host, {}, { default: replacement.value ? second : first })
    }))

    expect(container.textContent).toBe('first')
    replacement.value = true
    await nextTick()
    expect(container.textContent).toBe('second')
  })

  it('does not rerender the inner component when the owner updates with unchanged compiled slots', async () => {
    const unused = ref(false)
    const rendered = vi.fn(() => 'stable')
    const host = defineComponent({
      props: { unused: Boolean },
      setup() {
        const render = new SlotDesign().render()
        return (): VNode => h(render)
      }
    })
    const container = mountApplication(createApp({
      components: { SlotHost: host },
      setup: () => ({ unused, rendered }),
      template: '<SlotHost :unused="unused"><span>{{ rendered() }}</span></SlotHost>'
    }))

    expect(rendered).toHaveBeenCalledTimes(1)

    for (const value of [true, false, true]) {
      unused.value = value
      await nextTick()
      expect(container.textContent).toBe('stable')
    }

    expect(rendered).toHaveBeenCalledTimes(1)
  })

  it('renders compiled scoped slot groups during server rendering', async () => {
    const host = defineComponent({
      props: { value: String },
      setup(props) {
        return new SlotDesign(props).render()
      }
    })
    const markup = await renderToString(createSSRApp({
      components: { SlotHost: host },
      template: '<SlotHost value="server"><template #header><b>header</b></template><template #default="{ value }"><span>{{ value }}</span><i>tail</i></template></SlotHost>'
    }))

    expect(markup).toContain('<b>header</b>')
    expect(markup).toContain('<span>server</span><i>tail</i>')
    expect(markup.indexOf('<b>')).toBeLessThan(markup.indexOf('<span>'))
  })
})
