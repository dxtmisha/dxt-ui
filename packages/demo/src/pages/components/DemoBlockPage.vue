<script setup lang="ts">
import { ref } from 'vue'
import type { HeaderProps } from '@dxtmisha/d1'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const rootTag = ref<string>('section')
const headerTag = ref<NonNullable<HeaderProps['tag']>>('h3')
const iconTurn = ref<boolean>(false)
const iconHide = ref<boolean>(false)
const isSelected = ref<boolean>(false)
const blockArea = ref<string>('block')
const actionClicks = ref<number>(0)
const lifecycleMounted = ref<boolean>(true)

const rootTags: readonly string[] = ['div', 'section', 'article', 'aside']
const headerTags: readonly NonNullable<HeaderProps['tag']>[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Block">
    <D1Section>
      <D1Group label="Full Anatomy (Headline, Header, Description & Content)">
        <DemoBox>
          <D1Block
            data-testid="demo-block-full"
            headline="ACCOUNT SECURITY"
            label="Two-Factor Authentication"
            caption="Recommended"
            description="Protect your account by requiring a second verification factor at sign-in."
            icon="lock"
          >
            <p>Configure authenticator apps, passkeys, or backup recovery codes below.</p>
          </D1Block>
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
          <D1Block
            data-testid="demo-block-reactive-tags"
            :tag="rootTag"
            :tag-header="headerTag"
            label="Semantic Section Block"
            label-id="demo-block-custom-label-id"
            description="Inspect root tagName, heading tagName, aria-labelledby, and aria-describedby."
            description-id="demo-block-custom-desc-id"
          >
            <p>Semantic section body content.</p>
          </D1Block>
        </DemoBox>
      </D1Group>

      <D1Group label="Icons, States, Decorative Caption & headerAttrs">
        <DemoFlex>
          <D1Button label="Toggle Icon Turn" size="sm" @click="iconTurn = !iconTurn"/>
          <D1Button label="Toggle Icon Hide" size="sm" outline @click="iconHide = !iconHide"/>
          <D1Button label="Toggle Selected" size="sm" outline @click="isSelected = !isSelected"/>
        </DemoFlex>
        <DemoValue label="states" :value="{ iconTurn, iconHide, isSelected }"/>
        <DemoBox>
          <D1Block
            data-testid="demo-block-icon-attrs"
            headline="WORKSPACE"
            label="Team Repository"
            caption="(private)"
            caption-decorative
            icon="expand_more"
            :icon-turn="iconTurn"
            :icon-hide="iconHide"
            icon-dir
            icon-palette
            :icon-attrs="{ 'data-block-icon': 'repo' }"
            :header-attrs="{ class: 'demo-block-header-extra' }"
          >
            <p>Header attributes merge non-destructively with top-level block properties.</p>
          </D1Block>
        </DemoBox>
        <DemoBox>
          <D1Block
            label="Object & Active State Icon"
            caption="Selected icon swap"
            :icon="{ icon: 'star', iconActive: 'favorite', palette: 'amber' }"
            :selected="isSelected"
            description="Toggle Selected above to switch between star and favorite."
          />
        </DemoBox>
        <DemoBox>
          <D1Block
            label="Null Icon Block"
            :icon="null"
            description="Explicitly passes icon=null without rendering an icon element."
          />
        </DemoBox>
      </D1Group>

      <D1Group label="All Slots (#headline, #label, #caption, #trailing, #description, #default)">
        <DemoValue label="actionClicks" :value="actionClicks"/>
        <DemoBox>
          <D1Block data-testid="demo-block-slots">
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
              <p>Default slot content inside slot-driven block.</p>
            </template>
          </D1Block>
        </DemoBox>
      </D1Group>

      <D1Group label="Compound Integrations">
        <DemoBox>
          <D1Block
            headline="INTEGRATED MODULES"
            label="Notification Preferences"
            description="Combines D1Badge in #trailing with D1Bleed and D1Button inside default content."
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
          </D1Block>
        </DemoBox>
      </D1Group>

      <D1Group label="Cascading Area Context (Block vs Header)">
        <DemoFlex>
          <D1Button label="area = block" size="sm" @click="blockArea = 'block'"/>
          <D1Button label="area = compact" size="sm" outline @click="blockArea = 'compact'"/>
        </DemoFlex>
        <DemoValue label="blockArea" :value="blockArea"/>
        <DemoBox>
          <D1Block
            data-testid="demo-block-area"
            label="Area Context Container"
            :area="blockArea"
          >
            <template #trailing>
              <D1Area>
                <template #header>
                  <span data-testid="demo-block-trailing-area">Trailing Area: #header</span>
                </template>
                <template #block>
                  <span data-testid="demo-block-trailing-area">Trailing Area: #block</span>
                </template>
              </D1Area>
            </template>
            <D1Area>
              <template #block>
                <span data-testid="demo-block-body-area">Content Area: #block</span>
              </template>
              <template #compact>
                <span data-testid="demo-block-body-area">Content Area: #compact</span>
              </template>
            </D1Area>
          </D1Block>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility">
        <DemoBox>
          <D1Block
            data-testid="demo-block-a11y"
            tag="section"
            role="region"
            :header-attrs="{ labelId: 'demo-block-header-attrs-id', label: 'Accessible Landmark Section' }"
            description="Verifies role='region', headerAttrs.labelId fallback for aria-labelledby, and keyboard focus order."
          >
            <template #trailing>
              <D1Button label="Header Action" size="sm" outline/>
            </template>
            <D1Button label="Body Action" size="sm"/>
          </D1Block>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1Block data-testid="demo-block-empty"/>
        </DemoBox>
        <DemoBox>
          <D1Block
            data-testid="demo-block-whitespace"
            headline="   "
            label="   "
            caption="   "
            description="   "
          >
            <p>Whitespace props do not render an empty .d1-block__body wrapper.</p>
          </D1Block>
        </DemoBox>
        <DemoBox>
          <D1Block data-testid="demo-block-body-only" class="demo-block-custom">
            <p>Minimal block with default slot only (no .d1-block__body wrapper rendered).</p>
          </D1Block>
        </DemoBox>
        <DemoBox>
          <D1Block
            data-testid="demo-block-zero"
            :headline="0"
            :label="0"
            :caption="0"
            :description="0"
          >
            <p>Numeric zero rendered across headline, label, caption, and description.</p>
          </D1Block>
        </DemoBox>
        <DemoBox>
          <D1Block
            :headline="-42"
            label="A"
            :caption="99.95"
            :description="-12.5"
          >
            <p>Single-character label with negative and decimal numbers.</p>
          </D1Block>
        </DemoBox>
        <DemoBox>
          <D1Block
            headline="Unicode • Tiếng Việt • Кириллица 🚀"
            label="SuperLongUnbrokenBlockTitleWithoutAnySpacesOrHyphens1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            description="<script>alert('xss')</script> — <img src=x onerror=alert(1)>"
          >
            <p>Multilingual text and escaped XSS payloads rendered safely.</p>
          </D1Block>
        </DemoBox>
        <DemoBox class="demo-block-page__narrow-box">
          <D1Block
            headline="CONSTRAINED"
            label="Narrow Container Block"
            description="Verifies text wrapping inside a 280px container."
          >
            <p>Narrow body content.</p>
          </D1Block>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="lifecycleMounted ? 'Unmount Block' : 'Mount Block'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="lifecycleMounted">
          <D1Block
            label="Conditional Lifecycle Block"
            description="Mounted and unmounted cleanly via v-if."
            icon="check_circle"
          >
            <p>Lifecycle content inside D1Block.</p>
          </D1Block>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-block-page {
  &__narrow-box {
    max-width: 280px;
  }
}
</style>
