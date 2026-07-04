<script setup lang="ts">
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Alert">
    <D1Section>
      <D1Group label="Basic">
        <D1Alert
          label="Default Alert"
          description="This is a simple alert message."
        />
        <D1Alert
          label="Alert with Icon"
          description="This is an alert message with a leading icon."
          icon="info"
        />
      </D1Group>

      <D1Group label="Close Button">
        <D1Alert
          label="Dismissible Alert"
          description="This alert has a close button. Click on the close button to close it."
          closeButton
          @close="onEvent('close')"
        />
        <D1Alert
          label="Custom Close Icon"
          description="Dismissible alert with a custom close icon name."
          closeButton
          iconClose="home"
          @close="onEvent('close')"
        />
      </D1Group>

      <D1Group label="Appearances">
        <D1Alert
          label="Primary Alert"
          description="Alert with primary style."
          primary
        />
        <D1Alert
          label="Secondary Alert"
          description="Alert with secondary style (default behavior)."
          secondary
        />
      </D1Group>

      <D1Group label="Palettes">
        <D1Alert
          label="Slate Palette"
          description="Alert styled with slate palette."
          palette="slate"
          icon="info"
        />
        <D1Alert
          label="Red Palette"
          description="Alert styled with red palette (critical error)."
          palette="red"
          icon="error"
        />
        <D1Alert
          label="Green Palette"
          description="Alert styled with green palette (success message)."
          palette="green"
          icon="check"
        />
        <D1Alert
          label="Blue Palette"
          description="Alert styled with blue palette (info message)."
          palette="blue"
          icon="info"
        />
        <D1Alert
          label="Amber Palette"
          description="Alert styled with amber palette (warning message)."
          palette="amber"
          icon="warning"
        />
      </D1Group>

      <D1Group label="Alignment (itemCenter)">
        <D1Alert
          label="Centered Content (default)"
          description="Content is centered relative to the icon and close button."
          icon="info"
          closeButton
          itemCenter
        />
        <D1Alert
          label="Top Aligned Content"
          description="Content is aligned to the top. This is particularly useful for longer descriptions that span multiple lines, preventing the close button or icon from centering awkwardly next to a large block of text."
          icon="info"
          closeButton
          :itemCenter="false"
        />
      </D1Group>

      <D1Group label="Actions & Links">
        <D1Alert
          label="Actions and Links Alert"
          description="This alert displays navigation links at the bottom and action buttons."
          icon="info"
          :links="[
            { label: 'First Link', href: '#' },
            { label: 'Second Link', href: '#' }
          ]"
          :actions-list="[
            { label: 'Accept', value: 'accept' },
            { label: 'Decline', value: 'decline' }
          ]"
          @link="(event, value) => onEvent('link', event, value)"
          @link-lite="(value) => onEvent('linkLite', value)"
          @actions="(event, value) => onEvent('actions', event, value)"
          @actions-lite="(value) => onEvent('actionsLite', value)"
        />
      </D1Group>

      <D1Group label="Slots">
        <D1Alert label="Default / Body Slot Alert">
          <template #body>
            <div style="padding-top: 8px;">
              Custom HTML content inside the body slot.
            </div>
          </template>
        </D1Alert>
        <D1Alert label="Trailing Slot Alert">
          <template #trailing>
            <span style="font-weight: bold; color: var(--sys-palette-primary)">
              Custom Trailing Text
            </span>
          </template>
        </D1Alert>
      </D1Group>

      <D1Group label="Events">
        <D1Alert
          label="Event Tracker"
          description="Perform any close, link click, or action interaction to see event logs."
          closeButton
          :links="[{ label: 'Sample Link', value: 'sample-link' }]"
          :actions-list="[{ label: 'Sample Action', value: 'sample-action' }]"
          @close="onEvent('close')"
          @link="(event, value) => onEvent('link', event, value)"
          @link-lite="(value) => onEvent('linkLite', value)"
          @actions="(event, value) => onEvent('actions', event, value)"
          @actions-lite="(value) => onEvent('actionsLite', value)"
        />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
</style>
