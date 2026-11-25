<script setup lang="ts">
import { ref } from 'vue'
import type { NumberOrString } from '@dxtmisha/functional'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const reactiveValue = ref<NumberOrString>(123456.78)
const reactiveLanguage = ref<string>('en-US')
const reactiveFormatting = ref<boolean>(true)
const reactiveCurrency = ref<string | undefined>('USD')
const reactiveUnit = ref<string | undefined>(undefined)
const isLifecycleMounted = ref<boolean>(true)

const setSampleZero = (): void => {
  reactiveValue.value = 0
}

const setSampleNegative = (): void => {
  reactiveValue.value = -1234.56
}

const setSampleLarge = (): void => {
  reactiveValue.value = 9876543.21
}

const setSampleString = (): void => {
  reactiveValue.value = '4200.5'
}

const setSampleEmpty = (): void => {
  reactiveValue.value = ''
}

const toggleLanguage = (): void => {
  const locales = ['en-US', 'de-DE', 'ru-RU', 'vi-VN', 'ja-JP']
  const nextIndex = (locales.indexOf(reactiveLanguage.value) + 1) % locales.length
  reactiveLanguage.value = locales[nextIndex] ?? 'en-US'
}

const toggleFormatting = (): void => {
  reactiveFormatting.value = !reactiveFormatting.value
}

const toggleCurrencyUnitMode = (): void => {
  if (reactiveCurrency.value) {
    reactiveCurrency.value = undefined
    reactiveUnit.value = 'kilogram'
  } else if (reactiveUnit.value) {
    reactiveUnit.value = undefined
  } else {
    reactiveCurrency.value = 'USD'
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="FormattedNumber" class="demo-formatted-number-page">
    <D1Section>
      <D1Group label="Basic Numbers (number & string)">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="123456.789" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="9876543.21" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="-4567.89" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="0.00012345" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567890123.45" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value=" 1234.56 " language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="123456.789" :formatting="false"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Currency Formatting & Priority Over Unit">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1000" currency="USD" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1000.5" currency="EUR" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1999.99" currency="GBP" language="en-GB"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="5000" currency="JPY" language="ja-JP"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="250000" currency="VND" language="vi-VN"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="250 USD" currency="EUR" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="42" currency="USD" unit="kilogram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="42" currency="" unit="kilogram" language="en-US"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Unit Formatting">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="50" unit="celsius" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="120" unit="kilometer" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="75.5" unit="kilogram" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1.5" unit="liter" language="ru-RU"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="85" unit="percent" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1500" unit="meter" language="fr-FR"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Locales, Global GeoRef & RTL">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="de-DE"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="ru-RU"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="vi-VN"/>
          </DemoBox>
          <DemoBox size="sm" dir="rtl">
            <D1FormattedNumber :value="1234567.89" currency="SAR" language="ar-SA"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Accessibility & Inline Context">
        <p class="d1-font--bodyMedium">
          Total due today:
          <D1FormattedNumber
            :value="1499.95"
            currency="USD"
            language="en-US"
            lang="en-US"
            aria-label="Total due today: 1,499 dollars and 95 cents"
          />
          (tax included).
        </p>
      </D1Group>

      <D1Group label="Zero & Boundary Values">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="0" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="-0" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value=" 0 " language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="0" currency="USD" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="0" unit="kilogram" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="0" :formatting="false"/>
          </DemoBox>
          <DemoBox size="sm" data-testid="empty-string-probe">
            <D1FormattedNumber value=""/>
          </DemoBox>
          <DemoBox size="sm" data-testid="whitespace-probe">
            <D1FormattedNumber value="   "/>
          </DemoBox>
          <DemoBox size="sm" data-testid="undefined-probe">
            <D1FormattedNumber :value="undefined"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="Number.NaN" currency="USD" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="Number.POSITIVE_INFINITY" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="Number.NEGATIVE_INFINITY" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="Not a number" language="en-US"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="Tiếng Việt / Кириллица 🚀" :formatting="false"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="<img src=x onerror=alert(1)>" :formatting="false"/>
          </DemoBox>
        </DemoFlex>

        <DemoBox class="demo-formatted-number-page__narrow" size="sm">
          <D1FormattedNumber
            value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            :formatting="false"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Reactive Controls">
        <DemoFlex>
          <D1Button label="Set 0" outline @click="setSampleZero"/>
          <D1Button label="Set -1,234.56" outline @click="setSampleNegative"/>
          <D1Button label="Set 9,876,543.21" outline @click="setSampleLarge"/>
          <D1Button label="Set '4200.5'" outline @click="setSampleString"/>
          <D1Button label="Clear ('')" outline @click="setSampleEmpty"/>
          <D1Button label="Switch Locale" primary @click="toggleLanguage"/>
          <D1Button label="Switch Mode (Currency/Unit/Plain)" outline @click="toggleCurrencyUnitMode"/>
          <D1Button label="Toggle Formatting" secondary @click="toggleFormatting"/>
        </DemoFlex>
        <DemoBox size="sm">
          <D1FormattedNumber
            :value="reactiveValue"
            :currency="reactiveCurrency"
            :unit="reactiveUnit"
            :language="reactiveLanguage"
            :formatting="reactiveFormatting"
            data-testid="demo-formatted-number-reactive"
          />
        </DemoBox>
        <DemoValue
          :value="`${String(reactiveValue)} (${reactiveLanguage}, currency=${String(reactiveCurrency)}, unit=${String(reactiveUnit)}, formatting=${String(reactiveFormatting)})`"
          label="State"
        />
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
          <D1FormattedNumber :value="2026" currency="USD" language="en-US"/>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-formatted-number-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
    overflow-wrap: anywhere;
  }
}
</style>
