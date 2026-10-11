// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { act, createElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { useGeoFlagReact } from '../useGeoFlagReact'

// @ts-expect-error configure react act environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('useGeoFlagReact', () => {
  let container: HTMLDivElement
  let root: Root
  let latestResult: ReturnType<typeof useGeoFlagReact>

  function TestComponent({
    code
  }: {
    code?: Parameters<typeof useGeoFlagReact>[0]
  }) {
    latestResult = useGeoFlagReact(code)
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
    expect(latestResult.flag).toBeDefined()
    expect(latestResult.countryCode).toBeDefined()
    expect(latestResult.getCode()).toBeDefined()
  })

  it('updates when props change', () => {
    act(() => {
      root.render(createElement(TestComponent, { code: 'en-US' }))
    })

    expect(latestResult.code).toBe('en-US')

    act(() => {
      root.render(createElement(TestComponent, { code: 'vi-VN' }))
    })

    expect(latestResult.code).toBe('vi-VN')
  })

  it('provides flag metadata and list methods', () => {
    act(() => {
      root.render(createElement(TestComponent, { code: 'en-US' }))
    })

    const usItem = latestResult.get('US')
    expect(usItem).toBeDefined()
    expect(usItem?.countryCode).toBe('US')

    const usFlag = latestResult.getFlag('US')
    expect(usFlag).toBeDefined()

    const countries = latestResult.getList(['US', 'VN'])
    expect(countries.length).toBe(2)

    const languages = latestResult.getListLanguage(['en', 'vi'])
    expect(languages.length).toBeGreaterThan(0)
  })
})
