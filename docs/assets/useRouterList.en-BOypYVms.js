import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Composables/useRouterList - Managing a list of links"}),`
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
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item"})," — current active item (computed property)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"selected"})," — reference (",e.jsx(t.code,{children:"ref"}),") to the selected item's value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label"})," — label of the current item."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"list"})," — list of items. If ",e.jsx(t.code,{children:"hasTo"})," is ",e.jsx(t.code,{children:"true"}),", items are augmented with a ",e.jsx(t.code,{children:"to"})," property for use with ",e.jsx(t.code,{children:"router-link"})," or similar components."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"to(name: string)"})," — method to navigate to an item by its value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"toMain()"})," — method to navigate to the first item in the list."]}),`
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
