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
        <DemoLink label="Button" name="component-button"/>
        <DemoLink label="ClientOnly" name="component-client-only"/>
        <DemoLink label="Icon" name="component-icon"/>
        <DemoLink label="Image" name="component-image"/>
        <DemoLink label="Input" name="component-input"/>
        <DemoLink label="Mask" name="component-mask"/>
        <DemoLink label="Page Area" name="component-page-area"/>
        <DemoLink label="Progress" name="component-progress"/>
        <DemoLink label="Snackbar" name="component-snackbar"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
