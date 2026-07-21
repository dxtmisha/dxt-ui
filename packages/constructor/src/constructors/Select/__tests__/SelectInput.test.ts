// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { SelectInput } from '../SelectInput'

describe('SelectInput', () => {
  it('should determine isEdit correctly', () => {
    // case 1: editValue is true, multiple is false -> isEdit is true
    let props = { editValue: true, multiple: false } as any
    let selectInput = new SelectInput(props, {} as any, {} as any, {} as any)
    expect(selectInput.isEdit()).toBe(true)

    // case 2: editValue is true, multiple is true -> isEdit is false
    props = { editValue: true, multiple: true } as any
    selectInput = new SelectInput(props, {} as any, {} as any, {} as any)
    expect(selectInput.isEdit()).toBe(false)

    // case 3: editValue is false, multiple is false -> isEdit is false
    props = { editValue: false, multiple: false } as any
    selectInput = new SelectInput(props, {} as any, {} as any, {} as any)
    expect(selectInput.isEdit()).toBe(false)
  })

  it('should compute correct binds', () => {
    const props = {
      editValue: true,
      multiple: false,
      name: 'test-select',
      required: true,
      placeholder: 'Choose one'
    } as any

    const mockAttributes = {
      listForInput: { 'aria-expanded': 'true', 'data-custom': 'val' }
    } as any

    const mockEvent = {
      onInput: vi.fn(),
      onSelect: vi.fn()
    } as any

    const selectInput = new SelectInput(props, mockAttributes, {} as any, mockEvent)
    const binds = selectInput.binds

    expect(binds).toBeDefined()
    expect(binds?.name).toBe('test-select')
    expect(binds?.type).toBe('text')
    expect(binds?.required).toBe(true)
    expect(binds?.readonly).toBe(false)
    expect(binds?.placeholder).toBe('Choose one')
    expect(binds?.['data-menu-control']).toBe('1')
    expect(binds?.onInput).toBe(mockEvent.onInput)
    expect(binds?.['aria-expanded']).toBe('true')
    expect(binds?.['data-custom']).toBe('val')
  })

  it('should compute correct binds when isEdit is false', () => {
    const props = {
      editValue: false,
      multiple: false,
      name: 'test-select-noedit'
    } as any

    const mockAttributes = {
      listForInput: {}
    } as any

    const mockEvent = {
      onInput: vi.fn(),
      onSelect: vi.fn()
    } as any

    const selectInput = new SelectInput(props, mockAttributes, {} as any, mockEvent)
    const binds = selectInput.binds

    expect(binds?.readonly).toBe(true)
    expect(binds?.onInput).toBe(mockEvent.onSelect)
  })

  it('should trigger click and preventDefault on onKeydown', () => {
    const props = {} as any
    const mockAttributes = { listForInput: {} } as any
    const mockEvent = {} as any

    const selectInput = new SelectInput(props, mockAttributes, {} as any, mockEvent)

    const clickMock = vi.fn()
    const preventDefaultMock = vi.fn()

    const mockDomEvent = {
      target: {
        click: clickMock
      },
      preventDefault: preventDefaultMock
    } as any

    // @ts-expect-error accessing protected method
    selectInput.onKeydown(mockDomEvent)

    expect(clickMock).toHaveBeenCalled()
    expect(preventDefaultMock).toHaveBeenCalled()
  })
})
