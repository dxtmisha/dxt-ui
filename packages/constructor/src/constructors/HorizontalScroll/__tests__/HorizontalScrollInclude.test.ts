// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { h } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { HorizontalScrollInclude } from '../HorizontalScrollInclude'

describe('HorizontalScrollInclude', () => {
  it('should initialize correctly and resolve elementHtml and toSelected', () => {
    const props = {
      horizontalScrollBleed: true,
      horizontalScrollAlign: 'block' as const
    }
    const include = new HorizontalScrollInclude(props, new DesignName('parent.class'))

    expect(include.elementHtml).toBeUndefined()

    const mockDiv = document.createElement('div')
    const toSelectedMock = vi.fn()
    const mockComponent = {
      getElement: () => mockDiv,
      toSelected: toSelectedMock
    }

    ;(include as unknown as { element: { value: typeof mockComponent } }).element.value = mockComponent

    expect(include.elementHtml).toBe(mockDiv)

    include.toSelected()
    expect(toSelectedMock).toHaveBeenCalledTimes(1)
  })

  it('should map design properties to binds without overwriting attrs with undefined', () => {
    const includeWithValues = new HorizontalScrollInclude(
      {
        horizontalScrollBleed: false,
        horizontalScrollAlign: 'left',
        horizontalScrollAttrs: { align: 'block', bleed: true }
      },
      new DesignName('parent.class')
    )

    expect(includeWithValues.binds.value.bleed).toBe(false)
    expect(includeWithValues.binds.value.align).toBe('left')

    const includeWithUndefined = new HorizontalScrollInclude(
      {
        horizontalScrollAttrs: { align: 'block', bleed: true }
      },
      new DesignName('parent.class')
    )

    expect(includeWithUndefined.binds.value.bleed).toBe(true)
    expect(includeWithUndefined.binds.value.align).toBe('block')
  })

  it('should support reactive getter props and render with components registry', () => {
    const mockComp = vi.fn(() => h('div', { class: 'mock-scroll' }))
    const include = new HorizontalScrollInclude(
      () => ({ horizontalScrollBleed: false }),
      new DesignName('parent.class'),
      {
        is: () => true,
        get: () => mockComp,
        render: (_name: string, props: Record<string, unknown>, children: unknown, index?: string) => [
          h(mockComp, { ...props, key: index }, children as never)
        ]
      } as never
    )

    expect(include.binds.value.bleed).toBe(false)
    const nodes = include.render()
    expect(nodes).toHaveLength(1)
  })
})
