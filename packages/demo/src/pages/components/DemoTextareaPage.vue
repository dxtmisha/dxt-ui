<script setup lang="ts">
import { ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { TextareaExpose } from '@dxtmisha/constructor/Textarea'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const valueControlled = ref<string>('This is a textarea with default content.\nYou can write multiple lines of text here.')
const valueAutosizeFixed = ref<string>('This textarea has autosize disabled.\nIts height is fixed by rows=4.')
const valueCounter = ref<string>('Draft summary text')
const valueValidation = ref<string>('')
const valueCancelAuto = ref<string>('Clearable textarea content')
const valueCancelAlways = ref<string>('Always shows clear button')
const valueDynamic = ref<string>('Dynamic state textarea')

const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(true)
const isDynamicFocus = ref<boolean>(false)
const isDynamicSelected = ref<boolean>(false)
const isDynamicWarning = ref<boolean>(false)

const blockedTriggerCount = ref<number>(0)

const formValue = ref<string>('')
const formStatus = ref<string>('Not submitted')

const eventValue = ref<string>('')
const eventPayload = ref<string>('No events triggered yet')

const exposedTarget = ref<TextareaExpose | null>(null)
const exposedResult = ref<string>('Not read yet')

const isLifecycleMounted = ref<boolean>(true)
const lifecycleValue = 'Active in DOM.\nToggle mount to test lifecycle cleanup.'

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleInputEvent = (
  domEvent: InputEvent | Event,
  validationItem: FieldValidationItem<string>
): void => {
  trackEvent('input', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleInputLiteEvent = (validationItem: FieldValidationItem<string>): void => {
  trackEvent('inputLite', {
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeEvent = (
  domEvent: InputEvent | Event,
  validationItem: FieldValidationItem<string>
): void => {
  trackEvent('change', {
    eventType: domEvent.type,
    value: validationItem.value,
    status: validationItem.status
  })
}

const handleChangeLiteEvent = (validationItem: FieldValidationItem<string>): void => {
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

const handleUpdateValue = (nextValue: string): void => {
  trackEvent('update:value', { value: nextValue })
}

const handleUpdateModelValue = (nextValue: string): void => {
  eventValue.value = nextValue
  trackEvent('update:modelValue', { value: nextValue })
}

const handleBlockedEvent = (): void => {
  blockedTriggerCount.value += 1
}

const handleFormSubmit = (): void => {
  formStatus.value = formValue.value.trim().length >= 5
    ? `Form submitted (${formValue.value.trim().length} chars)`
    : 'Form blocked (invalid)'
}

const handleFormReset = (): void => {
  formValue.value = ''
  formStatus.value = 'Form reset'
}

const handleReadExposed = (): void => {
  const currentValue = exposedTarget.value?.getValue()
  const reactiveValue = exposedTarget.value?.value
  const isValid = exposedTarget.value?.checkValidity()
  const isChanged = exposedTarget.value?.isChanged()
  const validationMessage = exposedTarget.value?.getValidationMessage()
  exposedResult.value = JSON.stringify({
    value: currentValue,
    refValue: reactiveValue,
    valid: isValid,
    changed: isChanged,
    validationMessage: validationMessage || 'none'
  })
}

const handleSetExposed = (): void => {
  exposedTarget.value?.setValue('Programmatically updated multiline text.\nSecond line set via expose.')
  handleReadExposed()
}

const handleClearExposed = (): void => {
  exposedTarget.value?.clear()
  handleReadExposed()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Textarea">
    <D1Section class="demo-textarea-page">
      <D1Group label="Appearances, Palettes & Layout">
        <DemoFlex>
          <DemoBox><D1Textarea label="Classic (default)" classic value="Classic appearance"/></DemoBox>
          <DemoBox><D1Textarea label="Filled" filled value="Filled appearance"/></DemoBox>
          <DemoBox><D1Textarea label="Outlined" outlined value="Outlined appearance"/></DemoBox>
          <DemoBox><D1Textarea label="Tonal" tonal value="Tonal appearance"/></DemoBox>
          <DemoBox><D1Textarea label="Boxed" boxed value="Boxed appearance"/></DemoBox>
          <DemoBox><D1Textarea label="Basic" basic value="Basic appearance"/></DemoBox>
          <DemoBox><D1Textarea label="Palette Blue" outlined :field-attrs="{ palette: 'blue' }" value="Blue palette"/></DemoBox>
          <DemoBox><D1Textarea label="Palette Emerald" tonal :field-attrs="{ palette: 'emerald' }" value="Emerald palette"/></DemoBox>
          <DemoBox><D1Textarea label="Palette Red" outlined :field-attrs="{ palette: 'red' }" value="Red palette"/></DemoBox>
          <DemoBox><D1Textarea label="Custom Width (260px)" outlined width="260px" value="Fixed 260px width"/></DemoBox>
          <DemoBox><D1Textarea label="Block Width" outlined block value="Full width block textarea"/></DemoBox>
          <DemoBox><D1Textarea label="Forced isValue" outlined is-value placeholder="Placeholder with isValue"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes & Text Alignment">
        <DemoFlex>
          <DemoBox><D1Textarea label="Small (sm)" size="sm" value="Small size"/></DemoBox>
          <DemoBox><D1Textarea label="Medium (md)" size="md" value="Medium size"/></DemoBox>
          <DemoBox><D1Textarea label="Large (lg)" size="lg" value="Large size"/></DemoBox>
          <DemoBox><D1Textarea label="Display" size="display" value="Display size"/></DemoBox>
          <DemoBox><D1Textarea label="Align Left" align="left" value="Left aligned text"/></DemoBox>
          <DemoBox><D1Textarea label="Align Center" align="center" value="Center aligned text"/></DemoBox>
          <DemoBox><D1Textarea label="Align Right" align="right" value="Right aligned text"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Controlled v-model & UX Attributes">
        <D1Textarea
          v-model="valueControlled"
          label="Controlled Textarea"
          placeholder="Enter multiline notes..."
          helper-message="Supports two-way v-model updates and native UX hints."
          autocomplete="off"
          autocapitalize="sentences"
          autocorrect="on"
          :spellcheck="true"
          enter-key-hint="enter"
          input-mode="text"
          wrap="soft"
        />
        <DemoFlex align="center">
          <D1Button
            label="Set Sample"
            size="sm"
            outline
            @click="valueControlled = 'Updated sample paragraph.\nWith a second line.'"
          />
          <D1Button
            label="Clear"
            size="sm"
            outline
            @click="valueControlled = ''"
          />
          <D1Button
            label="Reset"
            size="sm"
            outline
            @click="valueControlled = 'This is a textarea with default content.\nYou can write multiple lines of text here.'"
          />
        </DemoFlex>
        <DemoValue label="Model Value" :value="valueControlled"/>
      </D1Group>

      <D1Group label="Autosize, Fixed Rows, Cols & TextareaAttrs">
        <DemoFlex>
          <DemoBox>
            <D1Textarea
              label="Autosize Enabled (default)"
              placeholder="Type multiple lines to expand height..."
              :autosize="true"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              v-model="valueAutosizeFixed"
              label="Fixed Height (autosize=false, rows=4)"
              :autosize="false"
              :rows="4"
              :cols="32"
              wrap="hard"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Custom textareaAttrs (height=lg)"
              value="Configured via textareaAttrs"
              field-sizing="content"
              :textarea-attrs="{
                height: 'lg',
                inputAttrs: { 'data-textarea-inner': 'yes' }
              }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Counter, Messages, Validation & Warning">
        <DemoFlex>
          <DemoBox>
            <D1Textarea
              v-model="valueCounter"
              label="Counter & Length Limits (5..80)"
              :minlength="5"
              :maxlength="80"
              counter-show
              counter-id="demo-textarea-counter"
              helper-message="Enter between 5 and 80 characters."
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              v-model="valueValidation"
              label="Required with Validation Message"
              required
              helper-id="demo-textarea-helper"
              validation-id="demo-textarea-validation"
              helper-message="This field must not be empty."
              validation-message="Field is required and must contain text."
              force-show-message
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Validation Code Map"
              required
              :minlength="10"
              :validation-code="{
                valueMissing: 'Please provide a comment',
                tooShort: 'Comment must be at least 10 characters'
              }"
              value="Short"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Warning State"
              warning
              warning-id="demo-textarea-warning"
              warning-message="Draft contains unsaved changes."
              helper-message="Fallback helper message"
              value="Warning content"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="HTML Helper Message"
              has-html-code
              helper-message="Supports <strong>formatted</strong> helper copy."
              value="Plain value"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons, Clearable Cancel Button & Loading">
        <DemoFlex>
          <DemoBox>
            <D1Textarea
              label="Leading & Trailing Icons"
              icon="edit_note"
              icon-trailing="check"
              icon-palette
              icon-trailing-palette
              placeholder="Write a note..."
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              v-model="valueCancelAuto"
              label="Clearable (cancel=auto)"
              cancel="auto"
              text-cancel="Clear textarea"
            />
            <DemoValue label="Clearable Auto" :value="valueCancelAuto"/>
          </DemoBox>
          <DemoBox>
            <D1Textarea
              v-model="valueCancelAlways"
              label="Clearable (cancel=always)"
              cancel="always"
              text-cancel="Reset text"
            />
            <DemoValue label="Clearable Always" :value="valueCancelAlways"/>
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Cancel Disabled (cancel=none)"
              cancel="none"
              value="No clear button"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Loading Boolean"
              loading
              value="Saving draft..."
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Loading Progress Object"
              :loading="{ visible: true, value: 70, max: 100 }"
              value="Uploading attachment note..."
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Interactive Toggles, Skeleton & Guarded Actions">
        <DemoFlex>
          <DemoBox>
            <D1Textarea
              label="Disabled"
              disabled
              value="Disabled textarea content"
              @input="handleBlockedEvent"
              @change="handleBlockedEvent"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Readonly"
              readonly
              value="Readonly textarea content"
              @input="handleBlockedEvent"
              @change="handleBlockedEvent"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea label="Focused" focus value="Focused state"/>
          </DemoBox>
          <DemoBox>
            <D1Textarea label="Selected" selected value="Selected state"/>
          </DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1Textarea label="Skeleton" is-skeleton value="Skeleton placeholder"/>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>

        <D1Skeleton :active="isDynamicSkeleton">
          <D1Textarea
            v-model="valueDynamic"
            label="Dynamic State Target"
            helper-message="Toggle runtime states below."
            warning-message="Dynamic warning active."
            :disabled="isDynamicDisabled"
            :readonly="isDynamicReadonly"
            :loading="isDynamicLoading"
            :is-skeleton="isDynamicSkeleton"
            :focus="isDynamicFocus"
            :selected="isDynamicSelected"
            :warning="isDynamicWarning"
          />
        </D1Skeleton>
        <DemoFlex align="center">
          <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Loading" size="sm" outline @click="isDynamicLoading = !isDynamicLoading"/>
          <D1Button label="Toggle Skeleton" size="sm" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
          <D1Button label="Toggle Focus" size="sm" outline @click="isDynamicFocus = !isDynamicFocus"/>
          <D1Button label="Toggle Selected" size="sm" outline @click="isDynamicSelected = !isDynamicSelected"/>
          <D1Button label="Toggle Warning" size="sm" outline @click="isDynamicWarning = !isDynamicWarning"/>
        </DemoFlex>
        <DemoValue
          label="Dynamic Flags"
          :value="{
            isDynamicDisabled,
            isDynamicReadonly,
            isDynamicLoading,
            isDynamicSkeleton,
            isDynamicFocus,
            isDynamicSelected,
            isDynamicWarning
          }"
        />
      </D1Group>

      <D1Group label="All Slots (#leading, #trailing, #prefix, #suffix, #caption, #label)">
        <DemoFlex>
          <DemoBox>
            <D1Textarea
              label="Prop Prefix, Suffix & Caption"
              prefix="Note:"
              suffix="END"
              caption="Prop caption"
              value="Body text"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea label="Leading & Trailing Slots" value="Slot content">
              <template #leading="{ id }">
                <span>[Lead:{{ id }}]</span>
              </template>
              <template #trailing>
                <span>[Trail]</span>
              </template>
            </D1Textarea>
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Prefix & Suffix Slots"
              value="Main paragraph"
              prefix-id="textarea-prefix-id"
              suffix-id="textarea-suffix-id"
            >
              <template #prefix>
                <span>&gt;&gt;</span>
              </template>
              <template #suffix>
                <span>&lt;&lt;</span>
              </template>
            </D1Textarea>
          </DemoBox>
          <DemoBox>
            <D1Textarea label="Caption Slot" caption-decorative value="Annotated note">
              <template #caption>
                <span>Optional</span>
              </template>
            </D1Textarea>
          </DemoBox>
          <DemoBox>
            <D1Textarea label="Label:" label-id="textarea-custom-label" value="Custom label slot">
              <template #label>
                <span> Extended</span>
              </template>
            </D1Textarea>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Programmatic Expose (setValue, clear, checkValidity, getValue, value)">
        <D1Textarea
          ref="exposedTarget"
          label="Exposed Textarea"
          required
          value="Initial exposed content"
        />
        <DemoFlex align="center">
          <D1Button label="Read Expose & checkValidity()" size="sm" @click="handleReadExposed"/>
          <D1Button label="setValue(...)" size="sm" outline @click="handleSetExposed"/>
          <D1Button label="clear()" size="sm" outline @click="handleClearExposed"/>
        </DemoFlex>
        <DemoValue label="Expose Output" :value="exposedResult"/>
      </D1Group>

      <D1Group label="Form Integration (Validation, Submit & Reset)">
        <form id="demo-textarea-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <D1Textarea
            v-model="formValue"
            form="demo-textarea-form"
            name="feedback"
            label="Feedback (required, min 5 chars)"
            placeholder="Write at least 5 characters..."
            required
            :minlength="5"
            :maxlength="200"
            counter-show
          />
          <DemoFlex align="center">
            <D1Button label="Submit Form" tag="button" type="submit" size="sm" primary/>
            <D1Button label="Reset Form" tag="button" type="reset" size="sm" outline/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Status" :value="formStatus"/>
      </D1Group>

      <D1Group label="Events (@input, @change, @input-lite, @change-lite, @focus, @blur)">
        <D1Textarea
          :model-value="eventValue"
          label="Event Tracker"
          placeholder="Focus, type, and blur to observe all emitted events..."
          :detail="{ source: 'demo-textarea' }"
          @focus="handleFocusEvent"
          @blur="handleBlurEvent"
          @update:value="handleUpdateValue"
          @update:model-value="handleUpdateModelValue"
          @input="handleInputEvent"
          @input-lite="handleInputLiteEvent"
          @change="handleChangeEvent"
          @change-lite="handleChangeLiteEvent"
        />
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (ARIA, IDs & Sub-Component Attrs)">
        <DemoFlex>
          <DemoBox>
            <D1Textarea
              id="demo-textarea-a11y-id"
              name="a11y-description"
              label="Attributed Textarea"
              :tabindex="0"
              :field-attrs="{ 'data-custom-field': 'yes' }"
              :input-attrs="{ 'data-custom-input': 'yes' }"
              :field-label-attrs="{ 'data-custom-label': 'yes' }"
              :field-message-attrs="{ 'data-custom-message': 'yes' }"
              :field-counter-attrs="{ 'data-custom-counter': 'yes' }"
              counter-show
              :maxlength="100"
              helper-message="Linked helper and counter attributes."
              value="Accessible field"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              :input-attrs="{ 'aria-label': 'Standalone textarea without visible label' }"
              placeholder="Aria-labeled textarea"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary Values, Long Text, Unicode, XSS & Narrow Container">
        <DemoFlex>
          <DemoBox><D1Textarea label="Empty String" value=""/></DemoBox>
          <DemoBox><D1Textarea label="Numeric Zero String" value="0"/></DemoBox>
          <DemoBox><D1Textarea label="Whitespace Only" value="   "/></DemoBox>
          <DemoBox><D1Textarea label="Undefined Value" :value="undefined" placeholder="Undefined/empty"/></DemoBox>
          <DemoBox>
            <D1Textarea
              label="Long Multi-Paragraph Text"
              value="This is a very long multi-sentence textarea value created to test wrapping, vertical autosize expansion, and visual layout boundaries across multiple lines of text without clipping or overlapping controls."
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="Unicode & Emoji"
              value="Привет · Học tiếng Việt · 🚀✨"
            />
          </DemoBox>
          <DemoBox>
            <D1Textarea
              label="XSS Escaped Text"
              value="<img src=x onerror=alert(1)>"
            />
          </DemoBox>
        </DemoFlex>
        <DemoBox size="sm" class="demo-textarea-page__narrow">
          <D1Textarea
            label="Narrow Container Unbroken"
            value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount (v-if)">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1Textarea
            label="Mounted Textarea"
            :value="lifecycleValue"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-textarea-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
