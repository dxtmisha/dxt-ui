import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dqnce8mp.js";import{M as i}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(l){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/ru/Conversions"}),`
`,n.jsx(e.h1,{id:"функции-преобразования",children:"Функции преобразования"}),`
`,n.jsx(e.p,{children:"Набор функций для преобразования значений между различными типами данных."}),`
`,n.jsx(e.h2,{id:"anytostring",children:n.jsx(e.code,{children:"anyToString"})}),`
`,n.jsx(e.p,{children:"Преобразует любое значение в строку с интеллектуальной обработкой различных типов данных."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: V"})," — значение для преобразования в строку"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { anyToString } from '@dxtmisha/functional'

anyToString('  hello  ') // 'hello'
anyToString(true) // '1'
anyToString([1, 2, 3]) // '1,2,3'
anyToString({ name: 'John' }) // '{"name":"John"}'
`})}),`
`,n.jsx(e.h2,{id:"applytemplate",children:n.jsx(e.code,{children:"applyTemplate"})}),`
`,n.jsxs(e.p,{children:["Применяет шаблон к тексту, заменяя ключи на значения из объекта замены. Поддерживает три формата: квадратные скобки ",n.jsx(e.code,{children:"[key]"}),", позиционные параметры ",n.jsx(e.code,{children:"%d"}),", ",n.jsx(e.code,{children:"%e"}),", ",n.jsx(e.code,{children:"%f"})," и теги с содержимым ",n.jsx(e.code,{children:"[tag]content[/tag]"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"text: string"})," — текст с шаблоном, содержащим ключи в квадратных скобках ",n.jsx(e.code,{children:"[key]"}),", позиционные параметры ",n.jsx(e.code,{children:"%d"}),", ",n.jsx(e.code,{children:"%e"})," и т.д., или теги с содержимым ",n.jsx(e.code,{children:"[tag]content[/tag]"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replacement: Record<string, string | number> | string[]"})," — объект или массив для замены ключей"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { applyTemplate } from '@dxtmisha/functional'

// Замена по ключам в квадратных скобках
applyTemplate('Привет, [name]!', { name: 'Анна' }) // 'Привет, Анна!'
applyTemplate('[item] - [price]', { item: 'Телефон', price: 15000 })

// Позиционные параметры
applyTemplate('Заказ %d на %e руб', ['#123', '1500']) // 'Заказ #123 на 1500 руб'

// Теги с содержимым ([content] заменяется на содержимое тега)
applyTemplate('Это [bold]жирный текст[/bold]', { bold: '<b>[content]</b>' }) // 'Это <b>жирный текст</b>'
applyTemplate('Text with [red]colored[/red] word', { red: '<span style="color:red">[content]</span>' })
`})}),`
`,n.jsx(e.h2,{id:"replacerecursive",children:n.jsx(e.code,{children:"replaceRecursive"})}),`
`,n.jsx(e.p,{children:"Рекурсивно заменяет значения в объекте или массиве."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: any"})," — объект или массив для обработки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"search: any"})," — искомое значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replace: any"})," — значение для замены"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { replaceRecursive } from '@dxtmisha/functional'

