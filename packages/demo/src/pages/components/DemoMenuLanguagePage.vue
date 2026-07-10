<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'

const selectedLang1 = ref(['vi'])
const selectedLang2 = ref(['en'])
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="MenuLanguage">
    <D1Section>
      <D1Block label="General Usage">
        <D1Group label="Languages">
          <D1MenuLanguage v-model:selected="selectedLang1" :list="['en', 'ru', 'es', 'vi']">
            <template #control="{ binds, selectedNames }">
              <DemoFlex>
                <D1Button
                  v-bind="binds"
                  :label="selectedNames.value[0] || 'Select Language'"
                  icon="language"
                  primary
                />
              </DemoFlex>
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage v-model:selected="selectedLang2" :list="['en', 'fr', 'zh', 'de']">
            <template #control="{ binds, selectedNames }">
              <DemoFlex>
                <D1Button
                  v-bind="binds"
                  :label="selectedNames.value[0] || 'Select Language'"
                  icon="translate"
                  secondary
                />
              </DemoFlex>
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage v-model:selected="selectedLang1" :list="['en', 'ru', 'vi']" :disabled="true">
            <template #control="{ binds, selectedNames }">
              <DemoFlex>
                <D1Button
                  v-bind="binds"
                  :label="selectedNames.value[0] || 'Select Language'"
                  disabled
                />
              </DemoFlex>
            </template>
          </D1MenuLanguage>
        </D1Group>
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
