import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as d}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function l(s){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/ru/functional-basic/Functions/isSelected - Проверка выбранного значения"}),`
`,e.jsx(n.h1,{id:"isselected",children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsxs(n.p,{children:["Универсальная утилита для проверки, выбрано ли конкретное значение. Функция поддерживает различные сценарии сравнения в зависимости от типа переданного аргумента выборки (",e.jsx(n.code,{children:"selected"}),"):"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Защита от нулевых значений:"})," Если проверяемое значение (",e.jsx(n.code,{children:"value"}),") равно ",e.jsx(n.code,{children:"null"})," или ",e.jsx(n.code,{children:"undefined"}),", функция мгновенно вернет ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Сравнение с массивом:"})," Если аргумент ",e.jsx(n.code,{children:"selected"})," является массивом ",e.jsx(n.code,{children:"[]"}),", функция проверит, включено ли значение (",e.jsx(n.code,{children:"value"}),") в этот массив через ",e.jsx(n.code,{children:".includes(value)"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Строгое числовое сравнение:"})," Если оба аргумента (как ",e.jsx(n.code,{children:"value"}),", так и ",e.jsx(n.code,{children:"selected"}),") квалифицируются как числовые (срабатывает функция утилиты ",e.jsx(n.code,{children:"isNumber()"}),"), скрипт безопасно преобразует и сравнивает их как числа, игнорируя типизацию строки (например, ",e.jsx(n.code,{children:"'5' === 5"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Стандартное сравнение:"})," В остальных случаях функция использует строгое равенство ",e.jsx(n.code,{children:"value === selected"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — Проверяемое значение (пользовательский ввод, элемент списка)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: T | T[] | S"})," — Целевое значение, с которым происходит сравнение. Это может быть примитив или массив ожидаемых значений."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Вернет ",e.jsx(n.code,{children:"true"}),", если входное значение совпадает с критериями выбранных данных, и ",e.jsx(n.code,{children:"false"}),", если нет."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isSelected } from '@dxtmisha/functional-basic'

// Одиночные сравнения
console.log(isSelected('apple', 'apple')) // true
console.log(isSelected('apple', 'banana')) // false

// Сравнивание с массивом
console.log(isSelected(2, [1, 2, 3])) // true
console.log(isSelected('dog', ['cat', 'mouse'])) // false

// Интеллектуальное числовое сравнение (строка vs число)
console.log(isSelected('5', 5)) // true

// Ловушки
console.log(isSelected(null, 1)) // false
`})})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{j as default};
