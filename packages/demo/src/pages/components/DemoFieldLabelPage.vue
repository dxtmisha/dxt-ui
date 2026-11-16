<script setup lang="ts">
import { computed, ref } from 'vue'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const interactiveLabel = ref<string>('Profile Name')
const interactiveRequired = ref<boolean>(true)
const interactiveLoading = ref<boolean>(false)
const interactiveSkeleton = ref<boolean>(false)
const interactiveCounterShow = ref<boolean>(true)
const interactiveCounter = ref<number>(18)
const interactiveUseSlot = ref<boolean>(false)

const stateSummary = computed<string>(() => JSON.stringify({
  label: interactiveLabel.value,
  required: interactiveRequired.value,
  loading: interactiveLoading.value,
  isSkeleton: interactiveSkeleton.value,
  counterShow: interactiveCounterShow.value,
  counter: interactiveCounter.value,
  useSlot: interactiveUseSlot.value
}))

const toggleLabel = (): void => {
  interactiveLabel.value = interactiveLabel.value ? '' : 'Profile Name'
}

const incrementCounter = (): void => {
  interactiveCounter.value = interactiveCounter.value >= 50 ? 0 : interactiveCounter.value + 10
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="FieldLabel">
    <D1Section>
      <D1Group label="Basic Usage & For Binding">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldLabel label="Username"/>
          </DemoBox>

          <DemoBox>
            <D1FieldLabel :label="42"/>
          </DemoBox>

          <DemoBox>
            <D1FieldLabel label="Email Address" required/>
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Click to focus input"
              for="demo-field-label-target"
              label-id="demo-field-label-heading"
              required
            />
            <input
              id="demo-field-label-target"
              class="demo-field-label__input"
              type="text"
              placeholder="Focus target input"
              aria-labelledby="demo-field-label-heading"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Counter & Limits">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldLabel
              label="Bio"
              counter-show
              :counter="42"
              :maxlength="100"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Notes (zero counter)"
              counter-show
              :counter="0"
              :maxlength="50"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Custom Template & Threshold"
              counter-show
              :counter="92"
              :maxlength="100"
              :maxlength-once="10"
              counter-template="[c] of [m] chars"
              counter-id="demo-field-label-counter-custom"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Counter Attrs Override"
              counter-show
              :counter="12"
              :maxlength="30"
              :field-counter-attrs="{
                class: 'demo-field-label__counter-custom',
                textCharacterRemaining: '[left] left'
              }"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              counter-show
              :counter="15"
              :maxlength="80"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Counter Hidden (counterShow=false)"
              :counter="42"
              :maxlength="100"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Loading & Skeleton">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldLabel label="Syncing Data" loading/>
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Loading + Counter + Required"
              required
              loading
              counter-show
              :counter="24"
              :maxlength="60"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Custom Progress Config"
              :loading="{ visible: true, circular: true, dense: true, inverse: false }"
            />
          </DemoBox>

          <DemoBox>
            <D1Skeleton :active="true">
              <D1FieldLabel
                label="Skeleton Active Wrapper"
                required
                is-skeleton
              />
            </D1Skeleton>
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Standalone Skeleton Class"
              is-skeleton
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldLabel
              label="Prefix: "
              required
              counter-show
              :counter="10"
              :maxlength="50"
            >
              <template #label>
                <span>Custom <strong>Label Slot</strong> Content</span>
              </template>
            </D1FieldLabel>
          </DemoBox>

          <DemoBox>
            <D1FieldLabel required>
              <template #label>
                <span>Slot Only With Required Mark</span>
              </template>
            </D1FieldLabel>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Multilingual">
        <DemoFlex direction="column">
          <DemoBox>
            <div class="demo-field-label__empty-probe" data-testid="empty-probe">
              <D1FieldLabel label=""/>
            </div>
            <DemoValue label="Empty Probe" value="Empty label without counter/loading renders nothing in DOM"/>
          </DemoBox>

          <DemoBox class="demo-field-label__constrained">
            <D1FieldLabel
              label="Very long field label with many descriptive words to check wrapping and counter alignment inside constrained container"
              required
              counter-show
              :counter="114"
              :maxlength="120"
            />
          </DemoBox>

          <DemoBox class="demo-field-label__constrained">
            <D1FieldLabel
              label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              counter-show
              :counter="76"
              :maxlength="100"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel
              label="Học tiếng Việt — Метка поля 🚀✨"
              required
              counter-show
              :counter="31"
              :maxlength="100"
            />
          </DemoBox>

          <DemoBox dir="rtl">
            <D1FieldLabel
              label="اسم المستخدم المطلوب"
              required
              counter-show
              :counter="12"
              :maxlength="50"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldLabel label="<img src=x onerror=alert(1)>"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Controls">
        <DemoFlex direction="column">
          <DemoFlex>
            <D1Button label="Toggle Label" outline @click="toggleLabel"/>
            <D1Button
              label="Toggle Required"
              :selected="interactiveRequired"
              outline
              @click="interactiveRequired = !interactiveRequired"
            />
            <D1Button
              label="Toggle Loading"
              :selected="interactiveLoading"
              outline
              @click="interactiveLoading = !interactiveLoading"
            />
            <D1Button
              label="Toggle Skeleton"
              :selected="interactiveSkeleton"
              outline
              @click="interactiveSkeleton = !interactiveSkeleton"
            />
            <D1Button
              label="Toggle Counter"
              :selected="interactiveCounterShow"
              outline
              @click="interactiveCounterShow = !interactiveCounterShow"
            />
            <D1Button
              label="Counter +10"
              outline
              @click="incrementCounter"
            />
            <D1Button
              label="Toggle Slot"
              :selected="interactiveUseSlot"
              outline
              @click="interactiveUseSlot = !interactiveUseSlot"
            />
          </DemoFlex>

          <DemoBox data-testid="interactive-preview">
            <D1FieldLabel
              :label="interactiveLabel"
              :required="interactiveRequired"
              :loading="interactiveLoading"
              :is-skeleton="interactiveSkeleton"
              :counter-show="interactiveCounterShow"
              :counter="interactiveCounter"
              :maxlength="50"
              :maxlength-once="10"
            >
              <template v-if="interactiveUseSlot" #label>
                <span>Slotted: <em>{{ interactiveLabel || 'No text' }}</em></span>
              </template>
            </D1FieldLabel>
          </DemoBox>

          <DemoValue label="State" :value="stateSummary"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-field-label {
  &__input {
    width: 100%;
    padding: 6px 10px;
    border: 1px solid currentColor;
    border-radius: 6px;
    background: transparent;
    color: inherit;
  }

  &__constrained {
    max-width: 280px;
  }

  &__counter-custom {
    font-weight: 600;
  }
}
</style>
