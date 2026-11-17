<script setup lang="ts">
import { ref } from 'vue'
import type { RadioExpose } from '@dxtmisha/constructor/Radio'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const value = ref<boolean>(false)
const valueTrue = ref<boolean>(true)
const selected = ref<string>('space')
const selectedNumeric = ref<number>(0)
const exposeTarget = ref<RadioExpose>()
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
  <D1Page label="Radio">
    <D1Section>
      <D1Group label="Basic">
        <D1Radio
          v-model="value"
          label="Default standalone"
        />
        <DemoValue :value="value"/>

        <D1Radio
          v-model="valueTrue"
          label="Checked by default"
        />
        <DemoValue :value="valueTrue"/>

        <D1Radio
          :label="0"
          :description="0"
          v-model:selected="selectedNumeric"
          :value-variant="0"
        />
        <DemoValue :value="selectedNumeric"/>
      </D1Group>

      <D1Group label="Basic Group">
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
        <DemoValue :value="selected"/>
      </D1Group>

      <D1Group label="Appearances & Validation">
        <D1Radio label="Required" required />
        <D1Radio label="With Description" description="This is a description for the radio button" />
        <D1Radio label="With Helper Message" helperMessage="This is a helper message" />
        <D1Radio
          label="HTML Helper Message"
          hasHtmlCode
          helperMessage="Helper with <strong>strong</strong> markup"
        />
        <D1Radio
          label="With Validation Message"
          validationMessage="Error: Please choose an option"
        />
        <D1Radio
          label="Disabled with forceShowMessage"
          disabled
          forceShowMessage
          helperMessage="Visible even when disabled"
        />
      </D1Group>

      <D1Group label="Layout & Container">
        <D1Radio label="Full Width (block)" block />
        <D1Radio label="Content Width" :block="false" />
        <D1Radio label="Item Center" itemCenter description="This description helps to see how the radio is centered relative to the text." />
        <D1Radio label="Item Top" :itemCenter="false" description="This description helps to see how the radio is aligned to the top of the text." />
        <DemoBox container>
          <D1Radio label="Container Adaptive (rightSm)" container="rightSm" />
        </DemoBox>
      </D1Group>

      <D1Group label="Adaptive">
        <D1Radio label="Adaptive (rightAlways)" adaptive="rightAlways" />
        <D1Radio label="Adaptive (rightSm)" adaptive="rightSm" />
      </D1Group>

      <D1Group label="States">
        <D1Radio label="Disabled" disabled />
        <D1Radio label="Disabled Selected" disabled :selected="selected" value-variant="space" />
        <D1Radio label="Readonly" readonly />
        <D1Radio label="Readonly Selected" readonly :modelValue="true" />
        <D1Radio label="Focus" focus />
        <D1Radio label="Loading (boolean)" loading />
        <D1Radio label="Loading (object)" :loading="{ visible: true, circular: true }" :modelValue="true" />
      </D1Group>

      <D1Group label="Skeleton">
        <D1Skeleton :active="true">
          <D1Radio isSkeleton label="Loading radio" description="Skeleton description" />
          <D1Radio isSkeleton :modelValue="true" label="Checked skeleton" />
        </D1Skeleton>
      </D1Group>

      <D1Group label="Palettes">
        <D1Radio palette="red" :modelValue="true" label="Red palette" />
        <D1Radio palette="green" :modelValue="true" label="Green palette" />
        <D1Radio palette="blue" :modelValue="true" label="Blue palette" />
      </D1Group>

      <D1Group label="Icons">
        <D1Radio label="Custom Icon (string)" iconCheckbox="home" :modelValue="true" />
        <D1Radio label="Custom Icon (object)" :iconCheckbox="{ value: 'verified' }" :modelValue="true" />
        <D1Radio label="Null Icon" :iconCheckbox="null" :modelValue="true" />
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
        />
        <DemoFlex>
          <D1Button label="Set True" size="sm" @click="setExposeValue(true)" />
          <D1Button label="Set False" size="sm" outline @click="setExposeValue(false)" />
          <D1Button label="Clear" size="sm" outline @click="clearExposeValue" />
          <D1Button label="Check Validity" size="sm" outline @click="validateExposeValue" />
        </DemoFlex>
        <DemoValue :value="exposeResult"/>
      </D1Group>

      <D1Group label="Events">
        <D1Radio
          label="Event Tracker"
          @input="(event, detail) => onEvent('input', event, detail)"
          @input-lite="(detail) => onEvent('inputLite', detail)"
          @change="(event, detail) => onEvent('change', event, detail)"
          @change-lite="(detail) => onEvent('changeLite', detail)"
        />
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
