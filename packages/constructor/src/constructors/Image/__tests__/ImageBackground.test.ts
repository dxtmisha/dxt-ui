// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { ImageBackground } from '../ImageBackground'

describe('ImageBackground', () => {
  it('should resolve CSS background URL', () => {
    const props = {}
    const mockData = {
      image: ref('http://path/to/img.png')
    } as any
    const mockCoordinator = {
      is: () => false
    } as any
    const mockAdaptive = {
      is: () => false
    } as any

    const bg = new ImageBackground(props, mockData, mockCoordinator, mockAdaptive)
    expect(bg.imageSrc).toBe('http://path/to/img.png')
    expect(bg.image).toBe('url("http://path/to/img.png")')
    expect(bg.isImage()).toBe(true)
  })
})
