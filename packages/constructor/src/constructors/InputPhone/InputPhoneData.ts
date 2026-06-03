import { computed, ref } from 'vue'
import { Geo, GeoPhone, type GeoPhoneMap } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import type { InputPhonePropsBasic } from './props'

export class InputPhoneData {
  protected readonly country = ref<string>(Geo.getCountry())

  constructor(
    protected readonly props: InputPhonePropsBasic,
    protected readonly value?: FieldValueInclude,
    protected readonly event?: FieldEventInclude
  ) {
  }

  readonly item = computed<GeoPhoneMap | undefined>(() => {
    if (!this.props.countryBlock) {
      // return GeoPhone.getByPhone(this.value.item.value ?? this.getValueDefault())?.item
    }

    return GeoPhone.getByCode(this.country.value)
  })

  readonly mask = computed<string | string[]>(() => {
    const masks = this.item.value?.[this.props.countryBlock ? 'mask' : 'maskFull']

    if (
      masks
      && masks.length > 0
    ) {
      return masks
    }

    return '+************'
  })

  toPhone(country: string): string {
    return (GeoPhone.get(country)?.phone ?? 1).toString()
  }

  readonly onInput = (
    event: InputEvent,
    data: Record<string, any>
  ) => {
    this.event?.onInput(event, {
      ...data,
      value: this.toPhone(data?.value)
    })
  }

  readonly onCountry = (
    _: MouseEvent,
    data?: Record<string, any>
  ) => {
    this.country.value = data?.value
    console.log('data', data, this.item.value)
  }
}
