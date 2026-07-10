<script setup lang="ts">
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Avatar">
    <D1Section>
      <D1Group label="Basic & Initials Reduction">
        <DemoFlex>
          <D1Avatar label="Misha Ivanov" />
          <D1Avatar label="Misha Ivanov" :reduction="false" />
          <D1Avatar label="A" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex align="center">
          <D1Avatar label="xs" size="xs" />
          <D1Avatar label="sm" size="sm" />
          <D1Avatar label="md" size="md" />
          <D1Avatar label="lg" size="lg" />
          <D1Avatar label="xl" size="xl" />
        </DemoFlex>
      </D1Group>

      <D1Group label="With Image">
        <DemoFlex align="center">
          <D1Avatar image="https://picsum.photos/100/100?random=1" size="xs" />
          <D1Avatar image="https://picsum.photos/100/100?random=2" size="sm" />
          <D1Avatar image="https://picsum.photos/100/100?random=3" size="md" />
          <D1Avatar image="https://picsum.photos/100/100?random=4" size="lg" />
          <D1Avatar image="https://picsum.photos/100/100?random=5" size="xl" />
        </DemoFlex>
      </D1Group>

      <D1Group label="With Badges">
        <DemoFlex align="center">
          <D1Avatar label="John Doe" badgeDot />
          <D1Avatar label="Jane Smith" badge="5" />
          <D1Avatar image="https://picsum.photos/100/100?random=6" badge="new" />
          <D1Avatar
            image="https://picsum.photos/100/100?random=7"
            :badge="{ label: '99', palette: 'blue' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes / Colors">
        <DemoFlex>
          <D1Avatar label="Red Palette" palette="red" />
          <D1Avatar label="Green Palette" palette="green" />
          <D1Avatar label="Blue Palette" palette="blue" />
          <D1Avatar label="Orange Palette" palette="orange" />
          <D1Avatar label="Purple Palette" palette="purple" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Special States">
        <DemoFlex align="center">
          <D1Avatar label="Primary Theme" primary />
          <D1Avatar label="Disabled State" disabled />
          <D1Avatar label="Readonly State" readonly />
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Avatar
            label="Click Event"
            primary
            @click="onEvent('click')"
          />
        </DemoFlex>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
