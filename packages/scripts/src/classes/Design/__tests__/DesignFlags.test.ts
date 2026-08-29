import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignFlags } from '../DesignFlags'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestDesignFlags extends DesignFlags {
  public testInitList() {
    return this.initList()
  }

  public testInitSquare() {
    return this.initSquare()
  }

  public testGetLines() {
    return this.getLines()
  }

  public testGetCanvasWidth() {
    return this.getCanvasWidth()
  }

  public testGetCanvasHeight() {
    return this.getCanvasHeight()
  }

  public testAddData(file: string) {
    return this.addData(file)
  }

  public testNext() {
    this.next()
  }

  public testGetStyle() {
    return this.getStyle()
  }

  public getX() {
    return this.x
  }

  public getY() {
    return this.y
  }

  public setData(data: any[]) {
    this.data = data
  }
}

describe('DesignFlags', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('calculates square, dimensions, and lines correctly based on factor', () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([
      'us.svg',
      'vn.svg',
      'ru.svg',
      'de.svg'
    ])

    const flags = new TestDesignFlags('src/assets/flags', 96, 72, 2)

    expect(flags.testInitSquare()).toBe(96 * 2) // 192
    expect(flags.testGetLines()).toBe(2) // 4 files / 2 cols = 2
    expect(flags.testGetCanvasWidth()).toBe(2 * 192) // 384
    expect(flags.testGetCanvasHeight()).toBe(2 * 192) // 384
  })

  it('increments grid position x and y on next()', () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([])
    const flags = new TestDesignFlags('dir', 100, 100, 2)

    expect(flags.getX()).toBe(0)
    expect(flags.getY()).toBe(0)

    flags.testNext()
    expect(flags.getX()).toBe(1)
    expect(flags.getY()).toBe(0)

    flags.testNext() // x reaches columns (2), wraps to 0 and increments y
    expect(flags.getX()).toBe(0)
    expect(flags.getY()).toBe(1)
  })

  it('generates style item and full style CSS', () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue([])
    const flags = new TestDesignFlags('dir', 96, 72, 10)

    const item = flags.testAddData('vn.svg')
    expect(item.name).toBe('vn')
    expect(typeof item.x).toBe('number')
    expect(typeof item.y).toBe('number')

    flags.setData([item])
    const fullStyle = flags.testGetStyle()
    expect(fullStyle).toContain('.ui-sys-flags')
    expect(fullStyle).toContain('background-image:')
    expect(fullStyle).toContain('.ui-sys-flags--vn')
  })
})
