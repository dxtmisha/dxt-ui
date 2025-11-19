/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest'
import { ref, nextTick } from 'vue'
import { ListDataRef } from '../ListDataRef'

describe('ListDataRef', () => {
  describe('Constructor and basic initialization', () => {
    it('should create instance with simple array', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(list)

      expect(listData).toBeInstanceOf(ListDataRef)
      expect(listData.data.value).toHaveLength(3)
    })

    it('should create instance with object array', () => {
      const list = [
        { label: 'Item 1', value: 'value1' },
        { label: 'Item 2', value: 'value2' }
      ]
      const listData = new ListDataRef(list)

      expect(listData.data.value).toHaveLength(2)
      expect(listData.data.value[0]!.label).toBe('Item 1')
    })

    it('should create instance with reactive ref', async () => {
      const list = ref(['Apple', 'Banana'])
      const listData = new ListDataRef(list)

      expect(listData.data.value).toHaveLength(2)

      list.value = ['Apple', 'Banana', 'Cherry']
      await nextTick()

      expect(listData.data.value).toHaveLength(3)
    })

    it('should handle undefined list', () => {
      const listData = new ListDataRef(undefined)

      expect(listData.data.value).toHaveLength(0)
    })

    it('should create instance with parent identifier', () => {
      const list = ['Item 1']
      const listData = new ListDataRef(list, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'parent1')

      expect(listData.data.value[0]!.parent).toBe('parent1')
    })
  })

  describe('data computed property', () => {
    it('should transform simple array to list data items', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(list)

      const data = listData.data.value

      expect(data).toHaveLength(3)
      expect(data[0]).toMatchObject({
        type: 'item',
        label: 'Apple',
        value: 0,
        index: '0'
      })
      expect(data[1]).toMatchObject({
        type: 'item',
        label: 'Banana',
        value: 1,
        index: '1'
      })
    })

    it('should transform object array with custom keys', () => {
      const list = [
        { label: 'First', value: 'val1', icon: 'star' },
        { label: 'Second', value: 'val2', icon: 'check' }
      ]
      const listData = new ListDataRef(list)

      const data = listData.data.value

      expect(data).toHaveLength(2)
      expect(data[0]).toMatchObject({
        label: 'First',
        value: 'val1',
        icon: 'star',
        type: 'item',
        index: 'val1'
      })
    })

    it('should use custom keyValue and keyLabel', () => {
      const list = [
        { name: 'Apple', id: 'apple1' },
        { name: 'Banana', id: 'banana1' }
      ]
      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ref('id'),
        ref('name')
      )

      const data = listData.data.value

      expect(data[0]).toMatchObject({
        label: 'Apple',
        value: 'apple1',
        index: 'apple1'
      })
    })

    it('should handle items with explicit type', () => {
      const list = [
        { label: 'Subtitle', value: 'sub1', type: 'subtitle' },
        { label: 'Item', value: 'item1', type: 'item' }
      ]
      const listData = new ListDataRef(list)

      const data = listData.data.value

      expect(data[0]!.type).toBe('subtitle')
      expect(data[1]!.type).toBe('item')
    })

    it('should handle items with explicit index', () => {
      const list = [
        { label: 'Item 1', value: 'val1', index: 'custom-index-1' },
        { label: 'Item 2', value: 'val2', index: 'custom-index-2' }
      ]
      const listData = new ListDataRef(list)

      const data = listData.data.value

      expect(data[0]!.index).toBe('custom-index-1')
      expect(data[1]!.index).toBe('custom-index-2')
    })
  })

  describe('liteData computed property', () => {
    it('should return full data when lite threshold not reached', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ref(10)
      )

      expect(listData.liteData.value).toEqual(listData.data.value)
    })

    it('should return simplified data when lite threshold exceeded', () => {
      const list = [
        { label: 'Item 1', value: 'val1', icon: 'star', custom: 'data' },
        { label: 'Item 2', value: 'val2', icon: 'check', custom: 'data' },
        { label: 'Item 3', value: 'val3', icon: 'home', custom: 'data' }
      ]
      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ref(2)
      )

      const liteData = listData.liteData.value

      expect(liteData).toHaveLength(3)
      expect(liteData[0]).toHaveProperty('label')
      expect(liteData[0]).toHaveProperty('value')
      expect(liteData[0]).not.toHaveProperty('custom')
    })

    it('should include description in lite data', () => {
      const list = [
        { label: 'Item 1', value: 'val1', description: 'Description 1' },
        { label: 'Item 2', value: 'val2', description: 'Description 2' },
        { label: 'Item 3', value: 'val3', description: 'Description 3' }
      ]
      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ref(2)
      )

      const liteData = listData.liteData.value

      expect(liteData[0]).toHaveProperty('description', 'Description 1')
    })
  })

  describe('fullData computed property', () => {
    it('should add focus, highlight and selected properties', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const focus = ref<string>('1')
      const highlight = ref('Ban')
      const selected = ref<string>('2')

      const listData = new ListDataRef(
        list,
        focus,
        highlight,
        undefined,
        undefined,
        selected
      )

      const fullData = listData.fullData.value

      expect(fullData[0]!.focus).toBe(false)
      expect(fullData[1]!.focus).toBe(true)
      expect(fullData[0]!.selected).toBe(false)
      expect(fullData[2]!.selected).toBe(true)
      expect(fullData[0]!.highlight).toBe('Ban')
    })

    it('should mark items as disabled when max selection reached', () => {
      const list = [
        { label: 'Item 1', value: 'val1' },
        { label: 'Item 2', value: 'val2' },
        { label: 'Item 3', value: 'val3' }
      ]
      const selected = ref(['val1', 'val2'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected,
        undefined,
        undefined,
        undefined,
        undefined,
        2
      )

      const fullData = listData.fullData.value

      expect(fullData[0]!.disabled).toBe(false) // selected
      expect(fullData[1]!.disabled).toBe(false) // selected
      expect(fullData[2]!.disabled).toBe(true) // not selected and max reached
    })

    it('should include filterMode in fullData', () => {
      const list = ['Apple', 'Banana']
      const filterMode = ref(true)

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        filterMode
      )

      const fullData = listData.fullData.value

      expect(fullData[0]!.filterMode).toBe(true)
    })
  })

  describe('map computed property', () => {
    it('should return flat list for simple items', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(list)

      const map = listData.map.value

      expect(map).toHaveLength(3)
      expect(map[0]!.label).toBe('Apple')
    })

    it('should flatten groups and menus', () => {
      const list = [
        {
          label: 'Group 1', value: [
            { label: 'Item 1.1', value: 'val1.1' },
            { label: 'Item 1.2', value: 'val1.2' }
          ], type: 'group'
        },
        { label: 'Item 2', value: 'val2' }
      ]
      const listData = new ListDataRef(list)

      const map = listData.map.value

      expect(map.length).toBeGreaterThan(3)
      expect(map[0]!.type).toBe('group')
      expect(map[1]!.type).toBe('item')
      expect(map[2]!.type).toBe('item')
    })

    it('should handle nested menu structures', () => {
      const list = [
        {
          label: 'Menu',
          type: 'menu',
          value: [
            { label: 'Option 1', value: 'opt1' },
            { label: 'Option 2', value: 'opt2' }
          ]
        }
      ]
      const listData = new ListDataRef(list)

      const map = listData.map.value

      expect(map[0]!.type).toBe('menu')
      expect(map[1]!.label).toBe('Option 1')
      expect(map[2]!.label).toBe('Option 2')
    })
  })

  describe('mapItems computed property', () => {
    it('should return only item type elements', () => {
      const list = [
        { label: 'Item 1', value: 'val1', type: 'item' },
        { label: 'Subtitle', value: 'sub', type: 'subtitle' },
        { label: 'Item 2', value: 'val2', type: 'item' },
        { label: 'Line', value: 'line', type: 'line' }
      ]
      const listData = new ListDataRef(list)

      const mapItems = listData.mapItems.value

      expect(mapItems).toHaveLength(2)
      expect(mapItems.every(item => item.type === 'item')).toBe(true)
    })
  })

  describe('items computed property', () => {
    it('should return items, groups and menus', () => {
      const list = [
        { label: 'Item', value: 'val1', type: 'item' },
        { label: 'Group', value: [], type: 'group' },
        { label: 'Menu', value: [], type: 'menu' },
        { label: 'Subtitle', value: 'sub', type: 'subtitle' }
      ]
      const listData = new ListDataRef(list)

      const items = listData.items.value

      expect(items).toHaveLength(3)
      expect(items.map(i => i.type)).toEqual(['item', 'group', 'menu'])
    })
  })

  describe('highlightFirstItem computed property', () => {
    it('should return -1 when no highlight', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const highlight = ref<string>()

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.highlightFirstItem.value).toBe(-1)
    })

    it('should return -1 when highlight is too short', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const highlight = ref('A')
      const highlightLengthStart = ref(2)

      const listData = new ListDataRef(
        list,
        undefined,
        highlight,
        highlightLengthStart
      )

      expect(listData.highlightFirstItem.value).toBe(-1)
    })

    it('should find first matching item by label', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const highlight = ref('Ban')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.highlightFirstItem.value).toBe(1)
    })

    it('should be case insensitive', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const highlight = ref('CHERRY')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.highlightFirstItem.value).toBe(2)
    })

    it('should search by index', () => {
      const list = [
        { label: 'Item 1', value: 'val1', index: 'custom-1' },
        { label: 'Item 2', value: 'val2', index: 'custom-2' }
      ]
      const highlight = ref('custom-2')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.highlightFirstItem.value).toBe(1)
    })

    it('should search by search field', () => {
      const list = [
        { label: 'Item 1', value: 'val1', search: 'searchable text' },
        { label: 'Item 2', value: 'val2' }
      ]
      const highlight = ref('searchable')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.highlightFirstItem.value).toBe(0)
    })
  })

  describe('isSelected computed property', () => {
    it('should return false when no selection', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(list)

      expect(listData.isSelected.value).toBe(false)
    })

    it('should return true when item is selected', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const selected = ref('apple')

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.isSelected.value).toBe(true)
    })

    it('should handle array of selections', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const selected = ref(['apple', 'banana'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.isSelected.value).toBe(true)
    })
  })

  describe('isSelectedMin computed property', () => {
    it('should return false when min is 0', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0)

      expect(listData.isSelectedMin.value).toBe(false)
    })

    it('should return true when selection count is below min', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const selected = ref(['apple'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected,
        undefined,
        undefined,
        undefined,
        2
      )

      expect(listData.isSelectedMin.value).toBe(true)
    })

    it('should return false when selection count exceeds min', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]
      const selected = ref(['apple', 'banana', 'cherry'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected,
        undefined,
        undefined,
        undefined,
        2
      )

      expect(listData.isSelectedMin.value).toBe(false)
    })
  })

  describe('isSelectedMax computed property', () => {
    it('should return false when selection is below max', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const selected = ref(['apple'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected,
        undefined,
        undefined,
        undefined,
        undefined,
        2
      )

      expect(listData.isSelectedMax.value).toBe(false)
    })

    it('should return true when selection reaches max', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]
      const selected = ref(['apple', 'banana'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected,
        undefined,
        undefined,
        undefined,
        undefined,
        2
      )

      expect(listData.isSelectedMax.value).toBe(true)
    })
  })

  describe('selectedList computed property', () => {
    it('should return empty array when no selection', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.selectedList.value).toEqual([])
    })

    it('should return list of selected items', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]
      const selected = ref(['apple', 'cherry'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      const selectedList = listData.selectedList.value

      expect(selectedList).toHaveLength(2)
      expect(selectedList[0]!.label).toBe('Apple')
      expect(selectedList[1]!.label).toBe('Cherry')
    })

    it('should filter only item types', () => {
      const list = [
        { label: 'Item', value: 'item1', type: 'item' },
        { label: 'Subtitle', value: 'sub', type: 'subtitle' }
      ]
      const selected = ref(['item1', 'sub'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      const selectedList = listData.selectedList.value

      expect(selectedList).toHaveLength(1)
      expect(selectedList[0]!.type).toBe('item')
    })
  })

  describe('selectedListInGroup computed property', () => {
    it('should return selected items only from current group', () => {
      const list = [
        { label: 'Item 1', value: 'val1' },
        { label: 'Item 2', value: 'val2' }
      ]
      const selected = ref(['val1'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.selectedListInGroup.value).toHaveLength(1)
      expect(listData.selectedListInGroup.value[0]!.label).toBe('Item 1')
    })
  })

  describe('selectedNames computed property', () => {
    it('should return array of selected item labels', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]
      const selected = ref(['apple', 'cherry'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      const names = listData.selectedNames.value

      expect(names).toEqual(['Apple', 'Cherry'])
    })

    it('should return empty array when no selection', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.selectedNames.value).toEqual([])
    })
  })

  describe('selectedValues computed property', () => {
    it('should return array of selected item values', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]
      const selected = ref(['apple', 'cherry'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      const values = listData.selectedValues.value

      expect(values).toEqual(['apple', 'cherry'])
    })

    it('should return empty array when no selection', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.selectedValues.value).toEqual([])
    })
  })

  describe('isLite method', () => {
    it('should return false when lite is not set', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(list)

      expect(listData.isLite()).toBe(false)
    })

    it('should return false when list length is below threshold', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ref(10)
      )

      expect(listData.isLite()).toBe(false)
    })

    it('should return true when list length exceeds threshold', () => {
      const list = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ref(3)
      )

      expect(listData.isLite()).toBe(true)
    })
  })

  describe('isFocus method', () => {
    it('should return false when no focus is set', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.isFocus()).toBe(false)
    })

    it('should return true when an item has focus', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const focus = ref<string>('apple')

      const listData = new ListDataRef(list, focus)

      expect(listData.isFocus()).toBe(true)
    })

    it('should return false when focused item is not in list', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const focus = ref<string>('cherry')

      const listData = new ListDataRef(list, focus)

      expect(listData.isFocus()).toBe(false)
    })
  })

  describe('isHighlight method', () => {
    it('should return false when no highlight match found', () => {
      const list = ['Apple', 'Banana']
      const highlight = ref('xyz')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.isHighlight()).toBe(false)
    })

    it('should return true when highlight match is found', () => {
      const list = ['Apple', 'Banana']
      const highlight = ref('App')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.isHighlight()).toBe(true)
    })
  })

  describe('isHighlightActive method', () => {
    it('should return true when highlight is too short', () => {
      const list = ['Apple', 'Banana']
      const highlight = ref('A')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.isHighlightActive()).toBe(true)
    })

    it('should return true when highlight matches', () => {
      const list = ['Apple', 'Banana']
      const highlight = ref('App')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.isHighlightActive()).toBe(true)
    })

    it('should return false when highlight is long enough but no match', () => {
      const list = ['Apple', 'Banana']
      const highlight = ref('xyz')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.isHighlightActive()).toBe(false)
    })
  })

  describe('getLength method', () => {
    it('should return number of items in data', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(list)

      expect(listData.getLength()).toBe(3)
    })

    it('should return 0 for empty list', () => {
      const listData = new ListDataRef([])

      expect(listData.getLength()).toBe(0)
    })
  })

  describe('getLengthByMap method', () => {
    it('should return total number of items including nested', () => {
      const list = [
        {
          label: 'Group', value: [
            { label: 'Item 1', value: 'val1' },
            { label: 'Item 2', value: 'val2' }
          ], type: 'group'
        }
      ]
      const listData = new ListDataRef(list)

      expect(listData.getLengthByMap()).toBeGreaterThan(1)
    })
  })

  describe('getLengthByItems method', () => {
    it('should return number of selectable items', () => {
      const list = [
        { label: 'Item 1', value: 'val1', type: 'item' },
        { label: 'Subtitle', value: 'sub', type: 'subtitle' },
        { label: 'Item 2', value: 'val2', type: 'item' }
      ]
      const listData = new ListDataRef(list)

      expect(listData.getLengthByItems()).toBe(2)
    })
  })

  describe('getFocus method', () => {
    it('should return undefined when no focus', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getFocus()).toBeUndefined()
    })

    it('should return focused item index', () => {
      const list = ['Apple', 'Banana']
      const focus = ref<string>('1')

      const listData = new ListDataRef(list, focus)

      expect(listData.getFocus()).toBe('1')
    })
  })

  describe('getHighlight method', () => {
    it('should return undefined when no highlight', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getHighlight()).toBeUndefined()
    })

    it('should return highlight text', () => {
      const list = ['Apple', 'Banana']
      const highlight = ref('App')

      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.getHighlight()).toBe('App')
    })
  })

  describe('getHighlightLengthStart method', () => {
    it('should return default value of 2', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getHighlightLengthStart()).toBe(2)
    })

    it('should return custom highlight length start', () => {
      const list = ['Apple', 'Banana']
      const highlightLengthStart = ref(5)

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        highlightLengthStart
      )

      expect(listData.getHighlightLengthStart()).toBe(5)
    })
  })

  describe('getSelected method', () => {
    it('should return undefined when no selection', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getSelected()).toBeUndefined()
    })

    it('should return selected value', () => {
      const list = ['Apple', 'Banana']
      const selected = ref('0')

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.getSelected()).toBe('0')
    })

    it('should return array of selected values', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const selected = ref(['0', '2'])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.getSelected()).toEqual(['0', '2'])
    })
  })

  describe('getSelectedByStep method', () => {
    it('should return first item when no selection', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const listData = new ListDataRef(list)

      expect(listData.getSelectedByStep(0)).toBe('apple')
    })

    it('should return next item with positive step', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]
      const selected = ref('apple')

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.getSelectedByStep(1)).toBe('banana')
      expect(listData.getSelectedByStep(2)).toBe('cherry')
    })

    it('should return previous item with negative step', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
      ]
      const selected = ref('cherry')

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.getSelectedByStep(-1)).toBe('banana')
      expect(listData.getSelectedByStep(-2)).toBe('apple')
    })

    it('should return last item when step exceeds length', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const selected = ref('apple')

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.getSelectedByStep(10)).toBe('banana')
    })

    it('should return first item when negative step exceeds bounds', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const selected = ref('banana')

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.getSelectedByStep(-10)).toBe('apple')
    })
  })

  describe('getItemByIndex method', () => {
    it('should return undefined for non-existent index', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getItemByIndex('999')).toBeUndefined()
    })

    it('should return item by index', () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const listData = new ListDataRef(list)

      const result = listData.getItemByIndex('apple')

      expect(result).toBeDefined()
      expect(result?.item.label).toBe('Apple')
      expect(result?.key).toBe(0)
    })

    it('should find items in nested groups', () => {
      const list = [
        {
          label: 'Group',
          value: [
            { label: 'Nested Item', value: 'nested' }
          ],
          type: 'group'
        }
      ]
      const listData = new ListDataRef(list)

      const result = listData.getItemByIndex('nested')

      expect(result).toBeDefined()
      expect(result?.item.label).toBe('Nested Item')
    })
  })

  describe('getItemByKey method', () => {
    it('should return undefined for out of bounds key', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getItemByKey(999)).toBeUndefined()
    })

    it('should return item by key', () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const listData = new ListDataRef(list)

      const item = listData.getItemByKey(1)

      expect(item).toBeDefined()
      expect(item?.label).toBe('Banana')
    })
  })

  describe('getFirstItemByParent method', () => {
    it('should return undefined when no items with parent', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getFirstItemByParent('nonexistent')).toBeUndefined()
    })

    it('should return first item with specified parent', () => {
      const list = [
        {
          label: 'Group',
          value: [
            { label: 'Item 1', value: 'val1' },
            { label: 'Item 2', value: 'val2' }
          ],
          type: 'group',
          index: 'group1'
        }
      ]
      const listData = new ListDataRef(list)

      const firstItem = listData.getFirstItemByParent('group1')

      expect(firstItem).toBeDefined()
      expect(firstItem?.label).toBe('Item 1')
    })
  })

  describe('getLastItemByParent method', () => {
    it('should return undefined when no items with parent', () => {
      const list = ['Apple', 'Banana']
      const listData = new ListDataRef(list)

      expect(listData.getLastItemByParent('nonexistent')).toBeUndefined()
    })

    it('should return last item with specified parent', () => {
      const list = [
        {
          label: 'Group',
          value: [
            { label: 'Item 1', value: 'val1' },
            { label: 'Item 2', value: 'val2' }
          ],
          type: 'group',
          index: 'group1'
        }
      ]
      const listData = new ListDataRef(list)

      const lastItem = listData.getLastItemByParent('group1')

      expect(lastItem).toBeDefined()
      expect(lastItem?.label).toBe('Item 2')
    })
  })

  describe('getSubList method', () => {
    it('should create and return sublist for group item', () => {
      const list = [
        {
          label: 'Group',
          value: [
            { label: 'Sub Item', value: 'sub' }
          ],
          type: 'group',
          index: 'group1'
        }
      ]
      const listData = new ListDataRef(list)

      const groupItem = listData.data.value[0]
      const subList = listData.getSubList(groupItem!)

      expect(subList).toBeInstanceOf(ListDataRef)
      expect(subList.getLength()).toBe(1)
    })

    it('should cache sublist instances', () => {
      const list = [
        {
          label: 'Group',
          value: [{ label: 'Item', value: 'val' }],
          type: 'group',
          index: 'group1'
        }
      ]
      const listData = new ListDataRef(list)

      const groupItem = listData.data.value[0]
      const subList1 = listData.getSubList(groupItem!)
      const subList2 = listData.getSubList(groupItem!)

      expect(subList1).toBe(subList2)
    })

    it('should propagate focus and selection to sublists', () => {
      const focus = ref<string>('sub-item')
      const selected = ref('sub-item')

      const list = [
        {
          label: 'Group',
          value: [
            { label: 'Sub Item', value: 'sub-item' }
          ],
          type: 'group',
          index: 'group1'
        }
      ]

      const listData = new ListDataRef(
        list,
        focus,
        undefined,
        undefined,
        undefined,
        selected
      )

      const groupItem = listData.data.value[0]
      const subList = listData.getSubList(groupItem!)

      expect(subList.getFocus()).toBe('sub-item')
      expect(subList.getSelected()).toBe('sub-item')
    })
  })

  describe('Reactive updates', () => {
    it('should update data when list ref changes', async () => {
      const list = ref(['Apple', 'Banana'])
      const listData = new ListDataRef(list)

      expect(listData.getLength()).toBe(2)

      list.value = ['Apple', 'Banana', 'Cherry', 'Date']
      await nextTick()

      expect(listData.getLength()).toBe(4)
    })

    it('should update fullData when focus changes', async () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const focus = ref<string>('0')
      const listData = new ListDataRef(list, focus)

      expect(listData.fullData.value[0]!.focus).toBe(true)

      focus.value = '1'
      await nextTick()

      expect(listData.fullData.value[0]!.focus).toBe(false)
      expect(listData.fullData.value[1]!.focus).toBe(true)
    })

    it('should update fullData when selection changes', async () => {
      const list = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
      ]
      const selected = ref<string>('apple')
      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      expect(listData.fullData.value[0]!.selected).toBe(true)

      selected.value = 'banana'
      await nextTick()

      expect(listData.fullData.value[0]!.selected).toBe(false)
      expect(listData.fullData.value[1]!.selected).toBe(true)
    })

    it('should update highlight when highlight ref changes', async () => {
      const list = ['Apple', 'Banana', 'Cherry']
      const highlight = ref('App')
      const listData = new ListDataRef(list, undefined, highlight)

      expect(listData.highlightFirstItem.value).toBe(0)

      highlight.value = 'Ban'
      await nextTick()

      expect(listData.highlightFirstItem.value).toBe(1)
    })

    it('should clear sublist cache when list changes', async () => {
      const list = ref<any>([
        {
          label: 'Group',
          value: [{ label: 'Item 1', value: 'val1' }],
          type: 'group',
          index: 'group1'
        }
      ])

      const listData = new ListDataRef(list)

      const groupItem1 = listData.data.value[0]
      const subList1 = listData.getSubList(groupItem1!)

      expect(subList1.getLength()).toBe(1)

      list.value = [
        {
          label: 'Group',
          value: [
            { label: 'Item 1', value: 'val1' },
            { label: 'Item 2', value: 'val2' }
          ],
          type: 'group',
          index: 'group1'
        }
      ]
      await nextTick()

      const groupItem2 = listData.data.value[0]
      const subList2 = listData.getSubList(groupItem2!)

      expect(subList2.getLength()).toBe(2)
    })
  })

  describe('Edge cases', () => {
    it('should handle empty string as label', () => {
      const list = [{ label: '', value: 'empty' }]
      const listData = new ListDataRef(list)

      expect(listData.data.value[0]!.label).toBe('')
    })

    it('should handle numeric labels', () => {
      const list = [
        { label: 123, value: 'num1' },
        { label: 456, value: 'num2' }
      ]
      const listData = new ListDataRef(list)

      expect(listData.data.value[0]!.label).toBe(123)
      expect(listData.data.value[1]!.label).toBe(456)
    })

    it('should handle boolean values', () => {
      const list = [
        { label: 'True', value: true },
        { label: 'False', value: false }
      ]
      const listData = new ListDataRef(list)

      expect(listData.data.value[0]!.value).toBe(true)
      expect(listData.data.value[1]!.value).toBe(false)
    })

    it('should handle null and undefined values', () => {
      const list = [
        { label: 'Null', value: null },
        { label: 'Undefined', value: undefined }
      ]
      const listData = new ListDataRef(list)

      expect(listData.data.value[0]!.value).toBe(null)
      expect(listData.data.value[1]!.value).toBe(undefined)
    })

    it('should handle deeply nested groups', () => {
      const list = [
        {
          label: 'Level 1',
          type: 'group',
          value: [
            {
              label: 'Level 2',
              type: 'group',
              value: [
                { label: 'Level 3 Item', value: 'deep' }
              ]
            }
          ]
        }
      ]
      const listData = new ListDataRef(list)

      const map = listData.map.value

      expect(map.length).toBeGreaterThan(2)
    })

    it('should handle mixed types in list', () => {
      const list = [
        { label: 'Item', value: 'val1', type: 'item' },
        { label: 'Subtitle', value: 'sub', type: 'subtitle' },
        { label: 'Line', value: 'line', type: 'line' },
        { label: 'Space', value: 'space', type: 'space' }
      ]
      const listData = new ListDataRef(list)

      expect(listData.data.value).toHaveLength(4)
      expect(listData.data.value.map(i => i.type)).toEqual(['item', 'subtitle', 'line', 'space'])
    })

    it('should handle object with no label or value', () => {
      const list = [{ custom: 'data' }]
      const listData = new ListDataRef(list)

      expect(listData.data.value).toHaveLength(1)
      expect(listData.data.value[0]).toHaveProperty('type', 'item')
    })

    it('should handle selection with different types', () => {
      const list = [
        { label: 'String', value: 'string' },
        { label: 'Number', value: 123 },
        { label: 'Boolean', value: true }
      ]
      const selected = ref<any>([123, true])

      const listData = new ListDataRef(
        list,
        undefined,
        undefined,
        undefined,
        undefined,
        selected
      )

      const selectedList = listData.selectedList.value

      expect(selectedList).toHaveLength(2)
      expect(selectedList[0]!.value).toBe(123)
      expect(selectedList[1]!.value).toBe(true)
    })
  })

  describe('Complex scenarios', () => {
    it('should handle complete Select component scenario', async () => {
      const options = ref([
        { label: 'United States', value: 'us', icon: 'flag' },
        { label: 'United Kingdom', value: 'uk', icon: 'flag' },
        { label: 'Germany', value: 'de', icon: 'flag' },
        { label: 'France', value: 'fr', icon: 'flag' },
        { label: 'Japan', value: 'jp', icon: 'flag' }
      ])

      const selected = ref<string>('us')
      const focus = ref<string>('us')
      const highlight = ref<string>('')
      const filterMode = ref(false)

      const listData = new ListDataRef(
        options,
        focus,
        highlight,
        ref(2),
        filterMode,
        selected
      )

      // Initial state
      expect(listData.getLength()).toBe(5)
      expect(listData.isSelected.value).toBe(true)
      expect(listData.selectedList.value[0]!.value).toBe('us')

      // Change selection
      selected.value = 'uk'
      await nextTick()

      expect(listData.selectedList.value[0]!.value).toBe('uk')
      expect(listData.selectedNames.value).toEqual(['United Kingdom'])

      // Search/filter
      highlight.value = 'United'
      await nextTick()

      expect(listData.highlightFirstItem.value).toBe(0)
      expect(listData.isHighlight()).toBe(true)

      // Change focus
      focus.value = 'de'
      await nextTick()

      expect(listData.fullData.value[2]!.focus).toBe(true)
    })

    it('should handle grouped menu with multiple selection', async () => {
      const menuData = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Carrot', value: 'carrot' },
        { label: 'Potato', value: 'potato' }
      ]

      const selected = ref(['apple', 'carrot'])
      const max = ref(2)

      const listData = new ListDataRef(
        menuData,
        undefined,
        undefined,
        undefined,
        undefined,
        selected,
        undefined,
        undefined,
        undefined,
        undefined,
        max
      )

      expect(listData.isSelectedMax.value).toBe(true)
      expect(listData.selectedList.value).toHaveLength(2)
      expect(listData.selectedNames.value).toEqual(['Apple', 'Carrot'])

      const fullData = listData.fullData.value

      // Check that unselected items are disabled due to max
      const bananaItem = fullData.find(item => item.value === 'banana')
      expect(bananaItem?.disabled).toBe(true)

      const potatoItem = fullData.find(item => item.value === 'potato')
      expect(potatoItem?.disabled).toBe(true)
    })
  })
})
