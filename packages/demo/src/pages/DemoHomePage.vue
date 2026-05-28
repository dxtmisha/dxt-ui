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
        <DemoLink label="Accordion" name="component-accordion"/>
        <DemoLink label="ActionSheet" name="component-action-sheet"/>
        <DemoLink label="Actions" name="component-actions"/>
        <DemoLink label="Badge" name="component-badge"/>
        <DemoLink label="Bars" name="component-bars"/>
        <DemoLink label="Button" name="component-button"/>
        <DemoLink label="Checkbox" name="component-checkbox"/>
        <DemoLink label="ClientOnly" name="component-client-only"/>
        <DemoLink label="Icon" name="component-icon"/>
        <DemoLink label="Image" name="component-image"/>
        <DemoLink label="Input" name="component-input"/>
        <DemoLink label="List" name="component-list"/>
        <DemoLink label="Mask" name="component-mask"/>
        <DemoLink label="Menu" name="component-menu"/>
        <DemoLink label="MenuButton" name="component-menu-button"/>
        <DemoLink label="MenuCountry" name="component-menu-country"/>
        <DemoLink label="Motion Axis" name="component-motion-axis"/>
        <DemoLink label="Motion Transform" name="component-motion-transform"/>
        <DemoLink label="Page Area" name="component-page-area"/>
        <DemoLink label="Progress" name="component-progress"/>
        <DemoLink label="Radio" name="component-radio"/>
        <DemoLink label="Scrollbar" name="component-scrollbar"/>
        <DemoLink label="Select" name="component-select"/>
        <DemoLink label="Snackbar" name="component-snackbar"/>
        <DemoLink label="Switch" name="component-switch"/>
        <DemoLink label="Tabs" name="component-tabs"/>
        <DemoLink label="Tooltip" name="component-tooltip"/>
        <DemoLink label="Window" name="component-window"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
