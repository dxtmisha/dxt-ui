import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/Classes/MediaSocial - Social Network Profiles and URLs`}),`
`,(0,c.jsx)(t.h1,{id:`mediasocial-class`,children:`MediaSocial Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` class is a `,(0,c.jsx)(t.strong,{children:`Primary Class (Static)`}),` designed for managing social network configurations, profile URL generation, handle extraction, and custom icon overrides across 35+ supported platforms.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Built-in Social Catalog`}),` — preconfigured settings for over 35 global and regional social networks (e.g., GitHub, Telegram, LinkedIn, X, WeChat, Zalo).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Profile URL Construction`}),` — automatically builds canonical profile links from raw usernames or handles (`,(0,c.jsx)(t.code,{children:`getUrl`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Username Extraction`}),` — parses full profile URLs to safely extract handles by stripping prefixes and suffixes (`,(0,c.jsx)(t.code,{children:`getValue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Custom Icon Registry`}),` — allows registering custom SVG icons or icon names per platform (`,(0,c.jsx)(t.code,{children:`addIcon`}),`, `,(0,c.jsx)(t.code,{children:`addIcons`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static Interface`}),` — perform all operations directly on the class without manual instantiation.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`url-and-value-management`,children:`URL and Value Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getUrl(code: InputSocialType | InputSocialTypeValue, value: string): string`}),` — constructs the full profile URL from a username or partial string using the platform's configured prefix and suffix. Returns the value unchanged if it already includes the prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getValue(code: InputSocialType | InputSocialTypeValue, url: string): string`}),` — extracts the raw username or profile handle from a full profile URL by removing the registered prefix and suffix.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`static-registry--icons`,children:`Static Registry & Icons`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: InputSocialType | InputSocialTypeValue): InputSocialItem | undefined`}),` — returns the social network configuration by its code, merged with any custom icon registered for that platform.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getList(): InputSocialList`}),` — returns the complete array of all supported social network configuration items.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addIcon(code: InputSocialTypeValue, icon: string): void`}),` — registers a custom icon string or SVG markup for the specified social network.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addIcons(icons: InputSocialIcons): void`}),` — registers multiple custom icons in batch.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`inputsocialitem`,children:`InputSocialItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: InputSocialType | InputSocialTypeValue`}),` — unique identifier code for the social network.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — human-readable display name of the social platform.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefix?: string`}),` — URL prefix for user profile links (e.g. `,(0,c.jsx)(t.code,{children:`'https://github.com/'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`suffix?: string`}),` — URL suffix for user profile links.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask?: any`}),` — optional input mask configuration for form controls.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — resolved or custom icon markup/name.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`inputsocialtype`,children:`InputSocialType`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum of supported social network codes: `,(0,c.jsx)(t.code,{children:`alipay`}),`, `,(0,c.jsx)(t.code,{children:`baidu`}),`, `,(0,c.jsx)(t.code,{children:`dingtalk`}),`, `,(0,c.jsx)(t.code,{children:`discord`}),`, `,(0,c.jsx)(t.code,{children:`douyin`}),`, `,(0,c.jsx)(t.code,{children:`dzen`}),`, `,(0,c.jsx)(t.code,{children:`facebook`}),`, `,(0,c.jsx)(t.code,{children:`github`}),`, `,(0,c.jsx)(t.code,{children:`gitlab`}),`, `,(0,c.jsx)(t.code,{children:`habr`}),`, `,(0,c.jsx)(t.code,{children:`instagram`}),`, `,(0,c.jsx)(t.code,{children:`line`}),`, `,(0,c.jsx)(t.code,{children:`linkedin`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`messenger`}),`, `,(0,c.jsx)(t.code,{children:`ok`}),`, `,(0,c.jsx)(t.code,{children:`pinterest`}),`, `,(0,c.jsx)(t.code,{children:`qq`}),`, `,(0,c.jsx)(t.code,{children:`reddit`}),`, `,(0,c.jsx)(t.code,{children:`skype`}),`, `,(0,c.jsx)(t.code,{children:`snapchat`}),`, `,(0,c.jsx)(t.code,{children:`telegram`}),`, `,(0,c.jsx)(t.code,{children:`tiktok`}),`, `,(0,c.jsx)(t.code,{children:`tumblr`}),`, `,(0,c.jsx)(t.code,{children:`twitter`}),`, `,(0,c.jsx)(t.code,{children:`viber`}),`, `,(0,c.jsx)(t.code,{children:`vk`}),`, `,(0,c.jsx)(t.code,{children:`wechat`}),`, `,(0,c.jsx)(t.code,{children:`weibo`}),`, `,(0,c.jsx)(t.code,{children:`whatsapp`}),`, `,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`xiaohongshu`}),`, `,(0,c.jsx)(t.code,{children:`youtube`}),`, `,(0,c.jsx)(t.code,{children:`zalo`}),`, `,(0,c.jsx)(t.code,{children:`zhihu`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Build a full profile URL from a username
const profileUrl = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')
// Result: 'https://github.com/dxtmisha'

// Extract raw username from a full profile URL
const username = MediaSocial.getValue(InputSocialType.telegram, 'https://t.me/dxtmisha')
// Result: 'dxtmisha'

// Retrieve configuration item
const githubConfig = MediaSocial.get(InputSocialType.github)
console.log(githubConfig?.name) // 'GitHub'
console.log(githubConfig?.prefix) // 'https://github.com/'

// Override or register a custom icon
MediaSocial.addIcon(InputSocialType.telegram, '<svg class="custom-tg">...</svg>')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};