// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, nextTick, shallowReactive, shallowReadonly } from 'vue'
import type { App } from 'vue'

import { ListDesign } from '../ListDesign'
import type { ListPropsBasic } from '../props'
import type { ListClasses, ListComponents, ListExpose } from '../types'

const applications: App[] = []

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
  document.body.replaceChildren()
})

/**
 * Mounts the complete List renderer and returns its public API.
 *
 * Монтирует полный рендерер List и возвращает его публичный API.
 * @param props reactive list properties / реактивные свойства списка
 * @returns public list methods / публичные методы списка
 */
function mountList(props: ListPropsBasic): ListExpose {
  let exposed: ListExpose | undefined
  const application = createApp(defineComponent({
    setup() {
      const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListPropsBasic>(
        'test.list',
        shallowReadonly(props)
      )
      exposed = design.expose()
      return design.render()
    }
  }))
  const host = document.createElement('div')
  document.body.appendChild(host)
  applications.push(application)
  application.mount(host)

  if (!exposed) {
    throw new Error('List did not expose its public API')
  }

  return exposed
}

describe('List reactive properties (complete component)', () => {
  it('tracks selection and list replacements through its public API', async () => {
    const props = shallowReactive<ListPropsBasic>({
      list: [{ value: 'first', label: 'First' }]
    })
    const exposed = mountList(props)
    expect(exposed.isSelected()).toBe(false)

    props.selected = 'first'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['First'])
    expect(exposed.getSelectedValues()).toEqual(['first'])

    props.list = [{ value: 'second', label: 'Second' }]
    await nextTick()
    expect(exposed.isSelected()).toBe(false)
    expect(exposed.getSelectedValues()).toEqual([])

    props.selected = 'second'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['Second'])

    props.list = undefined
    await nextTick()
    expect(exposed.isSelected()).toBe(false)
    expect(exposed.getSelectedValues()).toEqual([])
  })

  it('tracks keyValue and keyLabel added after initialization', async () => {
    const list = [{ value: 'first', label: 'First', code: 'second', title: 'Second' }]
    const props = shallowReactive<ListPropsBasic>({
      list,
      selected: 'first'
    })
    const exposed = mountList(props)
    expect(exposed.getSelectedNames()).toEqual(['First'])

    props.keyValue = 'code'
    props.keyLabel = 'title'
    props.selected = 'second'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['Second'])
    expect(exposed.getSelectedValues()).toEqual(['second'])

    props.keyValue = undefined
    props.keyLabel = undefined
    props.selected = 'first'
    await nextTick()
    expect(exposed.getSelectedNames()).toEqual(['First'])
    expect(exposed.getSelectedValues()).toEqual(['first'])
  })
})
