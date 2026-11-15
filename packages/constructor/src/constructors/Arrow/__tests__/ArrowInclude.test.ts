// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'
import { ArrowInclude } from '../ArrowInclude'
import type { ArrowPropsInclude } from '../basicTypes'

describe('ArrowInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return correct display presence (is)', () => {
    const arrowShow = new ArrowInclude({ arrowShow: true }, new DesignName('my.class'))
    expect(arrowShow.is).toBe(true)

    const arrowHide = new ArrowInclude({ arrowShow: false }, new DesignName('my.class'))
    expect(arrowHide.is).toBe(false)

    const arrowOmitted = new ArrowInclude({}, new DesignName('my.class'))
    expect(arrowOmitted.is).toBe(false)
  })

  it('should compile component binds correctly and strip undefined properties', () => {
    const targetElement = document.createElement('div')
    const arrow = new ArrowInclude(
      { arrowShow: true, arrowPosition: 'bottom' },
      new DesignName('my.class'),
      undefined,
      undefined,
      undefined,
      targetElement
    )

    expect(arrow.binds.value).toEqual({
      class: 'my-class__arrow',
      position: 'bottom',
      elementTarget: targetElement
    })

    const arrowEmpty = new ArrowInclude(
      { arrowShow: true },
      new DesignName('my.class')
    )
    expect(arrowEmpty.binds.value).toEqual({
      class: 'my-class__arrow'
    })
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

    expect(arrow.binds.value.position).toBe('top')
    expect(arrow.binds.value.elementTarget).toBe(customTarget)
  })

  it('should render arrow component only when arrowShow is enabled', () => {
    const ArrowMock = defineComponent({
      name: 'ArrowMock',
      setup() {
        return () => h('div')
      }
    })
    const props = reactive<ArrowPropsInclude>({ arrowShow: false, arrowPosition: 'top' })
    const components = new DesignComponents({ arrow: ArrowMock })
    const arrow = new ArrowInclude(props, new DesignName('my.class'), components)

    expect(arrow.render()).toEqual([])

    props.arrowShow = true
    const nodes = arrow.render()
    expect(nodes).toHaveLength(1)
    expect(nodes[0]?.props).toMatchObject({
      class: 'my-class__arrow',
      position: 'top'
    })
  })
})
