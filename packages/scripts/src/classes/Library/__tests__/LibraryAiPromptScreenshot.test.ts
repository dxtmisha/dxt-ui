import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryAiPromptScreenshot } from '../LibraryAiPromptScreenshot'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestLibraryAiPromptScreenshot extends LibraryAiPromptScreenshot {
  public testGetDescriptionsMap() {
    return this.getDescriptionsMap()
  }

  public testIsImageFile(fileName: string) {
    return this.isImageFile(fileName)
  }

  public testGetTypesDirName() {
    return this.getTypesDirName()
  }

  public testGetTypesPath(fileName: string) {
    return this.getTypesPath(fileName)
  }
}

describe('LibraryAiPromptScreenshot', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('checks screenshot directory existence in isScreenshot()', () => {
    const screenshot = new LibraryAiPromptScreenshot(['packages', 'd1'])

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    expect(screenshot.isScreenshot()).toBe(true)

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    expect(screenshot.isScreenshot()).toBe(false)
  })

  it('sanitizes and formats types directory name in getTypesDirName()', () => {
    const screenshotScoped = new TestLibraryAiPromptScreenshot(['packages', 'd1'], '@dxtmisha/d1')
    expect(screenshotScoped.testGetTypesDirName()).toBe('dxtmisha-d1')

    const screenshotUnnamed = new TestLibraryAiPromptScreenshot(['packages', 'ui-core'], 'none')
    expect(screenshotUnnamed.testGetTypesDirName()).toBe('ui-core')

    const screenshotEmpty = new TestLibraryAiPromptScreenshot([], 'none')
    expect(screenshotEmpty.testGetTypesDirName()).toBe('types')
  })

  it('identifies image files and filters out code, styles, and json files', () => {
    const screenshot = new TestLibraryAiPromptScreenshot(['packages', 'd1'])

    expect(screenshot.testIsImageFile('screenshot-8_1.webp')).toBe(true)
    expect(screenshot.testIsImageFile('test.png')).toBe(true)
    expect(screenshot.testIsImageFile('screenshot.json')).toBe(false)
    expect(screenshot.testIsImageFile('screenshot-code.html')).toBe(false)
    expect(screenshot.testIsImageFile('screenshot-styles.css')).toBe(false)
  })

  it('reads descriptions map from screenshot.json', () => {
    const screenshot = new TestLibraryAiPromptScreenshot(['packages', 'd1'])

    vi.spyOn(PropertiesFile, 'is').mockImplementation((path: any) => {
      const pathString = Array.isArray(path) ? path.join('/') : path
      return pathString.endsWith('screenshot.json')
    })
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue([
      { name: 'screenshot-8_1.webp', description: 'Showcase grid' },
      { name: 'screenshot-8_2.webp', description: 'Button and icon components' }
    ] as any)

    const map = screenshot.testGetDescriptionsMap()
    expect(map.get('screenshot-8_1.webp')).toBe('Showcase grid')
    expect(map.get('screenshot-8_2.webp')).toBe('Button and icon components')
    expect(map.has('screenshot-8_3.webp')).toBe(false)
  })

  it('formats screenshot prompt with descriptions, copies HTML/CSS artifacts, and excludes JSON file', () => {
    const screenshot = new LibraryAiPromptScreenshot(['packages', 'd1'], '@dxtmisha/d1')

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([
      'screenshot-8_1.webp',
      'screenshot-8_2.webp',
      'screenshot-code.html',
      'screenshot-styles.css',
      'screenshot.json'
    ])
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue([
      { name: 'screenshot-8_1.webp', description: 'Showcase grid overview' }
    ] as any)
    const copySpy = vi.spyOn(PropertiesFile, 'copy').mockImplementation(() => {})

    const result = screenshot.make()
    expect(result).toBeDefined()
    expect(result).toContain('## Component Visual References (Screenshots)')
    expect(result).toContain('- \'packages/d1/ai-screenshot/screenshot-8_1.webp\': Showcase grid overview')
    expect(result).toContain('- \'packages/d1/ai-screenshot/screenshot-8_2.webp\'')
    expect(result).not.toContain('screenshot.json')
    expect(result).toContain('- \'ai-packages-types/dxtmisha-d1/screenshot-code.html\'')
    expect(result).toContain('- \'ai-packages-types/dxtmisha-d1/screenshot-styles.css\'')

    expect(copySpy).toHaveBeenCalledWith(
      ['ai-packages-types', 'dxtmisha-d1', 'screenshot-code.html'],
      ['packages', 'd1', 'ai-screenshot', 'screenshot-code.html']
    )
    expect(copySpy).toHaveBeenCalledWith(
      ['ai-packages-types', 'dxtmisha-d1', 'screenshot-styles.css'],
      ['packages', 'd1', 'ai-screenshot', 'screenshot-styles.css']
    )
  })

  it('returns undefined when no screenshot files exist', () => {
    const screenshot = new LibraryAiPromptScreenshot(['packages', 'd1'])

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    expect(screenshot.make()).toBeUndefined()
  })
})
