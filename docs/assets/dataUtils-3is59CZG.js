import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Dqnce8mp.js";import{M as s}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/ru/Data Utils"}),`
`,n.jsx(e.h1,{id:"утилиты-для-работы-с-данными",children:"Утилиты для работы с данными"}),`
`,n.jsx(e.p,{children:"Набор функций для обработки, итерации и управления данными."}),`
`,n.jsx(e.h2,{id:"arrfill",children:n.jsx(e.code,{children:"arrFill"})}),`
`,n.jsx(e.p,{children:"Создает массив из заданного количества элементов, заполненных одинаковым значением."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — значение для заполнения массива"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"count: number"})," — количество элементов в массиве"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { arrFill } from '@dxtmisha/functional'

arrFill('hello', 3) // ['hello', 'hello', 'hello']
arrFill(0, 5) // [0, 0, 0, 0, 0]
arrFill({ id: 1 }, 2) // [{ id: 1 }, { id: 1 }]
`})}),`
`,n.jsx(e.h2,{id:"copyobject",children:n.jsx(e.code,{children:"copyObject"})}),`
`,n.jsx(e.p,{children:"Создает глубокую копию объекта через JSON сериализацию."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — объект для копирования"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { copyObject } from '@dxtmisha/functional'

const original = { name: 'John', data: { age: 30 } }
const copy = copyObject(original)
copy.data.age = 25 // original.data.age остается 30
`})}),`
`,n.jsx(e.h2,{id:"foreach",children:n.jsx(e.code,{children:"forEach"})}),`
`,n.jsx(e.p,{children:"Универсальная функция итерации для массивов, объектов и Map."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: D"})," — объект для итерации (массив, объект или Map)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (item: T, key: K, dataMain: typeof data) => R"})," — функция, вызываемая для каждого элемента"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:"import { forEach } from '@dxtmisha/functional'\n\nforEach([1, 2, 3], (item, index) => item * 2) // [2, 4, 6]\nforEach({ a: 1, b: 2 }, (value, key) => `${key}=${value}`) // ['a=1', 'b=2']\nforEach(new Map([['x', 10]]), (value, key) => `${key}:${value}`) // ['x:10']\n"})}),`
`,n.jsx(e.h2,{id:"getclipboarddata",children:n.jsx(e.code,{children:"getClipboardData"})}),`
`,n.jsx(e.p,{children:"Асинхронно получает текстовые данные из буфера обмена."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event?: ClipboardEvent"})," — событие буфера обмена (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getClipboardData } from '@dxtmisha/functional'

const text = await getClipboardData(event) // из события paste
const clipboardText = await getClipboardData() // прямое чтение
`})}),`
`,n.jsx(e.h2,{id:"getcolumn",children:n.jsx(e.code,{children:"getColumn"})}),`
`,n.jsx(e.p,{children:"Извлекает значения определенного столбца из массива объектов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: ObjectOrArray<T>"})," — массив объектов для обработки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"column: K"})," — ключ столбца для извлечения"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getColumn } from '@dxtmisha/functional'

