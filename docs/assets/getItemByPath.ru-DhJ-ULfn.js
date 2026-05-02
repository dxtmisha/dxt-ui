import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getItemByPath - Доступ к вложенному свойству`}),`
`,(0,c.jsx)(n.h1,{id:`getitembypath`,children:(0,c.jsx)(n.code,{children:`getItemByPath`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, которая безопасно извлекает значение из глубоко вложенного объекта, используя строку с путем, где уровни вложенности разделены точкой (`,(0,c.jsx)(n.code,{children:`.`}),`). Если свойство на любом из этапов не найдено, функция изящно вернёт `,(0,c.jsx)(n.code,{children:`undefined`}),` (избегая ошибки `,(0,c.jsx)(n.em,{children:`Cannot read properties of undefined`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Примечание:`}),` Функция позволяет передать обобщенный тип возвращаемого значения `,(0,c.jsx)(n.code,{children:`R`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`string`}),`). При доступе к массиву в качестве ключа можно указывать строковый индекс (`,(0,c.jsx)(n.code,{children:`"list.0.name"`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — Целевой объект или массив, в котором осуществляется поиск.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Путь к свойству, разделенный точками (например, `,(0,c.jsx)(n.code,{children:`"user.address.city"`}),` или `,(0,c.jsx)(n.code,{children:`"list.1.id"`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`R | undefined`}),` — Значение целевого свойства (типа `,(0,c.jsx)(n.code,{children:`R`}),`), либо `,(0,c.jsx)(n.code,{children:`undefined`}),`, если свойство или промежуточный шаг отсутствует.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getItemByPath } from '@dxtmisha/functional-basic'

const data = {
  profile: {
    details: {
      bio: 'Разработчик интерфейсов'
    }
  },
  roles: ['admin', 'manager']
}

// Успешный доступ
console.log(getItemByPath(data, 'profile.details.bio')) // 'Разработчик интерфейсов'

// Доступ к массиву по индексу (написанному строкой)
console.log(getItemByPath(data, 'roles.0')) // 'admin'

// Безопасное падение на несуществующее свойство
console.log(getItemByPath(data, 'profile.missing.key')) // undefined
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};