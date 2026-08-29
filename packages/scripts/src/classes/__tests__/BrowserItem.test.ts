import { afterEach, describe, expect, it, vi } from 'vitest'
import { BrowserItem } from '../BrowserItem'

class TestBrowserItem extends BrowserItem {
  public testGetOutputPath(outputPath: string, index?: number, max?: number) {
    return this.getOutputPath(outputPath, index, max)
  }

  public testToConsole(text: string) {
    this.toConsole(text)
  }
}

describe('BrowserItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('computes options and properties with defaults and overrides', () => {
    const item = new BrowserItem('http://localhost:3000', {
      format: 'png',
      width: 1200,
      height: 800,
      quality: 90,
      fullPage: true,
      timeout: 5000
    })

    expect(item.format).toBe('png')
    expect(item.width).toBe(1200)
    expect(item.height).toBe(800)
    expect(item.quality).toBe(90)
    expect(item.fullPage).toBe(true)
    expect(item.timeout).toBe(5000)
    expect(item.extension).toBe('.png')
  })

  it('computes jpeg extension as .jpg', () => {
    const item = new BrowserItem('http://localhost:3000', {
      format: 'jpeg'
    })
    expect(item.extension).toBe('.jpg')
  })

  it('formats output file paths for sliced and fullPage modes', () => {
    const sliced = new TestBrowserItem('http://localhost:3000', {
      format: 'webp',
      fullPage: false
    })
    expect(sliced.testGetOutputPath('out/shot', 2, 4)).toBe('out/shot-4_2.webp')

    const full = new TestBrowserItem('http://localhost:3000', {
      format: 'png',
      fullPage: true
    })
    expect(full.testGetOutputPath('out/shot', 1, 1)).toBe('out/shot.png')
  })

  it('resets internal states on reset()', async () => {
    const item = new BrowserItem('http://localhost:3000')
    const res = await item.reset()
    expect(res).toBe(item)
  })
})
