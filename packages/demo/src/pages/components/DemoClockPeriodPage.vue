<script setup lang="ts">
import { ref } from 'vue'
import { ClockPeriodType } from '@dxtmisha/constructor/ClockPeriod'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface ClockPeriodExposed {
  get: () => ClockPeriodType | undefined
  set: (value?: ClockPeriodType) => void
  setByHour: (hour?: number) => void
}

const { eventName, onEvent } = useDemoEvent()

const periodVertical = ref<ClockPeriodType>(ClockPeriodType.am)
const periodHorizontal = ref<ClockPeriodType>(ClockPeriodType.pm)
const periodEvent = ref<ClockPeriodType>(ClockPeriodType.am)

const periodRef = ref<ClockPeriodExposed>()
const exposedReadout = ref<string>('')

const onSetPeriod = (nextValue: ClockPeriodType) => {
  periodRef.value?.set(nextValue)
  exposedReadout.value = String(periodRef.value?.get())
}

const onSetByHour = (hour: number) => {
  periodRef.value?.setByHour(hour)
  exposedReadout.value = String(periodRef.value?.get())
}

const onGetPeriod = () => {
  exposedReadout.value = String(periodRef.value?.get())
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ClockPeriod">
    <D1Section>
      <D1Group label="Orientations & v-model">
        <DemoFlex data-testid="demo-clock-period-orientations">
          <div class="demo-clock-period-page__card">
            <D1ClockPeriod
              v-model="periodVertical"
              data-testid="demo-clock-period-vertical"
              orientation="vertical"
            />
            <DemoValue data-testid="demo-clock-period-vertical-value" :value="`vertical: ${periodVertical}`" />
          </div>
          <div class="demo-clock-period-page__card">
            <D1ClockPeriod
              v-model="periodHorizontal"
              data-testid="demo-clock-period-horizontal"
              orientation="horizontal"
            />
            <DemoValue data-testid="demo-clock-period-horizontal-value" :value="`horizontal: ${periodHorizontal}`" />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Initial Values">
        <DemoFlex data-testid="demo-clock-period-values">
          <D1ClockPeriod data-testid="demo-clock-period-am" value="am" />
          <D1ClockPeriod data-testid="demo-clock-period-pm" value="pm" />
          <D1ClockPeriod data-testid="demo-clock-period-empty" />
        </DemoFlex>
      </D1Group>

      <D1Group label="States">
        <DemoFlex data-testid="demo-clock-period-states">
          <D1ClockPeriod data-testid="demo-clock-period-disabled" value="am" disabled />
          <D1ClockPeriod data-testid="demo-clock-period-readonly" value="pm" readonly />
        </DemoFlex>
      </D1Group>

      <D1Group label="Custom Labels & Boundaries">
        <DemoFlex data-testid="demo-clock-period-labels">
          <D1ClockPeriod
            data-testid="demo-clock-period-custom"
            orientation="horizontal"
            value="am"
            text-am="Morning"
            text-pm="Evening"
          />
          <D1ClockPeriod
            data-testid="demo-clock-period-unicode"
            orientation="horizontal"
            value="pm"
            text-am="Sáng / Утро ☀️"
            text-pm="Tối / Вечер 🌙"
          />
          <D1ClockPeriod
            data-testid="demo-clock-period-xss"
            orientation="horizontal"
            value="am"
            text-am="<img src=x onerror=alert(1)>"
            text-pm="Safe PM"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex data-testid="demo-clock-period-palettes">
          <D1ClockPeriod value="am" palette="red" />
          <D1ClockPeriod value="pm" palette="green" />
          <D1ClockPeriod value="am" palette="blue" />
          <D1ClockPeriod value="pm" palette="orange" />
          <D1ClockPeriod value="am" palette="purple" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-period-set-am"
            size="sm"
            outline
            label="Set AM"
            @click="onSetPeriod(ClockPeriodType.am)"
          />
          <D1Button
            data-testid="demo-clock-period-set-pm"
            size="sm"
            outline
            label="Set PM"
            @click="onSetPeriod(ClockPeriodType.pm)"
          />
          <D1Button
            data-testid="demo-clock-period-hour-9"
            size="sm"
            outline
            label="Hour 9 (AM)"
            @click="onSetByHour(9)"
          />
          <D1Button
            data-testid="demo-clock-period-hour-21"
            size="sm"
            outline
            label="Hour 21 (PM)"
            @click="onSetByHour(21)"
          />
          <D1Button
            data-testid="demo-clock-period-get"
            size="sm"
            outline
            label="Get Value"
            @click="onGetPeriod"
          />
        </DemoFlex>
        <D1ClockPeriod
          ref="periodRef"
          v-model="periodEvent"
          data-testid="demo-clock-period-events"
          orientation="horizontal"
          @click="(event, value) => onEvent('click', event, value)"
          @click-lite="(value) => onEvent('clickLite', value)"
        />
        <DemoValue data-testid="demo-clock-period-event-output" :value="eventName" />
        <DemoValue data-testid="demo-clock-period-expose-output" :value="`model: ${periodEvent} | expose: ${exposedReadout}`" />
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
  }
}
</style>
