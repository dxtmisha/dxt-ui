import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional/Composables/useRouterList - Управление списком ссылок"}),`
`,e.jsx(n.h1,{id:"userouterlist",children:e.jsx(n.code,{children:"useRouterList"})}),`
`,e.jsx(n.p,{children:"Управление списком ссылок для роутера. Позволяет создавать навигационные меню на основе списка данных, автоматически обрабатывая активное состояние и переходы."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: RefType<ConstrBind<T>[] | undefined>"})," — список элементов навигации. Каждый элемент должен содержать ",e.jsx(n.code,{children:"value"})," и ",e.jsx(n.code,{children:"label"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected?: Ref<string> | string"})," — изначально выбранный элемент или его значение. Если не указан, выбирается первый элемент списка."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hasTo?: boolean"})," — автоматическое добавление свойства ",e.jsx(n.code,{children:"to"})," к элементам списка для навигации (по умолчанию ",e.jsx(n.code,{children:"false"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
Объект с реактивными свойствами и методами управления:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item"})," — текущий активный элемент (вычисляемое свойство)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected"})," — ссылка (",e.jsx(n.code,{children:"ref"}),") на значение выбранного элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," — метка (",e.jsx(n.code,{children:"label"}),") текущего элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list"})," — список элементов. Если параметр ",e.jsx(n.code,{children:"hasTo"})," равен ",e.jsx(n.code,{children:"true"}),", элементы дополняются свойством ",e.jsx(n.code,{children:"to"})," для использования с ",e.jsx(n.code,{children:"router-link"})," или аналогичными компонентами."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to(name: string)"})," — метод для перехода к элементу по его значению (",e.jsx(n.code,{children:"value"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toMain()"})," — метод для перехода к первому элементу списка."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useRouterList } from '@dxtmisha/functional'

const menuItems = ref([
  { value: 'dashboard', label: 'Дашборд' },
  { value: 'settings', label: 'Настройки' }
])

// Инициализация с выбором 'dashboard' и автоматическим созданием свойства 'to'
const { list, selected, to } = useRouterList(menuItems, 'dashboard', true)

// Список будет содержать объекты с полем 'to', например:
// { value: 'dashboard', label: 'Дашборд', to: { name: 'dashboard' } }

// Программный переход
to('settings')
`})})]})}function a(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{a as default};
