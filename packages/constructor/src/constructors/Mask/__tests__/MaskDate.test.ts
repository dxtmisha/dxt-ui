import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MaskDate } from '../MaskDate'
import type { MaskType } from '../MaskType'
import type { MaskProps } from '../props'
import type { FieldMasks } from '../../types/fieldTypes'

describe('MaskDate', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let maskDate: MaskDate

  beforeEach(() => {
    mockProps = {
      language: 'en-US'
    }

    mockType = {
      getByDate: vi.fn().mockReturnValue('date')
    } as unknown as MaskType

    maskDate = new MaskDate(mockProps, mockType)
  })

  it('should return date special character groups', () => {
    expect(maskDate.getSpecialDate()).toEqual(['Y', 'M', 'D'])
    expect(maskDate.getSpecialFull()).toEqual(['Y', 'M', 'D', 'h', 'm', 's'])
  })

  it('should return corresponding view characters for groups', () => {
    expect(maskDate.getView('Y')).toBe('y')
    expect(maskDate.getView('M')).toBe('m')
    expect(maskDate.getView('D')).toBe('d')
    expect(maskDate.getView('h')).toBe('h')
    expect(maskDate.getView('m')).toBe('m')
    expect(maskDate.getView('s')).toBe('s')
    expect(maskDate.getView('unknown')).toBeUndefined()
  })

  it('should provide date patterns object', () => {
    const pattern = maskDate.getPattern()
    expect(pattern.Y).toBe('[0-9]{4}')
    expect(typeof pattern.M).toBe('object')
    expect(typeof pattern.D).toBe('function')
    expect(typeof pattern.h).toBe('object')
    expect(typeof pattern.m).toBe('object')
    expect(typeof pattern.s).toBe('object')
  })

  it('should execute D pattern dynamic function to calculate max days', () => {
    const pattern = maskDate.getPattern()
    const dPatternFunc = pattern.D as (item: FieldMasks) => { type: string; min: string; max: string }

    const leapFeb = dPatternFunc({
      Y: { value: '2024' } as any,
      M: { value: '02' } as any
    })
    expect(leapFeb.max).toBe('29')

    const nonLeapFeb = dPatternFunc({
      Y: { value: '2023' } as any,
      M: { value: '02' } as any
    })
    expect(nonLeapFeb.max).toBe('28')
  })

  it('should format full standard string via getValueStandardFull()', () => {
    const masks: FieldMasks = {
      Y: { value: '2026' } as any,
      M: { value: '09' } as any,
      D: { value: '23' } as any,
      h: { value: '14' } as any,
      m: { value: '30' } as any,
      s: { value: '00' } as any
    }

    const full = maskDate.getValueStandardFull(masks)
    expect(full).toBe('2026-09-23T14:30:00')
  })

  it('should return standard ISO-like string via getValueStandard()', () => {
    const masks: FieldMasks = {
      Y: { value: '2026' } as any,
      M: { value: '09' } as any,
      D: { value: '23' } as any
    }

    const standard = maskDate.getValueStandard(masks)
    expect(standard).toContain('2026-09-23')
  })

  it('should generate mask array from locale date template', () => {
    const mask = maskDate.mask
    expect(Array.isArray(mask)).toBe(true)
    expect(mask.length).toBeGreaterThan(0)
  })
})
