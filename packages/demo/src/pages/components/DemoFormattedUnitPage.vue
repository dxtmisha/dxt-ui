<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NumberOrString } from '@dxtmisha/functional'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const reactiveValue = ref<NumberOrString>(100)
const reactiveUnit = ref<string>('kilometer')
const reactiveLanguage = ref<string>('en-US')
const reactiveFormatting = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const reactiveStateSummary = computed<string>(() => (
  `${String(reactiveValue.value)} (${reactiveLanguage.value}, unit=${reactiveUnit.value}, formatting=${String(reactiveFormatting.value)})`
))

const setSampleZero = (): void => {
  reactiveValue.value = 0
}

const setSampleMinusForty = (): void => {
  reactiveValue.value = -40
}

const setSampleThousand = (): void => {
  reactiveValue.value = 1000
}

const clearSampleValue = (): void => {
  reactiveValue.value = ''
}

const switchUnit = (): void => {
  const units = [
    'millimeter',
    'centimeter',
    'meter',
    'kilometer',
    'square-meter',
    'hectare',
    'gram',
    'kilogram',
    'tonne',
    'milliliter',
    'liter',
    'celsius',
    'kilometer-per-hour'
  ]
  const nextIndex = (units.indexOf(reactiveUnit.value) + 1) % units.length
  reactiveUnit.value = units[nextIndex] ?? 'kilometer'
}

const switchLanguage = (): void => {
  const locales = ['en-US', 'ru-RU', 'de-DE', 'vi-VN']
  const nextIndex = (locales.indexOf(reactiveLanguage.value) + 1) % locales.length
  reactiveLanguage.value = locales[nextIndex] ?? 'en-US'
}

const toggleFormatting = (): void => {
  reactiveFormatting.value = !reactiveFormatting.value
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="FormattedUnit" class="demo-formatted-unit-page">
    <D1Section>
      <D1Group label="Basic Conversions & Locales">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedUnit :value="25" unit="celsius" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="25" unit="celsius" language="ru-RU"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="25" unit="celsius" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="25" unit="celsius" language="vi-VN"/>
          </DemoBox>

          <DemoBox size="sm">
            <D1FormattedUnit :value="10" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="10" unit="kilometer" language="ru-RU"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="10" unit="kilometer" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="10" unit="kilometer" language="vi-VN"/>
          </DemoBox>

          <DemoBox size="sm">
            <D1FormattedUnit :value="500" unit="gram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="500" unit="gram" language="ru-RU"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="500" unit="gram" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="500" unit="gram" language="vi-VN"/>
          </DemoBox>

          <DemoBox size="sm">
            <D1FormattedUnit :value="75.5" unit="kilogram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="75.5" unit="kilogram" language="ru-RU"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="75.5" unit="kilogram" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="75.5" unit="kilogram" language="vi-VN"/>
          </DemoBox>

          <DemoBox size="sm">
            <D1FormattedUnit :value="4" unit="liter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="4" unit="liter" language="ru-RU"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="4" unit="liter" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="4" unit="liter" language="vi-VN"/>
          </DemoBox>

          <DemoBox size="sm">
            <D1FormattedUnit :value="100" unit="kilometer"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit value="42.5" unit="kilogram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm" dir="rtl">
            <D1FormattedUnit :value="100" unit="kilometer" language="ar-SA"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="All 13 Supported GeoUnit Units">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedUnit :value="25.4" unit="millimeter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="100" unit="centimeter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="10" unit="meter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="5" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="100" unit="square-meter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="100" unit="square-meter" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="2" unit="hectare" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="2" unit="hectare" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="250" unit="gram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="10" unit="kilogram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="3" unit="tonne" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="3" unit="tonne" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="500" unit="milliliter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="10" unit="liter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="20" unit="celsius" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="100" unit="kilometer-per-hour" language="en-US"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Formatting Flag (Default vs Raw)">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedUnit :value="100" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit
              :value="100"
              unit="kilometer"
              language="en-US"
              :formatting="true"
            />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit
              :value="100"
              unit="kilometer"
              language="en-US"
              :formatting="false"
            />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit
              value="36.6"
              unit="celsius"
              language="en-US"
              :formatting="false"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedUnit :value="0" unit="celsius" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="-0" unit="kilogram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit value="0" unit="liter" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit value=" 0 " unit="gram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="-25" unit="celsius" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="12.345" unit="kilometer" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm" data-testid="empty-string-probe">
            <D1FormattedUnit value="" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm" data-testid="whitespace-probe">
            <D1FormattedUnit value="   " unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm" data-testid="undefined-probe">
            <D1FormattedUnit :value="undefined" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="Number.NaN" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="Number.POSITIVE_INFINITY" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="Number.NEGATIVE_INFINITY" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit :value="42" unit="unknown-unit" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit
              value="Tiếng Việt / Кириллица 🚀"
              unit="kilometer"
              :formatting="false"
            />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedUnit
              value="<img src=x onerror=alert(1)>"
              unit="kilometer"
              :formatting="false"
            />
          </DemoBox>
        </DemoFlex>

        <DemoBox class="demo-formatted-unit-page__narrow" size="sm">
          <D1FormattedUnit
            value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            unit="kilometer"
            :formatting="false"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & Inline Context">
        <p class="d1-font--bodyMedium">
          Recommended oven temperature:
          <D1FormattedUnit
            :value="180"
            unit="celsius"
            language="en-US"
            lang="en-US"
            aria-label="180 degrees Celsius, converted to 356 degrees Fahrenheit"
          />
          for 25 minutes.
        </p>
      </D1Group>

      <D1Group label="Reactive Controls">
        <DemoFlex>
          <D1Button label="Set 0" outline @click="setSampleZero"/>
          <D1Button label="Set -40" outline @click="setSampleMinusForty"/>
          <D1Button label="Set 1000" outline @click="setSampleThousand"/>
          <D1Button label="Clear" outline @click="clearSampleValue"/>
          <D1Button label="Switch Unit" primary @click="switchUnit"/>
          <D1Button label="Switch Locale" primary @click="switchLanguage"/>
          <D1Button label="Toggle Formatting" secondary @click="toggleFormatting"/>
        </DemoFlex>
        <DemoBox size="sm">
          <D1FormattedUnit
            :value="reactiveValue"
            :unit="reactiveUnit"
            :language="reactiveLanguage"
            :formatting="reactiveFormatting"
            data-testid="demo-formatted-unit-reactive"
          />
        </DemoBox>
        <DemoValue :value="reactiveStateSummary" label="State"/>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted" size="sm">
          <D1FormattedUnit :value="100" unit="kilometer" language="en-US"/>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-formatted-unit-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
    overflow-wrap: anywhere;
  }
}
</style>
