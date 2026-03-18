import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Composables/useRouterList - Managing a list of links"}),`
`,e.jsx(t.h1,{id:"userouterlist",children:e.jsx(t.code,{children:"useRouterList"})}),`
`,e.jsx(t.p,{children:"Managing a list of links for the router. Allows creating navigation menus based on data lists, automatically handling active states and transitions."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"list: RefType<ConstrBind<T>[] | undefined>"})," — list of navigation items. Each item must contain ",e.jsx(t.code,{children:"value"})," and ",e.jsx(t.code,{children:"label"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"selected?: Ref<string> | string"})," — initially selected item or its value. If not specified, the first item in the list is selected."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"hasTo?: boolean"})," — automatically adds the ",e.jsx(t.code,{children:"to"})," property to list items for navigation (default is ",e.jsx(t.code,{children:"false"}),")."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
An object with reactive properties and control methods:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item: ComputedRef<T | undefined>"})," — A computed property that returns the current active item object based on ",e.jsx(t.code,{children:"selected"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"selected: Ref<string>"})," — A reactive reference to the value of the selected item. Allows both getting and setting the current selection."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label: ComputedRef<NumberOrString>"})," — A computed property that returns the label of the current selected item."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"list: ComputedRef<ConstrBind<T>[]>"})," — A computed list of items. If ",e.jsx(t.code,{children:"hasTo"})," is ",e.jsx(t.code,{children:"true"}),", each item is automatically augmented with a ",e.jsx(t.code,{children:"to"})," property for routing integration."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"to(name?: string): void"})," — A method for programmatic navigation to an item by its name (",e.jsx(t.code,{children:"value"}),"). Updates ",e.jsx(t.code,{children:"selected"})," and performs ",e.jsx(t.code,{children:"router.push"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"toMain(): void"}),' — A method for quick navigation to the first ("main") item in the ',e.jsx(t.code,{children:"list"}),"."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function m(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
