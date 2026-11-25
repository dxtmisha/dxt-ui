<script setup lang="ts">
import { ref } from 'vue'
import type { ClockDialEventItem, ClockDialExpose } from '@dxtmisha/constructor/ClockDial'
import type { ClockDialProps } from '@dxtmisha/d1/D1ClockDial'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: readonly NonNullable<ClockDialProps['palette']>[] = [
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

const value12 = ref<number | undefined>(3)
const value24 = ref<number>(15)
const valueMinute = ref<number>(25)
const valueSecond = ref<number>(45)
const valueConstraint = ref<number>(6)
const valueEvent = ref<number | undefined>(0)

const clockHour = ref<number>(10)
const clockMinute = ref<number>(15)
const clockSecond = ref<number>(30)

const dialRef = ref<ClockDialExpose | null>(null)
const dialContainerRef = ref<HTMLElement | null>(null)
const exposedReadout = ref<string>('No expose action executed yet')
const blockedTriggerCount = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)

const onAdvanceClock = (): void => {
  clockHour.value = (clockHour.value + 1) % 12 || 12
  clockMinute.value = (clockMinute.value + 15) % 60
  clockSecond.value = (clockSecond.value + 15) % 60
}

const onReadExpose = (): void => {
  exposedReadout.value = `getValue(): ${JSON.stringify(dialRef.value?.getValue())}`
}

const onSetExpose = (nextValue?: number): void => {
  dialRef.value?.setValue(nextValue)
  exposedReadout.value = `setValue(${String(nextValue)}) -> getValue(): ${JSON.stringify(dialRef.value?.getValue())}`
}

const onSelectBottomCoordinate = (): void => {
  const containerElement = dialContainerRef.value
  if (!containerElement) {
    return
  }

  const boundingRect = containerElement.getBoundingClientRect()
  const targetX = boundingRect.left + boundingRect.width / 2
  const targetY = boundingRect.bottom - 24
  const selectedMark = dialRef.value?.selectByCoordinates(targetX, targetY) ?? null

  exposedReadout.value = `selectByCoordinates() -> ${JSON.stringify(selectedMark ? { name: selectedMark.name, value: selectedMark.value } : null)}`
}

const onBlockedInteraction = (): void => {
  blockedTriggerCount.value += 1
}

const onInputEvent = (eventItem: ClockDialEventItem, value: number): void => {
  recordEvent('input', { eventItem, value })
}

