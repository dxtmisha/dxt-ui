import { describe, it, expect } from 'vitest'
import { DesignName } from '../DesignName'

describe('DesignName', () => {
  describe('Normalization, boundaries and isolation', () => {
    it.each([
      ['D1.ButtonGroup', 'd1', 'd1-buttonGroup'],
      ['d1.button.extra', 'd1', 'd1-button'],
      ['d1', 'd1', 'd1'],
      ['', '', '']
    ])('normalizes %j into two naming segments', (name, design, component) => {
      const naming = new DesignName(name)
      expect(naming.getDesign()).toBe(design)
      expect(naming.getName()).toBe(component)
    })

    it('preserves zero and separator positions in optional naming segments', () => {
      const naming = new DesignName('d1.button')
      expect(naming.getStatusClass('size', 0, undefined)).toBe('d1-button--size--0--')
      expect(naming.getSubClass('label', 0)).toBe('d1-button__label__0')
      expect(naming.getStyle('offset', 0)).toBe('--d1-button-sys-offset-0')
      expect(naming.getStatusClass()).toBe('d1-button--')
      expect(naming.getSubClass()).toBe('d1-button__')
      expect(naming.getStyle()).toBe('--d1-button-sys-')
    })

    it('does not share cached component names between instances', () => {
      const first = new DesignName('d1.button')
      const second = new DesignName('d2.input')
      expect(first.getName()).toBe('d1-button')
      expect(second.getName()).toBe('d2-input')
      expect(first.getSubClass('label')).toBe('d1-button__label')
    })
  })

  it('correctly splits name and provides design and component names', () => {
    const naming = new DesignName('d1.button')
    expect(naming.getDesign()).toBe('d1')
    expect(naming.getName()).toBe('d1-button')
  })

  it('correctly generates status class using single or multiple parameters', () => {
    const naming = new DesignName('d1.button')
    expect(naming.getStatusClass('active')).toBe('d1-button--active')
    expect(naming.getStatusClass('lazy', 'visible')).toBe('d1-button--lazy--visible')
    expect(naming.getStatusClass('type', 'outlined', 'large')).toBe('d1-button--type--outlined--large')
  })

  it('correctly generates system CSS custom property using single or multiple parameters', () => {
    const naming = new DesignName('d1.window')
    expect(naming.getStyle('left')).toBe('--d1-window-sys-left')
    expect(naming.getStyle('square', 'width')).toBe('--d1-window-sys-square-width')
    expect(naming.getStyle('square', 'margin', 'top')).toBe('--d1-window-sys-square-margin-top')
  })

  it('correctly generates sub-element class name using single or multiple parameters', () => {
    const naming = new DesignName('d1.window')
    expect(naming.getSubClass('body')).toBe('d1-window__body')
    expect(naming.getSubClass('body', 'context')).toBe('d1-window__body__context')
    expect(naming.getSubClass('body', 'scoreboard', 'space')).toBe('d1-window__body__scoreboard__space')
  })
})
