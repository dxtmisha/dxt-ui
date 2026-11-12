import { afterEach, beforeEach, expect, vi } from 'vitest'

/** Unexpected console warnings / Неожиданные предупреждения консоли */
let warnings: unknown[][] = []
/** Unexpected console errors / Неожиданные ошибки консоли */
let errors: unknown[][] = []

beforeEach(() => {
  warnings = []
  errors = []
  vi.spyOn(console, 'warn').mockImplementation((...values: unknown[]) => {
    warnings.push(values)
  })
  vi.spyOn(console, 'error').mockImplementation((...values: unknown[]) => {
    errors.push(values)
  })
})

afterEach(() => {
  try {
    expect(warnings, 'Unexpected framework or infrastructure warnings').toEqual([])
    expect(errors, 'Unexpected framework or infrastructure errors').toEqual([])
  } finally {
    vi.restoreAllMocks()
  }
})
