import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useRouterList - Managing a list of links`}),`
`,(0,c.jsx)(t.h1,{id:`userouterlist`,children:(0,c.jsx)(t.code,{children:`useRouterList`})}),`
`,(0,c.jsx)(t.p,{children:`Managing a list of links for the router. Allows creating navigation menus based on data lists, automatically handling active states and transitions.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefType<ConstrBind<T>[] | undefined>`}),` — list of navigation items. Each item must contain `,(0,c.jsx)(t.code,{children:`value`}),` and `,(0,c.jsx)(t.code,{children:`label`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: Ref<string> | string`}),` — initially selected item or its value. If not specified, the first item in the list is selected.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasTo?: boolean`}),` — automatically adds the `,(0,c.jsx)(t.code,{children:`to`}),` property to list items for navigation (default is `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
An object with reactive properties and control methods:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ComputedRef<T | undefined>`}),` — A computed property that returns the current active item object based on `,(0,c.jsx)(t.code,{children:`selected`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: Ref<string>`}),` — A reactive reference to the value of the selected item. Allows both getting and setting the current selection.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label: ComputedRef<NumberOrString>`}),` — A computed property that returns the label of the current selected item.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef<ConstrBind<T>[]>`}),` — A computed list of items. If `,(0,c.jsx)(t.code,{children:`hasTo`}),` is `,(0,c.jsx)(t.code,{children:`true`}),`, each item is automatically augmented with a `,(0,c.jsx)(t.code,{children:`to`}),` property for routing integration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(name?: string): void`}),` — A method for programmatic navigation to an item by its name (`,(0,c.jsx)(t.code,{children:`value`}),`). Updates `,(0,c.jsx)(t.code,{children:`selected`}),` and performs `,(0,c.jsx)(t.code,{children:`router.push`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toMain(): void`}),` — A method for quick navigation to the first ("main") item in the `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};