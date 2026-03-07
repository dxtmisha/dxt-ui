import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as d}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/functional-basic/Functions/getItemByPath - Доступ к вложенному свойству"}),`
`,n.jsx(e.h1,{id:"getitembypath",children:n.jsx(e.code,{children:"getItemByPath"})}),`
`,n.jsxs(e.p,{children:["Утилита, которая безопасно извлекает значение из глубоко вложенного объекта, используя строку с путем, где уровни вложенности разделены точкой (",n.jsx(e.code,{children:"."}),"). Если свойство на любом из этапов не найдено, функция изящно вернёт ",n.jsx(e.code,{children:"undefined"})," (избегая ошибки ",n.jsx(e.em,{children:"Cannot read properties of undefined"}),")."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Примечание:"})," Функция позволяет передать обобщенный тип возвращаемого значения ",n.jsx(e.code,{children:"R"})," (по умолчанию ",n.jsx(e.code,{children:"string"}),"). При доступе к массиву в качестве ключа можно указывать строковый индекс (",n.jsx(e.code,{children:'"list.0.name"'}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: T"})," — Целевой объект или массив, в котором осуществляется поиск."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — Путь к свойству, разделенный точками (например, ",n.jsx(e.code,{children:'"user.address.city"'})," или ",n.jsx(e.code,{children:'"list.1.id"'}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"R | undefined"})," — Значение целевого свойства (типа ",n.jsx(e.code,{children:"R"}),"), либо ",n.jsx(e.code,{children:"undefined"}),", если свойство или промежуточный шаг отсутствует."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getItemByPath } from '@dxtmisha/functional-basic'

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
`})})]})}function x(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{x as default};
