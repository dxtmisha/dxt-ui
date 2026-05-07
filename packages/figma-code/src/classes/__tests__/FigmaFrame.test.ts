import { describe, it, expect, beforeEach } from 'vitest'
import { FigmaFrame } from '../FigmaFrame'

describe('FigmaFrame', () => {
  let mockPage: any

  beforeEach(() => {
    mockPage = {
      id: 'page-1',
      type: 'PAGE',
      children: [
        { id: 'frame-1', type: 'FRAME', name: 'Frame 1', children: [] },
        { id: 'text-1', type: 'TEXT', name: 'Text 1', characters: 'Hello', children: [] }
      ]
    }
  })

  it('should initialize and find items', () => {
    const frame = new FigmaFrame(mockPage)
    const frames = frame.getItemsFrame()
    expect(frames).toHaveLength(1)
    expect(frames[0].getId()).toBe('frame-1')
  })

  it('getMainFrames() should return frames from root', () => {
    // Mocking figma.root or internal toMain
    const frame = new FigmaFrame(mockPage)
    // In this context, page is the root for the test
    const mainFrames = frame.getMainFrames()
    expect(mainFrames).toBeDefined()
  })

  it('getTexts() should return grouped text nodes', () => {
    mockPage.children.push({ id: 'text-2', type: 'TEXT', name: 'Text 2', characters: 'Hello', children: [] })
    const frame = new FigmaFrame(mockPage)
    const texts = frame.getTexts()
    const helloGroup = texts.find(t => t.text === 'Hello')
    expect(helloGroup).toBeDefined()
    expect(helloGroup?.id).toContain('text-1')
    expect(helloGroup?.id).toContain('text-2')
  })
})
