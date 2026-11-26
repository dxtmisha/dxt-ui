// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'
import { createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { SelectableArea } from '../SelectableArea'
import { SelectableAreaDesign } from '../SelectableAreaDesign'
import type { SelectableAreaControl } from '../basicTypes'
import type { SelectableAreaPropsBasic } from '../props'
import type {
  SelectableAreaClasses,
  SelectableAreaComponents,
  SelectableAreaExpose
} from '../types'

/**
 * Inspectable design subclass exposing the orchestrator for SSR lazy-loading checks.
 *
 * Подкласс дизайна с доступом к оркестратору для проверок ленивой инициализации при SSR.
 */
class InspectableSsrSelectableAreaDesign extends SelectableAreaDesign<
  SelectableAreaComponents,
  SelectableAreaExpose,
  SelectableAreaClasses,
  SelectableAreaPropsBasic
> {
  /**
   * Returns the internal orchestrator instance.
   *
   * Возвращает внутренний экземпляр оркестратора.
   * @returns orchestrator instance / экземпляр оркестратора
   */
  getOrchestrator(): SelectableArea {
    return this.item
  }
}

describe('SelectableArea (SSR)', () => {
  it('should render valid deterministic HTML in a pure Node environment without browser DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const emits = vi.fn()
    const props = reactive<SelectableAreaPropsBasic>({
      selected: ['item-1', 'item-3']
    })
    const classes = ref<SelectableAreaClasses>({
      main: { 'd1-selectableArea': true },
      item: 'd1-selectableArea__item',
      square: 'd1-selectableArea__square'
    })

    let orchestrator: SelectableArea | undefined

    const InnerComponent = defineComponent({
      setup(_componentProps, { expose }) {
        const design = new InspectableSsrSelectableAreaDesign(
          'd1.selectableArea',
          props,
          {
            emits,
            classes: classes as never
          }
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
            'data-testid': 'ssr-selectable',
            'class': 'external-ssr-class',
            'style': { opacity: '0.95' }
          },
          {
            default: (control: SelectableAreaControl) => [
              h('div', {
                'class': [control.className, control.classClick],
                'data-value': 'item-1',
                'data-selected': control.selected.includes('item-1') ? 'true' : 'false'
              }, 'Item 1'),
              h('div', {
                'class': [control.className, control.classClick],
                'data-value': 'item-2',
                'data-selected': control.selected.includes('item-2') ? 'true' : 'false'
              }, 'Item 2')
            ]
          }
        )
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(RootComponent)
    const html = await renderToString(app)

    expect(html).toContain('data-testid="ssr-selectable"')
    expect(html).toContain('d1-selectableArea')
    expect(html).toContain('external-ssr-class')
    expect(html).toContain('opacity:0.95')
    expect(html).toContain('d1-selectableArea__item')
    expect(html).toContain('d1-selectableArea__click')
    expect(html).toContain('d1-selectableArea__square')
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('selectable-area--')
    expect(html).toContain('data-selected="true"')
    expect(html).toContain('data-selected="false"')

    // Lifecycle-gated emit helper stays unallocated on the server
    expect(orchestrator?.hasInstance('emit')).toBe(false)

    // DOM-dependent utilities are SSR-safe no-ops
    expect(() => orchestrator?.i('classesData').setBlockSelection(true)).not.toThrow()
    expect(() => orchestrator?.i('classesData').setBlockSelection(false)).not.toThrow()
    expect(orchestrator?.i('item').get()).toEqual(['item-1', 'item-3'])

    expect(emits).not.toHaveBeenCalled()
    expect(warnSpy).not.toHaveBeenCalled()
    warnSpy.mockRestore()
  })

  it('should render custom tag cleanly and deterministically across isolated server requests', async () => {
    const renderWithTag = async (tag: string) => {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const props = reactive<SelectableAreaPropsBasic>({ tag })
      const InnerComponent = defineComponent({
        setup() {
          const design = new SelectableAreaDesign<
            SelectableAreaComponents,
            SelectableAreaExpose,
            SelectableAreaClasses,
            SelectableAreaPropsBasic
          >('d1.selectableArea', props)

          return design.render()
        }
      })

      return renderToString(createSSRApp(InnerComponent))
    }

    const firstHtml = await renderWithTag('section')
    const secondHtml = await renderWithTag('section')

    expect(firstHtml.startsWith('<section')).toBe(true)
    expect(firstHtml).toContain('d1-selectableArea__square')
    expect(firstHtml).toContain('aria-hidden="true"')
    expect(firstHtml.endsWith('</section>')).toBe(true)
    expect(firstHtml).toBe(secondHtml)
  })
})
