// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldIcons } from '../FieldIcons'

describe('FieldIcons', () => {
  const mockText = {
    cancel: 'Cancel Action',
    previous: 'Go Previous',
    decrement: 'Decrement Value',
    next: 'Go Next',
    increment: 'Increment Value'
  } as any

  it('should generate cancelBind attributes correctly', () => {
    const props = { iconClose: 'close-icon' }
    const fieldIcons = new FieldIcons(props, 'base-class', mockText)

    expect(fieldIcons.cancelBind).toEqual({
      'class': 'base-class__cancel',
      'icon': 'close-icon',
      'dynamic': true,
      'data-event-type': 'cancel',
      'ariaLabel': 'Cancel Action'
    })
  })

  it('should generate previousBind attributes correctly for carousel vs stepper', () => {
    const propsStepper = { disabled: false, disabledPrevious: false, arrowCarousel: false, iconMinus: 'minus-icon' }
    const iconsStepper = new FieldIcons(propsStepper, 'base-class', mockText)
    expect(iconsStepper.previousBind.icon).toBe('minus-icon')
    expect(iconsStepper.previousBind.ariaLabel).toBe('Decrement Value')

    const propsCarousel = { disabled: false, disabledPrevious: false, arrowCarousel: true, iconArrowLeft: 'left-icon' }
    const iconsCarousel = new FieldIcons(propsCarousel, 'base-class', mockText)
    expect(iconsCarousel.previousBind.icon).toBe('left-icon')
    expect(iconsCarousel.previousBind.ariaLabel).toBe('Go Previous')
  })

  it('should generate nextBind attributes correctly for carousel vs stepper', () => {
    const propsStepper = { disabled: false, disabledNext: false, arrowCarousel: false, iconPlus: 'plus-icon' }
    const iconsStepper = new FieldIcons(propsStepper, 'base-class', mockText)
    expect(iconsStepper.nextBind.icon).toBe('plus-icon')
    expect(iconsStepper.nextBind.ariaLabel).toBe('Increment Value')

    const propsCarousel = { disabled: false, disabledNext: false, arrowCarousel: true, iconArrowRight: 'right-icon' }
    const iconsCarousel = new FieldIcons(propsCarousel, 'base-class', mockText)
    expect(iconsCarousel.nextBind.icon).toBe('right-icon')
    expect(iconsCarousel.nextBind.ariaLabel).toBe('Go Next')
  })

  it('should verify isArrow condition correctly', () => {
    const f1 = new FieldIcons({ arrowCarousel: true, disabled: false }, 'base', mockText)
    expect(f1.isArrow()).toBe(true)

    const f2 = new FieldIcons({ arrowCarousel: true, disabled: true }, 'base', mockText)
    expect(f2.isArrow()).toBe(false)
  })

  it('should verify isCancel condition correctly', () => {
    const f1 = new FieldIcons({ cancel: 'always', disabled: false, readonly: false }, 'base', mockText)
    expect(f1.isCancel()).toBe(true)

    const f2 = new FieldIcons({ cancel: 'auto', cancelShow: true, disabled: false }, 'base', mockText)
    expect(f2.isCancel()).toBe(true)

    const f3 = new FieldIcons({ cancel: 'auto', cancelShow: false, disabled: false }, 'base', mockText)
    expect(f3.isCancel()).toBe(false)
  })
})
