<script setup lang="ts">
import {
  UiTestContainer,
  UiTestGroup, UiTestItemFull,
  UiTestTitle
} from '@dxt-ui/test'

import C2Button from '../components/CcUi/Button/C2Button.vue'

</script>

<template>
  <UiTestTitle title="Button"/>

  <UiTestContainer>
    <UiTestGroup>
      <C2Button icon="bank"/>
      <C2Button label="Label"/>
      <C2Button icon="bank" label="Label"/>
      <C2Button icon-trailing="chevron-down" label="Label"/>
      <C2Button icon="bank" icon-trailing="chevron-down" label="Label"/>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Status">
    <UiTestGroup>
      <C2Button icon="bank"/>
      <C2Button label="Label"/>
      <C2Button icon="bank" label="Label"/>
      <C2Button icon-trailing="chevron-down" label="Label"/>
      <C2Button icon="bank" icon-trailing="chevron-down" label="Label"/>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Type">
    <UiTestGroup>
      <C2Button icon="bank" label="Primary"/>
      <C2Button icon="bank" label="Primary/ inverse" primary-inverse/>
      <C2Button icon="bank" label="Secondary" secondary/>
      <C2Button icon="bank" label="Outlined" outlined/>
      <C2Button icon="bank" label="Ghost" ghost/>
      <C2Button icon="bank" label="Link" link/>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Size">
    <UiTestGroup>
      <UiTestItemFull is-flex is-padding>
        <C2Button icon="bank" size="x"/>
        <C2Button icon="bank" size="xs"/>
        <C2Button icon="bank" size="sm"/>
        <C2Button icon="bank" size="md"/>
        <C2Button icon="bank" size="lg"/>
        <C2Button icon="bank" size="xl"/>
      </UiTestItemFull>
      <UiTestItemFull is-flex is-padding>
        <C2Button icon="bank" label="X" size="x"/>
        <C2Button icon="bank" label="XS" size="xs"/>
        <C2Button icon="bank" label="SM" size="sm"/>
        <C2Button icon="bank" label="MD" size="md"/>
        <C2Button icon="bank" label="LG" size="lg"/>
        <C2Button icon="bank" label="XL" size="xl"/>
      </UiTestItemFull>
      <UiTestItemFull is-flex is-padding>
        <C2Button label="X" size="x"/>
        <C2Button label="XS" size="xs"/>
        <C2Button label="SM" size="sm"/>
        <C2Button label="MD" size="md"/>
        <C2Button label="LG" size="lg"/>
        <C2Button label="XL" size="xl"/>
      </UiTestItemFull>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
