import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignScreenshot } from '../DesignScreenshot'

describe('DesignScreenshot', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('initializes with default or custom file path', () => {
    const screenshot = new DesignScreenshot('./custom-dir/shot')
    expect(screenshot).toBeDefined()
  })
})
