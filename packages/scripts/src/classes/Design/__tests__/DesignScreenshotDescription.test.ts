import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { DesignScreenshotDescription } from '../DesignScreenshotDescription'
import * as useAiModule from '../../../composables/useAi'

describe('DesignScreenshotDescription', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('initializes with default or custom file path', () => {
    const defaultInstance = new DesignScreenshotDescription()
    expect(defaultInstance.getJsonPath()).toBe('./ai-screenshot/screenshot.json')

    const customInstance = new DesignScreenshotDescription('./custom-dir/shot')
    expect(customInstance.getJsonPath()).toBe('./custom-dir/shot.json')
  })

  it('checks if JSON file exists with is()', () => {
    const instance = new DesignScreenshotDescription()

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    expect(instance.is()).toBe(true)

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    expect(instance.is()).toBe(false)
  })

  it('reads items from file when getItems() is called and file exists', () => {
    const instance = new DesignScreenshotDescription()
    const mockData = [
      { name: 'Button', description: 'Interactive button component' }
    ]

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue(mockData)

    expect(instance.getItems()).toEqual(mockData)
  })

  it('returns empty array when getItems() is called and file does not exist', () => {
    const instance = new DesignScreenshotDescription()

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    expect(instance.getItems()).toEqual([])
  })

  it('handles make() gracefully when no images are found', async () => {
    const instance = new DesignScreenshotDescription()

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    const result = await instance.make()

    expect(result).toBe(instance)
  })

  it('processes images and saves JSON when AI returns valid result', async () => {
    const instance = new DesignScreenshotDescription()
    const mockImages = ['screenshot-1.webp']
    const mockAiResponse = JSON.stringify({
      name: 'screenshot-1.webp',
      description: 'Button, Card, Alert, Avatar'
    })

    vi.spyOn(PropertiesFile, 'is').mockImplementation((path) => {
      if (typeof path === 'string' && (path.includes('screenshot') || path.includes('ai-screenshot'))) return true
      return false
    })

    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(mockImages)
    vi.spyOn(PropertiesFile, 'getPathDir').mockReturnValue('./ai-screenshot')

    const mockAi = {
      addImage: vi.fn(),
      addPrompt: vi.fn(),
      generate: vi.fn().mockResolvedValue(mockAiResponse)
    }

    vi.spyOn(useAiModule, 'useAi').mockReturnValue(mockAi as any)

    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => { })

    // Mock readFileSync
    const mockBuffer = Buffer.from('fake-image-bytes')
    const requireFs = await import('node:fs')
    vi.spyOn(requireFs.default, 'readFileSync').mockReturnValue(mockBuffer)

    await instance.make()

    expect(mockAi.addImage).toHaveBeenCalled()
    expect(mockAi.generate).toHaveBeenCalled()
    expect(writeSpy).toHaveBeenCalledWith(
      './ai-screenshot/screenshot.json',
      [
        { name: 'screenshot-1.webp', description: 'Button, Card, Alert, Avatar' }
      ]
    )
    expect(instance.getItems()).toEqual([
      { name: 'screenshot-1.webp', description: 'Button, Card, Alert, Avatar' }
    ])
  })
})
