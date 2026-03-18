import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/LibraryExport - Генератор экспорта"}),`
`,n.jsx(e.h1,{id:"класс-libraryexport",children:"Класс LibraryExport"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"LibraryExport"})," отвечает за агрегацию и генерацию единого файла экспорта для библиотеки. Он сканирует назначенные директории на наличие файлов TypeScript и Vue, создавая единую точку входа, которая упрощает импорт библиотеки."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Генерация единого экспорта"})," — создает комплексную точку входа для всех экспортируемых компонентов и утилит."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Умная идентификация файлов"})," — автоматически обрабатывает экспорт для ",n.jsx(e.code,{children:".ts"})," файлов (используя ",n.jsx(e.code,{children:"export *"}),") и ",n.jsx(e.code,{children:".vue"})," файлов (используя ",n.jsx(e.code,{children:"import"}),", затем ",n.jsx(e.code,{children:"export const"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция стилей"})," — автоматически включает глобальные стили CSS или SCSS, если они существуют."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Фильтрация"})," — исключает файлы тестов (",n.jsx(e.code,{children:".test."}),") и файлы, помеченные флагом ",n.jsx(e.code,{children:"UI_FLAG_NOT_EXPORT"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте и запустите генератор экспорта с помощью метода ",n.jsx(e.code,{children:"make"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"генерация",children:"Генерация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): void"})," — основная точка входа, которая запускает процесс поиска файлов и генерации."]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример-сгенерированного-вывода",children:"Пример сгенерированного вывода"}),`
`,n.jsx(e.p,{children:"Сгенерированный файл агрегирует импорты и экспорты следующим образом:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import './style.css'

// Components
import _DxtButton from './components/DxtButton/DxtButton.vue'
export const DxtButton = _DxtButton

// Utilities
export * from './functions/myFunction'
`})})]})}function p(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{p as default};
