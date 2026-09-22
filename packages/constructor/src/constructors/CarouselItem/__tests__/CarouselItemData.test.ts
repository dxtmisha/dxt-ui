import { describe, expect, it } from 'vitest'

import { CarouselItemData } from '../CarouselItemData'
import type { CarouselItemProps } from '../props'

describe('CarouselItemData', () => {
  it('should correctly determine selected state', () => {
    const props: CarouselItemProps = {
      selected: false
    }
    const data = new CarouselItemData(props)

    expect(data.isSelected()).toBe(false)

    props.selected = true
    expect(data.isSelected()).toBe(true)
  })

  it('should return slide', () => {
    const props: CarouselItemProps = {
      slide: 3
    }
    const data = new CarouselItemData(props)

    expect(data.slide).toBe(3)
  })

  it('should compute label properly', () => {
    const props: CarouselItemProps = {
      slide: 2,
      total: 5
    }
    const data = new CarouselItemData(props)

    expect(data.label).toBe('2 / 5')

    props.total = undefined
    expect(data.label).toBe('2')

    props.ariaLabel = 'Custom Slide Title'
    expect(data.label).toBe('Custom Slide Title')

    props.ariaLabel = undefined
    props.slide = undefined
    expect(data.label).toBeUndefined()
  })

  it('should return correct ARIA attributes for WAI-ARIA Carousel pattern', () => {
    const props: CarouselItemProps = {
      slide: 1,
      total: 3,
      selected: true
    }
    const data = new CarouselItemData(props)

    expect(data.aria).toEqual({
      role: 'group',
      'aria-roledescription': 'slide',
      'aria-label': '1 / 3',
      'aria-hidden': 'false'
    })

    props.selected = false
    expect(data.aria).toEqual({
      role: 'group',
      'aria-roledescription': 'slide',
      'aria-label': '1 / 3',
      'aria-hidden': 'true'
    })

    props.role = 'tabpanel'
    expect(data.aria.role).toBe('tabpanel')
  })
})
