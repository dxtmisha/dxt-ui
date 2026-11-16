import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { InputPassword } from '../InputPassword'
import type { TextInclude } from '../../../classes/TextInclude'
import type { FieldVisibilityInclude } from '../../../classes/Field/FieldVisibilityInclude'

describe('InputPassword', () => {
  const mockText = {
    show: 'Show Password',
    hide: 'Hide Password'
  } as unknown as TextInclude

  it('should return correct status when type is not password', () => {
    const props = { type: 'text' as const }
    const mockVisibility = {
      item: ref(false),
      toggle: vi.fn()
    } as unknown as FieldVisibilityInclude

    expect(InputPassword.is(props)).toBe(false)

    const inputPassword = new InputPassword(
      props,
      () => mockText,
      () => mockVisibility
    )
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
    const mockVisibilityValue = ref(false)
    const mockVisibility = {
      item: mockVisibilityValue,
      toggle: vi.fn(() => {
        mockVisibilityValue.value = !mockVisibilityValue.value
      })
    } as unknown as FieldVisibilityInclude

    expect(InputPassword.is(props)).toBe(true)

    const inputPassword = new InputPassword(
      props,
      () => mockText,
      () => mockVisibility
    )
    expect(inputPassword.is()).toBe(true)

    expect(inputPassword.icon).toEqual({
      active: false,
      icon: 'eye-open',
      iconActive: 'eye-closed',
      dynamic: true,
      ariaLabel: 'Show Password'
    })

    inputPassword.toggle()
    expect(mockVisibility.toggle).toHaveBeenCalled()
    expect(mockVisibilityValue.value).toBe(true)

    expect(inputPassword.icon).toEqual({
      active: true,
      icon: 'eye-open',
      iconActive: 'eye-closed',
      dynamic: true,
      ariaLabel: 'Hide Password'
    })
  })
})
