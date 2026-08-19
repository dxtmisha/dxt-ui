# Skeleton Usage & Architecture Guide (`@dxtmisha/constructor`)

Comprehensive developer and AI guide on **how to use the Skeleton loading system in UI templates** and how it is implemented under the hood in `@dxtmisha/constructor` and design libraries (e.g. `@dxtmisha/d1`, `@coralclub/c3`).

---

## 1. Core Philosophy: Zero-Duplication Skeleton

In `dxt-ui` and derivative design systems, Skeleton loading is **non-destructive**. 

### 🚫 The Anti-Pattern (NEVER DO THIS)
Do NOT duplicate templates using `v-if="isLoading"` and `v-else` with custom gray placeholder boxes:
```vue
<!-- ❌ WRONG: Duplicated markup, fragile sizing, hardcoded loader styles -->
<div v-if="isLoading" class="card-skeleton">
  <div class="skeleton-avatar" style="width: 48px; height: 48px; background: #eee;" />
  <div class="skeleton-title" style="width: 140px; height: 20px; background: #eee;" />
  <div class="skeleton-text" style="width: 220px; height: 16px; background: #eee;" />
</div>
<div v-else class="card">
  <img class="card__avatar" :src="avatar" />
  <h3 class="card__title">{{ title }}</h3>
  <p class="card__text">{{ description }}</p>
</div>
```

### ✅ The Design System Pattern (ALWAYS DO THIS)
Wrap the **SAME REAL MARKUP** in `<D1Skeleton :active="isLoading">` (or `<C3Skeleton :active="isLoading">`). Add skeleton classes (`*-skeleton__text`, `*-skeleton__background`) to HTML tags and the `is-skeleton` prop to UI components:

```vue
<!-- ✅ RIGHT: Single markup tree, perfect layout match, zero duplication -->
<D1Skeleton :active="isLoading">
  <div class="card">
    <div class="card__avatar d1-skeleton__background">
      <img :src="avatar" />
    </div>
    <h3 class="card__title d1-skeleton__text">{{ title }}</h3>
    <p class="card__text d1-skeleton__textVariant">{{ description }}</p>
    <D1Button is-skeleton primary label="Submit" />
  </div>
</D1Skeleton>
```

- **When `isLoading === false`**: The classes (`__text`, `__background`, etc.) and `is-skeleton` are completely transparent and inactive. The real content, real typography, and real styles render normally.
- **When `isLoading === true`**: The root `<D1Skeleton>` activates pulsing animation (`&--active`). Elements with skeleton classes automatically become pulsing placeholders. All icons/SVGs and default text become transparent.

---

## 2. Skeleton Classes on HTML Elements

When building templates inside `<D1Skeleton>` / `<C3Skeleton>`, apply these classes directly to HTML tags:

```scss
// Class naming convention: <designPrefix>-skeleton__<type>
// Examples for d1: d1-skeleton__text, d1-skeleton__background
// Examples for c3: c3-skeleton__text, c3-skeleton__background
```

| Class Name | Target HTML Elements | What It Does / Visual Effect |
|---|---|---|
| `*-skeleton__text` | `<h1>`–`<h6>`, `<p>`, `<span>`, `<label>`, `<a>`, `<div class="font--*">` | **Text Skeleton Bar:** Uses `line-through` text-decoration with font-relative thickness (`0.64 * font-size`) and `text-decoration-skip: spaces`. Renders a thick pulsing bar over every word using `--sys-color`. Preserves word spaces and multi-line wrapping. |
| `*-skeleton__textVariant` | `<p>`, `<span>`, subtitles, hints, secondary labels | **Variant Text Bar:** Same text masking as `__text`, but uses the secondary/variant color token (`--sys-backgroundColor`). |
| `*-skeleton__background` | `<div>`, `<figure>`, `<section>`, avatars, badges, image wrappers | **Background Block:** Fills the element's background with `--sys-backgroundColor` as a solid rectangular or rounded pulsing block. |
| `*-skeleton__backgroundAfter` | Elements with `::after` pseudo-elements | Applies skeleton background to the `::after` pseudo-element. |
| `*-skeleton__backgroundBefore` | Elements with `::before` pseudo-elements | Applies skeleton background to the `::before` pseudo-element. |
| `*-skeleton__backgroundVariant` | Accent cards, badges, highlighted blocks | Fills the element's background with `--sys-color`. |
| `*-skeleton__border` | Bordered containers, outlined boxes | Replaces border color with `--sys-borderColor`. |
| `*-skeleton__borderVariant` | Outlined elements | Replaces border color with `--sys-color`. |
| `*-skeleton__none` | Decorative icons, arrows, badges, extra controls | **Hides Element:** Makes element completely transparent (`opacity: 0`, `color: transparent`, `background: transparent`) so it does not interfere during loading, while keeping layout space. |

---

## 3. UI Library Components Inside `<Skeleton>`

Components from the design system (`Button`, `Input`, `Field`, `Select`, `Table`, `Tabs`, `ProgressBar`, `Slider`, etc.) have built-in `SkeletonInclude` support.

### How to use on components:
Pass `is-skeleton` (or `:is-skeleton="true"` / `:is-skeleton="isUserLoading"`):

```vue
<D1Skeleton :active="isLoading">
  <!-- Inputs turn into skeleton input fields -->
  <D1Input
    v-model="email"
    label="Email Address"
    is-skeleton
    :disabled="isLoading"
  />

  <!-- Buttons turn into skeleton button shapes -->
  <D1Button
    primary
    label="Save Changes"
    is-skeleton
    :disabled="isLoading"
  />
</D1Skeleton>
```

