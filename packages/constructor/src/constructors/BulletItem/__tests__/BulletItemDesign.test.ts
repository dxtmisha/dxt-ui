// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { BulletItemDesign } from '../BulletItemDesign'
import type { BulletItemProps, BulletItemPropsBasic } from '../props'
import type { BulletItemClasses, BulletItemComponents, BulletItemExpose, BulletItemSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('BulletItemDesign (isolated class)', () => {
  it('should render semantic li element, bind elementHtml ref, merge attrs, and render description + default slot', async () => {
    const onClick = vi.fn()
    const state = reactive<BulletItemProps>({
      description: 'First bullet point',
      descriptionId: 'bullet-desc-1'
    })
    let exposed!: BulletItemExpose & { elementHtml?: unknown }

    const Host = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-bulletItem': true }
        }))
        const styles = computed<ConstrStyles>(() => ({
          '--bullet-pad': '4px'
        }))
        const design = new BulletItemDesign<
          BulletItemComponents,
          BulletItemExpose,
          BulletItemClasses,
          BulletItemPropsBasic
        >(
          'd1.bulletItem',
          state,
          {
            classes,
            styles
          }
        )
        exposed = design.expose() as BulletItemExpose & { elementHtml?: unknown }
        return design.render()
      }
    })

    const slots: BulletItemSlots = {
      default: () => [h('strong', { class: 'slot-extra' }, ' (inline)')]
    }

    const container = document.createElement('ul')
    const app = createApp({
      render: () => h(Host, {
        'class': 'external-li',
        'style': { opacity: '0.9' },
        'data-testid': 'bullet-li',
        onClick
      }, slots as Record<string, () => unknown>)
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    const li = container.querySelector('[data-testid="bullet-li"]') as HTMLLIElement
    expect(li.tagName).toBe('LI')
    expect(li.classList.contains('d1-bulletItem')).toBe(true)
    expect(li.classList.contains('external-li')).toBe(true)
    expect(li.style.getPropertyValue('--bullet-pad')).toBe('4px')
    expect(li.style.opacity).toBe('0.9')

    const elementRef = exposed.elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(li)

    const desc = li.querySelector('#bullet-desc-1')
    expect(desc?.tagName).toBe('SPAN')
    expect(desc?.textContent).toBe('First bullet point')
    expect(li.querySelector('.slot-extra')?.textContent).toBe(' (inline)')

    li.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    state.isSkeleton = true
    await nextTick()
    expect(desc?.classList.contains('d1-skeleton__textVariant')).toBe(true)
  })
})
