// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { HorizontalScrollInclude } from '../HorizontalScrollInclude'

describe('HorizontalScrollInclude', () => {
  it('should initialize correctly and resolve elementHtml and toSelected', () => {
    const props = {
      horizontalScrollBleed: true,
      horizontalScrollAlign: 'block' as const
    }
    const include = new HorizontalScrollInclude(new DesignName('parent.class'), props)

    expect(include.elementHtml).toBeUndefined()

    const mockDiv = document.createElement('div')
    const toSelectedMock = vi.fn()
    const mockComponent = {
      getElement: () => mockDiv,
      toSelected: toSelectedMock
    }

    ;(include as any).element.value = mockComponent

    expect(include.elementHtml).toBe(mockDiv)

    include.toSelected()
    expect(toSelectedMock).toHaveBeenCalled()
  })

  it('should map design properties to binds', () => {
    const props = {
      horizontalScrollBleed: false,
      horizontalScrollAlign: 'left' as const
    }
    const include = new HorizontalScrollInclude(new DesignName('parent.class'), props)

    const binds = include.binds.value
    expect(binds.bleed).toBe(false)
    expect(binds.align).toBe('left')
  })
})
