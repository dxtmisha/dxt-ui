import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/# About the Library`}),`
`,(0,c.jsx)(t.h1,{id:`dxtmishamedia`,children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`,rel:`nofollow`,children:`@dxtmisha/media`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` is a lightweight, zero-dependency media resource and dataset package for the DXT UI design system and modern web applications. It delivers comprehensive file format classification, social network metadata, country flag vectors, and ISO 3166-1 geographic datasets in a modular, tree-shakeable structure.`]}),`
`,(0,c.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(t.p,{children:`Install the package via npm:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm i @dxtmisha/media
`})}),`
`,(0,c.jsx)(t.h2,{id:`why-this-library`,children:`Why this library?`}),`
`,(0,c.jsx)(t.p,{children:`Modern web applications frequently handle files, social profiles, and international user data (phone codes, country pickers, flag icons). Maintaining separate asset folders, hardcoding MIME types, or manually managing SVG sets across multiple projects leads to inconsistency and code duplication.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` consolidates these assets and utilities into a unified, high-performance library:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero external runtime dependencies`}),` — pure data, optimized SVGs, and lightweight TypeScript classes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tree-shakeable subpath exports`}),` — import only the files, flags, or social icons you need without bundling unused assets.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Framework-agnostic & SSR-safe`}),` — works seamlessly with Vue 3, Nuxt, React, Vite, Node.js, and vanilla TypeScript.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`core-capabilities`,children:`Core Capabilities`}),`
`,(0,c.jsx)(t.h3,{id:`1-file-classification--vector-icons`,children:`1. File Classification & Vector Icons`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFile`})}),` — parses URLs, file paths, file extensions, and browser `,(0,c.jsx)(t.code,{children:`File`}),` objects. Extracts clean base names, determines extensions, classifies files into high-level categories (images, videos, documents, archives), and resolves vector SVG icons.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFiles`})}),` — static metadata registry providing catalog lookups across 85+ file extensions, MIME type matching, and category-level neutral icons.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFileIcon`})}),` — centralized registry for adding custom SVG icons and overriding default file icons globally.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`fileIcons`}),` & `,(0,c.jsx)(t.code,{children:`registerFileIcons`})]}),` — access the full vector catalog dictionary via `,(0,c.jsx)(t.code,{children:`fileIcons`}),` or register all default icons into `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` in one call via `,(0,c.jsx)(t.code,{children:`registerFileIcons`}),` from `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-social-networks--profile-urls`,children:`2. Social Networks & Profile URLs`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaSocial`})}),` — configuration and profile URL generation for 35+ global and regional social networks (GitHub, Telegram, LinkedIn, X, WeChat, Zalo, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`URL & Handle Helpers`}),` — canonical URL construction (`,(0,c.jsx)(t.code,{children:`getUrl`}),`) and safe username extraction (`,(0,c.jsx)(t.code,{children:`getValue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`socialIcons`}),` & `,(0,c.jsx)(t.code,{children:`registerSocialIcons`})]}),` — access the complete brand vector dictionary via `,(0,c.jsx)(t.code,{children:`socialIcons`}),` or initialize the `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` registry with all platforms via `,(0,c.jsx)(t.code,{children:`registerSocialIcons`}),` from `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-country-flags--geographic-datasets`,children:`3. Country Flags & Geographic Datasets`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`250+ Country Flags`}),` — individual vector SVG flags for all ISO 3166-1 alpha-2 territories via `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`High-Performance WebP Sprite`}),` — combined raster sprite (`,(0,c.jsx)(t.code,{children:`flags.webp`}),`) and accompanying CSS styles (`,(0,c.jsx)(t.code,{children:`style.css`}),`) for minimal network overhead in high-density flag lists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Geographical Metadata (`,(0,c.jsx)(t.code,{children:`geo.json`}),`)`]}),` — country names, ISO alpha-2/alpha-3 codes, international dial codes, phone input masks, and timezones.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`subpath-exports`,children:`Subpath Exports`}),`
`,(0,c.jsx)(t.p,{children:`The package provides organized subpath exports to optimize bundle sizes:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Primary library entry point (classes, catalogs, geo data)
import { MediaFile, MediaFiles, MediaSocial, geo } from '@dxtmisha/media'

// File icons dictionary & registration
import { fileIcons, registerFileIcons } from '@dxtmisha/media/files'

// Direct country flag SVGs
import { UsSvg, VnSvg, DeSvg } from '@dxtmisha/media/flags'

// Social network icons dictionary & registration
import { socialIcons, registerSocialIcons } from '@dxtmisha/media/socials'
`})}),`
`,(0,c.jsx)(t.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero Dependencies`}),` — completely self-contained with no third-party runtime overhead.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strict Typing`}),` — exhaustive TypeScript declarations, enums (`,(0,c.jsx)(t.code,{children:`MediaFileCategory`}),`, `,(0,c.jsx)(t.code,{children:`MediaFileGroup`}),`, `,(0,c.jsx)(t.code,{children:`InputSocialType`}),`), and interfaces.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Performance First`}),` — supports granular imports to ensure only required assets enter your production bundle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Ready`}),` — isomorphic design runs predictably in client and server environments.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};