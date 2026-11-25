<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { type ClockPeriodExpose, ClockPeriodType } from '@dxtmisha/constructor/ClockPeriod'
import type { ClockPeriodProps } from '@dxtmisha/d1/D1ClockPeriod'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: readonly NonNullable<ClockPeriodProps['palette']>[] = [
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

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const recordEvent = (name: string, ...args: unknown[]): void => {
  onEvent(name, ...args)
  try {
    const serialized = args.map((argument) => {
      if (typeof Event !== 'undefined' && argument instanceof Event) {
        return argument.type
      }
      return argument
    })
    eventPayload.value = serialized.length > 0 ? JSON.stringify(serialized) : 'no payload'
  } catch {
    eventPayload.value = name
  }
}

const periodVertical = ref<ClockPeriodType>(ClockPeriodType.am)
const periodHorizontal = ref<ClockPeriodType>(ClockPeriodType.pm)
const periodEvent = ref<ClockPeriodType>(ClockPeriodType.am)

const periodRef = ref<ClockPeriodExpose | null>(null)
const exposedReadout = ref<string>('No expose action executed yet')
const blockedTriggerCount = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)

const dynamicTextAm = (): string => 'Day'
const dynamicTextPm = (): string => 'Night'

const onSetPeriod = (nextValue?: ClockPeriodType): void => {
  periodRef.value?.set(nextValue)
  exposedReadout.value = `set(${String(nextValue)}) -> get(): ${String(periodRef.value?.get())}`
}

const onSetByHour = (hour?: number): void => {
  periodRef.value?.setByHour(hour)
  exposedReadout.value = `setByHour(${String(hour)}) -> get(): ${String(periodRef.value?.get())}`
}

const onGetPeriod = (): void => {
  exposedReadout.value = `get(): ${String(periodRef.value?.get())}`
}

const onBlockedClick = (): void => {
  blockedTriggerCount.value += 1
}

