<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const value1 = ref('123456')
const value2 = ref('')
const value3 = ref('12052024')
const value4 = ref('1234.56')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Mask">
    <D1Section>
      <D1Group label="Standard Mask (Phone-like)">
        <div class="demo-mask-page">
          <D1Mask
            :value="value1"
            mask="+7 (***) ***-**-**"
            label="Phone Mask"
            @input-lite="(data) => console.log(data)"
          />
          <div class="demo-mask-value">Value: {{ value1 }}</div>
        </div>
      </D1Group>

      <D1Group label="Date Mask">
        <div class="demo-mask-page">
          <D1Mask
            :value="value3"
            mask="**-**-****"
            label="Date (dd-mm-yyyy)"
            @input-lite="(data) => value3 = data.value"
          />
          <div class="demo-mask-value">Value: {{ value3 }}</div>
        </div>
      </D1Group>

      <D1Group label="Number (Currency) Mask">
        <div class="demo-mask-page">
          <D1Mask
            :value="value4"
            type="number"
            currency="USD"
            label="Currency"
            @input-lite="(data) => value4 = data.value"
          />
          <div class="demo-mask-value">Value: {{ value4 }}</div>
        </div>
      </D1Group>

      <D1Group label="Types & Align">
        <div class="demo-mask-page">
          <D1Mask
            label="Center Aligned"
            align="center"
            mask="***-***"
          />
          <D1Mask
            label="Right Aligned"
            align="right"
            mask="***-***"
          />
        </div>
      </D1Group>

      <D1Group label="Visibility">
        <div class="demo-mask-page">
          <D1Mask
            label="Visible Mask"
            mask="AAAA-AAAA-AAAA"
            :visible="true"
          />
          <D1Mask
            label="Hidden/Partly Visible"
            mask="AAAA-AAAA-AAAA"
            :visible="false"
          />
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-mask-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
}
.demo-mask-value {
  font-family: monospace;
  font-size: 0.9em;
  color: #666;
}
</style>
