import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional/Composables/useSearchValueRef - Состояние и логика поиска"}),`
`,e.jsx(n.h1,{id:"usesearchvalueref",children:e.jsx(n.code,{children:"useSearchValueRef"})}),`
`,e.jsxs(n.p,{children:["Низкоуровневый composable для управления состоянием поискового запроса, обработки задержки (debounce) и создания регулярных выражений для сопоставления. Обычно используется внутри ",e.jsx(n.code,{children:"useSearchRef"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: SearchList<T, K>"})," — настроенный экземпляр ",e.jsx(n.code,{children:"SearchList"}),", используемый для управления параметрами и значениями."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: Ref<string>"})," — внешняя реактивная ссылка на строку поиска. Если не передана, создается внутренняя."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: Ref<string>"})," — текущее значение поиска (меняется мгновенно)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"searchDelay: Ref<string>"})," — значение поиска с учетом задержки (если задержка настроена)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — ",e.jsx(n.code,{children:"true"})," во время ожидания задержки ",e.jsx(n.code,{children:"delay"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"архитектура-и-как-это-работает",children:"Архитектура и как это работает"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useSearchValueRef"})," изолирует логику задержки (",e.jsx(n.code,{children:"debounce delay"}),`) от фактической фильтрации данных.
Когда пользователь вводит текст в `,e.jsx(n.code,{children:"search.value"}),", composable:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Немедленно устанавливает ",e.jsx(n.code,{children:"loading.value = true"}),"."]}),`
`,e.jsxs(n.li,{children:["Ожидает указанную задержку (",e.jsx(n.code,{children:"delay"}),") в миллисекундах."]}),`
`,e.jsx(n.li,{children:"Если пользователь продолжает вводить текст в течение задержки, таймер сбрасывается."}),`
`,e.jsxs(n.li,{children:["По истечении таймера значение ",e.jsx(n.code,{children:"search.value"})," копируется в ",e.jsx(n.code,{children:"searchDelay.value"}),", и ",e.jsx(n.code,{children:"loading.value"})," сбрасывается в ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Использование ",e.jsx(n.code,{children:"searchDelay.value"})," вместо ",e.jsx(n.code,{children:"search.value"})," для фильтрации гарантирует, что ресурсоёмкие операции поиска выполняются только после того, как пользователь перестанет печатать, что значительно повышает производительность на больших наборах данных."]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useSearchValueRef } from '@dxtmisha/functional'
import { SearchList } from '@dxtmisha/functional-basic'
import { ref } from 'vue'

const items = [{ id: 1, name: 'Apple' }]
const list = new SearchList(items, ['name'], undefined, { delay: 300 })
const { search, searchDelay, loading } = useSearchValueRef(list)

search.value = 'app'
// loading.value становится true
// Через 300мс searchDelay.value станет 'app' и loading.value станет false
`})})]})}function x(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{x as default};
