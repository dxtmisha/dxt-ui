import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useFormattersRef - Форматирование списка`}),`
`,(0,c.jsx)(n.h1,{id:`useformattersref`,children:(0,c.jsx)(n.code,{children:`useFormattersRef`})}),`
`,(0,c.jsx)(n.p,{children:`Композабл для реактивного форматирования списков данных на основе заданных правил для каждого свойства.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefType<List>`}),` — исходный список данных (Ref или ComputedRef).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — настройки форматирования для каждого свойства:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: FormattersType`}),` — тип форматировщика (`,(0,c.jsx)(n.code,{children:`currency`}),`, `,(0,c.jsx)(n.code,{children:`date`}),`, `,(0,c.jsx)(n.code,{children:`name`}),`, `,(0,c.jsx)(n.code,{children:`number`}),`, `,(0,c.jsx)(n.code,{children:`plural`}),`, `,(0,c.jsx)(n.code,{children:`unit`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: object`}),` — дополнительные настройки для конкретного типа (например, код валюты, формат даты).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: function`}),` — пользовательская функция для преобразования значения.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listFormat: ComputedRef<FormattersReturn<List, Options>>`}),` — отформатированный список данных. К элементам добавляются поля вида `,(0,c.jsx)(n.code,{children:`{property}Format`}),` для каждого свойства, указанного в `,(0,c.jsx)(n.code,{children:`options`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — тип параметров форматирования каждого свойства.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersListProp`}),` — тип исходного списка (может быть массивом или одним элементом).`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`архитектура-ленивые-computed-динамические-геттеры`,children:[`Архитектура: ленивые `,(0,c.jsx)(n.code,{children:`computed`}),` (Динамические геттеры)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Композибл возвращает `,(0,c.jsx)(n.code,{children:`listFormat`}),` как нативный JS-геттер.
Такой подход позволяет вызывать `,(0,c.jsx)(n.code,{children:`useFormattersRef()`}),` `,(0,c.jsx)(n.strong,{children:`вне жизненного цикла компонента Vue`}),` (например, глобально или в сторах).
Объект `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` создается и кэшируется Vue при первом обращении к свойству во время деструктуризации:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// ComputedRef создается при деструктуризации в setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Важно`}),`: Избегайте обращения к геттеру "через точку" множество раз (например, `,(0,c.jsx)(n.code,{children:`result.listFormat`}),`). Всегда деструктурируйте результат один раз на уровне `,(0,c.jsx)(n.code,{children:`setup`}),`, чтобы гарантировать создание только одного экземпляра `,(0,c.jsx)(n.code,{children:`computed`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};