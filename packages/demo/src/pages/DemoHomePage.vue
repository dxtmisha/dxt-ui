<script setup lang="ts">
import DemoLink from '../components/DemoLink.vue'
</script>

<template>
  <D1Page label="Demo">
    <D1Section>
      <D1Group label="Test SSR">
        <DemoLink label="Api" name="test-api"/>
      </D1Group>
      <D1Group label="Components">
        <DemoLink label="Actions" name="component-actions"/>
        <DemoLink label="Badge" name="component-badge"/>
        <DemoLink label="Button" name="component-button"/>
        <DemoLink label="Checkbox" name="component-checkbox"/>
        <DemoLink label="ClientOnly" name="component-client-only"/>
        <DemoLink label="Icon" name="component-icon"/>
        <DemoLink label="Image" name="component-image"/>
        <DemoLink label="Input" name="component-input"/>
        <DemoLink label="Mask" name="component-mask"/>
        <DemoLink label="Motion Transform" name="component-motion-transform"/>
        <DemoLink label="Page Area" name="component-page-area"/>
        <DemoLink label="Progress" name="component-progress"/>
        <DemoLink label="Radio" name="component-radio"/>
        <DemoLink label="Snackbar" name="component-snackbar"/>
        <DemoLink label="Tabs" name="component-tabs"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
