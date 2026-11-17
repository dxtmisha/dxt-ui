// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import type { MenuRequest } from '../MenuRequest'
import { MenuWindow } from '../MenuWindow'

describe('MenuWindow', () => {
  it('should keep request getter lazy until preparation runs and return expected window extra config', () => {
    const requestGetter = vi.fn()
    const menuWindow = new MenuWindow({ liteThreshold: 5 }, requestGetter)

    expect(requestGetter).not.toHaveBeenCalled()

    const extra = menuWindow.getExtra()
    expect(extra).toMatchObject({
      adaptive: 'menu',
      role: 'menu',
      openOnArrowDown: true
    })
    expect(typeof extra.preparation).toBe('function')
    expect(typeof extra.opening).toBe('function')
    expect(typeof extra.closing).toBe('function')
    expect(requestGetter).not.toHaveBeenCalled()
  })

  it('should enable lite mode when list length reaches liteThreshold and reset on opening/closing', async () => {
    const requestMock = {
      preparation: vi.fn().mockResolvedValue(true),
      item: ref([{ value: 1 }, { value: 2 }])
    } as unknown as MenuRequest

    const menuWindow = new MenuWindow({ liteThreshold: 2 }, () => requestMock)
    const extra = menuWindow.getExtra()

    expect(menuWindow.lite.value).toBeUndefined()

    await extra.preparation?.()
    expect(requestMock.preparation).toHaveBeenCalledTimes(1)
    expect(menuWindow.lite.value).toBe(true)

    expect(await extra.opening?.()).toBe(true)
    expect(menuWindow.lite.value).toBe(false)

    await extra.preparation?.()
    expect(menuWindow.lite.value).toBe(true)

    expect(await extra.closing?.()).toBe(true)
    expect(menuWindow.lite.value).toBe(false)
  })

  it('should not enable lite mode when list length is below threshold or threshold is unset', async () => {
    const requestMock = {
      preparation: vi.fn().mockResolvedValue(true),
      item: ref([{ value: 1 }])
    } as unknown as MenuRequest

    const belowThreshold = new MenuWindow({ liteThreshold: 2 }, () => requestMock)
    await belowThreshold.getExtra().preparation?.()
    expect(belowThreshold.lite.value).toBeUndefined()

    const noThreshold = new MenuWindow({}, () => requestMock)
    await noThreshold.getExtra().preparation?.()
    expect(noThreshold.lite.value).toBeUndefined()
  })
})
