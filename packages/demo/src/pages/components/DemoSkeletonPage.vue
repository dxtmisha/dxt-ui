<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { D1Button } from '@dxtmisha/d1/D1Button'
import type { SkeletonExpose } from '@dxtmisha/constructor/Skeleton'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const basicActive = ref<boolean>(true)
const slotActive = ref<boolean>(true)
const delaysActive = ref<boolean>(false)
const parentActive = ref<boolean>(true)
const nestedChildActive = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(false)
const isAccessibilityActive = ref<boolean>(true)
const isAccessibilityInvisible = ref<boolean>(true)
const blockedClickCount = ref<number>(0)
const isBoundaryActive = ref<boolean>(false)

const skeletonReference = ref<SkeletonExpose | null>(null)
const exposeActive = ref<boolean>(true)
const exposeDelay = ref<number | string>(0)
const exposeDelayHide = ref<number | string>(300)
const manualExposeSnapshot = ref<string>('Not read yet')

const xssPayload = '<img src=x onerror=alert(1)>'
const longUnbrokenText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const longSentenceText = 'Skeleton loading preserves layout geometry while asynchronous user profile, analytics, and localized content are still loading in the background.'

const exposeStatus = computed<string>(() => {
  if (skeletonReference.value) {
    return `isActive(): ${skeletonReference.value.isActive()} | active prop: ${exposeActive.value} | delay: ${exposeDelay.value} | delayHide: ${exposeDelayHide.value} | snapshot: ${manualExposeSnapshot.value}`
  }

  return 'Reference not initialized'
})

const toggleBasicActive = (): void => {
  basicActive.value = !basicActive.value
}

const toggleSlotActive = (): void => {
  slotActive.value = !slotActive.value
}

const toggleDelaysActive = (): void => {
  delaysActive.value = !delaysActive.value
}

const toggleParentActive = (): void => {
  parentActive.value = !parentActive.value
}

const toggleNestedChildActive = (): void => {
  nestedChildActive.value = !nestedChildActive.value
}

const toggleLifecycleMounted = (): void => {
  isLifecycleMounted.value = !isLifecycleMounted.value
}

const toggleAccessibilityActive = (): void => {
  isAccessibilityActive.value = !isAccessibilityActive.value
}

const toggleAccessibilityInvisible = (): void => {
  isAccessibilityInvisible.value = !isAccessibilityInvisible.value
}

const incrementBlockedClickCount = (): void => {
  blockedClickCount.value += 1
}

const toggleBoundaryActive = (): void => {
  isBoundaryActive.value = !isBoundaryActive.value
}

const activateExposeImmediate = async (): Promise<void> => {
  exposeDelay.value = 0
  exposeDelayHide.value = 300
  exposeActive.value = true
  await nextTick()
  manualExposeSnapshot.value = String(skeletonReference.value?.isActive())
}

const activateExposeDelayed = async (): Promise<void> => {
  exposeDelay.value = '500'
  exposeDelayHide.value = '0'
  exposeActive.value = true
  await nextTick()
  manualExposeSnapshot.value = String(skeletonReference.value?.isActive())
}

const deactivateExpose = async (): Promise<void> => {
  exposeActive.value = false
  await nextTick()
  manualExposeSnapshot.value = String(skeletonReference.value?.isActive())
}

