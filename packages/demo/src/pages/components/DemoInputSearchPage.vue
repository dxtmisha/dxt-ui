<script setup lang="ts">
import { ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { InputSearchExpose } from '@dxtmisha/constructor/InputSearch'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const valueBasic = ref<string>('Design system')
const valueDebounced = ref<string>('')
const valueZeroDelay = ref<string>('')
const valueDynamic = ref<string>('Dynamic query')
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)

const formValue = ref<string>('')
const formStatus = ref<string>('Not submitted')

const searchRef = ref<InputSearchExpose>()
const exposeOutput = ref<string>('No expose action executed yet')

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const handleTrackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleInputEvent = (
  domEvent: InputEvent | Event,
  data: FieldValidationItem<string>
): void => {
  handleTrackEvent('input', { type: domEvent.type, value: data.value })
}

const handleChangeEvent = (
  domEvent: InputEvent | Event,
  data: FieldValidationItem<string>
): void => {
  handleTrackEvent('change', { type: domEvent.type, value: data.value })
}

const handleReadExposed = (): void => {
  const value = searchRef.value?.getValue()
  const isValid = searchRef.value?.checkValidity()
  const isChanged = searchRef.value?.isChanged()
  exposeOutput.value = `value=${String(value)}, valid=${String(isValid)}, changed=${String(isChanged)}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputSearch">
    <D1Section class="demo-input-search-page">
      <D1Group label="Basic (Interactive v-model)">
        <DemoFlex>
          <D1Button label="Set Query" @click="valueBasic = 'Typography tokens'"/>
          <D1Button label="Clear" outline @click="valueBasic = ''"/>
          <D1Button label="Reset" outline @click="valueBasic = 'Design system'"/>
        </DemoFlex>
        <D1InputSearch
          v-model="valueBasic"
          label="Search Components"
          helper-message="Default search type with clear button"
        />
        <DemoValue :value="valueBasic" label="v-model value"/>
      </D1Group>

      <D1Group label="Debounce (delay) & Minimum Query Length (minQuery)">
        <DemoFlex>
          <DemoBox>
            <D1InputSearch
              v-model="valueDebounced"
              label="Debounced (minQuery=3, delay=500ms)"
              :min-query="3"
              :delay="500"
              text-search="Type 3+ characters or press Enter..."
              helper-message="Shows loading spinner while waiting; Enter triggers immediately"
            />
            <DemoValue :value="valueDebounced" label="Debounced model"/>
          </DemoBox>
          <DemoBox>
            <D1InputSearch
              v-model="valueZeroDelay"
              label="Instant Search (delay=0, minQuery=0)"
              :min-query="0"
              :delay="0"
              type="text"
              cancel="always"
              helper-message="type=text with immediate emission"
            />
            <DemoValue :value="valueZeroDelay" label="Instant model"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Validation">
        <DemoFlex>
          <DemoBox>
            <D1InputSearch label="Disabled" disabled value="Blocked query"/>
          </DemoBox>
          <DemoBox>
            <D1InputSearch label="Readonly" readonly value="Readonly query"/>
          </DemoBox>
          <DemoBox>
            <D1InputSearch label="Loading" loading value="Searching..."/>
          </DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1InputSearch label="Skeleton" is-skeleton/>
            </D1Skeleton>
          </DemoBox>
          <DemoBox>
            <D1InputSearch
              label="Validation Error"
              validation-message="Query must be non-empty"
              force-show-message
            />
          </DemoBox>
        </DemoFlex>

        <D1Skeleton :active="isDynamicSkeleton">
          <D1InputSearch
            v-model="valueDynamic"
            label="Dynamic State Search"
            :disabled="isDynamicDisabled"
            :readonly="isDynamicReadonly"
            :loading="isDynamicLoading"
            :is-skeleton="isDynamicSkeleton"
          />
        </D1Skeleton>
        <DemoFlex>
          <D1Button label="Toggle Disabled" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Loading" outline @click="isDynamicLoading = !isDynamicLoading"/>
          <D1Button label="Toggle Skeleton" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots">
        <D1InputSearch value="Scoped slots example">
          <template #label>
            <strong>Custom #label</strong>
          </template>
          <template #prefix>
            <span>tag:</span>
          </template>
          <template #suffix>
            <span>⌘K</span>
          </template>
          <template #caption>
            <span>Custom #caption hint</span>
          </template>
        </D1InputSearch>
      </D1Group>

      <D1Group label="Form Validation">
        <form
          @submit.prevent="formStatus = formValue.length >= 2 ? `Submitted: ${formValue}` : 'Blocked'"
          @reset.prevent="formValue = ''; formStatus = 'Reset'"
        >
          <D1InputSearch
            v-model="formValue"
            name="search-form-field"
            label="Required Search (min 2 chars)"
            required
            :minlength="2"
            :delay="0"
          />
          <DemoFlex>
            <D1Button type="submit" label="Submit"/>
            <D1Button type="reset" label="Reset" outline/>
          </DemoFlex>
        </form>
        <DemoValue :value="formStatus" label="Form status"/>
      </D1Group>

      <D1Group label="Programmatic Control (Expose)">
        <DemoFlex>
          <D1Button label="setValue('Programmatic')" @click="searchRef?.setValue('Programmatic'); handleReadExposed()"/>
          <D1Button label="clear()" outline @click="searchRef?.clear(); handleReadExposed()"/>
          <D1Button label="Read Expose" outline @click="handleReadExposed"/>
        </DemoFlex>
        <D1InputSearch
          ref="searchRef"
          label="Controlled Search"
          :delay="0"
        />
        <DemoValue :value="exposeOutput" label="Expose state"/>
      </D1Group>

      <D1Group label="Events">
        <D1InputSearch
          label="Event Tracker"
          :delay="0"
          @input="handleInputEvent"
          @input-lite="(data) => handleTrackEvent('inputLite', data)"
          @change="handleChangeEvent"
          @change-lite="(data) => handleTrackEvent('changeLite', data)"
          @focus="(event) => handleTrackEvent('focus', { type: event.type })"
          @blur="(event) => handleTrackEvent('blur', { type: event.type })"
          @update:model-value="(val) => handleTrackEvent('update:modelValue', { val })"
        />
        <DemoValue :value="eventName" label="Last Event"/>
        <DemoValue :value="eventPayload" label="Last Payload"/>
      </D1Group>

      <D1Group label="Boundary & Lifecycle">
        <DemoBox style="width: 220px;">
          <D1InputSearch
            label="Narrow Container (220px)"
            value="Học tiếng Việt & Кириллица 🚀"
          />
        </DemoBox>
        <DemoFlex>
          <D1Button label="Toggle Mount (v-if)" outline @click="isLifecycleMounted = !isLifecycleMounted"/>
        </DemoFlex>
        <D1InputSearch
          v-if="isLifecycleMounted"
          label="Lifecycle Managed Search (delay=400ms)"
          :delay="400"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
