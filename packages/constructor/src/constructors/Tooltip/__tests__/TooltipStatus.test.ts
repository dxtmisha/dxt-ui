// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { TooltipStatus } from '../TooltipStatus'
import type { TooltipProps } from '../props'
import type { TooltipSlots } from '../types'

function createTooltipStatus(
  properties: Partial<TooltipProps>,
  slots?: TooltipSlots
): TooltipStatus {
  return new TooltipStatus(
    properties as Readonly<TooltipProps>,
    slots
  )
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

    it('should return true for non-empty and numeric 0 label/description', () => {
      expect(createTooltipStatus({ label: 'hello' }).isText()).toBe(true)
      expect(createTooltipStatus({ label: 0 }).isText()).toBe(true)
      expect(createTooltipStatus({ description: 'desc' }).isText()).toBe(true)
      expect(createTooltipStatus({ description: 0 }).isText()).toBe(true)
    })

    it('should return true if slots contain default, description, or body', () => {
      expect(createTooltipStatus({}, { default: () => [] }).isText()).toBe(true)
      expect(createTooltipStatus({}, { description: () => [] }).isText()).toBe(true)
      expect(createTooltipStatus({}, { body: () => [] }).isText()).toBe(true)
    })

    it('should return false if no label, description, or valid content slots exist', () => {
      expect(createTooltipStatus({}).isText()).toBe(false)
      expect(createTooltipStatus({ label: '' }).isText()).toBe(false)
      expect(createTooltipStatus({}, { control: () => [] }).isText()).toBe(false)
    })
  })

  describe('isShow', () => {
    it('should return false if isText() returns false', () => {
      const tooltipStatus = createTooltipStatus({ inDom: true })
      expect(tooltipStatus.isShow()).toBe(false)
    })

    it('should return true if isText() is true and open, show, or inDom is true', () => {
      const statusOpen = createTooltipStatus({ label: 'text' })
      statusOpen.setOpen(true)
      expect(statusOpen.isShow()).toBe(true)

      const statusShow = createTooltipStatus({ label: 'text' })
      statusShow.setShow(true)
      expect(statusShow.isShow()).toBe(true)

      const statusInDom = createTooltipStatus({ label: 'text', inDom: true })
      expect(statusInDom.isShow()).toBe(true)
    })
  })

  describe('isArrow', () => {
    it('should return true only when both arrowShow and preparation are true', () => {
      const tooltipStatus = createTooltipStatus({ arrowShow: true })
      expect(tooltipStatus.isArrow()).toBe(false)

      tooltipStatus.setPreparation(true)
      expect(tooltipStatus.isArrow()).toBe(true)

      const disabledArrow = createTooltipStatus({ arrowShow: false })
      disabledArrow.setPreparation(true)
      expect(disabledArrow.isArrow()).toBe(false)
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
