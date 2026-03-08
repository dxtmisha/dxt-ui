// @vitest-environment jsdom
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Mock DataStorage to avoid static initialization errors in Geo.ts
vi.mock('../DataStorage', () => {
  return {
    DataStorage: class {
      constructor() { }
      get() { return undefined }
      set() { return undefined }
      remove() { return this }
      update() { return this }
    }
  }
})

import { Formatters } from '../Formatters'
import { FormattersType } from '../../types/formattersTypes'
import { Geo } from '../Geo'
import { type GeoDate } from '../../types/geoTypes'

describe('Formatters', () => {
  beforeEach(() => {
    Geo.set('en-US')
  })

  const sampleData = [
    {
      id: 1,
      price: 1000,
      count: 1,
      name: {
        first: 'John',
        last: 'Doe',
        surname: 'Middle'
      },
      createdAt: '2025-03-01T10:00:00',
      weight: 2.5
    },
    {
      id: 2,
      price: 2500,
      count: 5,
      name: {
        first: 'Jane',
        last: 'Smith'
      },
      createdAt: '2025-03-05T15:30:00',
      weight: 0.5
    }
  ]

  it('should format simple fields as strings by default', () => {
    const options = [
      { prop: 'id' }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(result[0].idFormat).toBe('1')
    expect(result[1].idFormat).toBe('2')
  })

  it('should handle custom transformations', () => {
    const options = [
      {
        prop: 'id',
        transformation: (val: number) => `ID-${val}`
      }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(result[0].idFormat).toBe('ID-1')
    expect(result[1].idFormat).toBe('ID-2')
  })

  it('should format currency correctly', () => {
    const options = [
      {
        prop: 'price',
        type: FormattersType.currency,
        options: { options: 'USD' }
      }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(result[0].priceFormat).toContain('$')
    expect(result[0].priceFormat).toContain('1,000')
    expect(result[1].priceFormat).toContain('2,500')
  })

  it('should format dates correctly', () => {
    const options = [
      {
        prop: 'createdAt',
        type: FormattersType.date,
        options: { type: 'date' as GeoDate }
      }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(typeof result[0].createdAtFormat).toBe('string')
    expect(result[0].createdAtFormat.length).toBeGreaterThan(0)
  })

  it('should format numbers correctly', () => {
    const options = [
      {
        prop: 'weight',
        type: FormattersType.number,
        options: { options: { minimumFractionDigits: 2 } }
      }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(result[0].weightFormat).toBe('2.50')
    expect(result[1].weightFormat).toBe('0.50')
  })

  it('should format plurals correctly', () => {
    const options = [
      {
        prop: 'count',
        type: FormattersType.plural,
        options: { words: 'item|items' }
      }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(result[0].countFormat).toBe('1 item')
    expect(result[1].countFormat).toBe('5 items')
  })

  it('should format names correctly including nested paths', () => {
    const options = [
      {
        prop: 'fullName',
        type: FormattersType.name,
        options: {
          lastPropName: 'name.last',
          firstPropName: 'name.first',
          surname: 'name.surname'
        }
      }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(result[0].fullNameFormat).toBe('John Doe')
    expect(result[1].fullNameFormat).toBe('Jane Smith')
  })

  it('should handle nested path formatting', () => {
    const options = [
      {
        prop: 'name.first',
        transformation: (val: string) => val.toUpperCase()
      }
    ]
    const formatters = new Formatters(sampleData, options)
    const result = formatters.to() as any[]

    expect(result[0].nameFirstFormat).toBe('JOHN')
    expect(result[1].nameFirstFormat).toBe('JANE')
  })

  it('should return correct columns via getColumns', () => {
    const options = [
      { prop: 'id' },
      { prop: 'price' }
    ]
    const formatters = new Formatters(sampleData, options)
    expect(formatters.getColumns()).toEqual(['id', 'price'])
  })

  it('should return correct options via getOptions', () => {
    const options = [{ prop: 'id' }]
    const formatters = new Formatters(sampleData, options)
    expect(formatters.getOptions()).toEqual(options)
  })

  it('should return correct list via getList', () => {
    const formatters = new Formatters(sampleData, [{ prop: 'id' }])
    expect(formatters.getList()).toEqual(sampleData)
  })

  it('should update list via setList', () => {
    const formatters = new Formatters(sampleData, [{ prop: 'id' }])
    const newData = [{ id: 100 }]
    formatters.setList(newData as any)
    expect(formatters.getList()).toEqual(newData)
    const result = formatters.to() as any[]
    expect(result[0].id).toBe(100)
    expect(result[0].idFormat).toBe('100')
  })

  it('should dynamically update columns and options when setOptions is called', () => {
    const formatters = new Formatters(sampleData, [{ prop: 'id' }])
    expect(formatters.getColumns()).toEqual(['id'])
    expect((formatters.to() as any[])[0].idFormat).toBe('1')

    const newOptions = [{ prop: 'price' }]
    formatters.setOptions(newOptions)
    expect(formatters.getOptions()).toEqual(newOptions)
    expect(formatters.getColumns()).toEqual(['price'])

    const result = formatters.to() as any[]
    expect(result[0].idFormat).toBeUndefined()
    expect(result[0].priceFormat).toBe('1000')
  })
})
