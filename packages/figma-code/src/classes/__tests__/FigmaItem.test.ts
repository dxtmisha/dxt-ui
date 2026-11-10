import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaItem } from '../FigmaItem'

describe('FigmaItem', () => {
  let mockNode: any

  beforeEach(() => {
    mockNode = {
      id: 'node-1',
      name: 'Node Name',
      type: 'FRAME',
      children: [],
      getCSSAsync: vi.fn().mockResolvedValue({ color: 'red' }),
      exportAsync: vi.fn().mockResolvedValue(new Uint8Array([1, 2, 3]))
    }

    vi.stubGlobal('figma', {
      currentPage: {
        id: 'page-1',
        selection: []
      },
      viewport: {
        scrollAndZoomIntoView: vi.fn()
      },
      setCurrentPageAsync: vi.fn().mockResolvedValue(undefined)
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('getType(), getId(), getName(), and get() should return accurate node properties', () => {
      const item = new FigmaItem(mockNode)

      expect(item.get()).toBe(mockNode)
      expect(item.getType()).toBe('FRAME')
      expect(item.getId()).toBe('node-1')
      expect(item.getName()).toBe('Node Name')
    })

    it('type predicates (isFrame, isSection, isDocument, isText) should correctly identify node types', () => {
      const frameItem = new FigmaItem(mockNode)
      expect(frameItem.isFrame()).toBe(true)
      expect(frameItem.isSection()).toBe(false)
      expect(frameItem.isDocument()).toBe(false)
      expect(frameItem.isText()).toBe(false)

      const sectionItem = new FigmaItem({ id: 's1', type: 'SECTION' } as any)
      expect(sectionItem.isSection()).toBe(true)
      expect(sectionItem.isFrame()).toBe(false)

      const docItem = new FigmaItem({ id: 'd1', type: 'DOCUMENT' } as any)
      expect(docItem.isDocument()).toBe(true)

      const textItem = new FigmaItem({ id: 't1', type: 'TEXT', characters: 'Content' } as any)
      expect(textItem.isText()).toBe(true)
    })

    it('getCss() should invoke getCSSAsync and return styles map', async () => {
      const item = new FigmaItem(mockNode)
      const css = await item.getCss()

      expect(css).toEqual({ color: 'red' })
      expect(mockNode.getCSSAsync).toHaveBeenCalled()
    })

    it('getChildren() and getChildrenItems() should return wrapped FigmaItem instances', () => {
      const child1 = { id: 'c1', name: 'Child 1', type: 'RECTANGLE' }
      const child2 = { id: 'c2', name: 'Child 2', type: 'FRAME' }
      mockNode.children = [child1, child2]

      const item = new FigmaItem(mockNode)
      const children = item.getChildren()
      const items = item.getChildrenItems()

      expect(children).toHaveLength(2)
      expect(items).toHaveLength(2)
      expect(items[0]).toBeInstanceOf(FigmaItem)
      expect(items[0].getId()).toBe('c1')
      expect(items[1].getId()).toBe('c2')
    })

    it('getInfo() and getStyles() should assemble comprehensive node info and styles', async () => {
      mockNode.exportAsync.mockImplementation(async (settings: any) => {
        if (settings.format === 'JPG') return 'jpg-mock'
        if (settings.format === 'SVG') return 'svg-mock'
        if (settings.format === 'JSON_REST_V1') {
          return JSON.stringify({
            document: { id: 'node-1', name: 'Node Name', type: 'FRAME' },
            styles: { fill: '#fff' }
          })
        }
        return ''
      })

      const item = new FigmaItem(mockNode)
      const info = await item.getInfo()
      const styles = await item.getStyles()

      expect(info.id).toBe('node-1')
      expect(info.name).toBe('Node Name')
      expect(info.image).toBe('jpg-mock')
      expect(info.svg).toBe('svg-mock')

      expect(styles.id).toBe('node-1')
      expect(styles.styles).toEqual({ color: 'red' })
      expect(styles.json?.document.id).toBe('node-1')
    })

    it('toSelection() and toPageAndSelection() should update selection and zoom', async () => {
      const pageNode = { id: 'page-2', type: 'PAGE' }
      mockNode.parent = pageNode

      const item = new FigmaItem(mockNode)
      item.toSelection()

      expect(figma.currentPage.selection).toEqual([mockNode])
      expect(figma.viewport.scrollAndZoomIntoView).toHaveBeenCalledWith([mockNode])

      await item.toPageAndSelection()
      expect(figma.setCurrentPageAsync).toHaveBeenCalledWith(pageNode)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should safely handle nodes without optional properties (id, name, parent, children)', async () => {
      const minimalNode = {}
      const item = new FigmaItem(minimalNode as any)

      expect(item.getId()).toBe('')
      expect(item.getName()).toBe('')
      expect(item.getType()).toBeUndefined()
      expect(item.getChildren()).toEqual([])
      expect(item.getChildrenItems()).toEqual([])
      expect(item.getParent()).toBeUndefined()
      expect(item.getParentItem()).toBeUndefined()
      expect(item.getParentPage()).toBeUndefined()
      expect(item.getParentPageItem()).toBeUndefined()
      expect(item.inCurrentPage()).toBe(false)
      expect(await item.getCss()).toEqual({})
      expect(await item.exportJpg()).toBe('')
      expect(await item.exportSvg()).toBe('')
      expect(await item.exportJson()).toBe('')
      expect(await item.exportJsonCompact()).toBeUndefined()
    })

    it('getName() should fallback to getId() when name is missing but id is present', () => {
      const nodeWithoutName = { id: 'fallback-id' }
      const item = new FigmaItem(nodeWithoutName as any)

      expect(item.getName()).toBe('fallback-id')
    })

    it('getParentPage() should traverse through multiple ancestor frames until PageNode', () => {
      const pageNode = { id: 'target-page', type: 'PAGE' }
      const grandparent = { id: 'grandparent', type: 'FRAME', parent: pageNode }
      const parent = { id: 'parent', type: 'FRAME', parent: grandparent }
      mockNode.parent = parent

      const item = new FigmaItem(mockNode)
      expect(item.getParentPage()?.id).toBe('target-page')
      expect(item.getParentPageItem()?.getId()).toBe('target-page')
    })

    it('getParentPage() should return undefined when root is reached without PAGE node', () => {
      const nonPageRoot = { id: 'orphan-root', type: 'FRAME' }
      mockNode.parent = nonPageRoot

      const item = new FigmaItem(mockNode)
      expect(item.getParentPage()).toBeUndefined()
      expect(item.getParentPageItem()).toBeUndefined()
    })

    it('exportJsonCompact() should safely handle malformed JSON string without crashing', async () => {
      mockNode.exportAsync.mockResolvedValue('invalid-json-content{{{')

      const item = new FigmaItem(mockNode)
      const result = await item.exportJsonCompact()

      expect(result).toBeUndefined()
    })

    it('exportJsonCompact() should handle raw object output directly', async () => {
      mockNode.exportAsync.mockResolvedValue({
        document: {
          id: 'raw-1',
          name: 'Raw Node',
          type: 'FRAME',
          children: [{ id: 'child-c', name: 'Child C', type: 'TEXT', characters: 'Sample' }]
        },
        styles: { opacity: '0.8' }
      })

      const item = new FigmaItem(mockNode)
      const result = await item.exportJsonCompact()

      expect(result).toBeDefined()
      expect(result?.document.id).toBe('raw-1')
      expect(result?.document.children?.[0].characters).toBe('Sample')
      expect(result?.styles).toEqual({ opacity: '0.8' })
    })
  })

  describe('Text content and isTextNoValue edge cases', () => {
    it('isTextNoValue() should return false for numeric measurements and percentages', () => {
      const testCases = [
        '100',
        '12.5',
        '0',
        '12.5 px',
        '16px',
        '1.5em',
        '100 %',
        '1,000 pt'
      ]

      for (const text of testCases) {
        const item = new FigmaItem({ id: 't', type: 'TEXT', characters: text } as any)
        expect(item.isTextNoValue()).toBe(false)
      }
    })

    it('isTextNoValue() should return false for empty or whitespace-only text', () => {
      const whitespaceCases = ['', '   ', '\t', '\n\r']

      for (const text of whitespaceCases) {
        const item = new FigmaItem({ id: 't', type: 'TEXT', characters: text } as any)
        expect(item.isTextNoValue()).toBe(false)
      }
    })

    it('isTextNoValue() should return true for meaningful textual content', () => {
      const meaningfulCases = [
        'Click here',
        'Settings',
        '123 items in cart',
        'Chapter 1: The Beginning'
      ]

      for (const text of meaningfulCases) {
        const item = new FigmaItem({ id: 't', type: 'TEXT', characters: text } as any)
        expect(item.isTextNoValue()).toBe(true)
      }
    })

    it('getText() should trim whitespace for text nodes and return empty string for non-text', () => {
      const textItem = new FigmaItem({ id: 't', type: 'TEXT', characters: '   Trim Me   \n' } as any)
      expect(textItem.getText()).toBe('Trim Me')

      const frameItem = new FigmaItem(mockNode)
      expect(frameItem.getText()).toBe('')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should correctly handle Cyrillic, Vietnamese, and Emoji characters in names and text', () => {
      const ruTextItem = new FigmaItem({
        id: 'ru-node',
        name: 'Кнопка отправки',
        type: 'TEXT',
        characters: 'Привет, мир!'
      } as any)

      expect(ruTextItem.getName()).toBe('Кнопка отправки')
      expect(ruTextItem.getText()).toBe('Привет, мир!')
      expect(ruTextItem.isTextNoValue()).toBe(true)

      const viTextItem = new FigmaItem({
        id: 'vi-node',
        name: 'Tiêu đề trang',
        type: 'TEXT',
        characters: 'Xin chào thế giới 🇻🇳🚀'
      } as any)

      expect(viTextItem.getName()).toBe('Tiêu đề trang')
      expect(viTextItem.getText()).toBe('Xin chào thế giới 🇻🇳🚀')
      expect(viTextItem.isTextNoValue()).toBe(true)
    })
  })
})