const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
const names = getColumn(users, 'name') // ['Alice', 'Bob']
`})}),`
`,n.jsx(e.h2,{id:"getexp",children:n.jsx(e.code,{children:"getExp"})}),`
`,n.jsx(e.p,{children:"Создает регулярное выражение для безопасного поиска текста с экранированием."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — текст для поиска"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"flags: string"})," — флаги регулярного выражения (по умолчанию ",n.jsx(e.code,{children:"'ig'"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pattern: string"})," — шаблон (по умолчанию ",n.jsx(e.code,{children:":value"}),")"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getExp } from '@dxtmisha/functional'

const regex = getExp('hello') // /hello/ig
const regexSpecial = getExp('$100') // /\\$100/ig (экранировано)
`})}),`
`,n.jsx(e.h2,{id:"getitembypath",children:n.jsx(e.code,{children:"getItemByPath"})}),`
`,n.jsx(e.p,{children:"Получает значение из вложенного объекта по строковому пути."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: T"})," — объект для обхода"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — путь через точку (например, ",n.jsx(e.code,{children:"'user.profile.name'"}),")"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getItemByPath } from '@dxtmisha/functional'

const data = { user: { profile: { name: 'John' } } }
const name = getItemByPath(data, 'user.profile.name') // 'John'
`})}),`
`,n.jsx(e.h2,{id:"getlengthofallarray",children:n.jsx(e.code,{children:"getLengthOfAllArray"})}),`
`,n.jsx(e.p,{children:"Возвращает массив с длинами всех строк."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: ObjectOrArray<string>"})," — массив строк или объект"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getLengthOfAllArray } from '@dxtmisha/functional'

getLengthOfAllArray(['hello', 'world']) // [5, 5]
`})}),`
`,n.jsx(e.h2,{id:"getmaxlengthallarray",children:n.jsx(e.code,{children:"getMaxLengthAllArray"})}),`
`,n.jsx(e.p,{children:"Находит максимальную длину строки в массиве."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: ObjectOrArray<string>"})," — массив строк или объект"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getMaxLengthAllArray } from '@dxtmisha/functional'

getMaxLengthAllArray(['hello', 'world']) // 5
`})}),`
`,n.jsx(e.h2,{id:"getminlengthallarray",children:n.jsx(e.code,{children:"getMinLengthAllArray"})}),`
`,n.jsx(e.p,{children:"Находит минимальную длину строки в массиве."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: ObjectOrArray<string>"})," — массив строк или объект"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getMinLengthAllArray } from '@dxtmisha/functional'

getMinLengthAllArray(['hello', 'hi']) // 2
`})}),`
`,n.jsx(e.h2,{id:"getobjectbykeys",children:n.jsx(e.code,{children:"getObjectByKeys"})}),`
`,n.jsx(e.p,{children:"Возвращает новый объект с указанными ключами из исходного объекта."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, any>"})," — исходный объект"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"keys: string[]"})," — список ключей для извлечения"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getObjectByKeys } from '@dxtmisha/functional'

const obj = { a: 1, b: 2, c: 3 }
const filtered = getObjectByKeys(obj, ['a', 'c']) // { a: 1, c: 3 }
`})}),`
`,n.jsx(e.h2,{id:"getobjectnoundefined",children:n.jsx(e.code,{children:"getObjectNoUndefined"})}),`
`,n.jsx(e.p,{children:"Удаляет из объекта все свойства с указанным значением (по умолчанию undefined)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T"})," — объект для обработки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"exception: any"})," — значение для исключения (по умолчанию undefined)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getObjectNoUndefined } from '@dxtmisha/functional'

const obj = { a: 1, b: undefined, c: 3 }
const cleaned = getObjectNoUndefined(obj) // { a: 1, c: 3 }
`})}),`
`,n.jsx(e.h2,{id:"getobjectornone",children:n.jsx(e.code,{children:"getObjectOrNone"})}),`
`,n.jsx(e.p,{children:"Возвращает объект если он не пустой, иначе возвращает undefined."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T"})," — объект для проверки"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { getObjectOrNone } from '@dxtmisha/functional'

getObjectOrNone({ a: 1 }) // { a: 1 }
getObjectOrNone({}) // undefined
`})}),`
`,n.jsx(e.h2,{id:"setvalues",children:n.jsx(e.code,{children:"setValues"})}),`
`,n.jsx(e.p,{children:"Устанавливает значения в объекте по указанным путям."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"target: Record<string, any>"})," — целевой объект"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"values: Record<string, any>"})," — объект со значениями для установки"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { setValues } from '@dxtmisha/functional'

const obj = {}
setValues(obj, { 'user.name': 'John', 'user.age': 30 })
// obj теперь { user: { name: 'John', age: 30 } }
`})}),`
`,n.jsx(e.h2,{id:"splice",children:n.jsx(e.code,{children:"splice"})}),`
`,n.jsx(e.p,{children:"Удаляет элементы из массива и возвращает новый массив."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: T[]"})," — исходный массив"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index: number"})," — индекс начала удаления"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"deleteCount?: number"})," — количество удаляемых элементов"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { splice } from '@dxtmisha/functional'

splice([1, 2, 3, 4], 1, 2) // [1, 4]
splice(['a', 'b', 'c'], 0, 1) // ['b', 'c']
`})}),`
`,n.jsx(e.h2,{id:"uniquearray",children:n.jsx(e.code,{children:"uniqueArray"})}),`
`,n.jsx(e.p,{children:"Удаляет дубликаты из массива."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: T[]"})," — массив для обработки"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { uniqueArray } from '@dxtmisha/functional'

uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]
uniqueArray(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
`})}),`
`,n.jsx(e.h2,{id:"writeclipboarddata",children:n.jsx(e.code,{children:"writeClipboardData"})}),`
`,n.jsx(e.p,{children:"Записывает данные в буфер обмена."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: string"})," — данные для записи в буфер обмена"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { writeClipboardData } from '@dxtmisha/functional'

await writeClipboardData('Hello, World!') // записывает текст в буфер
await writeClipboardData(JSON.stringify({key: 'value'})) // записывает JSON
`})})]})}function j(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{j as default};
