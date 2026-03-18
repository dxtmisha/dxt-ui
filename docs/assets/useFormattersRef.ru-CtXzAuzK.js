import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional/Composables/useFormattersRef - Форматирование списка"}),`
`,e.jsx(n.h1,{id:"useformattersref",children:e.jsx(n.code,{children:"useFormattersRef"})}),`
`,e.jsx(n.p,{children:"Композабл для реактивного форматирования списков данных на основе заданных правил для каждого свойства."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: RefType<List>"})," — исходный список данных (Ref или ComputedRef)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: Options"})," — настройки форматирования для каждого свойства:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: FormattersType"})," — тип форматировщика (",e.jsx(n.code,{children:"currency"}),", ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"plural"}),", ",e.jsx(n.code,{children:"unit"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: object"})," — дополнительные настройки для конкретного типа (например, код валюты, формат даты)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: function"})," — пользовательская функция для преобразования значения."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listFormat: ComputedRef<FormattersReturn<List, Options>>"})," — отформатированный список данных. К элементам добавляются поля вида ",e.jsx(n.code,{children:"{property}Format"})," для каждого свойства, указанного в ",e.jsx(n.code,{children:"options"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Options extends FormattersOptionsList"})," — тип параметров форматирования каждого свойства."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"List extends FormattersListProp"})," — тип исходного списка (может быть массивом или одним элементом)."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"архитектура-ленивые-computed-динамические-геттеры",children:["Архитектура: ленивые ",e.jsx(n.code,{children:"computed"})," (Динамические геттеры)"]}),`
`,e.jsxs(n.p,{children:["Композибл возвращает ",e.jsx(n.code,{children:"listFormat"}),` как нативный JS-геттер.
Такой подход позволяет вызывать `,e.jsx(n.code,{children:"useFormattersRef()"})," ",e.jsx(n.strong,{children:"вне жизненного цикла компонента Vue"}),` (например, глобально или в сторах).
Объект `,e.jsx(n.code,{children:"ComputedRef"})," создается и кэшируется Vue при первом обращении к свойству во время деструктуризации:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ComputedRef создается при деструктуризации в setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно"}),': Избегайте обращения к геттеру "через точку" множество раз (например, ',e.jsx(n.code,{children:"result.listFormat"}),"). Всегда деструктурируйте результат один раз на уровне ",e.jsx(n.code,{children:"setup"}),", чтобы гарантировать создание только одного экземпляра ",e.jsx(n.code,{children:"computed"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useFormattersRef } from '@dxtmisha/functional'
import { FormattersType } from '@dxtmisha/functional-basic'

const items = ref([
  { id: 1, price: 100, firstName: 'Иван', lastName: 'Иванов' },
  { id: 2, price: 250, firstName: 'Анна', lastName: 'Петрова' }
])

const { listFormat } = useFormattersRef(items, {
  price: { type: FormattersType.currency },
  name: { type: FormattersType.name }
})

// listFormat.value будет содержать:
// [
//   { ..., priceFormat: '100,00 ₽', nameFormat: 'Иван Иванов' },
//   { ..., priceFormat: '250,00 ₽', nameFormat: 'Анна Петрова' }
// ]
`})})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
