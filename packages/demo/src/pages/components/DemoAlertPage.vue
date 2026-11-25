<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps } from '@dxtmisha/d1/D1Alert'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('none')

const recordEvent = (name: string, ...args: unknown[]): void => {
  onEvent(name, ...args)
  try {
    const serialized = args.map((item) => {
      if (typeof Event !== 'undefined' && item instanceof Event) {
        return item.type
      }
      return item
    })
    eventPayload.value = serialized.length > 0 ? JSON.stringify(serialized) : 'no payload'
  } catch {
    eventPayload.value = name
  }
}

const dismissibleKey = ref(0)
const iconTurned = ref(false)
const iconHidden = ref(false)
const actionsHidden = ref(false)
const skeletonActive = ref(true)
const lifecycleMounted = ref(true)

const palettes: readonly NonNullable<AlertProps['palette']>[] = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
]

const onRestoreDismissible = (): void => {
  dismissibleKey.value += 1
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Alert">
    <D1Section>
      <D1Group label="Basic">
        <D1Alert
          label="Default Alert"
          description="This is a simple alert message with a title and description."
        />
        <D1Alert
          label="Label Only Alert"
        />
        <D1Alert
          description="Description only alert without a heading label."
        />
        <D1Alert
          :label="0"
          :description="0"
          label-id="demo-alert-zero-label"
          description-id="demo-alert-zero-description"
        />
      </D1Group>

      <D1Group label="Icons">
        <D1Alert
          label="Leading Icon"
          description="Alert with a standard leading icon."
          icon="info"
        />
        <D1Alert
          label="Leading & Trailing Icons"
          description="Alert displaying both leading and trailing icons."
          icon="notifications"
          icon-trailing="chevron_right"
        />
        <D1Alert
          label="Object Leading & Trailing Icons"
          description="Icons configured as objects with semantic palettes."
          :icon="{ icon: 'verified', palette: 'green' }"
          :icon-trailing="{ icon: 'arrow_forward', palette: 'blue' }"
        />
        <D1Alert
          label="Interactive Icon Modifiers"
          description="Toggle iconTurn and iconHide dynamically."
          icon="expand_more"
          :icon-turn="iconTurned"
          :icon-hide="iconHidden"
          icon-dir
          :icon-attrs="{ size: 'lg' }"
        />
        <DemoFlex>
          <D1Button
            label="Toggle Icon Turn"
            secondary
            size="sm"
            @click="iconTurned = !iconTurned"
          />
          <D1Button
            label="Toggle Icon Hide"
            secondary
            size="sm"
            @click="iconHidden = !iconHidden"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Close Button">
        <DemoFlex :key="dismissibleKey" direction="column">
          <D1Alert
            label="Dismissible Alert"
            description="Click the close button to fade out and remove this alert."
            icon="info"
            close-button
            @close="recordEvent('close')"
          />
          <D1Alert
            label="Custom Close Icon & Label"
            description="Dismissible alert with custom iconClose and localized textClose aria-label."
            close-button
            icon-close="cancel"
            text-close="Dismiss notification"
            @close="recordEvent('close')"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            label="Restore Dismissed Alerts"
            secondary
            size="sm"
            @click="onRestoreDismissible"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Trailing Button">
        <D1Alert
          label="String Trailing Button"
          description="Trailing action button passed as a simple string."
          icon="cloud_done"
          button="Undo"
          @click="(event, value) => recordEvent('click', event, value)"
          @click-lite="(value) => recordEvent('clickLite', value)"
        />
        <D1Alert
          label="Numeric 0 Button"
          description="Trailing button displaying numeric zero."
          :button="0"
          @click="(event, value) => recordEvent('click', event, value)"
          @click-lite="(value) => recordEvent('clickLite', value)"
        />
        <D1Alert
          label="Object Trailing Button"
          description="Trailing button configured with object props and value."
          icon="sync"
          :button="{ label: 'Retry Sync', primary: true, size: 'sm', value: 'retry-sync' }"
          @click="(event, value) => recordEvent('click', event, value)"
          @click-lite="(value) => recordEvent('clickLite', value)"
        />
        <D1Alert
          label="Disabled Trailing Button"
          description="Blocked button state ensures disabled clicks do not fire."
          :button="{ label: 'Disabled Action', disabled: true, size: 'sm', value: 'disabled-action' }"
          @click="(event, value) => recordEvent('click', event, value)"
          @click-lite="(value) => recordEvent('clickLite', value)"
        />
        <D1Alert
          label="Icon-Only Trailing Button"
          description="Trailing button rendered with only an icon and value."
          :button="{ icon: 'arrow_forward', size: 'sm', value: 'open-details', 'aria-label': 'Open details' }"
          close-button
          @click="(event, value) => recordEvent('click', event, value)"
          @click-lite="(value) => recordEvent('clickLite', value)"
          @close="recordEvent('close')"
        />
      </D1Group>

      <D1Group label="Appearances & All 24 Palettes">
        <D1Alert
          label="Primary Alert (Default Palette)"
          description="Alert rendered with primary emphasis."
          icon="info"
          primary
        />
        <D1Alert
          label="Secondary Alert (Default Style)"
          description="Alert rendered with secondary emphasis."
          icon="info"
          secondary
        />
        <D1Alert
          label="Red Palette (Primary)"
          description="Critical error alert with primary red styling."
          palette="red"
          primary
          icon="error"
          close-button
        />
        <D1Alert
          v-for="palette in palettes"
          :key="palette"
          :label="`Palette: ${palette}`"
          :description="`Alert styled with ${palette} palette.`"
          :palette="palette"
          icon="palette"
        />
      </D1Group>

      <D1Group label="Alignment (itemCenter)">
        <D1Alert
          label="Centered Content (default)"
          description="Content is vertically centered relative to the icon and close button."
          icon="info"
          close-button
          item-center
        />
        <D1Alert
          label="Top Aligned Content"
          description="Content is aligned to the top. This is useful for multi-line descriptions so the leading icon and close button stay anchored to the first line instead of floating in the middle of a tall text block."
          icon="info"
          close-button
          :item-center="false"
        />
      </D1Group>

      <D1Group label="Actions & Links">
        <D1Alert
          label="Actions and Interactive Links"
          description="Alert combining interactive inline links, a primary action, and a secondary action."
          icon="info"
          :links="[
            { label: 'View changelog', value: 'changelog' },
            { label: 'Migration guide', value: 'migration' },
            { label: 'External docs', href: '#docs' }
          ]"
          :actions-list="[
            { label: 'Accept', value: 'accept', size: 'sm' }
          ]"
          :actions-secondary="[
            { label: 'Learn more', value: 'learn-more', outline: true, size: 'sm' }
          ]"
          :actions-hide="actionsHidden"
          @link="(event, value) => recordEvent('link', event, value)"
          @link-lite="(value) => recordEvent('linkLite', value)"
          @actions="(event, value) => recordEvent('actions', event, value)"
          @actions-lite="(value) => recordEvent('actionsLite', value)"
        />
        <D1Alert
          label="Custom actionsAttrs Alignment"
          description="Forwards actionsAttrs={ align: 'left' } to the embedded D1Actions block."
          :actions-list="[
            { label: 'Confirm', value: 'confirm', size: 'sm' }
          ]"
          :actions-attrs="{ align: 'left' }"
          @actions="(event, value) => recordEvent('actions', event, value)"
          @actions-lite="(value) => recordEvent('actionsLite', value)"
        />
        <D1Alert
          label="Links Without Dividers (linksAttrs)"
          description="Custom linksAttrs passes divider: false to all rendered links."
          :links="[
            { label: 'First action', value: 'first' },
            { label: 'Second action', value: 'second' }
          ]"
          :links-attrs="{ divider: false }"
          @link="(event, value) => recordEvent('link', event, value)"
          @link-lite="(value) => recordEvent('linkLite', value)"
        />
        <DemoFlex>
          <D1Button
            label="Toggle Actions Hide"
            secondary
            size="sm"
            @click="actionsHidden = !actionsHidden"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots">
        <D1Alert icon="star">
          <template #default>
            <span>Custom Default Label Slot</span>
          </template>
          <template #description>
            <span>Custom description rendered via the description slot.</span>
          </template>
          <template #body>
            <div class="demo-alert-page__body-slot">
              Custom HTML content rendered inside the body slot.
            </div>
          </template>
          <template #trailing>
            <span class="demo-alert-page__trailing-slot">
              Custom Trailing
            </span>
          </template>
        </D1Alert>
      </D1Group>

      <D1Group label="Skeleton & Lifecycle">
        <DemoFlex>
          <D1Button
            :label="`Toggle Skeleton (${skeletonActive ? 'on' : 'off'})`"
            size="sm"
            outline
            @click="skeletonActive = !skeletonActive"
          />
          <D1Button
            :label="lifecycleMounted ? 'Unmount Alert' : 'Mount Alert'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
        </DemoFlex>
        <D1Skeleton :active="skeletonActive">
          <D1Alert
            label="Skeleton Loading Alert"
            description="Displays skeleton placeholder blocks while active."
            icon="info"
          />
        </D1Skeleton>
        <D1Alert
          v-if="lifecycleMounted"
          label="Conditional Lifecycle Alert"
          description="Mounted and unmounted cleanly via v-if."
          icon="check_circle"
        />
        <DemoValue label="Mounted" :value="lifecycleMounted" />
      </D1Group>

      <D1Group label="Accessibility">
        <D1Alert
          label="Status Banner (Polite)"
          description="Uses role='status' and aria-live='polite' for non-intrusive updates."
          role="status"
          aria-live="polite"
          icon="info"
        />
        <D1Alert
          label="Urgent Alert (Assertive)"
          description="Uses role='alert' and aria-live='assertive' for critical notifications."
          role="alert"
          aria-live="assertive"
          palette="red"
          icon="error"
        />
        <D1Alert
          label="Static Region (aria-live='off')"
          description="Uses role='region' and aria-live='off' for static notices."
          role="region"
          aria-live="off"
          icon="article"
        />
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1Alert />
        <D1Alert
          label=""
          description="   "
        />
        <D1Alert
          label="A"
          :description="-12.5"
        />
        <D1Alert
          label="Long Unbroken Content & Overflow Protection"
          description="SuperLongUnbrokenTokenWithoutAnySpacesOrHyphensToVerifyWordWrappingBehavior1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz — alongside a regular multi-sentence paragraph explaining system behavior on narrow viewports."
          icon="warning"
          close-button
          :item-center="false"
        />
        <D1Alert
          label="Unicode • Tiếng Việt • Кириллица 🚀"
          description="Multilingual notice: Hệ thống hoạt động ổn định — Системное оповещение работает корректно."
          :links="[]"
          icon="translate"
        />
        <D1Alert
          label="<script>alert('xss')</script>"
          description="<img src=x onerror=alert(1)> safely escaped as plain text."
          icon="security"
        />
        <DemoBox class="demo-alert-page__narrow-box">
          <D1Alert
            label="Constrained Box Alert"
            description="Verifies wrapping inside a narrow container."
            icon="info"
            close-button
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Events">
        <D1Alert
          label="Button & Close Event Tracker"
          description="Click the trailing button or close button to inspect click and close events."
          :button="{ label: 'Trigger', size: 'sm', value: 'trigger-click' }"
          close-button
          @click="(event, value) => recordEvent('click', event, value)"
          @click-lite="(value) => recordEvent('clickLite', value)"
          @close="recordEvent('close')"
        />
        <D1Alert
          label="Links & Actions Event Tracker"
          description="Click the inline link or action button to inspect link and actions events."
          :links="[{ label: 'Sample Link', value: 'sample-link' }]"
          :actions-list="[{ label: 'Sample Action', value: 'sample-action', size: 'sm' }]"
          @link="(event, value) => recordEvent('link', event, value)"
          @link-lite="(value) => recordEvent('linkLite', value)"
          @actions="(event, value) => recordEvent('actions', event, value)"
          @actions-lite="(value) => recordEvent('actionsLite', value)"
        />
        <DemoValue :value="eventName" />
        <DemoValue label="Payload" :value="eventPayload" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-alert-page {
  &__body-slot {
    padding-top: 8px;
  }

  &__trailing-slot {
    font-weight: 600;
  }

  &__narrow-box {
    max-width: 280px;
  }
}
</style>
