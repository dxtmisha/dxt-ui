// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type VNodeChild } from 'vue'
import type { ConstrBind, ConstrClassObject, ConstrExpose } from '@dxtmisha/functional'

import { Skeleton } from '../Skeleton'
import { SkeletonDesign } from '../SkeletonDesign'
import type { SkeletonClassesList } from '../basicTypes'
import type { SkeletonProps } from '../props'
import type { SkeletonClasses, SkeletonComponents, SkeletonExpose } from '../types'

/** Mounted application cleanup callbacks / Обработчики очистки приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
})

/**
 * Supplies deterministic logic outputs to isolate the design layer from loading transitions.
 *
 * Предоставляет предсказуемые результаты логики для проверки дизайна отдельно от переходов загрузки.
 */
class StubSkeleton extends Skeleton {
  /**
   * Returns a marker binding controlled by reactive props.
   *
   * Возвращает привязку-маркер, управляемую реактивными свойствами.
   * @returns root bindings / привязки корня
   */
  override get binds(): ConstrBind {
    return { 'data-logic-active': String(this.props.active ?? false) }
  }

  /**
   * Returns a marker class for design composition checks.
   *
   * Возвращает класс-маркер для проверки композиции дизайна.
   * @returns logic classes / классы логики
   */
  override get classes(): ConstrClassObject {
    return { 'logic-active': Boolean(this.props.active) }
  }
}

/** Isolated design fixture / Изолированная фикстура дизайна */
interface DesignFixture {
  /** Root element / Корневой элемент */
  root: HTMLDivElement
  /** Exposed API / Публичный API */
  exposed: ConstrExpose<HTMLDivElement, SkeletonExpose>
}

/**
 * Mounts SkeletonDesign with an injected logic class and real Vue slot context.
 *
 * Монтирует SkeletonDesign с внедрённым классом логики и настоящим контекстом слотов Vue.
 * @param props reactive properties / реактивные свойства
 * @param slot optional slot renderer / необязательный рендерер слота
 * @returns mounted design fixture / смонтированная фикстура дизайна
 */
function mountDesign(
  props: SkeletonProps,
  slot?: (classes: SkeletonClassesList) => VNodeChild
): DesignFixture {
  let exposed!: ConstrExpose<HTMLDivElement, SkeletonExpose>
  const Component = defineComponent({
    setup() {
      const design = new SkeletonDesign<SkeletonComponents, SkeletonExpose, SkeletonClasses, SkeletonProps>(
        'd1.skeleton',
        props,
        {
          classes: computed(() => ({ main: { 'token-class': true } })),
          styles: computed(() => ({ '--test-opacity': props.active ? '1' : '0' }))
        },
        StubSkeleton
      )
      exposed = design.expose()
      return design.render()
    }
  })
  const container = document.createElement('div')
  const app = createApp({
    setup() {
      return () => h(Component, { id: 'design-root', class: 'caller-class' }, slot ? { default: slot } : undefined)
    }
  })
  app.mount(container)
  cleanups.push(() => app.unmount())
  return { root: container.firstElementChild as HTMLDivElement, exposed }
}

describe('SkeletonDesign (isolated design class)', () => {
  it('composes injected logic bindings with token and caller classes, styles, and attributes', () => {
    const { root } = mountDesign({ active: true })
    expect(root.tagName).toBe('DIV')
    expect(root.id).toBe('design-root')
    expect(root.classList.contains('logic-active')).toBe(true)
    expect(root.classList.contains('token-class')).toBe(true)
    expect(root.classList.contains('caller-class')).toBe(true)
    expect(root.getAttribute('data-logic-active')).toBe('true')
    expect(root.style.getPropertyValue('--test-opacity')).toBe('1')
  })

  it('updates design bindings, classes, and styles while preserving the root element', async () => {
    const props = reactive<SkeletonProps>({ active: false })
    const { root, exposed } = mountDesign(props)
    expect(root.getAttribute('data-logic-active')).toBe('false')
    expect(root.classList.contains('logic-active')).toBe(false)
    expect(root.style.getPropertyValue('--test-opacity')).toBe('0')
    props.active = true
    await nextTick()
    expect(exposed.elementHtml?.value).toBe(root)
    expect(root.getAttribute('data-logic-active')).toBe('true')
    expect(root.classList.contains('logic-active')).toBe(true)
    expect(root.style.getPropertyValue('--test-opacity')).toBe('1')
  })

  it('exposes the root ref and a callable detached isActive method', () => {
    const props = reactive<SkeletonProps>({ active: false })
    const { root, exposed } = mountDesign(props)
    const { isActive } = exposed
    expect(exposed.elementHtml?.value).toBe(root)
    expect(isActive()).toBe(false)
    props.active = true
    expect(isActive()).toBe(true)
  })

  it('projects scoped slot classes and preserves real slot nodes', () => {
    let receivedClasses: SkeletonClassesList | undefined
    const { root } = mountDesign({}, (classes) => {
      receivedClasses = classes
      return h('p', { class: classes.classText }, 'Đang tải — Загрузка')
    })
    expect(receivedClasses).toEqual(Skeleton.getClassesListByDesign('d1'))
    expect(root.querySelector('p')?.className).toBe('d1-skeleton__text')
    expect(root.textContent).toBe('Đang tải — Загрузка')
  })

  it('renders an empty root when the default slot is absent', () => {
    const { root } = mountDesign({})
    expect(root.childNodes).toHaveLength(0)
    expect(root.getAttribute('data-logic-active')).toBe('false')
  })
})
