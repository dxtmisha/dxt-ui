<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { SwitchExpose } from '@dxtmisha/constructor/Switch'
import type { SwitchProps } from '@dxtmisha/d1/D1Switch'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<SwitchProps['palette']>[] = [
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

const adaptiveModes: NonNullable<SwitchProps['adaptive']>[] = [
  'rightAlways',
  'rightSm',
  'rightMd',
  'rightLg',
  'rightXl',
  'right2xl'
]

const containerModes: NonNullable<SwitchProps['container']>[] = [
  'rightSm',
  'rightMd',
  'rightLg',
  'rightXl',
  'right2xl'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const modelValue = ref<boolean>(false)
const modelValueTrue = ref<boolean>(true)
const modelIndeterminate = ref<boolean>(false)
const selectedVariant = ref<string>('alpha')
const selectedModelVariant = ref<string>('first')

const isDynamicChecked = ref<boolean>(false)
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicIndeterminate = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const blockedTriggerCount = ref<number>(0)

const formChecked = ref<boolean>(false)
const formStatus = ref<string>('Not submitted')

const exposeTarget = ref<SwitchExpose | null>(null)
const exposeResult = ref<Record<string, unknown>>({})

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleInputEvent = (
  domEvent: Event,
  validationItem: FieldValidationItem<boolean>
): void => {
  trackEvent('input', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleInputLiteEvent = (validationItem: FieldValidationItem<boolean>): void => {
  trackEvent('inputLite', {
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeEvent = (
  domEvent: Event,
  validationItem: FieldValidationItem<boolean>
): void => {
  trackEvent('change', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeLiteEvent = (validationItem: FieldValidationItem<boolean>): void => {
  trackEvent('changeLite', {
    value: validationItem.value,
    detail: validationItem.detail,
    status: validationItem.status
  })
}

const handleFocusEvent = (focusEvent: FocusEvent): void => {
  trackEvent('focus', { eventType: focusEvent.type })
}

const handleBlurEvent = (focusEvent: FocusEvent): void => {
  trackEvent('blur', { eventType: focusEvent.type })
}

const handleUpdateModelValue = (nextValue: boolean): void => {
  trackEvent('update:modelValue', { value: nextValue })
}

const handleUpdateValue = (nextValue: boolean): void => {
  trackEvent('update:value', { value: nextValue })
}

const handleBlockedEvent = (): void => {
  blockedTriggerCount.value += 1
}

const syncExposeState = async (): Promise<void> => {
  await nextTick()
  exposeResult.value = {
    value: exposeTarget.value?.getValue(),
    changed: exposeTarget.value?.isChanged(),
    valid: exposeTarget.value?.checkValidity(),
    message: exposeTarget.value?.getValidationMessage()
  }
}

const setExposeValue = async (nextValue: boolean): Promise<void> => {
  exposeTarget.value?.setValue(nextValue)
  await syncExposeState()
}

const clearExposeValue = async (): Promise<void> => {
  exposeTarget.value?.clear()
  await syncExposeState()
}

const handleFormSubmit = (): void => {
  formStatus.value = formChecked.value ? 'Form submitted (valid)' : 'Form blocked (required)'
}

const handleFormReset = (): void => {
  formChecked.value = false
  formStatus.value = 'Form reset'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Switch">
    <D1Section>
      <D1Group label="Basic & v-model Controls">
        <D1Switch
          v-model="modelValue"
          label="Default"
        />
        <DemoFlex align="center">
          <D1Button label="Set True" size="sm" outline @click="modelValue = true"/>
          <D1Button label="Set False" size="sm" outline @click="modelValue = false"/>
          <D1Button label="Toggle" size="sm" outline @click="modelValue = !modelValue"/>
        </DemoFlex>
        <DemoValue label="Default Value" :value="modelValue"/>

        <D1Switch
          v-model="modelValueTrue"
          label="Checked by default"
        />
        <DemoValue label="Checked Value" :value="modelValueTrue"/>
      </D1Group>

      <D1Group label="Selected & Value Variant">
        <D1Switch
          v-model:selected="selectedVariant"
          name="switch-variant-group"
          value-variant="alpha"
          value-variant-hide="none"
          label="Variant Alpha"
        />
        <D1Switch
          v-model:selected="selectedVariant"
          name="switch-variant-group"
          value-variant="beta"
          value-variant-hide="none"
          label="Variant Beta"
        />
        <DemoFlex align="center">
          <D1Button label="Select Alpha" size="sm" outline @click="selectedVariant = 'alpha'"/>
          <D1Button label="Select Beta" size="sm" outline @click="selectedVariant = 'beta'"/>
          <D1Button label="Clear Variant" size="sm" outline @click="selectedVariant = 'none'"/>
        </DemoFlex>
        <DemoValue label="v-model:selected" :value="selectedVariant"/>

        <D1Switch
          v-model:model-selected="selectedModelVariant"
          name="switch-model-selected-group"
          value-variant="first"
          value-variant-hide="0"
          label="ModelSelected First"
        />
        <D1Switch
          v-model:model-selected="selectedModelVariant"
          name="switch-model-selected-group"
          value-variant="second"
          value-variant-hide="0"
          label="ModelSelected Second"
        />
        <DemoValue label="v-model:modelSelected" :value="selectedModelVariant"/>
      </D1Group>

      <D1Group label="Indeterminate">
        <D1Switch
          v-model="modelIndeterminate"
          label="Indeterminate state"
          indeterminate
        />
        <D1Switch
          :model-value="true"
          label="Indeterminate checked"
          indeterminate
        />
        <DemoValue label="Indeterminate Model" :value="modelIndeterminate"/>
      </D1Group>

      <D1Group label="Appearances & Messages">
        <D1Switch label="Required" required/>
        <D1Switch label="With Description" description="This is a description for the switch"/>
        <D1Switch
          label="With Helper Message"
          helper-message="This is a helper message"
        />
        <D1Switch
          label="HTML Helper Message"
          has-html-code
          helper-message="Helper with <strong>strong</strong> markup"
        />
        <D1Switch
          label="With Warning Message"
          warning
          warning-message="Warning: Changing this option affects background sync"
        />
        <D1Switch
          label="With Validation Message"
          validation-message="Error: This field is required"
        />
        <D1Switch
          label="Disabled with forceShowMessage"
          disabled
          force-show-message
          helper-message="Visible even when disabled"
        />
        <D1Switch
          label="Custom FieldMessage Attrs"
          helper-message="Styled via fieldMessageAttrs"
          :field-message-attrs="{ hasHtmlCode: true }"
        />
      </D1Group>

      <D1Group label="Layout & Container (All 5)">
        <D1Switch label="Full Width (block)" block/>
        <D1Switch label="Content Width" :block="false"/>
        <D1Switch
          label="Item Center"
          item-center
          description="This description helps to see how the switch is centered relative to the text."
        />
        <D1Switch
          label="Item Top"
          :item-center="false"
          description="This description helps to see how the switch is aligned to the top of the text."
        />
        <DemoBox
          v-for="containerMode in containerModes"
          :key="containerMode"
          container
        >
          <D1Switch
            :label="`Container Adaptive (${containerMode})`"
            :container="containerMode"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Adaptive (All 6)">
        <D1Switch
          v-for="adaptiveMode in adaptiveModes"
          :key="adaptiveMode"
          :label="`Adaptive (${adaptiveMode})`"
          :adaptive="adaptiveMode"
        />
      </D1Group>

      <D1Group label="States & Interactive Toggles">
        <D1Switch label="Disabled" disabled/>
        <D1Switch label="Disabled Checked" disabled :model-value="true"/>
        <D1Switch label="Readonly" readonly/>
        <D1Switch label="Readonly Checked" readonly :model-value="true"/>
        <D1Switch label="Focus" focus/>
        <D1Switch label="Loading (boolean)" loading/>
        <D1Switch label="Loading (object)" :loading="{ visible: true, circular: true }" :model-value="true"/>

        <D1Skeleton :active="isDynamicSkeleton">
          <D1Switch
            v-model="isDynamicChecked"
            label="Dynamic Target Switch"
            description="Toggle disabled, readonly, loading, indeterminate, and skeleton flags"
            :disabled="isDynamicDisabled"
            :readonly="isDynamicReadonly"
            :loading="isDynamicLoading"
            :indeterminate="isDynamicIndeterminate"
            :is-skeleton="isDynamicSkeleton"
          />
        </D1Skeleton>
        <DemoFlex align="center">
          <D1Button label="Toggle Checked" size="sm" outline @click="isDynamicChecked = !isDynamicChecked"/>
          <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Loading" size="sm" outline @click="isDynamicLoading = !isDynamicLoading"/>
          <D1Button label="Toggle Indeterminate" size="sm" outline @click="isDynamicIndeterminate = !isDynamicIndeterminate"/>
          <D1Button label="Toggle Skeleton" size="sm" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
        </DemoFlex>
        <DemoValue
          label="State Flags"
          :value="{
            isDynamicChecked,
            isDynamicDisabled,
            isDynamicReadonly,
            isDynamicLoading,
            isDynamicIndeterminate,
            isDynamicSkeleton
          }"
        />
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <D1Switch
          label="Blocked Disabled"
          disabled
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <D1Switch
          label="Blocked Readonly"
          readonly
          :model-value="true"
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <D1Switch
          label="Blocked Loading"
          loading
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Skeleton">
        <D1Skeleton :active="true">
          <D1Switch is-skeleton label="Loading switch" description="Skeleton description"/>
          <D1Switch is-skeleton :model-value="true" label="Checked skeleton switch"/>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <div class="demo-switch-page__palettes">
          <D1Switch
            v-for="paletteName in paletteList"
            :key="paletteName"
            :palette="paletteName"
            :model-value="true"
            :block="false"
            :label="paletteName"
          />
        </div>
      </D1Group>

      <D1Group label="Icons">
        <D1Switch label="Custom Icon (string)" icon-checkbox="check" :model-value="true"/>
        <D1Switch label="Custom Icon (object)" :icon-checkbox="{ value: 'verified' }" :model-value="true"/>
        <D1Switch label="Custom Indeterminate Icon" indeterminate icon-indeterminate="remove" :model-value="true"/>
        <D1Switch label="Null Icon" :icon-checkbox="null" :model-value="true"/>
      </D1Group>

      <D1Group label="Slots (#default, #description)">
        <D1Switch>
          <template #default>
            <strong>Custom Label Slot</strong>
          </template>
          <template #description>
            <em>Custom Description Slot</em>
          </template>
        </D1Switch>
      </D1Group>

      <D1Group label="Expose & Validation">
        <D1Switch
          ref="exposeTarget"
          name="exposed-switch"
          label="Controlled via expose"
          required
          :validation-code="{ valueMissing: 'Custom required validation message' }"
        />
        <DemoFlex align="center">
          <D1Button label="Set True" size="sm" @click="setExposeValue(true)"/>
          <D1Button label="Set False" size="sm" outline @click="setExposeValue(false)"/>
          <D1Button label="Clear" size="sm" outline @click="clearExposeValue"/>
          <D1Button label="Check Validity" size="sm" outline @click="syncExposeState"/>
        </DemoFlex>
        <DemoValue label="Expose Output" :value="exposeResult"/>
      </D1Group>

      <D1Group label="Form Integration">
        <form id="demo-switch-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <D1Switch
            v-model="formChecked"
            form="demo-switch-form"
            name="notifications-consent"
            label="Enable required security alerts"
            required
          />
          <DemoFlex align="center">
            <D1Button label="Submit Form" tag="button" type="submit" size="sm" primary/>
            <D1Button label="Reset Form" tag="button" type="reset" size="sm" outline/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Status" :value="formStatus"/>
      </D1Group>

      <D1Group label="Events">
        <D1Switch
          label="Event Tracker"
          :detail="{ source: 'demo-switch' }"
          @update:model-value="handleUpdateModelValue"
          @update:value="handleUpdateValue"
          @input="handleInputEvent"
          @input-lite="handleInputLiteEvent"
          @change="handleChangeEvent"
          @change-lite="handleChangeLiteEvent"
          @focus="handleFocusEvent"
          @blur="handleBlurEvent"
        />
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (role='switch', ARIA & Attributes)">
        <D1Switch
          id="demo-switch-a11y"
          label="Explicit ARIA Identifiers"
          description="Renders input with role='switch' and links labelId, descriptionId, and helperId"
          helper-message="Assistive helper hint"
          label-id="demo-switch-label-id"
          description-id="demo-switch-desc-id"
          helper-id="demo-switch-helper-id"
          validation-id="demo-switch-validation-id"
          :tabindex="0"
        />
        <D1Switch
          :input-attrs="{ 'aria-label': 'Standalone switch without visible label' }"
        />
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1Switch label="" :input-attrs="{ 'aria-label': 'Empty label switch' }"/>
        <D1Switch label="   " :input-attrs="{ 'aria-label': 'Whitespace label switch' }"/>
        <D1Switch :label="0" :description="0" :model-value="false"/>
        <D1Switch :label="-42" :description="-3.14" :model-value="true"/>
        <D1Switch :label="3.14" description="Decimal numeric label"/>
        <D1Switch label="A"/>
        <D1Switch
          label="Привет · Học tiếng Việt · 🚀"
          description="Multilingual text and emojis rendered safely"
        />
        <D1Switch
          label="<img src=x onerror=alert(1)>"
          description="<script>alert('xss')</script>"
        />
        <D1Switch
          label="Very long multi-sentence switch label designed to verify wrapping behavior and alignment against the switch track across desktop and mobile viewports"
          description="Extended multi-sentence description verifying clean vertical flow without clipping"
        />
        <DemoBox class="demo-switch-page__narrow" size="sm">
          <D1Switch
            label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            description="BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1Switch
          v-if="isLifecycleMounted"
          label="Mounted Switch"
          :model-value="true"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-switch-page {
  &__palettes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
    max-width: 100%;
  }

  &__narrow {
    width: 100%;
    max-width: 220px;
  }
}
</style>
