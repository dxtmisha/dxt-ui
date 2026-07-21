// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { WindowPosition } from '../WindowPosition'
import type { WindowProps } from '../props'

describe('WindowPosition', () => {
  let mockProps: Partial<WindowProps>
  let mockClient: any
  let mockElement: any
  let mockCoordinates: any

  beforeEach(() => {
    mockProps = {
      axis: 'y',
      indent: 4
    }
    mockClient = {
      getX: vi.fn().mockReturnValue(50),
      getY: vi.fn().mockReturnValue(100)
    }
    mockElement = {
      getMain: vi.fn().mockReturnValue(document.createElement('div')),
      getBody: vi.fn().mockReturnValue(document.createElement('div')),
      getBodyContext: vi.fn().mockReturnValue(document.createElement('div')),
      getControl: vi.fn().mockReturnValue(document.createElement('div'))
    }
    mockCoordinates = {
      update: vi.fn().mockReturnValue(true),
      getPadding: vi.fn().mockReturnValue(16),
      getLeft: vi.fn().mockReturnValue(200),
      getRight: vi.fn().mockReturnValue(300),
      getTop: vi.fn().mockReturnValue(100),
      getBottom: vi.fn().mockReturnValue(150),
      getWidth: vi.fn().mockReturnValue(250),
      getHeight: vi.fn().mockReturnValue(350)
    }

    vi.stubGlobal('innerWidth', 1024)
    vi.stubGlobal('innerHeight', 768)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should initialize positioning to 0', () => {
    const position = new WindowPosition(mockProps as WindowProps, mockClient, mockElement, mockCoordinates)
    expect(position.getX()).toBe(0)
    expect(position.getY()).toBe(0)
  })

  it('should calculate style positions in pixels', () => {
    const position = new WindowPosition(mockProps as WindowProps, mockClient, mockElement, mockCoordinates)
    position.update()

    expect(position.getStyleX()).toBe(`${position.getX()}px`)
    expect(position.getStyleY()).toBe(`${position.getY()}px`)
  })

  it('should verify overelement state using isOver', () => {
    const position = new WindowPosition(mockProps as WindowProps, mockClient, mockElement, mockCoordinates)
    expect(position.isOver()).toBe(false)

    mockProps.axis = 'on'
    expect(position.isOver()).toBe(true)
  })
})
