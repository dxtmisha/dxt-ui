// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { WindowClassesInclude } from '../WindowClassesInclude'

describe('WindowClassesInclude', () => {
  it('should return window classes mapping by design name', () => {
    const classesInclude = new WindowClassesInclude('modal')
    const list = classesInclude.get()

    expect(list.control).toBe('modal-window__control')
    expect(list.block).toBe('modal-window--block')
  })

  it('should wrap classes list inside classesWindow key', () => {
    const classesInclude = new WindowClassesInclude('modal')
    const result = classesInclude.getObject()

    expect(result.classesWindow).toEqual(classesInclude.get())
  })
})
