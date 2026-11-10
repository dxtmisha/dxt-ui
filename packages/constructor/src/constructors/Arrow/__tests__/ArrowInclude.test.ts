// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { ArrowInclude } from '../ArrowInclude'

describe('ArrowInclude', () => {
  it('should return correct display presence (is)', () => {
    const arrowShow = new ArrowInclude({ arrowShow: true }, new DesignName('my.class'))
    expect(arrowShow.is).toBe(true)

    const arrowHide = new ArrowInclude({ arrowShow: false }, new DesignName('my.class'))
    expect(arrowHide.is).toBe(false)
  })

  it('should compile component binds correctly', () => {
    const targetElement = document.createElement('div')
    const arrow = new ArrowInclude(
      { arrowShow: true, arrowPosition: 'bottom' },
      new DesignName('my.class'),
      undefined,
      undefined,
      undefined,
      targetElement
    )

    const binds = (arrow as any).toBinds()
    expect(binds.position).toBe('bottom')
    expect(binds.elementTarget).toBe(targetElement)
  })

  it('should allow arrowAttrs to override position or elementTarget', () => {
    const targetElement = document.createElement('div')
    const customTarget = document.createElement('span')
    const arrow = new ArrowInclude(
      {
        arrowShow: true,
        arrowPosition: 'bottom',
        arrowAttrs: { position: 'top', elementTarget: customTarget }
      },
      new DesignName('my.class'),
      undefined,
      undefined,
      undefined,
      targetElement
    )

    const binds = (arrow as any).toBinds()
    expect(binds.position).toBe('top')
    expect(binds.elementTarget).toBe(customTarget)
  })
})
