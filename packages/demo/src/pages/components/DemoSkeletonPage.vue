<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import type { SkeletonExpose } from '@dxtmisha/constructor/Skeleton'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

/** Reactive active state for the basic comparison group / Реактивное состояние активности для базовой группы сравнения */
const basicActive = ref<boolean>(true)

/** Reactive active state for the scoped slot group / Реактивное состояние активности для группы scoped-слота */
const slotActive = ref<boolean>(true)

/** Reactive active state for the delays group / Реактивное состояние активности для группы задержек */
const delaysActive = ref<boolean>(false)

/** Reactive active state for the parent provider skeleton / Реактивное состояние активности родительского скелетона-провайдера */
const parentActive = ref<boolean>(true)

/** Reactive active state for the nested child skeleton / Реактивное состояние активности вложенного дочернего скелетона */
const nestedChildActive = ref<boolean>(false)

/** Reference to the controlled D1Skeleton instance / Ссылка на управляемый экземпляр D1Skeleton */
const skeletonRef = ref<SkeletonExpose | null>(null)

/** Reactive active prop for the expose control group / Реактивный проп active для группы проверки expose */
const exposeActive = ref<boolean>(true)

/** Reactive delay prop for the expose control group / Реактивный проп delay для группы проверки expose */
const exposeDelay = ref<number | string>(0)

/** Reactive delayHide prop for the expose control group / Реактивный проп delayHide для группы проверки expose */
const exposeDelayHide = ref<number | string>(300)

/** Manual snapshot of the exposed isActive() return value / Снимок возвращаемого значения метода isActive() */
const manualExposeSnapshot = ref<string>('Not read yet')

/** Formatted expose state string / Форматированная строка состояния expose-метода */
const exposeStatus = computed<string>(() => {
  if (skeletonRef.value) {
    return `isActive(): ${skeletonRef.value.isActive()} | active prop: ${exposeActive.value} | delay: ${exposeDelay.value} | delayHide: ${exposeDelayHide.value} | snapshot: ${manualExposeSnapshot.value}`
  }

  return 'Ref not initialized'
})

/**
 * Toggles the basic skeleton active state.
 *
 * Переключает состояние активности базового скелетона.
 */
const toggleBasicActive = (): void => {
  basicActive.value = !basicActive.value
}

/**
 * Toggles the scoped slot skeleton active state.
 *
 * Переключает состояние активности скелетона со слотом.
 */
const toggleSlotActive = (): void => {
  slotActive.value = !slotActive.value
}

/**
 * Toggles the delays demonstration active state.
 *
 * Переключает состояние активности демонстрации задержек.
 */
const toggleDelaysActive = (): void => {
  delaysActive.value = !delaysActive.value
}

/**
 * Toggles the parent provider skeleton active state.
 *
 * Переключает состояние активности родительского скелетона-провайдера.
 */
const toggleParentActive = (): void => {
  parentActive.value = !parentActive.value
}

/**
 * Toggles the nested child skeleton active state.
 *
 * Переключает состояние активности вложенного дочернего скелетона.
 */
const toggleNestedChildActive = (): void => {
  nestedChildActive.value = !nestedChildActive.value
}

/**
 * Activates the expose-controlled skeleton immediately without delay.
 *
 * Мгновенно активирует управляемый скелетон без задержки.
 */
const activateExposeImmediate = async (): Promise<void> => {
  exposeDelay.value = 0
  exposeDelayHide.value = 300
  exposeActive.value = true
  await nextTick()
  manualExposeSnapshot.value = String(skeletonRef.value?.isActive())
}

/**
 * Activates the expose-controlled skeleton with a 500ms appearance delay.
 *
 * Активирует управляемый скелетон с задержкой появления 500 мс.
 */
const activateExposeDelayed = async (): Promise<void> => {
  exposeDelay.value = '500'
  exposeDelayHide.value = '0'
  exposeActive.value = true
  await nextTick()
  manualExposeSnapshot.value = String(skeletonRef.value?.isActive())
}

/**
 * Deactivates the expose-controlled skeleton.
 *
 * Деактивирует управляемый скелетон.
 */
const deactivateExpose = async (): Promise<void> => {
  exposeActive.value = false
  await nextTick()
  manualExposeSnapshot.value = String(skeletonRef.value?.isActive())
}

/**
 * Reads the current value from the exposed isActive() method.
 *
 * Считывает текущее значение из открытого метода isActive().
 */