const readExposeState = (): void => {
  manualExposeSnapshot.value = String(skeletonReference.value?.isActive())
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Skeleton">
    <D1Section>
      <D1Group label="Basic & Active States (Interactive, Active, Inactive)">
        <DemoFlex align="center">
          <D1Button label="Toggle Active" @click="toggleBasicActive"/>
          <DemoValue label="Active" :value="basicActive"/>
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
          <D1Button label="Toggle Slot Skeleton" @click="toggleSlotActive"/>
          <DemoValue label="Slot Active" :value="slotActive"/>
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
                <div :class="['demo-skeleton-page__block', classBackground]">Background</div>
                <div :class="['demo-skeleton-page__block', classBackgroundVariant]">Background Variant</div>
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
            <D1Skeleton active :delay="-50" :delay-hide="-100">
              <div class="d1-skeleton__text">Negative delays (-50 / -100)</div>
              <div>Immediate fallback</div>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Delays & Accepted Data Types (number and string for delay / delayHide)">
        <DemoFlex align="center">
          <D1Button label="Toggle Delays" @click="toggleDelaysActive"/>
          <DemoValue label="Delays Active" :value="delaysActive"/>
        </DemoFlex>
        <DemoFlex>
          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" :delay="0" :delay-hide="0">
              <div class="d1-skeleton__text">Number: 0 / 0</div>
              <div class="d1-skeleton__textVariant">Immediate show &amp; hide</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" :delay="360" :delay-hide="0">
              <div class="d1-skeleton__text">Number: 360 / 0</div>
              <div class="d1-skeleton__textVariant">Standard show delay</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" delay="1000" delay-hide="0">
              <div class="d1-skeleton__text">String: "1000" / "0"</div>
              <div class="d1-skeleton__textVariant">Slow show delay</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" :delay="0" :delay-hide="1000">
              <div class="d1-skeleton__text">Number: 0 / 1000</div>
              <div class="d1-skeleton__textVariant">Delayed hiding</div>
            </D1Skeleton>
          </DemoBox>

          <DemoBox size="md">
            <D1Skeleton :active="delaysActive" delay="360" delay-hide="800">
              <div class="d1-skeleton__text">String: "360" / "800"</div>
              <div class="d1-skeleton__textVariant">Combined delays</div>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Provider Inheritance & Companion Components (Nested D1Skeleton, isSkeleton, D1SkeletonItem)">
        <DemoFlex align="center">
          <D1Button label="Toggle Parent Active" @click="toggleParentActive"/>
          <D1Button label="Toggle Nested Child Active" @click="toggleNestedChildActive"/>
          <DemoValue label="Parent" :value="parentActive"/>
          <DemoValue label="Nested Child" :value="nestedChildActive"/>
        </DemoFlex>
        <DemoBox size="lg">
          <D1Skeleton :active="parentActive">
            <D1Cell
              label="Jane Doe"
              description="Lead Product Designer"
              caption="Online"
              icon="person"
              icon-trailing="chevron_right"
              is-skeleton
            />
            <DemoFlex align="center">
              <D1Icon icon="home" size="lg" is-skeleton/>
              <D1Button label="Send Message" icon="send" is-skeleton/>
              <D1SkeletonItem tag="h4" text label="Static SkeletonItem Label"/>
              <D1SkeletonItem tag="span" text :label="42"/>
              <D1SkeletonItem tag="p" text-variant :length="4"/>
              <D1SkeletonItem text-variant :length="[2, 5]"/>
              <D1SkeletonItem text length="Custom string length"/>
              <D1SkeletonItem
                text
                :item-attrs="{ 'data-testid': 'skeleton-item-attrs', 'aria-label': 'Custom item attributes' }"
              >
                Default slot content inside SkeletonItem
              </D1SkeletonItem>
              <D1SkeletonItem :tag="D1Button" background label="Component Tag" is-skeleton>
                Component Tag Slot
              </D1SkeletonItem>
              <D1SkeletonItem background class="demo-skeleton-page__block"/>
              <D1SkeletonItem background-variant class="demo-skeleton-page__block"/>
              <D1SkeletonItem border class="demo-skeleton-page__bordered"/>
              <D1SkeletonItem border-variant class="demo-skeleton-page__bordered"/>
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

      <D1Group label="Accessibility (aria-busy & inert Protection)">
        <DemoFlex align="center">
          <D1Button label="Toggle A11y Active" @click="toggleAccessibilityActive"/>
          <D1Button label="Toggle A11y Invisible" @click="toggleAccessibilityInvisible"/>
          <DemoValue label="Active" :value="isAccessibilityActive"/>
          <DemoValue label="Invisible" :value="isAccessibilityInvisible"/>
          <DemoValue label="Inner Click Count" :value="blockedClickCount"/>
        </DemoFlex>
        <DemoBox size="md">
          <D1Skeleton
            data-testid="a11y-skeleton"
            :active="isAccessibilityActive"
            :invisible="isAccessibilityInvisible"
          >
            <div class="d1-skeleton__text">Accessible Status Region</div>
            <D1Button
              label="Protected Inner Action"
              is-skeleton
              @click="incrementBlockedClickCount"
            />
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases (Empty, Whitespace, 0, Long Text, Unicode, XSS, Narrow Container)">
        <DemoFlex align="center">
          <D1Button label="Toggle Boundary Active" @click="toggleBoundaryActive"/>
          <DemoValue label="Boundary Active" :value="isBoundaryActive"/>
        </DemoFlex>
        <DemoFlex>
          <DemoBox size="sm">
            <D1Skeleton data-testid="empty-inactive-skeleton"/>
          </DemoBox>
          <DemoBox size="sm">
            <D1Skeleton data-testid="empty-active-skeleton" active/>
          </DemoBox>
          <DemoBox size="sm">
            <D1Skeleton
              :active="isBoundaryActive"
              :delay="undefined"
              :delay-hide="undefined"
            >
              <div class="d1-skeleton__text">{{ '' }}</div>
              <div class="d1-skeleton__text">{{ '   ' }}</div>
              <div class="d1-skeleton__text">{{ 0 }}</div>
            </D1Skeleton>
          </DemoBox>
          <DemoBox class="demo-skeleton-page__narrow" size="sm">
            <D1Skeleton :active="isBoundaryActive">
              <div class="d1-skeleton__text">{{ longSentenceText }}</div>
              <div class="demo-skeleton-page__unbroken d1-skeleton__textVariant">{{ longUnbrokenText }}</div>
              <div class="d1-skeleton__text">Multilingual: Привет / Học tiếng Việt / 🚀</div>
              <div class="d1-skeleton__textVariant">{{ xssPayload }}</div>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Mount and Unmount During Appearance Delay">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="toggleLifecycleMounted"/>
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox size="md">
          <D1Skeleton v-if="isLifecycleMounted" active :delay="500" data-testid="lifecycle-skeleton">
            <div class="d1-skeleton__text">Delayed content after mount</div>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Control via Expose Method (isActive)">
        <DemoFlex align="center">
          <D1Button label="Activate Immediate" @click="activateExposeImmediate"/>
          <D1Button label="Activate Delayed (500ms)" @click="activateExposeDelayed"/>
          <D1Button label="Deactivate" @click="deactivateExpose"/>
          <D1Button label="Read Expose State" @click="readExposeState"/>
        </DemoFlex>
        <DemoBox size="md">
          <D1Skeleton
            ref="skeletonReference"
            :active="exposeActive"
            :delay="exposeDelay"
            :delay-hide="exposeDelayHide"
          >
            <div class="d1-skeleton__text">Controlled Skeleton Instance</div>
            <div class="d1-skeleton__textVariant">Inspect exposed isActive() status below</div>
          </D1Skeleton>
        </DemoBox>
        <DemoValue label="Expose State" :value="exposeStatus"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-skeleton-page {
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

  &__narrow {
    max-width: 240px;
  }

  &__unbroken {
    overflow-wrap: anywhere;
  }
}
</style>
