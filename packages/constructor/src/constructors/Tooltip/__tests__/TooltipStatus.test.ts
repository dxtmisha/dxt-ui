// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { TooltipStatus } from '../TooltipStatus'
import type { TooltipProps } from '../props'
import type { TooltipSlots } from '../types'

function createTooltipStatus(
  properties: Partial<TooltipProps>,
  slots?: TooltipSlots
) {
  const tooltipStatus = new TooltipStatus(
    properties as TooltipProps,
    slots
  )
  return tooltipStatus
}

describe('TooltipStatus', () => {
  it('should initialize reactive states to false', () => {
    const tooltipStatus = createTooltipStatus({})
    expect(tooltipStatus.open.value).toBe(false)
    expect(tooltipStatus.show.value).toBe(false)
    expect(tooltipStatus.preparation.value).toBe(false)
  })

  describe('isText', () => {
    it('should return false if disabled is true', () => {
      const tooltipStatus = createTooltipStatus({ disabled: true, label: 'hello' })
      expect(tooltipStatus.isText()).toBe(false)
    })

    it('should return true if label is present and not disabled', () => {
      const tooltipStatus = createTooltipStatus({ label: 'hello' })
      expect(tooltipStatus.isText()).toBe(true)
    })

    it('should return true if description is present and not disabled', () => {
      const tooltipStatus = createTooltipStatus({ description: 'hello description' })
      expect(tooltipStatus.isText()).toBe(true)
    })

    it('should return true if slots contain default, description, or body', () => {
      const statusWithDefault = createTooltipStatus({}, { default: () => {} } as any)
      expect(statusWithDefault.isText()).toBe(true)

      const statusWithDescription = createTooltipStatus({}, { description: () => {} } as any)
      expect(statusWithDescription.isText()).toBe(true)

      const statusWithBody = createTooltipStatus({}, { body: () => {} } as any)
      expect(statusWithBody.isText()).toBe(true)
    })

    it('should return false if no label, description, or valid slots', () => {
      const tooltipStatus = createTooltipStatus({})
      expect(tooltipStatus.isText()).toBe(false)

      const statusWithOtherSlot = createTooltipStatus({}, { header: () => {} } as any)
      expect(statusWithOtherSlot.isText()).toBe(false)
    })
  })

  describe('isShow', () => {
    it('should return false if isText() returns false', () => {
      const tooltipStatus = createTooltipStatus({ inDom: true }) // no text/slots
      expect(tooltipStatus.isShow()).toBe(false)
    })

    it('should return true if isText() is true and open is true', () => {
      const tooltipStatus = createTooltipStatus({ label: 'text' })
      tooltipStatus.setOpen(true)
      expect(tooltipStatus.isShow()).toBe(true)
    })

    it('should return true if isText() is true and show is true', () => {
      const tooltipStatus = createTooltipStatus({ label: 'text' })
      tooltipStatus.setShow(true)
      expect(tooltipStatus.isShow()).toBe(true)
    })

    it('should return true if isText() is true and inDom is true', () => {
      const tooltipStatus = createTooltipStatus({ label: 'text', inDom: true })
      expect(tooltipStatus.isShow()).toBe(true)
    })
  })

  describe('isArrow', () => {
    it('should return true if arrowShow is true and preparation is true', () => {
      const tooltipStatus = createTooltipStatus({ arrowShow: true })
      tooltipStatus.setPreparation(true)
      expect(tooltipStatus.isArrow()).toBe(true)
    })

    it('should return false if arrowShow is false', () => {
      const tooltipStatus = createTooltipStatus({ arrowShow: false })
      tooltipStatus.setPreparation(true)
      expect(tooltipStatus.isArrow()).toBe(false)
    })

    it('should return false if preparation is false', () => {
      const tooltipStatus = createTooltipStatus({ arrowShow: true })
      tooltipStatus.setPreparation(false)
      expect(tooltipStatus.isArrow()).toBe(false)
    })
  })

  describe('isMatch', () => {
    it('should check if current open matches passed boolean', () => {
      const tooltipStatus = createTooltipStatus({})
      expect(tooltipStatus.isMatch(false)).toBe(true)
      expect(tooltipStatus.isMatch(true)).toBe(false)

      tooltipStatus.setOpen(true)
      expect(tooltipStatus.isMatch(true)).toBe(true)
      expect(tooltipStatus.isMatch(false)).toBe(false)
    })
  })
})
