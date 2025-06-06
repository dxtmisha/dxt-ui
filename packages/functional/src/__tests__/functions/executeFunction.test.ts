import { describe, it, expect } from 'vitest'
import { executeFunction } from '../../functions/executeFunction'

describe('executeFunction', () => {
  it('вызывает функцию и возвращает результат', () => {
    expect(executeFunction(() => 5)).toBe(5)
  })

  it('возвращает значение, если не функция', () => {
    expect(executeFunction(10)).toBe(10)
  })
})
