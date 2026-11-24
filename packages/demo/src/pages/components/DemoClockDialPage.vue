<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface ClockDialExposed {
  getValue: () => number | undefined
  setValue: (value?: number) => void
}

const { eventName, onEvent } = useDemoEvent()

const value12 = ref<number>(3)
const value24 = ref<number>(15)
const valueMinute = ref<number>(25)
const valueSecond = ref<number>(45)
const valueConstraint = ref<number>(6)
const valueEvent = ref<number>(0)

const clockHour = ref<number>(10)
const clockMinute = ref<number>(15)
const clockSecond = ref<number>(30)

const dialRef = ref<ClockDialExposed>()
const exposedReadout = ref<string>('')

const onAdvanceClock = () => {
  clockHour.value = (clockHour.value + 1) % 12 || 12
  clockMinute.value = (clockMinute.value + 15) % 60
  clockSecond.value = (clockSecond.value + 15) % 60
}

const onReadExpose = () => {
  exposedReadout.value = String(dialRef.value?.getValue())
}

const onSetExpose = (nextValue: number) => {
  dialRef.value?.setValue(nextValue)
  exposedReadout.value = String(dialRef.value?.getValue())
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ClockDial">
    <D1Section>
      <D1Group label="Types & v-model">
        <DemoFlex data-testid="demo-clock-dial-types">
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="value12" data-testid="demo-clock-dial-12" type="12" />
            <DemoValue data-testid="demo-clock-dial-12-value" :value="`12h: ${value12}`" />
          </div>
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="value24" data-testid="demo-clock-dial-24" type="24" />
            <DemoValue data-testid="demo-clock-dial-24-value" :value="`24h: ${value24}`" />
          </div>
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="valueMinute" data-testid="demo-clock-dial-minute" type="minute" />
            <DemoValue data-testid="demo-clock-dial-minute-value" :value="`min: ${valueMinute}`" />
          </div>
          <div class="demo-clock-dial-page__card">
            <D1ClockDial v-model="valueSecond" data-testid="demo-clock-dial-second" type="second" />
            <DemoValue data-testid="demo-clock-dial-second-value" :value="`sec: ${valueSecond}`" />
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
            />
            <DemoValue data-testid="demo-clock-dial-range-value" :value="`3..9: ${valueConstraint}`" />
          </div>
          <D1ClockDial
            data-testid="demo-clock-dial-step"
            type="minute"
            :value="15"
            :step="5"
          />
          <D1ClockDial
            data-testid="demo-clock-dial-24-range"
            type="24"
            :value="14"
            :min="8"
            :max="18"
            :step="2"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="States">
        <DemoFlex data-testid="demo-clock-dial-states">
          <D1ClockDial data-testid="demo-clock-dial-disabled" type="12" :value="6" disabled />
          <D1ClockDial data-testid="demo-clock-dial-readonly" type="12" :value="9" readonly />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex data-testid="demo-clock-dial-palettes">
          <D1ClockDial type="12" :value="2" palette="red" />
          <D1ClockDial type="12" :value="4" palette="green" />
          <D1ClockDial type="12" :value="8" palette="blue" />
          <D1ClockDial type="12" :value="10" palette="purple" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots & Boundaries">
        <DemoFlex data-testid="demo-clock-dial-slots">
          <D1ClockDial data-testid="demo-clock-dial-slot-default" type="12" :value="0">
            <template #default>UTC</template>
          </D1ClockDial>
          <D1ClockDial data-testid="demo-clock-dial-slot-item" type="12" :value="3">
            <template #item="{ item }">
              <span>{{ item.value }}h</span>
            </template>
          </D1ClockDial>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoFlex>
          <D1Button
            data-testid="demo-clock-dial-set-6"
            size="sm"
            outline
            label="Set 6"
            @click="onSetExpose(6)"
          />
          <D1Button
            data-testid="demo-clock-dial-set-0"
            size="sm"
            outline
            label="Set 0"
            @click="onSetExpose(0)"
          />
          <D1Button
            data-testid="demo-clock-dial-get"
            size="sm"
            outline
            label="Get Value"
            @click="onReadExpose"
          />
        </DemoFlex>
        <DemoFlex>
          <D1ClockDial
            ref="dialRef"
            v-model="valueEvent"
            data-testid="demo-clock-dial-events"
            type="24"
            @input="(event, value) => onEvent('input', event, value)"
            @input-lite="(value) => onEvent('inputLite', value)"
            @change="(event, value) => onEvent('change', event, value)"
            @change-lite="(value) => onEvent('changeLite', value)"
          />
        </DemoFlex>
        <DemoValue data-testid="demo-clock-dial-event-output" :value="eventName" />
        <DemoValue data-testid="demo-clock-dial-expose-output" :value="`model: ${valueEvent} | expose: ${exposedReadout}`" />
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
  }
}
</style>