replaceRecursive({a: 'old', b: {c: 'old'}}, 'old', 'new') // {a: 'new', b: {c: 'new'}}
replaceRecursive(['old', {x: 'old'}], 'old', 'new') // ['new', {x: 'new'}]
`})}),`
`,n.jsx(e.h2,{id:"replacetemplate",children:n.jsx(e.code,{children:"replaceTemplate"})}),`
`,n.jsxs(e.p,{children:["Заменяет шаблонные значения в строке на основе объекта замены. Использует формат ",n.jsx(e.code,{children:"[ключ]"})," для поиска и замены. Поддерживает как строковые значения, так и функции."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — строка шаблона с ключами в формате ",n.jsx(e.code,{children:"[ключ]"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replaces: Record<string, string | FunctionReturn<string>>"})," — объект с данными для замены (значения могут быть строками или функциями)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { replaceTemplate } from '@dxtmisha/functional'

replaceTemplate('Hello [name]!', {name: 'World'}) // 'Hello World!'
replaceTemplate('[x] + [y] = [sum]', {x: '2', y: '3', sum: '5'}) // '2 + 3 = 5'
replaceTemplate('User [id]: [name]', {id: '123', name: 'John'}) // 'User 123: John'
replaceTemplate('Time: [time]', {time: () => new Date().toLocaleString()}) // с функцией
`})}),`
`,n.jsx(e.h2,{id:"secondtotime",children:n.jsx(e.code,{children:"secondToTime"})}),`
`,n.jsx(e.p,{children:"Преобразует секунды в формат времени (часы:минуты:секунды)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"seconds: number"})," — количество секунд"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { secondToTime } from '@dxtmisha/functional'

secondToTime(3661) // '01:01:01'
secondToTime(125) // '00:02:05'
secondToTime(45) // '00:00:45'
`})}),`
`,n.jsx(e.h2,{id:"strfill",children:n.jsx(e.code,{children:"strFill"})}),`
`,n.jsx(e.p,{children:"Заполняет строку указанным символом до нужной длины."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string | number"})," — исходное значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"length: number"})," — целевая длина"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fill: string"})," — символ заполнения (по умолчанию '0')"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"start: boolean"})," — заполнять в начале (по умолчанию true)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { strFill } from '@dxtmisha/functional'

strFill('5', 3) // '005'
strFill('hello', 8, '*', false) // 'hello***'
strFill(42, 4) // '0042'
`})}),`
`,n.jsx(e.h2,{id:"toarray",children:n.jsx(e.code,{children:"toArray"})}),`
`,n.jsx(e.p,{children:"Преобразует значение в массив."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — значение для преобразования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toArray } from '@dxtmisha/functional'

toArray('hello') // ['hello']
toArray([1, 2]) // [1, 2]
toArray(null) // [null]
`})}),`
`,n.jsx(e.h2,{id:"tobind",children:n.jsx(e.code,{children:"toBind"})}),`
`,n.jsx(e.p,{children:"Объединяет два объекта со свойствами, с умной обработкой классов и стилей. При слиянии объектов классы и стили объединяются в массивы, а не перезаписываются."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extra: ItemList"})," — дополнительные свойства (базовый объект)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: ItemList"})," — входные свойства для объединения"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
Объединённый объект свойств с правильно обработанными классами и стилями.`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Особенности:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Обычные свойства перезаписываются (приоритет у ",n.jsx(e.code,{children:"value"}),")"]}),`
`,n.jsxs(e.li,{children:["Классы (",n.jsx(e.code,{children:"class"}),") объединяются в массив ",n.jsx(e.code,{children:"[extraClass, valueClass]"})]}),`
`,n.jsxs(e.li,{children:["Стили (",n.jsx(e.code,{children:"style"}),") объединяются в массив ",n.jsx(e.code,{children:"[extraStyle, valueStyle]"})]}),`
`,n.jsx(e.li,{children:"Позволяет создавать составные объекты свойств для компонентов"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toBind } from '@dxtmisha/functional'

// Обычное объединение свойств
toBind({id: 'base', disabled: false}, {id: 'new', type: 'button'})
// Результат: {id: 'new', disabled: false, type: 'button'}

// Умное объединение классов
toBind({class: 'btn'}, {class: 'primary'})
// Результат: {class: ['btn', 'primary']}

// Умное объединение стилей
toBind(
  {style: {color: 'red', fontSize: '14px'}},
  {style: {color: 'blue', margin: '10px'}}
)
// Результат: {style: [{color: 'red', fontSize: '14px'}, {color: 'blue', margin: '10px'}]}

// Комплексное объединение
toBind(
  {class: 'btn', style: {padding: '10px'}, disabled: false},
  {class: 'primary', style: {color: 'white'}, type: 'button'}
)
// Результат: {
//   class: ['btn', 'primary'],
//   style: [{padding: '10px'}, {color: 'white'}],
//   disabled: false,
//   type: 'button'
// }
`})}),`
`,n.jsx(e.h2,{id:"tobinds",children:n.jsx(e.code,{children:"toBinds"})}),`
`,n.jsxs(e.p,{children:["Объединяет несколько объектов со свойствами, последовательно применяя ",n.jsx(e.code,{children:"toBind"})," к каждому. Умно обрабатывает классы и стили, создавая составные объекты свойств."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"...values: (ItemList | undefined)[]"})," — список объектов свойств для объединения"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
Итоговый объединённый объект со всеми свойствами, классами и стилями.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toBinds } from '@dxtmisha/functional'

// Объединение нескольких объектов
toBinds(
  {class: 'btn', disabled: false},
  {class: 'primary', type: 'button'},
  {class: 'large', id: 'submit-btn'}
)
// Результат: {
//   class: ['btn', 'primary', 'large'],
//   disabled: false,
//   type: 'button',
//   id: 'submit-btn'
// }

