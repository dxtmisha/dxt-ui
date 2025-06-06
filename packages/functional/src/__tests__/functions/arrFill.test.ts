import { describe, it, expect } from 'vitest'
import { arrFill } from '../../functions/arrFill'

describe('arrFill', () => {
  it('создаёт массив нужной длины и значений', () => {
    expect(arrFill(1, 3)).toEqual([1, 1, 1])
    expect(arrFill('a', 2)).toEqual(['a', 'a'])
    expect(arrFill(null, 4)).toEqual([null, null, null, null])
  })

  it('возвращает пустой массив при count=0', () => {
    expect(arrFill('x', 0)).toEqual([])
  })
})
