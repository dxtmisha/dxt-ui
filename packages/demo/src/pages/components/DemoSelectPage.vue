<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

const { eventName, onEvent } = useDemoEvent()

const options = ref([
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'py' },
  { label: 'Java', value: 'java' },
  { label: 'C++', value: 'cpp' },
  { label: 'Ruby', value: 'rb' },
  { label: 'Go', value: 'go' },
  { label: 'PHP', value: 'php' }
])

const valueSingle = ref('option2')
const valueMultiple = ref(['option1', 'option3'])
const optionsVModel = ref([
  { label: 'First option', value: 'option1' },
  { label: 'Second option', value: 'option2' },
  { label: 'Third option', value: 'option3' }
])
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Select">
    <D1Section>
      <D1Group label="Basic Usage">
        <D1Select
          type="select"
          label="Standard select"
          placeholder="Select option"
          :option="options"
        />
        <D1Select
          type="select"
          label="With search"
          placeholder="Search..."
          showSearch
          :option="options"
        />
        <D1Select
          type="select"
          label="With filter"
          placeholder="Type to filter"
          showSearch
          filterMode
          :option="options"
        />
        <D1Select
          type="select"
          label="Edit value"
          placeholder="Select or type"
          editValue
          filterMode
          :option="options"
        />
        <D1Select
          type="select"
          label="With arrows (carousel)"
          placeholder="Select option"
          arrow="carousel"
          :option="options"
        />
      </D1Group>

      <D1Group label="v-model Binding">
        <DemoFlex>
          <span>Value: <strong>{{ valueSingle }}</strong></span>
          <D1Button label="Set option 1" outline size="sm" @click="valueSingle = 'option1'" />
          <D1Button label="Set option 2" outline size="sm" @click="valueSingle = 'option2'" />
          <D1Button label="Set option 3" outline size="sm" @click="valueSingle = 'option3'" />
        </DemoFlex>

        <D1Select
          v-model="valueSingle"
          type="select"
          label="Single select"
          :option="optionsVModel"
        />
        <DemoValue :value="valueSingle" />

        <DemoFlex style="margin-top: 16px;">
          <span>Value: <strong>{{ valueMultiple }}</strong></span>
          <D1Button label="Set option 1, 2" outline size="sm" @click="valueMultiple = ['option1', 'option2']" />
          <D1Button label="Clear" outline size="sm" @click="valueMultiple = []" />
        </DemoFlex>

        <D1Select
          v-model="valueMultiple"
          type="select"
          label="Multiple select"
          multiple
          :option="optionsVModel"
        />
        <DemoValue :value="valueMultiple" />
      </D1Group>

      <D1Group label="Appearances">
        <D1Select label="Classic (default)" classic :option="options" />
        <D1Select label="Filled" filled :option="options" />
        <D1Select label="Outlined" outlined :option="options" />
        <D1Select label="Tonal" tonal :option="options" />
        <D1Select label="Boxed" boxed :option="options" />
        <D1Select label="Basic" basic :option="options" />
      </D1Group>

      <D1Group label="Sizes">
        <D1Select label="Small (sm)" size="sm" :option="options" />
        <D1Select label="Medium (md)" size="md" :option="options" />
        <D1Select label="Large (lg)" size="lg" :option="options" />
        <D1Select label="Display" size="display" :option="options" />
      </D1Group>

      <D1Group label="States">
        <D1Select label="Disabled" disabled :option="options" />
        <D1Select label="Disabled Selected" disabled :option="options" modelValue="ts" />
        <D1Select label="Readonly" readonly :option="options" modelValue="js" />
        <D1Select label="Focus" focus :option="options" />
        <D1Select label="Loading" loading :option="options" />
        <D1Skeleton active>
          <D1Select label="Skeleton" isSkeleton :option="options" />
        </D1Skeleton>
      </D1Group>

      <D1Group label="Events">
        <D1Select
          label="Event Tracker"
          :option="options"
          @input="onEvent('input')"
          @input-lite="onEvent('inputLite')"
          @change="onEvent('change')"
          @change-lite="onEvent('changeLite')"
        />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