// С undefined значениями (игнорируются)
toBinds(
  {class: 'base'},
  undefined,
  {style: {color: 'red'}},
  null,
  {class: 'modifier'}
)
// Результат: {class: ['base', 'modifier'], style: {color: 'red'}}

// Объединение стилей
toBinds(
  {style: {padding: '10px'}},
  {style: {margin: '5px'}},
  {style: {color: 'blue'}}
)
// Результат: {style: [{padding: '10px'}, {margin: '5px'}, {color: 'blue'}]}
`})}),`
`,n.jsx(e.h2,{id:"tocamelcase",children:n.jsx(e.code,{children:"toCamelCase"})}),`
`,n.jsx(e.p,{children:"Преобразует строку в camelCase."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — строка для преобразования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toCamelCase } from '@dxtmisha/functional'

toCamelCase('hello-world') // 'helloWorld'
toCamelCase('hello_world') // 'helloWorld'
toCamelCase('hello world') // 'helloWorld'
`})}),`
`,n.jsx(e.h2,{id:"tocamelcasefirst",children:n.jsx(e.code,{children:"toCamelCaseFirst"})}),`
`,n.jsx(e.p,{children:"Преобразует строку в PascalCase (первая буква заглавная)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — строка для преобразования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toCamelCaseFirst } from '@dxtmisha/functional'

toCamelCaseFirst('hello-world') // 'HelloWorld'
toCamelCaseFirst('component_name') // 'ComponentName'
`})}),`
`,n.jsx(e.h2,{id:"todate",children:n.jsx(e.code,{children:"toDate"})}),`
`,n.jsx(e.p,{children:"Преобразует значение в объект Date."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — значение для преобразования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toDate } from '@dxtmisha/functional'

toDate('2023-01-01') // Date object
toDate(1672531200000) // Date object
toDate(new Date()) // Date object
`})}),`
`,n.jsx(e.h2,{id:"tokebabcase",children:n.jsx(e.code,{children:"toKebabCase"})}),`
`,n.jsx(e.p,{children:"Преобразует строку в kebab-case."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — строка для преобразования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toKebabCase } from '@dxtmisha/functional'

toKebabCase('HelloWorld') // 'hello-world'
toKebabCase('helloWorld') // 'hello-world'
toKebabCase('hello_world') // 'hello-world'
`})}),`
`,n.jsx(e.h2,{id:"tonumber",children:n.jsx(e.code,{children:"toNumber"})}),`
`,n.jsx(e.p,{children:"Преобразует значение в число."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — значение для преобразования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toNumber } from '@dxtmisha/functional'

toNumber('42') // 42
toNumber('3.14') // 3.14
toNumber('abc') // 0
`})}),`
`,n.jsx(e.h2,{id:"tonumberbymax",children:n.jsx(e.code,{children:"toNumberByMax"})}),`
`,n.jsx(e.p,{children:"Преобразует значение в число с ограничением максимального значения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — значение для преобразования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — максимальное значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toNumberByMax } from '@dxtmisha/functional'

toNumberByMax('100', 50) // 50
toNumberByMax('25', 50) // 25
`})}),`
`,n.jsx(e.h2,{id:"topercent",children:n.jsx(e.code,{children:"toPercent"})}),`
`,n.jsx(e.p,{children:"Преобразует число в процентное значение."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: number"})," — число от 0 до 1"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toPercent } from '@dxtmisha/functional'

toPercent(0.5) // 50
toPercent(0.25) // 25
toPercent(1) // 100
`})}),`
`,n.jsx(e.h2,{id:"topercentby100",children:n.jsx(e.code,{children:"toPercentBy100"})}),`
`,n.jsx(e.p,{children:"Преобразует число в процентное значение (для чисел от 0 до 100)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: number"})," — число от 0 до 100"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { toPercentBy100 } from '@dxtmisha/functional'

toPercentBy100(50) // '50%'
toPercentBy100(25.5) // '25.5%'
`})}),`
`,n.jsx(e.h2,{id:"transformation",children:n.jsx(e.code,{children:"transformation"})}),`
`,n.jsx(e.p,{children:"Применяет функцию преобразования к значению."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — исходное значение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: Function"})," — функция преобразования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { transformation } from '@dxtmisha/functional'

transformation('hello', s => s.toUpperCase()) // 'HELLO'
transformation(5, n => n * 2) // 10
`})})]})}function x(l={}){const{wrapper:e}={...r(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(s,{...l})}):s(l)}export{x as default};
