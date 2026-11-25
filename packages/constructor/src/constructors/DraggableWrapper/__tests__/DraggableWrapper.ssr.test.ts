// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'
import { createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { DraggableWrapper } from '../DraggableWrapper'
import { DraggableWrapperDesign } from '../DraggableWrapperDesign'
import type { DraggableWrapperControl } from '../basicTypes'
import type { DraggableWrapperPropsBasic } from '../props'
import type {
  DraggableWrapperClasses,
  DraggableWrapperComponents,
  DraggableWrapperExpose
} from '../types'

/**
 * Inspectable design subclass exposing the orchestrator for SSR lazy-loading checks.
 *
 * Подкласс дизайна с доступом к оркестратору для проверок ленивой инициализации при SSR.
 */
class InspectableSsrDraggableWrapperDesign extends DraggableWrapperDesign<
  DraggableWrapperComponents,
  DraggableWrapperExpose,
  DraggableWrapperClasses,
  DraggableWrapperPropsBasic
> {
  /**
   * Returns the internal orchestrator instance.
   *
   * Возвращает внутренний экземпляр оркестратора.
   * @returns orchestrator instance / экземпляр оркестратора
   */
  getOrchestrator(): DraggableWrapper {
    return this.item
  }
}

describe('DraggableWrapper (SSR)', () => {
  it('should render valid HTML markup in a pure Node environment without browser DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const props = reactive<DraggableWrapperPropsBasic>({
      delay: 0,
      classesSquare: 'custom-spacer'
    })
    const classes = ref<DraggableWrapperClasses>({
      main: { 'd1-draggableWrapper': true },
      item: 'd1-draggableWrapper__item',
      square: 'd1-draggableWrapper__square'
    })

    let orchestrator: DraggableWrapper | undefined

    const InnerComponent = defineComponent({
      setup(_componentProps, { expose }) {
        const design = new InspectableSsrDraggableWrapperDesign(
          'd1.draggableWrapper',
          props,
          { classes: classes as never }
        )

        orchestrator = design.getOrchestrator()
        expose(design.expose())
        return design.render()
      }
    })

    const RootComponent = defineComponent({
      setup() {
        return () => h(
          InnerComponent,
          {
            'data-testid': 'ssr-draggable',
            'class': 'external-ssr-class',
            'style': { opacity: '0.9' }
          },
          {
            default: (control: DraggableWrapperControl) => [
              h('div', { 'class': [control.className, control.classPosition], 'data-value': 'a' }, [
                h('span', { class: control.classClick }, '☰'),
                'Item A'
              ]),
              h('div', { 'class': [control.className, control.classDrop], 'data-value': 'zone' }, 'Drop')
            ]
          }
        )
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(RootComponent)
    const html = await renderToString(app)

    expect(html).toContain('data-testid="ssr-draggable"')
    expect(html).toContain('d1-draggableWrapper')
    expect(html).toContain('external-ssr-class')
    expect(html).toContain('opacity:0.9')
    expect(html).toContain('d1-draggableWrapper__item')
    expect(html).toContain('d1-draggableWrapper__click')
    expect(html).toContain('d1-draggableWrapper__position')
    expect(html).toContain('d1-draggableWrapper__drop')
    expect(html).toContain('d1-draggableWrapper__square')
    expect(html).toContain('draggable-wrapper--')
    expect(html).toContain('Item A')

    // Drag-only helpers remain unallocated during SSR
    expect(orchestrator?.hasInstance('delay')).toBe(false)
    expect(orchestrator?.hasInstance('client')).toBe(false)
    expect(orchestrator?.hasInstance('position')).toBe(false)
    expect(orchestrator?.hasInstance('selection')).toBe(false)
    expect(orchestrator?.hasInstance('emit')).toBe(false)

    // setBlockSelection is SSR-safe no-op
    expect(() => orchestrator?.i('classesData').setBlockSelection(true)).not.toThrow()
    expect(() => orchestrator?.i('classesData').setBlockSelection(false)).not.toThrow()

    expect(warnSpy).not.toHaveBeenCalled()
    warnSpy.mockRestore()
  })

  it('should render custom tag and disabled status class cleanly on the server', async () => {
    const props = reactive<DraggableWrapperPropsBasic>({
      tag: 'section',
      disabled: true
    })

    const InnerComponent = defineComponent({
      setup() {
        const design = new DraggableWrapperDesign<
          DraggableWrapperComponents,
          DraggableWrapperExpose,
          DraggableWrapperClasses,
          DraggableWrapperPropsBasic
        >('d1.draggableWrapper', props)

        return design.render()
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(InnerComponent)
    const html = await renderToString(app)

    expect(html.startsWith('<section')).toBe(true)
    expect(html).toContain('d1-draggableWrapper--disabled')
    expect(html).toContain('d1-draggableWrapper__square')
    expect(html.endsWith('</section>')).toBe(true)
  })
})
