import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useFormattersRef - Форматирование списка`}),`
`,(0,c.jsx)(t.h1,{id:`useformattersref`,children:(0,c.jsx)(t.code,{children:`useFormattersRef`})}),`
`,(0,c.jsx)(t.p,{children:`Композабл для реактивного форматирования списков данных на основе заданных правил для каждого свойства.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefType<List>`}),` — исходный список данных (Ref или ComputedRef).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: Options`}),` — настройки форматирования для каждого свойства:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: FormattersType`}),` — тип форматировщика (`,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`name`}),`, `,(0,c.jsx)(t.code,{children:`number`}),`, `,(0,c.jsx)(t.code,{children:`plural`}),`, `,(0,c.jsx)(t.code,{children:`unit`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: object`}),` — дополнительные настройки для конкретного типа (например, код валюты, формат даты).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: function`}),` — пользовательская функция для преобразования значения.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listFormat: ComputedRef<FormattersReturn<List, Options>>`}),` — отформатированный список данных. К элементам добавляются поля вида `,(0,c.jsx)(t.code,{children:`{property}Format`}),` для каждого свойства, указанного в `,(0,c.jsx)(t.code,{children:`options`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Options extends FormattersOptionsList`}),` — тип параметров форматирования каждого свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`List extends FormattersListProp`}),` — тип исходного списка (может быть массивом или одним элементом).`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`архитектура-ленивые-computed-динамические-геттеры`,children:[`Архитектура: ленивые `,(0,c.jsx)(t.code,{children:`computed`}),` (Динамические геттеры)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Композибл возвращает `,(0,c.jsx)(t.code,{children:`listFormat`}),` как нативный JS-геттер.
Такой подход позволяет вызывать `,(0,c.jsx)(t.code,{children:`useFormattersRef()`}),` `,(0,c.jsx)(t.strong,{children:`вне жизненного цикла компонента Vue`}),` (например, глобально или в сторах).
Объект `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` создается и кэшируется Vue при первом обращении к свойству во время деструктуризации:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// ComputedRef создается при деструктуризации в setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Важно`}),`: Избегайте обращения к геттеру "через точку" множество раз (например, `,(0,c.jsx)(t.code,{children:`result.listFormat`}),`). Всегда деструктурируйте результат один раз на уровне `,(0,c.jsx)(t.code,{children:`setup`}),`, чтобы гарантировать создание только одного экземпляра `,(0,c.jsx)(t.code,{children:`computed`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};