> **Note:** Even if `is-skeleton` is always present on a component (e.g. `<D1Button is-skeleton />`), it will only show the skeleton pulse when its parent `<D1Skeleton :active="true">` is active!

---

## 4. Comprehensive Practical Examples

### Example 1: Auth / Login Form

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { D1Skeleton, D1Input, D1Button } from '@dxtmisha/d1'

const isLoading = ref(true)
const login = ref('')
const password = ref('')
</script>

<template>
  <div class="auth-card">
    <D1Skeleton :active="isLoading" class="auth-card__skeleton">
      <!-- Section Title with Text Skeleton -->
      <h2 class="auth-card__title d1-skeleton__text">
        Welcome Back
      </h2>
      <p class="auth-card__subtitle d1-skeleton__textVariant">
        Please enter your credentials to continue
      </p>

      <!-- Form with skeleton-enabled inputs -->
      <form class="auth-card__form" @submit.prevent>
        <D1Input
          v-model="login"
          label="Login / ID"
          placeholder="Enter ID"
          is-skeleton
          :disabled="isLoading"
        />

        <D1Input
          v-model="password"
          type="password"
          label="Password"
          placeholder="Enter password"
          is-skeleton
          :disabled="isLoading"
        />

        <!-- Secondary action link with text skeleton -->
        <a href="#forgot" class="auth-card__forgot d1-skeleton__text">
          Forgot Password?
        </a>

        <!-- Submit Button with skeleton shape -->
        <D1Button
          primary
          label="Sign In"
          adaptive="block"
          is-skeleton
          :disabled="isLoading"
        />
      </form>

      <!-- Secondary Registration Section -->
      <div class="auth-card__register">
        <span class="d1-skeleton__text">Don't have an account?</span>
        <D1Button
          outlined
          label="Register"
          is-skeleton
        />
      </div>
    </D1Skeleton>
  </div>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as ui;

.auth-card {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &__skeleton {
    @include ui.flexStretchY;
    gap: 16px;
  }

  &__form {
    @include ui.flexStretchY;
    gap: 12px;
  }

  &__register {
    @include ui.flexY;
    align-items: center;
    gap: 8px;
    text-align: center;
  }
}
</style>
```

---

### Example 2: User Profile Card (Avatar + Details + Actions)

```vue
<script setup lang="ts">
import { D1Skeleton, D1Button } from '@dxtmisha/d1'

defineProps<{
  isLoading: boolean
  user: { name: string; email: string; avatarUrl?: string }
}>()
</script>

<template>
  <D1Skeleton :active="isLoading">
    <div class="profile-card">
      <!-- Avatar: uses d1-skeleton__background for circular pulse placeholder -->
      <div class="profile-card__avatar d1-skeleton__background">
        <img v-if="user.avatarUrl" :src="user.avatarUrl" alt="Avatar" />
      </div>

      <div class="profile-card__info">
        <!-- Name: uses d1-skeleton__text -->
        <h4 class="profile-card__name d1-skeleton__text">
          {{ user.name || 'Full User Name' }}
        </h4>

        <!-- Email: uses d1-skeleton__textVariant -->
        <p class="profile-card__email d1-skeleton__textVariant">
          {{ user.email || 'user.email@example.com' }}
        </p>
      </div>

      <!-- Action buttons -->
      <div class="profile-card__actions">
        <D1Button is-skeleton label="Edit Profile" size="sm" />
        <D1Button is-skeleton outlined label="Settings" size="sm" />
      </div>
    </div>
  </D1Skeleton>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as ui;

.profile-card {
  @include ui.flexX;
  align-items: center;
  gap: 16px;
  padding: 16px;

  &__avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    @include ui.flexStretchY;
    gap: 4px;
    flex: 1;
  }

  &__actions {
    @include ui.flexX;
    gap: 8px;
  }
}
</style>
```

---

### Example 3: Dedicated Custom Mock Layouts with `<D1SkeletonItem>`

When you need placeholder blocks with variable randomized text lengths before data is fetched:

```vue
<script setup lang="ts">
import { D1Skeleton, D1SkeletonItem } from '@dxtmisha/d1'

defineProps<{ loading: boolean }>()
</script>

<template>
  <D1Skeleton :active="loading">
    <div class="feed-item">
      <!-- Avatar block -->
      <D1SkeletonItem background class="feed-item__avatar" />

      <div class="feed-item__body">
        <!-- Generates random 2 to 4 words for Title -->
        <D1SkeletonItem tag="h4" text :length="[2, 4]" />

        <!-- Generates random 10 to 18 words for Paragraph -->
        <D1SkeletonItem tag="p" textVariant :length="[10, 18]" />
      </div>
    </div>
  </D1Skeleton>
</template>
```

---

## 5. Summary Cheat Sheet for AI Developers

| Scenario | Recommended Approach |
|---|---|
| Entire Page / Section Loading | Wrap the section root in `<D1Skeleton :active="isLoading">`. |
| Normal Headings, Paragraphs, Links | Add `d1-skeleton__text` to `<h1>`–`<h6>`, `<p>`, `<a>`, `<span>`. |
| Secondary / Muted / Hint Text | Add `d1-skeleton__textVariant`. |
| Avatars, Image Boxes, Badges, Spacers | Add `d1-skeleton__background` (and set `border-radius: 50%` if circular). |
| Decorative Icons, Action Menus to hide | Add `d1-skeleton__none` to hide them cleanly during loading. |
| Design System Components (`Button`, `Input`) | Add `is-skeleton` prop directly on the component. |
| Custom dynamic wireframe text lines | Use `<D1SkeletonItem text :length="[min, max]" />`. |
| Duplicating template with `v-if` / `v-else` | **FORBIDDEN.** Keep single markup and let classes handle states. |
