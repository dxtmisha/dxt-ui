<script setup lang="ts">
import { ref } from 'vue'
import type { HeaderProps } from '@dxtmisha/d1'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const rootTag = ref<string>('div')
const headerTag = ref<NonNullable<HeaderProps['tag']>>('h4')
const iconTurn = ref<boolean>(false)
const iconHide = ref<boolean>(false)
const iconDir = ref<boolean>(true)
const iconPalette = ref<boolean>(true)
const isSelected = ref<boolean>(false)
const captionDecorative = ref<boolean>(true)
const groupArea = ref<string>('group')
const actionClicks = ref<number>(0)
const lifecycleMounted = ref<boolean>(true)

const rootTags: readonly string[] = ['div', 'section', 'article', 'aside']
const headerTags: readonly NonNullable<HeaderProps['tag']>[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
</script>

<template>
  <DemoLinkBlack/>
  <D1Page class="demo-group-page" label="Group">
    <D1Section>
      <D1Group label="Full Anatomy (Default div & h4 Hierarchy)">
        <DemoBox>
          <D1Group
            data-testid="demo-group-full"
            headline="ACCOUNT SECURITY"
            label="Two-Factor Authentication"
            caption="Recommended"
            description="Protect your account by requiring a second verification factor at sign-in."
            icon="lock"
          >
            <p>Configure authenticator apps, passkeys, or backup recovery codes below.</p>
          </D1Group>
        </DemoBox>
      </D1Group>

      <D1Group label="Polymorphic Root Tag & Header Heading Level">
        <DemoFlex>
          <D1Button
            v-for="tagItem in rootTags"
            :key="tagItem"
            :label="tagItem"
            :outline="rootTag !== tagItem"
            size="sm"
            @click="rootTag = tagItem"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            v-for="headerTagItem in headerTags"
            :key="headerTagItem"
            :label="'header: ' + headerTagItem"
            :outline="headerTag !== headerTagItem"
            size="sm"
            @click="headerTag = headerTagItem"
          />
        </DemoFlex>
        <DemoValue label="tags" :value="{ rootTag, headerTag }"/>
        <DemoBox>
          <D1Group
            data-testid="demo-group-reactive-tags"
            :tag="rootTag"
            :tag-header="headerTag"
            label="Semantic Section Group"
            label-id="demo-group-custom-label-id"
            description="Inspect root tagName, heading tagName, aria-labelledby, and aria-describedby."
            description-id="demo-group-custom-desc-id"
          >
            <p>Semantic group body content with reactive tag and heading level.</p>
          </D1Group>
        </DemoBox>
      </D1Group>

      <D1Group label="Icons, States, Decorative Caption & headerAttrs">
        <DemoFlex>
          <D1Button
            label="Toggle Icon Turn"
            size="sm"
            :outline="!iconTurn"
            @click="iconTurn = !iconTurn"
          />
          <D1Button
            label="Toggle Icon Hide"
            size="sm"
            :outline="!iconHide"
            @click="iconHide = !iconHide"
          />
          <D1Button
            label="Toggle Icon Dir"
            size="sm"
            :outline="!iconDir"
            @click="iconDir = !iconDir"
          />
          <D1Button
            label="Toggle Icon Palette"
            size="sm"
            :outline="!iconPalette"
            @click="iconPalette = !iconPalette"
          />
          <D1Button
            label="Toggle Selected"
            size="sm"
            :outline="!isSelected"
            @click="isSelected = !isSelected"
          />
          <D1Button
            label="Toggle Decorative Caption"
            size="sm"
            :outline="!captionDecorative"
            @click="captionDecorative = !captionDecorative"
          />
        </DemoFlex>
        <DemoValue
          label="states"
          :value="{ iconTurn, iconHide, iconDir, iconPalette, isSelected, captionDecorative }"
        />
        <DemoBox class="d1-palette--blue">
          <D1Group
            data-testid="demo-group-icon-attrs"
            headline="WORKSPACE"
            label="Team Repository"
            caption="(private)"
            :caption-decorative="captionDecorative"
            icon="expand_more"
            :icon-turn="iconTurn"
            :icon-hide="iconHide"
            :icon-dir="iconDir"
            :icon-palette="iconPalette"
            :icon-attrs="{ 'data-group-icon': 'repo' }"
            :header-attrs="{ class: 'demo-group-header-extra' }"
          >
            <p>Header attributes and icon attributes merge non-destructively with group properties.</p>
          </D1Group>
        </DemoBox>
        <DemoBox>
          <D1Group
            data-testid="demo-group-icon-object"
            label="Object & Active State Icon"
            caption="Selected icon swap"
            :icon="{ icon: 'star', iconActive: 'favorite', palette: 'amber' }"
            :selected="isSelected"
            description="Toggle Selected above to switch between star and favorite."
          />
        </DemoBox>
        <DemoBox dir="rtl">
          <D1Group
            data-testid="demo-group-icon-rtl"
            label="RTL Directional Icon"
            caption="Mirrored when iconDir is active"
            icon="arrow_forward"
            :icon-dir="iconDir"
            description="Verifies directional mirroring in an RTL container."
          />
        </DemoBox>
        <DemoBox>
          <D1Group
            data-testid="demo-group-icon-null"
            label="Null Icon Group"
            :icon="null"
            description="Explicitly passes icon=null without rendering an icon element."
          />
        </DemoBox>
      </D1Group>

      <D1Group label="All Slots (#headline, #label, #caption, #trailing, #description, #default)">
        <DemoValue label="actionClicks" :value="actionClicks"/>
        <DemoBox>
          <D1Group data-testid="demo-group-slots">
            <template #headline>
              <span>SLOT HEADLINE</span>
            </template>
            <template #label>
              <span>Slot-Only Header Label</span>
            </template>
            <template #caption>
              <span>Slot Caption</span>
            </template>
            <template #trailing>
              <D1Button label="Edit" size="sm" @click="actionClicks += 1"/>
            </template>
            <template #description>
              <span>Custom description rendered via #description slot.</span>
            </template>
            <template #default>
              <p>Default slot content inside slot-driven group.</p>
            </template>
          </D1Group>
        </DemoBox>
      </D1Group>

      <D1Group label="Compound Integrations">
        <DemoBox>
          <D1Group
            data-testid="demo-group-compound"
            headline="INTEGRATED MODULES"
            label="Notification Preferences"
            description="Combines D1Badge in #trailing with D1Bleed and D1Alert inside default content."
          >
            <template #trailing>
              <D1Badge overlap="static" label="3" palette="blue"/>
            </template>
            <D1Bleed>
              <D1Alert
                label="Synced across devices"
                description="Changes apply immediately to all signed-in sessions."
                icon="sync"
              />
            </D1Bleed>
          </D1Group>
        </DemoBox>
      </D1Group>

      <D1Group label="Cascading Area Context (Group vs Header)">
        <DemoFlex>
          <D1Button
            label="area = group"
            size="sm"
            :outline="groupArea !== 'group'"
            @click="groupArea = 'group'"
          />
          <D1Button
            label="area = compact"
            size="sm"
            :outline="groupArea !== 'compact'"
            @click="groupArea = 'compact'"
          />
        </DemoFlex>
        <DemoValue label="groupArea" :value="groupArea"/>
        <DemoBox>
          <D1Group
            data-testid="demo-group-area"
            label="Area Context Container"
            :area="groupArea"
          >
            <template #trailing>
              <D1Area>
                <template #header>
                  <span data-testid="demo-group-trailing-area">Trailing Area: #header</span>
                </template>
                <template #group>
                  <span data-testid="demo-group-trailing-area">Trailing Area: #group</span>
                </template>
              </D1Area>
            </template>
            <D1Area>
              <template #group>
                <span data-testid="demo-group-body-area">Content Area: #group</span>
              </template>
              <template #compact>
                <span data-testid="demo-group-body-area">Content Area: #compact</span>
              </template>
            </D1Area>
          </D1Group>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility">
        <DemoBox>
          <D1Group
            data-testid="demo-group-a11y"
            tag="section"
            role="region"
            label="Accessible Landmark Group"
            label-id="demo-group-a11y-label"
            description="Verifies role='region', labelId, descriptionId, aria-labelledby, aria-describedby, and keyboard focus order."
            description-id="demo-group-a11y-desc"
          >
            <template #trailing>
              <D1Button label="Header Action" size="sm" outline/>
            </template>
            <D1Button label="Body Action" size="sm"/>
          </D1Group>
        </DemoBox>
        <DemoBox>
          <D1Group
            data-testid="demo-group-a11y-header-attrs"
            tag="section"
            role="region"
            :header-attrs="{ labelId: 'demo-group-header-attrs-id', label: 'Header Attrs Label Fallback' }"
            description="Verifies headerAttrs.labelId fallback for aria-labelledby."
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1Group data-testid="demo-group-empty"/>
        </DemoBox>
        <DemoBox>
          <D1Group
            data-testid="demo-group-whitespace"
            headline="   "
            label="   "
            caption="   "
            description="   "
          >
            <p>Whitespace props do not render an empty .d1-group__body wrapper.</p>
          </D1Group>
        </DemoBox>
        <DemoBox>
          <D1Group data-testid="demo-group-body-only" class="demo-group-custom">
            <p>Minimal group with default slot only (no .d1-group__body wrapper rendered).</p>
          </D1Group>
        </DemoBox>
        <DemoBox>
          <D1Group
            data-testid="demo-group-zero"
            :headline="0"
            :label="0"
            :caption="0"
            :description="0"
          >
            <p>Numeric zero rendered across headline, label, caption, and description.</p>
          </D1Group>
        </DemoBox>
        <DemoBox>
          <D1Group
            data-testid="demo-group-numeric"
            :headline="-42"
            label="A"
            :caption="99.95"
            :description="-12.5"
          >
            <p>Single-character label with negative and decimal numbers.</p>
          </D1Group>
        </DemoBox>
        <DemoBox>
          <D1Group
            data-testid="demo-group-unicode-xss"
            headline="Unicode • Tiếng Việt • Кириллица 🚀"
            label="SuperLongUnbrokenGroupTitleWithoutAnySpacesOrHyphens1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            description="<script>alert('xss')</script> — <img src=x onerror=alert(1)>"
          >
            <p>Multilingual text and escaped XSS payloads rendered safely.</p>
          </D1Group>
        </DemoBox>
        <DemoBox class="demo-group-page__narrow">
          <D1Group
            data-testid="demo-group-narrow"
            headline="CONSTRAINED"
            label="SuperLongUnbrokenNarrowGroupTitle1234567890"
            description="Verifies text wrapping inside a 260px container."
          >
            <p>Narrow body content.</p>
          </D1Group>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="lifecycleMounted ? 'Unmount Group' : 'Mount Group'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="lifecycleMounted">
          <D1Group
            data-testid="demo-group-lifecycle"
            label="Conditional Lifecycle Group"
            description="Mounted and unmounted cleanly via v-if."
            icon="check_circle"
          >
            <p>Lifecycle content inside D1Group.</p>
          </D1Group>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-group-page {
  &__narrow {
    max-width: 260px;
  }
}
</style>
