import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getItemByPath - Доступ к вложенному свойству`}),`
`,(0,c.jsx)(t.h1,{id:`getitembypath`,children:(0,c.jsx)(t.code,{children:`getItemByPath`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, которая безопасно извлекает значение из глубоко вложенного объекта, используя строку с путем, где уровни вложенности разделены точкой (`,(0,c.jsx)(t.code,{children:`.`}),`). Если свойство на любом из этапов не найдено, функция изящно вернёт `,(0,c.jsx)(t.code,{children:`undefined`}),` (избегая ошибки `,(0,c.jsx)(t.em,{children:`Cannot read properties of undefined`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Примечание:`}),` Функция позволяет передать обобщенный тип возвращаемого значения `,(0,c.jsx)(t.code,{children:`R`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`string`}),`). При доступе к массиву в качестве ключа можно указывать строковый индекс (`,(0,c.jsx)(t.code,{children:`"list.0.name"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: T`}),` — Целевой объект или массив, в котором осуществляется поиск.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — Путь к свойству, разделенный точками (например, `,(0,c.jsx)(t.code,{children:`"user.address.city"`}),` или `,(0,c.jsx)(t.code,{children:`"list.1.id"`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`R | undefined`}),` — Значение целевого свойства (типа `,(0,c.jsx)(t.code,{children:`R`}),`), либо `,(0,c.jsx)(t.code,{children:`undefined`}),`, если свойство или промежуточный шаг отсутствует.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getItemByPath } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};