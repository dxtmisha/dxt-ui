<script setup lang="ts">
import { ref } from 'vue'
import type { InputCodeExpose } from '@dxtmisha/constructor/InputCode'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const codeVal1 = ref<string>('')
const codeVal2 = ref<string>('123456')
const codeVal3 = ref<string>('1234')
const alphaCode = ref<string>('A1')
const exposeRef = ref<InputCodeExpose>()
const exposeCode = ref<string>('')
const exposeReadout = ref<string>('')
const dynamicDisabled = ref<boolean>(false)
const dynamicValidation = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const callGetValue = (): void => {
  exposeReadout.value = exposeRef.value?.getValue() ?? ''
}

const callSet = (value: string): void => {
  exposeRef.value?.set(value)
  exposeReadout.value = value
}

const callReset = (): void => {
  exposeRef.value?.reset()
  exposeReadout.value = exposeRef.value?.getValue() ?? ''
}

const callFocus = (): void => {
  exposeRef.value?.focus()
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="InputCode">
    <D1Section>
      <D1Block label="General Usage & Sizes">
        <D1Group label="Basic (4 Digits, v-model)">
          <D1InputCode
            v-model="codeVal1"
            label="SMS Code"
            helper-message="Enter 4 digits received via SMS"
            placeholder="0"
            data-testid="ic-basic"
          />
          <DemoValue :value="codeVal1" data-testid="ic-basic-val" />
        </D1Group>

        <D1Group label="6 Digits & Controlled Value">
          <D1InputCode
            v-model:value="codeVal2"
            :length="6"
            label="6-Digit Security Code"
            placeholder="•"
            data-testid="ic-length-6"
          />
          <DemoValue :value="codeVal2" />
        </D1Group>

        <D1Group label="Sizes (sm, md, lg)">
          <DemoFlex>
            <D1InputCode size="sm" label="Small (sm)" :length="4" placeholder="S" />
            <D1InputCode size="md" label="Medium (md)" :length="4" placeholder="M" />
            <D1InputCode size="lg" label="Large (lg)" :length="4" placeholder="L" />
          </DemoFlex>
        </D1Group>
      </D1Block>

      <D1Block label="Feedback, Validation & States">
        <D1Group label="Success & Loading">
          <D1InputCode
            v-model="codeVal3"
            :success="true"
            label="Verified Code"
            helper-message="Code matched successfully"
            data-testid="ic-success"
          />
          <D1InputCode
            :loading="true"
            label="Verifying..."
            helper-message="Please wait while verifying"
            data-testid="ic-loading"
          />
        </D1Group>

        <D1Group label="Validation, Warning & Force Show Message">
          <DemoFlex>
            <D1Button
              :label="dynamicValidation ? 'Clear Validation' : 'Trigger Validation'"
              data-testid="ic-toggle-validation"
              @click="dynamicValidation = !dynamicValidation"
            />
            <D1Button
              :label="dynamicDisabled ? 'Enable Disabled' : 'Set Disabled'"
              outline
              data-testid="ic-toggle-disabled"
              @click="dynamicDisabled = !dynamicDisabled"
            />
          </DemoFlex>
          <D1InputCode
            label="Validation Code"
            :validation="dynamicValidation"
            :validation-message="dynamicValidation ? 'Incorrect verification code' : undefined"
            warning-message="2 attempts remaining"
            data-testid="ic-validation"
          />
          <D1InputCode
            label="Disabled + Force Show Message"
            :disabled="dynamicDisabled"
            :force-show-message="true"
            helper-message="Shown even when disabled"
            data-testid="ic-disabled"
          />
        </D1Group>

        <D1Group label="Hide, Match (Alphanumeric) & Skeleton">
          <D1InputCode
            :hide="true"
            label="Hidden PIN"
            placeholder="•"
            data-testid="ic-hide"
          />
          <D1InputCode
            v-model="alphaCode"
            :match="/[a-zA-Z0-9]/"
            input-mode="text"
            autocomplete="off"
            label="Alphanumeric Coupon Code"
            data-testid="ic-alpha"
          />
          <DemoValue :value="alphaCode" />
          <D1Skeleton :active="true">
            <D1InputCode
              :is-skeleton="true"
              label="Loading Code"
              helper-message="Skeleton placeholder"
              data-testid="ic-skeleton"
            />
          </D1Skeleton>
        </D1Group>
      </D1Block>

      <D1Block label="Expose API & Events">
        <D1Group label="Programmatic Control & Event Tracker">
          <DemoFlex>
            <D1Button label="Set 9876" data-testid="ic-btn-set" @click="callSet('9876')" />
            <D1Button label="Get Value" outline data-testid="ic-btn-get" @click="callGetValue" />
            <D1Button label="Reset" outline data-testid="ic-btn-reset" @click="callReset" />
            <D1Button label="Focus" outline data-testid="ic-btn-focus" @click="callFocus" />
          </DemoFlex>
          <D1InputCode
            ref="exposeRef"
            v-model="exposeCode"
            label="Expose Controlled"
            name="expose-otp"
            data-testid="ic-expose"
            @input="(value) => { exposeReadout = value; onEvent('input', value) }"
          />
          <DemoValue :value="exposeReadout" data-testid="ic-expose-readout" />
          <DemoValue :value="eventName" data-testid="ic-event-log" />
        </D1Group>
      </D1Block>

      <D1Block label="Layout, Narrow Container & Lifecycle">
        <D1Group label="Narrow Container (max-width: 260px)">
          <DemoBox style="max-width: 260px;" data-testid="ic-narrow-box">
            <D1InputCode
              :length="6"
              label="Compact 6-digit OTP"
              placeholder="0"
              data-testid="ic-narrow"
            />
          </DemoBox>
        </D1Group>

        <D1Group label="Lifecycle Toggle (v-if Mount/Unmount)">
          <DemoFlex>
            <D1Button
              :label="isMounted ? 'Unmount InputCode' : 'Mount InputCode'"
              data-testid="ic-toggle-mount"
              @click="isMounted = !isMounted"
            />
          </DemoFlex>
          <D1InputCode
            v-if="isMounted"
            label="Conditional OTP"
            helper-message="Mounted dynamically"
            data-testid="ic-conditional"
          />
        </D1Group>
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
