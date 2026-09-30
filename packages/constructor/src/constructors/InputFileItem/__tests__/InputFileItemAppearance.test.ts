// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'

import { InputFileItemAppearance } from '../InputFileItemAppearance'
import type { InputFileItemProps } from '../props'

describe('InputFileItemAppearance', () => {
  const createHelper = (props: Partial<InputFileItemProps> = {}) => {
    const fullProps = { ...props } as InputFileItemProps
    const appearance = new InputFileItemAppearance(fullProps)

    return { appearance }
  }

  describe('get', () => {
    it('returns custom appearance when provided', () => {
      const { appearance } = createHelper({ appearance: 'tile' })
      expect(appearance.get()).toBe('tile')
    })

    it('defaults to list when appearance prop is undefined', () => {
      const { appearance } = createHelper({})
      expect(appearance.get()).toBe('list')
    })
  })

  describe('is', () => {
    it('returns true when mode matches', () => {
      const { appearance } = createHelper({ appearance: 'compact' })
      expect(appearance.is('compact')).toBe(true)
      expect(appearance.is('tile')).toBe(false)
      expect(appearance.is('list')).toBe(false)
    })
  })

  describe('isCompact', () => {
    it('returns true only for compact mode', () => {
      const { appearance: compact } = createHelper({ appearance: 'compact' })
      const { appearance: tile } = createHelper({ appearance: 'tile' })
      expect(compact.isCompact()).toBe(true)
      expect(tile.isCompact()).toBe(false)
    })
  })

  describe('isList', () => {
    it('returns true for list mode and default', () => {
      const { appearance: defaultAppearance } = createHelper({})
      const { appearance: list } = createHelper({ appearance: 'list' })
      const { appearance: tile } = createHelper({ appearance: 'tile' })
      expect(defaultAppearance.isList()).toBe(true)
      expect(list.isList()).toBe(true)
      expect(tile.isList()).toBe(false)
    })
  })

  describe('isTile', () => {
    it('returns true only for tile mode', () => {
      const { appearance: tile } = createHelper({ appearance: 'tile' })
      const { appearance: compact } = createHelper({ appearance: 'compact' })
      expect(tile.isTile()).toBe(true)
      expect(compact.isTile()).toBe(false)
    })
  })

  describe('isCircular', () => {
    it('returns true for compact and tile appearances', () => {
      const { appearance: compact } = createHelper({ appearance: 'compact' })
      const { appearance: tile } = createHelper({ appearance: 'tile' })
      const { appearance: list } = createHelper({ appearance: 'list' })
      expect(compact.isCircular()).toBe(true)
      expect(tile.isCircular()).toBe(true)
      expect(list.isCircular()).toBe(false)
    })
  })
})
