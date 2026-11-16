// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { ListGroupOpen } from '../ListGroupOpen'

describe('ListGroupOpen', () => {
  it('should initialize closed by default and respect props.open', () => {
    const groupUndefined = new ListGroupOpen({})
    expect(groupUndefined.open.value).toBe(false)
    expect(groupUndefined.is()).toBe(false)

    const groupClosed = new ListGroupOpen({ open: false })
    expect(groupClosed.is()).toBe(false)

    const groupOpen = new ListGroupOpen({ open: true })
    expect(groupOpen.is()).toBe(true)
  })

  it('should toggle internal open state via onOpen', () => {
    const groupOpen = new ListGroupOpen({ open: false })

    groupOpen.onOpen({ type: 'head', open: true })
    expect(groupOpen.open.value).toBe(true)
    expect(groupOpen.is()).toBe(true)

    groupOpen.onOpen({ type: 'head', open: true })
    expect(groupOpen.open.value).toBe(true)

    groupOpen.onOpen({ type: 'body', open: false })
    expect(groupOpen.open.value).toBe(false)
    expect(groupOpen.is()).toBe(false)

    groupOpen.onOpen({ type: 'script', open: false })
    expect(groupOpen.open.value).toBe(false)
  })

  it('should remain open when props.open is true even if onOpen receives false', () => {
    const props = reactive<{ open?: boolean }>({ open: true })
    const groupOpen = new ListGroupOpen(props)

    expect(groupOpen.is()).toBe(true)

    groupOpen.onOpen({ type: 'top', open: false })
    expect(groupOpen.open.value).toBe(false)
    expect(groupOpen.is()).toBe(true)

    props.open = false
    expect(groupOpen.is()).toBe(false)
  })

  it('should keep state isolated between separate instances', () => {
    const first = new ListGroupOpen({ open: false })
    const second = new ListGroupOpen({ open: false })

    first.onOpen({ type: 'head', open: true })

    expect(first.is()).toBe(true)
    expect(second.is()).toBe(false)
  })
})
