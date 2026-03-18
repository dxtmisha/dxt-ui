import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function d(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional/Composables/useRouterList - Управление списком ссылок"}),`
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
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: ComputedRef<T | undefined>"})," — Вычисляемое свойство, возвращающее объект текущего активного элемента на основе ",e.jsx(n.code,{children:"selected"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: Ref<string>"})," — Реактивная ссылка на значение (",e.jsx(n.code,{children:"value"}),") выбранного элемента. Позволяет как получать, так и устанавливать текущий выбор."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label: ComputedRef<NumberOrString>"})," — Вычисляемое свойство, возвращающее текстовую метку (",e.jsx(n.code,{children:"label"}),") текущего выбранного элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: ComputedRef<ConstrBind<T>[]>"})," — Вычисляемый список элементов. Если ",e.jsx(n.code,{children:"hasTo"})," установлен в ",e.jsx(n.code,{children:"true"}),", каждый элемент автоматически дополняется свойством ",e.jsx(n.code,{children:"to"})," для интеграции с маршрутизацией."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to(name?: string): void"})," — Метод для программного перехода к элементу по его имени (",e.jsx(n.code,{children:"value"}),"). Обновляет ",e.jsx(n.code,{children:"selected"})," и выполняет ",e.jsx(n.code,{children:"router.push"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toMain(): void"}),' — Метод для быстрого перехода к первому ("главному") элементу в списке ',e.jsx(n.code,{children:"list"}),"."]}),`
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
`})})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{j as default};
