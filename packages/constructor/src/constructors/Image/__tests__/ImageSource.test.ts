import './testWarnings'
import { describe, expect, it } from 'vitest'
import { ImageSource } from '../ImageSource'
import { ImageTypeValue } from '../basicTypes'

describe('ImageSource', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      ['image:photo.png', 'photo.png'],
      ['image:/assets/photo.png', '/assets/photo.png'],
      ['image:https://example.test/photo.png', 'https://example.test/photo.png'],
      ['image:data:image/png;base64,dGVzdA==', 'data:image/png;base64,dGVzdA=='],
      ['image:image:photo.png', 'image:photo.png'],
      ['image:photo.png?part=image:test#preview', 'photo.png?part=image:test#preview']
    ])('should return ImageTypeValue.image and unprefixed name for %s', (value, expectedName) => {
      expect(ImageSource.is(value)).toBe(true)
      expect(ImageSource.isValid(value)).toBe(true)
      expect(ImageSource.getType(value)).toBe(ImageTypeValue.image)
      expect(ImageSource.getName(value)).toBe(expectedName)
    })
  })

  describe('Boundary values, whitespace-only, and multiline strings', () => {
    it.each(['', ' ', '   ', '\n\t', '\r\n'])('should reject a blank marked source while still recognizing the marker for %j', (blankName) => {
      const value = `image:${blankName}`

      expect(ImageSource.is(value)).toBe(true)
      expect(ImageSource.isValid(value)).toBe(false)
      expect(ImageSource.getType(value)).toBeUndefined()
      expect(ImageSource.getName(value)).toBe(blankName)
    })

    it.each([
      ['image: photo.png', ' photo.png'],
      ['image:\nphoto.png', '\nphoto.png']
    ])('should accept a marked source containing non-whitespace characters after whitespace (%j)', (value, expectedName) => {
      expect(ImageSource.is(value)).toBe(true)
      expect(ImageSource.isValid(value)).toBe(true)
      expect(ImageSource.getType(value)).toBe(ImageTypeValue.image)
      expect(ImageSource.getName(value)).toBe(expectedName)
    })
  })

  describe('Empty, unmarked, and non-string inputs', () => {
    it.each([
      undefined,
      null,
      false,
      true,
      0,
      42,
      [],
      Symbol('image:photo.png'),
      '',
      'photo.png',
      'https://example.test/photo.png',
      'outlined-home',
      'IMAGE:photo.png',
      ' prefix-image:photo.png',
      { name: 'image:photo.png' }
    ].map(value => ({ value })))('should leave unmarked or non-string value %j unrecognized', ({ value }) => {
      expect(ImageSource.is(value)).toBe(false)
      expect(ImageSource.isValid(value)).toBe(false)
      expect(ImageSource.getType(value)).toBeUndefined()
      expect(ImageSource.getName(value)).toBeUndefined()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it.each([
      ['image:фото-привет.png', 'фото-привет.png'],
      ['image:ảnh-tiếng-việt.webp', 'ảnh-tiếng-việt.webp'],
      ['image:你好-世界.jpg', '你好-世界.jpg'],
      ['image:🚀-banner.svg', '🚀-banner.svg']
    ])('should preserve Unicode characters in marked source %s', (value, expectedName) => {
      expect(ImageSource.is(value)).toBe(true)
      expect(ImageSource.isValid(value)).toBe(true)
      expect(ImageSource.getType(value)).toBe(ImageTypeValue.image)
      expect(ImageSource.getName(value)).toBe(expectedName)
    })
  })
})
