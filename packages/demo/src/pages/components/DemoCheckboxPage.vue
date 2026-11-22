<script setup lang="ts">
import { ref } from 'vue'
import type { CheckboxExpose } from '@dxtmisha/constructor/Checkbox'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const value = ref<boolean>(false)
const valueTrue = ref<boolean>(true)
const valueIndeterminate = ref<boolean>(false)
const selectedVariant = ref<string>('alpha')
const exposeTarget = ref<CheckboxExpose>()
const exposeResult = ref<Record<string, unknown>>({})

const setExposeValue = (nextValue: boolean): void => {
  exposeTarget.value?.setValue(nextValue)
  exposeResult.value = {
    value: exposeTarget.value?.getValue(),
    valid: exposeTarget.value?.checkValidity(),
    message: exposeTarget.value?.getValidationMessage()
  }
}

const clearExposeValue = (): void => {
  exposeTarget.value?.clear()
  exposeResult.value = {
    value: exposeTarget.value?.getValue(),
    valid: exposeTarget.value?.checkValidity(),
    message: exposeTarget.value?.getValidationMessage()
  }
}

const validateExposeValue = (): void => {
  exposeResult.value = {
    value: exposeTarget.value?.getValue(),
    valid: exposeTarget.value?.checkValidity(),
    message: exposeTarget.value?.getValidationMessage()
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Checkbox">
    <D1Section>
      <D1Group label="Basic">
        <D1Checkbox
          v-model="value"
          label="Default"
        />
        <DemoValue :value="value"/>

        <D1Checkbox
          v-model="valueTrue"
          label="Checked by default"
        />
        <DemoValue :value="valueTrue"/>

        <D1Checkbox
          :label="0"
          :description="0"
          :modelValue="false"
        />
      </D1Group>

      <D1Group label="Selected & Value Variant">
        <D1Checkbox
          v-model:selected="selectedVariant"
          name="variant-group"
          valueVariant="alpha"
          valueVariantHide="none"
          label="Option Alpha"
        />
        <D1Checkbox
          v-model:selected="selectedVariant"
          name="variant-group"
          valueVariant="beta"
          valueVariantHide="none"
          label="Option Beta"
        />
        <DemoValue :value="selectedVariant"/>
      </D1Group>

      <D1Group label="Indeterminate">
        <D1Checkbox
          v-model="valueIndeterminate"
          label="Indeterminate state"
          indeterminate
        />
        <D1Checkbox
          :modelValue="true"
          label="Indeterminate checked"
          indeterminate
        />
        <DemoValue :value="valueIndeterminate"/>
      </D1Group>

      <D1Group label="Appearances & Validation">
        <D1Checkbox label="Required" required/>
        <D1Checkbox label="With Description" description="This is a description for the checkbox"/>
        <D1Checkbox
          label="With Helper Message"
          helperMessage="This is a helper message"
        />
        <D1Checkbox
          label="HTML Helper Message"
          hasHtmlCode
          helperMessage="Helper with <strong>strong</strong> markup"
        />
        <D1Checkbox
          label="With Warning Message"
          warningMessage="Warning: Double-check this option"
        />
        <D1Checkbox
          label="With Validation Message"
          validationMessage="Error: This field is required"
        />
        <D1Checkbox
          label="Disabled with forceShowMessage"
          disabled
          forceShowMessage
          helperMessage="Visible even when disabled"
        />
      </D1Group>

      <D1Group label="Layout & Container">
        <D1Checkbox label="Full Width (block)" block/>
        <D1Checkbox label="Content Width" :block="false"/>
        <D1Checkbox
          label="Item Center"
          itemCenter
          description="This description helps to see how the checkbox is centered relative to the text."
        />
        <D1Checkbox
          label="Item Top"
          :itemCenter="false"
          description="This description helps to see how the checkbox is aligned to the top of the text."
        />
        <DemoBox container>
          <D1Checkbox label="Container Adaptive (rightSm)" container="rightSm"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Adaptive">
        <D1Checkbox label="Adaptive (rightAlways)" adaptive="rightAlways"/>
        <D1Checkbox label="Adaptive (rightSm)" adaptive="rightSm"/>
      </D1Group>

      <D1Group label="States">
        <D1Checkbox label="Disabled" disabled/>
        <D1Checkbox label="Disabled Checked" disabled :modelValue="true"/>
        <D1Checkbox label="Readonly" readonly/>
        <D1Checkbox label="Readonly Checked" readonly :modelValue="true"/>
        <D1Checkbox label="Focus" focus/>
        <D1Checkbox label="Loading (boolean)" loading/>
        <D1Checkbox label="Loading (object)" :loading="{ visible: true, circular: true }" :modelValue="true"/>
      </D1Group>

      <D1Group label="Skeleton">
        <D1Skeleton :active="true">
          <D1Checkbox isSkeleton label="Loading checkbox" description="Skeleton description"/>
          <D1Checkbox isSkeleton :modelValue="true" label="Checked skeleton"/>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Palettes">
        <D1Checkbox palette="red" :modelValue="true" label="Red palette"/>
        <D1Checkbox palette="green" :modelValue="true" label="Green palette"/>
        <D1Checkbox palette="blue" :modelValue="true" label="Blue palette"/>
      </D1Group>

      <D1Group label="Icons">
        <D1Checkbox label="Custom Icon (string)" iconCheckbox="home" :modelValue="true"/>
        <D1Checkbox label="Custom Icon (object)" :iconCheckbox="{ value: 'verified' }" :modelValue="true"/>
        <D1Checkbox label="Custom Indeterminate Icon" indeterminate iconIndeterminate="close" :modelValue="true"/>
        <D1Checkbox label="Null Icon" :iconCheckbox="null" :modelValue="true"/>
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
        />
        <DemoFlex>
          <D1Button label="Set True" size="sm" @click="setExposeValue(true)"/>
          <D1Button label="Set False" size="sm" outline @click="setExposeValue(false)"/>
          <D1Button label="Clear" size="sm" outline @click="clearExposeValue"/>
          <D1Button label="Check Validity" size="sm" outline @click="validateExposeValue"/>
        </DemoFlex>
        <DemoValue :value="exposeResult"/>
      </D1Group>

      <D1Group label="Events">
        <D1Checkbox
          label="Event Tracker"
          @input="(event, detail) => onEvent('input', event, detail)"
          @input-lite="(detail) => onEvent('inputLite', detail)"
          @change="(event, detail) => onEvent('change', event, detail)"
          @change-lite="(detail) => onEvent('changeLite', detail)"
          @focus="(event) => onEvent('focus', event)"
          @blur="(event) => onEvent('blur', event)"
        />
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
