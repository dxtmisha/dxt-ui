// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { act, createElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { useDatetimeReact } from '../useDatetimeReact'

// @ts-expect-error configure react act environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('useDatetimeReact', () => {
  const dateString = '2023-10-27T10:20:30'
  let container: HTMLDivElement
  let root: Root
  let latestResult: ReturnType<typeof useDatetimeReact>

  function TestComponent({
    date,
    type,
    code
  }: {
    date?: Parameters<typeof useDatetimeReact>[0]
    type?: Parameters<typeof useDatetimeReact>[1]
    code?: Parameters<typeof useDatetimeReact>[2]
  }) {
    latestResult = useDatetimeReact(date, type, code)
    return null
  }

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)
  })

  afterEach(() => {
    act(() => {
      root.unmount()
    })
    container.remove()
  })

  it('initializes correctly with string date', () => {
    act(() => {
      root.render(createElement(TestComponent, {
        date: dateString,
        type: 'datetime',
        code: 'en-US'
      }))
    })

    expect(latestResult.year).toBe(2023)
    expect(latestResult.month).toBe(10)
    expect(latestResult.day).toBe(27)
  })

  it('updates when props change', () => {
    act(() => {
      root.render(createElement(TestComponent, { date: '2023-10-27' }))
    })

    expect(latestResult.year).toBe(2023)

    act(() => {
      root.render(createElement(TestComponent, { date: '2026-12-31' }))
    })

    expect(latestResult.year).toBe(2026)
    expect(latestResult.month).toBe(12)
    expect(latestResult.day).toBe(31)
  })

  it('provides formatting methods', () => {
    act(() => {
      root.render(createElement(TestComponent, {
        date: dateString,
        type: 'date',
        code: 'en-US'
      }))
    })

    expect(latestResult.locale('date')).toContain('2023')
    expect(latestResult.standard()).toContain('2023-10-27')
    expect(latestResult.hoursType).toBeDefined()
    expect(latestResult.firstDayCode).toBeDefined()
    expect(latestResult.maxDay).toBe(31)
  })
})
