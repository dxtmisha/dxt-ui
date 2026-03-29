import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isSelected - Проверка выбранного значения`}),`
`,(0,c.jsx)(n.h1,{id:`isselected`,children:(0,c.jsx)(n.code,{children:`isSelected`})}),`
`,(0,c.jsxs)(n.p,{children:[`Универсальная утилита для проверки, выбрано ли конкретное значение. Функция поддерживает различные сценарии сравнения в зависимости от типа переданного аргумента выборки (`,(0,c.jsx)(n.code,{children:`selected`}),`):`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Защита от нулевых значений:`}),` Если проверяемое значение (`,(0,c.jsx)(n.code,{children:`value`}),`) равно `,(0,c.jsx)(n.code,{children:`null`}),` или `,(0,c.jsx)(n.code,{children:`undefined`}),`, функция мгновенно вернет `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сравнение с массивом:`}),` Если аргумент `,(0,c.jsx)(n.code,{children:`selected`}),` является массивом `,(0,c.jsx)(n.code,{children:`[]`}),`, функция проверит, включено ли значение (`,(0,c.jsx)(n.code,{children:`value`}),`) в этот массив через `,(0,c.jsx)(n.code,{children:`.includes(value)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Строгое числовое сравнение:`}),` Если оба аргумента (как `,(0,c.jsx)(n.code,{children:`value`}),`, так и `,(0,c.jsx)(n.code,{children:`selected`}),`) квалифицируются как числовые (срабатывает функция утилиты `,(0,c.jsx)(n.code,{children:`isNumber()`}),`), скрипт безопасно преобразует и сравнивает их как числа, игнорируя типизацию строки (например, `,(0,c.jsx)(n.code,{children:`'5' === 5`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартное сравнение:`}),` В остальных случаях функция использует строгое равенство `,(0,c.jsx)(n.code,{children:`value === selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Проверяемое значение (пользовательский ввод, элемент списка).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: T | T[] | S`}),` — Целевое значение, с которым происходит сравнение. Это может быть примитив или массив ожидаемых значений.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если входное значение совпадает с критериями выбранных данных, и `,(0,c.jsx)(n.code,{children:`false`}),`, если нет.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isSelected } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};