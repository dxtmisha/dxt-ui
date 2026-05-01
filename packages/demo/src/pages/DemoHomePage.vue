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
        <DemoLink label="Icon" name="component-icon"/>
        <DemoLink label="Image" name="component-image"/>
        <DemoLink label="Progress" name="component-progress"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
