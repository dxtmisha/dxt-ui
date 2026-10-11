// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { act, createElement, createRef } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { useItemReact } from '../useItemReact'

// @ts-expect-error configure react act environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('useItemReact', () => {
  let container: HTMLDivElement
  let root: Root
  let latestResult: [unknown, (value: unknown) => void]

  function TestComponent({
    item,
    callback
  }: {
    item?: unknown
    callback?: (value: unknown) => unknown
  }) {
    latestResult = useItemReact(item as never, callback as never)
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

  it('initializes with static primitive value', () => {
    act(() => {
      root.render(createElement(TestComponent, { item: 'hello' }))
    })

    expect(latestResult[0]).toBe('hello')
  })

  it('initializes with React RefObject', () => {
    const ref = createRef<number>()
    ref.current = 42

    act(() => {
      root.render(createElement(TestComponent, { item: ref }))
    })

    expect(latestResult[0]).toBe(42)
  })

  it('initializes with fallback in callback when undefined', () => {
    act(() => {
      root.render(createElement(TestComponent, {
        item: undefined,
        callback: (value: string | undefined) => value ?? 'default-val'
      }))
    })

    expect(latestResult[0]).toBe('default-val')
  })

  it('initializes with transform callback', () => {
    act(() => {
      root.render(createElement(TestComponent, {
        item: 5,
        callback: (value: number) => value * 2
      }))
    })

    expect(latestResult[0]).toBe(10)
  })

  it('updates when props change', () => {
    act(() => {
      root.render(createElement(TestComponent, { item: 'first' }))
    })

    expect(latestResult[0]).toBe('first')

    act(() => {
      root.render(createElement(TestComponent, { item: 'second' }))
    })

    expect(latestResult[0]).toBe('second')
  })

  it('updates when setter is called', () => {
    act(() => {
      root.render(createElement(TestComponent, { item: 'initial' }))
    })

    expect(latestResult[0]).toBe('initial')

    act(() => {
      latestResult[1]('updated')
    })

    expect(latestResult[0]).toBe('updated')
  })
})
