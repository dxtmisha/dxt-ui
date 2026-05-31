<script setup lang="ts">
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import { D1Button, type ButtonProps } from '@dxtmisha/d1/D1Button'

const { eventName, onEvent } = useDemoEvent()

const list = [
  { label: 'Cancel', text: true, value: 'cancel' },
  { label: 'Apply', primary: true, value: 'apply' }
]

const listSecondary: ButtonProps[] = [
  { label: 'Delete', palette: 'red', text: true, value: 'delete' }
]

const manyItems = [
  { label: 'Reset', text: true, value: 'reset' },
  { label: 'Skip', outline: true, value: 'skip' },
  { label: 'Back', outline: true, value: 'back' },
  { label: 'Submit', primary: true, value: 'submit' }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Actions">
    <D1Section>
      <D1Group label="Basic List (list & secondary)">
        <D1Actions :list="list" />
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
        <D1Actions align="left">
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

      <D1Group label="Events">
        <D1Actions
          :list="list"
          :listSecondary="listSecondary"
          @click="(event, value) => onEvent('click', event, value)"
          @click-lite="(value) => onEvent('clickLite', value)"
        />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
