import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Classes/DesignChanged - Утилита отслеживания изменений`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designchanged`,children:`Класс DesignChanged`}),`
`,(0,c.jsx)(n.p,{children:`Утилитарный класс, предназначенный для отслеживания изменений в свойствах объекта. Он хранит кэш предыдущих значений и предоставляет методы для обнаружения различий между текущим состоянием и состоянием на момент последнего обновления.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эффективное сравнение`}),` — сравнивает текущие значения свойств с локальным кэшем для выявления изменений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выборочное отслеживание`}),` — поддерживает отслеживание определенного подмножества свойств через параметр `,(0,c.jsx)(n.code,{children:`watch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пакетное обновление`}),` — предоставляет способ синхронизации всего кэша с текущим состоянием свойств.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`DesignChanged`}),`. Класс предназначен для отслеживания изменений в свойствах объекта путем сравнения их с внутренним кэшем (состоянием на момент последнего обновления).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: T`}),` — объект с данными, свойства которого необходимо отслеживать.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`watch: string[] = Object.keys(props)`}),` — массив имен свойств (ключей), за которыми нужно следить. По умолчанию отслеживаются все свойства объекта `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignChanged } from '@dxtmisha/functional'

// 1. Отслеживание всех свойств по умолчанию
const props = { title: 'Привет', count: 1 }
const tracker = new DesignChanged(props)

// 2. Отслеживание конкретных свойств (подмножества)
const trackerPartial = new DesignChanged(props, ['title'])

console.log(tracker.isChanged()) // false
`})}),`
`,(0,c.jsx)(n.h2,{id:`обнаружение-изменений`,children:`Обнаружение изменений`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, были ли изменены определенные свойства с момента последнего обновления.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string | string[]`}),` — имя одного свойства или массив имен свойств для проверки.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если любое из указанных свойств изменилось.`]}),`
`,(0,c.jsx)(n.h3,{id:`ischanged`,children:(0,c.jsx)(n.code,{children:`isChanged`})}),`
`,(0,c.jsxs)(n.p,{children:[`Проверяет, изменилось ли любое из отслеживаемых свойств (определенных в списке `,(0,c.jsx)(n.code,{children:`watch`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если хотя бы одно отслеживаемое свойство имеет другое значение.`]}),`
`,(0,c.jsx)(n.h2,{id:`синхронизация-данных`,children:`Синхронизация данных`}),`
`,(0,c.jsx)(n.h3,{id:`update`,children:(0,c.jsx)(n.code,{children:`update`})}),`
`,(0,c.jsxs)(n.p,{children:[`Синхронизирует внутренний кэш с текущими значениями всех отслеживаемых свойств. После вызова этого метода `,(0,c.jsx)(n.code,{children:`isChanged()`}),` будет возвращать `,(0,c.jsx)(n.code,{children:`false`}),` до тех пор, пока свойства не будут изменены снова.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};