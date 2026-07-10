<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Formatted">
    <D1Section>
      <D1Group label="Formatted Number - Basic">
        <DemoFlex>
          <D1FormattedNumber :value="123456.789" />
          <D1FormattedNumber :value="123456.789" :formatting="false" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Formatted Number - Currency">
        <DemoFlex>
          <D1FormattedNumber :value="1000" currency="USD" />
          <D1FormattedNumber :value="1000" currency="EUR" language="de-DE" />
          <D1FormattedNumber :value="5000" currency="JPY" language="ja-JP" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Formatted Number - Unit">
        <DemoFlex>
          <D1FormattedNumber :value="50" unit="celsius" />
          <D1FormattedNumber :value="120" unit="kilometer" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Formatted Unit">
        <DemoFlex>
          <D1FormattedUnit :value="100" unit="kilometer" />
          <D1FormattedUnit :value="25" unit="celsius" />
          <D1FormattedUnit :value="1.5" unit="liter" language="en-US" />
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
