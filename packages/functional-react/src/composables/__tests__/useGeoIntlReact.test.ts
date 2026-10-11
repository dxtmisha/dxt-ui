// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { act, createElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { useGeoIntlReact } from '../useGeoIntlReact'

// @ts-expect-error configure react act environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('useGeoIntlReact', () => {
  let container: HTMLDivElement
  let root: Root
  let latestResult: ReturnType<typeof useGeoIntlReact>

  function TestComponent({
    code
  }: {
    code?: Parameters<typeof useGeoIntlReact>[0]
  }) {
    latestResult = useGeoIntlReact(code)
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

  it('initializes correctly with country code', () => {
    act(() => {
      root.render(createElement(TestComponent, { code: 'en-US' }))
    })

    expect(latestResult.code).toBe('en-US')
    expect(latestResult.intl).toBeDefined()
    expect(latestResult.location).toBeDefined()
    expect(latestResult.firstDay).toBeDefined()
    expect(latestResult.getLocation()).toBeDefined()
    expect(latestResult.getFirstDay()).toBeDefined()
  })

  it('updates when props change', () => {
    act(() => {
      root.render(createElement(TestComponent, { code: 'en-US' }))
    })

    expect(latestResult.code).toBe('en-US')

    act(() => {
      root.render(createElement(TestComponent, { code: 'ru-RU' }))
    })

    expect(latestResult.code).toBe('ru-RU')
  })

  it('provides formatting methods', () => {
    act(() => {
      root.render(createElement(TestComponent, { code: 'en-US' }))
    })

    expect(latestResult.number(1234567.89)).toContain('1,234,567.89')
    expect(latestResult.currency(100, 'USD')).toContain('100')
    expect(latestResult.decimal()).toBe('.')
    expect(latestResult.percent(0.25)).toContain('25%')
    expect(latestResult.month('2023-05-15')).toBeDefined()
    expect(latestResult.months().length).toBe(12)
    expect(latestResult.weekdays().length).toBe(7)
  })
})
