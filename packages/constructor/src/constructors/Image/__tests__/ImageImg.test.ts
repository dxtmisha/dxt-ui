// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, reactive } from 'vue'
import { ImageImg } from '../ImageImg'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('ImageImg', () => {
  it('should check if img tag is needed', () => {
    const props = reactive({ tagImg: true, lazy: false, preloadOffset: '0px' })
    const mockType = {
      item: { value: 'image' }
    } as any
    const mockPosition = { x: 'center', y: 'center' } as any
    const mockBackground = {
      size: { value: 'cover' }
    } as any

    const img = new ImageImg(props, ref(undefined), mockType, mockPosition, mockBackground)
    expect(img.is()).toBe(true)
  })
})
