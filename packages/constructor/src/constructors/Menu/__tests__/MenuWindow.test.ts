// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MenuWindow } from '../MenuWindow'

describe('MenuWindow', () => {
  it('should manage opening preparation states', async () => {
    const requestMock = {
      preparation: vi.fn().mockResolvedValue(true),
      item: ref([{ value: 1 }])
    } as any
    const win = new MenuWindow({ liteThreshold: 1 }, requestMock)
    const extra = win.getExtra()
    expect(extra.adaptive).toBe('menu')

    await extra.preparation?.()
    expect(win.lite.value).toBe(true)

    await extra.opening?.()
    expect(win.lite.value).toBe(false)
  })
})
