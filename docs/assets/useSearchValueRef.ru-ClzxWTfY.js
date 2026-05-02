import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useSearchValueRef - Состояние и логика поиска`}),`
`,(0,c.jsx)(n.h1,{id:`usesearchvalueref`,children:(0,c.jsx)(n.code,{children:`useSearchValueRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Низкоуровневый composable для управления состоянием поискового запроса, обработки задержки (debounce) и создания регулярных выражений для сопоставления. Обычно используется внутри `,(0,c.jsx)(n.code,{children:`useSearchRef`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: SearchList<T, K>`}),` — настроенный экземпляр `,(0,c.jsx)(n.code,{children:`SearchList`}),`, используемый для управления параметрами и значениями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Ref<string>`}),` — внешняя реактивная ссылка на строку поиска. Если не передана, создается внутренняя.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: Ref<string>`}),` — текущее значение поиска (меняется мгновенно).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchDelay: Ref<string>`}),` — значение поиска с учетом задержки (если задержка настроена).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` во время ожидания задержки `,(0,c.jsx)(n.code,{children:`delay`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`архитектура-и-как-это-работает`,children:`Архитектура и как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useSearchValueRef`}),` изолирует логику задержки (`,(0,c.jsx)(n.code,{children:`debounce delay`}),`) от фактической фильтрации данных.
Когда пользователь вводит текст в `,(0,c.jsx)(n.code,{children:`search.value`}),`, composable:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Немедленно устанавливает `,(0,c.jsx)(n.code,{children:`loading.value = true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ожидает указанную задержку (`,(0,c.jsx)(n.code,{children:`delay`}),`) в миллисекундах.`]}),`
`,(0,c.jsx)(n.li,{children:`Если пользователь продолжает вводить текст в течение задержки, таймер сбрасывается.`}),`
`,(0,c.jsxs)(n.li,{children:[`По истечении таймера значение `,(0,c.jsx)(n.code,{children:`search.value`}),` копируется в `,(0,c.jsx)(n.code,{children:`searchDelay.value`}),`, и `,(0,c.jsx)(n.code,{children:`loading.value`}),` сбрасывается в `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Использование `,(0,c.jsx)(n.code,{children:`searchDelay.value`}),` вместо `,(0,c.jsx)(n.code,{children:`search.value`}),` для фильтрации гарантирует, что ресурсоёмкие операции поиска выполняются только после того, как пользователь перестанет печатать, что значительно повышает производительность на больших наборах данных.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useSearchValueRef } from '@dxtmisha/functional'
import { SearchList } from '@dxtmisha/functional-basic'
import { ref } from 'vue'

const items = [{ id: 1, name: 'Apple' }]
const list = new SearchList(items, ['name'], undefined, { delay: 300 })
const { search, searchDelay, loading } = useSearchValueRef(list)

search.value = 'app'
// loading.value становится true
// Через 300мс searchDelay.value станет 'app' и loading.value станет false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};