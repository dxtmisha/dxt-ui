// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { WindowHook } from '../WindowHook'
import type { WindowProps } from '../props'

describe('WindowHook', () => {
  it('should call preparation hook when available', async () => {
    const mockPreparation = vi.fn().mockResolvedValue(undefined)
    const windowHook = new WindowHook({ preparation: mockPreparation } as WindowProps)

    await windowHook.preparation()
    expect(mockPreparation).toHaveBeenCalled()
  })

  it('should call beforeOpening when before(true) is invoked', async () => {
    const mockBeforeOpening = vi.fn().mockResolvedValue(true)
    const windowHook = new WindowHook({ beforeOpening: mockBeforeOpening } as WindowProps)

    const result = await windowHook.before(true)
    expect(mockBeforeOpening).toHaveBeenCalled()
    expect(result).toBe(true)
  })

  it('should return true if beforeOpening is not defined', async () => {
    const windowHook = new WindowHook({} as WindowProps)
    const result = await windowHook.before(true)
    expect(result).toBe(true)
  })

  it('should call beforeClosing when before(false) is invoked', async () => {
    const mockBeforeClosing = vi.fn().mockResolvedValue(false)
    const windowHook = new WindowHook({ beforeClosing: mockBeforeClosing } as WindowProps)

    const result = await windowHook.before(false)
    expect(mockBeforeClosing).toHaveBeenCalled()
    expect(result).toBe(false)
  })

  it('should return true if beforeClosing is not defined', async () => {
    const windowHook = new WindowHook({} as WindowProps)
    const result = await windowHook.before(false)
    expect(result).toBe(true)
  })

  it('should call opening when after(true) is invoked', async () => {
    const mockOpening = vi.fn().mockResolvedValue(true)
    const windowHook = new WindowHook({ opening: mockOpening } as WindowProps)

    const result = await windowHook.after(true)
    expect(mockOpening).toHaveBeenCalled()
    expect(result).toBe(true)
  })

  it('should return false if opening is not defined', async () => {
    const windowHook = new WindowHook({} as WindowProps)
    const result = await windowHook.after(true)
    expect(result).toBe(false)
  })

  it('should call closing when after(false) is invoked', async () => {
    const mockClosing = vi.fn().mockResolvedValue(true)
    const windowHook = new WindowHook({ closing: mockClosing } as WindowProps)

    const result = await windowHook.after(false)
    expect(mockClosing).toHaveBeenCalled()
    expect(result).toBe(true)
  })

  it('should return false if closing is not defined', async () => {
    const windowHook = new WindowHook({} as WindowProps)
    const result = await windowHook.after(false)
    expect(result).toBe(false)
  })
})
