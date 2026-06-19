<script setup lang="ts">
import { useMeta } from '@dxtmisha/functional'
import { useDemoGeoRef } from '../composables/useDemoGeoRef'

import DemoLinkBlack from '../components/DemoLinkBlack.vue'
import DemoFlex from '../components/DemoFlex.vue'
import DemoValue from '../components/DemoValue.vue'

const { setTitle } = useMeta()

const {
  geoFull,
  country,
  language,
  standard,
  firstDay,
  onChange,

  countryOptions,
  standardSelect,
  location,

  formattedDate,
  formattedNumber,
  formattedCurrency,

  weekdays,
  months,
  relativeTime
} = useDemoGeoRef()

setTitle('Geo')
</script>

<template>
  <DemoLinkBlack />
  <div class="demo-geo-ref-page">
    <D1Page label="Geo Management">
      <D1Section>

        <D1Block>
          <DemoFlex>
            <D1Select
              v-model="standardSelect"
              :option="countryOptions"
              label="Select Locale"
              showSearch
            />

            <D1Input
              :value="location"
              label="Custom Locale Code"
              placeholder="e.g. fr-CA, de-DE, ja"
              @changeLite="onChange"
            />
          </DemoFlex>
        </D1Block>

        <D1Block label="Current State">
          <D1Grid>
            <D1GridItem base="12" sm="6" md="3">
                <DemoValue label="Standard" :value="standard" />
                <DemoValue label="Country" :value="country" />
                <DemoValue label="Language" :value="language" />
                <DemoValue label="First Day of Week" :value="firstDay" />
            </D1GridItem>
            <D1GridItem base="12" sm="6" md="9">
              <pre class="d1-font--bodyMedium">{{ JSON.stringify(geoFull, null, 2) }}</pre>
            </D1GridItem>
          </D1Grid>
        </D1Block>

        <D1Block label="Reactivity & Localization Demo">
          <D1Grid>
            <D1GridItem base="12" sm="6" md="6">
              <DemoValue label="Formatted Date" :value="formattedDate" />
              <DemoValue label="Formatted Number" :value="formattedNumber" />
              <DemoValue label="Formatted Currency" :value="formattedCurrency" />
            </D1GridItem>
            <D1GridItem base="12" sm="6" md="3">
              <DemoValue label="Relative Time (Past)" :value="relativeTime.past" />
              <DemoValue label="Relative Time (Future)" :value="relativeTime.future" />
            </D1GridItem>
            <D1GridItem base="12">
              <DemoValue label="Weekdays (long)" :value="weekdays.join(', ')" />
              <DemoValue label="Months (long)" :value="months.join(', ')" />
            </D1GridItem>
          </D1Grid>
        </D1Block>
      </D1Section>
    </D1Page>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-geo-ref-page {
  pre {
    margin: 0;
  }
}
</style>
