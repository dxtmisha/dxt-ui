import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/# Reactive Hooks (Composables)`}),`
`,(0,c.jsx)(n.h1,{id:`reactive-hooks-composables`,children:`Reactive Hooks (Composables)`}),`
`,(0,c.jsxs)(n.p,{children:[`A set of tools for working with browser APIs, storage, and internationalization in the reactive style of `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`features`,children:`Features`}),`
`,(0,c.jsx)(n.p,{children:`The core idea of these hooks is to provide a simple and reliable interface for working with external data and state. They automatically synchronize values with storage, track changes in other tabs, and ensure instant UI updates when global settings (such as language or currency) change.`}),`
`,(0,c.jsx)(n.h2,{id:`available-hooks`,children:`Available Hooks`}),`
`,(0,c.jsx)(n.h3,{id:`data-storage`,children:`Data Storage`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useStorageRef`}),` — Reactive wrapper for `,(0,c.jsx)(n.code,{children:`localStorage`}),`. Supports TTL (cache) and cross-tab synchronization.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useSessionRef`}),` — For working with `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useCookieRef`}),` — Reactive cookie management.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`internationalization-i18n`,children:`Internationalization (I18n)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useTranslateRef`}),` — Reactive retrieval of translation strings. Automatically updates when the language is changed in `,(0,c.jsx)(n.code,{children:`GeoRef`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useGeoIntlRef`}),` — Formatting of numbers, currencies, and dates based on the current locale.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data-processing-and-search`,children:`Data Processing and Search`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useSearchRef`}),` — Client-side search for data arrays with support for multi-column filtering.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useFormattersRef`}),` — Bulk formatting of object lists based on predefined rules.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`browser-apis-and-state`,children:`Browser APIs and State`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useBroadcastValueRef`}),` — Data transfer and synchronization between windows/tabs via `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useHashRef`}),` — Reactive management of the URL hash (`,(0,c.jsx)(n.code,{children:`window.location.hash`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useLoadingRef`}),` — Easy management of loading states (local and global).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-work-with-them`,children:`How to Work with Them`}),`
`,(0,c.jsxs)(n.p,{children:[`The hooks are designed to minimize boilerplate code. For example, when working with local storage, you don't need to manually call `,(0,c.jsx)(n.code,{children:`getItem`}),` and `,(0,c.jsx)(n.code,{children:`setItem`}),`. Just create a variable, and any changes to it will be automatically saved to `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useStorageRef } from '@dxtmisha/functional'

// The 'theme' value will be automatically saved and loaded
const theme = useStorageRef('theme', 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`For internationalization, a combination of management classes and hooks is used. If you change the language via `,(0,c.jsx)(n.code,{children:`GeoRef.set()`}),`, all variables created via `,(0,c.jsx)(n.code,{children:`useTranslateRef`}),` will instantly update their values across the entire application without a page reload.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useTranslateRef, useGeoIntlRef } from '@dxtmisha/functional'

const title = useTranslateRef('main.title')
const intl = useGeoIntlRef()

// The formatted price will update itself when the currency or language changes
const priceDisplay = intl.currency(12500, 'RUB')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Search and formatting hooks (`,(0,c.jsx)(n.code,{children:`useSearchRef`}),`, `,(0,c.jsx)(n.code,{children:`useFormattersRef`}),`) are often used as building blocks for more complex tools like `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`, but they can also be used independently for processing local data arrays.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useSearchRef } from '@dxtmisha/functional'

const items = ref([{ name: 'Apple' }, { name: 'Banana' }])
const search = ref('')

const { listSearch } = useSearchRef(items, ['name'], search)
// listSearch will always contain only the filtered items
`})}),`
`,(0,c.jsx)(n.p,{children:`This approach allows you to build interfaces declaratively: you describe what data you need and how it should be linked, and the hooks take care of all the synchronization and updating work.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};