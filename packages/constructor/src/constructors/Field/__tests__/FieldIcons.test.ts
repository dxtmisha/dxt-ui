// @vitest-environment jsdom
import './testWarnings'
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import type { TextInclude } from '../../../classes/TextInclude'
import { FieldIcons } from '../FieldIcons'

describe('FieldIcons', () => {
  const createMockText = (): TextInclude => ({
    cancel: 'Cancel Action',
    previous: 'Go Previous',
    decrement: 'Decrement Value',
    next: 'Go Next',
    increment: 'Increment Value'
  }) as unknown as TextInclude

  it('should evaluate static predicates and keep text getter lazy until bind evaluation', () => {
    const textGetter = vi.fn(createMockText)

    expect(FieldIcons.is({})).toBe(false)
    expect(FieldIcons.is({ cancel: 'auto', cancelShow: false })).toBe(false)
    expect(FieldIcons.is({ cancel: 'auto', cancelShow: true })).toBe(true)
    expect(FieldIcons.is({ cancel: 'always' })).toBe(true)
    expect(FieldIcons.is({ arrowCarousel: true })).toBe(true)
    expect(FieldIcons.is({ arrowStepper: true, disabled: true })).toBe(false)

    const fieldIcons = new FieldIcons({ iconClose: 'close-icon', cancel: 'always' }, new DesignName('base.class'), textGetter)
    expect(textGetter).not.toHaveBeenCalled()

    expect(fieldIcons.cancelBind).toEqual({
      'class': 'base-class__cancel',
      'icon': 'close-icon',
      'dynamic': true,
      'data-event-type': 'cancel',
      'ariaLabel': 'Cancel Action'
    })
    expect(textGetter).toHaveBeenCalledTimes(1)
  })

  it('should generate previousBind attributes correctly for carousel vs stepper', () => {
    const textGetter = vi.fn(createMockText)

    const propsStepper = { disabled: false, disabledPrevious: true, arrowStepper: true, arrowCarousel: false, iconMinus: 'minus-icon' }
    const iconsStepper = new FieldIcons(propsStepper, new DesignName('base.class'), textGetter)
    expect(iconsStepper.previousBind).toEqual({
      'class': 'base-class__previous',
      'icon': 'minus-icon',
      'disabled': true,
      'dynamic': true,
      'data-event-type': 'previous',
      'ariaLabel': 'Decrement Value'
    })

    const propsCarousel = { disabled: false, disabledPrevious: false, arrowCarousel: true, iconArrowLeft: 'left-icon' }
    const iconsCarousel = new FieldIcons(propsCarousel, new DesignName('base.class'), textGetter)
    expect(iconsCarousel.previousBind.icon).toBe('left-icon')
    expect(iconsCarousel.previousBind.ariaLabel).toBe('Go Previous')
  })

  it('should generate nextBind attributes correctly for carousel vs stepper', () => {
    const textGetter = vi.fn(createMockText)

    const propsStepper = { disabled: false, disabledNext: true, arrowStepper: true, arrowCarousel: false, iconPlus: 'plus-icon' }
    const iconsStepper = new FieldIcons(propsStepper, new DesignName('base.class'), textGetter)
    expect(iconsStepper.nextBind).toEqual({
      'class': 'base-class__next',
      'icon': 'plus-icon',
      'disabled': true,
      'dynamic': true,
      'data-event-type': 'next',
      'ariaLabel': 'Increment Value'
    })

    const propsCarousel = { disabled: false, disabledNext: false, arrowCarousel: true, iconArrowRight: 'right-icon' }
    const iconsCarousel = new FieldIcons(propsCarousel, new DesignName('base.class'), textGetter)
    expect(iconsCarousel.nextBind.icon).toBe('right-icon')
    expect(iconsCarousel.nextBind.ariaLabel).toBe('Go Next')
  })

  it('should verify isArrow and isCancel conditions across all modifiers', () => {
    expect(FieldIcons.isArrow({ arrowCarousel: true, disabled: false })).toBe(true)
    expect(FieldIcons.isArrow({ arrowStepper: true, disabled: false })).toBe(true)
    expect(FieldIcons.isArrow({ arrowCarousel: true, disabled: true })).toBe(false)

    expect(FieldIcons.isCancel({ cancel: 'always', disabled: false, readonly: false })).toBe(true)
    expect(FieldIcons.isCancel({ cancel: 'always', readonly: true })).toBe(false)
    expect(FieldIcons.isCancel({ cancel: 'always', arrowCarousel: true })).toBe(false)
    expect(FieldIcons.isCancel({ cancel: 'always', arrowStepper: true })).toBe(false)
    expect(FieldIcons.isCancel({ cancel: 'auto', cancelShow: true, disabled: false })).toBe(true)
    expect(FieldIcons.isCancel({ cancel: 'auto', cancelShow: false, disabled: false })).toBe(false)
    expect(FieldIcons.isCancel({ cancel: 'none', cancelShow: true })).toBe(false)
  })
})
