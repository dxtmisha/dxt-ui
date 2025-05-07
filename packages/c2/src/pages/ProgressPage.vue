<script setup lang="ts">
import { ref } from 'vue'
import {
  UiTestButton,
  UiTestContainer,
  UiTestGroup,
  UiTestItemFull,
  UiTestItemSquared,
  UiTestTitle
} from '@dxt-ui/test'

import C2Progress from '../components/CcUi/Progress/C2Progress.vue'

const visible = ref<boolean>(false)
</script>

<template>
  <UiTestTitle title="Progress"/>

  <UiTestContainer label="Linear">
    <UiTestGroup>
      <UiTestItemSquared size="md">
        Indeterminate: type1
        <C2Progress
          indeterminate="type1"
          :point="false"
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Indeterminate: type1, point
        <C2Progress
          indeterminate="type1"
          point
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Indeterminate: type2
        <C2Progress
          indeterminate="type2"
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Indeterminate: type3
        <C2Progress
          indeterminate="type3"
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Position: top
        <C2Progress
          position="top"
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Position: bottom
        <C2Progress
          position="bottom"
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Position: static
        <C2Progress
          position="static"
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Palette
        <C2Progress
          linear
          palette="iris"
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Inverse
        <C2Progress
          inverse
          linear
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Value
        <C2Progress
          linear
          visible
          value="50"
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        Value, max
        <C2Progress
          linear
          visible
          value="50"
          max="200"
        />
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Circular">
    <UiTestGroup>
      <UiTestItemSquared label="Indeterminate: type1" size="md">
        <C2Progress
          indeterminate="type1"
          circular
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Indeterminate: type2" size="md">
        <C2Progress
          indeterminate="type2"
          circular
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Indeterminate: type3" size="md">
        <C2Progress
          indeterminate="type3"
          circular
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Palette" size="md">
        <C2Progress
          palette="indigo"
          circular
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Inverse" size="md">
        <C2Progress
          inverse
          circular
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Value" size="md">
        <C2Progress
          circular
          visible
          value="50"
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Value, max" size="md">
        <C2Progress
          circular
          visible
          value="50"
          max="200"
        />
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
  <UiTestContainer label="Circular, dense">
    <UiTestGroup>
      <UiTestItemSquared size="xs">
        <C2Progress
          circular
          visible
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Progress
          dense
          circular
          visible
        />
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Status">
    <UiTestGroup>
      <UiTestItemFull is-padding>
        <UiTestGroup>
          <UiTestButton :label="`Visible: ${visible}`" @click="visible = !visible"/>
        </UiTestGroup>
      </UiTestItemFull>
      <UiTestItemSquared size="md">
        <C2Progress
          :visible="visible"
          linear
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        <C2Progress
          :visible="visible"
          circular
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Delay: 0" size="md">
        <C2Progress
          :visible="visible"
          delay="0"
          circular
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Delay: 500" size="md">
        <C2Progress
          :visible="visible"
          delay="500"
          circular
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Delay: 1000" size="md">
        <C2Progress
          :visible="visible"
          delay="1000"
          circular
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Hide delay: 0" size="md">
        <C2Progress
          :visible="visible"
          delay-hide="0"
          circular
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Hide delay: 500" size="md">
        <C2Progress
          :visible="visible"
          delay-hide="500"
          circular
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Hide delay: 1000" size="md">
        <C2Progress
          :visible="visible"
          delay-hide="1000"
          circular
        />
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
