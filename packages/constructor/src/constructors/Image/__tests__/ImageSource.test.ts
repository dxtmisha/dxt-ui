import './testWarnings'
import { describe, expect, it } from 'vitest'
import { ImageSource } from '../ImageSource'
import { ImageTypeValue } from '../basicTypes'

describe('ImageSource', () => {
  it.each([
    ['image:photo.png', 'photo.png'],
    ['image:https://example.test/photo.png', 'https://example.test/photo.png'],
    ['image:data:image/png;base64,dGVzdA==', 'data:image/png;base64,dGVzdA=='],
    ['image:image:photo.png', 'image:photo.png'],
    ['image:photo.png?part=image:test#preview', 'photo.png?part=image:test#preview']
  ])('returns the image type and unprefixed name for %s', (value, name) => {
    expect(ImageSource.is(value)).toBe(true)
    expect(ImageSource.isValid(value)).toBe(true)
    expect(ImageSource.getType(value)).toBe(ImageTypeValue.image)
    expect(ImageSource.getName(value)).toBe(name)
  })

  it.each([
    undefined,
    null,
    false,
    0,
    [],
    Symbol('image:photo.png'),
    'photo.png',
    'https://example.test/photo.png',
    'outlined-home',
    { name: 'image:photo.png' }
  ].map(value => ({ value })))('leaves an unmarked value unrecognized: %j', ({ value }) => {
    expect(ImageSource.is(value)).toBe(false)
    expect(ImageSource.isValid(value)).toBe(false)
    expect(ImageSource.getType(value)).toBeUndefined()
    expect(ImageSource.getName(value)).toBeUndefined()
  })

  it.each(['', ' ', '\n\t'])('rejects a blank name while recognizing its marker: %j', (name) => {
    const value = `image:${name}`

    expect(ImageSource.is(value)).toBe(true)
    expect(ImageSource.isValid(value)).toBe(false)
    expect(ImageSource.getType(value)).toBeUndefined()
    expect(ImageSource.getName(value)).toBe(name)
  })
})
