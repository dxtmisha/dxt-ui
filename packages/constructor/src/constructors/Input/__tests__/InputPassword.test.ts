// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { InputPassword } from '../InputPassword'

describe('InputPassword', () => {
  const mockText = {
    show: 'Show Password',
    hide: 'Hide Password'
  } as any

  it('should return correct status when type is not password', () => {
    const props = { type: 'text' as const }
    const mockVisibility = {
      item: ref(false),
      toggle: vi.fn()
    } as any

    const inputPassword = new InputPassword(props, mockVisibility, mockText)
    expect(inputPassword.is()).toBe(false)
    expect(inputPassword.icon).toBeUndefined()

    inputPassword.toggle()
    expect(mockVisibility.toggle).not.toHaveBeenCalled()
  })

  it('should return correct status when type is password', () => {
    const props = {
      type: 'password' as const,
      iconVisibility: 'eye-open',
      iconVisibilityOff: 'eye-closed'
    }
    const mockVisibilityVal = ref(false)
    const mockVisibility = {
      item: mockVisibilityVal,
      toggle: vi.fn(() => {
        mockVisibilityVal.value = !mockVisibilityVal.value
      })
    } as any

    const inputPassword = new InputPassword(props, mockVisibility, mockText)
    expect(inputPassword.is()).toBe(true)

    expect(inputPassword.icon).toEqual({
      active: false,
      icon: 'eye-closed',
      iconActive: 'eye-open',
      dynamic: true,
      ariaLabel: 'Show Password'
    })

    inputPassword.toggle()
    expect(mockVisibility.toggle).toHaveBeenCalled()
    expect(mockVisibilityVal.value).toBe(true)

    expect(inputPassword.icon).toEqual({
      active: true,
      icon: 'eye-closed',
      iconActive: 'eye-open',
      dynamic: true,
      ariaLabel: 'Hide Password'
    })
  })
})
