<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { RadioExpose } from '@dxtmisha/constructor/Radio'
import type { RadioProps } from '@dxtmisha/d1/D1Radio'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<RadioProps['palette']>[] = [
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

const adaptiveModes: NonNullable<RadioProps['adaptive']>[] = [
  'rightAlways',
  'rightSm',
  'rightMd',
  'rightLg',
  'rightXl',
  'right2xl'
]

const containerModes: NonNullable<RadioProps['container']>[] = [
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
const selected = ref<string>('space')
const selectedModelVariant = ref<string>('alpha')
const selectedNumeric = ref<string>('0')
const selectedBooleanVariant = ref<string>('true')

const isDynamicChecked = ref<boolean>(false)
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicIndeterminate = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const blockedTriggerCount = ref<number>(0)

const formSelected = ref<string>('')
const formStatus = ref<string>('Not submitted')

const exposeTarget = ref<RadioExpose | null>(null)
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

const handleUpdateSelected = (nextValue: string): void => {
  trackEvent('update:selected', { value: nextValue })
}

const handleUpdateModelSelected = (nextValue: string): void => {
  trackEvent('update:modelSelected', { value: nextValue })
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
  formStatus.value = formSelected.value
    ? `Form submitted: ${formSelected.value}`
    : 'Form blocked (required)'
}

const handleFormReset = (): void => {
  formSelected.value = ''
  formStatus.value = 'Form reset'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Radio">
    <D1Section>
      <D1Group label="Basic & v-model Controls">
        <D1Radio
          v-model="modelValue"
          label="Default standalone"
        />
        <DemoFlex align="center">
          <D1Button label="Set True" size="sm" outline @click="modelValue = true"/>
          <D1Button label="Set False" size="sm" outline @click="modelValue = false"/>
        </DemoFlex>
        <DemoValue label="Standalone Value" :value="modelValue"/>

        <D1Radio
          v-model="modelValueTrue"
          label="Checked by default"
        />
        <DemoValue label="Checked Value" :value="modelValueTrue"/>

        <D1Radio
          :value="true"
          label="Controlled via value prop"
        />

        <D1Radio
          v-model:selected="selectedBooleanVariant"
          name="boolean-variant"
          :value-variant="true"
          label="Boolean valueVariant (true)"
        />
        <DemoValue label="Boolean Variant" :value="selectedBooleanVariant"/>
      </D1Group>

      <D1Group label="Basic Group (v-model:selected & v-model:modelSelected)">
        <D1Radio
          v-model:selected="selected"
          name="mission"
          value-variant="space"
          value-variant-hide="none"
          label="Space Exploration"
          description="Journey to the edge of the galaxy"
        />
        <D1Radio
          v-model:selected="selected"
          name="mission"
          value-variant="ocean"
          value-variant-hide="none"
          label="Ocean Exploration"
          description="Discover the secrets of the abyss"
        />
        <D1Radio
          v-model:selected="selected"
          name="mission"
          value-variant="forest"
          value-variant-hide="none"
          label="Forest Preservation"
          description="Protect the lungs of our planet"
        />
        <DemoFlex align="center">
          <D1Button label="Select Space" size="sm" outline @click="selected = 'space'"/>
          <D1Button label="Select Ocean" size="sm" outline @click="selected = 'ocean'"/>
          <D1Button label="Select Forest" size="sm" outline @click="selected = 'forest'"/>
        </DemoFlex>
        <DemoValue label="v-model:selected" :value="selected"/>

        <D1Radio
          v-model:model-selected="selectedModelVariant"
          name="model-selected-group"
          value-variant="alpha"
          value-variant-hide="0"
          label="ModelSelected Alpha"
        />
        <D1Radio
          v-model:model-selected="selectedModelVariant"
          name="model-selected-group"
          value-variant="beta"
          value-variant-hide="0"
          label="ModelSelected Beta"
        />
        <DemoValue label="v-model:modelSelected" :value="selectedModelVariant"/>
      </D1Group>

      <D1Group label="Appearances & Validation">
        <D1Radio label="Required" required/>
        <D1Radio label="With Description" description="This is a description for the radio button"/>
        <D1Radio label="With Helper Message" helper-message="This is a helper message"/>
        <D1Radio
          label="HTML Helper Message"
          has-html-code
          helper-message="Helper with <strong>strong</strong> markup"
        />
        <D1Radio
          label="With Warning Message"
          warning
          warning-message="Warning: Double-check this option"
        />
        <D1Radio
          label="With Validation Message"
          validation-message="Error: Please choose an option"
        />
        <D1Radio
          label="Disabled with forceShowMessage"
          disabled
          force-show-message
          helper-message="Visible even when disabled"
        />
        <D1Radio
          label="Custom FieldMessage Attrs"
          helper-message="Styled via fieldMessageAttrs"
          :field-message-attrs="{ hasHtmlCode: true }"
        />
      </D1Group>

      <D1Group label="Layout & Container (All 5)">
        <D1Radio label="Full Width (block)" block/>
        <D1Radio label="Content Width" :block="false"/>
        <D1Radio
          label="Item Center"
          item-center
          description="This description helps to see how the radio is centered relative to the text."
        />
        <D1Radio
          label="Item Top"
          :item-center="false"
          description="This description helps to see how the radio is aligned to the top of the text."
        />
        <DemoBox
          v-for="containerMode in containerModes"
          :key="containerMode"
          container
        >
          <D1Radio
            :label="`Container Adaptive (${containerMode})`"
            :container="containerMode"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Adaptive (All 6)">
        <D1Radio
          v-for="adaptiveMode in adaptiveModes"
          :key="adaptiveMode"
          :label="`Adaptive (${adaptiveMode})`"
          :adaptive="adaptiveMode"
        />
      </D1Group>

      <D1Group label="States & Interactive Toggles">
        <D1Radio label="Disabled" disabled/>
        <D1Radio label="Disabled Selected" disabled :selected="selected" value-variant="space"/>
        <D1Radio label="Readonly" readonly/>
        <D1Radio label="Readonly Selected" readonly :model-value="true"/>
        <D1Radio label="Focus" focus/>
        <D1Radio label="Indeterminate" indeterminate :model-value="true"/>
        <D1Radio label="Loading (boolean)" loading/>
        <D1Radio label="Loading (object)" :loading="{ visible: true, circular: true }" :model-value="true"/>

        <D1Skeleton :active="isDynamicSkeleton">
          <D1Radio
            v-model="isDynamicChecked"
            label="Dynamic Target Radio"
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
        <D1Radio
          label="Blocked Disabled"
          disabled
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <D1Radio
          label="Blocked Readonly"
          readonly
          :model-value="true"
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <D1Radio
          label="Blocked Loading"
          loading
          @input="handleBlockedEvent"
          @change="handleBlockedEvent"
        />
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Skeleton">
        <D1Skeleton :active="true">
          <D1Radio is-skeleton label="Loading radio" description="Skeleton description"/>
          <D1Radio is-skeleton :model-value="true" label="Checked skeleton"/>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <div class="demo-radio-page__palettes">
          <D1Radio
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
        <D1Radio label="Custom Icon (string)" icon-checkbox="home" :model-value="true"/>
        <D1Radio label="Custom Icon (object)" :icon-checkbox="{ value: 'verified' }" :model-value="true"/>
        <D1Radio label="Custom Indeterminate Icon" indeterminate icon-indeterminate="close" :model-value="true"/>
        <D1Radio label="Null Icon" :icon-checkbox="null" :model-value="true"/>
      </D1Group>

      <D1Group label="Slots">
        <D1Radio>
          <template #default>
            <strong>Custom Label Slot</strong>
          </template>
          <template #description>
            <em>Custom Description Slot</em>
          </template>
        </D1Radio>
      </D1Group>

      <D1Group label="Expose & Validation">
        <D1Radio
          ref="exposeTarget"
          name="exposed-radio"
          label="Controlled via expose"
          required
          :validation-code="{ valueMissing: 'Custom required radio validation message' }"
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
        <form id="demo-radio-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <D1Radio
            v-model:selected="formSelected"
            form="demo-radio-form"
            name="delivery-tier"
            value-variant="standard"
            label="Standard Delivery"
            required
          />
          <D1Radio
            v-model:selected="formSelected"
            form="demo-radio-form"
            name="delivery-tier"
            value-variant="express"
            label="Express Delivery"
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
        <D1Radio
          name="event-tracker-group"
          value-variant="tracked"
          label="Event Tracker (v-model)"
          :detail="{ source: 'demo-radio' }"
          @update:model-value="handleUpdateModelValue"
          @update:value="handleUpdateValue"
          @update:selected="handleUpdateSelected"
          @update:model-selected="handleUpdateModelSelected"
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
        <D1Radio
          id="demo-radio-a11y"
          label="Explicit ARIA Identifiers"
          description="Links labelId, descriptionId, and helperId cleanly"
          helper-message="Assistive helper hint"
          label-id="demo-radio-label-id"
          description-id="demo-radio-desc-id"
          helper-id="demo-radio-helper-id"
          :tabindex="0"
        />
        <D1Radio
          :input-attrs="{ 'aria-label': 'Standalone radio without visible label' }"
        />
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1Radio label="" :input-attrs="{ 'aria-label': 'Empty label radio' }"/>
        <D1Radio label="   " :input-attrs="{ 'aria-label': 'Whitespace label radio' }"/>
        <D1Radio
          :label="0"
          :description="0"
          v-model:selected="selectedNumeric"
          :value-variant="0"
        />
        <DemoValue label="Numeric Variant" :value="selectedNumeric"/>
        <D1Radio :label="-42" :description="-3.14" :model-value="true"/>
        <D1Radio :label="3.14" description="Decimal numeric label"/>
        <D1Radio label="A"/>
        <D1Radio
          label="Tiếng Việt / Кириллица / 🚀 & <>"
          description="Multilingual text and emojis rendered safely"
        />
        <D1Radio
          label="<img src=x onerror=alert(1)>"
          description="<script>alert('xss')</script>"
        />
        <D1Radio
          label="Very long multi-sentence radio label designed to verify wrapping behavior and alignment against the radio indicator across desktop and mobile viewports"
          description="Extended multi-sentence description verifying clean vertical flow without clipping"
        />
        <DemoBox class="demo-radio-page__narrow" size="sm">
          <D1Radio
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
        <D1Radio
          v-if="isLifecycleMounted"
          label="Mounted Radio"
          :model-value="true"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-radio-page {
  &__palettes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
    max-width: 100%;
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
