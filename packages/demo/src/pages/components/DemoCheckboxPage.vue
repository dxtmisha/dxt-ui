<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { CheckboxExpose } from '@dxtmisha/constructor/Checkbox'
import type { CheckboxProps } from '@dxtmisha/d1/D1Checkbox'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<CheckboxProps['palette']>[] = [
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

const adaptiveModes: NonNullable<CheckboxProps['adaptive']>[] = [
  'rightAlways',
  'rightSm',
  'rightMd',
  'rightLg',
  'rightXl',
  'right2xl'
]

const containerModes: NonNullable<CheckboxProps['container']>[] = [
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

const exposeTarget = ref<CheckboxExpose | null>(null)
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
  <D1Page label="Checkbox">
    <D1Section>
      <D1Group label="Basic & v-model Controls">
        <D1Checkbox
          v-model="modelValue"
          label="Default"
        />
        <DemoFlex align="center">
          <D1Button label="Set True" size="sm" outline @click="modelValue = true"/>
          <D1Button label="Set False" size="sm" outline @click="modelValue = false"/>
          <D1Button label="Toggle" size="sm" outline @click="modelValue = !modelValue"/>
        </DemoFlex>
        <DemoValue label="Default Value" :value="modelValue"/>

        <D1Checkbox
          v-model="modelValueTrue"
          label="Checked by default"
        />
        <DemoValue label="Checked Value" :value="modelValueTrue"/>
      </D1Group>

      <D1Group label="Selected & Value Variant">
        <D1Checkbox
          v-model:selected="selectedVariant"
          name="variant-group"
          value-variant="alpha"
          value-variant-hide="none"
          label="Option Alpha"
        />
        <D1Checkbox
          v-model:selected="selectedVariant"
          name="variant-group"
          value-variant="beta"
          value-variant-hide="none"
          label="Option Beta"
        />
        <DemoFlex align="center">
          <D1Button label="Select Alpha" size="sm" outline @click="selectedVariant = 'alpha'"/>
          <D1Button label="Select Beta" size="sm" outline @click="selectedVariant = 'beta'"/>
          <D1Button label="Clear Variant" size="sm" outline @click="selectedVariant = 'none'"/>
        </DemoFlex>
        <DemoValue label="v-model:selected" :value="selectedVariant"/>

        <D1Checkbox
          v-model:model-selected="selectedModelVariant"
          name="model-selected-group"
          value-variant="first"
          value-variant-hide="0"
          label="ModelSelected First"
        />
        <D1Checkbox
          v-model:model-selected="selectedModelVariant"
          name="model-selected-group"
          value-variant="second"
          value-variant-hide="0"
          label="ModelSelected Second"
        />
        <DemoValue label="v-model:modelSelected" :value="selectedModelVariant"/>
      </D1Group>

      <D1Group label="Indeterminate">
        <D1Checkbox
          v-model="modelIndeterminate"
          label="Indeterminate state"
          indeterminate
        />
        <D1Checkbox
          :model-value="true"
          label="Indeterminate checked"
          indeterminate
        />
        <DemoValue label="Indeterminate Model" :value="modelIndeterminate"/>
      </D1Group>

      <D1Group label="Appearances & Messages">
        <D1Checkbox label="Required" required/>
        <D1Checkbox label="With Description" description="This is a description for the checkbox"/>
        <D1Checkbox
          label="With Helper Message"
          helper-message="This is a helper message"
        />
        <D1Checkbox
          label="HTML Helper Message"
          has-html-code
          helper-message="Helper with <strong>strong</strong> markup"
        />
        <D1Checkbox
          label="With Warning Message"
          warning
          warning-message="Warning: Double-check this option"
        />
        <D1Checkbox
          label="With Validation Message"
          validation-message="Error: This field is required"
        />
        <D1Checkbox
          label="Disabled with forceShowMessage"
          disabled
          force-show-message
          helper-message="Visible even when disabled"
        />
        <D1Checkbox
          label="Custom FieldMessage Attrs"
          helper-message="Styled via fieldMessageAttrs"
          :field-message-attrs="{ hasHtmlCode: true }"
        />
      </D1Group>

      <D1Group label="Layout & Container (All 5)">
        <D1Checkbox label="Full Width (block)" block/>
        <D1Checkbox label="Content Width" :block="false"/>
        <D1Checkbox
          label="Item Center"
          item-center
          description="This description helps to see how the checkbox is centered relative to the text."
        />
        <D1Checkbox
          label="Item Top"
          :item-center="false"
          description="This description helps to see how the checkbox is aligned to the top of the text."
        />
        <DemoBox
          v-for="containerMode in containerModes"
          :key="containerMode"
          container
        >
          <D1Checkbox
            :label="`Container Adaptive (${containerMode})`"
            :container="containerMode"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Adaptive (All 6)">
        <D1Checkbox
          v-for="adaptiveMode in adaptiveModes"
          :key="adaptiveMode"
          :label="`Adaptive (${adaptiveMode})`"
          :adaptive="adaptiveMode"
        />
      </D1Group>

      <D1Group label="States & Interactive Toggles">
        <D1Checkbox label="Disabled" disabled/>
        <D1Checkbox label="Disabled Checked" disabled :model-value="true"/>
        <D1Checkbox label="Readonly" readonly/>
        <D1Checkbox label="Readonly Checked" readonly :model-value="true"/>
        <D1Checkbox label="Focus" focus/>
        <D1Checkbox label="Loading (boolean)" loading/>
        <D1Checkbox label="Loading (object)" :loading="{ visible: true, circular: true }" :model-value="true"/>

        <D1Skeleton :active="isDynamicSkeleton">
          <D1Checkbox
            v-model="isDynamicChecked"
            label="Dynamic Target Checkbox"
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
        <D1Checkbox
          label="Blocked Disabled"
          disabled
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <D1Checkbox
          label="Blocked Readonly"
          readonly
          :model-value="true"
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <D1Checkbox
          label="Blocked Loading"
          loading
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Skeleton">
        <D1Skeleton :active="true">
          <D1Checkbox is-skeleton label="Loading checkbox" description="Skeleton description"/>
          <D1Checkbox is-skeleton :model-value="true" label="Checked skeleton"/>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <div class="demo-checkbox-page__palettes">
          <D1Checkbox
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
        <D1Checkbox label="Custom Icon (string)" icon-checkbox="home" :model-value="true"/>
        <D1Checkbox label="Custom Icon (object)" :icon-checkbox="{ value: 'verified' }" :model-value="true"/>
        <D1Checkbox label="Custom Indeterminate Icon" indeterminate icon-indeterminate="close" :model-value="true"/>
        <D1Checkbox label="Null Icon" :icon-checkbox="null" :model-value="true"/>
      </D1Group>

      <D1Group label="Slots">
        <D1Checkbox>
          <template #default>
            <strong>Custom Label Slot</strong>
          </template>
          <template #description>
            <em>Custom Description Slot</em>
          </template>
        </D1Checkbox>
      </D1Group>

      <D1Group label="Expose & Validation">
        <D1Checkbox
          ref="exposeTarget"
          name="exposed-checkbox"
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
        <form id="demo-checkbox-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <D1Checkbox
            v-model="formChecked"
            form="demo-checkbox-form"
            name="terms-agreement"
            label="I accept the terms and conditions"
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
        <D1Checkbox
          label="Event Tracker"
          :detail="{ source: 'demo-checkbox' }"
          @update:model-value="handleUpdateModelValue"
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

      <D1Group label="Accessibility (ARIA & Attributes)">
        <D1Checkbox
          id="demo-checkbox-a11y"
          label="Explicit ARIA Identifiers"
          description="Links labelId, descriptionId, and helperId cleanly"
          helper-message="Assistive helper hint"
          label-id="demo-checkbox-label-id"
          description-id="demo-checkbox-desc-id"
          helper-id="demo-checkbox-helper-id"
          :tabindex="0"
        />
        <D1Checkbox
          :input-attrs="{ 'aria-label': 'Standalone checkbox without visible label' }"
        />
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1Checkbox label="" :input-attrs="{ 'aria-label': 'Empty label checkbox' }"/>
        <D1Checkbox label="   " :input-attrs="{ 'aria-label': 'Whitespace label checkbox' }"/>
        <D1Checkbox :label="0" :description="0" :model-value="false"/>
        <D1Checkbox :label="-42" :description="-3.14" :model-value="true"/>
        <D1Checkbox :label="3.14" description="Decimal numeric label"/>
        <D1Checkbox label="A"/>
        <D1Checkbox
          label="Tiếng Việt / Кириллица / 🚀 & <>"
          description="Multilingual text and emojis rendered safely"
        />
        <D1Checkbox
          label="<img src=x onerror=alert(1)>"
          description="<script>alert('xss')</script>"
        />
        <D1Checkbox
          label="Very long multi-sentence checkbox label designed to verify wrapping behavior and alignment against the checkbox control across desktop and mobile viewports"
          description="Extended multi-sentence description verifying clean vertical flow without clipping"
        />
        <DemoBox class="demo-checkbox-page__narrow" size="sm">
          <D1Checkbox
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
        <D1Checkbox
          v-if="isLifecycleMounted"
          label="Mounted Checkbox"
          :model-value="true"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-checkbox-page {
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
