import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/2. Social Networks`}),`
`,(0,c.jsx)(t.h1,{id:`social-networks-connection-and-integration`,children:`Social Networks: Connection and Integration`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` package includes a complete social network subsystem covering 35+ global and regional platforms (GitHub, Telegram, LinkedIn, X, WeChat, Zalo, Discord, YouTube, etc.). It delivers official brand vector icons, URL prefix/suffix formatting, username parsing, input masks, and dynamic icon overrides.`]}),`
`,(0,c.jsx)(t.h2,{id:`connection-approaches`,children:`Connection Approaches`}),`
`,(0,c.jsx)(t.p,{children:`Depending on your application needs, you can integrate social network assets in three ways:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Social Icons Dictionary & Registration (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`)`]}),` — access brand vector icons via the `,(0,c.jsx)(t.code,{children:`socialIcons`}),` dictionary or initialize the static registry via `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`URL Construction & Parsing via `,(0,c.jsx)(t.code,{children:`MediaSocial`})]}),` — build canonical profile URLs (`,(0,c.jsx)(t.code,{children:`getUrl`}),`) or extract clean handles (`,(0,c.jsx)(t.code,{children:`getValue`}),`) for profile forms and input fields.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Custom Icon Registry`}),` — override built-in social icons or add custom corporate links globally across all components.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`the-socialsts-module-dxtmishamediasocials`,children:[`The `,(0,c.jsx)(t.code,{children:`socials.ts`}),` Module (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`socials.ts`}),` module serves as the primary asset source for social brand vector icons. It exports:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`socialIcons`}),` dictionary indexed by `,(0,c.jsx)(t.code,{children:`InputSocialType`}),` enum codes.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),` initialization function.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Note: Individual brand icons are not exported as separate variables; all icons are accessed through the `,(0,c.jsx)(t.code,{children:`socialIcons`}),` dictionary or resolved dynamically via `,(0,c.jsx)(t.code,{children:`MediaSocial`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-registersocialicons-helper`,children:[`1. `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),` Helper`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),` function automatically loads all 35+ default brand SVG icons from `,(0,c.jsx)(t.code,{children:`socialIcons`}),` into the `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` static registry with a single call:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { registerSocialIcons } from '@dxtmisha/media/socials'

// Registers all default social brand icons in the MediaSocial registry
registerSocialIcons()
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Once called, `,(0,c.jsx)(t.code,{children:`MediaSocial.get(code)`}),` immediately has access to all registered vector icons, which are automatically used by components like `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-the-socialicons-dictionary`,children:[`2. The `,(0,c.jsx)(t.code,{children:`socialIcons`}),` Dictionary`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`socialIcons`}),` object is a typed dictionary (`,(0,c.jsx)(t.code,{children:`InputSocialIcons`}),`) mapping each `,(0,c.jsx)(t.code,{children:`InputSocialType`}),` enum key to its vector SVG markup:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { socialIcons } from '@dxtmisha/media/socials'
import { InputSocialType } from '@dxtmisha/media'

// Direct dictionary access by enum key
const githubSvg = socialIcons[InputSocialType.github]
const telegramSvg = socialIcons[InputSocialType.telegram]
const linkedinSvg = socialIcons[InputSocialType.linkedin]
`})}),`
`,(0,c.jsx)(t.p,{children:`In Vue 3 templates:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="social-links">
    <a href="https://github.com/dxtmisha" target="_blank" v-html="socialIcons['github']" />
    <a href="https://t.me/dxtmisha" target="_blank" v-html="socialIcons['telegram']" />
  </div>
</template>

<script setup lang="ts">
import { socialIcons } from '@dxtmisha/media/socials'
<\/script>
`})}),`
`,(0,c.jsxs)(t.h2,{id:`url-management-with-mediasocial`,children:[`URL Management with `,(0,c.jsx)(t.code,{children:`MediaSocial`})]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` class provides helpers to construct canonical profile URLs and extract clean handles without manual regular expressions.`]}),`
`,(0,c.jsxs)(t.h3,{id:`constructing-profile-urls-geturl`,children:[`Constructing Profile URLs (`,(0,c.jsx)(t.code,{children:`getUrl`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Constructs a full, valid profile URL from a raw username or handle:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Constructs 'https://github.com/dxtmisha'
const githubUrl = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')

// Constructs 'https://t.me/dxtmisha'
const tgUrl = MediaSocial.getUrl(InputSocialType.telegram, 'dxtmisha')

// If the input already contains the prefix, it is safely returned as-is
const existingUrl = MediaSocial.getUrl(InputSocialType.github, 'https://github.com/dxtmisha')
// Returns: 'https://github.com/dxtmisha'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`extracting-handles-getvalue`,children:[`Extracting Handles (`,(0,c.jsx)(t.code,{children:`getValue`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Extracts the raw username from a full profile URL by stripping the platform's configured prefix and suffix:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Extracts 'dxtmisha'
const username = MediaSocial.getValue(InputSocialType.telegram, 'https://t.me/dxtmisha')

// Extracts 'dxtmisha'
const githubUser = MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha')
`})}),`
`,(0,c.jsx)(t.h2,{id:`registering-custom-social-icons`,children:`Registering Custom Social Icons`}),`
`,(0,c.jsxs)(t.p,{children:[`If your design system uses customized brand icons or needs to override default vectors with monochrome or theme-colored variants, use `,(0,c.jsx)(t.code,{children:`MediaSocial.addIcon`}),` or `,(0,c.jsx)(t.code,{children:`MediaSocial.addIcons`}),`:`]}),`
`,(0,c.jsx)(t.h3,{id:`single-icon-override`,children:`Single Icon Override`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Override Telegram icon with a custom SVG
MediaSocial.addIcon(
  InputSocialType.telegram,
  '<svg class="custom-telegram" viewBox="0 0 24 24"><path d="..."/></svg>'
)
`})}),`
`,(0,c.jsx)(t.h3,{id:`batch-override`,children:`Batch Override`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

MediaSocial.addIcons({
  [InputSocialType.github]: '<svg class="brand-gh">...</svg>',
  [InputSocialType.x]: '<svg class="brand-x">...</svg>'
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Once registered, any component calling `,(0,c.jsx)(t.code,{children:`MediaSocial.get(code)`}),` or using `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),` will immediately render the custom icon.`]}),`
`,(0,c.jsx)(t.h2,{id:`querying-social-catalog--metadata`,children:`Querying Social Catalog & Metadata`}),`
`,(0,c.jsx)(t.p,{children:`You can retrieve the entire list of supported platforms or look up specific configuration items:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Get configuration for a single platform
const linkedin = MediaSocial.get(InputSocialType.linkedin)
console.log(linkedin?.name)   // 'LinkedIn'
console.log(linkedin?.prefix) // 'https://www.linkedin.com/in/'
console.log(linkedin?.icon)   // Vector SVG string

// Retrieve the full array of all 35+ supported platforms
const allSocials = MediaSocial.getList()
`})}),`
`,(0,c.jsx)(t.h2,{id:`integration-with-design-system-components`,children:`Integration with Design System Components`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MediaSocial`}),` integrates seamlessly with form inputs like `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),` in `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <d1-input-social
    v-model="socialHandle"
    :type="InputSocialType.telegram"
    label="Telegram Username"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputSocialType } from '@dxtmisha/media'

const socialHandle = ref('dxtmisha')
<\/script>
`})}),`
`,(0,c.jsx)(t.h2,{id:`supported-platforms-reference`,children:`Supported Platforms Reference`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`InputSocialType`}),` enum defines 35+ supported social platforms:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`GitHub (`,(0,c.jsx)(t.code,{children:`github`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://github.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Telegram (`,(0,c.jsx)(t.code,{children:`telegram`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://t.me/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`LinkedIn (`,(0,c.jsx)(t.code,{children:`linkedin`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.linkedin.com/in/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`X / Twitter (`,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`twitter`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://x.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Discord (`,(0,c.jsx)(t.code,{children:`discord`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://discord.gg/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`YouTube (`,(0,c.jsx)(t.code,{children:`youtube`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.youtube.com/@`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Instagram (`,(0,c.jsx)(t.code,{children:`instagram`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.instagram.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Facebook (`,(0,c.jsx)(t.code,{children:`facebook`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.facebook.com/`})]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.strong,{children:[`WeChat (`,(0,c.jsx)(t.code,{children:`wechat`}),`)`]})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Zalo (`,(0,c.jsx)(t.code,{children:`zalo`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://zalo.me/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`VK (`,(0,c.jsx)(t.code,{children:`vk`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://vk.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`TikTok (`,(0,c.jsx)(t.code,{children:`tiktok`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.tiktok.com/@`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Reddit (`,(0,c.jsx)(t.code,{children:`reddit`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.reddit.com/user/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Medium (`,(0,c.jsx)(t.code,{children:`medium`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://medium.com/@`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};