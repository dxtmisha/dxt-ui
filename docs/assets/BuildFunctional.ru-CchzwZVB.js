import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/BuildFunctional - Сборщик библиотеки функционала"}),`
`,n.jsx(i.h1,{id:"класс-buildfunctional",children:"Класс BuildFunctional"}),`
`,n.jsxs(i.p,{children:["Класс ",n.jsx(i.code,{children:"BuildFunctional"})," — это утилита, отвечающая за генерацию центрального файла экспорта для функциональной библиотеки. Он сканирует пакет ",n.jsx(i.code,{children:"@dxtmisha/functional"})," и создает файл ",n.jsx(i.code,{children:"functional.ts"})," в директории библиотеки, повторно экспортируя все обнаруженные элементы."]}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Автоматический реэкспорт"})," — автоматически обнаруживает и повторно экспортирует все элементы из функционального пакета."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Поддержка типов"})," — включает ",n.jsx(i.code,{children:"export type *"})," для обеспечения полной доступности типов TypeScript."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Интеграция с библиотекой"})," — интегрируется со структурой библиотеки проекта, записывая данные в настроенную директорию библиотеки."]}),`
`]}),`
`,n.jsx(i.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(i.p,{children:["Вы можете создать экземпляр ",n.jsx(i.code,{children:"BuildFunctional"})," без параметров."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,n.jsx(i.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(i.h3,{id:"make",children:"make"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): void"})," — запускает процесс сборки. Он получает список элементов, форматирует код экспорта и записывает его в ",n.jsx(i.code,{children:"src/library/functional.ts"}),"."]}),`
`]}),`
`,n.jsx(i.h3,{id:"getlist",children:"getList"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getList(): string[]"})," — возвращает массив ключей (экспортируемых элементов) из пакета ",n.jsx(i.code,{children:"@dxtmisha/functional"}),"."]}),`
`]})]})}function u(e={}){const{wrapper:i}={...l(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{u as default};
