// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ArrowInclude } from '../ArrowInclude'

describe('ArrowInclude', () => {
  it('should return correct display presence (is)', () => {
    const arrowShow = new ArrowInclude('my-class', { arrowShow: true })
    expect(arrowShow.is).toBe(true)

    const arrowHide = new ArrowInclude('my-class', { arrowShow: false })
    expect(arrowHide.is).toBe(false)
  })

  it('should compile component binds correctly', () => {
    const targetElement = document.createElement('div')
    const arrow = new ArrowInclude(
      'my-class',
      { arrowShow: true, arrowPosition: 'bottom' },
      undefined,
      undefined,
      undefined,
      targetElement
    )

    const binds = (arrow as any).toBinds()
    expect(binds.position).toBe('bottom')
    expect(binds.elementTarget).toBe(targetElement)
  })
})
