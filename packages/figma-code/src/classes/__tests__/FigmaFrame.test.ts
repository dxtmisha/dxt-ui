import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FigmaFrame } from '../FigmaFrame'

describe('FigmaFrame', () => {
  let mockPage: any

  beforeEach(() => {
    mockPage = {
      id: 'page-1',
      type: 'PAGE',
      children: [
        {
          id: 'frame-1',
          type: 'FRAME',
          name: 'Frame 1',
          children: [],
          getCSSAsync: vi.fn().mockResolvedValue({ display: 'flex' }),
          exportAsync: vi.fn().mockResolvedValue(new Uint8Array([1, 2]))
        },
        {
          id: 'section-1',
          type: 'SECTION',
          name: 'Section 1',
          children: [],
          getCSSAsync: vi.fn().mockResolvedValue({}),
          exportAsync: vi.fn().mockResolvedValue(new Uint8Array([3, 4]))
        },
        {
          id: 'text-1',
          type: 'TEXT',
          name: 'Text 1',
          characters: 'Welcome',
          children: [],
          getCSSAsync: vi.fn().mockResolvedValue({}),
          exportAsync: vi.fn().mockResolvedValue(new Uint8Array([5, 6]))
        }
      ],
      getCSSAsync: vi.fn().mockResolvedValue({}),
      exportAsync: vi.fn().mockResolvedValue(new Uint8Array([0]))
    }
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should classify and filter child items by node type', () => {
      const frame = new FigmaFrame(mockPage)

      const frames = frame.getItemsFrame()
      expect(frames).toHaveLength(1)
      expect(frames[0].getId()).toBe('frame-1')

      const sections = frame.getItemsSection()
      expect(sections).toHaveLength(1)
      expect(sections[0].getId()).toBe('section-1')

      const texts = frame.getItemsText()
      expect(texts).toHaveLength(1)
      expect(texts[0].getId()).toBe('text-1')
    })

    it('getMainFrames() should return top-level frames and sections', () => {
      const frame = new FigmaFrame(mockPage)
      const mainFrames = frame.getMainFrames()

      expect(mainFrames).toHaveLength(2)
      expect(mainFrames.map(f => f.getId())).toEqual(['frame-1', 'section-1'])
    })

    it('getTexts() should group multiple text nodes with identical text into single record', () => {
      mockPage.children.push({
        id: 'text-2',
        type: 'TEXT',
        name: 'Text 2',
        characters: 'Welcome',
        children: []
      })

      const frame = new FigmaFrame(mockPage)
      const texts = frame.getTexts()

      expect(texts).toHaveLength(1)
      expect(texts[0]).toEqual({
        id: ['text-1', 'text-2'],
        text: 'Welcome'
      })
    })

    it('getItemsCss() should assemble map of node CSS properties keyed by id', async () => {
      const frame = new FigmaFrame(mockPage)
      const cssMap = await frame.getItemsCss()

      expect(cssMap['frame-1']).toEqual({ display: 'flex' })
      expect(cssMap['section-1']).toEqual({})
      expect(cssMap['text-1']).toEqual({})
    })

    it('getItemsInfo() and getMainItemsInfo() should assemble frame summaries', async () => {
      const frame = new FigmaFrame(mockPage)
      const itemsInfo = await frame.getItemsInfo()
      const mainInfo = await frame.getMainItemsInfo()

      expect(itemsInfo).toHaveLength(3)
      expect(mainInfo).toHaveLength(1)
      expect(mainInfo[0].id).toBe('page-1')
    })

    it('screenshot() should export images of all main items', async () => {
      const frame = new FigmaFrame(mockPage)
      const screenshots = await frame.screenshot()

      expect(screenshots).toHaveLength(1)
      expect(screenshots[0]).toBeInstanceOf(Uint8Array)
    })

    it('getItemsStyles() and getMainItemsStyles() should collect styles and child styles', async () => {
      const frame = new FigmaFrame(mockPage)
      const itemsStyles = await frame.getItemsStyles()
      const mainStyles = await frame.getMainItemsStyles()

      expect(itemsStyles).toHaveLength(3)
      expect(mainStyles).toHaveLength(1)
      expect(mainStyles[0].childrenStyles).toBeDefined()
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle completely empty node hierarchy without crashing', async () => {
      const emptyNode = { id: 'empty', type: 'PAGE' }
      const frame = new FigmaFrame(emptyNode as any)

      expect(frame.getItemsFrame()).toEqual([])
      expect(frame.getItemsSection()).toEqual([])
      expect(frame.getItemsText()).toEqual([])
      expect(frame.getMainFrames()).toEqual([])
      expect(frame.getTexts()).toEqual([])
      expect(await frame.getItemsCss()).toEqual({})
      expect(await frame.getItemsInfo()).toEqual([])
      expect(await frame.getItemsStyles()).toEqual([])
    })

    it('isSelection() should return true only when selection: true and selection property exists', () => {
      mockPage.selection = [mockPage.children[0]]

      const activeSelection = new FigmaFrame(mockPage, true)
      expect(activeSelection.isSelection()).toBe(true)

      const inactiveSelection = new FigmaFrame(mockPage, false)
      expect(inactiveSelection.isSelection()).toBe(false)

      const nodeWithoutSelection = { id: 'no-sel', type: 'FRAME' }
      const frameNoSel = new FigmaFrame(nodeWithoutSelection as any, true)
      expect(frameNoSel.isSelection()).toBe(false)
    })

    it('should correctly traverse nested hierarchy recursively in selection mode', () => {
      const grandChild = { id: 'nested-child', type: 'TEXT', characters: 'Nested Label' }
      const selectedFrame = {
        id: 'selected-frame',
        type: 'FRAME',
        children: [grandChild]
      }
      mockPage.selection = [selectedFrame]

      const frame = new FigmaFrame(mockPage, true)
      const texts = frame.getTexts()

      expect(texts).toEqual([
        { id: ['nested-child'], text: 'Nested Label' }
      ])
    })

    it('getTexts() should ignore non-value text nodes (empty, pure digits or units)', () => {
      mockPage.children.push(
        { id: 't-empty', type: 'TEXT', characters: '   ' },
        { id: 't-num', type: 'TEXT', characters: '42' },
        { id: 't-px', type: 'TEXT', characters: '16px' }
      )

      const frame = new FigmaFrame(mockPage)
      const texts = frame.getTexts()

      expect(texts.some(t => t.text === '42')).toBe(false)
      expect(texts.some(t => t.text === '16px')).toBe(false)
      expect(texts.some(t => t.text.trim() === '')).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('getTexts() should accurately group multilingual texts (Cyrillic, Vietnamese, Emojis)', () => {
      mockPage.children = [
        { id: 'ru-1', type: 'TEXT', characters: 'Сохранить' },
        { id: 'ru-2', type: 'TEXT', characters: 'Сохранить' },
        { id: 'vi-1', type: 'TEXT', characters: 'Lưu thay đổi' },
        { id: 'emoji-1', type: 'TEXT', characters: '🚀 Старт' }
      ]

      const frame = new FigmaFrame(mockPage)
      const texts = frame.getTexts()

      expect(texts).toHaveLength(3)
      const ruGroup = texts.find(t => t.text === 'Сохранить')
      expect(ruGroup?.id).toEqual(['ru-1', 'ru-2'])

      const viGroup = texts.find(t => t.text === 'Lưu thay đổi')
      expect(viGroup?.id).toEqual(['vi-1'])

      const emojiGroup = texts.find(t => t.text === '🚀 Старт')
      expect(emojiGroup?.id).toEqual(['emoji-1'])
    })
  })
})