const onChangeEvent = (eventItem: ClockDialEventItem, value: number): void => {
  recordEvent('change', { eventItem, value })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ClockDial">
    <D1Section>
      <D1Group label="Types, v-model & Programmatic Controls">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-dial-set-12-9"
            size="sm"
            outline
            label="Set 12h = 9"
            @click="value12 = 9"
          />
          <D1Button
            data-testid="demo-clock-dial-clear-12"
            size="sm"
            outline
            label="Clear 12h"
            @click="value12 = undefined"
          />
          <D1Button
            data-testid="demo-clock-dial-set-24-0"
            size="sm"
            outline
            label="Set 24h = 0"
            @click="value24 = 0"
          />
        </DemoFlex>
        <DemoFlex data-testid="demo-clock-dial-types">
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="value12" data-testid="demo-clock-dial-12" type="12" aria-label="12-hour dial"/>
            <DemoValue data-testid="demo-clock-dial-12-value" :value="`12h: ${value12}`"/>
          </div>
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="value24" data-testid="demo-clock-dial-24" type="24" aria-label="24-hour dial"/>
            <DemoValue data-testid="demo-clock-dial-24-value" :value="`24h: ${value24}`"/>
          </div>
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="valueMinute" data-testid="demo-clock-dial-minute" type="minute" aria-label="Minute dial"/>
            <DemoValue data-testid="demo-clock-dial-minute-value" :value="`min: ${valueMinute}`"/>
          </div>
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="valueSecond" data-testid="demo-clock-dial-second" type="second" aria-label="Second dial"/>
            <DemoValue data-testid="demo-clock-dial-second-value" :value="`sec: ${valueSecond}`"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Clock Display Mode & Show Time">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-dial-advance"
            size="sm"
            outline
            label="Advance Time"
            @click="onAdvanceClock"
          />
        </DemoFlex>
        <DemoFlex data-testid="demo-clock-dial-clock-mode">
          <D1ClockDial
            data-testid="demo-clock-dial-clock"
            clock
            :hour="clockHour"
            :minute="clockMinute"
            :second="clockSecond"
          />
          <D1ClockDial
            data-testid="demo-clock-dial-clock-time"
            clock
            show-time
            :hour="clockHour"
            :minute="clockMinute"
            :second="clockSecond"
          />
          <D1ClockDial
            data-testid="demo-clock-dial-clock-24"
            clock
            show-time
            type="24"
            :hour="18"
            :minute="45"
          />
          <D1ClockDial
            data-testid="demo-clock-dial-clock-hour-only"
            clock
            :hour="3"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Step, Min & Max Constraints">
        <DemoFlex data-testid="demo-clock-dial-constraints">
          <div class="demo-clock-dial-page__card">
            <D1ClockDial
              v-model="valueConstraint"
              data-testid="demo-clock-dial-range"
              type="12"
              :min="3"
              :max="9"
              aria-label="Constrained 12-hour dial"
            />
            <DemoValue data-testid="demo-clock-dial-range-value" :value="`3..9: ${valueConstraint}`"/>
          </div>
          <D1ClockDial
            data-testid="demo-clock-dial-step"
            type="minute"
            :value="15"
            :step="5"
            aria-label="Step 5 minute dial"
          />
          <D1ClockDial
            data-testid="demo-clock-dial-24-range"
            type="24"
            :value="14"
            min="8"
            max="18"
            step="2"
            aria-label="String range 24-hour dial"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Blocked & Guarded States (Disabled, Readonly, Clock)">
        <DemoFlex data-testid="demo-clock-dial-states">
          <D1ClockDial
            data-testid="demo-clock-dial-disabled"
            type="12"
            :value="6"
            disabled
            aria-label="Disabled dial"
            @input="onBlockedInteraction"
            @change="onBlockedInteraction"
          />
          <D1ClockDial
            data-testid="demo-clock-dial-readonly"
            type="12"
            :value="9"
            readonly
            aria-label="Readonly dial"
            @input="onBlockedInteraction"
            @change="onBlockedInteraction"
          />
          <D1ClockDial
            data-testid="demo-clock-dial-clock-blocked"
            clock
            :hour="12"
            :minute="0"
            @input="onBlockedInteraction"
            @change="onBlockedInteraction"
          />
        </DemoFlex>
        <DemoValue data-testid="demo-clock-dial-blocked-count" label="Blocked Interaction Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="All 24 Palettes">
        <DemoFlex data-testid="demo-clock-dial-palettes">
          <div
            v-for="(paletteName, index) in paletteList"
            :key="paletteName"
            class="demo-clock-dial-page__card"
          >
            <D1ClockDial
              type="12"
              :value="(index % 12) + 1"
              :palette="paletteName"
              :aria-label="`Palette ${paletteName} dial`"
            />
            <DemoValue label="Palette" :value="paletteName"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots (#default & #item Scoped)">
        <DemoFlex data-testid="demo-clock-dial-slots">
          <D1ClockDial data-testid="demo-clock-dial-slot-default" type="12" :value="3" aria-label="Custom default slot dial">
            <template #default>UTC+7</template>
          </D1ClockDial>
          <D1ClockDial data-testid="demo-clock-dial-slot-item" type="12" :value="3" aria-label="Custom item slot dial">
            <template #item="{ item }">
              <span>{{ item.value }}h</span>
            </template>
          </D1ClockDial>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-dial-set-6"
            size="sm"
            outline
            label="setValue(6)"
            @click="onSetExpose(6)"
          />
          <D1Button
            data-testid="demo-clock-dial-set-0"
            size="sm"
            outline
            label="setValue(0)"
            @click="onSetExpose(0)"
          />
          <D1Button
            data-testid="demo-clock-dial-set-undefined"
            size="sm"
            outline
            label="setValue(undefined)"
            @click="onSetExpose(undefined)"
          />
          <D1Button
            data-testid="demo-clock-dial-get"
            size="sm"
            outline
            label="getValue()"
            @click="onReadExpose"
          />
          <D1Button
            data-testid="demo-clock-dial-select-coords"
            size="sm"
            outline
            label="selectByCoordinates(bottom)"
            @click="onSelectBottomCoordinate"
          />
        </DemoFlex>
        <div ref="dialContainerRef" class="demo-clock-dial-page__card">
          <D1ClockDial
            ref="dialRef"
            v-model="valueEvent"
            data-testid="demo-clock-dial-events"
            type="24"
            aria-label="Event tracking 24-hour dial"
            @input="onInputEvent"
            @input-lite="(value) => recordEvent('inputLite', value)"
            @change="onChangeEvent"
            @change-lite="(value) => recordEvent('changeLite', value)"
            @update:model-value="(value) => recordEvent('update:modelValue', value)"
            @update:value="(value) => recordEvent('update:value', value)"
          />
        </div>
        <DemoValue data-testid="demo-clock-dial-event-output" label="Event Name" :value="eventName"/>
        <DemoValue data-testid="demo-clock-dial-event-payload" label="Payload" :value="eventPayload"/>
        <DemoValue data-testid="demo-clock-dial-expose-output" label="Expose Output" :value="`model: ${valueEvent} | ${exposedReadout}`"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex data-testid="demo-clock-dial-boundaries">
          <D1ClockDial
            data-testid="demo-clock-dial-zero-12"
            type="12"
            :value="0"
            aria-label="Zero value 12h dial"
          >
            <template #default>0</template>
          </D1ClockDial>
          <D1ClockDial
            data-testid="demo-clock-dial-negative"
            type="12"
            :value="-5"
            aria-label="Negative value dial"
          >
            <template #default>Tiếng Việt / Кириллица / 🚀</template>
          </D1ClockDial>
          <D1ClockDial
            data-testid="demo-clock-dial-decimal-xss"
            type="24"
            :value="3.5"
            aria-label="Decimal and XSS slot dial"
          >
            <template #default>&lt;img src=x onerror=alert(1)&gt;</template>
          </D1ClockDial>
          <DemoBox class="demo-clock-dial-page__narrow-box" data-testid="demo-clock-dial-narrow">
            <D1ClockDial type="12" :value="12" aria-label="Narrow box dial">
              <template #default>UnbrokenLongCenterTextWithoutSpaces1234567890</template>
            </D1ClockDial>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-dial-toggle-mount"
            size="sm"
            outline
            :label="isLifecycleMounted ? 'Unmount ClockDial' : 'Mount ClockDial'"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1ClockDial
          v-if="isLifecycleMounted"
          data-testid="demo-clock-dial-lifecycle"
          type="12"
          :value="6"
          aria-label="Lifecycle mounted dial"
        />
        <DemoValue data-testid="demo-clock-dial-mounted" label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-clock-dial-page {
  &__card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    max-width: 100%;
  }

  &__narrow-box {
    width: 100%;
    max-width: 280px;
    overflow-wrap: anywhere;
  }
}
</style>
