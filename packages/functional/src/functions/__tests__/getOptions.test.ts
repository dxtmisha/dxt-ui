import { describe, expect, it } from 'vitest'

import { getOptions } from '../getOptions'

describe('getOptions', () => {
  it('should return an object with a method if a string is passed', () => {
    expect(getOptions('POST' as any)).toEqual({ method: 'POST' })
  })

  it('should return the passed options object', () => {
    const options = { method: 'POST', body: 'data' }
    expect(getOptions(options as any)).toEqual(options)
  })

  it('should return an empty object if options are not passed', () => {
    expect(getOptions()).toEqual({})
  })
})
