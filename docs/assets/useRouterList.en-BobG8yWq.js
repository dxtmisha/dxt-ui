import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useRouterList - Managing a list of links`}),`
`,(0,c.jsx)(n.h1,{id:`userouterlist`,children:(0,c.jsx)(n.code,{children:`useRouterList`})}),`
`,(0,c.jsx)(n.p,{children:`Managing a list of links for the router. Allows creating navigation menus based on data lists, automatically handling active states and transitions.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefType<ConstrBind<T>[] | undefined>`}),` — list of navigation items. Each item must contain `,(0,c.jsx)(n.code,{children:`value`}),` and `,(0,c.jsx)(n.code,{children:`label`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected?: Ref<string> | string`}),` — initially selected item or its value. If not specified, the first item in the list is selected.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hasTo?: boolean`}),` — automatically adds the `,(0,c.jsx)(n.code,{children:`to`}),` property to list items for navigation (default is `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
An object with reactive properties and control methods:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: ComputedRef<T | undefined>`}),` — A computed property that returns the current active item object based on `,(0,c.jsx)(n.code,{children:`selected`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: Ref<string>`}),` — A reactive reference to the value of the selected item. Allows both getting and setting the current selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label: ComputedRef<NumberOrString>`}),` — A computed property that returns the label of the current selected item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: ComputedRef<ConstrBind<T>[]>`}),` — A computed list of items. If `,(0,c.jsx)(n.code,{children:`hasTo`}),` is `,(0,c.jsx)(n.code,{children:`true`}),`, each item is automatically augmented with a `,(0,c.jsx)(n.code,{children:`to`}),` property for routing integration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(name?: string): void`}),` — A method for programmatic navigation to an item by its name (`,(0,c.jsx)(n.code,{children:`value`}),`). Updates `,(0,c.jsx)(n.code,{children:`selected`}),` and performs `,(0,c.jsx)(n.code,{children:`router.push`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toMain(): void`}),` — A method for quick navigation to the first ("main") item in the `,(0,c.jsx)(n.code,{children:`list`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useRouterList } from '@dxtmisha/functional'

const menuItems = ref([
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'settings', label: 'Settings' }
])

// Initialize with 'dashboard' selected and automatic 'to' property creation
const { list, selected, to } = useRouterList(menuItems, 'dashboard', true)

// The list will contain objects with a 'to' field, for example:
// { value: 'dashboard', label: 'Dashboard', to: { name: 'dashboard' } }

// Programmatic navigation
to('settings')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};