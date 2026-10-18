import { describe, expect, it } from 'vitest'
import { getArrayHighlightMatch } from '../getArrayHighlightMatch'

describe('getArrayHighlightMatch', () => {
  describe('обратная совместимость (базовые контракты)', () => {
    it('должен возвращать один сегмент без совпадения, если search — пустая строка', () => {
      const result = getArrayHighlightMatch('hello world', '')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('должен возвращать один сегмент без совпадения, если search — undefined', () => {
      const result = getArrayHighlightMatch('hello world', undefined)
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('должен возвращать один сегмент без совпадения, если аргумент search не передан вовсе', () => {
      const result = getArrayHighlightMatch('hello world')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('должен возвращать пустой сегмент, если исходная строка пуста', () => {
      const result = getArrayHighlightMatch('', 'hello')
      expect(result).toEqual([{ text: '', isMatch: false }])
    })

    it('должен возвращать всю строку без совпадений, если искомой подстроки нет в тексте', () => {
      const result = getArrayHighlightMatch('hello world', 'missing')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('должен возвращать один сегмент с isMatch: true, если строка совпадает целиком', () => {
      const result = getArrayHighlightMatch('hello', 'hello')
      expect(result).toEqual([{ text: 'hello', isMatch: true }])
    })

    it('должен корректно выделять одиночное слово в тексте', () => {
      const result = getArrayHighlightMatch('hello world', 'hello')
      expect(result).toEqual([
        { text: 'hello', isMatch: true },
        { text: ' world', isMatch: false }
      ])
    })

    it('должен выделять множественные вхождения одного слова', () => {
      const result = getArrayHighlightMatch('apple apple apple', 'apple')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' ', isMatch: false },
        { text: 'apple', isMatch: true },
        { text: ' ', isMatch: false },
        { text: 'apple', isMatch: true }
      ])
    })

    it('должен поддерживать поиск нескольких слов через пробел (OR-логика)', () => {
      const result = getArrayHighlightMatch('apple and banana', 'apple banana')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' and ', isMatch: false },
        { text: 'banana', isMatch: true }
      ])
    })

    it('должен корректно обрабатывать несколько пробелов между словами поиска', () => {
      const result = getArrayHighlightMatch('apple and banana', 'apple    banana')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' and ', isMatch: false },
        { text: 'banana', isMatch: true }
      ])
    })

    it('должен быть регистронезависимым', () => {
      const result = getArrayHighlightMatch('Hello World', 'hello')
      expect(result).toEqual([
        { text: 'Hello', isMatch: true },
        { text: ' World', isMatch: false }
      ])
    })

    it('должен экранировать специальные символы регулярных выражений в строке поиска', () => {
      const result = getArrayHighlightMatch('price is $10', '$10')
      expect(result).toEqual([
        { text: 'price is ', isMatch: false },
        { text: '$10', isMatch: true }
      ])
    })

    it('должен безопасно экранировать спецсимволы в слитной строке: [, ], +, *, .', () => {
      const result = getArrayHighlightMatch('item is [v1.0+beta]', '[v1.0+beta]')
      expect(result).toEqual([
        { text: 'item is ', isMatch: false },
        { text: '[v1.0+beta]', isMatch: true }
      ])
    })

    it('должен разделять по пробелам и безопасно экранировать спецсимволы: +, *, (, )', () => {
      const result = getArrayHighlightMatch('1 + 2 * (3 - 1) = 5', '+ 2 * (3')
      expect(result).toEqual([
        { text: '1 ', isMatch: false },
        { text: '+', isMatch: true },
        { text: ' ', isMatch: false },
        { text: '2', isMatch: true },
        { text: ' ', isMatch: false },
        { text: '*', isMatch: true },
        { text: ' ', isMatch: false },
        { text: '(3', isMatch: true },
        { text: ' - 1) = 5', isMatch: false }
      ])
    })

    it('должен находить совпадение в самом конце строки', () => {
      const result = getArrayHighlightMatch('hello world', 'world')
      expect(result).toEqual([
        { text: 'hello ', isMatch: false },
        { text: 'world', isMatch: true }
      ])
    })

    it('должен находить совпадение в самом начале строки', () => {
      const result = getArrayHighlightMatch('apple pie', 'apple')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' pie', isMatch: false }
      ])
    })

    it('должен корректно обрабатывать подряд идущие совпадения', () => {
      const result = getArrayHighlightMatch('appleapple', 'apple')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: 'apple', isMatch: true }
      ])
    })

    it('должен поддерживать глобальный RegExp с флагами ig', () => {
      const result = getArrayHighlightMatch('hello world', /hello/ig)
      expect(result).toEqual([
        { text: 'hello', isMatch: true },
        { text: ' world', isMatch: false }
      ])
    })
  })

  describe('поддержка не-глобальных RegExp и защита от зависания', () => {
    it('должен безопасно и корректно работать с RegExp БЕЗ флага g (первое совпадение не с 0 индекса)', () => {
      const result = getArrayHighlightMatch('say hello to me', /hello/i)
      expect(result).toEqual([
        { text: 'say ', isMatch: false },
        { text: 'hello', isMatch: true },
        { text: ' to me', isMatch: false }
      ])
    })

    it('должен корректно находить совпадение с RegExp БЕЗ флага g в начале строки (индекс 0)', () => {
      const result = getArrayHighlightMatch('hello world', /hello/i)
      expect(result).toEqual([
        { text: 'hello', isMatch: true },
        { text: ' world', isMatch: false }
      ])
    })

    it('должен корректно находить несколько вхождений для RegExp БЕЗ флага g', () => {
      const result = getArrayHighlightMatch('foo and foo', /foo/i)
      expect(result).toEqual([
        { text: 'foo', isMatch: true },
        { text: ' and ', isMatch: false },
        { text: 'foo', isMatch: true }
      ])
    })

    it('должен поддерживать RegExp с группами захвата без искажения текста', () => {
      const result = getArrayHighlightMatch('foo bar baz', /(foo) (bar)/i)
      expect(result).toEqual([
        { text: 'foo bar', isMatch: true },
        { text: ' baz', isMatch: false }
      ])
    })

    it('должен безопасно завершаться без зависания при RegExp с нулевой длиной совпадения', () => {
      const result = getArrayHighlightMatch('abc', /(?:)/)
      expect(result).toEqual([{ text: 'abc', isMatch: false }])
    })
  })

  describe('поиск числовых и специальных литералов (проверка бага isFilled)', () => {
    it('должен корректно находить и выделять цифру "0"', () => {
      const result = getArrayHighlightMatch('Count: 0 items', '0')
      expect(result).toEqual([
        { text: 'Count: ', isMatch: false },
        { text: '0', isMatch: true },
        { text: ' items', isMatch: false }
      ])
    })

    it('должен корректно находить совпадение, когда исходная строка сама равна "0"', () => {
      const result = getArrayHighlightMatch('0', '0')
      expect(result).toEqual([{ text: '0', isMatch: true }])
    })

    it('должен корректно находить "0" среди других чисел', () => {
      const result = getArrayHighlightMatch('page 10, offset 0', '0')
      expect(result).toEqual([
        { text: 'page 1', isMatch: false },
        { text: '0', isMatch: true },
        { text: ', offset ', isMatch: false },
        { text: '0', isMatch: true }
      ])
    })

    it('должен корректно находить строку "false"', () => {
      const result = getArrayHighlightMatch('flag is false here', 'false')
      expect(result).toEqual([
        { text: 'flag is ', isMatch: false },
        { text: 'false', isMatch: true },
        { text: ' here', isMatch: false }
      ])
    })

    it('должен корректно находить строку "null"', () => {
      const result = getArrayHighlightMatch('value is null', 'null')
      expect(result).toEqual([
        { text: 'value is ', isMatch: false },
        { text: 'null', isMatch: true }
      ])
    })

    it('должен корректно находить строку "undefined"', () => {
      const result = getArrayHighlightMatch('type is undefined', 'undefined')
      expect(result).toEqual([
        { text: 'type is ', isMatch: false },
        { text: 'undefined', isMatch: true }
      ])
    })

    it('должен корректно находить скобки "[]"', () => {
      const result = getArrayHighlightMatch('array [] empty', '[]')
      expect(result).toEqual([
        { text: 'array ', isMatch: false },
        { text: '[]', isMatch: true },
        { text: ' empty', isMatch: false }
      ])
    })
  })

  describe('международные символы и устойчивость к типам', () => {
    it('должен корректно выделять кириллические символы', () => {
      const result = getArrayHighlightMatch('Привет мир, как дела?', 'мир')
      expect(result).toEqual([
        { text: 'Привет ', isMatch: false },
        { text: 'мир', isMatch: true },
        { text: ', как дела?', isMatch: false }
      ])
    })

    it('должен корректно работать с вьетнамскими диакритическими символами', () => {
      const result = getArrayHighlightMatch('Xin chào thế giới', 'chào')
      expect(result).toEqual([
        { text: 'Xin ', isMatch: false },
        { text: 'chào', isMatch: true },
        { text: ' thế giới', isMatch: false }
      ])
    })

    it('должен корректно работать, если в качестве value передано число', () => {
      const result = getArrayHighlightMatch(100500 as unknown as string, '500')
      expect(result).toEqual([
        { text: '100', isMatch: false },
        { text: '500', isMatch: true }
      ])
    })

    it('должен возвращать исходный текст, если строка поиска превышает лимит в 128 символов', () => {
      const longSearch = 'a'.repeat(129)
      const result = getArrayHighlightMatch('some long text', longSearch)
      expect(result).toEqual([{ text: 'some long text', isMatch: false }])
    })

    it('должен игнорировать строку поиска, состоящую только из пробелов', () => {
      const result = getArrayHighlightMatch('hello world', '   ')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })
  })
})
