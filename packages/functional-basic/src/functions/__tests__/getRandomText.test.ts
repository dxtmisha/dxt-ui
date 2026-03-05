import { describe, it, expect } from 'vitest'
import { getRandomText } from '../getRandomText'

// Mock the random utility to ensure predictable behavior for testing

describe('getRandomText', () => {
  it('should return a string of words joined by spaces', () => {
    const text = getRandomText(2, 5)
    expect(typeof text).toBe('string')
    expect(text.trim().length).toBeGreaterThan(0)

    // It should have at least the minimum number of words
    const words = text.split(' ')
    expect(words.length).toBeGreaterThanOrEqual(2)
    expect(words.length).toBeLessThanOrEqual(5)
  })

  it('should allow customizing the symbol used for generating words', () => {
    const text = getRandomText(3, 3, '*')
    const words = text.split(' ')
    expect(words.length).toBe(3)

    // Each word should only consist of asterisks
    words.forEach((word) => {
      expect(word).toMatch(/^\*+$/)
    })
  })

  it('should allow customizing word lengths', () => {
    // Generate exactly 4 words, each exactly 5 characters long
    const text = getRandomText(4, 4, '@', 5, 5)
    const words = text.split(' ')

    expect(words.length).toBe(4)
    words.forEach((word) => {
      expect(word).toBe('@@@@@')
    })
  })
})
