<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const telegramVal = ref('')
const githubVal = ref('')
const youtubeVal = ref('')
const successVal = ref('misha_ivanov')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputSocial">
    <D1Section>
      <D1Block label="General Usage">
        <D1Group label="Telegram">
          <D1InputSocial v-model:value="telegramVal" socialType="telegram" />
        </D1Group>

        <D1Group label="GitHub">
          <D1InputSocial v-model:value="githubVal" socialType="github" />
        </D1Group>

        <D1Group label="YouTube">
          <D1InputSocial v-model:value="youtubeVal" socialType="youtube" />
        </D1Group>
      </D1Block>

      <D1Block label="States & Feedback">
        <D1Group label="Success State">
          <D1InputSocial v-model:value="successVal" socialType="instagram" :success="true" />
        </D1Group>

        <D1Group label="Loading State">
          <D1InputSocial socialType="vk" :loading="true" />
        </D1Group>

        <D1Group label="Disabled State">
          <D1InputSocial socialType="x" :disabled="true" />
        </D1Group>
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
