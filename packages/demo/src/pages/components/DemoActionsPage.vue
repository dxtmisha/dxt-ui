<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const list = [
  { label: 'Cancel', text: true },
  { label: 'Apply', primary: true }
]

const listSecondary = [
  { label: 'Delete', palette: 'red', text: true }
]

const manyItems = [
  { label: 'Reset', text: true },
  { label: 'Skip', outline: true },
  { label: 'Back', outline: true },
  { label: 'Submit', primary: true }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Actions">
    <D1Section>
      <D1Group label="Basic List (list prop)">
        <D1Actions :list="list" />
      </D1Group>

      <D1Group label="Primary & Secondary Lists">
        <D1Actions :list="list" :listSecondary="listSecondary" />
      </D1Group>

      <D1Group label="Slots (default & secondary)">
        <D1Actions>
          <template #default>
            <D1Button label="Default Slot 1" primary />
            <D1Button label="Default Slot 2" />
          </template>
          <template #secondary>
            <D1Button label="Secondary Slot" text />
          </template>
        </D1Actions>
      </D1Group>

      <D1Group label="Align & Flexible">
        <D1Actions :list="list" align="left" />
        <D1Actions :list="list" align="center" />
        <D1Actions :list="list" align="block" />
      </D1Group>

      <D1Group label="Button Attributes (shared styles)">
        <D1Actions
          :list="list"
          :buttonAttrs="{ size: 'xs', palette: 'purple' }"
          :buttonSecondaryAttrs="{ size: 'xl' }"
          :listSecondary="listSecondary"
        />
      </D1Group>

      <D1Group label="Wrap & Many Items">
        <D1Actions :list="manyItems" :wrap="false" />
        <D1Actions :list="manyItems" wrap />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
