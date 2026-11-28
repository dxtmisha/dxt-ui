/** @vitest-environment jsdom */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, createSSRApp, defineComponent, h, nextTick, type ShallowRef } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { useMountedRef } from '../useMountedRef'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('useMountedRef', () => {
  it('should start as false during setup, switch to true on mount, and reset to false on unmount', async () => {
    let mountedDuringSetup: boolean | undefined
    let mountedRef: ShallowRef<boolean> | undefined

    const Host = defineComponent({
      setup() {
        mountedRef = useMountedRef()
        mountedDuringSetup = mountedRef.value

        return () => h('span', String(mountedRef?.value))
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => {
      app.unmount()
      container.remove()
    })

    expect(mountedDuringSetup).toBe(false)
    expect(mountedRef?.value).toBe(true)

    await nextTick()
    expect(container.textContent).toBe('true')

    app.unmount()
    expect(mountedRef?.value).toBe(false)
  })

  it('should keep independent state per component instance', () => {
    let firstMounted: ShallowRef<boolean> | undefined
    let secondMounted: ShallowRef<boolean> | undefined

    const createHost = (assign: (value: ShallowRef<boolean>) => void) => defineComponent({
      setup() {
        const mounted = useMountedRef()
        assign(mounted)
        return () => h('div')
      }
    })

    const firstContainer = document.createElement('div')
    const secondContainer = document.createElement('div')
    document.body.append(firstContainer, secondContainer)

    const firstApp = createApp(createHost((value) => {
      firstMounted = value
    }))
    const secondApp = createApp(createHost((value) => {
      secondMounted = value
    }))

    firstApp.mount(firstContainer)
    secondApp.mount(secondContainer)
    mountedCleanups.push(
      () => {
        firstApp.unmount()
        firstContainer.remove()
      },
      () => {
        secondApp.unmount()
        secondContainer.remove()
      }
    )

    expect(firstMounted).not.toBe(secondMounted)
    expect(firstMounted?.value).toBe(true)
    expect(secondMounted?.value).toBe(true)

    firstApp.unmount()
    expect(firstMounted?.value).toBe(false)
    expect(secondMounted?.value).toBe(true)
  })

  it('should return false without Vue warnings when called outside a component instance', () => {
    const warn = vi.spyOn(console, 'warn')
    const mounted = useMountedRef()

    expect(mounted.value).toBe(false)
    expect(warn).not.toHaveBeenCalled()
  })

  it('should stay false during SSR renderToString', async () => {
    let mountedRef: ShallowRef<boolean> | undefined

    const SsrHost = defineComponent({
      setup() {
        mountedRef = useMountedRef()
        return () => h('span', String(mountedRef?.value))
      }
    })

    const html = await renderToString(createSSRApp(SsrHost))

    expect(mountedRef?.value).toBe(false)
    expect(html).toBe('<span>false</span>')
  })
})
