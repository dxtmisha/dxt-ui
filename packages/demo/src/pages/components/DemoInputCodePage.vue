<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const codeVal1 = ref('')
const codeVal2 = ref('')
const codeVal3 = ref('12')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputCode">
    <D1Section>
      <D1Block label="General Usage">
        <D1Group label="Basic (4 Digits)">
          <D1InputCode v-model:value="codeVal1" />
        </D1Group>

        <D1Group label="6 Digits">
          <D1InputCode v-model:value="codeVal2" :length="6" />
        </D1Group>
      </D1Block>

      <D1Block label="Feedback & Validation">
        <D1Group label="Success State">
          <D1InputCode v-model:value="codeVal3" :success="true" />
        </D1Group>

        <D1Group label="Loading State">
          <D1InputCode label="Loading" :loading="true" />
        </D1Group>

        <D1Group label="Validation Error">
          <D1InputCode :validation="true" message="Incorrect code" />
        </D1Group>
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
