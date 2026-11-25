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

const setSampleZero = () => {
  reactiveValue.value = 0
}

const setSampleLarge = () => {
  reactiveValue.value = 9876543.21
}

const setSampleString = () => {
  reactiveValue.value = '4200.5'
}

const toggleLanguage = () => {
  const locales = ['en-US', 'de-DE', 'ru-RU', 'vi-VN', 'ja-JP']
  const nextIndex = (locales.indexOf(reactiveLanguage.value) + 1) % locales.length
  reactiveLanguage.value = locales[nextIndex] ?? 'en-US'
}

const toggleFormatting = () => {
  reactiveFormatting.value = !reactiveFormatting.value
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="FormattedNumber" class="demo-formatted-number-page">
    <D1Section>
      <D1Group label="Basic Numbers (number & string)">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="123456.789" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="9876543.21" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="-4567.89" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="123456.789" :formatting="false" />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Currency Formatting & Priority Over Unit">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1000" currency="USD" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1000.5" currency="EUR" language="de-DE" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="5000" currency="JPY" language="ja-JP" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="250000" currency="VND" language="vi-VN" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="250 USD" currency="EUR" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="42" currency="USD" unit="kilogram" language="en-US" />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Unit Formatting">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="50" unit="celsius" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="120" unit="kilometer" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="75.5" unit="kilogram" language="de-DE" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1.5" unit="liter" language="ru-RU" />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Locales & Languages">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="de-DE" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="ru-RU" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="1234567.89" language="vi-VN" />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Zero & Boundary Values">
        <DemoFlex>
          <DemoBox size="sm">
            <D1FormattedNumber :value="0" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="0" currency="USD" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="0" unit="kilogram" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber value="0" :formatting="false" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="undefined" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="Number.NaN" currency="USD" language="en-US" />
          </DemoBox>
          <DemoBox size="sm">
            <D1FormattedNumber :value="Number.POSITIVE_INFINITY" language="en-US" />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Reactive Controls">
        <DemoFlex>
          <D1Button label="Set 0" outline @click="setSampleZero" />
          <D1Button label="Set 9,876,543.21" outline @click="setSampleLarge" />
          <D1Button label="Set '4200.5'" outline @click="setSampleString" />
          <D1Button label="Switch Locale" primary @click="toggleLanguage" />
          <D1Button label="Toggle Formatting" secondary @click="toggleFormatting" />
        </DemoFlex>
        <DemoBox size="sm">
          <D1FormattedNumber
            :value="reactiveValue"
            currency="USD"
            :language="reactiveLanguage"
            :formatting="reactiveFormatting"
            data-testid="demo-formatted-number-reactive"
          />
        </DemoBox>
        <DemoValue :value="`${String(reactiveValue)} (${reactiveLanguage}, formatting=${String(reactiveFormatting)})`" label="State" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
