import { describe, expect, it } from 'vitest'
import { getColumn } from '../getColumn'

describe('getColumn', () => {
  describe('обратная совместимость и базовые контракты', () => {
    it('должен возвращать массив значений указанного столбца из массива объектов', () => {
      const data = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
      ]

      expect(getColumn(data, 'name')).toEqual(['Alice', 'Bob', 'Charlie'])
      expect(getColumn(data, 'id')).toEqual([1, 2, 3])
    })

    it('должен возвращать undefined для отсутствующих свойств в некоторых объектах', () => {
      const data = [
        { id: 1, name: 'Alice' },
        { id: 2 },
        { id: 3, name: 'Charlie' }
      ]

      expect(getColumn(data, 'name')).toEqual(['Alice', undefined, 'Charlie'])
    })

    it('должен корректно работать с объектом-словарем (Record<string, T>)', () => {
      const obj: Record<string, { name: string, role: string }> = {
        user1: { name: 'Alice', role: 'admin' },
        user2: { name: 'Bob', role: 'user' }
      }

      expect(getColumn(obj, 'name')).toEqual(['Alice', 'Bob'])
      expect(getColumn(obj, 'role')).toEqual(['admin', 'user'])
    })

    it('должен возвращать пустой массив, если передан пустой массив объектов', () => {
      const data: { name: string }[] = []
      expect(getColumn(data, 'name')).toEqual([])
    })

    it('должен возвращать пустой массив, если передан пустой объект', () => {
      const data: Record<string, { name: string }> = {}
      expect(getColumn(data, 'name')).toEqual([])
    })
  })

  describe('сохранение falsy-значений (0, false, пустая строка, null)', () => {
    it('должен сохранять числовой ноль (0) без отбрасывания', () => {
      const data = [
        { id: 0, count: 0 },
        { id: 1, count: 5 },
        { id: 2, count: 0 }
      ]

      expect(getColumn(data, 'id')).toEqual([0, 1, 2])
      expect(getColumn(data, 'count')).toEqual([0, 5, 0])
    })

    it('должен сохранять булевы значения, включая false', () => {
      const data = [
        { name: 'task1', done: false },
        { name: 'task2', done: true },
        { name: 'task3', done: false }
      ]

      expect(getColumn(data, 'done')).toEqual([false, true, false])
    })

    it('должен сохранять пустые строки ("")', () => {
      const data = [
        { id: 1, comment: '' },
        { id: 2, comment: 'test' },
        { id: 3, comment: '' }
      ]

      expect(getColumn(data, 'comment')).toEqual(['', 'test', ''])
    })

    it('должен сохранять явные значения null', () => {
      const data = [
        { id: 1, parentId: null },
        { id: 2, parentId: 1 },
        { id: 3, parentId: null }
      ]

      expect(getColumn(data, 'parentId')).toEqual([null, 1, null])
    })

    it('должен сохранять явные значения undefined', () => {
      const data = [
        { id: 1, extra: undefined },
        { id: 2, extra: 'present' }
      ]

      expect(getColumn(data, 'extra')).toEqual([undefined, 'present'])
    })
  })

  describe('многомерные массивы и кортежи (numeric column index)', () => {
    it('должен извлекать элементы по числовому индексу из массива кортежей', () => {
      const matrix = [
        ['a', 10],
        ['b', 20],
        ['c', 30]
      ] as const

      expect(getColumn(matrix, 0)).toEqual(['a', 'b', 'c'])
      expect(getColumn(matrix, 1)).toEqual([10, 20, 30])
    })
  })

  describe('устойчивость к невалидному и пустому вводу', () => {
    it('должен безопасно возвращать пустой массив при передаче не-объекта (undefined/null)', () => {
      expect(getColumn(undefined as unknown as any[], 'name' as never)).toEqual([])
      expect(getColumn(null as unknown as any[], 'name' as never)).toEqual([])
    })

    it('должен возвращать массив undefined при запросе отсутствующего ключа', () => {
      const data = [{ id: 1 }, { id: 2 }]
      expect(getColumn(data, 'unknown' as never)).toEqual([undefined, undefined])
    })

    it('должен работать с массивами, помеченными как readonly', () => {
      const readonlyData: readonly { readonly id: number, readonly title: string }[] = [
        { id: 101, title: 'Item 1' },
        { id: 102, title: 'Item 2' }
      ]

      expect(getColumn(readonlyData, 'title')).toEqual(['Item 1', 'Item 2'])
    })
  })
})
