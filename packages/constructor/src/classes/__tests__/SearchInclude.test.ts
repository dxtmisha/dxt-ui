import { describe, it, expect, afterEach, vi } from 'vitest'
import { effectScope, nextTick, reactive } from 'vue'
import { SearchInclude } from '../SearchInclude'
import type { SearchPropsInclude } from '../../types/searchTypes'

interface UserRecord {
  id: number
  name: string
  email: string
  role: string
  note?: string
}

describe('SearchInclude', () => {
  const sampleList: UserRecord[] = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', note: 'C++ & $100' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'User', note: 'Привет Мир' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', note: 'Học tiếng Việt Nguyễn' },
    { id: 4, name: 'David Miller', email: 'david@example.com', role: 'Admin', note: 'a.b match' },
    { id: 5, name: 'Eve Smith', email: 'eve@example.com', role: 'Editor', note: '🚀 Launch' }
  ]

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return all items when search query is empty', () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: ''
      })

      const searchInclude = new SearchInclude(props, ['name', 'email'])

      expect(searchInclude.isSearch()).toBe(false)
      expect(searchInclude.search).toBe('')
      expect(searchInclude.loading).toBe(false)
      expect(searchInclude.list).toHaveLength(5)
      expect(searchInclude.length).toBe(5)
    })

    it('should filter items by search query across fallback columns', () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: 'Smith'
      })

      const searchInclude = new SearchInclude(props, ['name', 'email'])

      expect(searchInclude.isSearch()).toBe(true)
      expect(searchInclude.search).toBe('Smith')
      expect(searchInclude.list).toHaveLength(2)
      expect(searchInclude.length).toBe(2)
      expect(searchInclude.list[0].name).toContain('Alice')
      expect(searchInclude.list[1].name).toContain('Eve')
    })

    it('should prioritize props.searchColumns over constructor fallback columns', () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: 'Admin',
        searchColumns: ['role']
      })

      const searchInclude = new SearchInclude(props, ['name', 'email'])

      expect(searchInclude.isSearch()).toBe(true)
      expect(searchInclude.list).toHaveLength(2)
      expect(searchInclude.list[0].id).toBe(1)
      expect(searchInclude.list[1].id).toBe(4)
    })

    it('should support callback function for dynamic fallback columns', async () => {
      let activeColumns: ('id' | 'name' | 'email' | 'role')[] = ['role']
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: 'Editor'
      })

      const searchInclude = new SearchInclude(props, () => activeColumns)

      expect(searchInclude.isSearch()).toBe(true)
      expect(searchInclude.list).toHaveLength(1)
      expect(searchInclude.list[0].name).toBe('Eve Smith')

      activeColumns = ['name']
      props.search = 'Charlie'
      await nextTick()
      expect(searchInclude.list).toHaveLength(1)
      expect(searchInclude.list[0].id).toBe(3)
    })

    it('should reactively update results when props.search or props.list changes', async () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: ''
      })

      const searchInclude = new SearchInclude(props, ['name'])

      expect(searchInclude.length).toBe(5)

      props.search = 'Bob'
      await nextTick()
      expect(searchInclude.isSearch()).toBe(true)
      expect(searchInclude.search).toBe('Bob')
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(2)

      props.list = [...sampleList, { id: 6, name: 'Bob Ross', email: 'ross@example.com', role: 'Artist' }]
      await nextTick()
      expect(searchInclude.length).toBe(2)
    })
  })

  describe('Boundary values, omitted keys, and plain/nullish inputs', () => {
    it('should track props.search reactively even when search key is initially omitted from reactive props', async () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList
      })

      const searchInclude = new SearchInclude(props, ['name'])

      expect(searchInclude.search).toBe('')
      expect(searchInclude.isSearch()).toBe(false)
      expect(searchInclude.length).toBe(5)

      props.search = 'Smith'
      await nextTick()
      expect(searchInclude.search).toBe('Smith')
      expect(searchInclude.isSearch()).toBe(true)
      expect(searchInclude.length).toBe(2)
    })

    it('should return empty string from search getter when props.search is undefined', () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: undefined
      })

      const searchInclude = new SearchInclude(props, ['name'])

      expect(searchInclude.search).toBe('')
      expect(typeof searchInclude.search).toBe('string')
      expect(searchInclude.isSearch()).toBe(false)
    })

    it('should handle plain non-reactive props without Vue warnings', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const plainProps: SearchPropsInclude<UserRecord> = Object.freeze({
        list: sampleList,
        search: 'Alice'
      })

      const searchInclude = new SearchInclude(plainProps, ['name'])

      expect(searchInclude.isSearch()).toBe(true)
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(1)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should fallback to constructor columns when props.searchColumns is empty array', () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: 'alice@example.com',
        searchColumns: []
      })

      const searchInclude = new SearchInclude(props, ['email'])

      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(1)
    })

    it('should handle empty props, empty list, and whitespace-only search safely', () => {
      const emptySearch = new SearchInclude<UserRecord>({})
      expect(emptySearch.list).toEqual([])
      expect(emptySearch.length).toBe(0)
      expect(emptySearch.search).toBe('')
      expect(emptySearch.isSearch()).toBe(false)

      const whitespaceSearch = new SearchInclude<UserRecord>({
        list: sampleList,
        search: '   \t\n  '
      }, ['name'])
      expect(whitespaceSearch.isSearch()).toBe(false)
      expect(whitespaceSearch.length).toBe(5)
    })
  })

  describe('Escaping, multilingual, and Unicode handling', () => {
    it('should safely handle regex metacharacters in search queries', async () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: 'C++'
      })

      const searchInclude = new SearchInclude(props, ['note'])
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(1)

      props.search = '$100'
      await nextTick()
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(1)

      props.search = 'a.b'
      await nextTick()
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(4)
    })

    it('should match Cyrillic, Vietnamese diacritics, and Emoji characters', async () => {
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: 'привет'
      })

      const searchInclude = new SearchInclude(props, ['note'])
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(2)

      props.search = 'tiếng Việt'
      await nextTick()
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(3)

      props.search = '🚀'
      await nextTick()
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.list[0].id).toBe(5)
    })
  })

  describe('Immutability, searchOptions delay, and effectScope cleanup', () => {
    it('should not mutate the caller input list array', () => {
      const list = sampleList.map(item => ({ ...item }))
      const snapshot = sampleList.map(item => ({ ...item }))
      const searchInclude = new SearchInclude({ list, search: 'Smith' }, ['name'])

      expect(searchInclude.length).toBe(2)
      expect(list).toEqual(snapshot)
    })

    it('should respect searchOptions.limit and clean up on effectScope disposal', async () => {
      vi.useFakeTimers()
      const scope = effectScope()
      const props = reactive<SearchPropsInclude<UserRecord>>({
        list: sampleList,
        search: 'Al',
        searchOptions: {
          limit: 3,
          delay: 150
        }
      })

      let searchInclude!: SearchInclude<UserRecord>
      scope.run(() => {
        searchInclude = new SearchInclude(props, ['name'])
      })

      expect(searchInclude.isSearch()).toBe(false)
      expect(searchInclude.length).toBe(5)

      props.search = 'Alice'
      await nextTick()
      vi.advanceTimersByTime(150)

      expect(searchInclude.isSearch()).toBe(true)
      expect(searchInclude.length).toBe(1)
      expect(searchInclude.loading).toBe(false)

      scope.stop()
      expect(searchInclude.loading).toBe(false)
    })
  })
})
