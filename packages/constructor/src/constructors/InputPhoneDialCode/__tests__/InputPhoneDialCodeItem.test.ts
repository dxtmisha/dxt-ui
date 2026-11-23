// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { effectScope, reactive, ref } from 'vue'

import type { MenuCountryInclude } from '../../MenuCountry'
import { InputPhoneDialCodeItem } from '../InputPhoneDialCodeItem'
import type { InputPhoneDialCodeProps } from '../props'

describe('InputPhoneDialCodeItem', () => {
  it('should resolve icon and label across single items, subitems, and labelType variants', () => {
    const scope = effectScope()
    const props = reactive<InputPhoneDialCodeProps>({
      labelType: 'code'
    })
    const selectedList = ref<Array<Record<string, any>>>([
      {
        icon: 'flag-vn',
        caption: '+84',
        label: 'Vietnam',
        value: 'VN'
      }
    ])
    const mockMenu = {
      getElement: () => ({
        getSelectedList: () => selectedList.value
      })
    } as unknown as MenuCountryInclude

    scope.run(() => {
      const itemController = new InputPhoneDialCodeItem(props, () => mockMenu)

      expect(itemController.binds).toEqual({ icon: 'flag-vn', label: '+84' })

      props.labelType = 'name'
      expect(itemController.binds).toEqual({ icon: 'flag-vn', label: 'Vietnam' })

      props.labelType = 'none'
      expect(itemController.binds).toEqual({ icon: 'flag-vn', label: undefined })

      selectedList.value = [
        {
          index: 'DO-1-829',
          value: 'DO-1-829',
          label: '+1-829',
          detail: {
            country: 'DO',
            icon: 'f-do',
            label: 'Dominican Republic',
            phone: '1829'
          }
        }
      ]

      props.labelType = 'code'
      expect(itemController.binds).toEqual({ icon: 'f-do', label: '+1-829' })

      props.labelType = 'name'
      expect(itemController.binds).toEqual({ icon: 'f-do', label: 'Dominican Republic' })

      selectedList.value = []
      expect(itemController.binds).toEqual({ icon: undefined, label: undefined })

      props.labelType = undefined
      selectedList.value = [{ icon: 'flag-us', caption: '+1', label: 'United States', value: 'US' }]
      expect(itemController.binds).toEqual({ icon: 'flag-us', label: undefined })
    })

    scope.stop()
  })

  it('should return undefined bindings safely when menu element is not mounted yet', () => {
    const scope = effectScope()
    const mockMenu = {
      getElement: () => undefined
    } as unknown as MenuCountryInclude

    scope.run(() => {
      const itemController = new InputPhoneDialCodeItem({ labelType: 'code' }, () => mockMenu)
      expect(itemController.list.value).toBeUndefined()
      expect(itemController.item.value).toBeUndefined()
      expect(itemController.binds).toEqual({ icon: undefined, label: undefined })
    })

    scope.stop()
  })
})