const onPeriodClick = (mouseEvent: MouseEvent, clickValue: EventClickValue): void => {
  recordEvent('click', { eventType: mouseEvent.type, value: clickValue })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ClockPeriod">
    <D1Section>
      <D1Group label="Orientations, v-model & Programmatic Controls">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-period-toggle-vertical"
            size="sm"
            outline
            label="Toggle Vertical"
            @click="periodVertical = periodVertical === ClockPeriodType.am ? ClockPeriodType.pm : ClockPeriodType.am"
          />
          <D1Button
            data-testid="demo-clock-period-reset-horizontal"
            size="sm"
            outline
            label="Reset Horizontal to AM"
            @click="periodHorizontal = ClockPeriodType.am"
          />
        </DemoFlex>
        <DemoFlex data-testid="demo-clock-period-orientations">
          <div class="demo-clock-period-page__card">
            <D1ClockPeriod
              v-model="periodVertical"
              data-testid="demo-clock-period-vertical"
              orientation="vertical"
              aria-label="Vertical time period"
            />
            <DemoValue data-testid="demo-clock-period-vertical-value" :value="`vertical: ${periodVertical}`"/>
          </div>
          <div class="demo-clock-period-page__card">
            <D1ClockPeriod
              v-model="periodHorizontal"
              data-testid="demo-clock-period-horizontal"
              orientation="horizontal"
              aria-label="Horizontal time period"
            />
            <DemoValue data-testid="demo-clock-period-horizontal-value" :value="`horizontal: ${periodHorizontal}`"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Initial Values & Normalization">
        <DemoFlex data-testid="demo-clock-period-values">
          <D1ClockPeriod data-testid="demo-clock-period-am" :value="ClockPeriodType.am" aria-label="Initial AM"/>
          <D1ClockPeriod data-testid="demo-clock-period-pm" :value="ClockPeriodType.pm" aria-label="Initial PM"/>
          <D1ClockPeriod data-testid="demo-clock-period-empty" aria-label="Default empty period"/>
          <D1ClockPeriod data-testid="demo-clock-period-normalized" :value="('  PM  ' as ClockPeriodType)" aria-label="Normalized PM period"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Blocked & Guarded States (Disabled & Readonly)">
        <DemoFlex data-testid="demo-clock-period-states">
          <D1ClockPeriod
            data-testid="demo-clock-period-disabled"
            :value="ClockPeriodType.am"
            disabled
            aria-label="Disabled period"
            @click="onBlockedClick"
            @click-lite="onBlockedClick"
          />
          <D1ClockPeriod
            data-testid="demo-clock-period-readonly"
            :value="ClockPeriodType.pm"
            readonly
            aria-label="Readonly period"
            @click="onBlockedClick"
            @click-lite="onBlockedClick"
          />
        </DemoFlex>
        <DemoValue data-testid="demo-clock-period-blocked-count" label="Blocked Click Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Custom Labels (String & Callback Function)">
        <DemoFlex data-testid="demo-clock-period-labels">
          <D1ClockPeriod
            data-testid="demo-clock-period-custom"
            orientation="horizontal"
            :value="ClockPeriodType.am"
            text-am="Morning"
            text-pm="Evening"
            aria-label="String custom labels"
          />
          <D1ClockPeriod
            data-testid="demo-clock-period-callback"
            orientation="horizontal"
            :value="ClockPeriodType.pm"
            :text-am="dynamicTextAm"
            :text-pm="dynamicTextPm"
            aria-label="Function callback labels"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="All 24 Palettes">
        <DemoFlex data-testid="demo-clock-period-palettes">
          <div
            v-for="(paletteName, index) in paletteList"
            :key="paletteName"
            class="demo-clock-period-page__card"
          >
            <D1ClockPeriod
              :value="index % 2 === 0 ? ClockPeriodType.am : ClockPeriodType.pm"
              orientation="horizontal"
              :palette="paletteName"
              :aria-label="`Palette ${paletteName} period`"
            />
            <DemoValue label="Palette" :value="paletteName"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-period-set-am"
            size="sm"
            outline
            label="set(am)"
            @click="onSetPeriod(ClockPeriodType.am)"
          />
          <D1Button
            data-testid="demo-clock-period-set-pm"
            size="sm"
            outline
            label="set(pm)"
            @click="onSetPeriod(ClockPeriodType.pm)"
          />
          <D1Button
            data-testid="demo-clock-period-set-undefined"
            size="sm"
            outline
            label="set(undefined)"
            @click="onSetPeriod(undefined)"
          />
          <D1Button
            data-testid="demo-clock-period-hour-0"
            size="sm"
            outline
            label="setByHour(0)"
            @click="onSetByHour(0)"
          />
          <D1Button
            data-testid="demo-clock-period-hour-9"
            size="sm"
            outline
            label="setByHour(9)"
            @click="onSetByHour(9)"
          />
          <D1Button
            data-testid="demo-clock-period-hour-12"
            size="sm"
            outline
            label="setByHour(12)"
            @click="onSetByHour(12)"
          />
          <D1Button
            data-testid="demo-clock-period-hour-21"
            size="sm"
            outline
            label="setByHour(21)"
            @click="onSetByHour(21)"
          />
          <D1Button
            data-testid="demo-clock-period-get"
            size="sm"
            outline
            label="get()"
            @click="onGetPeriod"
          />
        </DemoFlex>
        <D1ClockPeriod
          ref="periodRef"
          v-model="periodEvent"
          data-testid="demo-clock-period-events"
          orientation="horizontal"
          aria-label="Event tracking period"
          @click="onPeriodClick"
          @click-lite="(value) => recordEvent('clickLite', value)"
          @update:model-value="(value) => recordEvent('update:modelValue', value)"
          @update:value="(value) => recordEvent('update:value', value)"
        />
        <DemoValue data-testid="demo-clock-period-event-output" label="Event Name" :value="eventName"/>
        <DemoValue data-testid="demo-clock-period-event-payload" label="Payload" :value="eventPayload"/>
        <DemoValue data-testid="demo-clock-period-expose-output" label="Expose Output" :value="`model: ${periodEvent} | ${exposedReadout}`"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex data-testid="demo-clock-period-boundaries">
          <D1ClockPeriod
            data-testid="demo-clock-period-empty-labels"
            orientation="horizontal"
            :value="ClockPeriodType.am"
            text-am=""
            text-pm="   "
            aria-label="Empty and whitespace labels"
          />
          <D1ClockPeriod
            data-testid="demo-clock-period-unicode"
            orientation="horizontal"
            :value="ClockPeriodType.pm"
            text-am="Sáng / Утро ☀️"
            text-pm="Tối / Вечер 🌙"
            aria-label="Unicode labels"
          />
          <D1ClockPeriod
            data-testid="demo-clock-period-xss"
            orientation="horizontal"
            :value="ClockPeriodType.am"
            text-am="<img src=x onerror=alert(1)>"
            text-pm="Safe PM"
            aria-label="XSS escaped labels"
          />
          <DemoBox class="demo-clock-period-page__narrow-box" data-testid="demo-clock-period-narrow">
            <D1ClockPeriod
              orientation="horizontal"
              :value="ClockPeriodType.am"
              text-am="SuperLongUnbrokenMorningLabel123456"
              text-pm="SuperLongUnbrokenEveningLabel789012"
              aria-label="Narrow box period"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-period-toggle-mount"
            size="sm"
            outline
            :label="isLifecycleMounted ? 'Unmount ClockPeriod' : 'Mount ClockPeriod'"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1ClockPeriod
          v-if="isLifecycleMounted"
          data-testid="demo-clock-period-lifecycle"
          orientation="horizontal"
          :value="ClockPeriodType.am"
          aria-label="Lifecycle mounted period"
        />
        <DemoValue data-testid="demo-clock-period-mounted" label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-clock-period-page {
  &__card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    max-width: 100%;
  }

  &__narrow-box {
    width: 100%;
    max-width: 260px;
    overflow-wrap: anywhere;

    .d1-clockPeriod {
      max-width: 100%;
    }

    .d1-clockPeriod__item {
      min-width: 0;
      overflow-wrap: anywhere;
    }
  }
}
</style>
