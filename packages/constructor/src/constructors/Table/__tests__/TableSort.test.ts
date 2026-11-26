// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createApp,
  defineComponent,
  effectScope,
  h,
  inject,
  nextTick,
  reactive,
  type ComputedRef
} from 'vue'
import type { SortDir } from '@dxtmisha/functional'

import type { SortColumn, SortPropsInclude } from '../../../types/sortTypes'
import { TableSort } from '../TableSort'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

type SampleRow = {
  id: number
  category: string
  name: string
  age: number
}

describe('TableSort', () => {
  const createSampleList = (): SampleRow[] => [
    { id: 3, category: 'A', name: 'Charlie', age: 30 },
    { id: 1, category: 'B', name: 'Alice', age: 25 },
    { id: 4, category: 'A', name: 'Alice', age: 20 },
    { id: 2, category: 'B', name: 'Bob', age: 35 }
  ]

  it('should operate outside component setup without Vue warnings and handle onSort updates and resets', () => {
    const scope = effectScope()
    const emits = vi.fn()
    const source = createSampleList()
    const sourceCopy = [...source]
    const props = reactive<SortPropsInclude<SampleRow>>({})

    scope.run(() => {
      const sort = new TableSort<SampleRow>(props, () => source, emits)

      expect(sort.isSort()).toBe(false)
      expect(sort.column).toBeUndefined()
      expect(sort.sortColumn.value).toBeUndefined()
      expect(sort.sortDir.value).toBeUndefined()

      sort.onSort({ column: 'age', dir: 'desc' })
      expect(sort.sortColumn.value).toBe('age')
      expect(sort.sortDir.value).toBe('desc')
      expect(sort.isSort()).toBe(true)
      expect(sort.column).toBe('age')
      expect(sort.dir).toBe('desc')
      expect(sort.getList().map(item => item.age)).toEqual([35, 30, 25, 20])
      expect(source).toEqual(sourceCopy)
      expect(emits).toHaveBeenLastCalledWith('sort', { column: 'age', dir: 'desc' })

      sort.onSort({ column: undefined, dir: undefined })
      expect(sort.sortColumn.value).toBeUndefined()
      expect(sort.sortDir.value).toBeUndefined()
      expect(sort.isSort()).toBe(false)
      expect(sort.column).toBeUndefined()
      expect(sort.getList().map(item => item.id)).toEqual([3, 1, 4, 2])
      expect(emits).toHaveBeenLastCalledWith('sort', { column: undefined, dir: undefined })
    })

    scope.stop()
  })

  it('should honor initial props.sort/sortDir, clear sort on 3-click reset (Option A), and reset user override when props change reactively', async () => {
    const scope = effectScope()
    const emits = vi.fn()
    const source = createSampleList()
    const props = reactive<SortPropsInclude<SampleRow>>({
      sort: 'age',
      sortDir: 'desc'
    })

    let sort!: TableSort<SampleRow>

    scope.run(() => {
      sort = new TableSort<SampleRow>(props, () => source, emits)
    })

    // Initial state syncs from props.sort / props.sortDir
    expect(sort.isSort()).toBe(true)
    expect(sort.column).toBe('age')
    expect(sort.dir).toBe('desc')
    expect(sort.getList().map(item => item.age)).toEqual([35, 30, 25, 20])

    // Interactive override takes priority
    sort.onSort({ column: 'name', dir: 'asc' })
    expect(sort.isSort()).toBe(true)
    expect(sort.column).toBe('name')
    expect(sort.dir).toBe('asc')
    expect(sort.getList().map(item => item.name)).toEqual(['Alice', 'Alice', 'Bob', 'Charlie'])

    // Explicit reset (3rd click) clears sorting instead of snapping back to props.sort
    sort.onSort({ column: undefined, dir: undefined })
    expect(sort.isSort()).toBe(false)
    expect(sort.column).toBeUndefined()
    expect(sort.getList().map(item => item.id)).toEqual([3, 1, 4, 2])

    // Reactive change to props.sort / props.sortDir resets isUserOverride and applies new prop sort
    props.sort = 'id'
    props.sortDir = 'asc'
    await nextTick()

    expect(sort.isSort()).toBe(true)
    expect(sort.column).toBe('id')
    expect(sort.dir).toBe('asc')
    expect(sort.getList().map(item => item.id)).toEqual([1, 2, 3, 4])

    // Also test reactive change to only props.sortDir after user override
    sort.onSort({ column: undefined, dir: undefined })
    expect(sort.isSort()).toBe(false)

    props.sortDir = 'desc'
    await nextTick()
    expect(sort.isSort()).toBe(true)
    expect(sort.column).toBe('id')
    expect(sort.dir).toBe('desc')
    expect(sort.getList().map(item => item.id)).toEqual([4, 3, 2, 1])

    scope.stop()
  })

  it('should support multi-column sort, prefix notation (-age), and custom sortFunction', () => {
    const scope = effectScope()
    const source = createSampleList()

    scope.run(() => {
      const prefixSort = new TableSort<SampleRow>({ sort: '-age' }, () => source)
      expect(prefixSort.column).toBe('age')
      expect(prefixSort.dir).toBe('desc')
      expect(prefixSort.getList().map(item => item.age)).toEqual([35, 30, 25, 20])

      const multiSort = new TableSort<SampleRow>({ sort: ['category', '-age'] }, () => source)
      expect(multiSort.column).toBe('category')
      expect(multiSort.dir).toBe('asc')
      expect(multiSort.getList().map(item => item.id)).toEqual([3, 4, 2, 1])

      const customSort = new TableSort<SampleRow>({
        sort: 'id',
        sortFunction: (first, second) => second.id - first.id
      }, () => source)
      expect(customSort.getList().map(item => item.id)).toEqual([4, 3, 2, 1])
    })

    scope.stop()
  })

  it('should provide reactive computed sortColumn and sortDir inside component setup()', async () => {
    const props = reactive<SortPropsInclude<SampleRow>>({
      sort: 'age',
      sortDir: 'desc'
    })
    const source = createSampleList()

    let tableSortInstance!: TableSort<SampleRow>
    let injectedColumn: ComputedRef<SortColumn | undefined> | undefined
    let injectedDir: ComputedRef<SortDir | undefined> | undefined

    const Child = defineComponent({
      setup() {
        injectedColumn = inject('sortColumn', undefined)
        injectedDir = inject('sortDir', undefined)
        return () => h('span', `${String(injectedColumn?.value ?? 'none')}:${String(injectedDir?.value ?? 'none')}`)
      }
    })

    const Parent = defineComponent({
      setup() {
        tableSortInstance = new TableSort<SampleRow>(props, () => source)
        return () => h(Child)
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    const app = createApp(Parent)
    app.mount(host)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    // Initial props reflected immediately in provided computed refs
    expect(injectedColumn?.value).toBe('age')
    expect(injectedDir?.value).toBe('desc')
    expect(host.textContent).toBe('age:desc')

    // User click changes sort
    tableSortInstance.onSort({ column: 'name', dir: 'asc' })
    await nextTick()
    expect(injectedColumn?.value).toBe('name')
    expect(injectedDir?.value).toBe('asc')
    expect(host.textContent).toBe('name:asc')

    // User reset clears BOTH sortColumn and sortDir (sortDir becomes undefined when !isSort())
    tableSortInstance.onSort({ column: undefined, dir: undefined })
    await nextTick()
    expect(injectedColumn?.value).toBeUndefined()
    expect(injectedDir?.value).toBeUndefined()
    expect(host.textContent).toBe('none:none')

    // External prop update re-syncs provided values
    props.sort = '-name'
    await nextTick()
    expect(injectedColumn?.value).toBe('name')
    expect(injectedDir?.value).toBe('desc')
    expect(host.textContent).toBe('name:desc')
  })
})
