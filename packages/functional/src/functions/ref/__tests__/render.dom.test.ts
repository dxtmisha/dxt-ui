/** @vitest-environment jsdom */
import { describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, onMounted, onUnmounted, ref, type VNode } from 'vue'

import { render } from '../render'

describe('render: stable node identity', () => {
  it('preserves the input, focus, selection and typed value when its class changes', async () => {
    const className = ref('idle')
    const application = createApp({
      render: (): VNode => render('input', { class: className.value }, undefined, 'field')
    })
    const container = document.createElement('div')
    document.body.append(container)
    application.mount(container)

    try {
      const input = container.querySelector('input')!
      input.value = 'typed value'
      input.focus()
      input.setSelectionRange(2, 5)

      className.value = 'active'
      await nextTick()

      expect(container.querySelector('input')).toBe(input)
      expect(input.className).toBe('active')
      expect(document.activeElement).toBe(input)
      expect(input.value).toBe('typed value')
      expect(input.selectionStart).toBe(2)
      expect(input.selectionEnd).toBe(5)
    } finally {
      application.unmount()
      container.remove()
    }
  })

  it('preserves component state and lifecycle when its class changes', async () => {
    const className = ref('idle')
    const mounted = vi.fn()
    const unmounted = vi.fn()
    const counter = defineComponent({
      setup(): () => VNode {
        const count = ref(0)
        onMounted(mounted)
        onUnmounted(unmounted)

        return (): VNode => h('button', {
          onClick: (): void => {
            count.value++
          }
        }, String(count.value))
      }
    })
    const application = createApp({
      render: (): VNode => render(counter, { class: className.value }, undefined, 'counter')
    })
    const container = document.createElement('div')
    application.mount(container)

    try {
      const button = container.querySelector('button')!
      button.click()
      await nextTick()
      expect(button.textContent).toBe('1')

      className.value = 'active'
      await nextTick()

      expect(container.querySelector('button')).toBe(button)
      expect(button.className).toBe('active')
      expect(button.textContent).toBe('1')
      expect(mounted).toHaveBeenCalledTimes(1)
      expect(unmounted).not.toHaveBeenCalled()
    } finally {
      application.unmount()
      container.remove()
    }
  })

  it('still replaces a node when its explicit key changes', async () => {
    const key = ref('first')
    const application = createApp({
      render: (): VNode => render('input', { key: key.value, class: 'field' })
    })
    const container = document.createElement('div')
    application.mount(container)

    try {
      const input = container.querySelector('input')!
      input.value = 'previous state'
      key.value = 'second'
      await nextTick()

      const replacement = container.querySelector('input')!
      expect(replacement).not.toBe(input)
      expect(replacement.value).toBe('')
    } finally {
      application.unmount()
      container.remove()
    }
  })
})