const readExposeState = (): void => {
  manualExposeSnapshot.value = String(skeletonRef.value?.isActive())
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Skeleton">
    <D1Section>
      <D1Group label="Basic & Active States (Interactive, Active, Inactive)">
        <DemoFlex align="center">
          <D1Button label="Toggle Active" @click="toggleBasicActive" />
          <DemoValue label="Active" :value="basicActive" />
        </DemoFlex>
        <DemoFlex>
          <DemoBox size="lg">
            <D1Skeleton :active="basicActive">
              <div class="d1-skeleton__text">Interactive Card Title</div>
              <div class="d1-skeleton__textVariant">Interactive subtitle caption</div>
              <div class="demo-skeleton-page__block d1-skeleton__background">Media Block</div>
            </D1Skeleton>
          </DemoBox>
          <DemoBox size="lg">
            <D1Skeleton active>
              <div class="d1-skeleton__text">Always Active Title</div>
              <div class="d1-skeleton__textVariant">Always active subtitle</div>
              <div class="demo-skeleton-page__block d1-skeleton__background">Media Block</div>
            </D1Skeleton>
          </DemoBox>
          <DemoBox size="lg">
            <D1Skeleton :active="false">
              <div class="d1-skeleton__text">Inactive Loaded Title</div>
              <div class="d1-skeleton__textVariant">Inactive loaded subtitle</div>
              <div class="demo-skeleton-page__block d1-skeleton__background">Media Block</div>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Direct CSS Utility Classes (All 9 d1-skeleton__* Classes)">
        <DemoFlex>
          <DemoBox size="md">
            <D1Skeleton active>
              <div class="d1-skeleton__text">Primary text line 1</div>
              <div class="d1-skeleton__text">Primary text line 2</div>
              <div class="d1-skeleton__text">Primary text line 3</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton active>
              <div class="d1-skeleton__textVariant">Variant text line 1</div>
              <div class="d1-skeleton__textVariant">Variant text line 2</div>
              <div class="d1-skeleton__textVariant">Variant text line 3</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md" center>
            <D1Skeleton active>
              <div class="demo-skeleton-page__block d1-skeleton__background">
                Background
              </div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md" center>
            <D1Skeleton active>
              <div class="demo-skeleton-page__block d1-skeleton__backgroundVariant">
                Background Variant
              </div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md" center>
            <D1Skeleton active>
              <div class="demo-skeleton-page__pseudo-before d1-skeleton__backgroundBefore">
                Before
              </div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md" center>
            <D1Skeleton active>
              <div class="demo-skeleton-page__pseudo-after d1-skeleton__backgroundAfter">
                After
              </div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md" center>
            <D1Skeleton active>
              <div class="demo-skeleton-page__bordered d1-skeleton__border">
                Border
              </div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md" center>
            <D1Skeleton active>
              <div class="demo-skeleton-page__bordered d1-skeleton__borderVariant">
                Border Variant
              </div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton active>
              <div class="d1-skeleton__text">Visible Label</div>
              <div class="d1-skeleton__none">Hidden when skeleton is active</div>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Scoped Slot (#default with SkeletonClassesList Props)">
        <DemoFlex align="center">
          <D1Button label="Toggle Slot Skeleton" @click="toggleSlotActive" />
          <DemoValue label="Slot Active" :value="slotActive" />
        </DemoFlex>
        <DemoBox size="lg">
          <D1Skeleton :active="slotActive">
            <template
              #default="{
                classText,
                classTextVariant,
                classBackground,
                classBackgroundVariant,
                classBackgroundBefore,
                classBackgroundAfter,
                classBorder,
                classBorderVariant,
                classNone
              }"
            >
              <DemoFlex align="center">
                <span :class="classText">Scoped Text</span>
                <span :class="classTextVariant">Scoped Text Variant</span>
                <div :class="['demo-skeleton-page__block', classBackground]">BG</div>
                <div :class="['demo-skeleton-page__block', classBackgroundVariant]">BG Variant</div>
                <div :class="['demo-skeleton-page__pseudo-before', classBackgroundBefore]">Before</div>
                <div :class="['demo-skeleton-page__pseudo-after', classBackgroundAfter]">After</div>
                <div :class="['demo-skeleton-page__bordered', classBorder]">Border</div>
                <div :class="['demo-skeleton-page__bordered', classBorderVariant]">Border Variant</div>
                <span :class="classNone">Auxiliary Badge (Hidden in Skeleton)</span>
              </DemoFlex>
            </template>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Visibility & State Combinations (active, invisible, Pending Delay, Negative Fallbacks)">
        <DemoFlex>
          <DemoBox size="md">
            <D1Skeleton :active="false">
              <div class="d1-skeleton__text">active=false (default)</div>
              <div>Unmasked content</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="false" :invisible="false">
              <div class="d1-skeleton__text">active=false, invisible=false</div>
              <div>Unmasked content</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton active :invisible="true">
              <div class="d1-skeleton__text">active=true, invisible=true</div>
              <div>Masked &amp; invisible</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton active :invisible="false">
              <div class="d1-skeleton__text">active=true, invisible=false</div>
              <div>Visible plain child node</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton active :invisible="true" :delay="60000">
              <div class="d1-skeleton__text">Pending delay (invisible=true)</div>
              <div>Immediately hidden during delay</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton active :invisible="false" :delay="60000">
              <div class="d1-skeleton__text">Pending delay (invisible=false)</div>
              <div>Remains visible during delay</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton active :delay="-50" :delayHide="-100">
              <div class="d1-skeleton__text">Negative delays (-50 / -100)</div>
              <div>Immediate fallback</div>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Delays & Accepted Data Types (number and string for delay / delayHide)">
        <DemoFlex align="center">
          <D1Button label="Toggle Delays" @click="toggleDelaysActive" />
          <DemoValue label="Delays Active" :value="delaysActive" />
        </DemoFlex>
        <DemoFlex>
          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" :delay="0" :delayHide="0">
              <div class="d1-skeleton__text">Number: 0 / 0</div>
              <div class="d1-skeleton__textVariant">Immediate show &amp; hide</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" :delay="360" :delayHide="0">
              <div class="d1-skeleton__text">Number: 360 / 0</div>
              <div class="d1-skeleton__textVariant">Standard show delay</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" delay="1000" delayHide="0">
              <div class="d1-skeleton__text">String: "1000" / "0"</div>
              <div class="d1-skeleton__textVariant">Slow show delay</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" :delay="0" :delayHide="1000">
              <div class="d1-skeleton__text">Number: 0 / 1000</div>
              <div class="d1-skeleton__textVariant">Delayed hiding</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" delay="360" delayHide="800">
              <div class="d1-skeleton__text">String: "360" / "800"</div>
              <div class="d1-skeleton__textVariant">Combined delays</div>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Provider Inheritance & Child Components (Nested D1Skeleton, isSkeleton, D1SkeletonItem)">
        <DemoFlex align="center">
          <D1Button label="Toggle Parent Active" @click="toggleParentActive" />
          <D1Button label="Toggle Nested Child Active" @click="toggleNestedChildActive" />
          <DemoValue label="Parent" :value="parentActive" />
          <DemoValue label="Nested Child" :value="nestedChildActive" />
        </DemoFlex>
        <DemoBox size="lg">
          <D1Skeleton :active="parentActive">
            <D1Cell
              label="Jane Doe"
              description="Lead Product Designer"
              caption="Online"
              icon="person"
              iconTrailing="chevron_right"
              isSkeleton
            />
            <DemoFlex align="center">
              <D1Icon icon="home" size="lg" isSkeleton />
              <D1Button label="Send Message" icon="send" isSkeleton />
              <D1SkeletonItem text label="Static SkeletonItem Label" />
              <D1SkeletonItem textVariant :length="4" />
              <D1SkeletonItem background class="demo-skeleton-page__block" />
              <D1SkeletonItem backgroundVariant class="demo-skeleton-page__block" />
              <D1SkeletonItem border class="demo-skeleton-page__bordered" />
              <D1SkeletonItem borderVariant class="demo-skeleton-page__bordered" />
            </DemoFlex>
            <DemoBox size="sm">
              <D1Skeleton :active="nestedChildActive">
                <div class="d1-skeleton__text">Nested D1Skeleton (Inherits Parent or Activates Independently)</div>
                <div class="d1-skeleton__textVariant">Secondary inherited text line</div>
              </D1Skeleton>
            </DemoBox>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Control via Expose Method (isActive)">
        <DemoFlex align="center">
          <D1Button label="Activate Immediate" @click="activateExposeImmediate" />
          <D1Button label="Activate Delayed (500ms)" @click="activateExposeDelayed" />
          <D1Button label="Deactivate" @click="deactivateExpose" />
          <D1Button label="Read Expose State" @click="readExposeState" />
        </DemoFlex>
        <DemoBox size="md">
          <D1Skeleton
            ref="skeletonRef"
            :active="exposeActive"
            :delay="exposeDelay"
            :delayHide="exposeDelayHide"
          >
            <div class="d1-skeleton__text">Controlled Skeleton Instance</div>
            <div class="d1-skeleton__textVariant">Inspect exposed isActive() status below</div>
          </D1Skeleton>
        </DemoBox>
        <DemoValue label="Expose State" :value="exposeStatus" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-skeleton-page {
  display: block;

  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 48px;
  }

  &__bordered {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 48px;
    border-width: 2px;
    border-style: solid;
  }

  &__pseudo-before {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 48px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
    }
  }

  &__pseudo-after {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 48px;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }
  }
}
</style>
